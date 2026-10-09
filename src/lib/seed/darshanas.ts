import type { Locale } from "@/i18n/config";

// ─────────────────────────────────────────────────────────
//  The six darśanas — the structured half.
//
//  This file holds what can be tabulated: the six schools, their
//  root texts, how many means of knowledge each accepts, what each
//  says about God, and the countable structure each one posits. The
//  prose that needs an argument rather than a table is in
//  seed/darshana-pages.ts, the way seed/cosmos.ts and
//  seed/cosmos-topics.ts divide.
//
//  Three things this file exists to get right, because the popular
//  account gets all three wrong:
//
//  1. **"Six systems" is a later framing.** The paired list is a
//     doxographic convention; the schools did not form as a set of six
//     and did not describe themselves that way. `PAIRS` carries the
//     pairing because it is genuinely informative, not because it is
//     ancient.
//
//  2. **Āstika does not mean theist.** It means accepting the Veda as
//     a means of knowledge. Sāṅkhya argues that no God is needed and
//     Mīmāṃsā leaves one nothing to do; both are āstika. That is why
//     every school carries an `ishvara` line of its own rather than a
//     boolean.
//
//  3. **Six is not all there were.** `CONTRAST` holds the positions
//     the six argued with on every page. A list of six that leaves
//     them out makes a public argument look like a family
//     conversation.
//
//  Sanskrit is stored in Devanagari here, as everywhere on this site,
//  and converted to the reader's script by the view.
// ─────────────────────────────────────────────────────────

export type PramanaId =
  | "pratyaksha"
  | "anumana"
  | "upamana"
  | "shabda"
  | "anupalabdhi"
  | "arthapatti";

export interface PramanaDef {
  id: PramanaId;
  /** Its place in the standard list of six. The grid's column heading. */
  n: number;
  name: Record<Locale, string>;
  sanskrit: string;
  gloss: Record<Locale, string>;
}

/**
 * The six means of valid knowledge, in the order the schools built
 * them up. Nothing accepts a seventh; the whole disagreement is about
 * where in this list to stop.
 */
export const PRAMANAS: PramanaDef[] = [
  {
    id: "pratyaksha",
    n: 1,
    name: { en: "Perception", kn: "ಪ್ರತ್ಯಕ್ಷ", hi: "प्रत्यक्ष" },
    sanskrit: "प्रत्यक्षम्",
    gloss: {
      en: "What the senses deliver directly. Every school accepts this one.",
      kn: "ಇಂದ್ರಿಯಗಳು ನೇರವಾಗಿ ಕೊಡುವುದು. ಇದನ್ನು ಎಲ್ಲ ಶಾಖೆಗಳೂ ಒಪ್ಪುತ್ತವೆ.",
      hi: "जो इंद्रियाँ सीधे देती हैं। इसे हर शाखा मानती है।",
    },
  },
  {
    id: "anumana",
    n: 2,
    name: { en: "Inference", kn: "ಅನುಮಾನ", hi: "अनुमान" },
    sanskrit: "अनुमानम्",
    gloss: {
      en: "Smoke on the hill, therefore fire. Knowledge of what was not seen, from what was.",
      kn: "ಬೆಟ್ಟದ ಮೇಲೆ ಹೊಗೆ, ಆದ್ದರಿಂದ ಬೆಂಕಿ. ಕಂಡದ್ದರಿಂದ ಕಾಣದದ್ದರ ಜ್ಞಾನ.",
      hi: "पहाड़ पर धुआँ, अतः अग्नि। जो देखा उससे उसका ज्ञान जो नहीं देखा।",
    },
  },
  {
    id: "upamana",
    n: 3,
    name: { en: "Comparison", kn: "ಉಪಮಾನ", hi: "उपमान" },
    sanskrit: "उपमानम्",
    gloss: {
      en: "Told a gavaya is like a cow, you recognise one on seeing it. Naming by likeness.",
      kn: "ಗವಯ ಹಸುವಿನಂತೆ ಎಂದು ಕೇಳಿದ ಮೇಲೆ ಕಂಡಾಗ ಗುರುತಿಸುತ್ತೀರಿ. ಹೋಲಿಕೆಯಿಂದ ಹೆಸರಿಸುವುದು.",
      hi: "गवय गाय जैसा है यह सुनकर देखते ही पहचान लेते हैं। सादृश्य से नामकरण।",
    },
  },
  {
    id: "shabda",
    n: 4,
    name: { en: "Testimony", kn: "ಶಬ್ದ", hi: "शब्द" },
    sanskrit: "शब्दः",
    gloss: {
      en: "The word of a reliable speaker — and, for the schools that accept the Veda, the Veda itself.",
      kn: "ವಿಶ್ವಾಸಾರ್ಹ ಹೇಳುವವನ ಮಾತು — ಮತ್ತು ವೇದವನ್ನು ಒಪ್ಪುವ ಶಾಖೆಗಳಿಗೆ, ವೇದವೇ.",
      hi: "विश्वसनीय वक्ता का वचन — और वेद को माननेवाली शाखाओं के लिए वेद ही।",
    },
  },
  {
    id: "anupalabdhi",
    n: 5,
    name: { en: "Non-apprehension", kn: "ಅನುಪಲಬ್ಧಿ", hi: "अनुपलब्धि" },
    sanskrit: "अनुपलब्धिः",
    gloss: {
      en: "The jar is not on the floor, and you know that by not finding it. Absence as something known rather than merely missed.",
      kn: "ನೆಲದ ಮೇಲೆ ಕೊಡವಿಲ್ಲ, ಮತ್ತು ಅದು ಸಿಕ್ಕದಿರುವುದರಿಂದಲೇ ತಿಳಿಯುತ್ತದೆ. ಅಭಾವವು ಬರಿದೇ ತಪ್ಪಿಹೋದದ್ದಲ್ಲ, ತಿಳಿದದ್ದು.",
      hi: "घड़ा फर्श पर नहीं है, और यह उसके न मिलने से ही जाना जाता है। अभाव जाना जाता है, केवल छूटता नहीं।",
    },
  },
  {
    id: "arthapatti",
    n: 6,
    name: { en: "Postulation", kn: "ಅರ್ಥಾಪತ್ತಿ", hi: "अर्थापत्ति" },
    sanskrit: "अर्थापत्तिः",
    gloss: {
      en: "He is alive and not in the house, so he is somewhere else. What has to be true for the known to hold.",
      kn: "ಅವನು ಬದುಕಿದ್ದಾನೆ, ಮನೆಯಲ್ಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಬೇರೆಲ್ಲೋ ಇದ್ದಾನೆ. ತಿಳಿದದ್ದು ನಿಲ್ಲಬೇಕಾದರೆ ಸತ್ಯವಿರಬೇಕಾದದ್ದು.",
      hi: "वह जीवित है और घर में नहीं, अतः कहीं और है। ज्ञात बात टिके तो जो सत्य होना ही चाहिए।",
    },
  },
];

// ── the three pairs ─────────────────────────────────────────

export interface DarshanaPair {
  id: string;
  /** The two slugs, in the order the pair is usually given. */
  members: [string, string];
  label: Record<Locale, string>;
  /** What the pairing actually consists of. */
  note: Record<Locale, string>;
  /** One short phrase for each member's part in the pair. */
  roles: Record<string, Record<Locale, string>>;
}

/**
 * Each pair is one subject approached twice. This is the single most
 * useful thing to know about the six before reading any of them: they
 * are not six positions on one question but three questions asked
 * twice each.
 */
export const PAIRS: DarshanaPair[] = [
  {
    id: "knowing",
    members: ["nyaya", "vaisheshika"],
    label: { en: "Knowing and being", kn: "ಜ್ಞಾನ ಮತ್ತು ಸತ್ತೆ", hi: "ज्ञान और सत्ता" },
    note: {
      en: "One works out how a claim is shown to be true, the other what kinds of thing there are to make claims about. By the tenth century they had merged into a single school taught together.",
      kn: "ಒಂದು ಹೇಳಿಕೆ ಸತ್ಯವೆಂದು ತೋರಿಸುವ ಬಗೆಯನ್ನು ರೂಪಿಸುತ್ತದೆ, ಇನ್ನೊಂದು ಹೇಳಿಕೆ ಮಾಡಲು ಯಾವ ಬಗೆಯ ವಸ್ತುಗಳಿವೆ ಎಂಬುದನ್ನು. ಹತ್ತನೇ ಶತಮಾನದ ಹೊತ್ತಿಗೆ ಇವೆರಡೂ ಒಟ್ಟಿಗೆ ಕಲಿಸಲಾಗುವ ಒಂದೇ ಶಾಖೆಯಾಗಿ ಬೆರೆತಿದ್ದವು.",
      hi: "एक यह गढ़ता है कि कोई दावा सत्य कैसे सिद्ध होता है, दूसरा यह कि दावे करने योग्य वस्तुएँ किन प्रकारों की हैं। दसवीं शताब्दी तक दोनों एक ही शाखा में मिल गए थे, जो साथ पढ़ाई जाती थी।",
    },
    roles: {
      nyaya: { en: "How it is known", kn: "ಹೇಗೆ ತಿಳಿಯುತ್ತದೆ", hi: "कैसे जाना जाता है" },
      vaisheshika: { en: "What there is", kn: "ಏನಿದೆ", hi: "क्या है" },
    },
  },
  {
    id: "nature",
    members: ["sankhya", "yoga"],
    label: { en: "The map and the practice", kn: "ನಕ್ಷೆ ಮತ್ತು ಸಾಧನೆ", hi: "मानचित्र और साधना" },
    note: {
      en: "Sāṅkhya sets out twenty-five constituents and says where the trouble lies; Yoga takes the same twenty-five and asks what can be done about it. The Yoga Sūtra argues for almost none of its metaphysics, because Sāṅkhya had already argued for it.",
      kn: "ಸಾಂಖ್ಯ ಇಪ್ಪತ್ತೈದು ತತ್ತ್ವಗಳನ್ನು ಮಂಡಿಸಿ ತೊಂದರೆ ಎಲ್ಲಿದೆ ಎಂದು ಹೇಳುತ್ತದೆ; ಯೋಗ ಅದೇ ಇಪ್ಪತ್ತೈದನ್ನು ತೆಗೆದುಕೊಂಡು ಅದರ ಬಗ್ಗೆ ಏನು ಮಾಡಬಹುದು ಎಂದು ಕೇಳುತ್ತದೆ. ಯೋಗಸೂತ್ರ ತನ್ನ ತತ್ತ್ವಶಾಸ್ತ್ರಕ್ಕೆ ಬಹುತೇಕ ವಾದವನ್ನೇ ಮಾಡುವುದಿಲ್ಲ, ಏಕೆಂದರೆ ಸಾಂಖ್ಯ ಈಗಾಗಲೇ ಮಾಡಿಬಿಟ್ಟಿತ್ತು.",
      hi: "सांख्य पच्चीस तत्त्व रखकर बताता है कि कठिनाई कहाँ है; योग उन्हीं पच्चीस को लेकर पूछता है कि उसका क्या किया जा सकता है। योगसूत्र अपने तत्त्वशास्त्र के लिए लगभग कोई तर्क नहीं देता, क्योंकि सांख्य वह तर्क पहले ही दे चुका था।",
    },
    roles: {
      sankhya: { en: "What the parts are", kn: "ಅಂಗಗಳು ಯಾವುವು", hi: "अंग कौन से हैं" },
      yoga: { en: "What to do with them", kn: "ಅವುಗಳೊಂದಿಗೆ ಏನು ಮಾಡಬೇಕು", hi: "उनका क्या करना है" },
    },
  },
  {
    id: "veda",
    members: ["mimamsa", "vedanta"],
    label: { en: "The earlier and the later enquiry", kn: "ಪೂರ್ವ ಮತ್ತು ಉತ್ತರ ವಿಚಾರ", hi: "पूर्व और उत्तर विचार" },
    note: {
      en: "Both read the Veda and neither will yield it. Pūrva Mīmāṃsā takes the portion that tells you what to do; Uttara Mīmāṃsā, which is Vedānta, takes the portion that tells you what is. They are the two halves of one enquiry and they spent centuries disputing which half governs the other.",
      kn: "ಇಬ್ಬರೂ ವೇದವನ್ನೇ ಓದುತ್ತಾರೆ, ಇಬ್ಬರೂ ಅದನ್ನು ಬಿಟ್ಟುಕೊಡುವುದಿಲ್ಲ. ಪೂರ್ವಮೀಮಾಂಸಾ ಏನು ಮಾಡಬೇಕೆಂದು ಹೇಳುವ ಭಾಗವನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ; ವೇದಾಂತವಾದ ಉತ್ತರಮೀಮಾಂಸಾ ಏನಿದೆ ಎಂದು ಹೇಳುವ ಭಾಗವನ್ನು. ಇವು ಒಂದೇ ವಿಚಾರದ ಎರಡು ಅರ್ಧಗಳು, ಮತ್ತು ಯಾವ ಅರ್ಧ ಇನ್ನೊಂದನ್ನು ಆಳುತ್ತದೆ ಎಂದು ಶತಮಾನಗಳ ಕಾಲ ವಾದಿಸಿದವು.",
      hi: "दोनों वेद ही पढ़ते हैं और दोनों उसे छोड़ते नहीं। पूर्वमीमांसा वह भाग लेती है जो बताता है कि क्या करना है; वेदांत अर्थात् उत्तरमीमांसा वह भाग जो बताता है कि क्या है। ये एक ही विचार के दो आधे हैं, और कौन सा आधा दूसरे को शासित करता है इस पर सदियों विवाद चला।",
    },
    roles: {
      mimamsa: { en: "What the Veda commands", kn: "ವೇದ ಏನನ್ನು ವಿಧಿಸುತ್ತದೆ", hi: "वेद क्या विधान करता है" },
      vedanta: { en: "What the Veda states", kn: "ವೇದ ಏನನ್ನು ಹೇಳುತ್ತದೆ", hi: "वेद क्या कहता है" },
    },
  },
];

