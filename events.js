/* events.js — data-driven event list for maciejkwasnikowski.com
   ------------------------------------------------------------------
   You only ever edit the EVENTS array below. Everything else is automatic:
     • an event moves to "Past" by itself once its LAST date has gone by
     • events are sorted into date order
     • desktop and mobile date lists are both generated
     • dates render in the visitor's language (EN / FR / PL) and re-render
       when the language switcher is used (listens for mk:langchange from
       lang.js — upload events.js and lang.js together)
   It runs on any page that contains <div class="events-container">.

   HOW TO EDIT
   -----------
   • Add an event: copy a block, fill it in. Dates are "YYYY-MM-DD".
   • Multi-date run: list every performance date in `dates`. The opening
     date becomes the big date on the left; all dates show in the column.
   • Concert / oratorio (no character): set type: 'concert' and omit `role`.
   • Dates not announced yet: leave dates: [] , set tba: true , and give an
     approximate `sortDate` so the event lands in the right spot in the list.
   • No ticket page yet: omit `link`.
   • `venue` is language-keyed: { en, fr, pl }. Proper names (Teatro Real,
     Opéra Bastille…) repeat unchanged; only descriptive parts and country
     names differ. A plain string still works (shown in all languages).
   • Month names live in the LOCALE table inside the renderer below — you
     never write month names in the data; they localise automatically.

   NOTE: "past" is decided from the visitor's own clock (this is browser-side
   JavaScript). That's fine for a portfolio. There is no server involved.
*/

const EVENTS = [
  {
    type: 'concert',
    opera: 'Fragments pour une messe',
    composer: 'Eric Montalbetti',
    venue: {
      en: "St. Peter's Church · Riga, Latvia",
      fr: "Église Saint-Pierre · Riga, Lettonie",
      pl: "Kościół św. Piotra · Ryga, Łotwa",
    },
    link: 'https://koris.lv/en/events/29-ismf-poga-brahms-and-montalbetti/',
    dates: ['2026-09-04'],
  },
  {
    type: 'opera',
    role: 'Michel',
    opera: 'Julietta',
    composer: 'Bohuslav Martinů',
    venue: {
      en: "Opera Wrocławska · Wrocław, Poland",
      fr: "Opéra de Wrocław · Wrocław, Pologne",
      pl: "Opera Wrocławska · Wrocław, Polska",
    },
    dates: [],
    tba: true,
    sortDate: '2026-10-01',   // October 2026 — exact dates TBA; keeps it before Salome
  },
  {
    type: 'opera',
    role: 'Narraboth',
    opera: 'Salome',
    composer: 'Richard Strauss',
    venue: {
      en: "Opera Wrocławska · Wrocław, Poland",
      fr: "Opéra de Wrocław · Wrocław, Pologne",
      pl: "Opera Wrocławska · Wrocław, Polska",
    },
    link: 'https://www.opera.wroclaw.pl/salome-richard-strauss',
    dates: ['2026-10-18', '2026-10-21', '2026-10-23', '2026-10-25'],
  },
  {
    type: 'concert',
    opera: 'Requiem',
    composer: 'W. A. Mozart',
    venue: {
      en: "Philharmonie de Paris — Grande salle Pierre Boulez",
      fr: "Philharmonie de Paris — Grande salle Pierre Boulez",
      pl: "Filharmonia Paryska — Grande salle Pierre Boulez",
    },
    link: 'https://philharmoniedeparis.fr/fr/activite/concert-vocal/29332-wolfgang-amadeus-mozart-requiem?itemId=145792',
    dates: ['2026-12-06'],
  },
  {
    type: 'opera',
    role: 'Rudy',
    opera: 'Le Baiser de la fée',
    composer: 'Théodore Akimenko',
    venue: {
      en: "Opéra de Montpellier — Opéra Comédie",
      fr: "Opéra de Montpellier — Opéra Comédie",
      pl: "Opera w Montpellier — Opéra Comédie",
    },
    link: 'https://www.opera-orchestre-montpellier.fr/evenements/le-baiser-de-la-fee/',
    dates: ['2026-12-22', '2026-12-23', '2026-12-27'],
  },
  {
    type: 'opera',
    role: 'Don Ottavio',
    opera: 'Don Giovanni',
    composer: 'W. A. Mozart',
    venue: {
      en: "Grand Théâtre de Tours · Opéra de Tours",
      fr: "Grand Théâtre de Tours · Opéra de Tours",
      pl: "Grand Théâtre de Tours · Opera w Tours",
    },
    link: 'https://operadetours.fr/fr/programmation/don-giovanni-wolfgang-amadeus-mozart-1756-1791',
    dates: ['2027-03-12', '2027-03-14', '2027-03-16'],
  },
  {
    type: 'opera',
    role: 'Tamino',
    opera: 'Die Zauberflöte',
    composer: 'W. A. Mozart',
    venue: {
      en: "Opera Bałtycka · Gdańsk, Poland",
      fr: "Opéra baltique · Gdańsk, Pologne",
      pl: "Opera Bałtycka · Gdańsk, Polska",
    },
    dates: [],
    tba: true,
    sortDate: '2027-06-01',   // approximate — keeps it after Don Giovanni
  },
];

