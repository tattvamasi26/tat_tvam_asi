import type { TextRow, TextTranslationRow } from "./types";

/**
 * One generalised hierarchy for every canonical work. Today it holds
 * Upanishads; the Gita, Brahma Sutras and Stotras land in this same
 * table with a different `work_type` — no forked schema per text.
 *
 * Brihadaranyaka and Aitareya are present because verses reference
 * them, even though neither has a browse page yet: foreign keys must
 * resolve locally exactly as they will in Postgres.
 */
export const TEXTS: TextRow[] = [
  { id: "t-mandukya", slug: "mandukya", work_type: "upanishad", parent_id: null, name_sanskrit: "माण्डूक्य", name_iast: "Māṇḍūkya Upaniṣad", veda: "Atharvaveda", verse_count: 12 },
  { id: "t-kena", slug: "kena", work_type: "upanishad", parent_id: null, name_sanskrit: "केन", name_iast: "Kena Upaniṣad", veda: "Samaveda", verse_count: 35 },
  { id: "t-isha", slug: "isha", work_type: "upanishad", parent_id: null, name_sanskrit: "ईश", name_iast: "Īśa Upaniṣad", veda: "Yajurveda", verse_count: 18 },
  { id: "t-katha", slug: "katha", work_type: "upanishad", parent_id: null, name_sanskrit: "कठ", name_iast: "Kaṭha Upaniṣad", veda: "Yajurveda", verse_count: 119 },
  { id: "t-mundaka", slug: "mundaka", work_type: "upanishad", parent_id: null, name_sanskrit: "मुण्डक", name_iast: "Muṇḍaka Upaniṣad", veda: "Atharvaveda", verse_count: 64 },
  { id: "t-chandogya", slug: "chandogya", work_type: "upanishad", parent_id: null, name_sanskrit: "छान्दोग्य", name_iast: "Chāndogya Upaniṣad", veda: "Samaveda", verse_count: 628 },
  { id: "t-brihadaranyaka", slug: "brihadaranyaka", work_type: "upanishad", parent_id: null, name_sanskrit: "बृहदारण्यक", name_iast: "Bṛhadāraṇyaka Upaniṣad", veda: "Yajurveda", verse_count: 434 },
  { id: "t-aitareya", slug: "aitareya", work_type: "upanishad", parent_id: null, name_sanskrit: "ऐतरेय", name_iast: "Aitareya Upaniṣad", veda: "Rigveda", verse_count: 33 },
];

