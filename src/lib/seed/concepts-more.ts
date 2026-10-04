import type { Locale } from "@/i18n/config";
import type { ConceptRow, ConceptTranslationRow } from "./types";

// ─────────────────────────────────────────────────────────
//  The concepts the site needed and did not have.
//
//  The first six were all Advaita, and all written as though Advaita
//  had settled the question — "Brahman is the sole reality", with no
//  hint that two of the three great commentators on the same verses
//  disagreed flatly. This site holds Śaṅkara, Rāmānuja and Madhva
//  side by side in /acharyas and says in its own blurb that they
//  "disagreed completely". The concepts pages had better say so too.
//
//  So three things are added here:
//
//  **Fifteen more terms**, most of them not Advaita's at all but the
//  common property of the tradition — karma, dharma, ṛta, the three
//  debts, the four aims, the three guṇas.
//
//  **`SCHOOLS`**: for the six terms where Vedānta actually divides,
//  what each school says, in its own terms rather than as a footnote
//  to Advaita. These are the places where a single confident sentence
//  would be a quiet lie.
//
//  **`SOURCE_TEXTS`**: where a term is chiefly set out, so a reader
//  can go and look rather than take the site's word.
//
//  The grouping lives here rather than on `ConceptRow` because that
//  row is pushed to Supabase column for column, and `category` there
//  is a shared type with a check constraint behind it. Same reasoning
//  as PLACEMENT in seed/rituals.ts: an organising field the view
//  needs is not the same thing as a column the database holds.
// ─────────────────────────────────────────────────────────

export type ConceptGroup = "reality" | "self" | "action" | "life" | "path";

/** Every concept belongs to exactly one; a test holds that. */
export const CONCEPT_GROUP: Record<string, ConceptGroup> = {
  brahman: "reality",
  maya: "reality",
  ishvara: "reality",
  rta: "reality",
  "purusha-prakriti": "reality",

  atman: "self",
  jiva: "self",
  avidya: "self",
  guna: "self",

  karma: "action",
  dharma: "action",
  samsara: "action",
  punarjanma: "action",

  purushartha: "life",
  ashrama: "life",
  rina: "life",

  moksha: "path",
  viveka: "path",
  advaita: "path",
  vairagya: "path",
  bhakti: "path",
};

export const MORE_CONCEPTS: ConceptRow[] = [
  { id: "c-ishvara", slug: "ishvara", term_sanskrit: "ईश्वर", term_iast: "Īśvara", category: "advaita", related_concepts: ["brahman", "maya", "bhakti"] },
  { id: "c-rta", slug: "rta", term_sanskrit: "ऋत", term_iast: "Ṛta", category: "shruti", related_concepts: ["dharma", "karma"] },
  { id: "c-purusha-prakriti", slug: "purusha-prakriti", term_sanskrit: "पुरुषप्रकृती", term_iast: "Puruṣa and Prakṛti", category: "advaita", related_concepts: ["guna", "atman", "maya"] },

  { id: "c-jiva", slug: "jiva", term_sanskrit: "जीव", term_iast: "Jīva", category: "advaita", related_concepts: ["atman", "samsara", "moksha"] },
  { id: "c-avidya", slug: "avidya", term_sanskrit: "अविद्या", term_iast: "Avidyā", category: "advaita", related_concepts: ["maya", "viveka", "moksha"] },
  { id: "c-guna", slug: "guna", term_sanskrit: "गुण", term_iast: "Guṇa", category: "advaita", related_concepts: ["purusha-prakriti", "karma"] },

  { id: "c-karma", slug: "karma", term_sanskrit: "कर्म", term_iast: "Karma", category: "dharma", related_concepts: ["samsara", "punarjanma", "dharma"] },
  { id: "c-dharma", slug: "dharma", term_sanskrit: "धर्म", term_iast: "Dharma", category: "dharma", related_concepts: ["rta", "purushartha", "karma"] },
  { id: "c-samsara", slug: "samsara", term_sanskrit: "संसार", term_iast: "Saṃsāra", category: "dharma", related_concepts: ["punarjanma", "karma", "moksha"] },
  { id: "c-punarjanma", slug: "punarjanma", term_sanskrit: "पुनर्जन्म", term_iast: "Punarjanma", category: "dharma", related_concepts: ["samsara", "karma", "jiva"] },

  { id: "c-purushartha", slug: "purushartha", term_sanskrit: "पुरुषार्थ", term_iast: "Puruṣārtha", category: "dharma", related_concepts: ["dharma", "moksha", "ashrama"] },
  { id: "c-ashrama", slug: "ashrama", term_sanskrit: "आश्रम", term_iast: "Āśrama", category: "dharma", related_concepts: ["purushartha", "dharma", "rina"] },
  { id: "c-rina", slug: "rina", term_sanskrit: "ऋण", term_iast: "Ṛṇa", category: "dharma", related_concepts: ["ashrama", "dharma"] },

  { id: "c-vairagya", slug: "vairagya", term_sanskrit: "वैराग्य", term_iast: "Vairāgya", category: "advaita", related_concepts: ["viveka", "moksha"] },
  { id: "c-bhakti", slug: "bhakti", term_sanskrit: "भक्ति", term_iast: "Bhakti", category: "advaita", related_concepts: ["ishvara", "moksha"] },
];

const t = (
  id: string,
  en: [string, string],
  kn: [string, string],
  hi: [string, string],
): ConceptTranslationRow[] => [
  { concept_id: id, language: "en", term: en[0], definition: en[1].split("||")[0]!, detailed_explanation: en[1].split("||")[1]! },
  { concept_id: id, language: "kn", term: kn[0], definition: kn[1].split("||")[0]!, detailed_explanation: kn[1].split("||")[1]! },
  { concept_id: id, language: "hi", term: hi[0], definition: hi[1].split("||")[0]!, detailed_explanation: hi[1].split("||")[1]! },
];

