import type { Locale } from "@/i18n/config";

// ─────────────────────────────────────────────────────────
//  The rites.
//
//  The festivals were the easy half of this section: a festival has a
//  date, and a date is a fact. A rite has no date. It has an
//  occasion — a birth, a dusk, the eleventh tithi, a death — and the
//  hard editorial work is saying what is actually done without
//  turning into a priest's manual on one side or a greeting card on
//  the other.
//
//  Three rules this file keeps:
//
//  **A rite that has fallen out of use says so.** Six or seven of the
//  sixteen saṃskāras are still commonly done. The rest are named in
//  `SAMSKARAS` with `kept` set to what is true of them, because a
//  list of sixteen with nine silently missing would claim a
//  completeness the tradition no longer has.
//
//  **Where a practice is contested, the disagreement is printed.**
//  Who may be given the upanayana, and who may perform a śrāddha, are
//  both live questions with more than one answer in circulation. The
//  site's job is to say that, not to settle it.
//
//  **No mantra is given as an instruction.** Where the site already
//  holds the words — the Gāyatrī, a stotra — a rite links to them.
//  Nothing here teaches a rite to somebody who has no one to learn it
//  from, and nothing pretends to.
//
//  Sanskrit is stored in Devanagari and converted by the view, as
//  everywhere else.
// ─────────────────────────────────────────────────────────

export type RitualGroupId = "samskara" | "nitya" | "vrata" | "yajna" | "pitru" | "kshetra";

/** Whether a rite of passage is still performed. Said, never implied. */
export type Kept = "common" | "rare" | "lapsed";

export interface RitualLink {
  href: string;
  label: Record<Locale, string>;
}

export interface RitualGroup {
  id: RitualGroupId;
  name: Record<Locale, string>;
  /** In Devanagari. */
  sanskrit: string;
  /** Two or three letters, set large on the group's plate. */
  glyph: string;
  lede: Record<Locale, string>;
}

export interface Ritual {
  slug: string;
  name: Record<Locale, string>;
  /** In Devanagari. */
  sanskrit: string;
  group: RitualGroupId;
  /** Runs straight through the groups, so the pager and the page agree. */
  order: number;
  /** The occasion — a stage of life, an hour, a tithi. Never a date. */
  when: Record<Locale, string>;
  /** One line: what this rite is. */
  lede: Record<Locale, string>;
  /** What is actually done. */
  observed: Record<Locale, string>;
  /** Why — and where possible, the thing a reader would not guess. */
  significance: Record<Locale, string>;
  /** Where it differs from place to place, or where it is argued over. */
  regional?: Record<Locale, string>;
  /** What is said, where this site holds the words. */
  words?: RitualLink[];
  /** Anything else here worth following. */
  links?: RitualLink[];
}

/** One of the sixteen, for the arc across a life. */
export interface Samskara {
  id: string;
  name: Record<Locale, string>;
  sanskrit: string;
  /** What it marks, in one line. */
  marks: Record<Locale, string>;
  /** The rite's own page, where one is written. */
  slug?: string;
  kept: Kept;
}

const L = (href: string, en: string, kn: string, hi: string): RitualLink => ({
  href,
  label: { en, kn, hi },
});

// ── the groups ──────────────────────────────────────────────

export const RITUAL_GROUPS: RitualGroup[] = [
  {
    id: "samskara",
    name: { en: "Rites of passage", kn: "ಸಂಸ್ಕಾರಗಳು", hi: "संस्कार" },
    sanskrit: "षोडशसंस्काराः",
    glyph: "संस्कार",
    lede: {
      en: "Sixteen rites marking a life from before birth to after death. Eight of them are still commonly done; the other eight are named here anyway, because a list of sixteen with half of it quietly missing would look complete and would not be.",
      kn: "ಹುಟ್ಟುವ ಮೊದಲಿನಿಂದ ಸತ್ತ ನಂತರದವರೆಗೆ ಬದುಕನ್ನು ಗುರುತಿಸುವ ಹದಿನಾರು ಸಂಸ್ಕಾರಗಳು. ಅವುಗಳಲ್ಲಿ ಎಂಟು ಇಂದಿಗೂ ಸಾಮಾನ್ಯ; ಉಳಿದ ಎಂಟನ್ನೂ ಇಲ್ಲಿ ಹೆಸರಿಸಲಾಗಿದೆ — ಅರ್ಧ ಸದ್ದಿಲ್ಲದೆ ಬಿಟ್ಟುಹೋದ ಹದಿನಾರರ ಪಟ್ಟಿ ಪೂರ್ಣವಾಗಿ ಕಾಣುತ್ತದೆ, ಆದರೆ ಇರುವುದಿಲ್ಲ.",
      hi: "जन्म से पहले से मृत्यु के बाद तक जीवन को चिह्नित करने वाले सोलह संस्कार। इनमें आठ आज भी सामान्य हैं; शेष आठ को भी यहाँ नाम दिया गया है — आधी चुपचाप छूटी हुई सोलह की सूची पूरी दिखती है, पूरी होती नहीं।",
    },
  },
  {
    id: "nitya",
    name: { en: "Every day", kn: "ನಿತ್ಯ ಕರ್ಮ", hi: "नित्य कर्म" },
    sanskrit: "नित्यकर्म",
    glyph: "नित्य",
    lede: {
      en: "What is done daily, at fixed hours, whether or not it is felt. The tradition calls these nitya — obligatory, and so not a matter of mood.",
      kn: "ದಿನನಿತ್ಯ, ನಿಗದಿತ ಹೊತ್ತಿನಲ್ಲಿ, ಭಾವ ಬಂದರೂ ಬರದಿದ್ದರೂ ಮಾಡುವುದು. ಪರಂಪರೆ ಇವನ್ನು ನಿತ್ಯ ಎನ್ನುತ್ತದೆ — ಕಡ್ಡಾಯ, ಆದ್ದರಿಂದ ಮನಸ್ಸಿನ ಲಹರಿಯ ಪ್ರಶ್ನೆಯಲ್ಲ.",
      hi: "जो प्रतिदिन, नियत घड़ी पर, भाव हो या न हो, किया जाता है। परंपरा इन्हें नित्य कहती है — अनिवार्य, इसलिए मनोदशा का विषय नहीं।",
    },
  },
  {
    id: "vrata",
    name: { en: "Days kept", kn: "ವ್ರತಗಳು", hi: "व्रत" },
    sanskrit: "व्रतानि",
    glyph: "व्रत",
    lede: {
      en: "Observances fixed by the moon rather than by the calendar — a fast, a vigil, a thing given up for a season.",
      kn: "ಕ್ಯಾಲೆಂಡರಿನಿಂದಲ್ಲ, ಚಂದ್ರನಿಂದ ನಿಗದಿಯಾದ ಆಚರಣೆಗಳು — ಉಪವಾಸ, ಜಾಗರಣೆ, ಒಂದು ಕಾಲಕ್ಕೆ ಬಿಟ್ಟುಕೊಡುವ ಒಂದು ವಸ್ತು.",
      hi: "कैलेंडर से नहीं, चंद्रमा से नियत आचरण — उपवास, जागरण, एक ऋतु के लिए छोड़ी गई एक वस्तु।",
    },
  },
  {
    id: "yajna",
    name: { en: "The fire", kn: "ಯಜ್ಞ", hi: "यज्ञ" },
    sanskrit: "यज्ञः",
    glyph: "यज्ञ",
    lede: {
      en: "Offering into fire: the oldest rite the Vedas describe, and the one the Upanishads argue with hardest.",
      kn: "ಅಗ್ನಿಯಲ್ಲಿ ಅರ್ಪಣೆ: ವೇದಗಳು ವರ್ಣಿಸುವ ಅತ್ಯಂತ ಪ್ರಾಚೀನ ಕರ್ಮ, ಮತ್ತು ಉಪನಿಷತ್ತುಗಳು ಅತಿ ತೀವ್ರವಾಗಿ ಪ್ರಶ್ನಿಸುವ ಕರ್ಮ.",
      hi: "अग्नि में अर्पण: वेद जिस रीति का वर्णन करते हैं उनमें सबसे प्राचीन, और उपनिषद् जिससे सबसे तीव्र विवाद करते हैं वही।",
    },
  },
  {
    id: "pitru",
    name: { en: "For those who have gone", kn: "ಪಿತೃ ಕಾರ್ಯ", hi: "पितृ कर्म" },
    sanskrit: "पितृकर्म",
    glyph: "पितृ",
    lede: {
      en: "Rites owed to the dead. The tradition treats them as a debt, not a kindness — one of the three a person is born carrying.",
      kn: "ಮೃತರಿಗೆ ಸಲ್ಲಬೇಕಾದ ಕರ್ಮಗಳು. ಪರಂಪರೆ ಇವನ್ನು ಉಪಕಾರವೆಂದಲ್ಲ, ಋಣವೆಂದು ಕಾಣುತ್ತದೆ — ಹುಟ್ಟುವಾಗಲೇ ಹೊತ್ತು ಬರುವ ಮೂರು ಋಣಗಳಲ್ಲಿ ಒಂದು.",
      hi: "मृतकों के प्रति देय कर्म। परंपरा इन्हें उपकार नहीं, ऋण मानती है — जन्म के साथ ही उठाए गए तीन ऋणों में एक।",
    },
  },
  {
    id: "kshetra",
    name: { en: "Going to the place", kn: "ಕ್ಷೇತ್ರ", hi: "क्षेत्र" },
    sanskrit: "क्षेत्रयात्रा",
    glyph: "क्षेत्र",
    lede: {
      en: "What is done on arriving somewhere held to be a kṣetra, and what is done to get there.",
      kn: "ಕ್ಷೇತ್ರವೆಂದು ಪರಿಗಣಿಸಲಾದ ಕಡೆ ತಲುಪಿದ ಮೇಲೆ ಮಾಡುವುದು, ಮತ್ತು ಅಲ್ಲಿಗೆ ತಲುಪಲು ಮಾಡುವುದು.",
      hi: "जिसे क्षेत्र माना जाता है वहाँ पहुँचने पर जो किया जाता है, और वहाँ पहुँचने के लिए जो किया जाता है।",
    },
  },
];

// ── the sixteen, in order across a life ─────────────────────

export const SAMSKARAS: Samskara[] = [
  {
    id: "garbhadhana",
    name: { en: "Garbhādhāna", kn: "ಗರ್ಭಾಧಾನ", hi: "गर्भाधान" },
    sanskrit: "गर्भाधानम्",
    marks: {
      en: "Conception, undertaken deliberately rather than left to happen.",
      kn: "ಗರ್ಭಧಾರಣೆ — ಆಗುತ್ತದೆ ಎಂದು ಬಿಡುವ ಬದಲು ಸಂಕಲ್ಪಿಸಿ ಕೈಗೊಳ್ಳುವುದು.",
      hi: "गर्भधारण — हो जाने पर छोड़ने के बजाय संकल्प से किया गया।",
    },
    kept: "lapsed",
  },
  {
    id: "pumsavana",
    name: { en: "Puṃsavana", kn: "ಪುಂಸವನ", hi: "पुंसवन" },
    sanskrit: "पुंसवनम्",
    marks: {
      en: "The third month of pregnancy.",
      kn: "ಗರ್ಭದ ಮೂರನೇ ತಿಂಗಳು.",
      hi: "गर्भ का तीसरा मास।",
    },
    kept: "lapsed",
  },
  {
    id: "simantonnayana",
    name: { en: "Sīmantonnayana", kn: "ಸೀಮಂತೋನ್ನಯನ", hi: "सीमंतोन्नयन" },
    sanskrit: "सीमन्तोन्नयनम्",
    marks: {
      en: "The seventh or eighth month — the parting of the hair, and bangles.",
      kn: "ಏಳು ಅಥವಾ ಎಂಟನೇ ತಿಂಗಳು — ಬೈತಲೆ ತೆಗೆಯುವುದು, ಬಳೆ ತೊಡಿಸುವುದು.",
      hi: "सातवाँ या आठवाँ मास — माँग निकालना, और चूड़ियाँ।",
    },
    slug: "simantonnayana",
    kept: "common",
  },
  {
    id: "jatakarma",
    name: { en: "Jātakarma", kn: "ಜಾತಕರ್ಮ", hi: "जातकर्म" },
    sanskrit: "जातकर्म",
    marks: {
      en: "The hour of birth.",
      kn: "ಹುಟ್ಟಿದ ಗಳಿಗೆ.",
      hi: "जन्म की घड़ी।",
    },
    slug: "jatakarma",
    kept: "rare",
  },
  {
    id: "namakarana",
    name: { en: "Nāmakaraṇa", kn: "ನಾಮಕರಣ", hi: "नामकरण" },
    sanskrit: "नामकरणम्",
    marks: {
      en: "The naming, on the eleventh or twelfth day.",
      kn: "ಹನ್ನೊಂದು ಅಥವಾ ಹನ್ನೆರಡನೇ ದಿನದ ಹೆಸರಿಡುವಿಕೆ.",
      hi: "ग्यारहवें या बारहवें दिन नामकरण।",
    },
    slug: "namakarana",
    kept: "common",
  },
  {
    id: "nishkramana",
    name: { en: "Niṣkramaṇa", kn: "ನಿಷ್ಕ್ರಮಣ", hi: "निष्क्रमण" },
    sanskrit: "निष्क्रमणम्",
    marks: {
      en: "The child taken out of the house for the first time.",
      kn: "ಮಗುವನ್ನು ಮೊದಲ ಬಾರಿ ಮನೆಯಿಂದ ಹೊರಗೆ ಕರೆದೊಯ್ಯುವುದು.",
      hi: "शिशु को पहली बार घर से बाहर लाना।",
    },
    kept: "rare",
  },
  {
    id: "annaprashana",
    name: { en: "Annaprāśana", kn: "ಅನ್ನಪ್ರಾಶನ", hi: "अन्नप्राशन" },
    sanskrit: "अन्नप्राशनम्",
    marks: {
      en: "The first solid food.",
      kn: "ಮೊದಲ ಘನ ಆಹಾರ.",
      hi: "पहला ठोस आहार।",
    },
    slug: "annaprashana",
    kept: "common",
  },
  {
    id: "chudakarma",
    name: { en: "Chūḍākarma", kn: "ಚೂಡಾಕರ್ಮ", hi: "चूड़ाकर्म" },
    sanskrit: "चूडाकर्म",
    marks: {
      en: "The first cutting of the hair.",
      kn: "ಮೊದಲ ಬಾರಿ ಕೂದಲು ತೆಗೆಸುವುದು.",
      hi: "पहली बार केश उतारना।",
    },
    slug: "chudakarma",
    kept: "common",
  },
  {
    id: "karnavedha",
    name: { en: "Karṇavedha", kn: "ಕರ್ಣವೇಧ", hi: "कर्णवेध" },
    sanskrit: "कर्णवेधः",
    marks: {
      en: "The ears pierced.",
      kn: "ಕಿವಿ ಚುಚ್ಚುವುದು.",
      hi: "कान छेदना।",
    },
    kept: "common",
  },
  {
    id: "upanayana",
    name: { en: "Upanayana", kn: "ಉಪನಯನ", hi: "उपनयन" },
    sanskrit: "उपनयनम्",
    marks: {
      en: "The thread, and the Gāyatrī given for the first time.",
      kn: "ಜನಿವಾರ, ಮತ್ತು ಮೊದಲ ಬಾರಿ ಕೊಡಲಾಗುವ ಗಾಯತ್ರೀ.",
      hi: "यज्ञोपवीत, और पहली बार दी गई गायत्री।",
    },
    slug: "upanayana",
    kept: "common",
  },
  {
    id: "vedarambha",
    name: { en: "Vedārambha", kn: "ವೇದಾರಂಭ", hi: "वेदारंभ" },
    sanskrit: "वेदारम्भः",
    marks: {
      en: "The beginning of Vedic study proper.",
      kn: "ವೇದಾಧ್ಯಯನದ ನಿಜವಾದ ಆರಂಭ.",
      hi: "वेदाध्ययन का वास्तविक आरंभ।",
    },
    kept: "rare",
  },
  {
    id: "keshanta",
    name: { en: "Keśānta", kn: "ಕೇಶಾಂತ", hi: "केशांत" },
    sanskrit: "केशान्तः",
    marks: {
      en: "The first shaving, at about sixteen.",
      kn: "ಸುಮಾರು ಹದಿನಾರನೇ ವಯಸ್ಸಿನ ಮೊದಲ ಕ್ಷೌರ.",
      hi: "लगभग सोलह वर्ष पर पहली हजामत।",
    },
    kept: "lapsed",
  },
  {
    id: "samavartana",
    name: { en: "Samāvartana", kn: "ಸಮಾವರ್ತನ", hi: "समावर्तन" },
    sanskrit: "समावर्तनम्",
    marks: {
      en: "Leaving the teacher's house — the end of studentship.",
      kn: "ಗುರುಕುಲ ಬಿಡುವುದು — ವಿದ್ಯಾರ್ಥಿ ಜೀವನದ ಕೊನೆ.",
      hi: "गुरुगृह से विदा — विद्यार्थी-जीवन का अंत।",
    },
    kept: "lapsed",
  },
  {
    id: "vivaha",
    name: { en: "Vivāha", kn: "ವಿವಾಹ", hi: "विवाह" },
    sanskrit: "विवाहः",
    marks: {
      en: "Marriage.",
      kn: "ಮದುವೆ.",
      hi: "विवाह।",
    },
    slug: "vivaha",
    kept: "common",
  },
  {
    id: "vanaprastha",
    name: { en: "Vānaprastha", kn: "ವಾನಪ್ರಸ್ಥ", hi: "वानप्रस्थ" },
    sanskrit: "वानप्रस्थः",
    marks: {
      en: "Withdrawal from household affairs.",
      kn: "ಗೃಹಕಾರ್ಯಗಳಿಂದ ಹಿಂದೆ ಸರಿಯುವುದು.",
      hi: "गृहस्थी से निवृत्ति।",
    },
    kept: "lapsed",
  },
  {
    id: "antyeshti",
    name: { en: "Antyeṣṭi", kn: "ಅಂತ್ಯೇಷ್ಟಿ", hi: "अंत्येष्टि" },
    sanskrit: "अन्त्येष्टिः",
    marks: {
      en: "The last rite, performed for a person and not by them.",
      kn: "ಕೊನೆಯ ಸಂಸ್ಕಾರ — ತಾನು ಮಾಡುವುದಲ್ಲ, ತನಗಾಗಿ ಮಾಡಲಾಗುವುದು.",
      hi: "अंतिम संस्कार — स्वयं किया नहीं, अपने लिए कराया गया।",
    },
    slug: "antyeshti",
    kept: "common",
  },
];

