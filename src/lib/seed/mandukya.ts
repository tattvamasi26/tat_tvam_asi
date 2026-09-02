import { registerText, type FullVerse } from "./upanishads";
import { MANDUKYA_VIDEOS, MANDUKYA_SERIES } from "./lectures";

// ─────────────────────────────────────────────────────────
//  Māṇḍūkya Upaniṣad — the complete text.
//
//  Twelve mantras of the Atharvaveda, and the shortest of the
//  principal Upaniṣads. Gauḍapāda's Kārikā is built on it and
//  Śaṅkara commented on both, which is why a text of twelve
//  sentences carries as much weight in Advaita as one of six
//  hundred.
//
//  It is also the second text entered into the reader, and the
//  proof that the reader is a template: nothing here is a page,
//  a component or a stylesheet. It is verses, commentary, and one
//  registerText() call at the bottom.
//
//  The Muktikā lists it first of the hundred and eight and says
//  that it alone suffices for liberation. Whatever one makes of
//  that claim, it explains why this is the text people memorise.
//
//  Citation status is the same as everywhere else on the site:
//  the mūla is the received text; the translations and commentary
//  are the site's own editorial work and are labelled as such.
// ─────────────────────────────────────────────────────────

const VERSES: FullVerse[] = [
  {
    id: "mandukya-1",
    locator: "1",
    handle: {
      en: "Om is all this",
      kn: "ಓಂಕಾರವೇ ಇದೆಲ್ಲವೂ",
      hi: "ॐ ही यह सब है",
    },
    sanskrit: [
      "ॐ इत्येतदक्षरमिदँ सर्वं तस्योपव्याख्यानं",
      "भूतं भवद् भविष्यदिति सर्वमोङ्कार एव ।",
      "यच्चान्यत् त्रिकालातीतं तदप्योङ्कार एव ॥",
    ],
    iast: [
      "oṃ ity etad akṣaram idaṃ sarvaṃ tasyopavyākhyānaṃ",
      "bhūtaṃ bhavad bhaviṣyad iti sarvam oṃkāra eva |",
      "yac cānyat trikālātītaṃ tad apy oṃkāra eva ||",
    ],
    keywords: [
      {
        term: "अक्षर",
        iast: "akṣara",
        gloss: {
          en: "syllable; also the imperishable — both senses are meant",
          kn: "ಅಕ್ಷರ; ನಾಶವಿಲ್ಲದ್ದು — ಎರಡೂ ಅರ್ಥಗಳೂ ಇಲ್ಲಿ ಉದ್ದೇಶಿತ",
          hi: "अक्षर; अविनाशी — दोनों अर्थ अभिप्रेत हैं",
        },
      },
      {
        term: "त्रिकालातीत",
        iast: "trikālātīta",
        gloss: {
          en: "beyond the three times — past, present, future",
          kn: "ಮೂರು ಕಾಲಗಳನ್ನೂ ಮೀರಿದ್ದು — ಭೂತ, ವರ್ತಮಾನ, ಭವಿಷ್ಯ",
          hi: "तीनों कालों से परे — भूत, वर्तमान, भविष्य",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Om — this syllable is all this. Its explanation follows: what was, what is, what shall be, all of it is Om. And whatever else there is beyond the three times, that too is Om.",
        explanation:
          "The text opens by identifying a sound with everything there is, and the word it uses for that sound is akṣara — which means both 'syllable' and 'the imperishable'. The pun is not incidental; it is the claim.\n\nNotice the structure. First the three times are gathered in: past, present, future, all Om. That much a symbol could do. Then the second clause does something a symbol cannot — whatever lies outside time is also Om. So Om is not being offered as a name for the universe. It is being offered as the one thing that covers both the temporal and what is not temporal at all, which is precisely the work the rest of the text will do with the four states.",
      },
      kn: {
        translation:
          "ಓಂ — ಈ ಅಕ್ಷರವೇ ಇದೆಲ್ಲವೂ. ಅದರ ವಿವರಣೆ ಹೀಗಿದೆ: ಆಗಿಹೋದದ್ದು, ಇರುವುದು, ಆಗಲಿರುವುದು — ಎಲ್ಲವೂ ಓಂಕಾರವೇ. ಮೂರು ಕಾಲಗಳನ್ನೂ ಮೀರಿ ಬೇರೇನಿದೆಯೋ ಅದೂ ಓಂಕಾರವೇ.",
        explanation:
          "ಪಠ್ಯವು ಒಂದು ಧ್ವನಿಯನ್ನು ಇರುವ ಎಲ್ಲದರೊಂದಿಗೆ ಸಮೀಕರಿಸುತ್ತಾ ಆರಂಭವಾಗುತ್ತದೆ, ಮತ್ತು ಆ ಧ್ವನಿಗೆ ಬಳಸಿದ ಪದ 'ಅಕ್ಷರ' — ಇದಕ್ಕೆ 'ಉಚ್ಚಾರಾಂಶ' ಮತ್ತು 'ನಾಶವಿಲ್ಲದ್ದು' ಎರಡೂ ಅರ್ಥ. ಈ ಶ್ಲೇಷೆ ಆಕಸ್ಮಿಕವಲ್ಲ; ಅದೇ ಇಲ್ಲಿನ ಪ್ರತಿಪಾದನೆ.\n\nರಚನೆಯನ್ನು ಗಮನಿಸಿ. ಮೊದಲು ಮೂರು ಕಾಲಗಳನ್ನೂ ಒಳಗೆ ತೆಗೆದುಕೊಳ್ಳಲಾಗಿದೆ: ಭೂತ, ವರ್ತಮಾನ, ಭವಿಷ್ಯ — ಎಲ್ಲವೂ ಓಂ. ಅಷ್ಟನ್ನು ಒಂದು ಸಂಕೇತವೂ ಮಾಡಬಲ್ಲದು. ಆದರೆ ಎರಡನೆಯ ವಾಕ್ಯ ಸಂಕೇತಕ್ಕೆ ಸಾಧ್ಯವಿಲ್ಲದ್ದನ್ನು ಮಾಡುತ್ತದೆ — ಕಾಲದ ಹೊರಗಿರುವುದೂ ಓಂಕಾರವೇ. ಆದ್ದರಿಂದ ಓಂ ಇಲ್ಲಿ ವಿಶ್ವದ ಹೆಸರಾಗಿ ಕೊಡಲ್ಪಟ್ಟಿಲ್ಲ. ಕಾಲಿಕವಾದದ್ದನ್ನೂ ಕಾಲಾತೀತವಾದದ್ದನ್ನೂ ಒಟ್ಟಿಗೆ ಆವರಿಸುವ ಒಂದೇ ವಸ್ತುವಾಗಿ ಕೊಡಲ್ಪಟ್ಟಿದೆ — ಮುಂದೆ ನಾಲ್ಕು ಅವಸ್ಥೆಗಳ ಮೂಲಕ ಪಠ್ಯ ಮಾಡಲಿರುವ ಕೆಲಸವೇ ಅದು.",
      },
      hi: {
        translation:
          "ॐ — यह अक्षर ही यह सब है। इसकी व्याख्या यह है: जो हुआ, जो है, जो होगा — सब ॐकार ही है। और तीनों कालों से परे जो कुछ और है, वह भी ॐकार ही है।",
        explanation:
          "पाठ एक ध्वनि को समस्त सत्ता के साथ अभिन्न बताकर आरंभ होता है, और उस ध्वनि के लिए जो शब्द प्रयुक्त है वह 'अक्षर' है — जिसका अर्थ 'वर्ण' भी है और 'अविनाशी' भी। यह श्लेष आकस्मिक नहीं; वही यहाँ का प्रतिपाद्य है।\n\nसंरचना पर ध्यान दें। पहले तीनों काल समेटे गए: भूत, वर्तमान, भविष्य — सब ॐ। इतना तो कोई प्रतीक भी कर सकता है। किंतु दूसरा वाक्य वह करता है जो प्रतीक नहीं कर सकता — जो काल के बाहर है वह भी ॐकार ही है। अतः ॐ यहाँ विश्व के नाम के रूप में नहीं दिया गया। वह उस एक वस्तु के रूप में दिया गया है जो कालिक और अकालिक दोनों को समेटती है — और आगे चार अवस्थाओं के द्वारा पाठ यही काम करेगा।",
      },
    },
  },

  {
    id: "mandukya-2",
    locator: "2",
    handle: {
      en: "This Self is Brahman",
      kn: "ಈ ಆತ್ಮವೇ ಬ್ರಹ್ಮ",
      hi: "यह आत्मा ही ब्रह्म है",
    },
    sanskrit: [
      "सर्वं ह्येतद् ब्रह्म अयमात्मा ब्रह्म",
      "सोऽयमात्मा चतुष्पात् ॥",
    ],
    iast: [
      "sarvaṃ hy etad brahma ayam ātmā brahma",
      "so 'yam ātmā catuṣpāt ||",
    ],
    keywords: [
      {
        term: "अयमात्मा ब्रह्म",
        iast: "ayam ātmā brahma",
        gloss: {
          en: "this Self is Brahman — the Mahāvākya of the Atharvaveda",
          kn: "ಈ ಆತ್ಮವೇ ಬ್ರಹ್ಮ — ಅಥರ್ವವೇದದ ಮಹಾವಾಕ್ಯ",
          hi: "यह आत्मा ही ब्रह्म है — अथर्ववेद का महावाक्य",
        },
      },
      {
        term: "चतुष्पात्",
        iast: "catuṣpāt",
        gloss: {
          en: "four-quartered; having four feet or aspects",
          kn: "ನಾಲ್ಕು ಪಾದಗಳುಳ್ಳದ್ದು",
          hi: "चार पादों वाला",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "All this is indeed Brahman. This Self is Brahman. That Self is four-quartered.",
        explanation:
          "One of the four Mahāvākyas, and the one belonging to the Atharvaveda. Its force is in the demonstrative: ayam, 'this'. Not the Self in general, not the Self as a doctrine — this one, the one reading the sentence.\n\nThe second half is what makes the text a method rather than a proclamation. Having identified Self and Brahman, it immediately says the Self has four quarters, and the remaining ten mantras walk through them. So the identity is not offered as something to believe. It is offered as something to check, against four states every reader already has access to, three of which they enter every night.",
      },
      kn: {
        translation:
          "ಇದೆಲ್ಲವೂ ನಿಜಕ್ಕೂ ಬ್ರಹ್ಮವೇ. ಈ ಆತ್ಮವೇ ಬ್ರಹ್ಮ. ಆ ಆತ್ಮವು ನಾಲ್ಕು ಪಾದಗಳುಳ್ಳದ್ದು.",
        explanation:
          "ನಾಲ್ಕು ಮಹಾವಾಕ್ಯಗಳಲ್ಲಿ ಒಂದು, ಮತ್ತು ಅಥರ್ವವೇದಕ್ಕೆ ಸೇರಿದ್ದು. ಇದರ ಬಲವಿರುವುದು 'ಅಯಂ' ಎಂಬ ನಿರ್ದೇಶಕ ಪದದಲ್ಲಿ — 'ಈ'. ಸಾಮಾನ್ಯವಾಗಿ ಆತ್ಮವಲ್ಲ, ಸಿದ್ಧಾಂತವಾಗಿ ಆತ್ಮವಲ್ಲ — ಇದೇ, ಈ ವಾಕ್ಯವನ್ನು ಓದುತ್ತಿರುವವನೇ.\n\nಎರಡನೆಯ ಅರ್ಧವೇ ಈ ಪಠ್ಯವನ್ನು ಘೋಷಣೆಯಲ್ಲ, ವಿಧಾನವನ್ನಾಗಿ ಮಾಡುತ್ತದೆ. ಆತ್ಮ ಮತ್ತು ಬ್ರಹ್ಮದ ಅಭೇದವನ್ನು ಹೇಳಿದ ಕೂಡಲೇ ಆತ್ಮಕ್ಕೆ ನಾಲ್ಕು ಪಾದಗಳೆಂದು ಹೇಳುತ್ತದೆ, ಮತ್ತು ಉಳಿದ ಹತ್ತು ಮಂತ್ರಗಳು ಅವುಗಳ ಮೂಲಕ ನಡೆಸುತ್ತವೆ. ಆದ್ದರಿಂದ ಈ ಅಭೇದವನ್ನು ನಂಬಲು ಕೊಟ್ಟಿಲ್ಲ. ಪರೀಕ್ಷಿಸಲು ಕೊಟ್ಟಿದೆ — ಪ್ರತಿ ಓದುಗನಿಗೂ ಈಗಾಗಲೇ ದೊರೆಯುವ ನಾಲ್ಕು ಅವಸ್ಥೆಗಳ ವಿರುದ್ಧ, ಅವುಗಳಲ್ಲಿ ಮೂರನ್ನು ಅವನು ಪ್ರತಿ ರಾತ್ರಿ ಪ್ರವೇಶಿಸುತ್ತಾನೆ.",
      },
      hi: {
        translation:
          "यह सब वस्तुतः ब्रह्म ही है। यह आत्मा ही ब्रह्म है। वह आत्मा चार पादों वाला है।",
        explanation:
          "चार महावाक्यों में से एक, और अथर्ववेद का। इसका बल 'अयम्' इस निर्देशक शब्द में है — 'यह'। सामान्य रूप से आत्मा नहीं, सिद्धांत रूप में आत्मा नहीं — यही, जो इस वाक्य को पढ़ रहा है।\n\nदूसरा आधा ही इस पाठ को घोषणा नहीं, विधि बनाता है। आत्मा और ब्रह्म की अभिन्नता कहते ही वह कहता है कि आत्मा के चार पाद हैं, और शेष दस मंत्र उन्हीं से होकर चलते हैं। अतः यह अभेद मानने के लिए नहीं दिया गया। जाँचने के लिए दिया गया है — उन चार अवस्थाओं के सामने जो हर पाठक को पहले से उपलब्ध हैं, जिनमें से तीन में वह हर रात प्रवेश करता है।",
      },
    },
  },

  {
    id: "mandukya-3",
    locator: "3",
    handle: {
      en: "Waking — Vaiśvānara",
      kn: "ಜಾಗ್ರತ್ — ವೈಶ್ವಾನರ",
      hi: "जाग्रत् — वैश्वानर",
    },
    sanskrit: [
      "जागरितस्थानो बहिष्प्रज्ञः सप्ताङ्ग एकोनविंशतिमुखः",
      "स्थूलभुग् वैश्वानरः प्रथमः पादः ॥",
    ],
    iast: [
      "jāgaritasthāno bahiṣprajñaḥ saptāṅga ekonaviṃśatimukhaḥ",
      "sthūlabhug vaiśvānaraḥ prathamaḥ pādaḥ ||",
    ],
    keywords: [
      {
        term: "बहिष्प्रज्ञ",
        iast: "bahiṣprajña",
        gloss: {
          en: "outward-knowing; awareness turned outward",
          kn: "ಹೊರಮುಖ ಪ್ರಜ್ಞೆ; ಹೊರಗೆ ತಿರುಗಿದ ಅರಿವು",
          hi: "बहिर्मुख प्रज्ञा; बाहर की ओर मुड़ी चेतना",
        },
      },
      {
        term: "वैश्वानर",
        iast: "vaiśvānara",
        gloss: {
          en: "the one common to all people",
          kn: "ಎಲ್ಲ ಜನರಿಗೂ ಸಾಮಾನ್ಯನಾದವನು",
          hi: "जो सब मनुष्यों में समान है",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "The first quarter is Vaiśvānara: its field is waking, its awareness is turned outward, it has seven limbs and nineteen mouths, and it experiences the gross.",
        explanation:
          "The waking state, described from outside rather than from inside it. What is being catalogued is not the world but the apparatus: seven limbs, nineteen mouths — the five organs of perception, five of action, five prāṇas, and mind, intellect, ego and citta. Nineteen doorways through which the gross is taken in.\n\nThe name matters. Vaiśvānara means 'common to all people', and waking is the one state where everybody agrees they are in the same world. That shared quality is exactly what makes it feel like the real one, and the text is quietly setting that assumption up in order to take it apart three mantras later.",
      },
      kn: {
        translation:
          "ಮೊದಲ ಪಾದ ವೈಶ್ವಾನರ: ಅದರ ಸ್ಥಾನ ಜಾಗ್ರತ್, ಅದರ ಪ್ರಜ್ಞೆ ಹೊರಮುಖ, ಅದಕ್ಕೆ ಏಳು ಅಂಗಗಳು ಮತ್ತು ಹತ್ತೊಂಬತ್ತು ಮುಖಗಳು, ಮತ್ತು ಅದು ಸ್ಥೂಲವನ್ನು ಅನುಭವಿಸುತ್ತದೆ.",
        explanation:
          "ಜಾಗ್ರದವಸ್ಥೆಯನ್ನು ಒಳಗಿನಿಂದಲ್ಲ, ಹೊರಗಿನಿಂದ ವರ್ಣಿಸಲಾಗಿದೆ. ಇಲ್ಲಿ ಪಟ್ಟಿಮಾಡುತ್ತಿರುವುದು ಜಗತ್ತನ್ನಲ್ಲ, ಸಾಧನವನ್ನು: ಏಳು ಅಂಗಗಳು, ಹತ್ತೊಂಬತ್ತು ಮುಖಗಳು — ಐದು ಜ್ಞಾನೇಂದ್ರಿಯಗಳು, ಐದು ಕರ್ಮೇಂದ್ರಿಯಗಳು, ಐದು ಪ್ರಾಣಗಳು, ಮತ್ತು ಮನಸ್ಸು, ಬುದ್ಧಿ, ಅಹಂಕಾರ, ಚಿತ್ತ. ಸ್ಥೂಲವನ್ನು ಒಳಗೆ ತೆಗೆದುಕೊಳ್ಳುವ ಹತ್ತೊಂಬತ್ತು ಬಾಗಿಲುಗಳು.\n\nಹೆಸರು ಮುಖ್ಯ. 'ವೈಶ್ವಾನರ' ಎಂದರೆ 'ಎಲ್ಲ ಜನರಿಗೂ ಸಾಮಾನ್ಯ', ಮತ್ತು ಜಾಗ್ರತ್ ಎಂಬುದೇ ಎಲ್ಲರೂ ತಾವು ಒಂದೇ ಜಗತ್ತಿನಲ್ಲಿದ್ದೇವೆಂದು ಒಪ್ಪುವ ಏಕೈಕ ಅವಸ್ಥೆ. ಈ ಸಾಮಾನ್ಯತೆಯೇ ಅದನ್ನು ನಿಜವಾದದ್ದೆಂದು ಭಾಸವಾಗುವಂತೆ ಮಾಡುತ್ತದೆ, ಮತ್ತು ಮೂರು ಮಂತ್ರಗಳ ನಂತರ ಅದನ್ನೇ ಬಿಡಿಸಲು ಪಠ್ಯ ಈಗ ಸದ್ದಿಲ್ಲದೆ ಆ ಊಹೆಯನ್ನು ಕಟ್ಟುತ್ತಿದೆ.",
      },
      hi: {
        translation:
          "प्रथम पाद वैश्वानर है: उसका स्थान जाग्रत् है, उसकी प्रज्ञा बहिर्मुख है, उसके सात अंग और उन्नीस मुख हैं, और वह स्थूल का भोग करता है।",
        explanation:
          "जाग्रत् अवस्था का वर्णन भीतर से नहीं, बाहर से किया गया है। यहाँ जिसकी सूची है वह जगत् नहीं, उपकरण है: सात अंग, उन्नीस मुख — पाँच ज्ञानेंद्रियाँ, पाँच कर्मेंद्रियाँ, पाँच प्राण, तथा मन, बुद्धि, अहंकार और चित्त। स्थूल को ग्रहण करने के उन्नीस द्वार।\n\nनाम महत्वपूर्ण है। 'वैश्वानर' अर्थात् 'सब मनुष्यों में समान', और जाग्रत् ही वह एक अवस्था है जिसमें सब मानते हैं कि वे एक ही जगत् में हैं। यही साझापन उसे वास्तविक प्रतीत कराता है, और तीन मंत्र बाद उसी को खोलने के लिए पाठ अभी चुपचाप वह पूर्वधारणा खड़ी कर रहा है।",
      },
    },
  },

  {
    id: "mandukya-4",
    locator: "4",
    handle: {
      en: "Dream — Taijasa",
      kn: "ಸ್ವಪ್ನ — ತೈಜಸ",
      hi: "स्वप्न — तैजस",
    },
    sanskrit: [
      "स्वप्नस्थानोऽन्तःप्रज्ञः सप्ताङ्ग एकोनविंशतिमुखः",
      "प्रविविक्तभुक् तैजसो द्वितीयः पादः ॥",
    ],
    iast: [
      "svapnasthāno 'ntaḥprajñaḥ saptāṅga ekonaviṃśatimukhaḥ",
      "pravivikta-bhuk taijaso dvitīyaḥ pādaḥ ||",
    ],
    keywords: [
      {
        term: "अन्तःप्रज्ञ",
        iast: "antaḥprajña",
        gloss: {
          en: "inward-knowing",
          kn: "ಒಳಮುಖ ಪ್ರಜ್ಞೆ",
          hi: "अंतर्मुख प्रज्ञा",
        },
      },
      {
        term: "तैजस",
        iast: "taijasa",
        gloss: {
          en: "the luminous one — it lights its own objects",
          kn: "ತೇಜೋಮಯ — ತನ್ನ ವಿಷಯಗಳನ್ನು ತಾನೇ ಬೆಳಗುವವನು",
          hi: "तैजस — जो अपने विषयों को स्वयं प्रकाशित करता है",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "The second quarter is Taijasa: its field is dream, its awareness is turned inward, it has seven limbs and nineteen mouths, and it experiences the subtle.",
        explanation:
          "The description is deliberately identical to the waking state except for three words: the field is dream, the awareness is inward, and what is experienced is subtle rather than gross. Same seven limbs, same nineteen mouths. The apparatus does not change.\n\nThat parallel is the argument. If dreaming has the same structure as waking and differs only in the material it works on, then the felt solidity of the waking world is not evidence of anything — a dream feels solid too, for exactly as long as it lasts. Taijasa, 'the luminous', names the point precisely: in dream there is no external light, and yet everything is seen. Consciousness is supplying the illumination, which is what it was doing while awake as well.",
      },
      kn: {
        translation:
          "ಎರಡನೆಯ ಪಾದ ತೈಜಸ: ಅದರ ಸ್ಥಾನ ಸ್ವಪ್ನ, ಅದರ ಪ್ರಜ್ಞೆ ಒಳಮುಖ, ಅದಕ್ಕೆ ಏಳು ಅಂಗಗಳು ಮತ್ತು ಹತ್ತೊಂಬತ್ತು ಮುಖಗಳು, ಮತ್ತು ಅದು ಸೂಕ್ಷ್ಮವನ್ನು ಅನುಭವಿಸುತ್ತದೆ.",
        explanation:
          "ಈ ವರ್ಣನೆ ಜಾಗ್ರದವಸ್ಥೆಯದಕ್ಕೆ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಸಮಾನವಾಗಿದೆ, ಕೇವಲ ಮೂರು ಪದಗಳಲ್ಲಿ ಭೇದ: ಸ್ಥಾನ ಸ್ವಪ್ನ, ಪ್ರಜ್ಞೆ ಒಳಮುಖ, ಅನುಭವಿಸುವುದು ಸ್ಥೂಲವಲ್ಲ ಸೂಕ್ಷ್ಮ. ಅದೇ ಏಳು ಅಂಗಗಳು, ಅದೇ ಹತ್ತೊಂಬತ್ತು ಮುಖಗಳು. ಸಾಧನ ಬದಲಾಗುವುದಿಲ್ಲ.\n\nಈ ಸಮಾನಾಂತರವೇ ವಾದ. ಸ್ವಪ್ನಕ್ಕೂ ಜಾಗ್ರತ್ತಿಗೂ ಒಂದೇ ರಚನೆಯಿದ್ದು, ಕೇವಲ ದ್ರವ್ಯದಲ್ಲಿ ಭೇದವಿದ್ದರೆ, ಜಾಗ್ರಜ್ಜಗತ್ತಿನ ಘನತೆಯ ಅನುಭವ ಯಾವುದಕ್ಕೂ ಸಾಕ್ಷಿಯಲ್ಲ — ಸ್ವಪ್ನವೂ ಅದು ಉಳಿಯುವಷ್ಟು ಕಾಲ ಘನವಾಗಿಯೇ ತೋರುತ್ತದೆ. 'ತೈಜಸ' ಎಂಬ ಹೆಸರು ಇದನ್ನು ನಿಖರವಾಗಿ ಹೇಳುತ್ತದೆ: ಸ್ವಪ್ನದಲ್ಲಿ ಹೊರಗಿನ ಬೆಳಕಿಲ್ಲ, ಆದರೂ ಎಲ್ಲವೂ ಕಾಣುತ್ತದೆ. ಪ್ರಜ್ಞೆಯೇ ಬೆಳಕನ್ನು ಒದಗಿಸುತ್ತಿದೆ — ಎಚ್ಚರದಲ್ಲಿಯೂ ಅದು ಮಾಡುತ್ತಿದ್ದದ್ದು ಅದನ್ನೇ.",
      },
      hi: {
        translation:
          "द्वितीय पाद तैजस है: उसका स्थान स्वप्न है, उसकी प्रज्ञा अंतर्मुख है, उसके सात अंग और उन्नीस मुख हैं, और वह सूक्ष्म का भोग करता है।",
        explanation:
          "यह वर्णन जाग्रत् के वर्णन से जानबूझकर समान है, केवल तीन शब्दों का भेद है: स्थान स्वप्न, प्रज्ञा अंतर्मुख, और भोग स्थूल नहीं सूक्ष्म। वही सात अंग, वही उन्नीस मुख। उपकरण नहीं बदलता।\n\nयही समांतरता तर्क है। यदि स्वप्न की संरचना जाग्रत् जैसी ही है और भेद केवल सामग्री का है, तो जाग्रत् जगत् की अनुभूत ठोसता किसी बात का प्रमाण नहीं — स्वप्न भी जितनी देर रहता है, ठोस ही लगता है। 'तैजस' नाम इसी बिंदु को ठीक-ठीक कहता है: स्वप्न में बाहरी प्रकाश नहीं, फिर भी सब दिखता है। चेतना ही प्रकाश दे रही है — जाग्रत् में भी वह यही कर रही थी।",
      },
    },
  },

  {
    id: "mandukya-5",
    locator: "5",
    handle: {
      en: "Deep sleep — Prājña",
      kn: "ಸುಷುಪ್ತಿ — ಪ್ರಾಜ್ಞ",
      hi: "सुषुप्ति — प्राज्ञ",
    },
    sanskrit: [
      "यत्र सुप्तो न कञ्चन कामं कामयते",
      "न कञ्चन स्वप्नं पश्यति तत् सुषुप्तम् ।",
      "सुषुप्तस्थान एकीभूतः प्रज्ञानघन एव",
      "आनन्दमयो ह्यानन्दभुक् चेतोमुखः प्राज्ञस्तृतीयः पादः ॥",
    ],
    iast: [
      "yatra supto na kañcana kāmaṃ kāmayate",
      "na kañcana svapnaṃ paśyati tat suṣuptam |",
      "suṣuptasthāna ekībhūtaḥ prajñānaghana eva",
      "ānandamayo hy ānandabhuk cetomukhaḥ prājñas tṛtīyaḥ pādaḥ ||",
    ],
    keywords: [
      {
        term: "प्रज्ञानघन",
        iast: "prajñānaghana",
        gloss: {
          en: "a solid mass of awareness, undifferentiated",
          kn: "ಪ್ರಜ್ಞಾನದ ಘನರೂಪ, ಭೇದವಿಲ್ಲದ್ದು",
          hi: "प्रज्ञान का घन, अभेद",
        },
      },
      {
        term: "एकीभूत",
        iast: "ekībhūta",
        gloss: {
          en: "become one; the many resolved into one",
          kn: "ಒಂದಾಗಿಬಿಟ್ಟದ್ದು; ಅನೇಕವು ಒಂದರಲ್ಲಿ ಲೀನ",
          hi: "एकीभूत; अनेक का एक में लय",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Where one asleep desires no desire and sees no dream, that is deep sleep. The third quarter is Prājña: its field is deep sleep, it has become one, a single mass of awareness, made of bliss, experiencing bliss, its mouth is thought.",
        explanation:
          "Deep sleep is defined by two absences — no desire, no dream — and then, unexpectedly, by a positive term: ānandamaya, made of bliss. The text is not saying deep sleep is pleasant. It is pointing out that we report having slept well, which means something was present to register the absence of disturbance. Nothing can be reported from a state nobody was in.\n\nEkībhūta, 'become one', is the key word. In waking and dream, awareness is divided into knower and known. In deep sleep the division collapses — but awareness does not. What remains is prajñānaghana, a solid mass of knowing with nothing to know.\n\nThis is the third quarter, not the fourth, and the distinction is the whole point of the next mantras. Undifferentiated is not the same as free. Deep sleep is ignorance without content, and one returns from it exactly as one entered.",
      },
      kn: {
        translation:
          "ಮಲಗಿದವನು ಯಾವ ಬಯಕೆಯನ್ನೂ ಬಯಸದೆ, ಯಾವ ಸ್ವಪ್ನವನ್ನೂ ಕಾಣದೆ ಇರುವುದೇ ಸುಷುಪ್ತಿ. ಮೂರನೆಯ ಪಾದ ಪ್ರಾಜ್ಞ: ಅದರ ಸ್ಥಾನ ಸುಷುಪ್ತಿ, ಅದು ಒಂದಾಗಿಬಿಟ್ಟಿದೆ, ಪ್ರಜ್ಞಾನದ ಘನವೇ ಆಗಿದೆ, ಆನಂದಮಯವಾಗಿದೆ, ಆನಂದವನ್ನು ಅನುಭವಿಸುತ್ತದೆ, ಅದರ ಮುಖ ಚೇತಸ್ಸು.",
        explanation:
          "ಸುಷುಪ್ತಿಯನ್ನು ಎರಡು ಅಭಾವಗಳಿಂದ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ — ಬಯಕೆಯಿಲ್ಲ, ಸ್ವಪ್ನವಿಲ್ಲ — ಆಮೇಲೆ ಅನಿರೀಕ್ಷಿತವಾಗಿ ಒಂದು ವಿಧ್ಯಾತ್ಮಕ ಪದದಿಂದ: 'ಆನಂದಮಯ'. ಸುಷುಪ್ತಿ ಸುಖಕರವೆಂದು ಪಠ್ಯ ಹೇಳುತ್ತಿಲ್ಲ. 'ಚೆನ್ನಾಗಿ ನಿದ್ರಿಸಿದೆ' ಎಂದು ನಾವು ವರದಿ ಮಾಡುತ್ತೇವೆ ಎಂಬುದನ್ನು ಅದು ತೋರಿಸುತ್ತಿದೆ — ಅಂದರೆ ವಿಘ್ನದ ಅಭಾವವನ್ನು ದಾಖಲಿಸಲು ಏನೋ ಇದ್ದಿತು. ಯಾರೂ ಇಲ್ಲದ ಸ್ಥಿತಿಯಿಂದ ಏನನ್ನೂ ವರದಿ ಮಾಡಲಾಗದು.\n\n'ಏಕೀಭೂತ' — ಒಂದಾಗಿಬಿಟ್ಟದ್ದು — ಎಂಬುದೇ ಕೀಲಿ ಪದ. ಜಾಗ್ರತ್ ಮತ್ತು ಸ್ವಪ್ನದಲ್ಲಿ ಅರಿವು ಜ್ಞಾತೃ-ಜ್ಞೇಯವಾಗಿ ವಿಭಜಿತ. ಸುಷುಪ್ತಿಯಲ್ಲಿ ಆ ವಿಭಜನೆ ಕುಸಿಯುತ್ತದೆ — ಆದರೆ ಅರಿವು ಕುಸಿಯುವುದಿಲ್ಲ. ಉಳಿಯುವುದು 'ಪ್ರಜ್ಞಾನಘನ', ತಿಳಿಯಲು ಏನೂ ಇಲ್ಲದ ತಿಳಿವಿನ ಘನರೂಪ.\n\nಇದು ಮೂರನೆಯ ಪಾದ, ನಾಲ್ಕನೆಯದಲ್ಲ, ಮತ್ತು ಈ ಭೇದವೇ ಮುಂದಿನ ಮಂತ್ರಗಳ ಸಾರ. ಭೇದವಿಲ್ಲದಿರುವುದು ಮುಕ್ತವಾಗಿರುವುದಲ್ಲ. ಸುಷುಪ್ತಿ ವಿಷಯವಿಲ್ಲದ ಅಜ್ಞಾನ, ಮತ್ತು ಪ್ರವೇಶಿಸಿದಂತೆಯೇ ಅದರಿಂದ ಹಿಂತಿರುಗುತ್ತೇವೆ.",
      },
      hi: {
        translation:
          "जहाँ सोया हुआ किसी कामना की कामना नहीं करता और कोई स्वप्न नहीं देखता, वह सुषुप्ति है। तृतीय पाद प्राज्ञ है: उसका स्थान सुषुप्ति है, वह एकीभूत है, प्रज्ञान का घन है, आनंदमय है, आनंद का भोग करता है, उसका मुख चेतस् है।",
        explanation:
          "सुषुप्ति की परिभाषा दो अभावों से दी गई है — न कामना, न स्वप्न — और फिर अप्रत्याशित रूप से एक विधेय पद से: 'आनंदमय'। पाठ यह नहीं कह रहा कि सुषुप्ति सुखद है। वह यह दिखा रहा है कि हम 'अच्छी नींद आई' ऐसा बताते हैं — अर्थात् विघ्न के अभाव को दर्ज करने वाला कुछ उपस्थित था। जिस अवस्था में कोई था ही नहीं, उससे कुछ बताया नहीं जा सकता।\n\n'एकीभूत' कुंजी शब्द है। जाग्रत् और स्वप्न में चेतना ज्ञाता और ज्ञेय में विभाजित है। सुषुप्ति में वह विभाजन ढह जाता है — किंतु चेतना नहीं ढहती। शेष रहता है 'प्रज्ञानघन', जानने योग्य कुछ भी बिना, जानने का घन।\n\nयह तृतीय पाद है, चतुर्थ नहीं, और यही भेद अगले मंत्रों का सार है। अभेद होना मुक्त होना नहीं। सुषुप्ति विषयरहित अज्ञान है, और उससे हम वैसे ही लौटते हैं जैसे गए थे।",
      },
    },
  },

  {
    id: "mandukya-6",
    locator: "6",
    handle: {
      en: "Lord of all",
      kn: "ಸರ್ವೇಶ್ವರ",
      hi: "सर्वेश्वर",
    },
    sanskrit: [
      "एष सर्वेश्वरः एष सर्वज्ञः एषोऽन्तर्यामी",
      "एष योनिः सर्वस्य प्रभवाप्ययौ हि भूतानाम् ॥",
    ],
    iast: [
      "eṣa sarveśvaraḥ eṣa sarvajñaḥ eṣo 'ntaryāmī",
      "eṣa yoniḥ sarvasya prabhavāpyayau hi bhūtānām ||",
    ],
    keywords: [
      {
        term: "अन्तर्यामी",
        iast: "antaryāmī",
        gloss: {
          en: "the inner controller",
          kn: "ಒಳಗಿನಿಂದ ನಿಯಂತ್ರಿಸುವವನು",
          hi: "भीतर से नियमन करने वाला",
        },
      },
      {
        term: "योनि",
        iast: "yoni",
        gloss: {
          en: "source, womb, origin",
          kn: "ಮೂಲ, ಗರ್ಭ, ಉಗಮ",
          hi: "स्रोत, गर्भ, उद्गम",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "This is the Lord of all, this is the knower of all, this is the inner controller. This is the source of all — indeed the origin and the dissolution of beings.",
        explanation:
          "Five theological titles land on Prājña, the deep-sleep quarter, which is startling on first reading. Why should dreamless sleep be called the Lord of all?\n\nBecause this is the causal state. Waking and dream are where the world is manifest; deep sleep is where it is held unmanifest, as a seed holds a tree. Everything that will appear is present there without being distinguished — which is exactly what 'source of all' and 'origin and dissolution' mean. Śaṅkara reads Prājña here as Īśvara viewed from the individual side: the same undifferentiated ground, called personal when regarded as the cause of the world.\n\nBut note where the text does not go. It has now said the highest possible things about the third quarter, and it is still the third. The next mantra will refuse all of it.",
      },
      kn: {
        translation:
          "ಇವನೇ ಸರ್ವೇಶ್ವರ, ಇವನೇ ಸರ್ವಜ್ಞ, ಇವನೇ ಅಂತರ್ಯಾಮಿ. ಇವನೇ ಎಲ್ಲದರ ಮೂಲ — ಭೂತಗಳ ಉತ್ಪತ್ತಿ ಮತ್ತು ಲಯ.",
        explanation:
          "ಐದು ದೈವಿಕ ಬಿರುದುಗಳು ಸುಷುಪ್ತಿಯ ಪಾದವಾದ ಪ್ರಾಜ್ಞನ ಮೇಲೆ ಬೀಳುತ್ತವೆ, ಮೊದಲ ಓದಿಗೆ ಇದು ಬೆಚ್ಚಿಬೀಳಿಸುತ್ತದೆ. ಸ್ವಪ್ನರಹಿತ ನಿದ್ರೆಯನ್ನು ಸರ್ವೇಶ್ವರನೆಂದು ಏಕೆ ಕರೆಯಬೇಕು?\n\nಏಕೆಂದರೆ ಇದು ಕಾರಣಾವಸ್ಥೆ. ಜಾಗ್ರತ್ ಮತ್ತು ಸ್ವಪ್ನದಲ್ಲಿ ಜಗತ್ತು ವ್ಯಕ್ತ; ಸುಷುಪ್ತಿಯಲ್ಲಿ ಅದು ಅವ್ಯಕ್ತವಾಗಿ ಹಿಡಿದಿಡಲ್ಪಟ್ಟಿದೆ — ಬೀಜವು ಮರವನ್ನು ಹಿಡಿದಿಟ್ಟಂತೆ. ಕಾಣಿಸಲಿರುವ ಎಲ್ಲವೂ ಅಲ್ಲಿ ಭೇದವಿಲ್ಲದೆ ಇರುತ್ತದೆ — 'ಎಲ್ಲದರ ಮೂಲ', 'ಉತ್ಪತ್ತಿ ಮತ್ತು ಲಯ' ಎಂಬುದರ ಅರ್ಥವೇ ಅದು. ಶಂಕರರು ಇಲ್ಲಿನ ಪ್ರಾಜ್ಞನನ್ನು ವ್ಯಷ್ಟಿಯ ಕಡೆಯಿಂದ ಕಂಡ ಈಶ್ವರನೆಂದು ಓದುತ್ತಾರೆ: ಅದೇ ಭೇದರಹಿತ ಆಧಾರ, ಜಗತ್ಕಾರಣವೆಂದು ಪರಿಗಣಿಸಿದಾಗ ವ್ಯಕ್ತಿರೂಪದಲ್ಲಿ ಕರೆಯಲ್ಪಟ್ಟದ್ದು.\n\nಆದರೆ ಪಠ್ಯ ಎಲ್ಲಿಗೆ ಹೋಗುವುದಿಲ್ಲ ಎಂಬುದನ್ನು ಗಮನಿಸಿ. ಮೂರನೆಯ ಪಾದದ ಬಗ್ಗೆ ಸಾಧ್ಯವಿರುವ ಅತ್ಯುನ್ನತ ಮಾತುಗಳನ್ನು ಈಗ ಹೇಳಿಯಾಗಿದೆ, ಮತ್ತು ಅದು ಇನ್ನೂ ಮೂರನೆಯದೇ. ಮುಂದಿನ ಮಂತ್ರ ಇವೆಲ್ಲವನ್ನೂ ನಿರಾಕರಿಸುತ್ತದೆ.",
      },
      hi: {
        translation:
          "यही सर्वेश्वर है, यही सर्वज्ञ है, यही अंतर्यामी है। यही सबका स्रोत है — भूतों की उत्पत्ति और लय।",
        explanation:
          "पाँच ईश्वरीय उपाधियाँ प्राज्ञ पर, अर्थात् सुषुप्ति के पाद पर पड़ती हैं, जो पहली बार पढ़ने पर चौंकाता है। स्वप्नरहित नींद को सर्वेश्वर क्यों कहा जाए?\n\nक्योंकि यह कारण अवस्था है। जाग्रत् और स्वप्न में जगत् व्यक्त है; सुषुप्ति में वह अव्यक्त रूप में धारित है — जैसे बीज वृक्ष को धारण करता है। जो कुछ प्रकट होगा वह वहाँ अभेद रूप में उपस्थित है — 'सबका स्रोत' और 'उत्पत्ति और लय' का यही अर्थ है। शंकर यहाँ प्राज्ञ को व्यष्टि की ओर से देखा गया ईश्वर पढ़ते हैं: वही अभेद आधार, जगत्कारण मानने पर व्यक्तिवाची नाम पा लेता है।\n\nकिंतु ध्यान दें कि पाठ कहाँ नहीं जाता। तृतीय पाद के विषय में संभव उच्चतम बातें अब कही जा चुकीं, और वह अब भी तृतीय ही है। अगला मंत्र इन सबका निषेध करेगा।",
      },
    },
  },

  {
    id: "mandukya-7",
    locator: "7",
    handle: {
      en: "The fourth — Turīya",
      kn: "ನಾಲ್ಕನೆಯದು — ತುರೀಯ",
      hi: "चतुर्थ — तुरीय",
    },
    sanskrit: [
      "नान्तःप्रज्ञं न बहिष्प्रज्ञं नोभयतःप्रज्ञं",
      "न प्रज्ञानघनं न प्रज्ञं नाप्रज्ञम् ।",
      "अदृष्टमव्यवहार्यमग्राह्यमलक्षणम्",
      "अचिन्त्यमव्यपदेश्यमेकात्मप्रत्ययसारं",
      "प्रपञ्चोपशमं शान्तं शिवमद्वैतं चतुर्थं मन्यन्ते",
      "स आत्मा स विज्ञेयः ॥",
    ],
    iast: [
      "nāntaḥprajñaṃ na bahiṣprajñaṃ nobhayataḥprajñaṃ",
      "na prajñānaghanaṃ na prajñaṃ nāprajñam |",
      "adṛṣṭam avyavahāryam agrāhyam alakṣaṇam",
      "acintyam avyapadeśyam ekātmapratyayasāraṃ",
      "prapañcopaśamaṃ śāntaṃ śivam advaitaṃ caturthaṃ manyante",
      "sa ātmā sa vijñeyaḥ ||",
    ],
    keywords: [
      {
        term: "प्रपञ्चोपशम",
        iast: "prapañcopaśama",
        gloss: {
          en: "the ceasing of the manifold",
          kn: "ಪ್ರಪಂಚದ ಉಪಶಮನ",
          hi: "प्रपंच का उपशम",
        },
      },
      {
        term: "अद्वैत",
        iast: "advaita",
        gloss: {
          en: "not-two",
          kn: "ಎರಡಲ್ಲದ್ದು",
          hi: "अद्वैत, न-दो",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Not inward-knowing, not outward-knowing, not both, not a mass of awareness, not aware, not unaware. Unseen, beyond dealing with, ungraspable, without mark, unthinkable, unnameable — its essence is the certainty of one Self, the ceasing of the manifold, at peace, benign, not-two. That is the fourth. That is the Self. That is to be known.",
        explanation:
          "The most famous sentence in the Upaniṣads, and its method is pure negation. Six denials clear away the three states just established — including, pointedly, prajñānaghana, the exalted description given to deep sleep one mantra ago. The text builds Prājña up to Lord of all and then removes it, so the reader cannot rest in undifferentiation and call it freedom.\n\nSix more negations follow, each closing a route by which the mind takes hold: unseen, not transactable, ungraspable, without characteristic, unthinkable, unnameable. Nothing is left to grip.\n\nThen four positive terms arrive, and they are not descriptions of an object: ekātmapratyayasāra — its essence is the certainty that there is one Self; prapañcopaśama — the manifold has come to rest; śānta, śiva, advaita. Turīya simply means 'the fourth'. It is not a further state alongside the other three. It is what the other three are made of, which is why it can be reached without going anywhere.",
      },
      kn: {
        translation:
          "ಒಳಮುಖ ಪ್ರಜ್ಞೆಯಲ್ಲ, ಹೊರಮುಖ ಪ್ರಜ್ಞೆಯಲ್ಲ, ಎರಡೂ ಅಲ್ಲ, ಪ್ರಜ್ಞಾನಘನವೂ ಅಲ್ಲ, ಪ್ರಜ್ಞವೂ ಅಲ್ಲ, ಅಪ್ರಜ್ಞವೂ ಅಲ್ಲ. ಕಾಣದ್ದು, ವ್ಯವಹಾರಕ್ಕೆ ಸಿಗದ್ದು, ಹಿಡಿಯಲಾಗದ್ದು, ಲಕ್ಷಣವಿಲ್ಲದ್ದು, ಚಿಂತಿಸಲಾಗದ್ದು, ಹೆಸರಿಸಲಾಗದ್ದು — ಏಕಾತ್ಮಪ್ರತ್ಯಯವೇ ಅದರ ಸಾರ, ಪ್ರಪಂಚದ ಉಪಶಮನ, ಶಾಂತ, ಶಿವ, ಅದ್ವೈತ. ಅದೇ ನಾಲ್ಕನೆಯದು. ಅದೇ ಆತ್ಮ. ಅದನ್ನೇ ತಿಳಿಯಬೇಕು.",
        explanation:
          "ಉಪನಿಷತ್ತುಗಳಲ್ಲಿ ಅತ್ಯಂತ ಪ್ರಸಿದ್ಧ ವಾಕ್ಯ, ಮತ್ತು ಅದರ ವಿಧಾನ ಶುದ್ಧ ನಿಷೇಧ. ಆರು ನಿಷೇಧಗಳು ಈಗಷ್ಟೇ ಸ್ಥಾಪಿಸಿದ ಮೂರು ಅವಸ್ಥೆಗಳನ್ನು ತೊಡೆದುಹಾಕುತ್ತವೆ — ಒಂದು ಮಂತ್ರದ ಹಿಂದೆಯೇ ಸುಷುಪ್ತಿಗೆ ಕೊಟ್ಟ ಉನ್ನತ ವರ್ಣನೆಯಾದ 'ಪ್ರಜ್ಞಾನಘನ'ವನ್ನೂ ಸೇರಿಸಿ. ಪಠ್ಯವು ಪ್ರಾಜ್ಞನನ್ನು ಸರ್ವೇಶ್ವರನವರೆಗೆ ಏರಿಸಿ ಆಮೇಲೆ ತೆಗೆದುಹಾಕುತ್ತದೆ, ಏಕೆಂದರೆ ಓದುಗನು ಭೇದರಾಹಿತ್ಯದಲ್ಲಿ ನಿಂತು ಅದನ್ನೇ ಮುಕ್ತಿಯೆಂದು ಕರೆಯಬಾರದು.\n\nಇನ್ನೂ ಆರು ನಿಷೇಧಗಳು ಬರುತ್ತವೆ, ಪ್ರತಿಯೊಂದೂ ಮನಸ್ಸು ಹಿಡಿಯುವ ಒಂದೊಂದು ದಾರಿಯನ್ನು ಮುಚ್ಚುತ್ತದೆ: ಕಾಣದ್ದು, ವ್ಯವಹಾರಾತೀತ, ಅಗ್ರಾಹ್ಯ, ಅಲಕ್ಷಣ, ಅಚಿಂತ್ಯ, ಅವ್ಯಪದೇಶ್ಯ. ಹಿಡಿಯಲು ಏನೂ ಉಳಿಯುವುದಿಲ್ಲ.\n\nಆಮೇಲೆ ನಾಲ್ಕು ವಿಧ್ಯಾತ್ಮಕ ಪದಗಳು ಬರುತ್ತವೆ, ಮತ್ತು ಅವು ಯಾವ ವಸ್ತುವಿನ ವರ್ಣನೆಯೂ ಅಲ್ಲ: 'ಏಕಾತ್ಮಪ್ರತ್ಯಯಸಾರ' — ಒಂದೇ ಆತ್ಮವಿದೆ ಎಂಬ ನಿಶ್ಚಯವೇ ಅದರ ಸಾರ; 'ಪ್ರಪಂಚೋಪಶಮ' — ಪ್ರಪಂಚ ಶಮನಗೊಂಡಿದೆ; ಶಾಂತ, ಶಿವ, ಅದ್ವೈತ. 'ತುರೀಯ' ಎಂದರೆ ಸರಳವಾಗಿ 'ನಾಲ್ಕನೆಯದು'. ಅದು ಉಳಿದ ಮೂರರ ಪಕ್ಕದ ಇನ್ನೊಂದು ಅವಸ್ಥೆಯಲ್ಲ. ಉಳಿದ ಮೂರೂ ಯಾವುದರಿಂದ ಆಗಿವೆಯೋ ಅದೇ ಅದು — ಆದ್ದರಿಂದಲೇ ಎಲ್ಲಿಗೂ ಹೋಗದೆ ಅದನ್ನು ತಲುಪಬಹುದು.",
      },
      hi: {
        translation:
          "न अंतर्मुख प्रज्ञा, न बहिर्मुख प्रज्ञा, न दोनों, न प्रज्ञानघन, न प्रज्ञ, न अप्रज्ञ। अदृष्ट, अव्यवहार्य, अग्राह्य, अलक्षण, अचिंत्य, अव्यपदेश्य — एकात्मप्रत्यय ही उसका सार, प्रपंच का उपशम, शांत, शिव, अद्वैत। वही चतुर्थ है। वही आत्मा है। वही जानने योग्य है।",
        explanation:
          "उपनिषदों का सर्वाधिक प्रसिद्ध वाक्य, और उसकी विधि शुद्ध निषेध है। छह निषेध अभी-अभी स्थापित तीनों अवस्थाओं को हटा देते हैं — और विशेष रूप से 'प्रज्ञानघन' को भी, जो एक मंत्र पहले सुषुप्ति को दिया गया उच्च वर्णन था। पाठ प्राज्ञ को सर्वेश्वर तक चढ़ाकर फिर हटा देता है, ताकि पाठक अभेद में ठहरकर उसी को मुक्ति न कह बैठे।\n\nछह और निषेध आते हैं, हर एक उस मार्ग को बंद करता है जिससे मन पकड़ता है: अदृष्ट, अव्यवहार्य, अग्राह्य, अलक्षण, अचिंत्य, अव्यपदेश्य। पकड़ने को कुछ नहीं बचता।\n\nफिर चार विधेय पद आते हैं, और वे किसी वस्तु के वर्णन नहीं हैं: 'एकात्मप्रत्ययसार' — एक ही आत्मा है, यह निश्चय ही उसका सार; 'प्रपंचोपशम' — प्रपंच शांत हो गया; शांत, शिव, अद्वैत। 'तुरीय' का अर्थ सीधे 'चतुर्थ' है। वह अन्य तीन के साथ की कोई और अवस्था नहीं। वह वही है जिससे अन्य तीनों बनी हैं — इसीलिए कहीं गए बिना उस तक पहुँचा जा सकता है।",
      },
    },
  },

  {
    id: "mandukya-8",
    locator: "8",
    handle: {
      en: "The Self as the syllable",
      kn: "ಅಕ್ಷರರೂಪದಲ್ಲಿ ಆತ್ಮ",
      hi: "अक्षर रूप में आत्मा",
    },
    sanskrit: [
      "सोऽयमात्मा अध्यक्षरम् ओङ्कारोऽधिमात्रं",
      "पादा मात्रा मात्राश्च पादा अकार उकारो मकार इति ॥",
    ],
    iast: [
      "so 'yam ātmā adhyakṣaram oṃkāro 'dhimātraṃ",
      "pādā mātrā mātrāś ca pādā akāra ukāro makāra iti ||",
    ],
    keywords: [
      {
        term: "मात्रा",
        iast: "mātrā",
        gloss: {
          en: "measure; a unit of the syllable",
          kn: "ಮಾತ್ರೆ; ಅಕ್ಷರದ ಒಂದು ಘಟಕ",
          hi: "मात्रा; अक्षर की एक इकाई",
        },
      },
      {
        term: "पाद",
        iast: "pāda",
        gloss: {
          en: "quarter, foot — the same word used for the four states",
          kn: "ಪಾದ — ನಾಲ್ಕು ಅವಸ್ಥೆಗಳಿಗೆ ಬಳಸಿದ ಅದೇ ಪದ",
          hi: "पाद — वही शब्द जो चार अवस्थाओं के लिए प्रयुक्त हुआ",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "This same Self, with respect to the syllable, is Om; with respect to its measures, the quarters are the measures and the measures are the quarters — namely A, U and M.",
        explanation:
          "The hinge of the text. Everything so far has analysed consciousness into four; now the syllable is analysed the same way, and the two analyses are declared identical.\n\nThe phrasing is careful and reciprocal: the quarters are the measures and the measures are the quarters. Not 'the syllable symbolises the states'. A symbol would leave two things standing, one pointing at the other. This says there is one structure, met either by attending to awareness or by attending to sound.\n\nThat is what makes Om a practice rather than an emblem. Chanting it is not remembering a doctrine; it is traversing the same four-part structure in a medium slow enough to notice.",
      },
      kn: {
        translation:
          "ಈ ಆತ್ಮವೇ ಅಕ್ಷರದ ದೃಷ್ಟಿಯಿಂದ ಓಂಕಾರ; ಮಾತ್ರೆಗಳ ದೃಷ್ಟಿಯಿಂದ ಪಾದಗಳೇ ಮಾತ್ರೆಗಳು ಮತ್ತು ಮಾತ್ರೆಗಳೇ ಪಾದಗಳು — ಅಂದರೆ ಅಕಾರ, ಉಕಾರ, ಮಕಾರ.",
        explanation:
          "ಪಠ್ಯದ ತಿರುಗುಗಂಬ. ಇಲ್ಲಿಯವರೆಗೆ ಪ್ರಜ್ಞೆಯನ್ನು ನಾಲ್ಕಾಗಿ ವಿಶ್ಲೇಷಿಸಲಾಗಿತ್ತು; ಈಗ ಅಕ್ಷರವನ್ನೂ ಅದೇ ರೀತಿ ವಿಶ್ಲೇಷಿಸಿ, ಎರಡೂ ವಿಶ್ಲೇಷಣೆಗಳು ಒಂದೇ ಎಂದು ಘೋಷಿಸಲಾಗಿದೆ.\n\nಪದಪ್ರಯೋಗ ಎಚ್ಚರಿಕೆಯದು ಮತ್ತು ಪರಸ್ಪರವಾದದ್ದು: ಪಾದಗಳೇ ಮಾತ್ರೆಗಳು ಮತ್ತು ಮಾತ್ರೆಗಳೇ ಪಾದಗಳು. 'ಅಕ್ಷರವು ಅವಸ್ಥೆಗಳನ್ನು ಸೂಚಿಸುತ್ತದೆ' ಎಂದಲ್ಲ. ಸಂಕೇತವಾಗಿದ್ದರೆ ಎರಡು ವಸ್ತುಗಳು ಉಳಿಯುತ್ತಿದ್ದವು, ಒಂದು ಇನ್ನೊಂದನ್ನು ತೋರಿಸುತ್ತಾ. ಇಲ್ಲಿ ಹೇಳುತ್ತಿರುವುದು ಒಂದೇ ರಚನೆಯಿದೆ, ಅರಿವಿನ ಕಡೆ ಗಮನ ಕೊಟ್ಟೂ ನಾದದ ಕಡೆ ಗಮನ ಕೊಟ್ಟೂ ಅದನ್ನೇ ಎದುರುಗೊಳ್ಳಬಹುದು ಎಂದು.\n\nಓಂಕಾರವನ್ನು ಲಾಂಛನವಲ್ಲ, ಸಾಧನೆಯನ್ನಾಗಿ ಮಾಡುವುದು ಇದೇ. ಅದನ್ನು ಜಪಿಸುವುದು ಸಿದ್ಧಾಂತವನ್ನು ನೆನಪಿಸಿಕೊಳ್ಳುವುದಲ್ಲ; ಗಮನಿಸಲು ಸಾಕಷ್ಟು ನಿಧಾನವಾದ ಮಾಧ್ಯಮದಲ್ಲಿ ಅದೇ ಚತುಷ್ಪಾದ ರಚನೆಯನ್ನು ದಾಟುವುದು.",
      },
      hi: {
        translation:
          "यही आत्मा अक्षर की दृष्टि से ॐकार है; मात्राओं की दृष्टि से पाद ही मात्राएँ हैं और मात्राएँ ही पाद — अर्थात् अकार, उकार और मकार।",
        explanation:
          "पाठ की धुरी। अब तक चेतना का चार में विश्लेषण हुआ; अब अक्षर का भी वैसे ही विश्लेषण होता है, और दोनों विश्लेषण अभिन्न घोषित किए जाते हैं।\n\nशब्दयोजना सावधान और पारस्परिक है: पाद ही मात्राएँ और मात्राएँ ही पाद। 'अक्षर अवस्थाओं का प्रतीक है' — ऐसा नहीं। प्रतीक होता तो दो वस्तुएँ बनी रहतीं, एक दूसरे की ओर संकेत करती। यहाँ कहा जा रहा है कि संरचना एक ही है, जिससे चेतना पर ध्यान देकर भी और नाद पर ध्यान देकर भी भेंट होती है।\n\nयही ॐ को प्रतीक नहीं, साधना बनाता है। उसका जप सिद्धांत का स्मरण नहीं; वह उसी चतुष्पाद संरचना को इतने धीमे माध्यम में पार करना है कि उसे लक्षित किया जा सके।",
      },
    },
  },

  {
    id: "mandukya-9",
    locator: "9",
    handle: {
      en: "A — the first measure",
      kn: "ಅಕಾರ — ಮೊದಲ ಮಾತ್ರೆ",
      hi: "अकार — प्रथम मात्रा",
    },
    sanskrit: [
      "जागरितस्थानो वैश्वानरोऽकारः प्रथमा मात्रा",
      "आप्तेरादिमत्त्वाद् वा आप्नोति ह वै सर्वान् कामान्",
      "आदिश्च भवति य एवं वेद ॥",
    ],
    iast: [
      "jāgaritasthāno vaiśvānaro 'kāraḥ prathamā mātrā",
      "āpter ādimattvād vā āpnoti ha vai sarvān kāmān",
      "ādiś ca bhavati ya evaṃ veda ||",
    ],
    keywords: [
      {
        term: "आप्ति",
        iast: "āpti",
        gloss: {
          en: "obtaining, pervading",
          kn: "ಪಡೆಯುವಿಕೆ, ವ್ಯಾಪಿಸುವಿಕೆ",
          hi: "प्राप्ति, व्याप्ति",
        },
      },
      {
        term: "आदिमत्त्व",
        iast: "ādimattva",
        gloss: {
          en: "being first, having priority",
          kn: "ಮೊದಲಿಗನಾಗಿರುವಿಕೆ",
          hi: "आदि होना, प्रथमता",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Vaiśvānara, whose field is waking, is A, the first measure — from āpti, pervading, or from being first. One who knows thus obtains all desires and becomes first.",
        explanation:
          "The correspondence is argued etymologically, which is how these texts establish that a mapping is not arbitrary. A is linked to āpti, pervading, and to ādimattva, being first — and waking both pervades the other states (you enter them from it and return to it) and comes first in any account of experience.\n\nOne may find the etymology loose by modern standards. What matters is the form of the claim: the letter is not assigned to the state by convention but derived from it, so the practitioner chanting A is meant to feel why it belongs where it does.\n\nThe promised fruit is worth noting for its modesty — all desires, and precedence. These are worldly attainments, and the text says so plainly. The larger fruit is held back for the twelfth mantra.",
      },
      kn: {
        translation:
          "ಜಾಗ್ರತ್ ಸ್ಥಾನದ ವೈಶ್ವಾನರನೇ ಅಕಾರ, ಮೊದಲ ಮಾತ್ರೆ — 'ಆಪ್ತಿ' ಅಂದರೆ ವ್ಯಾಪಿಸುವಿಕೆಯಿಂದ, ಅಥವಾ ಮೊದಲಿಗನಾಗಿರುವುದರಿಂದ. ಹೀಗೆ ತಿಳಿದವನು ಎಲ್ಲ ಕಾಮನೆಗಳನ್ನೂ ಪಡೆಯುತ್ತಾನೆ ಮತ್ತು ಮೊದಲಿಗನಾಗುತ್ತಾನೆ.",
        explanation:
          "ಈ ಸಂವಾದವನ್ನು ವ್ಯುತ್ಪತ್ತಿಯ ಮೂಲಕ ಮಂಡಿಸಲಾಗಿದೆ — ಈ ಹೊಂದಾಣಿಕೆ ಯಾದೃಚ್ಛಿಕವಲ್ಲ ಎಂದು ಇಂಥ ಪಠ್ಯಗಳು ಸ್ಥಾಪಿಸುವ ಕ್ರಮವೇ ಇದು. ಅಕಾರವನ್ನು 'ಆಪ್ತಿ' ಅಂದರೆ ವ್ಯಾಪಿಸುವಿಕೆಗೂ, 'ಆದಿಮತ್ತ್ವ' ಅಂದರೆ ಮೊದಲಿಗನಾಗಿರುವುದಕ್ಕೂ ಜೋಡಿಸಲಾಗಿದೆ — ಮತ್ತು ಜಾಗ್ರತ್ ಉಳಿದ ಅವಸ್ಥೆಗಳನ್ನು ವ್ಯಾಪಿಸುತ್ತದೆ (ಅವುಗಳಿಗೆ ಅದರಿಂದಲೇ ಪ್ರವೇಶಿಸಿ ಅದಕ್ಕೇ ಹಿಂತಿರುಗುತ್ತೇವೆ) ಮತ್ತು ಅನುಭವದ ಯಾವ ವಿವರಣೆಯಲ್ಲಿಯೂ ಮೊದಲು ಬರುತ್ತದೆ.\n\nಆಧುನಿಕ ಮಾನದಂಡಗಳಿಂದ ಈ ವ್ಯುತ್ಪತ್ತಿ ಸಡಿಲವೆನಿಸಬಹುದು. ಮುಖ್ಯವಾದದ್ದು ಪ್ರತಿಪಾದನೆಯ ರೂಪ: ಅಕ್ಷರವನ್ನು ಅವಸ್ಥೆಗೆ ಸಂಪ್ರದಾಯದಿಂದ ನಿಗದಿಪಡಿಸಿಲ್ಲ, ಅದರಿಂದಲೇ ನಿಷ್ಪನ್ನಗೊಳಿಸಲಾಗಿದೆ — ಆದ್ದರಿಂದ ಅಕಾರವನ್ನು ಜಪಿಸುವವನು ಅದು ಅಲ್ಲಿಯೇ ಏಕೆ ಸೇರುತ್ತದೆಂದು ಅನುಭವಿಸಬೇಕು.\n\nವಾಗ್ದಾನಿಸಿದ ಫಲದ ಸಾಧಾರಣತೆಯನ್ನು ಗಮನಿಸಿ — ಎಲ್ಲ ಕಾಮನೆಗಳು, ಮತ್ತು ಪ್ರಾಧಾನ್ಯ. ಇವು ಲೌಕಿಕ ಸಿದ್ಧಿಗಳು, ಮತ್ತು ಪಠ್ಯ ಅದನ್ನು ನೇರವಾಗಿ ಹೇಳುತ್ತದೆ. ದೊಡ್ಡ ಫಲವನ್ನು ಹನ್ನೆರಡನೆಯ ಮಂತ್ರಕ್ಕೆ ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
      },
      hi: {
        translation:
          "जाग्रत् स्थान वाला वैश्वानर ही अकार है, प्रथम मात्रा — 'आप्ति' अर्थात् व्याप्ति से, अथवा आदि होने से। जो ऐसा जानता है वह सब कामनाएँ प्राप्त करता है और आदि होता है।",
        explanation:
          "यह संगति व्युत्पत्ति से सिद्ध की गई है — ऐसे पाठ यही विधि अपनाते हैं यह दिखाने को कि यह मेल मनमाना नहीं। अकार को 'आप्ति' अर्थात् व्याप्ति से और 'आदिमत्त्व' अर्थात् प्रथम होने से जोड़ा गया है — और जाग्रत् अन्य अवस्थाओं में व्याप्त है (उन्हीं में उसी से प्रवेश होता है और उसी में लौटना होता है) तथा अनुभव के किसी भी विवरण में पहले आती है।\n\nआधुनिक मानदंडों से यह व्युत्पत्ति ढीली लग सकती है। महत्वपूर्ण दावे का रूप है: अक्षर अवस्था को रूढ़ि से नहीं सौंपा गया, उसी से निष्पन्न किया गया है — इसलिए अकार का जप करने वाले को अनुभव होना चाहिए कि वह वहीं क्यों बैठता है।\n\nप्रतिज्ञात फल की सादगी ध्यान देने योग्य है — सब कामनाएँ, और प्रथमता। ये लौकिक सिद्धियाँ हैं, और पाठ यह सीधे कहता है। बड़ा फल बारहवें मंत्र के लिए रोक रखा गया है।",
      },
    },
  },

  {
    id: "mandukya-10",
    locator: "10",
    handle: {
      en: "U — the second measure",
      kn: "ಉಕಾರ — ಎರಡನೆಯ ಮಾತ್ರೆ",
      hi: "उकार — द्वितीय मात्रा",
    },
    sanskrit: [
      "स्वप्नस्थानस्तैजस उकारो द्वितीया मात्रा",
      "उत्कर्षादुभयत्वाद् वा उत्कर्षति ह वै ज्ञानसन्ततिं",
      "समानश्च भवति नास्याब्रह्मवित्कुले भवति य एवं वेद ॥",
    ],
    iast: [
      "svapnasthānas taijasa ukāro dvitīyā mātrā",
      "utkarṣād ubhayatvād vā utkarṣati ha vai jñānasantatiṃ",
      "samānaś ca bhavati nāsyābrahmavit kule bhavati ya evaṃ veda ||",
    ],
    keywords: [
      {
        term: "उत्कर्ष",
        iast: "utkarṣa",
        gloss: {
          en: "elevation, drawing upward",
          kn: "ಉನ್ನತಿ, ಮೇಲಕ್ಕೆ ಎಳೆಯುವಿಕೆ",
          hi: "उत्कर्ष, ऊपर उठाना",
        },
      },
      {
        term: "उभयत्व",
        iast: "ubhayatva",
        gloss: {
          en: "being in between, partaking of both",
          kn: "ಎರಡರ ನಡುವೆ ಇರುವಿಕೆ",
          hi: "उभयत्व, दोनों के बीच होना",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Taijasa, whose field is dream, is U, the second measure — from utkarṣa, elevation, or from being in between. One who knows thus elevates the continuity of knowledge, becomes equal, and no one ignorant of Brahman is born in that family.",
        explanation:
          "Again the derivation carries the argument. U is the middle sound of Om, formed between the openness of A and the closure of M — and dream is the middle state, between the outwardness of waking and the closure of deep sleep. Ubhayatva, 'partaking of both', names that position exactly.\n\nUtkarṣa, elevation, is the second derivation, and it fits: the dream state lifts awareness clear of gross objects without yet dissolving it. Whatever one makes of dream, it demonstrates that consciousness does not require external material to have a world.\n\nThe fruit here is subtler than the first: jñānasantati, the continuity of knowledge — not a possession but a thread that holds. The line about the family is a Vedic idiom for a result that outlasts the individual.",
      },
      kn: {
        translation:
          "ಸ್ವಪ್ನಸ್ಥಾನದ ತೈಜಸನೇ ಉಕಾರ, ಎರಡನೆಯ ಮಾತ್ರೆ — 'ಉತ್ಕರ್ಷ' ಅಂದರೆ ಉನ್ನತಿಯಿಂದ, ಅಥವಾ ಎರಡರ ನಡುವೆ ಇರುವುದರಿಂದ. ಹೀಗೆ ತಿಳಿದವನು ಜ್ಞಾನಸಂತತಿಯನ್ನು ಉನ್ನತಗೊಳಿಸುತ್ತಾನೆ, ಸಮಾನನಾಗುತ್ತಾನೆ, ಮತ್ತು ಅವನ ವಂಶದಲ್ಲಿ ಬ್ರಹ್ಮಜ್ಞಾನವಿಲ್ಲದವನು ಹುಟ್ಟುವುದಿಲ್ಲ.",
        explanation:
          "ಇಲ್ಲಿಯೂ ವ್ಯುತ್ಪತ್ತಿಯೇ ವಾದವನ್ನು ಹೊತ್ತಿದೆ. ಉಕಾರ ಓಂಕಾರದ ಮಧ್ಯನಾದ, ಅಕಾರದ ತೆರೆದಿರುವಿಕೆ ಮತ್ತು ಮಕಾರದ ಮುಚ್ಚುವಿಕೆಯ ನಡುವೆ ರೂಪುಗೊಂಡದ್ದು — ಮತ್ತು ಸ್ವಪ್ನ ಮಧ್ಯದ ಅವಸ್ಥೆ, ಜಾಗ್ರತ್ತಿನ ಹೊರಮುಖತೆ ಮತ್ತು ಸುಷುಪ್ತಿಯ ಮುಚ್ಚುವಿಕೆಯ ನಡುವೆ. 'ಉಭಯತ್ವ' ಎಂಬುದು ಆ ಸ್ಥಾನವನ್ನು ನಿಖರವಾಗಿ ಹೆಸರಿಸುತ್ತದೆ.\n\n'ಉತ್ಕರ್ಷ' ಎಂಬುದು ಎರಡನೆಯ ನಿಷ್ಪತ್ತಿ, ಮತ್ತು ಅದು ಹೊಂದುತ್ತದೆ: ಸ್ವಪ್ನಾವಸ್ಥೆ ಅರಿವನ್ನು ಸ್ಥೂಲ ವಿಷಯಗಳಿಂದ ಮೇಲೆತ್ತುತ್ತದೆ, ಆದರೆ ಇನ್ನೂ ಕರಗಿಸುವುದಿಲ್ಲ. ಸ್ವಪ್ನದ ಬಗ್ಗೆ ಏನೇ ಅಭಿಪ್ರಾಯವಿರಲಿ, ಜಗತ್ತೊಂದನ್ನು ಹೊಂದಲು ಪ್ರಜ್ಞೆಗೆ ಹೊರಗಿನ ದ್ರವ್ಯ ಬೇಕಿಲ್ಲ ಎಂಬುದನ್ನು ಅದು ತೋರಿಸುತ್ತದೆ.\n\nಇಲ್ಲಿನ ಫಲ ಮೊದಲನೆಯದಕ್ಕಿಂತ ಸೂಕ್ಷ್ಮ: 'ಜ್ಞಾನಸಂತತಿ', ಜ್ಞಾನದ ನಿರಂತರತೆ — ಸ್ವತ್ತಲ್ಲ, ಹಿಡಿದಿಡುವ ಎಳೆ. ವಂಶದ ಕುರಿತ ಸಾಲು ವ್ಯಕ್ತಿಯನ್ನು ಮೀರಿ ಉಳಿಯುವ ಫಲಕ್ಕೆ ವೈದಿಕ ನುಡಿಗಟ್ಟು.",
      },
      hi: {
        translation:
          "स्वप्नस्थान वाला तैजस ही उकार है, द्वितीय मात्रा — 'उत्कर्ष' से, अथवा उभयत्व से। जो ऐसा जानता है वह ज्ञानसंतति का उत्कर्ष करता है, समान होता है, और उसके कुल में ब्रह्म को न जानने वाला उत्पन्न नहीं होता।",
        explanation:
          "यहाँ भी व्युत्पत्ति ही तर्क उठाए है। उकार ॐकार का मध्य नाद है, अकार के खुलेपन और मकार के बंद होने के बीच बना — और स्वप्न मध्य अवस्था है, जाग्रत् की बहिर्मुखता और सुषुप्ति के बंद होने के बीच। 'उभयत्व' उसी स्थिति को ठीक-ठीक नामित करता है।\n\n'उत्कर्ष' दूसरी निष्पत्ति है, और वह बैठती है: स्वप्नावस्था चेतना को स्थूल विषयों से ऊपर उठाती है, पर अभी विलीन नहीं करती। स्वप्न के विषय में जो भी मत हो, वह यह दिखाता है कि जगत् रचने के लिए चेतना को बाहरी सामग्री नहीं चाहिए।\n\nयहाँ का फल पहले से सूक्ष्म है: 'ज्ञानसंतति', ज्ञान की निरंतरता — संपत्ति नहीं, थामने वाला सूत्र। कुल वाली पंक्ति उस फल के लिए वैदिक मुहावरा है जो व्यक्ति से आगे टिकता है।",
      },
    },
  },

  {
    id: "mandukya-11",
    locator: "11",
    handle: {
      en: "M — the third measure",
      kn: "ಮಕಾರ — ಮೂರನೆಯ ಮಾತ್ರೆ",
      hi: "मकार — तृतीय मात्रा",
    },
    sanskrit: [
      "सुषुप्तस्थानः प्राज्ञो मकारस्तृतीया मात्रा",
      "मितेरपीतेर्वा मिनोति ह वा इदं सर्वम्",
      "अपीतिश्च भवति य एवं वेद ॥",
    ],
    iast: [
      "suṣuptasthānaḥ prājño makāras tṛtīyā mātrā",
      "miter apīter vā minoti ha vā idaṃ sarvam",
      "apītiś ca bhavati ya evaṃ veda ||",
    ],
    keywords: [
      {
        term: "मिति",
        iast: "miti",
        gloss: {
          en: "measuring; taking the measure of a thing",
          kn: "ಅಳೆಯುವಿಕೆ; ವಸ್ತುವಿನ ಪ್ರಮಾಣ ತೆಗೆದುಕೊಳ್ಳುವಿಕೆ",
          hi: "मिति; किसी वस्तु का माप लेना",
        },
      },
      {
        term: "अपीति",
        iast: "apīti",
        gloss: {
          en: "merging, absorption back into",
          kn: "ಲಯ, ಮರಳಿ ಲೀನವಾಗುವಿಕೆ",
          hi: "अपीति, पुनः लय",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Prājña, whose field is deep sleep, is M, the third measure — from miti, measuring, or from apīti, merging. One who knows thus measures all this, and becomes that into which all merges.",
        explanation:
          "M closes the syllable. The lips come together and the sound ends — and deep sleep is where the world closes and returns to its unmanifest condition. Apīti, merging, is the exact word for what happens to both.\n\nThe first derivation, miti, is the more interesting. To measure something is to take its whole extent at once. Deep sleep does that to the world: everything is present there, undivided, in the way a total is present without its parts being enumerated.\n\nWith this the three sounded measures are exhausted, and so are the three states. What comes next is the mantra the whole text has been arranged to arrive at — and it is about what is left when the sound stops.",
      },
      kn: {
        translation:
          "ಸುಷುಪ್ತಸ್ಥಾನದ ಪ್ರಾಜ್ಞನೇ ಮಕಾರ, ಮೂರನೆಯ ಮಾತ್ರೆ — 'ಮಿತಿ' ಅಂದರೆ ಅಳೆಯುವಿಕೆಯಿಂದ, ಅಥವಾ 'ಅಪೀತಿ' ಅಂದರೆ ಲಯದಿಂದ. ಹೀಗೆ ತಿಳಿದವನು ಇದೆಲ್ಲವನ್ನೂ ಅಳೆಯುತ್ತಾನೆ, ಮತ್ತು ಎಲ್ಲವೂ ಯಾವುದರಲ್ಲಿ ಲಯವಾಗುತ್ತದೋ ಅದೇ ಆಗುತ್ತಾನೆ.\n",
        explanation:
          "ಮಕಾರ ಅಕ್ಷರವನ್ನು ಮುಚ್ಚುತ್ತದೆ. ತುಟಿಗಳು ಸೇರುತ್ತವೆ, ನಾದ ಮುಗಿಯುತ್ತದೆ — ಮತ್ತು ಸುಷುಪ್ತಿಯಲ್ಲಿಯೇ ಜಗತ್ತು ಮುಚ್ಚಿ ತನ್ನ ಅವ್ಯಕ್ತ ಸ್ಥಿತಿಗೆ ಮರಳುತ್ತದೆ. 'ಅಪೀತಿ' ಎಂಬುದು ಎರಡಕ್ಕೂ ಆಗುವುದನ್ನು ನಿಖರವಾಗಿ ಹೇಳುವ ಪದ.\n\nಮೊದಲ ನಿಷ್ಪತ್ತಿಯಾದ 'ಮಿತಿ' ಹೆಚ್ಚು ಕುತೂಹಲಕರ. ಒಂದನ್ನು ಅಳೆಯುವುದೆಂದರೆ ಅದರ ಪೂರ್ಣ ವ್ಯಾಪ್ತಿಯನ್ನು ಒಟ್ಟಿಗೆ ತೆಗೆದುಕೊಳ್ಳುವುದು. ಸುಷುಪ್ತಿ ಜಗತ್ತಿಗೆ ಅದನ್ನೇ ಮಾಡುತ್ತದೆ: ಎಲ್ಲವೂ ಅಲ್ಲಿ ಅವಿಭಕ್ತವಾಗಿ ಇರುತ್ತದೆ — ಘಟಕಗಳನ್ನು ಎಣಿಸದೆಯೇ ಮೊತ್ತವೊಂದು ಇರುವಂತೆ.\n\nಇದರೊಂದಿಗೆ ಉಚ್ಚರಿಸಲ್ಪಡುವ ಮೂರು ಮಾತ್ರೆಗಳೂ ಮುಗಿದವು, ಮೂರು ಅವಸ್ಥೆಗಳೂ ಮುಗಿದವು. ಮುಂದೆ ಬರುವುದೇ ಇಡೀ ಪಠ್ಯ ತಲುಪಲು ಜೋಡಿಸಲ್ಪಟ್ಟ ಮಂತ್ರ — ಮತ್ತು ಅದು ನಾದ ನಿಂತಾಗ ಏನು ಉಳಿಯುತ್ತದೆ ಎಂಬುದರ ಬಗ್ಗೆ.",
      },
      hi: {
        translation:
          "सुषुप्तस्थान वाला प्राज्ञ ही मकार है, तृतीय मात्रा — 'मिति' अर्थात् मापने से, अथवा 'अपीति' अर्थात् लय से। जो ऐसा जानता है वह इस सबको मापता है, और वही हो जाता है जिसमें सब लीन होता है।",
        explanation:
          "मकार अक्षर को बंद करता है। ओष्ठ मिलते हैं और नाद समाप्त होता है — और सुषुप्ति में ही जगत् बंद होकर अपनी अव्यक्त दशा में लौटता है। 'अपीति' दोनों के साथ जो होता है उसका ठीक शब्द है।\n\nपहली निष्पत्ति 'मिति' अधिक रोचक है। किसी वस्तु को मापना अर्थात् उसका पूरा विस्तार एक साथ लेना। सुषुप्ति जगत् के साथ यही करती है: वहाँ सब कुछ अविभक्त रूप में उपस्थित है — जैसे योग उपस्थित होता है बिना उसके अंगों की गणना के।\n\nइसके साथ उच्चरित तीनों मात्राएँ समाप्त, और तीनों अवस्थाएँ भी। आगे वही मंत्र है जिस तक पहुँचने के लिए सारा पाठ सजाया गया — और वह इस विषय में है कि नाद रुकने पर क्या शेष रहता है।",
      },
    },
  },

  {
    id: "mandukya-12",
    locator: "12",
    handle: {
      en: "The measureless fourth",
      kn: "ಅಮಾತ್ರವಾದ ನಾಲ್ಕನೆಯದು",
      hi: "अमात्र चतुर्थ",
    },
    sanskrit: [
      "अमात्रश्चतुर्थोऽव्यवहार्यः प्रपञ्चोपशमः",
      "शिवोऽद्वैत एवमोङ्कार आत्मैव",
      "संविशत्यात्मनाऽऽत्मानं य एवं वेद य एवं वेद ॥",
    ],
    iast: [
      "amātraś caturtho 'vyavahāryaḥ prapañcopaśamaḥ",
      "śivo 'dvaita evam oṃkāra ātmaiva",
      "saṃviśaty ātmanātmānaṃ ya evaṃ veda ya evaṃ veda ||",
    ],
    keywords: [
      {
        term: "अमात्र",
        iast: "amātra",
        gloss: {
          en: "without measure; having no mātrā",
          kn: "ಮಾತ್ರೆಯಿಲ್ಲದ್ದು, ಅಳತೆಗೆ ಸಿಗದ್ದು",
          hi: "अमात्र; जिसकी कोई मात्रा नहीं",
        },
      },
      {
        term: "संविशति",
        iast: "saṃviśati",
        gloss: {
          en: "enters into, merges with",
          kn: "ಪ್ರವೇಶಿಸುತ್ತಾನೆ, ಲೀನನಾಗುತ್ತಾನೆ",
          hi: "प्रवेश करता है, लीन होता है",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "The fourth is without measure, beyond dealing with, the ceasing of the manifold, benign, not-two. Thus Om is the very Self. One who knows thus enters the Self by the Self — one who knows thus.",
        explanation:
          "Amātra — measureless. The first three quarters had sounds; the fourth has none. In practice this is the silence after the chant has ended, which is not an absence but the thing the three sounds were made of. You do not add a fourth noise. You stop, and what was always there is what remains.\n\nThe final clause is the most precise sentence in the text: saṃviśaty ātmanātmānam — enters the Self by the Self. Three occurrences of one word, and no second thing anywhere in the grammar. There is no traveller, no vehicle, no destination — only ātman, functioning as agent, instrument and object at once. The sentence enacts advaita rather than asserting it.\n\nThe repetition at the end, ya evaṃ veda ya evaṃ veda, is the traditional marker that an Upaniṣad has finished. It is also, here, the last thing a text about a sound does before falling silent.",
      },
      kn: {
        translation:
          "ನಾಲ್ಕನೆಯದು ಮಾತ್ರೆಯಿಲ್ಲದ್ದು, ವ್ಯವಹಾರಕ್ಕೆ ಸಿಗದ್ದು, ಪ್ರಪಂಚದ ಉಪಶಮನ, ಶಿವ, ಅದ್ವೈತ. ಹೀಗೆ ಓಂಕಾರವೇ ಆತ್ಮ. ಹೀಗೆ ತಿಳಿದವನು ಆತ್ಮದಿಂದಲೇ ಆತ್ಮವನ್ನು ಪ್ರವೇಶಿಸುತ್ತಾನೆ — ಹೀಗೆ ತಿಳಿದವನು.",
        explanation:
          "'ಅಮಾತ್ರ' — ಅಳತೆಯಿಲ್ಲದ್ದು. ಮೊದಲ ಮೂರು ಪಾದಗಳಿಗೆ ನಾದವಿತ್ತು; ನಾಲ್ಕನೆಯದಕ್ಕೆ ಇಲ್ಲ. ಆಚರಣೆಯಲ್ಲಿ ಇದು ಜಪ ಮುಗಿದ ನಂತರದ ಮೌನ, ಮತ್ತು ಅದು ಅಭಾವವಲ್ಲ — ಆ ಮೂರು ನಾದಗಳು ಯಾವುದರಿಂದ ಆಗಿದ್ದವೋ ಅದೇ. ನೀವು ನಾಲ್ಕನೆಯ ಸದ್ದನ್ನು ಸೇರಿಸುವುದಿಲ್ಲ. ನಿಲ್ಲಿಸುತ್ತೀರಿ, ಮತ್ತು ಯಾವಾಗಲೂ ಇದ್ದದ್ದೇ ಉಳಿಯುತ್ತದೆ.\n\nಕೊನೆಯ ವಾಕ್ಯವೇ ಪಠ್ಯದ ಅತ್ಯಂತ ನಿಖರವಾದದ್ದು: 'ಸಂವಿಶತ್ಯಾತ್ಮನಾಽಽತ್ಮಾನಮ್' — ಆತ್ಮದಿಂದ ಆತ್ಮವನ್ನು ಪ್ರವೇಶಿಸುತ್ತಾನೆ. ಒಂದೇ ಪದದ ಮೂರು ಪ್ರಯೋಗಗಳು, ಮತ್ತು ವ್ಯಾಕರಣದಲ್ಲಿ ಎಲ್ಲಿಯೂ ಎರಡನೆಯ ವಸ್ತುವಿಲ್ಲ. ಪ್ರಯಾಣಿಕನಿಲ್ಲ, ವಾಹನವಿಲ್ಲ, ಗಮ್ಯವಿಲ್ಲ — ಕರ್ತೃ, ಕರಣ, ಕರ್ಮ ಮೂರೂ ಆಗಿ ಕೆಲಸ ಮಾಡುವ ಆತ್ಮವೊಂದೇ. ಈ ವಾಕ್ಯ ಅದ್ವೈತವನ್ನು ಪ್ರತಿಪಾದಿಸುವುದಿಲ್ಲ, ನಡೆಸಿ ತೋರಿಸುತ್ತದೆ.\n\nಕೊನೆಯ ಪುನರಾವರ್ತನೆ 'ಯ ಏವಂ ವೇದ ಯ ಏವಂ ವೇದ' ಎಂಬುದು ಉಪನಿಷತ್ತು ಮುಗಿಯಿತೆಂಬ ಸಾಂಪ್ರದಾಯಿಕ ಗುರುತು. ಇಲ್ಲಿ ಅದು, ನಾದದ ಕುರಿತ ಪಠ್ಯವೊಂದು ಮೌನವಾಗುವ ಮೊದಲು ಮಾಡುವ ಕೊನೆಯ ಕೆಲಸವೂ ಹೌದು.",
      },
      hi: {
        translation:
          "चतुर्थ अमात्र है, अव्यवहार्य, प्रपंच का उपशम, शिव, अद्वैत। इस प्रकार ॐकार आत्मा ही है। जो ऐसा जानता है वह आत्मा से ही आत्मा में प्रवेश करता है — जो ऐसा जानता है।",
        explanation:
          "'अमात्र' — मात्रारहित। पहले तीन पादों के नाद थे; चतुर्थ का नहीं। साधना में यह जप समाप्त होने के बाद का मौन है, और वह अभाव नहीं — वही है जिससे तीनों नाद बने थे। आप चौथा शब्द नहीं जोड़ते। आप रुकते हैं, और जो सदा था वही शेष रहता है।\n\nअंतिम वाक्य पाठ का सर्वाधिक सटीक वाक्य है: 'संविशत्यात्मनाऽऽत्मानम्' — आत्मा से आत्मा में प्रवेश करता है। एक ही शब्द के तीन प्रयोग, और व्याकरण में कहीं दूसरी वस्तु नहीं। न यात्री, न वाहन, न गंतव्य — केवल आत्मा, जो कर्ता, करण और कर्म तीनों रूप में एक साथ कार्य कर रही है। यह वाक्य अद्वैत का प्रतिपादन नहीं करता, उसे घटित कर देता है।\n\nअंत की पुनरुक्ति 'य एवं वेद य एवं वेद' यह पारंपरिक चिह्न है कि उपनिषद् पूर्ण हुआ। और यहाँ वह नाद के विषय में लिखे पाठ का मौन होने से पूर्व का अंतिम कार्य भी है।",
      },
    },
  },
];

registerText({
  slug: "mandukya",
  textId: "t-mandukya",
  verses: VERSES,
  videos: MANDUKYA_VIDEOS,
  series: MANDUKYA_SERIES,
});
