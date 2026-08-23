import type { ConceptRow, ConceptTranslationRow } from "./types";

export const CONCEPTS: ConceptRow[] = [
  { id: "c-brahman", slug: "brahman", term_sanskrit: "ब्रह्मन्", term_iast: "Brahman", category: "advaita", related_concepts: ["atman", "maya", "advaita"] },
  { id: "c-atman", slug: "atman", term_sanskrit: "आत्मन्", term_iast: "Ātman", category: "advaita", related_concepts: ["brahman", "maya", "moksha"] },
  { id: "c-maya", slug: "maya", term_sanskrit: "माया", term_iast: "Māyā", category: "advaita", related_concepts: ["brahman", "viveka", "moksha"] },
  { id: "c-advaita", slug: "advaita", term_sanskrit: "अद्वैत", term_iast: "Advaita", category: "advaita", related_concepts: ["brahman", "atman", "maya"] },
  { id: "c-moksha", slug: "moksha", term_sanskrit: "मोक्ष", term_iast: "Mokṣa", category: "advaita", related_concepts: ["atman", "brahman", "viveka"] },
  { id: "c-viveka", slug: "viveka", term_sanskrit: "विवेक", term_iast: "Viveka", category: "advaita", related_concepts: ["moksha", "atman", "maya"] },
];