/* expose for other pages (e.g. a homepage "next performance" block) */
window.EVENTS = EVENTS;

(function () {
  /* ── Localisation table ──
     months:     short forms used in the big date column and date lists
     monthsFull: used for "October 2026 — TBA" style lines
     dayMonth:   order of day + month ("Oct 18" vs "18 oct.")
     tba:        suffix for known-month-but-no-dates events              */
  const LOCALE = {
    en: {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
               'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      monthsFull: ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December'],
      dayMonth: (day, mon) => mon + ' ' + day,
      tba: 'TBA',
    },
    fr: {
      months: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin',
               'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
      monthsFull: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
                   'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
      dayMonth: (day, mon) => day + ' ' + mon,
      tba: 'à confirmer',
    },
    pl: {
      months: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze',
               'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
      monthsFull: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec',
                   'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],
      dayMonth: (day, mon) => day + ' ' + mon,
      tba: 'do potwierdzenia',
    },
  };
  const SUPPORTED = ['en', 'fr', 'pl'];
  const DEFAULT = 'en';

  function currentLang() {
    try {
      const l = localStorage.getItem('mk_lang');
      return SUPPORTED.includes(l) ? l : DEFAULT;
    } catch (e) { return DEFAULT; }
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  function parseDate(s) {
    const [y, m, d] = s.split('-').map(Number);
    return new Date(y, m - 1, d);
  }
  function firstDate(ev) {
    if (ev.dates && ev.dates.length) return parseDate(ev.dates[0]);
    return ev.sortDate ? parseDate(ev.sortDate) : new Date(8640000000000000);
  }
  function lastDate(ev) {
    if (ev.dates && ev.dates.length) return parseDate(ev.dates[ev.dates.length - 1]);
    return null;
  }
  function isPast(ev) {
    const last = lastDate(ev);
    return last ? last < today : false; // a run stays "upcoming" through its final night; TBA is never past
  }
  function escapeHTML(str) {
    return String(str).replace(/[&<>"]/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }
  function venueText(ev, lang) {
    const v = ev.venue;
    if (!v) return '';
    return typeof v === 'string' ? v : (v[lang] || v[DEFAULT] || '');
  }
  function cap(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  function datesList(ev, L) {
    return ev.dates.map(s => {
      const d = parseDate(s);
      return L.dayMonth(d.getDate(), L.months[d.getMonth()]);
    }).join('<br>');
  }

  function eventHTML(ev, L, lang) {
    const classes = ['event'];
    if (isPast(ev)) classes.push('past');
    if (ev.type === 'concert') classes.push('event-type-concert');

    let dateCol, tbaText = null;
    if (ev.tba) {
      const sd = ev.sortDate ? parseDate(ev.sortDate) : null;
      if (sd) {
        // Month known, exact dates not yet confirmed → "oct / 2026" + "October 2026 — TBA"
        dateCol =
          '<span class="event-day" style="font-size:1.5rem;letter-spacing:0.06em;">' + L.months[sd.getMonth()] + '</span>' +
          '<span class="event-year-small">' + sd.getFullYear() + '</span>';
        tbaText = cap(L.monthsFull[sd.getMonth()]) + ' ' + sd.getFullYear() + ' — ' + L.tba;
      } else {
        // Nothing known yet
        dateCol = '<span class="event-day" style="font-size:1.3rem;letter-spacing:0.1em;" data-i18n="events_tba">TBA</span>';
      }
    } else {
      const f = firstDate(ev);
      dateCol =
        '<span class="event-month">' + L.months[f.getMonth()] + '</span>' +
        '<span class="event-day">' + f.getDate() + '</span>' +
        '<span class="event-year-small">' + f.getFullYear() + '</span>';
    }

    const roleLine = ev.type === 'concert'
      ? '<p class="event-role" data-i18n="concert_label">Tenor solo · Concert</p>'
      : '<p class="event-role"><span data-i18n="role_label">Role</span>: ' + escapeHTML(ev.role) + '</p>';

    const linkLine = ev.link
      ? '<a href="' + escapeHTML(ev.link) + '" class="event-link" target="_blank" rel="noopener">' +
        '<span data-i18n="event_page_link">Event page ↗</span></a>'
      : '';

    let datesRight, datesInline;
    if (ev.tba && tbaText) {
      datesRight  = '<div class="event-dates-list">' + tbaText + '</div>';
      datesInline = '<div class="event-dates-inline">' + tbaText + '</div>';
    } else if (ev.tba) {
      datesRight  = '<div class="event-dates-list" data-i18n="events_tba_dates">Dates to be announced</div>';
      datesInline = '<div class="event-dates-inline" data-i18n="events_tba_dates">Dates to be announced</div>';
    } else {
      datesRight  = '<div class="event-dates-list">' + datesList(ev, L) + '</div>';
      datesInline = '<div class="event-dates-inline">' + datesList(ev, L) + '</div>';
    }

    return (
      '<div class="' + classes.join(' ') + '">' +
        '<div class="event-date">' + dateCol + '</div>' +
        '<div class="event-info">' +
          roleLine +
          '<p class="event-opera">' + escapeHTML(ev.opera) + '</p>' +
          '<p class="event-composer">' + escapeHTML(ev.composer) + '</p>' +
          '<p class="event-venue">' + escapeHTML(venueText(ev, lang)) + '</p>' +
          linkLine +
          datesInline +
        '</div>' +
        '<div class="event-dates-right">' + datesRight + '</div>' +
      '</div>'
    );
  }

  const upcoming = EVENTS.filter(e => !isPast(e)).sort((a, b) => firstDate(a) - firstDate(b));
  const past     = EVENTS.filter(isPast).sort((a, b) => lastDate(b) - lastDate(a));

  let renderedLang = null;

  function render(lang) {
    renderedLang = lang;
    const L = LOCALE[lang] || LOCALE[DEFAULT];

    /* ── 1) Events page: full list (only on pages that have the container) ── */
    const container = document.querySelector('.events-container');
    if (container) {
      let html = '';
      if (upcoming.length) {
        html += '<div class="year-divider"><span class="year-label" data-i18n="events_upcoming">Upcoming</span><div class="year-line"></div></div>';
        html += upcoming.map(ev => eventHTML(ev, L, lang)).join('');
      }
      if (past.length) {
        html += '<div class="year-divider" style="margin-top:2rem;"><span class="year-label" data-i18n="events_past">Past</span><div class="year-line"></div></div>';
        html += past.map(ev => eventHTML(ev, L, lang)).join('');
      }
      container.innerHTML = html;
    }

    /* ── 2) Homepage: auto-fill the "next performance" block ──
       Picks the first upcoming event and writes it in. The label part
       ("Role" / "Tenor solo · Concert") stays a data-i18n hook so the
       language switcher still translates it; the rest is proper nouns. */
    const nextWrap = document.querySelector('.next-event-dark');
    if (nextWrap) {
      const titleEl  = nextWrap.querySelector('.next-event-title-dark');
      const detailEl = nextWrap.querySelector('.next-event-detail-dark');
      const next = upcoming[0];

      if (!next) {
        // nothing upcoming — hide the block rather than show a stale event
        nextWrap.style.display = 'none';
      } else {
        if (titleEl) {
          titleEl.innerHTML = '<a href="events.html">' +
            escapeHTML(next.opera + ' — ' + venueText(next, lang)) + '</a>';
        }
        if (detailEl) {
          detailEl.innerHTML = next.type === 'concert'
            ? '<span data-i18n="concert_label">Tenor solo · Concert</span> · ' + escapeHTML(next.composer)
            : '<span data-i18n="role_label">Role</span>: ' + escapeHTML(next.role) + ' · ' + escapeHTML(next.composer);
        }
      }
    }
  }

  /* initial render */
  render(currentLang());

  /* re-render when the visitor switches language (event fired by lang.js
     BEFORE it applies translations, so the data-i18n hooks in the fresh
     markup are translated right after this runs) */
  document.addEventListener('mk:langchange', e => {
    const l = (e.detail && e.detail.lang) || currentLang();
    if (l !== renderedLang) render(l); // initial load fires this with the same lang — skip
  });
})();
