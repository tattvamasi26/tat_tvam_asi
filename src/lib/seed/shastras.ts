import type { Locale } from "@/i18n/config";

// ─────────────────────────────────────────────────────────
//  The śāstra map.
//
//  Ten branches, from the Veda down to the short teaching texts. This
//  is the section the texts are reached through: the Vedas, the
//  Upanishads and the Gītā are branches of it rather than siblings of
//  it in the nav, because listing them in both places was the site
//  saying the same thing twice.
//
//  **Reached through, not held by.** A branch links to the section
//  that already holds it. It must never hold a second copy of a text
//  that lives elsewhere, or the site would give one hymn two
//  addresses: /vedas/rigveda and /shastras/veda/rigveda. One text, one
//  URL, always — and tests/unit/shastras.test.ts fails on any href
//  pointing back inside /shastras.
//
//  **The Upaniṣads stand on their own, second.** They are the deepest
//  work on this site, and the ten listed are the ten Shankara wrote
//  commentaries on — the same list the Shankara monograph prints.
//
//  **A branch says what it actually has.** `live` means readable now,
//  `partial` means begun and honestly incomplete, `planned` means
//  named and not yet written. A planned text is listed rather than
//  hidden, because the map is meant to show the shape of the whole —
//  including the parts this site has not reached. That is the same
//  bargain the Rigveda front door makes.
//
//  Sanskrit is stored in Devanagari here, as everywhere on the site,
//  and converted to the reader's script by the page.
// ─────────────────────────────────────────────────────────

export type ShastraStatus = "live" | "partial" | "planned";

export interface ShastraText {
  id: string;
  name: Record<Locale, string>;
  /** In Devanagari. The page converts it. */
  sanskrit: string;
  /** One line: what it is. */
  note: Record<Locale, string>;
  /** Where it lives, when it lives anywhere. */
  href?: string;
  status: ShastraStatus;
}

export interface ShastraBranch {
  id: string;
  name: Record<Locale, string>;
  sanskrit: string;
  /** Two or three letters, set large on the branch's card. */
  glyph: string;
  /** The section that already holds this branch, where one does. */
  href?: string;
  /** What this branch is, and why it is a branch. */
  lede: Record<Locale, string>;
  texts: ShastraText[];
}