// ── the rites ───────────────────────────────────────────────

export const RITUALS: Ritual[] = [
  // ── rites of passage ──────────────────────────────────────
  {
    slug: "simantonnayana",
    name: { en: "Sīmantonnayana", kn: "ಸೀಮಂತ", hi: "सीमंतोन्नयन" },
    sanskrit: "सीमन्तोन्नयनम्",
    group: "samskara",
    order: 1,
    when: {
      en: "The seventh or eighth month of a pregnancy.",
      kn: "ಗರ್ಭದ ಏಳು ಅಥವಾ ಎಂಟನೇ ತಿಂಗಳು.",
      hi: "गर्भ का सातवाँ या आठवाँ मास।",
    },
    lede: {
      en: "The first of the sixteen still widely kept, and the only one addressed to the mother rather than the child.",
      kn: "ಹದಿನಾರರಲ್ಲಿ ಇಂದಿಗೂ ವ್ಯಾಪಕವಾಗಿ ಉಳಿದ ಮೊದಲನೆಯದು, ಮತ್ತು ಮಗುವಿಗಲ್ಲ ತಾಯಿಗೆ ಉದ್ದೇಶಿಸಿದ ಒಂದೇ ಒಂದು.",
      hi: "सोलह में आज भी व्यापक रूप से निभाया जाने वाला पहला, और शिशु के बजाय माता को उद्दिष्ट एकमात्र।",
    },
    observed: {
      en: "The hair is parted and oiled, green bangles are put on, and the woman is given whatever she has been wanting to eat. Her own household and her mother's both bring something. In Karnataka it is simply called sīmanta, and the bangles are counted in odd numbers.",
      kn: "ಬೈತಲೆ ತೆಗೆದು ಎಣ್ಣೆ ಹಾಕುತ್ತಾರೆ, ಹಸಿರು ಬಳೆ ತೊಡಿಸುತ್ತಾರೆ, ಮತ್ತು ಅವಳಿಗೆ ಏನು ತಿನ್ನಬೇಕೆನಿಸಿದೆಯೋ ಅದನ್ನು ಕೊಡುತ್ತಾರೆ. ಗಂಡನ ಮನೆ ಮತ್ತು ತಾಯಿಯ ಮನೆ ಎರಡೂ ಏನನ್ನಾದರೂ ತರುತ್ತವೆ. ಕರ್ನಾಟಕದಲ್ಲಿ ಇದನ್ನು ಸೀಮಂತ ಎಂದಷ್ಟೇ ಕರೆಯುತ್ತಾರೆ, ಮತ್ತು ಬಳೆಗಳನ್ನು ಬೆಸ ಸಂಖ್ಯೆಯಲ್ಲಿ ಎಣಿಸುತ್ತಾರೆ.",
      hi: "माँग निकालकर तेल लगाया जाता है, हरी चूड़ियाँ पहनाई जाती हैं, और उसे जो खाने का मन हो वह दिया जाता है। ससुराल और मायका दोनों कुछ लाते हैं। कर्नाटक में इसे सीमंत ही कहा जाता है, और चूड़ियाँ विषम संख्या में गिनी जाती हैं।",
    },
    significance: {
      en: "The Gṛhya Sūtras give the rite a reason that has since been forgotten: it is the month in which the child is held to begin hearing, and the mantras are said for the child's ears rather than the mother's. What survives of it now is the eating and the bangles, which is not a lesser thing — it is the household saying out loud that the pregnancy is going to end in a person.",
      kn: "ಗೃಹ್ಯ ಸೂತ್ರಗಳು ಈ ಸಂಸ್ಕಾರಕ್ಕೆ ಕೊಡುವ ಕಾರಣ ಮರೆತುಹೋಗಿದೆ: ಮಗು ಕೇಳಲು ಆರಂಭಿಸುವ ತಿಂಗಳು ಇದು ಎಂದು ನಂಬಿಕೆ, ಮತ್ತು ಮಂತ್ರಗಳನ್ನು ತಾಯಿಯ ಕಿವಿಗಲ್ಲ, ಮಗುವಿನ ಕಿವಿಗೆ ಹೇಳಲಾಗುತ್ತದೆ. ಈಗ ಉಳಿದಿರುವುದು ಊಟ ಮತ್ತು ಬಳೆ — ಅದು ಕಡಿಮೆಯದೂ ಅಲ್ಲ: ಈ ಗರ್ಭ ಒಬ್ಬ ವ್ಯಕ್ತಿಯಲ್ಲಿ ಮುಗಿಯುತ್ತದೆ ಎಂದು ಮನೆ ಗಟ್ಟಿಯಾಗಿ ಹೇಳುವುದೇ ಅದು.",
      hi: "गृह्य सूत्र इस संस्कार का जो कारण देते हैं वह भुला दिया गया है: यही वह मास माना जाता है जिसमें शिशु सुनने लगता है, और मंत्र माता के कानों के लिए नहीं, शिशु के कानों के लिए कहे जाते हैं। अब जो बचा है वह भोजन और चूड़ियाँ हैं — वह कम बात भी नहीं: यही घर का खुलकर कहना है कि यह गर्भ एक व्यक्ति में पूरा होगा।",
    },
  },

  {
    slug: "jatakarma",
    name: { en: "Jātakarma", kn: "ಜಾತಕರ್ಮ", hi: "जातकर्म" },
    sanskrit: "जातकर्म",
    group: "samskara",
    order: 2,
    when: {
      en: "At birth, before the child is washed.",
      kn: "ಹುಟ್ಟಿದಾಗ, ಮಗುವನ್ನು ತೊಳೆಯುವ ಮೊದಲು.",
      hi: "जन्म पर, शिशु को नहलाने से पहले।",
    },
    lede: {
      en: "The rite of the first hour, now almost always displaced by the hospital and done later or not at all.",
      kn: "ಮೊದಲ ಗಳಿಗೆಯ ಸಂಸ್ಕಾರ — ಈಗ ಬಹುತೇಕ ಆಸ್ಪತ್ರೆಯಿಂದ ಹಿಂದೆ ಸರಿದು, ಆಮೇಲೆ ಮಾಡಲಾಗುತ್ತದೆ ಅಥವಾ ಮಾಡುವುದೇ ಇಲ್ಲ.",
      hi: "पहले घंटे का संस्कार — अब प्रायः अस्पताल से विस्थापित, बाद में किया जाता है या नहीं किया जाता।",
    },
    observed: {
      en: "Honey and ghee are touched to the child's tongue with the tip of a gold ring or a blade of grass, and the father speaks into the right ear. Where the hospital makes that impossible, families fold it into the naming on the eleventh day.",
      kn: "ಚಿನ್ನದ ಉಂಗುರದ ತುದಿಯಿಂದ ಅಥವಾ ದರ್ಭೆಯ ಎಸಳಿನಿಂದ ಜೇನು ಮತ್ತು ತುಪ್ಪವನ್ನು ಮಗುವಿನ ನಾಲಿಗೆಗೆ ಸ್ಪರ್ಶಿಸುತ್ತಾರೆ, ಮತ್ತು ತಂದೆ ಬಲಗಿವಿಯಲ್ಲಿ ಮಾತನಾಡುತ್ತಾನೆ. ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ಇದು ಸಾಧ್ಯವಾಗದಿದ್ದಾಗ ಕುಟುಂಬಗಳು ಇದನ್ನು ಹನ್ನೊಂದನೇ ದಿನದ ನಾಮಕರಣದೊಂದಿಗೆ ಸೇರಿಸುತ್ತಾರೆ.",
      hi: "सोने की अंगूठी की नोक या दर्भ की पत्ती से शहद और घी शिशु की जीभ पर लगाया जाता है, और पिता दाहिने कान में बोलता है। जहाँ अस्पताल के कारण यह संभव न हो, परिवार इसे ग्यारहवें दिन के नामकरण में मिला देते हैं।",
    },
    significance: {
      en: "Every later saṃskāra is given to somebody who can be told what is happening. This one is not, and the texts are candid about the consequence: it is done for the household's sake as much as the child's, which is why the father's part is to speak rather than to give.",
      kn: "ಮುಂದಿನ ಪ್ರತಿ ಸಂಸ್ಕಾರವೂ ಏನಾಗುತ್ತಿದೆ ಎಂದು ತಿಳಿಸಬಹುದಾದವರಿಗೆ ಕೊಡಲಾಗುತ್ತದೆ. ಇದು ಹಾಗಲ್ಲ, ಮತ್ತು ಅದರ ಪರಿಣಾಮದ ಬಗ್ಗೆ ಗ್ರಂಥಗಳು ನೇರವಾಗಿವೆ: ಇದು ಮಗುವಿಗಾಗಿ ಎಷ್ಟೋ ಅಷ್ಟೇ ಮನೆಗಾಗಿ ಮಾಡಲಾಗುತ್ತದೆ — ಆದ್ದರಿಂದಲೇ ತಂದೆಯ ಪಾತ್ರ ಕೊಡುವುದಲ್ಲ, ಮಾತನಾಡುವುದು.",
      hi: "आगे का प्रत्येक संस्कार उसे दिया जाता है जिसे बताया जा सके कि क्या हो रहा है। यह नहीं, और ग्रंथ इसके परिणाम पर स्पष्ट हैं: यह शिशु के लिए जितना, उतना ही घर के लिए किया जाता है — इसीलिए पिता की भूमिका देना नहीं, बोलना है।",
    },
  },

  {
    slug: "namakarana",
    name: { en: "Nāmakaraṇa", kn: "ನಾಮಕರಣ", hi: "नामकरण" },
    sanskrit: "नामकरणम्",
    group: "samskara",
    order: 3,
    when: {
      en: "The eleventh or twelfth day after birth.",
      kn: "ಹುಟ್ಟಿದ ಹನ್ನೊಂದು ಅಥವಾ ಹನ್ನೆರಡನೇ ದಿನ.",
      hi: "जन्म के ग्यारहवें या बारहवें दिन।",
    },
    lede: {
      en: "The naming, and in the south the cradle on the same day.",
      kn: "ಹೆಸರಿಡುವಿಕೆ, ಮತ್ತು ದಕ್ಷಿಣದಲ್ಲಿ ಅದೇ ದಿನ ತೊಟ್ಟಿಲು.",
      hi: "नामकरण, और दक्षिण में उसी दिन पालना।",
    },
    observed: {
      en: "The name is said into the child's right ear, usually three times, by the father or the grandfather. The first syllable is commonly taken from the nakṣatra the child was born under, which is why the pañcāṅga is consulted before the family is. In Karnataka the child goes into the tottilu the same morning, and the women sing while it is rocked.",
      kn: "ತಂದೆ ಅಥವಾ ಅಜ್ಜ ಹೆಸರನ್ನು ಮಗುವಿನ ಬಲಗಿವಿಯಲ್ಲಿ, ಸಾಮಾನ್ಯವಾಗಿ ಮೂರು ಬಾರಿ ಹೇಳುತ್ತಾರೆ. ಮೊದಲ ಅಕ್ಷರವನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ಮಗು ಹುಟ್ಟಿದ ನಕ್ಷತ್ರದಿಂದ ತೆಗೆದುಕೊಳ್ಳುತ್ತಾರೆ — ಆದ್ದರಿಂದಲೇ ಕುಟುಂಬವನ್ನು ಕೇಳುವ ಮೊದಲು ಪಂಚಾಂಗವನ್ನು ನೋಡುತ್ತಾರೆ. ಕರ್ನಾಟಕದಲ್ಲಿ ಅದೇ ಬೆಳಿಗ್ಗೆ ಮಗು ತೊಟ್ಟಿಲಿಗೆ ಹೋಗುತ್ತದೆ, ಮತ್ತು ತೂಗುವಾಗ ಹೆಂಗಸರು ಹಾಡುತ್ತಾರೆ.",
      hi: "पिता या दादा नाम शिशु के दाहिने कान में, प्रायः तीन बार कहते हैं। पहला अक्षर सामान्यतः उस नक्षत्र से लिया जाता है जिसमें शिशु जन्मा — इसीलिए परिवार से पहले पंचांग देखा जाता है। कर्नाटक में उसी सुबह शिशु पालने में जाता है, और झुलाते समय स्त्रियाँ गाती हैं।",
    },
    significance: {
      en: "A name in this tradition is not a label chosen for how it sounds; it is an address, and the older texts expect it to be a devatā's. That is why so many people are called after gods and so few after qualities — and why the name said in the ear is often not the one used at home.",
      kn: "ಈ ಪರಂಪರೆಯಲ್ಲಿ ಹೆಸರು ಕೇಳಲು ಚೆನ್ನಾಗಿದೆ ಎಂದು ಆರಿಸಿದ ಹಚ್ಚೆಯಲ್ಲ; ಅದು ಒಂದು ಸಂಬೋಧನೆ, ಮತ್ತು ಹಳೆಯ ಗ್ರಂಥಗಳು ಅದು ದೇವತೆಯ ಹೆಸರೇ ಆಗಿರಬೇಕೆಂದು ನಿರೀಕ್ಷಿಸುತ್ತವೆ. ಆದ್ದರಿಂದಲೇ ಇಷ್ಟು ಜನರಿಗೆ ದೇವರ ಹೆಸರು ಮತ್ತು ಇಷ್ಟು ಕಡಿಮೆ ಜನರಿಗೆ ಗುಣಗಳ ಹೆಸರು — ಮತ್ತು ಕಿವಿಯಲ್ಲಿ ಹೇಳಿದ ಹೆಸರು ಮನೆಯಲ್ಲಿ ಬಳಸುವುದಕ್ಕಿಂತ ಬೇರೆಯಾಗಿರುವುದೂ ಅದೇ ಕಾರಣಕ್ಕೆ.",
      hi: "इस परंपरा में नाम सुनने में अच्छा लगने से चुना गया लेबल नहीं है; वह एक संबोधन है, और पुराने ग्रंथ अपेक्षा करते हैं कि वह किसी देवता का हो। इसीलिए इतने लोगों के नाम देवताओं के हैं और इतने कम गुणों के — और कान में कहा गया नाम घर में चलने वाले नाम से अलग होना भी इसी कारण।",
    },
    regional: {
      en: "The eleventh day is commoner in the south, the twelfth in much of the north. Some families wait for the first month, and Nāmakaraṇa then happens alongside the child's first outing.",
      kn: "ದಕ್ಷಿಣದಲ್ಲಿ ಹನ್ನೊಂದನೇ ದಿನ ಹೆಚ್ಚು ಸಾಮಾನ್ಯ, ಉತ್ತರದ ಬಹುಭಾಗದಲ್ಲಿ ಹನ್ನೆರಡನೆಯದು. ಕೆಲವು ಕುಟುಂಬಗಳು ಮೊದಲ ತಿಂಗಳವರೆಗೆ ಕಾಯುತ್ತವೆ, ಮತ್ತು ಆಗ ನಾಮಕರಣ ಮಗುವಿನ ಮೊದಲ ಹೊರಗಿನ ಪ್ರಯಾಣದ ಜೊತೆಗೇ ಆಗುತ್ತದೆ.",
      hi: "दक्षिण में ग्यारहवाँ दिन अधिक प्रचलित है, उत्तर के बहुत भाग में बारहवाँ। कुछ परिवार पहले मास तक प्रतीक्षा करते हैं, और तब नामकरण शिशु के पहले बाहर निकलने के साथ ही होता है।",
    },
  },

  {
    slug: "annaprashana",
    name: { en: "Annaprāśana", kn: "ಅನ್ನಪ್ರಾಶನ", hi: "अन्नप्राशन" },
    sanskrit: "अन्नप्राशनम्",
    group: "samskara",
    order: 4,
    when: {
      en: "The sixth month, or the fifth or seventh depending on the family.",
      kn: "ಆರನೇ ತಿಂಗಳು, ಅಥವಾ ಕುಟುಂಬಕ್ಕೆ ಅನುಸಾರ ಐದು ಅಥವಾ ಏಳನೆಯದು.",
      hi: "छठा मास, या परिवार के अनुसार पाँचवाँ या सातवाँ।",
    },
    lede: {
      en: "The first mouthful of cooked food, given by the family and not by the mother.",
      kn: "ಮೊದಲ ತುತ್ತು ಬೇಯಿಸಿದ ಆಹಾರ — ತಾಯಿ ಕೊಡುವುದಲ್ಲ, ಕುಟುಂಬ ಕೊಡುವುದು.",
      hi: "पका भोजन का पहला कौर, माता नहीं, परिवार देता है।",
    },
    observed: {
      en: "Rice cooked with ghee, sometimes with a little honey or payasa, is given on a silver or gold spoon — commonly by the maternal uncle, who has a part in most of a Kannada child's rites. Many families then set out a tray of objects and let the child reach for one.",
      kn: "ತುಪ್ಪದಲ್ಲಿ ಬೇಯಿಸಿದ ಅನ್ನ, ಕೆಲವೊಮ್ಮೆ ಸ್ವಲ್ಪ ಜೇನು ಅಥವಾ ಪಾಯಸದ ಜೊತೆಗೆ, ಬೆಳ್ಳಿ ಅಥವಾ ಚಿನ್ನದ ಚಮಚದಿಂದ ಕೊಡುತ್ತಾರೆ — ಸಾಮಾನ್ಯವಾಗಿ ಸೋದರಮಾವ, ಕನ್ನಡ ಮಗುವಿನ ಬಹುತೇಕ ಸಂಸ್ಕಾರಗಳಲ್ಲಿ ಪಾತ್ರವಿರುವವನು. ಆಮೇಲೆ ಹಲವು ಕುಟುಂಬಗಳು ಒಂದು ತಟ್ಟೆಯಲ್ಲಿ ವಸ್ತುಗಳನ್ನು ಇಟ್ಟು ಮಗು ಒಂದನ್ನು ಎತ್ತಿಕೊಳ್ಳಲು ಬಿಡುತ್ತವೆ.",
      hi: "घी में पका चावल, कभी थोड़े शहद या पायस के साथ, चाँदी या सोने के चम्मच से दिया जाता है — प्रायः मामा के हाथ से, जिसकी कन्नड शिशु के अधिकांश संस्कारों में भूमिका होती है। फिर बहुत परिवार एक थाल में वस्तुएँ रखकर शिशु को एक उठाने देते हैं।",
    },
    significance: {
      en: "Up to this day the child has lived on one person. After it, it eats what the house eats. The rite marks a transfer of responsibility rather than a milestone in growth, which is why the food is given by somebody other than the mother.",
      kn: "ಈ ದಿನದವರೆಗೆ ಮಗು ಒಬ್ಬ ವ್ಯಕ್ತಿಯ ಮೇಲೆ ಬದುಕಿದೆ. ಇದಾದ ಮೇಲೆ ಮನೆ ತಿನ್ನುವುದನ್ನೇ ಅದೂ ತಿನ್ನುತ್ತದೆ. ಈ ಸಂಸ್ಕಾರ ಬೆಳವಣಿಗೆಯ ಮೈಲಿಗಲ್ಲನ್ನಲ್ಲ, ಹೊಣೆ ವರ್ಗಾವಣೆಯನ್ನು ಗುರುತಿಸುತ್ತದೆ — ಆದ್ದರಿಂದಲೇ ಆಹಾರವನ್ನು ತಾಯಿಯಲ್ಲದ ಬೇರೊಬ್ಬರು ಕೊಡುತ್ತಾರೆ.",
      hi: "इस दिन तक शिशु एक व्यक्ति पर जिया है। इसके बाद वह वही खाता है जो घर खाता है। यह संस्कार विकास का पड़ाव नहीं, उत्तरदायित्व का हस्तांतरण चिह्नित करता है — इसीलिए भोजन माता के अतिरिक्त कोई देता है।",
    },
  },

  {
    slug: "chudakarma",
    name: { en: "Chūḍākarma", kn: "ಚೂಡಾಕರ್ಮ", hi: "चूड़ाकर्म" },
    sanskrit: "चूडाकर्म",
    group: "samskara",
    order: 5,
    when: {
      en: "The first or third year, or on a vow already made.",
      kn: "ಮೊದಲ ಅಥವಾ ಮೂರನೇ ವರ್ಷ, ಅಥವಾ ಈಗಾಗಲೇ ಹೊತ್ತ ಹರಕೆಯ ಮೇರೆಗೆ.",
      hi: "पहला या तीसरा वर्ष, या पहले लिए गए संकल्प पर।",
    },
    lede: {
      en: "The first cutting of the hair, kept by more families than any other saṃskāra except marriage.",
      kn: "ಮೊದಲ ಬಾರಿ ಕೂದಲು ತೆಗೆಸುವುದು — ಮದುವೆಯ ಹೊರತು ಬೇರೆ ಯಾವ ಸಂಸ್ಕಾರಕ್ಕಿಂತಲೂ ಹೆಚ್ಚು ಕುಟುಂಬಗಳು ಉಳಿಸಿಕೊಂಡದ್ದು.",
      hi: "पहली बार केश उतारना — विवाह को छोड़कर किसी भी संस्कार से अधिक परिवारों में बचा हुआ।",
    },
    observed: {
      en: "The head is shaved, in most traditions leaving a tuft at the crown. It is very often done at a temple rather than at home — Tirupati, Kukke Subrahmanya, Ghati Subramanya, Dharmasthala — because it has usually been promised there. The hair is given to the temple, and the child is bathed immediately after.",
      kn: "ತಲೆ ಬೋಳಿಸುತ್ತಾರೆ, ಬಹುತೇಕ ಪರಂಪರೆಗಳಲ್ಲಿ ನೆತ್ತಿಯ ಮೇಲೆ ಜುಟ್ಟು ಉಳಿಸಿ. ಇದು ಮನೆಯಲ್ಲಿಗಿಂತ ದೇವಸ್ಥಾನದಲ್ಲೇ ಹೆಚ್ಚು ನಡೆಯುತ್ತದೆ — ತಿರುಪತಿ, ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯ, ಘಾಟಿ ಸುಬ್ರಮಣ್ಯ, ಧರ್ಮಸ್ಥಳ — ಏಕೆಂದರೆ ಸಾಮಾನ್ಯವಾಗಿ ಹರಕೆ ಹೊತ್ತಿರುವುದು ಅಲ್ಲಿಯೇ. ಕೂದಲನ್ನು ದೇವಸ್ಥಾನಕ್ಕೆ ಕೊಡುತ್ತಾರೆ, ಮತ್ತು ತಕ್ಷಣ ಮಗುವಿಗೆ ಸ್ನಾನ ಮಾಡಿಸುತ್ತಾರೆ.",
      hi: "सिर मुँडाया जाता है, अधिकांश परंपराओं में शिखा छोड़कर। यह घर से अधिक मंदिर में होता है — तिरुपति, कुक्के सुब्रह्मण्य, घाटी सुब्रमण्य, धर्मस्थल — क्योंकि संकल्प प्रायः वहीं लिया गया होता है। केश मंदिर को दिए जाते हैं, और शिशु को तुरंत स्नान कराया जाता है।",
    },
    significance: {
      en: "The tuft is the point of the rite and the reason it is not simply a haircut: what is left is what marks the head as consecrated, and the traditions that keep a śikhā trace it to this day rather than to the upanayana. Where the rite is done on a vow, it is also the commonest example in ordinary life of a thing offered because it cannot be kept.",
      kn: "ಜುಟ್ಟೇ ಈ ಸಂಸ್ಕಾರದ ತಿರುಳು, ಮತ್ತು ಇದು ಬರೀ ಕ್ಷೌರವಲ್ಲದಿರುವ ಕಾರಣ: ಉಳಿಸಿದ್ದೇ ತಲೆಯನ್ನು ಸಂಸ್ಕರಿತವೆಂದು ಗುರುತಿಸುತ್ತದೆ, ಮತ್ತು ಶಿಖೆ ಇಟ್ಟುಕೊಳ್ಳುವ ಪರಂಪರೆಗಳು ಅದನ್ನು ಉಪನಯನಕ್ಕಲ್ಲ, ಈ ದಿನಕ್ಕೇ ಜೋಡಿಸುತ್ತವೆ. ಹರಕೆಯ ಮೇರೆಗೆ ಮಾಡಿದಾಗ, ಇಟ್ಟುಕೊಳ್ಳಲಾಗದ್ದರಿಂದಲೇ ಅರ್ಪಿಸುವ ವಸ್ತುವಿನ ಅತಿ ಸಾಮಾನ್ಯ ಉದಾಹರಣೆಯೂ ಇದೇ.",
      hi: "शिखा ही इस संस्कार का मर्म है, और वही कारण कि यह केवल बाल कटवाना नहीं: जो छोड़ा जाता है वही सिर को संस्कारित चिह्नित करता है, और शिखा रखने वाली परंपराएँ उसे उपनयन से नहीं, इसी दिन से जोड़ती हैं। संकल्प पर किए जाने पर, यह साधारण जीवन में उस वस्तु का सबसे आम उदाहरण भी है जो रखी न जा सकने के कारण अर्पित होती है।",
    },
    links: [
      L("/temples/tulunadu", "Tulunadu temples", "ತುಳುನಾಡಿನ ದೇವಾಲಯಗಳು", "तुलुनाडु के मंदिर"),
    ],
  },

  {
    slug: "upanayana",
    name: { en: "Upanayana", kn: "ಉಪನಯನ", hi: "उपनयन" },
    sanskrit: "उपनयनम्",
    group: "samskara",
    order: 6,
    when: {
      en: "Traditionally the eighth year, counted from conception. In practice now anywhere from seven to the teens.",
      kn: "ಪರಂಪರೆಯಂತೆ ಎಂಟನೇ ವರ್ಷ, ಗರ್ಭದಿಂದ ಎಣಿಸಿ. ಈಗ ಪ್ರಾಯೋಗಿಕವಾಗಿ ಏಳರಿಂದ ಹದಿಹರೆಯದವರೆಗೆ ಎಲ್ಲಿಯಾದರೂ.",
      hi: "परंपरा से आठवाँ वर्ष, गर्भ से गिनकर। व्यवहार में अब सात से किशोरावस्था तक कहीं भी।",
    },
    lede: {
      en: "The thread put on, and the Gāyatrī given — the rite the tradition calls a second birth.",
      kn: "ಜನಿವಾರ ತೊಡಿಸುವುದು, ಗಾಯತ್ರೀ ಕೊಡುವುದು — ಪರಂಪರೆ ಎರಡನೇ ಜನ್ಮ ಎನ್ನುವ ಸಂಸ್ಕಾರ.",
      hi: "यज्ञोपवीत धारण, और गायत्री का दान — जिस संस्कार को परंपरा द्वितीय जन्म कहती है।",
    },
    observed: {
      en: "Over one to three days: the head is shaved, the boy bathes, the yajñopavīta of three strands is put over the left shoulder, and a staff and a deerskin are given. The teaching itself is a single moment — the ācārya, in practice the father, says the Gāyatrī into his ear, and the boy repeats it. From that day he is expected to do sandhyāvandana three times daily, which is the obligation the thread stands for.",
      kn: "ಒಂದರಿಂದ ಮೂರು ದಿನಗಳಲ್ಲಿ: ತಲೆ ಬೋಳಿಸುತ್ತಾರೆ, ಹುಡುಗ ಸ್ನಾನ ಮಾಡುತ್ತಾನೆ, ಮೂರು ಎಳೆಯ ಯಜ್ಞೋಪವೀತವನ್ನು ಎಡ ಹೆಗಲ ಮೇಲೆ ಹಾಕುತ್ತಾರೆ, ದಂಡ ಮತ್ತು ಕೃಷ್ಣಾಜಿನ ಕೊಡುತ್ತಾರೆ. ಉಪದೇಶ ಒಂದೇ ಕ್ಷಣ — ಆಚಾರ್ಯ, ಪ್ರಾಯೋಗಿಕವಾಗಿ ತಂದೆ, ಗಾಯತ್ರಿಯನ್ನು ಅವನ ಕಿವಿಯಲ್ಲಿ ಹೇಳುತ್ತಾನೆ, ಹುಡುಗ ಮರಳಿ ಹೇಳುತ್ತಾನೆ. ಆ ದಿನದಿಂದ ದಿನಕ್ಕೆ ಮೂರು ಬಾರಿ ಸಂಧ್ಯಾವಂದನೆ ಮಾಡಬೇಕೆಂಬ ನಿರೀಕ್ಷೆ — ಜನಿವಾರ ನಿಲ್ಲುವುದು ಆ ಹೊಣೆಗಾಗಿಯೇ.",
      hi: "एक से तीन दिन में: सिर मुँडाया जाता है, बालक स्नान करता है, तीन तंतु का यज्ञोपवीत बाएँ कंधे पर रखा जाता है, दंड और कृष्णाजिन दिए जाते हैं। उपदेश एक ही क्षण है — आचार्य, व्यवहार में पिता, गायत्री उसके कान में कहता है और बालक दोहराता है। उस दिन से उससे दिन में तीन बार संध्यावंदन की अपेक्षा है — यज्ञोपवीत उसी दायित्व के लिए खड़ा है।",
    },
    significance: {
      en: "Nothing else in the sixteen changes a person's standing the way this does: before it he may not study the Veda, and after it he may. The second birth is not a metaphor in the texts but a legal fact about what he is now permitted and required to do — and the honest thing to say is that the study it opens very rarely follows any more, which leaves the thread carrying an obligation the day no longer delivers.",
      kn: "ಹದಿನಾರರಲ್ಲಿ ಬೇರೆ ಯಾವುದೂ ವ್ಯಕ್ತಿಯ ಸ್ಥಾನಮಾನವನ್ನು ಇದರಷ್ಟು ಬದಲಿಸುವುದಿಲ್ಲ: ಇದಕ್ಕೆ ಮೊದಲು ಅವನು ವೇದ ಕಲಿಯಲಾರ, ಆಮೇಲೆ ಕಲಿಯಬಹುದು. ಗ್ರಂಥಗಳಲ್ಲಿ ಎರಡನೇ ಜನ್ಮ ರೂಪಕವಲ್ಲ, ಈಗ ಅವನಿಗೆ ಏನು ಅನುಮತಿ ಮತ್ತು ಏನು ಕರ್ತವ್ಯ ಎಂಬ ಕಾನೂನಿನ ಸತ್ಯ — ಮತ್ತು ನೇರವಾಗಿ ಹೇಳಬೇಕಾದದ್ದು: ಅದು ತೆರೆಯುವ ಅಧ್ಯಯನ ಈಗ ಬಹಳ ಅಪರೂಪವಾಗಿ ಮಾತ್ರ ಮುಂದುವರಿಯುತ್ತದೆ, ಆದ್ದರಿಂದ ದಿನ ಕೊಡದ ಹೊಣೆಯನ್ನು ಜನಿವಾರ ಹೊತ್ತು ನಿಲ್ಲುತ್ತದೆ.",
      hi: "सोलह में कोई और व्यक्ति की स्थिति इस तरह नहीं बदलता: इससे पहले वह वेद नहीं पढ़ सकता, बाद में पढ़ सकता है। ग्रंथों में द्वितीय जन्म रूपक नहीं, इस बात का विधिक तथ्य है कि अब उसे क्या अनुमत और क्या आवश्यक है — और सच यह कहना है कि जो अध्ययन यह खोलता है वह अब बहुत कम ही चलता है, जिससे यज्ञोपवीत वह दायित्व उठाए रहता है जो वह दिन अब नहीं देता।",
    },
    regional: {
      en: "Who it is given to is disputed. The Dharma Śāstras restrict it to boys of the three upper varṇas, with different ages for each; the Ārya Samāj and a number of families and mathas now give it to girls as well, and some reject the varṇa restriction outright. This site records the disagreement and does not settle it.",
      kn: "ಯಾರಿಗೆ ಕೊಡಬೇಕೆಂಬುದು ವಿವಾದದಲ್ಲಿದೆ. ಧರ್ಮಶಾಸ್ತ್ರಗಳು ಇದನ್ನು ಮೇಲಿನ ಮೂರು ವರ್ಣಗಳ ಗಂಡುಮಕ್ಕಳಿಗೆ ಸೀಮಿತಗೊಳಿಸುತ್ತವೆ, ಪ್ರತಿಯೊಂದಕ್ಕೂ ಬೇರೆ ವಯಸ್ಸು ಹೇಳುತ್ತವೆ; ಆರ್ಯ ಸಮಾಜ ಮತ್ತು ಹಲವು ಕುಟುಂಬಗಳು, ಮಠಗಳು ಈಗ ಹೆಣ್ಣುಮಕ್ಕಳಿಗೂ ಕೊಡುತ್ತವೆ, ಮತ್ತು ಕೆಲವರು ವರ್ಣದ ಕಟ್ಟನ್ನು ಪೂರ್ಣವಾಗಿ ತಿರಸ್ಕರಿಸುತ್ತಾರೆ. ಈ ತಾಣ ಈ ಭಿನ್ನಮತವನ್ನು ದಾಖಲಿಸುತ್ತದೆ, ಬಗೆಹರಿಸುವುದಿಲ್ಲ.",
      hi: "यह किसे दिया जाए, यह विवादित है। धर्मशास्त्र इसे ऊपरी तीन वर्णों के बालकों तक सीमित करते हैं, प्रत्येक के लिए भिन्न आयु देते हैं; आर्य समाज तथा अनेक परिवार और मठ अब कन्याओं को भी देते हैं, और कुछ वर्ण-प्रतिबंध को पूर्णतः अस्वीकार करते हैं। यह साइट इस मतभेद को दर्ज करती है, उसका निर्णय नहीं करती।",
    },
    words: [L("/stutis/gayatri/gayatri-mantra", "The Gāyatrī", "ಗಾಯತ್ರೀ", "गायत्री")],
    links: [L("/practice/gayatri", "Sitting with it", "ಅದರೊಂದಿಗೆ ಕೂರುವುದು", "उसके साथ बैठना")],
  },

  {
    slug: "vivaha",
    name: { en: "Vivāha", kn: "ವಿವಾಹ", hi: "विवाह" },
    sanskrit: "विवाहः",
    group: "samskara",
    order: 7,
    when: {
      en: "On a muhūrta chosen from the pañcāṅga, and never in the four months of Chāturmāsya.",
      kn: "ಪಂಚಾಂಗದಿಂದ ಆರಿಸಿದ ಮುಹೂರ್ತದಲ್ಲಿ, ಮತ್ತು ಚಾತುರ್ಮಾಸ್ಯದ ನಾಲ್ಕು ತಿಂಗಳಲ್ಲಿ ಎಂದಿಗೂ ಅಲ್ಲ.",
      hi: "पंचांग से चुने मुहूर्त पर, और चातुर्मास्य के चार मासों में कभी नहीं।",
    },
    lede: {
      en: "The one saṃskāra nearly everybody still performs in full, and the one whose essential act is the least noticed.",
      kn: "ಬಹುತೇಕ ಎಲ್ಲರೂ ಇಂದಿಗೂ ಪೂರ್ಣವಾಗಿ ಮಾಡುವ ಒಂದೇ ಸಂಸ್ಕಾರ, ಮತ್ತು ಅದರ ಮುಖ್ಯ ಕ್ರಿಯೆ ಅತಿ ಕಡಿಮೆ ಗಮನ ಪಡೆಯುವುದು.",
      hi: "जिसे लगभग सब आज भी पूरा करते हैं वही एक संस्कार, और जिसका मुख्य कर्म सबसे कम देखा जाता है।",
    },
    observed: {
      en: "The sequence is long, but four acts carry it: kanyādāna, the giving; pāṇigrahaṇa, the taking of the hand; the fire kindled and circled; and saptapadī, seven steps taken together, each with its own line. In much of the south a tāli or maṅgalasūtra is tied; in the north a sindūra is applied. Both are regional, and neither is what makes the marriage.",
      kn: "ಕ್ರಮ ದೀರ್ಘ, ಆದರೆ ನಾಲ್ಕು ಕ್ರಿಯೆಗಳು ಅದನ್ನು ಹೊರುತ್ತವೆ: ಕನ್ಯಾದಾನ, ಕೊಡುವುದು; ಪಾಣಿಗ್ರಹಣ, ಕೈ ಹಿಡಿಯುವುದು; ಅಗ್ನಿ ಹೊತ್ತಿಸಿ ಸುತ್ತುವುದು; ಮತ್ತು ಸಪ್ತಪದೀ, ಒಟ್ಟಿಗೆ ಇಡುವ ಏಳು ಹೆಜ್ಜೆ, ಪ್ರತಿಯೊಂದಕ್ಕೂ ತನ್ನದೇ ಸಾಲು. ದಕ್ಷಿಣದ ಬಹುಭಾಗದಲ್ಲಿ ತಾಳಿ ಅಥವಾ ಮಂಗಳಸೂತ್ರ ಕಟ್ಟುತ್ತಾರೆ; ಉತ್ತರದಲ್ಲಿ ಸಿಂದೂರ ಹಚ್ಚುತ್ತಾರೆ. ಎರಡೂ ಪ್ರಾದೇಶಿಕ, ಮತ್ತು ಮದುವೆಯನ್ನು ಮಾಡುವುದು ಎರಡೂ ಅಲ್ಲ.",
      hi: "क्रम लंबा है, पर चार कर्म उसे उठाते हैं: कन्यादान, देना; पाणिग्रहण, हाथ थामना; अग्नि प्रज्वलित कर परिक्रमा; और सप्तपदी, साथ उठाए सात पग, प्रत्येक की अपनी पंक्ति। दक्षिण के बहुत भाग में ताली या मंगलसूत्र बाँधा जाता है; उत्तर में सिंदूर लगाया जाता है। दोनों क्षेत्रीय हैं, और विवाह इनमें से किसी से नहीं होता।",
    },
    significance: {
      en: "It is the seventh step. The Gṛhya Sūtras and the Dharma Śāstras agree that the marriage is complete at the saptapadī, before the fire and in company — which is why a wedding needs witnesses and a priest but not a ring, and why the garlands, the tāli and the reception are all, strictly, afterwards. The fire is there as the witness that cannot be disputed.",
      kn: "ಅದು ಏಳನೇ ಹೆಜ್ಜೆ. ಗೃಹ್ಯ ಸೂತ್ರಗಳು ಮತ್ತು ಧರ್ಮಶಾಸ್ತ್ರಗಳು ಒಪ್ಪುತ್ತವೆ: ಮದುವೆ ಸಪ್ತಪದಿಯಲ್ಲಿ ಪೂರ್ಣವಾಗುತ್ತದೆ, ಅಗ್ನಿಯ ಮುಂದೆ ಮತ್ತು ಜನರ ನಡುವೆ — ಆದ್ದರಿಂದಲೇ ಮದುವೆಗೆ ಸಾಕ್ಷಿಗಳು ಮತ್ತು ಪುರೋಹಿತ ಬೇಕು, ಉಂಗುರ ಬೇಡ; ಮತ್ತು ಹಾರ, ತಾಳಿ, ಆರತಕ್ಷತೆ ಎಲ್ಲವೂ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಆಮೇಲೆ. ವಿವಾದಿಸಲಾಗದ ಸಾಕ್ಷಿಯಾಗಿ ಅಗ್ನಿ ಅಲ್ಲಿದೆ.",
      hi: "वह सातवाँ पग है। गृह्य सूत्र और धर्मशास्त्र सहमत हैं: विवाह सप्तपदी पर पूर्ण होता है, अग्नि के सम्मुख और लोगों के बीच — इसीलिए विवाह को साक्षी और पुरोहित चाहिए, अँगूठी नहीं; और माला, ताली, स्वागत — सब कड़े अर्थ में बाद के हैं। जिस साक्षी पर विवाद न हो सके, उस रूप में अग्नि वहाँ है।",
    },
    regional: {
      en: "In Karnataka the bride's maternal uncle carries her in, and the dhāre — water poured over the joined hands — stands where kanyādāna stands elsewhere. Tulu and Kodava weddings are performed without a brāhmaṇa priest at all, by the elders of the two houses.",
      kn: "ಕರ್ನಾಟಕದಲ್ಲಿ ವಧುವನ್ನು ಸೋದರಮಾವ ಎತ್ತಿಕೊಂಡು ಬರುತ್ತಾನೆ, ಮತ್ತು ಧಾರೆ — ಜೋಡಿಸಿದ ಕೈಗಳ ಮೇಲೆ ಸುರಿಯುವ ನೀರು — ಬೇರೆಡೆ ಕನ್ಯಾದಾನ ನಿಲ್ಲುವ ಜಾಗದಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆ. ತುಳು ಮತ್ತು ಕೊಡವ ಮದುವೆಗಳು ಬ್ರಾಹ್ಮಣ ಪುರೋಹಿತನಿಲ್ಲದೆಯೇ, ಎರಡೂ ಮನೆಗಳ ಹಿರಿಯರಿಂದ ನಡೆಯುತ್ತವೆ.",
      hi: "कर्नाटक में वधू को मामा गोद में लाता है, और धारे — जुड़े हाथों पर डाला जल — वहाँ खड़ा होता है जहाँ अन्यत्र कन्यादान। तुलु और कोडव विवाह किसी ब्राह्मण पुरोहित के बिना, दोनों घरों के बड़े-बूढ़ों द्वारा संपन्न होते हैं।",
    },
  },

  {
    slug: "antyeshti",
    name: { en: "Antyeṣṭi", kn: "ಅಂತ್ಯೇಷ್ಟಿ", hi: "अंत्येष्टि" },
    sanskrit: "अन्त्येष्टिः",
    group: "samskara",
    order: 8,
    when: {
      en: "The same day where possible, and before the next sunset.",
      kn: "ಸಾಧ್ಯವಾದರೆ ಅದೇ ದಿನ, ಮತ್ತು ಮುಂದಿನ ಸೂರ್ಯಾಸ್ತದ ಮೊದಲು.",
      hi: "जहाँ संभव हो उसी दिन, और अगले सूर्यास्त से पहले।",
    },
    lede: {
      en: "The last of the sixteen, and the only one nobody performs for themselves.",
      kn: "ಹದಿನಾರರಲ್ಲಿ ಕೊನೆಯದು, ಮತ್ತು ಯಾರೂ ತಮಗಾಗಿ ತಾವೇ ಮಾಡಿಕೊಳ್ಳಲಾಗದ ಒಂದೇ ಒಂದು.",
      hi: "सोलह में अंतिम, और एकमात्र जिसे कोई अपने लिए स्वयं नहीं कर सकता।",
    },
    observed: {
      en: "The body is washed, wrapped and carried out feet first, and cremated — by the eldest son where there is one, and otherwise by the nearest kin who can be found. The fire is carried from the house. Ten, eleven or twelve days of observance follow, ending in the first śrāddha; the ashes are taken to running water. A sannyāsin and a very young child are not cremated.",
      kn: "ದೇಹವನ್ನು ತೊಳೆದು, ಸುತ್ತಿ, ಕಾಲು ಮುಂದೆ ಮಾಡಿ ಹೊರಗೆ ಒಯ್ದು ದಹಿಸುತ್ತಾರೆ — ಹಿರಿಯ ಮಗನಿದ್ದರೆ ಅವನಿಂದ, ಇಲ್ಲದಿದ್ದರೆ ಸಿಗುವ ಹತ್ತಿರದ ಬಂಧುವಿನಿಂದ. ಅಗ್ನಿಯನ್ನು ಮನೆಯಿಂದಲೇ ಒಯ್ಯುತ್ತಾರೆ. ಹತ್ತು, ಹನ್ನೊಂದು ಅಥವಾ ಹನ್ನೆರಡು ದಿನಗಳ ಆಚರಣೆ ನಂತರ, ಮೊದಲ ಶ್ರಾದ್ಧದಲ್ಲಿ ಮುಗಿಯುತ್ತದೆ; ಚಿತಾಭಸ್ಮವನ್ನು ಹರಿಯುವ ನೀರಿಗೆ ಒಯ್ಯುತ್ತಾರೆ. ಸನ್ಯಾಸಿಯನ್ನು ಮತ್ತು ಬಹಳ ಚಿಕ್ಕ ಮಗುವನ್ನು ದಹಿಸುವುದಿಲ್ಲ.",
      hi: "देह को धोकर, लपेटकर, पैर आगे कर बाहर ले जाया और दाह किया जाता है — जहाँ ज्येष्ठ पुत्र हो उससे, अन्यथा जो निकटतम स्वजन मिले उससे। अग्नि घर से ही ले जाई जाती है। दस, ग्यारह या बारह दिन का आचरण चलता है और प्रथम श्राद्ध पर पूरा होता है; भस्म बहते जल में ले जाई जाती है। संन्यासी और अति शिशु का दाह नहीं होता।",
    },
    significance: {
      en: "The rite is addressed to the fire as a carrier, not as a destroyer: what is offered is the body, in the same grammar as any other offering, with the person understood to have already left. That is also why it is called a saṃskāra at all — the sixteen are a sequence of makings, and this is held to be the last of them rather than the undoing of the rest.",
      kn: "ಈ ಕರ್ಮ ಅಗ್ನಿಯನ್ನು ನಾಶಕನೆಂದಲ್ಲ, ಒಯ್ಯುವವನೆಂದು ಸಂಬೋಧಿಸುತ್ತದೆ: ಅರ್ಪಿಸುವುದು ದೇಹ, ಬೇರೆ ಯಾವುದೇ ಅರ್ಪಣೆಯ ಅದೇ ವ್ಯಾಕರಣದಲ್ಲಿ, ವ್ಯಕ್ತಿ ಈಗಾಗಲೇ ಹೊರಟುಹೋದನೆಂಬ ತಿಳಿವಳಿಕೆಯೊಂದಿಗೆ. ಇದನ್ನು ಸಂಸ್ಕಾರವೆಂದೇ ಕರೆಯುವುದೂ ಅದೇ ಕಾರಣಕ್ಕೆ — ಹದಿನಾರು ಮಾಡುವಿಕೆಗಳ ಸರಣಿ, ಮತ್ತು ಇದು ಉಳಿದವನ್ನು ಅಳಿಸುವುದಲ್ಲ, ಅವುಗಳಲ್ಲಿ ಕೊನೆಯದು.",
      hi: "यह कर्म अग्नि को नाशक नहीं, वाहक मानकर संबोधित करता है: जो अर्पित होता है वह देह है, किसी भी अन्य अर्पण के उसी व्याकरण में, इस समझ के साथ कि व्यक्ति पहले ही जा चुका। इसे संस्कार कहा जाना भी इसी कारण — सोलह एक क्रम हैं बनाने का, और यह शेष को मिटाना नहीं, उनमें अंतिम है।",
    },
    links: [
      L("/rituals/shraddha", "The śrāddha that follows", "ನಂತರ ಬರುವ ಶ್ರಾದ್ಧ", "उसके बाद का श्राद्ध"),
    ],
  },

  // ── every day ─────────────────────────────────────────────
  {
    slug: "sandhyavandana",
    name: { en: "Sandhyāvandana", kn: "ಸಂಧ್ಯಾವಂದನೆ", hi: "संध्यावंदन" },
    sanskrit: "सन्ध्यावन्दनम्",
    group: "nitya",
    order: 9,
    when: {
      en: "At dawn, at midday and at dusk — the three joins of the day.",
      kn: "ಮುಂಜಾನೆ, ಮಧ್ಯಾಹ್ನ ಮತ್ತು ಸಂಜೆ — ದಿನದ ಮೂರು ಸಂಧಿಗಳಲ್ಲಿ.",
      hi: "प्रातः, मध्याह्न और सायं — दिन के तीन संधिकाल।",
    },
    lede: {
      en: "The daily obligation the upanayana confers, and the shortest complete rite in the tradition.",
      kn: "ಉಪನಯನ ಕೊಡುವ ನಿತ್ಯ ಕರ್ತವ್ಯ, ಮತ್ತು ಪರಂಪರೆಯಲ್ಲಿನ ಅತಿ ಚಿಕ್ಕ ಪೂರ್ಣ ಕರ್ಮ.",
      hi: "उपनयन जो नित्य दायित्व देता है, और परंपरा का सबसे छोटा पूर्ण कर्म।",
    },
    observed: {
      en: "Water is sipped, the breath is held, water is sprinkled and then thrown towards the sun as arghya, the Gāyatrī is said a fixed number of times, and the sun is addressed standing. Ten minutes at the outside. It is done alone, and it needs no priest, no image and nothing but water.",
      kn: "ನೀರು ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ, ಮಾರ್ಜನ, ನಂತರ ಸೂರ್ಯನ ಕಡೆಗೆ ಅರ್ಘ್ಯವಾಗಿ ನೀರು ಎರಚುವುದು, ಗಾಯತ್ರಿಯನ್ನು ನಿಗದಿತ ಸಂಖ್ಯೆ ಜಪಿಸುವುದು, ಮತ್ತು ನಿಂತು ಸೂರ್ಯನನ್ನು ಉಪಸ್ಥಾನ ಮಾಡುವುದು. ಹೆಚ್ಚೆಂದರೆ ಹತ್ತು ನಿಮಿಷ. ಒಬ್ಬರೇ ಮಾಡುವುದು; ಪುರೋಹಿತ, ಮೂರ್ತಿ ಬೇಕಿಲ್ಲ, ನೀರಲ್ಲದೆ ಬೇರೇನೂ ಬೇಕಿಲ್ಲ.",
      hi: "आचमन, प्राणायाम, मार्जन, फिर सूर्य की ओर अर्घ्य रूप में जल, नियत संख्या में गायत्री जप, और खड़े होकर सूर्य का उपस्थान। अधिकतम दस मिनट। अकेले किया जाता है; पुरोहित, प्रतिमा नहीं चाहिए, जल के सिवा कुछ नहीं चाहिए।",
    },
    significance: {
      en: "The arghya is the oldest part and the least understood: in the Brāhmaṇas the water is thrown at the demons who attack the sun at the joins of the day, and the person doing it is helping. Nothing in the rite asks for anything. That is unusual enough among daily observances to be worth noticing — it is a duty discharged at a fixed hour, and the tradition's argument for it is simply that the hour has come.",
      kn: "ಅರ್ಘ್ಯ ಅತಿ ಪ್ರಾಚೀನ ಭಾಗ ಮತ್ತು ಅತಿ ಕಡಿಮೆ ಅರ್ಥವಾದದ್ದು: ಬ್ರಾಹ್ಮಣಗಳಲ್ಲಿ ದಿನದ ಸಂಧಿಗಳಲ್ಲಿ ಸೂರ್ಯನ ಮೇಲೆ ಎರಗುವ ರಾಕ್ಷಸರ ಮೇಲೆ ನೀರು ಎರಚಲಾಗುತ್ತದೆ, ಮತ್ತು ಮಾಡುವವನು ಸಹಾಯ ಮಾಡುತ್ತಿದ್ದಾನೆ. ಈ ಕರ್ಮದಲ್ಲಿ ಯಾವುದೂ ಏನನ್ನೂ ಕೇಳುವುದಿಲ್ಲ. ನಿತ್ಯ ಆಚರಣೆಗಳಲ್ಲಿ ಇದು ಗಮನಿಸುವಷ್ಟು ಅಪರೂಪ — ನಿಗದಿತ ಹೊತ್ತಿನಲ್ಲಿ ತೀರಿಸುವ ಕರ್ತವ್ಯ, ಮತ್ತು ಪರಂಪರೆಯ ಕಾರಣ ಇಷ್ಟೇ: ಹೊತ್ತು ಬಂದಿದೆ.",
      hi: "अर्घ्य सबसे प्राचीन अंश है और सबसे कम समझा गया: ब्राह्मण ग्रंथों में दिन के संधिकालों पर सूर्य पर आक्रमण करने वाले असुरों पर जल फेंका जाता है, और करने वाला सहायता कर रहा है। इस कर्म में कुछ भी कुछ नहीं माँगता। नित्य आचरणों में यह ध्यान देने योग्य असामान्य है — नियत घड़ी पर चुकाया गया दायित्व, और परंपरा का कारण इतना ही: घड़ी आ गई है।",
    },
    words: [L("/stutis/gayatri/gayatri-mantra", "The Gāyatrī", "ಗಾಯತ್ರೀ", "गायत्री")],
    links: [L("/practice/gayatri", "Sitting with it", "ಅದರೊಂದಿಗೆ ಕೂರುವುದು", "उसके साथ बैठना")],
  },

  {
    slug: "puja",
    name: { en: "Pūjā", kn: "ಪೂಜೆ", hi: "पूजा" },
    sanskrit: "षोडशोपचारपूजा",
    group: "nitya",
    order: 10,
    when: {
      en: "Once or twice daily, after the bath and before the first meal.",
      kn: "ದಿನಕ್ಕೆ ಒಮ್ಮೆ ಅಥವಾ ಎರಡು ಬಾರಿ, ಸ್ನಾನದ ನಂತರ ಮತ್ತು ಮೊದಲ ಊಟಕ್ಕೆ ಮೊದಲು.",
      hi: "दिन में एक या दो बार, स्नान के बाद और पहले भोजन से पहले।",
    },
    lede: {
      en: "Sixteen attentions paid to a guest, where the guest is the deity.",
      kn: "ಅತಿಥಿಗೆ ಸಲ್ಲಿಸುವ ಹದಿನಾರು ಉಪಚಾರ — ಇಲ್ಲಿ ಅತಿಥಿ ದೇವತೆ.",
      hi: "अतिथि को दिए सोलह उपचार — जहाँ अतिथि देवता है।",
    },
    observed: {
      en: "The full form is the ṣoḍaśopacāra: invitation, a seat, water for the feet, water for the hands, water to sip, a bath, cloth, the sacred thread, sandal, flowers, incense, a lamp, food, betel, the lamp circled, and then circumambulation and a bow. Most households do a short form of six or eight, and every one of them is a thing you would do for a person who had come to the door.",
      kn: "ಪೂರ್ಣ ರೂಪ ಷೋಡಶೋಪಚಾರ: ಆವಾಹನೆ, ಆಸನ, ಪಾದ್ಯ, ಅರ್ಘ್ಯ, ಆಚಮನ, ಸ್ನಾನ, ವಸ್ತ್ರ, ಯಜ್ಞೋಪವೀತ, ಗಂಧ, ಪುಷ್ಪ, ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯ, ತಾಂಬೂಲ, ನೀರಾಜನ, ನಂತರ ಪ್ರದಕ್ಷಿಣೆ ಮತ್ತು ನಮಸ್ಕಾರ. ಬಹುತೇಕ ಮನೆಗಳು ಆರು ಅಥವಾ ಎಂಟರ ಸಂಕ್ಷಿಪ್ತ ರೂಪ ಮಾಡುತ್ತವೆ, ಮತ್ತು ಅವುಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಬಾಗಿಲಿಗೆ ಬಂದ ವ್ಯಕ್ತಿಗೆ ನೀವು ಮಾಡುವುದೇ.",
      hi: "पूर्ण रूप षोडशोपचार है: आवाहन, आसन, पाद्य, अर्घ्य, आचमन, स्नान, वस्त्र, यज्ञोपवीत, गंध, पुष्प, धूप, दीप, नैवेद्य, ताम्बूल, नीराजन, फिर प्रदक्षिणा और नमस्कार। अधिकांश घर छह या आठ का संक्षिप्त रूप करते हैं, और उनमें से हर एक वही है जो आप द्वार पर आए व्यक्ति के लिए करेंगे।",
    },
    significance: {
      en: "The grammar of pūjā is hospitality, and once that is seen the whole sequence explains itself — you do not offer a bath to a symbol. The Āgamas are explicit that the image is a guest received, not a thing worshipped, and the rite ends by sending the guest away again.",
      kn: "ಪೂಜೆಯ ವ್ಯಾಕರಣ ಆತಿಥ್ಯ, ಮತ್ತು ಅದು ಕಂಡ ಮೇಲೆ ಇಡೀ ಕ್ರಮ ತಾನೇ ಅರ್ಥವಾಗುತ್ತದೆ — ಸಂಕೇತಕ್ಕೆ ಯಾರೂ ಸ್ನಾನ ಅರ್ಪಿಸುವುದಿಲ್ಲ. ಆಗಮಗಳು ಸ್ಪಷ್ಟವಾಗಿ ಹೇಳುತ್ತವೆ: ಮೂರ್ತಿ ಸ್ವೀಕರಿಸಿದ ಅತಿಥಿ, ಪೂಜಿಸಲಾಗುವ ವಸ್ತುವಲ್ಲ — ಮತ್ತು ಕರ್ಮ ಮುಗಿಯುವುದು ಅತಿಥಿಯನ್ನು ಮರಳಿ ಕಳುಹಿಸಿಯೇ.",
      hi: "पूजा का व्याकरण आतिथ्य है, और यह दिख जाने पर पूरा क्रम स्वयं समझ में आता है — प्रतीक को कोई स्नान नहीं अर्पित करता। आगम स्पष्ट हैं: प्रतिमा स्वीकृत अतिथि है, पूजी जाने वाली वस्तु नहीं — और कर्म अतिथि को विदा देकर ही पूरा होता है।",
    },
    links: [L("/stutis", "The stotras said during it", "ಅದರಲ್ಲಿ ಹೇಳುವ ಸ್ತೋತ್ರಗಳು", "उसमें कहे जाने वाले स्तोत्र")],
  },

  {
    slug: "deepa",
    name: { en: "The lamp at dusk", kn: "ಸಂಜೆಯ ದೀಪ", hi: "सांध्य दीप" },
    sanskrit: "सन्ध्यादीपः",
    group: "nitya",
    order: 11,
    when: {
      en: "At the moment the light goes — not after dark.",
      kn: "ಬೆಳಕು ಹೋಗುವ ಕ್ಷಣದಲ್ಲಿ — ಕತ್ತಲಾದ ಮೇಲಲ್ಲ.",
      hi: "जिस क्षण प्रकाश जाता है — अँधेरा होने के बाद नहीं।",
    },
    lede: {
      en: "The smallest daily rite there is, and the one most households still keep when they have dropped all the rest.",
      kn: "ಇರುವ ಅತಿ ಚಿಕ್ಕ ನಿತ್ಯ ಕರ್ಮ, ಮತ್ತು ಉಳಿದೆಲ್ಲವನ್ನೂ ಬಿಟ್ಟ ಮನೆಗಳೂ ಇದನ್ನು ಉಳಿಸಿಕೊಂಡಿವೆ.",
      hi: "जो सबसे छोटा नित्य कर्म है, और जिसे शेष सब छोड़ चुके घर भी निभाते हैं।",
    },
    observed: {
      en: "A lamp is lit before the household shrine, and often a second at the tulasī or the threshold. In many houses it is the women who light it, and in many the children are called in to be there. A single line is said; some families say the dīpa verse, some only the name of the deity.",
      kn: "ಮನೆಯ ದೇವರ ಮುಂದೆ ದೀಪ ಹಚ್ಚುತ್ತಾರೆ, ಮತ್ತು ಹಲವು ಬಾರಿ ತುಳಸಿಯ ಅಥವಾ ಹೊಸ್ತಿಲ ಮುಂದೆ ಇನ್ನೊಂದು. ಹಲವು ಮನೆಗಳಲ್ಲಿ ಹಚ್ಚುವವರು ಹೆಂಗಸರು, ಮತ್ತು ಹಲವು ಮನೆಗಳಲ್ಲಿ ಮಕ್ಕಳನ್ನು ಕರೆದು ಅಲ್ಲಿ ನಿಲ್ಲಿಸುತ್ತಾರೆ. ಒಂದೇ ಸಾಲು ಹೇಳುತ್ತಾರೆ; ಕೆಲವು ಕುಟುಂಬಗಳು ದೀಪದ ಶ್ಲೋಕ, ಕೆಲವು ದೇವರ ಹೆಸರಷ್ಟೇ.",
      hi: "घर के देवस्थान के सामने दीप जलाया जाता है, और प्रायः तुलसी या द्वार पर दूसरा। बहुत घरों में जलाने वाली स्त्रियाँ होती हैं, और बहुत घरों में बच्चों को बुलाकर वहाँ खड़ा किया जाता है। एक ही पंक्ति कही जाती है; कुछ परिवार दीप-श्लोक, कुछ केवल देवता का नाम।",
    },
    significance: {
      en: "The hour is the whole of it. The two saṃdhis — daybreak and nightfall — are held to be the joins where the day is neither one thing nor the other, and the tradition fills them with something done rather than leaving them empty. A lamp lit at the wrong hour is a lamp; lit at that one it is the rite.",
      kn: "ಹೊತ್ತೇ ಇದರ ಪೂರ್ಣ ತಿರುಳು. ಎರಡು ಸಂಧಿಗಳು — ಬೆಳಗಾಗುವುದು ಮತ್ತು ಕತ್ತಲಾಗುವುದು — ದಿನ ಇದೂ ಅಲ್ಲ ಅದೂ ಅಲ್ಲದ ಜೋಡುಗಳೆಂದು ನಂಬಿಕೆ, ಮತ್ತು ಪರಂಪರೆ ಅವನ್ನು ಖಾಲಿ ಬಿಡುವ ಬದಲು ಮಾಡುವ ಕೆಲಸದಿಂದ ತುಂಬುತ್ತದೆ. ತಪ್ಪಾದ ಹೊತ್ತಿನಲ್ಲಿ ಹಚ್ಚಿದ ದೀಪ ದೀಪ; ಆ ಹೊತ್ತಿನಲ್ಲಿ ಹಚ್ಚಿದ್ದು ಕರ್ಮ.",
      hi: "घड़ी ही इसका सब कुछ है। दो संधियाँ — पौ फटना और अँधेरा होना — वे जोड़ मानी जाती हैं जहाँ दिन न यह है न वह, और परंपरा उन्हें खाली छोड़ने के बजाय किए गए किसी कर्म से भरती है। गलत घड़ी पर जलाया दीप दीप है; उस घड़ी पर जलाया कर्म है।",
    },
  },

  // ── days kept ─────────────────────────────────────────────
  {
    slug: "ekadashi",
    name: { en: "Ekādaśī", kn: "ಏಕಾದಶಿ", hi: "एकादशी" },
    sanskrit: "एकादशीव्रतम्",
    group: "vrata",
    order: 12,
    when: {
      en: "The eleventh tithi of both fortnights — twenty-four days a year, and twenty-six in an adhika month.",
      kn: "ಎರಡೂ ಪಕ್ಷಗಳ ಹನ್ನೊಂದನೇ ತಿಥಿ — ವರ್ಷಕ್ಕೆ ಇಪ್ಪತ್ತನಾಲ್ಕು ದಿನ, ಅಧಿಕ ಮಾಸದಲ್ಲಿ ಇಪ್ಪತ್ತಾರು.",
      hi: "दोनों पक्षों की ग्यारहवीं तिथि — वर्ष में चौबीस दिन, अधिक मास में छब्बीस।",
    },
    lede: {
      en: "The commonest fast in the tradition, and the only observance that comes twice a month all year.",
      kn: "ಪರಂಪರೆಯಲ್ಲಿನ ಅತಿ ಸಾಮಾನ್ಯ ಉಪವಾಸ, ಮತ್ತು ವರ್ಷವಿಡೀ ತಿಂಗಳಿಗೆ ಎರಡು ಬಾರಿ ಬರುವ ಒಂದೇ ಆಚರಣೆ.",
      hi: "परंपरा का सबसे आम उपवास, और वर्ष भर मास में दो बार आने वाला एकमात्र आचरण।",
    },
    observed: {
      en: "Grain is given up for the day — rice, wheat and pulses — and many keep to fruit, milk and the tubers allowed for the fast. Some take nothing at all. The fast is broken the next morning at a fixed hour called pāraṇa, and breaking it late counts against the observance rather than adding to it.",
      kn: "ಆ ದಿನಕ್ಕೆ ಧಾನ್ಯ ಬಿಡುತ್ತಾರೆ — ಅಕ್ಕಿ, ಗೋಧಿ, ಬೇಳೆ — ಮತ್ತು ಹಲವರು ಹಣ್ಣು, ಹಾಲು ಮತ್ತು ಉಪವಾಸಕ್ಕೆ ಒಪ್ಪುವ ಗೆಡ್ಡೆಗಳಿಗೆ ಸೀಮಿತವಾಗಿರುತ್ತಾರೆ. ಕೆಲವರು ಏನನ್ನೂ ತೆಗೆದುಕೊಳ್ಳುವುದಿಲ್ಲ. ಮರುದಿನ ಬೆಳಿಗ್ಗೆ ಪಾರಣ ಎಂಬ ನಿಗದಿತ ಹೊತ್ತಿನಲ್ಲಿ ಉಪವಾಸ ಬಿಡುತ್ತಾರೆ, ಮತ್ತು ತಡವಾಗಿ ಬಿಟ್ಟರೆ ಅದು ಆಚರಣೆಗೆ ಕೂಡುವುದಿಲ್ಲ, ಕಳೆಯುತ್ತದೆ.",
      hi: "उस दिन अन्न छोड़ा जाता है — चावल, गेहूँ, दालें — और बहुत लोग फल, दूध और व्रत में स्वीकृत कंदों तक सीमित रहते हैं। कुछ कुछ भी नहीं लेते। अगली सुबह पारण नामक नियत घड़ी पर व्रत खोला जाता है, और देर से खोलना आचरण में जुड़ता नहीं, घटता है।",
    },
    significance: {
      en: "Fasting here is not abstinence for its own sake: the eleventh tithi is held to be when the mind is least held down by the body, which is why the day is given to reading and japa rather than simply to hunger. A fast with nothing put in its place is, on the tradition's own account, a wasted day.",
      kn: "ಇಲ್ಲಿ ಉಪವಾಸ ತನಗಾಗಿಯೇ ಇರುವ ವಿರಕ್ತಿಯಲ್ಲ: ಹನ್ನೊಂದನೇ ತಿಥಿಯಲ್ಲಿ ಮನಸ್ಸು ದೇಹದಿಂದ ಅತಿ ಕಡಿಮೆ ಒತ್ತಲ್ಪಡುತ್ತದೆ ಎಂಬ ನಂಬಿಕೆ — ಆದ್ದರಿಂದಲೇ ಆ ದಿನವನ್ನು ಬರೀ ಹಸಿವಿಗಲ್ಲ, ಪಾರಾಯಣ ಮತ್ತು ಜಪಕ್ಕೆ ಕೊಡುತ್ತಾರೆ. ಜಾಗದಲ್ಲಿ ಬೇರೇನೂ ಇಡದ ಉಪವಾಸ, ಪರಂಪರೆಯ ಪ್ರಕಾರವೇ, ವ್ಯರ್ಥ ದಿನ.",
      hi: "यहाँ उपवास अपने लिए किया संयम नहीं: ग्यारहवीं तिथि पर मन देह से सबसे कम दबा माना जाता है — इसीलिए वह दिन केवल भूख को नहीं, पाठ और जप को दिया जाता है। जिसके स्थान पर कुछ न रखा जाए, वह उपवास परंपरा के अपने हिसाब से व्यर्थ दिन है।",
    },
    regional: {
      en: "Mādhva and Śrī Vaiṣṇava households keep it most strictly, and in Karnataka the two in Kārtika and the one before Vaikuṇṭha are kept by families who fast on no other day.",
      kn: "ಮಾಧ್ವ ಮತ್ತು ಶ್ರೀವೈಷ್ಣವ ಮನೆಗಳು ಇದನ್ನು ಅತಿ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಆಚರಿಸುತ್ತವೆ, ಮತ್ತು ಕರ್ನಾಟಕದಲ್ಲಿ ಕಾರ್ತಿಕದ ಎರಡು ಮತ್ತು ವೈಕುಂಠದ ಮೊದಲಿನದು — ಬೇರೆ ಯಾವ ದಿನವೂ ಉಪವಾಸ ಮಾಡದ ಕುಟುಂಬಗಳೂ ಇವನ್ನು ಆಚರಿಸುತ್ತವೆ.",
      hi: "माध्व और श्रीवैष्णव घर इसे सबसे कठोरता से निभाते हैं, और कर्नाटक में कार्तिक की दो तथा वैकुंठ से पूर्व की एकादशी वे परिवार भी रखते हैं जो और किसी दिन उपवास नहीं करते।",
    },
  },

  {
    slug: "pradosha",
    name: { en: "Pradoṣa", kn: "ಪ್ರದೋಷ", hi: "प्रदोष" },
    sanskrit: "प्रदोषव्रतम्",
    group: "vrata",
    order: 13,
    when: {
      en: "The hour and a half after sunset on the thirteenth tithi.",
      kn: "ಹದಿಮೂರನೇ ತಿಥಿಯ ಸೂರ್ಯಾಸ್ತದ ನಂತರದ ಒಂದೂವರೆ ತಾಸು.",
      hi: "त्रयोदशी को सूर्यास्त के बाद का डेढ़ घंटा।",
    },
    lede: {
      en: "An observance measured in a single hour rather than a day, and the busiest hour of the fortnight in a Śiva temple.",
      kn: "ಒಂದು ದಿನದಲ್ಲಲ್ಲ, ಒಂದೇ ತಾಸಿನಲ್ಲಿ ಅಳೆಯುವ ಆಚರಣೆ — ಮತ್ತು ಶಿವ ದೇವಸ್ಥಾನದಲ್ಲಿ ಪಕ್ಷದ ಅತಿ ಗಿಜಿಗಿಜಿ ತಾಸು.",
      hi: "जो एक दिन में नहीं, एक ही घंटे में नापा जाता है — और शिव मंदिर में पखवाड़े का सबसे व्यस्त घंटा।",
    },
    observed: {
      en: "Abhiṣeka is done in that window, and the Nandi before the shrine is bathed with it. Householders keep a light fast until it is over. The Soma-pradoṣa, when the thirteenth falls on a Monday, draws several times the usual crowd.",
      kn: "ಆ ಅವಧಿಯಲ್ಲಿ ಅಭಿಷೇಕ ನಡೆಯುತ್ತದೆ, ಮತ್ತು ಗರ್ಭಗುಡಿಯ ಮುಂದಿನ ನಂದಿಗೂ ಅಭಿಷೇಕವಾಗುತ್ತದೆ. ಗೃಹಸ್ಥರು ಅದು ಮುಗಿಯುವವರೆಗೆ ಹಗುರ ಉಪವಾಸ ಇರುತ್ತಾರೆ. ಹದಿಮೂರನೆಯದು ಸೋಮವಾರ ಬಿದ್ದಾಗ ಸೋಮ ಪ್ರದೋಷ — ಸಾಮಾನ್ಯದ ಹಲವು ಪಟ್ಟು ಜನ.",
      hi: "उस अवधि में अभिषेक होता है, और गर्भगृह के सामने के नंदी का भी। गृहस्थ उसके पूरा होने तक हल्का उपवास रखते हैं। त्रयोदशी सोमवार को पड़े तो सोम-प्रदोष — सामान्य से कई गुना भीड़।",
    },
    significance: {
      en: "The hour is chosen for what it is held to commemorate: the churning of the ocean, and the moment Śiva took the poison that came up before the nectar did. Pradoṣa means exactly that — the first fault of the night, when what is wrong appears before what is wanted.",
      kn: "ಆ ತಾಸನ್ನು ಆರಿಸಿರುವುದು ಅದು ನೆನಪಿಸುವುದೆಂದು ನಂಬುವ ವಿಷಯಕ್ಕಾಗಿ: ಸಮುದ್ರಮಥನ, ಮತ್ತು ಅಮೃತಕ್ಕೆ ಮೊದಲು ಬಂದ ವಿಷವನ್ನು ಶಿವ ತೆಗೆದುಕೊಂಡ ಕ್ಷಣ. ಪ್ರದೋಷ ಎಂದರೆ ನಿಖರವಾಗಿ ಅದೇ — ರಾತ್ರಿಯ ಮೊದಲ ದೋಷ, ಬೇಕಾದದ್ದಕ್ಕೆ ಮೊದಲು ಕೆಟ್ಟದ್ದು ಕಾಣಿಸುವ ಹೊತ್ತು.",
      hi: "यह घड़ी उसी के लिए चुनी गई है जिसका वह स्मरण मानी जाती है: समुद्र मंथन, और वह क्षण जब अमृत से पहले निकले विष को शिव ने लिया। प्रदोष का अर्थ ठीक वही है — रात्रि का पहला दोष, जब वांछित से पहले अवांछित प्रकट होता है।",
    },
  },

  {
    slug: "sankashtahara-chaturthi",
    name: {
      en: "Saṅkaṣṭahara Chaturthī",
      kn: "ಸಂಕಷ್ಟಹರ ಚತುರ್ಥಿ",
      hi: "संकष्टहर चतुर्थी",
    },
    sanskrit: "सङ्कष्टहरचतुर्थी",
    group: "vrata",
    order: 14,
    when: {
      en: "The fourth tithi of the waning fortnight, every month.",
      kn: "ಪ್ರತಿ ತಿಂಗಳ ಕೃಷ್ಣ ಪಕ್ಷದ ನಾಲ್ಕನೇ ತಿಥಿ.",
      hi: "प्रत्येक मास कृष्ण पक्ष की चतुर्थी।",
    },
    lede: {
      en: "A monthly fast to Gaṇeśa, broken only after the moon has been seen.",
      kn: "ಗಣೇಶನಿಗೆ ಮಾಸಿಕ ಉಪವಾಸ — ಚಂದ್ರ ಕಂಡ ಮೇಲಷ್ಟೇ ಬಿಡುವುದು.",
      hi: "गणेश को मासिक उपवास — चंद्र-दर्शन के बाद ही खोला जाता।",
    },
    observed: {
      en: "The day is kept without a proper meal. In the evening the pūjā is done, and the fast is broken after moonrise — which in the waning fortnight is late, and getting later each month of the cycle. Modaka or karjikāyi is made.",
      kn: "ಆ ದಿನ ಸರಿಯಾದ ಊಟವಿಲ್ಲದೆ ಕಳೆಯುತ್ತಾರೆ. ಸಂಜೆ ಪೂಜೆ ಮಾಡಿ, ಚಂದ್ರೋದಯದ ನಂತರ ಉಪವಾಸ ಬಿಡುತ್ತಾರೆ — ಕೃಷ್ಣ ಪಕ್ಷದಲ್ಲಿ ಅದು ತಡ, ಮತ್ತು ಚಕ್ರದ ಪ್ರತಿ ತಿಂಗಳೂ ಇನ್ನೂ ತಡ. ಮೋದಕ ಅಥವಾ ಕರ್ಜಿಕಾಯಿ ಮಾಡುತ್ತಾರೆ.",
      hi: "वह दिन पूरे भोजन के बिना बिताया जाता है। सायं पूजा होती है, और चंद्रोदय के बाद व्रत खुलता है — कृष्ण पक्ष में वह देर से होता है, और चक्र के हर मास में और देर से। मोदक या करजिकाई बनाई जाती है।",
    },
    significance: {
      en: "The waiting is the observance. A vrata fixed to moonrise cannot be finished early or planned around, and the tradition is candid that this is the point: the day is kept inconvenient on purpose.",
      kn: "ಕಾಯುವುದೇ ಆಚರಣೆ. ಚಂದ್ರೋದಯಕ್ಕೆ ಕಟ್ಟಿದ ವ್ರತವನ್ನು ಬೇಗ ಮುಗಿಸಲಾಗದು, ಅದರ ಸುತ್ತ ಯೋಜಿಸಲಾಗದು — ಮತ್ತು ಇದೇ ಉದ್ದೇಶ ಎಂದು ಪರಂಪರೆ ನೇರವಾಗಿ ಹೇಳುತ್ತದೆ: ಈ ದಿನವನ್ನು ಬೇಕೆಂದೇ ಅನನುಕೂಲವಾಗಿ ಇಡಲಾಗಿದೆ.",
      hi: "प्रतीक्षा ही आचरण है। चंद्रोदय से बँधा व्रत जल्दी पूरा नहीं किया जा सकता, न उसके आसपास योजना बनाई जा सकती है — और परंपरा स्पष्ट है कि यही उद्देश्य है: यह दिन जान-बूझकर असुविधाजनक रखा गया है।",
    },
    words: [
      L(
        "/stutis/ganesha/sankatanashana-ganesha-stotram",
        "Saṅkaṭanāśana Gaṇeśa Stotra",
        "ಸಂಕಟನಾಶನ ಗಣೇಶ ಸ್ತೋತ್ರ",
        "संकटनाशन गणेश स्तोत्र"
      ),
    ],
  },

  {
    slug: "chaturmasya",
    name: { en: "Chāturmāsya", kn: "ಚಾತುರ್ಮಾಸ್ಯ", hi: "चातुर्मास्य" },
    sanskrit: "चातुर्मास्यव्रतम्",
    group: "vrata",
    order: 15,
    when: {
      en: "The four months of the rains, from Āṣāḍha pūrṇimā to Kārtika.",
      kn: "ಮಳೆಗಾಲದ ನಾಲ್ಕು ತಿಂಗಳು, ಆಷಾಢ ಹುಣ್ಣಿಮೆಯಿಂದ ಕಾರ್ತಿಕದವರೆಗೆ.",
      hi: "वर्षा के चार मास, आषाढ़ पूर्णिमा से कार्तिक तक।",
    },
    lede: {
      en: "The one observance that lasts a season, and the only one that stops a sannyāsin walking.",
      kn: "ಒಂದು ಋತುವಿಡೀ ಇರುವ ಒಂದೇ ಆಚರಣೆ, ಮತ್ತು ಸನ್ಯಾಸಿಯ ನಡಿಗೆಯನ್ನು ನಿಲ್ಲಿಸುವ ಒಂದೇ ಒಂದು.",
      hi: "जो एक ऋतु भर चलता है वही एक आचरण, और संन्यासी का चलना रोकने वाला एकमात्र।",
    },
    observed: {
      en: "A sannyāsin stays in one place for the four months and does not travel; this is when a maṭha's head is reliably where his maṭha is, and when the Chāturmāsya lectures are given. Householders give up one food a month — commonly greens in the first, curd in the second, milk in the third, and pulses in the fourth. No marriage is performed in the period.",
      kn: "ಸನ್ಯಾಸಿ ನಾಲ್ಕು ತಿಂಗಳು ಒಂದೇ ಕಡೆ ಇರುತ್ತಾರೆ, ಪ್ರಯಾಣಿಸುವುದಿಲ್ಲ; ಮಠಾಧಿಪತಿ ತನ್ನ ಮಠದಲ್ಲೇ ಇರುವುದು ಖಚಿತವಾಗಿ ಈ ಕಾಲದಲ್ಲಿ, ಮತ್ತು ಚಾತುರ್ಮಾಸ್ಯದ ಪ್ರವಚನಗಳು ನಡೆಯುವುದೂ ಆಗ. ಗೃಹಸ್ಥರು ತಿಂಗಳಿಗೆ ಒಂದು ಆಹಾರ ಬಿಡುತ್ತಾರೆ — ಸಾಮಾನ್ಯವಾಗಿ ಮೊದಲನೆಯದರಲ್ಲಿ ಸೊಪ್ಪು, ಎರಡನೆಯದರಲ್ಲಿ ಮೊಸರು, ಮೂರನೆಯದರಲ್ಲಿ ಹಾಲು, ನಾಲ್ಕನೆಯದರಲ್ಲಿ ಬೇಳೆ. ಈ ಅವಧಿಯಲ್ಲಿ ಮದುವೆ ನಡೆಯುವುದಿಲ್ಲ.",
      hi: "संन्यासी चार मास एक ही स्थान पर रहते हैं, यात्रा नहीं करते; मठाधिपति अपने मठ में निश्चित रूप से इसी काल में होते हैं, और चातुर्मास्य के प्रवचन तब ही होते हैं। गृहस्थ मास में एक आहार छोड़ते हैं — प्रायः पहले में साग, दूसरे में दही, तीसरे में दूध, चौथे में दालें। इस अवधि में विवाह नहीं होता।",
    },
    significance: {
      en: "The reason given is practical before it is spiritual: in the rains the paths are washed out and the ground is full of small life that a walking mendicant cannot avoid treading on. An observance built to prevent harm rather than to earn merit is rarer in the tradition than one might expect, and this is the clearest example of it.",
      kn: "ಕೊಡುವ ಕಾರಣ ಆಧ್ಯಾತ್ಮಿಕಕ್ಕೆ ಮೊದಲು ಪ್ರಾಯೋಗಿಕ: ಮಳೆಯಲ್ಲಿ ದಾರಿಗಳು ಕೊಚ್ಚಿಹೋಗುತ್ತವೆ ಮತ್ತು ನೆಲ ನಡೆಯುವ ಸನ್ಯಾಸಿ ತಪ್ಪಿಸಲಾಗದ ಸಣ್ಣ ಜೀವಗಳಿಂದ ತುಂಬಿರುತ್ತದೆ. ಪುಣ್ಯ ಗಳಿಸಲಲ್ಲ, ಹಾನಿ ತಪ್ಪಿಸಲು ಕಟ್ಟಿದ ಆಚರಣೆ ಪರಂಪರೆಯಲ್ಲಿ ನಿರೀಕ್ಷೆಗಿಂತ ಅಪರೂಪ, ಮತ್ತು ಇದು ಅದರ ಅತಿ ಸ್ಪಷ್ಟ ಉದಾಹರಣೆ.",
      hi: "जो कारण दिया जाता है वह आध्यात्मिक से पहले व्यावहारिक है: वर्षा में मार्ग बह जाते हैं और भूमि उन छोटे जीवों से भरी होती है जिन्हें चलता संन्यासी बचा नहीं सकता। पुण्य कमाने के लिए नहीं, हानि रोकने के लिए बना आचरण परंपरा में अपेक्षा से दुर्लभ है, और यह उसका सबसे स्पष्ट उदाहरण है।",
    },
    links: [L("/mathas", "The mathas", "ಮಠಗಳು", "मठ")],
  },

  // ── the fire ──────────────────────────────────────────────
  {
    slug: "homa",
    name: { en: "Homa", kn: "ಹೋಮ", hi: "होम" },
    sanskrit: "होमः",
    group: "yajna",
    order: 16,
    when: {
      en: "At the start of anything — a house, a marriage, a business, a recovery.",
      kn: "ಯಾವುದೇ ಆರಂಭದಲ್ಲಿ — ಮನೆ, ಮದುವೆ, ವ್ಯಾಪಾರ, ಗುಣವಾಗುವುದು.",
      hi: "किसी भी आरंभ पर — घर, विवाह, व्यापार, स्वास्थ्य-लाभ।",
    },
    lede: {
      en: "A fire kindled for one occasion, and the commonest form in which anyone still meets the Vedic rite.",
      kn: "ಒಂದು ಸಂದರ್ಭಕ್ಕಾಗಿ ಹೊತ್ತಿಸಿದ ಅಗ್ನಿ, ಮತ್ತು ವೈದಿಕ ಕರ್ಮವನ್ನು ಇಂದಿಗೂ ಯಾರಾದರೂ ಎದುರಾಗುವ ಅತಿ ಸಾಮಾನ್ಯ ರೂಪ.",
      hi: "एक अवसर के लिए प्रज्वलित अग्नि, और वैदिक कर्म से आज भी किसी का मिलना जिस रूप में सबसे आम है।",
    },
    observed: {
      en: "A kuṇḍa is built, the fire is kindled and named, and ghee and a prepared mixture are offered into it with a mantra. The offering is made at the word svāhā, and at each one the giver says idaṃ na mama — this is not mine. At the end the fire is not put out but allowed to go down.",
      kn: "ಕುಂಡ ರಚಿಸಿ, ಅಗ್ನಿ ಹೊತ್ತಿಸಿ ಹೆಸರಿಟ್ಟು, ತುಪ್ಪ ಮತ್ತು ಸಿದ್ಧಪಡಿಸಿದ ಸಮಗ್ರಿಯನ್ನು ಮಂತ್ರದೊಂದಿಗೆ ಅದರಲ್ಲಿ ಅರ್ಪಿಸುತ್ತಾರೆ. ಸ್ವಾಹಾ ಎಂಬ ಪದದಲ್ಲಿ ಅರ್ಪಣೆ ನಡೆಯುತ್ತದೆ, ಮತ್ತು ಪ್ರತಿಯೊಂದರಲ್ಲೂ ಅರ್ಪಿಸುವವನು ಇದಂ ನ ಮಮ ಎನ್ನುತ್ತಾನೆ — ಇದು ನನ್ನದಲ್ಲ. ಕೊನೆಯಲ್ಲಿ ಅಗ್ನಿಯನ್ನು ಆರಿಸುವುದಿಲ್ಲ, ತಗ್ಗಲು ಬಿಡುತ್ತಾರೆ.",
      hi: "कुंड बनाकर, अग्नि प्रज्वलित कर उसे नाम देकर, घी और तैयार सामग्री मंत्र के साथ उसमें अर्पित की जाती है। अर्पण स्वाहा शब्द पर होता है, और प्रत्येक पर अर्पण करने वाला कहता है इदं न मम — यह मेरा नहीं। अंत में अग्नि बुझाई नहीं जाती, शांत होने दी जाती है।",
    },
    significance: {
      en: "Those three words are the whole rite. Everything offered is first declared not to belong to the person offering it, and the fire is there because it is the one recipient that visibly does not give anything back. The Upaniṣads take this apart at length and keep the grammar while moving the fire inside — which is why the same vocabulary turns up in a chapter that has no fire in it at all.",
      kn: "ಆ ಮೂರು ಪದಗಳೇ ಇಡೀ ಕರ್ಮ. ಅರ್ಪಿಸುವ ಪ್ರತಿಯೊಂದೂ ಮೊದಲು ಅರ್ಪಿಸುವವನಿಗೆ ಸೇರಿದ್ದಲ್ಲ ಎಂದು ಘೋಷಿಸಲಾಗುತ್ತದೆ, ಮತ್ತು ಅಗ್ನಿ ಅಲ್ಲಿರುವುದು ಅದೇ ಒಂದೇ ಸ್ವೀಕರಿಸುವವನು ಕಣ್ಣಿಗೆ ಕಾಣುವಂತೆ ಏನನ್ನೂ ಮರಳಿ ಕೊಡುವುದಿಲ್ಲ ಎಂಬ ಕಾರಣಕ್ಕೆ. ಉಪನಿಷತ್ತುಗಳು ಇದನ್ನು ವಿಸ್ತಾರವಾಗಿ ಬಿಡಿಸಿ, ವ್ಯಾಕರಣವನ್ನು ಉಳಿಸಿಕೊಂಡು ಅಗ್ನಿಯನ್ನು ಒಳಗೆ ಸರಿಸುತ್ತವೆ — ಆದ್ದರಿಂದಲೇ ಅಗ್ನಿಯೇ ಇಲ್ಲದ ಅಧ್ಯಾಯದಲ್ಲಿ ಅದೇ ಪದಸಂಪತ್ತು ಕಾಣಿಸುತ್ತದೆ.",
      hi: "वे तीन शब्द ही पूरा कर्म हैं। जो भी अर्पित होता है उसे पहले अर्पण करने वाले का न होना घोषित किया जाता है, और अग्नि वहाँ इसलिए है कि वही एक ग्राहक है जो प्रत्यक्षतः कुछ लौटाता नहीं। उपनिषद् इसे विस्तार से खोलते हैं और व्याकरण रखकर अग्नि को भीतर ले जाते हैं — इसीलिए वही शब्दावली उस अध्याय में भी आती है जिसमें अग्नि नहीं है।",
    },
    links: [L("/upanishads", "The Upanishads on it", "ಇದರ ಬಗ್ಗೆ ಉಪನಿಷತ್ತುಗಳು", "इस पर उपनिषद्")],
  },

  {
    slug: "agnihotra",
    name: { en: "Agnihotra", kn: "ಅಗ್ನಿಹೋತ್ರ", hi: "अग्निहोत्र" },
    sanskrit: "अग्निहोत्रम्",
    group: "yajna",
    order: 17,
    when: {
      en: "Twice daily, morning and evening, for as long as the keeper lives.",
      kn: "ದಿನಕ್ಕೆ ಎರಡು ಬಾರಿ, ಬೆಳಿಗ್ಗೆ ಮತ್ತು ಸಂಜೆ, ಹೊತ್ತವನು ಬದುಕಿರುವಷ್ಟು ಕಾಲ.",
      hi: "दिन में दो बार, प्रातः और सायं, जब तक रखने वाला जीवित है।",
    },
    lede: {
      en: "The śrauta fire that may never be allowed to go out — and which almost nobody keeps any more.",
      kn: "ಎಂದಿಗೂ ಆರಲು ಬಿಡಬಾರದ ಶ್ರೌತ ಅಗ್ನಿ — ಮತ್ತು ಈಗ ಬಹುತೇಕ ಯಾರೂ ಹೊತ್ತಿಲ್ಲ.",
      hi: "जो श्रौत अग्नि कभी बुझने नहीं दी जा सकती — और जिसे अब लगभग कोई नहीं रखता।",
    },
    observed: {
      en: "Milk is offered into the fire at dawn and at dusk, and the fire itself is maintained without a break between the two — carried, if the household moves. The man who has established it is āhitāgni, and both he and his wife are bound by the observance: it cannot be kept by one of them.",
      kn: "ಮುಂಜಾನೆ ಮತ್ತು ಸಂಜೆ ಅಗ್ನಿಯಲ್ಲಿ ಹಾಲು ಅರ್ಪಿಸುತ್ತಾರೆ, ಮತ್ತು ಎರಡರ ನಡುವೆ ಅಗ್ನಿಯನ್ನು ತುಂಡಾಗದಂತೆ ಕಾಯುತ್ತಾರೆ — ಮನೆ ಸ್ಥಳಾಂತರವಾದರೆ ಹೊತ್ತೊಯ್ದೇ. ಅದನ್ನು ಸ್ಥಾಪಿಸಿದವನು ಆಹಿತಾಗ್ನಿ, ಮತ್ತು ಅವನೂ ಅವನ ಹೆಂಡತಿಯೂ ಈ ಆಚರಣೆಗೆ ಕಟ್ಟುಬಿದ್ದವರು: ಇಬ್ಬರಲ್ಲಿ ಒಬ್ಬರಿಂದ ಇದನ್ನು ನಿರ್ವಹಿಸಲಾಗದು.",
      hi: "प्रातः और सायं अग्नि में दूध अर्पित होता है, और दोनों के बीच अग्नि को अखंड रखा जाता है — घर बदले तो साथ ले जाकर भी। जिसने उसे स्थापित किया वह आहिताग्नि है, और वह तथा उसकी पत्नी दोनों इस आचरण से बँधे हैं: दोनों में से एक इसे नहीं निभा सकता।",
    },
    significance: {
      en: "This is the rite the whole Yajurveda is arranged around, and its near-disappearance is the largest single change in Hindu practice in living memory. Saying so plainly matters more than mourning it: the śrauta tradition survives in a countable number of households, mostly in Kerala, Andhra and Maharashtra, and a page that implied otherwise would be describing a religion nobody is practising.",
      kn: "ಇಡೀ ಯಜುರ್ವೇದ ಜೋಡಿಸಲಾಗಿರುವುದೇ ಈ ಕರ್ಮದ ಸುತ್ತ, ಮತ್ತು ಅದು ಬಹುತೇಕ ಮಾಯವಾಗಿರುವುದು ನೆನಪಿನಲ್ಲಿರುವ ಕಾಲದಲ್ಲಿ ಹಿಂದೂ ಆಚರಣೆಯ ಅತಿ ದೊಡ್ಡ ಬದಲಾವಣೆ. ಶೋಕಿಸುವುದಕ್ಕಿಂತ ಇದನ್ನು ನೇರವಾಗಿ ಹೇಳುವುದು ಮುಖ್ಯ: ಶ್ರೌತ ಪರಂಪರೆ ಎಣಿಸಬಹುದಾದಷ್ಟು ಮನೆಗಳಲ್ಲಿ ಉಳಿದಿದೆ — ಬಹುಪಾಲು ಕೇರಳ, ಆಂಧ್ರ ಮತ್ತು ಮಹಾರಾಷ್ಟ್ರದಲ್ಲಿ — ಮತ್ತು ಬೇರೆ ಚಿತ್ರ ಕೊಡುವ ಪುಟ ಯಾರೂ ಆಚರಿಸದ ಧರ್ಮವನ್ನು ವರ್ಣಿಸುತ್ತಿರುತ್ತದೆ.",
      hi: "पूरा यजुर्वेद इसी कर्म के चारों ओर व्यवस्थित है, और उसका लगभग लोप स्मरणीय काल में हिंदू आचरण का सबसे बड़ा परिवर्तन है। शोक से अधिक इसे स्पष्ट कहना महत्त्व रखता है: श्रौत परंपरा गिनी जा सकने वाले घरों में बची है — अधिकतर केरल, आंध्र और महाराष्ट्र में — और इससे भिन्न चित्र देने वाला पृष्ठ ऐसे धर्म का वर्णन करेगा जिसे कोई निभा नहीं रहा।",
    },
    links: [L("/vedas", "The Vedas", "ವೇದಗಳು", "वेद")],
  },

  // ── for those who have gone ───────────────────────────────
  {
    slug: "shraddha",
    name: { en: "Śrāddha", kn: "ಶ್ರಾದ್ಧ", hi: "श्राद्ध" },
    sanskrit: "श्राद्धम्",
    group: "pitru",
    order: 18,
    when: {
      en: "Every year on the tithi of the death, not on its date.",
      kn: "ಪ್ರತಿ ವರ್ಷ ಮರಣದ ತಿಥಿಯಲ್ಲಿ, ದಿನಾಂಕದಲ್ಲಿ ಅಲ್ಲ.",
      hi: "प्रत्येक वर्ष मृत्यु की तिथि पर, तारीख़ पर नहीं।",
    },
    lede: {
      en: "The annual rite for a parent, and the clearest case in the tradition of an obligation that does not end.",
      kn: "ತಂದೆ-ತಾಯಿಗಾಗಿ ವಾರ್ಷಿಕ ಕರ್ಮ, ಮತ್ತು ಮುಗಿಯದ ಕರ್ತವ್ಯದ ಪರಂಪರೆಯಲ್ಲಿನ ಅತಿ ಸ್ಪಷ್ಟ ಉದಾಹರಣೆ.",
      hi: "माता-पिता के लिए वार्षिक कर्म, और परंपरा में उस दायित्व का सबसे स्पष्ट उदाहरण जो समाप्त नहीं होता।",
    },
    observed: {
      en: "Piṇḍas of cooked rice and sesame are made and offered with water, darbha grass and black sesame, to three generations by name. Brāhmaṇas are fed, and what is cooked is what the dead person liked. It is done at midday, and by preference at home rather than a temple.",
      kn: "ಬೇಯಿಸಿದ ಅನ್ನ ಮತ್ತು ಎಳ್ಳಿನ ಪಿಂಡಗಳನ್ನು ಮಾಡಿ, ನೀರು, ದರ್ಭೆ ಮತ್ತು ಕಪ್ಪೆಳ್ಳಿನೊಂದಿಗೆ ಮೂರು ತಲೆಮಾರುಗಳಿಗೆ ಹೆಸರು ಹೇಳಿ ಅರ್ಪಿಸುತ್ತಾರೆ. ಬ್ರಾಹ್ಮಣರಿಗೆ ಊಟ ಹಾಕುತ್ತಾರೆ, ಮತ್ತು ಅಡುಗೆ ಮಾಡುವುದು ಸತ್ತವರಿಗೆ ಇಷ್ಟವಾದದ್ದನ್ನೇ. ಮಧ್ಯಾಹ್ನ ಮಾಡುತ್ತಾರೆ, ಮತ್ತು ದೇವಸ್ಥಾನಕ್ಕಿಂತ ಮನೆಯಲ್ಲೇ ಒಳಿತು ಎಂದು ಪರಿಗಣನೆ.",
      hi: "पके चावल और तिल के पिंड बनाकर जल, दर्भ और काले तिल के साथ तीन पीढ़ियों को नाम लेकर अर्पित किए जाते हैं। ब्राह्मणों को भोजन कराया जाता है, और पकाया वही जाता है जो मृतक को प्रिय था। मध्याह्न में किया जाता है, और मंदिर से अधिक घर में श्रेयस्कर माना जाता है।",
    },
    significance: {
      en: "The tradition counts three debts a person is born owing — to the sages, to the gods, and to the ancestors — and this is how the third is served. It is worth noticing that it is discharged by cooking and feeding rather than by remembering: the rite has almost no words for grief and a great deal of instruction about food.",
      kn: "ಪರಂಪರೆ ಹುಟ್ಟುವಾಗಲೇ ಹೊತ್ತು ಬರುವ ಮೂರು ಋಣಗಳನ್ನು ಎಣಿಸುತ್ತದೆ — ಋಷಿಗಳಿಗೆ, ದೇವತೆಗಳಿಗೆ, ಪಿತೃಗಳಿಗೆ — ಮತ್ತು ಮೂರನೆಯದನ್ನು ತೀರಿಸುವುದು ಹೀಗೆ. ಗಮನಿಸಬೇಕಾದದ್ದು: ಇದನ್ನು ನೆನಪಿಸಿಕೊಳ್ಳುವುದರಿಂದಲ್ಲ, ಅಡುಗೆ ಮಾಡಿ ಬಡಿಸುವುದರಿಂದ ತೀರಿಸಲಾಗುತ್ತದೆ. ಈ ಕರ್ಮದಲ್ಲಿ ದುಃಖಕ್ಕೆ ಬಹುತೇಕ ಪದಗಳಿಲ್ಲ, ಆಹಾರದ ಬಗ್ಗೆ ಬಹಳ ಸೂಚನೆಗಳಿವೆ.",
      hi: "परंपरा जन्म के साथ उठाए तीन ऋण गिनती है — ऋषियों का, देवों का, पितरों का — और तीसरा इसी तरह चुकाया जाता है। ध्यान देने योग्य है: यह स्मरण से नहीं, पकाने और खिलाने से चुकाया जाता है। इस कर्म में शोक के लिए शब्द लगभग नहीं हैं, भोजन के लिए बहुत निर्देश हैं।",
    },
    regional: {
      en: "Who may perform it is disputed. The śāstra names the son, and where there is none, a named order of other kin. Several mathas now hold that a daughter may, and a good many families have decided the question for themselves without waiting to be told.",
      kn: "ಯಾರು ಮಾಡಬಹುದೆಂಬುದು ವಿವಾದದಲ್ಲಿದೆ. ಶಾಸ್ತ್ರ ಮಗನನ್ನು ಹೆಸರಿಸುತ್ತದೆ, ಮತ್ತು ಅವನಿಲ್ಲದಿದ್ದರೆ ಇತರ ಬಂಧುಗಳ ನಿಗದಿತ ಕ್ರಮವನ್ನು. ಹಲವು ಮಠಗಳು ಈಗ ಮಗಳೂ ಮಾಡಬಹುದೆಂದು ಹೇಳುತ್ತವೆ, ಮತ್ತು ಸಾಕಷ್ಟು ಕುಟುಂಬಗಳು ಯಾರೂ ಹೇಳುವವರೆಗೆ ಕಾಯದೆ ತಾವೇ ನಿರ್ಧರಿಸಿವೆ.",
      hi: "कौन कर सकता है, यह विवादित है। शास्त्र पुत्र का नाम लेता है, और उसके न होने पर अन्य स्वजनों का नियत क्रम। कई मठ अब मानते हैं कि पुत्री भी कर सकती है, और बहुत परिवारों ने किसी के कहने की प्रतीक्षा किए बिना स्वयं निर्णय कर लिया है।",
    },
  },

  {
    slug: "mahalaya-paksha",
    name: { en: "Mahālaya Pakṣa", kn: "ಮಹಾಲಯ ಪಕ್ಷ", hi: "महालय पक्ष" },
    sanskrit: "महालयपक्षः",
    group: "pitru",
    order: 19,
    when: {
      en: "The dark fortnight of Bhādrapada, ending at Mahālaya amāvāsyā — the fortnight before Navarātri.",
      kn: "ಭಾದ್ರಪದದ ಕೃಷ್ಣ ಪಕ್ಷ, ಮಹಾಲಯ ಅಮಾವಾಸ್ಯೆಯಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ — ನವರಾತ್ರಿಯ ಹಿಂದಿನ ಪಕ್ಷ.",
      hi: "भाद्रपद का कृष्ण पक्ष, महालय अमावस्या पर समाप्त — नवरात्रि से पूर्व का पखवाड़ा।",
    },
    lede: {
      en: "A fortnight of tarpaṇa for everybody, including the dead whose tithi nobody remembers.",
      kn: "ಎಲ್ಲರಿಗಾಗಿ ತರ್ಪಣದ ಒಂದು ಪಕ್ಷ — ಯಾರ ತಿಥಿಯೂ ಯಾರಿಗೂ ನೆನಪಿಲ್ಲದ ಮೃತರನ್ನೂ ಸೇರಿಸಿ.",
      hi: "सबके लिए तर्पण का एक पखवाड़ा — उन मृतकों सहित जिनकी तिथि किसी को याद नहीं।",
    },
    observed: {
      en: "Water with black sesame is offered daily, facing south, to three generations on both sides. On the last day the offering is made to all the dead of the family at once, named and unnamed. In Karnataka the fortnight is when temple tanks and river ghats fill at dawn.",
      kn: "ದಿನನಿತ್ಯ ಕಪ್ಪೆಳ್ಳಿನೊಂದಿಗೆ ನೀರನ್ನು ದಕ್ಷಿಣಾಭಿಮುಖವಾಗಿ, ಎರಡೂ ಕಡೆಯ ಮೂರು ತಲೆಮಾರುಗಳಿಗೆ ಅರ್ಪಿಸುತ್ತಾರೆ. ಕೊನೆಯ ದಿನ ಕುಟುಂಬದ ಎಲ್ಲ ಮೃತರಿಗೆ — ಹೆಸರು ಗೊತ್ತಿರುವ ಮತ್ತು ಗೊತ್ತಿಲ್ಲದ — ಒಟ್ಟಿಗೆ ಅರ್ಪಣೆ. ಕರ್ನಾಟಕದಲ್ಲಿ ಈ ಪಕ್ಷದಲ್ಲಿ ಮುಂಜಾನೆ ಕಲ್ಯಾಣಿಗಳು ಮತ್ತು ನದೀ ದಡಗಳು ತುಂಬುತ್ತವೆ.",
      hi: "प्रतिदिन काले तिल के साथ जल, दक्षिण की ओर मुख कर, दोनों पक्षों की तीन पीढ़ियों को अर्पित होता है। अंतिम दिन परिवार के सभी मृतकों को — ज्ञात और अज्ञात — एक साथ अर्पण। कर्नाटक में इस पखवाड़े में भोर को कल्याणी और नदी-घाट भर जाते हैं।",
    },
    significance: {
      en: "The unnamed are the point. A family loses track of its dead within three or four generations, and the tradition builds a fortnight for exactly that — the people no living person can name are offered to as a class. It is also why Navarātri begins the day after: the dead are seen off before the goddess is invited.",
      kn: "ಹೆಸರಿಲ್ಲದವರೇ ತಿರುಳು. ಮೂರು-ನಾಲ್ಕು ತಲೆಮಾರುಗಳಲ್ಲಿ ಕುಟುಂಬ ತನ್ನ ಮೃತರ ಲೆಕ್ಕ ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು ಪರಂಪರೆ ನಿಖರವಾಗಿ ಅದಕ್ಕಾಗಿಯೇ ಒಂದು ಪಕ್ಷ ಕಟ್ಟುತ್ತದೆ — ಬದುಕಿರುವ ಯಾರೂ ಹೆಸರಿಸಲಾಗದವರಿಗೆ ಗುಂಪಾಗಿ ಅರ್ಪಣೆ. ನವರಾತ್ರಿ ಮರುದಿನವೇ ಆರಂಭವಾಗುವುದೂ ಆದ್ದರಿಂದಲೇ: ದೇವಿಯನ್ನು ಆಹ್ವಾನಿಸುವ ಮೊದಲು ಮೃತರನ್ನು ಬೀಳ್ಕೊಡುತ್ತಾರೆ.",
      hi: "अनाम ही मर्म हैं। तीन-चार पीढ़ियों में परिवार अपने मृतकों का हिसाब खो देता है, और परंपरा ठीक उसी के लिए एक पखवाड़ा बनाती है — जिन्हें कोई जीवित नाम नहीं ले सकता, उन्हें समूह रूप में अर्पण। नवरात्रि अगले ही दिन आरंभ होने का कारण भी यही: देवी को आमंत्रित करने से पहले मृतकों को विदा।",
    },
    links: [
      L("/festivals/navaratri", "Navaratri, the day after", "ಮರುದಿನದ ನವರಾತ್ರಿ", "अगले दिन की नवरात्रि"),
    ],
  },

  // ── going to the place ────────────────────────────────────
  {
    slug: "tirthayatra",
    name: { en: "Tīrthayātrā", kn: "ತೀರ್ಥಯಾತ್ರೆ", hi: "तीर्थयात्रा" },
    sanskrit: "तीर्थयात्रा",
    group: "kshetra",
    order: 20,
    when: {
      en: "On a vow, or in the season a particular kṣetra is kept.",
      kn: "ಹರಕೆಯ ಮೇರೆಗೆ, ಅಥವಾ ಒಂದು ಕ್ಷೇತ್ರವನ್ನು ಆಚರಿಸುವ ಋತುವಿನಲ್ಲಿ.",
      hi: "संकल्प पर, या जिस ऋतु में कोई क्षेत्र निभाया जाता है।",
    },
    lede: {
      en: "Going somewhere on purpose, where the going is counted as part of the rite.",
      kn: "ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಎಲ್ಲಿಗೋ ಹೋಗುವುದು — ಹೋಗುವುದೇ ಕರ್ಮದ ಭಾಗವೆಂದು ಎಣಿಕೆ.",
      hi: "जान-बूझकर कहीं जाना — जहाँ जाना ही कर्म का अंश गिना जाता है।",
    },
    observed: {
      en: "A saṅkalpa is made before setting out, saying where and why. Traditionally some part is walked, a fast or a restricted diet is kept on the road, and the first thing done on arriving is to bathe. Many kṣetras have their own additional rule — a tonsure, a circuit of nine temples, a climb.",
      kn: "ಹೊರಡುವ ಮೊದಲು ಸಂಕಲ್ಪ — ಎಲ್ಲಿಗೆ ಮತ್ತು ಏಕೆ ಎಂದು ಹೇಳಿ. ಪರಂಪರೆಯಂತೆ ಒಂದು ಭಾಗವನ್ನು ನಡೆಯುತ್ತಾರೆ, ದಾರಿಯಲ್ಲಿ ಉಪವಾಸ ಅಥವಾ ನಿಯಮಿತ ಆಹಾರ, ಮತ್ತು ತಲುಪಿದ ಕೂಡಲೇ ಮಾಡುವ ಮೊದಲ ಕೆಲಸ ಸ್ನಾನ. ಹಲವು ಕ್ಷೇತ್ರಗಳಿಗೆ ತಮ್ಮದೇ ಹೆಚ್ಚುವರಿ ನಿಯಮ — ಮುಂಡನ, ಒಂಬತ್ತು ದೇವಾಲಯಗಳ ಸುತ್ತು, ಒಂದು ಏರು.",
      hi: "निकलने से पहले संकल्प — कहाँ और क्यों, यह कहकर। परंपरा से कुछ भाग पैदल चला जाता है, मार्ग में उपवास या नियमित आहार, और पहुँचने पर पहला काम स्नान। अनेक क्षेत्रों का अपना अतिरिक्त नियम है — मुंडन, नौ मंदिरों की परिक्रमा, एक चढ़ाई।",
    },
    significance: {
      en: "A tīrtha is literally a ford — a place to cross at — and the word was used for river crossings before it was used for shrines. That is the reason the rite is about the journey rather than the destination, and the reason so many kṣetras sit at a confluence or a coast rather than anywhere convenient.",
      kn: "ತೀರ್ಥ ಎಂದರೆ ಅಕ್ಷರಶಃ ಹಾಯುವ ಜಾಗ — ದಾಟಲು ಇರುವ ಕಡೆ — ಮತ್ತು ಆ ಪದ ದೇವಸ್ಥಾನಗಳಿಗೆ ಬಳಕೆಯಾಗುವ ಮೊದಲು ನದಿ ದಾಟುವ ಕಡೆಗಳಿಗೆ ಬಳಕೆಯಾಗುತ್ತಿತ್ತು. ಈ ಕರ್ಮ ತಲುಪುವುದಕ್ಕಿಂತ ಪ್ರಯಾಣದ ಬಗ್ಗೆ ಇರುವುದಕ್ಕೆ ಅದೇ ಕಾರಣ, ಮತ್ತು ಇಷ್ಟು ಕ್ಷೇತ್ರಗಳು ಅನುಕೂಲವಾದ ಕಡೆಯಲ್ಲದೆ ಸಂಗಮದಲ್ಲಿ ಅಥವಾ ಕಡಲ ಅಂಚಿನಲ್ಲಿ ಇರುವುದಕ್ಕೂ.",
      hi: "तीर्थ का अर्थ अक्षरशः घाट है — पार करने का स्थान — और यह शब्द मंदिरों के लिए प्रयुक्त होने से पहले नदी पार करने के स्थानों के लिए चलता था। यही कारण है कि यह कर्म पहुँचने से अधिक यात्रा के विषय में है, और इतने क्षेत्र सुविधाजनक स्थान पर नहीं, संगम या समुद्र-तट पर हैं।",
    },
    links: [L("/temples", "The temples", "ದೇವಾಲಯಗಳು", "मंदिर")],
  },

  {
    slug: "pradakshina",
    name: { en: "Pradakṣiṇā", kn: "ಪ್ರದಕ್ಷಿಣೆ", hi: "प्रदक्षिणा" },
    sanskrit: "प्रदक्षिणा",
    group: "kshetra",
    order: 21,
    when: {
      en: "On entering a temple, and again before leaving it.",
      kn: "ದೇವಸ್ಥಾನ ಪ್ರವೇಶಿಸುವಾಗ, ಮತ್ತು ಹೊರಡುವ ಮೊದಲು ಮತ್ತೊಮ್ಮೆ.",
      hi: "मंदिर में प्रवेश पर, और निकलने से पहले फिर।",
    },
    lede: {
      en: "Walking round the shrine with the right side towards it — the one rite on this list that needs nothing at all.",
      kn: "ಬಲಭಾಗವನ್ನು ಗರ್ಭಗುಡಿಯ ಕಡೆ ಇಟ್ಟು ಸುತ್ತುವುದು — ಈ ಪಟ್ಟಿಯಲ್ಲಿ ಏನೂ ಬೇಡದ ಒಂದೇ ಕರ್ಮ.",
      hi: "दाहिना भाग गर्भगृह की ओर रखकर परिक्रमा — इस सूची में वही एक कर्म जिसे कुछ नहीं चाहिए।",
    },
    observed: {
      en: "Clockwise, at a walk, usually three times. The counts differ by deity and the verse quoted for them has more than one reading, so a temple's own custom decides. The one rule kept everywhere concerns Śiva: the circuit stops at the somasūtra, the channel carrying the abhiṣeka water out, and turns back rather than crossing it — which is why a Śiva pradakṣiṇā is often described as a half.",
      kn: "ಪ್ರದಕ್ಷಿಣ ದಿಕ್ಕಿನಲ್ಲಿ, ನಡೆಯುತ್ತಾ, ಸಾಮಾನ್ಯವಾಗಿ ಮೂರು ಬಾರಿ. ಎಣಿಕೆ ದೇವತೆಗೆ ಅನುಸಾರ ಬೇರೆ, ಮತ್ತು ಅದಕ್ಕೆ ಉಲ್ಲೇಖಿಸುವ ಶ್ಲೋಕಕ್ಕೆ ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಪಾಠಗಳಿವೆ, ಆದ್ದರಿಂದ ದೇವಸ್ಥಾನದ ತನ್ನದೇ ಸಂಪ್ರದಾಯ ನಿರ್ಧರಿಸುತ್ತದೆ. ಎಲ್ಲೆಡೆ ಪಾಲಿಸುವ ಒಂದೇ ನಿಯಮ ಶಿವನ ಬಗ್ಗೆ: ಅಭಿಷೇಕದ ನೀರು ಹೊರಹೋಗುವ ಸೋಮಸೂತ್ರದಲ್ಲಿ ಸುತ್ತು ನಿಲ್ಲುತ್ತದೆ, ಅದನ್ನು ದಾಟದೆ ಹಿಂತಿರುಗುತ್ತದೆ — ಆದ್ದರಿಂದಲೇ ಶಿವನ ಪ್ರದಕ್ಷಿಣೆಯನ್ನು ಅರ್ಧ ಎಂದು ಹೇಳುವುದು ಸಾಮಾನ್ಯ.",
      hi: "दक्षिणावर्त, चलते हुए, प्रायः तीन बार। गणना देवता के अनुसार भिन्न है, और उसके लिए उद्धृत श्लोक के एक से अधिक पाठ हैं, इसलिए मंदिर की अपनी परंपरा निर्णय करती है। सर्वत्र निभाया जाने वाला एक नियम शिव के विषय में है: परिक्रमा सोमसूत्र पर रुकती है, जिससे अभिषेक का जल बाहर जाता है, और उसे लाँघे बिना लौटती है — इसीलिए शिव की प्रदक्षिणा को अर्ध कहा जाता है।",
    },
    significance: {
      en: "Keeping the right side towards a person is the ordinary courtesy of an older world — the same gesture as offering with the right hand — and a temple is laid out to make it possible: the prākāra exists so there is somewhere to do this. The rite is therefore architectural before it is devotional, which is why a temple with no circuit is describing something about itself.",
      kn: "ಬಲಭಾಗವನ್ನು ವ್ಯಕ್ತಿಯ ಕಡೆ ಇಡುವುದು ಹಳೆಯ ಲೋಕದ ಸಾಮಾನ್ಯ ಸೌಜನ್ಯ — ಬಲಗೈಯಿಂದ ಕೊಡುವ ಅದೇ ಸನ್ನೆ — ಮತ್ತು ಅದು ಸಾಧ್ಯವಾಗುವಂತೆಯೇ ದೇವಸ್ಥಾನವನ್ನು ಹಾಕಲಾಗಿದೆ: ಇದನ್ನು ಮಾಡಲು ಜಾಗ ಇರಬೇಕೆಂದೇ ಪ್ರಾಕಾರ ಇದೆ. ಆದ್ದರಿಂದ ಈ ಕರ್ಮ ಭಕ್ತಿಗೆ ಮೊದಲು ವಾಸ್ತುಶಿಲ್ಪದ ವಿಷಯ — ಸುತ್ತೇ ಇಲ್ಲದ ದೇವಸ್ಥಾನ ತನ್ನ ಬಗ್ಗೆ ಏನನ್ನೋ ಹೇಳುತ್ತಿದೆ.",
      hi: "दाहिना भाग किसी की ओर रखना पुराने संसार का सामान्य शिष्टाचार है — दाहिने हाथ से देने का वही संकेत — और मंदिर इसी को संभव बनाने के लिए रचा जाता है: यह करने को स्थान हो, इसलिए प्राकार है। अतः यह कर्म भक्ति से पहले वास्तु का विषय है — जिस मंदिर में परिक्रमा नहीं, वह अपने विषय में कुछ कह रहा है।",
    },
    links: [L("/temples", "How a temple is laid out", "ದೇವಸ್ಥಾನದ ರಚನೆ", "मंदिर की रचना")],
  },
];

// ── lookups ─────────────────────────────────────────────────

export function ritualBySlug(slug: string): Ritual | undefined {
  return RITUALS.find((r) => r.slug === slug);
}

export function ritualsInGroup(group: RitualGroupId): Ritual[] {
  return RITUALS.filter((r) => r.group === group).sort((a, b) => a.order - b.order);
}

/** In the order the pager follows: by `order`, straight through the groups. */
export function ritualsInOrder(): Ritual[] {
  return [...RITUALS].sort((a, b) => a.order - b.order);
}