export const CONCEPT_TRANSLATIONS: ConceptTranslationRow[] = [
  // ── Brahman
  { concept_id: "c-brahman", language: "en", term: "Brahman", definition: "The ultimate, infinite, unchanging reality underlying all existence.",
    detailed_explanation: "In Advaita Vedanta, Brahman is the sole reality — infinite, eternal, self-luminous consciousness, described as Sat-Chit-Ananda: pure being, pure consciousness, pure bliss. Everything appearing as the world is Brahman alone, as waves are the ocean. Brahman is not a God existing somewhere; it is existence itself, knowing itself." },
  { concept_id: "c-brahman", language: "kn", term: "ಬ್ರಹ್ಮನ್", definition: "ಸಮಸ್ತ ಅಸ್ತಿತ್ವದ ಆಧಾರವಾದ ಪರಮ, ಅನಂತ, ಅಪರಿವರ್ತನೀಯ ಸತ್ಯ.",
    detailed_explanation: "ಅದ್ವೈತ ವೇದಾಂತದಲ್ಲಿ ಬ್ರಹ್ಮವೊಂದೇ ಸತ್ಯ — ಅನಂತ, ಶಾಶ್ವತ, ಸ್ವಯಂಪ್ರಕಾಶ ಪ್ರಜ್ಞೆ; ಸಚ್ಚಿದಾನಂದ ಎಂದು ವರ್ಣಿಸಲಾಗಿದೆ: ಶುದ್ಧ ಸತ್, ಶುದ್ಧ ಚಿತ್, ಶುದ್ಧ ಆನಂದ. ಜಗತ್ತಾಗಿ ಕಾಣುವ ಎಲ್ಲವೂ ಬ್ರಹ್ಮವೇ, ಅಲೆಗಳು ಸಮುದ್ರವೇ ಆಗಿರುವಂತೆ. ಬ್ರಹ್ಮವು ಎಲ್ಲೋ ಇರುವ ದೇವರಲ್ಲ; ಅದು ಅಸ್ತಿತ್ವವೇ, ತನ್ನನ್ನು ತಾನೇ ಅರಿಯುತ್ತಿರುವುದು." },
  { concept_id: "c-brahman", language: "hi", term: "ब्रह्मन्", definition: "समस्त अस्तित्व का आधार — परम, अनंत, अपरिवर्तनीय सत्य।",
    detailed_explanation: "अद्वैत वेदांत में ब्रह्म ही एकमात्र सत्य है — अनंत, शाश्वत, स्वयंप्रकाश चैतन्य, जिसे सच्चिदानंद कहा गया है: शुद्ध सत्, शुद्ध चित्, शुद्ध आनंद। जगत् रूप में जो कुछ प्रतीत होता है वह ब्रह्म ही है, जैसे तरंगें समुद्र ही हैं। ब्रह्म कहीं स्थित कोई ईश्वर नहीं; वह स्वयं अस्तित्व है, स्वयं को जानता हुआ।" },

  // ── Atman
  { concept_id: "c-atman", language: "en", term: "Atman", definition: "The individual Self, which Advaita holds to be identical with Brahman.",
    detailed_explanation: "Atman is the witness-consciousness within every being. Unlike the ego or the mind, Atman is unborn, undying and unchanging. The central teaching of Advaita is that the apparent individual self (jiva) is, in its deepest nature, none other than Brahman. Atman is not something you have — it is what you are, prior to all thought and experience." },
  { concept_id: "c-atman", language: "kn", term: "ಆತ್ಮನ್", definition: "ವ್ಯಕ್ತಿಗತ ಆತ್ಮ, ಅದ್ವೈತದ ಪ್ರಕಾರ ಬ್ರಹ್ಮನೊಂದಿಗೆ ಅಭಿನ್ನ.",
    detailed_explanation: "ಆತ್ಮವೆಂದರೆ ಪ್ರತಿಯೊಂದು ಜೀವಿಯೊಳಗಿನ ಸಾಕ್ಷಿಪ್ರಜ್ಞೆ. ಅಹಂಕಾರ ಅಥವಾ ಮನಸ್ಸಿನಂತಲ್ಲದೆ, ಆತ್ಮವು ಹುಟ್ಟದ, ಸಾಯದ, ಬದಲಾಗದ ವಸ್ತು. ಕಾಣುವ ಜೀವಾತ್ಮನು ತನ್ನ ಆಳವಾದ ಸ್ವರೂಪದಲ್ಲಿ ಬ್ರಹ್ಮನೇ ಹೊರತು ಬೇರೆಯಲ್ಲ ಎಂಬುದೇ ಅದ್ವೈತದ ಕೇಂದ್ರ ಬೋಧನೆ. ಆತ್ಮವು ನಿನ್ನ ಬಳಿ ಇರುವ ವಸ್ತುವಲ್ಲ — ಎಲ್ಲಾ ಆಲೋಚನೆ ಮತ್ತು ಅನುಭವಕ್ಕೂ ಮೊದಲು ನೀನು ಏನಾಗಿರುವೆಯೋ ಅದೇ." },
  { concept_id: "c-atman", language: "hi", term: "आत्मन्", definition: "व्यक्तिगत आत्मा, जिसे अद्वैत ब्रह्म से अभिन्न मानता है।",
    detailed_explanation: "आत्मा प्रत्येक प्राणी के भीतर की साक्षी-चेतना है। अहंकार या मन के विपरीत, आत्मा अजन्मा, अमर और अपरिवर्तनीय है। अद्वैत का केंद्रीय उपदेश यह है कि प्रतीत होने वाला जीव अपने गहनतम स्वरूप में ब्रह्म से भिन्न नहीं। आत्मा कोई वस्तु नहीं जो तुम्हारे पास हो — समस्त विचार और अनुभव से पूर्व तुम जो हो, वही आत्मा है।" },

  // ── Maya
  { concept_id: "c-maya", language: "en", term: "Maya", definition: "The creative power by which the one Brahman appears as many.",
    detailed_explanation: "Maya is neither real nor unreal — it is the inexplicable power (shakti) of Brahman by which the infinite appears as the finite world. It works through two functions: avarana, the veiling of Brahman, and vikshepa, the projection of the world. Maya is often misread as meaning the world is an illusion in the sense of being nothing. It means something more precise: the world is real as appearance, but not real as an independent existence apart from Brahman." },
  { concept_id: "c-maya", language: "kn", term: "ಮಾಯಾ", definition: "ಏಕವಾದ ಬ್ರಹ್ಮವು ಅನೇಕವಾಗಿ ತೋರುವಂತೆ ಮಾಡುವ ಸೃಜನಶಕ್ತಿ.",
    detailed_explanation: "ಮಾಯೆಯು ಸತ್ಯವೂ ಅಲ್ಲ, ಅಸತ್ಯವೂ ಅಲ್ಲ — ಅನಂತವು ಸಾಂತ ಜಗತ್ತಾಗಿ ತೋರುವಂತೆ ಮಾಡುವ ಬ್ರಹ್ಮನ ಅನಿರ್ವಚನೀಯ ಶಕ್ತಿ. ಇದು ಎರಡು ಕಾರ್ಯಗಳ ಮೂಲಕ ಕೆಲಸ ಮಾಡುತ್ತದೆ: ಆವರಣ, ಅಂದರೆ ಬ್ರಹ್ಮವನ್ನು ಮರೆಮಾಡುವುದು; ಮತ್ತು ವಿಕ್ಷೇಪ, ಅಂದರೆ ಜಗತ್ತನ್ನು ಪ್ರಕ್ಷೇಪಿಸುವುದು. ಜಗತ್ತು ಶೂನ್ಯ ಎಂಬ ಅರ್ಥದಲ್ಲಿ ಮಾಯೆಯನ್ನು ತಪ್ಪಾಗಿ ಭಾವಿಸಲಾಗುತ್ತದೆ. ಅದರ ನಿಜವಾದ ಅರ್ಥ ಹೆಚ್ಚು ನಿಖರ: ಜಗತ್ತು ತೋರಿಕೆಯಾಗಿ ಸತ್ಯ, ಆದರೆ ಬ್ರಹ್ಮನಿಂದ ಬೇರೆಯಾದ ಸ್ವತಂತ್ರ ಅಸ್ತಿತ್ವವಾಗಿ ಸತ್ಯವಲ್ಲ." },
  { concept_id: "c-maya", language: "hi", term: "माया", definition: "वह सृजनात्मक शक्ति जिससे एक ब्रह्म अनेक रूपों में प्रतीत होता है।",
    detailed_explanation: "माया न सत् है न असत् — वह ब्रह्म की अनिर्वचनीय शक्ति है जिससे अनंत सांत जगत् के रूप में प्रतीत होता है। यह दो कार्यों से काम करती है: आवरण, अर्थात् ब्रह्म को ढँकना; और विक्षेप, अर्थात् जगत् का प्रक्षेपण। माया को प्रायः इस अर्थ में गलत समझा जाता है कि जगत् शून्य है। इसका अर्थ अधिक सूक्ष्म है: जगत् प्रतीति रूप में सत्य है, किंतु ब्रह्म से पृथक् स्वतंत्र सत्ता के रूप में सत्य नहीं।" },

  // ── Advaita
  { concept_id: "c-advaita", language: "en", term: "Non-duality", definition: "The position that reality is one, without a second.",
    detailed_explanation: "Advaita (a + dvaita — not two) is the conclusion of Vedantic inquiry: Brahman, Atman and the world are not three things but one undivided reality. The diversity of appearances is owed to Maya, not to any real difference in the substrate. This is not a belief to adopt but a recognition to arrive at through inquiry." },
  { concept_id: "c-advaita", language: "kn", term: "ಅದ್ವೈತ", definition: "ಸತ್ಯವು ಒಂದೇ, ಎರಡನೆಯದಿಲ್ಲ ಎಂಬ ನಿಲುವು.",
    detailed_explanation: "ಅದ್ವೈತ (ಅ + ದ್ವೈತ — ಎರಡಲ್ಲ) ಎಂಬುದು ವೇದಾಂತ ವಿಚಾರದ ತೀರ್ಮಾನ: ಬ್ರಹ್ಮ, ಆತ್ಮ ಮತ್ತು ಜಗತ್ತು ಮೂರು ಬೇರೆ ಬೇರೆ ವಸ್ತುಗಳಲ್ಲ, ಒಂದೇ ಅವಿಭಕ್ತ ಸತ್ಯ. ತೋರಿಕೆಗಳ ವೈವಿಧ್ಯವು ಮಾಯೆಯಿಂದಲೇ ಹೊರತು ಆಧಾರದಲ್ಲಿನ ನಿಜವಾದ ಭೇದದಿಂದಲ್ಲ. ಇದು ಸ್ವೀಕರಿಸಬೇಕಾದ ನಂಬಿಕೆಯಲ್ಲ, ವಿಚಾರದ ಮೂಲಕ ತಲುಪಬೇಕಾದ ಅರಿವು." },
  { concept_id: "c-advaita", language: "hi", term: "अद्वैत", definition: "यह सिद्धांत कि सत्य एक ही है, द्वितीय रहित।",
    detailed_explanation: "अद्वैत (अ + द्वैत — दो नहीं) वेदांतिक विचार का निष्कर्ष है: ब्रह्म, आत्मा और जगत् तीन भिन्न वस्तुएँ नहीं, एक ही अविभक्त सत्य हैं। प्रतीतियों की विविधता माया के कारण है, आधार में किसी वास्तविक भेद के कारण नहीं। यह स्वीकार करने योग्य मान्यता नहीं, बल्कि विचार द्वारा पहुँचने योग्य प्रत्यभिज्ञा है।" },

  // ── Moksha
  { concept_id: "c-moksha", language: "en", term: "Liberation", definition: "Freedom from the cycle of birth and death through Self-realisation.",
    detailed_explanation: "Moksha in Advaita is not a state to be achieved in the future but the recognition of what already is: the direct knowing that one has never been bound, that the Self is always free. This recognition dissolves the false identification with body and mind which constitutes bondage. You do not attain Moksha; you recognise that you were always free." },
  { concept_id: "c-moksha", language: "kn", term: "ಮೋಕ್ಷ", definition: "ಆತ್ಮಸಾಕ್ಷಾತ್ಕಾರದ ಮೂಲಕ ಜನನ-ಮರಣ ಚಕ್ರದಿಂದ ಬಿಡುಗಡೆ.",
    detailed_explanation: "ಅದ್ವೈತದಲ್ಲಿ ಮೋಕ್ಷವು ಮುಂದೆ ಸಾಧಿಸಬೇಕಾದ ಸ್ಥಿತಿಯಲ್ಲ, ಈಗಾಗಲೇ ಇರುವುದರ ಅರಿವು: ತಾನು ಎಂದೂ ಬಂಧನದಲ್ಲಿ ಇರಲಿಲ್ಲ, ಆತ್ಮವು ಸದಾ ಮುಕ್ತ ಎಂಬ ನೇರ ತಿಳಿವಳಿಕೆ. ಈ ಅರಿವು ದೇಹ ಮತ್ತು ಮನಸ್ಸಿನೊಂದಿಗಿನ ತಪ್ಪು ತಾದಾತ್ಮ್ಯವನ್ನು ಕರಗಿಸುತ್ತದೆ; ಆ ತಾದಾತ್ಮ್ಯವೇ ಬಂಧನ. ನೀನು ಮೋಕ್ಷವನ್ನು ಪಡೆಯುವುದಿಲ್ಲ; ನೀನು ಸದಾ ಮುಕ್ತನಾಗಿದ್ದೆ ಎಂದು ಅರಿಯುತ್ತೀಯೆ." },
  { concept_id: "c-moksha", language: "hi", term: "मोक्ष", definition: "आत्म-साक्षात्कार द्वारा जन्म-मृत्यु के चक्र से मुक्ति।",
    detailed_explanation: "अद्वैत में मोक्ष भविष्य में प्राप्त की जाने वाली अवस्था नहीं, बल्कि जो पहले से है उसकी प्रत्यभिज्ञा है: यह प्रत्यक्ष ज्ञान कि कोई कभी बद्ध था ही नहीं, आत्मा सदा मुक्त है। यह पहचान देह और मन के साथ के मिथ्या तादात्म्य को विलीन कर देती है, और वही तादात्म्य बंधन है। तुम मोक्ष प्राप्त नहीं करते; तुम पहचानते हो कि तुम सदा मुक्त थे।" },

  // ── Viveka
  { concept_id: "c-viveka", language: "en", term: "Discrimination", definition: "The faculty of discerning the real from the unreal.",
    detailed_explanation: "Viveka is the first qualification for Vedantic inquiry: the capacity to distinguish clearly between what is eternal and what is transient, between consciousness itself and the objects appearing within it. Without viveka the teaching cannot take root; with it, everything becomes a pointer toward the Self." },
  { concept_id: "c-viveka", language: "kn", term: "ವಿವೇಕ", definition: "ಸತ್ಯವನ್ನು ಅಸತ್ಯದಿಂದ ಬೇರ್ಪಡಿಸಿ ಅರಿಯುವ ಸಾಮರ್ಥ್ಯ.",
    detailed_explanation: "ವೇದಾಂತ ವಿಚಾರಕ್ಕೆ ಬೇಕಾದ ಮೊದಲ ಅರ್ಹತೆಯೇ ವಿವೇಕ: ನಿತ್ಯವಾದುದನ್ನು ಅನಿತ್ಯವಾದುದರಿಂದ, ಪ್ರಜ್ಞೆಯನ್ನು ಅದರೊಳಗೆ ಕಾಣಿಸಿಕೊಳ್ಳುವ ವಸ್ತುಗಳಿಂದ ಸ್ಪಷ್ಟವಾಗಿ ಬೇರ್ಪಡಿಸುವ ಸಾಮರ್ಥ್ಯ. ವಿವೇಕವಿಲ್ಲದೆ ಬೋಧನೆ ಬೇರೂರುವುದಿಲ್ಲ; ಅದಿದ್ದರೆ ಪ್ರತಿಯೊಂದೂ ಆತ್ಮದತ್ತ ತೋರುವ ಸೂಚಕವಾಗುತ್ತದೆ." },
  { concept_id: "c-viveka", language: "hi", term: "विवेक", definition: "सत् और असत् के बीच भेद करने की क्षमता।",
    detailed_explanation: "वेदांतिक विचार की पहली योग्यता विवेक है: नित्य और अनित्य के बीच, तथा स्वयं चैतन्य और उसमें प्रतीत होने वाले विषयों के बीच स्पष्ट भेद करने की क्षमता। विवेक के बिना उपदेश जड़ नहीं पकड़ता; उसके साथ प्रत्येक वस्तु आत्मा की ओर संकेत बन जाती है।" },
];
