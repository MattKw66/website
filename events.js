/* events.js — data-driven event list for maciejkwasnikowski.com
   ------------------------------------------------------------------
   You only ever edit the EVENTS array below. Everything else is automatic:
     • an event moves to "Past" by itself once its LAST date has gone by
     • events are sorted into date order
     • desktop and mobile date lists are both generated
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

   NOTE: "past" is decided from the visitor's own clock (this is browser-side
   JavaScript). That's fine for a portfolio. There is no server involved.
*/

const EVENTS = [
  {
    type: 'concert',
    opera: 'Fragments pour une messe',
    composer: 'Eric Montalbetti',
    venue: "St. Peter's Church · Riga, Latvia",
    link: 'https://koris.lv/en/events/29-ismf-poga-brahms-and-montalbetti/',
    dates: ['2026-09-04'],
  },
  {
    type: 'opera',
    role: 'Michel',
    opera: 'Julietta',
    composer: 'Bohuslav Martinů',
    venue: 'Opera Wrocławska · Wrocław, Poland',
    dates: [],
    tba: true,
    sortDate: '2026-09-20',   // approximate — keeps it before Salome
  },
  {
    type: 'opera',
    role: 'Narraboth',
    opera: 'Salome',
    composer: 'Richard Strauss',
    venue: 'Opera Wrocławska · Wrocław, Poland',
    link: 'https://www.opera.wroclaw.pl/salome-richard-strauss',
    dates: ['2026-10-18', '2026-10-21', '2026-10-23', '2026-10-25'],
  },
  {
    type: 'opera',
    role: 'Rudy',
    opera: 'Le Baiser de la fée',
    composer: 'Théodore Akimenko',
    venue: 'Opéra de Montpellier — Opéra Comédie',
    link: 'https://www.opera-orchestre-montpellier.fr/evenements/le-baiser-de-la-fee/',
    dates: ['2026-12-22', '2026-12-23', '2026-12-27'],
  },
  {
    type: 'opera',
    role: 'Don Ottavio',
    opera: 'Don Giovanni',
    composer: 'W. A. Mozart',
    venue: 'Grand Théâtre de Tours · Opéra de Tours',
    link: 'https://operadetours.fr/fr/programmation/don-giovanni-wolfgang-amadeus-mozart-1756-1791',
    dates: ['2027-03-12', '2027-03-14', '2027-03-16'],
  },
  {
    type: 'opera',
    role: 'Tamino',
    opera: 'Die Zauberflöte',
    composer: 'W. A. Mozart',
    venue: 'Opera Bałtycka · Gdańsk, Poland',
    dates: [],
    tba: true,
    sortDate: '2027-06-01',   // approximate — keeps it after Don Giovanni
  },
];

/* expose for other pages (e.g. a homepage "next performance" block) */
window.EVENTS = EVENTS;

(function () {
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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
  function datesList(ev) {
    return ev.dates.map(s => {
      const d = parseDate(s);
      return MONTHS[d.getMonth()] + ' ' + d.getDate();
    }).join('<br>');
  }

  function eventHTML(ev) {
    const classes = ['event'];
    if (isPast(ev)) classes.push('past');
    if (ev.type === 'concert') classes.push('event-type-concert');

    let dateCol;
    if (ev.tba) {
      const yr = ev.sortDate ? parseDate(ev.sortDate).getFullYear() : '';
      dateCol =
        '<span class="event-day" style="font-size:1.3rem;letter-spacing:0.1em;" data-i18n="events_tba">TBA</span>' +
        (yr ? '<span class="event-year-small">' + yr + '</span>' : '');
    } else {
      const f = firstDate(ev);
      dateCol =
        '<span class="event-month">' + MONTHS[f.getMonth()] + '</span>' +
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

    const datesRight = ev.tba
      ? '<div class="event-dates-list" data-i18n="events_tba_dates">Dates to be announced</div>'
      : '<div class="event-dates-list">' + datesList(ev) + '</div>';

    const datesInline = ev.tba
      ? '<div class="event-dates-inline" data-i18n="events_tba_dates">Dates to be announced</div>'
      : '<div class="event-dates-inline">' + datesList(ev) + '</div>';

    return (
      '<div class="' + classes.join(' ') + '">' +
        '<div class="event-date">' + dateCol + '</div>' +
        '<div class="event-info">' +
          roleLine +
          '<p class="event-opera">' + escapeHTML(ev.opera) + '</p>' +
          '<p class="event-composer">' + escapeHTML(ev.composer) + '</p>' +
          '<p class="event-venue">' + escapeHTML(ev.venue) + '</p>' +
          linkLine +
          datesInline +
        '</div>' +
        '<div class="event-dates-right">' + datesRight + '</div>' +
      '</div>'
    );
  }

  const upcoming = EVENTS.filter(e => !isPast(e)).sort((a, b) => firstDate(a) - firstDate(b));
  const past     = EVENTS.filter(isPast).sort((a, b) => lastDate(b) - lastDate(a));

  /* ── 1) Events page: full list (only on pages that have the container) ── */
  const container = document.querySelector('.events-container');
  if (container) {
    let html = '';
    if (upcoming.length) {
      html += '<div class="year-divider"><span class="year-label" data-i18n="events_upcoming">Upcoming</span><div class="year-line"></div></div>';
      html += upcoming.map(eventHTML).join('');
    }
    if (past.length) {
      html += '<div class="year-divider" style="margin-top:2rem;"><span class="year-label" data-i18n="events_past">Past</span><div class="year-line"></div></div>';
      html += past.map(eventHTML).join('');
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
          escapeHTML(next.opera + ' — ' + next.venue) + '</a>';
      }
      if (detailEl) {
        detailEl.innerHTML = next.type === 'concert'
          ? '<span data-i18n="concert_label">Tenor solo · Concert</span> · ' + escapeHTML(next.composer)
          : '<span data-i18n="role_label">Role</span>: ' + escapeHTML(next.role) + ' · ' + escapeHTML(next.composer);
      }
    }
  }
})();
