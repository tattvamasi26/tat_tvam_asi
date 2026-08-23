import type { TranslationRow, VerseNoteRow, VerseRow } from "./types";

/** Language-neutral: the Sanskrit and its address in the canon. */
export const VERSES: VerseRow[] = [
  { id: "v-sarvam-khalvidam", text_id: "t-chandogya", sanskrit: "सर्वं खल्विदं ब्रह्म", transliteration_iast: "Sarvaṃ Khalvidaṃ Brahma", locator: "3.14.1", division_1: "3", division_2: "14.1", category: "advaita", is_mahavakya: false, citation_status: "legacy_uncited", tags: ["brahman", "non-duality"] },
  { id: "v-aham-brahmasmi", text_id: "t-brihadaranyaka", sanskrit: "अहं ब्रह्मास्मि", transliteration_iast: "Ahaṃ Brahmāsmi", locator: "1.4.10", division_1: "1", division_2: "4.10", category: "advaita", is_mahavakya: true, citation_status: "legacy_uncited", tags: ["mahavakya", "brahman", "atman"] },
  { id: "v-ekam-evadvitiyam", text_id: "t-chandogya", sanskrit: "एकमेवाद्वितीयम्", transliteration_iast: "Ekam Evādvitīyam", locator: "6.2.1", division_1: "6", division_2: "2.1", category: "advaita", is_mahavakya: false, citation_status: "legacy_uncited", tags: ["brahman", "oneness", "non-duality"] },
  { id: "v-neti-neti", text_id: "t-brihadaranyaka", sanskrit: "नेति नेति", transliteration_iast: "Neti Neti", locator: "2.3.6", division_1: "2", division_2: "3.6", category: "advaita", is_mahavakya: false, citation_status: "legacy_uncited", tags: ["inquiry", "brahman", "method"] },
  { id: "v-prajnanam-brahma", text_id: "t-aitareya", sanskrit: "प्रज्ञानं ब्रह्म", transliteration_iast: "Prajñānaṃ Brahma", locator: "3.3", division_1: "3", division_2: "3", category: "advaita", is_mahavakya: true, citation_status: "legacy_uncited", tags: ["mahavakya", "consciousness", "brahman"] },
  { id: "v-tat-tvam-asi", text_id: "t-chandogya", sanskrit: "तत्त्वमसि", transliteration_iast: "Tat Tvam Asi", locator: "6.8.7", division_1: "6", division_2: "8.7", category: "advaita", is_mahavakya: true, citation_status: "legacy_uncited", tags: ["mahavakya", "atman", "brahman"] },
  { id: "v-ayam-atma-brahma", text_id: "t-mandukya", sanskrit: "अयमात्मा ब्रह्म", transliteration_iast: "Ayam Ātmā Brahma", locator: "1.2", division_1: "1", division_2: "2", category: "advaita", is_mahavakya: true, citation_status: "legacy_uncited", tags: ["mahavakya", "atman", "brahman"] },
  { id: "v-purnamadah", text_id: "t-isha", sanskrit: "ॐ पूर्णमदः पूर्णमिदम्", transliteration_iast: "Oṃ Pūrṇamadaḥ Pūrṇamidam", locator: "Invocation", division_1: null, division_2: null, category: "shruti", is_mahavakya: false, citation_status: "legacy_uncited", tags: ["purna", "wholeness", "brahman"] },
];

