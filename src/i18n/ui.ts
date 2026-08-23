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
}

const en: UIStrings = {
  navTeachings: "Teachings",
  navVerses: "Verses",
  navUpanishads: "Upanishads",
  navTeachers: "Acharyas",
  navTemples: "Temples",
  navConcepts: "Concepts",
  navMathas: "Mathas",
  navSearch: "Search",
  navAbout: "About",

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
};

const kn: UIStrings = {
  navTeachings: "ಬೋಧನೆಗಳು",
  navVerses: "ಶ್ಲೋಕಗಳು",
  navUpanishads: "ಉಪನಿಷತ್ತುಗಳು",
  navTeachers: "ಆಚಾರ್ಯರು",
  navTemples: "ದೇವಾಲಯಗಳು",
  navConcepts: "ಪರಿಕಲ್ಪನೆಗಳು",
  navMathas: "ಮಠಗಳು",
  navSearch: "ಹುಡುಕಿ",
  navAbout: "ನಮ್ಮ ಬಗ್ಗೆ",

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
};

const hi: UIStrings = {
  navTeachings: "उपदेश",
  navVerses: "श्लोक",
  navUpanishads: "उपनिषद्",
  navTeachers: "आचार्य",
  navTemples: "मंदिर",
  navConcepts: "संकल्पनाएँ",
  navMathas: "मठ",
  navSearch: "खोजें",
  navAbout: "परिचय",

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
};

const DICTIONARIES: Record<Locale, UIStrings> = { en, kn, hi };

export function ui(locale: Locale): UIStrings {
  return DICTIONARIES[locale] ?? DICTIONARIES.en;
}