// ── the countable structures ────────────────────────────────

export interface StructureItem {
  id: string;
  name: Record<Locale, string>;
  /** In Devanagari. The view converts it. */
  sanskrit: string;
  gloss: Record<Locale, string>;
}

export interface Structure {
  /** What the list is, set above it. */
  label: Record<Locale, string>;
  /** Why it is worth counting — the observation the list supports. */
  note: Record<Locale, string>;
  items: StructureItem[];
}

const item = (
  id: string,
  sanskrit: string,
  en: string,
  kn: string,
  hi: string,
  gen: string,
  gkn: string,
  ghi: string,
): StructureItem => ({
  id,
  sanskrit,
  name: { en, kn, hi },
  gloss: { en: gen, kn: gkn, hi: ghi },
});

/**
 * Nyāya's five-membered argument, with one worked example running
 * through it. The five members are the school's most borrowed piece
 * of machinery and the example is the one its own texts use.
 */
export const AVAYAVAS: { id: string; name: Record<Locale, string>; sanskrit: string; step: Record<Locale, string>; example: Record<Locale, string> }[] = [
  {
    id: "pratijna",
    name: { en: "The claim", kn: "ಪ್ರತಿಜ್ಞೆ", hi: "प्रतिज्ञा" },
    sanskrit: "प्रतिज्ञा",
    step: {
      en: "State what is to be proved.",
      kn: "ಸಾಧಿಸಬೇಕಾದದ್ದನ್ನು ಹೇಳು.",
      hi: "जो सिद्ध करना है वह कहो।",
    },
    example: {
      en: "The hill has fire.",
      kn: "ಬೆಟ್ಟದಲ್ಲಿ ಬೆಂಕಿ ಇದೆ.",
      hi: "पर्वत पर अग्नि है।",
    },
  },
  {
    id: "hetu",
    name: { en: "The reason", kn: "ಹೇತು", hi: "हेतु" },
    sanskrit: "हेतुः",
    step: {
      en: "Give the mark on which the claim rests.",
      kn: "ಹೇಳಿಕೆ ನಿಲ್ಲುವ ಗುರುತನ್ನು ಕೊಡು.",
      hi: "जिस चिह्न पर दावा टिका है वह दो।",
    },
    example: {
      en: "Because it has smoke.",
      kn: "ಏಕೆಂದರೆ ಅದರಲ್ಲಿ ಹೊಗೆ ಇದೆ.",
      hi: "क्योंकि उस पर धुआँ है।",
    },
  },
  {
    id: "udaharana",
    name: { en: "The rule, with an example", kn: "ಉದಾಹರಣೆ", hi: "उदाहरण" },
    sanskrit: "उदाहरणम्",
    step: {
      en: "Show that the mark and the claim always go together, in a case both sides accept.",
      kn: "ಗುರುತು ಮತ್ತು ಹೇಳಿಕೆ ಸದಾ ಜೊತೆಯಾಗಿರುತ್ತವೆ ಎಂದು, ಎರಡೂ ಕಡೆ ಒಪ್ಪುವ ನಿದರ್ಶನದಲ್ಲಿ ತೋರಿಸು.",
      hi: "चिह्न और दावा सदा साथ रहते हैं यह दोनों पक्षों को स्वीकार्य उदाहरण में दिखाओ।",
    },
    example: {
      en: "Wherever there is smoke there is fire, as in a kitchen.",
      kn: "ಎಲ್ಲಿ ಹೊಗೆ ಇರುತ್ತದೆ ಅಲ್ಲಿ ಬೆಂಕಿ ಇರುತ್ತದೆ, ಅಡುಗೆಮನೆಯಲ್ಲಿರುವಂತೆ.",
      hi: "जहाँ धुआँ है वहाँ अग्नि है, जैसे रसोई में।",
    },
  },
  {
    id: "upanaya",
    name: { en: "The application", kn: "ಉಪನಯ", hi: "उपनय" },
    sanskrit: "उपनयः",
    step: {
      en: "Bring the rule back to the case in hand.",
      kn: "ನಿಯಮವನ್ನು ಕೈಯಲ್ಲಿರುವ ಪ್ರಕರಣಕ್ಕೆ ಮರಳಿ ತಾ.",
      hi: "नियम को प्रस्तुत प्रसंग पर लौटाओ।",
    },
    example: {
      en: "The hill is such a case.",
      kn: "ಬೆಟ್ಟ ಅಂಥ ಪ್ರಕರಣವೇ.",
      hi: "पर्वत ऐसा ही प्रसंग है।",
    },
  },
  {
    id: "nigamana",
    name: { en: "The conclusion", kn: "ನಿಗಮನ", hi: "निगमन" },
    sanskrit: "निगमनम्",
    step: {
      en: "Restate the claim, now established.",
      kn: "ಈಗ ಸಿದ್ಧವಾದ ಹೇಳಿಕೆಯನ್ನು ಮತ್ತೆ ಹೇಳು.",
      hi: "अब सिद्ध दावे को फिर कहो।",
    },
    example: {
      en: "Therefore the hill has fire.",
      kn: "ಆದ್ದರಿಂದ ಬೆಟ್ಟದಲ್ಲಿ ಬೆಂಕಿ ಇದೆ.",
      hi: "अतः पर्वत पर अग्नि है।",
    },
  },
];

export interface TattvaTier {
  id: string;
  label: Record<Locale, string>;
  items: StructureItem[];
}

/**
 * Sāṅkhya's twenty-five, in the order the Kārikā derives them.
 *
 * The derivation is the part worth seeing drawn: it runs from the
 * subtle to the gross, so intellect comes before the senses and the
 * senses before the elements. Puruṣa is not on this cascade at all —
 * it stands beside it, producing nothing, which is exactly the
 * school's claim.
 */
export const PURUSHA: StructureItem = item(
  "purusha",
  "पुरुषः",
  "Puruṣa",
  "ಪುರುಷ",
  "पुरुष",
  "Consciousness. Never an agent, never modified, and never a product of anything.",
  "ಚೈತನ್ಯ. ಎಂದಿಗೂ ಕರ್ತೃವಲ್ಲ, ಬದಲಾಗುವುದಿಲ್ಲ, ಯಾವುದರ ಉತ್ಪನ್ನವೂ ಅಲ್ಲ.",
  "चेतन। न कभी कर्ता, न विकारी, न किसी का उत्पाद।",
);

export const TATTVA_TIERS: TattvaTier[] = [
  {
    id: "root",
    label: { en: "The root", kn: "ಮೂಲ", hi: "मूल" },
    items: [
      item(
        "prakriti",
        "मूलप्रकृतिः",
        "Mūlaprakṛti",
        "ಮೂಲಪ್ರಕೃತಿ",
        "मूलप्रकृति",
        "Unmanifest nature. Produced by nothing, and productive of everything below.",
        "ಅವ್ಯಕ್ತ ಪ್ರಕೃತಿ. ಯಾವುದರಿಂದಲೂ ಹುಟ್ಟದ್ದು, ಕೆಳಗಿನ ಎಲ್ಲವನ್ನೂ ಹುಟ್ಟಿಸುವುದು.",
        "अव्यक्त प्रकृति। किसी से उत्पन्न नहीं, और नीचे सबको उत्पन्न करनेवाली।",
      ),
    ],
  },
  {
    id: "inner",
    label: { en: "The inner instrument", kn: "ಅಂತಃಕರಣ", hi: "अंतःकरण" },
    items: [
      item(
        "mahat",
        "बुद्धिः",
        "Buddhi",
        "ಬುದ್ಧಿ",
        "बुद्धि",
        "Intellect, also called mahat — the first thing nature produces.",
        "ಬುದ್ಧಿ, ಮಹತ್ ಎಂದೂ ಹೆಸರು — ಪ್ರಕೃತಿ ಹುಟ್ಟಿಸುವ ಮೊದಲನೆಯದು.",
        "बुद्धि, जिसे महत् भी कहते हैं — प्रकृति का पहला उत्पाद।",
      ),
      item(
        "ahamkara",
        "अहङ्कारः",
        "Ahaṃkāra",
        "ಅಹಂಕಾರ",
        "अहंकार",
        "The I-maker. Not pride but the bare sense of being a separate one.",
        "ನಾನೆಂಬುದನ್ನು ಮಾಡುವುದು. ಗರ್ವವಲ್ಲ, ಬೇರೊಬ್ಬನಾಗಿರುವ ಬರಿಯ ಭಾವ.",
        "मैं-कार। अभिमान नहीं, पृथक् होने का नितांत बोध।",
      ),
      item(
        "manas",
        "मनः",
        "Manas",
        "ಮನಸ್ಸು",
        "मन",
        "Mind, which sorts what the senses bring. One of eleven instruments, not their master.",
        "ಇಂದ್ರಿಯಗಳು ತರುವುದನ್ನು ವಿಂಗಡಿಸುವ ಮನಸ್ಸು. ಹನ್ನೊಂದು ಸಾಧನಗಳಲ್ಲಿ ಒಂದು, ಅವುಗಳ ಒಡೆಯನಲ್ಲ.",
        "मन, जो इंद्रियों का लाया हुआ छाँटता है। ग्यारह साधनों में एक, उनका स्वामी नहीं।",
      ),
    ],
  },
  {
    id: "buddhindriya",
    label: { en: "The five senses", kn: "ಐದು ಜ್ಞಾನೇಂದ್ರಿಯಗಳು", hi: "पाँच ज्ञानेंद्रियाँ" },
    items: [
      item("shrotra", "श्रोत्रम्", "Hearing", "ಶ್ರೋತ್ರ", "श्रोत्र", "The ear", "ಕಿವಿ", "कान"),
      item("tvak", "त्वक्", "Touch", "ತ್ವಕ್", "त्वक्", "The skin", "ಚರ್ಮ", "त्वचा"),
      item("chakshus", "चक्षुः", "Sight", "ಚಕ್ಷು", "चक्षु", "The eye", "ಕಣ್ಣು", "आँख"),
      item("jihva", "जिह्वा", "Taste", "ಜಿಹ್ವೆ", "जिह्वा", "The tongue", "ನಾಲಿಗೆ", "जीभ"),
      item("ghrana", "घ्राणम्", "Smell", "ಘ್ರಾಣ", "घ्राण", "The nose", "ಮೂಗು", "नाक"),
    ],
  },
  {
    id: "karmendriya",
    label: { en: "The five powers of action", kn: "ಐದು ಕರ್ಮೇಂದ್ರಿಯಗಳು", hi: "पाँच कर्मेंद्रियाँ" },
    items: [
      item("vak", "वाक्", "Speech", "ವಾಕ್", "वाक्", "Speaking", "ಮಾತು", "बोलना"),
      item("hasta", "हस्तौ", "Hands", "ಹಸ್ತ", "हस्त", "Grasping", "ಹಿಡಿಯುವುದು", "ग्रहण"),
      item("pada", "पादौ", "Feet", "ಪಾದ", "पाद", "Going", "ನಡೆಯುವುದು", "गति"),
      item("payu", "पायुः", "Excretion", "ಪಾಯು", "पायु", "Expelling", "ಹೊರಹಾಕುವುದು", "निष्कासन"),
      item("upastha", "उपस्थम्", "Generation", "ಉಪಸ್ಥ", "उपस्थ", "Reproduction", "ಸಂತಾನ", "प्रजनन"),
    ],
  },
  {
    id: "tanmatra",
    label: { en: "The five subtle qualities", kn: "ಐದು ತನ್ಮಾತ್ರೆಗಳು", hi: "पाँच तन्मात्राएँ" },
    items: [
      item("shabda-t", "शब्दः", "Sound", "ಶಬ್ದ", "शब्द", "Sound as such, before any sounding thing", "ಶಬ್ದ ಮಾತ್ರ, ಶಬ್ದಿಸುವ ವಸ್ತುವಿನ ಮೊದಲು", "शब्द मात्र, किसी शब्द करनेवाली वस्तु से पहले"),
      item("sparsha", "स्पर्शः", "Touch", "ಸ್ಪರ್ಶ", "स्पर्श", "Contact as such", "ಸ್ಪರ್ಶ ಮಾತ್ರ", "स्पर्श मात्र"),
      item("rupa", "रूपम्", "Form", "ರೂಪ", "रूप", "Visibility as such", "ರೂಪ ಮಾತ್ರ", "रूप मात्र"),
      item("rasa", "रसः", "Taste", "ರಸ", "रस", "Flavour as such", "ರಸ ಮಾತ್ರ", "रस मात्र"),
      item("gandha", "गन्धः", "Smell", "ಗಂಧ", "गंध", "Odour as such", "ಗಂಧ ಮಾತ್ರ", "गंध मात्र"),
    ],
  },
  {
    id: "mahabhuta",
    label: { en: "The five gross elements", kn: "ಐದು ಮಹಾಭೂತಗಳು", hi: "पाँच महाभूत" },
    items: [
      item("akasha", "आकाशः", "Space", "ಆಕಾಶ", "आकाश", "From sound", "ಶಬ್ದದಿಂದ", "शब्द से"),
      item("vayu", "वायुः", "Air", "ವಾಯು", "वायु", "From touch", "ಸ್ಪರ್ಶದಿಂದ", "स्पर्श से"),
      item("tejas", "तेजः", "Fire", "ತೇಜ", "तेज", "From form", "ರೂಪದಿಂದ", "रूप से"),
      item("apas", "आपः", "Water", "ಆಪ", "आप", "From taste", "ರಸದಿಂದ", "रस से"),
      item("prithvi", "पृथ्वी", "Earth", "ಪೃಥ್ವಿ", "पृथ्वी", "From smell", "ಗಂಧದಿಂದ", "गंध से"),
    ],
  },
];

