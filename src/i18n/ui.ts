// ─────────────────────────────────────────────────────────
//  UI chrome strings — navigation, buttons, field labels.
//
//  Content (verses, temple descriptions, biographies) does NOT
//  live here; it lives in the row-shaped seed data under
//  src/lib/seed/ so it can be pushed to Supabase. This file is
//  only for text that belongs to the interface itself.
// ─────────────────────────────────────────────────────────
import type { Locale } from "./config";

export interface UIStrings {
  /**
   * The site's name in the reading language. Latin in English, Kannada in
   * Kannada, Devanagari in Hindi — the masthead, the footer and the hero
   * all read from this one string so they cannot disagree with the rest
   * of the page they sit on.
   */
  siteName: string;

  // ── Navigation
  navTeachings: string;
  navVerses: string;
  navUpanishads: string;
  navTeachers: string;
  navTemples: string;
  navConcepts: string;
  navMathas: string;
  navSearch: string;
  navAbout: string;
  navOpenMenu: string;
  navCloseMenu: string;
  navIndex: string;
  navMore: string;

  // ── Home
  heroTagline: string;
  heroSubtitle: string;
  heroEnter: string;
  heroExplore: string;
  verseOfTheDay: string;
  mahavakyas: string;
  mahavakyasBlurb: string;
  explorePillars: string;
  pillarsBlurb: string;
  readMore: string;
  viewAll: string;

  // ── Section headings
  versesTitle: string;
  versesBlurb: string;
  upanishadsTitle: string;
  upanishadsBlurb: string;
  teachersTitle: string;
  teachersBlurb: string;
  templesTitle: string;
  templesBlurb: string;
  conceptsTitle: string;
  conceptsBlurb: string;
  mathasTitle: string;
  mathasBlurb: string;

  // ── Field labels
  labelVeda: string;
  labelVerseCount: string;
  labelKeyTeaching: string;
  labelChapter: string;
  labelSource: string;
  labelTradition: string;
  labelEra: string;
  labelKeyWorks: string;
  labelLocation: string;
  labelState: string;
  labelDynasty: string;
  labelCentury: string;
  labelArchitecture: string;
  labelDeity: string;
  labelDirection: string;
  labelMahavakya: string;
  labelSignificance: string;
  labelDefinition: string;
  labelRelated: string;
  labelCommentary: string;
  labelTranslation: string;
  labelFoundedBy: string;

  // ── Directions
  dirNorth: string;
  dirSouth: string;
  dirEast: string;
  dirWest: string;

  // ── Search
  searchTitle: string;
  searchPlaceholder: string;
  searchBlurb: string;
  searchNoResults: string;
  searchResultsFor: string;

  // ── Misc
  language: string;
  chooseLanguage: string;
  imageCredit: string;
  notFoundTitle: string;
  notFoundBody: string;
  backHome: string;
  uncitedNotice: string;
  footerTagline: string;
  footerRights: string;
  footerExplore: string;
  footerAbout: string;

  // ── Long-form page copy
  //
  // Prose that used to be written straight into the JSX. Anything a
  // reader sees has to live here, or the page silently stays English
  // when the language is switched.
  citationPromise: string;
  aboutIntro: string;
  aboutCitationHeading: string;
  aboutCitationBody: string;
  aboutLanguageBody: string;
  kollurBlurb: string;

  // ── Verse reader
  labelVerse: string;
  labelInvocation: string;
  labelExplanation: string;
  labelHideExplanation: string;
  labelCompare: string;
  labelHideCompare: string;
  labelTerms: string;
  readWork: string;
}

