/* translations.js — Maciej Kwaśnikowski website
   All translatable strings for EN / FR / PL.
   Keys mirror data-i18n attributes in the HTML pages. */

const TRANSLATIONS = {

  /* ─────────────────────────────────────────────
     SHARED — nav & footer (appear on every page)
     ───────────────────────────────────────────── */
  en: {
    // Nav links
    nav_home:        "Home",
    nav_about:       "About",
    nav_events:      "Events",
    nav_recordings:  "Recordings",
    nav_press:       "Press",
    nav_contact:     "Contact",

    // Footer
    footer_copyright: "© Maciej Kwaśnikowski 2026",

    /* ── INDEX ── */
    hero_subtitle:   "Tenor",
    hero_bio:        "A graduate of the Metropolitan Opera's prestigious Lindemann Program, praised by international critics for his vocal technique, timbre and stagecraft, he appears regularly on the stages of Europe's leading opera houses — the Staatsoper Berlin, Teatro Real de Madrid, Teatro Regio di Torino and the Opéra national de Paris.",
    next_label:      "Next performances",

    /* ── ABOUT ── */
    title_home:        "Maciej Kwaśnikowski — Tenor",
    title_about:       "About — Maciej Kwaśnikowski, Tenor",
    title_events:      "Events — Maciej Kwaśnikowski, Tenor",
    title_recordings:  "Recordings — Maciej Kwaśnikowski, Tenor",
    title_press:       "Press — Maciej Kwaśnikowski, Tenor",
    title_contact:     "Contact — Maciej Kwaśnikowski, Tenor",
    about_hero_subtitle:"Tenor",
    photo_credit:        "© Julien Benhamou / l'AROP — with Benjamin d'Anfray at the Palais Garnier",
    sidebar_voice:       "Voice",
    sidebar_voice_val:   "Lyric tenor",
    sidebar_training:    "Training",
    sidebar_awards:      "Awards",
    sidebar_award1:      "Prix Lyrique de l'AROP",
    sidebar_award1_year: "2019",
    sidebar_award2:      "Prix Lyrique du Cercle Carpeaux",
    sidebar_award2_year: "2018",
    sidebar_studies:     "Studies with",
    sidebar_studies_val: "Neil Shicoff",
    sidebar_also:        "Also",
    sidebar_degree:      "B.Sc. in Engineering Physics<br>Poznań University of Technology, 2017",
    bio_intro: "\"His naturally powerful and light voice in the middle and upper registers allows him to easily dominate the space with a brilliant timbre.\"",
    bio_p1: "Polish tenor <strong>Maciej Kwaśnikowski</strong> was born in Poznań and started singing at the age of 9 as a boy soprano. He began formal vocal studies with Polish countertenor <strong>Robert Nakoneczny</strong> in 2014, and in 2015 entered the Warsaw Opera Academy at the Polish National Opera, where he worked with Izabela Kłosińska, Eytan Pessen and Matthias Rexroth.",
    bio_p2: "In 2017, alongside his musical training, he earned a degree in engineering physics from the Poznań University of Technology. That same year he sang the role of Florville in Rossini's <em>Il Signor Bruschino</em> with the Orchestre national d'Île-de-France under <strong>Enrique Mazzola</strong>, and entered the Académie de l'Opéra national de Paris. He was also part of the Young Singers Project of the Salzburger Festspiele and the Académie du Festival d'Aix-en-Provence.",
    bio_p3: "During his tenure at the Académie de l'Opéra de Paris he performed as Alfred in <em>Die Fledermaus</em> and as the Young Gentleman in Philippe Boesmans' <em>Reigen</em>. He was awarded the Prix Lyrique du Cercle Carpeaux (2018) and the Prix Lyrique de l'AROP (2019).",
    bio_p4: "In 2019 he joined the prestigious <strong>Lindemann Program at the Metropolitan Opera</strong>. His MET debut as Young Sailor in Wagner's <em>Tristan und Isolde</em>, alongside other engagements, was cancelled due to the COVID-19 pandemic.",
    bio_p5: "He has performed tenor solos in major oratorio works by Bach, Handel and Mozart, and notably in Schubert's Mass in E-flat Major with the <strong>Wiener Philharmoniker</strong> at the Salzburg Festival (2018) and with the <strong>Symphonieorchester des Bayerischen Rundfunks</strong> in Munich (2019), both under <strong>Riccardo Muti</strong>. A frequent guest at the Salzburg Festival, he sang the Schubert Mass again in 2022 with Camerata Salzburg under <strong>Franz Welser-Möst</strong>, and performed Mozart's Coronation Mass with Mozarteum Orchestra under <strong>Roberto González-Monjas</strong> in 2023. In 2024 he added Haydn's <em>The Creation</em> to his repertoire at the Montpellier Opera.",
    bio_p6: "Since the 2021/2022 season Maciej has appeared in numerous productions of the <strong>Paris Opera</strong>, notably as Tybalt in a new production of Gounod's <em>Roméo et Juliette</em> conducted by Carlo Rizzi, and as Young Sailor and Shepherd in Peter Sellars' production of Wagner's <em>Tristan und Isolde</em> conducted by <strong>Gustavo Dudamel</strong>, always to high critical acclaim. In 2025 he made his role and house debut at the Polish National Opera as Tamino in Mozart's <em>Die Zauberflöte</em>.",
    bio_p7: "In the 2025/2026 season he sang Beppe in Leoncavallo's <em>Pagliacci</em> and the tenor solo in Mozart's Coronation Mass at the Montpellier Opera, Tybalt in Gounod's <em>Roméo et Juliette</em> at the <strong>Staatsoper Berlin</strong> and <strong>Teatro Real de Madrid</strong>, Narraboth in Strauss' <em>Salome</em> and Michel in Martinů's <em>Julietta</em> at the Wrocław Opera, and Alméric in Tchaikovsky's <em>Iolanta</em> at the Rouen Opera.",
    bio_p8: "Maciej has been studying voice with <strong>Neil Shicoff</strong> since 2016.",
    bio_p9: "In the 2026/2027 season, Maciej appears in concert as tenor soloist in Eric Montalbetti's <em>Fragments pour une messe</em> in Riga and, making his debut at the <strong>Philharmonie de Paris</strong>, in Mozart's <em>Requiem</em> with the <strong>Orchestre de chambre de Paris</strong> under <strong>Ton Koopman</strong>. At the <strong>Wrocław Opera</strong> he returns to the roles of Narraboth in Strauss' <em>Salome</em> and Michel in Martinů's <em>Julietta</em>, and creates the role of Rudy in the world premiere of Akimenko's <em>Le Baiser de la fée</em> at the <strong>Opéra de Montpellier</strong>. He also takes on his first Don Ottavio in Mozart's <em>Don Giovanni</em> at the <strong>Opéra de Tours</strong> and makes his house debut at the <strong>Baltic Opera in Gdańsk</strong> as Tamino in Mozart's <em>Die Zauberflöte</em>.",

    /* ── EVENTS ── */
    events_title:       "Upcoming Events",
    events_subtitle:    "2026 — 2027 Season",
    events_upcoming:    "Upcoming",
    events_past:        "Past",
    events_tba:         "TBA",
    events_tba_dates:   "Dates to be announced",
    event_page_link:    "Event page ↗",
    role_label:         "Role",
    concert_label:      "Tenor solo · Concert",

    /* ── RECORDINGS ── */
    recordings_title:    "Recordings",
    recordings_subtitle: "Selected performances & recitals",

    /* ── PRESS ── */
    press_title:    "Press",
    press_subtitle: "Selected reviews",

    /* ── CONTACT ── */
    contact_title:           "Contact",
    contact_subtitle:        "Bookings & enquiries",
    contact_mgmt_label:      "Artist management",
    contact_direct_label:    "Direct contact",
  },

  /* ═══════════════════════════════════════════════
     FRANÇAIS
     ═══════════════════════════════════════════════ */
  fr: {
    nav_home:        "Accueil",
    nav_about:       "Biographie",
    nav_events:      "Agenda",
    nav_recordings:  "Vidéos",
    nav_press:       "Presse",
    nav_contact:     "Contact",

    footer_copyright: "© Maciej Kwaśnikowski 2026",

    /* ── INDEX ── */
    hero_subtitle:   "Ténor",
    hero_bio:        "Diplômé du prestigieux Lindemann Program du Metropolitan Opera, salué par la critique internationale pour sa technique vocale, son timbre et son jeu scénique, il se produit régulièrement sur les plus grandes scènes lyriques d'Europe — la Staatsoper de Berlin, le Teatro Real de Madrid, le Teatro Regio di Torino et l'Opéra national de Paris.",
    next_label:      "Prochaines représentations",

    /* ── ABOUT ── */
    title_home:        "Maciej Kwaśnikowski — Ténor",
    title_about:       "Biographie — Maciej Kwaśnikowski, ténor",
    title_events:      "Agenda — Maciej Kwaśnikowski, ténor",
    title_recordings:  "Vidéos — Maciej Kwaśnikowski, ténor",
    title_press:       "Presse — Maciej Kwaśnikowski, ténor",
    title_contact:     "Contact — Maciej Kwaśnikowski, ténor",
    about_hero_subtitle: "Ténor",
    photo_credit:        "© Julien Benhamou / l'AROP — avec Benjamin d'Anfray au Palais Garnier",
    sidebar_voice:       "Voix",
    sidebar_voice_val:   "Ténor lyrique",
    sidebar_training:    "Formation",
    sidebar_awards:      "Distinctions",
    sidebar_award1:      "Prix Lyrique de l'AROP",
    sidebar_award1_year: "2019",
    sidebar_award2:      "Prix Lyrique du Cercle Carpeaux",
    sidebar_award2_year: "2018",
    sidebar_studies:     "Études avec",
    sidebar_studies_val: "Neil Shicoff",
    sidebar_also:        "Également",
    sidebar_degree:      "Licence en physique de l'ingénieur<br>Université polytechnique de Poznań, 2017",
    bio_intro: "« Son timbre brillant et sa voix naturellement puissante et légère dans les registres médian et aigu lui permettent d'emplir l'espace avec aisance. »",
    bio_p1: "Né à Poznań, le ténor polonais <strong>Maciej Kwaśnikowski</strong> commence à chanter à l'âge de 9 ans comme jeune soprano. Il entame une formation vocale formelle auprès du contre-ténor polonais <strong>Robert Nakoneczny</strong> en 2014, puis intègre en 2015 l'Académie d'Opéra de Varsovie, rattachée à l'Opéra national de Pologne, où il travaille avec Izabela Kłosińska, Eytan Pessen et Matthias Rexroth.",
    bio_p2: "En 2017, parallèlement à sa formation musicale, il obtient une licence en physique de l'ingénieur à l'Université polytechnique de Poznań. Cette même année, il chante le rôle de Florville dans <em>Il Signor Bruschino</em> de Rossini avec l'Orchestre national d'Île-de-France sous la direction d'<strong>Enrique Mazzola</strong>, et entre à l'Académie de l'Opéra national de Paris. Il participe également au Young Singers Project des Salzburger Festspiele et à l'Académie du Festival d'Aix-en-Provence.",
    bio_p3: "À l'Académie de l'Opéra de Paris, il incarne Alfred dans <em>La Chauve-souris</em> et le Jeune Homme dans <em>Reigen</em> de Philippe Boesmans. Il reçoit le Prix Lyrique du Cercle Carpeaux (2018) et le Prix Lyrique de l'AROP (2019).",
    bio_p4: "En 2019, il rejoint le prestigieux <strong>Lindemann Program du Metropolitan Opera</strong>. Ses débuts au MET dans le rôle du Jeune Matelot dans <em>Tristan und Isolde</em> de Wagner, ainsi que d'autres engagements, ont été annulés en raison de la pandémie de Covid-19.",
    bio_p5: "Il chante les solos de ténor dans de grandes œuvres oratoriales de Bach, Haendel et Mozart, notamment dans la Messe en mi bémol majeur de Schubert avec le <strong>Wiener Philharmoniker</strong> au Festival de Salzbourg (2018) et avec le <strong>Symphonieorchester des Bayerischen Rundfunks</strong> à Munich (2019), toutes deux sous la direction de <strong>Riccardo Muti</strong>. Habitué du Festival de Salzbourg, il rechante la Messe de Schubert en 2022 avec la Camerata Salzburg sous <strong>Franz Welser-Möst</strong>, et interprète la Messe du Couronnement de Mozart avec l'Orchestre Mozarteum sous <strong>Roberto González-Monjas</strong> en 2023. En 2024, il ajoute à son répertoire <em>La Création</em> de Haydn à l'Opéra de Montpellier.",
    bio_p6: "Depuis la saison 2021/2022, Maciej se produit régulièrement à l'<strong>Opéra de Paris</strong>, notamment dans le rôle de Tybalt dans une nouvelle production de <em>Roméo et Juliette</em> de Gounod dirigée par Carlo Rizzi, et dans les rôles du Jeune Matelot et du Berger dans la mise en scène de Peter Sellars de <em>Tristan und Isolde</em> de Wagner sous la direction de <strong>Gustavo Dudamel</strong>, toujours accueilli avec enthousiasme par la critique. En 2025, il fait ses débuts dans le rôle de Tamino et à l'Opéra national de Pologne dans <em>La Flûte enchantée</em> de Mozart.",
    bio_p7: "Au cours de la saison 2025/2026, il a chanté Beppe dans <em>Pagliacci</em> de Leoncavallo et le solo de ténor dans la Messe du Couronnement de Mozart à l'Opéra de Montpellier, Tybalt dans <em>Roméo et Juliette</em> de Gounod à la <strong>Staatsoper Berlin</strong> et au <strong>Teatro Real de Madrid</strong>, Narraboth dans <em>Salomé</em> de Strauss et Michel dans <em>Julietta</em> de Martinů à l'Opéra de Wrocław, et Alméric dans <em>Iolanta</em> de Tchaïkovski à l'Opéra de Rouen.",
    bio_p8: "Maciej travaille sa voix avec <strong>Neil Shicoff</strong> depuis 2016.",
    bio_p9: "Au cours de la saison 2026/2027, Maciej se produit en concert comme soliste dans <em>Fragments pour une messe</em> d'Eric Montalbetti à Riga et, pour ses débuts à la <strong>Philharmonie de Paris</strong>, dans le <em>Requiem</em> de Mozart avec l'<strong>Orchestre de chambre de Paris</strong> sous la direction de <strong>Ton Koopman</strong>. À l'<strong>Opéra de Wrocław</strong>, il retrouve les rôles de Narraboth dans <em>Salomé</em> de Strauss et de Michel dans <em>Julietta</em> de Martinů, et crée le rôle de Rudy lors de la création mondiale du <em>Baiser de la fée</em> d'Akimenko à l'<strong>Opéra de Montpellier</strong>. Il aborde également son premier Don Ottavio dans <em>Don Giovanni</em> de Mozart à l'<strong>Opéra de Tours</strong> et fait ses débuts à l'<strong>Opéra baltique de Gdańsk</strong> dans le rôle de Tamino dans <em>La Flûte enchantée</em> de Mozart.",

    /* ── EVENTS ── */
    events_title:    "Agenda",
    events_subtitle: "Saison 2026 — 2027",
    events_upcoming: "À venir",
    events_past:     "Passés",
    events_tba:      "À conf.",
    events_tba_dates: "Dates à confirmer",
    event_page_link: "Page de l'événement ↗",
    role_label:      "Rôle",
    concert_label:   "Solo de ténor · Concert",

    /* ── RECORDINGS ── */
    recordings_title:    "Vidéos",
    recordings_subtitle: "Extraits et récitals",

    /* ── PRESS ── */
    press_title:    "Presse",
    press_subtitle: "Revue de presse sélective",

    /* ── CONTACT ── */
    contact_title:        "Contact",
    contact_subtitle:     "Engagements & renseignements",
    contact_mgmt_label:   "Management artistique",
    contact_direct_label: "Contact direct",
  },

  /* ═══════════════════════════════════════════════
     POLSKI
     ═══════════════════════════════════════════════ */
  pl: {
    nav_home:        "Strona główna",
    nav_about:       "Biografia",
    nav_events:      "Kalendarz",
    nav_recordings:  "Nagrania",
    nav_press:       "Prasa",
    nav_contact:     "Kontakt",

    footer_copyright: "© Maciej Kwaśnikowski 2026",

    /* ── INDEX ── */
    hero_subtitle:   "Tenor",
    hero_bio:        "Absolwent prestiżowego Programu Lindemanna w Metropolitan Opera, doceniany przez międzynarodowych krytyków za technikę wokalną, barwę głosu i grę aktorską, występuje regularnie na deskach najważniejszych teatrów europejskich — Staatsoper Berlin, Teatro Real de Madrid, Teatro Regio di Torino, Opéra national de Paris.",
    next_label:      "Najbliższy występ",

    /* ── ABOUT ── */
    title_home:        "Maciej Kwaśnikowski — Tenor",
    title_about:       "Biografia — Maciej Kwaśnikowski, tenor",
    title_events:      "Kalendarz — Maciej Kwaśnikowski, tenor",
    title_recordings:  "Nagrania — Maciej Kwaśnikowski, tenor",
    title_press:       "Prasa — Maciej Kwaśnikowski, tenor",
    title_contact:     "Kontakt — Maciej Kwaśnikowski, tenor",
    about_hero_subtitle: "Tenor",
    photo_credit:        "© Julien Benhamou / l'AROP — z Benjaminem d'Anfray w Palais Garnier",
    sidebar_voice:       "Głos",
    sidebar_voice_val:   "Tenor liryczny",
    sidebar_training:    "Kształcenie",
    sidebar_awards:      "Nagrody",
    sidebar_award1:      "Prix Lyrique de l'AROP",
    sidebar_award1_year: "2019",
    sidebar_award2:      "Prix Lyrique du Cercle Carpeaux",
    sidebar_award2_year: "2018",
    sidebar_studies:     "Studia u",
    sidebar_studies_val: "Neila Shicoffa",
    sidebar_also:        "Ponadto",
    sidebar_degree:      "Inżynier fizyki technicznej<br>Politechnika Poznańska, 2017",
    bio_intro: `„Jego naturalnie mocny i lekko osadzony głos w średnicy i górze pozwala mu z łatwością zapanować nad przestrzenią olśniewającą barwą."`,

    bio_p1: "Polski tenor <strong>Maciej Kwaśnikowski</strong> urodził się w Poznaniu i zaczął śpiewać jako chłopiec-sopran w wieku 9 lat. Formalną naukę śpiewu rozpoczął u polskiego kontratenora <strong>Roberta Nakonecznego</strong> w 2014 roku, a w 2015 wstąpił do Akademii Operowej Teatru Wielkiego – Opery Narodowej, gdzie pracował z Izabelą Kłosińską, Eytanem Pessenem i Matthiasem Rexrothem.",
    bio_p2: "W 2017 roku, równolegle z kształceniem muzycznym, uzyskał tytuł inżyniera fizyki technicznej na Politechnice Poznańskiej. W tym samym roku śpiewał rolę Florville'a w <em>Il Signor Bruschino</em> Rossiniego z Orchestre national d'Île-de-France pod dyrekcją <strong>Enrique Mazzoli</strong> i wstąpił do Académie de l'Opéra national de Paris. Brał również udział w Young Singers Project Salzburger Festspiele oraz w Académie du Festival d'Aix-en-Provence.",
    bio_p3: "W Akademii Opery Paryskiej śpiewał Alfreda w <em>Zemście Nietoperza</em> oraz Młodego Dżentelmena w <em>Reigen</em> Philippe'a Boesmansu. Otrzymał Prix Lyrique du Cercle Carpeaux (2018) i Prix Lyrique de l'AROP (2019).",
    bio_p4: "W 2019 roku dołączył do prestiżowego <strong>Programu Lindemanna w Metropolitan Opera</strong>. Jego debiut w MET w roli Młodego Marynarza w <em>Tristanie i Izoldzie</em> Wagnera, jak i inne angaże, zostały odwołane z powodu pandemii COVID-19.",
    bio_p5: "Wykonywał partie tenorowe w wielkich dziełach oratoryjnych Bacha, Händla i Mozarta, w szczególności w Mszy Es-dur Schuberta z <strong>Wiener Philharmoniker</strong> na Festiwalu w Salzburgu (2018) i z <strong>Symphonieorchester des Bayerischen Rundfunks</strong> w Monachium (2019), obie pod dyrekcją <strong>Riccarda Mutiego</strong>. Jako stały gość Festiwalu w Salzburgu, śpiewał Mszę Schuberta ponownie w 2022 z Camerata Salzburg pod <strong>Franzem Welser-Möstem</strong>, a w 2023 wykonał Mszę Koronacyjną Mozarta z Orkiestrą Mozarteum pod <strong>Robertem González-Monjasem</strong>. W 2024 dołączył do swojego repertuaru <em>Stworzenie Świata</em> Haydna w Operze Montpellier.",
    bio_p6: "Od sezonu 2021/2022 Maciej regularnie występuje w <strong>Operze Paryskiej</strong>, m.in. jako Tybalt w nowej produkcji <em>Romea i Julii</em> Gounoda pod dyrekcją Carla Rizziego, oraz jako Młody Marynarz i Pasterz w inscenizacji Petera Sellarsa <em>Tristana i Izoldy</em> Wagnera pod dyrekcją <strong>Gustavo Dudamela</strong>, zawsze spotykając się z entuzjastycznym przyjęciem krytyki. W 2025 zadebiutował w partii i na scenie Teatru Wielkiego – Opery Narodowej jako Tamino w <em>Czarodziejskim flecie</em> Mozarta.",
    bio_p7: "W sezonie 2025/2026 śpiewał Beppego w <em>Pajacach</em> Leoncavalla i partię tenorową w Mszy Koronacyjnej Mozarta w Operze Montpellier, Tybalta w <em>Romeu i Julii</em> Gounoda w <strong>Staatsoper Berlin</strong> i <strong>Teatro Real de Madrid</strong>, Narrabotha w <em>Salome</em> Straussa i Michela w <em>Juliettcie</em> Martinů w Operze Wrocławskiej oraz Almérica w <em>Jolancie</em> Czajkowskiego w Operze w Rouen.",
    bio_p8: "Maciej doskonali głos u <strong>Neila Shicoffa</strong> od 2016 roku.",
    bio_p9: "W sezonie 2026/2027 Maciej występuje w koncertach jako solista w <em>Fragments pour une messe</em> Erica Montalbettiego w Rydze oraz — debiutując w <strong>Filharmonii Paryskiej</strong> — w <em>Requiem</em> Mozarta z <strong>Orchestre de chambre de Paris</strong> pod dyrekcją <strong>Tona Koopmana</strong>. W <strong>Operze Wrocławskiej</strong> powraca do partii Narrabotha w <em>Salome</em> Straussa i Michela w <em>Juliettcie</em> Martinů oraz kreuje rolę Rudy'ego w prapremierze <em>Le Baiser de la fée</em> Akimenki w <strong>Operze w Montpellier</strong>. Debiutuje również w partii Don Ottavia w <em>Don Giovannim</em> Mozarta w <strong>Operze w Tours</strong> oraz po raz pierwszy występuje na scenie <strong>Opery Bałtyckiej w Gdańsku</strong> jako Tamino w <em>Czarodziejskim flecie</em> Mozarta.",

    /* ── EVENTS ── */
    events_title:    "Kalendarz",
    events_subtitle: "Sezon 2026 — 2027",
    events_upcoming: "Nadchodzące",
    events_past:     "Minione",
    events_tba:      "Wkrótce",
    events_tba_dates: "Terminy do potwierdzenia",
    event_page_link: "Strona wydarzenia ↗",
    role_label:      "Rola",
    concert_label:   "Tenor solo · Koncert",

    /* ── RECORDINGS ── */
    recordings_title:    "Nagrania",
    recordings_subtitle: "",

    /* ── PRESS ── */
    press_title:    "Prasa",
    press_subtitle: "Wybrane recenzje",

    /* ── CONTACT ── */
    contact_title:        "Kontakt",
    contact_subtitle:     "",
    contact_mgmt_label:   "Management",
    contact_direct_label: "Bezpośredni kontakt",
  }
};