/** The twenty-five, counted. Puruṣa plus everything on the cascade. */
export function tattvaCount(): number {
  return 1 + TATTVA_TIERS.reduce((n, t) => n + t.items.length, 0);
}

// ── the six schools ─────────────────────────────────────────

export interface RootText {
  name: Record<Locale, string>;
  sanskrit: string;
  author: Record<Locale, string>;
  /** Dating given as a claim, with the disagreement where there is one. */
  dating: Record<Locale, string>;
  /** How long it is, where the figure is firm. */
  extent: Record<Locale, string> | null;
}

export interface DarshanaLink {
  href: string;
  label: Record<Locale, string>;
}

export interface Darshana {
  slug: string;
  order: number;
  name: Record<Locale, string>;
  sanskrit: string;
  /** Short Devanagari for the card. */
  glyph: string;
  /** Which of the three pairs it belongs to. */
  pair: string;
  /** The question it exists to answer, in one line. */
  question: Record<Locale, string>;
  lede: Record<Locale, string>;
  root: RootText;
  /** Which of the six means of knowledge it accepts. */
  pramanas: PramanaId[];
  /** A note where the count is itself disputed inside the school. */
  pramanaNote?: Record<Locale, string>;
  /**
   * What it says about God — written out, never a boolean, because
   * this is the field the popular account gets wrong.
   */
  ishvara: Record<Locale, string>;
  structure?: Structure;
  links: DarshanaLink[];
}

