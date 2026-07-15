# CHANGES / open items

Maintainer notes. Newest first.

---

## OPEN — do these next

### ⚑ TEATRO REGIO TORINO — ADD TO BIO
The homepage hero now lists Teatro Regio di Torino among the "major European houses"
(all 3 languages). Confirmed: Maciej sang there once. Right now it appears ONLY on the
homepage hero — no supporting mention in the bio, events, or press. Give it a home in the
bio (a `bio_p*` paragraph in translations.js, all 3 languages) so the hero claim is
corroborated by the About page. Until then it's an uncorroborated homepage-only claim.

### ⚑ OPERA TITLES — RESTRUCTURE LATER (with Fable)
Deferred by decision. Opera titles don't localise (*Die Zauberflöte* is not
*La Flûte enchantée* / *Czarodziejski flet*) on the events and press pages.
To be restructured in a dedicated pass "with Fable" — make `opera` language-keyed
objects the way `quote` and `detail` now are. Do NOT do piecemeal.
(Dates are DONE — see below.)

### ⚑ POLISH TEXT PASS — WHOLE SITE  (do this in one sitting)
Maciej wants to go through the Polish across every page and make corrections anyway.
Do it as one dedicated pass rather than piecemeal. Files with Polish text:

- **translations.js** — the `pl:` block. Nav, bio (bio_p1…bio_p9), events labels,
  press/contact/recordings headings. NOTE: the 2026/27 bio paragraph (`bio_p9`) and the
  past-tense rewrite of `bio_p7` are Claude's Polish — unreviewed.
- **press.js** — the `pl` slot of all 22 review quotes. Claude's translations of critics
  writing in French and Spanish. Highest-risk item on the site: unreviewed, and Maciej is
  the only person who'd catch an error.
- **events.js** — month abbreviations are hardcoded English (see date/title item below).

### ⚑ VERIFY THE FRENCH REVIEW TEXT  (press.js)
- **SAFE — do not touch:** the French originals of reviews published in French
  (Ôlyrix, Forum Opéra, Diapason, Bachtrack, Première Loge, Opéra Magazine). Maciej
  supplied these; they are the critics' real published wording.
- **NEEDS CHECKING:** the French renderings of the 4 Spanish reviews (El País, La Razón,
  Ópera Actual, Opera World), plus Orfeo (PL original) and Operawire (EN original).
  These are Claude's French, not the critics'.
- **NEEDS CHECKING + no byline:** ResMusica, Classica, Artistikrezo. Their French came
  from search snippets, not from Maciej, and no author name was found for any of them.

### ⚑ TRANSLATE OPERA TITLES  (press.js + events.js)
Opera titles stay as-is in all languages: *Die Zauberflöte* is not *La Flûte
enchantée* / *Czarodziejski flet*. Deferred — see the "OPERA TITLES" flag above.

### ⚑ TWO OFF-WHITES — #f0ece4 vs --text (#e8e0d5)
index/about/events/press use #f0ece4 for body text and headings; contact and
recordings use var(--text) = #e8e0d5. Two near-identical creams, one design.
Not merged in the cleanup pass because they render (barely) differently —
it's a design decision, not a mechanical one. Pick one, put it in :root.

### ⚑ EN EVENTS TITLE SAYS "Upcoming Events" — page shows Past too
FR ("Agenda") and PL ("Kalendarz") are neutral; the EN `events_title` isn't.
One-word fix ("Events" / "Calendar") — but it's English copy, so decide it.

### ⚑ EN "Dijon Opera" vs "Opéra de Dijon" — pick one
Venues are now localised (see DONE below), but the ENGLISH slot kept its old
wording: press.js says "Dijon Opera" while recordings.html says "Opéra de Dijon"
on the same English site. Same question for "Wrocław Opera" (press, EN) vs
"Opera Wrocławska" (events, EN). Decide the English convention (native house
names vs anglicised) and align — each is a one-line edit.