/** → translations. Every row carries a source_id; none may be null. */
export const VERSE_TRANSLATIONS: TranslationRow[] = [
  // सर्वं खल्विदं ब्रह्म
  { verse_id: "v-sarvam-khalvidam", language: "en", source_id: "site-editorial", is_primary: true, translation_text: "All this is verily Brahman — not some of it, not most of it. All of it. The ground beneath apparent difference." },
  { verse_id: "v-sarvam-khalvidam", language: "kn", source_id: "site-editorial", is_primary: true, translation_text: "ಇದೆಲ್ಲವೂ ನಿಜಕ್ಕೂ ಬ್ರಹ್ಮವೇ — ಇದರ ಕೆಲವು ಭಾಗವಲ್ಲ, ಹೆಚ್ಚಿನ ಭಾಗವೂ ಅಲ್ಲ. ಸಂಪೂರ್ಣವಾಗಿ. ಕಾಣುವ ಭೇದದ ಕೆಳಗಿನ ಆಧಾರ." },
  { verse_id: "v-sarvam-khalvidam", language: "hi", source_id: "site-editorial", is_primary: true, translation_text: "यह सब वस्तुतः ब्रह्म ही है — इसका कुछ अंश नहीं, अधिकांश नहीं। सम्पूर्ण। दिखाई देने वाले भेद के नीचे का आधार।" },

  // अहं ब्रह्मास्मि
  { verse_id: "v-aham-brahmasmi", language: "en", source_id: "site-editorial", is_primary: true, translation_text: "I am Brahman. Not as arrogance — as the recognition that there is no boundary between the knower and the known." },
  { verse_id: "v-aham-brahmasmi", language: "kn", source_id: "site-editorial", is_primary: true, translation_text: "ನಾನು ಬ್ರಹ್ಮ. ಇದು ಅಹಂಕಾರವಲ್ಲ — ತಿಳಿಯುವವನಿಗೂ ತಿಳಿಯಲ್ಪಡುವುದಕ್ಕೂ ನಡುವೆ ಯಾವ ಗಡಿಯೂ ಇಲ್ಲ ಎಂಬ ಅರಿವು." },
  { verse_id: "v-aham-brahmasmi", language: "hi", source_id: "site-editorial", is_primary: true, translation_text: "मैं ब्रह्म हूँ। यह अहंकार नहीं — यह पहचान है कि ज्ञाता और ज्ञेय के बीच कोई सीमा नहीं है।" },

  // एकमेवाद्वितीयम्
  { verse_id: "v-ekam-evadvitiyam", language: "en", source_id: "site-editorial", is_primary: true, translation_text: "One only, without a second. Not one among many — one in which there is no other. The most radical statement in human thought." },
  { verse_id: "v-ekam-evadvitiyam", language: "kn", source_id: "site-editorial", is_primary: true, translation_text: "ಒಂದೇ, ಎರಡನೆಯದಿಲ್ಲದೆ. ಹಲವರಲ್ಲಿ ಒಂದಲ್ಲ — ಬೇರೊಂದೇ ಇಲ್ಲದ ಒಂದು. ಮಾನವ ಚಿಂತನೆಯ ಅತ್ಯಂತ ಮೂಲಭೂತ ಘೋಷಣೆ." },
  { verse_id: "v-ekam-evadvitiyam", language: "hi", source_id: "site-editorial", is_primary: true, translation_text: "एक ही, द्वितीय रहित। अनेकों में से एक नहीं — वह एक जिसमें दूसरा है ही नहीं। मानव चिंतन का सर्वाधिक मौलिक कथन।" },

  // नेति नेति
  { verse_id: "v-neti-neti", language: "en", source_id: "site-editorial", is_primary: true, translation_text: "Not this, not this. Arriving at Brahman by negating everything that Brahman is not — until only the negator remains." },
  { verse_id: "v-neti-neti", language: "kn", source_id: "site-editorial", is_primary: true, translation_text: "ಇದಲ್ಲ, ಇದಲ್ಲ. ಬ್ರಹ್ಮವಲ್ಲದ ಎಲ್ಲವನ್ನೂ ನಿರಾಕರಿಸುತ್ತಾ ಬ್ರಹ್ಮವನ್ನು ತಲುಪುವುದು — ನಿರಾಕರಿಸುವವನೊಬ್ಬನೇ ಉಳಿಯುವವರೆಗೆ." },
  { verse_id: "v-neti-neti", language: "hi", source_id: "site-editorial", is_primary: true, translation_text: "यह नहीं, यह नहीं। जो ब्रह्म नहीं है उस सबका निषेध करते हुए ब्रह्म तक पहुँचना — जब तक केवल निषेध करने वाला ही शेष रह जाए।" },

  // प्रज्ञानं ब्रह्म
  { verse_id: "v-prajnanam-brahma", language: "en", source_id: "site-editorial", is_primary: true, translation_text: "Consciousness is Brahman. Pure awareness is the ground of all existence." },
  { verse_id: "v-prajnanam-brahma", language: "kn", source_id: "site-editorial", is_primary: true, translation_text: "ಪ್ರಜ್ಞಾನವೇ ಬ್ರಹ್ಮ. ಶುದ್ಧ ಅರಿವೇ ಸಮಸ್ತ ಅಸ್ತಿತ್ವದ ಆಧಾರ." },
  { verse_id: "v-prajnanam-brahma", language: "hi", source_id: "site-editorial", is_primary: true, translation_text: "प्रज्ञान ही ब्रह्म है। शुद्ध चैतन्य ही समस्त अस्तित्व का आधार है।" },

  // तत्त्वमसि
  { verse_id: "v-tat-tvam-asi", language: "en", source_id: "site-editorial", is_primary: true, translation_text: "Thou Art That. The individual self is not different from the ultimate reality." },
  { verse_id: "v-tat-tvam-asi", language: "kn", source_id: "site-editorial", is_primary: true, translation_text: "ನೀನೇ ಅದು. ವ್ಯಕ್ತಿಗತ ಆತ್ಮವು ಪರಮ ಸತ್ಯದಿಂದ ಬೇರೆಯಲ್ಲ." },
  { verse_id: "v-tat-tvam-asi", language: "hi", source_id: "site-editorial", is_primary: true, translation_text: "वह तू है। व्यक्तिगत आत्मा परम सत्य से भिन्न नहीं है।" },

  // अयमात्मा ब्रह्म
  { verse_id: "v-ayam-atma-brahma", language: "en", source_id: "site-editorial", is_primary: true, translation_text: "This Self is Brahman. Look within; there lies the infinite." },
  { verse_id: "v-ayam-atma-brahma", language: "kn", source_id: "site-editorial", is_primary: true, translation_text: "ಈ ಆತ್ಮವೇ ಬ್ರಹ್ಮ. ಒಳಗೆ ನೋಡು; ಅಲ್ಲಿಯೇ ಅನಂತವಿದೆ." },
  { verse_id: "v-ayam-atma-brahma", language: "hi", source_id: "site-editorial", is_primary: true, translation_text: "यह आत्मा ही ब्रह्म है। भीतर देखो; वहीं अनंत है।" },

  // ॐ पूर्णमदः पूर्णमिदम्
  { verse_id: "v-purnamadah", language: "en", source_id: "site-editorial", is_primary: true, translation_text: "That is whole. This is whole. From wholeness emerges wholeness. Even after wholeness is taken from wholeness, wholeness remains." },
  { verse_id: "v-purnamadah", language: "kn", source_id: "site-editorial", is_primary: true, translation_text: "ಅದು ಪೂರ್ಣ. ಇದು ಪೂರ್ಣ. ಪೂರ್ಣದಿಂದ ಪೂರ್ಣವು ಹೊರಹೊಮ್ಮುತ್ತದೆ. ಪೂರ್ಣದಿಂದ ಪೂರ್ಣವನ್ನು ತೆಗೆದರೂ ಪೂರ್ಣವೇ ಉಳಿಯುತ್ತದೆ." },
  { verse_id: "v-purnamadah", language: "hi", source_id: "site-editorial", is_primary: true, translation_text: "वह पूर्ण है। यह पूर्ण है। पूर्ण से पूर्ण ही प्रकट होता है। पूर्ण में से पूर्ण निकाल लेने पर भी पूर्ण ही शेष रहता है।" },
];