export const DARSHANAS: Darshana[] = [
  // ── 1 ────────────────────────────────────────────────────
  {
    slug: "nyaya",
    order: 1,
    name: { en: "Nyāya", kn: "ನ್ಯಾಯ", hi: "न्याय" },
    sanskrit: "न्यायः",
    glyph: "न्याय",
    pair: "knowing",
    question: {
      en: "How is anything known, and how is an argument shown to be sound?",
      kn: "ಯಾವುದನ್ನಾದರೂ ಹೇಗೆ ತಿಳಿಯಲಾಗುತ್ತದೆ, ಮತ್ತು ವಾದ ಸರಿ ಎಂದು ಹೇಗೆ ತೋರಿಸಲಾಗುತ್ತದೆ?",
      hi: "कुछ भी कैसे जाना जाता है, और कोई तर्क सही है यह कैसे दिखाया जाता है?",
    },
    lede: {
      en: "The school that built the rules of argument the others then had to argue by. Of its sixteen categories, seven are about the ways a debate goes wrong.",
      kn: "ಉಳಿದವರು ಬಳಸಬೇಕಾದ ವಾದದ ನಿಯಮಗಳನ್ನು ಕಟ್ಟಿದ ಶಾಖೆ. ಇದರ ಹದಿನಾರು ಪದಾರ್ಥಗಳಲ್ಲಿ ಏಳು ವಾದ ಕೆಡುವ ಬಗೆಗಳ ಕುರಿತು.",
      hi: "उस शाखा ने तर्क के वे नियम बनाए जिनसे फिर शेष सबको तर्क करना पड़ा। इसके सोलह पदार्थों में सात इस विषय पर हैं कि वाद कैसे बिगड़ता है।",
    },
    root: {
      name: { en: "Nyāya Sūtra", kn: "ನ್ಯಾಯಸೂತ್ರ", hi: "न्यायसूत्र" },
      sanskrit: "न्यायसूत्राणि",
      author: { en: "Gautama", kn: "ಗೌತಮ", hi: "गौतम" },
      dating: {
        en: "The text as it stands is usually placed in the early centuries of the common era; the tradition puts Gautama himself far earlier. Vātsyāyana's commentary, which is what anyone actually reads it through, is later again.",
        kn: "ಈಗಿರುವ ರೂಪದ ಪಠ್ಯವನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ಕ್ರಿಸ್ತಶಕದ ಆರಂಭದ ಶತಮಾನಗಳಲ್ಲಿ ಇಡಲಾಗುತ್ತದೆ; ಪರಂಪರೆ ಗೌತಮನನ್ನೇ ಬಹಳ ಹಿಂದೆ ಇಡುತ್ತದೆ. ಯಾರಾದರೂ ಇದನ್ನು ಓದುವುದು ಯಾವುದರ ಮೂಲಕವೋ ಆ ವಾತ್ಸ್ಯಾಯನನ ಭಾಷ್ಯ ಇನ್ನೂ ನಂತರದ್ದು.",
        hi: "वर्तमान रूप का पाठ सामान्यतः ईसवी के आरंभिक शतकों में रखा जाता है; परंपरा गौतम को इससे बहुत पहले रखती है। वात्स्यायन का भाष्य, जिसके सहारे ही कोई इसे पढ़ता है, और बाद का है।",
      },
      extent: {
        en: "Five chapters, each in two sections.",
        kn: "ಐದು ಅಧ್ಯಾಯಗಳು, ಪ್ರತಿಯೊಂದರಲ್ಲಿ ಎರಡು ಆಹ್ನಿಕಗಳು.",
        hi: "पाँच अध्याय, प्रत्येक में दो आह्निक।",
      },
    },
    pramanas: ["pratyaksha", "anumana", "upamana", "shabda"],
    ishvara: {
      en: "Argues for one, and supplies the arguments. The later Nyāya of Udayana works the proof out at length, which makes this the one school of the six that treats God as a conclusion rather than an assumption or an irrelevance.",
      kn: "ದೇವರಿದ್ದಾನೆಂದು ವಾದಿಸುತ್ತದೆ, ಮತ್ತು ವಾದಗಳನ್ನೇ ಒದಗಿಸುತ್ತದೆ. ಉದಯನನ ನಂತರದ ನ್ಯಾಯ ಸಾಧನೆಯನ್ನು ವಿಸ್ತಾರವಾಗಿ ಮಾಡುತ್ತದೆ — ಆದ್ದರಿಂದ ಆರರಲ್ಲಿ ದೇವರನ್ನು ಊಹೆಯಾಗಿಯೂ ಅಪ್ರಸ್ತುತವಾಗಿಯೂ ಅಲ್ಲದೆ ನಿಗಮನವಾಗಿ ನಡೆಸಿಕೊಳ್ಳುವ ಒಂದೇ ಶಾಖೆ ಇದು.",
      hi: "ईश्वर के पक्ष में तर्क करता है, और तर्क स्वयं देता है। उदयन का परवर्ती न्याय इस सिद्धि को विस्तार से करता है — इसलिए छहों में यही एक शाखा है जो ईश्वर को मान्यता या अप्रासंगिकता नहीं, निगमन मानती है।",
    },
    structure: {
      label: {
        en: "The sixteen categories",
        kn: "ಹದಿನಾರು ಪದಾರ್ಥಗಳು",
        hi: "सोलह पदार्थ",
      },
      note: {
        en: "Know these sixteen, says the first sūtra, and you reach the highest good. Seven of them — from the tenth on — are kinds of debate and kinds of bad debate, which tells you what the school thought the work of philosophy mostly consists of.",
        kn: "ಈ ಹದಿನಾರನ್ನು ತಿಳಿ, ಎಂದು ಮೊದಲ ಸೂತ್ರ ಹೇಳುತ್ತದೆ, ಆಗ ಪರಮ ಶ್ರೇಯಸ್ಸು ಸಿಗುತ್ತದೆ. ಅವುಗಳಲ್ಲಿ ಏಳು — ಹತ್ತನೆಯದರಿಂದ ಮುಂದೆ — ವಾದದ ಬಗೆಗಳು ಮತ್ತು ಕೆಟ್ಟ ವಾದದ ಬಗೆಗಳು; ತತ್ತ್ವಶಾಸ್ತ್ರದ ಕೆಲಸ ಹೆಚ್ಚಾಗಿ ಯಾವುದರಲ್ಲಿದೆ ಎಂದು ಈ ಶಾಖೆ ಭಾವಿಸಿತ್ತು ಎಂಬುದನ್ನು ಅದು ಹೇಳುತ್ತದೆ.",
        hi: "इन सोलह को जानो, पहला सूत्र कहता है, तो परम श्रेय मिलता है। इनमें सात — दसवें से आगे — वाद के प्रकार और बुरे वाद के प्रकार हैं; इससे पता चलता है कि यह शाखा दर्शन का काम मुख्यतः किसमें मानती थी।",
      },
      items: [
        item("pramana", "प्रमाणम्", "Means of knowledge", "ಪ್ರಮಾಣ", "प्रमाण", "How anything is known at all", "ಯಾವುದನ್ನಾದರೂ ಹೇಗೆ ತಿಳಿಯುವುದು", "कुछ भी कैसे जाना जाता है"),
        item("prameya", "प्रमेयम्", "What is to be known", "ಪ್ರಮೇಯ", "प्रमेय", "The twelve things worth knowing, the self first", "ತಿಳಿಯಬೇಕಾದ ಹನ್ನೆರಡು, ಮೊದಲು ಆತ್ಮ", "जानने योग्य बारह, पहले आत्मा"),
        item("samshaya", "संशयः", "Doubt", "ಸಂಶಯ", "संशय", "Where enquiry begins", "ವಿಚಾರ ಆರಂಭವಾಗುವೆಡೆ", "जहाँ विचार आरंभ होता है"),
        item("prayojana", "प्रयोजनम्", "Purpose", "ಪ್ರಯೋಜನ", "प्रयोजन", "What the enquiry is for", "ವಿಚಾರ ಯಾವುದಕ್ಕಾಗಿ", "विचार किस लिए"),
        item("drshtanta", "दृष्टान्तः", "The agreed example", "ದೃಷ್ಟಾಂತ", "दृष्टांत", "A case both sides already accept", "ಎರಡೂ ಕಡೆ ಈಗಾಗಲೇ ಒಪ್ಪುವ ನಿದರ್ಶನ", "दोनों पक्ष पहले से मानें ऐसा दृष्टांत"),
        item("siddhanta", "सिद्धान्तः", "The established position", "ಸಿದ್ಧಾಂತ", "सिद्धांत", "What a school holds, and on what footing", "ಶಾಖೆ ಏನನ್ನು ಹಿಡಿದಿದೆ, ಯಾವ ನೆಲೆಯಲ್ಲಿ", "शाखा क्या मानती है, किस आधार पर"),
        item("avayava", "अवयवः", "The members of an argument", "ಅವಯವ", "अवयव", "The five steps, set out below", "ಕೆಳಗೆ ಕೊಟ್ಟ ಐದು ಹೆಜ್ಜೆಗಳು", "नीचे दिए पाँच चरण"),
        item("tarka", "तर्कः", "Reasoning to an absurdity", "ತರ್ಕ", "तर्क", "Suppose the opposite, and watch it break", "ವಿರುದ್ಧವನ್ನು ಊಹಿಸು, ಅದು ಮುರಿಯುವುದನ್ನು ನೋಡು", "विपरीत मानो, और उसे टूटते देखो"),
        item("nirnaya", "निर्णयः", "Settled conclusion", "ನಿರ್ಣಯ", "निर्णय", "Doubt removed, not merely set aside", "ಸಂಶಯ ನೀಗಿದ್ದು, ಬರಿದೇ ಬದಿಗಿಟ್ಟದ್ದಲ್ಲ", "संशय मिटा, केवल टाला नहीं"),
        item("vada", "वादः", "Honest debate", "ವಾದ", "वाद", "Both sides want the truth", "ಎರಡೂ ಕಡೆಗೂ ಸತ್ಯವೇ ಬೇಕು", "दोनों पक्षों को सत्य चाहिए"),
        item("jalpa", "जल्पः", "Debate for victory", "ಜಲ್ಪ", "जल्प", "Both sides want to win", "ಎರಡೂ ಕಡೆಗೂ ಗೆಲುವು ಬೇಕು", "दोनों पक्षों को जीत चाहिए"),
        item("vitanda", "वितण्डा", "Destructive debate", "ವಿತಂಡ", "वितंडा", "One side only demolishes, and holds nothing", "ಒಂದು ಕಡೆ ಬರಿದೇ ಕೆಡವುತ್ತದೆ, ತಾನೇನನ್ನೂ ಹಿಡಿಯುವುದಿಲ್ಲ", "एक पक्ष केवल ध्वस्त करता है, स्वयं कुछ नहीं मानता"),
        item("hetvabhasa", "हेत्वाभासः", "The fallacies", "ಹೇತ್ವಾಭಾಸ", "हेत्वाभास", "A reason that only looks like one", "ಹೇತುವಿನಂತೆ ಕಾಣುವ ಬರಿಯ ತೋರಿಕೆ", "हेतु जैसा दिखने वाला मात्र"),
        item("chala", "छलम्", "Quibbling", "ಛಲ", "छल", "Taking a word in a sense the speaker did not mean", "ಹೇಳಿದವನು ಬಯಸದ ಅರ್ಥದಲ್ಲಿ ಪದವನ್ನು ಹಿಡಿಯುವುದು", "वक्ता के अभिप्राय से भिन्न अर्थ में शब्द पकड़ना"),
        item("jati", "जातिः", "The futile rejoinder", "ಜಾತಿ", "जाति", "An objection with the shape of one and no force", "ಆಕಾರ ಮಾತ್ರ ಆಕ್ಷೇಪದ್ದು, ಬಲವಿಲ್ಲ", "आकार आपत्ति का, बल नहीं"),
        item("nigrahasthana", "निग्रहस्थानम्", "The point of defeat", "ನಿಗ್ರಹಸ್ಥಾನ", "निग्रहस्थान", "Where a debater has demonstrably lost", "ವಾದಿ ಸ್ಪಷ್ಟವಾಗಿ ಸೋತ ಸ್ಥಾನ", "जहाँ वादी स्पष्टतः हार गया"),
      ],
    },
    links: [
      { href: "/concepts", label: { en: "The terms", kn: "ಪದಗಳು", hi: "पारिभाषिक शब्द" } },
      { href: "/shastras", label: { en: "The śāstra map", kn: "ಶಾಸ್ತ್ರಗಳ ನಕ್ಷೆ", hi: "शास्त्रों का मानचित्र" } },
    ],
  },

  // ── 2 ────────────────────────────────────────────────────
  {
    slug: "vaisheshika",
    order: 2,
    name: { en: "Vaiśeṣika", kn: "ವೈಶೇಷಿಕ", hi: "वैशेषिक" },
    sanskrit: "वैशेषिकम्",
    glyph: "वैशेषिक",
    pair: "knowing",
    question: {
      en: "What is there, and in how many kinds?",
      kn: "ಏನಿದೆ, ಮತ್ತು ಎಷ್ಟು ಬಗೆಗಳಲ್ಲಿ?",
      hi: "क्या है, और कितने प्रकारों में?",
    },
    lede: {
      en: "An inventory of everything there is, in six kinds, with an atomism argued for rather than asserted — and reached by a different road from the Greek one.",
      kn: "ಇರುವುದೆಲ್ಲದರ ಪಟ್ಟಿ, ಆರು ಬಗೆಗಳಲ್ಲಿ; ಪರಮಾಣುವಾದವನ್ನು ಹೇಳಿಬಿಡದೆ ವಾದಿಸಿ ಸ್ಥಾಪಿಸಿದ್ದು — ಮತ್ತು ಗ್ರೀಕರದಕ್ಕಿಂತ ಬೇರೆ ದಾರಿಯಿಂದ ತಲುಪಿದ್ದು.",
      hi: "जो कुछ है उसकी सूची, छह प्रकारों में, और परमाणुवाद जिसे कहकर छोड़ा नहीं, सिद्ध किया गया — और यूनानियों से भिन्न मार्ग से पहुँचा।",
    },
    root: {
      name: { en: "Vaiśeṣika Sūtra", kn: "ವೈಶೇಷಿಕಸೂತ್ರ", hi: "वैशेषिकसूत्र" },
      sanskrit: "वैशेषिकसूत्राणि",
      author: { en: "Kaṇāda", kn: "ಕಣಾದ", hi: "कणाद" },
      dating: {
        en: "Placed anywhere from the second century before the common era to the second after, with no settled answer. The statement everyone works from is Praśastapāda's digest, several centuries later still.",
        kn: "ಕ್ರಿ.ಪೂ. ಎರಡನೇ ಶತಮಾನದಿಂದ ಕ್ರಿ.ಶ. ಎರಡನೆಯವರೆಗೆ ಎಲ್ಲಿಯಾದರೂ ಇಡಲಾಗುತ್ತದೆ, ನಿಶ್ಚಿತ ಉತ್ತರವಿಲ್ಲ. ಎಲ್ಲರೂ ಬಳಸುವ ಮಂಡನೆ ಪ್ರಶಸ್ತಪಾದನ ಸಂಗ್ರಹ, ಅದೂ ಇನ್ನೂ ಹಲವು ಶತಮಾನಗಳ ನಂತರದ್ದು.",
        hi: "ईसा पूर्व दूसरी शताब्दी से ईसवी दूसरी तक कहीं भी रखा जाता है, कोई निश्चित उत्तर नहीं। जिस प्रस्तुति से सब काम लेते हैं वह प्रशस्तपाद का संग्रह है, वह भी कई शताब्दी बाद का।",
      },
      extent: {
        en: "Ten chapters.",
        kn: "ಹತ್ತು ಅಧ್ಯಾಯಗಳು.",
        hi: "दस अध्याय।",
      },
    },
    pramanas: ["pratyaksha", "anumana"],
    pramanaNote: {
      en: "Two only. Testimony is not denied — it is treated as a species of inference, which is a position rather than an omission.",
      kn: "ಎರಡೇ. ಶಬ್ದವನ್ನು ನಿರಾಕರಿಸಿಲ್ಲ — ಅದನ್ನು ಅನುಮಾನದ ಒಂದು ಬಗೆಯೆಂದು ನಡೆಸಿಕೊಳ್ಳಲಾಗಿದೆ, ಅದು ಬಿಟ್ಟುಹೋದದ್ದಲ್ಲ, ಒಂದು ನಿಲುವು.",
      hi: "केवल दो। शब्द का निषेध नहीं — उसे अनुमान का ही एक प्रकार माना गया है, जो छूटना नहीं, एक पक्ष है।",
    },
    ishvara: {
      en: "Absent from the sūtra. A creator enters the school only later, once Nyāya and Vaiśeṣika had fused and Nyāya's arguments came with it.",
      kn: "ಸೂತ್ರದಲ್ಲಿ ಇಲ್ಲ. ನ್ಯಾಯ ಮತ್ತು ವೈಶೇಷಿಕ ಬೆರೆತು ನ್ಯಾಯದ ವಾದಗಳೂ ಜೊತೆಗೆ ಬಂದ ಮೇಲೆಯೇ ಸೃಷ್ಟಿಕರ್ತ ಈ ಶಾಖೆಯನ್ನು ಸೇರುತ್ತಾನೆ.",
      hi: "सूत्र में नहीं। न्याय और वैशेषिक के मिलने पर, न्याय के तर्क साथ आने के बाद ही सृष्टिकर्ता इस शाखा में प्रवेश करता है।",
    },
    structure: {
      label: {
        en: "The categories of what exists",
        kn: "ಇರುವುದರ ಪದಾರ್ಥಗಳು",
        hi: "सत् के पदार्थ",
      },
      note: {
        en: "Six in the sūtra; a seventh, absence, was added by the later tradition after a long argument about whether a hole is a thing. Everything that can be named is held to fall under one of them.",
        kn: "ಸೂತ್ರದಲ್ಲಿ ಆರು; ಏಳನೆಯದಾದ ಅಭಾವವನ್ನು, ಹೊಂಡ ಒಂದು ವಸ್ತುವೇ ಎಂಬ ಸುದೀರ್ಘ ವಾದದ ನಂತರ, ನಂತರದ ಪರಂಪರೆ ಸೇರಿಸಿತು. ಹೆಸರಿಸಬಹುದಾದ ಎಲ್ಲವೂ ಇವುಗಳಲ್ಲಿ ಒಂದಕ್ಕೆ ಸೇರುತ್ತದೆ ಎಂದು ಹಿಡಿಯಲಾಗಿದೆ.",
        hi: "सूत्र में छह; सातवाँ, अभाव, परवर्ती परंपरा ने इस लंबे विवाद के बाद जोड़ा कि गड्ढा कोई वस्तु है या नहीं। जो कुछ नामित हो सकता है वह इनमें किसी एक में आता है, यह माना गया है।",
      },
      items: [
        item("dravya", "द्रव्यम्", "Substance", "ದ್ರವ್ಯ", "द्रव्य", "Nine kinds: earth, water, fire, air, space, time, direction, self, mind", "ಒಂಬತ್ತು ಬಗೆ: ಪೃಥ್ವಿ, ಆಪ, ತೇಜ, ವಾಯು, ಆಕಾಶ, ಕಾಲ, ದಿಕ್, ಆತ್ಮ, ಮನಸ್ಸು", "नौ प्रकार: पृथ्वी, जल, अग्नि, वायु, आकाश, काल, दिशा, आत्मा, मन"),
        item("guna", "गुणः", "Quality", "ಗುಣ", "गुण", "What a substance carries and cannot exist apart from", "ದ್ರವ್ಯ ಹೊತ್ತದ್ದು, ಅದನ್ನು ಬಿಟ್ಟು ಇರಲಾಗದ್ದು", "जो द्रव्य धारण करता है और उससे पृथक् रह नहीं सकता"),
        item("karma-v", "कर्म", "Motion", "ಕರ್ಮ", "कर्म", "Movement, counted as a category of its own", "ಚಲನೆ, ತನ್ನದೇ ಪದಾರ್ಥವೆಂದು ಎಣಿಸಿದ್ದು", "गति, अपने आप में एक पदार्थ"),
        item("samanya", "सामान्यम्", "The universal", "ಸಾಮಾನ್ಯ", "सामान्य", "What makes many cows one kind", "ಹಲವು ಹಸುಗಳನ್ನು ಒಂದೇ ಜಾತಿಯಾಗಿಸುವುದು", "अनेक गायों को एक जाति बनाने वाला"),
        item("vishesha", "विशेषः", "The particular", "ವಿಶೇಷ", "विशेष", "What makes two otherwise identical atoms two", "ಇಲ್ಲದಿದ್ದರೆ ಒಂದೇ ಆಗಿರುವ ಎರಡು ಪರಮಾಣುಗಳನ್ನು ಎರಡಾಗಿಸುವುದು", "अन्यथा समान दो परमाणुओं को दो बनाने वाला"),
        item("samavaya", "समवायः", "Inherence", "ಸಮವಾಯ", "समवाय", "The relation by which a quality is in its substance", "ಗುಣ ತನ್ನ ದ್ರವ್ಯದಲ್ಲಿರುವ ಸಂಬಂಧ", "जिस संबंध से गुण अपने द्रव्य में रहता है"),
        item("abhava", "अभावः", "Absence", "ಅಭಾವ", "अभाव", "Added later: the not-being of something, treated as real", "ನಂತರ ಸೇರಿಸಿದ್ದು: ಯಾವುದೋ ಇಲ್ಲದಿರುವುದು, ಸತ್ಯವೆಂದು ನಡೆಸಿಕೊಂಡದ್ದು", "बाद में जोड़ा गया: किसी का न होना, सत् माना गया"),
      ],
    },
    links: [
      { href: "/cosmos", label: { en: "Time and the cosmos", kn: "ಕಾಲ ಮತ್ತು ವಿಶ್ವ", hi: "काल और विश्व" } },
      { href: "/shastras", label: { en: "The śāstra map", kn: "ಶಾಸ್ತ್ರಗಳ ನಕ್ಷೆ", hi: "शास्त्रों का मानचित्र" } },
    ],
  },

  // ── 3 ────────────────────────────────────────────────────
  {
    slug: "sankhya",
    order: 3,
    name: { en: "Sāṅkhya", kn: "ಸಾಂಖ್ಯ", hi: "सांख्य" },
    sanskrit: "साङ्ख्यम्",
    glyph: "साङ्ख्य",
    pair: "nature",
    question: {
      en: "What is consciousness, and what is everything else?",
      kn: "ಚೈತನ್ಯ ಎಂದರೇನು, ಮತ್ತು ಉಳಿದೆಲ್ಲವೂ ಏನು?",
      hi: "चेतन क्या है, और शेष सब क्या है?",
    },
    lede: {
      en: "Two things that are not each other: a witness that does nothing, and a nature that does everything. Twenty-five constituents, and no God at all.",
      kn: "ಒಂದಕ್ಕೊಂದಲ್ಲದ ಎರಡು: ಏನನ್ನೂ ಮಾಡದ ಸಾಕ್ಷಿ, ಮತ್ತು ಎಲ್ಲವನ್ನೂ ಮಾಡುವ ಪ್ರಕೃತಿ. ಇಪ್ಪತ್ತೈದು ತತ್ತ್ವಗಳು, ಮತ್ತು ದೇವರೇ ಇಲ್ಲ.",
      hi: "दो जो एक-दूसरे नहीं हैं: एक साक्षी जो कुछ नहीं करता, और एक प्रकृति जो सब करती है। पच्चीस तत्त्व, और ईश्वर बिलकुल नहीं।",
    },
    root: {
      name: { en: "Sāṅkhya Kārikā", kn: "ಸಾಂಖ್ಯಕಾರಿಕಾ", hi: "सांख्यकारिका" },
      sanskrit: "साङ्ख्यकारिका",
      author: { en: "Īśvarakṛṣṇa", kn: "ಈಶ್ವರಕೃಷ್ಣ", hi: "ईश्वरकृष्ण" },
      dating: {
        en: "Usually placed in the fourth or fifth century. Kapila is the school's traditional founder, but the Sāṅkhya Sūtra that carries his name is a work of about the fourteenth century, so the Kārikā is the earliest systematic Sāṅkhya that survives. The Ṣaṣṭitantra it condenses is lost.",
        kn: "ಸಾಮಾನ್ಯವಾಗಿ ನಾಲ್ಕನೇ ಅಥವಾ ಐದನೇ ಶತಮಾನದಲ್ಲಿ ಇಡಲಾಗುತ್ತದೆ. ಕಪಿಲನೇ ಶಾಖೆಯ ಪಾರಂಪರಿಕ ಸ್ಥಾಪಕ, ಆದರೆ ಅವನ ಹೆಸರು ಹೊತ್ತ ಸಾಂಖ್ಯಸೂತ್ರ ಸುಮಾರು ಹದಿನಾಲ್ಕನೇ ಶತಮಾನದ ಕೃತಿ; ಆದ್ದರಿಂದ ಉಳಿದಿರುವ ಅತ್ಯಂತ ಪ್ರಾಚೀನ ವ್ಯವಸ್ಥಿತ ಸಾಂಖ್ಯ ಕಾರಿಕೆಯೇ. ಅದು ಸಂಕ್ಷೇಪಿಸುವ ಷಷ್ಟಿತಂತ್ರ ನಷ್ಟವಾಗಿದೆ.",
        hi: "सामान्यतः चौथी या पाँचवीं शताब्दी में रखा जाता है। कपिल शाखा के पारंपरिक प्रवर्तक हैं, परंतु उनके नाम का सांख्यसूत्र लगभग चौदहवीं शताब्दी की रचना है, अतः जो सबसे प्राचीन व्यवस्थित सांख्य बचा है वह कारिका ही है। जिस षष्टितंत्र का वह संक्षेप है, वह लुप्त है।",
      },
      extent: {
        en: "Known as the Sāṅkhya-saptati — the seventy — and its own closing verse says seventy; printed editions carry seventy-two.",
        kn: "ಸಾಂಖ್ಯಸಪ್ತತಿ — ಎಪ್ಪತ್ತು — ಎಂದು ಹೆಸರು, ಮತ್ತು ಅದರ ಕೊನೆಯ ಕಾರಿಕೆಯೇ ಎಪ್ಪತ್ತು ಎನ್ನುತ್ತದೆ; ಮುದ್ರಿತ ಆವೃತ್ತಿಗಳು ಎಪ್ಪತ್ತೆರಡನ್ನು ಹೊಂದಿವೆ.",
        hi: "सांख्यसप्तति — सत्तर — नाम है, और उसकी अंतिम कारिका स्वयं सत्तर कहती है; मुद्रित संस्करणों में बहत्तर हैं।",
      },
    },
    pramanas: ["pratyaksha", "anumana", "shabda"],
    ishvara: {
      en: "None, and argued for: the Kārikā holds that nothing in the world requires a maker, and the school is called nirīśvara — without a Lord — in the texts that disagree with it. It is āstika all the same, because it accepts the Veda. That one fact is enough to retire the idea that āstika means theist.",
      kn: "ಇಲ್ಲ, ಮತ್ತು ವಾದಿಸಿ ಹಾಗೆ: ಜಗತ್ತಿನಲ್ಲಿ ಯಾವುದಕ್ಕೂ ಕರ್ತೃ ಬೇಕಿಲ್ಲ ಎಂದು ಕಾರಿಕೆ ಹಿಡಿಯುತ್ತದೆ, ಮತ್ತು ಇದನ್ನು ವಿರೋಧಿಸುವ ಗ್ರಂಥಗಳಲ್ಲಿ ಈ ಶಾಖೆಯನ್ನು ನಿರೀಶ್ವರ ಎಂದು ಕರೆಯಲಾಗಿದೆ. ಆದರೂ ಇದು ಆಸ್ತಿಕ, ಏಕೆಂದರೆ ವೇದವನ್ನು ಒಪ್ಪುತ್ತದೆ. ಆಸ್ತಿಕ ಎಂದರೆ ದೇವರನ್ನು ನಂಬುವವನು ಎಂಬ ಕಲ್ಪನೆಯನ್ನು ಕೈಬಿಡಲು ಈ ಒಂದು ಸಂಗತಿಯೇ ಸಾಕು.",
      hi: "कोई नहीं, और तर्कपूर्वक: कारिका मानती है कि संसार में किसी को कर्ता की आवश्यकता नहीं, और जो ग्रंथ इससे असहमत हैं वे इस शाखा को निरीश्वर कहते हैं। तथापि यह आस्तिक है, क्योंकि वेद को मानती है। आस्तिक का अर्थ ईश्वरवादी है — यह धारणा छोड़ने के लिए यही एक तथ्य पर्याप्त है।",
    },
    links: [
      { href: "/concepts/purusha-prakriti", label: { en: "Puruṣa and Prakṛti", kn: "ಪುರುಷ ಮತ್ತು ಪ್ರಕೃತಿ", hi: "पुरुष और प्रकृति" } },
      { href: "/concepts/guna", label: { en: "Guṇa", kn: "ಗುಣ", hi: "गुण" } },
      { href: "/gita/13", label: { en: "Gītā 13: the field and its knower", kn: "ಗೀತೆ ೧೩: ಕ್ಷೇತ್ರ ಮತ್ತು ಕ್ಷೇತ್ರಜ್ಞ", hi: "गीता १३: क्षेत्र और क्षेत्रज्ञ" } },
      { href: "/gita/14", label: { en: "Gītā 14: the three guṇas", kn: "ಗೀತೆ ೧೪: ಮೂರು ಗುಣಗಳು", hi: "गीता १४: तीन गुण" } },
    ],
  },

  // ── 4 ────────────────────────────────────────────────────
  {
    slug: "yoga",
    order: 4,
    name: { en: "Yoga", kn: "ಯೋಗ", hi: "योग" },
    sanskrit: "योगः",
    glyph: "योग",
    pair: "nature",
    question: {
      en: "If that is what the mind is, what can be done with it?",
      kn: "ಮನಸ್ಸು ಅದೇ ಆದರೆ, ಅದರೊಂದಿಗೆ ಏನು ಮಾಡಬಹುದು?",
      hi: "यदि मन वही है, तो उसका क्या किया जा सकता है?",
    },
    lede: {
      en: "The stilling of the mind's turnings, in under two hundred sūtras. Posture gets three of them.",
      kn: "ಮನಸ್ಸಿನ ತಿರುವುಗಳನ್ನು ನಿಲ್ಲಿಸುವುದು, ಇನ್ನೂರಕ್ಕಿಂತ ಕಡಿಮೆ ಸೂತ್ರಗಳಲ್ಲಿ. ಆಸನಕ್ಕೆ ಮೂರು ಸಿಗುತ್ತವೆ.",
      hi: "मन की वृत्तियों का निरोध, दो सौ से कम सूत्रों में। आसन को उनमें तीन मिलते हैं।",
    },
    root: {
      name: { en: "Yoga Sūtra", kn: "ಯೋಗಸೂತ್ರ", hi: "योगसूत्र" },
      sanskrit: "योगसूत्राणि",
      author: { en: "Patañjali", kn: "ಪತಂಜಲಿ", hi: "पतंजलि" },
      dating: {
        en: "Usually placed between the second and fourth centuries. Whether this Patañjali is the grammarian of the same name is disputed and not settled here.",
        kn: "ಸಾಮಾನ್ಯವಾಗಿ ಎರಡನೇ ಮತ್ತು ನಾಲ್ಕನೇ ಶತಮಾನಗಳ ನಡುವೆ ಇಡಲಾಗುತ್ತದೆ. ಈ ಪತಂಜಲಿಯೇ ಅದೇ ಹೆಸರಿನ ವ್ಯಾಕರಣಕಾರನೇ ಎಂಬುದು ವಿವಾದಿತ, ಮತ್ತು ಇಲ್ಲಿ ಬಗೆಹರಿಸಲಾಗಿಲ್ಲ.",
        hi: "सामान्यतः दूसरी और चौथी शताब्दी के बीच रखा जाता है। यह पतंजलि वही नाम के व्याकरणकार हैं या नहीं, यह विवादित है और यहाँ तय नहीं किया गया।",
      },
      extent: {
        en: "A hundred and ninety-five or ninety-six sūtras in four parts, depending on the recension.",
        kn: "ನಾಲ್ಕು ಪಾದಗಳಲ್ಲಿ ನೂರ ತೊಂಬತ್ತೈದು ಅಥವಾ ತೊಂಬತ್ತಾರು ಸೂತ್ರಗಳು, ಪಾಠಭೇದದ ಮೇಲೆ.",
        hi: "चार पादों में एक सौ पंचानबे या छियानबे सूत्र, पाठभेद के अनुसार।",
      },
    },
    pramanas: ["pratyaksha", "anumana", "shabda"],
    pramanaNote: {
      en: "Named in the seventh sūtra and nowhere expanded, because Sāṅkhya had settled the question and this text is not interested in reopening it.",
      kn: "ಏಳನೇ ಸೂತ್ರದಲ್ಲಿ ಹೆಸರಿಸಿ, ಮತ್ತೆಲ್ಲಿಯೂ ವಿಸ್ತರಿಸಿಲ್ಲ; ಏಕೆಂದರೆ ಸಾಂಖ್ಯ ಪ್ರಶ್ನೆಯನ್ನು ಇತ್ಯರ್ಥಗೊಳಿಸಿತ್ತು, ಮತ್ತು ಈ ಪಠ್ಯಕ್ಕೆ ಅದನ್ನು ಮತ್ತೆ ತೆರೆಯುವ ಆಸಕ್ತಿಯಿಲ್ಲ.",
      hi: "सातवें सूत्र में नाम लेकर, और कहीं विस्तार नहीं; क्योंकि सांख्य ने प्रश्न निपटा दिया था और इस पाठ को उसे फिर खोलने में रुचि नहीं।",
    },
    ishvara: {
      en: "There is one, and he makes nothing. Īśvara is defined as a puruṣa untouched by affliction, action and its residue; devotion to him is offered as one method among several, not as the ground of the world.",
      kn: "ಒಬ್ಬನಿದ್ದಾನೆ, ಮತ್ತು ಅವನು ಏನನ್ನೂ ಮಾಡುವುದಿಲ್ಲ. ಕ್ಲೇಶ, ಕರ್ಮ ಮತ್ತು ಅದರ ಉಳಿಕೆಯಿಂದ ಮುಟ್ಟಲ್ಪಡದ ಪುರುಷನೆಂದು ಈಶ್ವರನನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ; ಅವನಲ್ಲಿ ಭಕ್ತಿಯನ್ನು ಹಲವು ಉಪಾಯಗಳಲ್ಲಿ ಒಂದಾಗಿ ಕೊಡಲಾಗಿದೆ, ಜಗತ್ತಿನ ಆಧಾರವಾಗಿ ಅಲ್ಲ.",
      hi: "एक है, और वह कुछ नहीं बनाता। ईश्वर को क्लेश, कर्म और उसके शेष से अछूता पुरुष कहा गया है; उसमें भक्ति अनेक उपायों में एक के रूप में दी गई है, जगत् के आधार के रूप में नहीं।",
    },
    structure: {
      label: {
        en: "The eight limbs",
        kn: "ಎಂಟು ಅಂಗಗಳು",
        hi: "आठ अंग",
      },
      note: {
        en: "They are limbs, not stages — the word is aṅga — but they are given in this order and the first two are conduct. A system that is popularly a matter of the body begins with ten things to refrain from and observe, and reaches posture third.",
        kn: "ಇವು ಅಂಗಗಳು, ಹಂತಗಳಲ್ಲ — ಪದವೇ ಅಂಗ — ಆದರೆ ಈ ಕ್ರಮದಲ್ಲಿ ಕೊಡಲಾಗಿದೆ, ಮತ್ತು ಮೊದಲ ಎರಡು ನಡತೆ. ಜನಪ್ರಿಯವಾಗಿ ದೇಹದ ವಿಷಯವಾಗಿರುವ ಶಾಸ್ತ್ರ ಬಿಡಬೇಕಾದ ಮತ್ತು ಪಾಲಿಸಬೇಕಾದ ಹತ್ತರಿಂದ ಆರಂಭವಾಗಿ, ಆಸನಕ್ಕೆ ಮೂರನೆಯದಾಗಿ ತಲುಪುತ್ತದೆ.",
        hi: "ये अंग हैं, सोपान नहीं — शब्द ही अंग है — परंतु इसी क्रम में दिए गए हैं, और पहले दो आचरण हैं। जो शास्त्र लोकप्रिय रूप से देह का विषय है वह त्यागने और पालने की दस बातों से आरंभ होता है, और आसन तक तीसरे स्थान पर पहुँचता है।",
      },
      items: [
        item("yama", "यमः", "Restraints", "ಯಮ", "यम", "Five: not harming, truth, not stealing, continence, not accumulating", "ಐದು: ಅಹಿಂಸೆ, ಸತ್ಯ, ಅಸ್ತೇಯ, ಬ್ರಹ್ಮಚರ್ಯ, ಅಪರಿಗ್ರಹ", "पाँच: अहिंसा, सत्य, अस्तेय, ब्रह्मचर्य, अपरिग्रह"),
        item("niyama", "नियमः", "Observances", "ನಿಯಮ", "नियम", "Five: cleanness, contentment, austerity, study, surrender", "ಐದು: ಶೌಚ, ಸಂತೋಷ, ತಪಸ್, ಸ್ವಾಧ್ಯಾಯ, ಈಶ್ವರಪ್ರಣಿಧಾನ", "पाँच: शौच, संतोष, तप, स्वाध्याय, ईश्वरप्रणिधान"),
        item("asana", "आसनम्", "Posture", "ಆಸನ", "आसन", "Steady and comfortable. That is the whole definition", "ಸ್ಥಿರ ಮತ್ತು ಸುಖ. ವ್ಯಾಖ್ಯಾನ ಅಷ್ಟೇ", "स्थिर और सुखद। परिभाषा इतनी ही"),
        item("pranayama", "प्राणायामः", "Regulation of breath", "ಪ್ರಾಣಾಯಾಮ", "प्राणायाम", "The pause between in and out", "ಒಳಗೆ ಮತ್ತು ಹೊರಗೆಗಳ ನಡುವಿನ ವಿರಾಮ", "भीतर और बाहर के बीच का विराम"),
        item("pratyahara", "प्रत्याहारः", "Withdrawal", "ಪ್ರತ್ಯಾಹಾರ", "प्रत्याहार", "The senses stop following their objects", "ಇಂದ್ರಿಯಗಳು ತಮ್ಮ ವಿಷಯಗಳನ್ನು ಹಿಂಬಾಲಿಸುವುದನ್ನು ನಿಲ್ಲಿಸುತ್ತವೆ", "इंद्रियाँ अपने विषयों का अनुसरण छोड़ देती हैं"),
        item("dharana", "धारणा", "Holding", "ಧಾರಣಾ", "धारणा", "Attention kept on one place", "ಗಮನವನ್ನು ಒಂದೇ ಎಡೆ ಇರಿಸುವುದು", "ध्यान एक ही स्थान पर टिकाना"),
        item("dhyana", "ध्यानम्", "Dwelling", "ಧ್ಯಾನ", "ध्यान", "Attention staying there without being held", "ಹಿಡಿದಿಡದೆಯೇ ಗಮನ ಅಲ್ಲಿಯೇ ಉಳಿಯುವುದು", "पकड़े बिना ध्यान वहीं रहना"),
        item("samadhi", "समाधिः", "Absorption", "ಸಮಾಧಿ", "समाधि", "The distinction between attending and attended drops", "ಗಮನಿಸುವುದು ಮತ್ತು ಗಮನಿಸಲ್ಪಡುವುದರ ಭೇದ ಬಿದ್ದುಹೋಗುತ್ತದೆ", "ध्याता और ध्येय का भेद गिर जाता है"),
      ],
    },
    links: [
      { href: "/practice", label: { en: "Everyday Vedanta", kn: "ನಿತ್ಯ ವೇದಾಂತ", hi: "रोज़मर्रा वेदांत" } },
      { href: "/concepts/vairagya", label: { en: "Vairāgya", kn: "ವೈರಾಗ್ಯ", hi: "वैराग्य" } },
    ],
  },

  // ── 5 ────────────────────────────────────────────────────
  {
    slug: "mimamsa",
    order: 5,
    name: { en: "Pūrva Mīmāṃsā", kn: "ಪೂರ್ವಮೀಮಾಂಸಾ", hi: "पूर्वमीमांसा" },
    sanskrit: "पूर्वमीमांसा",
    glyph: "मीमांसा",
    pair: "veda",
    question: {
      en: "What does the Veda command, and how does a sentence oblige anyone?",
      kn: "ವೇದ ಏನನ್ನು ವಿಧಿಸುತ್ತದೆ, ಮತ್ತು ಒಂದು ವಾಕ್ಯ ಯಾರನ್ನಾದರೂ ಹೇಗೆ ಕಟ್ಟುತ್ತದೆ?",
      hi: "वेद क्या विधान करता है, और एक वाक्य किसी को कैसे बाध्य करता है?",
    },
    lede: {
      en: "The school that worked out how to read, and therefore the one Indian law quotes. It holds the Veda to be authorless, and gives God nothing to do.",
      kn: "ಓದುವುದು ಹೇಗೆ ಎಂಬುದನ್ನು ರೂಪಿಸಿದ ಶಾಖೆ, ಆದ್ದರಿಂದ ಭಾರತೀಯ ಕಾನೂನು ಉಲ್ಲೇಖಿಸುವ ಶಾಖೆ. ವೇದ ಅಪೌರುಷೇಯ ಎಂದು ಹಿಡಿಯುತ್ತದೆ, ಮತ್ತು ದೇವರಿಗೆ ಮಾಡಲು ಏನನ್ನೂ ಕೊಡುವುದಿಲ್ಲ.",
      hi: "जिस शाखा ने यह गढ़ा कि पढ़ना कैसे है, और इसीलिए जिसे भारतीय विधि उद्धृत करती है। वेद को अपौरुषेय मानती है, और ईश्वर को करने के लिए कुछ नहीं देती।",
    },
    root: {
      name: { en: "Mīmāṃsā Sūtra", kn: "ಮೀಮಾಂಸಾಸೂತ್ರ", hi: "मीमांसासूत्र" },
      sanskrit: "मीमांसासूत्राणि",
      author: { en: "Jaimini", kn: "ಜೈಮಿನಿ", hi: "जैमिनि" },
      dating: {
        en: "Usually placed a century or two before the common era. Śabara's commentary is the text the later school argues through, and Kumārila Bhaṭṭa and Prabhākara, around the seventh century, split it into the two wings it has had ever since.",
        kn: "ಸಾಮಾನ್ಯವಾಗಿ ಕ್ರಿಸ್ತಪೂರ್ವ ಒಂದೆರಡು ಶತಮಾನಗಳಲ್ಲಿ ಇಡಲಾಗುತ್ತದೆ. ಶಬರನ ಭಾಷ್ಯವೇ ನಂತರದ ಶಾಖೆ ವಾದಿಸುವ ಪಠ್ಯ, ಮತ್ತು ಸುಮಾರು ಏಳನೇ ಶತಮಾನದಲ್ಲಿ ಕುಮಾರಿಲ ಭಟ್ಟ ಮತ್ತು ಪ್ರಭಾಕರ ಅದನ್ನು ಅಂದಿನಿಂದ ಇರುವ ಎರಡು ಪಕ್ಷಗಳಾಗಿ ಒಡೆದರು.",
        hi: "सामान्यतः ईसा पूर्व एक-दो शताब्दी में रखा जाता है। शबर का भाष्य ही वह पाठ है जिसके सहारे परवर्ती शाखा विवाद करती है, और लगभग सातवीं शताब्दी में कुमारिल भट्ट तथा प्रभाकर ने उसे उन दो पक्षों में बाँट दिया जो तब से बने हुए हैं।",
      },
      extent: {
        en: "Twelve chapters — the longest of the sūtra collections.",
        kn: "ಹನ್ನೆರಡು ಅಧ್ಯಾಯಗಳು — ಸೂತ್ರಸಂಗ್ರಹಗಳಲ್ಲಿ ಅತಿ ದೊಡ್ಡದು.",
        hi: "बारह अध्याय — सूत्रसंग्रहों में सबसे बड़ा।",
      },
    },
    pramanas: ["pratyaksha", "anumana", "upamana", "shabda", "anupalabdhi", "arthapatti"],
    pramanaNote: {
      en: "Six for the Bhāṭṭa wing, five for the Prābhākara, which denies that absence is known by a means of its own. The two wings of one school disagree about the list, which is why a single row can only ever be approximate.",
      kn: "ಭಾಟ್ಟ ಪಕ್ಷಕ್ಕೆ ಆರು, ಪ್ರಾಭಾಕರಕ್ಕೆ ಐದು — ಅಭಾವವನ್ನು ತನ್ನದೇ ಪ್ರಮಾಣದಿಂದ ತಿಳಿಯಲಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ಅದು ನಿರಾಕರಿಸುತ್ತದೆ. ಒಂದೇ ಶಾಖೆಯ ಎರಡು ಪಕ್ಷಗಳು ಪಟ್ಟಿಯ ಬಗ್ಗೆ ಭಿನ್ನಮತ ಹೊಂದಿವೆ; ಆದ್ದರಿಂದಲೇ ಒಂದೇ ಸಾಲು ಸದಾ ಸ್ಥೂಲವಾಗಿಯೇ ಇರಬಲ್ಲದು.",
        hi: "भाट्ट पक्ष के लिए छह, प्राभाकर के लिए पाँच — वह मानता नहीं कि अभाव अपने ही प्रमाण से जाना जाता है। एक ही शाखा के दो पक्ष सूची पर असहमत हैं; इसीलिए कोई एक पंक्ति सदा स्थूल ही रह सकती है।",
    },
    ishvara: {
      en: "No role. The Veda is held to be authorless — not composed by God either, because a composer's word would be a composer's opinion. The rite produces its result by itself, and no one is being petitioned.",
      kn: "ಪಾತ್ರವಿಲ್ಲ. ವೇದ ಅಪೌರುಷೇಯ ಎಂದು ಹಿಡಿಯಲಾಗಿದೆ — ದೇವರು ರಚಿಸಿದ್ದೂ ಅಲ್ಲ, ಏಕೆಂದರೆ ರಚಿಸಿದವನ ಮಾತು ರಚಿಸಿದವನ ಅಭಿಪ್ರಾಯವಾಗುತ್ತದೆ. ಯಜ್ಞ ತನ್ನಿಂದ ತಾನೇ ಫಲವನ್ನು ಕೊಡುತ್ತದೆ, ಮತ್ತು ಯಾರನ್ನೂ ಬೇಡಲಾಗುತ್ತಿಲ್ಲ.",
      hi: "कोई भूमिका नहीं। वेद को अपौरुषेय माना गया है — ईश्वर-रचित भी नहीं, क्योंकि रचनेवाले का वचन रचनेवाले का मत होगा। यज्ञ स्वयं अपना फल देता है, और किसी से याचना नहीं हो रही।",
    },
    structure: {
      label: {
        en: "How a disputed meaning is settled",
        kn: "ವಿವಾದಿತ ಅರ್ಥವನ್ನು ಹೇಗೆ ನಿರ್ಣಯಿಸಲಾಗುತ್ತದೆ",
        hi: "विवादित अर्थ कैसे निर्णीत होता है",
      },
      note: {
        en: "Six tests, in descending order of force: an earlier one beats a later one whenever they conflict. This is the piece of Mīmāṃsā that outlived its subject — the courts of this country have cited this hierarchy to read statutes.",
        kn: "ಆರು ಪರೀಕ್ಷೆಗಳು, ಬಲದ ಇಳಿಕೆಯ ಕ್ರಮದಲ್ಲಿ: ಘರ್ಷಣೆಯಾದಾಗಲೆಲ್ಲ ಹಿಂದಿನದು ಮುಂದಿನದನ್ನು ಗೆಲ್ಲುತ್ತದೆ. ಮೀಮಾಂಸೆಯ ತನ್ನ ವಿಷಯವನ್ನೇ ಮೀರಿ ಉಳಿದ ಭಾಗ ಇದು — ಈ ದೇಶದ ನ್ಯಾಯಾಲಯಗಳು ಶಾಸನಗಳನ್ನು ಓದಲು ಈ ಶ್ರೇಣಿಯನ್ನು ಉಲ್ಲೇಖಿಸಿವೆ.",
        hi: "छह परीक्षाएँ, बल के घटते क्रम में: टकराव हो तो पहली बाद वाली को हरा देती है। मीमांसा का यही अंश अपने विषय से भी आगे टिका — इस देश के न्यायालयों ने विधियों को पढ़ने के लिए इस क्रम को उद्धृत किया है।",
      },
      items: [
        item("shruti-m", "श्रुतिः", "The direct word", "ಶ್ರುತಿ", "श्रुति", "What the text actually says, before anything is read into it", "ಪಠ್ಯ ನಿಜವಾಗಿ ಏನು ಹೇಳುತ್ತದೆ, ಅದರಲ್ಲಿ ಏನನ್ನೂ ಓದುವ ಮೊದಲು", "पाठ वस्तुतः क्या कहता है, उसमें कुछ पढ़े जाने से पहले"),
        item("linga-m", "लिङ्गम्", "What the word implies", "ಲಿಂಗ", "लिंग", "The force a term carries of itself", "ಪದ ತನ್ನಿಂದ ತಾನೇ ಹೊರುವ ಬಲ", "शब्द स्वयं जो बल रखता है"),
        item("vakya-m", "वाक्यम्", "The sentence", "ವಾಕ್ಯ", "वाक्य", "What the whole statement, read together, must mean", "ಇಡೀ ಹೇಳಿಕೆಯನ್ನು ಒಟ್ಟಾಗಿ ಓದಿದರೆ ಏನಾಗಬೇಕು", "पूरा कथन साथ पढ़ने पर क्या अर्थ देना चाहिए"),
        item("prakarana-m", "प्रकरणम्", "The context", "ಪ್ರಕರಣ", "प्रकरण", "The passage it belongs to, and what that passage is doing", "ಅದು ಸೇರಿದ ಪ್ರಕರಣ, ಮತ್ತು ಆ ಪ್ರಕರಣ ಏನು ಮಾಡುತ್ತಿದೆ", "वह प्रसंग जिसका वह अंग है, और वह प्रसंग क्या कर रहा है"),
        item("sthana-m", "स्थानम्", "The position", "ಸ್ಥಾನ", "स्थान", "Where it stands in the order of the rite", "ಯಜ್ಞದ ಕ್ರಮದಲ್ಲಿ ಅದು ನಿಲ್ಲುವೆಡೆ", "अनुष्ठान के क्रम में वह कहाँ है"),
        item("samakhya-m", "समाख्या", "The name", "ಸಮಾಖ್ಯಾ", "समाख्या", "What it is called — the weakest ground, and used only when the rest are silent", "ಅದನ್ನು ಏನೆಂದು ಕರೆಯುತ್ತಾರೆ — ಅತಿ ದುರ್ಬಲ ನೆಲೆ, ಉಳಿದವು ಮೌನವಾದಾಗ ಮಾತ್ರ ಬಳಕೆ", "उसे क्या कहते हैं — सबसे दुर्बल आधार, शेष चुप हों तभी प्रयुक्त"),
      ],
    },
    links: [
      { href: "/rituals", label: { en: "Rituals & Festivals", kn: "ಆಚರಣೆ ಮತ್ತು ಹಬ್ಬಗಳು", hi: "अनुष्ठान और पर्व" } },
      { href: "/vedas", label: { en: "The Vedas", kn: "ವೇದಗಳು", hi: "वेद" } },
    ],
  },

  // ── 6 ────────────────────────────────────────────────────
  {
    slug: "vedanta",
    order: 6,
    name: { en: "Vedānta", kn: "ವೇದಾಂತ", hi: "वेदांत" },
    sanskrit: "वेदान्तः",
    glyph: "वेदान्त",
    pair: "veda",
    question: {
      en: "What is finally real, and what is the self's relation to it?",
      kn: "ಕೊನೆಗೆ ಸತ್ಯವಾದದ್ದು ಯಾವುದು, ಮತ್ತು ಆತ್ಮಕ್ಕೆ ಅದರೊಡನೆ ಇರುವ ಸಂಬಂಧವೇನು?",
      hi: "अंततः सत्य क्या है, और आत्मा का उससे क्या संबंध है?",
    },
    lede: {
      en: "Uttara Mīmāṃsā, the later enquiry — and the one darśana that did not settle into a single position. Three schools read the same three books and disagreed completely.",
      kn: "ಉತ್ತರಮೀಮಾಂಸಾ, ನಂತರದ ವಿಚಾರ — ಮತ್ತು ಒಂದೇ ನಿಲುವಿಗೆ ನೆಲೆಗೊಳ್ಳದ ಏಕೈಕ ದರ್ಶನ. ಮೂರು ಶಾಖೆಗಳು ಅದೇ ಮೂರು ಗ್ರಂಥಗಳನ್ನು ಓದಿ ಸಂಪೂರ್ಣ ಭಿನ್ನರಾದರು.",
      hi: "उत्तरमीमांसा, परवर्ती विचार — और वह एक दर्शन जो किसी एक पक्ष पर स्थिर नहीं हुआ। तीन शाखाओं ने वही तीन ग्रंथ पढ़े और पूर्णतः असहमत रहीं।",
    },
    root: {
      name: { en: "Brahma Sūtra", kn: "ಬ್ರಹ್ಮಸೂತ್ರ", hi: "ब्रह्मसूत्र" },
      sanskrit: "ब्रह्मसूत्राणि",
      author: { en: "Bādarāyaṇa", kn: "ಬಾದರಾಯಣ", hi: "बादरायण" },
      dating: {
        en: "The received text is usually placed around the fourth or fifth century. The tradition identifies Bādarāyaṇa with Vyāsa; the identification is traditional and is not treated here as established.",
        kn: "ಈಗಿರುವ ಪಠ್ಯವನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ನಾಲ್ಕನೇ ಅಥವಾ ಐದನೇ ಶತಮಾನದ ಸುಮಾರಿಗೆ ಇಡಲಾಗುತ್ತದೆ. ಪರಂಪರೆ ಬಾದರಾಯಣನನ್ನು ವ್ಯಾಸನೆಂದು ಗುರುತಿಸುತ್ತದೆ; ಆ ಗುರುತಿಸುವಿಕೆ ಪಾರಂಪರಿಕ, ಮತ್ತು ಇಲ್ಲಿ ಸಿದ್ಧವೆಂದು ನಡೆಸಿಕೊಳ್ಳಲಾಗಿಲ್ಲ.",
        hi: "प्राप्त पाठ सामान्यतः चौथी या पाँचवीं शताब्दी के आसपास रखा जाता है। परंपरा बादरायण को व्यास मानती है; वह पहचान पारंपरिक है, और यहाँ सिद्ध नहीं मानी गई।",
      },
      extent: {
        en: "Four chapters of aphorisms — about five hundred and fifty-five, with the count differing slightly between recensions.",
        kn: "ನಾಲ್ಕು ಅಧ್ಯಾಯಗಳ ಸೂತ್ರಗಳು — ಸುಮಾರು ಐನೂರ ಐವತ್ತೈದು, ಪಾಠಭೇದಗಳ ನಡುವೆ ಎಣಿಕೆ ಸ್ವಲ್ಪ ಬೇರೆಯಾಗುತ್ತದೆ.",
        hi: "चार अध्यायों के सूत्र — लगभग पाँच सौ पचपन, और पाठभेदों में गणना थोड़ी भिन्न होती है।",
      },
    },
    pramanas: ["pratyaksha", "anumana", "upamana", "shabda", "anupalabdhi", "arthapatti"],
    pramanaNote: {
      en: "Six in Advaita, which follows the Bhāṭṭa list. Viśiṣṭādvaita and Dvaita accept three. The row below shows Advaita's, and that is a choice this page has to admit rather than smooth over.",
      kn: "ಅದ್ವೈತದಲ್ಲಿ ಆರು, ಅದು ಭಾಟ್ಟ ಪಟ್ಟಿಯನ್ನು ಅನುಸರಿಸುತ್ತದೆ. ವಿಶಿಷ್ಟಾದ್ವೈತ ಮತ್ತು ದ್ವೈತ ಮೂರನ್ನು ಒಪ್ಪುತ್ತವೆ. ಕೆಳಗಿನ ಸಾಲು ಅದ್ವೈತದ್ದನ್ನು ತೋರಿಸುತ್ತದೆ, ಮತ್ತು ಅದು ಈ ಪುಟ ಮುಚ್ಚಿಹಾಕದೆ ಒಪ್ಪಿಕೊಳ್ಳಬೇಕಾದ ಆಯ್ಕೆ.",
      hi: "अद्वैत में छह, जो भाट्ट सूची का अनुसरण करता है। विशिष्टाद्वैत और द्वैत तीन मानते हैं। नीचे की पंक्ति अद्वैत की है, और यह ऐसा चयन है जिसे यह पृष्ठ ढकने के बजाय स्वीकार करना चाहिए।",
    },
    ishvara: {
      en: "This is precisely what the three schools fight over. Whether Brahman has attributes, whether Īśvara is Brahman as it truly is or Brahman as described for a worshipper, and whether the self is identical with it, part of it, or for ever other than it.",
      kn: "ಮೂರು ಶಾಖೆಗಳು ಹೋರಾಡುವುದು ನಿಖರವಾಗಿ ಇದರ ಮೇಲೆಯೇ. ಬ್ರಹ್ಮಕ್ಕೆ ಗುಣಗಳಿವೆಯೇ, ಈಶ್ವರ ಬ್ರಹ್ಮವಿರುವಂತೆಯೇ ಇದೆಯೇ ಅಥವಾ ಆರಾಧಕನಿಗಾಗಿ ವರ್ಣಿಸಿದ ಬ್ರಹ್ಮವೇ, ಮತ್ತು ಆತ್ಮವು ಅದರೊಡನೆ ಅಭಿನ್ನವೇ, ಅದರ ಅಂಶವೇ, ಅಥವಾ ಸದಾ ಅದರಿಂದ ಅನ್ಯವೇ.",
      hi: "तीन शाखाएँ ठीक इसी पर लड़ती हैं। ब्रह्म सगुण है या नहीं, ईश्वर ब्रह्म जैसा है वैसा ही है या उपासक के लिए वर्णित ब्रह्म है, और आत्मा उससे अभिन्न है, उसका अंश है, या सदा उससे अन्य है।",
    },
    structure: {
      label: {
        en: "The three starting points",
        kn: "ಮೂರು ಪ್ರಸ್ಥಾನಗಳು",
        hi: "तीन प्रस्थान",
      },
      note: {
        en: "A school of Vedānta is founded by commenting on all three, which is the reason there can be disagreement at all: the books are fixed and the readings are not. Each of the three is a section of this site.",
        kn: "ಈ ಮೂರಕ್ಕೂ ಭಾಷ್ಯ ಬರೆದೇ ವೇದಾಂತದ ಶಾಖೆ ಸ್ಥಾಪಿತವಾಗುತ್ತದೆ; ಭಿನ್ನಮತ ಸಾಧ್ಯವಾಗುವುದಕ್ಕೆ ಕಾರಣವೇ ಇದು: ಗ್ರಂಥಗಳು ನಿಶ್ಚಿತ, ಓದುಗಳು ಅಲ್ಲ. ಮೂರರಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಈ ತಾಣದ ಒಂದು ವಿಭಾಗ.",
        hi: "इन तीनों पर भाष्य लिखकर ही वेदांत की शाखा स्थापित होती है; असहमति संभव होने का कारण यही है: ग्रंथ निश्चित हैं, पाठ नहीं। तीनों में से प्रत्येक इस साइट का एक अनुभाग है।",
      },
      items: [
        item("upanishads-v", "उपनिषदः", "The Upaniṣads", "ಉಪನಿಷತ್ತುಗಳು", "उपनिषद्", "The heard portion the whole argument rests on", "ಇಡೀ ವಾದ ನಿಲ್ಲುವ ಶ್ರುತಿಭಾಗ", "जिस पर पूरा तर्क टिका है वह श्रुति-भाग"),
        item("gita-v", "भगवद्गीता", "The Bhagavad Gītā", "ಭಗವದ್ಗೀತಾ", "भगवद्गीता", "The remembered portion, and the one text all three wrote on verse by verse", "ಸ್ಮೃತಿಭಾಗ, ಮತ್ತು ಮೂರೂ ಶ್ಲೋಕಶ್ಲೋಕವಾಗಿ ಬರೆದ ಒಂದೇ ಗ್ರಂಥ", "स्मृति-भाग, और वह एक पाठ जिस पर तीनों ने श्लोक-श्लोक लिखा"),
        item("brahma-sutra-v", "ब्रह्मसूत्राणि", "The Brahma Sūtras", "ಬ್ರಹ್ಮಸೂತ್ರಗಳು", "ब्रह्मसूत्र", "The reasoned portion, too compressed to read without a commentary", "ನ್ಯಾಯಭಾಗ, ಭಾಷ್ಯವಿಲ್ಲದೆ ಓದಲಾಗದಷ್ಟು ಸಂಕ್ಷಿಪ್ತ", "न्याय-भाग, भाष्य के बिना पढ़ा न जा सके इतना संक्षिप्त"),
      ],
    },
    links: [
      { href: "/acharyas/adi-shankaracharya", label: { en: "Adi Shankaracharya", kn: "ಆದಿ ಶಂಕರಾಚಾರ್ಯ", hi: "आदि शंकराचार्य" } },
      { href: "/concepts/brahman", label: { en: "Brahman", kn: "ಬ್ರಹ್ಮನ್", hi: "ब्रह्मन्" } },
      { href: "/upanishads", label: { en: "The Upaniṣads", kn: "ಉಪನಿಷತ್ತುಗಳು", hi: "उपनिषद्" } },
      { href: "/gita", label: { en: "Geetha Rasa Dhara", kn: "ಗೀತಾ ರಸಧಾರಾ", hi: "गीता रसधारा" } },
    ],
  },
];

