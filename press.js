/* press.js — data-driven, multilingual press page for maciejkwasnikowski.com
   --------------------------------------------------------------------------
   You only ever edit the PRODUCTIONS array below. The page renders itself and
   re-renders when the visitor switches language.

   HOW EACH REVIEW WORKS
   ---------------------
   quote: { en, fr, pl }   The text shown, in the language of the page.
                           For a review published in French, `fr` IS the critic's
                           original wording — never a back-translation.
   original:               The source text as published (kept for reference /
                           verification). Not displayed.
   lang:                   The language the review was PUBLISHED in ("FR", "ES",
                           "PL", "EN"). Shown as a small tag next to the outlet,
                           so a reader always knows when they are reading a
                           translation.
   author:                 Optional — omit the line if the review is unsigned.
   url:                    Link to the original article.

   ADDING A REVIEW
   ---------------
   Copy a block. Put the original wording in `original` AND in the matching
   language slot of `quote`. Translate into the other two. Newest production
   goes first — the page renders them in array order.
*/

const PRODUCTIONS = [
  {
    opera:  "Roméo et Juliette — Charles Gounod",
    role:   "Tybalt",
    detail: "Teatro Real, Madrid · May–Jun 2026",
    reviews: [
      {
        quote: {
          en: "The young Polish tenor Maciej Kwaśnikowski was a surprise for his authority and metallic ring as Tybalt.",
          fr: "Le jeune ténor polonais Maciej Kwaśnikowski a été une surprise par son autorité et son métal en Tybalt.",
          pl: "Młody polski tenor Maciej Kwaśnikowski był zaskoczeniem dzięki swojemu autorytetowi i metalicznemu brzmieniu w partii Tybalta.",
        },
        original: "El joven tenor polaco Maciej Kwaśnikowski fue una sorpresa por su autoridad y metal como Tybalt.",
        author: "Pablo L. Rodríguez",
        publication: "El País",
        url: "https://elpais.com/cultura/2026-05-28/una-soberbia-nadine-sierra-se-impone-al-desbordado-oximoron-escenico-de-thomas-jolly-en-el-teatro-real.html",
        lang: "ES",
      },
      {
        quote: {
          en: "Maciej Kwaśnikowski is a Tybalt of sonorous voice, well suited to the duel scene.",
          fr: "Maciej Kwaśnikowski est un Tybalt à la voix sonore, qui convient bien à la scène du duel.",
          pl: "Maciej Kwaśnikowski to Tybalt o dźwięcznym głosie, który dobrze odnajduje się w scenie pojedynku.",
        },
        original: "Maciej Kwaśnikowski es un Tybalt de voz sonora que se adecúa bien a la escena del duelo.",
        author: "Gonzalo Alonso",
        publication: "La Razón",
        url: "https://www.larazon.es/cultura/teatro/gran-triunfo-nadine-sierra-como-julieta-teatro-real_202605286a1805fd91bae05c35e0ac2b.html",
        lang: "ES",
      },
      {
        quote: {
          en: "Splendid, and with great personality… the Tybalt of tenor Maciej Kwaśnikowski.",
          fr: "Superbes, et d'une grande personnalité… le Tybalt du ténor Maciej Kwaśnikowski.",
          pl: "Znakomity i o wielkiej osobowości… Tybalt w wykonaniu tenora Macieja Kwaśnikowskiego.",
        },
        original: "Estupendos, y con gran personalidad… el Tybalt del tenor Maciej Kwaśnikowski.",
        author: "José María Marco",
        publication: "Ópera Actual",
        url: "https://www.operaactual.com/critica/romeo-et-juliette-en-el-real-a-la-parisien/",
        lang: "ES",
      },
      {
        quote: {
          en: "Also outstanding… the intense Tybalt of Maciej Kwaśnikowski.",
          fr: "Très remarqués… l'intense Tybalt de Maciej Kwaśnikowski.",
          pl: "Bardzo wyróżniający się… intensywny Tybalt Macieja Kwaśnikowskiego.",
        },
        original: "Muy destacados… el intenso Tybalt de Maciej Kwaśnikowski.",
        author: "Federico Figueroa",
        publication: "Opera World",
        url: "https://www.operaworld.es/critica-romeo-et-juliette-teatro-real/",
        lang: "ES",
      },
    ],
  },
  {
    opera:  "Julietta — Bohuslav Martinů",
    role:   "Michel",
    detail: "Wrocław Opera · Apr–May 2026",
    reviews: [
      {
        quote: {
          en: "At the core, tenor Maciej Kwaśnikowski was present almost continuously on stage, shaping the role of Michel with lyrical clarity and a quiet sense of existential drift.",
          fr: "Au cœur de l'œuvre, le ténor Maciej Kwaśnikowski, presque continuellement en scène, façonne le rôle de Michel avec une clarté lyrique et un discret sentiment de dérive existentielle.",
          pl: "W centrum dzieła tenor Maciej Kwaśnikowski, obecny na scenie niemal bez przerwy, kształtował rolę Michela z liryczną klarownością i cichym poczuciem egzystencjalnego zagubienia.",
        },
        publication: "Operawire",
        url: "https://operawire.com/wroclaw-opera-2025-26-review-juliette-the-key-to-dreams/",
        lang: "EN",
      },
      {
        quote: {
          en: "Omnipresent on stage, Maciej Kwaśnikowski created the figure of a lost hero, sustaining his lyrical tenor even where the role called for greater power.",
          fr: "Omniprésent sur scène, Maciej Kwaśnikowski a composé la figure d'un héros égaré, tenant son ténor lyrique jusque dans les passages exigeant davantage de puissance.",
          pl: "Wszechobecny na scenie Maciej Kwaśnikowski stworzył postać zagubionego bohatera, operując lirycznym tenorem nawet tam, gdzie partia wymagała większej siły.",
        },
        original: "Wszechobecny na scenie Maciej Kwaśnikowski stworzył postać zagubionego bohatera, operując lirycznym tenorem nawet tam, gdzie partia wymagała większej siły.",
        publication: "Orfeo",
        url: "https://orfeo.com.pl/czy-to-jawa-czy-sen/",
        lang: "PL",
      },
    ],
  },
  {
    opera:  "Die Zauberflöte — W. A. Mozart",
    role:   "Tamino",
    detail: "Opéra de Tours · Feb–Mar 2025",
    reviews: [
      {
        quote: {
          en: "Maciej Kwaśnikowski's Tamino is also luminous. He is pure, innocent and courageous, with an appropriate stage performance, and a Mozartian tenor voice with clear and youthful tones, but valiant and virile, all brushed by a large palette of colours and nuances according to the situation.",
          fr: "Le Tamino de Maciej Kwaśnikowski est lui aussi lumineux, il se fait pur, innocent et courageux, avec un jeu scénique idoine, et une voix de ténor mozartien aux teintes claires et juvéniles, mais vaillante et virile, le tout brossé par une grande palette de couleurs et de nuances au gré des situations.",
          pl: "Tamino Macieja Kwaśnikowskiego również jest promienny — czysty, niewinny i odważny, z trafną grą sceniczną i mozartowskim tenorem o jasnej, młodzieńczej barwie, a przy tym dzielnym i męskim, całość odmalowana szeroką paletą barw i niuansów zależnie od sytuacji.",
        },
        original: "Le Tamino de Maciej Kwaśnikowski est lui aussi lumineux, il se fait pur, innocent et courageux, avec un jeu scénique idoine, et une voix de ténor mozartien aux teintes claires et juvéniles, mais vaillante et virile, le tout brossé par une grande palette de couleurs et de nuances au gré des situations.",
        author: "Joël Heuillon",
        publication: "Ôlyrix",
        url: "https://www.olyrix.com/articles/production/8127/la-flute-enchantee-mozart-opera-tours-28-fevrier-2025-article-critique-compte-rendu-cafiero-vigie-kwasnikowski-mendoche-petit-saint-martin-segol-lamaison-lopez-blondel-jobic-gautrot-toulouse-magnin-orchestre-symphonique-region-centre-val-loire",
        lang: "FR",
      },
      {
        quote: {
          en: "The light lyric tenor of Maciej Kwaśnikowski, with a beautiful clear timbre and high placement, works wonders as Tamino.",
          fr: "Le ténor lyrique léger, au beau timbre clair et haut placé, de Maciej Kwaśnikowski fait merveille en Tamino.",
          pl: "Lekki tenor liryczny Macieja Kwaśnikowskiego, o pięknej, jasnej i wysoko postawionej barwie, sprawdza się znakomicie w partii Tamina.",
        },
        original: "Le ténor lyrique léger, au beau timbre clair et haut placé, de Maciej Kwaśnikowski fait merveille en Tamino.",
        author: "Thierry Guyenne",
        publication: "Opéra Magazine",
        url: "https://operamag.com/exclusif-abonnes/die-zauberflote-a-tours/",
        lang: "FR",
      },
    ],
  },
  {
    opera:  "Die Schöpfung — Joseph Haydn",
    role:   "Uriel",
    detail: "Opéra de Montpellier · Nov 2024",
    reviews: [
      {
        quote: {
          en: "A physics engineer by training, the Polish tenor Maciej Kwaśnikowski takes on a character role as the archangel Uriel. His naturally powerful and light voice in the middle and upper registers allows him to easily dominate the space with a brilliant timbre.",
          fr: "Ingénieur en physique de formation, le ténor polonais Maciej Kwaśnikowski interprète un rôle de composition avec l'archange Uriel. Sa voix naturellement puissante et légère dans les médiums et les aigus, lui permet de dominer aisément l'espace avec un timbre éclatant.",
          pl: "Z wykształcenia inżynier fizyki, polski tenor Maciej Kwaśnikowski kreuje charakterystyczną rolę archanioła Uriela. Jego naturalnie mocny i lekki głos w średnicy i górze pozwala mu z łatwością zapanować nad przestrzenią olśniewającą barwą.",
        },
        original: "Ingénieur en physique de formation, le ténor polonais Maciej Kwaśnikowski interprète un rôle de composition avec l'archange Uriel. Sa voix naturellement puissante et légère dans les médiums et les aigus, lui permet de dominer aisément l'espace avec un timbre éclatant.",
        author: "Moisés Ordóñez Alarcón",
        publication: "Ôlyrix",
        url: "https://www.olyrix.com/articles/production/7946/la-creation-joseph-haydn-opera-orchestre-national-montpellier-occitanie-comedie-16-novembre-2024-article-critique-compte-rendu-die-schoepfung-oratorio-marco-crispo-emy-gazeilles-maciej-kwasnikowski-alexandre-baldo-dominika-gajdzis-noelle-geny-choeur",
        lang: "FR",
      },
      {
        quote: {
          en: "Maciej Kwaśnikowski, the Polish tenor with a valiant and stylish voice, sings Uriel. His constant care for the text — always intelligible — and for the vocal line, combined with exemplary means, gives us constant pleasure. The timbre, the projection are there, in the service of a natural expression, such as one loves.",
          fr: "Maciej Kwaśnikowski, le ténor polonais à la voix vaillante et stylée, chante Uriel. Son souci constant du texte – toujours intelligible – et de la ligne de chant, associés à des moyens exemplaires, nous vaut un bonheur constant. Le timbre, la projection sont au rendez-vous, au service d'une expression naturelle, telle qu'on l'aime.",
          pl: "Maciej Kwaśnikowski, polski tenor o dzielnym i stylowym głosie, śpiewa Uriela. Jego nieustanna dbałość o tekst – zawsze zrozumiały – i o linię wokalną, w połączeniu ze wzorowymi środkami, daje nieprzerwaną przyjemność. Barwa i projekcja są na miejscu, w służbie naturalnej ekspresji, takiej, jaką się lubi.",
        },
        original: "Maciej Kwaśnikowski, le ténor polonais à la voix vaillante et stylée, chante Uriel. Son souci constant du texte – toujours intelligible – et de la ligne de chant, associés à des moyens exemplaires, nous vaut un bonheur constant. Le timbre, la projection sont au rendez-vous, au service d'une expression naturelle, telle qu'on l'aime.",
        author: "Yvan Beuvard",
        publication: "Forum Opéra",
        url: "https://www.forumopera.com/spectacle/haydn-die-schopfung-montpellier/",
        lang: "FR",
      },
    ],
  },
  {
    opera:  "Roméo et Juliette — Charles Gounod",
    role:   "Tybalt",
    detail: "Opéra Bastille · Jun–Jul 2023",
    reviews: [
      {
        quote: {
          en: "Maciej Kwaśnikowski gives Tybalt his vibrant top notes (all the more so from the top of the great staircase), and deploys through his phrasing the placement of his middle register, on an intensity that suddenly rises — and never comes down again — with his anger, as soon as he recognises Roméo, the enemy of his family who dares to covet his cousin Juliette.",
          fr: "Maciej Kwaśnikowski offre à Tybalt son aigu vibrant (d'autant mieux du haut du grand escalier), et déploie avec son phrasé le placement de son médium, sur une intensité qui monte tout à coup - et ne redescend plus - avec sa colère, dès qu'il reconnaît Roméo, l'ennemi de sa famille qui ose convoiter sa cousine Juliette.",
          pl: "Maciej Kwaśnikowski użycza Tybaltowi swojej wibrującej góry (tym bardziej ze szczytu wielkich schodów) i rozwija frazą osadzenie średnicy, budując intensywność, która nagle wzrasta – i już nie opada – wraz z jego gniewem, gdy tylko rozpoznaje Romea, wroga rodziny, który śmie pożądać jego kuzynki Julii.",
        },
        original: "Maciej Kwaśnikowski offre à Tybalt son aigu vibrant (d'autant mieux du haut du grand escalier), et déploie avec son phrasé le placement de son médium, sur une intensité qui monte tout à coup - et ne redescend plus - avec sa colère, dès qu'il reconnaît Roméo, l'ennemi de sa famille qui ose convoiter sa cousine Juliette.",
        author: "Charles Arden",
        publication: "Ôlyrix",
        url: "https://www.olyrix.com/articles/production/6875/romeo-et-juliette-gounod-opera-paris-bastille-17-juin-2023-article-critique-compte-rendu-shakespeare-thomas-jolly-rizzi-wu-lavenere-dequest-dreisig-bernheim-teitgen-naouri-desandre-grupposo-rendall-ricart-kwasnikowski-galvain-ioannou-boutillier-orchestre",
        lang: "FR",
      },
      {
        quote: {
          en: "Maciej Kwaśnikowski is an arrogant and unyielding Tybalt, his sonorous and well-projected voice hits the mark in the duel scene.",
          fr: "Maciej Kwaśnikowski est un Tybalt arrogant et inflexible, sa voix sonore et bien projetée fait mouche dans la scène du duel.",
          pl: "Maciej Kwaśnikowski to Tybalt arogancki i nieustępliwy; jego dźwięczny, dobrze projektowany głos trafia w sedno w scenie pojedynku.",
        },
        original: "Maciej Kwaśnikowski est un Tybalt arrogant et inflexible, sa voix sonore et bien projetée fait mouche dans la scène du duel.",
        author: "Christian Peter",
        publication: "Forum Opéra",
        url: "https://www.forumopera.com/spectacle/gounod-romeo-et-juliette-paris-bastille/",
        lang: "FR",
      },
      {
        quote: {
          en: "As for the two non-francophones in the cast, Maciej Kwaśnikowski (Tybalt) and Huw Montague Rendall (Mercutio), they compete in elegance, in accuracy of diction as of feeling, and in youthful brilliance.",
          fr: "Quant aux deux non francophones de la distribution, Maciej Kwaśnikowski (Tybalt) et Huw Montague Rendall (Mercutio), ils rivalisent d'élégance, de justesse dans la diction comme dans le sentiment, d'éclat juvénile.",
          pl: "Co do dwojga nie-frankofonów w obsadzie – Macieja Kwaśnikowskiego (Tybalt) i Huw Montague Rendalla (Merkucjo) – rywalizują oni elegancją, trafnością dykcji i uczucia oraz młodzieńczym blaskiem.",
        },
        original: "Quant aux deux non francophones de la distribution, Maciej Kwaśnikowski (Tybalt) et Huw Montague Rendall (Mercutio), ils rivalisent d'élégance, de justesse dans la diction comme dans le sentiment, d'éclat juvénile.",
        author: "Emmanuel Dupuy",
        publication: "Diapason",
        url: "https://www.diapasonmag.fr/critiques/a-lopera-bastille-la-tenebreuse-clarte-de-romeo-et-juliette-38419.html",
        lang: "FR",
      },
      {
        quote: {
          en: "Vocally, the bar is set very high! The supporting roles stand out for their great consistency. Special mentions to the Gertrude of Sylvie Brunet-Grupposo and to the Tybalt of Maciej Kwaśnikowski — decidedly excellent, and to whom one would do well to entrust more important roles from now on.",
          fr: "Vocalement, la barre est placée très haut ! Les seconds rôles se distinguent par leur très grande homogénéité. Mentions spéciales à la Gertrude de Sylvie Brunet-Grupposo, au Tybalt de Maciej Kwaśnikowski, décidément excellent et à qui l'on ferait bien de confier dorénavant des rôles plus importants.",
          pl: "Wokalnie poprzeczka zawieszona jest bardzo wysoko! Role drugoplanowe wyróżniają się dużą wyrównaniem obsady. Szczególne wyróżnienia dla Gertrudy Sylvie Brunet-Grupposo i Tybalta Macieja Kwaśnikowskiego – zdecydowanie znakomitego, któremu warto odtąd powierzać ważniejsze partie.",
        },
        original: "Vocalement, la barre est placée très haut ! Les seconds rôles se distinguent par leur très grande homogénéité. Mentions spéciales à la Gertrude de Sylvie Brunet-Grupposo, au Tybalt de Maciej Kwaśnikowski, décidément excellent et à qui l'on ferait bien de confier dorénavant des rôles plus importants.",
        author: "Stéphane Lelièvre",
        publication: "Bachtrack",
        url: "https://bachtrack.com/critique-gounod-romeo-et-juliette-rizzi-jolly-dreisig-bernheim-opera-bastille-juin-2023",
        lang: "FR",
      },
      {
        quote: {
          en: "Maciej Kwaśnikowski's Tybalt impresses with his vocal authority.",
          fr: "Le Tybalt de Maciej Kwaśnikowski impressionne par son autorité vocale.",
          pl: "Tybalt Macieja Kwaśnikowskiego imponuje autorytetem wokalnym.",
        },
        original: "Le Tybalt de Maciej Kwaśnikowski impressionne par son autorité vocale.",
        publication: "ResMusica",
        url: "https://www.resmusica.com/2023/06/21/le-romeo-et-juliette-grandiose-et-oxymorique-de-thomas-jolly-a-lopera-bastille/",
        lang: "FR",
      },
      {
        quote: {
          en: "Striking figures such as the sonorous Tybalt of Maciej Kwaśnikowski… are marvels.",
          fr: "Des figures marquantes comme le Tybalt sonore de Maciej Kwaśnikowski… sont merveilles.",
          pl: "Wyraziste postaci, jak dźwięczny Tybalt Macieja Kwaśnikowskiego… to prawdziwe cuda.",
        },
        original: "Des figures marquantes comme le Tybalt sonore de Maciej Kwaśnikowski… sont merveilles.",
        publication: "Classica",
        url: "https://classica.fr/on-a-vu-romeo-et-juliette-opera-bastille-juin-2023/",
        lang: "FR",
      },
      {
        quote: {
          en: "The explosive, athletic Mercutio of Huw Montague Rendall and the Tybalt of Maciej Kwaśnikowski are both magnificent.",
          fr: "Le Mercutio explosif et athlétique de Huw Montague Rendall, le Tybalt de Maciej Kwaśnikowski sont tous deux formidables.",
          pl: "Wybuchowy i atletyczny Merkucjo Huw Montague Rendalla oraz Tybalt Macieja Kwaśnikowskiego – obaj znakomici.",
        },
        original: "Le Mercutio explosif et athlétique de Huw Montague Rendall, le Tybalt de Maciej Kwaśnikowski sont tous deux formidables.",
        publication: "Artistikrezo",
        url: "https://www.artistikrezo.com/spectacle/romeo-et-juliette-a-lopera-bastille-un-spectacle-magistral.html",
        lang: "FR",
      },
    ],
  },
  {
    opera:  "Tristan und Isolde — Richard Wagner",
    role:   "Young Sailor · Shepherd",
    detail: "Opéra Bastille · Jan–Feb 2023",
    reviews: [
      {
        quote: {
          en: "Maciej Kwaśnikowski offers two quite distinct characters, using all the breadth and darkness of his timbre in the sailor's phrases that open the work, while the youthful freshness of his shepherd charms with its carefree, tender tone.",
          fr: "Maciej Kwaśnikowski propose deux personnages bien distincts, usant de toute sa largeur et noirceur de timbre dans les phrases du marin qui ouvrent l'œuvre, alors que la fraîcheur juvénile de son berger séduit par son ton insouciant et tendre.",
          pl: "Maciej Kwaśnikowski proponuje dwie wyraźnie odmienne postaci, wykorzystując całą szerokość i ciemność barwy we frazach marynarza otwierających dzieło, podczas gdy młodzieńcza świeżość jego pasterza ujmuje beztroskim i czułym tonem.",
        },
        original: "Maciej Kwaśnikowski propose deux personnages bien distincts, usant de toute sa largeur et noirceur de timbre dans les phrases du marin qui ouvrent l'œuvre, alors que la fraîcheur juvénile de son berger séduit par son ton insouciant et tendre.",
        author: "Philippe Scagni",
        publication: "Ôlyrix",
        url: "https://www.olyrix.com/articles/production/6453/tristan-et-isolde-opera-paris-bastille-wagner-17-janvier-2023-article-critique-compte-rendu-gustavo-dudamel-peter-sellars-bill-viola-pakledinaz-ingalls-stefano-williams-weinius-damerau-green-owens-cooper-kwasnikowski-kumiega-mills-rhoden-hay-steben",
        lang: "FR",
      },
      {
        quote: {
          en: "Everything begins very well indeed with the entrance of Maciej Kwaśnikowski (a former member of the Académie), who proves, as the sailor and then as the shepherd in the final act, ideal in freshness, clarity and poise.",
          fr: "Tout commence pourtant très bien avec l'intervention d'un Maciej Kwaśnikowski (ancien pensionnaire de l'Académie) qui se montre, en marin puis en berger au dernier acte, idéal de fraîcheur, de clarté, de tenue.",
          pl: "Wszystko zaczyna się zresztą znakomicie od wejścia Macieja Kwaśnikowskiego (byłego stypendysty Akademii), który jako marynarz, a następnie pasterz w ostatnim akcie, okazuje się wzorem świeżości, klarowności i klasy.",
        },
        original: "Tout commence pourtant très bien avec l'intervention d'un Maciej Kwaśnikowski (ancien pensionnaire de l'Académie) qui se montre, en marin puis en berger au dernier acte, idéal de fraîcheur, de clarté, de tenue.",
        author: "Stéphane Lelièvre",
        publication: "Première Loge",
        url: "https://www.premiereloge-opera.com/article/2023/01/17/tristan-et-isolde-opera-de-paris-bastille-critique-mary-elizabeth-williams-michael-weinius-okka-von-der-damerau-eric-owens-gustavo-dudamel-peter-sellars/",
        lang: "FR",
      },
    ],
  },
  {
    opera:  "Così fan tutte — W. A. Mozart",
    role:   "Ferrando",
    detail: "Dijon Opera · Feb 2022",
    reviews: [
      {
        quote: {
          en: "Maciej Kwaśnikowski embodies a Ferrando close to the ideal, at once virile and fragile when confronted with his fiancée's infidelity and Guglielmo's bluster. This duality is found even in his beautifully timbred voice, and shines through in the aria Un'aura amorosa, delivered on the breath, without superfluous artifice.",
          fr: "Maciej Kwaśnikowski incarne un Ferrando proche de l'idéal, à la fois viril et fragile lorsqu'il est confronté à l'infidélité de sa fiancée et aux rodomontades de Guglielmo. Cette dualité se retrouve jusque dans sa voix joliment timbrée et transpire dans l'aria Un'aura amorosa délivrée sur le souffle, sans artifice superflu.",
          pl: "Maciej Kwaśnikowski kreuje Ferranda bliskiego ideałowi – jednocześnie męskiego i kruchego w obliczu niewierności narzeczonej i przechwałek Guglielma. Ta dwoistość znajduje odbicie nawet w jego pięknie brzmiącym głosie i przenika arię Un'aura amorosa, prowadzoną na oddechu, bez zbędnych ozdobników.",
        },
        original: "Maciej Kwaśnikowski incarne un Ferrando proche de l'idéal, à la fois viril et fragile lorsqu'il est confronté à l'infidélité de sa fiancée et aux rodomontades de Guglielmo. Cette dualité se retrouve jusque dans sa voix joliment timbrée et transpire dans l'aria Un'aura amorosa délivrée sur le souffle, sans artifice superflu.",
        author: "Nicolas Le Clerre",
        publication: "Première Loge",
        url: "https://www.premiereloge-opera.com/article/compte-rendu/production/2022/02/10/cosi-fan-tutte-dijon-mozart-andreea-soare-fiona-mc-gown-andrea-hill-maciej-kwasnikowski-timothee-varon-david-bizic-guillaume-tourniaire-dominique-pitoiset/",
        lang: "FR",
      },
      {
        quote: {
          en: "Maciej Kwaśnikowski portrays a valiant Ferrando, with clear timbre and impeccable phrasing. His eagerly awaited Un'aura amorosa is a moment of grace.",
          fr: "Maciej Kwaśnikowski campe un Ferrando vaillant, au timbre clair, aux phrasés impeccables. Son Un'aura amorosa, attendu, est un moment de grâce.",
          pl: "Maciej Kwaśnikowski kreuje dzielnego Ferranda o jasnej barwie i nienagannym frazowaniu. Jego wyczekiwana Un'aura amorosa to chwila łaski.",
        },
        original: "Maciej Kwaśnikowski campe un Ferrando vaillant, au timbre clair, aux phrasés impeccables. Son Un'aura amorosa, attendu, est un moment de grâce.",
        author: "Yvan Beuvard",
        publication: "Forum Opéra",
        url: "https://www.forumopera.com/spectacle/cosi-fan-tutte-dijon-nous-nentendons-ni-la-meme-musique-ni-le-meme-texte/",
        lang: "FR",
      },
      {
        quote: {
          en: "The counterpart of his Dorabella, to whom he long swears to remain faithful, the Polish tenor Maciej Kwaśnikowski is a Ferrando full of lightness and candour, singing with a suave voice. His radiance unfolds an expressive strength in the touching « Un'aura amorosa ».",
          fr: "Pendant de sa Dorabella à qui il jure longtemps de rester fidèle, le ténor polonais Maciej Kwaśnikowski est un Ferrando plein de légèreté et de candeur, s'exprimant avec une voix suave. Sa nitescence déploie une force expressive dans le touchant « Un'aura amorosa ».",
          pl: "Jako partner swojej Dorabelli, której długo przysięga wierność, polski tenor Maciej Kwaśnikowski jest Ferrandem pełnym lekkości i szczerości, śpiewającym aksamitnym głosem. Jego blask rozwija ekspresyjną siłę w poruszającej „Un'aura amorosa”.",
        },
        original: "Pendant de sa Dorabella à qui il jure longtemps de rester fidèle, le ténor polonais Maciej Kwaśnikowski est un Ferrando plein de légèreté et de candeur, s'exprimant avec une voix suave. Sa nitescence déploie une force expressive dans le touchant « Un'aura amorosa ».",
        author: "Pierre Géraudie",
        publication: "Ôlyrix",
        url: "https://www.olyrix.com/articles/production/5460/cosi-fan-tutte-mozart-nouvelle-production-opera-dijon-ponte-tourniaire-gallon-orchestre-bourgogne-ismat-prosperi-dominique-pitoiset-christophe-fabrizio-kretschmar-pansard-besson-penager-soare-gown-hill-kwasnikowski-varon-bizic-6-fevrier-2022-auditorium",
        lang: "FR",
      },
    ],
  },
];

