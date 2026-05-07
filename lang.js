/* lang.js — language switcher for maciejkwasnikowski.com
   Reads TRANSLATIONS from translations.js (must be loaded first).
   Usage: include both scripts at the bottom of every page, before </body>.
   <script src="translations.js"></script>
   <script src="lang.js"></script>
*/

(function () {
  const SUPPORTED = ['en', 'fr', 'pl'];
  const DEFAULT   = 'en';
  const LS_KEY    = 'mk_lang';

  /* ── 1. Determine active language ── */
  function getLang() {
    const stored = localStorage.getItem(LS_KEY);
    return SUPPORTED.includes(stored) ? stored : DEFAULT;
  }

  /* ── 2. Apply all data-i18n attributes ── */
  function applyTranslations(lang) {
    const t = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!(key in t)) return;
      // Use innerHTML so translations can contain <strong>, <em> etc.
      el.innerHTML = t[key];
    });

    /* Update <html lang="..."> */
    document.documentElement.lang = lang;

    /* Update page <title> if a data-i18n-title attribute exists on <html> */
    const titleKey = document.documentElement.getAttribute('data-i18n-title');
    if (titleKey && t[titleKey]) document.title = t[titleKey];
  }

  /* ── 3. Update switcher button states ── */
  function updateSwitcher(lang) {
    /* Handles .lang, .lang-dark, .lang-light variants */
    document.querySelectorAll('.lang span, .lang-dark span, .lang-light span').forEach(span => {
      const isActive = span.textContent.trim().toLowerCase() === lang;
      span.classList.toggle('active', isActive);
    });
  }

  /* ── 4. Full apply ── */
  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT;
    localStorage.setItem(LS_KEY, lang);
    applyTranslations(lang);
    updateSwitcher(lang);
  }

  /* ── 5. Wire up switcher clicks ── */
  function bindSwitcher() {
    document.querySelectorAll('.lang span, .lang-dark span, .lang-light span').forEach(span => {
      span.addEventListener('click', () => {
        setLang(span.textContent.trim().toLowerCase());
      });
    });
  }

  /* ── 6. Init on DOMContentLoaded ── */
  document.addEventListener('DOMContentLoaded', () => {
    bindSwitcher();
    setLang(getLang());
  });

})();