export const TEXT_TRANSLATIONS: TextTranslationRow[] = [
  // ── Mandukya
  { text_id: "t-mandukya", language: "en", name: "Mandukya Upanishad", summary: "The shortest and most complete Upanishad. Twelve verses on Om and the four states of consciousness — waking, dream, deep sleep, and Turiya, the witnessing awareness behind all three.", key_teaching: "Ayam Atma Brahma — This Self is Brahman" },
  { text_id: "t-mandukya", language: "kn", name: "ಮಾಂಡೂಕ್ಯ ಉಪನಿಷತ್ತು", summary: "ಅತ್ಯಂತ ಚಿಕ್ಕದಾದರೂ ಅತ್ಯಂತ ಪರಿಪೂರ್ಣವಾದ ಉಪನಿಷತ್ತು. ಓಂಕಾರ ಮತ್ತು ಪ್ರಜ್ಞೆಯ ನಾಲ್ಕು ಅವಸ್ಥೆಗಳ ಬಗ್ಗೆ ಹನ್ನೆರಡು ಶ್ಲೋಕಗಳು — ಜಾಗ್ರತ್, ಸ್ವಪ್ನ, ಸುಷುಪ್ತಿ ಮತ್ತು ಈ ಮೂರರ ಹಿಂದಿನ ಸಾಕ್ಷಿಪ್ರಜ್ಞೆಯಾದ ತುರೀಯ.", key_teaching: "ಅಯಮಾತ್ಮಾ ಬ್ರಹ್ಮ — ಈ ಆತ್ಮವೇ ಬ್ರಹ್ಮ" },
  { text_id: "t-mandukya", language: "hi", name: "माण्डूक्य उपनिषद्", summary: "सबसे छोटा किंतु सर्वाधिक पूर्ण उपनिषद्। ॐ और चेतना की चार अवस्थाओं पर बारह श्लोक — जाग्रत, स्वप्न, सुषुप्ति, और इन तीनों के पीछे की साक्षी चेतना तुरीय।", key_teaching: "अयमात्मा ब्रह्म — यह आत्मा ही ब्रह्म है" },

  // ── Kena
  { text_id: "t-kena", language: "en", name: "Kena Upanishad", summary: "Explores the nature of Brahman as that which cannot be known by the ordinary mind. The eye of the eye, the mind of the mind, the ear of the ear.", key_teaching: "That which is not thought by the mind, but by which the mind thinks — that alone is Brahman." },
  { text_id: "t-kena", language: "kn", name: "ಕೇನ ಉಪನಿಷತ್ತು", summary: "ಸಾಮಾನ್ಯ ಮನಸ್ಸಿನಿಂದ ತಿಳಿಯಲಾಗದ ಬ್ರಹ್ಮದ ಸ್ವರೂಪವನ್ನು ಶೋಧಿಸುತ್ತದೆ. ಕಣ್ಣಿನ ಕಣ್ಣು, ಮನಸ್ಸಿನ ಮನಸ್ಸು, ಕಿವಿಯ ಕಿವಿ.", key_teaching: "ಮನಸ್ಸು ಯಾವುದನ್ನು ಯೋಚಿಸಲಾರದೋ, ಆದರೆ ಯಾವುದರಿಂದ ಮನಸ್ಸು ಯೋಚಿಸುತ್ತದೋ — ಅದೇ ಬ್ರಹ್ಮ." },
  { text_id: "t-kena", language: "hi", name: "केन उपनिषद्", summary: "ब्रह्म के उस स्वरूप का अन्वेषण जिसे साधारण मन से नहीं जाना जा सकता। आँख की आँख, मन का मन, कान का कान।", key_teaching: "जिसे मन नहीं सोच सकता, किंतु जिससे मन सोचता है — वही ब्रह्म है।" },

  // ── Isha
  { text_id: "t-isha", language: "en", name: "Isha Upanishad", summary: "The shortest in the Yajurveda. Reconciles knowledge and action, renunciation and engagement. Everything is enveloped by the Lord — renounce and enjoy.", key_teaching: "Tena tyaktena bhuñjīthāḥ — By renouncing, enjoy." },
  { text_id: "t-isha", language: "kn", name: "ಈಶಾವಾಸ್ಯ ಉಪನಿಷತ್ತು", summary: "ಯಜುರ್ವೇದದ ಅತ್ಯಂತ ಚಿಕ್ಕ ಉಪನಿಷತ್ತು. ಜ್ಞಾನ ಮತ್ತು ಕರ್ಮ, ತ್ಯಾಗ ಮತ್ತು ತೊಡಗಿಸಿಕೊಳ್ಳುವಿಕೆಯನ್ನು ಸಮನ್ವಯಗೊಳಿಸುತ್ತದೆ. ಎಲ್ಲವೂ ಈಶ್ವರನಿಂದ ಆವೃತವಾಗಿದೆ — ತ್ಯಜಿಸಿ ಅನುಭವಿಸು.", key_teaching: "ತೇನ ತ್ಯಕ್ತೇನ ಭುಂಜೀಥಾಃ — ತ್ಯಾಗದಿಂದಲೇ ಅನುಭವಿಸು." },
  { text_id: "t-isha", language: "hi", name: "ईशावास्य उपनिषद्", summary: "यजुर्वेद का सबसे छोटा उपनिषद्। ज्ञान और कर्म, त्याग और प्रवृत्ति का समन्वय करता है। सब कुछ ईश्वर से आवृत है — त्याग कर भोगो।", key_teaching: "तेन त्यक्तेन भुञ्जीथाः — त्याग कर भोगो।" },

  // ── Katha
  { text_id: "t-katha", language: "en", name: "Katha Upanishad", summary: "Nachiketa, a young boy, asks Yama — the lord of death — what lies beyond death. Yama's answer is the complete teaching on the immortal Self.", key_teaching: "The Self is not born, nor does it die. It did not come from anywhere; nothing came from it." },
  { text_id: "t-katha", language: "kn", name: "ಕಠ ಉಪನಿಷತ್ತು", summary: "ನಚಿಕೇತನೆಂಬ ಬಾಲಕನು ಮೃತ್ಯುದೇವತೆಯಾದ ಯಮನನ್ನು ಮರಣಾನಂತರ ಏನಿದೆ ಎಂದು ಕೇಳುತ್ತಾನೆ. ಯಮನ ಉತ್ತರವೇ ಅಮರ ಆತ್ಮದ ಸಂಪೂರ್ಣ ಬೋಧನೆ.", key_teaching: "ಆತ್ಮವು ಹುಟ್ಟುವುದಿಲ್ಲ, ಸಾಯುವುದಿಲ್ಲ. ಅದು ಎಲ್ಲಿಂದಲೂ ಬರಲಿಲ್ಲ; ಅದರಿಂದ ಏನೂ ಬರಲಿಲ್ಲ." },
  { text_id: "t-katha", language: "hi", name: "कठ उपनिषद्", summary: "नचिकेता नामक बालक मृत्यु के देवता यम से पूछता है कि मृत्यु के परे क्या है। यम का उत्तर ही अमर आत्मा का सम्पूर्ण उपदेश है।", key_teaching: "आत्मा न जन्म लेता है, न मरता है। वह कहीं से नहीं आया; उससे कुछ नहीं आया।" },

  // ── Mundaka
  { text_id: "t-mundaka", language: "en", name: "Mundaka Upanishad", summary: "Distinguishes the higher knowledge of Brahman from the lower knowledge of the world. Uses the image of two birds on the same tree.", key_teaching: "Two birds, inseparable companions, dwell on the same tree. One eats the fruits; the other only watches." },
  { text_id: "t-mundaka", language: "kn", name: "ಮುಂಡಕ ಉಪನಿಷತ್ತು", summary: "ಬ್ರಹ್ಮಜ್ಞಾನವೆಂಬ ಪರಾವಿದ್ಯೆಯನ್ನು ಲೌಕಿಕ ಜ್ಞಾನವೆಂಬ ಅಪರಾವಿದ್ಯೆಯಿಂದ ಬೇರ್ಪಡಿಸುತ್ತದೆ. ಒಂದೇ ಮರದ ಮೇಲಿನ ಎರಡು ಹಕ್ಕಿಗಳ ಸುಂದರ ಉಪಮೆಯನ್ನು ಬಳಸುತ್ತದೆ.", key_teaching: "ಎರಡು ಹಕ್ಕಿಗಳು, ಅಗಲದ ಗೆಳೆಯರು, ಒಂದೇ ಮರದಲ್ಲಿ ವಾಸಿಸುತ್ತವೆ. ಒಂದು ಹಣ್ಣನ್ನು ತಿನ್ನುತ್ತದೆ; ಇನ್ನೊಂದು ಕೇವಲ ನೋಡುತ್ತದೆ." },
  { text_id: "t-mundaka", language: "hi", name: "मुण्डक उपनिषद्", summary: "ब्रह्मज्ञान रूपी परा विद्या को सांसारिक ज्ञान रूपी अपरा विद्या से अलग करता है। एक ही वृक्ष पर बैठे दो पक्षियों की सुंदर उपमा देता है।", key_teaching: "दो पक्षी, अभिन्न मित्र, एक ही वृक्ष पर रहते हैं। एक फल खाता है; दूसरा केवल देखता है।" },

  // ── Chandogya
  { text_id: "t-chandogya", language: "en", name: "Chandogya Upanishad", summary: "The longest and most storied Upanishad. Contains Tat Tvam Asi — given nine times by a father to his son through nine different analogies, from salt dissolved in water to the seed of the fig.", key_teaching: "Tat Tvam Asi — Thou Art That" },
  { text_id: "t-chandogya", language: "kn", name: "ಛಾಂದೋಗ್ಯ ಉಪನಿಷತ್ತು", summary: "ಅತ್ಯಂತ ದೀರ್ಘವಾದ ಮತ್ತು ಕಥೆಗಳಿಂದ ಸಮೃದ್ಧವಾದ ಉಪನಿಷತ್ತು. ತತ್ತ್ವಮಸಿ ಇದರಲ್ಲಿದೆ — ತಂದೆಯು ಮಗನಿಗೆ ಒಂಬತ್ತು ಬಾರಿ, ನೀರಿನಲ್ಲಿ ಕರಗಿದ ಉಪ್ಪಿನಿಂದ ಆಲದ ಬೀಜದವರೆಗೆ ಒಂಬತ್ತು ಬೇರೆ ಬೇರೆ ಉಪಮೆಗಳ ಮೂಲಕ ನೀಡಿದ ಬೋಧನೆ.", key_teaching: "ತತ್ತ್ವಮಸಿ — ನೀನೇ ಅದು" },
  { text_id: "t-chandogya", language: "hi", name: "छान्दोग्य उपनिषद्", summary: "सबसे लंबा और कथाओं से समृद्ध उपनिषद्। इसमें तत्त्वमसि है — पिता ने पुत्र को नौ बार, जल में घुले नमक से लेकर बरगद के बीज तक, नौ भिन्न उपमाओं द्वारा यह उपदेश दिया।", key_teaching: "तत्त्वमसि — वह तू है" },

  // ── Brihadaranyaka
  { text_id: "t-brihadaranyaka", language: "en", name: "Brihadaranyaka Upanishad", summary: "The great forest of teaching — the oldest and largest Upanishad. Home of Aham Brahmasmi and of Yajnavalkya's dialogues, including the one with Maitreyi on what is truly worth desiring.", key_teaching: "Aham Brahmasmi — I am Brahman" },
  { text_id: "t-brihadaranyaka", language: "kn", name: "ಬೃಹದಾರಣ್ಯಕ ಉಪನಿಷತ್ತು", summary: "ಬೋಧನೆಯ ಮಹಾ ಅರಣ್ಯ — ಅತ್ಯಂತ ಪ್ರಾಚೀನ ಮತ್ತು ಅತ್ಯಂತ ವಿಸ್ತಾರವಾದ ಉಪನಿಷತ್ತು. ಅಹಂ ಬ್ರಹ್ಮಾಸ್ಮಿ ಮತ್ತು ಯಾಜ್ಞವಲ್ಕ್ಯನ ಸಂವಾದಗಳ ನೆಲೆ, ಮೈತ್ರೇಯಿಯೊಂದಿಗಿನ ಸಂವಾದವೂ ಸೇರಿದಂತೆ.", key_teaching: "ಅಹಂ ಬ್ರಹ್ಮಾಸ್ಮಿ — ನಾನು ಬ್ರಹ್ಮ" },
  { text_id: "t-brihadaranyaka", language: "hi", name: "बृहदारण्यक उपनिषद्", summary: "उपदेश का महावन — सबसे प्राचीन और सबसे विशाल उपनिषद्। अहं ब्रह्मास्मि तथा याज्ञवल्क्य के संवादों का घर, जिसमें मैत्रेयी से हुआ संवाद भी है।", key_teaching: "अहं ब्रह्मास्मि — मैं ब्रह्म हूँ" },

  // ── Aitareya
  { text_id: "t-aitareya", language: "en", name: "Aitareya Upanishad", summary: "Belongs to the Rigveda. Describes creation as the self-unfolding of Atman, and culminates in the Mahavakya that consciousness itself is Brahman.", key_teaching: "Prajnanam Brahma — Consciousness is Brahman" },
  { text_id: "t-aitareya", language: "kn", name: "ಐತರೇಯ ಉಪನಿಷತ್ತು", summary: "ಋಗ್ವೇದಕ್ಕೆ ಸೇರಿದ್ದು. ಸೃಷ್ಟಿಯನ್ನು ಆತ್ಮದ ಸ್ವಯಂ ವಿಕಾಸವೆಂದು ವರ್ಣಿಸುತ್ತದೆ, ಮತ್ತು ಪ್ರಜ್ಞೆಯೇ ಬ್ರಹ್ಮ ಎಂಬ ಮಹಾವಾಕ್ಯದಲ್ಲಿ ಪರಿಸಮಾಪ್ತಿಗೊಳ್ಳುತ್ತದೆ.", key_teaching: "ಪ್ರಜ್ಞಾನಂ ಬ್ರಹ್ಮ — ಪ್ರಜ್ಞಾನವೇ ಬ್ರಹ್ಮ" },
  { text_id: "t-aitareya", language: "hi", name: "ऐतरेय उपनिषद्", summary: "ऋग्वेद से संबंधित। सृष्टि को आत्मा के स्वयं-विकास के रूप में वर्णित करता है, और इस महावाक्य पर समाप्त होता है कि चैतन्य ही ब्रह्म है।", key_teaching: "प्रज्ञानं ब्रह्म — प्रज्ञान ही ब्रह्म है" },
];