### ⚑ JULIETTA DATES
Real October 2026 dates were expected "in September." When you have them, in
`events.js` swap `dates: []` for the dates and delete the `tba` + `sortDate` lines
from the Julietta entry. Nothing else to touch.

### ⚑ REQUIEM BILLING
The Mozart Requiem entry (Philharmonie de Paris, 6 Dec 2026) lists Maciej as tenor
soloist, but the venue's page did not yet show his name at time of adding. Harmless,
but if anyone cross-checks it's unconfirmed until the Philharmonie updates its billing.

### ⚑ ABC (Madrid) REVIEW — dropped, no link
ABC's critic Alberto González Lapuente reviewed the Teatro Real run favourably
("se mostró vigoroso… en su recreación de Tybalt") but no direct URL was found —
only a reproduction inside Beckmesser's press round-up. Find the ABC link and it
can be added to press.js.

---

## DONE — cleanup pass (bugs, dead weight, tooling)

- **Page titles now translate on every page.** Previously only index.html had a
  `data-i18n-title` hook — and it pointed at `about_page_title` (the wrong key).
  Replaced with per-page keys `title_home … title_contact` in all 3 languages;
  every page's `<html>` tag now carries its hook. Hardcoded `<title>` separators
  normalised ("Contact | …" → "Contact — …, Tenor") to match.
- **lang.js hardened.** localStorage access wrapped in try/catch (blocked
  storage — e.g. cookies disabled — used to kill the whole language switcher),
  and applyTranslations now no-ops instead of throwing if translations.js
  failed to load. Matches the guards events.js/press.js already had.
- **Redundant double render removed.** On every page load, lang.js's init fired
  mk:langchange with the language events.js/press.js had already rendered in —
  causing a full second innerHTML rebuild for nothing. Both now skip when the
  language hasn't changed. Real switches re-render as before (tested).
- **press.js now emits the `single` class** for one-review productions —
  press.html has had CSS for it all along, but press.js never produced it.
- **check.js added** — the "integrity check" the README referenced but which
  never existed. `node check.js` verifies translations key parity, events data
  shape (date format, tba/sortDate, venue languages), and press data shape
  (quote/detail languages, urls, lang tags). Maintainer tool; no need to upload.