/** Site editorial notes — clearly the site's own voice, never a cited translation. */
export const VERSE_NOTES: VerseNoteRow[] = [
  { verse_id: "v-aham-brahmasmi", language: "en", note: "One of the four Mahavakyas — the great sayings of the Upanishads. Spoken in the Brihadaranyaka, it is the direct assertion of non-difference between the individual self and Brahman." },
  { verse_id: "v-aham-brahmasmi", language: "kn", note: "ನಾಲ್ಕು ಮಹಾವಾಕ್ಯಗಳಲ್ಲಿ ಒಂದು. ಬೃಹದಾರಣ್ಯಕದಲ್ಲಿ ಹೇಳಲ್ಪಟ್ಟ ಇದು, ಜೀವಾತ್ಮ ಮತ್ತು ಬ್ರಹ್ಮನ ನಡುವೆ ಭೇದವಿಲ್ಲ ಎಂಬುದರ ನೇರ ಪ್ರತಿಪಾದನೆ." },
  { verse_id: "v-aham-brahmasmi", language: "hi", note: "चार महावाक्यों में से एक। बृहदारण्यक में कहा गया यह वाक्य जीवात्मा और ब्रह्म के अभेद की प्रत्यक्ष घोषणा है।" },

  { verse_id: "v-neti-neti", language: "en", note: "The method of Neti Neti is the systematic negation of everything that can be objectified. What remains when all objects are negated is the subject itself: pure awareness." },
  { verse_id: "v-neti-neti", language: "kn", note: "ನೇತಿ ನೇತಿ ವಿಧಾನವು ವಸ್ತುವಾಗಿ ಕಾಣಬಹುದಾದ ಎಲ್ಲವನ್ನೂ ಕ್ರಮವಾಗಿ ನಿರಾಕರಿಸುವುದು. ಎಲ್ಲಾ ವಸ್ತುಗಳನ್ನು ನಿರಾಕರಿಸಿದ ಮೇಲೆ ಉಳಿಯುವುದು ಸ್ವತಃ ವಿಷಯಿಯೇ: ಶುದ್ಧ ಅರಿವು." },
  { verse_id: "v-neti-neti", language: "hi", note: "नेति नेति की पद्धति उस सबका क्रमिक निषेध है जिसे विषय बनाया जा सकता है। समस्त विषयों के निषेध के बाद जो शेष रहता है वह स्वयं विषयी है: शुद्ध चैतन्य।" },

  { verse_id: "v-prajnanam-brahma", language: "en", note: "The Mahavakya of the Rigveda. It points directly at consciousness itself as the ultimate reality — not an object of consciousness, but consciousness as such." },
  { verse_id: "v-prajnanam-brahma", language: "kn", note: "ಋಗ್ವೇದದ ಮಹಾವಾಕ್ಯ. ಇದು ಪ್ರಜ್ಞೆಯನ್ನೇ ಪರಮ ಸತ್ಯವೆಂದು ನೇರವಾಗಿ ತೋರಿಸುತ್ತದೆ — ಪ್ರಜ್ಞೆಯ ವಿಷಯವಲ್ಲ, ಪ್ರಜ್ಞೆಯೇ." },
  { verse_id: "v-prajnanam-brahma", language: "hi", note: "ऋग्वेद का महावाक्य। यह सीधे चैतन्य को ही परम सत्य बताता है — चैतन्य का विषय नहीं, स्वयं चैतन्य।" },

  { verse_id: "v-tat-tvam-asi", language: "en", note: "The Mahavakya of the Samaveda, and the teaching for which this platform is named. Uddalaka gave this teaching to his son Shvetaketu nine times, through nine analogies, until the recognition arose." },
  { verse_id: "v-tat-tvam-asi", language: "kn", note: "ಸಾಮವೇದದ ಮಹಾವಾಕ್ಯ, ಮತ್ತು ಈ ತಾಣಕ್ಕೆ ಹೆಸರು ಬಂದ ಬೋಧನೆ. ಉದ್ದಾಲಕನು ತನ್ನ ಮಗ ಶ್ವೇತಕೇತುವಿಗೆ ಒಂಬತ್ತು ಬಾರಿ, ಒಂಬತ್ತು ಉಪಮೆಗಳ ಮೂಲಕ ಈ ಬೋಧನೆಯನ್ನು ನೀಡಿದನು." },
  { verse_id: "v-tat-tvam-asi", language: "hi", note: "सामवेद का महावाक्य, और वह उपदेश जिस पर इस मंच का नाम है। उद्दालक ने अपने पुत्र श्वेतकेतु को नौ बार, नौ उपमाओं द्वारा यह उपदेश दिया।" },

  { verse_id: "v-ayam-atma-brahma", language: "en", note: "The Mahavakya of the Atharvaveda. The Mandukya Upanishad is the shortest — twelve verses — and this is its central declaration." },
  { verse_id: "v-ayam-atma-brahma", language: "kn", note: "ಅಥರ್ವವೇದದ ಮಹಾವಾಕ್ಯ. ಮಾಂಡೂಕ್ಯ ಉಪನಿಷತ್ತು ಅತ್ಯಂತ ಚಿಕ್ಕದು — ಹನ್ನೆರಡು ಶ್ಲೋಕಗಳು — ಮತ್ತು ಇದೇ ಅದರ ಕೇಂದ್ರ ಘೋಷಣೆ." },
  { verse_id: "v-ayam-atma-brahma", language: "hi", note: "अथर्ववेद का महावाक्य। माण्डूक्य उपनिषद् सबसे छोटा है — बारह श्लोक — और यही उसकी केंद्रीय घोषणा है।" },

  { verse_id: "v-purnamadah", language: "en", note: "The opening invocation of the Isha Upanishad. It describes Brahman as Purna — complete, lacking nothing. The mathematics of infinity: infinity minus infinity is still infinity." },
  { verse_id: "v-purnamadah", language: "kn", note: "ಈಶಾವಾಸ್ಯ ಉಪನಿಷತ್ತಿನ ಆರಂಭದ ಶಾಂತಿಮಂತ್ರ. ಇದು ಬ್ರಹ್ಮವನ್ನು ಪೂರ್ಣ ಎಂದು ವರ್ಣಿಸುತ್ತದೆ — ಸಂಪೂರ್ಣ, ಯಾವ ಕೊರತೆಯೂ ಇಲ್ಲದ್ದು. ಅನಂತದ ಗಣಿತ: ಅನಂತದಿಂದ ಅನಂತವನ್ನು ಕಳೆದರೂ ಅನಂತವೇ." },
  { verse_id: "v-purnamadah", language: "hi", note: "ईशावास्य उपनिषद् का आरंभिक शांतिमंत्र। यह ब्रह्म को पूर्ण बताता है — सम्पूर्ण, जिसमें किसी की कमी नहीं। अनंत का गणित: अनंत में से अनंत घटाने पर भी अनंत ही।" },
];