const en: UIStrings = {
  siteName: "Tat Tvam Asi",

  navTeachings: "Teachings",
  navVerses: "Verses",
  navUpanishads: "Upanishads",
  navTeachers: "Acharyas",
  navTemples: "Temples",
  navConcepts: "Concepts",
  navMathas: "Mathas",
  navSearch: "Search",
  navAbout: "About",
  navOpenMenu: "Menu",
  navCloseMenu: "Close",
  navIndex: "Sections",
  navMore: "Also",

  heroTagline: "Thou Art That",
  heroSubtitle: "Advaita Vedanta · Vedas · Temples · Dharma",
  heroEnter: "Enter the Sanctuary",
  heroExplore: "Explore Concepts",
  verseOfTheDay: "Verse of the Day",
  mahavakyas: "The Four Mahavakyas",
  mahavakyasBlurb:
    "Four sentences, one from each Veda. Each states the identity of the self and the absolute without qualification.",
  explorePillars: "The Pillars",
  pillarsBlurb: "Every tradition of Sanatana Dharma, gathered in one place and growing.",
  readMore: "Read more",
  viewAll: "View all",

  versesTitle: "Sacred Verses",
  versesBlurb: "Shruti in the original Sanskrit, with transliteration and translation.",
  upanishadsTitle: "The Upanishads",
  upanishadsBlurb: "The concluding portions of the Vedas — the philosophical heart of the tradition.",
  teachersTitle: "Acharyas",
  teachersBlurb: "The teachers who preserved, systematised and transmitted the tradition.",
  templesTitle: "Temples",
  templesBlurb: "Cosmograms in stone — where architecture encodes the structure of the universe.",
  conceptsTitle: "Concepts",
  conceptsBlurb: "The vocabulary of Vedanta, defined precisely.",
  mathasTitle: "The Four Mathas",
  mathasBlurb: "The four cardinal seats established by Adi Shankaracharya.",

  labelVeda: "Veda",
  labelVerseCount: "Verses",
  labelKeyTeaching: "Key teaching",
  labelChapter: "Chapter",
  labelSource: "Source",
  labelTradition: "Tradition",
  labelEra: "Era",
  labelKeyWorks: "Key works",
  labelLocation: "Location",
  labelState: "State",
  labelDynasty: "Dynasty",
  labelCentury: "Built",
  labelArchitecture: "Architecture",
  labelDeity: "Presiding deity",
  labelDirection: "Direction",
  labelMahavakya: "Mahavakya",
  labelSignificance: "Significance",
  labelDefinition: "Definition",
  labelRelated: "Related",
  labelCommentary: "Commentary",
  labelTranslation: "Translation",
  labelFoundedBy: "Founded by",

  dirNorth: "North",
  dirSouth: "South",
  dirEast: "East",
  dirWest: "West",

  searchTitle: "Search",
  searchPlaceholder: "Search verses, temples, concepts…",
  searchBlurb: "Search across every verse, teacher, temple and concept on the site.",
  searchNoResults: "Nothing found. Try another word.",
  searchResultsFor: "Results for",

  language: "Language",
  chooseLanguage: "Choose language",
  imageCredit: "Image",
  notFoundTitle: "This page does not exist",
  notFoundBody: "The path you followed leads nowhere. Return and begin again.",
  backHome: "Return home",
  uncitedNotice:
    "Site editorial paraphrase — not yet a cited scholarly translation.",
  footerTagline: "A reference for Sanatana Dharma — texts, temples, teachers and traditions.",
  footerRights: "All rights reserved.",
  footerExplore: "Explore",
  footerAbout: "About",

  citationPromise:
    "Every translation and every commentary entry on this site must name where it came from. That rule is enforced in the database itself — a translation without a source cannot be stored — so the citation is a fact about the record, not a promise about the editor.",
  aboutIntro:
    "There is no single place that holds the whole of Sanatana Dharma — the Vedic corpus, the Upanishads, the Gita, the bhashyas of every sampradaya, the temples and their history, the practices and traditions, the stotras and their recitation. This is an attempt to build one, incrementally and without an end date.",
  aboutCitationHeading: "Citation before scale",
  aboutCitationBody:
    "A reference is only worth as much as its sources. Every translation and every commentary entry must name where it came from — this is enforced in the database itself, not left to discipline. Content inherited from earlier drafts is labelled as an uncited editorial paraphrase until a properly attributed translation replaces it, rather than quietly passed off as scholarship.",
  aboutLanguageBody:
    "The site reads in Kannada, English and Hindi, and the switch changes the content, not only the menus. Each language is a row in the database rather than a separate copy of the site, so a fourth language is a data task and not an engineering one.",
  kollurBlurb:
    "Kollur · One of the Seven Mukti Sthalas of Parashurama Kshetra. History, Puranika Katha, rituals, agama shastra, and the significance of the Swayambhu Lingam.",

  labelVerse: "Verse",
  labelInvocation: "Invocation",
  labelExplanation: "Explanation",
  labelHideExplanation: "Hide explanation",
  labelCompare: "Compare languages",
  labelHideCompare: "Hide comparison",
  labelTerms: "Terms worth knowing",
  readWork: "Read verse by verse",
};

