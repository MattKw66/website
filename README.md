# maciejkwasnikowski.com — maintainer guide

Static multilingual (EN/FR/PL) site. No build step, no framework, no server code.
You edit files and upload them. That's the whole workflow.

> **These three files (`README.md`, `CHANGES.md`, `check.js`) are for you, the maintainer.**
> They don't need to be on the live server. Uploading them is harmless (nobody
> links to them), but they do nothing for visitors.

---

## What each file does

| File | Role | Edit it when… |
|------|------|---------------|
| `index.html` | Homepage (hero + auto "next performance") | Rarely. The next-performance block fills itself from `events.js`. |
| `about.html` | Biography + sidebar facts | Bio text changes. Bio paragraphs live in `translations.js` (keys `bio_p1`…`bio_p9`); the page just holds `data-i18n` hooks + an English fallback. |
| `events.html` | Schedule page shell | Almost never. The list is rendered by `events.js`. |
| `press.html` | Page shell only | Almost never. Reviews are rendered by `press.js`. |
| `recordings.html` | YouTube embeds | Add/replace an `iframe` block. |
| `contact.html` | Agent + direct contact | Contact details change. |
| `events.js` | **The schedule data + render engine** | **Any schedule change happens here, in the `EVENTS` array.** |
| `press.js` | **The reviews data + render engine** | **Any press change happens here, in the `PRODUCTIONS` array.** |
| `translations.js` | All EN/FR/PL strings | Any text that appears in more than one language. |
| `layout.js` | Shared nav + footer markup | Nav links, social links, logo. Changes once, applies to every page. |
| `lang.js` | Language switcher logic | Basically never. |
| `site.css` | Shared base, colours, nav, footer | Site-wide look. Colours are CSS variables in `:root`. |
| `mobile.css` | Responsive overrides | Mobile/tablet layout tweaks. |

Images (`photo-home.jpg`, `photo-about.jpg`) live on the server, not in the repo/zip.

---

## The three things you'll actually do

### 1. Update the schedule → edit `events.js` ONLY
Open `events.js`, edit the `EVENTS` array at the top. Each entry:

```js
{
  type: 'opera',              // or 'concert' (concert = tenor-solo, no role line)
  role: 'Narraboth',          // omit for concerts
  opera: 'Salome',
  composer: 'Richard Strauss',
  venue: {                    // language-keyed; a plain string also works
    en: 'Opera Wrocławska · Wrocław, Poland',
    fr: 'Opéra de Wrocław · Wrocław, Pologne',
    pl: 'Opera Wrocławska · Wrocław, Polska',
  },
  link: 'https://…',          // omit if no ticket page yet
  dates: ['2026-10-18', '2026-10-21'],   // every performance date
}
```

Proper names (Teatro Real, Opéra Bastille…) repeat unchanged across the three
slots; only descriptive parts and country names differ.

- **Dates not yet announced, month known:** leave `dates: []`, add `tba: true` and
  `sortDate: '2026-10-01'`. The page shows the month + "October 2026 — TBA".
- **Past events move themselves.** Once the last date passes, the event drops to
  "Past" automatically (judged by the visitor's clock). You never mark anything past.
- Order is automatic (by date). `sortDate` only positions TBA events.
- **Dates localise themselves.** Month names, day/month order and the TBA line
  render in the visitor's language (EN/FR/PL) from the LOCALE table inside
  events.js — never write month names in the data. Because events.js re-renders
  on language switch, **events.js and lang.js must be uploaded together** (same
  rule as press.js).

### 2. Add a review → edit `press.js` ONLY
Open `press.js`, edit the `PRODUCTIONS` array. Newest production first. Each review:

```js
{
  quote: {
    en: "…",   // English
    fr: "…",   // French — if the review WAS published in French, this is the
    pl: "…",   // critic's actual wording, never a back-translation. Polish.
  },
  original: "…",              // source text as published (stored, not displayed)
  author: "Charles Arden",    // optional — omit if unsigned
  publication: "Ôlyrix",
  url: "https://…",
  lang: "FR",                 // language the review was PUBLISHED in
}
```

Each PRODUCTION's `detail` line (venue · dates) is also language-keyed:

```js
detail: {
  en: "Opéra Bastille · Jun–Jul 2023",
  fr: "Opéra Bastille · juin–juillet 2023",
  pl: "Opéra Bastille · czerwiec–lipiec 2023",
},
```

Write the month names by hand in each language — press dates are plain text,
not computed. (Events-page dates ARE computed; see below.)

The `lang` tag is shown next to the outlet so a reader always knows when they're
reading a translation. Quotes re-render automatically when the visitor switches
language — this relies on `lang.js` firing `mk:langchange`, so **`lang.js` and
`press.js` must be uploaded together.**

### 3. Change shared text → edit `translations.js`
Every visible string has a key in three blocks: `en`, `fr`, `pl`.
**If you add a key, add it to all three** or that language shows nothing for it.
(The integrity check catches this — see below.)

---

## Before you upload: 2-minute checks

1. `node check.js` — THE integrity check. Verifies en/fr/pl key parity in
   translations.js, date formats and venue completeness in events.js, and
   quote/detail language completeness in press.js. Fails loudly with the exact
   key/entry that's wrong. (It also catches syntax errors, since it loads the
   files.)
2. `node --check layout.js lang.js` — the two files check.js doesn't load.
3. Open all six pages in a browser, switch EN/FR/PL on each, resize to phone width once.
   Static checks can't see layout; your eyes are the only test for that.

## Deploy
Overwrite the files in your web root. That's it. `mobile.css` rarely changes but
re-uploading everything is safe.