export const SHASTRA_BRANCHES: ShastraBranch[] = [
  // ── 1 ───────────────────────────────────────
  {
    id: "veda",
    name: { en: "The Vedas", kn: "ವೇದಗಳು", hi: "वेद" },
    sanskrit: "वेदः",
    glyph: "वेद",
    href: "/vedas",
    lede: {
      en: "The foundation. Four collections, held as śruti — heard, not composed by anyone.",
      kn: "ಬುನಾದಿ. ನಾಲ್ಕು ಸಂಹಿತೆಗಳು, ಶ್ರುತಿ ಎಂದು ಪರಿಗಣಿತ — ಕೇಳಿಸಿಕೊಂಡವು, ಯಾರೂ ರಚಿಸಿದವಲ್ಲ.",
      hi: "आधार। चार संहिताएँ, श्रुति मानी गईं — सुनी गईं, किसी ने रची नहीं।",
    },
    texts: [
      {
        id: "rigveda",
        name: { en: "Ṛgveda", kn: "ಋಗ್ವೇದ", hi: "ऋग्वेद" },
        sanskrit: "ऋग्वेदः",
        note: {
          en: "1,028 hymns in ten maṇḍalas. Complete on this site; no translation yet.",
          kn: "ಹತ್ತು ಮಂಡಲಗಳಲ್ಲಿ ೧,೦೨೮ ಸೂಕ್ತಗಳು. ಈ ತಾಣದಲ್ಲಿ ಪೂರ್ಣ; ಅನುವಾದ ಇನ್ನೂ ಇಲ್ಲ.",
          hi: "दस मंडलों में १,०२८ सूक्त। इस साइट पर पूर्ण; अनुवाद अभी नहीं।",
        },
        href: "/vedas/rigveda",
        status: "live",
      },
      {
        id: "yajurveda",
        name: { en: "Yajurveda", kn: "ಯಜುರ್ವೇದ", hi: "यजुर्वेद" },
        sanskrit: "यजुर्वेदः",
        note: {
          en: "The formulae of the sacrifice, in prose as much as verse.",
          kn: "ಯಜ್ಞದ ಮಂತ್ರಗಳು — ಪದ್ಯದಷ್ಟೇ ಗದ್ಯದಲ್ಲಿಯೂ.",
          hi: "यज्ञ के मंत्र, पद्य जितने ही गद्य में भी।",
        },
        status: "planned",
      },
      {
        id: "samaveda",
        name: { en: "Sāmaveda", kn: "ಸಾಮವೇದ", hi: "सामवेद" },
        sanskrit: "सामवेदः",
        note: {
          en: "The Ṛgveda set to melody. Indian music begins here.",
          kn: "ಋಗ್ವೇದವೇ ರಾಗಕ್ಕೆ ಹೊಂದಿಸಿದ್ದು. ಭಾರತೀಯ ಸಂಗೀತ ಆರಂಭವಾಗುವುದು ಇಲ್ಲಿಂದ.",
          hi: "ऋग्वेद ही स्वर में बँधा। भारतीय संगीत यहीं से आरंभ होता है।",
        },
        status: "planned",
      },
      {
        id: "atharvaveda",
        name: { en: "Atharvaveda", kn: "ಅಥರ್ವವೇದ", hi: "अथर्ववेद" },
        sanskrit: "अथर्ववेदः",
        note: {
          en: "Healing, household life and the everyday — the least priestly of the four.",
          kn: "ಔಷಧ, ಮನೆವಾರ್ತೆ ಮತ್ತು ನಿತ್ಯಜೀವನ — ನಾಲ್ಕರಲ್ಲಿ ಅತಿ ಕಡಿಮೆ ಪೌರೋಹಿತ್ಯದ್ದು.",
          hi: "औषधि, गृहस्थ जीवन और रोज़मर्रा — चारों में सबसे कम पुरोहिती।",
        },
        status: "planned",
      },
    ],
  },

  // ── 2 ───────────────────────────────────────
  {
    id: "upanishads",
    name: { en: "The Upaniṣads", kn: "ಉಪನಿಷತ್ತುಗಳು", hi: "उपनिषद्" },
    sanskrit: "उपनिषदः",
    glyph: "उपनिषद्",
    href: "/upanishads",
    lede: {
      en: "Where ritual gives way to enquiry. The ten below are the ten Shankara wrote commentaries on — the list his own works settle. This is the deepest section of this site.",
      kn: "ಕರ್ಮಕಾಂಡವು ವಿಚಾರಕ್ಕೆ ದಾರಿ ಬಿಡುವಲ್ಲಿ. ಕೆಳಗಿನ ಹತ್ತು ಶಂಕರರು ಭಾಷ್ಯ ಬರೆದವು — ಅವರ ಕೃತಿಗಳೇ ನಿರ್ಣಯಿಸುವ ಪಟ್ಟಿ. ಈ ತಾಣದ ಅತ್ಯಂತ ಆಳವಾದ ವಿಭಾಗ ಇದು.",
      hi: "जहाँ कर्मकांड विचार को मार्ग देता है। नीचे के दस वही हैं जिन पर शंकर ने भाष्य लिखा — वह सूची जो उनकी अपनी कृतियाँ तय करती हैं। यह इस साइट का सबसे गहरा अनुभाग है।",
    },
    texts: [
      {
        id: "isha",
        name: { en: "Īśā", kn: "ಈಶಾ", hi: "ईशा" },
        sanskrit: "ईशोपनिषत्",
        note: {
          en: "Eighteen verses. The shortest, and the one that states the whole position first.",
          kn: "ಹದಿನೆಂಟು ಶ್ಲೋಕಗಳು. ಅತಿ ಚಿಕ್ಕದು, ಮತ್ತು ಇಡೀ ಸಿದ್ಧಾಂತವನ್ನು ಮೊದಲೇ ಹೇಳುವುದು.",
          hi: "अठारह श्लोक। सबसे छोटा, और पूरा सिद्धांत सबसे पहले कहने वाला।",
        },
        href: "/upanishads/isha",
        status: "live",
      },
      {
        id: "kena",
        name: { en: "Kena", kn: "ಕೇನ", hi: "केन" },
        sanskrit: "केनोपनिषत्",
        note: {
          en: "By whose will does the mind go out? The question the text is named for.",
          kn: "ಯಾರ ಇಚ್ಛೆಯಿಂದ ಮನಸ್ಸು ಹೊರಹೋಗುತ್ತದೆ? ಪಠ್ಯಕ್ಕೆ ಹೆಸರಿಟ್ಟ ಪ್ರಶ್ನೆ.",
          hi: "किसकी इच्छा से मन बाहर जाता है? वही प्रश्न जिससे पाठ का नाम पड़ा।",
        },
        href: "/upanishads/kena",
        status: "live",
      },
      {
        id: "katha",
        name: { en: "Kaṭha", kn: "ಕಠ", hi: "कठ" },
        sanskrit: "कठोपनिषत्",
        note: {
          en: "Naciketas asks Death what happens after death, and refuses every bribe to drop the question.",
          kn: "ನಚಿಕೇತ ಮೃತ್ಯುವನ್ನು ಮರಣಾನಂತರದ ಬಗ್ಗೆ ಕೇಳುತ್ತಾನೆ, ಪ್ರಶ್ನೆ ಬಿಡಲು ಕೊಟ್ಟ ಯಾವ ಆಮಿಷವನ್ನೂ ಒಪ್ಪುವುದಿಲ್ಲ.",
          hi: "नचिकेता मृत्यु से पूछता है कि मरण के बाद क्या — और प्रश्न छोड़ने का हर प्रलोभन ठुकराता है।",
        },
        status: "planned",
      },
      {
        id: "prashna",
        name: { en: "Praśna", kn: "ಪ್ರಶ್ನ", hi: "प्रश्न" },
        sanskrit: "प्रश्नोपनिषत्",
        note: {
          en: "Six pupils, six questions, answered in order.",
          kn: "ಆರು ಶಿಷ್ಯರು, ಆರು ಪ್ರಶ್ನೆಗಳು, ಕ್ರಮವಾಗಿ ಉತ್ತರಿಸಲ್ಪಟ್ಟವು.",
          hi: "छह शिष्य, छह प्रश्न, क्रम से उत्तरित।",
        },
        status: "planned",
      },
      {
        id: "mundaka",
        name: { en: "Muṇḍaka", kn: "ಮುಂಡಕ", hi: "मुण्डक" },
        sanskrit: "मुण्डकोपनिषत्",
        note: {
          en: "Higher knowledge and lower, and the two birds on one tree.",
          kn: "ಪರಾ ಮತ್ತು ಅಪರಾ ವಿದ್ಯೆ, ಮತ್ತು ಒಂದೇ ಮರದ ಮೇಲಿನ ಎರಡು ಹಕ್ಕಿಗಳು.",
          hi: "परा और अपरा विद्या, और एक ही वृक्ष पर दो पक्षी।",
        },
        status: "planned",
      },
      {
        id: "mandukya",
        name: { en: "Māṇḍūkya", kn: "ಮಾಂಡೂಕ್ಯ", hi: "माण्डूक्य" },
        sanskrit: "माण्डूक्योपनिषत्",
        note: {
          en: "Twelve verses on the four states of consciousness. Gauḍapāda's kārikās grew from it.",
          kn: "ಚೈತನ್ಯದ ನಾಲ್ಕು ಅವಸ್ಥೆಗಳ ಕುರಿತು ಹನ್ನೆರಡು ಶ್ಲೋಕಗಳು. ಗೌಡಪಾದರ ಕಾರಿಕೆಗಳು ಇದರಿಂದಲೇ ಬೆಳೆದವು.",
          hi: "चेतना की चार अवस्थाओं पर बारह श्लोक। गौडपाद की कारिकाएँ इसी से उपजीं।",
        },
        href: "/upanishads/mandukya",
        status: "live",
      },
      {
        id: "aitareya",
        name: { en: "Aitareya", kn: "ಐತರೇಯ", hi: "ऐतरेय" },
        sanskrit: "ऐतरेयोपनिषत्",
        note: {
          en: "From the Rigveda. Creation, and prajñānam brahma.",
          kn: "ಋಗ್ವೇದದಿಂದ. ಸೃಷ್ಟಿ, ಮತ್ತು ಪ್ರಜ್ಞಾನಂ ಬ್ರಹ್ಮ.",
          hi: "ऋग्वेद से। सृष्टि, और प्रज्ञानं ब्रह्म।",
        },
        status: "planned",
      },
      {
        id: "taittiriya",
        name: { en: "Taittirīya", kn: "ತೈತ್ತಿರೀಯ", hi: "तैत्तिरीय" },
        sanskrit: "तैत्तिरीयोपनिषत्",
        note: {
          en: "The five sheaths, and the teacher's parting charge to the student.",
          kn: "ಪಂಚಕೋಶಗಳು, ಮತ್ತು ಶಿಷ್ಯನಿಗೆ ಗುರು ಕೊಡುವ ಅಂತಿಮ ಉಪದೇಶ.",
          hi: "पंचकोश, और शिष्य को गुरु का अंतिम अनुशासन।",
        },
        status: "planned",
      },
      {
        id: "chandogya",
        name: { en: "Chāndogya", kn: "ಛಾಂದೋಗ್ಯ", hi: "छान्दोग्य" },
        sanskrit: "छान्दोग्योपनिषत्",
        note: {
          en: "628 verses, and the one that says tat tvam asi — the phrase this site is named for. Begun here.",
          kn: "೬೨೮ ಶ್ಲೋಕಗಳು, ಮತ್ತು ತತ್ತ್ವಮಸಿ ಎಂದು ಹೇಳುವುದು ಇದೇ — ಈ ತಾಣದ ಹೆಸರು ಬಂದ ವಾಕ್ಯ. ಇಲ್ಲಿ ಆರಂಭವಾಗಿದೆ.",
          hi: "६२८ श्लोक, और तत्त्वमसि कहने वाला यही — वही वाक्य जिससे इस साइट का नाम है। यहाँ आरंभ।",
        },
        href: "/upanishads/chandogya",
        status: "partial",
      },
      {
        id: "brihadaranyaka",
        name: { en: "Bṛhadāraṇyaka", kn: "ಬೃಹದಾರಣ್ಯಕ", hi: "बृहदारण्यक" },
        sanskrit: "बृहदारण्यकोपनिषत्",
        note: {
          en: "The largest, and the oldest. Yājñavalkya argues his way through a king's court.",
          kn: "ಅತಿ ದೊಡ್ಡದು, ಮತ್ತು ಅತಿ ಪ್ರಾಚೀನ. ಯಾಜ್ಞವಲ್ಕ್ಯರು ರಾಜಸಭೆಯಲ್ಲಿ ವಾದಿಸಿ ಗೆಲ್ಲುತ್ತಾರೆ.",
          hi: "सबसे बड़ा, और सबसे प्राचीन। याज्ञवल्क्य राजसभा में तर्क करते हुए आगे बढ़ते हैं।",
        },
        status: "planned",
      },
    ],
  },

  // ── 3 ───────────────────────────────────────
  {
    id: "vedanta",
    name: { en: "Vedānta", kn: "ವೇದಾಂತ", hi: "वेदांत" },
    sanskrit: "वेदान्तः",
    glyph: "वेदान्त",
    lede: {
      en: "The Upaniṣads, the Gītā and the Brahma Sūtras together make the Prasthāna-traya, the three starting points. A school of Vedānta is founded by commenting on all three — which is why Shankara, Ramanuja and Madhva wrote on the same books and disagreed completely. The Gītā has a section of its own on this site.",
      kn: "ಉಪನಿಷತ್ತುಗಳು, ಗೀತೆ ಮತ್ತು ಬ್ರಹ್ಮಸೂತ್ರಗಳು ಒಟ್ಟಾಗಿ ಪ್ರಸ್ಥಾನತ್ರಯವಾಗುತ್ತವೆ. ಈ ಮೂರಕ್ಕೂ ಭಾಷ್ಯ ಬರೆದೇ ವೇದಾಂತದ ಶಾಖೆಯನ್ನು ಸ್ಥಾಪಿಸಬೇಕು — ಆದ್ದರಿಂದಲೇ ಶಂಕರ, ರಾಮಾನುಜ, ಮಧ್ವರು ಒಂದೇ ಗ್ರಂಥಗಳ ಮೇಲೆ ಬರೆದೂ ಸಂಪೂರ್ಣ ಭಿನ್ನರಾದರು. ಈ ತಾಣದಲ್ಲಿ ಗೀತೆಗೆ ತನ್ನದೇ ವಿಭಾಗವಿದೆ.",
      hi: "उपनिषद्, गीता और ब्रह्मसूत्र मिलकर प्रस्थानत्रय बनते हैं। वेदांत की शाखा इन तीनों पर भाष्य लिखकर ही स्थापित होती है — इसीलिए शंकर, रामानुज और मध्व एक ही ग्रंथों पर लिखकर भी पूर्णतः असहमत रहे। गीता का इस साइट पर अपना अनुभाग है।",
    },
    texts: [
      {
        id: "brahma-sutras",
        name: { en: "Brahma Sūtras", kn: "ಬ್ರಹ್ಮಸೂತ್ರಗಳು", hi: "ब्रह्मसूत्र" },
        sanskrit: "ब्रह्मसूत्राणि",
        note: {
          en: "555 aphorisms, deliberately too compressed to read alone. Whoever supplies the commentary supplies the philosophy.",
          kn: "೫೫೫ ಸೂತ್ರಗಳು, ಒಂಟಿಯಾಗಿ ಓದಲಾಗದಷ್ಟು ಉದ್ದೇಶಪೂರ್ವಕ ಸಂಕ್ಷಿಪ್ತ. ಭಾಷ್ಯ ಕೊಡುವವನೇ ತತ್ತ್ವಶಾಸ್ತ್ರವನ್ನೂ ಕೊಡುತ್ತಾನೆ.",
          hi: "५५५ सूत्र, अकेले पढ़े न जा सकें इतने जान-बूझकर संक्षिप्त। जो भाष्य देता है वही दर्शन देता है।",
        },
        status: "planned",
      },
    ],
  },

  // ── 4 ───────────────────────────────────────
  {
    id: "vedangas",
    name: { en: "The six limbs", kn: "ವೇದಾಂಗಗಳು", hi: "वेदांग" },
    sanskrit: "वेदाङ्गानि",
    glyph: "वेदाङ्ग",
    lede: {
      en: "Six disciplines you need in order to read the Veda correctly — how to say it, parse it, scan it, derive it, time it and perform it.",
      kn: "ವೇದವನ್ನು ಸರಿಯಾಗಿ ಓದಲು ಬೇಕಾದ ಆರು ಶಾಸ್ತ್ರಗಳು — ಉಚ್ಚರಿಸುವುದು, ವಿಂಗಡಿಸುವುದು, ಛಂದಸ್ಸು ಎಣಿಸುವುದು, ಅರ್ಥ ಹುಡುಕುವುದು, ಕಾಲ ನಿರ್ಣಯಿಸುವುದು, ಮಾಡುವುದು.",
      hi: "वेद को ठीक से पढ़ने के लिए आवश्यक छह शास्त्र — उच्चारण, व्याकरण, छंद, निर्वचन, काल और अनुष्ठान।",
    },
    texts: [
      {
        id: "shiksha",
        name: { en: "Śikṣā", kn: "ಶಿಕ್ಷಾ", hi: "शिक्षा" },
        sanskrit: "शिक्षा",
        note: {
          en: "Phonetics. How each syllable is made, and why mispronouncing one matters.",
          kn: "ಶಬ್ದಶಾಸ್ತ್ರ. ಪ್ರತಿ ಅಕ್ಷರ ಹೇಗೆ ಹುಟ್ಟುತ್ತದೆ, ತಪ್ಪಾಗಿ ಉಚ್ಚರಿಸಿದರೆ ಏಕೆ ಮುಖ್ಯ.",
          hi: "ध्वनिशास्त्र। हर अक्षर कैसे बनता है, और गलत उच्चारण क्यों मायने रखता है।",
        },
        status: "planned",
      },
      {
        id: "vyakarana",
        name: { en: "Vyākaraṇa", kn: "ವ್ಯಾಕರಣ", hi: "व्याकरण" },
        sanskrit: "व्याकरणम्",
        note: {
          en: "Grammar. Pāṇini's roughly 4,000 rules, still the most complete description of any language.",
          kn: "ವ್ಯಾಕರಣ. ಪಾಣಿನಿಯ ಸುಮಾರು ೪,೦೦೦ ಸೂತ್ರಗಳು — ಇಂದಿಗೂ ಯಾವುದೇ ಭಾಷೆಯ ಅತ್ಯಂತ ಪೂರ್ಣ ವಿವರಣೆ.",
          hi: "व्याकरण। पाणिनि के लगभग ४,००० सूत्र — आज भी किसी भी भाषा का सबसे पूर्ण विवरण।",
        },
        status: "planned",
      },
      {
        id: "chandas",
        name: { en: "Chandas", kn: "ಛಂದಸ್ಸು", hi: "छंद" },
        sanskrit: "छन्दः",
        note: {
          en: "Metre. The Rigveda section already prints the metre of all 1,028 hymns; this is what those names mean.",
          kn: "ಛಂದಸ್ಸು. ಋಗ್ವೇದ ವಿಭಾಗ ೧,೦೨೮ ಸೂಕ್ತಗಳ ಛಂದಸ್ಸನ್ನು ಈಗಾಗಲೇ ತೋರಿಸುತ್ತದೆ; ಆ ಹೆಸರುಗಳ ಅರ್ಥ ಇದು.",
          hi: "छंद। ऋग्वेद अनुभाग १,०२८ सूक्तों का छंद पहले से दिखाता है; उन नामों का अर्थ यही है।",
        },
        status: "planned",
      },
      {
        id: "nirukta",
        name: { en: "Nirukta", kn: "ನಿರುಕ್ತ", hi: "निरुक्त" },
        sanskrit: "निरुक्तम्",
        note: {
          en: "Etymology. Yāska's method for a word whose meaning has already been lost.",
          kn: "ನಿರ್ವಚನ. ಅರ್ಥವೇ ಮರೆತುಹೋದ ಪದಕ್ಕೆ ಯಾಸ್ಕರ ವಿಧಾನ.",
          hi: "निर्वचन। जिस शब्द का अर्थ पहले ही खो चुका हो, उसके लिए यास्क की पद्धति।",
        },
        status: "planned",
      },
      {
        id: "jyotisha",
        name: { en: "Jyotiṣa", kn: "ಜ್ಯೋತಿಷ", hi: "ज्योतिष" },
        sanskrit: "ज्योतिषम्",
        note: {
          en: "The calendar. Originally to fix when a rite falls, not to tell a fortune.",
          kn: "ಪಂಚಾಂಗ. ಮೂಲತಃ ಯಜ್ಞದ ಕಾಲ ನಿರ್ಣಯಿಸಲು, ಭವಿಷ್ಯ ಹೇಳಲು ಅಲ್ಲ.",
          hi: "पंचांग। मूलतः अनुष्ठान का काल निश्चित करने के लिए, भविष्य बताने के लिए नहीं।",
        },
        status: "planned",
      },
      {
        id: "kalpa",
        name: { en: "Kalpa", kn: "ಕಲ್ಪ", hi: "कल्प" },
        sanskrit: "कल्पः",
        note: {
          en: "Ritual procedure. What is done, in what order, by whom.",
          kn: "ವಿಧಿವಿಧಾನ. ಏನು ಮಾಡಬೇಕು, ಯಾವ ಕ್ರಮದಲ್ಲಿ, ಯಾರು.",
          hi: "अनुष्ठान-विधि। क्या किया जाए, किस क्रम में, किसके द्वारा।",
        },
        status: "planned",
      },
    ],
  },

  // ── 5 ───────────────────────────────────────
  {
    id: "darshanas",
    name: { en: "The six systems", kn: "ಷಡ್ದರ್ಶನಗಳು", hi: "षड्दर्शन" },
    sanskrit: "षड्दर्शनानि",
    glyph: "दर्शन",
    lede: {
      en: "Not six religions — six ways of asking what is real and how anyone could know it. They argue with each other, at length, for centuries.",
      kn: "ಆರು ಧರ್ಮಗಳಲ್ಲ — ಯಾವುದು ಸತ್ಯ ಮತ್ತು ಅದನ್ನು ಹೇಗೆ ತಿಳಿಯಬಹುದು ಎಂದು ಕೇಳುವ ಆರು ಮಾರ್ಗಗಳು. ಇವು ಪರಸ್ಪರ ಶತಮಾನಗಳ ಕಾಲ ವಾದಿಸುತ್ತವೆ.",
      hi: "छह धर्म नहीं — क्या सत्य है और उसे कोई कैसे जान सकता है, यह पूछने के छह मार्ग। ये आपस में सदियों तक विवाद करते हैं।",
    },
    texts: [
      {
        id: "nyaya",
        name: { en: "Nyāya", kn: "ನ್ಯಾಯ", hi: "न्याय" },
        sanskrit: "न्यायः",
        note: {
          en: "Logic and the means of knowledge. How an argument is shown to be sound.",
          kn: "ತರ್ಕ ಮತ್ತು ಪ್ರಮಾಣ. ವಾದ ಸರಿಯೆಂದು ತೋರಿಸುವುದು ಹೇಗೆ.",
          hi: "तर्क और प्रमाण। कोई तर्क सही है यह कैसे सिद्ध होता है।",
        },
        status: "planned",
      },
      {
        id: "vaisheshika",
        name: { en: "Vaiśeṣika", kn: "ವೈಶೇಷಿಕ", hi: "वैशेषिक" },
        sanskrit: "वैशेषिकम्",
        note: {
          en: "What the world is made of. An atomism older than the Greeks'.",
          kn: "ಜಗತ್ತು ಯಾವುದರಿಂದ ಆಗಿದೆ. ಗ್ರೀಕರಿಗಿಂತ ಹಳೆಯ ಪರಮಾಣುವಾದ.",
          hi: "संसार किससे बना है। यूनानियों से पुराना परमाणुवाद।",
        },
        status: "planned",
      },
      {
        id: "sankhya",
        name: { en: "Sāṅkhya", kn: "ಸಾಂಖ್ಯ", hi: "सांख्य" },
        sanskrit: "साङ्ख्यम्",
        note: {
          en: "Puruṣa and prakṛti — consciousness and nature, held apart. Seventy-two verses carry the whole system.",
          kn: "ಪುರುಷ ಮತ್ತು ಪ್ರಕೃತಿ — ಚೈತನ್ಯ ಮತ್ತು ನಿಸರ್ಗ, ಬೇರೆಬೇರೆಯಾಗಿ. ಎಪ್ಪತ್ತೆರಡು ಕಾರಿಕೆಗಳಲ್ಲಿ ಇಡೀ ಶಾಸ್ತ್ರ.",
          hi: "पुरुष और प्रकृति — चेतन और जड़, पृथक्। बहत्तर कारिकाओं में पूरा शास्त्र।",
        },
        status: "planned",
      },
      {
        id: "yoga",
        name: { en: "Yoga", kn: "ಯೋಗ", hi: "योग" },
        sanskrit: "योगः",
        note: {
          en: "Patañjali's 196 sūtras. Sāṅkhya's map, turned into a practice.",
          kn: "ಪತಂಜಲಿಯ ೧೯೬ ಸೂತ್ರಗಳು. ಸಾಂಖ್ಯದ ನಕ್ಷೆ, ಸಾಧನೆಯಾಗಿ ಮಾರ್ಪಟ್ಟದ್ದು.",
          hi: "पतंजलि के १९६ सूत्र। सांख्य का मानचित्र, साधना में बदला हुआ।",
        },
        status: "planned",
      },
      {
        id: "mimamsa",
        name: { en: "Pūrva Mīmāṃsā", kn: "ಪೂರ್ವಮೀಮಾಂಸಾ", hi: "पूर्वमीमांसा" },
        sanskrit: "पूर्वमीमांसा",
        note: {
          en: "What the Veda commands, and how a sentence obliges anyone. The school that built Indian hermeneutics.",
          kn: "ವೇದ ಏನನ್ನು ವಿಧಿಸುತ್ತದೆ, ಒಂದು ವಾಕ್ಯ ಹೇಗೆ ಕರ್ತವ್ಯವನ್ನು ಹೇರುತ್ತದೆ. ಭಾರತೀಯ ಅರ್ಥನಿರ್ಣಯ ಶಾಸ್ತ್ರವನ್ನು ಕಟ್ಟಿದ ಶಾಖೆ.",
          hi: "वेद क्या विधान करता है, और एक वाक्य किसी को कैसे बाध्य करता है। भारतीय व्याख्या-शास्त्र गढ़ने वाली शाखा।",
        },
        status: "planned",
      },
      {
        id: "vedanta-darshana",
        name: { en: "Vedānta", kn: "ವೇದಾಂತ", hi: "वेदांत" },
        sanskrit: "वेदान्तः",
        note: {
          en: "Uttara Mīmāṃsā — the end of the Veda. Its texts are the three above, and its teachers are in the acharyas.",
          kn: "ಉತ್ತರಮೀಮಾಂಸಾ — ವೇದದ ಅಂತ್ಯ. ಇದರ ಗ್ರಂಥಗಳು ಮೇಲಿನ ಮೂರು, ಇದರ ಆಚಾರ್ಯರು ಆಚಾರ್ಯರ ವಿಭಾಗದಲ್ಲಿ.",
          hi: "उत्तरमीमांसा — वेद का अंत। इसके ग्रंथ ऊपर के तीन हैं, और इसके आचार्य आचार्य अनुभाग में।",
        },
        href: "/acharyas",
        status: "live",
      },
    ],
  },

  // ── 6 ───────────────────────────────────────
  {
    id: "dharma",
    name: { en: "The dharma śāstras", kn: "ಧರ್ಮಶಾಸ್ತ್ರಗಳು", hi: "धर्मशास्त्र" },
    sanskrit: "धर्मशास्त्राणि",
    glyph: "धर्म",
    lede: {
      en: "Duty, law and social order. These were one set of competing opinions in their own time, never a single law-book, and this site will say so.",
      kn: "ಕರ್ತವ್ಯ, ಕಾನೂನು ಮತ್ತು ಸಮಾಜವ್ಯವಸ್ಥೆ. ಇವು ತಮ್ಮ ಕಾಲದಲ್ಲಿ ಪರಸ್ಪರ ಸ್ಪರ್ಧಿಸುವ ಹಲವು ಅಭಿಪ್ರಾಯಗಳಲ್ಲಿ ಒಂದು, ಎಂದೂ ಏಕೈಕ ಧರ್ಮಗ್ರಂಥವಲ್ಲ — ಈ ತಾಣ ಅದನ್ನು ಹೇಳುತ್ತದೆ.",
      hi: "कर्तव्य, विधि और समाज-व्यवस्था। ये अपने समय में परस्पर प्रतिस्पर्धी मतों में से एक थे, कभी एकमात्र विधि-ग्रंथ नहीं — यह साइट यही कहेगी।",
    },
    texts: [
      {
        id: "manusmriti",
        name: { en: "Manusmṛti", kn: "ಮನುಸ್ಮೃತಿ", hi: "मनुस्मृति" },
        sanskrit: "मनुस्मृतिः",
        note: {
          en: "Roughly 2,700 verses in twelve chapters. The most quoted and the most contested.",
          kn: "ಹನ್ನೆರಡು ಅಧ್ಯಾಯಗಳಲ್ಲಿ ಸುಮಾರು ೨,೭೦೦ ಶ್ಲೋಕಗಳು. ಅತಿ ಹೆಚ್ಚು ಉದ್ಧೃತವಾದದ್ದು ಮತ್ತು ಅತಿ ಹೆಚ್ಚು ವಿವಾದಿತವಾದದ್ದು.",
          hi: "बारह अध्यायों में लगभग २,७०० श्लोक। सबसे अधिक उद्धृत और सबसे अधिक विवादित।",
        },
        status: "planned",
      },
      {
        id: "yajnavalkya",
        name: { en: "Yājñavalkya Smṛti", kn: "ಯಾಜ್ಞವಲ್ಕ್ಯ ಸ್ಮೃತಿ", hi: "याज्ञवल्क्य स्मृति" },
        sanskrit: "याज्ञवल्क्यस्मृतिः",
        note: {
          en: "Shorter, better organised, and the one that actually shaped later Hindu law.",
          kn: "ಚಿಕ್ಕದು, ಹೆಚ್ಚು ಕ್ರಮಬದ್ಧ, ಮತ್ತು ಮುಂದಿನ ಹಿಂದೂ ಕಾನೂನನ್ನು ನಿಜವಾಗಿ ರೂಪಿಸಿದ್ದು.",
          hi: "छोटी, अधिक व्यवस्थित, और वही जिसने आगे का हिंदू विधि-शास्त्र वास्तव में गढ़ा।",
        },
        status: "planned",
      },
    ],
  },

  // ── 7 ───────────────────────────────────────
  {
    id: "agamas",
    name: { en: "Āgama and Tantra", kn: "ಆಗಮ ಮತ್ತು ತಂತ್ರ", hi: "आगम और तंत्र" },
    sanskrit: "आगमाः",
    glyph: "आगम",
    lede: {
      en: "How a temple is built and a deity is worshipped. Almost everything done in a temple today comes from here rather than from the Veda.",
      kn: "ದೇವಾಲಯ ಹೇಗೆ ಕಟ್ಟಬೇಕು, ದೇವರನ್ನು ಹೇಗೆ ಪೂಜಿಸಬೇಕು. ಇಂದು ದೇವಾಲಯದಲ್ಲಿ ನಡೆಯುವ ಬಹುತೇಕ ಎಲ್ಲವೂ ವೇದದಿಂದಲ್ಲ, ಇಲ್ಲಿಂದ ಬಂದದ್ದು.",
      hi: "मंदिर कैसे बने और देवता की पूजा कैसे हो। आज मंदिर में जो कुछ होता है उसका अधिकांश वेद से नहीं, यहीं से आता है।",
    },
    texts: [
      {
        id: "shaiva-agama",
        name: { en: "Śaiva Āgamas", kn: "ಶೈವಾಗಮಗಳು", hi: "शैव आगम" },
        sanskrit: "शैवागमाः",
        note: {
          en: "Twenty-eight, governing Śiva temples and their rites.",
          kn: "ಇಪ್ಪತ್ತೆಂಟು, ಶಿವದೇವಾಲಯಗಳನ್ನೂ ಅವುಗಳ ವಿಧಿಗಳನ್ನೂ ನಿಯಂತ್ರಿಸುವವು.",
          hi: "अट्ठाईस, जो शिव मंदिरों और उनके विधानों को नियंत्रित करते हैं।",
        },
        status: "planned",
      },
      {
        id: "pancharatra",
        name: { en: "Pāñcarātra", kn: "ಪಾಂಚರಾತ್ರ", hi: "पांचरात्र" },
        sanskrit: "पाञ्चरात्रम्",
        note: {
          en: "The Vaiṣṇava tradition of worship. Ramanuja defended it as authoritative.",
          kn: "ವೈಷ್ಣವ ಪೂಜಾ ಪರಂಪರೆ. ರಾಮಾನುಜರು ಇದನ್ನು ಪ್ರಮಾಣವೆಂದು ಸಮರ್ಥಿಸಿದರು.",
          hi: "वैष्णव पूजा-परंपरा। रामानुज ने इसे प्रमाण मानकर इसका समर्थन किया।",
        },
        status: "planned",
      },
      {
        id: "shakta",
        name: { en: "Śākta Tantras", kn: "ಶಾಕ್ತ ತಂತ್ರಗಳು", hi: "शाक्त तंत्र" },
        sanskrit: "शाक्तम्",
        note: {
          en: "The Goddess traditions: mantra, yantra, and the Śrī Vidyā.",
          kn: "ದೇವಿಯ ಪರಂಪರೆಗಳು: ಮಂತ್ರ, ಯಂತ್ರ ಮತ್ತು ಶ್ರೀವಿದ್ಯೆ.",
          hi: "देवी की परंपराएँ: मंत्र, यंत्र और श्रीविद्या।",
        },
        status: "planned",
      },
    ],
  },

  // ── 8 ───────────────────────────────────────
  {
    id: "puranas",
    name: { en: "The Purāṇas", kn: "ಪುರಾಣಗಳು", hi: "पुराण" },
    sanskrit: "पुराणानि",
    glyph: "पुराण",
    lede: {
      en: "The stories. Eighteen Mahāpurāṇas — and which eighteen is itself disputed, since some reckonings put Devī Bhāgavata where others put Bhāgavata.",
      kn: "ಕಥೆಗಳು. ಹದಿನೆಂಟು ಮಹಾಪುರಾಣಗಳು — ಯಾವ ಹದಿನೆಂಟು ಎಂಬುದೇ ವಿವಾದಾಸ್ಪದ; ಕೆಲವರು ಭಾಗವತದ ಜಾಗದಲ್ಲಿ ದೇವೀಭಾಗವತವನ್ನು ಎಣಿಸುತ್ತಾರೆ.",
      hi: "कथाएँ। अठारह महापुराण — और कौन से अठारह, यही विवादित है; कुछ गणनाएँ भागवत के स्थान पर देवीभागवत रखती हैं।",
    },
    texts: [
      {
        id: "mahapuranas",
        name: { en: "The eighteen Mahāpurāṇas", kn: "ಹದಿನೆಂಟು ಮಹಾಪುರಾಣಗಳು", hi: "अठारह महापुराण" },
        sanskrit: "महापुराणानि",
        note: {
          en: "Skanda, Śiva, Garuḍa, Viṣṇu, Bhāgavata and the rest — roughly 400,000 verses between them.",
          kn: "ಸ್ಕಾಂದ, ಶಿವ, ಗರುಡ, ವಿಷ್ಣು, ಭಾಗವತ ಮತ್ತು ಉಳಿದವು — ಎಲ್ಲ ಸೇರಿ ಸುಮಾರು ೪,೦೦,೦೦೦ ಶ್ಲೋಕಗಳು.",
          hi: "स्कंद, शिव, गरुड़, विष्णु, भागवत और शेष — सब मिलाकर लगभग ४,००,००० श्लोक।",
        },
        status: "planned",
      },
    ],
  },

  // ── 9 ───────────────────────────────────────
  {
    id: "itihasa",
    name: { en: "Itihāsa", kn: "ಇತಿಹಾಸ", hi: "इतिहास" },
    sanskrit: "इतिहासः",
    glyph: "इतिहास",
    lede: {
      en: "“So it happened.” Two epics, and unlike the Purāṇas each is one continuous story with a shape a reader can walk.",
      kn: "“ಹೀಗೆ ನಡೆಯಿತು.” ಎರಡು ಮಹಾಕಾವ್ಯಗಳು; ಪುರಾಣಗಳಿಗಿಂತ ಭಿನ್ನವಾಗಿ ಪ್ರತಿಯೊಂದೂ ಆದ್ಯಂತ ಒಂದೇ ಕಥೆ, ಓದುಗ ನಡೆದು ಹೋಗಬಹುದಾದ ಆಕಾರ.",
      hi: "“ऐसा हुआ।” दो महाकाव्य; पुराणों से भिन्न, हर एक आदि से अंत तक एक ही कथा है — ऐसा आकार जिस पर पाठक चल सकता है।",
    },
    texts: [
      {
        id: "ramayana",
        name: { en: "Rāmāyaṇa", kn: "ರಾಮಾಯಣ", hi: "रामायण" },
        sanskrit: "रामायणम्",
        note: {
          en: "Seven kāṇḍas, about 24,000 verses, ascribed to Vālmīki.",
          kn: "ಏಳು ಕಾಂಡಗಳು, ಸುಮಾರು ೨೪,೦೦೦ ಶ್ಲೋಕಗಳು, ವಾಲ್ಮೀಕಿಗೆ ಆರೋಪಿತ.",
          hi: "सात कांड, लगभग २४,००० श्लोक, वाल्मीकि को आरोपित।",
        },
        status: "planned",
      },
      {
        id: "mahabharata",
        name: { en: "Mahābhārata", kn: "ಮಹಾಭಾರತ", hi: "महाभारत" },
        sanskrit: "महाभारतम्",
        note: {
          en: "Eighteen parvas, about 100,000 verses — ten times the Ṛgveda. The Gītā sits inside it.",
          kn: "ಹದಿನೆಂಟು ಪರ್ವಗಳು, ಸುಮಾರು ೧,೦೦,೦೦೦ ಶ್ಲೋಕಗಳು — ಋಗ್ವೇದದ ಹತ್ತರಷ್ಟು. ಗೀತೆ ಇದರ ಒಳಗಿದೆ.",
          hi: "अठारह पर्व, लगभग १,००,००० श्लोक — ऋग्वेद का दस गुना। गीता इसी के भीतर है।",
        },
        status: "planned",
      },
    ],
  },

  // ── 10 ───────────────────────────────────────
  {
    id: "prakarana",
    name: { en: "The teaching texts", kn: "ಪ್ರಕರಣ ಗ್ರಂಥಗಳು", hi: "प्रकरण ग्रंथ" },
    sanskrit: "प्रकरणग्रन्थाः",
    glyph: "प्रकरण",
    lede: {
      en: "Short works that teach one thing clearly. These are what a student is actually handed first, and most of them are Advaita.",
      kn: "ಒಂದು ವಿಷಯವನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಕಲಿಸುವ ಚಿಕ್ಕ ಕೃತಿಗಳು. ಶಿಷ್ಯನ ಕೈಗೆ ಮೊದಲು ಕೊಡುವುದು ಇವನ್ನೇ, ಮತ್ತು ಬಹುತೇಕವು ಅದ್ವೈತದವು.",
      hi: "छोटी कृतियाँ जो एक बात स्पष्ट रूप से सिखाती हैं। शिष्य के हाथ में पहले यही दी जाती हैं, और अधिकांश अद्वैत की हैं।",
    },
    texts: [
      {
        id: "tattva-bodha",
        name: { en: "Tattva Bodha", kn: "ತತ್ತ್ವಬೋಧ", hi: "तत्त्वबोध" },
        sanskrit: "तत्त्वबोधः",
        note: {
          en: "A few pages that define the vocabulary every other text assumes: the three bodies, the five sheaths, the four qualifications.",
          kn: "ಉಳಿದೆಲ್ಲ ಗ್ರಂಥಗಳೂ ಗೃಹೀತವಾಗಿ ಬಳಸುವ ಪಾರಿಭಾಷಿಕ ಶಬ್ದಗಳನ್ನು ವಿವರಿಸುವ ಕೆಲವೇ ಪುಟಗಳು: ಮೂರು ಶರೀರ, ಪಂಚಕೋಶ, ಸಾಧನಚತುಷ್ಟಯ.",
          hi: "कुछ ही पृष्ठ जो वह शब्दावली परिभाषित करते हैं जिसे हर दूसरा ग्रंथ मान कर चलता है: तीन शरीर, पंचकोश, साधनचतुष्टय।",
        },
        status: "planned",
      },
      {
        id: "atma-bodha",
        name: { en: "Ātma Bodha", kn: "ಆತ್ಮಬೋಧ", hi: "आत्मबोध" },
        sanskrit: "आत्मबोधः",
        note: {
          en: "Sixty-eight verses on the self, traditionally attributed to Shankara.",
          kn: "ಆತ್ಮದ ಕುರಿತು ಅರವತ್ತೆಂಟು ಶ್ಲೋಕಗಳು, ಪರಂಪರೆಯ ಪ್ರಕಾರ ಶಂಕರರಿಗೆ ಆರೋಪಿತ.",
          hi: "आत्मा पर अड़सठ श्लोक, परंपरा के अनुसार शंकर को आरोपित।",
        },
        status: "planned",
      },
      {
        id: "vivekachudamani",
        name: { en: "Vivekacūḍāmaṇi", kn: "ವಿವೇಕಚೂಡಾಮಣಿ", hi: "विवेकचूडामणि" },
        sanskrit: "विवेकचूडामणिः",
        note: {
          // The Shankara monograph rejects this attribution, and a unit
          // test enforces that the site never lists it among his works.
          // This page must say the same thing or the site contradicts
          // itself in two places.
          en: "The most quoted work said to be Shankara's, and the one scholars most doubt is his.",
          kn: "ಶಂಕರರದ್ದೆಂದು ಹೇಳಲಾಗುವ ಅತಿ ಹೆಚ್ಚು ಉದ್ಧೃತ ಕೃತಿ; ಅವರದ್ದಲ್ಲವೆಂದು ವಿದ್ವಾಂಸರು ಅತಿ ಹೆಚ್ಚು ಸಂಶಯಿಸುವುದೂ ಇದನ್ನೇ.",
          hi: "शंकर की कही जाने वाली सर्वाधिक उद्धृत कृति, और वही जिसके उनके होने पर विद्वान सबसे अधिक संदेह करते हैं।",
        },
        status: "planned",
      },
      {
        id: "panchadashi",
        name: { en: "Pañcadaśī", kn: "ಪಂಚದಶೀ", hi: "पंचदशी" },
        sanskrit: "पञ्चदशी",
        note: {
          en: "Fifteen chapters by Vidyāraṇya, who was also Sringeri's twelfth Jagadguru.",
          kn: "ವಿದ್ಯಾರಣ್ಯರ ಹದಿನೈದು ಪ್ರಕರಣಗಳು; ಅವರೇ ಶೃಂಗೇರಿಯ ಹನ್ನೆರಡನೇ ಜಗದ್ಗುರುಗಳೂ ಹೌದು.",
          hi: "विद्यारण्य के पंद्रह प्रकरण; वे शृंगेरी के बारहवें जगद्गुरु भी थे।",
        },
        status: "planned",
      },
      {
        id: "drg-drshya-viveka",
        name: { en: "Dṛg-Dṛśya-Viveka", kn: "ದೃಗ್ದೃಶ್ಯವಿವೇಕ", hi: "दृग्दृश्यविवेक" },
        sanskrit: "दृग्दृश्यविवेकः",
        note: {
          en: "Forty-six verses separating the seer from the seen — the shortest way into the whole argument.",
          kn: "ದ್ರಷ್ಟೃವನ್ನು ದೃಶ್ಯದಿಂದ ಬೇರ್ಪಡಿಸುವ ನಲವತ್ತಾರು ಶ್ಲೋಕಗಳು — ಇಡೀ ವಾದಕ್ಕೆ ಅತಿ ಸಣ್ಣ ಪ್ರವೇಶ.",
          hi: "द्रष्टा को दृश्य से अलग करते छियालीस श्लोक — पूरे तर्क में सबसे छोटा प्रवेश।",
        },
        status: "planned",
      },
      {
        id: "aparokshanubhuti",
        name: { en: "Aparokṣānubhūti", kn: "ಅಪರೋಕ್ಷಾನುಭೂತಿ", hi: "अपरोक्षानुभूति" },
        sanskrit: "अपरोक्षानुभूतिः",
        note: {
          en: "On direct knowledge rather than inference. Its attribution to Shankara is also questioned.",
          kn: "ಅನುಮಾನವಲ್ಲದ ಸಾಕ್ಷಾತ್ ಜ್ಞಾನದ ಕುರಿತು. ಇದನ್ನು ಶಂಕರರಿಗೆ ಆರೋಪಿಸುವುದೂ ಪ್ರಶ್ನಿಸಲ್ಪಟ್ಟಿದೆ.",
          hi: "अनुमान नहीं, साक्षात् ज्ञान पर। इसका शंकर को आरोपण भी प्रश्नित है।",
        },
        status: "planned",
      },
    ],
  },
];

/** Every text in the map, flattened — for counting and for tests. */
export function allShastraTexts(): ShastraText[] {
  return SHASTRA_BRANCHES.flatMap((b) => b.texts);
}

/** How many of the map's texts are readable now. */
export function shastraProgress(): { live: number; partial: number; planned: number; total: number } {
  const texts = allShastraTexts();
  return {
    live: texts.filter((t) => t.status === "live").length,
    partial: texts.filter((t) => t.status === "partial").length,
    planned: texts.filter((t) => t.status === "planned").length,
    total: texts.length,
  };
}