const kn: UIStrings = {
  siteName: "ತತ್ ತ್ವಮ್ ಅಸಿ",

  navTeachings: "ಬೋಧನೆಗಳು",
  navVerses: "ಶ್ಲೋಕಗಳು",
  navUpanishads: "ಉಪನಿಷತ್ತುಗಳು",
  navTeachers: "ಆಚಾರ್ಯರು",
  navTemples: "ದೇವಾಲಯಗಳು",
  navConcepts: "ಪರಿಕಲ್ಪನೆಗಳು",
  navMathas: "ಮಠಗಳು",
  navSearch: "ಹುಡುಕಿ",
  navAbout: "ನಮ್ಮ ಬಗ್ಗೆ",
  navOpenMenu: "ಮೆನು",
  navCloseMenu: "ಮುಚ್ಚಿ",
  navIndex: "ವಿಭಾಗಗಳು",
  navMore: "ಇನ್ನಷ್ಟು",

  heroTagline: "ನೀನೇ ಅದು",
  heroSubtitle: "ಅದ್ವೈತ ವೇದಾಂತ · ವೇದಗಳು · ದೇವಾಲಯಗಳು · ಧರ್ಮ",
  heroEnter: "ಒಳಗೆ ಪ್ರವೇಶಿಸಿ",
  heroExplore: "ಪರಿಕಲ್ಪನೆಗಳನ್ನು ನೋಡಿ",
  verseOfTheDay: "ಇಂದಿನ ಶ್ಲೋಕ",
  mahavakyas: "ನಾಲ್ಕು ಮಹಾವಾಕ್ಯಗಳು",
  mahavakyasBlurb:
    "ನಾಲ್ಕು ವಾಕ್ಯಗಳು, ಪ್ರತಿ ವೇದದಿಂದ ಒಂದು. ಪ್ರತಿಯೊಂದೂ ಆತ್ಮ ಮತ್ತು ಬ್ರಹ್ಮನ ಏಕತೆಯನ್ನು ನೇರವಾಗಿ ಘೋಷಿಸುತ್ತದೆ.",
  explorePillars: "ಮುಖ್ಯ ವಿಭಾಗಗಳು",
  pillarsBlurb: "ಸನಾತನ ಧರ್ಮದ ಪ್ರತಿಯೊಂದು ಪರಂಪರೆಯೂ ಒಂದೇ ಕಡೆ, ನಿರಂತರವಾಗಿ ಬೆಳೆಯುತ್ತಿದೆ.",
  readMore: "ಮತ್ತಷ್ಟು ಓದಿ",
  viewAll: "ಎಲ್ಲವನ್ನೂ ನೋಡಿ",

  versesTitle: "ಪವಿತ್ರ ಶ್ಲೋಕಗಳು",
  versesBlurb: "ಮೂಲ ಸಂಸ್ಕೃತದಲ್ಲಿ ಶ್ರುತಿ, ಲಿಪ್ಯಂತರ ಮತ್ತು ಅನುವಾದದೊಂದಿಗೆ.",
  upanishadsTitle: "ಉಪನಿಷತ್ತುಗಳು",
  upanishadsBlurb: "ವೇದಗಳ ಅಂತಿಮ ಭಾಗ — ಪರಂಪರೆಯ ತಾತ್ವಿಕ ಹೃದಯ.",
  teachersTitle: "ಆಚಾರ್ಯರು",
  teachersBlurb: "ಪರಂಪರೆಯನ್ನು ಕಾಪಾಡಿ, ವ್ಯವಸ್ಥೆಗೊಳಿಸಿ, ಮುಂದಿನವರಿಗೆ ತಲುಪಿಸಿದ ಗುರುಗಳು.",
  templesTitle: "ದೇವಾಲಯಗಳು",
  templesBlurb: "ಕಲ್ಲಿನಲ್ಲಿ ಬ್ರಹ್ಮಾಂಡ — ವಾಸ್ತುಶಿಲ್ಪವೇ ವಿಶ್ವರಚನೆಯನ್ನು ಹೇಳುವಲ್ಲಿ.",
  conceptsTitle: "ಪರಿಕಲ್ಪನೆಗಳು",
  conceptsBlurb: "ವೇದಾಂತದ ಪಾರಿಭಾಷಿಕ ಪದಗಳು, ನಿಖರವಾಗಿ ವಿವರಿಸಲಾಗಿದೆ.",
  mathasTitle: "ನಾಲ್ಕು ಮಠಗಳು",
  mathasBlurb: "ಆದಿ ಶಂಕರಾಚಾರ್ಯರು ಸ್ಥಾಪಿಸಿದ ನಾಲ್ಕು ದಿಗ್ಪೀಠಗಳು.",

  labelVeda: "ವೇದ",
  labelVerseCount: "ಶ್ಲೋಕಗಳು",
  labelKeyTeaching: "ಮುಖ್ಯ ಬೋಧನೆ",
  labelChapter: "ಅಧ್ಯಾಯ",
  labelSource: "ಮೂಲ",
  labelTradition: "ಪರಂಪರೆ",
  labelEra: "ಕಾಲ",
  labelKeyWorks: "ಪ್ರಮುಖ ಕೃತಿಗಳು",
  labelLocation: "ಸ್ಥಳ",
  labelState: "ರಾಜ್ಯ",
  labelDynasty: "ರಾಜವಂಶ",
  labelCentury: "ನಿರ್ಮಾಣ",
  labelArchitecture: "ವಾಸ್ತುಶೈಲಿ",
  labelDeity: "ಮುಖ್ಯ ದೇವತೆ",
  labelDirection: "ದಿಕ್ಕು",
  labelMahavakya: "ಮಹಾವಾಕ್ಯ",
  labelSignificance: "ಮಹತ್ವ",
  labelDefinition: "ವ್ಯಾಖ್ಯಾನ",
  labelRelated: "ಸಂಬಂಧಿತ",
  labelCommentary: "ಭಾಷ್ಯ",
  labelTranslation: "ಅನುವಾದ",
  labelFoundedBy: "ಸ್ಥಾಪಕರು",

  dirNorth: "ಉತ್ತರ",
  dirSouth: "ದಕ್ಷಿಣ",
  dirEast: "ಪೂರ್ವ",
  dirWest: "ಪಶ್ಚಿಮ",

  searchTitle: "ಹುಡುಕಿ",
  searchPlaceholder: "ಶ್ಲೋಕ, ದೇವಾಲಯ, ಪರಿಕಲ್ಪನೆ ಹುಡುಕಿ…",
  searchBlurb: "ತಾಣದ ಎಲ್ಲಾ ಶ್ಲೋಕ, ಆಚಾರ್ಯ, ದೇವಾಲಯ ಮತ್ತು ಪರಿಕಲ್ಪನೆಗಳಲ್ಲಿ ಹುಡುಕಿ.",
  searchNoResults: "ಏನೂ ಸಿಗಲಿಲ್ಲ. ಬೇರೆ ಪದವನ್ನು ಪ್ರಯತ್ನಿಸಿ.",
  searchResultsFor: "ಇದಕ್ಕಾಗಿ ಫಲಿತಾಂಶಗಳು",

  language: "ಭಾಷೆ",
  chooseLanguage: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ",
  imageCredit: "ಚಿತ್ರ",
  notFoundTitle: "ಈ ಪುಟ ಇಲ್ಲ",
  notFoundBody: "ನೀವು ಬಂದ ದಾರಿ ಎಲ್ಲಿಗೂ ತಲುಪುವುದಿಲ್ಲ. ಹಿಂತಿರುಗಿ ಮತ್ತೆ ಆರಂಭಿಸಿ.",
  backHome: "ಮುಖಪುಟಕ್ಕೆ",
  uncitedNotice: "ತಾಣದ ಸ್ವಂತ ಸಾರಾಂಶ — ಇನ್ನೂ ಆಕರ ಸಹಿತ ವಿದ್ವತ್ ಅನುವಾದವಲ್ಲ.",
  footerTagline: "ಸನಾತನ ಧರ್ಮದ ಆಕರ ಗ್ರಂಥ — ಪಠ್ಯ, ದೇವಾಲಯ, ಆಚಾರ್ಯರು ಮತ್ತು ಪರಂಪರೆಗಳು.",
  footerRights: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
  footerExplore: "ಅನ್ವೇಷಿಸಿ",
  footerAbout: "ನಮ್ಮ ಬಗ್ಗೆ",

  citationPromise:
    "ಈ ತಾಣದ ಪ್ರತಿಯೊಂದು ಅನುವಾದವೂ, ಪ್ರತಿಯೊಂದು ಭಾಷ್ಯದ ನಮೂದೂ ತಾನು ಎಲ್ಲಿಂದ ಬಂದಿತೆಂದು ಹೇಳಲೇಬೇಕು. ಈ ನಿಯಮ ದತ್ತಸಂಚಯದಲ್ಲಿಯೇ ಜಾರಿಯಾಗಿದೆ — ಆಧಾರವಿಲ್ಲದ ಅನುವಾದವನ್ನು ಸಂಗ್ರಹಿಸಲು ಸಾಧ್ಯವೇ ಇಲ್ಲ — ಆದ್ದರಿಂದ ಆಧಾರವೆಂಬುದು ಸಂಪಾದಕನ ಭರವಸೆಯಲ್ಲ, ದಾಖಲೆಯ ಸತ್ಯ.",
  aboutIntro:
    "ಸನಾತನ ಧರ್ಮದ ಸಮಗ್ರತೆಯನ್ನು — ವೇದರಾಶಿ, ಉಪನಿಷತ್ತುಗಳು, ಗೀತೆ, ಎಲ್ಲ ಸಂಪ್ರದಾಯಗಳ ಭಾಷ್ಯಗಳು, ದೇವಾಲಯಗಳು ಮತ್ತು ಅವುಗಳ ಇತಿಹಾಸ, ಆಚಾರ-ಪರಂಪರೆಗಳು, ಸ್ತೋತ್ರಗಳು ಮತ್ತು ಅವುಗಳ ಪಠಣ — ಒಂದೇ ಕಡೆ ಹಿಡಿದಿಟ್ಟ ಸ್ಥಳವೊಂದು ಇಲ್ಲ. ಇದು ಅಂಥದೊಂದನ್ನು ಕಟ್ಟುವ ಪ್ರಯತ್ನ, ಹಂತಹಂತವಾಗಿ ಮತ್ತು ಅಂತಿಮ ದಿನಾಂಕವಿಲ್ಲದೆ.",
  aboutCitationHeading: "ವಿಸ್ತಾರಕ್ಕಿಂತ ಮೊದಲು ಆಧಾರ",
  aboutCitationBody:
    "ಆಕರಗ್ರಂಥವೊಂದರ ಮೌಲ್ಯ ಅದರ ಆಧಾರಗಳಷ್ಟೇ. ಪ್ರತಿಯೊಂದು ಅನುವಾದವೂ, ಪ್ರತಿಯೊಂದು ಭಾಷ್ಯದ ನಮೂದೂ ತಾನು ಎಲ್ಲಿಂದ ಬಂದಿತೆಂದು ಹೇಳಲೇಬೇಕು — ಇದು ಶಿಸ್ತಿಗೆ ಬಿಟ್ಟದ್ದಲ್ಲ, ದತ್ತಸಂಚಯದಲ್ಲಿಯೇ ಕಡ್ಡಾಯಗೊಳಿಸಲಾಗಿದೆ. ಹಿಂದಿನ ಕರಡುಗಳಿಂದ ಬಂದ ವಿಷಯವನ್ನು, ಸರಿಯಾದ ಆಧಾರಸಹಿತ ಅನುವಾದ ಅದರ ಸ್ಥಾನ ತುಂಬುವವರೆಗೆ, ಆಧಾರರಹಿತ ಸಂಪಾದಕೀಯ ಸಾರಾಂಶವೆಂದು ಗುರುತಿಸಲಾಗುತ್ತದೆ — ಮೌನವಾಗಿ ವಿದ್ವತ್ತೆಂದು ತೋರಿಸಲಾಗುವುದಿಲ್ಲ.",
  aboutLanguageBody:
    "ಈ ತಾಣವನ್ನು ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಹಿಂದಿಯಲ್ಲಿ ಓದಬಹುದು; ಭಾಷೆ ಬದಲಿಸಿದಾಗ ಕೇವಲ ಮೆನುಗಳಲ್ಲ, ವಿಷಯವೂ ಬದಲಾಗುತ್ತದೆ. ಪ್ರತಿ ಭಾಷೆಯೂ ತಾಣದ ಪ್ರತ್ಯೇಕ ಪ್ರತಿಯಲ್ಲ, ದತ್ತಸಂಚಯದ ಒಂದು ಸಾಲು — ಆದ್ದರಿಂದ ನಾಲ್ಕನೆಯ ಭಾಷೆ ಸೇರಿಸುವುದು ತಂತ್ರಜ್ಞಾನದ ಕೆಲಸವಲ್ಲ, ದತ್ತಾಂಶದ ಕೆಲಸ.",
  kollurBlurb:
    "ಕೊಲ್ಲೂರು · ಪರಶುರಾಮ ಕ್ಷೇತ್ರದ ಸಪ್ತ ಮುಕ್ತಿಸ್ಥಳಗಳಲ್ಲಿ ಒಂದು. ಇತಿಹಾಸ, ಪೌರಾಣಿಕ ಕಥೆ, ಆಚರಣೆಗಳು, ಆಗಮಶಾಸ್ತ್ರ ಮತ್ತು ಸ್ವಯಂಭೂ ಲಿಂಗದ ಮಹತ್ವ.",

  labelVerse: "ಶ್ಲೋಕ",
  labelInvocation: "ಶಾಂತಿಮಂತ್ರ",
  labelExplanation: "ವಿವರಣೆ",
  labelHideExplanation: "ವಿವರಣೆ ಮುಚ್ಚು",
  labelCompare: "ಭಾಷೆಗಳನ್ನು ಹೋಲಿಸಿ",
  labelHideCompare: "ಹೋಲಿಕೆ ಮುಚ್ಚು",
  labelTerms: "ತಿಳಿಯಬೇಕಾದ ಪದಗಳು",
  readWork: "ಶ್ಲೋಕಶಃ ಓದಿ",
};

