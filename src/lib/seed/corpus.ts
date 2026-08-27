import type { TextRow, TextTranslationRow } from "./types";

// ─────────────────────────────────────────────────────────
//  The wider corpus: Vedas, the Gita, stutis and bhajans.
//
//  All of it lives in the same `texts` table as the Upanishads —
//  that is the whole point of the generalised hierarchy. A Veda,
//  a Gita chapter and a stotra differ by `work_type` and by who
//  their `parent_id` is, not by having their own tables.
//
//  Gita chapters carry parent_id "t-gita", so the Gita renders as
//  a work with eighteen parts rather than eighteen loose rows.
// ─────────────────────────────────────────────────────────

export const VEDAS: TextRow[] = [
  { id: "t-rigveda", slug: "rigveda", work_type: "veda", parent_id: null, name_sanskrit: "ऋग्वेद", name_iast: "Ṛgveda", veda: "Rigveda", verse_count: 10552 },
  { id: "t-yajurveda", slug: "yajurveda", work_type: "veda", parent_id: null, name_sanskrit: "यजुर्वेद", name_iast: "Yajurveda", veda: "Yajurveda", verse_count: 1975 },
  { id: "t-samaveda", slug: "samaveda", work_type: "veda", parent_id: null, name_sanskrit: "सामवेद", name_iast: "Sāmaveda", veda: "Samaveda", verse_count: 1875 },
  { id: "t-atharvaveda", slug: "atharvaveda", work_type: "veda", parent_id: null, name_sanskrit: "अथर्ववेद", name_iast: "Atharvaveda", veda: "Atharvaveda", verse_count: 5977 },
];

export const GITA: TextRow = {
  id: "t-gita",
  slug: "gita",
  work_type: "gita",
  parent_id: null,
  name_sanskrit: "श्रीमद्भगवद्गीता",
  name_iast: "Śrīmad Bhagavad Gītā",
  veda: null,
  verse_count: 700,
};

/** The eighteen chapters, each a yoga in its own right. */
const CH: [string, string, string, number][] = [
  ["arjuna-vishada", "अर्जुनविषादयोग", "Arjuna Viṣāda Yoga", 47],
  ["sankhya", "सांख्ययोग", "Sāṅkhya Yoga", 72],
  ["karma", "कर्मयोग", "Karma Yoga", 43],
  ["jnana-karma-sanyasa", "ज्ञानकर्मसंन्यासयोग", "Jñāna Karma Sannyāsa Yoga", 42],
  ["karma-sanyasa", "कर्मसंन्यासयोग", "Karma Sannyāsa Yoga", 29],
  ["dhyana", "ध्यानयोग", "Dhyāna Yoga", 47],
  ["jnana-vijnana", "ज्ञानविज्ञानयोग", "Jñāna Vijñāna Yoga", 30],
  ["akshara-brahma", "अक्षरब्रह्मयोग", "Akṣara Brahma Yoga", 28],
  ["raja-vidya", "राजविद्याराजगुह्ययोग", "Rāja Vidyā Yoga", 34],
  ["vibhuti", "विभूतियोग", "Vibhūti Yoga", 42],
  ["vishvarupa-darshana", "विश्वरूपदर्शनयोग", "Viśvarūpa Darśana Yoga", 55],
  ["bhakti", "भक्तियोग", "Bhakti Yoga", 20],
  ["kshetra-kshetrajna", "क्षेत्रक्षेत्रज्ञविभागयोग", "Kṣetra Kṣetrajña Yoga", 35],
  ["gunatraya-vibhaga", "गुणत्रयविभागयोग", "Guṇatraya Vibhāga Yoga", 27],
  ["purushottama", "पुरुषोत्तमयोग", "Puruṣottama Yoga", 20],
  ["daivasura-sampad", "दैवासुरसंपद्विभागयोग", "Daivāsura Sampad Yoga", 24],
  ["shraddhatraya-vibhaga", "श्रद्धात्रयविभागयोग", "Śraddhātraya Vibhāga Yoga", 28],
  ["moksha-sanyasa", "मोक्षसंन्यासयोग", "Mokṣa Sannyāsa Yoga", 78],
];

export const GITA_CHAPTERS: TextRow[] = CH.map(([slug, sa, iast, count], i) => ({
  id: `t-gita-${i + 1}`,
  slug: `gita-${i + 1}-${slug}`,
  work_type: "gita_chapter" as const,
  parent_id: "t-gita",
  name_sanskrit: sa,
  name_iast: iast,
  veda: null,
  verse_count: count,
}));

export const STUTIS: TextRow[] = [
  { id: "t-stuti-ganesha", slug: "ganesha-pancharatnam", work_type: "stotra", parent_id: null, name_sanskrit: "गणेशपञ्चरत्नम्", name_iast: "Gaṇeśa Pañcaratnam", veda: null, verse_count: 5 },
  { id: "t-stuti-bhaja-govindam", slug: "bhaja-govindam", work_type: "stotra", parent_id: null, name_sanskrit: "भजगोविन्दम्", name_iast: "Bhaja Govindam", veda: null, verse_count: 31 },
  { id: "t-stuti-lalita", slug: "lalita-sahasranama", work_type: "stotra", parent_id: null, name_sanskrit: "ललितासहस्रनाम", name_iast: "Lalitā Sahasranāma", veda: null, verse_count: 320 },
  { id: "t-stuti-vishnu-sahasranama", slug: "vishnu-sahasranama", work_type: "stotra", parent_id: null, name_sanskrit: "विष्णुसहस्रनाम", name_iast: "Viṣṇu Sahasranāma", veda: null, verse_count: 142 },
  { id: "t-stuti-shiva-tandava", slug: "shiva-tandava-stotram", work_type: "stotra", parent_id: null, name_sanskrit: "शिवताण्डवस्तोत्रम्", name_iast: "Śiva Tāṇḍava Stotram", veda: null, verse_count: 17 },
  { id: "t-stuti-mahishasura", slug: "mahishasura-mardini-stotram", work_type: "stotra", parent_id: null, name_sanskrit: "महिषासुरमर्दिनीस्तोत्रम्", name_iast: "Mahiṣāsura Mardinī Stotram", veda: null, verse_count: 21 },
];