export const MORE_TRANSLATIONS: ConceptTranslationRow[] = [
  ...t(
    "c-ishvara",
    ["Ishvara", "God considered as having attributes — the lord of the world, who can be addressed.||Brahman described without attributes cannot be worshipped, because there is nothing there to address. Īśvara is the same reality taken as having qualities, a will and a relation to the world, and it is Īśvara that every temple, every stotra and every prayer on this site speaks to. Whether Īśvara is the final truth or a lower way of putting it is the oldest live argument in Vedānta."],
    ["ಈಶ್ವರ", "ಗುಣಸಹಿತವಾಗಿ ಪರಿಗಣಿಸಿದ ದೇವರು — ಸಂಬೋಧಿಸಬಹುದಾದ ಜಗದೀಶ್ವರ.||ನಿರ್ಗುಣವಾಗಿ ವರ್ಣಿಸಿದ ಬ್ರಹ್ಮವನ್ನು ಪೂಜಿಸಲಾಗದು, ಏಕೆಂದರೆ ಅಲ್ಲಿ ಸಂಬೋಧಿಸಲು ಯಾರೂ ಇಲ್ಲ. ಈಶ್ವರ ಎಂದರೆ ಅದೇ ಸತ್ಯವನ್ನು ಗುಣ, ಸಂಕಲ್ಪ ಮತ್ತು ಜಗತ್ತಿನೊಡನೆ ಸಂಬಂಧ ಉಳ್ಳದ್ದಾಗಿ ತೆಗೆದುಕೊಂಡದ್ದು; ಈ ತಾಣದ ಪ್ರತಿ ದೇವಾಲಯ, ಪ್ರತಿ ಸ್ತೋತ್ರ, ಪ್ರತಿ ಪ್ರಾರ್ಥನೆ ಮಾತನಾಡುವುದು ಈಶ್ವರನೊಡನೆಯೇ. ಈಶ್ವರನೇ ಅಂತಿಮ ಸತ್ಯವೋ ಅಥವಾ ಹೇಳಿಕೆಯ ಒಂದು ಕೆಳಹಂತವೋ ಎಂಬುದು ವೇದಾಂತದ ಅತ್ಯಂತ ಹಳೆಯ ಜೀವಂತ ವಾದ."],
    ["ईश्वर", "सगुण रूप में माना गया भगवान् — जगत् का स्वामी, जिसे संबोधित किया जा सके।||निर्गुण रूप में वर्णित ब्रह्म की उपासना नहीं हो सकती, क्योंकि वहाँ संबोधित करने को कोई नहीं। ईश्वर वही सत्य है, गुण, संकल्प और जगत् से संबंध सहित लिया हुआ; इस साइट का हर मंदिर, हर स्तोत्र और हर प्रार्थना ईश्वर से ही बात करती है। ईश्वर अंतिम सत्य है या कहने का एक निम्नतर ढंग — यह वेदांत का सबसे पुराना जीवित विवाद है।"],
  ),
  ...t(
    "c-rta",
    ["Rita", "The order the Rigveda says the world runs by — the ancestor of dharma.||Ṛta is the Ṛgveda's word for the way things hold together: the seasons returning, the sun keeping its road, a promise kept. It is impersonal and cosmic, and the gods do not make it — Varuṇa is its guardian rather than its author. As the tradition grew, dharma took over most of the work ṛta had done, which is why ṛta is everywhere in the oldest layer and almost absent from the later one."],
    ["ಋತ", "ಜಗತ್ತು ಯಾವ ಕ್ರಮದಿಂದ ನಡೆಯುತ್ತದೆ ಎಂದು ಋಗ್ವೇದ ಹೇಳುವ ಪದ — ಧರ್ಮದ ಪೂರ್ವಜ.||ವಸ್ತುಗಳು ಹೇಗೆ ಒಟ್ಟಾಗಿ ನಿಲ್ಲುತ್ತವೆ ಎಂಬುದಕ್ಕೆ ಋಗ್ವೇದದ ಪದವೇ ಋತ: ಋತುಗಳು ಮರಳುವುದು, ಸೂರ್ಯ ತನ್ನ ದಾರಿ ಬಿಡದಿರುವುದು, ಕೊಟ್ಟ ಮಾತು ಉಳಿಯುವುದು. ಇದು ನಿರ್ವೈಯಕ್ತಿಕ ಮತ್ತು ವಿಶ್ವವ್ಯಾಪಿ; ದೇವತೆಗಳು ಇದನ್ನು ಮಾಡಿದವರಲ್ಲ — ವರುಣ ಇದರ ಕರ್ತೃವಲ್ಲ, ಕಾವಲುಗಾರ. ಪರಂಪರೆ ಬೆಳೆದಂತೆ ಋತ ಮಾಡುತ್ತಿದ್ದ ಕೆಲಸವನ್ನು ಬಹುಪಾಲು ಧರ್ಮ ವಹಿಸಿಕೊಂಡಿತು — ಆದ್ದರಿಂದಲೇ ಅತಿ ಹಳೆಯ ಸ್ತರದಲ್ಲಿ ಋತ ಎಲ್ಲೆಡೆ ಇದೆ, ನಂತರದ್ದರಲ್ಲಿ ಬಹುತೇಕ ಇಲ್ಲ."],
    ["ऋत", "ऋग्वेद जिस क्रम से जगत् के चलने की बात कहता है — धर्म का पूर्वज।||वस्तुएँ किस प्रकार परस्पर बँधी रहती हैं, उसके लिए ऋग्वेद का शब्द ऋत है: ऋतुओं का लौटना, सूर्य का अपना मार्ग न छोड़ना, दिया गया वचन निभना। यह निर्वैयक्तिक और विश्वव्यापी है; देवता इसके रचयिता नहीं — वरुण इसका रक्षक है, कर्ता नहीं। परंपरा के विकास के साथ ऋत का अधिकांश काम धर्म ने ले लिया — इसीलिए प्राचीनतम परत में ऋत सर्वत्र है और बाद की परत में लगभग अनुपस्थित।"],
  ),
  ...t(
    "c-purusha-prakriti",
    ["Purusha and Prakriti", "Sāṅkhya's two: a witness that does nothing, and a nature that does everything.||Sāṅkhya accounts for the world with two principles and no god. Prakṛti is unconscious and active — matter, mind and every change in them. Puruṣa is conscious and inactive, a witness that sees and alters nothing. Everything that happens is prakṛti's doing; bondage is puruṣa mistaking itself for what it is watching. Yoga takes this metaphysics over almost whole, which is why the Yoga Sūtras talk about guṇas and about a self that only sees."],
    ["ಪುರುಷ ಮತ್ತು ಪ್ರಕೃತಿ", "ಸಾಂಖ್ಯದ ಎರಡು ತತ್ತ್ವಗಳು: ಏನನ್ನೂ ಮಾಡದ ಸಾಕ್ಷಿ, ಮತ್ತು ಎಲ್ಲವನ್ನೂ ಮಾಡುವ ಪ್ರಕೃತಿ.||ಸಾಂಖ್ಯ ಜಗತ್ತನ್ನು ಎರಡು ತತ್ತ್ವಗಳಿಂದ ವಿವರಿಸುತ್ತದೆ, ದೇವರಿಲ್ಲದೆ. ಪ್ರಕೃತಿ ಅಚೇತನ ಮತ್ತು ಕ್ರಿಯಾಶೀಲ — ಜಡ, ಮನಸ್ಸು ಮತ್ತು ಅವುಗಳಲ್ಲಿನ ಪ್ರತಿ ಬದಲಾವಣೆ. ಪುರುಷ ಚೇತನ ಮತ್ತು ನಿಷ್ಕ್ರಿಯ; ನೋಡುವ, ಏನನ್ನೂ ಬದಲಿಸದ ಸಾಕ್ಷಿ. ನಡೆಯುವುದೆಲ್ಲ ಪ್ರಕೃತಿಯ ಕೆಲಸ; ತಾನು ನೋಡುತ್ತಿರುವುದೇ ತಾನೆಂದು ಪುರುಷ ಭ್ರಮಿಸುವುದೇ ಬಂಧನ. ಯೋಗ ಈ ತತ್ತ್ವಶಾಸ್ತ್ರವನ್ನು ಬಹುತೇಕ ಪೂರ್ಣವಾಗಿ ಎತ್ತಿಕೊಳ್ಳುತ್ತದೆ — ಆದ್ದರಿಂದಲೇ ಯೋಗಸೂತ್ರಗಳು ಗುಣಗಳ ಬಗ್ಗೆ ಮತ್ತು ಕೇವಲ ನೋಡುವ ಆತ್ಮದ ಬಗ್ಗೆ ಮಾತನಾಡುತ್ತವೆ."],
    ["पुरुष और प्रकृति", "सांख्य के दो तत्त्व: एक साक्षी जो कुछ नहीं करता, और एक प्रकृति जो सब करती है।||सांख्य जगत् की व्याख्या दो तत्त्वों से करता है, बिना किसी ईश्वर के। प्रकृति अचेतन और क्रियाशील है — जड़, मन और उनमें होने वाला हर परिवर्तन। पुरुष चेतन और निष्क्रिय है; देखने वाला साक्षी, जो कुछ बदलता नहीं। जो कुछ होता है वह प्रकृति का किया है; बंधन यह है कि पुरुष जिसे देख रहा है उसी को स्वयं मान बैठता है। योग इस तत्त्वमीमांसा को लगभग पूरा अपना लेता है — इसीलिए योगसूत्र गुणों की और केवल देखने वाले आत्मा की बात करते हैं।"],
  ),
  ...t(
    "c-jiva",
    ["Jiva", "The self as it actually appears: embodied, acting, and travelling from birth to birth.||Jīva is what you would point at if asked where you are — a particular self, in a body, with a history and a store of consequences behind it. Every school agrees that the jīva is what transmigrates and what is eventually released. What they do not agree on is what it is: the same thing as Brahman under a misunderstanding, a real part of God, or a separate and permanently dependent being."],
    ["ಜೀವ", "ಆತ್ಮ ನಿಜವಾಗಿ ಕಾಣಿಸುವ ರೂಪ: ದೇಹಧಾರಿ, ಕರ್ಮ ಮಾಡುವ, ಜನ್ಮದಿಂದ ಜನ್ಮಕ್ಕೆ ಸಾಗುವ.||ನೀನು ಎಲ್ಲಿದ್ದೀಯೆ ಎಂದು ಕೇಳಿದರೆ ತೋರಿಸುವುದೇ ಜೀವ — ಒಂದು ದೇಹದಲ್ಲಿರುವ ನಿರ್ದಿಷ್ಟ ಆತ್ಮ, ತನ್ನದೇ ಇತಿಹಾಸ ಮತ್ತು ಹಿಂದಿನ ಕರ್ಮಫಲಗಳ ಸಂಗ್ರಹದೊಂದಿಗೆ. ಜೀವವೇ ಸಂಸಾರದಲ್ಲಿ ಸಾಗುವುದು ಮತ್ತು ಕೊನೆಗೆ ಮುಕ್ತವಾಗುವುದು ಎಂಬುದರಲ್ಲಿ ಎಲ್ಲ ಮತಗಳೂ ಒಪ್ಪುತ್ತವೆ. ಅದು ಏನು ಎಂಬುದರಲ್ಲಿ ಒಪ್ಪುವುದಿಲ್ಲ: ತಪ್ಪು ತಿಳಿವಳಿಕೆಯಡಿ ಬ್ರಹ್ಮವೇ ಆಗಿರುವುದೋ, ದೇವರ ನಿಜವಾದ ಅಂಶವೋ, ಅಥವಾ ಪ್ರತ್ಯೇಕ ಮತ್ತು ಸದಾ ಪರಾಧೀನ ವಸ್ತುವೋ."],
    ["जीव", "आत्मा का वह रूप जो वस्तुतः दिखता है: देहधारी, कर्मरत, और जन्म से जन्म तक चलता हुआ।||तुम कहाँ हो, यह पूछे जाने पर जिसकी ओर संकेत करोगे वही जीव है — एक देह में स्थित विशेष आत्मा, अपने इतिहास और पूर्व कर्मफलों के संचय सहित। जीव ही संसरण करता है और अंततः मुक्त होता है, इसमें सभी मत सहमत हैं। वह है क्या, इसमें नहीं: भ्रमवश ब्रह्म ही, ईश्वर का वास्तविक अंश, या पृथक् और सदा परतंत्र सत्ता।"],
  ),
  ...t(
    "c-avidya",
    ["Avidya", "Not ignorance of facts, but a structural mistake about what one is.||A person with avidyā is not uninformed. The mistake is more basic: taking what is seen for the seer, the body and its story for the self that is aware of them. Advaita calls avidyā beginningless, because you cannot point to when it started, but not eternal, because it ends — and what ends it is knowledge rather than effort, which is why the tradition treats the whole problem as one of seeing rather than of doing."],
    ["ಅವಿದ್ಯಾ", "ಸಂಗತಿಗಳ ಅಜ್ಞಾನವಲ್ಲ, ತಾನು ಏನೆಂಬುದರ ಬಗೆಗಿನ ಮೂಲಭೂತ ತಪ್ಪು.||ಅವಿದ್ಯೆ ಇರುವವನು ಮಾಹಿತಿ ಇಲ್ಲದವನಲ್ಲ. ತಪ್ಪು ಇನ್ನೂ ಆಳವಾದದ್ದು: ಕಾಣುವುದನ್ನೇ ಕಾಣುವವನೆಂದು, ದೇಹ ಮತ್ತು ಅದರ ಕಥೆಯನ್ನೇ ಅವನ್ನು ಅರಿಯುತ್ತಿರುವ ಆತ್ಮವೆಂದು ತೆಗೆದುಕೊಳ್ಳುವುದು. ಅದ್ವೈತ ಅವಿದ್ಯೆಯನ್ನು ಅನಾದಿ ಎನ್ನುತ್ತದೆ — ಅದು ಯಾವಾಗ ಆರಂಭವಾಯಿತೆಂದು ತೋರಿಸಲಾಗದು; ಆದರೆ ಅನಂತ ಎನ್ನುವುದಿಲ್ಲ — ಅದು ಮುಗಿಯುತ್ತದೆ. ಮುಗಿಸುವುದು ಪ್ರಯತ್ನವಲ್ಲ, ಜ್ಞಾನ; ಆದ್ದರಿಂದಲೇ ಪರಂಪರೆ ಈ ಇಡೀ ಸಮಸ್ಯೆಯನ್ನು ಮಾಡುವುದರ ಪ್ರಶ್ನೆಯಾಗಿ ಅಲ್ಲ, ಕಾಣುವುದರ ಪ್ರಶ್ನೆಯಾಗಿ ನೋಡುತ್ತದೆ."],
    ["अविद्या", "तथ्यों का अज्ञान नहीं, बल्कि स्वयं के विषय में एक संरचनात्मक भूल।||अविद्या वाला व्यक्ति अनभिज्ञ नहीं है। भूल इससे गहरी है: जो दृश्य है उसे द्रष्टा मान लेना, देह और उसकी कथा को वह आत्मा मान लेना जो उन्हें जानता है। अद्वैत अविद्या को अनादि कहता है, क्योंकि यह कब आरंभ हुई यह नहीं बताया जा सकता; पर अनंत नहीं, क्योंकि यह समाप्त होती है। उसे समाप्त करने वाला प्रयत्न नहीं, ज्ञान है — इसीलिए परंपरा इस पूरी समस्या को करने का नहीं, देखने का प्रश्न मानती है।"],
  ),
  ...t(
    "c-guna",
    ["Guna", "The three strands — clarity, drive and inertia — that everything made is woven from.||Sattva, rajas and tamas are not virtues and vices but constituents, and nothing is made of only one. A meal, an hour of the day, a mood and a person are each a particular mixture, and the mixture shifts. The Gītā uses the three to sort almost everything it discusses — food, giving, work, faith, even the way somebody renounces — and the point of the sorting is always that you can see which way a thing leans and need not be ruled by it."],
    ["ಗುಣ", "ಮಾಡಲ್ಪಟ್ಟ ಎಲ್ಲವೂ ಹೆಣೆಯಲ್ಪಟ್ಟಿರುವ ಮೂರು ಎಳೆಗಳು — ಪ್ರಕಾಶ, ಚಲನೆ ಮತ್ತು ಜಡತೆ.||ಸತ್ತ್ವ, ರಜಸ್ ಮತ್ತು ತಮಸ್ ಸದ್ಗುಣ-ದುರ್ಗುಣಗಳಲ್ಲ, ಘಟಕಗಳು; ಯಾವುದೂ ಒಂದರಿಂದಲೇ ಆಗಿಲ್ಲ. ಒಂದು ಊಟ, ದಿನದ ಒಂದು ಹೊತ್ತು, ಒಂದು ಮನಃಸ್ಥಿತಿ, ಒಬ್ಬ ವ್ಯಕ್ತಿ — ಪ್ರತಿಯೊಂದೂ ಒಂದು ನಿರ್ದಿಷ್ಟ ಮಿಶ್ರಣ, ಮತ್ತು ಮಿಶ್ರಣ ಬದಲಾಗುತ್ತಿರುತ್ತದೆ. ಗೀತೆ ತಾನು ಚರ್ಚಿಸುವ ಬಹುತೇಕ ಎಲ್ಲವನ್ನೂ ಈ ಮೂರರಿಂದ ವಿಂಗಡಿಸುತ್ತದೆ — ಆಹಾರ, ದಾನ, ಕೆಲಸ, ಶ್ರದ್ಧೆ, ತ್ಯಾಗದ ರೀತಿಯನ್ನೂ — ಮತ್ತು ವಿಂಗಡಣೆಯ ಉದ್ದೇಶ ಸದಾ ಒಂದೇ: ಯಾವುದು ಯಾವ ಕಡೆ ವಾಲುತ್ತಿದೆ ಎಂದು ಕಾಣಬಹುದು, ಅದರ ಅಧೀನರಾಗಬೇಕಿಲ್ಲ."],
    ["गुण", "तीन तंतु — प्रकाश, गति और जड़ता — जिनसे रचा हुआ सब कुछ बुना है।||सत्त्व, रजस् और तमस् सद्गुण-दुर्गुण नहीं, घटक हैं; कोई भी वस्तु किसी एक से नहीं बनी। एक भोजन, दिन की एक घड़ी, एक मनोदशा और एक व्यक्ति — हर एक एक विशेष मिश्रण है, और मिश्रण बदलता रहता है। गीता जिस भी विषय की चर्चा करती है उसे प्रायः इन्हीं तीन से छाँटती है — आहार, दान, कर्म, श्रद्धा, त्याग का ढंग तक — और छाँटने का प्रयोजन सदा यही है कि कौन-सी वस्तु किस ओर झुकी है यह दिख जाए, और उसके वश में रहना न पड़े।"],
  ),
  ...t(
    "c-karma",
    ["Karma", "Action, and the residue action leaves behind — not fate, but very nearly its opposite.||The word means simply what is done. The doctrine is that an act does not finish when it ends: it leaves a trace that ripens later, in this life or another. The tradition sorts the store three ways — what has accumulated, what has begun to ripen and is being lived through now, and what is being made at this moment. Only the third is open, and it is open completely, which is why karma is an argument for responsibility and not for resignation."],
    ["ಕರ್ಮ", "ಕ್ರಿಯೆ, ಮತ್ತು ಕ್ರಿಯೆ ಬಿಟ್ಟುಹೋಗುವ ಅವಶೇಷ — ವಿಧಿಯಲ್ಲ, ಬಹುತೇಕ ಅದರ ವಿರುದ್ಧ.||ಪದದ ಅರ್ಥ ಸರಳ: ಮಾಡಿದ್ದು. ಸಿದ್ಧಾಂತ ಹೀಗೆ: ಕ್ರಿಯೆ ಮುಗಿದಾಗ ಮುಗಿಯುವುದಿಲ್ಲ — ಅದು ಒಂದು ಗುರುತನ್ನು ಬಿಡುತ್ತದೆ, ಅದು ಮುಂದೆ, ಈ ಜನ್ಮದಲ್ಲೋ ಬೇರೊಂದರಲ್ಲೋ, ಪಕ್ವವಾಗುತ್ತದೆ. ಪರಂಪರೆ ಈ ಸಂಗ್ರಹವನ್ನು ಮೂರಾಗಿ ವಿಂಗಡಿಸುತ್ತದೆ — ಕೂಡಿಟ್ಟದ್ದು, ಪಕ್ವವಾಗಲು ಆರಂಭಿಸಿ ಈಗ ಅನುಭವಿಸುತ್ತಿರುವುದು, ಮತ್ತು ಈ ಕ್ಷಣದಲ್ಲಿ ಮಾಡುತ್ತಿರುವುದು. ಮೂರನೆಯದು ಮಾತ್ರ ತೆರೆದಿದೆ, ಮತ್ತು ಪೂರ್ಣವಾಗಿ ತೆರೆದಿದೆ — ಆದ್ದರಿಂದಲೇ ಕರ್ಮ ಶರಣಾಗತಿಗಲ್ಲ, ಹೊಣೆಗಾರಿಕೆಗೆ ಕೊಡುವ ವಾದ."],
    ["कर्म", "क्रिया, और क्रिया जो अवशेष छोड़ जाती है — भाग्य नहीं, लगभग उसका उल्टा।||शब्द का अर्थ सीधा है: जो किया गया। सिद्धांत यह है कि कर्म समाप्त होने पर समाप्त नहीं होता — वह एक संस्कार छोड़ता है जो आगे, इसी जन्म में या किसी और में, परिपक्व होता है। परंपरा इस संचय को तीन में बाँटती है — जो एकत्र है, जो फलने लगा है और अभी भोगा जा रहा है, और जो इस क्षण बनाया जा रहा है। केवल तीसरा खुला है, और पूरी तरह खुला है — इसीलिए कर्म हार मानने का नहीं, उत्तरदायित्व का तर्क है।"],
  ),
  ...t(
    "c-dharma",
    ["Dharma", "From the root meaning to hold: what keeps a thing, a person or a world from falling apart.||Dharma is not religion, and the tradition never gives one list of what it requires. There is what holds for anybody — truth, not injuring, restraint — and there is what holds for this person, in this position, at this hour, which may contradict it. The Mahābhārata, which spends its whole length on the question, concludes only that the path of dharma is subtle. A site that handed you a tidy definition would be flattering you."],
    ["ಧರ್ಮ", "ಹಿಡಿದಿಡುವುದು ಎಂಬ ಧಾತುವಿನಿಂದ: ಒಂದು ವಸ್ತು, ವ್ಯಕ್ತಿ ಅಥವಾ ಲೋಕ ಕುಸಿಯದಂತೆ ಹಿಡಿದಿಡುವುದು.||ಧರ್ಮ ಎಂದರೆ ರಿಲಿಜನ್ ಅಲ್ಲ, ಮತ್ತು ಅದು ಏನನ್ನು ಕೇಳುತ್ತದೆ ಎಂಬುದಕ್ಕೆ ಪರಂಪರೆ ಎಂದೂ ಒಂದೇ ಪಟ್ಟಿ ಕೊಡುವುದಿಲ್ಲ. ಎಲ್ಲರಿಗೂ ಅನ್ವಯಿಸುವುದಿದೆ — ಸತ್ಯ, ಅಹಿಂಸೆ, ಸಂಯಮ; ಮತ್ತು ಈ ವ್ಯಕ್ತಿಗೆ, ಈ ಸ್ಥಾನದಲ್ಲಿ, ಈ ಹೊತ್ತಿನಲ್ಲಿ ಅನ್ವಯಿಸುವುದಿದೆ — ಅದು ಮೊದಲನೆಯದಕ್ಕೆ ವಿರುದ್ಧವಾಗಿರಬಹುದು. ಈ ಪ್ರಶ್ನೆಯಲ್ಲೇ ತನ್ನ ಇಡೀ ಉದ್ದವನ್ನು ಕಳೆಯುವ ಮಹಾಭಾರತ ತಲುಪುವ ತೀರ್ಮಾನ ಇಷ್ಟೇ: ಧರ್ಮದ ಗತಿ ಸೂಕ್ಷ್ಮ. ಅಚ್ಚುಕಟ್ಟಾದ ವ್ಯಾಖ್ಯೆ ಕೊಡುವ ತಾಣ ನಿಮ್ಮನ್ನು ಓಲೈಸುತ್ತಿರುತ್ತದೆ."],
    ["धर्म", "धारण करने वाली धातु से: जो किसी वस्तु, व्यक्ति या लोक को बिखरने से रोके।||धर्म का अर्थ रिलिजन नहीं, और वह क्या माँगता है इसकी एक सूची परंपरा कभी नहीं देती। एक वह है जो सब पर लागू होता है — सत्य, अहिंसा, संयम; और एक वह जो इस व्यक्ति पर, इस स्थिति में, इस घड़ी लागू होता है, और वह पहले के विरुद्ध भी हो सकता है। महाभारत, जो अपनी पूरी लंबाई इसी प्रश्न पर लगाता है, केवल इतना निष्कर्ष देता है कि धर्म की गति सूक्ष्म है। जो साइट आपको एक सुघड़ परिभाषा थमा दे, वह आपकी चापलूसी कर रही है।"],
  ),
  ...t(
    "c-samsara",
    ["Samsara", "The round of birth, death and birth again — a condition, not a place.||The word means running together, or going round. Saṃsāra is not a realm you are in and could leave by travelling; it is the whole business of being a self that acts, reaps and acts again. Its mark is repetition, and the tradition's complaint against it is not that it is painful — much of it is pleasant — but that it does not go anywhere."],
    ["ಸಂಸಾರ", "ಹುಟ್ಟು, ಸಾವು, ಮತ್ತೆ ಹುಟ್ಟು ಎಂಬ ಸುತ್ತು — ಒಂದು ಸ್ಥಿತಿ, ಸ್ಥಳವಲ್ಲ.||ಪದದ ಅರ್ಥ ಒಟ್ಟಿಗೆ ಹರಿಯುವುದು, ಅಥವಾ ಸುತ್ತು ಹಾಕುವುದು. ಸಂಸಾರ ಎಂದರೆ ನೀವು ಇರುವ ಮತ್ತು ಪ್ರಯಾಣಿಸಿ ಬಿಟ್ಟುಹೋಗಬಹುದಾದ ಲೋಕವಲ್ಲ; ಕರ್ಮ ಮಾಡಿ, ಫಲ ಪಡೆದು, ಮತ್ತೆ ಕರ್ಮ ಮಾಡುವ ಆತ್ಮವಾಗಿರುವ ಇಡೀ ವ್ಯವಹಾರ. ಅದರ ಗುರುತು ಪುನರಾವೃತ್ತಿ; ಮತ್ತು ಪರಂಪರೆಯ ದೂರು ಅದು ದುಃಖಕರ ಎಂಬುದಲ್ಲ — ಬಹುಪಾಲು ಅದು ಸುಖಕರವೇ — ಅದು ಎಲ್ಲಿಗೂ ಹೋಗುವುದಿಲ್ಲ ಎಂಬುದು."],
    ["संसार", "जन्म, मृत्यु और पुनः जन्म का चक्र — एक स्थिति, स्थान नहीं।||शब्द का अर्थ है साथ बहना, या चक्कर काटना। संसार कोई लोक नहीं जिसमें आप हैं और यात्रा करके छोड़ सकें; वह कर्म करने, फल भोगने और फिर कर्म करने वाले आत्मा होने का पूरा व्यापार है। उसका चिह्न पुनरावृत्ति है, और परंपरा की शिकायत यह नहीं कि वह दुःखद है — उसका बहुत भाग सुखद ही है — बल्कि यह कि वह कहीं पहुँचता नहीं।"],
  ),
  ...t(
    "c-punarjanma",
    ["Punarjanma", "Being born again — and a doctrine the oldest layer of the Veda does not yet clearly hold.||The Gītā's image is the worn garment changed for a new one, and that is how most people meet the idea. What is less often said is that it arrives late: the Ṛgveda's hymns are concerned with this life and with the fathers, and a clear teaching of rebirth appears first in the Upaniṣads, with the two roads the dead are said to take. Watching a doctrine appear is a useful thing to be able to do, and this is the clearest case of it in the tradition."],
    ["ಪುನರ್ಜನ್ಮ", "ಮತ್ತೆ ಹುಟ್ಟುವುದು — ಮತ್ತು ವೇದದ ಅತಿ ಹಳೆಯ ಸ್ತರ ಇನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ ಹೇಳದ ಸಿದ್ಧಾಂತ.||ಗೀತೆಯ ಚಿತ್ರ ಹಳೆಯ ಬಟ್ಟೆ ಬಿಟ್ಟು ಹೊಸದನ್ನು ತೊಡುವುದು, ಮತ್ತು ಬಹುತೇಕ ಜನರಿಗೆ ಈ ಕಲ್ಪನೆ ಸಿಗುವುದೇ ಹಾಗೆ. ಕಡಿಮೆ ಹೇಳುವ ಸಂಗತಿ: ಇದು ತಡವಾಗಿ ಬರುತ್ತದೆ. ಋಗ್ವೇದದ ಸೂಕ್ತಗಳು ಈ ಜನ್ಮದ ಬಗ್ಗೆ ಮತ್ತು ಪಿತೃಗಳ ಬಗ್ಗೆ ಚಿಂತಿಸುತ್ತವೆ; ಪುನರ್ಜನ್ಮದ ಸ್ಪಷ್ಟ ಬೋಧನೆ ಮೊದಲು ಕಾಣಿಸುವುದು ಉಪನಿಷತ್ತುಗಳಲ್ಲಿ, ಸತ್ತವರು ಹಿಡಿಯುವ ಎರಡು ದಾರಿಗಳ ಜೊತೆಗೆ. ಒಂದು ಸಿದ್ಧಾಂತ ಹುಟ್ಟುವುದನ್ನು ನೋಡಲಾಗುವುದು ಉಪಯುಕ್ತ, ಮತ್ತು ಪರಂಪರೆಯಲ್ಲಿ ಅದರ ಅತಿ ಸ್ಪಷ್ಟ ಉದಾಹರಣೆ ಇದೇ."],
    ["पुनर्जन्म", "फिर से जन्म लेना — और एक सिद्धांत जिसे वेद की प्राचीनतम परत अभी स्पष्ट रूप से नहीं मानती।||गीता का रूपक पुराना वस्त्र छोड़कर नया पहनना है, और अधिकांश लोगों को यह विचार इसी रूप में मिलता है। कम कहा जाने वाला तथ्य यह है कि यह देर से आता है: ऋग्वेद के सूक्त इसी जीवन की और पितरों की चिंता करते हैं; पुनर्जन्म का स्पष्ट उपदेश पहले उपनिषदों में मिलता है, मृतकों के दो मार्गों के साथ। किसी सिद्धांत को उभरते देख पाना उपयोगी है, और परंपरा में इसका सबसे स्पष्ट उदाहरण यही है।"],
  ),
  ...t(
    "c-purushartha",
    ["Purushartha", "The four things a human life is for: dharma, artha, kāma and mokṣa.||Wealth and desire are on the list. That is the part worth noticing, because a tradition with a reputation for renunciation might be expected to leave them off, and instead it names them as proper human ends. The ordering is not a ranking of worth but of constraint: pursue artha and kāma, but within dharma; and mokṣa is last because it is what the other three cannot finally give."],
    ["ಪುರುಷಾರ್ಥ", "ಮಾನವ ಜೀವನ ಯಾವುದಕ್ಕಾಗಿ ಎಂಬ ನಾಲ್ಕು: ಧರ್ಮ, ಅರ್ಥ, ಕಾಮ ಮತ್ತು ಮೋಕ್ಷ.||ಸಂಪತ್ತು ಮತ್ತು ಬಯಕೆ ಪಟ್ಟಿಯಲ್ಲಿವೆ. ಗಮನಿಸಬೇಕಾದ ಭಾಗ ಅದೇ: ವೈರಾಗ್ಯದ ಖ್ಯಾತಿ ಇರುವ ಪರಂಪರೆ ಅವನ್ನು ಬಿಟ್ಟುಬಿಡಬಹುದಿತ್ತು, ಆದರೆ ಅವನ್ನು ಸರಿಯಾದ ಮಾನವ ಗುರಿಗಳೆಂದು ಹೆಸರಿಸುತ್ತದೆ. ಕ್ರಮ ಯೋಗ್ಯತೆಯ ಶ್ರೇಣಿಯಲ್ಲ, ಕಟ್ಟಿನ ಶ್ರೇಣಿ: ಅರ್ಥ ಮತ್ತು ಕಾಮವನ್ನು ಸಾಧಿಸಿ, ಆದರೆ ಧರ್ಮದ ಒಳಗೆ; ಮತ್ತು ಮೋಕ್ಷ ಕೊನೆಯಲ್ಲಿದೆ ಏಕೆಂದರೆ ಉಳಿದ ಮೂರು ಕೊನೆಗೂ ಕೊಡಲಾಗದ್ದು ಅದೇ."],
    ["पुरुषार्थ", "मानव जीवन किसके लिए है, वे चार: धर्म, अर्थ, काम और मोक्ष।||धन और इच्छा सूची में हैं। ध्यान देने योग्य भाग यही है, क्योंकि वैराग्य के लिए प्रसिद्ध परंपरा से उन्हें छोड़ देने की अपेक्षा की जा सकती थी, और वह उन्हें उचित मानवीय लक्ष्य कहकर गिनाती है। क्रम योग्यता का नहीं, मर्यादा का है: अर्थ और काम का अनुसरण करो, पर धर्म के भीतर; और मोक्ष अंत में है क्योंकि शेष तीन अंततः जो नहीं दे सकते, वही वह है।"],
  ),
  ...t(
    "c-ashrama",
    ["Ashrama", "Four stages of a life: student, householder, withdrawal and renunciation.||The scheme gives each stage its own duties and its own permissions, and it is deliberately ordered so that the householder, who supports everybody else, sits at the centre rather than at the bottom. It was always more a norm than a description, and today three of the four are rare: most people pass from student to householder and remain there. Saying so is more useful than describing a pattern that almost nobody follows."],
    ["ಆಶ್ರಮ", "ಬದುಕಿನ ನಾಲ್ಕು ಹಂತಗಳು: ಬ್ರಹ್ಮಚರ್ಯ, ಗೃಹಸ್ಥ, ವಾನಪ್ರಸ್ಥ ಮತ್ತು ಸನ್ಯಾಸ.||ಈ ಯೋಜನೆ ಪ್ರತಿ ಹಂತಕ್ಕೂ ತನ್ನದೇ ಕರ್ತವ್ಯ ಮತ್ತು ತನ್ನದೇ ಅನುಮತಿಗಳನ್ನು ಕೊಡುತ್ತದೆ, ಮತ್ತು ಉಳಿದೆಲ್ಲರನ್ನೂ ಪೋಷಿಸುವ ಗೃಹಸ್ಥನು ಕೆಳಗಲ್ಲ, ಮಧ್ಯದಲ್ಲಿ ಇರುವಂತೆ ಬೇಕೆಂದೇ ಜೋಡಿಸಿದೆ. ಇದು ಸದಾ ವರ್ಣನೆಗಿಂತ ಆದರ್ಶವೇ ಆಗಿತ್ತು, ಮತ್ತು ಇಂದು ನಾಲ್ಕರಲ್ಲಿ ಮೂರು ಅಪರೂಪ: ಬಹುತೇಕರು ವಿದ್ಯಾರ್ಥಿಯಿಂದ ಗೃಹಸ್ಥರಾಗಿ ಅಲ್ಲೇ ಉಳಿಯುತ್ತಾರೆ. ಯಾರೂ ಅನುಸರಿಸದ ಮಾದರಿಯನ್ನು ವರ್ಣಿಸುವುದಕ್ಕಿಂತ ಇದನ್ನು ಹೇಳುವುದು ಹೆಚ್ಚು ಉಪಯುಕ್ತ."],
    ["आश्रम", "जीवन के चार चरण: ब्रह्मचर्य, गृहस्थ, वानप्रस्थ और संन्यास।||यह व्यवस्था प्रत्येक चरण को उसके अपने कर्तव्य और अपनी छूटें देती है, और जान-बूझकर इस तरह क्रमित है कि गृहस्थ, जो शेष सबका भरण करता है, नीचे नहीं, केंद्र में बैठे। यह सदा वर्णन से अधिक आदर्श रहा, और आज चार में तीन दुर्लभ हैं: अधिकांश लोग विद्यार्थी से गृहस्थ होते हैं और वहीं रह जाते हैं। जिस ढाँचे का पालन लगभग कोई नहीं करता उसका वर्णन करने से यह कहना अधिक उपयोगी है।"],
  ),
  ...t(
    "c-rina",
    ["Rina", "The three debts a person is held to be born already owing.||To the ṛṣis, repaid by study; to the devas, by offering; to the ancestors, by continuing the line. The striking thing is the framing: these are not merits to be earned but debts already incurred, so the ordinary duties of a life are discharge rather than achievement. The śrāddha rites on this site are the third debt being paid, and the texts are explicit that it is owed rather than given."],
    ["ಋಣ", "ಹುಟ್ಟುವಾಗಲೇ ಹೊತ್ತು ಬರುವ ಮೂರು ಋಣಗಳು.||ಋಷಿಗಳಿಗೆ — ಅಧ್ಯಯನದಿಂದ ತೀರಿಸುವುದು; ದೇವತೆಗಳಿಗೆ — ಯಜ್ಞದಿಂದ; ಪಿತೃಗಳಿಗೆ — ವಂಶ ಮುಂದುವರಿಸುವುದರಿಂದ. ಗಮನ ಸೆಳೆಯುವುದು ಈ ಚೌಕಟ್ಟು: ಇವು ಗಳಿಸಬೇಕಾದ ಪುಣ್ಯಗಳಲ್ಲ, ಈಗಾಗಲೇ ಹೊತ್ತ ಸಾಲಗಳು — ಆದ್ದರಿಂದ ಬದುಕಿನ ಸಾಮಾನ್ಯ ಕರ್ತವ್ಯಗಳು ಸಾಧನೆಯಲ್ಲ, ತೀರಿಸುವಿಕೆ. ಈ ತಾಣದ ಶ್ರಾದ್ಧ ಕರ್ಮಗಳು ಮೂರನೇ ಋಣವನ್ನು ತೀರಿಸುವುದೇ, ಮತ್ತು ಅದು ಕೊಡುವುದಲ್ಲ ಸಲ್ಲಬೇಕಾದದ್ದು ಎಂದು ಗ್ರಂಥಗಳು ಸ್ಪಷ್ಟವಾಗಿ ಹೇಳುತ್ತವೆ."],
    ["ऋण", "जन्म के साथ ही उठाए गए तीन ऋण।||ऋषियों का — अध्ययन से चुकाया जाने वाला; देवों का — यज्ञ से; पितरों का — वंश चलाने से। ध्यान खींचने वाली बात यह रूपरेखा है: ये अर्जित किए जाने वाले पुण्य नहीं, पहले से लिए गए ऋण हैं — इसलिए जीवन के सामान्य कर्तव्य उपलब्धि नहीं, चुकौती हैं। इस साइट के श्राद्ध कर्म तीसरा ऋण चुकाना ही हैं, और ग्रंथ स्पष्ट हैं कि वह दिया नहीं, देय है।"],
  ),
  ...t(
    "c-vairagya",
    ["Vairagya", "Dispassion — which is not the same thing as dislike.||Vairāgya is usually translated as detachment and then misread as coldness. What the texts describe is narrower: the colour going out of a thing you had wanted, so that it stops pulling. Aversion is as much a pull as desire and the tradition treats both as bondage; what it asks for is the absence of both. It is listed beside viveka as a qualification for enquiry, because a mind still being tugged cannot look steadily at anything."],
    ["ವೈರಾಗ್ಯ", "ವಿರಕ್ತಿ — ಅದು ದ್ವೇಷವಲ್ಲ.||ವೈರಾಗ್ಯವನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ಅನಾಸಕ್ತಿ ಎಂದು ಅನುವಾದಿಸಿ ನಂತರ ನಿರ್ಲಿಪ್ತತೆ ಎಂದು ತಪ್ಪಾಗಿ ಓದಲಾಗುತ್ತದೆ. ಗ್ರಂಥಗಳು ವರ್ಣಿಸುವುದು ಹೆಚ್ಚು ನಿರ್ದಿಷ್ಟ: ಬಯಸಿದ್ದ ವಸ್ತುವಿನಿಂದ ಬಣ್ಣ ಹೋಗುವುದು, ಅದು ಎಳೆಯುವುದು ನಿಲ್ಲುವುದು. ದ್ವೇಷವೂ ಬಯಕೆಯಷ್ಟೇ ಎಳೆತ, ಮತ್ತು ಪರಂಪರೆ ಎರಡನ್ನೂ ಬಂಧನವೆಂದೇ ಪರಿಗಣಿಸುತ್ತದೆ; ಕೇಳುವುದು ಎರಡರ ಅನುಪಸ್ಥಿತಿಯನ್ನು. ವಿಚಾರಕ್ಕೆ ಬೇಕಾದ ಅರ್ಹತೆಯಾಗಿ ಇದನ್ನು ವಿವೇಕದ ಪಕ್ಕದಲ್ಲಿ ಪಟ್ಟಿ ಮಾಡಲಾಗಿದೆ — ಎಳೆಯಲ್ಪಡುತ್ತಿರುವ ಮನಸ್ಸು ಯಾವುದನ್ನೂ ಸ್ಥಿರವಾಗಿ ನೋಡಲಾರದು."],
    ["वैराग्य", "विरक्ति — जो अरुचि नहीं है।||वैराग्य का अनुवाद प्रायः अनासक्ति किया जाता है और फिर उसे निर्ममता समझ लिया जाता है। ग्रंथ जो वर्णन करते हैं वह अधिक सीमित है: जिस वस्तु को चाहा था उससे रंग उतर जाना, जिससे वह खींचना बंद कर दे। द्वेष भी उतना ही खिंचाव है जितनी इच्छा, और परंपरा दोनों को बंधन मानती है; वह दोनों की अनुपस्थिति माँगती है। विचार की योग्यता के रूप में इसे विवेक के साथ गिनाया जाता है, क्योंकि जो मन अब भी खिंच रहा हो वह किसी वस्तु को स्थिर होकर नहीं देख सकता।"],
  ),
  ...t(
    "c-bhakti",
    ["Bhakti", "From a root meaning to share: devotion understood as participation rather than as feeling.||The word is built from bhaj, to partake of or belong to, and that is nearer its sense than the English \"devotion\": what is described is a relation, not an emotion. The tradition counts nine ways of entering it — among them listening, repeating the name, serving, and simply remembering — which is why bhakti has never required literacy, leisure or a priest, and why the songs on this site exist at all."],
    ["ಭಕ್ತಿ", "ಹಂಚಿಕೊಳ್ಳುವುದು ಎಂಬ ಧಾತುವಿನಿಂದ: ಭಾವನೆಯಾಗಿ ಅಲ್ಲ, ಪಾಲ್ಗೊಳ್ಳುವಿಕೆಯಾಗಿ ಅರ್ಥೈಸಿದ ಭಕ್ತಿ.||ಈ ಪದ ಭಜ್ ಎಂಬ ಧಾತುವಿನಿಂದ ಬಂದದ್ದು — ಪಾಲು ಪಡೆಯುವುದು, ಸೇರಿರುವುದು; ಇಂಗ್ಲಿಷಿನ 'ಡಿವೋಶನ್'ಗಿಂತ ಇದೇ ಹತ್ತಿರ: ವರ್ಣಿಸಲ್ಪಡುವುದು ಒಂದು ಸಂಬಂಧ, ಭಾವನೆಯಲ್ಲ. ಪರಂಪರೆ ಅದರಲ್ಲಿ ಪ್ರವೇಶಿಸುವ ಒಂಬತ್ತು ದಾರಿಗಳನ್ನು ಎಣಿಸುತ್ತದೆ — ಕೇಳುವುದು, ನಾಮಸ್ಮರಣೆ, ಸೇವೆ, ಮತ್ತು ಕೇವಲ ನೆನೆಯುವುದು ಅವುಗಳಲ್ಲಿ. ಆದ್ದರಿಂದಲೇ ಭಕ್ತಿಗೆ ಅಕ್ಷರಜ್ಞಾನವೂ ಬೇಕಿಲ್ಲ, ಪುರುಸೊತ್ತೂ ಬೇಕಿಲ್ಲ, ಪುರೋಹಿತನೂ ಬೇಕಿಲ್ಲ — ಮತ್ತು ಈ ತಾಣದ ಹಾಡುಗಳು ಇರುವುದೇ ಅದಕ್ಕೆ."],
    ["भक्ति", "साझा करने वाली धातु से: भावना नहीं, सहभागिता के रूप में समझी गई भक्ति।||यह शब्द भज् धातु से बना है — भाग लेना, किसी का होना; अंग्रेज़ी के 'डिवोशन' से यही अर्थ निकट है: जिसका वर्णन है वह एक संबंध है, कोई भावावेश नहीं। परंपरा उसमें प्रवेश के नौ मार्ग गिनाती है — सुनना, नाम लेना, सेवा, और केवल स्मरण उनमें हैं। इसीलिए भक्ति को न साक्षरता चाहिए, न अवकाश, न पुरोहित — और इसीलिए इस साइट के गीत हैं।"],
  ),
];

