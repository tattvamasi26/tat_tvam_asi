import type { Locale } from "./config";

// ─────────────────────────────────────────────────────────
//  The top-level sections of the site.
//
//  ONE list, used by the navigation, the footer and the home
//  index alike. The founder's point stands: this list will keep
//  growing, so nothing may hard-code six or seven of anything.
//  Adding a section is one entry here — no component changes.
//
//  `glyph` is the Devanagari/Sanskrit shorthand shown beside each
//  entry in the nav; it is decorative and always paired with the
//  translated label, never used alone.
// ─────────────────────────────────────────────────────────

export interface SectionDef {
  /** Stable key, also used for the nav's numbering. */
  id: string;
  href: string;
  glyph: string;
  label: Record<Locale, string>;
  blurb: Record<Locale, string>;
  /**
   * The section this one is reached through. The Vedas and the
   * Upanishads are branches of shastras, and the festivals are the
   * year within Rituals & Festivals, so neither is repeated in the
   * top-level nav beside its parent — which was the site showing the
   * same thing twice. Their URLs are unchanged; only the route in
   * changed.
   */
  parent?: string;
}

export const SECTIONS: SectionDef[] = [
  {
    // The map of the whole tradition. It comes first because it is
    // the page that puts every other section in its place — and it
    // holds no texts of its own, only links to the sections that do.
    id: "shastras",
    href: "/shastras",
    glyph: "शास्त्र",
    label: {
      en: "Shastras & Puranas",
      kn: "ಶಾಸ್ತ್ರ ಮತ್ತು ಪುರಾಣ",
      hi: "शास्त्र और पुराण",
    },
    blurb: {
      en: "The whole tradition in one shape — Veda, Vedānta, Vedāṅga, Darśana, Dharma, Āgama, Purāṇa, Itihāsa and the teaching texts.",
      kn: "ಇಡೀ ಪರಂಪರೆ ಒಂದೇ ಆಕಾರದಲ್ಲಿ — ವೇದ, ವೇದಾಂತ, ವೇದಾಂಗ, ದರ್ಶನ, ಧರ್ಮ, ಆಗಮ, ಪುರಾಣ, ಇತಿಹಾಸ ಮತ್ತು ಪ್ರಕರಣ ಗ್ರಂಥಗಳು.",
      hi: "पूरी परंपरा एक ही आकार में — वेद, वेदांत, वेदांग, दर्शन, धर्म, आगम, पुराण, इतिहास और प्रकरण ग्रंथ।",
    },
  },
  {
    id: "vedas",
    href: "/vedas",
    parent: "shastras",
    glyph: "वेद",
    label: {
      en: "Vedas",
      kn: "ವೇದಗಳು",
      hi: "वेद",
    },
    blurb: {
      en: "The four Samhitas — the oldest layer of the tradition, carried by voice before it was ever written.",
      kn: "ನಾಲ್ಕು ಸಂಹಿತೆಗಳು — ಪರಂಪರೆಯ ಅತ್ಯಂತ ಪ್ರಾಚೀನ ಸ್ತರ, ಬರೆಯುವ ಮೊದಲೇ ಧ್ವನಿಯಿಂದ ಸಾಗಿಬಂದದ್ದು.",
      hi: "चार संहिताएँ — परंपरा की प्राचीनतम परत, लिखे जाने से पूर्व ही वाणी से संचरित।",
    },
  },
  {
    id: "upanishads",
    href: "/upanishads",
    parent: "shastras",
    glyph: "उप",
    label: {
      en: "Upanishads",
      kn: "ಉಪನಿಷತ್ತುಗಳು",
      hi: "उपनिषद्",
    },
    blurb: {
      en: "The concluding portions of the Vedas — where ritual gives way to enquiry.",
      kn: "ವೇದಗಳ ಅಂತಿಮ ಭಾಗ — ಕರ್ಮಕಾಂಡವು ವಿಚಾರಕ್ಕೆ ದಾರಿ ಬಿಡುವಲ್ಲಿ.",
      hi: "वेदों का अंतिम भाग — जहाँ कर्मकांड विचार को मार्ग देता है।",
    },
  },
  {
    id: "puranas",
    href: "/puranas",
    parent: "shastras",
    glyph: "पुराण",
    label: {
      en: "The Puranas",
      kn: "ಪುರಾಣಗಳು",
      hi: "पुराण",
    },
    blurb: {
      en: "Eighteen Mahapuranas — what each one is, what is in it, and what came out of it into practice.",
      kn: "ಹದಿನೆಂಟು ಮಹಾಪುರಾಣಗಳು — ಪ್ರತಿಯೊಂದೂ ಏನು, ಅದರಲ್ಲಿ ಏನಿದೆ, ಮತ್ತು ಅದರಿಂದ ಆಚರಣೆಗೆ ಏನು ಬಂತು.",
      hi: "अठारह महापुराण — प्रत्येक क्या है, उसमें क्या है, और उससे आचरण में क्या आया।",
    },
  },
  {
    id: "cosmos",
    href: "/cosmos",
    parent: "puranas",
    glyph: "कालः",
    label: {
      en: "Time and the cosmos",
      kn: "ಕಾಲ ಮತ್ತು ವಿಶ್ವ",
      hi: "काल और विश्व",
    },
    blurb: {
      en: "The scheme of ages, worlds and dissolutions the Puranas work out in more detail than almost anything else they contain.",
      kn: "ಯುಗ, ಲೋಕ ಮತ್ತು ಪ್ರಳಯಗಳ ಯೋಜನೆ — ಪುರಾಣಗಳು ತಮ್ಮಲ್ಲಿನ ಬಹುತೇಕ ಯಾವುದಕ್ಕಿಂತಲೂ ಹೆಚ್ಚು ವಿವರವಾಗಿ ರೂಪಿಸಿದ್ದು.",
      hi: "युग, लोक और प्रलय की वह व्यवस्था जिसे पुराण अपने भीतर की लगभग हर वस्तु से अधिक विस्तार से गढ़ते हैं।",
    },
  },
  {
    // Reached through Shastras, where the Darśana branch sits. It is
    // not a top-level pillar: a reader arrives at the six systems
    // after the texts, not instead of them.
    id: "darshanas",
    href: "/darshanas",
    parent: "shastras",
    glyph: "दर्शन",
    label: {
      en: "The six darshanas",
      kn: "ಷಡ್ದರ್ಶನಗಳು",
      hi: "षड्दर्शन",
    },
    blurb: {
      en: "Nyaya, Vaisheshika, Sankhya, Yoga, Mimamsa and Vedanta — three questions asked twice each, and how far each school will trust a means of knowledge.",
      kn: "ನ್ಯಾಯ, ವೈಶೇಷಿಕ, ಸಾಂಖ್ಯ, ಯೋಗ, ಮೀಮಾಂಸಾ ಮತ್ತು ವೇದಾಂತ — ಎರಡೆರಡು ಬಾರಿ ಕೇಳಿದ ಮೂರು ಪ್ರಶ್ನೆಗಳು, ಮತ್ತು ಪ್ರತಿ ಶಾಖೆ ಪ್ರಮಾಣವನ್ನು ಎಷ್ಟು ನಂಬುತ್ತದೆ.",
      hi: "न्याय, वैशेषिक, सांख्य, योग, मीमांसा और वेदांत — दो-दो बार पूछे गए तीन प्रश्न, और हर शाखा प्रमाण पर कितना भरोसा करती है।",
    },
  },
  {
    id: "gita",
    href: "/gita",
    glyph: "गीता",
    label: {
      en: "Geetha Rasa Dhara",
      kn: "ಗೀತಾ ರಸಧಾರಾ",
      hi: "गीता रसधारा",
    },
    blurb: {
      en: "Seven hundred verses between two armies, and the eighteen yogas they contain.",
      kn: "ಎರಡು ಸೇನೆಗಳ ನಡುವಿನ ಏಳುನೂರು ಶ್ಲೋಕಗಳು, ಮತ್ತು ಅವುಗಳೊಳಗಿನ ಹದಿನೆಂಟು ಯೋಗಗಳು.",
      hi: "दो सेनाओं के बीच सात सौ श्लोक, और उनमें निहित अठारह योग।",
    },
  },
  {
    id: "acharyas",
    href: "/acharyas",
    glyph: "आचार्य",
    label: {
      en: "Acharyas of Bharata Varsha",
      kn: "ಭಾರತವರ್ಷದ ಆಚಾರ್ಯರು",
      hi: "भारतवर्ष के आचार्य",
    },
    blurb: {
      en: "Those who preserved, systematised and transmitted the tradition — across every sampradaya.",
      kn: "ಪರಂಪರೆಯನ್ನು ಕಾಪಾಡಿ, ವ್ಯವಸ್ಥೆಗೊಳಿಸಿ, ಮುಂದಿನವರಿಗೆ ತಲುಪಿಸಿದವರು — ಎಲ್ಲಾ ಸಂಪ್ರದಾಯಗಳಲ್ಲಿಯೂ.",
      hi: "जिन्होंने परंपरा को सुरक्षित रखा, व्यवस्थित किया और आगे पहुँचाया — हर संप्रदाय में।",
    },
  },
  {
    id: "temples",
    href: "/temples",
    glyph: "मन्दिर",
    label: {
      en: "Temples",
      kn: "ದೇವಾಲಯಗಳು",
      hi: "मंदिर",
    },
    blurb: {
      en: "Cosmograms in stone, and the histories of the dynasties that raised them.",
      kn: "ಕಲ್ಲಿನಲ್ಲಿ ಬ್ರಹ್ಮಾಂಡ, ಮತ್ತು ಅವುಗಳನ್ನು ಕಟ್ಟಿಸಿದ ರಾಜವಂಶಗಳ ಇತಿಹಾಸ.",
      hi: "पत्थर में ब्रह्मांड, और उन्हें बनवाने वाले राजवंशों का इतिहास।",
    },
  },
  {
    id: "stutis",
    href: "/stutis",
    glyph: "स्तुति",
    label: {
      en: "Devatha Stutis",
      kn: "ದೇವತಾ ಸ್ತುತಿಗಳು",
      hi: "देवता स्तुतियाँ",
    },
    blurb: {
      en: "Stotras and mantras, arranged by devata.",
      kn: "ದೇವತೆಗಳ ಪ್ರಕಾರ ಜೋಡಿಸಿದ ಸ್ತೋತ್ರಗಳು ಮತ್ತು ಮಂತ್ರಗಳು.",
      hi: "देवताओं के अनुसार क्रम से स्तोत्र और मंत्र।",
    },
  },
  {
    // The first section a reader does rather than reads.
    id: "practice",
    href: "/practice",
    glyph: "अभ्यास",
    label: {
      en: "Everyday Vedanta",
      kn: "ನಿತ್ಯ ವೇದಾಂತ",
      hi: "रोज़मर्रा वेदांत",
    },
    blurb: {
      en: "Sittings you can actually do — with the site's own texts, and a timer that asks nothing of you but the time.",
      kn: "ನಿಜವಾಗಿ ಮಾಡಬಹುದಾದ ಕೂರುವಿಕೆಗಳು — ಈ ತಾಣದ ಪಠ್ಯಗಳೊಂದಿಗೆ, ಮತ್ತು ಸಮಯವನ್ನಷ್ಟೇ ಕೇಳುವ ಗಡಿಯಾರದೊಂದಿಗೆ.",
      hi: "वे बैठकें जो वास्तव में की जा सकें — इस साइट के अपने पाठों के साथ, और ऐसे समय-यंत्र के साथ जो आपसे केवल समय माँगता है।",
    },
  },
  {
    // Rites and festivals are one subject: both are things done on an
    // occasion, and splitting them would have put the eleventh tithi
    // of the moon in one section and the naming on the eleventh day
    // in another. The front door holds the rites; the year is reached
    // through it, the way the Vedas are reached through Shastras.
    id: "rituals",
    href: "/rituals",
    glyph: "संस्कार",
    label: {
      en: "Rituals & Festivals",
      kn: "ಆಚರಣೆ ಮತ್ತು ಹಬ್ಬಗಳು",
      hi: "अनुष्ठान और पर्व",
    },
    blurb: {
      en: "What is actually done — at a birth, at dusk, on the eleventh day of the moon, and once a year in the order of the lunar calendar.",
      kn: "ನಿಜವಾಗಿ ಏನು ಮಾಡುತ್ತಾರೆ — ಹುಟ್ಟಿನಲ್ಲಿ, ಸಂಜೆಯಲ್ಲಿ, ಚಂದ್ರನ ಹನ್ನೊಂದನೇ ದಿನದಲ್ಲಿ, ಮತ್ತು ವರ್ಷಕ್ಕೊಮ್ಮೆ ಚಾಂದ್ರಮಾನ ಕ್ರಮದಲ್ಲಿ.",
      hi: "वास्तव में क्या किया जाता है — जन्म पर, सांध्यकाल में, चंद्रमा की ग्यारहवीं तिथि पर, और वर्ष में एक बार चांद्र क्रम में।",
    },
  },
  {
    // A festival has a date, and the date comes round — which makes
    // this the first section on the site with its own reason for a
    // reader to return.
    id: "festivals",
    href: "/festivals",
    parent: "rituals",
    glyph: "उत्सव",
    label: {
      en: "Festivals",
      kn: "ಹಬ್ಬಗಳು",
      hi: "पर्व",
    },
    blurb: {
      en: "The year as it is actually kept — what is observed, when, and why. Dates are lunar, not Gregorian.",
      kn: "ವರ್ಷ ನಿಜವಾಗಿ ಆಚರಿಸಲ್ಪಡುವ ರೀತಿ — ಏನು ಮಾಡುತ್ತಾರೆ, ಯಾವಾಗ, ಏಕೆ. ದಿನಾಂಕಗಳು ಚಾಂದ್ರಮಾನದವು.",
      hi: "वर्ष जैसा वास्तव में मनाया जाता है — क्या किया जाता है, कब, और क्यों। तिथियाँ चांद्र हैं।",
    },
  },
  {
    id: "bhajans",
    href: "/bhajans",
    glyph: "भजन",
    label: {
      en: "Bhajans",
      kn: "ಭಜನೆಗಳು",
      hi: "भजन",
    },
    blurb: {
      en: "The devotional song traditions, in the languages people actually sang in.",
      kn: "ಭಕ್ತಿಗೀತೆಗಳ ಪರಂಪರೆ, ಜನರು ನಿಜವಾಗಿ ಹಾಡಿದ ಭಾಷೆಗಳಲ್ಲಿ.",
      hi: "भक्ति-गीत परंपराएँ, उन्हीं भाषाओं में जिनमें लोग वास्तव में गाते थे।",
    },
  },
];

/**
 * Every section resolved for one locale. Includes the children, since
 * each section page looks itself up here by id for its own heading.
 */
export function sectionsFor(locale: Locale) {
  return SECTIONS.map((s) => ({
    id: s.id,
    href: s.href,
    glyph: s.glyph,
    label: s.label[locale] ?? s.label.en,
    blurb: s.blurb[locale] ?? s.blurb.en,
    parent: s.parent ?? null,
  }));
}

/**
 * What the nav, the footer and the home page show: sections a reader
 * reaches directly. A branch of shastras is reached through it.
 */
export function topLevelSectionsFor(locale: Locale) {
  return sectionsFor(locale).filter((s) => !s.parent);
}

/** The sections that sit under one parent, in order. */
export function childSectionsFor(parent: string, locale: Locale) {
  return sectionsFor(locale).filter((s) => s.parent === parent);
}

/** Secondary destinations — reference material rather than pillars. */
export const SECONDARY = [
  { id: "concepts", href: "/concepts" },
  { id: "mathas", href: "/mathas" },
  { id: "verses", href: "/verses" },
  { id: "search", href: "/search" },
  { id: "about", href: "/about" },
] as const;