// ── the positions the six argued with ───────────────────────

export interface ContrastPosition {
  id: string;
  name: Record<Locale, string>;
  sanskrit: string;
  /** Null where its epistemology does not fit the six-pramāṇa list. */
  pramanas: PramanaId[] | null;
  note: Record<Locale, string>;
}

/**
 * Not in the six, and on every page of them.
 *
 * These are the schools the darśanas were arguing with. Leaving them
 * out of a page about Indian philosophy makes a public argument look
 * like a family conversation — and in the Jain case it also tempts a
 * false tidiness, since Jain epistemology has its own list and does
 * not map onto the Nyāya six. That row carries no dots on purpose.
 */
export const CONTRAST: ContrastPosition[] = [
  {
    id: "bauddha",
    name: { en: "The Buddhist logicians", kn: "ಬೌದ್ಧ ತಾರ್ಕಿಕರು", hi: "बौद्ध तार्किक" },
    sanskrit: "बौद्धम्",
    pramanas: ["pratyaksha", "anumana"],
    note: {
      en: "Dignāga and Dharmakīrti accept perception and inference and nothing further — and then argue the Nyāya school into a corner over both, in texts the Nyāya school had to answer.",
      kn: "ದಿಙ್ನಾಗ ಮತ್ತು ಧರ್ಮಕೀರ್ತಿ ಪ್ರತ್ಯಕ್ಷ ಮತ್ತು ಅನುಮಾನವನ್ನು ಒಪ್ಪುತ್ತಾರೆ, ಮುಂದೇನನ್ನೂ ಅಲ್ಲ — ಮತ್ತು ಆ ಎರಡರ ಮೇಲೆಯೂ ನ್ಯಾಯಶಾಖೆಯನ್ನು ಮೂಲೆಗೆ ದೂಡುತ್ತಾರೆ, ನ್ಯಾಯಶಾಖೆ ಉತ್ತರಿಸಬೇಕಾದ ಗ್ರಂಥಗಳಲ್ಲಿ.",
      hi: "दिङ्नाग और धर्मकीर्ति प्रत्यक्ष और अनुमान मानते हैं, आगे कुछ नहीं — और उन्हीं दोनों पर न्याय शाखा को ऐसे कोने में घेरते हैं कि न्याय को उत्तर देना पड़ा।",
    },
  },
  {
    id: "jaina",
    name: { en: "The Jain thinkers", kn: "ಜೈನ ಚಿಂತಕರು", hi: "जैन चिंतक" },
    sanskrit: "जैनम्",
    pramanas: null,
    note: {
      en: "Deliberately left blank. Jain epistemology works from a classification of its own, and the doctrine it is known for — that a claim is true only from a standpoint — is not a position on how many means of knowledge there are. Forcing it into this row would be tidier and false.",
      kn: "ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಖಾಲಿ ಬಿಟ್ಟದ್ದು. ಜೈನ ಜ್ಞಾನಮೀಮಾಂಸೆ ತನ್ನದೇ ವರ್ಗೀಕರಣದಿಂದ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಮತ್ತು ಅದು ಹೆಸರಾದ ಸಿದ್ಧಾಂತ — ಹೇಳಿಕೆ ಒಂದು ದೃಷ್ಟಿಕೋನದಿಂದ ಮಾತ್ರ ಸತ್ಯ ಎಂಬುದು — ಪ್ರಮಾಣಗಳು ಎಷ್ಟು ಎಂಬ ಬಗ್ಗೆ ಇರುವ ನಿಲುವಲ್ಲ. ಅದನ್ನು ಈ ಸಾಲಿಗೆ ತುರುಕುವುದು ಹೆಚ್ಚು ಅಚ್ಚುಕಟ್ಟಾಗಿರುತ್ತದೆ ಮತ್ತು ಸುಳ್ಳಾಗಿರುತ್ತದೆ.",
      hi: "जान-बूझकर रिक्त। जैन ज्ञानमीमांसा अपने ही वर्गीकरण से चलती है, और जिस सिद्धांत के लिए वह जानी जाती है — कि कथन किसी दृष्टि से ही सत्य है — वह प्रमाणों की संख्या पर कोई पक्ष नहीं है। उसे इस पंक्ति में ठूँसना अधिक सुव्यवस्थित और असत्य होगा।",
    },
  },
  {
    id: "charvaka",
    name: { en: "Cārvāka", kn: "ಚಾರ್ವಾಕ", hi: "चार्वाक" },
    sanskrit: "चार्वाकम्",
    pramanas: ["pratyaksha"],
    note: {
      en: "Perception alone, which rules out inference and therefore most of what the others wanted to prove. Not one of its own texts survives: it is known almost entirely from the summaries its opponents wrote in order to refute it, and that is worth saying plainly before quoting any of them.",
      kn: "ಪ್ರತ್ಯಕ್ಷ ಮಾತ್ರ, ಅದು ಅನುಮಾನವನ್ನು ಮತ್ತು ಆದ್ದರಿಂದ ಉಳಿದವರು ಸಾಧಿಸಬಯಸಿದ ಬಹುತೇಕವನ್ನು ಹೊರಗಿಡುತ್ತದೆ. ಅದರ ಸ್ವಂತ ಗ್ರಂಥ ಒಂದೂ ಉಳಿದಿಲ್ಲ: ಅದನ್ನು ಖಂಡಿಸಲೆಂದೇ ವಿರೋಧಿಗಳು ಬರೆದ ಸಾರಾಂಶಗಳಿಂದಲೇ ಬಹುತೇಕ ಅದು ತಿಳಿದಿದೆ, ಮತ್ತು ಅವುಗಳಲ್ಲಿ ಯಾವುದನ್ನೂ ಉಲ್ಲೇಖಿಸುವ ಮೊದಲು ಅದನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಹೇಳುವುದು ಯೋಗ್ಯ.",
      hi: "केवल प्रत्यक्ष, जो अनुमान को और इसलिए शेष सबके सिद्ध करने योग्य बहुत कुछ को बाहर कर देता है। इसका अपना एक भी ग्रंथ नहीं बचा: यह लगभग पूरी तरह उन सारांशों से जाना जाता है जो विरोधियों ने इसका खंडन करने के लिए लिखे, और उनमें से कुछ भी उद्धृत करने से पहले यह स्पष्ट कहना उचित है।",
    },
  },
];

// ── lookups ─────────────────────────────────────────────────

export function darshanasInOrder(): Darshana[] {
  return [...DARSHANAS].sort((a, b) => a.order - b.order);
}

export function darshanaBySlug(slug: string): Darshana | undefined {
  return DARSHANAS.find((d) => d.slug === slug);
}

export function pairById(id: string): DarshanaPair | undefined {
  return PAIRS.find((p) => p.id === id);
}

/** How many of the six means of knowledge a school accepts. */
export function pramanaCount(slug: string): number {
  return darshanaBySlug(slug)?.pramanas.length ?? 0;
}