// ── where Vedānta divides ───────────────────────────────────
//
//  Six terms on which Śaṅkara, Rāmānuja and Madhva do not merely
//  emphasise different things but contradict each other. All three
//  wrote commentaries on the same Upaniṣads, the same Gītā and the
//  same Brahma Sūtras, and reached incompatible conclusions; the site
//  holds all three in /acharyas and should not quietly pick one here.
//
//  Each school is given in its own terms, in one sentence, in the
//  order the commentaries were written.

export interface SchoolReadings {
  advaita: Record<Locale, string>;
  vishishtadvaita: Record<Locale, string>;
  dvaita: Record<Locale, string>;
}

const r = (
  aEn: string, aKn: string, aHi: string,
  vEn: string, vKn: string, vHi: string,
  dEn: string, dKn: string, dHi: string,
): SchoolReadings => ({
  advaita: { en: aEn, kn: aKn, hi: aHi },
  vishishtadvaita: { en: vEn, kn: vKn, hi: vHi },
  dvaita: { en: dEn, kn: dKn, hi: dHi },
});

export const SCHOOLS: Record<string, SchoolReadings> = {
  brahman: r(
    "Brahman without attributes is the whole truth; attributes belong to a lower, provisional description.",
    "ನಿರ್ಗುಣ ಬ್ರಹ್ಮವೇ ಪೂರ್ಣ ಸತ್ಯ; ಗುಣಗಳು ಕೆಳಹಂತದ, ತಾತ್ಕಾಲಿಕ ವರ್ಣನೆಗೆ ಸೇರಿದವು.",
    "निर्गुण ब्रह्म ही पूर्ण सत्य है; गुण एक निम्नतर, व्यावहारिक वर्णन के हैं।",
    "Brahman has attributes necessarily, and the selves and the world are its body — real, and really dependent on it.",
    "ಬ್ರಹ್ಮಕ್ಕೆ ಗುಣಗಳು ಅನಿವಾರ್ಯ; ಜೀವರು ಮತ್ತು ಜಗತ್ತು ಅದರ ಶರೀರ — ಸತ್ಯ, ಮತ್ತು ನಿಜವಾಗಿಯೇ ಅದರ ಮೇಲೆ ಅವಲಂಬಿತ.",
    "ब्रह्म सगुण ही है, और जीव तथा जगत् उसका शरीर हैं — सत्य, और वस्तुतः उस पर आश्रित।",
    "Brahman is Viṣṇu, a person with infinite qualities, and is for ever distinct from both selves and matter.",
    "ಬ್ರಹ್ಮವೆಂದರೆ ವಿಷ್ಣು — ಅನಂತ ಗುಣಗಳುಳ್ಳ ವ್ಯಕ್ತಿ; ಜೀವರಿಂದಲೂ ಜಡದಿಂದಲೂ ಸದಾ ಭಿನ್ನ.",
    "ब्रह्म विष्णु हैं — अनंत गुणों वाला व्यक्ति; जीवों और जड़ दोनों से सदा भिन्न।",
  ),
  atman: r(
    "The Self is Brahman, without remainder. The difference you perceive is the mistake.",
    "ಆತ್ಮವೇ ಬ್ರಹ್ಮ, ಉಳಿಕೆಯಿಲ್ಲದೆ. ನೀವು ಕಾಣುವ ಭೇದವೇ ತಪ್ಪು.",
    "आत्मा ही ब्रह्म है, बिना किसी शेष के। जो भेद दिखता है वही भूल है।",
    "The Self is a real mode of Brahman — not identical with it, and not separable from it either.",
    "ಆತ್ಮವು ಬ್ರಹ್ಮನ ನಿಜವಾದ ಪ್ರಕಾರ — ಅದರೊಡನೆ ಅಭಿನ್ನವೂ ಅಲ್ಲ, ಅದರಿಂದ ಬೇರ್ಪಡಿಸಬಹುದಾದದ್ದೂ ಅಲ್ಲ.",
    "आत्मा ब्रह्म का वास्तविक प्रकार है — न उससे अभिन्न, न उससे पृथक् किया जा सकने वाला।",
    "The Self is a distinct being, one among many, each different from every other and from God.",
    "ಆತ್ಮವು ಪ್ರತ್ಯೇಕ ವಸ್ತು, ಅನೇಕರಲ್ಲಿ ಒಂದು; ಪ್ರತಿಯೊಂದೂ ಉಳಿದೆಲ್ಲದರಿಂದಲೂ ದೇವರಿಂದಲೂ ಭಿನ್ನ.",
    "आत्मा एक पृथक् सत्ता है, अनेकों में एक; प्रत्येक शेष सबसे और ईश्वर से भिन्न।",
  ),
  maya: r(
    "Māyā is the beginningless power under which the one appears as many; the appearance is not finally real.",
    "ಮಾಯೆ ಏಕವು ಅನೇಕವಾಗಿ ತೋರುವಂತೆ ಮಾಡುವ ಅನಾದಿ ಶಕ್ತಿ; ಆ ತೋರಿಕೆ ಕೊನೆಗೆ ಸತ್ಯವಲ್ಲ.",
    "माया वह अनादि शक्ति है जिससे एक अनेक प्रतीत होता है; वह प्रतीति अंततः सत्य नहीं।",
    "Māyā is God's real creative power. What it produces is genuinely there, not a trick of perception.",
    "ಮಾಯೆ ದೇವರ ನಿಜವಾದ ಸೃಜನಶಕ್ತಿ. ಅದು ಉಂಟುಮಾಡುವುದು ನಿಜವಾಗಿಯೇ ಇದೆ, ಗ್ರಹಿಕೆಯ ಮೋಸವಲ್ಲ.",
    "माया ईश्वर की वास्तविक सृजन-शक्ति है। जो वह उत्पन्न करती है वह वस्तुतः है, कोई दृष्टि-भ्रम नहीं।",
    "The world is simply real and dependent. Calling it an appearance is the error being corrected.",
    "ಜಗತ್ತು ಸರಳವಾಗಿ ಸತ್ಯ ಮತ್ತು ಪರಾಧೀನ. ಅದನ್ನು ತೋರಿಕೆ ಎನ್ನುವುದೇ ಸರಿಪಡಿಸಬೇಕಾದ ತಪ್ಪು.",
    "जगत् सीधे-सीधे सत्य और परतंत्र है। उसे प्रतीति कहना ही वह भूल है जिसका निराकरण किया जा रहा है।",
  ),
  jiva: r(
    "The jīva is Brahman itself, appearing limited because of a misidentification that knowledge removes.",
    "ಜೀವವು ಬ್ರಹ್ಮವೇ; ಜ್ಞಾನದಿಂದ ನೀಗುವ ತಪ್ಪು ತಾದಾತ್ಮ್ಯದಿಂದಾಗಿ ಸೀಮಿತವಾಗಿ ತೋರುತ್ತದೆ.",
    "जीव ब्रह्म ही है; जिस मिथ्या तादात्म्य को ज्ञान मिटा देता है, उसी के कारण वह सीमित प्रतीत होता है।",
    "The jīva is an eternally real part of Brahman, infinitesimal and never dissolved into it.",
    "ಜೀವವು ಬ್ರಹ್ಮನ ಶಾಶ್ವತ ಸತ್ಯವಾದ ಅಂಶ — ಅಣುಪ್ರಮಾಣ, ಮತ್ತು ಎಂದಿಗೂ ಅದರಲ್ಲಿ ಲೀನವಾಗದ್ದು.",
    "जीव ब्रह्म का नित्य वास्तविक अंश है — अणुमात्र, और कभी उसमें विलीन न होने वाला।",
    "Every jīva is eternally distinct, and they are not even alike: the tradition grades them.",
    "ಪ್ರತಿ ಜೀವವೂ ಸದಾ ಭಿನ್ನ; ಅವು ಪರಸ್ಪರ ಸಮಾನವೂ ಅಲ್ಲ — ಪರಂಪರೆ ಅವುಗಳಲ್ಲಿ ತಾರತಮ್ಯ ಹೇಳುತ್ತದೆ.",
    "प्रत्येक जीव सदा भिन्न है; वे परस्पर समान भी नहीं — परंपरा उनमें तारतम्य मानती है।",
  ),
  ishvara: r(
    "Īśvara is Brahman seen through māyā — true at the level the world is true, and not the last word.",
    "ಈಶ್ವರನೆಂದರೆ ಮಾಯೆಯ ಮೂಲಕ ಕಂಡ ಬ್ರಹ್ಮ — ಜಗತ್ತು ಸತ್ಯವಾಗಿರುವ ಮಟ್ಟದಲ್ಲಿ ಸತ್ಯ, ಆದರೆ ಕೊನೆಯ ಮಾತಲ್ಲ.",
    "ईश्वर माया के माध्यम से देखा गया ब्रह्म है — जिस स्तर पर जगत् सत्य है उसी स्तर पर सत्य, अंतिम वचन नहीं।",
    "Īśvara is the highest reality, and approaching him by surrender is the way, not a lower way.",
    "ಈಶ್ವರನೇ ಪರಮ ಸತ್ಯ; ಶರಣಾಗತಿಯಿಂದ ಅವನನ್ನು ಸೇರುವುದೇ ಮಾರ್ಗ, ಕೆಳಮಾರ್ಗವಲ್ಲ.",
    "ईश्वर ही परम सत्य है; शरणागति से उस तक पहुँचना ही मार्ग है, कोई निम्न मार्ग नहीं।",
    "Īśvara is independent and everything else is dependent; that difference is the fundamental fact.",
    "ಈಶ್ವರ ಸ್ವತಂತ್ರ, ಉಳಿದೆಲ್ಲವೂ ಪರತಂತ್ರ; ಆ ಭೇದವೇ ಮೂಲಭೂತ ಸತ್ಯ.",
    "ईश्वर स्वतंत्र है और शेष सब परतंत्र; वही भेद मूल तथ्य है।",
  ),
  moksha: r(
    "Liberation is recognising an identity that was always the case; nothing is gained and nowhere is reached.",
    "ಮೋಕ್ಷವೆಂದರೆ ಸದಾ ಇದ್ದ ಅಭೇದವನ್ನು ಅರಿಯುವುದು; ಏನೂ ಸಿಗುವುದಿಲ್ಲ, ಎಲ್ಲಿಗೂ ತಲುಪುವುದಿಲ್ಲ.",
    "मोक्ष उस अभेद की प्रत्यभिज्ञा है जो सदा से था; न कुछ प्राप्त होता है, न कहीं पहुँचा जाता है।",
    "Liberation is reaching God and serving him for ever, with the self's own identity kept.",
    "ಮೋಕ್ಷವೆಂದರೆ ದೇವರನ್ನು ಸೇರಿ ಸದಾ ಸೇವಿಸುವುದು — ಜೀವದ ತನ್ನತನ ಉಳಿದುಕೊಂಡೇ.",
    "मोक्ष ईश्वर तक पहुँचकर सदा उसकी सेवा करना है — जीव की अपनी पहचान बनी रहते हुए।",
    "Liberation is release into bliss, but in degrees: the released are not all equal.",
    "ಮೋಕ್ಷವೆಂದರೆ ಆನಂದಕ್ಕೆ ಬಿಡುಗಡೆ, ಆದರೆ ತಾರತಮ್ಯದಿಂದ: ಮುಕ್ತರೆಲ್ಲರೂ ಸಮಾನರಲ್ಲ.",
    "मोक्ष आनंद में मुक्ति है, पर तारतम्य सहित: सभी मुक्त समान नहीं।",
  ),
};

