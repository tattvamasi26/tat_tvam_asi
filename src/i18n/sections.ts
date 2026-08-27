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
}

export const SECTIONS: SectionDef[] = [
  {
    id: "vedas",
    href: "/vedas",
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
      en: "Stotras of praise — where metre, sound and meaning are inseparable.",
      kn: "ಸ್ತೋತ್ರಗಳು — ಛಂದಸ್ಸು, ನಾದ ಮತ್ತು ಅರ್ಥ ಬೇರ್ಪಡಿಸಲಾಗದವು.",
      hi: "स्तोत्र — जहाँ छंद, नाद और अर्थ अभिन्न हैं।",
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

/** Sections resolved for one locale, ready to render. */
export function sectionsFor(locale: Locale) {
  return SECTIONS.map((s) => ({
    id: s.id,
    href: s.href,
    glyph: s.glyph,
    label: s.label[locale] ?? s.label.en,
    blurb: s.blurb[locale] ?? s.blurb.en,
  }));
}

/** Secondary destinations — reference material rather than pillars. */
export const SECONDARY = [
  { id: "concepts", href: "/concepts" },
  { id: "mathas", href: "/mathas" },
  { id: "verses", href: "/verses" },
  { id: "search", href: "/search" },
  { id: "about", href: "/about" },
] as const;