const hi: UIStrings = {
  siteName: "तत् त्वम् असि",

  navTeachings: "उपदेश",
  navVerses: "श्लोक",
  navUpanishads: "उपनिषद्",
  navTeachers: "आचार्य",
  navTemples: "मंदिर",
  navConcepts: "संकल्पनाएँ",
  navMathas: "मठ",
  navSearch: "खोजें",
  navAbout: "परिचय",
  navOpenMenu: "मेन्यू",
  navCloseMenu: "बंद करें",
  navIndex: "अनुभाग",
  navMore: "और भी",

  heroTagline: "तत् त्वम् असि",
  heroSubtitle: "अद्वैत वेदांत · वेद · मंदिर · धर्म",
  heroEnter: "भीतर प्रवेश करें",
  heroExplore: "संकल्पनाएँ देखें",
  verseOfTheDay: "आज का श्लोक",
  mahavakyas: "चार महावाक्य",
  mahavakyasBlurb:
    "चार वाक्य, प्रत्येक वेद से एक। हर एक आत्मा और ब्रह्म की अभिन्नता की प्रत्यक्ष घोषणा है।",
  explorePillars: "मुख्य स्तंभ",
  pillarsBlurb: "सनातन धर्म की हर परंपरा, एक ही स्थान पर, निरंतर बढ़ती हुई।",
  readMore: "और पढ़ें",
  viewAll: "सब देखें",

  versesTitle: "पवित्र श्लोक",
  versesBlurb: "मूल संस्कृत में श्रुति, लिप्यंतरण और अनुवाद सहित।",
  upanishadsTitle: "उपनिषद्",
  upanishadsBlurb: "वेदों का अंतिम भाग — परंपरा का दार्शनिक हृदय।",
  teachersTitle: "आचार्य",
  teachersBlurb: "जिन्होंने परंपरा को सुरक्षित रखा, व्यवस्थित किया और आगे पहुँचाया।",
  templesTitle: "मंदिर",
  templesBlurb: "पत्थर में ब्रह्मांड — जहाँ वास्तुकला स्वयं सृष्टि की रचना कहती है।",
  conceptsTitle: "संकल्पनाएँ",
  conceptsBlurb: "वेदांत की पारिभाषिक शब्दावली, सटीक रूप से परिभाषित।",
  mathasTitle: "चार मठ",
  mathasBlurb: "आदि शंकराचार्य द्वारा स्थापित चार दिशाओं के पीठ।",

  labelVeda: "वेद",
  labelVerseCount: "श्लोक",
  labelKeyTeaching: "मुख्य उपदेश",
  labelChapter: "अध्याय",
  labelSource: "स्रोत",
  labelTradition: "परंपरा",
  labelEra: "काल",
  labelKeyWorks: "प्रमुख रचनाएँ",
  labelLocation: "स्थान",
  labelState: "राज्य",
  labelDynasty: "राजवंश",
  labelCentury: "निर्माण",
  labelArchitecture: "वास्तुशैली",
  labelDeity: "मुख्य देवता",
  labelDirection: "दिशा",
  labelMahavakya: "महावाक्य",
  labelSignificance: "महत्व",
  labelDefinition: "परिभाषा",
  labelRelated: "संबंधित",
  labelCommentary: "भाष्य",
  labelTranslation: "अनुवाद",
  labelFoundedBy: "संस्थापक",

  dirNorth: "उत्तर",
  dirSouth: "दक्षिण",
  dirEast: "पूर्व",
  dirWest: "पश्चिम",

  searchTitle: "खोजें",
  searchPlaceholder: "श्लोक, मंदिर, संकल्पना खोजें…",
  searchBlurb: "साइट के सभी श्लोक, आचार्य, मंदिर और संकल्पनाओं में खोजें।",
  searchNoResults: "कुछ नहीं मिला। दूसरा शब्द आज़माएँ।",
  searchResultsFor: "इसके परिणाम",

  language: "भाषा",
  chooseLanguage: "भाषा चुनें",
  imageCredit: "चित्र",
  notFoundTitle: "यह पृष्ठ मौजूद नहीं है",
  notFoundBody: "आपका मार्ग कहीं नहीं पहुँचता। लौटें और फिर से आरंभ करें।",
  backHome: "मुखपृष्ठ पर लौटें",
  uncitedNotice: "साइट का अपना सारांश — अभी तक स्रोत-सहित विद्वत् अनुवाद नहीं।",
  footerTagline: "सनातन धर्म का संदर्भ — ग्रंथ, मंदिर, आचार्य और परंपराएँ।",
  footerRights: "सर्वाधिकार सुरक्षित।",
  footerExplore: "अन्वेषण",
  footerAbout: "परिचय",

  citationPromise:
    "इस स्थल का प्रत्येक अनुवाद और प्रत्येक भाष्य-प्रविष्टि यह बताएगी ही कि वह कहाँ से आई। यह नियम डेटाबेस में ही लागू है — बिना स्रोत का अनुवाद संग्रहीत हो ही नहीं सकता — इसलिए प्रमाण संपादक का वचन नहीं, अभिलेख का तथ्य है।",
  aboutIntro:
    "सनातन धर्म के समग्र रूप को — वैदिक वाङ्मय, उपनिषद्, गीता, प्रत्येक संप्रदाय के भाष्य, मंदिर और उनका इतिहास, आचार और परंपराएँ, स्तोत्र और उनका पाठ — एक ही स्थान पर धारण करने वाला कोई स्थान नहीं है। यह वैसा ही एक स्थान बनाने का प्रयास है, क्रमशः और बिना किसी अंतिम तिथि के।",
  aboutCitationHeading: "विस्तार से पहले प्रमाण",
  aboutCitationBody:
    "किसी संदर्भग्रंथ का मूल्य उसके स्रोतों जितना ही होता है। प्रत्येक अनुवाद और प्रत्येक भाष्य-प्रविष्टि को यह बताना ही होगा कि वह कहाँ से आई — यह अनुशासन पर नहीं छोड़ा गया, डेटाबेस में ही अनिवार्य है। पूर्व प्रारूपों से आई सामग्री को, जब तक उचित प्रमाण-सहित अनुवाद उसका स्थान न ले, अप्रमाणित संपादकीय सारांश के रूप में चिह्नित किया जाता है — उसे चुपचाप विद्वत्ता के रूप में प्रस्तुत नहीं किया जाता।",
  aboutLanguageBody:
    "यह स्थल कन्नड़, अंग्रेज़ी और हिन्दी में पढ़ा जा सकता है, और भाषा बदलने पर केवल मेनू नहीं, सामग्री भी बदलती है। प्रत्येक भाषा स्थल की अलग प्रति नहीं, डेटाबेस की एक पंक्ति है — इसलिए चौथी भाषा जोड़ना अभियांत्रिकी का नहीं, आँकड़ों का काम है।",
  kollurBlurb:
    "कोल्लूर · परशुराम क्षेत्र के सात मुक्तिस्थलों में से एक। इतिहास, पौराणिक कथा, अनुष्ठान, आगमशास्त्र और स्वयंभू लिंग का महत्व।",

  labelVerse: "श्लोक",
  labelInvocation: "शांतिमंत्र",
  labelExplanation: "व्याख्या",
  labelHideExplanation: "व्याख्या छिपाएँ",
  labelCompare: "भाषाओं की तुलना",
  labelHideCompare: "तुलना छिपाएँ",
  labelTerms: "जानने योग्य पद",
  readWork: "श्लोकशः पढ़ें",
};

const DICTIONARIES: Record<Locale, UIStrings> = { en, kn, hi };

export function ui(locale: Locale): UIStrings {
  return DICTIONARIES[locale] ?? DICTIONARIES.en;
}