/** Where a term is chiefly set out, so a reader can go and look. */
export const SOURCE_TEXTS: Record<string, Record<Locale, string>> = {
  brahman: { en: "The Upaniṣads throughout, and the Brahma Sūtras", kn: "ಉಪನಿಷತ್ತುಗಳಲ್ಲಿ ಎಲ್ಲೆಡೆ, ಮತ್ತು ಬ್ರಹ್ಮಸೂತ್ರಗಳು", hi: "संपूर्ण उपनिषद्, और ब्रह्मसूत्र" },
  atman: { en: "Chāndogya and Bṛhadāraṇyaka Upaniṣads", kn: "ಛಾಂದೋಗ್ಯ ಮತ್ತು ಬೃಹದಾರಣ್ಯಕ ಉಪನಿಷತ್ತುಗಳು", hi: "छांदोग्य और बृहदारण्यक उपनिषद्" },
  maya: { en: "Śvetāśvatara Upaniṣad; worked out by the Advaita commentators", kn: "ಶ್ವೇತಾಶ್ವತರ ಉಪನಿಷತ್ತು; ಅದ್ವೈತ ಭಾಷ್ಯಕಾರರಿಂದ ವಿಸ್ತರಿತ", hi: "श्वेताश्वतर उपनिषद्; अद्वैत भाष्यकारों द्वारा विस्तृत" },
  advaita: { en: "Māṇḍūkya Kārikā and Śaṅkara's commentaries", kn: "ಮಾಂಡೂಕ್ಯ ಕಾರಿಕೆ ಮತ್ತು ಶಂಕರರ ಭಾಷ್ಯಗಳು", hi: "माण्डूक्य कारिका और शंकर के भाष्य" },
  moksha: { en: "The Upaniṣads, the Gītā and the Brahma Sūtras alike", kn: "ಉಪನಿಷತ್ತುಗಳು, ಗೀತೆ ಮತ್ತು ಬ್ರಹ್ಮಸೂತ್ರಗಳು — ಮೂರರಲ್ಲೂ", hi: "उपनिषद्, गीता और ब्रह्मसूत्र — तीनों में" },
  viveka: { en: "The Vedāntic manuals, above all the Vivekacūḍāmaṇi", kn: "ವೇದಾಂತ ಪ್ರಕರಣ ಗ್ರಂಥಗಳು, ಮುಖ್ಯವಾಗಿ ವಿವೇಕಚೂಡಾಮಣಿ", hi: "वेदांत के प्रकरण ग्रंथ, विशेषतः विवेकचूडामणि" },
  ishvara: { en: "Śvetāśvatara Upaniṣad; the Gītā's middle chapters", kn: "ಶ್ವೇತಾಶ್ವತರ ಉಪನಿಷತ್ತು; ಗೀತೆಯ ಮಧ್ಯದ ಅಧ್ಯಾಯಗಳು", hi: "श्वेताश्वतर उपनिषद्; गीता के मध्य अध्याय" },
  rta: { en: "The Ṛgveda, especially the hymns to Varuṇa", kn: "ಋಗ್ವೇದ, ಮುಖ್ಯವಾಗಿ ವರುಣ ಸೂಕ್ತಗಳು", hi: "ऋग्वेद, विशेषतः वरुण सूक्त" },
  "purusha-prakriti": { en: "The Sāṅkhya Kārikā; taken over by the Yoga Sūtras", kn: "ಸಾಂಖ್ಯ ಕಾರಿಕೆ; ಯೋಗಸೂತ್ರಗಳಿಂದ ಸ್ವೀಕೃತ", hi: "सांख्य कारिका; योगसूत्रों द्वारा अपनाई गई" },
  jiva: { en: "The Brahma Sūtras, and every commentary on them", kn: "ಬ್ರಹ್ಮಸೂತ್ರಗಳು ಮತ್ತು ಅವುಗಳ ಪ್ರತಿಯೊಂದು ಭಾಷ್ಯ", hi: "ब्रह्मसूत्र, और उन पर प्रत्येक भाष्य" },
  avidya: { en: "Śaṅkara's preface to the Brahma Sūtra commentary", kn: "ಬ್ರಹ್ಮಸೂತ್ರ ಭಾಷ್ಯಕ್ಕೆ ಶಂಕರರ ಅಧ್ಯಾಸ ಭಾಷ್ಯ", hi: "ब्रह्मसूत्र भाष्य की शंकर-कृत अध्यास भूमिका" },
  guna: { en: "The Sāṅkhya Kārikā; the Gītā's last six chapters", kn: "ಸಾಂಖ್ಯ ಕಾರಿಕೆ; ಗೀತೆಯ ಕೊನೆಯ ಆರು ಅಧ್ಯಾಯಗಳು", hi: "सांख्य कारिका; गीता के अंतिम छह अध्याय" },
  karma: { en: "Bṛhadāraṇyaka Upaniṣad; the Gītā's early chapters", kn: "ಬೃಹದಾರಣ್ಯಕ ಉಪನಿಷತ್ತು; ಗೀತೆಯ ಆರಂಭದ ಅಧ್ಯಾಯಗಳು", hi: "बृहदारण्यक उपनिषद्; गीता के आरंभिक अध्याय" },
  dharma: { en: "The Dharma Sūtras and Dharma Śāstras; the Mahābhārata", kn: "ಧರ್ಮಸೂತ್ರಗಳು ಮತ್ತು ಧರ್ಮಶಾಸ್ತ್ರಗಳು; ಮಹಾಭಾರತ", hi: "धर्मसूत्र और धर्मशास्त्र; महाभारत" },
  samsara: { en: "The Upaniṣads, where the idea first takes shape", kn: "ಉಪನಿಷತ್ತುಗಳು — ಈ ಕಲ್ಪನೆ ಮೊದಲು ರೂಪ ಪಡೆಯುವುದು ಅಲ್ಲಿಯೇ", hi: "उपनिषद्, जहाँ यह विचार पहले रूप लेता है" },
  punarjanma: { en: "Bṛhadāraṇyaka and Chāndogya; Gītā chapter two", kn: "ಬೃಹದಾರಣ್ಯಕ ಮತ್ತು ಛಾಂದೋಗ್ಯ; ಗೀತೆಯ ಎರಡನೇ ಅಧ್ಯಾಯ", hi: "बृहदारण्यक और छांदोग्य; गीता द्वितीय अध्याय" },
  purushartha: { en: "The Dharma Śāstras; assumed everywhere else", kn: "ಧರ್ಮಶಾಸ್ತ್ರಗಳು; ಉಳಿದೆಲ್ಲೆಡೆ ಗೃಹೀತ", hi: "धर्मशास्त्र; शेष सर्वत्र मान लिया गया" },
  ashrama: { en: "The Dharma Sūtras, which first set the four out", kn: "ಧರ್ಮಸೂತ್ರಗಳು — ನಾಲ್ಕನ್ನೂ ಮೊದಲು ನಿರೂಪಿಸಿದವು", hi: "धर्मसूत्र, जिन्होंने चारों को पहले निरूपित किया" },
  rina: { en: "Taittirīya Saṃhitā; repeated in the Dharma Śāstras", kn: "ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ; ಧರ್ಮಶಾಸ್ತ್ರಗಳಲ್ಲಿ ಪುನರುಕ್ತ", hi: "तैत्तिरीय संहिता; धर्मशास्त्रों में पुनरुक्त" },
  vairagya: { en: "The Yoga Sūtras; the Vedāntic manuals", kn: "ಯೋಗಸೂತ್ರಗಳು; ವೇದಾಂತ ಪ್ರಕರಣ ಗ್ರಂಥಗಳು", hi: "योगसूत्र; वेदांत के प्रकरण ग्रंथ" },
  bhakti: { en: "The Bhāgavata Purāṇa; the Nārada Bhakti Sūtras", kn: "ಭಾಗವತ ಪುರಾಣ; ನಾರದ ಭಕ್ತಿಸೂತ್ರಗಳು", hi: "भागवत पुराण; नारद भक्ति सूत्र" },
};