- **Hex → CSS variables** where values exactly matched :root tokens
  (#0e0e0e→--bg, #c9b99a→--gold, #9a8c78→--gold-dim, #2a2520→--border) in the
  four page style blocks + mobile.css (24 swaps). Changing --gold in site.css
  now actually restyles the whole site, as the README always claimed.
  Alpha variants (#c9b99a33/44) deliberately untouched.
- **mobile.css .event-dates-inline deduplicated** — styling lives in one place;
  the 640px media query only flips display. Effective values unchanged
  (mobile's 0.4rem/1.8 won before; they win now).

## DONE — dates + venues localised EN/FR/PL (events.js + press.js)

- **events.js** `venue` fields are now language-keyed { en, fr, pl } (plain
  string still works). Localised: Riga church + Latvia/Lettonie/Łotwa,
  Poland/Pologne/Polska, Opéra de Wrocław (FR), Opéra baltique (FR, matching the
  bio), Filharmonia Paryska / Opera w Montpellier / Opera w Tours (PL). Proper
  names (Teatro Real, Opéra Bastille, Grande salle Pierre Boulez, Opéra Comédie)
  unchanged in all languages. The homepage "next performance" title uses the
  localised venue too.
- **press.js** detail venues localised in FR/PL slots: Opéra de Wrocław /
  Opera Wrocławska, Opéra de Dijon / Opera w Dijon, Opera w Tours,
  Opera w Montpellier. Teatro Real and Opéra Bastille untouched (proper names).
  PL uses "Opera w Montpellier" — note the PL bio is inconsistent (bio_p5/p7
  "Operze Montpellier" vs bio_p9 "Operze w Montpellier"); settle in the bio pass.
- **events.js** also renders month names per language from a LOCALE table
  (short + full forms), flips day/month order ("Oct 18" vs "18 oct." / "18 paź"),
  and localises the TBA line ("October 2026 — TBA" / "Octobre 2026 — à confirmer" /
  "Październik 2026 — do potwierdzenia"). It re-renders on `mk:langchange`, the same
  mechanism press.js uses — so **events.js now also requires lang.js; upload the
  two together** (same rule as press.js).
- **press.js** `detail` fields are language-keyed objects `{ en, fr, pl }` like
  `quote`. Only the date portion was translated; venue text left identical (see
  open item above). A plain-string `detail` still works (shows unchanged in all
  languages) so old-style entries don't break.
- Month names in the events data are never written by hand — the LOCALE table in
  events.js handles them. Press `detail` dates ARE hand-written per language.

## DONE — press page overhaul (multilingual)

- **press.html converted to a data array** (`press.js`) — same pattern as events.js.
  Never hand-edit press HTML again; edit the PRODUCTIONS array.
- **Teatro Real, Madrid (May–Jun 2026) added** with 4 Spanish reviews:
  El País (Pablo L. Rodríguez), La Razón (Gonzalo Alonso), Ópera Actual (José María
  Marco), Opera World (Federico Figueroa). Platea Magazine and Madrid Actual were
  found but are unflattering — deliberately omitted.
- **3 previously-missing Bastille 2023 reviews added**: ResMusica, Classica, Artistikrezo.
- **Reviews are now fully multilingual.** Each `quote` has `en` / `fr` / `pl`. For a
  review published in French, the `fr` text is the critic's ACTUAL wording (supplied by
  Maciej) — never a back-translation. The `lang` tag shows the publication language so a
  translation is never mistaken for the original. `original` stores the source text.
- **lang.js now fires `mk:langchange`** (before applying translations) so press.js
  re-renders quotes on language switch. lang.js MUST be uploaded with press.js.
- English fixes: Opéra Magazine quote trimmed to match the French; Ôlyrix (Schöpfung)
  and Forum Opéra (Schöpfung) extended; "vocal placement" corrected to "middle register"
  (French: *le placement de son médium*).
- Orfeo (PL) quote re-read: "sustaining his lyrical tenor even where the role called for
  greater power" — the compliment reading, confirmed by Maciej as native speaker.

## DONE — earlier this session (2026/27 season update)

- Homepage + About subtitles: "Polish tenor" → **"Tenor"** (all 3 languages).
  Bio opening line still reads "Polish tenor" (intentional).
- Events season label: 2025–2026 → **2026–2027** (all 3 languages).
- Events schedule replaced with 2026/27 (in `events.js`):
  - Montalbetti — *Fragments pour une messe*, Riga (concert), 4 Sep 2026
  - Julietta (Michel), Wrocław — **Oct 2026, dates TBA**
  - Salome (Narraboth), Wrocław — 18–25 Oct 2026
  - **Mozart *Requiem* (tenor solo), Philharmonie de Paris — 6 Dec 2026 [NEW]**
  - *Le Baiser de la fée* (Rudy), Montpellier — 22–27 Dec 2026
  - Don Giovanni (Don Ottavio), Tours — 12–16 Mar 2027
  - Die Zauberflöte (Tamino), Gdańsk — **Jun 2027, dates TBA**
- `events.js`: TBA events with a known month now show "Mon YYYY" + "Month YYYY — TBA".
- New bio paragraph `bio_p9` (2026/27 season) added in EN/FR/PL, with Philharmonie
  debut, first Don Ottavio, Baltic Opera house debut, and Wrocław framed as a return.
- Bio `bio_p7` (2025/26) moved to **past tense** in all 3 languages so it reads as a
  completed season.
- French house name set to "l'Opéra baltique de Gdańsk".

## DONE — earlier sessions
- Extracted shared nav/footer into `layout.js`; shared CSS into `site.css`.
- Built `events.js` (data-driven, auto past/upcoming, auto homepage "next").
- Fixed broken `<title>` i18n hook; keyboard-accessible language switcher.
- Removed dead `-dark`/`-light` CSS variants from `mobile.css` and `lang.js`.
- Cleaned/corrected French translations.
