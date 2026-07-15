#!/usr/bin/env node
/* check.js — pre-upload integrity check for maciejkwasnikowski.com
   -----------------------------------------------------------------
   Run from the site folder:   node check.js
   Exits non-zero if anything is broken. Maintainer tool only — do not
   upload (harmless if you do, like README.md / CHANGES.md).

   What it verifies:
   • translations.js — en / fr / pl blocks have exactly the same keys
   • events.js       — date format, tba entries have a sortDate,
                       venue objects have all three languages
   • press.js        — every quote and detail has en / fr / pl,
                       urls look like urls, lang tag is sane
*/

const fs = require('fs');
const vm = require('vm');

let errors = 0, warnings = 0;
const err  = m => { errors++;   console.log('  ✗ ' + m); };
const warn = m => { warnings++; console.log('  ⚠ ' + m); };

function loadInSandbox(file, exportExpr) {
  const sandbox = {
    window: {},
    document: { querySelector: () => null, addEventListener: () => {} },
    localStorage: { getItem: () => null, setItem: () => {} },
    console,
  };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(file, 'utf8') + ';this.__x = ' + exportExpr + ';', sandbox);
  return sandbox.__x;
}

const LANGS = ['en', 'fr', 'pl'];

/* ── translations.js ── */
console.log('translations.js');
const T = loadInSandbox('translations.js', 'TRANSLATIONS');
const allKeys = new Set(LANGS.flatMap(l => Object.keys(T[l] || {})));
for (const l of LANGS) {
  if (!T[l]) { err(`language block "${l}" missing entirely`); continue; }
  const missing = [...allKeys].filter(k => !(k in T[l]));
  if (missing.length) err(`"${l}" missing keys: ${missing.join(', ')}`);
  for (const [k, v] of Object.entries(T[l]))
    if (v === '') warn(`"${l}.${k}" is an empty string (intentional? it renders as nothing)`);
}
if (!errors) console.log(`  ✓ key parity: ${allKeys.size} keys in all of ${LANGS.join('/')}`);

/* ── events.js ── */
console.log('events.js');
const EVENTS = loadInSandbox('events.js', 'window.EVENTS');
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
EVENTS.forEach((ev, i) => {
  const label = `EVENTS[${i}] (${ev.opera})`;
  if (!ev.opera) err(`EVENTS[${i}] has no opera/title`);
  if (ev.type !== 'concert' && !ev.role) err(`${label}: type '${ev.type}' but no role`);
  (ev.dates || []).forEach(d => { if (!DATE_RE.test(d)) err(`${label}: bad date "${d}" (want YYYY-MM-DD)`); });
  const sorted = [...(ev.dates || [])].sort();
  if (JSON.stringify(sorted) !== JSON.stringify(ev.dates || [])) warn(`${label}: dates not in ascending order`);
  if (ev.tba && (ev.dates || []).length) err(`${label}: tba:true but dates present — pick one`);
  if (ev.tba && !ev.sortDate) warn(`${label}: tba without sortDate — will sink to the bottom of the list`);
  if (ev.sortDate && !DATE_RE.test(ev.sortDate)) err(`${label}: bad sortDate "${ev.sortDate}"`);
  if (ev.link && !/^https?:\/\//.test(ev.link)) err(`${label}: link doesn't start with http(s)`);
  if (ev.venue && typeof ev.venue === 'object')
    LANGS.forEach(l => { if (!ev.venue[l]) err(`${label}: venue missing "${l}"`); });
  else if (typeof ev.venue === 'string') warn(`${label}: venue is a plain string (shown identically in all languages)`);
  else err(`${label}: no venue`);
});
if (EVENTS.length) console.log(`  ✓ ${EVENTS.length} events checked`);

/* ── press.js ── */
console.log('press.js');
const PRODUCTIONS = loadInSandbox('press.js', 'window.PRODUCTIONS');
PRODUCTIONS.forEach((p, i) => {
  const label = `PRODUCTIONS[${i}] (${p.opera})`;
  if (!p.role) err(`${label}: no role`);
  if (p.detail && typeof p.detail === 'object')
    LANGS.forEach(l => { if (!p.detail[l]) err(`${label}: detail missing "${l}"`); });
  else if (typeof p.detail === 'string') warn(`${label}: detail is a plain string (shown identically in all languages)`);
  else err(`${label}: no detail`);
  (p.reviews || []).forEach((r, j) => {
    const rl = `${label} review[${j}] (${r.publication || '?'})`;
    LANGS.forEach(l => { if (!r.quote || !r.quote[l]) err(`${rl}: quote missing "${l}"`); });
    if (!r.publication) err(`${rl}: no publication`);
    if (r.url && !/^https?:\/\//.test(r.url)) err(`${rl}: url doesn't start with http(s)`);
    if (r.lang && !['EN', 'FR', 'PL', 'ES'].includes(r.lang)) warn(`${rl}: unusual lang tag "${r.lang}"`);
    if (!r.lang) warn(`${rl}: no lang tag — reader can't tell original from translation`);
    if (r.lang && !r.original && r.lang !== 'EN') warn(`${rl}: no 'original' stored for a non-EN review`);
  });
});
if (PRODUCTIONS.length) console.log(`  ✓ ${PRODUCTIONS.length} productions checked`);

/* ── verdict ── */
console.log('');
if (errors)  { console.log(`FAILED: ${errors} error(s), ${warnings} warning(s)`); process.exit(1); }
console.log(`PASSED${warnings ? ` with ${warnings} warning(s)` : ''}`);