export const BHAJANS: TextRow[] = [
  { id: "t-bhajan-vaishnava", slug: "vaishnava-jana-to", work_type: "bhajan", parent_id: null, name_sanskrit: "वैष्णव जन तो", name_iast: "Vaiṣṇava Jana To", veda: null, verse_count: 4 },
  { id: "t-bhajan-raghupati", slug: "raghupati-raghava", work_type: "bhajan", parent_id: null, name_sanskrit: "रघुपति राघव", name_iast: "Raghupati Rāghava", veda: null, verse_count: 4 },
  { id: "t-bhajan-achyutam", slug: "achyutam-keshavam", work_type: "bhajan", parent_id: null, name_sanskrit: "अच्युतं केशवम्", name_iast: "Acyutaṃ Keśavaṃ", veda: null, verse_count: 6 },
  { id: "t-bhajan-jai-jagadisha", slug: "om-jai-jagadisha-hare", work_type: "bhajan", parent_id: null, name_sanskrit: "ॐ जय जगदीश हरे", name_iast: "Oṃ Jaya Jagadīśa Hare", veda: null, verse_count: 10 },
];

export const CORPUS_TRANSLATIONS: TextTranslationRow[] = [
  // ── Vedas ───────────────────────────────────────────────
  { text_id: "t-rigveda", language: "en", name: "Rigveda", summary: "The oldest of the four, and the oldest surviving text in any Indo-European language. Ten mandalas of hymns to the devas — Agni, Indra, Varuna, Ushas — composed by families of rishis and transmitted orally with a precision no manuscript tradition has matched.", key_teaching: "Ekam sad viprā bahudhā vadanti — Truth is one; the wise call it by many names." },
  { text_id: "t-rigveda", language: "kn", name: "ಋಗ್ವೇದ", summary: "ನಾಲ್ಕರಲ್ಲಿ ಅತ್ಯಂತ ಪ್ರಾಚೀನ, ಮತ್ತು ಯಾವುದೇ ಇಂಡೋ-ಯುರೋಪಿಯನ್ ಭಾಷೆಯಲ್ಲಿ ಉಳಿದಿರುವ ಅತ್ಯಂತ ಹಳೆಯ ಗ್ರಂಥ. ಅಗ್ನಿ, ಇಂದ್ರ, ವರುಣ, ಉಷಸ್ ಮುಂತಾದ ದೇವತೆಗಳಿಗೆ ಸಲ್ಲಿಸಿದ ಸೂಕ್ತಗಳ ಹತ್ತು ಮಂಡಲಗಳು — ಋಷಿಕುಲಗಳಿಂದ ರಚಿತವಾಗಿ, ಯಾವ ಹಸ್ತಪ್ರತಿ ಪರಂಪರೆಯೂ ಸರಿಗಟ್ಟದ ನಿಖರತೆಯಿಂದ ಮೌಖಿಕವಾಗಿ ಸಾಗಿಬಂದಿದೆ.", key_teaching: "ಏಕಂ ಸದ್ ವಿಪ್ರಾ ಬಹುಧಾ ವದಂತಿ — ಸತ್ಯ ಒಂದೇ; ಜ್ಞಾನಿಗಳು ಅದನ್ನು ಹಲವು ಹೆಸರುಗಳಿಂದ ಕರೆಯುತ್ತಾರೆ." },
  { text_id: "t-rigveda", language: "hi", name: "ऋग्वेद", summary: "चारों में सर्वाधिक प्राचीन, और किसी भी भारोपीय भाषा में उपलब्ध सबसे पुराना ग्रंथ। अग्नि, इंद्र, वरुण, उषा आदि देवताओं को समर्पित सूक्तों के दस मंडल — ऋषिकुलों द्वारा रचित और ऐसी शुद्धता से मौखिक रूप से संचरित जिसकी बराबरी कोई पांडुलिपि परंपरा नहीं कर सकी।", key_teaching: "एकं सद् विप्रा बहुधा वदन्ति — सत्य एक है; ज्ञानी उसे अनेक नामों से पुकारते हैं।" },

  { text_id: "t-yajurveda", language: "en", name: "Yajurveda", summary: "The Veda of sacrificial formulae — the prose mantras a priest actually utters while performing the rite. It survives in two recensions, Shukla and Krishna, and carries the Isha and Brihadaranyaka Upanishads within it.", key_teaching: "The rite is not a transaction with the gods but an ordering of the self." },
  { text_id: "t-yajurveda", language: "kn", name: "ಯಜುರ್ವೇದ", summary: "ಯಜ್ಞದ ಮಂತ್ರಗಳ ವೇದ — ಯಾಜಕನು ಯಜ್ಞ ಮಾಡುವಾಗ ನಿಜವಾಗಿ ಉಚ್ಚರಿಸುವ ಗದ್ಯ ಮಂತ್ರಗಳು. ಶುಕ್ಲ ಮತ್ತು ಕೃಷ್ಣ ಎಂಬ ಎರಡು ಶಾಖೆಗಳಲ್ಲಿ ಉಳಿದಿದೆ, ಮತ್ತು ಈಶಾವಾಸ್ಯ ಹಾಗೂ ಬೃಹದಾರಣ್ಯಕ ಉಪನಿಷತ್ತುಗಳನ್ನು ತನ್ನೊಳಗೆ ಹೊಂದಿದೆ.", key_teaching: "ಯಜ್ಞವು ದೇವತೆಗಳೊಂದಿಗಿನ ವ್ಯಾಪಾರವಲ್ಲ, ತನ್ನನ್ನು ತಾನು ಕ್ರಮಗೊಳಿಸಿಕೊಳ್ಳುವ ಬಗೆ." },
  { text_id: "t-yajurveda", language: "hi", name: "यजुर्वेद", summary: "यज्ञ के मंत्रों का वेद — वे गद्य मंत्र जिन्हें पुरोहित यज्ञ करते समय वास्तव में उच्चारित करता है। यह शुक्ल और कृष्ण दो शाखाओं में उपलब्ध है, और ईशावास्य तथा बृहदारण्यक उपनिषद् इसी के अंग हैं।", key_teaching: "यज्ञ देवताओं से लेन-देन नहीं, स्वयं को व्यवस्थित करने की विधि है।" },

  { text_id: "t-samaveda", language: "en", name: "Samaveda", summary: "The Veda of melody. Almost all of its verses are drawn from the Rigveda, but set to sung form — this is where Indian music begins. The Chandogya Upanishad, and with it Tat Tvam Asi, belongs to this Veda.", key_teaching: "The same words, sung, become a different knowing." },
  { text_id: "t-samaveda", language: "kn", name: "ಸಾಮವೇದ", summary: "ಗಾನದ ವೇದ. ಇದರ ಬಹುತೇಕ ಎಲ್ಲಾ ಋಕ್ಕುಗಳೂ ಋಗ್ವೇದದಿಂದಲೇ ಬಂದವು, ಆದರೆ ಗಾನರೂಪಕ್ಕೆ ಅಳವಡಿಸಲ್ಪಟ್ಟಿವೆ — ಭಾರತೀಯ ಸಂಗೀತ ಆರಂಭವಾಗುವುದು ಇಲ್ಲಿಂದಲೇ. ಛಾಂದೋಗ್ಯ ಉಪನಿಷತ್ತು ಮತ್ತು ಅದರೊಂದಿಗೆ ತತ್ತ್ವಮಸಿ ಈ ವೇದಕ್ಕೆ ಸೇರಿದವು.", key_teaching: "ಅದೇ ಪದಗಳು, ಹಾಡಿದಾಗ, ಬೇರೆಯದೇ ಅರಿವಾಗುತ್ತವೆ." },
  { text_id: "t-samaveda", language: "hi", name: "सामवेद", summary: "गान का वेद। इसकी लगभग सभी ऋचाएँ ऋग्वेद से ली गई हैं, किंतु गायन रूप में ढाली गई हैं — भारतीय संगीत का आरंभ यहीं से है। छान्दोग्य उपनिषद्, और उसके साथ तत्त्वमसि, इसी वेद का अंग है।", key_teaching: "वही शब्द, गाए जाने पर, भिन्न ज्ञान बन जाते हैं।" },

  { text_id: "t-atharvaveda", language: "en", name: "Atharvaveda", summary: "The most worldly of the four — healing, herbs, household life, kingship, and the long philosophical hymns on Time, Skambha and the Earth. Its Prithivi Sukta is among the oldest environmental hymns in any tradition.", key_teaching: "Mātā bhūmiḥ putro'haṃ pṛthivyāḥ — The Earth is my mother; I am her child." },
  { text_id: "t-atharvaveda", language: "kn", name: "ಅಥರ್ವವೇದ", summary: "ನಾಲ್ಕರಲ್ಲಿ ಅತ್ಯಂತ ಲೌಕಿಕವಾದದ್ದು — ಚಿಕಿತ್ಸೆ, ಔಷಧಿ, ಗೃಹಜೀವನ, ರಾಜಧರ್ಮ, ಮತ್ತು ಕಾಲ, ಸ್ಕಂಭ ಹಾಗೂ ಭೂಮಿಯ ಕುರಿತ ದೀರ್ಘ ತಾತ್ವಿಕ ಸೂಕ್ತಗಳು. ಇದರ ಪೃಥ್ವೀಸೂಕ್ತವು ಯಾವುದೇ ಪರಂಪರೆಯ ಅತ್ಯಂತ ಪ್ರಾಚೀನ ಪರಿಸರ ಸ್ತುತಿಗಳಲ್ಲಿ ಒಂದು.", key_teaching: "ಮಾತಾ ಭೂಮಿಃ ಪುತ್ರೋಽಹಂ ಪೃಥಿವ್ಯಾಃ — ಭೂಮಿ ನನ್ನ ತಾಯಿ; ನಾನು ಅವಳ ಮಗು." },
  { text_id: "t-atharvaveda", language: "hi", name: "अथर्ववेद", summary: "चारों में सर्वाधिक लौकिक — चिकित्सा, औषधि, गृहस्थ जीवन, राजधर्म, तथा काल, स्कंभ और पृथ्वी पर लंबे दार्शनिक सूक्त। इसका पृथ्वी सूक्त किसी भी परंपरा के प्राचीनतम पर्यावरण-स्तवनों में से एक है।", key_teaching: "माता भूमिः पुत्रोऽहं पृथिव्याः — पृथ्वी मेरी माता है; मैं उसका पुत्र हूँ।" },

  // ── The Gita as a whole ─────────────────────────────────
  { text_id: "t-gita", language: "en", name: "Geetha Rasa Dhara", summary: "Seven hundred verses spoken between two armies, where Krishna answers Arjuna's refusal to fight with the whole of Vedanta — karma, jnana and bhakti held together rather than ranked. It is the one text on which Shankara, Ramanuja and Madhva each wrote a celebrated bhashya on the same verses.", key_teaching: "Karmaṇyevādhikāraste mā phaleṣu kadācana — You have a right to action alone, never to its fruits." },
  { text_id: "t-gita", language: "kn", name: "ಗೀತಾ ರಸಧಾರಾ", summary: "ಎರಡು ಸೇನೆಗಳ ನಡುವೆ ಆಡಿದ ಏಳುನೂರು ಶ್ಲೋಕಗಳು; ಅರ್ಜುನನ ಯುದ್ಧನಿರಾಕರಣೆಗೆ ಕೃಷ್ಣನು ಇಡೀ ವೇದಾಂತದಿಂದ ಉತ್ತರಿಸುತ್ತಾನೆ — ಕರ್ಮ, ಜ್ಞಾನ ಮತ್ತು ಭಕ್ತಿಯನ್ನು ಶ್ರೇಣೀಕರಿಸದೆ ಒಟ್ಟಿಗೆ ಹಿಡಿದಿಟ್ಟುಕೊಂಡು. ಶಂಕರ, ರಾಮಾನುಜ ಮತ್ತು ಮಧ್ವ ಮೂವರೂ ಒಂದೇ ಶ್ಲೋಕಗಳಿಗೆ ಪ್ರಸಿದ್ಧ ಭಾಷ್ಯ ಬರೆದ ಏಕೈಕ ಗ್ರಂಥ ಇದು.", key_teaching: "ಕರ್ಮಣ್ಯೇವಾಧಿಕಾರಸ್ತೇ ಮಾ ಫಲೇಷು ಕದಾಚನ — ನಿನಗೆ ಕರ್ಮದಲ್ಲಿ ಮಾತ್ರ ಅಧಿಕಾರ, ಫಲದಲ್ಲಿ ಎಂದಿಗೂ ಇಲ್ಲ." },
  { text_id: "t-gita", language: "hi", name: "गीता रसधारा", summary: "दो सेनाओं के बीच कहे गए सात सौ श्लोक, जहाँ कृष्ण अर्जुन के युद्ध-निषेध का उत्तर सम्पूर्ण वेदांत से देते हैं — कर्म, ज्ञान और भक्ति को क्रम में रखे बिना, साथ-साथ थामे हुए। यह वह एकमात्र ग्रंथ है जिसके उन्हीं श्लोकों पर शंकर, रामानुज और मध्व — तीनों ने प्रसिद्ध भाष्य लिखे।", key_teaching: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन — तुम्हारा अधिकार केवल कर्म में है, फल में कभी नहीं।" },

  // ── Stutis ──────────────────────────────────────────────
  { text_id: "t-stuti-ganesha", language: "en", name: "Ganesha Pancharatnam", summary: "Five jewelled verses by Adi Shankaracharya to Ganapati, in a tight galloping metre that is as much a feat of prosody as of devotion.", key_teaching: "Sung at the beginning of any undertaking." },
  { text_id: "t-stuti-ganesha", language: "kn", name: "ಗಣೇಶ ಪಂಚರತ್ನ", summary: "ಆದಿ ಶಂಕರಾಚಾರ್ಯರು ಗಣಪತಿಗೆ ರಚಿಸಿದ ಐದು ರತ್ನಸಮಾನ ಶ್ಲೋಕಗಳು; ಭಕ್ತಿಯಷ್ಟೇ ಛಂದಸ್ಸಿನ ಸಾಧನೆಯೂ ಆಗಿರುವ ಬಿಗಿಯಾದ ಲಯ.", key_teaching: "ಯಾವುದೇ ಕಾರ್ಯದ ಆರಂಭದಲ್ಲಿ ಹಾಡಲಾಗುತ್ತದೆ." },
  { text_id: "t-stuti-ganesha", language: "hi", name: "गणेश पंचरत्न", summary: "आदि शंकराचार्य द्वारा गणपति को अर्पित पाँच रत्नतुल्य श्लोक; भक्ति के साथ-साथ छंद की भी सिद्धि।", key_teaching: "किसी भी कार्य के आरंभ में गाया जाता है।" },

  { text_id: "t-stuti-bhaja-govindam", language: "en", name: "Bhaja Govindam", summary: "Shankaracharya's blunt address to a grammarian growing old over his declensions — thirty-one verses on the uselessness of scholarship without realisation.", key_teaching: "Bhaja govindaṃ mūḍhamate — Worship Govinda, foolish mind; grammar will not save you at the end." },
  { text_id: "t-stuti-bhaja-govindam", language: "kn", name: "ಭಜ ಗೋವಿಂದಂ", summary: "ವ್ಯಾಕರಣ ಸೂತ್ರಗಳ ಮೇಲೆ ಮುಪ್ಪಾಗುತ್ತಿದ್ದ ಪಂಡಿತನಿಗೆ ಶಂಕರಾಚಾರ್ಯರ ನೇರ ನುಡಿ — ಸಾಕ್ಷಾತ್ಕಾರವಿಲ್ಲದ ಪಾಂಡಿತ್ಯದ ವ್ಯರ್ಥತೆಯ ಕುರಿತ ಮೂವತ್ತೊಂದು ಶ್ಲೋಕಗಳು.", key_teaching: "ಭಜ ಗೋವಿಂದಂ ಮೂಢಮತೇ — ಗೋವಿಂದನನ್ನು ಭಜಿಸು, ಮೂಢಮನವೇ; ಕೊನೆಗೆ ವ್ಯಾಕರಣ ನಿನ್ನನ್ನು ಕಾಪಾಡದು." },
  { text_id: "t-stuti-bhaja-govindam", language: "hi", name: "भज गोविन्दम्", summary: "व्याकरण के सूत्रों पर बूढ़े होते पंडित से शंकराचार्य का सीधा कथन — साक्षात्कार बिना पांडित्य की व्यर्थता पर इकतीस श्लोक।", key_teaching: "भज गोविन्दं मूढमते — गोविन्द को भजो, मूढ़ मन; अंत में व्याकरण तुम्हें नहीं बचाएगा।" },

  { text_id: "t-stuti-lalita", language: "en", name: "Lalita Sahasranama", summary: "A thousand names of the Devi from the Brahmanda Purana, arranged not as a list but as a progression — from her form, through her city and her chakra, to her identity with Brahman.", key_teaching: "Each name is a door; the thousand are one." },
  { text_id: "t-stuti-lalita", language: "kn", name: "ಲಲಿತಾ ಸಹಸ್ರನಾಮ", summary: "ಬ್ರಹ್ಮಾಂಡ ಪುರಾಣದಿಂದ ದೇವಿಯ ಸಾವಿರ ನಾಮಗಳು; ಪಟ್ಟಿಯಾಗಿ ಅಲ್ಲ, ಕ್ರಮವಾದ ಪ್ರಗತಿಯಾಗಿ ಜೋಡಿಸಲ್ಪಟ್ಟಿವೆ — ಅವಳ ರೂಪದಿಂದ, ಅವಳ ನಗರ ಮತ್ತು ಚಕ್ರದ ಮೂಲಕ, ಬ್ರಹ್ಮನೊಂದಿಗಿನ ಅಭೇದದವರೆಗೆ.", key_teaching: "ಪ್ರತಿ ನಾಮವೂ ಒಂದು ಬಾಗಿಲು; ಸಾವಿರವೂ ಒಂದೇ." },
  { text_id: "t-stuti-lalita", language: "hi", name: "ललिता सहस्रनाम", summary: "ब्रह्मांड पुराण से देवी के सहस्र नाम; सूची के रूप में नहीं, एक क्रमिक यात्रा के रूप में — उनके रूप से, उनके नगर और चक्र होते हुए, ब्रह्म से अभेद तक।", key_teaching: "प्रत्येक नाम एक द्वार है; सहस्र भी एक ही है।" },

  { text_id: "t-stuti-vishnu-sahasranama", language: "en", name: "Vishnu Sahasranama", summary: "The thousand names of Vishnu, given by Bhishma on his bed of arrows in the Mahabharata's Anushasana Parva, and commented on by Shankaracharya himself.", key_teaching: "Recited daily in more households than perhaps any other Sanskrit text." },
  { text_id: "t-stuti-vishnu-sahasranama", language: "kn", name: "ವಿಷ್ಣು ಸಹಸ್ರನಾಮ", summary: "ಮಹಾಭಾರತದ ಅನುಶಾಸನ ಪರ್ವದಲ್ಲಿ ಶರಶಯ್ಯೆಯ ಮೇಲಿದ್ದ ಭೀಷ್ಮನು ನೀಡಿದ ವಿಷ್ಣುವಿನ ಸಾವಿರ ನಾಮಗಳು; ಸ್ವತಃ ಶಂಕರಾಚಾರ್ಯರೇ ಇದಕ್ಕೆ ಭಾಷ್ಯ ಬರೆದಿದ್ದಾರೆ.", key_teaching: "ಬಹುಶಃ ಬೇರೆ ಯಾವ ಸಂಸ್ಕೃತ ಗ್ರಂಥಕ್ಕಿಂತಲೂ ಹೆಚ್ಚು ಮನೆಗಳಲ್ಲಿ ನಿತ್ಯ ಪಠಿಸಲಾಗುತ್ತದೆ." },
  { text_id: "t-stuti-vishnu-sahasranama", language: "hi", name: "विष्णु सहस्रनाम", summary: "महाभारत के अनुशासन पर्व में शरशय्या पर लेटे भीष्म द्वारा दिए गए विष्णु के सहस्र नाम; स्वयं शंकराचार्य ने इस पर भाष्य लिखा।", key_teaching: "संभवतः किसी भी अन्य संस्कृत ग्रंथ से अधिक घरों में नित्य पाठ किया जाता है।" },

  { text_id: "t-stuti-shiva-tandava", language: "en", name: "Shiva Tandava Stotram", summary: "Attributed to Ravana, and built on a thundering panchachamara metre that imitates the drum of Shiva's dance. Few stotras are as much sound as this one.", key_teaching: "The metre is the meaning: the verse dances." },
  { text_id: "t-stuti-shiva-tandava", language: "kn", name: "ಶಿವತಾಂಡವ ಸ್ತೋತ್ರ", summary: "ರಾವಣನಿಗೆ ಆರೋಪಿತವಾದದ್ದು; ಶಿವನ ನೃತ್ಯದ ಡಮರುವನ್ನು ಅನುಕರಿಸುವ ಗರ್ಜಿಸುವ ಪಂಚಚಾಮರ ಛಂದಸ್ಸಿನಲ್ಲಿ ರಚಿತ. ಇಷ್ಟು ನಾದಪ್ರಧಾನವಾದ ಸ್ತೋತ್ರಗಳು ವಿರಳ.", key_teaching: "ಛಂದಸ್ಸೇ ಅರ್ಥ: ಶ್ಲೋಕವೇ ನರ್ತಿಸುತ್ತದೆ." },
  { text_id: "t-stuti-shiva-tandava", language: "hi", name: "शिव तांडव स्तोत्र", summary: "रावण को आरोपित; शिव के नृत्य के डमरू का अनुकरण करते गरजते पंचचामर छंद में रचित। इतना नादप्रधान स्तोत्र विरल है।", key_teaching: "छंद ही अर्थ है: श्लोक स्वयं नृत्य करता है।" },

  { text_id: "t-stuti-mahishasura", language: "en", name: "Mahishasura Mardini Stotram", summary: "Twenty-one verses to Durga as the slayer of Mahisha, in a galloping metre sung across India during Navaratri.", key_teaching: "Ayi giri-nandini nandita-medini — Daughter of the mountain, who gladdens the earth." },
  { text_id: "t-stuti-mahishasura", language: "kn", name: "ಮಹಿಷಾಸುರಮರ್ದಿನೀ ಸ್ತೋತ್ರ", summary: "ಮಹಿಷನನ್ನು ಸಂಹರಿಸಿದ ದುರ್ಗೆಗೆ ಸಲ್ಲಿಸಿದ ಇಪ್ಪತ್ತೊಂದು ಶ್ಲೋಕಗಳು; ನವರಾತ್ರಿಯಲ್ಲಿ ಭಾರತದಾದ್ಯಂತ ಹಾಡಲಾಗುವ ವೇಗದ ಲಯ.", key_teaching: "ಅಯಿ ಗಿರಿನಂದಿನಿ ನಂದಿತಮೇದಿನಿ — ಪರ್ವತಪುತ್ರಿಯೇ, ಭೂಮಿಯನ್ನು ಆನಂದಗೊಳಿಸುವವಳೇ." },
  { text_id: "t-stuti-mahishasura", language: "hi", name: "महिषासुरमर्दिनी स्तोत्र", summary: "महिष का वध करने वाली दुर्गा को अर्पित इक्कीस श्लोक; नवरात्रि में पूरे भारत में गाई जाने वाली द्रुत लय।", key_teaching: "अयि गिरिनन्दिनि नन्दितमेदिनि — पर्वत की पुत्री, जो पृथ्वी को आनंदित करती है।" },

  // ── Bhajans ─────────────────────────────────────────────
  { text_id: "t-bhajan-vaishnava", language: "en", name: "Vaishnava Jana To", summary: "Narsinh Mehta's fifteenth-century Gujarati bhajan defining a devotee entirely by conduct — one who feels another's pain as his own — and Gandhi's daily prayer.", key_teaching: "A Vaishnava is known by what he does, not by what he worships." },
  { text_id: "t-bhajan-vaishnava", language: "kn", name: "ವೈಷ್ಣವ ಜನ ತೋ", summary: "ಹದಿನೈದನೇ ಶತಮಾನದ ನರಸಿಂಹ ಮೆಹ್ತಾರ ಗುಜರಾತಿ ಭಜನೆ; ಭಕ್ತನನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ನಡತೆಯಿಂದಲೇ ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ — ಬೇರೊಬ್ಬರ ನೋವನ್ನು ತನ್ನದೆಂದು ಅನುಭವಿಸುವವನು. ಗಾಂಧಿಯವರ ನಿತ್ಯ ಪ್ರಾರ್ಥನೆ.", key_teaching: "ವೈಷ್ಣವನನ್ನು ಅವನ ಪೂಜೆಯಿಂದಲ್ಲ, ಅವನ ನಡತೆಯಿಂದ ಗುರುತಿಸಬೇಕು." },
  { text_id: "t-bhajan-vaishnava", language: "hi", name: "वैष्णव जन तो", summary: "पंद्रहवीं शताब्दी के नरसिंह मेहता का गुजराती भजन, जो भक्त को पूर्णतः आचरण से परिभाषित करता है — जो दूसरे की पीड़ा को अपनी मानता है। गांधीजी की नित्य प्रार्थना।", key_teaching: "वैष्णव अपनी पूजा से नहीं, अपने आचरण से पहचाना जाता है।" },

  { text_id: "t-bhajan-raghupati", language: "en", name: "Raghupati Raghava", summary: "A Rama bhajan of the Bhakti tradition, later given its widely sung form in Gandhi's ashram, where a line naming Ishvara and Allah together was added.", key_teaching: "Sung on the Salt March and at every prarthana sabha since." },
  { text_id: "t-bhajan-raghupati", language: "kn", name: "ರಘುಪತಿ ರಾಘವ", summary: "ಭಕ್ತಿ ಪರಂಪರೆಯ ರಾಮ ಭಜನೆ; ಮುಂದೆ ಗಾಂಧಿಯವರ ಆಶ್ರಮದಲ್ಲಿ ಇಂದು ಹಾಡಲಾಗುವ ರೂಪ ಪಡೆಯಿತು, ಅಲ್ಲಿ ಈಶ್ವರ ಮತ್ತು ಅಲ್ಲಾ ಇಬ್ಬರನ್ನೂ ಒಟ್ಟಿಗೆ ಹೆಸರಿಸುವ ಸಾಲು ಸೇರಿಸಲ್ಪಟ್ಟಿತು.", key_teaching: "ಉಪ್ಪಿನ ಸತ್ಯಾಗ್ರಹದಲ್ಲಿ ಮತ್ತು ಅಂದಿನಿಂದ ಪ್ರತಿ ಪ್ರಾರ್ಥನಾ ಸಭೆಯಲ್ಲಿ ಹಾಡಲಾಗಿದೆ." },
  { text_id: "t-bhajan-raghupati", language: "hi", name: "रघुपति राघव", summary: "भक्ति परंपरा का राम भजन, जिसे आगे चलकर गांधीजी के आश्रम में वह रूप मिला जो आज गाया जाता है — जहाँ ईश्वर और अल्लाह को साथ नाम देने वाली पंक्ति जोड़ी गई।", key_teaching: "नमक सत्याग्रह में और तब से हर प्रार्थना सभा में गाया गया।" },

  { text_id: "t-bhajan-achyutam", language: "en", name: "Achyutam Keshavam", summary: "A short Krishna bhajan built entirely of names — Achyuta, Keshava, Rama, Narayana — where the naming itself is the practice.", key_teaching: "Nothing is asked for; only the names are said." },
  { text_id: "t-bhajan-achyutam", language: "kn", name: "ಅಚ್ಯುತಂ ಕೇಶವಂ", summary: "ಸಂಪೂರ್ಣವಾಗಿ ನಾಮಗಳಿಂದಲೇ ಕಟ್ಟಿದ ಚಿಕ್ಕ ಕೃಷ್ಣ ಭಜನೆ — ಅಚ್ಯುತ, ಕೇಶವ, ರಾಮ, ನಾರಾಯಣ; ನಾಮಸ್ಮರಣೆಯೇ ಸಾಧನೆ.", key_teaching: "ಏನನ್ನೂ ಬೇಡುವುದಿಲ್ಲ; ನಾಮಗಳನ್ನಷ್ಟೇ ಹೇಳಲಾಗುತ್ತದೆ." },
  { text_id: "t-bhajan-achyutam", language: "hi", name: "अच्युतं केशवम्", summary: "पूर्णतः नामों से बना एक छोटा कृष्ण भजन — अच्युत, केशव, राम, नारायण; नाम लेना ही साधना है।", key_teaching: "कुछ माँगा नहीं जाता; केवल नाम कहे जाते हैं।" },

  { text_id: "t-bhajan-jai-jagadisha", language: "en", name: "Om Jai Jagadisha Hare", summary: "The aarti sung at the close of worship in households across northern India, composed by Shraddharam Phillauri in 1870.", key_teaching: "The lamp is circled while it is sung; the song ends the rite." },
  { text_id: "t-bhajan-jai-jagadisha", language: "kn", name: "ಓಂ ಜಯ ಜಗದೀಶ ಹರೇ", summary: "ಉತ್ತರ ಭಾರತದ ಮನೆಗಳಲ್ಲಿ ಪೂಜೆಯ ಕೊನೆಯಲ್ಲಿ ಹಾಡಲಾಗುವ ಆರತಿ; 1870ರಲ್ಲಿ ಶ್ರದ್ಧಾರಾಮ್ ಫಿಲ್ಲೌರಿ ರಚಿಸಿದ್ದು.", key_teaching: "ಹಾಡುತ್ತಿರುವಾಗಲೇ ದೀಪವನ್ನು ಸುತ್ತಲಾಗುತ್ತದೆ; ಹಾಡು ಪೂಜೆಯನ್ನು ಮುಗಿಸುತ್ತದೆ." },
  { text_id: "t-bhajan-jai-jagadisha", language: "hi", name: "ॐ जय जगदीश हरे", summary: "उत्तर भारत के घरों में पूजा के अंत में गाई जाने वाली आरती; 1870 में श्रद्धाराम फिल्लौरी द्वारा रचित।", key_teaching: "गाते हुए दीप घुमाया जाता है; गीत पूजा को पूर्ण करता है।" },
];

// ── The eighteen chapters, in three languages ────────────
//
// Held as a compact table rather than 54 hand-written objects: the
// shape is perfectly regular, and a table makes a missing or mismatched
// translation obvious at a glance.
//   [ english, kannada, hindi ]
const CHAPTER_NAMES: [string, string, string][] = [
  ["The Despondency of Arjuna", "ಅರ್ಜುನನ ವಿಷಾದ", "अर्जुन का विषाद"],
  ["The Yoga of Knowledge", "ಸಾಂಖ್ಯ ಯೋಗ", "सांख्य योग"],
  ["The Yoga of Action", "ಕರ್ಮ ಯೋಗ", "कर्म योग"],
  ["Knowledge, Action and Renunciation", "ಜ್ಞಾನ ಕರ್ಮ ಸಂನ್ಯಾಸ ಯೋಗ", "ज्ञान कर्म संन्यास योग"],
  ["The Yoga of Renunciation", "ಕರ್ಮ ಸಂನ್ಯಾಸ ಯೋಗ", "कर्म संन्यास योग"],
  ["The Yoga of Meditation", "ಧ್ಯಾನ ಯೋಗ", "ध्यान योग"],
  ["Knowledge and Realisation", "ಜ್ಞಾನ ವಿಜ್ಞಾನ ಯೋಗ", "ज्ञान विज्ञान योग"],
  ["The Imperishable Brahman", "ಅಕ್ಷರ ಬ್ರಹ್ಮ ಯೋಗ", "अक्षर ब्रह्म योग"],
  ["The Royal Knowledge", "ರಾಜವಿದ್ಯಾ ಯೋಗ", "राजविद्या योग"],
  ["Divine Manifestations", "ವಿಭೂತಿ ಯೋಗ", "विभूति योग"],
  ["The Vision of the Universal Form", "ವಿಶ್ವರೂಪ ದರ್ಶನ ಯೋಗ", "विश्वरूप दर्शन योग"],
  ["The Yoga of Devotion", "ಭಕ್ತಿ ಯೋಗ", "भक्ति योग"],
  ["The Field and the Knower", "ಕ್ಷೇತ್ರ ಕ್ಷೇತ್ರಜ್ಞ ಯೋಗ", "क्षेत्र क्षेत्रज्ञ योग"],
  ["The Three Gunas", "ಗುಣತ್ರಯ ವಿಭಾಗ ಯೋಗ", "गुणत्रय विभाग योग"],
  ["The Supreme Person", "ಪುರುಷೋತ್ತಮ ಯೋಗ", "पुरुषोत्तम योग"],
  ["Divine and Demonic Natures", "ದೈವಾಸುರ ಸಂಪದ್ ಯೋಗ", "दैवासुर संपद् योग"],
  ["The Threefold Faith", "ಶ್ರದ್ಧಾತ್ರಯ ವಿಭಾಗ ಯೋಗ", "श्रद्धात्रय विभाग योग"],
  ["Liberation through Renunciation", "ಮೋಕ್ಷ ಸಂನ್ಯಾಸ ಯೋಗ", "मोक्ष संन्यास योग"],
];

const CHAPTER_THEMES: [string, string, string][] = [
  ["Arjuna sees his teachers and kin in the opposing army and puts down his bow.", "ಎದುರಿನ ಸೇನೆಯಲ್ಲಿ ತನ್ನ ಗುರುಗಳನ್ನೂ ಬಂಧುಗಳನ್ನೂ ಕಂಡ ಅರ್ಜುನನು ಬಿಲ್ಲನ್ನು ಕೆಳಗಿಡುತ್ತಾನೆ.", "सामने की सेना में अपने गुरुजनों और स्वजनों को देखकर अर्जुन धनुष रख देता है।"],
  ["The teaching proper begins: the Self is never born and never dies.", "ಬೋಧನೆ ನಿಜವಾಗಿ ಆರಂಭವಾಗುತ್ತದೆ: ಆತ್ಮವು ಹುಟ್ಟುವುದೂ ಇಲ್ಲ, ಸಾಯುವುದೂ ಇಲ್ಲ.", "उपदेश यहीं से आरंभ होता है: आत्मा न जन्मता है, न मरता है।"],
  ["Action cannot be escaped; it can only be done without grasping at its fruit.", "ಕರ್ಮದಿಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳಲಾಗದು; ಫಲದ ಆಸೆಯಿಲ್ಲದೆ ಮಾಡಬಹುದಷ್ಟೇ.", "कर्म से बचा नहीं जा सकता; उसे केवल फल की आसक्ति बिना किया जा सकता है।"],
  ["Krishna names the lineage of the teaching and the nature of his own birth.", "ಕೃಷ್ಣನು ಬೋಧನೆಯ ಪರಂಪರೆಯನ್ನೂ ತನ್ನ ಅವತಾರದ ಸ್ವರೂಪವನ್ನೂ ಹೇಳುತ್ತಾನೆ.", "कृष्ण उपदेश की परंपरा और अपने अवतार का स्वरूप बताते हैं।"],
  ["Renunciation and action are shown to reach the same place.", "ಸಂನ್ಯಾಸ ಮತ್ತು ಕರ್ಮ ಎರಡೂ ಒಂದೇ ಗುರಿಯನ್ನು ತಲುಪುತ್ತವೆ ಎಂದು ತೋರಿಸಲಾಗುತ್ತದೆ.", "संन्यास और कर्म — दोनों एक ही स्थान तक पहुँचते हैं।"],
  ["The practice itself: seat, posture, steadiness, and the restless mind.", "ಸಾಧನೆಯ ವಿವರ: ಆಸನ, ಸ್ಥಿತಿ, ಸ್ಥಿರತೆ, ಮತ್ತು ಚಂಚಲ ಮನಸ್ಸು.", "साधना का विवरण: आसन, स्थिति, स्थिरता, और चंचल मन।"],
  ["Krishna as the thread on which all this is strung.", "ಇದೆಲ್ಲವೂ ಪೋಣಿಸಲ್ಪಟ್ಟ ದಾರವೇ ಕೃಷ್ಣ.", "यह सब जिस सूत्र में पिरोया है, वही कृष्ण हैं।"],
  ["What is thought at the last moment, and what is imperishable.", "ಕೊನೆಯ ಕ್ಷಣದಲ್ಲಿ ಏನನ್ನು ಸ್ಮರಿಸಲಾಗುತ್ತದೆ, ಮತ್ತು ಅಕ್ಷರವಾದದ್ದು ಯಾವುದು.", "अंतिम क्षण में क्या स्मरण होता है, और अक्षर क्या है।"],
  ["The most secret knowledge, and its openness to everyone.", "ಅತ್ಯಂತ ಗುಹ್ಯವಾದ ಜ್ಞಾನ, ಮತ್ತು ಅದು ಎಲ್ಲರಿಗೂ ತೆರೆದಿರುವುದು.", "सर्वाधिक गुह्य ज्ञान, और उसका सबके लिए खुला होना।"],
  ["Wherever there is splendour, that is a fragment of the divine.", "ಎಲ್ಲಿ ವೈಭವವಿದೆಯೋ ಅದು ದೈವದ ಒಂದು ಅಂಶ.", "जहाँ भी विभूति है, वह दिव्य का एक अंश है।"],
  ["Arjuna is given the eye to see the whole, and cannot bear it.", "ಸಮಸ್ತವನ್ನೂ ಕಾಣುವ ದಿವ್ಯದೃಷ್ಟಿ ಅರ್ಜುನನಿಗೆ ದೊರೆಯುತ್ತದೆ, ಆದರೆ ಅವನಿಗೆ ಅದನ್ನು ಸಹಿಸಲಾಗುವುದಿಲ್ಲ.", "अर्जुन को सब देखने की दिव्य दृष्टि मिलती है, और वह उसे सह नहीं पाता।"],
  ["Of the formless and the formed, which path is nearer.", "ನಿರಾಕಾರ ಮತ್ತು ಸಾಕಾರ — ಯಾವ ಮಾರ್ಗ ಹತ್ತಿರ.", "निराकार और साकार — कौन-सा मार्ग निकट है।"],
  ["The body as field, and the one who knows it.", "ದೇಹವೇ ಕ್ಷೇತ್ರ, ಮತ್ತು ಅದನ್ನು ಅರಿಯುವವನು ಕ್ಷೇತ್ರಜ್ಞ.", "शरीर क्षेत्र है, और उसे जानने वाला क्षेत्रज्ञ।"],
  ["Sattva, rajas and tamas, and how each binds.", "ಸತ್ತ್ವ, ರಜಸ್ ಮತ್ತು ತಮಸ್ — ಪ್ರತಿಯೊಂದೂ ಹೇಗೆ ಬಂಧಿಸುತ್ತದೆ.", "सत्त्व, रजस् और तमस् — प्रत्येक किस प्रकार बाँधता है।"],
  ["The ashvattha tree with its roots above, and the axe of detachment.", "ಬೇರುಗಳು ಮೇಲಿರುವ ಅಶ್ವತ್ಥ ವೃಕ್ಷ, ಮತ್ತು ವೈರಾಗ್ಯದ ಕೊಡಲಿ.", "जड़ें ऊपर वाला अश्वत्थ वृक्ष, और वैराग्य की कुल्हाड़ी।"],
  ["Two dispositions, and what each makes of a life.", "ಎರಡು ಸ್ವಭಾವಗಳು, ಮತ್ತು ಪ್ರತಿಯೊಂದೂ ಬದುಕನ್ನು ಏನಾಗಿಸುತ್ತದೆ.", "दो स्वभाव, और प्रत्येक जीवन को क्या बनाता है।"],
  ["Faith takes the colour of the one who holds it.", "ಶ್ರದ್ಧೆಯು ಅದನ್ನು ಹೊಂದಿದವನ ಬಣ್ಣವನ್ನೇ ಪಡೆಯುತ್ತದೆ.", "श्रद्धा उसी का रंग ले लेती है जो उसे धारण करता है।"],
  ["The summing up, and the last word: take refuge, and act.", "ಸಮಾರೋಪ, ಮತ್ತು ಕೊನೆಯ ನುಡಿ: ಶರಣಾಗು, ಮತ್ತು ಕರ್ಮ ಮಾಡು.", "उपसंहार, और अंतिम वचन: शरण लो, और कर्म करो।"],
];

const LANGS = ["en", "kn", "hi"] as const;

export const GITA_CHAPTER_TRANSLATIONS: TextTranslationRow[] = GITA_CHAPTERS.flatMap(
  (chapter, i) =>
    LANGS.map((language, l) => ({
      text_id: chapter.id,
      language,
      name: `${i + 1}. ${CHAPTER_NAMES[i][l]}`,
      summary: CHAPTER_THEMES[i][l],
      key_teaching: chapter.name_iast,
    }))
);