window.PRODUCTIONS = PRODUCTIONS;

(function () {
  const SUPPORTED = ['en', 'fr', 'pl'];
  const DEFAULT   = 'en';

  function currentLang() {
    try {
      const l = localStorage.getItem('mk_lang');
      return SUPPORTED.includes(l) ? l : DEFAULT;
    } catch (e) { return DEFAULT; }
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  function reviewHTML(r, lang) {
    const text = (r.quote && (r.quote[lang] || r.quote[DEFAULT])) || '';
    const author = r.author ? '<span class="review-author">' + esc(r.author) + '</span>' : '';
    const tag = r.lang ? ' <span class="review-lang">' + esc(r.lang) + '</span>' : '';
    const pub = r.url
      ? '<a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.publication) + '</a>'
      : esc(r.publication);

    return (
      '<div class="review">' +
        '<p class="review-quote">' + esc(text) + '</p>' +
        '<div class="review-source">' +
          author +
          '<span class="review-publication">' + pub + tag + '</span>' +
        '</div>' +
      '</div>'
    );
  }

  function productionHTML(p, lang) {
    return (
      '<div class="production">' +
        '<div class="production-header">' +
          '<div class="production-meta">' +
            '<span class="production-role">' +
              '<span data-i18n="role_label">Role</span>: ' + esc(p.role) +
            '</span>' +
            '<span class="production-detail">' + esc(p.detail) + '</span>' +
          '</div>' +
        '</div>' +
        '<h2 class="production-opera" style="margin-bottom:2rem;">' + esc(p.opera) + '</h2>' +
        '<div class="reviews">' + p.reviews.map(r => reviewHTML(r, lang)).join('') + '</div>' +
      '</div>'
    );
  }

  function render(lang) {
    const container = document.querySelector('.press-container');
    if (!container) return;
    container.innerHTML = PRODUCTIONS.map(p => productionHTML(p, lang)).join('');
  }

  /* initial render */
  render(currentLang());

  /* re-render when the visitor switches language (event fired by lang.js) */
  document.addEventListener('mk:langchange', e => {
    render((e.detail && e.detail.lang) || currentLang());
  });
})();
