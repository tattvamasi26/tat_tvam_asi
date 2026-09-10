import { registerText, type FullVerse } from "./upanishads";

// ─────────────────────────────────────────────────────────
//  Chāndogya Upaniṣad, chapter six — Uddālaka and Śvetaketu.
//
//  The Chāndogya entire is 628 sections, and it is not a text that
//  can be set down complete with the confidence the rest of this
//  site is held to. So it is here as SELECTIONS, and it says so:
//  `completeness: "selections"` puts a banner at the head of the
//  reader naming what is present and what is not. A partial text
//  must not be able to look complete.
//
//  What is present is the sixth chapter, whole — sixteen khaṇḍas,
//  sixty-nine sections, the most studied stretch of prose in the
//  Upaniṣadic corpus. A father watches his son come home from twelve
//  years of study insufferably pleased with himself, asks him one
//  question he cannot answer, and then spends sixteen khaṇḍas
//  answering it: what is that knowing by which everything is known?
//
//  The answer arrives nine times, in nine analogies, each ending in
//  the same words — tat tvam asi śvetaketo. This site is named after
//  them. They fall at 6.8.7, 6.9.4, 6.10.3, 6.11.3, 6.12.3, 6.13.3,
//  6.14.3, 6.15.3 and 6.16.3, and the repetition is the pedagogy:
//  the sentence does not change, the student does.
//
//  Citation status is as everywhere else on the site — the mūla is
//  the received text; the translations and the commentary are the
//  site's own editorial work and are labelled as such.
// ─────────────────────────────────────────────────────────

const VERSES: FullVerse[] = [
  {
    id: "chandogya-shanti",
    locator: "invocation",
    handle: {
      en: "May my limbs grow strong",
      kn: "ನನ್ನ ಅಂಗಗಳು ಪುಷ್ಟವಾಗಲಿ",
      hi: "मेरे अंग पुष्ट हों",
    },
    sanskrit: [
      "ॐ आप्यायन्तु ममाङ्गानि वाक्प्राणश्चक्षुः",
      "श्रोत्रमथो बलमिन्द्रियाणि च सर्वाणि ।",
      "सर्वं ब्रह्मौपनिषदं माऽहं ब्रह्म निराकुर्यां",
      "मा मा ब्रह्म निराकरोत् अनिराकरणमस्तु ।",
      "ॐ शान्तिः शान्तिः शान्तिः ॥",
    ],
    iast: [
      "oṃ āpyāyantu mamāṅgāni vāk prāṇaś cakṣuḥ",
      "śrotram atho balam indriyāṇi ca sarvāṇi |",
      "sarvaṃ brahmaupaniṣadaṃ mā 'haṃ brahma nirākuryāṃ",
      "mā mā brahma nirākarot anirākaraṇam astu |",
      "oṃ śāntiḥ śāntiḥ śāntiḥ ||",
    ],
    keywords: [
      {
        term: "आप्यायन्तु",
        iast: "āpyāyantu",
        gloss: {
          en: "may they be nourished, filled out",
          kn: "ಪುಷ್ಟವಾಗಲಿ, ತುಂಬಿಕೊಳ್ಳಲಿ",
          hi: "पुष्ट हों, भर जाएँ",
        },
      },
      {
        term: "ब्रह्मौपनिषदम्",
        iast: "brahmaupaniṣadam",
        gloss: {
          en: "the Brahman the Upaniṣads speak of",
          kn: "ಉಪನಿಷತ್ತುಗಳು ಹೇಳುವ ಬ್ರಹ್ಮ",
          hi: "उपनिषदों का कहा हुआ ब्रह्म",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "May my limbs be nourished — speech, breath, eye, ear, and all my strength and senses. All is the Brahman of the Upaniṣads. May I never deny Brahman; may Brahman never deny me. Let there be no denial at all. Om — peace, peace, peace.",
        explanation:
          "The Sāmaveda's peace invocation, which the Chāndogya shares with the Kena — both belong to that Veda, and a recitation of this chapter opens with it.\n\nIt is worth noticing what it asks for on the threshold of this particular chapter. Not insight, not release: working senses and a sound body. What follows is a father teaching by making his son look at clay, at gold, at a fig seed, at salt dissolved in water, and finally at his own sleep and hunger and thirst. Every one of those lessons runs through the senses this verse asks to have in good order. The teaching about to begin is not a flight from the ordinary world; it is sixteen khaṇḍas of close attention paid to it.",
      },
      kn: {
        translation:
          "ನನ್ನ ಅಂಗಗಳು ಪುಷ್ಟವಾಗಲಿ — ವಾಕ್, ಪ್ರಾಣ, ಕಣ್ಣು, ಕಿವಿ, ಬಲ ಮತ್ತು ಎಲ್ಲ ಇಂದ್ರಿಯಗಳು. ಎಲ್ಲವೂ ಉಪನಿಷತ್ತುಗಳ ಬ್ರಹ್ಮವೇ. ನಾನು ಬ್ರಹ್ಮವನ್ನು ನಿರಾಕರಿಸದಿರಲಿ; ಬ್ರಹ್ಮ ನನ್ನನ್ನು ನಿರಾಕರಿಸದಿರಲಿ. ನಿರಾಕರಣವೇ ಇಲ್ಲದಿರಲಿ. ಓಂ — ಶಾಂತಿ, ಶಾಂತಿ, ಶಾಂತಿ.",
        explanation:
          "ಸಾಮವೇದದ ಶಾಂತಿಮಂತ್ರ. ಛಾಂದೋಗ್ಯ ಮತ್ತು ಕೇನ ಎರಡೂ ಆ ವೇದಕ್ಕೆ ಸೇರಿದವು, ಮತ್ತು ಈ ಅಧ್ಯಾಯದ ಪಾರಾಯಣ ಇದರಿಂದಲೇ ಆರಂಭವಾಗುತ್ತದೆ.\n\nಈ ನಿರ್ದಿಷ್ಟ ಅಧ್ಯಾಯದ ಹೊಸ್ತಿಲಲ್ಲಿ ಅದು ಏನನ್ನು ಕೇಳುತ್ತದೆ ಎಂಬುದು ಗಮನಾರ್ಹ. ಒಳನೋಟವನ್ನಲ್ಲ, ಮುಕ್ತಿಯನ್ನಲ್ಲ: ಕೆಲಸ ಮಾಡುವ ಇಂದ್ರಿಯಗಳನ್ನು ಮತ್ತು ಸದೃಢ ಶರೀರವನ್ನು. ಮುಂದೆ ಬರುವುದು — ತಂದೆಯೊಬ್ಬ ಮಗನಿಗೆ ಮಣ್ಣನ್ನು, ಚಿನ್ನವನ್ನು, ಆಲದ ಬೀಜವನ್ನು, ನೀರಿನಲ್ಲಿ ಕರಗಿದ ಉಪ್ಪನ್ನು, ಕೊನೆಗೆ ಅವನ ಸ್ವಂತ ನಿದ್ರೆ, ಹಸಿವು, ಬಾಯಾರಿಕೆಯನ್ನು ನೋಡಿಸಿ ಕಲಿಸುವುದು. ಆ ಪ್ರತಿಯೊಂದು ಪಾಠವೂ ಈ ಮಂತ್ರ ಸರಿಯಾಗಿರಲಿ ಎಂದು ಕೇಳುವ ಇಂದ್ರಿಯಗಳ ಮೂಲಕವೇ ನಡೆಯುತ್ತದೆ. ಆರಂಭವಾಗಲಿರುವ ಬೋಧನೆ ಲೌಕಿಕ ಜಗತ್ತಿನಿಂದ ಪಲಾಯನವಲ್ಲ; ಅದು ಜಗತ್ತಿನ ಮೇಲೆ ಹದಿನಾರು ಖಂಡಗಳ ಕಾಲ ನೀಡಿದ ನಿಕಟ ಗಮನ.",
      },
      hi: {
        translation:
          "मेरे अंग पुष्ट हों — वाक्, प्राण, चक्षु, श्रोत्र, बल और समस्त इंद्रियाँ। सब कुछ उपनिषदों का ब्रह्म ही है। मैं ब्रह्म का निराकरण न करूँ; ब्रह्म मेरा निराकरण न करे। निराकरण हो ही नहीं। ॐ — शांति, शांति, शांति।",
        explanation:
          "सामवेद का शांतिमंत्र। छान्दोग्य और केन दोनों उसी वेद के हैं, और इस अध्याय का पाठ इसी से आरंभ होता है।\n\nठीक इसी अध्याय की देहरी पर यह क्या माँगता है, यह ध्यान देने योग्य है। अंतर्दृष्टि नहीं, मोक्ष नहीं: काम करती इंद्रियाँ और स्वस्थ शरीर। आगे जो आता है वह यह है — एक पिता अपने पुत्र को मिट्टी, सोना, बरगद का बीज, जल में घुला नमक, और अंततः उसकी अपनी नींद, भूख और प्यास दिखाकर सिखाता है। इनमें से हर पाठ उन्हीं इंद्रियों से होकर चलता है जिनके ठीक रहने की प्रार्थना यह मंत्र करता है। जो उपदेश आरंभ होने वाला है वह संसार से पलायन नहीं; वह संसार पर सोलह खंडों तक दिया गया गहरा ध्यान है।",
      },
    },
  },

  {
    id: "chandogya-6-1-1",
    locator: "6.1.1",
    handle: {
      en: "Go and live as a student",
      kn: "ಹೋಗಿ ಬ್ರಹ್ಮಚರ್ಯದಲ್ಲಿ ವಾಸಿಸು",
      hi: "जाओ, ब्रह्मचर्य में रहो",
    },
    sanskrit: [
      "श्वेतकेतुर्हारुणेय आस ।",
      "तं ह पितोवाच श्वेतकेतो वस ब्रह्मचर्यम् ।",
      "न वै सोम्यास्मत्कुलीनोऽननूच्य",
      "ब्रह्मबन्धुरिव भवतीति ॥",
    ],
    iast: [
      "śvetaketur hāruṇeya āsa |",
      "taṃ ha pitovāca śvetaketo vasa brahmacaryam |",
      "na vai somyāsmat kulīno 'nanūcya",
      "brahmabandhur iva bhavatīti ||",
    ],
    keywords: [
      {
        term: "ब्रह्मचर्यम्",
        iast: "brahmacaryam",
        gloss: {
          en: "the disciplined life of a student, lived at a teacher's house",
          kn: "ಗುರುಗೃಹದಲ್ಲಿ ನಡೆಸುವ ಶಿಸ್ತಿನ ವಿದ್ಯಾರ್ಥಿಜೀವನ",
          hi: "गुरुगृह में बिताया जाने वाला संयमित विद्यार्थी-जीवन",
        },
      },
      {
        term: "ब्रह्मबन्धुः",
        iast: "brahmabandhuḥ",
        gloss: {
          en: "a brāhmaṇa by relation only — one with the birth and not the learning",
          kn: "ಕೇವಲ ಸಂಬಂಧದಿಂದ ಬ್ರಾಹ್ಮಣ — ಜನ್ಮವಿದೆ, ವಿದ್ಯೆಯಿಲ್ಲ",
          hi: "केवल संबंध से ब्राह्मण — जन्म है, विद्या नहीं",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "There was Śvetaketu, the grandson of Aruṇa. His father said to him: 'Śvetaketu, go and live the disciplined life of a student. No one of our family, my dear, goes without study and becomes a brāhmaṇa by relation only.'",
        explanation:
          "The chapter opens on a father's instruction and one cutting word. Brahmabandhu — kinsman of a brāhmaṇa — is not a compliment. It names a man who has the lineage and nothing else, and Uddālaka uses it about his own son's possible future, to his face.\n\nThat the warning is thought necessary tells you the household. Descent is not treated here as an achievement; what has to be earned is the learning, and the boy is sent away to earn it. Which is what makes his return in the next section such an exact piece of storytelling — he comes back having earned precisely the thing he was sent for, and it has gone to his head.",
      },
      kn: {
        translation:
          "ಅರುಣನ ಮೊಮ್ಮಗನಾದ ಶ್ವೇತಕೇತು ಇದ್ದನು. ಅವನ ತಂದೆ ಅವನಿಗೆ ಹೇಳಿದನು: 'ಶ್ವೇತಕೇತೂ, ಹೋಗಿ ಬ್ರಹ್ಮಚರ್ಯದಲ್ಲಿ ವಾಸಿಸು. ಪ್ರಿಯನೇ, ನಮ್ಮ ಕುಲದವರಲ್ಲಿ ಯಾರೂ ಅಧ್ಯಯನ ಮಾಡದೆ ಕೇವಲ ಸಂಬಂಧದಿಂದ ಬ್ರಾಹ್ಮಣರೆನಿಸಿಕೊಳ್ಳುವುದಿಲ್ಲ.'",
        explanation:
          "ಅಧ್ಯಾಯ ತಂದೆಯ ಆದೇಶದಿಂದ ಮತ್ತು ಒಂದು ಚೂಪಾದ ಪದದಿಂದ ಆರಂಭವಾಗುತ್ತದೆ. 'ಬ್ರಹ್ಮಬಂಧು' — ಬ್ರಾಹ್ಮಣನ ಬಂಧು — ಇದು ಹೊಗಳಿಕೆಯಲ್ಲ. ವಂಶವಿದ್ದು ಬೇರೇನೂ ಇಲ್ಲದವನನ್ನು ಅದು ಸೂಚಿಸುತ್ತದೆ, ಮತ್ತು ಉದ್ದಾಲಕನು ಅದನ್ನು ತನ್ನದೇ ಮಗನ ಸಂಭಾವ್ಯ ಭವಿಷ್ಯದ ಬಗ್ಗೆ, ಅವನ ಮುಖದೆದುರೇ ಬಳಸುತ್ತಾನೆ.\n\nಈ ಎಚ್ಚರಿಕೆ ಅಗತ್ಯವೆಂದು ತೋರಿತೆಂಬುದೇ ಆ ಮನೆಯನ್ನು ಹೇಳುತ್ತದೆ. ಇಲ್ಲಿ ವಂಶವನ್ನು ಸಾಧನೆಯೆಂದು ಪರಿಗಣಿಸುವುದಿಲ್ಲ; ಗಳಿಸಬೇಕಾದದ್ದು ವಿದ್ಯೆ, ಮತ್ತು ಅದನ್ನು ಗಳಿಸಲೆಂದೇ ಹುಡುಗನನ್ನು ಕಳುಹಿಸಲಾಗುತ್ತದೆ. ಇದೇ ಮುಂದಿನ ಭಾಗದ ಅವನ ಮರಳುವಿಕೆಯನ್ನು ಅಷ್ಟು ನಿಖರವಾದ ಕಥನವನ್ನಾಗಿ ಮಾಡುತ್ತದೆ — ಯಾವುದಕ್ಕಾಗಿ ಕಳುಹಿಸಲ್ಪಟ್ಟನೋ ಅದನ್ನೇ ಗಳಿಸಿಕೊಂಡು ಬರುತ್ತಾನೆ, ಮತ್ತು ಅದು ಅವನ ತಲೆಗೇರಿದೆ.",
      },
      hi: {
        translation:
          "अरुण के पौत्र श्वेतकेतु थे। उनके पिता ने उनसे कहा: 'श्वेतकेतो, जाओ और ब्रह्मचर्य में निवास करो। हे सौम्य, हमारे कुल में कोई भी बिना अध्ययन किए केवल संबंध से ब्राह्मण नहीं कहलाता।'",
        explanation:
          "अध्याय एक पिता के आदेश और एक तीखे शब्द से आरंभ होता है। 'ब्रह्मबन्धु' — ब्राह्मण का बंधु — प्रशंसा नहीं है। यह उस व्यक्ति को कहता है जिसके पास वंश है और कुछ नहीं, और उद्दालक इसका प्रयोग अपने ही पुत्र के संभावित भविष्य के लिए, उसी के सामने करता है।\n\nयह चेतावनी आवश्यक समझी गई, यही उस घर को बता देता है। यहाँ वंश को उपलब्धि नहीं माना जाता; अर्जित करनी है विद्या, और पुत्र को उसे अर्जित करने ही भेजा जाता है। इसी से अगले खंड की उसकी वापसी इतनी सटीक कथा बन जाती है — जिसके लिए भेजा गया था वही अर्जित कर लौटता है, और वह उसके सिर चढ़ गया है।",
      },
    },
  },

  {
    id: "chandogya-6-1-2",
    locator: "6.1.2",
    handle: {
      en: "He came back stiff with it",
      kn: "ಗರ್ವದಿಂದ ಬಿಗಿದು ಹಿಂದಿರುಗಿದನು",
      hi: "अकड़ता हुआ लौटा",
    },
    sanskrit: [
      "स ह द्वादशवर्ष उपेत्य चतुर्विंशतिवर्षः",
      "सर्वान्वेदानधीत्य महामना अनूचानमानी",
      "स्तब्ध एयाय । तं ह पितोवाच ॥",
    ],
    iast: [
      "sa ha dvādaśavarṣa upetya caturviṃśativarṣaḥ",
      "sarvān vedān adhītya mahāmanā anūcānamānī",
      "stabdha eyāya | taṃ ha pitovāca ||",
    ],
    keywords: [
      {
        term: "अनूचानमानी",
        iast: "anūcānamānī",
        gloss: {
          en: "thinking himself learned; taking himself for a scholar",
          kn: "ತಾನು ವಿದ್ವಾಂಸನೆಂದು ಭಾವಿಸಿಕೊಂಡವನು",
          hi: "स्वयं को विद्वान् मानने वाला",
        },
      },
      {
        term: "स्तब्धः",
        iast: "stabdhaḥ",
        gloss: {
          en: "stiff, unbending — the posture of conceit, not the opinion",
          kn: "ಬಿಗಿದವನು, ಬಾಗದವನು — ಗರ್ವದ ಭಂಗಿ, ಅಭಿಪ್ರಾಯವಲ್ಲ",
          hi: "अकड़ा हुआ, न झुकने वाला — अहंकार की मुद्रा, मत नहीं",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Having gone at twelve and studied all the Vedas, he returned at twenty-four — full of himself, thinking himself learned, and stiff with it. His father said to him:",
        explanation:
          "Three words for twelve years of study, and three more for what those years did to him: mahāmanā, anūcānamānī, stabdha. High-minded, self-declared scholar, stiff.\n\nThe last is the sharpest because it is physical. Stabdha describes a body that will not bend — the bearing, not the belief. Whoever composed this had watched a young man come home from a good education and noticed that it showed first in how he stood.\n\nNothing here says the twelve years were wasted. He did study all the Vedas, and the text grants it without qualification. The problem is not that he knows too little of what he was taught; it is that he does not know there was a question his teaching never raised. The next section is his father raising it.",
      },
      kn: {
        translation:
          "ಹನ್ನೆರಡನೆಯ ವಯಸ್ಸಿನಲ್ಲಿ ಹೋಗಿ ಎಲ್ಲ ವೇದಗಳನ್ನೂ ಅಧ್ಯಯನ ಮಾಡಿ ಇಪ್ಪತ್ತನಾಲ್ಕನೆಯ ವಯಸ್ಸಿನಲ್ಲಿ ಹಿಂದಿರುಗಿದನು — ದೊಡ್ಡವನೆಂಬ ಭಾವದಿಂದ, ತಾನು ವಿದ್ವಾಂಸನೆಂದು ಭಾವಿಸಿಕೊಂಡು, ಬಿಗಿದುಕೊಂಡು. ಅವನ ತಂದೆ ಅವನಿಗೆ ಹೇಳಿದನು:",
        explanation:
          "ಹನ್ನೆರಡು ವರ್ಷಗಳ ಅಧ್ಯಯನಕ್ಕೆ ಮೂರು ಪದಗಳು, ಆ ವರ್ಷಗಳು ಅವನಿಗೆ ಏನು ಮಾಡಿದವು ಎಂಬುದಕ್ಕೆ ಇನ್ನೂ ಮೂರು: ಮಹಾಮನಾ, ಅನೂಚಾನಮಾನೀ, ಸ್ತಬ್ಧ. ದೊಡ್ಡ ಮನಸ್ಸಿನವನು, ತಾನೇ ಘೋಷಿಸಿಕೊಂಡ ವಿದ್ವಾಂಸ, ಬಿಗಿದವನು.\n\nಕೊನೆಯದು ಅತ್ಯಂತ ಚೂಪಾದದ್ದು, ಏಕೆಂದರೆ ಅದು ದೈಹಿಕ. 'ಸ್ತಬ್ಧ' ಎಂದರೆ ಬಾಗಲೊಲ್ಲದ ಶರೀರ — ನಂಬಿಕೆಯಲ್ಲ, ನಿಲುವು. ಇದನ್ನು ರಚಿಸಿದವರು ಒಳ್ಳೆಯ ವಿದ್ಯಾಭ್ಯಾಸ ಮುಗಿಸಿ ಮನೆಗೆ ಬಂದ ಯುವಕನನ್ನು ನೋಡಿದ್ದಾರೆ, ಮತ್ತು ಅದು ಮೊದಲು ಅವನ ನಿಲ್ಲುವ ರೀತಿಯಲ್ಲಿ ಕಾಣಿಸಿತೆಂದು ಗಮನಿಸಿದ್ದಾರೆ.\n\nಆ ಹನ್ನೆರಡು ವರ್ಷ ವ್ಯರ್ಥವಾಯಿತೆಂದು ಇಲ್ಲಿ ಎಲ್ಲಿಯೂ ಹೇಳಿಲ್ಲ. ಅವನು ನಿಜಕ್ಕೂ ಎಲ್ಲ ವೇದಗಳನ್ನೂ ಅಧ್ಯಯನ ಮಾಡಿದನು, ಮತ್ತು ಪಠ್ಯ ಅದನ್ನು ಯಾವ ಷರತ್ತೂ ಇಲ್ಲದೆ ಒಪ್ಪುತ್ತದೆ. ಸಮಸ್ಯೆ ಅವನಿಗೆ ಕಲಿಸಿದ್ದು ಕಡಿಮೆ ತಿಳಿದಿದೆ ಎಂಬುದಲ್ಲ; ಅವನ ಕಲಿಕೆ ಎಂದೂ ಎತ್ತದ ಒಂದು ಪ್ರಶ್ನೆ ಇತ್ತೆಂಬುದು ಅವನಿಗೆ ಗೊತ್ತಿಲ್ಲ. ಮುಂದಿನ ಭಾಗವೇ ತಂದೆ ಅದನ್ನು ಎತ್ತುವುದು.",
      },
      hi: {
        translation:
          "बारह वर्ष की आयु में जाकर, समस्त वेदों का अध्ययन कर, वह चौबीस वर्ष का होकर लौटा — अपने को बड़ा मानता हुआ, स्वयं को विद्वान् समझता हुआ, और अकड़ा हुआ। उसके पिता ने उससे कहा:",
        explanation:
          "बारह वर्ष के अध्ययन पर तीन शब्द, और उन वर्षों ने उसका क्या किया इस पर तीन और: महामना, अनूचानमानी, स्तब्ध। बड़े मन वाला, स्वयंघोषित विद्वान्, अकड़ा हुआ।\n\nअंतिम सबसे तीखा है क्योंकि वह देह का है। 'स्तब्ध' उस शरीर को कहते हैं जो झुकना नहीं जानता — मान्यता नहीं, मुद्रा। जिसने यह रचा उसने अच्छी शिक्षा पूरी कर घर लौटे युवक को देखा है, और यह लक्ष्य किया है कि वह पहले उसके खड़े होने के ढंग में दिखा।\n\nयहाँ कहीं नहीं कहा गया कि वे बारह वर्ष व्यर्थ गए। उसने वास्तव में सभी वेदों का अध्ययन किया, और पाठ इसे बिना किसी शर्त के स्वीकार करता है। समस्या यह नहीं कि जो पढ़ाया गया उसे वह कम जानता है; समस्या यह है कि उसे पता ही नहीं कि एक प्रश्न ऐसा था जो उसकी शिक्षा ने कभी उठाया ही नहीं। अगला खंड पिता का वही प्रश्न उठाना है।",
      },
    },
  },

  {
    id: "chandogya-6-1-3",
    locator: "6.1.3",
    handle: {
      en: "Did you ask for that teaching?",
      kn: "ಆ ಆದೇಶವನ್ನು ಕೇಳಿದೆಯಾ?",
      hi: "क्या वह आदेश पूछा?",
    },
    sanskrit: [
      "श्वेतकेतो यन्नु सोम्येदं महामना",
      "अनूचानमानी स्तब्धोऽसि ।",
      "उत तमादेशमप्राक्ष्यः ।",
      "येनाश्रुतं श्रुतं भवत्यमतं मतमविज्ञातं विज्ञातमिति ।",
      "कथं नु भगवः स आदेशो भवतीति ॥",
    ],
    iast: [
      "śvetaketo yan nu somyedaṃ mahāmanā",
      "anūcānamānī stabdho 'si |",
      "uta tam ādeśam aprākṣyaḥ |",
      "yenāśrutaṃ śrutaṃ bhavaty amataṃ matam avijñātaṃ vijñātam iti |",
      "kathaṃ nu bhagavaḥ sa ādeśo bhavatīti ||",
    ],
    keywords: [
      {
        term: "आदेशः",
        iast: "ādeśaḥ",
        gloss: {
          en: "the instruction; the substitution by which one thing stands for all",
          kn: "ಬೋಧನೆ; ಒಂದರಿಂದ ಎಲ್ಲವನ್ನೂ ತಿಳಿಸುವ ಆದೇಶ",
          hi: "उपदेश; वह आदेश जिससे एक से सब जाना जाए",
        },
      },
      {
        term: "अश्रुतं श्रुतम्",
        iast: "aśrutaṃ śrutam",
        gloss: {
          en: "the unheard becomes heard — known without having been met one by one",
          kn: "ಕೇಳದ್ದು ಕೇಳಿದಂತಾಗುವುದು — ಒಂದೊಂದಾಗಿ ಎದುರಾಗದೆಯೇ ತಿಳಿಯುವುದು",
          hi: "अश्रुत श्रुत हो जाना — एक-एक करके मिले बिना ही जान लेना",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'Śvetaketu, since you are now so full of yourself, think yourself learned, and are so stiff — did you ever ask for that teaching by which the unheard becomes heard, the unthought thought, the unknown known?' 'How, sir, can there be such a teaching?'",
        explanation:
          "The father does not dispute a single thing his son learned. He asks whether he asked for one more thing, and the question is built so that the answer can only be no.\n\nWhat is being asked for is not another item of knowledge. Notice the grammar: not that more will be heard, but that the unheard is already heard. Twelve years of Vedic study is addition — one more text, one more branch, one more recitation. What the father names is not longer addition but a different kind of knowing altogether, one that reaches what was never individually studied.\n\nAnd the son's reply is the first good thing he says. 'How can there be such a teaching?' — not a defence, a question. He has understood at least that he has been shown a hole in his education, and the stiffness has already begun to go out of him.",
      },
      kn: {
        translation:
          "'ಶ್ವೇತಕೇತೂ, ಈಗ ನೀನು ಇಷ್ಟು ಗರ್ವಿತನಾಗಿ, ತಾನು ವಿದ್ವಾಂಸನೆಂದು ಭಾವಿಸಿ, ಬಿಗಿದುಕೊಂಡಿರುವೆಯಲ್ಲ — ಯಾವುದರಿಂದ ಕೇಳದ್ದು ಕೇಳಿದಂತಾಗುತ್ತದೋ, ಯೋಚಿಸದ್ದು ಯೋಚಿಸಿದಂತಾಗುತ್ತದೋ, ತಿಳಿಯದ್ದು ತಿಳಿದಂತಾಗುತ್ತದೋ, ಆ ಆದೇಶವನ್ನು ಎಂದಾದರೂ ಕೇಳಿದೆಯಾ?' 'ಸ್ವಾಮಿ, ಅಂಥ ಆದೇಶ ಹೇಗೆ ಇರಲು ಸಾಧ್ಯ?'",
        explanation:
          "ತಂದೆ ಮಗ ಕಲಿತ ಯಾವುದನ್ನೂ ಪ್ರಶ್ನಿಸುವುದಿಲ್ಲ. ಇನ್ನೊಂದನ್ನು ಕೇಳಿದೆಯಾ ಎಂದಷ್ಟೇ ಕೇಳುತ್ತಾನೆ, ಮತ್ತು ಪ್ರಶ್ನೆಯ ರಚನೆಯೇ ಉತ್ತರ 'ಇಲ್ಲ' ಎಂದಾಗುವಂತಿದೆ.\n\nಕೇಳುತ್ತಿರುವುದು ಇನ್ನೊಂದು ಜ್ಞಾನದ ತುಣುಕನ್ನಲ್ಲ. ವ್ಯಾಕರಣವನ್ನು ಗಮನಿಸಿ: ಇನ್ನಷ್ಟು ಕೇಳಲಾಗುವುದು ಎಂದಲ್ಲ, ಕೇಳದ್ದೇ ಆಗಲೇ ಕೇಳಿದಂತಾಗಿದೆ ಎಂದು. ಹನ್ನೆರಡು ವರ್ಷಗಳ ವೇದಾಧ್ಯಯನ ಕೂಡುವಿಕೆ — ಇನ್ನೊಂದು ಪಠ್ಯ, ಇನ್ನೊಂದು ಶಾಖೆ, ಇನ್ನೊಂದು ಪಾರಾಯಣ. ತಂದೆ ಹೆಸರಿಸುತ್ತಿರುವುದು ಉದ್ದವಾದ ಕೂಡುವಿಕೆಯನ್ನಲ್ಲ, ಸಂಪೂರ್ಣ ಬೇರೆ ತರಹದ ತಿಳಿವನ್ನು — ಎಂದೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಅಧ್ಯಯನ ಮಾಡದ್ದನ್ನೂ ತಲುಪುವಂಥದ್ದನ್ನು.\n\nಮಗನ ಉತ್ತರವೇ ಅವನು ಹೇಳಿದ ಮೊದಲ ಒಳ್ಳೆಯ ಮಾತು. 'ಅಂಥ ಆದೇಶ ಹೇಗೆ ಇರಲು ಸಾಧ್ಯ?' — ಸಮರ್ಥನೆಯಲ್ಲ, ಪ್ರಶ್ನೆ. ತನ್ನ ವಿದ್ಯಾಭ್ಯಾಸದಲ್ಲಿ ಒಂದು ಕೊರತೆ ತೋರಿಸಲ್ಪಟ್ಟಿದೆ ಎಂಬುದನ್ನಾದರೂ ಅವನು ಗ್ರಹಿಸಿದ್ದಾನೆ, ಮತ್ತು ಬಿಗಿತ ಆಗಲೇ ಸಡಿಲಗೊಳ್ಳತೊಡಗಿದೆ.",
      },
      hi: {
        translation:
          "'श्वेतकेतो, अब तुम इतने भरे हुए हो, स्वयं को विद्वान् मानते हो, और इतने अकड़े हो — तो क्या तुमने वह आदेश कभी पूछा जिससे अश्रुत श्रुत हो जाता है, अमत मत हो जाता है, अविज्ञात विज्ञात हो जाता है?' 'भगवन्, ऐसा आदेश कैसे हो सकता है?'",
        explanation:
          "पिता पुत्र की सीखी एक भी बात पर प्रश्न नहीं उठाता। वह केवल यह पूछता है कि क्या उसने एक और चीज़ माँगी, और प्रश्न ऐसा गढ़ा है कि उत्तर 'नहीं' के सिवा हो ही नहीं सकता।\n\nजो माँगा जा रहा है वह ज्ञान का एक और टुकड़ा नहीं है। व्याकरण देखिए: यह नहीं कि और सुना जाएगा, बल्कि यह कि अश्रुत ही श्रुत हो चुका है। बारह वर्ष का वेदाध्ययन जोड़ है — एक और पाठ, एक और शाखा, एक और आवृत्ति। पिता जिसे नामित कर रहा है वह लंबा जोड़ नहीं, बिलकुल दूसरे प्रकार का जानना है — वह जो कभी अलग से पढ़ा ही नहीं गया, उस तक भी पहुँचता है।\n\nऔर पुत्र का उत्तर उसकी पहली अच्छी बात है। 'ऐसा आदेश कैसे हो सकता है?' — बचाव नहीं, प्रश्न। इतना तो उसने समझ लिया कि उसकी शिक्षा में एक रिक्ति दिखा दी गई है, और अकड़ अभी से ढीली पड़ने लगी है।",
      },
    },
  },

  {
    id: "chandogya-6-1-4",
    locator: "6.1.4",
    handle: {
      en: "One lump of clay",
      kn: "ಒಂದು ಮಣ್ಣಿನ ಮುದ್ದೆ",
      hi: "एक मिट्टी का ढेला",
    },
    sanskrit: [
      "यथा सोम्यैकेन मृत्पिण्डेन",
      "सर्वं मृन्मयं विज्ञातं स्याद्",
      "वाचारम्भणं विकारो नामधेयं",
      "मृत्तिकेत्येव सत्यम् ॥",
    ],
    iast: [
      "yathā somyaikena mṛtpiṇḍena",
      "sarvaṃ mṛnmayaṃ vijñātaṃ syād",
      "vācārambhaṇaṃ vikāro nāmadheyaṃ",
      "mṛttikety eva satyam ||",
    ],
    keywords: [
      {
        term: "वाचारम्भणम्",
        iast: "vācārambhaṇam",
        gloss: {
          en: "having speech as its hold — real only as something said",
          kn: "ಮಾತಿನಲ್ಲಿ ಮಾತ್ರ ಹಿಡಿತವಿರುವುದು — ಹೇಳಿಕೆಯಷ್ಟೇ ನಿಜ",
          hi: "जिसका आधार केवल वाणी है — कहे जाने भर से वास्तविक",
        },
      },
      {
        term: "विकारः",
        iast: "vikāraḥ",
        gloss: {
          en: "a modification — the pot, as against the clay",
          kn: "ವಿಕಾರ — ಮಣ್ಣಿಗೆ ಎದುರಾಗಿ ಮಡಕೆ",
          hi: "विकार — मिट्टी के सामने घड़ा",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'Just as, my dear, by one lump of clay everything made of clay may be known — the modification being a matter of speech only, a name; the clay alone being real.'",
        explanation:
          "The answer to 'how can there be such a teaching' is not an argument but a workshop. Pick up one lump of clay: you now know every pot, jar and lamp that will ever be made of it, and you know them without having met a single one.\n\nThe crucial phrase is vācārambhaṇaṃ vikāro nāmadheyam. The pot is a hold that speech has taken — a name given to a shape. It is not being called an illusion; you may still drink from it. It is being placed, precisely, as a name for what clay is doing at the moment. What is there, in every case and without exception, is clay.\n\nThat is the shape of the whole chapter. Fifteen khaṇḍas from now the same move will be made with being itself, and this pot is the rehearsal.",
      },
      kn: {
        translation:
          "'ಪ್ರಿಯನೇ, ಒಂದೇ ಮಣ್ಣಿನ ಮುದ್ದೆಯಿಂದ ಮಣ್ಣಿನಿಂದಾದ ಎಲ್ಲವನ್ನೂ ತಿಳಿಯಬಹುದಾದಂತೆ — ವಿಕಾರವು ಮಾತಿನ ಆಶ್ರಯ ಮಾತ್ರ, ಒಂದು ಹೆಸರು; ಮಣ್ಣೊಂದೇ ಸತ್ಯ.'",
        explanation:
          "'ಅಂಥ ಆದೇಶ ಹೇಗೆ ಇರಲು ಸಾಧ್ಯ' ಎಂಬುದಕ್ಕೆ ಉತ್ತರ ವಾದವಲ್ಲ, ಕುಂಬಾರನ ಮನೆ. ಒಂದು ಮಣ್ಣಿನ ಮುದ್ದೆಯನ್ನು ಕೈಗೆತ್ತಿಕೊಳ್ಳಿ: ಅದರಿಂದ ಎಂದಾದರೂ ಮಾಡಬಹುದಾದ ಪ್ರತಿ ಮಡಕೆ, ಕೊಡ, ದೀಪವನ್ನೂ ನೀವು ಈಗ ತಿಳಿದಿದ್ದೀರಿ — ಒಂದನ್ನೂ ಎದುರಾಗದೆಯೇ.\n\nಮುಖ್ಯ ಪದಪುಂಜ 'ವಾಚಾರಂಭಣಂ ವಿಕಾರೋ ನಾಮಧೇಯಮ್'. ಮಡಕೆ ಎಂಬುದು ಮಾತು ಹಿಡಿದ ಹಿಡಿತ — ಆಕಾರವೊಂದಕ್ಕೆ ಕೊಟ್ಟ ಹೆಸರು. ಅದನ್ನು ಭ್ರಮೆಯೆಂದು ಕರೆಯುತ್ತಿಲ್ಲ; ಅದರಲ್ಲಿ ನೀರು ಕುಡಿಯಬಹುದು. ಅದನ್ನು ನಿಖರವಾಗಿ ಇರಿಸಲಾಗುತ್ತಿದೆ — ಈ ಕ್ಷಣ ಮಣ್ಣು ಏನು ಮಾಡುತ್ತಿದೆಯೋ ಅದಕ್ಕೊಂದು ಹೆಸರು. ಪ್ರತಿ ಸಂದರ್ಭದಲ್ಲೂ, ವಿನಾಯಿತಿಯಿಲ್ಲದೆ ಇರುವುದು ಮಣ್ಣು.\n\nಇಡೀ ಅಧ್ಯಾಯದ ಆಕಾರ ಇದೇ. ಇಲ್ಲಿಂದ ಹದಿನೈದು ಖಂಡಗಳ ಮುಂದೆ ಇದೇ ನಡೆಯನ್ನು ಸತ್ತೆಯ ಮೇಲೆಯೇ ಮಾಡಲಾಗುತ್ತದೆ, ಮತ್ತು ಈ ಮಡಕೆ ಅದರ ಪೂರ್ವಾಭ್ಯಾಸ.",
      },
      hi: {
        translation:
          "'हे सौम्य, जैसे एक मिट्टी के ढेले से मिट्टी का बना सब कुछ जाना जा सकता है — विकार केवल वाणी का आश्रय है, एक नाम; मिट्टी ही सत्य है।'",
        explanation:
          "'ऐसा आदेश कैसे हो सकता है' का उत्तर तर्क नहीं, कुम्हार का चाक है। एक मिट्टी का ढेला उठाइए: उससे कभी बनने वाला हर घड़ा, कलश और दीपक आप अब जान चुके हैं — बिना एक से भी मिले।\n\nमुख्य पदबंध है 'वाचारम्भणं विकारो नामधेयम्'। घड़ा वाणी की पकड़ है — एक आकृति को दिया गया नाम। उसे मिथ्या नहीं कहा जा रहा; उसी से जल पिया जा सकता है। उसे ठीक-ठीक रखा जा रहा है — इस क्षण मिट्टी जो कर रही है उसका एक नाम। हर हाल में, बिना अपवाद, जो है वह मिट्टी है।\n\nयही पूरे अध्याय की आकृति है। यहाँ से पंद्रह खंड आगे यही चाल स्वयं सत् पर चली जाएगी, और यह घड़ा उसका पूर्वाभ्यास है।",
      },
    },
  },

  {
    id: "chandogya-6-1-5",
    locator: "6.1.5",
    handle: {
      en: "One nugget of gold",
      kn: "ಒಂದು ಚಿನ್ನದ ಗಟ್ಟಿ",
      hi: "एक सोने का कण",
    },
    sanskrit: [
      "यथा सोम्यैकेन लोहमणिना",
      "सर्वं लोहमयं विज्ञातं स्याद्",
      "वाचारम्भणं विकारो नामधेयं",
      "लोहमित्येव सत्यम् ॥",
    ],
    iast: [
      "yathā somyaikena lohamaṇinā",
      "sarvaṃ lohamayaṃ vijñātaṃ syād",
      "vācārambhaṇaṃ vikāro nāmadheyaṃ",
      "loham ity eva satyam ||",
    ],
    keywords: [
      {
        term: "लोहमणिः",
        iast: "lohamaṇiḥ",
        gloss: {
          en: "a nugget of gold — loha here read as gold, following Śaṅkara",
          kn: "ಚಿನ್ನದ ಗಟ್ಟಿ — ಇಲ್ಲಿ 'ಲೋಹ' ಎಂದರೆ ಚಿನ್ನ, ಶಂಕರರ ವ್ಯಾಖ್ಯಾನದಂತೆ",
          hi: "सोने का कण — यहाँ 'लोह' का अर्थ स्वर्ण, शंकर के अनुसार",
        },
      },
      {
        term: "नामधेयम्",
        iast: "nāmadheyam",
        gloss: {
          en: "a naming; what is laid on a thing rather than found in it",
          kn: "ಹೆಸರಿಸುವಿಕೆ; ವಸ್ತುವಿನಲ್ಲಿ ಕಂಡದ್ದಲ್ಲ, ಮೇಲಿಟ್ಟದ್ದು",
          hi: "नामकरण; वस्तु में मिला नहीं, उस पर रखा गया",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'Just as, my dear, by one nugget of gold everything made of gold may be known — the modification being a matter of speech only, a name; the gold alone being real.'",
        explanation:
          "The same sentence again, with the material changed. This is deliberate, and the deliberateness is the teaching method of the whole chapter.\n\nClay is cheap and gold is precious, and the analogy does not care. Bangle, chain and coin differ in worth, in use and in what people will do to get them, and not one of those differences is a difference in gold. Value turns out to belong to the name, not to the substance — which is a sharper point than the clay could make, because nobody is tempted to fight over pots.\n\nA reader who understood the first example does not need the second. That is precisely why it is here: the father is establishing a form of words which he will repeat until it is impossible to mistake, and nine repetitions later it will end in tat tvam asi.",
      },
      kn: {
        translation:
          "'ಪ್ರಿಯನೇ, ಒಂದೇ ಚಿನ್ನದ ಗಟ್ಟಿಯಿಂದ ಚಿನ್ನದಿಂದಾದ ಎಲ್ಲವನ್ನೂ ತಿಳಿಯಬಹುದಾದಂತೆ — ವಿಕಾರವು ಮಾತಿನ ಆಶ್ರಯ ಮಾತ್ರ, ಒಂದು ಹೆಸರು; ಚಿನ್ನವೊಂದೇ ಸತ್ಯ.'",
        explanation:
          "ಅದೇ ವಾಕ್ಯ ಮತ್ತೆ, ಸಾಮಗ್ರಿಯನ್ನು ಬದಲಿಸಿ. ಇದು ಉದ್ದೇಶಪೂರ್ವಕ, ಮತ್ತು ಆ ಉದ್ದೇಶವೇ ಇಡೀ ಅಧ್ಯಾಯದ ಬೋಧನಕ್ರಮ.\n\nಮಣ್ಣು ಅಗ್ಗ, ಚಿನ್ನ ಬೆಲೆಬಾಳುವುದು, ಮತ್ತು ಉಪಮೆಗೆ ಅದು ಲೆಕ್ಕವಿಲ್ಲ. ಬಳೆ, ಸರ, ನಾಣ್ಯ — ಬೆಲೆಯಲ್ಲಿ, ಬಳಕೆಯಲ್ಲಿ, ಅವನ್ನು ಪಡೆಯಲು ಜನ ಏನು ಮಾಡುತ್ತಾರೆಂಬುದರಲ್ಲಿ ಬೇರೆ; ಆ ಯಾವ ವ್ಯತ್ಯಾಸವೂ ಚಿನ್ನದಲ್ಲಿನ ವ್ಯತ್ಯಾಸವಲ್ಲ. ಬೆಲೆ ಎಂಬುದು ಹೆಸರಿಗೆ ಸೇರಿದ್ದೇ ಹೊರತು ವಸ್ತುವಿಗಲ್ಲ — ಇದು ಮಣ್ಣಿನಿಂದ ಹೇಳಲಾಗದಿದ್ದ ಚೂಪಾದ ಮಾತು, ಏಕೆಂದರೆ ಮಡಕೆಗಾಗಿ ಯಾರೂ ಜಗಳವಾಡುವುದಿಲ್ಲ.\n\nಮೊದಲ ಉದಾಹರಣೆಯನ್ನು ಗ್ರಹಿಸಿದವನಿಗೆ ಎರಡನೆಯದು ಬೇಕಿಲ್ಲ. ಅದಕ್ಕಾಗಿಯೇ ಅದು ಇಲ್ಲಿದೆ: ತಂದೆ ಒಂದು ವಾಕ್ಯರೂಪವನ್ನು ಸ್ಥಾಪಿಸುತ್ತಿದ್ದಾನೆ, ತಪ್ಪಾಗಿ ಗ್ರಹಿಸಲಾಗದಷ್ಟು ಪುನರಾವರ್ತಿಸಲಿದ್ದಾನೆ, ಮತ್ತು ಒಂಬತ್ತು ಪುನರಾವರ್ತನೆಗಳ ನಂತರ ಅದು 'ತತ್ತ್ವಮಸಿ'ಯಲ್ಲಿ ಕೊನೆಗೊಳ್ಳಲಿದೆ.",
      },
      hi: {
        translation:
          "'हे सौम्य, जैसे एक सोने के कण से सोने का बना सब कुछ जाना जा सकता है — विकार केवल वाणी का आश्रय है, एक नाम; सोना ही सत्य है।'",
        explanation:
          "वही वाक्य फिर, केवल पदार्थ बदलकर। यह जान-बूझकर है, और यही जान-बूझकर किया जाना पूरे अध्याय की शिक्षण-पद्धति है।\n\nमिट्टी सस्ती है और सोना बहुमूल्य, और उपमा को इससे कोई फ़र्क़ नहीं पड़ता। कंगन, हार और सिक्का मूल्य में, उपयोग में, और उन्हें पाने के लिए लोग क्या करेंगे इसमें भिन्न हैं; इनमें से एक भी भिन्नता सोने की भिन्नता नहीं। मूल्य नाम का निकलता है, पदार्थ का नहीं — यह मिट्टी से कही न जा सकने वाली अधिक तीखी बात है, क्योंकि घड़े के लिए कोई नहीं लड़ता।\n\nजिसने पहला उदाहरण समझ लिया उसे दूसरे की ज़रूरत नहीं। ठीक इसीलिए वह यहाँ है: पिता एक वाक्य-रूप स्थापित कर रहा है, जिसे वह तब तक दोहराएगा जब तक उसे ग़लत समझना असंभव न हो जाए, और नौ आवृत्तियों के बाद वही 'तत्त्वमसि' में जाकर समाप्त होगा।",
      },
    },
  },

  {
    id: "chandogya-6-1-6",
    locator: "6.1.6",
    handle: {
      en: "One pair of nail-clippers",
      kn: "ಒಂದು ಉಗುರುಕತ್ತರಿ",
      hi: "एक नहरनी",
    },
    sanskrit: [
      "यथा सोम्यैकेन नखनिकृन्तनेन",
      "सर्वं कार्ष्णायसं विज्ञातं स्याद्",
      "वाचारम्भणं विकारो नामधेयं",
      "कृष्णायसमित्येव सत्यम् ।",
      "एवं सोम्य स आदेशो भवतीति ॥",
    ],
    iast: [
      "yathā somyaikena nakhanikṛntanena",
      "sarvaṃ kārṣṇāyasaṃ vijñātaṃ syād",
      "vācārambhaṇaṃ vikāro nāmadheyaṃ",
      "kṛṣṇāyasam ity eva satyam |",
      "evaṃ somya sa ādeśo bhavatīti ||",
    ],
    keywords: [
      {
        term: "नखनिकृन्तनम्",
        iast: "nakhanikṛntanam",
        gloss: {
          en: "a nail-parer — the humblest thing in the house",
          kn: "ಉಗುರು ಕತ್ತರಿಸುವ ಸಾಧನ — ಮನೆಯ ಅತ್ಯಂತ ಸಾಮಾನ್ಯ ವಸ್ತು",
          hi: "नहरनी — घर की सबसे मामूली वस्तु",
        },
      },
      {
        term: "कृष्णायसम्",
        iast: "kṛṣṇāyasam",
        gloss: {
          en: "black iron, plain worked metal",
          kn: "ಕಪ್ಪು ಕಬ್ಬಿಣ, ಸಾಮಾನ್ಯ ಲೋಹ",
          hi: "काला लोहा, साधारण धातु",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'Just as, my dear, by one pair of nail-clippers everything made of iron may be known — the modification being a matter of speech only, a name; the iron alone being real. Such, my dear, is that teaching.'",
        explanation:
          "Three examples, and the order runs downwards: clay, gold, then a nail-parer. Having shown that the principle survives the jump to something precious, the father shows it survives the drop to something trivial. The teaching is not dignified by its illustration and not degraded by it either.\n\nThe third object is also the most personal. Clay you buy, gold you keep in a box, but the nail-parer is in your hand, doing something to your own body. The examples have been walking towards the student the whole time, and in fifteen khaṇḍas they arrive at him.\n\n'Such is that teaching' closes the demonstration. He has answered 'how can there be such a knowing?' by pointing out that his son has been performing it since childhood without noticing — which leaves only the question of what stands to everything as clay stands to pots. That is 6.2.",
      },
      kn: {
        translation:
          "'ಪ್ರಿಯನೇ, ಒಂದೇ ಉಗುರುಕತ್ತರಿಯಿಂದ ಕಬ್ಬಿಣದಿಂದಾದ ಎಲ್ಲವನ್ನೂ ತಿಳಿಯಬಹುದಾದಂತೆ — ವಿಕಾರವು ಮಾತಿನ ಆಶ್ರಯ ಮಾತ್ರ, ಒಂದು ಹೆಸರು; ಕಬ್ಬಿಣವೊಂದೇ ಸತ್ಯ. ಪ್ರಿಯನೇ, ಆ ಆದೇಶ ಹೀಗಿದೆ.'",
        explanation:
          "ಮೂರು ಉದಾಹರಣೆಗಳು, ಮತ್ತು ಕ್ರಮ ಕೆಳಮುಖ: ಮಣ್ಣು, ಚಿನ್ನ, ಆಮೇಲೆ ಉಗುರುಕತ್ತರಿ. ಬೆಲೆಬಾಳುವುದಕ್ಕೆ ಹಾರಿದರೂ ತತ್ತ್ವ ಉಳಿಯುತ್ತದೆ ಎಂದು ತೋರಿಸಿದ ಮೇಲೆ, ಕ್ಷುಲ್ಲಕವಾದದ್ದಕ್ಕೆ ಇಳಿದರೂ ಉಳಿಯುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತಾನೆ. ಬೋಧನೆಗೆ ಉದಾಹರಣೆಯಿಂದ ಘನತೆಯೂ ಬರುವುದಿಲ್ಲ, ಕುಂದೂ ಬರುವುದಿಲ್ಲ.\n\nಮೂರನೆಯ ವಸ್ತು ಅತ್ಯಂತ ವೈಯಕ್ತಿಕವಾದದ್ದೂ ಹೌದು. ಮಣ್ಣನ್ನು ಕೊಳ್ಳುತ್ತೀರಿ, ಚಿನ್ನವನ್ನು ಪೆಟ್ಟಿಗೆಯಲ್ಲಿಡುತ್ತೀರಿ; ಆದರೆ ಉಗುರುಕತ್ತರಿ ನಿಮ್ಮ ಕೈಯಲ್ಲಿದೆ, ನಿಮ್ಮದೇ ದೇಹಕ್ಕೆ ಏನೋ ಮಾಡುತ್ತಿದೆ. ಉದಾಹರಣೆಗಳು ಆರಂಭದಿಂದಲೂ ಶಿಷ್ಯನತ್ತಲೇ ನಡೆದು ಬರುತ್ತಿವೆ, ಮತ್ತು ಹದಿನೈದು ಖಂಡಗಳಲ್ಲಿ ಅವನನ್ನೇ ತಲುಪುತ್ತವೆ.\n\n'ಆ ಆದೇಶ ಹೀಗಿದೆ' ಎಂಬುದು ಪ್ರದರ್ಶನವನ್ನು ಮುಗಿಸುತ್ತದೆ. 'ಅಂಥ ತಿಳಿವು ಹೇಗೆ ಸಾಧ್ಯ?' ಎಂಬುದಕ್ಕೆ, ಮಗ ಬಾಲ್ಯದಿಂದಲೂ ಅದನ್ನು ಗಮನಿಸದೆ ಮಾಡುತ್ತಲೇ ಬಂದಿದ್ದಾನೆ ಎಂದು ತೋರಿಸಿ ಉತ್ತರಿಸಿದ್ದಾನೆ. ಉಳಿಯುವ ಪ್ರಶ್ನೆ ಒಂದೇ: ಮಡಕೆಗಳಿಗೆ ಮಣ್ಣು ಏನೋ, ಎಲ್ಲಕ್ಕೂ ಅದೇ ಆಗಿರುವುದು ಯಾವುದು? ಅದು ೬.೨.",
      },
      hi: {
        translation:
          "'हे सौम्य, जैसे एक नहरनी से लोहे का बना सब कुछ जाना जा सकता है — विकार केवल वाणी का आश्रय है, एक नाम; लोहा ही सत्य है। हे सौम्य, वह आदेश ऐसा है।'",
        explanation:
          "तीन उदाहरण, और क्रम नीचे की ओर जाता है: मिट्टी, सोना, फिर नहरनी। यह दिखाने के बाद कि सिद्धांत बहुमूल्य तक छलाँग लगाकर भी बचा रहता है, पिता दिखाता है कि वह तुच्छ तक उतरकर भी बचा रहता है। उपदेश अपने उदाहरण से न बड़ा होता है, न छोटा।\n\nतीसरी वस्तु सबसे निजी भी है। मिट्टी आप ख़रीदते हैं, सोना पेटी में रखते हैं; पर नहरनी आपके हाथ में है, आपके ही शरीर पर कुछ कर रही है। उदाहरण आरंभ से ही शिष्य की ओर चलते आ रहे हैं, और पंद्रह खंडों में वे उसी तक पहुँच जाते हैं।\n\n'वह आदेश ऐसा है' — इससे प्रदर्शन पूरा होता है। 'ऐसा जानना कैसे संभव है?' का उत्तर उसने यह दिखाकर दिया कि पुत्र बचपन से बिना ध्यान दिए वही करता आया है। अब केवल एक प्रश्न बचता है: जो मिट्टी घड़ों के लिए है, वही सबके लिए क्या है? वही ६.२ है।",
      },
    },
  },

  {
    id: "chandogya-6-1-7",
    locator: "6.1.7",
    handle: {
      en: "Then let my lord tell me",
      kn: "ಹಾಗಾದರೆ ಸ್ವಾಮಿಯೇ ಹೇಳಲಿ",
      hi: "तो भगवन् ही मुझे बताएँ",
    },
    sanskrit: [
      "न वै नूनं भगवन्तस्त एतदवेदिषुर्",
      "यद्ध्येतदवेदिष्यन्कथं मे नावक्ष्यन्निति ।",
      "भगवांस्त्वेव मे तद्ब्रवीत्विति ।",
      "तथा सोम्येति होवाच ॥",
    ],
    iast: [
      "na vai nūnaṃ bhagavantas ta etad avediṣur",
      "yad dhy etad avediṣyan kathaṃ me nāvakṣyann iti |",
      "bhagavāṃs tv eva me tad bravītv iti |",
      "tathā somyeti hovāca ||",
    ],
    keywords: [
      {
        term: "अवेदिषुः",
        iast: "avediṣuḥ",
        gloss: {
          en: "they knew — here, in the denial: they did not know it",
          kn: "ಅವರು ತಿಳಿದಿದ್ದರು — ಇಲ್ಲಿ ನಿಷೇಧದಲ್ಲಿ: ಅವರಿಗೆ ಅದು ತಿಳಿದಿರಲಿಲ್ಲ",
          hi: "उन्होंने जाना — यहाँ निषेध में: वे उसे जानते ही न थे",
        },
      },
      {
        term: "तथा सोम्य",
        iast: "tathā somya",
        gloss: {
          en: "'so be it, my dear' — the whole of the father's reply",
          kn: "'ಹಾಗೇ ಆಗಲಿ, ಪ್ರಿಯನೇ' — ತಂದೆಯ ಉತ್ತರ ಇಷ್ಟೇ",
          hi: "'तथास्तु, सौम्य' — पिता का पूरा उत्तर इतना ही",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'Surely those honoured teachers did not know this. For had they known it, why would they not have told me? Let my lord tell me, then.' 'So be it, my dear,' he said.",
        explanation:
          "The stiffness is gone, and what replaces it is not humility exactly — it is a young man's fierce logic. His reasoning is sound and the conclusion is generous to nobody: they cannot have known, because a teacher who knew this would have said it.\n\nHe is probably wrong about his teachers and entirely right about his education, and the text does not stop to sort that out. What matters is the sentence that follows: bhagavāṃs tv eva me tad bravītu — let my lord tell me. That is the request the whole chapter has been waiting for, and it could not be answered before it was asked.\n\nUddālaka's reply is two words. 'So be it, my dear.' No triumph, no lecture on the arrogance just abandoned. The teaching begins in the next breath.",
      },
      kn: {
        translation:
          "'ಆ ಪೂಜ್ಯ ಗುರುಗಳಿಗೆ ಇದು ನಿಜಕ್ಕೂ ತಿಳಿದಿರಲಿಲ್ಲ. ತಿಳಿದಿದ್ದರೆ ನನಗೆ ಏಕೆ ಹೇಳುತ್ತಿರಲಿಲ್ಲ? ಹಾಗಾದರೆ ಸ್ವಾಮಿಯೇ ನನಗೆ ಅದನ್ನು ಹೇಳಲಿ.' 'ಹಾಗೇ ಆಗಲಿ, ಪ್ರಿಯನೇ' ಎಂದನು.",
        explanation:
          "ಬಿಗಿತ ಹೋಗಿದೆ, ಮತ್ತು ಅದರ ಸ್ಥಾನಕ್ಕೆ ಬಂದದ್ದು ನಿಖರವಾಗಿ ವಿನಯವಲ್ಲ — ಅದು ಯುವಕನ ತೀಕ್ಷ್ಣ ತರ್ಕ. ಅವನ ನ್ಯಾಯ ಸರಿಯಾಗಿದೆ ಮತ್ತು ತೀರ್ಮಾನ ಯಾರಿಗೂ ಉದಾರವಲ್ಲ: ಅವರಿಗೆ ತಿಳಿದಿರಲಾರದು, ಏಕೆಂದರೆ ಇದನ್ನು ತಿಳಿದ ಗುರು ಹೇಳದೇ ಇರುತ್ತಿರಲಿಲ್ಲ.\n\nಗುರುಗಳ ಬಗ್ಗೆ ಅವನು ಬಹುಶಃ ತಪ್ಪು, ತನ್ನ ವಿದ್ಯಾಭ್ಯಾಸದ ಬಗ್ಗೆ ಸಂಪೂರ್ಣ ಸರಿ; ಪಠ್ಯ ಅದನ್ನು ಇತ್ಯರ್ಥಪಡಿಸಲು ನಿಲ್ಲುವುದಿಲ್ಲ. ಮುಖ್ಯವಾದದ್ದು ಮುಂದಿನ ವಾಕ್ಯ: 'ಭಗವಾಂಸ್ತ್ವೇವ ಮೇ ತದ್ಬ್ರವೀತು' — ಸ್ವಾಮಿಯೇ ನನಗೆ ಹೇಳಲಿ. ಇಡೀ ಅಧ್ಯಾಯ ಕಾಯುತ್ತಿದ್ದ ಬೇಡಿಕೆ ಇದೇ, ಮತ್ತು ಕೇಳುವ ಮೊದಲು ಅದಕ್ಕೆ ಉತ್ತರಿಸಲಾಗುತ್ತಿರಲಿಲ್ಲ.\n\nಉದ್ದಾಲಕನ ಉತ್ತರ ಎರಡು ಪದ. 'ಹಾಗೇ ಆಗಲಿ, ಪ್ರಿಯನೇ.' ಜಯದ ಸಂಭ್ರಮವಿಲ್ಲ, ಈಗಷ್ಟೇ ಬಿಟ್ಟ ಗರ್ವದ ಬಗ್ಗೆ ಉಪದೇಶವಿಲ್ಲ. ಬೋಧನೆ ಮರುಕ್ಷಣವೇ ಆರಂಭವಾಗುತ್ತದೆ.",
      },
      hi: {
        translation:
          "'निश्चय ही उन पूज्य आचार्यों ने यह नहीं जाना था। यदि जाना होता तो मुझे क्यों न बताते? तो भगवन् ही मुझे यह बताएँ।' 'तथास्तु, सौम्य,' उन्होंने कहा।",
        explanation:
          "अकड़ जा चुकी है, और उसकी जगह जो आया है वह ठीक-ठीक विनम्रता नहीं — वह एक युवक का तीखा तर्क है। उसका न्याय सही है और निष्कर्ष किसी के प्रति उदार नहीं: वे जान ही नहीं सकते थे, क्योंकि जो आचार्य यह जानता, वह कहे बिना न रहता।\n\nअपने आचार्यों के विषय में वह संभवतः ग़लत है और अपनी शिक्षा के विषय में पूरी तरह सही; पाठ इसे सुलझाने रुकता नहीं। महत्त्व अगले वाक्य का है: 'भगवांस्त्वेव मे तद्ब्रवीतु' — भगवन् ही मुझे बताएँ। यही वह याचना है जिसकी पूरा अध्याय प्रतीक्षा कर रहा था, और पूछे जाने से पहले उसका उत्तर दिया ही नहीं जा सकता था।\n\nउद्दालक का उत्तर दो शब्द है। 'तथास्तु, सौम्य।' न विजय, न अभी-अभी छोड़े गए अहंकार पर कोई प्रवचन। उपदेश अगली ही साँस में आरंभ हो जाता है।",
      },
    },
  },
  {
    id: "chandogya-6-2-1",
    locator: "6.2.1",
    handle: {
      en: "Being alone, one without a second",
      kn: "ಸತ್ತೊಂದೇ, ಎರಡಿಲ್ಲದ ಒಂದೇ",
      hi: "सत् ही, एक अद्वितीय",
    },
    sanskrit: [
      "सदेव सोम्येदमग्र आसीदेकमेवाद्वितीयम् ।",
      "तद्धैक आहुरसदेवेदमग्र आसीदेकमेवाद्वितीयं",
      "तस्मादसतः सज्जायत ॥",
    ],
    iast: [
      "sad eva somyedam agra āsīd ekam evādvitīyam |",
      "tad dhaika āhur asad evedam agra āsīd ekam evādvitīyaṃ",
      "tasmād asataḥ saj jāyata ||",
    ],
    keywords: [
      {
        term: "सत्",
        iast: "sat",
        gloss: {
          en: "being; that which is — not a being among beings",
          kn: "ಸತ್; ಇರುವಿಕೆ — ಇರುವವುಗಳಲ್ಲಿ ಒಂದಲ್ಲ",
          hi: "सत्; जो है — होने वालों में से एक नहीं",
        },
      },
      {
        term: "एकमेवाद्वितीयम्",
        iast: "ekam evādvitīyam",
        gloss: {
          en: "one only, without a second — not one of a kind, but without another",
          kn: "ಒಂದೇ, ಎರಡನೆಯದಿಲ್ಲದ್ದು — ಒಂದು ಬಗೆಯಲ್ಲಿ ಒಂದಲ್ಲ, ಇನ್ನೊಂದೇ ಇಲ್ಲದ್ದು",
          hi: "एक ही, अद्वितीय — अपने ढंग का एक नहीं, दूसरा है ही नहीं",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'In the beginning, my dear, this was Being alone, one only, without a second. Some say that in the beginning this was Non-being alone, one only without a second, and that from that Non-being, Being was born.'",
        explanation:
          "The teaching proper opens with what the clay was standing for. Being — sat, the bare fact that anything is at all — was here first, and it was one without a second.\n\nAdvitīya is doing careful work. 'One' by itself would leave room for counting: one of these, and elsewhere perhaps another. 'Without a second' shuts that door. There is no second thing for this to be one of, and therefore nothing outside it that it could be compared with, made from, or limited by.\n\nThen, remarkably, the rival view is stated fairly and in full. Some say non-being came first. The Upaniṣad does not caricature them or leave them unnamed; it gives their position the same formula it gave its own. Only after stating it properly does it answer — which is what the next section does, and it answers with a question rather than an assertion.",
      },
      kn: {
        translation:
          "'ಪ್ರಿಯನೇ, ಮೊದಲಿಗೆ ಇದು ಸತ್ತೊಂದೇ ಆಗಿತ್ತು, ಒಂದೇ, ಎರಡನೆಯದಿಲ್ಲದ್ದು. ಮೊದಲಿಗೆ ಇದು ಅಸತ್ತೊಂದೇ ಆಗಿತ್ತು, ಒಂದೇ ಎರಡನೆಯದಿಲ್ಲದ್ದು, ಮತ್ತು ಆ ಅಸತ್ತಿನಿಂದ ಸತ್ತು ಹುಟ್ಟಿತು ಎಂದು ಕೆಲವರು ಹೇಳುತ್ತಾರೆ.'",
        explanation:
          "ಮಣ್ಣು ಯಾವುದನ್ನು ಸೂಚಿಸುತ್ತಿತ್ತೋ ಅದರಿಂದಲೇ ನಿಜವಾದ ಬೋಧನೆ ಆರಂಭವಾಗುತ್ತದೆ. ಸತ್ — ಏನಾದರೂ ಇದೆ ಎಂಬ ಬರಿಯ ಸಂಗತಿ — ಮೊದಲಿತ್ತು, ಮತ್ತು ಅದು ಎರಡನೆಯದಿಲ್ಲದ ಒಂದೇ ಆಗಿತ್ತು.\n\n'ಅದ್ವಿತೀಯ' ಇಲ್ಲಿ ಎಚ್ಚರಿಕೆಯ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಬರಿಯ 'ಒಂದು' ಎಂದರೆ ಎಣಿಕೆಗೆ ಜಾಗ ಉಳಿಯುತ್ತದೆ: ಇಲ್ಲಿ ಒಂದು, ಬೇರೆಲ್ಲೋ ಇನ್ನೊಂದು. 'ಎರಡನೆಯದಿಲ್ಲದ್ದು' ಆ ಬಾಗಿಲನ್ನು ಮುಚ್ಚುತ್ತದೆ. ಇದು ಯಾವುದರಲ್ಲಿ ಒಂದಾಗಿರಬಹುದೋ ಅಂಥ ಎರಡನೆಯ ವಸ್ತುವೇ ಇಲ್ಲ, ಆದ್ದರಿಂದ ಇದನ್ನು ಹೋಲಿಸಬಹುದಾದ, ಇದಕ್ಕೆ ಮೂಲವಾಗಬಹುದಾದ, ಇದನ್ನು ಮಿತಿಗೊಳಿಸಬಹುದಾದ ಯಾವುದೂ ಇದರ ಹೊರಗಿಲ್ಲ.\n\nಆಮೇಲೆ, ಗಮನಾರ್ಹವಾಗಿ, ವಿರುದ್ಧ ಮತವನ್ನು ನ್ಯಾಯವಾಗಿ ಮತ್ತು ಪೂರ್ಣವಾಗಿ ಹೇಳಲಾಗುತ್ತದೆ. ಮೊದಲು ಅಸತ್ತಿತ್ತು ಎನ್ನುತ್ತಾರೆ ಕೆಲವರು. ಉಪನಿಷತ್ತು ಅವರನ್ನು ವ್ಯಂಗ್ಯಚಿತ್ರವಾಗಿಸುವುದಿಲ್ಲ; ತನ್ನದೇ ನಿಲುವಿಗೆ ಕೊಟ್ಟ ಸೂತ್ರವನ್ನೇ ಅವರ ನಿಲುವಿಗೂ ಕೊಡುತ್ತದೆ. ಸರಿಯಾಗಿ ಹೇಳಿದ ಮೇಲೆಯೇ ಉತ್ತರಿಸುತ್ತದೆ — ಮತ್ತು ಆ ಉತ್ತರ ಪ್ರತಿಪಾದನೆಯಲ್ಲ, ಪ್ರಶ್ನೆ.",
      },
      hi: {
        translation:
          "'हे सौम्य, आरंभ में यह सत् ही था, एक ही, अद्वितीय। कुछ कहते हैं कि आरंभ में यह असत् ही था, एक ही अद्वितीय, और उस असत् से सत् उत्पन्न हुआ।'",
        explanation:
          "मिट्टी जिसके लिए खड़ी थी, वही असली उपदेश आरंभ करता है। सत् — यह नंगा तथ्य कि कुछ है — पहले था, और वह अद्वितीय एक था।\n\n'अद्वितीय' यहाँ सावधानी का काम कर रहा है। केवल 'एक' कहने पर गिनती की जगह बच जाती है: यहाँ एक, कहीं और शायद दूसरा। 'अद्वितीय' वह द्वार बंद कर देता है। ऐसी कोई दूसरी वस्तु ही नहीं जिसमें से यह एक हो, और इसलिए इसके बाहर कुछ नहीं जिससे इसकी तुलना हो, जिससे यह बना हो, या जो इसे सीमित करे।\n\nफिर, उल्लेखनीय रूप से, प्रतिपक्ष का मत पूरा और निष्पक्ष रखा जाता है। कुछ कहते हैं पहले असत् था। उपनिषद् उनका उपहास नहीं करता; अपने मत को दिया वही सूत्र उनके मत को भी देता है। ठीक से रख देने के बाद ही वह उत्तर देता है — और उत्तर प्रतिज्ञा नहीं, प्रश्न है।",
      },
    },
  },

  {
    id: "chandogya-6-2-2",
    locator: "6.2.2",
    handle: {
      en: "How could being come from non-being?",
      kn: "ಅಸತ್ತಿನಿಂದ ಸತ್ತು ಹೇಗೆ ಹುಟ್ಟೀತು?",
      hi: "असत् से सत् कैसे उपजे?",
    },
    sanskrit: [
      "कुतस्तु खलु सोम्यैवं स्यादिति होवाच",
      "कथमसतः सज्जायेतेति ।",
      "सत्त्वेव सोम्येदमग्र आसीदेकमेवाद्वितीयम् ॥",
    ],
    iast: [
      "kutas tu khalu somyaivaṃ syād iti hovāca",
      "katham asataḥ saj jāyeteti |",
      "sat tv eva somyedam agra āsīd ekam evādvitīyam ||",
    ],
    keywords: [
      {
        term: "कुतः",
        iast: "kutaḥ",
        gloss: {
          en: "from where, how — the question put back to the objector",
          kn: "ಎಲ್ಲಿಂದ, ಹೇಗೆ — ಆಕ್ಷೇಪಿಸಿದವನಿಗೇ ಮರಳಿಸಿದ ಪ್ರಶ್ನೆ",
          hi: "कहाँ से, कैसे — आपत्ति करने वाले को ही लौटाया प्रश्न",
        },
      },
      {
        term: "असतः",
        iast: "asataḥ",
        gloss: {
          en: "from non-being; from what is not",
          kn: "ಅಸತ್ತಿನಿಂದ; ಇಲ್ಲದ್ದರಿಂದ",
          hi: "असत् से; जो नहीं है उससे",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'But how could it be so, my dear?' he said. 'How could Being be born from Non-being? No — in the beginning this was Being alone, one only, without a second.'",
        explanation:
          "The refutation is a single question, and it is not rhetorical. From nothing, by what? Every act of production needs something that produces, and non-being by definition supplies none. The objection does not accuse the other view of impiety; it points out that it has no mechanism.\n\nThis is one of the oldest surviving arguments of its kind anywhere, and its form is worth noticing as much as its content. The father could have asserted his position and moved on — he is, after all, teaching his own son and holds every advantage. Instead he takes the rival seriously enough to answer it, then restates his own thesis word for word.\n\nThe repetition of the formula is not padding. Having cleared the ground, he lays the same stone again, and everything for the next fourteen khaṇḍas is built on it.",
      },
      kn: {
        translation:
          "'ಪ್ರಿಯನೇ, ಅದು ಹೇಗೆ ಸಾಧ್ಯ?' ಎಂದನು. 'ಅಸತ್ತಿನಿಂದ ಸತ್ತು ಹೇಗೆ ಹುಟ್ಟೀತು? ಅಲ್ಲ — ಮೊದಲಿಗೆ ಇದು ಸತ್ತೊಂದೇ ಆಗಿತ್ತು, ಒಂದೇ, ಎರಡನೆಯದಿಲ್ಲದ್ದು.'",
        explanation:
          "ಖಂಡನೆ ಒಂದೇ ಪ್ರಶ್ನೆ, ಮತ್ತು ಅದು ಬರಿಯ ಅಲಂಕಾರಿಕ ಪ್ರಶ್ನೆಯಲ್ಲ. ಏನೂ ಇಲ್ಲದ್ದರಿಂದ, ಯಾವುದರ ಮೂಲಕ? ಪ್ರತಿ ಉತ್ಪತ್ತಿಗೂ ಉತ್ಪಾದಿಸುವ ಏನಾದರೂ ಬೇಕು, ಮತ್ತು ಅಸತ್ತು ವ್ಯಾಖ್ಯೆಯಿಂದಲೇ ಅದನ್ನು ಒದಗಿಸುವುದಿಲ್ಲ. ಈ ಆಕ್ಷೇಪ ಎದುರಾಳಿ ಮತವನ್ನು ಅಧರ್ಮವೆಂದು ದೂಷಿಸುವುದಿಲ್ಲ; ಅದಕ್ಕೆ ಯಾವ ಕಾರ್ಯವಿಧಾನವೂ ಇಲ್ಲ ಎಂದಷ್ಟೇ ತೋರಿಸುತ್ತದೆ.\n\nಈ ಬಗೆಯ ವಾದಗಳಲ್ಲಿ ಜಗತ್ತಿನಲ್ಲೇ ಉಳಿದಿರುವ ಅತ್ಯಂತ ಪ್ರಾಚೀನವಾದವುಗಳಲ್ಲಿ ಇದೂ ಒಂದು, ಮತ್ತು ಇದರ ವಿಷಯದಷ್ಟೇ ಇದರ ರೂಪವೂ ಗಮನಾರ್ಹ. ತಂದೆ ತನ್ನ ನಿಲುವನ್ನು ಘೋಷಿಸಿ ಮುಂದೆ ಸಾಗಬಹುದಿತ್ತು — ಕೊನೆಗೂ ಅವನು ತನ್ನದೇ ಮಗನಿಗೆ ಕಲಿಸುತ್ತಿದ್ದಾನೆ, ಎಲ್ಲ ಅನುಕೂಲವೂ ಅವನದೇ. ಬದಲಿಗೆ ಎದುರಾಳಿಯನ್ನು ಉತ್ತರಿಸುವಷ್ಟು ಗಂಭೀರವಾಗಿ ತೆಗೆದುಕೊಳ್ಳುತ್ತಾನೆ, ಆಮೇಲೆ ತನ್ನ ಸಿದ್ಧಾಂತವನ್ನು ಪದಶಃ ಮತ್ತೆ ಹೇಳುತ್ತಾನೆ.\n\nಸೂತ್ರದ ಪುನರಾವರ್ತನೆ ತುಂಬುವ ಮಾತಲ್ಲ. ನೆಲವನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿದ ಮೇಲೆ ಅದೇ ಕಲ್ಲನ್ನು ಮತ್ತೆ ಇಡುತ್ತಾನೆ, ಮತ್ತು ಮುಂದಿನ ಹದಿನಾಲ್ಕು ಖಂಡಗಳ ಎಲ್ಲವೂ ಅದರ ಮೇಲೆಯೇ ನಿಂತಿದೆ.",
      },
      hi: {
        translation:
          "'पर हे सौम्य, यह कैसे हो सकता है?' उन्होंने कहा। 'असत् से सत् कैसे उत्पन्न होगा? नहीं — आरंभ में यह सत् ही था, एक ही, अद्वितीय।'",
        explanation:
          "खंडन एक ही प्रश्न है, और वह केवल अलंकार नहीं। कुछ नहीं से, किसके द्वारा? हर उत्पत्ति के लिए कोई उत्पन्न करने वाला चाहिए, और असत् परिभाषा से ही वह नहीं देता। यह आपत्ति प्रतिपक्ष को अधर्मी नहीं कहती; केवल यह दिखाती है कि उसके पास कोई क्रियाविधि नहीं।\n\nअपने प्रकार के जो तर्क कहीं भी बचे हैं उनमें यह सबसे प्राचीन में से है, और इसकी विषयवस्तु जितना ही इसका रूप भी ध्यान देने योग्य है। पिता अपना मत घोषित कर आगे बढ़ सकता था — आख़िर वह अपने ही पुत्र को पढ़ा रहा है, हर सुविधा उसी की है। इसके बजाय वह प्रतिपक्ष को उत्तर देने योग्य गंभीरता से लेता है, फिर अपनी प्रतिज्ञा शब्दशः दोहराता है।\n\nसूत्र की यह पुनरावृत्ति भराव नहीं है। भूमि साफ़ करने के बाद वह वही पत्थर फिर रखता है, और अगले चौदह खंडों का सब कुछ उसी पर खड़ा है।",
      },
    },
  },

  {
    id: "chandogya-6-2-3",
    locator: "6.2.3",
    handle: {
      en: "It saw: may I be many",
      kn: "ಅದು ಈಕ್ಷಿಸಿತು: ಬಹುವಾಗಲಿ",
      hi: "उसने देखा: मैं बहु होऊँ",
    },
    sanskrit: [
      "तदैक्षत बहु स्यां प्रजायेयेति तत्तेजोऽसृजत ।",
      "तत्तेज ऐक्षत बहु स्यां प्रजायेयेति तदपोऽसृजत ।",
      "तस्माद्यत्र क्व च शोचति स्वेदते वा पुरुषस्",
      "तेजस एव तदध्यापो जायन्ते ॥",
    ],
    iast: [
      "tad aikṣata bahu syāṃ prajāyeyeti tat tejo 'sṛjata |",
      "tat teja aikṣata bahu syāṃ prajāyeyeti tad apo 'sṛjata |",
      "tasmād yatra kva ca śocati svedate vā puruṣas",
      "tejasa eva tad adhy āpo jāyante ||",
    ],
    keywords: [
      {
        term: "ऐक्षत",
        iast: "aikṣata",
        gloss: {
          en: "it saw, it looked — creation begins in seeing, not in doing",
          kn: "ಈಕ್ಷಿಸಿತು, ನೋಡಿತು — ಸೃಷ್ಟಿ ಆರಂಭವಾಗುವುದು ಮಾಡುವಿಕೆಯಿಂದಲ್ಲ, ನೋಡುವಿಕೆಯಿಂದ",
          hi: "उसने देखा — सृष्टि करने से नहीं, देखने से आरंभ होती है",
        },
      },
      {
        term: "तेजः",
        iast: "tejaḥ",
        gloss: {
          en: "heat, fire, brightness — the first of the three",
          kn: "ತೇಜಸ್ಸು, ಅಗ್ನಿ, ಕಾಂತಿ — ಮೂರರಲ್ಲಿ ಮೊದಲನೆಯದು",
          hi: "तेज, अग्नि, ताप — तीनों में पहला",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'It saw: may I be many, may I be born forth. It sent forth heat. That heat saw: may I be many, may I be born forth. It sent forth the waters. That is why, wherever a person grieves or sweats, water is born from heat.'",
        explanation:
          "The verb is the surprise. It saw. Not willed, not laboured, not fashioned — aikṣata, looked. Being that is one without a second does not have anything to work on, so its first act cannot be a making; it can only be a seeing.\n\nAnd what it sees is put in the first person, as a wish: may I be many. Not 'let there be many things' — the many are not other than the one that wants them. Everything that follows in this chapter, up to the last verse, is contained in that grammatical choice.\n\nThen comes the strangest and best sentence in the khaṇḍa: that is why a grieving person sweats. The chain heat-to-water has just been laid down as cosmology, and it is immediately tested against a body in distress. That is this text's whole method — the doctrine has to be visible somewhere you can check it, and here you can check it on your own skin.",
      },
      kn: {
        translation:
          "'ಅದು ಈಕ್ಷಿಸಿತು: ನಾನು ಬಹುವಾಗಲಿ, ಪ್ರಜೆಯಾಗಿ ಹುಟ್ಟಲಿ. ಅದು ತೇಜಸ್ಸನ್ನು ಸೃಷ್ಟಿಸಿತು. ಆ ತೇಜಸ್ಸು ಈಕ್ಷಿಸಿತು: ನಾನು ಬಹುವಾಗಲಿ, ಹುಟ್ಟಲಿ. ಅದು ನೀರನ್ನು ಸೃಷ್ಟಿಸಿತು. ಆದ್ದರಿಂದಲೇ ಎಲ್ಲಿ ಮನುಷ್ಯ ದುಃಖಿಸುತ್ತಾನೋ ಅಥವಾ ಬೆವರುತ್ತಾನೋ, ಅಲ್ಲಿ ತೇಜಸ್ಸಿನಿಂದಲೇ ನೀರು ಹುಟ್ಟುತ್ತದೆ.'",
        explanation:
          "ಆಶ್ಚರ್ಯ ಇರುವುದು ಕ್ರಿಯಾಪದದಲ್ಲಿ. ಅದು ನೋಡಿತು. ಬಯಸಲಿಲ್ಲ, ಶ್ರಮಿಸಲಿಲ್ಲ, ರೂಪಿಸಲಿಲ್ಲ — 'ಐಕ್ಷತ', ನೋಡಿತು. ಎರಡನೆಯದಿಲ್ಲದ ಒಂದೇ ಆಗಿರುವ ಸತ್ತಿಗೆ ದುಡಿಯಲು ಬೇರೆ ಸಾಮಗ್ರಿಯೇ ಇಲ್ಲ, ಆದ್ದರಿಂದ ಅದರ ಮೊದಲ ಕ್ರಿಯೆ ಮಾಡುವಿಕೆಯಾಗಲಾರದು; ಅದು ನೋಡುವಿಕೆಯೇ ಆಗಬಲ್ಲದು.\n\nಮತ್ತು ಅದು ನೋಡುವುದನ್ನು ಉತ್ತಮಪುರುಷದಲ್ಲಿ, ಬಯಕೆಯಾಗಿ ಹೇಳಲಾಗಿದೆ: ನಾನು ಬಹುವಾಗಲಿ. 'ಬಹಳ ವಸ್ತುಗಳಾಗಲಿ' ಎಂದಲ್ಲ — ಆ ಬಹುತ್ವ ಅದನ್ನು ಬಯಸಿದ ಒಂದರಿಂದ ಬೇರೆಯಲ್ಲ. ಈ ಅಧ್ಯಾಯದಲ್ಲಿ ಕೊನೆಯ ವಾಕ್ಯದವರೆಗೆ ಬರುವ ಎಲ್ಲವೂ ಆ ವ್ಯಾಕರಣದ ಆಯ್ಕೆಯಲ್ಲಿ ಅಡಗಿದೆ.\n\nಆಮೇಲೆ ಖಂಡದ ಅತ್ಯಂತ ವಿಚಿತ್ರ ಮತ್ತು ಅತ್ಯುತ್ತಮ ವಾಕ್ಯ: ಆದ್ದರಿಂದಲೇ ದುಃಖಿಸುವವನು ಬೆವರುತ್ತಾನೆ. ತೇಜಸ್ಸಿನಿಂದ ನೀರು ಎಂಬ ಸರಪಳಿಯನ್ನು ವಿಶ್ವರಚನೆಯಾಗಿ ಈಗಷ್ಟೇ ಇಟ್ಟಿದೆ, ಮತ್ತು ತಕ್ಷಣವೇ ಅದನ್ನು ಸಂಕಟದಲ್ಲಿರುವ ದೇಹದ ಮೇಲೆ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ. ಇದೇ ಈ ಪಠ್ಯದ ಇಡೀ ಕ್ರಮ — ಸಿದ್ಧಾಂತ ಪರೀಕ್ಷಿಸಬಹುದಾದ ಕಡೆ ಎಲ್ಲೋ ಕಾಣಿಸಬೇಕು, ಮತ್ತು ಇಲ್ಲಿ ನಿಮ್ಮದೇ ಚರ್ಮದ ಮೇಲೆ ಪರೀಕ್ಷಿಸಬಹುದು.",
      },
      hi: {
        translation:
          "'उसने देखा: मैं बहु होऊँ, प्रजा रूप में उत्पन्न होऊँ। उसने तेज को उत्पन्न किया। उस तेज ने देखा: मैं बहु होऊँ, उत्पन्न होऊँ। उसने जल को उत्पन्न किया। इसीलिए जहाँ कहीं मनुष्य शोक करता है या पसीजता है, वहाँ तेज से ही जल उत्पन्न होता है।'",
        explanation:
          "आश्चर्य क्रिया में है। उसने देखा। चाहा नहीं, श्रम नहीं किया, गढ़ा नहीं — 'ऐक्षत', देखा। जो सत् अद्वितीय एक है उसके पास काम करने को कोई सामग्री ही नहीं, इसलिए उसका पहला कर्म बनाना हो ही नहीं सकता; वह देखना ही हो सकता है।\n\nऔर जो वह देखता है वह उत्तम पुरुष में, एक कामना के रूप में रखा गया है: मैं बहु होऊँ। 'बहुत वस्तुएँ हों' नहीं — वह बहुत्व उसी एक से भिन्न नहीं जिसने उसे चाहा। इस अध्याय में अंतिम वाक्य तक जो कुछ आता है, वह सब उसी व्याकरणिक चुनाव में समाया है।\n\nफिर खंड का सबसे विचित्र और सबसे अच्छा वाक्य: इसीलिए शोक करता हुआ व्यक्ति पसीजता है। तेज-से-जल की शृंखला अभी-अभी सृष्टिविद्या के रूप में रखी गई है, और तुरंत उसे व्यथित शरीर पर जाँच लिया गया है। यही इस पाठ की पूरी पद्धति है — सिद्धांत कहीं ऐसी जगह दिखना चाहिए जहाँ आप उसे जाँच सकें, और यहाँ आप उसे अपनी ही त्वचा पर जाँच सकते हैं।",
      },
    },
  },

  {
    id: "chandogya-6-2-4",
    locator: "6.2.4",
    handle: {
      en: "The waters saw",
      kn: "ನೀರುಗಳು ಈಕ್ಷಿಸಿದವು",
      hi: "जल ने देखा",
    },
    sanskrit: [
      "ता आप ऐक्षन्त बह्व्यः स्याम प्रजायेमहीति",
      "ता अन्नमसृजन्त ।",
      "तस्माद्यत्र क्व च वर्षति तदेव भूयिष्ठमन्नं भवत्य्",
      "अद्भ्य एव तदध्यन्नाद्यं जायते ॥",
    ],
    iast: [
      "tā āpa aikṣanta bahvyaḥ syāma prajāyemahīti",
      "tā annam asṛjanta |",
      "tasmād yatra kva ca varṣati tad eva bhūyiṣṭham annaṃ bhavaty",
      "adbhya eva tad adhy annādyaṃ jāyate ||",
    ],
    keywords: [
      {
        term: "अन्नम्",
        iast: "annam",
        gloss: {
          en: "food; here the solid, the earthy — the third of the three",
          kn: "ಅನ್ನ; ಇಲ್ಲಿ ಘನವಾದದ್ದು, ಪೃಥ್ವೀಯದ್ದು — ಮೂರರಲ್ಲಿ ಮೂರನೆಯದು",
          hi: "अन्न; यहाँ ठोस, पार्थिव — तीनों में तीसरा",
        },
      },
      {
        term: "अन्नाद्यम्",
        iast: "annādyam",
        gloss: {
          en: "food to be eaten; edible abundance",
          kn: "ತಿನ್ನಬಹುದಾದ ಆಹಾರ; ಸಮೃದ್ಧಿ",
          hi: "खाद्य अन्न; भोज्य समृद्धि",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'Those waters saw: may we be many, may we be born forth. They sent forth food. That is why, wherever it rains, food becomes abundant there. From water alone is food for eating born.'",
        explanation:
          "The third and last of the elements, and the series is complete: heat, water, food. Not five elements, not four — three, and this chapter will use exactly those three for the next fourteen khaṇḍas, in the body, in the mind, in sleep and in dying. The economy is deliberate.\n\nNotice that the waters speak in the plural: may we be many. Heat said 'I'. Water, already multiple, says 'we'. The text is tracking its own descent from unity into number, and it marks it in the verbs rather than announcing it.\n\nAnd again the doctrine is checked against something anyone can see. Where it rains, there is food. That is not a metaphor and not a symbol; it is the observation on which every farming society on earth is built, offered here as evidence for a cosmology.",
      },
      kn: {
        translation:
          "'ಆ ನೀರುಗಳು ಈಕ್ಷಿಸಿದವು: ನಾವು ಬಹುವಾಗೋಣ, ಹುಟ್ಟೋಣ. ಅವು ಅನ್ನವನ್ನು ಸೃಷ್ಟಿಸಿದವು. ಆದ್ದರಿಂದಲೇ ಎಲ್ಲಿ ಮಳೆ ಬೀಳುತ್ತದೋ ಅಲ್ಲಿ ಅನ್ನ ಸಮೃದ್ಧವಾಗುತ್ತದೆ. ನೀರಿನಿಂದಲೇ ತಿನ್ನುವ ಆಹಾರ ಹುಟ್ಟುತ್ತದೆ.'",
        explanation:
          "ಮೂರನೆಯ ಮತ್ತು ಕೊನೆಯ ತತ್ತ್ವ, ಸರಣಿ ಪೂರ್ಣ: ತೇಜಸ್ಸು, ನೀರು, ಅನ್ನ. ಐದು ಭೂತಗಳಲ್ಲ, ನಾಲ್ಕಲ್ಲ — ಮೂರು; ಮತ್ತು ಈ ಅಧ್ಯಾಯ ಮುಂದಿನ ಹದಿನಾಲ್ಕು ಖಂಡಗಳಲ್ಲಿ ಶರೀರದಲ್ಲಿ, ಮನಸ್ಸಿನಲ್ಲಿ, ನಿದ್ರೆಯಲ್ಲಿ, ಸಾವಿನಲ್ಲಿ ಇದೇ ಮೂರನ್ನೇ ಬಳಸಲಿದೆ. ಈ ಮಿತವ್ಯಯ ಉದ್ದೇಶಪೂರ್ವಕ.\n\nನೀರುಗಳು ಬಹುವಚನದಲ್ಲಿ ಮಾತನಾಡುವುದನ್ನು ಗಮನಿಸಿ: ನಾವು ಬಹುವಾಗೋಣ. ತೇಜಸ್ಸು 'ನಾನು' ಎಂದಿತು. ಆಗಲೇ ಬಹುವಾಗಿರುವ ನೀರು 'ನಾವು' ಎನ್ನುತ್ತದೆ. ಏಕತೆಯಿಂದ ಸಂಖ್ಯೆಯತ್ತ ತನ್ನದೇ ಇಳಿಯುವಿಕೆಯನ್ನು ಪಠ್ಯ ಗುರುತಿಸುತ್ತಿದೆ, ಮತ್ತು ಅದನ್ನು ಘೋಷಿಸದೆ ಕ್ರಿಯಾಪದಗಳಲ್ಲಿ ಸೂಚಿಸುತ್ತದೆ.\n\nಮತ್ತೆ ಸಿದ್ಧಾಂತವನ್ನು ಯಾರಾದರೂ ನೋಡಬಹುದಾದದ್ದರ ವಿರುದ್ಧ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ. ಮಳೆ ಬಿದ್ದಲ್ಲಿ ಅನ್ನವಿದೆ. ಇದು ರೂಪಕವಲ್ಲ, ಸಂಕೇತವಲ್ಲ; ಭೂಮಿಯ ಪ್ರತಿ ಕೃಷಿಸಮಾಜವೂ ನಿಂತಿರುವ ಗಮನಿಕೆ, ಇಲ್ಲಿ ಒಂದು ವಿಶ್ವದೃಷ್ಟಿಗೆ ಸಾಕ್ಷಿಯಾಗಿ ಮಂಡಿಸಲಾಗಿದೆ.",
      },
      hi: {
        translation:
          "'उन जलों ने देखा: हम बहु हों, उत्पन्न हों। उन्होंने अन्न को उत्पन्न किया। इसीलिए जहाँ कहीं वर्षा होती है वहाँ अन्न प्रचुर होता है। जल से ही खाने योग्य अन्न उत्पन्न होता है।'",
        explanation:
          "तीसरा और अंतिम तत्त्व, और शृंखला पूरी: तेज, जल, अन्न। पाँच भूत नहीं, चार नहीं — तीन; और यह अध्याय अगले चौदह खंडों में शरीर में, मन में, नींद में और मरण में इन्हीं तीन का उपयोग करेगा। यह मितव्ययिता जान-बूझकर है।\n\nध्यान दीजिए कि जल बहुवचन में बोलता है: हम बहु हों। तेज ने 'मैं' कहा था। जल, जो पहले से ही अनेक है, 'हम' कहता है। पाठ एकता से संख्या की ओर अपने ही उतार को अंकित कर रहा है, और उसे घोषित करने के बजाय क्रियाओं में दर्ज करता है।\n\nऔर फिर सिद्धांत को उस चीज़ पर जाँचा गया है जिसे कोई भी देख सकता है। जहाँ वर्षा होती है, वहाँ अन्न होता है। यह रूपक नहीं, प्रतीक नहीं; यह वह प्रेक्षण है जिस पर पृथ्वी का हर कृषि-समाज खड़ा है, यहाँ एक सृष्टिविद्या के प्रमाण के रूप में प्रस्तुत।",
      },
    },
  },

  {
    id: "chandogya-6-3-1",
    locator: "6.3.1",
    handle: {
      en: "Three kinds of seed",
      kn: "ಮೂರೇ ಬೀಜಗಳು",
      hi: "तीन ही बीज",
    },
    sanskrit: [
      "तेषां खल्वेषां भूतानां त्रीण्येव बीजानि भवन्त्य्",
      "आण्डजं जीवजमुद्भिज्जमिति ॥",
    ],
    iast: [
      "teṣāṃ khalv eṣāṃ bhūtānāṃ trīṇy eva bījāni bhavanty",
      "āṇḍajaṃ jīvajam udbhijjam iti ||",
    ],
    keywords: [
      {
        term: "आण्डजम्",
        iast: "āṇḍajam",
        gloss: {
          en: "egg-born — birds, reptiles, fish",
          kn: "ಅಂಡಜ — ಪಕ್ಷಿ, ಸರೀಸೃಪ, ಮೀನು",
          hi: "अंडज — पक्षी, सरीसृप, मछली",
        },
      },
      {
        term: "उद्भिज्जम्",
        iast: "udbhijjam",
        gloss: {
          en: "sprout-born — what breaks upward out of the ground",
          kn: "ಉದ್ಭಿಜ್ಜ — ನೆಲವನ್ನು ಒಡೆದು ಮೇಲೇಳುವುದು",
          hi: "उद्भिज्ज — जो भूमि फोड़कर ऊपर आता है",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'Of these beings there are just three kinds of seed: the egg-born, the born from a living creature, and the sprout-born.'",
        explanation:
          "A classification, and a very old one: everything alive arrives in the world by one of three doors — out of an egg, out of a body, or up through the soil.\n\nIt is worth pausing on how empirical this is. No moral ranking, no ladder of nobility, no gods and demons. Someone has looked at the living world and sorted it by the single question of how a thing gets here, and has found that three answers cover it.\n\nAnd the classification is placed here for a structural reason. Three elements were just described; now three kinds of birth. The chapter is establishing that variety, however wide, runs to a small number of forms — which is the same argument as the clay, moved from pots to living creatures.",
      },
      kn: {
        translation:
          "'ಈ ಭೂತಗಳಿಗೆ ಮೂರೇ ಬೀಜಗಳಿವೆ: ಅಂಡಜ, ಜೀವಜ, ಉದ್ಭಿಜ್ಜ.'",
        explanation:
          "ಒಂದು ವರ್ಗೀಕರಣ, ಮತ್ತು ಬಹಳ ಪ್ರಾಚೀನವಾದದ್ದು: ಜೀವಿಸುವ ಎಲ್ಲವೂ ಮೂರು ಬಾಗಿಲುಗಳಲ್ಲಿ ಒಂದರಿಂದಲೇ ಜಗತ್ತಿಗೆ ಬರುತ್ತದೆ — ಮೊಟ್ಟೆಯಿಂದ, ದೇಹದಿಂದ, ಅಥವಾ ಮಣ್ಣನ್ನು ಒಡೆದು ಮೇಲಕ್ಕೆ.\n\nಇದು ಎಷ್ಟು ಅನುಭವಮೂಲವಾದದ್ದು ಎಂಬುದನ್ನು ಗಮನಿಸಬೇಕು. ನೈತಿಕ ಶ್ರೇಣಿಯಿಲ್ಲ, ಶ್ರೇಷ್ಠತೆಯ ಏಣಿಯಿಲ್ಲ, ದೇವತೆಗಳು–ರಾಕ್ಷಸರಿಲ್ಲ. ಯಾರೋ ಜೀವಜಗತ್ತನ್ನು ನೋಡಿ, 'ಇದು ಇಲ್ಲಿಗೆ ಹೇಗೆ ಬರುತ್ತದೆ' ಎಂಬ ಒಂದೇ ಪ್ರಶ್ನೆಯಿಂದ ವಿಂಗಡಿಸಿದ್ದಾರೆ, ಮತ್ತು ಮೂರು ಉತ್ತರಗಳು ಸಾಕೆಂದು ಕಂಡುಕೊಂಡಿದ್ದಾರೆ.\n\nಈ ವರ್ಗೀಕರಣ ಇಲ್ಲಿ ಇರುವುದಕ್ಕೆ ರಚನಾತ್ಮಕ ಕಾರಣವಿದೆ. ಈಗಷ್ಟೇ ಮೂರು ತತ್ತ್ವಗಳನ್ನು ಹೇಳಲಾಯಿತು; ಈಗ ಮೂರು ಬಗೆಯ ಜನನ. ವೈವಿಧ್ಯ ಎಷ್ಟೇ ವಿಸ್ತಾರವಾಗಿದ್ದರೂ ಅದು ಕೆಲವೇ ರೂಪಗಳಿಗೆ ಇಳಿಯುತ್ತದೆ ಎಂಬುದನ್ನು ಅಧ್ಯಾಯ ಸ್ಥಾಪಿಸುತ್ತಿದೆ — ಇದು ಮಣ್ಣಿನ ವಾದವೇ, ಮಡಕೆಗಳಿಂದ ಜೀವಿಗಳಿಗೆ ಸರಿಸಲ್ಪಟ್ಟದ್ದು.",
      },
      hi: {
        translation:
          "'इन भूतों के तीन ही बीज हैं: अंडज, जीवज और उद्भिज्ज।'",
        explanation:
          "एक वर्गीकरण, और बहुत प्राचीन: जो कुछ जीवित है वह तीन में से एक ही द्वार से संसार में आता है — अंडे से, शरीर से, या मिट्टी फोड़कर ऊपर।\n\nयह कितना अनुभवमूलक है, इस पर ठहरना चाहिए। कोई नैतिक श्रेणी नहीं, श्रेष्ठता की सीढ़ी नहीं, देव-दानव नहीं। किसी ने जीव-जगत् को देखा और उसे केवल इस एक प्रश्न से छाँटा कि कोई वस्तु यहाँ पहुँचती कैसे है, और पाया कि तीन उत्तर पर्याप्त हैं।\n\nऔर यह वर्गीकरण यहाँ एक संरचनात्मक कारण से रखा गया है। अभी-अभी तीन तत्त्व कहे गए; अब तीन प्रकार के जन्म। अध्याय यह स्थापित कर रहा है कि विविधता चाहे कितनी भी विस्तृत हो, वह थोड़े से रूपों तक सिमट जाती है — यह वही मिट्टी वाला तर्क है, घड़ों से हटाकर जीवों पर रखा हुआ।",
      },
    },
  },

  {
    id: "chandogya-6-3-2",
    locator: "6.3.2",
    handle: {
      en: "Entering with the living self",
      kn: "ಜೀವಾತ್ಮನಿಂದ ಪ್ರವೇಶಿಸಿ",
      hi: "जीवात्मा से प्रवेश कर",
    },
    sanskrit: [
      "सेयं देवतैक्षत हन्ताहमिमास्तिस्रो देवता",
      "अनेन जीवेनात्मनानुप्रविश्य",
      "नामरूपे व्याकरवाणीति ॥",
    ],
    iast: [
      "seyaṃ devataikṣata hantāham imās tisro devatā",
      "anena jīvenātmanānupraviśya",
      "nāmarūpe vyākaravāṇīti ||",
    ],
    keywords: [
      {
        term: "अनुप्रविश्य",
        iast: "anupraviśya",
        gloss: {
          en: "having entered in after — not standing outside what it makes",
          kn: "ಒಳಹೊಕ್ಕು — ತಾನು ಮಾಡಿದ್ದರ ಹೊರಗೆ ನಿಲ್ಲದೆ",
          hi: "भीतर प्रवेश कर — जो बनाया उसके बाहर खड़ा न रहकर",
        },
      },
      {
        term: "नामरूपे",
        iast: "nāmarūpe",
        gloss: {
          en: "name and form — the two by which one thing is told from another",
          kn: "ನಾಮ ಮತ್ತು ರೂಪ — ಒಂದನ್ನು ಇನ್ನೊಂದರಿಂದ ಬೇರ್ಪಡಿಸುವ ಎರಡು",
          hi: "नाम और रूप — जिनसे एक वस्तु दूसरी से अलग पहचानी जाती है",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'That deity saw: let me enter into these three deities with this living self, and differentiate name and form.'",
        explanation:
          "This is the hinge of the cosmology, and it is one sentence long. Being does not create a world and then govern it from somewhere else. It goes in.\n\nThe means of entry is jīva-ātman — the living self, the self that is alive as a creature. So the thing that looks out of every pair of eyes is not a separate item issued to each body; it is the way Being got inside. Fourteen khaṇḍas from here that will be said to Śvetaketu about Śvetaketu, and this is where it was first made true.\n\nOnly after entering does it differentiate name and form. Distinctness is the last step, not the first — the world does not begin as many things that then get related. It begins as one thing that has gone in and is now telling itself apart, and vācārambhaṇam from the first khaṇḍa is exactly this seen from outside.",
      },
      kn: {
        translation:
          "'ಆ ದೇವತೆ ಈಕ್ಷಿಸಿತು: ನಾನು ಈ ಜೀವಾತ್ಮನಿಂದ ಈ ಮೂರು ದೇವತೆಗಳಲ್ಲಿ ಅನುಪ್ರವೇಶಿಸಿ ನಾಮ ಮತ್ತು ರೂಪವನ್ನು ವ್ಯಕ್ತಗೊಳಿಸುತ್ತೇನೆ.'",
        explanation:
          "ಇದು ಇಡೀ ಸೃಷ್ಟಿವಿವರಣೆಯ ತಿರುಗುಣಿ, ಮತ್ತು ಒಂದೇ ವಾಕ್ಯ. ಸತ್ತು ಜಗತ್ತನ್ನು ಸೃಷ್ಟಿಸಿ ಬೇರೆಲ್ಲಿಂದಲೋ ಅದನ್ನು ಆಳುವುದಿಲ್ಲ. ಅದು ಒಳಹೋಗುತ್ತದೆ.\n\nಪ್ರವೇಶದ ಸಾಧನ 'ಜೀವಾತ್ಮ' — ಜೀವಿಯಾಗಿ ಬದುಕಿರುವ ಆತ್ಮ. ಆದ್ದರಿಂದ ಪ್ರತಿ ಜೊತೆ ಕಣ್ಣುಗಳಿಂದ ಹೊರನೋಡುತ್ತಿರುವುದು ಪ್ರತಿ ದೇಹಕ್ಕೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಕೊಟ್ಟ ವಸ್ತುವಲ್ಲ; ಅದು ಸತ್ತು ಒಳಸೇರಿದ ರೀತಿ. ಇಲ್ಲಿಂದ ಹದಿನಾಲ್ಕು ಖಂಡಗಳ ಮುಂದೆ ಇದನ್ನೇ ಶ್ವೇತಕೇತುವಿಗೆ ಶ್ವೇತಕೇತುವಿನ ಬಗ್ಗೆ ಹೇಳಲಾಗುತ್ತದೆ, ಮತ್ತು ಅದು ನಿಜವಾದದ್ದು ಇಲ್ಲಿಯೇ.\n\nಒಳಹೊಕ್ಕ ಮೇಲೆಯೇ ಅದು ನಾಮರೂಪಗಳನ್ನು ಬೇರ್ಪಡಿಸುತ್ತದೆ. ಪ್ರತ್ಯೇಕತೆ ಕೊನೆಯ ಹೆಜ್ಜೆ, ಮೊದಲನೆಯದಲ್ಲ — ಜಗತ್ತು ಅನೇಕ ವಸ್ತುಗಳಾಗಿ ಆರಂಭವಾಗಿ ಆಮೇಲೆ ಸಂಬಂಧ ಪಡೆಯುವುದಿಲ್ಲ. ಅದು ಒಳಹೊಕ್ಕ ಒಂದೇ ವಸ್ತುವಾಗಿ ಆರಂಭವಾಗಿ ಈಗ ತನ್ನನ್ನು ತಾನೇ ಬೇರ್ಪಡಿಸಿ ಹೇಳಿಕೊಳ್ಳುತ್ತಿದೆ; ಮೊದಲ ಖಂಡದ 'ವಾಚಾರಂಭಣ' ಎಂಬುದು ಇದನ್ನೇ ಹೊರಗಿನಿಂದ ನೋಡಿದ್ದು.",
      },
      hi: {
        translation:
          "'उस देवता ने देखा: मैं इस जीवात्मा के द्वारा इन तीन देवताओं में प्रवेश कर नाम और रूप को व्यक्त करूँ।'",
        explanation:
          "यह पूरी सृष्टिविद्या की धुरी है, और वह एक वाक्य भर है। सत् संसार बनाकर उसे कहीं और से शासित नहीं करता। वह भीतर चला जाता है।\n\nप्रवेश का साधन है 'जीवात्मा' — वह आत्मा जो प्राणी के रूप में जीवित है। इसलिए हर जोड़ी आँखों से जो बाहर देख रहा है वह हर शरीर को अलग-अलग जारी की गई कोई वस्तु नहीं; वह वही ढंग है जिससे सत् भीतर पहुँचा। यहाँ से चौदह खंड आगे यही बात श्वेतकेतु से श्वेतकेतु के विषय में कही जाएगी, और वह सच यहीं बना।\n\nप्रवेश के बाद ही वह नाम और रूप को अलग करता है। पृथक्ता अंतिम चरण है, पहला नहीं — संसार अनेक वस्तुओं से आरंभ होकर बाद में जुड़ता नहीं। वह एक ही वस्तु से आरंभ होता है जो भीतर जा चुकी है और अब स्वयं को अलग-अलग बता रही है; पहले खंड का 'वाचारम्भण' इसी को बाहर से देखना है।",
      },
    },
  },

  {
    id: "chandogya-6-3-3",
    locator: "6.3.3",
    handle: {
      en: "Let me make each one threefold",
      kn: "ಪ್ರತಿಯೊಂದನ್ನೂ ತ್ರಿವೃತ್ ಮಾಡುತ್ತೇನೆ",
      hi: "प्रत्येक को त्रिवृत् करूँ",
    },
    sanskrit: [
      "तासां त्रिवृतं त्रिवृतमेकैकां करवाणीति ।",
      "सेयं देवतेमास्तिस्रो देवता अनेनैव जीवेनात्मना",
      "अनुप्रविश्य नामरूपे व्याकरोत् ॥",
    ],
    iast: [
      "tāsāṃ trivṛtaṃ trivṛtam ekaikāṃ karavāṇīti |",
      "seyaṃ devatemās tisro devatā anenaiva jīvenātmanā",
      "anupraviśya nāmarūpe vyākarot ||",
    ],
    keywords: [
      {
        term: "त्रिवृत्",
        iast: "trivṛt",
        gloss: {
          en: "threefold, three-stranded — each one made of all three",
          kn: "ತ್ರಿವೃತ್, ಮೂರೆಳೆಯದು — ಪ್ರತಿಯೊಂದೂ ಮೂರರಿಂದಲೇ ಆದದ್ದು",
          hi: "त्रिवृत्, तीन लटों वाला — हर एक तीनों से बना",
        },
      },
      {
        term: "व्याकरोत्",
        iast: "vyākarot",
        gloss: {
          en: "differentiated, spread apart — the same root as grammar, vyākaraṇa",
          kn: "ವ್ಯಕ್ತಗೊಳಿಸಿತು, ಬಿಡಿಸಿತು — ವ್ಯಾಕರಣ ಎಂಬ ಪದದ ಅದೇ ಧಾತು",
          hi: "व्यक्त किया, फैलाया — व्याकरण शब्द का वही मूल",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'Let me make each one of them threefold. And that deity, having entered into these three deities with this very living self, differentiated name and form.'",
        explanation:
          "Trivṛt is the technical heart of the chapter: no element is left pure. Fire has water and food in it; water has fire and food; food has both the others. Each of the three is three.\n\nThe consequence is that nothing you can point to is a simple thing. Whatever you name is already a braid, and the naming picks out whichever strand is dominant — which is exactly what 6.4 is about to demonstrate on a flame, taking it apart into its three colours in front of the student.\n\nThe verb for what the deity does is vyākarot, from the root that gives Sanskrit its word for grammar. Creation here is not manufacture but articulation: the same being, spread out into distinguishable terms, the way one language is spread out into words that can be told apart.",
      },
      kn: {
        translation:
          "'ಅವುಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದನ್ನೂ ತ್ರಿವೃತ್ ಮಾಡುತ್ತೇನೆ. ಮತ್ತು ಆ ದೇವತೆ ಈ ಜೀವಾತ್ಮನಿಂದಲೇ ಈ ಮೂರು ದೇವತೆಗಳಲ್ಲಿ ಅನುಪ್ರವೇಶಿಸಿ ನಾಮರೂಪಗಳನ್ನು ವ್ಯಕ್ತಗೊಳಿಸಿತು.'",
        explanation:
          "'ತ್ರಿವೃತ್' ಈ ಅಧ್ಯಾಯದ ತಾಂತ್ರಿಕ ಹೃದಯ: ಯಾವ ತತ್ತ್ವವನ್ನೂ ಶುದ್ಧವಾಗಿ ಬಿಟ್ಟಿಲ್ಲ. ಅಗ್ನಿಯಲ್ಲಿ ನೀರೂ ಅನ್ನವೂ ಇವೆ; ನೀರಿನಲ್ಲಿ ಅಗ್ನಿಯೂ ಅನ್ನವೂ; ಅನ್ನದಲ್ಲಿ ಉಳಿದೆರಡೂ. ಮೂರರಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಮೂರು.\n\nಇದರ ಪರಿಣಾಮ: ನೀವು ತೋರಿಸಬಹುದಾದ ಯಾವುದೂ ಸರಳ ವಸ್ತುವಲ್ಲ. ನೀವು ಹೆಸರಿಸುವ ಪ್ರತಿಯೊಂದೂ ಆಗಲೇ ಒಂದು ಜಡೆ, ಮತ್ತು ಹೆಸರಿಸುವಿಕೆ ಯಾವ ಎಳೆ ಪ್ರಬಲವೋ ಅದನ್ನು ಆರಿಸಿಕೊಳ್ಳುತ್ತದೆ — ೬.೪ ಶಿಷ್ಯನ ಎದುರೇ ಜ್ವಾಲೆಯನ್ನು ಮೂರು ಬಣ್ಣಗಳಾಗಿ ಬಿಡಿಸಿ ತೋರಿಸಲಿರುವುದು ನಿಖರವಾಗಿ ಇದನ್ನೇ.\n\nದೇವತೆ ಮಾಡುವುದಕ್ಕೆ ಬಳಸಿದ ಕ್ರಿಯಾಪದ 'ವ್ಯಾಕರೋತ್' — ಸಂಸ್ಕೃತಕ್ಕೆ 'ವ್ಯಾಕರಣ' ಎಂಬ ಪದ ಕೊಟ್ಟ ಅದೇ ಧಾತು. ಇಲ್ಲಿ ಸೃಷ್ಟಿ ಎಂದರೆ ತಯಾರಿಕೆಯಲ್ಲ, ಸ್ಪಷ್ಟೀಕರಣ: ಒಂದೇ ಸತ್ತು ಬೇರ್ಪಡಿಸಬಹುದಾದ ಪದಗಳಾಗಿ ಹರಡಿದೆ, ಒಂದೇ ಭಾಷೆ ಬೇರೆ ಬೇರೆ ಪದಗಳಾಗಿ ಹರಡುವಂತೆ.",
      },
      hi: {
        translation:
          "'इनमें से प्रत्येक को मैं त्रिवृत् करूँ। और उस देवता ने इसी जीवात्मा के द्वारा इन तीन देवताओं में प्रवेश कर नाम और रूप को व्यक्त किया।'",
        explanation:
          "'त्रिवृत्' इस अध्याय का तकनीकी हृदय है: कोई तत्त्व शुद्ध नहीं छोड़ा गया। अग्नि में जल और अन्न हैं; जल में अग्नि और अन्न; अन्न में शेष दोनों। तीनों में से हर एक तीन है।\n\nपरिणाम यह कि जिसकी ओर आप उँगली उठा सकते हैं वह कोई सरल वस्तु नहीं। आप जो भी नाम लेते हैं वह पहले से एक चोटी है, और नामकरण उसी लट को चुन लेता है जो प्रबल है — ६.४ शिष्य के सामने ज्वाला को तीन रंगों में खोलकर ठीक यही दिखाने वाला है।\n\nदेवता जो करता है उसकी क्रिया है 'व्याकरोत्' — वही मूल जिससे संस्कृत को 'व्याकरण' शब्द मिला। यहाँ सृष्टि निर्माण नहीं, स्पष्टीकरण है: वही सत् अलग-अलग पहचाने जा सकने वाले पदों में फैला हुआ, जैसे एक भाषा अलग-अलग शब्दों में फैलती है।",
      },
    },
  },

  {
    id: "chandogya-6-3-4",
    locator: "6.3.4",
    handle: {
      en: "Learn from me how",
      kn: "ಹೇಗೆಂದು ನನ್ನಿಂದ ತಿಳಿ",
      hi: "मुझसे जानो कि कैसे",
    },
    sanskrit: [
      "तासां त्रिवृतं त्रिवृतमेकैकामकरोत् ।",
      "यथा तु खलु सोम्येमास्तिस्रो देवतास्",
      "त्रिवृत्त्रिवृदेकैका भवति तन्मे विजानीहीति ॥",
    ],
    iast: [
      "tāsāṃ trivṛtaṃ trivṛtam ekaikām akarot |",
      "yathā tu khalu somyemās tisro devatās",
      "trivṛt trivṛd ekaikā bhavati tan me vijānīhīti ||",
    ],
    keywords: [
      {
        term: "विजानीहि",
        iast: "vijānīhi",
        gloss: {
          en: "know, understand — an imperative, not an invitation",
          kn: "ತಿಳಿ, ಅರಿ — ಆಹ್ವಾನವಲ್ಲ, ಆಜ್ಞೆ",
          hi: "जानो, समझो — निमंत्रण नहीं, आज्ञा",
        },
      },
      {
        term: "तन्मे",
        iast: "tan me",
        gloss: {
          en: "that, from me — the teaching he was not given elsewhere",
          kn: "ಅದನ್ನು ನನ್ನಿಂದ — ಬೇರೆಲ್ಲೂ ಅವನಿಗೆ ಸಿಗದ ಬೋಧನೆ",
          hi: "वह, मुझसे — जो उपदेश उसे अन्यत्र नहीं मिला",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'He made each one of them threefold. Now learn from me, my dear, how each of these three deities becomes threefold.'",
        explanation:
          "The narrative of creation stops here, mid-stride, and turns into a lesson. Up to this point the father has been telling his son what happened; from here he is going to show him where to look for it.\n\nThat turn is the reason this chapter has lasted. A cosmology that can only be recited is a story. This one is immediately made checkable — and the next khaṇḍa hands the student a flame, the sun, the moon and lightning, and takes each of them apart in front of him.\n\nVijānīhi is an imperative. Not 'consider' or 'reflect on', but know it. The father is not offering a view for his son's consideration; he is telling him to go and see.",
      },
      kn: {
        translation:
          "'ಅವುಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದನ್ನೂ ಅವನು ತ್ರಿವೃತ್ ಮಾಡಿದನು. ಈಗ ಪ್ರಿಯನೇ, ಈ ಮೂರು ದೇವತೆಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಹೇಗೆ ತ್ರಿವೃತ್ ಆಗುತ್ತದೆ ಎಂಬುದನ್ನು ನನ್ನಿಂದ ತಿಳಿ.'",
        explanation:
          "ಸೃಷ್ಟಿಯ ಕಥನ ಇಲ್ಲಿ ಅರ್ಧದಲ್ಲೇ ನಿಂತು ಪಾಠವಾಗಿ ತಿರುಗುತ್ತದೆ. ಇಲ್ಲಿಯವರೆಗೆ ತಂದೆ ಮಗನಿಗೆ ಏನಾಯಿತೆಂದು ಹೇಳುತ್ತಿದ್ದನು; ಇಲ್ಲಿಂದ ಮುಂದೆ ಅದನ್ನು ಎಲ್ಲಿ ಹುಡುಕಬೇಕೆಂದು ತೋರಿಸಲಿದ್ದಾನೆ.\n\nಈ ತಿರುವೇ ಈ ಅಧ್ಯಾಯ ಉಳಿದುಕೊಂಡಿರುವುದಕ್ಕೆ ಕಾರಣ. ಪಾರಾಯಣ ಮಾತ್ರ ಮಾಡಬಹುದಾದ ಸೃಷ್ಟಿವಿವರಣೆ ಒಂದು ಕಥೆ. ಇದನ್ನು ತಕ್ಷಣವೇ ಪರೀಕ್ಷಿಸಬಹುದಾದದ್ದನ್ನಾಗಿ ಮಾಡಲಾಗಿದೆ — ಮುಂದಿನ ಖಂಡ ಶಿಷ್ಯನ ಕೈಗೆ ಜ್ವಾಲೆಯನ್ನು, ಸೂರ್ಯನನ್ನು, ಚಂದ್ರನನ್ನು, ಮಿಂಚನ್ನು ಕೊಟ್ಟು ಪ್ರತಿಯೊಂದನ್ನೂ ಅವನೆದುರೇ ಬಿಡಿಸುತ್ತದೆ.\n\n'ವಿಜಾನೀಹಿ' ಆಜ್ಞಾರ್ಥ. 'ಪರಿಗಣಿಸು' ಅಥವಾ 'ಚಿಂತಿಸು' ಅಲ್ಲ, ತಿಳಿ. ತಂದೆ ಮಗನ ಪರಿಶೀಲನೆಗೆ ಒಂದು ಅಭಿಪ್ರಾಯವನ್ನು ಒಡ್ಡುತ್ತಿಲ್ಲ; ಹೋಗಿ ನೋಡು ಎನ್ನುತ್ತಿದ್ದಾನೆ.",
      },
      hi: {
        translation:
          "'उसने इनमें से प्रत्येक को त्रिवृत् किया। अब हे सौम्य, मुझसे जानो कि ये तीनों देवता किस प्रकार त्रिवृत् होते हैं।'",
        explanation:
          "सृष्टि की कथा यहाँ बीच में ही रुककर पाठ में बदल जाती है। अब तक पिता पुत्र को बता रहा था कि क्या हुआ; यहाँ से वह दिखाने जा रहा है कि उसे कहाँ देखना है।\n\nयही मोड़ इस अध्याय के टिके रहने का कारण है। जिस सृष्टिविद्या को केवल दोहराया जा सके वह एक कथा है। इसे तत्काल जाँचने योग्य बना दिया गया है — और अगला खंड शिष्य के हाथ में ज्वाला, सूर्य, चंद्र और विद्युत् थमाकर हर एक को उसी के सामने खोल देता है।\n\n'विजानीहि' आज्ञा है। 'विचार करो' या 'मनन करो' नहीं, बल्कि जानो। पिता पुत्र के विचारार्थ कोई मत नहीं रख रहा; वह कह रहा है कि जाओ और देखो।",
      },
    },
  },
  {
    id: "chandogya-6-4-1",
    locator: "6.4.1",
    handle: {
      en: "The fire comes apart",
      kn: "ಅಗ್ನಿ ಬಿಡಿಬಿಡಿಯಾಗುತ್ತದೆ",
      hi: "अग्नि खुल जाती है",
    },
    sanskrit: [
      "यदग्ने रोहितं रूपं तेजसस्तद्रूपं",
      "यच्छुक्लं तदपां यत्कृष्णं तदन्नस्य ।",
      "अपागादग्नेरग्नित्वं वाचारम्भणं",
      "विकारो नामधेयं त्रीणि रूपाणीत्येव सत्यम् ॥",
    ],
    iast: [
      "yad agne rohitaṃ rūpaṃ tejasas tad rūpaṃ",
      "yac chuklaṃ tad apāṃ yat kṛṣṇaṃ tad annasya |",
      "apāgād agner agnitvaṃ vācārambhaṇaṃ",
      "vikāro nāmadheyaṃ trīṇi rūpāṇīty eva satyam ||",
    ],
    keywords: [
      {
        term: "अपागात्",
        iast: "apāgāt",
        gloss: {
          en: "it has gone away, departed — the fireness has left",
          kn: "ಹೊರಟುಹೋಯಿತು — ಅಗ್ನಿತ್ವ ತೊಲಗಿತು",
          hi: "चला गया — अग्नि का अग्नित्व हट गया",
        },
      },
      {
        term: "अग्नित्वम्",
        iast: "agnitvam",
        gloss: {
          en: "fireness — the being-fire of the fire, as against its three colours",
          kn: "ಅಗ್ನಿತ್ವ — ಮೂರು ಬಣ್ಣಗಳಿಗೆ ಎದುರಾಗಿ ಅಗ್ನಿಯ ಅಗ್ನಿಯಾಗಿರುವಿಕೆ",
          hi: "अग्नित्व — तीन रूपों के सामने अग्नि का अग्नि होना",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'The red form in fire is the form of heat; the white is of water; the black is of food. The fireness has gone out of the fire — being a matter of speech only, a modification, a name; the three forms alone are real.'",
        explanation:
          "Now the promise of the last khaṇḍa is kept, and the demonstration is done on something burning in the room. Look at a flame: there is red in it, there is white, there is a dark part. Three colours, and the doctrine says each belongs to one of the three deities.\n\nThen the sentence that does the work: apāgād agner agnitvam — the fireness has gone out of the fire. Not the fire, the fireness. Once you have seen that the flame is three things braided, there is nothing left over that was the fire itself. The word 'fire' was a way of speaking about a particular braid.\n\nAnd the formula from the first khaṇḍa returns exactly — vācārambhaṇaṃ vikāro nāmadheyam — now applied not to a pot but to an element. What was demonstrated on a potter's shelf is being run on the constituents of the world.",
      },
      kn: {
        translation:
          "'ಅಗ್ನಿಯಲ್ಲಿ ಕೆಂಪು ರೂಪ ತೇಜಸ್ಸಿನದು; ಬಿಳಿಯದು ನೀರಿನದು; ಕಪ್ಪಾದದ್ದು ಅನ್ನದ್ದು. ಅಗ್ನಿಯಿಂದ ಅಗ್ನಿತ್ವ ತೊಲಗಿತು — ಅದು ಮಾತಿನ ಆಶ್ರಯ ಮಾತ್ರ, ವಿಕಾರ, ಹೆಸರು; ಮೂರು ರೂಪಗಳೇ ಸತ್ಯ.'",
        explanation:
          "ಹಿಂದಿನ ಖಂಡದ ಮಾತು ಈಗ ನೆರವೇರುತ್ತದೆ, ಮತ್ತು ಪ್ರದರ್ಶನ ಕೋಣೆಯಲ್ಲೇ ಉರಿಯುತ್ತಿರುವುದರ ಮೇಲೆ ನಡೆಯುತ್ತದೆ. ಜ್ವಾಲೆಯನ್ನು ನೋಡಿ: ಅದರಲ್ಲಿ ಕೆಂಪಿದೆ, ಬಿಳಿಯಿದೆ, ಕಪ್ಪಾದ ಭಾಗವಿದೆ. ಮೂರು ಬಣ್ಣ, ಮತ್ತು ಪ್ರತಿಯೊಂದೂ ಮೂರು ದೇವತೆಗಳಲ್ಲಿ ಒಂದಕ್ಕೆ ಸೇರಿದ್ದೆಂದು ಸಿದ್ಧಾಂತ ಹೇಳುತ್ತದೆ.\n\nಆಮೇಲೆ ಕೆಲಸ ಮಾಡುವ ವಾಕ್ಯ: 'ಅಪಾಗಾದಗ್ನೇರಗ್ನಿತ್ವಮ್' — ಅಗ್ನಿಯಿಂದ ಅಗ್ನಿತ್ವ ಹೊರಟುಹೋಯಿತು. ಅಗ್ನಿಯಲ್ಲ, ಅಗ್ನಿತ್ವ. ಜ್ವಾಲೆ ಮೂರರ ಜಡೆ ಎಂದು ಕಂಡ ಮೇಲೆ, ಅಗ್ನಿಯೇ ಆಗಿದ್ದ ಯಾವುದೂ ಉಳಿದಿಲ್ಲ. 'ಅಗ್ನಿ' ಎಂಬ ಪದ ಒಂದು ನಿರ್ದಿಷ್ಟ ಜಡೆಯ ಬಗ್ಗೆ ಮಾತನಾಡುವ ರೀತಿಯಾಗಿತ್ತು.\n\nಮೊದಲ ಖಂಡದ ಸೂತ್ರ ಯಥಾವತ್ ಮರಳುತ್ತದೆ — 'ವಾಚಾರಂಭಣಂ ವಿಕಾರೋ ನಾಮಧೇಯಮ್' — ಈಗ ಮಡಕೆಗಲ್ಲ, ಒಂದು ಮಹಾಭೂತಕ್ಕೆ ಅನ್ವಯಿಸಿ. ಕುಂಬಾರನ ಹಲಗೆಯ ಮೇಲೆ ತೋರಿಸಿದ್ದನ್ನು ಈಗ ಜಗತ್ತಿನ ಘಟಕಗಳ ಮೇಲೆ ನಡೆಸಲಾಗುತ್ತಿದೆ.",
      },
      hi: {
        translation:
          "'अग्नि में जो लाल रूप है वह तेज का रूप है; जो श्वेत है वह जल का; जो कृष्ण है वह अन्न का। अग्नि से अग्नित्व चला गया — वह केवल वाणी का आश्रय है, विकार, नाम; तीन रूप ही सत्य हैं।'",
        explanation:
          "पिछले खंड का वचन अब पूरा होता है, और प्रदर्शन उसी वस्तु पर होता है जो कमरे में जल रही है। ज्वाला देखिए: उसमें लाल है, श्वेत है, एक काला भाग है। तीन रंग, और सिद्धांत कहता है हर एक तीन देवताओं में से किसी एक का है।\n\nफिर वह वाक्य जो असली काम करता है: 'अपागादग्नेरग्नित्वम्' — अग्नि से अग्नित्व चला गया। अग्नि नहीं, अग्नित्व। एक बार यह दिख जाने पर कि ज्वाला तीन चीज़ों की चोटी है, ऐसा कुछ बचता ही नहीं जो स्वयं अग्नि रहा हो। 'अग्नि' शब्द एक विशेष चोटी के बारे में बोलने का ढंग था।\n\nऔर पहले खंड का सूत्र ज्यों का त्यों लौटता है — 'वाचारम्भणं विकारो नामधेयम्' — अब घड़े पर नहीं, एक महाभूत पर लागू। जो कुम्हार की टाल पर दिखाया गया था, वही अब जगत् के घटकों पर चलाया जा रहा है।",
      },
    },
  },

  {
    id: "chandogya-6-4-2",
    locator: "6.4.2",
    handle: {
      en: "And so the sun",
      kn: "ಹಾಗೆಯೇ ಸೂರ್ಯ",
      hi: "और वैसे ही सूर्य",
    },
    sanskrit: [
      "यदादित्यस्य रोहितं रूपं तेजसस्तद्रूपं",
      "यच्छुक्लं तदपां यत्कृष्णं तदन्नस्य ।",
      "अपागादादित्यादादित्यत्वं वाचारम्भणं",
      "विकारो नामधेयं त्रीणि रूपाणीत्येव सत्यम् ॥",
    ],
    iast: [
      "yad ādityasya rohitaṃ rūpaṃ tejasas tad rūpaṃ",
      "yac chuklaṃ tad apāṃ yat kṛṣṇaṃ tad annasya |",
      "apāgād ādityād ādityatvaṃ vācārambhaṇaṃ",
      "vikāro nāmadheyaṃ trīṇi rūpāṇīty eva satyam ||",
    ],
    keywords: [
      {
        term: "आदित्यः",
        iast: "ādityaḥ",
        gloss: {
          en: "the sun — the greatest visible thing, treated exactly as the flame was",
          kn: "ಸೂರ್ಯ — ಕಾಣುವ ಅತಿ ದೊಡ್ಡದು, ಜ್ವಾಲೆಯಂತೆಯೇ ಪರಿಗಣಿಸಲ್ಪಟ್ಟದ್ದು",
          hi: "सूर्य — दृश्य में सबसे बड़ा, ज्वाला जैसा ही बरता गया",
        },
      },
      {
        term: "आदित्यत्वम्",
        iast: "ādityatvam",
        gloss: {
          en: "sunness — what is left when the three forms are accounted for",
          kn: "ಆದಿತ್ಯತ್ವ — ಮೂರು ರೂಪಗಳ ಲೆಕ್ಕ ಮುಗಿದ ಮೇಲೆ ಉಳಿಯುವುದು",
          hi: "आदित्यत्व — तीन रूपों का हिसाब हो जाने पर जो बचता है",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'The red form in the sun is the form of heat; the white is of water; the black is of food. The sunness has gone out of the sun — being a matter of speech only, a modification, a name; the three forms alone are real.'",
        explanation:
          "The same sentence, moved from the hearth to the sky. A householder's fire could be dismissed as a small case; the sun cannot. It is the largest thing anyone in that room had ever seen, and it is taken apart in one line by the identical procedure.\n\nThis is why the repetitions in this chapter are not padding. Each restatement widens the domain the rule has to survive — flame, sun, moon, lightning — and each time nothing new is needed. A principle that holds unchanged from a cooking fire to the sun has earned the right to be applied to a person, which is where it is going.",
      },
      kn: {
        translation:
          "'ಸೂರ್ಯನಲ್ಲಿ ಕೆಂಪು ರೂಪ ತೇಜಸ್ಸಿನದು; ಬಿಳಿಯದು ನೀರಿನದು; ಕಪ್ಪಾದದ್ದು ಅನ್ನದ್ದು. ಸೂರ್ಯನಿಂದ ಆದಿತ್ಯತ್ವ ತೊಲಗಿತು — ಅದು ಮಾತಿನ ಆಶ್ರಯ ಮಾತ್ರ, ವಿಕಾರ, ಹೆಸರು; ಮೂರು ರೂಪಗಳೇ ಸತ್ಯ.'",
        explanation:
          "ಅದೇ ವಾಕ್ಯ, ಒಲೆಯಿಂದ ಆಕಾಶಕ್ಕೆ ಸರಿದಿದೆ. ಮನೆಯ ಬೆಂಕಿಯನ್ನು ಸಣ್ಣ ಪ್ರಕರಣವೆಂದು ತಳ್ಳಿಹಾಕಬಹುದಿತ್ತು; ಸೂರ್ಯನನ್ನು ಸಾಧ್ಯವಿಲ್ಲ. ಆ ಕೋಣೆಯಲ್ಲಿದ್ದ ಯಾರೂ ಕಂಡಿದ್ದ ಅತಿ ದೊಡ್ಡ ವಸ್ತು ಅದು, ಮತ್ತು ಅದೇ ವಿಧಾನದಿಂದ ಒಂದೇ ಸಾಲಿನಲ್ಲಿ ಅದನ್ನು ಬಿಡಿಸಲಾಗಿದೆ.\n\nಈ ಅಧ್ಯಾಯದ ಪುನರಾವರ್ತನೆಗಳು ತುಂಬುವ ಮಾತಲ್ಲ ಎಂಬುದಕ್ಕೆ ಇದೇ ಕಾರಣ. ಪ್ರತಿ ಪುನರುಕ್ತಿಯೂ ನಿಯಮ ಉಳಿಯಬೇಕಾದ ಕ್ಷೇತ್ರವನ್ನು ವಿಸ್ತರಿಸುತ್ತದೆ — ಜ್ವಾಲೆ, ಸೂರ್ಯ, ಚಂದ್ರ, ಮಿಂಚು — ಮತ್ತು ಪ್ರತಿ ಬಾರಿಯೂ ಹೊಸದೇನೂ ಬೇಕಾಗುವುದಿಲ್ಲ. ಅಡುಗೆಯ ಬೆಂಕಿಯಿಂದ ಸೂರ್ಯನವರೆಗೆ ಬದಲಾಗದೆ ನಿಲ್ಲುವ ತತ್ತ್ವಕ್ಕೆ ಮನುಷ್ಯನ ಮೇಲೆ ಅನ್ವಯವಾಗುವ ಅಧಿಕಾರ ಬಂದಿದೆ — ಮತ್ತು ಅದೇ ಅದರ ಗುರಿ.",
      },
      hi: {
        translation:
          "'सूर्य में जो लाल रूप है वह तेज का रूप है; जो श्वेत है वह जल का; जो कृष्ण है वह अन्न का। सूर्य से आदित्यत्व चला गया — वह केवल वाणी का आश्रय है, विकार, नाम; तीन रूप ही सत्य हैं।'",
        explanation:
          "वही वाक्य, चूल्हे से आकाश पर चला गया। घर की आग को छोटा उदाहरण कहकर टाला जा सकता था; सूर्य को नहीं। वह उस कमरे में बैठे किसी ने भी देखी सबसे बड़ी वस्तु है, और उसी प्रक्रिया से एक पंक्ति में खोल दिया जाता है।\n\nइसीलिए इस अध्याय की पुनरावृत्तियाँ भराव नहीं हैं। हर पुनरुक्ति उस क्षेत्र को चौड़ा करती है जिसमें नियम को टिकना है — ज्वाला, सूर्य, चंद्र, विद्युत् — और हर बार कुछ नया नहीं चाहिए। जो सिद्धांत रसोई की आग से सूर्य तक बिना बदले टिकता है, उसे मनुष्य पर लागू होने का अधिकार मिल चुका है — और वहीं वह जा रहा है।",
      },
    },
  },

  {
    id: "chandogya-6-4-3",
    locator: "6.4.3",
    handle: {
      en: "And the moon",
      kn: "ಮತ್ತು ಚಂದ್ರ",
      hi: "और चंद्रमा",
    },
    sanskrit: [
      "यच्चन्द्रमसो रोहितं रूपं तेजसस्तद्रूपं",
      "यच्छुक्लं तदपां यत्कृष्णं तदन्नस्य ।",
      "अपागाच्चन्द्राच्चन्द्रत्वं वाचारम्भणं",
      "विकारो नामधेयं त्रीणि रूपाणीत्येव सत्यम् ॥",
    ],
    iast: [
      "yac candramaso rohitaṃ rūpaṃ tejasas tad rūpaṃ",
      "yac chuklaṃ tad apāṃ yat kṛṣṇaṃ tad annasya |",
      "apāgāc candrāc candratvaṃ vācārambhaṇaṃ",
      "vikāro nāmadheyaṃ trīṇi rūpāṇīty eva satyam ||",
    ],
    keywords: [
      {
        term: "चन्द्रमाः",
        iast: "candramāḥ",
        gloss: {
          en: "the moon — light that is borrowed, and analysed the same way",
          kn: "ಚಂದ್ರ — ಎರವಲು ಪಡೆದ ಬೆಳಕು, ಅದೇ ರೀತಿ ವಿಶ್ಲೇಷಿತ",
          hi: "चंद्रमा — उधार की ज्योति, उसी रीति से विश्लेषित",
        },
      },
      {
        term: "चन्द्रत्वम्",
        iast: "candratvam",
        gloss: {
          en: "moonness — the name, once the three forms are named",
          kn: "ಚಂದ್ರತ್ವ — ಮೂರು ರೂಪಗಳನ್ನು ಹೆಸರಿಸಿದ ಮೇಲೆ ಉಳಿಯುವ ಹೆಸರು",
          hi: "चंद्रत्व — तीन रूप नाम लिए जाने के बाद बचा नाम",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'The red form in the moon is the form of heat; the white is of water; the black is of food. The moonness has gone out of the moon — being a matter of speech only, a modification, a name; the three forms alone are real.'",
        explanation:
          "The third case, and the one where the analysis is least obvious to the eye — moonlight has little red in it and no heat you can feel. The text applies the rule anyway, and does not soften it for a difficult instance.\n\nThat willingness matters. A rule quietly dropped where it fits badly is not a rule; and the honest reading of this khaṇḍa is that the analysis is being asserted here more than it is being shown. What holds it up is the argument of 6.3.3 — every one of the three is already three — not fresh observation of the moon. The chapter is at its strongest on the flame and its boldest here.",
      },
      kn: {
        translation:
          "'ಚಂದ್ರನಲ್ಲಿ ಕೆಂಪು ರೂಪ ತೇಜಸ್ಸಿನದು; ಬಿಳಿಯದು ನೀರಿನದು; ಕಪ್ಪಾದದ್ದು ಅನ್ನದ್ದು. ಚಂದ್ರನಿಂದ ಚಂದ್ರತ್ವ ತೊಲಗಿತು — ಅದು ಮಾತಿನ ಆಶ್ರಯ ಮಾತ್ರ, ವಿಕಾರ, ಹೆಸರು; ಮೂರು ರೂಪಗಳೇ ಸತ್ಯ.'",
        explanation:
          "ಮೂರನೆಯ ಪ್ರಕರಣ, ಮತ್ತು ಕಣ್ಣಿಗೆ ಈ ವಿಶ್ಲೇಷಣೆ ಅತ್ಯಂತ ಕಡಿಮೆ ಸ್ಪಷ್ಟವಾಗಿರುವುದು ಇಲ್ಲಿಯೇ — ಬೆಳದಿಂಗಳಲ್ಲಿ ಕೆಂಪು ಕಡಿಮೆ, ಅನುಭವಿಸಬಹುದಾದ ಶಾಖವಂತೂ ಇಲ್ಲ. ಆದರೂ ಪಠ್ಯ ನಿಯಮವನ್ನು ಅನ್ವಯಿಸುತ್ತದೆ, ಕಷ್ಟದ ಉದಾಹರಣೆಗೆ ಅದನ್ನು ಸಡಿಲಿಸುವುದಿಲ್ಲ.\n\nಈ ಸಿದ್ಧತೆ ಮುಖ್ಯ. ಹೊಂದದ ಕಡೆ ಸದ್ದಿಲ್ಲದೆ ಕೈಬಿಡುವ ನಿಯಮ ನಿಯಮವೇ ಅಲ್ಲ; ಮತ್ತು ಈ ಖಂಡದ ಪ್ರಾಮಾಣಿಕ ಓದು ಇಷ್ಟು — ಇಲ್ಲಿ ವಿಶ್ಲೇಷಣೆಯನ್ನು ತೋರಿಸುವುದಕ್ಕಿಂತ ಪ್ರತಿಪಾದಿಸಲಾಗಿದೆ. ಇದನ್ನು ಹಿಡಿದಿಟ್ಟಿರುವುದು ೬.೩.೩ರ ವಾದ — ಮೂರರಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಆಗಲೇ ಮೂರು — ಚಂದ್ರನ ಹೊಸ ಗಮನಿಕೆಯಲ್ಲ. ಜ್ವಾಲೆಯ ಮೇಲೆ ಅಧ್ಯಾಯ ಅತ್ಯಂತ ಬಲಿಷ್ಠ, ಇಲ್ಲಿ ಅತ್ಯಂತ ಧೈರ್ಯಶಾಲಿ.",
      },
      hi: {
        translation:
          "'चंद्रमा में जो लाल रूप है वह तेज का रूप है; जो श्वेत है वह जल का; जो कृष्ण है वह अन्न का। चंद्र से चंद्रत्व चला गया — वह केवल वाणी का आश्रय है, विकार, नाम; तीन रूप ही सत्य हैं।'",
        explanation:
          "तीसरा उदाहरण, और आँख के लिए यह विश्लेषण सबसे कम स्पष्ट यहीं है — चाँदनी में लाल कम है और अनुभव में आने वाली ऊष्मा तो है ही नहीं। फिर भी पाठ नियम लागू करता है, कठिन उदाहरण के लिए उसे ढीला नहीं करता।\n\nयह तत्परता महत्त्वपूर्ण है। जो नियम ठीक न बैठने पर चुपचाप छोड़ दिया जाए वह नियम नहीं; और इस खंड का ईमानदार पाठ यही है कि यहाँ विश्लेषण दिखाया कम, प्रतिपादित अधिक गया है। उसे थामे हुए है ६.३.३ का तर्क — तीनों में हर एक पहले से तीन है — न कि चंद्रमा का कोई नया प्रेक्षण। ज्वाला पर अध्याय सबसे सबल है, और यहाँ सबसे साहसी।",
      },
    },
  },

  {
    id: "chandogya-6-4-4",
    locator: "6.4.4",
    handle: {
      en: "And the lightning",
      kn: "ಮತ್ತು ಮಿಂಚು",
      hi: "और विद्युत्",
    },
    sanskrit: [
      "यद्विद्युतो रोहितं रूपं तेजसस्तद्रूपं",
      "यच्छुक्लं तदपां यत्कृष्णं तदन्नस्य ।",
      "अपागाद्विद्युतो विद्युत्त्वं वाचारम्भणं",
      "विकारो नामधेयं त्रीणि रूपाणीत्येव सत्यम् ॥",
    ],
    iast: [
      "yad vidyuto rohitaṃ rūpaṃ tejasas tad rūpaṃ",
      "yac chuklaṃ tad apāṃ yat kṛṣṇaṃ tad annasya |",
      "apāgād vidyuto vidyuttvaṃ vācārambhaṇaṃ",
      "vikāro nāmadheyaṃ trīṇi rūpāṇīty eva satyam ||",
    ],
    keywords: [
      {
        term: "विद्युत्",
        iast: "vidyut",
        gloss: {
          en: "lightning — the briefest of the four, and still not exempt",
          kn: "ಮಿಂಚು — ನಾಲ್ಕರಲ್ಲಿ ಅತ್ಯಂತ ಕ್ಷಣಿಕ, ಆದರೂ ವಿನಾಯಿತಿಯಿಲ್ಲ",
          hi: "विद्युत् — चारों में सबसे क्षणिक, फिर भी छूट नहीं",
        },
      },
      {
        term: "रूपम्",
        iast: "rūpam",
        gloss: {
          en: "form, colour, visible appearance",
          kn: "ರೂಪ, ಬಣ್ಣ, ಕಾಣುವ ತೋರಿಕೆ",
          hi: "रूप, रंग, दृश्य आभास",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'The red form in lightning is the form of heat; the white is of water; the black is of food. The lightningness has gone out of the lightning — being a matter of speech only, a modification, a name; the three forms alone are real.'",
        explanation:
          "The fourth and last of the luminaries, and the series has been chosen with care: a fire you tend, a sun that governs the day, a moon that governs the night, and a flash that is over before you can point at it. Steady and brief, near and far, tended and wild.\n\nThey have nothing in common except light — and, the chapter says, three colours and a name. Having established that every luminous thing dissolves into the same three, the father has finished with the sky. What remains is to say who else knew this, and then to turn the analysis on the student's own body.",
      },
      kn: {
        translation:
          "'ಮಿಂಚಿನಲ್ಲಿ ಕೆಂಪು ರೂಪ ತೇಜಸ್ಸಿನದು; ಬಿಳಿಯದು ನೀರಿನದು; ಕಪ್ಪಾದದ್ದು ಅನ್ನದ್ದು. ಮಿಂಚಿನಿಂದ ವಿದ್ಯುತ್ತ್ವ ತೊಲಗಿತು — ಅದು ಮಾತಿನ ಆಶ್ರಯ ಮಾತ್ರ, ವಿಕಾರ, ಹೆಸರು; ಮೂರು ರೂಪಗಳೇ ಸತ್ಯ.'",
        explanation:
          "ಬೆಳಕಿನ ವಸ್ತುಗಳಲ್ಲಿ ನಾಲ್ಕನೆಯದು ಮತ್ತು ಕೊನೆಯದು; ಸರಣಿಯನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಆರಿಸಲಾಗಿದೆ: ನೀವು ಕಾಯುವ ಬೆಂಕಿ, ಹಗಲನ್ನು ಆಳುವ ಸೂರ್ಯ, ಇರುಳನ್ನು ಆಳುವ ಚಂದ್ರ, ಮತ್ತು ತೋರಿಸುವ ಮೊದಲೇ ಮುಗಿಯುವ ಒಂದು ಝಳಪು. ಸ್ಥಿರ ಮತ್ತು ಕ್ಷಣಿಕ, ಹತ್ತಿರ ಮತ್ತು ದೂರ, ಪಳಗಿದ್ದು ಮತ್ತು ಕಾಡಿನದ್ದು.\n\nಬೆಳಕನ್ನು ಬಿಟ್ಟರೆ ಅವುಗಳಲ್ಲಿ ಸಮಾನವಾದದ್ದೇನೂ ಇಲ್ಲ — ಮತ್ತು, ಅಧ್ಯಾಯದ ಪ್ರಕಾರ, ಮೂರು ಬಣ್ಣ ಮತ್ತು ಒಂದು ಹೆಸರು. ಬೆಳಗುವ ಪ್ರತಿಯೊಂದೂ ಅದೇ ಮೂರರಲ್ಲಿ ಕರಗುತ್ತದೆಂದು ಸ್ಥಾಪಿಸಿದ ಮೇಲೆ ತಂದೆ ಆಕಾಶದೊಂದಿಗೆ ಮುಗಿಸಿದ್ದಾನೆ. ಉಳಿದಿರುವುದು — ಇದನ್ನು ಇನ್ನಾರು ತಿಳಿದಿದ್ದರೆಂದು ಹೇಳುವುದು, ಆಮೇಲೆ ಈ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಶಿಷ್ಯನ ಸ್ವಂತ ಶರೀರದತ್ತ ತಿರುಗಿಸುವುದು.",
      },
      hi: {
        translation:
          "'विद्युत् में जो लाल रूप है वह तेज का रूप है; जो श्वेत है वह जल का; जो कृष्ण है वह अन्न का। विद्युत् से विद्युत्त्व चला गया — वह केवल वाणी का आश्रय है, विकार, नाम; तीन रूप ही सत्य हैं।'",
        explanation:
          "ज्योतियों में चौथी और अंतिम, और यह शृंखला ध्यान से चुनी गई है: वह आग जिसे आप सँभालते हैं, वह सूर्य जो दिन पर शासन करता है, वह चंद्र जो रात पर, और वह कौंध जो उँगली उठाने से पहले बीत जाती है। स्थिर और क्षणिक, निकट और दूर, पालित और वन्य।\n\nप्रकाश के अतिरिक्त उनमें कुछ भी साझा नहीं — और, अध्याय के अनुसार, तीन रंग तथा एक नाम। यह स्थापित करने के बाद कि हर प्रकाशमान वस्तु उन्हीं तीन में घुल जाती है, पिता ने आकाश से काम पूरा कर लिया। शेष है — यह बताना कि और किसने यह जाना था, और फिर इस विश्लेषण को शिष्य के अपने शरीर पर मोड़ देना।",
      },
    },
  },

  {
    id: "chandogya-6-4-5",
    locator: "6.4.5",
    handle: {
      en: "The great householders knew this",
      kn: "ಮಹಾಶಾಲರು ಇದನ್ನು ತಿಳಿದಿದ್ದರು",
      hi: "महाशाल यह जानते थे",
    },
    sanskrit: [
      "एतद्ध स्म वै तद्विद्वांस आहुः",
      "पूर्वे महाशाला महाश्रोत्रिया",
      "न नोऽद्य कश्चनाश्रुतममतमविज्ञातम्",
      "उदाहरिष्यतीति ह्येभ्यो विदांचक्रुः ॥",
    ],
    iast: [
      "etad dha sma vai tad vidvāṃsa āhuḥ",
      "pūrve mahāśālā mahāśrotriyā",
      "na no 'dya kaścanāśrutam amatam avijñātam",
      "udāhariṣyatīti hy ebhyo vidāṃcakruḥ ||",
    ],
    keywords: [
      {
        term: "महाश्रोत्रियाः",
        iast: "mahāśrotriyāḥ",
        gloss: {
          en: "great masters of the recited Veda",
          kn: "ವೇದವನ್ನು ಆಳವಾಗಿ ಬಲ್ಲ ಮಹಾಶ್ರೋತ್ರಿಯರು",
          hi: "वेद के महान् ज्ञाता श्रोत्रिय",
        },
      },
      {
        term: "उदाहरिष्यति",
        iast: "udahariṣyati",
        gloss: {
          en: "will cite, will bring up as an instance",
          kn: "ಉದಾಹರಿಸುವನು, ಒಂದು ನಿದರ್ಶನವಾಗಿ ತರುವನು",
          hi: "उदाहरण देगा, दृष्टांत रूप में लाएगा",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'Knowing this, the great householders and great masters of the Veda of former times used to say: no one will now bring up before us anything unheard, unthought, or unknown — for from these they knew it all.'",
        explanation:
          "The claim of 6.1.3 is now cashed. There the father asked whether Śvetaketu had ever sought the teaching by which the unheard becomes heard; here are the men who had it, and here is what having it sounded like.\n\nAnd it does not sound like a mystical state. It sounds like confidence in a debate: nobody can now produce an instance that will be new to us. That is the language of a hall where learned men argued, and the boast is about analysis, not vision — knowing the three, they knew whatever anyone might bring in.\n\nNotice too that they are called great householders. Not renouncers, not forest hermits: men with large houses, running estates and hosting guests. The knowledge that dissolves the sun is being credited to people with property and obligations.",
      },
      kn: {
        translation:
          "'ಇದನ್ನು ತಿಳಿದೇ ಹಿಂದಿನ ಮಹಾಶಾಲರೂ ಮಹಾಶ್ರೋತ್ರಿಯರೂ ಹೇಳುತ್ತಿದ್ದರು: ಇನ್ನು ನಮ್ಮ ಮುಂದೆ ಯಾರೂ ಕೇಳದ್ದನ್ನು, ಯೋಚಿಸದ್ದನ್ನು, ತಿಳಿಯದ್ದನ್ನು ತರಲಾರರು — ಏಕೆಂದರೆ ಇವುಗಳಿಂದಲೇ ಅವರು ಎಲ್ಲವನ್ನೂ ತಿಳಿದಿದ್ದರು.'",
        explanation:
          "೬.೧.೩ರ ಪ್ರತಿಜ್ಞೆ ಈಗ ನಗದಾಗುತ್ತದೆ. ಅಲ್ಲಿ ತಂದೆ, ಕೇಳದ್ದು ಕೇಳಿದಂತಾಗುವ ಆ ಆದೇಶವನ್ನು ಶ್ವೇತಕೇತು ಎಂದಾದರೂ ಕೇಳಿದನೇ ಎಂದಿದ್ದನು; ಇಲ್ಲಿ ಅದನ್ನು ಹೊಂದಿದ್ದವರಿದ್ದಾರೆ, ಮತ್ತು ಅದನ್ನು ಹೊಂದಿರುವುದು ಹೇಗೆ ಕೇಳಿಸುತ್ತಿತ್ತೆಂಬುದೂ ಇದೆ.\n\nಅದು ಯಾವುದೋ ಗೂಢ ಅವಸ್ಥೆಯಂತೆ ಕೇಳಿಸುವುದಿಲ್ಲ. ವಾದಸಭೆಯಲ್ಲಿನ ಆತ್ಮವಿಶ್ವಾಸದಂತೆ ಕೇಳಿಸುತ್ತದೆ: ನಮಗೆ ಹೊಸದಾಗಿರುವ ಒಂದು ನಿದರ್ಶನವನ್ನೂ ಇನ್ನು ಯಾರೂ ಮಂಡಿಸಲಾರರು. ಇದು ವಿದ್ವಾಂಸರು ವಾದಿಸುತ್ತಿದ್ದ ಸಭಾಂಗಣದ ಭಾಷೆ, ಮತ್ತು ಈ ಹೆಮ್ಮೆ ದರ್ಶನದ ಬಗ್ಗೆಯಲ್ಲ, ವಿಶ್ಲೇಷಣೆಯ ಬಗ್ಗೆ — ಮೂರನ್ನು ತಿಳಿದವರು ಯಾರು ಏನನ್ನು ತಂದರೂ ತಿಳಿದಿದ್ದರು.\n\nಅವರನ್ನು 'ಮಹಾಶಾಲ'ರೆಂದು ಕರೆದಿರುವುದನ್ನೂ ಗಮನಿಸಿ. ಸಂನ್ಯಾಸಿಗಳಲ್ಲ, ವನವಾಸಿಗಳಲ್ಲ: ದೊಡ್ಡ ಮನೆಗಳವರು, ಆಸ್ತಿ ನಡೆಸುವವರು, ಅತಿಥಿಗಳನ್ನು ಸತ್ಕರಿಸುವವರು. ಸೂರ್ಯನನ್ನೇ ಕರಗಿಸುವ ಈ ಜ್ಞಾನವನ್ನು ಆಸ್ತಿಯೂ ಕರ್ತವ್ಯಗಳೂ ಇದ್ದವರ ಹೆಸರಿಗೆ ಬರೆಯಲಾಗಿದೆ.",
      },
      hi: {
        translation:
          "'यही जानकर पूर्वकाल के महाशाल और महाश्रोत्रिय कहा करते थे: अब हमारे सामने कोई भी अश्रुत, अमत, अविज्ञात वस्तु नहीं ला सकेगा — क्योंकि इन्हीं से उन्होंने सब जान लिया था।'",
        explanation:
          "६.१.३ का दावा अब चुकता होता है। वहाँ पिता ने पूछा था कि क्या श्वेतकेतु ने वह आदेश कभी माँगा जिससे अश्रुत श्रुत हो जाता है; यहाँ वे लोग हैं जिनके पास वह था, और यह भी कि उसका होना सुनने में कैसा लगता था।\n\nऔर वह किसी रहस्यमय अवस्था जैसा नहीं लगता। वह वाद-सभा के आत्मविश्वास जैसा लगता है: अब कोई ऐसा दृष्टांत नहीं ला सकेगा जो हमारे लिए नया हो। यह उस सभा की भाषा है जहाँ विद्वान् तर्क करते थे, और यह गर्व दर्शन का नहीं, विश्लेषण का है — तीन को जान लेने पर, कोई कुछ भी लाए, वे जानते थे।\n\nयह भी देखिए कि उन्हें 'महाशाल' कहा गया है। संन्यासी नहीं, वनवासी नहीं: बड़े घरों वाले, संपत्ति चलाने वाले, अतिथि-सत्कार करने वाले। सूर्य को घोल देने वाला यह ज्ञान संपत्ति और दायित्व वाले लोगों के नाम लिखा जा रहा है।",
      },
    },
  },

  {
    id: "chandogya-6-4-6",
    locator: "6.4.6",
    handle: {
      en: "Whatever looked red",
      kn: "ಕೆಂಪಾಗಿ ಕಂಡದ್ದೆಲ್ಲ",
      hi: "जो कुछ लाल-सा दिखा",
    },
    sanskrit: [
      "यदु रोहितमिवाभूदिति तेजसस्तद्रूपमिति तद्विदांचक्रुर्",
      "यदु शुक्लमिवाभूदित्यपां रूपमिति तद्विदांचक्रुर्",
      "यदु कृष्णमिवाभूदित्यन्नस्य रूपमिति तद्विदांचक्रुः ॥",
    ],
    iast: [
      "yad u rohitam ivābhūd iti tejasas tad rūpam iti tad vidāṃcakrur",
      "yad u śuklam ivābhūd ity apāṃ rūpam iti tad vidāṃcakrur",
      "yad u kṛṣṇam ivābhūd ity annasya rūpam iti tad vidāṃcakruḥ ||",
    ],
    keywords: [
      {
        term: "इव",
        iast: "iva",
        gloss: {
          en: "as it were, -ish — the word that keeps the appearance honest",
          kn: "ಎಂಬಂತೆ, ಹಾಗೆ ಕಂಡಿತು — ತೋರಿಕೆಯನ್ನು ಪ್ರಾಮಾಣಿಕವಾಗಿಡುವ ಪದ",
          hi: "-सा, मानो — वह शब्द जो आभास को ईमानदार रखता है",
        },
      },
      {
        term: "विदांचक्रुः",
        iast: "vidāṃcakruḥ",
        gloss: {
          en: "they came to know it, they made it known to themselves",
          kn: "ಅವರು ಅದನ್ನು ತಿಳಿದುಕೊಂಡರು",
          hi: "उन्होंने उसे जान लिया",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'Whatever looked red, they knew to be the form of heat. Whatever looked white, they knew to be the form of water. Whatever looked black, they knew to be the form of food.'",
        explanation:
          "The method restated as a practice rather than a doctrine. Confronted with anything at all, those men ran the same three-way sort: red to heat, white to water, black to food. Nothing was ever wholly new, because everything decomposed into terms already known.\n\nThe small word iva is what makes the sentence precise. Not 'what was red' but 'what looked red' — appeared reddish. The colour is where analysis starts, not where truth stops. The pot is still there; it is just no longer the last word about the clay.",
      },
      kn: {
        translation:
          "'ಕೆಂಪಾಗಿ ಕಂಡದ್ದನ್ನೆಲ್ಲ ತೇಜಸ್ಸಿನ ರೂಪವೆಂದು ಅವರು ತಿಳಿದರು. ಬಿಳಿಯಾಗಿ ಕಂಡದ್ದನ್ನೆಲ್ಲ ನೀರಿನ ರೂಪವೆಂದು ತಿಳಿದರು. ಕಪ್ಪಾಗಿ ಕಂಡದ್ದನ್ನೆಲ್ಲ ಅನ್ನದ ರೂಪವೆಂದು ತಿಳಿದರು.'",
        explanation:
          "ವಿಧಾನವನ್ನು ಸಿದ್ಧಾಂತವಾಗಿ ಅಲ್ಲ, ಆಚರಣೆಯಾಗಿ ಮತ್ತೆ ಹೇಳಲಾಗಿದೆ. ಏನೇ ಎದುರಾದರೂ ಆ ಜನ ಅದೇ ಮೂರುಪಟ್ಟಿನ ವಿಂಗಡಣೆಯನ್ನು ನಡೆಸುತ್ತಿದ್ದರು: ಕೆಂಪು ತೇಜಸ್ಸಿಗೆ, ಬಿಳಿ ನೀರಿಗೆ, ಕಪ್ಪು ಅನ್ನಕ್ಕೆ. ಯಾವುದೂ ಸಂಪೂರ್ಣ ಹೊಸದಾಗಿರಲಿಲ್ಲ, ಏಕೆಂದರೆ ಎಲ್ಲವೂ ಈಗಾಗಲೇ ತಿಳಿದ ಪದಗಳಾಗಿ ಬಿಡಿಯಾಗುತ್ತಿತ್ತು.\n\n'ಇವ' ಎಂಬ ಸಣ್ಣ ಪದವೇ ವಾಕ್ಯವನ್ನು ನಿಖರಗೊಳಿಸುತ್ತದೆ. 'ಕೆಂಪಾಗಿತ್ತು' ಅಲ್ಲ, 'ಕೆಂಪಾಗಿ ಕಂಡಿತು' — ಕೆಂಪಿನಂತೆ ತೋರಿತು. ಬಣ್ಣ ವಿಶ್ಲೇಷಣೆ ಆರಂಭವಾಗುವ ಸ್ಥಳ, ಸತ್ಯ ನಿಲ್ಲುವ ಸ್ಥಳವಲ್ಲ. ಮಡಕೆ ಇನ್ನೂ ಇದೆ; ಅದು ಮಣ್ಣಿನ ಬಗ್ಗೆ ಕೊನೆಯ ಮಾತಾಗಿ ಉಳಿದಿಲ್ಲ, ಅಷ್ಟೇ.",
      },
      hi: {
        translation:
          "'जो कुछ लाल-सा दिखा, उसे उन्होंने तेज का रूप जाना। जो श्वेत-सा दिखा, उसे जल का रूप जाना। जो कृष्ण-सा दिखा, उसे अन्न का रूप जाना।'",
        explanation:
          "पद्धति को सिद्धांत की तरह नहीं, अभ्यास की तरह फिर से कहा गया है। कुछ भी सामने आए, वे लोग वही तीन-तरफ़ा छँटाई चलाते थे: लाल तेज को, श्वेत जल को, कृष्ण अन्न को। कुछ भी पूरी तरह नया नहीं था, क्योंकि सब कुछ पहले से ज्ञात पदों में खुल जाता था।\n\nछोटा-सा शब्द 'इव' ही वाक्य को सटीक बनाता है। 'जो लाल था' नहीं, 'जो लाल-सा दिखा' — लाल जैसा प्रतीत हुआ। रंग वह जगह है जहाँ विश्लेषण आरंभ होता है, वह नहीं जहाँ सत्य रुक जाता है। घड़ा अब भी है; वह बस मिट्टी के विषय में अंतिम शब्द नहीं रहा।",
      },
    },
  },

  {
    id: "chandogya-6-4-7",
    locator: "6.4.7",
    handle: {
      en: "And whatever looked unknown",
      kn: "ತಿಳಿಯದಂತೆ ಕಂಡದ್ದು",
      hi: "और जो अज्ञात-सा दिखा",
    },
    sanskrit: [
      "यदविज्ञातमिवाभूदित्येतासामेव देवतानां",
      "समास इति तद्विदांचक्रुः ।",
      "यथा तु खलु सोम्येमास्तिस्रो देवताः पुरुषं प्राप्य",
      "त्रिवृत्त्रिवृदेकैका भवति तन्मे विजानीहीति ॥",
    ],
    iast: [
      "yad avijñātam ivābhūd ity etāsām eva devatānāṃ",
      "samāsa iti tad vidāṃcakruḥ |",
      "yathā tu khalu somyemās tisro devatāḥ puruṣaṃ prāpya",
      "trivṛt trivṛd ekaikā bhavati tan me vijānīhīti ||",
    ],
    keywords: [
      {
        term: "समासः",
        iast: "samāsaḥ",
        gloss: {
          en: "a combination, a compounding of the three",
          kn: "ಸಮಾಸ, ಮೂರರ ಕೂಡಿಕೆ",
          hi: "समास, तीनों का संयोग",
        },
      },
      {
        term: "पुरुषं प्राप्य",
        iast: "puruṣaṃ prāpya",
        gloss: {
          en: "on reaching a person — the turn from the sky to the body",
          kn: "ಪುರುಷನನ್ನು ತಲುಪಿ — ಆಕಾಶದಿಂದ ಶರೀರದತ್ತ ತಿರುವು",
          hi: "पुरुष तक पहुँचकर — आकाश से शरीर की ओर मोड़",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'And whatever looked unknown, they knew to be a combination of these very deities. Now learn from me, my dear, how these three deities, on reaching a person, each become threefold.'",
        explanation:
          "This is the sentence that completes the method. The first three cases were easy — red, white, black. This one takes the residue: whatever did not sort, whatever looked like nothing you recognised. It is not left as an exception. It is a combination of the same three, mixed past the point where any one strand shows.\n\nWith that, the analysis is closed. There is no fourth thing, no leftover category, nothing outside the account — which is what a real explanation has to achieve and what most fail at.\n\nAnd then, in the second half of the line, the direction changes. Puruṣaṃ prāpya — on reaching a person. Everything so far has been outside the student: pots, gold, fire, sun, moon, lightning. From here the same three are traced into a body, and they will not leave it again until the end of the chapter.",
      },
      kn: {
        translation:
          "'ತಿಳಿಯದಂತೆ ಕಂಡದ್ದನ್ನೆಲ್ಲ ಈ ದೇವತೆಗಳ ಸಮಾಸವೆಂದೇ ಅವರು ತಿಳಿದರು. ಈಗ ಪ್ರಿಯನೇ, ಈ ಮೂರು ದೇವತೆಗಳು ಪುರುಷನನ್ನು ತಲುಪಿ ಹೇಗೆ ಪ್ರತಿಯೊಂದೂ ತ್ರಿವೃತ್ ಆಗುತ್ತದೆ ಎಂಬುದನ್ನು ನನ್ನಿಂದ ತಿಳಿ.'",
        explanation:
          "ವಿಧಾನವನ್ನು ಪೂರ್ಣಗೊಳಿಸುವ ವಾಕ್ಯ ಇದು. ಮೊದಲ ಮೂರು ಪ್ರಕರಣ ಸುಲಭವಾಗಿದ್ದವು — ಕೆಂಪು, ಬಿಳಿ, ಕಪ್ಪು. ಇದು ಉಳಿಕೆಯನ್ನು ಎತ್ತಿಕೊಳ್ಳುತ್ತದೆ: ವಿಂಗಡಣೆಗೆ ಸಿಗದ್ದು, ಗುರುತಿಸಲಾಗದಂತೆ ಕಂಡದ್ದು. ಅದನ್ನು ವಿನಾಯಿತಿಯಾಗಿ ಬಿಟ್ಟಿಲ್ಲ. ಅದು ಅದೇ ಮೂರರ ಸಮಾಸ, ಯಾವ ಎಳೆಯೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಕಾಣದಷ್ಟು ಬೆರೆತದ್ದು.\n\nಅದರೊಂದಿಗೆ ವಿಶ್ಲೇಷಣೆ ಮುಚ್ಚಿತು. ನಾಲ್ಕನೆಯದೇನೂ ಇಲ್ಲ, ಉಳಿದ ವರ್ಗವಿಲ್ಲ, ಲೆಕ್ಕದ ಹೊರಗೆ ಏನೂ ಇಲ್ಲ — ನಿಜವಾದ ವಿವರಣೆ ಸಾಧಿಸಬೇಕಾದದ್ದು ಇದನ್ನೇ, ಮತ್ತು ಬಹುತೇಕ ವಿವರಣೆಗಳು ಸೋಲುವುದೂ ಇಲ್ಲಿಯೇ.\n\nಆಮೇಲೆ ಸಾಲಿನ ಎರಡನೆಯ ಅರ್ಧದಲ್ಲಿ ದಿಕ್ಕು ಬದಲಾಗುತ್ತದೆ. 'ಪುರುಷಂ ಪ್ರಾಪ್ಯ' — ಪುರುಷನನ್ನು ತಲುಪಿ. ಇಲ್ಲಿಯವರೆಗಿನ ಎಲ್ಲವೂ ಶಿಷ್ಯನ ಹೊರಗಿತ್ತು: ಮಡಕೆ, ಚಿನ್ನ, ಬೆಂಕಿ, ಸೂರ್ಯ, ಚಂದ್ರ, ಮಿಂಚು. ಇಲ್ಲಿಂದ ಅದೇ ಮೂರನ್ನು ಶರೀರದೊಳಗೆ ಜಾಡುಹಿಡಿಯಲಾಗುತ್ತದೆ, ಮತ್ತು ಅಧ್ಯಾಯ ಮುಗಿಯುವವರೆಗೆ ಅವು ಅಲ್ಲಿಂದ ಹೊರಡುವುದಿಲ್ಲ.",
      },
      hi: {
        translation:
          "'और जो कुछ अज्ञात-सा दिखा, उसे उन्होंने इन्हीं देवताओं का समास जाना। अब हे सौम्य, मुझसे जानो कि ये तीन देवता पुरुष तक पहुँचकर किस प्रकार प्रत्येक त्रिवृत् हो जाते हैं।'",
        explanation:
          "यही वाक्य पद्धति को पूरा करता है। पहले तीन उदाहरण आसान थे — लाल, श्वेत, कृष्ण। यह बचे हुए को उठाता है: जो छँटाई में न आया, जो किसी पहचानी वस्तु जैसा न लगा। उसे अपवाद नहीं छोड़ा गया। वह उन्हीं तीन का समास है, इतना मिला हुआ कि कोई एक लट अलग नहीं दिखती।\n\nइसी के साथ विश्लेषण बंद हो जाता है। कोई चौथी वस्तु नहीं, कोई बची हुई श्रेणी नहीं, हिसाब के बाहर कुछ नहीं — असली व्याख्या को यही करना होता है, और अधिकांश व्याख्याएँ यहीं चूकती हैं।\n\nऔर फिर पंक्ति के दूसरे आधे में दिशा बदल जाती है। 'पुरुषं प्राप्य' — पुरुष तक पहुँचकर। अब तक सब कुछ शिष्य के बाहर था: घड़ा, सोना, अग्नि, सूर्य, चंद्र, विद्युत्। यहाँ से वही तीन एक शरीर के भीतर खोजे जाते हैं, और अध्याय के अंत तक वे उसे छोड़कर नहीं जाते।",
      },
    },
  },

  {
    id: "chandogya-6-5-1",
    locator: "6.5.1",
    handle: {
      en: "Food eaten, divided three ways",
      kn: "ತಿಂದ ಅನ್ನ ಮೂರಾಗಿ ಹಂಚಿಕೆ",
      hi: "खाया अन्न तीन में बँटता है",
    },
    sanskrit: [
      "अन्नमशितं त्रेधा विधीयते ।",
      "तस्य यः स्थविष्ठो धातुस्तत्पुरीषं भवति",
      "यो मध्यमस्तन्मांसं योऽणिष्ठस्तन्मनः ॥",
    ],
    iast: [
      "annam aśitaṃ tredhā vidhīyate |",
      "tasya yaḥ sthaviṣṭho dhātus tat purīṣaṃ bhavati",
      "yo madhyamas tan māṃsaṃ yo 'ṇiṣṭhas tan manaḥ ||",
    ],
    keywords: [
      {
        term: "स्थविष्ठः",
        iast: "sthaviṣṭhaḥ",
        gloss: {
          en: "the coarsest, the grossest part",
          kn: "ಅತ್ಯಂತ ಸ್ಥೂಲವಾದ ಭಾಗ",
          hi: "सबसे स्थूल भाग",
        },
      },
      {
        term: "अणिष्ठः",
        iast: "aṇiṣṭhaḥ",
        gloss: {
          en: "the subtlest, the finest part — the word aṇiman will return at 6.12",
          kn: "ಅತ್ಯಂತ ಸೂಕ್ಷ್ಮ ಭಾಗ — 'ಅಣಿಮನ್' ಪದ ೬.೧೨ರಲ್ಲಿ ಮರಳುತ್ತದೆ",
          hi: "सबसे सूक्ष्म भाग — 'अणिमन्' शब्द ६.१२ में लौटेगा",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'Food that is eaten is divided three ways. Its coarsest part becomes faeces; the middling becomes flesh; the subtlest becomes mind.'",
        explanation:
          "The turn to the body is immediate and unsqueamish. What you ate goes three ways, and the text names the lowest outcome first and without euphemism.\n\nThe point is the range, not the shock. One meal produces waste, tissue and thought, and the difference between them is fineness — sthaviṣṭha to aṇiṣṭha, coarsest to subtlest, along one scale. Mind is not imported from elsewhere to sit on top of the body. It is what happens to the finest part of dinner.\n\nSaid that flatly it sounds reductive, and in this chapter it is the opposite. The elements were traced from Being in 6.2; if the mind is the subtlest part of food, and food came from water, and water from heat, and heat from that which was one without a second, then thinking is not a foreign visitor in the world. It is the same substance at its thinnest.",
      },
      kn: {
        translation:
          "'ತಿಂದ ಅನ್ನ ಮೂರು ರೀತಿಯಲ್ಲಿ ಹಂಚಿಹೋಗುತ್ತದೆ. ಅದರ ಅತ್ಯಂತ ಸ್ಥೂಲ ಭಾಗ ಮಲವಾಗುತ್ತದೆ; ಮಧ್ಯಮವಾದದ್ದು ಮಾಂಸವಾಗುತ್ತದೆ; ಅತ್ಯಂತ ಸೂಕ್ಷ್ಮವಾದದ್ದು ಮನಸ್ಸಾಗುತ್ತದೆ.'",
        explanation:
          "ಶರೀರದತ್ತ ತಿರುವು ತಕ್ಷಣದ್ದು ಮತ್ತು ಅಸಹ್ಯಪಡದದ್ದು. ನೀವು ತಿಂದದ್ದು ಮೂರು ದಿಕ್ಕಿಗೆ ಹೋಗುತ್ತದೆ, ಮತ್ತು ಪಠ್ಯ ಅತ್ಯಂತ ಕೆಳಗಿನ ಫಲಿತಾಂಶವನ್ನೇ ಮೊದಲು, ಯಾವ ಸೌಮ್ಯೋಕ್ತಿಯೂ ಇಲ್ಲದೆ ಹೆಸರಿಸುತ್ತದೆ.\n\nಮುಖ್ಯವಾದದ್ದು ಆಘಾತವಲ್ಲ, ವ್ಯಾಪ್ತಿ. ಒಂದೇ ಊಟದಿಂದ ಮಲ, ಮಾಂಸ ಮತ್ತು ಆಲೋಚನೆ ಹುಟ್ಟುತ್ತವೆ, ಮತ್ತು ಅವುಗಳ ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಸೂಕ್ಷ್ಮತೆಯದು — ಸ್ಥವಿಷ್ಠದಿಂದ ಅಣಿಷ್ಠದವರೆಗೆ, ಒಂದೇ ಮಾಪನದ ಮೇಲೆ. ಮನಸ್ಸನ್ನು ಬೇರೆಲ್ಲಿಂದಲೋ ತಂದು ಶರೀರದ ಮೇಲೆ ಕೂರಿಸಿಲ್ಲ. ಅದು ಊಟದ ಅತ್ಯಂತ ಸೂಕ್ಷ್ಮ ಭಾಗಕ್ಕೆ ಆಗುವುದು.\n\nಹಾಗೆ ಸಪಾಟಾಗಿ ಹೇಳಿದರೆ ಇದು ಸಂಕುಚಿತವೆನಿಸೀತು, ಆದರೆ ಈ ಅಧ್ಯಾಯದಲ್ಲಿ ಅದರ ವಿರುದ್ಧವೇ ನಿಜ. ೬.೨ರಲ್ಲಿ ತತ್ತ್ವಗಳನ್ನು ಸತ್ತಿನಿಂದ ಜಾಡುಹಿಡಿಯಲಾಗಿತ್ತು; ಮನಸ್ಸು ಅನ್ನದ ಅತ್ಯಂತ ಸೂಕ್ಷ್ಮ ಭಾಗವಾದರೆ, ಅನ್ನ ನೀರಿನಿಂದ, ನೀರು ತೇಜಸ್ಸಿನಿಂದ, ತೇಜಸ್ಸು ಎರಡನೆಯದಿಲ್ಲದ ಒಂದರಿಂದ ಬಂದಿದ್ದರೆ — ಆಲೋಚನೆ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಪರದೇಶಿ ಅತಿಥಿಯಲ್ಲ. ಅದೇ ವಸ್ತು, ಅತ್ಯಂತ ತೆಳುವಾದಲ್ಲಿ.",
      },
      hi: {
        translation:
          "'खाया हुआ अन्न तीन प्रकार से बँटता है। उसका सबसे स्थूल भाग मल बनता है; मध्यम भाग मांस बनता है; सबसे सूक्ष्म भाग मन बनता है।'",
        explanation:
          "शरीर की ओर मोड़ तत्काल है और घिन से मुक्त। जो आपने खाया वह तीन दिशाओं में जाता है, और पाठ सबसे निचले परिणाम को ही पहले, बिना किसी शिष्ट-वचन के, नाम देता है।\n\nबात आघात की नहीं, विस्तार की है। एक भोजन से मल, मांस और विचार बनते हैं, और उनके बीच का अंतर सूक्ष्मता का है — स्थविष्ठ से अणिष्ठ तक, एक ही मापदंड पर। मन को कहीं और से लाकर शरीर के ऊपर नहीं बिठाया गया। वह भोजन के सूक्ष्मतम भाग के साथ जो होता है, वही है।\n\nइतने सपाट ढंग से कहने पर यह न्यूनीकरण लगता है, जबकि इस अध्याय में उलटा सच है। ६.२ में तत्त्वों को सत् से खोजा गया था; यदि मन अन्न का सूक्ष्मतम भाग है, और अन्न जल से आया, जल तेज से, और तेज उस एक अद्वितीय से — तो विचार इस संसार में परदेशी अतिथि नहीं। वह वही वस्तु है, अपने सबसे महीन रूप में।",
      },
    },
  },

  {
    id: "chandogya-6-5-2",
    locator: "6.5.2",
    handle: {
      en: "Water drunk, divided three ways",
      kn: "ಕುಡಿದ ನೀರು ಮೂರಾಗಿ",
      hi: "पिया जल तीन में",
    },
    sanskrit: [
      "आपः पीतास्त्रेधा विधीयन्ते ।",
      "तासां यः स्थविष्ठो धातुस्तन्मूत्रं भवति",
      "यो मध्यमस्तल्लोहितं योऽणिष्ठः स प्राणः ॥",
    ],
    iast: [
      "āpaḥ pītās tredhā vidhīyante |",
      "tāsāṃ yaḥ sthaviṣṭho dhātus tan mūtraṃ bhavati",
      "yo madhyamas tal lohitaṃ yo 'ṇiṣṭhaḥ sa prāṇaḥ ||",
    ],
    keywords: [
      {
        term: "लोहितम्",
        iast: "lohitam",
        gloss: {
          en: "blood — literally, the red",
          kn: "ರಕ್ತ — ಅಕ್ಷರಶಃ, ಕೆಂಪಾದದ್ದು",
          hi: "रक्त — शब्दशः, लाल",
        },
      },
      {
        term: "प्राणः",
        iast: "prāṇaḥ",
        gloss: {
          en: "breath, the living force — here the subtlest part of what is drunk",
          kn: "ಪ್ರಾಣ, ಜೀವಶಕ್ತಿ — ಇಲ್ಲಿ ಕುಡಿದದ್ದರ ಅತ್ಯಂತ ಸೂಕ್ಷ್ಮ ಭಾಗ",
          hi: "प्राण, जीवनशक्ति — यहाँ पिए हुए का सूक्ष्मतम भाग",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'Water that is drunk is divided three ways. Its coarsest part becomes urine; the middling becomes blood; the subtlest becomes breath.'",
        explanation:
          "The same three-way division, run on the second element. Water gives urine, blood and breath, in the same order of coarse to fine.\n\nThe middle term is the one that convinces. Blood is mostly water, and anyone who has ever bled knows it — this is not a doctrine imposed on the body but a reading taken from it. Having earned that, the text can make the harder claim at the fine end: breath too comes from what you drink.\n\nThe pattern being built is exact and it will be used. Each of the three elements yields something gross, something bodily and something alive; the three subtle products — mind, breath, speech — are the three that 6.7 will put to a fifteen-day test.",
      },
      kn: {
        translation:
          "'ಕುಡಿದ ನೀರು ಮೂರು ರೀತಿಯಲ್ಲಿ ಹಂಚಿಹೋಗುತ್ತದೆ. ಅದರ ಅತ್ಯಂತ ಸ್ಥೂಲ ಭಾಗ ಮೂತ್ರವಾಗುತ್ತದೆ; ಮಧ್ಯಮವಾದದ್ದು ರಕ್ತವಾಗುತ್ತದೆ; ಅತ್ಯಂತ ಸೂಕ್ಷ್ಮವಾದದ್ದು ಪ್ರಾಣವಾಗುತ್ತದೆ.'",
        explanation:
          "ಅದೇ ಮೂರುಪಟ್ಟಿನ ವಿಭಜನೆ, ಎರಡನೆಯ ತತ್ತ್ವದ ಮೇಲೆ ನಡೆಸಿದ್ದು. ನೀರು ಮೂತ್ರ, ರಕ್ತ ಮತ್ತು ಪ್ರಾಣವನ್ನು ಕೊಡುತ್ತದೆ, ಸ್ಥೂಲದಿಂದ ಸೂಕ್ಷ್ಮದವರೆಗಿನ ಅದೇ ಕ್ರಮದಲ್ಲಿ.\n\nಮನವೊಲಿಸುವುದು ಮಧ್ಯದ ಪದ. ರಕ್ತ ಬಹುಪಾಲು ನೀರೇ, ಮತ್ತು ಎಂದಾದರೂ ರಕ್ತ ಸುರಿಸಿದವರಿಗೆ ಅದು ಗೊತ್ತು — ಇದು ಶರೀರದ ಮೇಲೆ ಹೇರಿದ ಸಿದ್ಧಾಂತವಲ್ಲ, ಶರೀರದಿಂದಲೇ ಪಡೆದ ಓದು. ಅದನ್ನು ಗಳಿಸಿದ ಮೇಲೆ ಪಠ್ಯ ಸೂಕ್ಷ್ಮ ತುದಿಯಲ್ಲಿನ ಕಠಿಣ ಹೇಳಿಕೆಯನ್ನು ಮಾಡಬಲ್ಲದು: ಪ್ರಾಣವೂ ನೀವು ಕುಡಿಯುವುದರಿಂದಲೇ ಬರುತ್ತದೆ.\n\nಕಟ್ಟಲಾಗುತ್ತಿರುವ ಮಾದರಿ ನಿಖರವಾದದ್ದು ಮತ್ತು ಬಳಕೆಗೆ ಬರುವಂಥದ್ದು. ಮೂರೂ ತತ್ತ್ವಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಸ್ಥೂಲವಾದದ್ದನ್ನು, ಶಾರೀರಿಕವಾದದ್ದನ್ನು ಮತ್ತು ಜೀವಂತವಾದದ್ದನ್ನು ಕೊಡುತ್ತದೆ; ಆ ಮೂರು ಸೂಕ್ಷ್ಮ ಫಲಗಳು — ಮನಸ್ಸು, ಪ್ರಾಣ, ವಾಕ್ — ೬.೭ ಹದಿನೈದು ದಿನಗಳ ಪರೀಕ್ಷೆಗೆ ಒಡ್ಡಲಿರುವ ಮೂರೇ.",
      },
      hi: {
        translation:
          "'पिया हुआ जल तीन प्रकार से बँटता है। उसका सबसे स्थूल भाग मूत्र बनता है; मध्यम भाग रक्त बनता है; सबसे सूक्ष्म भाग प्राण बनता है।'",
        explanation:
          "वही तीन-तरफ़ा विभाजन, दूसरे तत्त्व पर चलाया गया। जल मूत्र, रक्त और प्राण देता है, स्थूल से सूक्ष्म के उसी क्रम में।\n\nजो बात मनवाती है वह बीच का पद है। रक्त अधिकांशतः जल ही है, और जिसका कभी रक्त बहा हो वह जानता है — यह शरीर पर थोपा गया सिद्धांत नहीं, शरीर से लिया गया पाठ है। इसे अर्जित कर लेने पर पाठ सूक्ष्म छोर की कठिन बात कह सकता है: प्राण भी उसी से आता है जो आप पीते हैं।\n\nजो ढाँचा बन रहा है वह सटीक है और काम आने वाला है। तीनों तत्त्वों में से हर एक कुछ स्थूल, कुछ शारीरिक और कुछ जीवंत देता है; वे तीन सूक्ष्म उत्पाद — मन, प्राण, वाक् — वही हैं जिन्हें ६.७ पंद्रह दिन की परीक्षा पर चढ़ाएगा।",
      },
    },
  },

  {
    id: "chandogya-6-5-3",
    locator: "6.5.3",
    handle: {
      en: "Heat taken in, divided three ways",
      kn: "ಸೇವಿಸಿದ ತೇಜಸ್ಸು ಮೂರಾಗಿ",
      hi: "ग्रहण किया तेज तीन में",
    },
    sanskrit: [
      "तेजोऽशितं त्रेधा विधीयते ।",
      "तस्य यः स्थविष्ठो धातुस्तदस्थि भवति",
      "यो मध्यमः स मज्जा योऽणिष्ठः सा वाक् ॥",
    ],
    iast: [
      "tejo 'śitaṃ tredhā vidhīyate |",
      "tasya yaḥ sthaviṣṭho dhātus tad asthi bhavati",
      "yo madhyamaḥ sa majjā yo 'ṇiṣṭhaḥ sā vāk ||",
    ],
    keywords: [
      {
        term: "मज्जा",
        iast: "majjā",
        gloss: {
          en: "marrow — what the bone holds",
          kn: "ಮಜ್ಜೆ — ಎಲುಬು ಹಿಡಿದಿಟ್ಟಿರುವುದು",
          hi: "मज्जा — जो अस्थि भीतर रखती है",
        },
      },
      {
        term: "वाक्",
        iast: "vāk",
        gloss: {
          en: "speech — the subtlest product of heat",
          kn: "ವಾಕ್ — ತೇಜಸ್ಸಿನ ಅತ್ಯಂತ ಸೂಕ್ಷ್ಮ ಫಲ",
          hi: "वाक् — तेज का सूक्ष्मतम उत्पाद",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'Heat that is taken in is divided three ways. Its coarsest part becomes bone; the middling becomes marrow; the subtlest becomes speech.'",
        explanation:
          "The third and last of the divisions, and the least expected: heat becomes bone, marrow and speech. The gross end is strange — one does not think of a skeleton as fire — and the fine end is stranger still.\n\nBut speech and fire have a real connection in Vedic thought, and it is not merely poetic: what is spoken carries force, cooks, burns, purifies, and Agni is the mouth of the gods. Putting vāk at the subtle end of tejas is of a piece with a tradition that treats the word as something that acts rather than merely describes.\n\nWith this the table is complete. Nine products from three intakes, and the three subtlest of them are the ones this chapter cares about — mind from food, breath from water, speech from heat. The next section states just that, and does it in a single line.",
      },
      kn: {
        translation:
          "'ಸೇವಿಸಿದ ತೇಜಸ್ಸು ಮೂರು ರೀತಿಯಲ್ಲಿ ಹಂಚಿಹೋಗುತ್ತದೆ. ಅದರ ಅತ್ಯಂತ ಸ್ಥೂಲ ಭಾಗ ಎಲುಬಾಗುತ್ತದೆ; ಮಧ್ಯಮವಾದದ್ದು ಮಜ್ಜೆಯಾಗುತ್ತದೆ; ಅತ್ಯಂತ ಸೂಕ್ಷ್ಮವಾದದ್ದು ವಾಕ್ ಆಗುತ್ತದೆ.'",
        explanation:
          "ಮೂರನೆಯ ಮತ್ತು ಕೊನೆಯ ವಿಭಜನೆ, ಮತ್ತು ಅತ್ಯಂತ ಅನಿರೀಕ್ಷಿತವಾದದ್ದು: ತೇಜಸ್ಸು ಎಲುಬು, ಮಜ್ಜೆ ಮತ್ತು ವಾಕ್ ಆಗುತ್ತದೆ. ಸ್ಥೂಲ ತುದಿ ವಿಚಿತ್ರ — ಅಸ್ಥಿಪಂಜರವನ್ನು ಬೆಂಕಿಯೆಂದು ಯಾರೂ ಭಾವಿಸುವುದಿಲ್ಲ — ಮತ್ತು ಸೂಕ್ಷ್ಮ ತುದಿ ಇನ್ನೂ ವಿಚಿತ್ರ.\n\nಆದರೆ ವೈದಿಕ ಚಿಂತನೆಯಲ್ಲಿ ವಾಕ್ಕಿಗೂ ಅಗ್ನಿಗೂ ನಿಜವಾದ ಸಂಬಂಧವಿದೆ, ಮತ್ತು ಅದು ಕೇವಲ ಕಾವ್ಯಾತ್ಮಕವಲ್ಲ: ಆಡಿದ ಮಾತು ಬಲ ಹೊತ್ತೊಯ್ಯುತ್ತದೆ, ಬೇಯಿಸುತ್ತದೆ, ಸುಡುತ್ತದೆ, ಶುದ್ಧಗೊಳಿಸುತ್ತದೆ; ಅಗ್ನಿಯೇ ದೇವತೆಗಳ ಬಾಯಿ. ವಾಕ್ಕನ್ನು ತೇಜಸ್ಸಿನ ಸೂಕ್ಷ್ಮ ತುದಿಯಲ್ಲಿ ಇರಿಸುವುದು, ಪದವನ್ನು ಬರಿಯ ವರ್ಣನೆಯಲ್ಲ ಕ್ರಿಯೆಯೆಂದು ಪರಿಗಣಿಸುವ ಪರಂಪರೆಗೆ ಸರಿಹೊಂದುತ್ತದೆ.\n\nಇದರೊಂದಿಗೆ ಪಟ್ಟಿ ಪೂರ್ಣ. ಮೂರು ಸೇವನೆಗಳಿಂದ ಒಂಬತ್ತು ಫಲಗಳು, ಮತ್ತು ಅವುಗಳಲ್ಲಿ ಅತ್ಯಂತ ಸೂಕ್ಷ್ಮವಾದ ಮೂರೇ ಈ ಅಧ್ಯಾಯಕ್ಕೆ ಮುಖ್ಯ — ಅನ್ನದಿಂದ ಮನಸ್ಸು, ನೀರಿನಿಂದ ಪ್ರಾಣ, ತೇಜಸ್ಸಿನಿಂದ ವಾಕ್. ಮುಂದಿನ ಭಾಗ ಅದನ್ನೇ, ಒಂದೇ ಸಾಲಿನಲ್ಲಿ ಹೇಳುತ್ತದೆ.",
      },
      hi: {
        translation:
          "'ग्रहण किया हुआ तेज तीन प्रकार से बँटता है। उसका सबसे स्थूल भाग अस्थि बनता है; मध्यम भाग मज्जा बनता है; सबसे सूक्ष्म भाग वाक् बनता है।'",
        explanation:
          "तीसरा और अंतिम विभाजन, और सबसे अप्रत्याशित: तेज अस्थि, मज्जा और वाक् बनता है। स्थूल छोर विचित्र है — कंकाल को कोई अग्नि नहीं समझता — और सूक्ष्म छोर उससे भी विचित्र।\n\nपर वैदिक चिंतन में वाक् और अग्नि का वास्तविक संबंध है, और वह केवल काव्यात्मक नहीं: कहा हुआ शब्द बल ढोता है, पकाता है, जलाता है, शुद्ध करता है; और अग्नि देवताओं का मुख है। वाक् को तेज के सूक्ष्म छोर पर रखना उस परंपरा से मेल खाता है जो शब्द को केवल वर्णन नहीं, कर्म मानती है।\n\nइसी के साथ तालिका पूरी होती है। तीन ग्रहणों से नौ उत्पाद, और उनमें से सूक्ष्मतम तीन ही इस अध्याय के काम के हैं — अन्न से मन, जल से प्राण, तेज से वाक्। अगला खंड यही बात, एक ही पंक्ति में कहता है।",
      },
    },
  },

  {
    id: "chandogya-6-5-4",
    locator: "6.5.4",
    handle: {
      en: "Mind is made of food",
      kn: "ಮನಸ್ಸು ಅನ್ನಮಯ",
      hi: "मन अन्नमय है",
    },
    sanskrit: [
      "अन्नमयं हि सोम्य मन आपोमयः प्राणस्",
      "तेजोमयी वागिति ।",
      "भूय एव मा भगवान्विज्ञापयत्विति ।",
      "तथा सोम्येति होवाच ॥",
    ],
    iast: [
      "annamayaṃ hi somya mana āpomayaḥ prāṇas",
      "tejomayī vāg iti |",
      "bhūya eva mā bhagavān vijñāpayatv iti |",
      "tathā somyeti hovāca ||",
    ],
    keywords: [
      {
        term: "अन्नमयम्",
        iast: "annamayam",
        gloss: {
          en: "made of food, consisting of food",
          kn: "ಅನ್ನದಿಂದಾದದ್ದು, ಅನ್ನಮಯ",
          hi: "अन्न से बना, अन्नमय",
        },
      },
      {
        term: "भूय एव",
        iast: "bhūya eva",
        gloss: {
          en: "still more — the student's standing request through this chapter",
          kn: "ಇನ್ನೂ ಹೆಚ್ಚು — ಈ ಅಧ್ಯಾಯದುದ್ದಕ್ಕೂ ಶಿಷ್ಯನ ನಿಂತ ಬೇಡಿಕೆ",
          hi: "और भी — इस अध्याय भर शिष्य की स्थायी याचना",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'Mind, my dear, is made of food; breath is made of water; speech is made of heat.' 'Teach me still more, sir.' 'So be it, my dear,' he said.",
        explanation:
          "The nine products are compressed to the three that matter, and the sentence is as bald as a formula: mind is food, breath is water, speech is fire.\n\nWhat makes this the pivot of the whole chapter is that all three are things the student experiences as himself. He is not being told about elements any more. He is being told what he is currently doing — thinking, breathing, speaking — and where each of those comes from.\n\nAnd then the refrain arrives for the first time: bhūya eva mā bhagavān vijñāpayatu, teach me still more. It will close nearly every khaṇḍa from here on. The boy who thought his education was finished at 6.1.2 now cannot stop asking, and the father's answer is always the same two words.",
      },
      kn: {
        translation:
          "'ಪ್ರಿಯನೇ, ಮನಸ್ಸು ಅನ್ನಮಯ; ಪ್ರಾಣ ಆಪೋಮಯ; ವಾಕ್ ತೇಜೋಮಯೀ.' 'ಸ್ವಾಮಿ, ಇನ್ನೂ ಹೆಚ್ಚು ತಿಳಿಸಿ.' 'ಹಾಗೇ ಆಗಲಿ, ಪ್ರಿಯನೇ' ಎಂದನು.",
        explanation:
          "ಒಂಬತ್ತು ಫಲಗಳನ್ನು ಮುಖ್ಯವಾದ ಮೂರಕ್ಕೆ ಒತ್ತಲಾಗಿದೆ, ಮತ್ತು ವಾಕ್ಯ ಸೂತ್ರದಷ್ಟೇ ಬೋಳಾಗಿದೆ: ಮನಸ್ಸು ಅನ್ನ, ಪ್ರಾಣ ನೀರು, ವಾಕ್ ಬೆಂಕಿ.\n\nಇದನ್ನು ಇಡೀ ಅಧ್ಯಾಯದ ತಿರುಗುಣಿಯನ್ನಾಗಿ ಮಾಡುವುದೇನೆಂದರೆ — ಈ ಮೂರೂ ಶಿಷ್ಯನು ತಾನೇ ಎಂದು ಅನುಭವಿಸುವ ಸಂಗತಿಗಳು. ಈಗ ಅವನಿಗೆ ಮಹಾಭೂತಗಳ ಬಗ್ಗೆ ಹೇಳುತ್ತಿಲ್ಲ. ಈ ಕ್ಷಣ ಅವನು ಏನು ಮಾಡುತ್ತಿದ್ದಾನೆ — ಯೋಚಿಸುವುದು, ಉಸಿರಾಡುವುದು, ಮಾತನಾಡುವುದು — ಮತ್ತು ಅವು ಎಲ್ಲಿಂದ ಬಂದವು ಎಂದು ಹೇಳಲಾಗುತ್ತಿದೆ.\n\nಆಮೇಲೆ ಧ್ರುವಪದ ಮೊದಲ ಬಾರಿಗೆ ಬರುತ್ತದೆ: 'ಭೂಯ ಏವ ಮಾ ಭಗವಾನ್ ವಿಜ್ಞಾಪಯತು' — ಇನ್ನೂ ಹೆಚ್ಚು ತಿಳಿಸಿ. ಇಲ್ಲಿಂದ ಮುಂದೆ ಬಹುತೇಕ ಪ್ರತಿ ಖಂಡವನ್ನೂ ಅದೇ ಮುಗಿಸುತ್ತದೆ. ೬.೧.೨ರಲ್ಲಿ ತನ್ನ ವಿದ್ಯಾಭ್ಯಾಸ ಮುಗಿಯಿತೆಂದು ಭಾವಿಸಿದ್ದ ಹುಡುಗ ಈಗ ಕೇಳುವುದನ್ನು ನಿಲ್ಲಿಸಲಾರ, ಮತ್ತು ತಂದೆಯ ಉತ್ತರ ಯಾವಾಗಲೂ ಅದೇ ಎರಡು ಪದ.",
      },
      hi: {
        translation:
          "'हे सौम्य, मन अन्नमय है; प्राण आपोमय है; वाक् तेजोमयी है।' 'भगवन्, मुझे और भी बताइए।' 'तथास्तु, सौम्य,' उन्होंने कहा।",
        explanation:
          "नौ उत्पादों को उन तीन तक निचोड़ दिया गया है जो काम के हैं, और वाक्य सूत्र जितना ही सादा है: मन अन्न, प्राण जल, वाक् अग्नि।\n\nइसे पूरे अध्याय की धुरी जो बनाता है वह यह कि ये तीनों वही हैं जिन्हें शिष्य स्वयं के रूप में अनुभव करता है। अब उसे तत्त्वों के विषय में नहीं बताया जा रहा। उसे बताया जा रहा है कि वह इस समय क्या कर रहा है — सोचना, साँस लेना, बोलना — और इनमें से हर एक कहाँ से आता है।\n\nऔर फिर पहली बार वह टेक आती है: 'भूय एव मा भगवान् विज्ञापयतु' — मुझे और भी बताइए। यहाँ से आगे लगभग हर खंड इसी पर समाप्त होगा। जो लड़का ६.१.२ में अपनी शिक्षा पूरी मान बैठा था, वह अब पूछना बंद नहीं कर पाता, और पिता का उत्तर हर बार वही दो शब्द है।",
      },
    },
  },
  {
    id: "chandogya-6-6-1",
    locator: "6.6.1",
    handle: {
      en: "Curds churned, the fine part rises",
      kn: "ಕಡೆದ ಮೊಸರಿನ ಸೂಕ್ಷ್ಮ ಭಾಗ ಮೇಲೇಳುತ್ತದೆ",
      hi: "मथे दही का सूक्ष्म भाग ऊपर उठता है",
    },
    sanskrit: [
      "दध्नः सोम्य मथ्यमानस्य योऽणिमा",
      "स ऊर्ध्वः समुदीषति ।",
      "तत्सर्पिर्भवति ॥",
    ],
    iast: [
      "dadhnaḥ somya mathyamānasya yo 'ṇimā",
      "sa ūrdhvaḥ samudīṣati |",
      "tat sarpir bhavati ||",
    ],
    keywords: [
      {
        term: "अणिमा",
        iast: "aṇimā",
        gloss: {
          en: "the fine part, the subtle essence — the word that ends the chapter",
          kn: "ಸೂಕ್ಷ್ಮ ಭಾಗ, ಸಾರ — ಅಧ್ಯಾಯವನ್ನು ಮುಗಿಸುವ ಪದ",
          hi: "सूक्ष्म भाग, सार — वही शब्द जो अध्याय को समाप्त करता है",
        },
      },
      {
        term: "सर्पिः",
        iast: "sarpiḥ",
        gloss: {
          en: "clarified butter, ghee",
          kn: "ತುಪ್ಪ",
          hi: "घृत, घी",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'When curds are churned, my dear, the fine part of them rises upward. That becomes butter.'",
        explanation:
          "A kitchen again, and this time the point is not composition but separation. Churn curds and something rises: the same substance, but its finest portion gathered at the top and now called by a different name.\n\nThe word for it is aṇimā, the fine part — and it is worth marking, because it is the word the chapter ends on. When the father finally points at what is real in his son and says tat tvam asi, the phrase he uses is sa ya eṣo 'ṇimā: that which is this fineness. The butter is where the term is introduced, in a bowl, doing something visible.\n\nSo the analogy that follows is not chosen for prettiness. It is the reader being taught a technical vocabulary on curds before it is used on the self.",
      },
      kn: {
        translation:
          "'ಪ್ರಿಯನೇ, ಮೊಸರನ್ನು ಕಡೆದಾಗ ಅದರ ಸೂಕ್ಷ್ಮ ಭಾಗ ಮೇಲಕ್ಕೆ ಏಳುತ್ತದೆ. ಅದು ತುಪ್ಪವಾಗುತ್ತದೆ.'",
        explanation:
          "ಮತ್ತೆ ಅಡುಗೆಮನೆ, ಮತ್ತು ಈ ಬಾರಿ ವಿಷಯ ಘಟಕಗಳಲ್ಲ, ಬೇರ್ಪಡಿಕೆ. ಮೊಸರನ್ನು ಕಡೆದರೆ ಏನೋ ಮೇಲೇಳುತ್ತದೆ: ಅದೇ ವಸ್ತು, ಆದರೆ ಅದರ ಅತ್ಯಂತ ಸೂಕ್ಷ್ಮ ಪಾಲು ಮೇಲೆ ಕೂಡಿಕೊಂಡು ಈಗ ಬೇರೆ ಹೆಸರಿನಿಂದ ಕರೆಯಲ್ಪಡುತ್ತದೆ.\n\nಅದಕ್ಕೆ ಬಳಸಿದ ಪದ 'ಅಣಿಮಾ', ಸೂಕ್ಷ್ಮ ಭಾಗ — ಇದನ್ನು ಗುರುತಿಸಿಕೊಳ್ಳಬೇಕು, ಏಕೆಂದರೆ ಅಧ್ಯಾಯ ಮುಗಿಯುವುದೇ ಈ ಪದದಲ್ಲಿ. ಕೊನೆಗೆ ತಂದೆ ಮಗನಲ್ಲಿ ಯಾವುದು ಸತ್ಯವೋ ಅದನ್ನು ತೋರಿಸಿ 'ತತ್ತ್ವಮಸಿ' ಎನ್ನುವಾಗ ಬಳಸುವ ನುಡಿಗಟ್ಟು 'ಸ ಯ ಏಷೋಽಣಿಮಾ' — ಈ ಸೂಕ್ಷ್ಮತೆಯಾಗಿರುವುದು ಯಾವುದೋ ಅದು. ಈ ಪದವನ್ನು ಪರಿಚಯಿಸುವುದು ತುಪ್ಪ, ಒಂದು ಪಾತ್ರೆಯಲ್ಲಿ, ಕಣ್ಣಿಗೆ ಕಾಣುವ ಕೆಲಸ ಮಾಡುತ್ತಾ.\n\nಆದ್ದರಿಂದ ಮುಂದೆ ಬರುವ ಉಪಮೆ ಸೊಗಸಿಗಾಗಿ ಆರಿಸಿದ್ದಲ್ಲ. ಆತ್ಮದ ಮೇಲೆ ಬಳಸುವ ಮೊದಲು ಓದುಗನಿಗೆ ಮೊಸರಿನ ಮೇಲೆ ಪಾರಿಭಾಷಿಕ ಶಬ್ದವನ್ನು ಕಲಿಸಲಾಗುತ್ತಿದೆ.",
      },
      hi: {
        translation:
          "'हे सौम्य, दही को मथने पर उसका सूक्ष्म भाग ऊपर उठ आता है। वही घृत बनता है।'",
        explanation:
          "फिर रसोई, और इस बार बात संघटन की नहीं, पृथक्करण की है। दही मथिए और कुछ ऊपर उठता है: वही पदार्थ, पर उसका सूक्ष्मतम अंश ऊपर इकट्ठा होकर अब दूसरे नाम से पुकारा जाता है।\n\nउसके लिए शब्द है 'अणिमा', सूक्ष्म भाग — और इसे चिह्नित कर लेना चाहिए, क्योंकि अध्याय इसी शब्द पर समाप्त होता है। जब अंत में पिता पुत्र में जो सत्य है उसकी ओर संकेत कर 'तत्त्वमसि' कहता है, तब उसका पदबंध होता है 'स य एषोऽणिमा' — जो यह सूक्ष्मता है, वह। यह शब्द घी में, एक बर्तन में, दिखता हुआ काम करते हुए परिचित कराया जाता है।\n\nइसलिए आगे आने वाली उपमा सुंदरता के लिए नहीं चुनी गई। आत्मा पर प्रयोग करने से पहले पाठक को दही पर एक पारिभाषिक शब्दावली सिखाई जा रही है।",
      },
    },
  },

  {
    id: "chandogya-6-6-2",
    locator: "6.6.2",
    handle: {
      en: "So with food eaten",
      kn: "ಹಾಗೆಯೇ ತಿಂದ ಅನ್ನ",
      hi: "वैसे ही खाया अन्न",
    },
    sanskrit: [
      "एवमेव खलु सोम्यान्नस्याश्यमानस्य योऽणिमा",
      "स ऊर्ध्वः समुदीषति ।",
      "तन्मनो भवति ॥",
    ],
    iast: [
      "evam eva khalu somyānnasyāśyamānasya yo 'ṇimā",
      "sa ūrdhvaḥ samudīṣati |",
      "tan mano bhavati ||",
    ],
    keywords: [
      {
        term: "अश्यमानस्य",
        iast: "aśyamānasya",
        gloss: {
          en: "of what is being eaten — a present participle, food in the act of digestion",
          kn: "ತಿನ್ನಲ್ಪಡುತ್ತಿರುವುದರ — ಜೀರ್ಣವಾಗುತ್ತಿರುವ ಅನ್ನ",
          hi: "जो खाया जा रहा है उसका — पचते हुए अन्न का",
        },
      },
      {
        term: "समुदीषति",
        iast: "samudīṣati",
        gloss: {
          en: "rises up, moves upward together",
          kn: "ಮೇಲಕ್ಕೆ ಏಳುತ್ತದೆ, ಒಟ್ಟಾಗಿ ಚಲಿಸುತ್ತದೆ",
          hi: "ऊपर उठता है, साथ ऊपर जाता है",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'Just so, my dear, when food is eaten, the fine part of it rises upward. That becomes mind.'",
        explanation:
          "The claim of 6.5.1 restated with a mechanism. There, mind was simply named as the subtlest of three portions; here it is given the motion of butter — it rises, gathers, becomes something with a new name.\n\nThe difference between the two statements is the difference between a list and a process. A list can be memorised. A process can be pictured, and once you have watched butter form you have a picture for what the text says is happening every time you eat.\n\nWhether the physiology is right is not the question this chapter is answering. What it is establishing is that mind stands to food as butter stands to curds — not added, not descended from elsewhere, but the same thing at its finest, risen and renamed.",
      },
      kn: {
        translation:
          "'ಪ್ರಿಯನೇ, ಹಾಗೆಯೇ ಅನ್ನವನ್ನು ತಿಂದಾಗ ಅದರ ಸೂಕ್ಷ್ಮ ಭಾಗ ಮೇಲಕ್ಕೆ ಏಳುತ್ತದೆ. ಅದು ಮನಸ್ಸಾಗುತ್ತದೆ.'",
        explanation:
          "೬.೫.೧ರ ಹೇಳಿಕೆಯನ್ನು ಕಾರ್ಯವಿಧಾನದೊಂದಿಗೆ ಮತ್ತೆ ಹೇಳಲಾಗಿದೆ. ಅಲ್ಲಿ ಮನಸ್ಸನ್ನು ಮೂರು ಪಾಲುಗಳಲ್ಲಿ ಅತ್ಯಂತ ಸೂಕ್ಷ್ಮವೆಂದು ಹೆಸರಿಸಿದ್ದಷ್ಟೇ; ಇಲ್ಲಿ ಅದಕ್ಕೆ ತುಪ್ಪದ ಚಲನೆಯನ್ನು ಕೊಡಲಾಗಿದೆ — ಅದು ಏಳುತ್ತದೆ, ಕೂಡಿಕೊಳ್ಳುತ್ತದೆ, ಹೊಸ ಹೆಸರಿನದಾಗುತ್ತದೆ.\n\nಎರಡು ಹೇಳಿಕೆಗಳ ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಪಟ್ಟಿಗೂ ಪ್ರಕ್ರಿಯೆಗೂ ಇರುವ ವ್ಯತ್ಯಾಸ. ಪಟ್ಟಿಯನ್ನು ಬಾಯಿಪಾಠ ಮಾಡಬಹುದು. ಪ್ರಕ್ರಿಯೆಯನ್ನು ಕಣ್ಣಮುಂದೆ ತಂದುಕೊಳ್ಳಬಹುದು, ಮತ್ತು ತುಪ್ಪ ಕಟ್ಟುವುದನ್ನು ಒಮ್ಮೆ ನೋಡಿದ ಮೇಲೆ, ನೀವು ತಿಂದಾಗಲೆಲ್ಲ ನಡೆಯುತ್ತದೆಂದು ಪಠ್ಯ ಹೇಳುವುದಕ್ಕೆ ನಿಮ್ಮಲ್ಲಿ ಒಂದು ಚಿತ್ರವಿದೆ.\n\nಈ ಶರೀರಶಾಸ್ತ್ರ ಸರಿಯೇ ಎಂಬುದು ಈ ಅಧ್ಯಾಯ ಉತ್ತರಿಸುತ್ತಿರುವ ಪ್ರಶ್ನೆಯಲ್ಲ. ಅದು ಸ್ಥಾಪಿಸುತ್ತಿರುವುದು — ಮೊಸರಿಗೆ ತುಪ್ಪ ಹೇಗೋ ಅನ್ನಕ್ಕೆ ಮನಸ್ಸು ಹಾಗೆ: ಸೇರಿಸಿದ್ದಲ್ಲ, ಬೇರೆಲ್ಲಿಂದಲೋ ಇಳಿದದ್ದಲ್ಲ, ಅದೇ ವಸ್ತು ಅತ್ಯಂತ ಸೂಕ್ಷ್ಮವಾಗಿ, ಮೇಲೆದ್ದು ಹೊಸ ಹೆಸರು ಪಡೆದದ್ದು.",
      },
      hi: {
        translation:
          "'हे सौम्य, वैसे ही जब अन्न खाया जाता है, उसका सूक्ष्म भाग ऊपर उठता है। वही मन बनता है।'",
        explanation:
          "६.५.१ की बात एक क्रियाविधि के साथ फिर कही गई है। वहाँ मन को केवल तीन अंशों में सूक्ष्मतम कहकर नाम दिया गया था; यहाँ उसे घी की गति दे दी गई है — वह उठता है, इकट्ठा होता है, नए नाम वाला बन जाता है।\n\nदोनों कथनों का अंतर सूची और प्रक्रिया का अंतर है। सूची कंठस्थ की जा सकती है। प्रक्रिया की छवि बनाई जा सकती है, और एक बार घी बनते देख लेने पर आपके पास वह चित्र है जो पाठ के अनुसार हर बार खाने पर घटित होता है।\n\nयह शरीरक्रिया सही है या नहीं, यह प्रश्न यह अध्याय नहीं सुलझा रहा। वह यह स्थापित कर रहा है कि जैसे दही से घी, वैसे अन्न से मन — जोड़ा हुआ नहीं, कहीं और से उतरा हुआ नहीं, बल्कि वही वस्तु अपने सूक्ष्मतम रूप में, ऊपर उठकर नया नाम पाकर।",
      },
    },
  },

  {
    id: "chandogya-6-6-3",
    locator: "6.6.3",
    handle: {
      en: "So with water drunk",
      kn: "ಹಾಗೆಯೇ ಕುಡಿದ ನೀರು",
      hi: "वैसे ही पिया जल",
    },
    sanskrit: [
      "अपां सोम्य पीयमानानां योऽणिमा",
      "स ऊर्ध्वः समुदीषति ।",
      "स प्राणो भवति ॥",
    ],
    iast: [
      "apāṃ somya pīyamānānāṃ yo 'ṇimā",
      "sa ūrdhvaḥ samudīṣati |",
      "sa prāṇo bhavati ||",
    ],
    keywords: [
      {
        term: "पीयमानानाम्",
        iast: "pīyamānānām",
        gloss: {
          en: "of the waters being drunk",
          kn: "ಕುಡಿಯಲ್ಪಡುತ್ತಿರುವ ನೀರುಗಳ",
          hi: "पिए जा रहे जलों का",
        },
      },
      {
        term: "प्राणः",
        iast: "prāṇaḥ",
        gloss: {
          en: "breath — what will be the last thing to leave at 6.15",
          kn: "ಪ್ರಾಣ — ೬.೧೫ರಲ್ಲಿ ಕೊನೆಗೆ ಹೊರಡುವ ಸರದಿಯದು",
          hi: "प्राण — ६.१५ में अंत में विदा लेने वाला",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'When waters are drunk, my dear, the fine part of them rises upward. That becomes breath.'",
        explanation:
          "The second of the three, and the pattern is by now doing its own work — the reader completes the sentence before it arrives.\n\nThat predictability is the design. The father is laying a track that will be walked backwards in 6.8, where hunger is traced from food to water to heat to Being, and in 6.15, where a dying man's speech sinks into mind, mind into breath, breath into heat, heat into the highest deity. Both of those passages assume this chain is already familiar.\n\nA reader who finds 6.6 repetitive has understood it. It is repetitive on purpose, so that the two hardest passages in the chapter can move quickly through territory that no longer needs explaining.",
      },
      kn: {
        translation:
          "'ಪ್ರಿಯನೇ, ನೀರನ್ನು ಕುಡಿದಾಗ ಅದರ ಸೂಕ್ಷ್ಮ ಭಾಗ ಮೇಲಕ್ಕೆ ಏಳುತ್ತದೆ. ಅದು ಪ್ರಾಣವಾಗುತ್ತದೆ.'",
        explanation:
          "ಮೂರರಲ್ಲಿ ಎರಡನೆಯದು, ಮತ್ತು ಈ ಹೊತ್ತಿಗೆ ಮಾದರಿ ತನ್ನ ಕೆಲಸವನ್ನು ತಾನೇ ಮಾಡುತ್ತಿದೆ — ವಾಕ್ಯ ಬರುವ ಮೊದಲೇ ಓದುಗ ಅದನ್ನು ಪೂರೈಸುತ್ತಾನೆ.\n\nಈ ಊಹಿಸಬಹುದಾದತನವೇ ವಿನ್ಯಾಸ. ತಂದೆ ಒಂದು ಹಾದಿಯನ್ನು ಹಾಕುತ್ತಿದ್ದಾನೆ, ಅದನ್ನು ೬.೮ರಲ್ಲಿ ಹಿಮ್ಮುಖವಾಗಿ ನಡೆಯಲಾಗುತ್ತದೆ — ಅಲ್ಲಿ ಹಸಿವನ್ನು ಅನ್ನದಿಂದ ನೀರಿಗೆ, ನೀರಿನಿಂದ ತೇಜಸ್ಸಿಗೆ, ತೇಜಸ್ಸಿನಿಂದ ಸತ್ತಿಗೆ ಜಾಡುಹಿಡಿಯಲಾಗುತ್ತದೆ; ಮತ್ತು ೬.೧೫ರಲ್ಲಿ ಸಾಯುತ್ತಿರುವವನ ವಾಕ್ ಮನಸ್ಸಿನಲ್ಲಿ, ಮನಸ್ಸು ಪ್ರಾಣದಲ್ಲಿ, ಪ್ರಾಣ ತೇಜಸ್ಸಿನಲ್ಲಿ, ತೇಜಸ್ಸು ಪರದೇವತೆಯಲ್ಲಿ ಲೀನವಾಗುತ್ತದೆ. ಆ ಎರಡೂ ಭಾಗಗಳು ಈ ಸರಪಳಿ ಆಗಲೇ ಪರಿಚಿತವೆಂದು ಭಾವಿಸುತ್ತವೆ.\n\n೬.೬ ಪುನರಾವರ್ತನೆಯೆನಿಸಿದರೆ ಓದುಗ ಅದನ್ನು ಸರಿಯಾಗಿ ಗ್ರಹಿಸಿದ್ದಾನೆ. ಅದು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಪುನರಾವರ್ತಿತ, ಏಕೆಂದರೆ ಅಧ್ಯಾಯದ ಅತ್ಯಂತ ಕಠಿಣ ಎರಡು ಭಾಗಗಳು ಇನ್ನು ವಿವರಣೆ ಬೇಡದ ನೆಲದ ಮೇಲೆ ವೇಗವಾಗಿ ಸಾಗಬೇಕು.",
      },
      hi: {
        translation:
          "'हे सौम्य, जल पिए जाने पर उसका सूक्ष्म भाग ऊपर उठता है। वही प्राण बनता है।'",
        explanation:
          "तीन में से दूसरा, और अब तक ढाँचा अपना काम स्वयं कर रहा है — वाक्य आने से पहले ही पाठक उसे पूरा कर लेता है।\n\nयही पूर्वानुमेयता रचना है। पिता एक पटरी बिछा रहा है जिस पर ६.८ में उलटा चला जाएगा — वहाँ भूख को अन्न से जल, जल से तेज, तेज से सत् तक खोजा जाता है; और ६.१५ में मरते हुए व्यक्ति की वाणी मन में, मन प्राण में, प्राण तेज में, तेज परम देवता में लीन होती है। वे दोनों प्रसंग मानकर चलते हैं कि यह शृंखला पहले से परिचित है।\n\nजिसे ६.६ पुनरावृत्ति लगे उसने इसे समझ लिया है। यह जान-बूझकर पुनरावृत्त है, ताकि अध्याय के दो कठिनतम प्रसंग उस भूमि पर तेज़ी से चल सकें जिसे अब समझाने की ज़रूरत नहीं।",
      },
    },
  },

  {
    id: "chandogya-6-6-4",
    locator: "6.6.4",
    handle: {
      en: "So with heat",
      kn: "ಹಾಗೆಯೇ ತೇಜಸ್ಸು",
      hi: "वैसे ही तेज",
    },
    sanskrit: [
      "तेजसः सोम्याश्यमानस्य योऽणिमा",
      "स ऊर्ध्वः समुदीषति ।",
      "सा वाग्भवति ॥",
    ],
    iast: [
      "tejasaḥ somyāśyamānasya yo 'ṇimā",
      "sa ūrdhvaḥ samudīṣati |",
      "sā vāg bhavati ||",
    ],
    keywords: [
      {
        term: "तेजसः",
        iast: "tejasaḥ",
        gloss: {
          en: "of heat — taken in with food, as oil, ghee and what is cooked",
          kn: "ತೇಜಸ್ಸಿನ — ಎಣ್ಣೆ, ತುಪ್ಪ, ಬೇಯಿಸಿದ್ದರ ರೂಪದಲ್ಲಿ ಸೇವಿಸಲ್ಪಟ್ಟದ್ದು",
          hi: "तेज का — तेल, घी और पके हुए के रूप में ग्रहण किया गया",
        },
      },
      {
        term: "वाक्",
        iast: "vāk",
        gloss: {
          en: "speech — third of the three subtle products",
          kn: "ವಾಕ್ — ಮೂರು ಸೂಕ್ಷ್ಮ ಫಲಗಳಲ್ಲಿ ಮೂರನೆಯದು",
          hi: "वाक् — तीन सूक्ष्म उत्पादों में तीसरा",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'When heat is taken in, my dear, the fine part of it rises upward. That becomes speech.'",
        explanation:
          "The third, and the set is closed. Three intakes, three fine parts rising, three faculties: mind, breath, speech.\n\nIt is worth noticing what is not on the list. No soul is introduced, no separate faculty of will or memory, no organ of the sacred. The apparatus of a human being is drawn from three things you consume, and nothing has been smuggled in from outside.\n\nThis is what makes the chapter's final move possible. If a person were partly made of some other stuff, then finding Being in him would mean finding one ingredient among several. Because he is made of exactly these three, and these three came from Being, there is nothing in him left over to be anything else.",
      },
      kn: {
        translation:
          "'ಪ್ರಿಯನೇ, ತೇಜಸ್ಸನ್ನು ಸೇವಿಸಿದಾಗ ಅದರ ಸೂಕ್ಷ್ಮ ಭಾಗ ಮೇಲಕ್ಕೆ ಏಳುತ್ತದೆ. ಅದು ವಾಕ್ ಆಗುತ್ತದೆ.'",
        explanation:
          "ಮೂರನೆಯದು, ಮತ್ತು ಗುಂಪು ಮುಚ್ಚಿತು. ಮೂರು ಸೇವನೆಗಳು, ಮೇಲೇಳುವ ಮೂರು ಸೂಕ್ಷ್ಮ ಭಾಗಗಳು, ಮೂರು ಸಾಮರ್ಥ್ಯಗಳು: ಮನಸ್ಸು, ಪ್ರಾಣ, ವಾಕ್.\n\nಪಟ್ಟಿಯಲ್ಲಿ ಇಲ್ಲದ್ದನ್ನು ಗಮನಿಸಬೇಕು. ಯಾವ ಆತ್ಮವನ್ನೂ ಪರಿಚಯಿಸಿಲ್ಲ, ಇಚ್ಛೆ ಅಥವಾ ಸ್ಮೃತಿಯ ಪ್ರತ್ಯೇಕ ಸಾಧನವಿಲ್ಲ, ಪವಿತ್ರತೆಯ ಇಂದ್ರಿಯವಿಲ್ಲ. ಮನುಷ್ಯನ ಸಲಕರಣೆಯನ್ನು ನೀವು ಸೇವಿಸುವ ಮೂರು ವಸ್ತುಗಳಿಂದಲೇ ಎಳೆಯಲಾಗಿದೆ, ಮತ್ತು ಹೊರಗಿನಿಂದ ಏನನ್ನೂ ನುಸುಳಿಸಿಲ್ಲ.\n\nಅಧ್ಯಾಯದ ಕೊನೆಯ ನಡೆ ಸಾಧ್ಯವಾಗುವುದೇ ಇದರಿಂದ. ಮನುಷ್ಯ ಭಾಗಶಃ ಬೇರೆ ಯಾವುದೋ ವಸ್ತುವಿನಿಂದ ಆಗಿದ್ದರೆ, ಅವನಲ್ಲಿ ಸತ್ತನ್ನು ಕಾಣುವುದೆಂದರೆ ಹಲವು ಪದಾರ್ಥಗಳಲ್ಲಿ ಒಂದನ್ನು ಕಾಣುವುದಾಗುತ್ತಿತ್ತು. ಅವನು ನಿಖರವಾಗಿ ಈ ಮೂರರಿಂದಲೇ ಆಗಿರುವುದರಿಂದ, ಮತ್ತು ಈ ಮೂರೂ ಸತ್ತಿನಿಂದ ಬಂದಿರುವುದರಿಂದ, ಅವನಲ್ಲಿ ಬೇರೇನೋ ಆಗಿ ಉಳಿಯುವ ಯಾವುದೂ ಇಲ್ಲ.",
      },
      hi: {
        translation:
          "'हे सौम्य, तेज ग्रहण किए जाने पर उसका सूक्ष्म भाग ऊपर उठता है। वही वाक् बनती है।'",
        explanation:
          "तीसरा, और समुच्चय बंद। तीन ग्रहण, ऊपर उठते तीन सूक्ष्म भाग, तीन शक्तियाँ: मन, प्राण, वाक्।\n\nजो सूची में नहीं है उस पर ध्यान देना चाहिए। कोई आत्मा नहीं जोड़ी गई, इच्छा या स्मृति की अलग शक्ति नहीं, पवित्रता की कोई इंद्रिय नहीं। मनुष्य का पूरा उपकरण उन्हीं तीन वस्तुओं से खींचा गया है जिन्हें आप ग्रहण करते हैं, और बाहर से कुछ चुपके से नहीं लाया गया।\n\nयही अध्याय की अंतिम चाल को संभव बनाता है। यदि मनुष्य आंशिक रूप से किसी और पदार्थ का बना होता, तो उसमें सत् पाना अनेक अवयवों में से एक पाना होता। चूँकि वह ठीक इन्हीं तीन का बना है, और ये तीनों सत् से आए हैं, इसलिए उसमें ऐसा कुछ बचता ही नहीं जो कुछ और हो।",
      },
    },
  },

  {
    id: "chandogya-6-6-5",
    locator: "6.6.5",
    handle: {
      en: "And so again: mind is food",
      kn: "ಮತ್ತೆ ಅದೇ: ಮನಸ್ಸು ಅನ್ನಮಯ",
      hi: "और फिर वही: मन अन्नमय",
    },
    sanskrit: [
      "अन्नमयं हि सोम्य मन आपोमयः प्राणस्",
      "तेजोमयी वागिति ।",
      "भूय एव मा भगवान्विज्ञापयत्विति ।",
      "तथा सोम्येति होवाच ॥",
    ],
    iast: [
      "annamayaṃ hi somya mana āpomayaḥ prāṇas",
      "tejomayī vāg iti |",
      "bhūya eva mā bhagavān vijñāpayatv iti |",
      "tathā somyeti hovāca ||",
    ],
    keywords: [
      {
        term: "हि",
        iast: "hi",
        gloss: {
          en: "for, indeed — the particle that marks a conclusion being drawn",
          kn: "ಏಕೆಂದರೆ, ನಿಜಕ್ಕೂ — ತೀರ್ಮಾನವನ್ನು ಸೂಚಿಸುವ ನಿಪಾತ",
          hi: "क्योंकि, निश्चय ही — निष्कर्ष सूचित करने वाला निपात",
        },
      },
      {
        term: "विज्ञापयतु",
        iast: "vijñāpayatu",
        gloss: {
          en: "let him make me understand — stronger than 'tell me'",
          kn: "ನನಗೆ ಅರ್ಥವಾಗುವಂತೆ ಮಾಡಲಿ — 'ಹೇಳಿ' ಎನ್ನುವುದಕ್ಕಿಂತ ಬಲವಾದದ್ದು",
          hi: "मुझे समझा दें — 'बताइए' से अधिक बलवान",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'For mind, my dear, is made of food; breath is made of water; speech is made of heat.' 'Teach me still more, sir.' 'So be it, my dear,' he said.",
        explanation:
          "The same conclusion as 6.5.4, word for word, and the same exchange after it. The chapter has now stated this twice: once from the analysis of what is eaten, once from the analogy of churning.\n\nTwo different routes to one sentence is the oldest form of proof there is, and it is being used deliberately. The claim no longer rests on a single illustration that a stubborn student could refuse.\n\nAnd the request repeats too — teach me still more. Notice what the boy is not doing: he is not objecting, and he is not agreeing either. He is asking for the next thing. The chapter's picture of a good student is someone whose response to a satisfying answer is another question.",
      },
      kn: {
        translation:
          "'ಪ್ರಿಯನೇ, ಮನಸ್ಸು ಅನ್ನಮಯ; ಪ್ರಾಣ ಆಪೋಮಯ; ವಾಕ್ ತೇಜೋಮಯೀ.' 'ಸ್ವಾಮಿ, ಇನ್ನೂ ಹೆಚ್ಚು ತಿಳಿಸಿ.' 'ಹಾಗೇ ಆಗಲಿ, ಪ್ರಿಯನೇ' ಎಂದನು.",
        explanation:
          "೬.೫.೪ರ ಅದೇ ತೀರ್ಮಾನ, ಪದಶಃ, ಮತ್ತು ಅದೇ ಸಂವಾದ ಅದರ ನಂತರ. ಅಧ್ಯಾಯ ಈಗ ಇದನ್ನು ಎರಡು ಬಾರಿ ಹೇಳಿದೆ: ಒಮ್ಮೆ ತಿಂದದ್ದರ ವಿಶ್ಲೇಷಣೆಯಿಂದ, ಒಮ್ಮೆ ಕಡೆಯುವ ಉಪಮೆಯಿಂದ.\n\nಒಂದೇ ವಾಕ್ಯಕ್ಕೆ ಎರಡು ಬೇರೆ ದಾರಿಗಳು — ಇರುವ ಅತ್ಯಂತ ಹಳೆಯ ಬಗೆಯ ಸಾಧನೆ, ಮತ್ತು ಅದನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಬಳಸಲಾಗಿದೆ. ಹಠಮಾರಿ ಶಿಷ್ಯನೊಬ್ಬ ನಿರಾಕರಿಸಬಹುದಾದ ಒಂದೇ ಉದಾಹರಣೆಯ ಮೇಲೆ ಈ ಪ್ರತಿಪಾದನೆ ಇನ್ನು ನಿಂತಿಲ್ಲ.\n\nಬೇಡಿಕೆಯೂ ಪುನರಾವರ್ತಿಸುತ್ತದೆ — ಇನ್ನೂ ಹೆಚ್ಚು ತಿಳಿಸಿ. ಹುಡುಗ ಏನು ಮಾಡುತ್ತಿಲ್ಲ ಎಂಬುದನ್ನು ಗಮನಿಸಿ: ಅವನು ಆಕ್ಷೇಪಿಸುತ್ತಿಲ್ಲ, ಒಪ್ಪಿಗೆಯನ್ನೂ ಸೂಚಿಸುತ್ತಿಲ್ಲ. ಮುಂದಿನದನ್ನು ಕೇಳುತ್ತಿದ್ದಾನೆ. ಒಳ್ಳೆಯ ಶಿಷ್ಯನ ಬಗ್ಗೆ ಈ ಅಧ್ಯಾಯದ ಚಿತ್ರ ಇದೇ — ತೃಪ್ತಿಕರ ಉತ್ತರಕ್ಕೆ ಅವನ ಪ್ರತಿಕ್ರಿಯೆ ಇನ್ನೊಂದು ಪ್ರಶ್ನೆ.",
      },
      hi: {
        translation:
          "'क्योंकि हे सौम्य, मन अन्नमय है; प्राण आपोमय है; वाक् तेजोमयी है।' 'भगवन्, मुझे और भी बताइए।' 'तथास्तु, सौम्य,' उन्होंने कहा।",
        explanation:
          "६.५.४ का वही निष्कर्ष, शब्दशः, और उसके बाद वही संवाद। अध्याय अब यह दो बार कह चुका है: एक बार खाए हुए के विश्लेषण से, एक बार मथने की उपमा से।\n\nएक ही वाक्य तक दो अलग रास्ते — यह प्रमाण का सबसे पुराना रूप है, और इसका प्रयोग जान-बूझकर हुआ है। यह दावा अब किसी एक दृष्टांत पर टिका नहीं जिसे कोई हठी शिष्य नकार दे।\n\nऔर याचना भी दोहराती है — मुझे और भी बताइए। ध्यान दीजिए कि लड़का क्या नहीं कर रहा: वह न आपत्ति कर रहा है, न सहमति जता रहा है। वह अगली बात माँग रहा है। अच्छे शिष्य की इस अध्याय की छवि यही है — संतोषजनक उत्तर पर उसकी प्रतिक्रिया एक और प्रश्न होती है।",
      },
    },
  },

  {
    id: "chandogya-6-7-1",
    locator: "6.7.1",
    handle: {
      en: "A person is sixteen parts",
      kn: "ಪುರುಷ ಷೋಡಶಕಲ",
      hi: "पुरुष षोडशकल है",
    },
    sanskrit: [
      "षोडशकलः सोम्य पुरुषः ।",
      "पञ्चदशाहानि माशीः ।",
      "काममपः पिब ।",
      "आपोमयः प्राणो न पिबतो विच्छेत्स्यत इति ॥",
    ],
    iast: [
      "ṣoḍaśakalaḥ somya puruṣaḥ |",
      "pañcadaśāhāni māśīḥ |",
      "kāmam apaḥ piba |",
      "āpomayaḥ prāṇo na pibato vicchetsyata iti ||",
    ],
    keywords: [
      {
        term: "षोडशकलः",
        iast: "ṣoḍaśakalaḥ",
        gloss: {
          en: "of sixteen parts — kalā, a portion or digit, as of the moon",
          kn: "ಹದಿನಾರು ಕಲೆಗಳವನು — 'ಕಲಾ' ಎಂದರೆ ಚಂದ್ರನ ಕಲೆಯಂತೆ ಒಂದು ಪಾಲು",
          hi: "सोलह कलाओं वाला — 'कला' अर्थात् चंद्रकला जैसा एक अंश",
        },
      },
      {
        term: "मा अशीः",
        iast: "mā aśīḥ",
        gloss: {
          en: "do not eat — a prohibition, for fifteen days",
          kn: "ತಿನ್ನಬೇಡ — ಹದಿನೈದು ದಿನಗಳ ನಿಷೇಧ",
          hi: "मत खाओ — पंद्रह दिन का निषेध",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'A person, my dear, has sixteen parts. Do not eat for fifteen days. Drink water as you wish — breath is made of water, and one who drinks will not have it cut off.'",
        explanation:
          "Everything so far has been argued. Now it is tested, and the instrument is the student's own body.\n\nThe experiment is designed with care. Fifteen days without food, but water freely — and the reason is given in the same breath: breath is made of water, so drinking keeps prāṇa intact while the food-built part starves. The father is holding one variable and removing the other. That is not a devotional fast; it is a test with a control.\n\nSixteen parts is the frame, and the number is the moon's. A person waxes and wanes in portions, and fifteen of them can be lost as the moon loses fifteen digits — leaving one, which is what the next five sections are about.",
      },
      kn: {
        translation:
          "'ಪ್ರಿಯನೇ, ಪುರುಷನಿಗೆ ಹದಿನಾರು ಕಲೆಗಳಿವೆ. ಹದಿನೈದು ದಿನ ತಿನ್ನಬೇಡ. ಬೇಕಾದಷ್ಟು ನೀರು ಕುಡಿ — ಪ್ರಾಣ ಆಪೋಮಯ, ಕುಡಿಯುವವನ ಪ್ರಾಣ ಕಡಿದುಹೋಗದು.'",
        explanation:
          "ಇಲ್ಲಿಯವರೆಗಿನ ಎಲ್ಲವೂ ವಾದವಾಗಿತ್ತು. ಈಗ ಪರೀಕ್ಷೆ, ಮತ್ತು ಉಪಕರಣ ಶಿಷ್ಯನ ಸ್ವಂತ ಶರೀರ.\n\nಪ್ರಯೋಗವನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ರೂಪಿಸಲಾಗಿದೆ. ಹದಿನೈದು ದಿನ ಆಹಾರವಿಲ್ಲ, ಆದರೆ ನೀರು ಮುಕ್ತವಾಗಿ — ಮತ್ತು ಕಾರಣವನ್ನೂ ಅದೇ ಉಸಿರಿನಲ್ಲಿ ಕೊಡಲಾಗಿದೆ: ಪ್ರಾಣ ಆಪೋಮಯ, ಆದ್ದರಿಂದ ಕುಡಿಯುವುದು ಪ್ರಾಣವನ್ನು ಉಳಿಸುತ್ತದೆ, ಅನ್ನದಿಂದ ಕಟ್ಟಿದ ಭಾಗ ಹಸಿಯುತ್ತಿರುವಾಗಲೂ. ತಂದೆ ಒಂದನ್ನು ಸ್ಥಿರವಾಗಿಟ್ಟು ಇನ್ನೊಂದನ್ನು ತೆಗೆಯುತ್ತಿದ್ದಾನೆ. ಇದು ಭಕ್ತಿಯ ಉಪವಾಸವಲ್ಲ; ನಿಯಂತ್ರಣವಿರುವ ಪರೀಕ್ಷೆ.\n\nಹದಿನಾರು ಕಲೆಗಳು ಚೌಕಟ್ಟು, ಮತ್ತು ಆ ಸಂಖ್ಯೆ ಚಂದ್ರನದು. ಮನುಷ್ಯ ಕಲೆಕಲೆಯಾಗಿ ಬೆಳೆದು ಕ್ಷೀಣಿಸುತ್ತಾನೆ, ಚಂದ್ರ ಹದಿನೈದು ಕಲೆಗಳನ್ನು ಕಳೆದುಕೊಳ್ಳುವಂತೆ ಅವನೂ ಹದಿನೈದನ್ನು ಕಳೆದುಕೊಳ್ಳಬಲ್ಲ — ಉಳಿಯುವುದು ಒಂದು, ಮತ್ತು ಮುಂದಿನ ಐದು ಭಾಗಗಳು ಅದರ ಬಗ್ಗೆಯೇ.",
      },
      hi: {
        translation:
          "'हे सौम्य, पुरुष सोलह कलाओं वाला है। पंद्रह दिन मत खाओ। जल इच्छानुसार पियो — प्राण आपोमय है, पीने वाले का प्राण नहीं कटेगा।'",
        explanation:
          "अब तक सब कुछ तर्क था। अब परीक्षा है, और उपकरण है शिष्य का अपना शरीर।\n\nप्रयोग सावधानी से रचा गया है। पंद्रह दिन भोजन नहीं, पर जल मुक्त रूप से — और कारण उसी साँस में दिया गया है: प्राण आपोमय है, इसलिए पीते रहने से प्राण बचा रहेगा जबकि अन्न से बना भाग भूखा रहेगा। पिता एक चर को स्थिर रखकर दूसरा हटा रहा है। यह भक्ति का उपवास नहीं; नियंत्रण सहित एक परीक्षण है।\n\nसोलह कलाएँ ढाँचा हैं, और वह संख्या चंद्रमा की है। मनुष्य कलाओं में बढ़ता और घटता है, और जैसे चंद्रमा पंद्रह कलाएँ खोता है वैसे वह भी पंद्रह खो सकता है — बचती है एक, और अगले पाँच खंड उसी के विषय में हैं।",
      },
    },
  },

  {
    id: "chandogya-6-7-2",
    locator: "6.7.2",
    handle: {
      en: "They do not come to me",
      kn: "ಅವು ನನಗೆ ಹೊಳೆಯುತ್ತಿಲ್ಲ",
      hi: "वे मुझे नहीं सूझतीं",
    },
    sanskrit: [
      "स ह पञ्चदशाहानि नाश ।",
      "अथ हैनमुपससाद किं ब्रवीमि भो इति ।",
      "ऋचः सोम्य यजूंषि सामानीति ।",
      "स होवाच न वै मा प्रतिभान्ति भो इति ॥",
    ],
    iast: [
      "sa ha pañcadaśāhāni nāśa |",
      "atha hainam upasasāda kiṃ bravīmi bho iti |",
      "ṛcaḥ somya yajūṃṣi sāmānīti |",
      "sa hovāca na vai mā pratibhānti bho iti ||",
    ],
    keywords: [
      {
        term: "प्रतिभान्ति",
        iast: "pratibhānti",
        gloss: {
          en: "they shine forth, they occur to me — the verb of recall",
          kn: "ಹೊಳೆಯುತ್ತವೆ, ನೆನಪಿಗೆ ಬರುತ್ತವೆ — ಸ್ಮರಣೆಯ ಕ್ರಿಯಾಪದ",
          hi: "स्फुरित होती हैं, याद आती हैं — स्मरण की क्रिया",
        },
      },
      {
        term: "उपससाद",
        iast: "upasasāda",
        gloss: {
          en: "he approached and sat down — the formal posture of a student",
          kn: "ಹತ್ತಿರ ಬಂದು ಕುಳಿತನು — ಶಿಷ್ಯನ ವಿಧ್ಯುಕ್ತ ಭಂಗಿ",
          hi: "पास आकर बैठा — शिष्य की विधिवत् मुद्रा",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "He did not eat for fifteen days. Then he came to him: 'What shall I recite, sir?' 'The Ṛc verses, my dear, the Yajus and the Sāman.' He said: 'They do not come to me, sir.'",
        explanation:
          "The result is in, and it is devastating in the quietest possible way. Twelve years of memorised Veda, and after a fortnight without food he cannot bring a single line to mind.\n\nWhat has been lost is exactly what he was proud of at 6.1.2. The son who came home stiff with learning now sits in front of his father unable to produce it, and neither of them says a word about the irony.\n\nAnd note what the failure is not. He has not forgotten the Vedas — nothing has been erased. They simply will not shine forth. Pratibhānti is a verb about light: what is there is not lighting up. The father is about to explain that with an image of a fire gone down to one coal, and the diagnosis will be exact — the knowledge is intact, the mind that reaches it has thinned.",
      },
      kn: {
        translation:
          "ಅವನು ಹದಿನೈದು ದಿನ ತಿನ್ನಲಿಲ್ಲ. ಆಮೇಲೆ ತಂದೆಯ ಬಳಿ ಬಂದು ಕುಳಿತು ಕೇಳಿದನು: 'ಸ್ವಾಮಿ, ಏನನ್ನು ಹೇಳಲಿ?' 'ಪ್ರಿಯನೇ, ಋಕ್ಕುಗಳನ್ನು, ಯಜುಸ್ಸುಗಳನ್ನು, ಸಾಮಗಳನ್ನು.' ಅವನು ಹೇಳಿದನು: 'ಸ್ವಾಮಿ, ಅವು ನನಗೆ ಹೊಳೆಯುತ್ತಿಲ್ಲ.'",
        explanation:
          "ಫಲಿತಾಂಶ ಬಂದಿದೆ, ಮತ್ತು ಅದು ಸಾಧ್ಯವಾದಷ್ಟು ಮೌನವಾದ ರೀತಿಯಲ್ಲಿ ಧ್ವಂಸಕಾರಿ. ಹನ್ನೆರಡು ವರ್ಷಗಳ ಕಂಠಪಾಠ ವೇದ, ಮತ್ತು ಹದಿನೈದು ದಿನ ಆಹಾರವಿಲ್ಲದೆ ಒಂದೇ ಸಾಲನ್ನೂ ನೆನಪಿಗೆ ತರಲಾಗುತ್ತಿಲ್ಲ.\n\nಕಳೆದುಹೋಗಿರುವುದು ೬.೧.೨ರಲ್ಲಿ ಅವನು ಯಾವುದರ ಬಗ್ಗೆ ಹೆಮ್ಮೆಪಟ್ಟಿದ್ದನೋ ಅದನ್ನೇ. ವಿದ್ಯೆಯಿಂದ ಬಿಗಿದು ಮನೆಗೆ ಬಂದಿದ್ದ ಮಗ ಈಗ ತಂದೆಯ ಎದುರು ಅದನ್ನು ಹೊರತರಲಾಗದೆ ಕುಳಿತಿದ್ದಾನೆ, ಮತ್ತು ಆ ವಿಪರ್ಯಾಸದ ಬಗ್ಗೆ ಇಬ್ಬರೂ ಒಂದು ಮಾತೂ ಆಡುವುದಿಲ್ಲ.\n\nಈ ಸೋಲು ಏನಲ್ಲ ಎಂಬುದನ್ನೂ ಗಮನಿಸಿ. ಅವನು ವೇದಗಳನ್ನು ಮರೆತಿಲ್ಲ — ಏನೂ ಅಳಿಸಿಹೋಗಿಲ್ಲ. ಅವು ಕೇವಲ ಹೊಳೆಯುತ್ತಿಲ್ಲ. 'ಪ್ರತಿಭಾಂತಿ' ಬೆಳಕಿನ ಕ್ರಿಯಾಪದ: ಇರುವುದು ಬೆಳಗುತ್ತಿಲ್ಲ. ಒಂದೇ ಕೆಂಡಕ್ಕೆ ಇಳಿದ ಬೆಂಕಿಯ ಚಿತ್ರದಿಂದ ತಂದೆ ಅದನ್ನು ವಿವರಿಸಲಿದ್ದಾನೆ, ಮತ್ತು ರೋಗನಿರ್ಣಯ ನಿಖರವಾಗಿರುತ್ತದೆ — ಜ್ಞಾನ ಹಾಗೆಯೇ ಇದೆ, ಅದನ್ನು ತಲುಪುವ ಮನಸ್ಸು ತೆಳುವಾಗಿದೆ.",
      },
      hi: {
        translation:
          "उसने पंद्रह दिन नहीं खाया। फिर वह पास आकर बैठा: 'भगवन्, क्या कहूँ?' 'हे सौम्य, ऋचाएँ, यजुष् और सामन्।' उसने कहा: 'भगवन्, वे मुझे सूझती ही नहीं।'",
        explanation:
          "परिणाम आ गया, और वह सबसे शांत संभव ढंग से विध्वंसक है। बारह वर्ष का कंठस्थ वेद, और पंद्रह दिन बिना भोजन के वह एक पंक्ति भी याद नहीं ला पाता।\n\nजो खोया है वह ठीक वही है जिस पर वह ६.१.२ में गर्वित था। विद्या से अकड़कर घर लौटा पुत्र अब पिता के सामने उसे प्रस्तुत कर पाने में असमर्थ बैठा है, और इस विडंबना पर दोनों में से कोई एक शब्द नहीं कहता।\n\nयह भी देखिए कि यह विफलता क्या नहीं है। उसने वेद भुलाए नहीं — कुछ मिटा नहीं। वे केवल स्फुरित नहीं होते। 'प्रतिभान्ति' प्रकाश की क्रिया है: जो है वह जल नहीं रहा। पिता इसे एक अंगारे तक घटी आग की छवि से समझाने वाला है, और निदान सटीक होगा — ज्ञान ज्यों का त्यों है, उस तक पहुँचने वाला मन क्षीण हो गया है।",
      },
    },
  },

  {
    id: "chandogya-6-7-3",
    locator: "6.7.3",
    handle: {
      en: "One ember the size of a firefly",
      kn: "ಮಿಂಚುಹುಳದಷ್ಟು ಒಂದೇ ಕೆಂಡ",
      hi: "जुगनू भर एक अंगारा",
    },
    sanskrit: [
      "तं होवाच यथा सोम्य महतोऽभ्याहितस्यैकोऽङ्गारः",
      "खद्योतमात्रः परिशिष्टः स्यात्तेन ततोऽपि न बहु दहेत् ।",
      "एवं सोम्य ते षोडशानां कलानामेका कलातिशिष्टा स्यात्",
      "तयैतर्हि वेदान्नानुभवसि ।",
      "अशानाथ मे विज्ञास्यसीति ॥",
    ],
    iast: [
      "taṃ hovāca yathā somya mahato 'bhyāhitasyaiko 'ṅgāraḥ",
      "khadyotamātraḥ pariśiṣṭaḥ syāt tena tato 'pi na bahu dahet |",
      "evaṃ somya te ṣoḍaśānāṃ kalānām ekā kalātiśiṣṭā syāt",
      "tayaitarhi vedān nānubhavasi |",
      "aśānātha me vijñāsyasīti ||",
    ],
    keywords: [
      {
        term: "खद्योतमात्रः",
        iast: "khadyotamātraḥ",
        gloss: {
          en: "only the size of a firefly",
          kn: "ಮಿಂಚುಹುಳದಷ್ಟು ಮಾತ್ರ",
          hi: "केवल जुगनू के बराबर",
        },
      },
      {
        term: "अतिशिष्टा",
        iast: "atiśiṣṭā",
        gloss: {
          en: "left over, remaining after the rest is gone",
          kn: "ಉಳಿದದ್ದು, ಉಳಿದೆಲ್ಲ ಹೋದ ಮೇಲೆ ಬಾಕಿ",
          hi: "बचा हुआ, शेष सब जाने पर जो रहा",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "He said to him: 'Just as, my dear, of a great blazing fire only one ember the size of a firefly might be left, and with that it could not burn much more than that — so, my dear, of your sixteen parts one part is left, and with that you now do not recall the Vedas. Eat, and then you will understand me.'",
        explanation:
          "The diagnosis, and it is a good one. The fire is not out. One coal survives, and it can still burn — only nothing much larger than itself.\n\nThat is exactly the state described in the previous section. Śvetaketu is conscious, walking, able to hold a conversation about his own failure. What he cannot do is illuminate something as large as the three Vedas. Capacity has shrunk to the size of the remaining fuel.\n\nAnd the instruction that follows is startling in a text of this kind: eat, and then you will understand me. Not fast further, not pray. The road back to the Vedas runs through a meal — which is the doctrine of 6.5 and 6.6 stated as a practical direction, and about to be proved by the eating of it.",
      },
      kn: {
        translation:
          "ಅವನಿಗೆ ಹೇಳಿದನು: 'ಪ್ರಿಯನೇ, ದೊಡ್ಡದಾಗಿ ಉರಿಯುತ್ತಿದ್ದ ಬೆಂಕಿಯಿಂದ ಮಿಂಚುಹುಳದಷ್ಟು ಒಂದೇ ಕೆಂಡ ಉಳಿದಿದ್ದರೆ, ಅದರಿಂದ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚಿನದನ್ನು ಸುಡಲಾಗದಂತೆ — ಹಾಗೆಯೇ ಪ್ರಿಯನೇ, ನಿನ್ನ ಹದಿನಾರು ಕಲೆಗಳಲ್ಲಿ ಒಂದೇ ಕಲೆ ಉಳಿದಿದೆ, ಮತ್ತು ಅದರಿಂದ ಈಗ ನಿನಗೆ ವೇದಗಳು ನೆನಪಾಗುತ್ತಿಲ್ಲ. ತಿನ್ನು, ಆಮೇಲೆ ನನ್ನನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವೆ.'",
        explanation:
          "ರೋಗನಿರ್ಣಯ, ಮತ್ತು ಒಳ್ಳೆಯದು. ಬೆಂಕಿ ಆರಿಲ್ಲ. ಒಂದು ಕೆಂಡ ಉಳಿದಿದೆ, ಮತ್ತು ಅದು ಇನ್ನೂ ಸುಡಬಲ್ಲದು — ಆದರೆ ತನಗಿಂತ ದೊಡ್ಡದೇನನ್ನೂ ಅಲ್ಲ.\n\nಹಿಂದಿನ ಭಾಗದಲ್ಲಿ ವರ್ಣಿಸಿದ ಸ್ಥಿತಿ ನಿಖರವಾಗಿ ಇದೇ. ಶ್ವೇತಕೇತು ಪ್ರಜ್ಞೆಯಲ್ಲಿದ್ದಾನೆ, ನಡೆದಾಡುತ್ತಿದ್ದಾನೆ, ತನ್ನ ಸೋಲಿನ ಬಗ್ಗೆ ಸಂಭಾಷಣೆ ನಡೆಸಬಲ್ಲ. ಅವನಿಗೆ ಆಗದಿರುವುದು — ಮೂರು ವೇದಗಳಷ್ಟು ದೊಡ್ಡದನ್ನು ಬೆಳಗಿಸುವುದು. ಸಾಮರ್ಥ್ಯ ಉಳಿದ ಇಂಧನದ ಗಾತ್ರಕ್ಕೆ ಕುಗ್ಗಿದೆ.\n\nಮತ್ತು ಮುಂದಿನ ಆದೇಶ ಈ ಬಗೆಯ ಪಠ್ಯದಲ್ಲಿ ಅಚ್ಚರಿ ಹುಟ್ಟಿಸುವಂಥದ್ದು: ತಿನ್ನು, ಆಮೇಲೆ ನನ್ನನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವೆ. ಇನ್ನಷ್ಟು ಉಪವಾಸವಲ್ಲ, ಪ್ರಾರ್ಥನೆಯಲ್ಲ. ವೇದಗಳಿಗೆ ಮರಳುವ ದಾರಿ ಒಂದು ಊಟದ ಮೂಲಕ ಹಾದುಹೋಗುತ್ತದೆ — ೬.೫ ಮತ್ತು ೬.೬ರ ಸಿದ್ಧಾಂತವನ್ನು ಪ್ರಾಯೋಗಿಕ ಸೂಚನೆಯಾಗಿ ಹೇಳಿದ್ದು, ಮತ್ತು ಅದನ್ನು ತಿಂದೇ ಸಾಬೀತುಪಡಿಸಲಿರುವುದು.",
      },
      hi: {
        translation:
          "उन्होंने उससे कहा: 'हे सौम्य, जैसे किसी बड़ी धधकती आग का जुगनू भर एक ही अंगारा शेष रह जाए, और उससे उससे बड़ा कुछ न जलाया जा सके — वैसे ही हे सौम्य, तुम्हारी सोलह कलाओं में से एक ही कला शेष है, और उससे इस समय तुम वेदों को याद नहीं कर पाते। खाओ, फिर तुम मुझे समझोगे।'",
        explanation:
          "निदान, और अच्छा निदान। आग बुझी नहीं है। एक अंगारा बचा है, और वह अब भी जला सकता है — बस अपने से बड़ा कुछ नहीं।\n\nपिछले खंड में वर्णित स्थिति ठीक यही है। श्वेतकेतु होश में है, चल-फिर रहा है, अपनी विफलता पर बातचीत कर सकता है। जो वह नहीं कर सकता वह है तीन वेदों जितनी बड़ी वस्तु को प्रकाशित करना। सामर्थ्य बचे हुए ईंधन के आकार तक सिमट गया है।\n\nऔर आगे का आदेश इस प्रकार के पाठ में चौंकाने वाला है: खाओ, फिर तुम मुझे समझोगे। और उपवास नहीं, प्रार्थना नहीं। वेदों तक लौटने का रास्ता एक भोजन से होकर जाता है — यह ६.५ और ६.६ का सिद्धांत ही है, व्यावहारिक निर्देश के रूप में, और अब खाकर ही सिद्ध होने वाला।",
      },
    },
  },

  {
    id: "chandogya-6-7-4",
    locator: "6.7.4",
    handle: {
      en: "Then he ate",
      kn: "ಆಮೇಲೆ ಅವನು ತಿಂದನು",
      hi: "फिर उसने खाया",
    },
    sanskrit: [
      "स हाश । अथ हैनमुपससाद ।",
      "तं ह यत्किंच पप्रच्छ सर्वं ह प्रतिपेदे ॥",
    ],
    iast: [
      "sa hāśa | atha hainam upasasāda |",
      "taṃ ha yat kiṃ ca papraccha sarvaṃ ha pratipede ||",
    ],
    keywords: [
      {
        term: "प्रतिपेदे",
        iast: "pratipede",
        gloss: {
          en: "he answered, he came through with it",
          kn: "ಉತ್ತರಿಸಿದನು, ಸರಿಯಾಗಿ ಒಪ್ಪಿಸಿದನು",
          hi: "उत्तर दिया, ठीक-ठीक प्रस्तुत किया",
        },
      },
      {
        term: "यत्किंच",
        iast: "yat kiṃ ca",
        gloss: {
          en: "whatever at all — nothing was left out of the questioning",
          kn: "ಏನೇನನ್ನೋ — ಪ್ರಶ್ನೆಯಿಂದ ಏನೂ ಉಳಿಯಲಿಲ್ಲ",
          hi: "जो कुछ भी — पूछने से कुछ नहीं छूटा",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "He ate. Then he came to him, and whatever he asked him, he answered it all.",
        explanation:
          "One of the shortest sections in the chapter, and it carries the entire experimental result. He ate; he came back; he answered everything.\n\nThe brevity is the effect. There is no scene of recovery, no description of the meal, no wonder expressed by either man. The prediction was made in 6.7.3, the food was taken, and the outcome is reported in the flattest available sentence — which is how a result is reported by someone who expected it.\n\nWhat has been demonstrated is precise: the Vedas were never lost, and eating restored not the knowledge but the mind that reaches it. Between 6.7.2 and here, nothing has been added to Śvetaketu except food.",
      },
      kn: {
        translation:
          "ಅವನು ತಿಂದನು. ಆಮೇಲೆ ತಂದೆಯ ಬಳಿ ಬಂದನು, ಮತ್ತು ಅವನು ಏನೇನನ್ನು ಕೇಳಿದನೋ ಎಲ್ಲಕ್ಕೂ ಉತ್ತರಿಸಿದನು.",
        explanation:
          "ಅಧ್ಯಾಯದ ಅತ್ಯಂತ ಚಿಕ್ಕ ಭಾಗಗಳಲ್ಲಿ ಒಂದು, ಮತ್ತು ಅದು ಇಡೀ ಪ್ರಯೋಗದ ಫಲಿತಾಂಶವನ್ನು ಹೊತ್ತಿದೆ. ಅವನು ತಿಂದನು; ಮರಳಿ ಬಂದನು; ಎಲ್ಲಕ್ಕೂ ಉತ್ತರಿಸಿದನು.\n\nಈ ಸಂಕ್ಷಿಪ್ತತೆಯೇ ಪರಿಣಾಮ. ಚೇತರಿಕೆಯ ದೃಶ್ಯವಿಲ್ಲ, ಊಟದ ವರ್ಣನೆಯಿಲ್ಲ, ಇಬ್ಬರಲ್ಲಿ ಯಾರೂ ಅಚ್ಚರಿ ವ್ಯಕ್ತಪಡಿಸುವುದಿಲ್ಲ. ೬.೭.೩ರಲ್ಲಿ ಭವಿಷ್ಯ ನುಡಿಯಲಾಗಿತ್ತು, ಆಹಾರ ತೆಗೆದುಕೊಳ್ಳಲಾಯಿತು, ಫಲಿತಾಂಶವನ್ನು ಸಿಗುವ ಅತ್ಯಂತ ಸಪಾಟು ವಾಕ್ಯದಲ್ಲಿ ವರದಿ ಮಾಡಲಾಗಿದೆ — ನಿರೀಕ್ಷಿಸಿದವನು ಫಲಿತಾಂಶವನ್ನು ವರದಿ ಮಾಡುವುದು ಹೀಗೆಯೇ.\n\nತೋರಿಸಲ್ಪಟ್ಟದ್ದು ನಿಖರ: ವೇದಗಳು ಎಂದೂ ಕಳೆದುಹೋಗಿರಲಿಲ್ಲ, ಮತ್ತು ಊಟ ಮರಳಿಸಿದ್ದು ಜ್ಞಾನವನ್ನಲ್ಲ, ಅದನ್ನು ತಲುಪುವ ಮನಸ್ಸನ್ನು. ೬.೭.೨ರಿಂದ ಇಲ್ಲಿಯವರೆಗೆ ಶ್ವೇತಕೇತುವಿಗೆ ಸೇರಿಸಿದ್ದು ಆಹಾರವೊಂದನ್ನೇ.",
      },
      hi: {
        translation:
          "उसने खाया। फिर वह पास आकर बैठा, और उन्होंने जो कुछ भी पूछा, उसने सब का उत्तर दिया।",
        explanation:
          "अध्याय के सबसे छोटे खंडों में से एक, और वह पूरे प्रयोग का परिणाम ढोता है। उसने खाया; वह लौटा; उसने सब उत्तर दिए।\n\nयह संक्षिप्तता ही प्रभाव है। स्वस्थ होने का कोई दृश्य नहीं, भोजन का वर्णन नहीं, दोनों में से किसी का विस्मय नहीं। भविष्यवाणी ६.७.३ में हुई थी, भोजन लिया गया, और परिणाम सबसे सपाट उपलब्ध वाक्य में दर्ज है — जिसे परिणाम की अपेक्षा थी वह उसे ऐसे ही दर्ज करता है।\n\nजो सिद्ध हुआ वह सटीक है: वेद कभी खोए ही नहीं थे, और भोजन ने ज्ञान नहीं, उस तक पहुँचने वाला मन लौटाया। ६.७.२ से यहाँ तक श्वेतकेतु में केवल भोजन जोड़ा गया है।",
      },
    },
  },

  {
    id: "chandogya-6-7-5",
    locator: "6.7.5",
    handle: {
      en: "Heap grass on it and blow",
      kn: "ಹುಲ್ಲು ಹಾಕಿ ಊದು",
      hi: "तृण डालकर फूँको",
    },
    sanskrit: [
      "तं होवाच यथा सोम्य महतोऽभ्याहितस्यैकोऽङ्गारः",
      "खद्योतमात्रः परिशिष्टः स्यात्",
      "तं तृणैरुपसमाधाय प्राज्वलयेत्",
      "तेन ततोऽपि बहु दहेत् ॥",
    ],
    iast: [
      "taṃ hovāca yathā somya mahato 'bhyāhitasyaiko 'ṅgāraḥ",
      "khadyotamātraḥ pariśiṣṭaḥ syāt",
      "taṃ tṛṇair upasamādhāya prājvalayet",
      "tena tato 'pi bahu dahet ||",
    ],
    keywords: [
      {
        term: "उपसमाधाय",
        iast: "upasamādhāya",
        gloss: {
          en: "having laid on, having heaped around",
          kn: "ಮೇಲೆ ಹಾಕಿ, ಸುತ್ತಲೂ ಒಟ್ಟಿ",
          hi: "ऊपर रखकर, चारों ओर लगाकर",
        },
      },
      {
        term: "प्राज्वलयेत्",
        iast: "prājvalayet",
        gloss: {
          en: "one would blaze it up again",
          kn: "ಮತ್ತೆ ಪ್ರಜ್ವಲಿಸುವಂತೆ ಮಾಡಬಹುದು",
          hi: "फिर से प्रज्वलित कर दे",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "He said to him: 'Just as, my dear, of a great blazing fire only one ember the size of a firefly might be left, and one were to heap grass upon it and make it blaze — with that it could then burn a great deal.'",
        explanation:
          "The same image as 6.7.3, run forwards. There the coal was evidence of loss; here it is evidence of what one coal is worth if you give it something to burn.\n\nThe method is exactly as before: a claim, a demonstration, then the claim restated with the demonstration inside it. But the image has changed meaning without changing a word of its setup — the fire that could not burn much is the fire that can burn a great deal, and the only difference is grass.\n\nSaid of a student, this is a remarkably unsentimental account of what teaching is. Nothing was put into Śvetaketu that was not already there. What was needed was fuel, and the ember did the rest itself.",
      },
      kn: {
        translation:
          "ಅವನಿಗೆ ಹೇಳಿದನು: 'ಪ್ರಿಯನೇ, ದೊಡ್ಡದಾಗಿ ಉರಿಯುತ್ತಿದ್ದ ಬೆಂಕಿಯಿಂದ ಮಿಂಚುಹುಳದಷ್ಟು ಒಂದೇ ಕೆಂಡ ಉಳಿದಿದ್ದು, ಅದರ ಮೇಲೆ ಹುಲ್ಲನ್ನು ಹಾಕಿ ಪ್ರಜ್ವಲಿಸುವಂತೆ ಮಾಡಿದರೆ — ಆಗ ಅದರಿಂದ ಬಹಳಷ್ಟನ್ನು ಸುಡಬಹುದು.'",
        explanation:
          "೬.೭.೩ರ ಅದೇ ಚಿತ್ರ, ಈಗ ಮುಂದುಮುಖವಾಗಿ. ಅಲ್ಲಿ ಕೆಂಡ ನಷ್ಟದ ಸಾಕ್ಷಿಯಾಗಿತ್ತು; ಇಲ್ಲಿ ಅದು — ಸುಡಲು ಏನಾದರೂ ಕೊಟ್ಟರೆ ಒಂದೇ ಕೆಂಡ ಎಷ್ಟು ಬೆಲೆಬಾಳುತ್ತದೆ ಎಂಬುದರ ಸಾಕ್ಷಿ.\n\nಕ್ರಮ ಮೊದಲಿನಂತೆಯೇ: ಒಂದು ಪ್ರತಿಪಾದನೆ, ಒಂದು ಪ್ರದರ್ಶನ, ಆಮೇಲೆ ಪ್ರದರ್ಶನವನ್ನು ಒಳಗೊಂಡ ಪ್ರತಿಪಾದನೆಯ ಪುನರುಕ್ತಿ. ಆದರೆ ಚಿತ್ರದ ಸಿದ್ಧತೆಯಲ್ಲಿ ಒಂದು ಪದವೂ ಬದಲಾಗದೆ ಅರ್ಥ ಬದಲಾಗಿದೆ — ಹೆಚ್ಚು ಸುಡಲಾಗದಿದ್ದ ಬೆಂಕಿಯೇ ಬಹಳಷ್ಟನ್ನು ಸುಡಬಲ್ಲ ಬೆಂಕಿ, ಮತ್ತು ವ್ಯತ್ಯಾಸವಿರುವುದು ಹುಲ್ಲಿನಲ್ಲಿ ಮಾತ್ರ.\n\nಶಿಷ್ಯನ ಬಗ್ಗೆ ಹೇಳಿದಾಗ, ಬೋಧನೆ ಎಂದರೇನೆಂಬುದರ ಬಗ್ಗೆ ಇದು ಗಮನಾರ್ಹವಾಗಿ ಭಾವುಕತೆಯಿಲ್ಲದ ವಿವರಣೆ. ಶ್ವೇತಕೇತುವಿನಲ್ಲಿ ಆಗಲೇ ಇಲ್ಲದ್ದನ್ನು ಯಾವುದನ್ನೂ ಹಾಕಿಲ್ಲ. ಬೇಕಿದ್ದದ್ದು ಇಂಧನ, ಮತ್ತು ಉಳಿದದ್ದನ್ನು ಕೆಂಡವೇ ಮಾಡಿಕೊಂಡಿತು.",
      },
      hi: {
        translation:
          "उन्होंने उससे कहा: 'हे सौम्य, जैसे किसी बड़ी धधकती आग का जुगनू भर एक ही अंगारा शेष रह जाए, और उस पर तृण डालकर उसे प्रज्वलित कर दिया जाए — तब उससे बहुत कुछ जलाया जा सकता है।'",
        explanation:
          "६.७.३ की वही छवि, अब आगे की ओर चली। वहाँ अंगारा हानि का प्रमाण था; यहाँ वह इस बात का प्रमाण है कि जलाने को कुछ मिल जाए तो एक अंगारा कितने काम का है।\n\nपद्धति ठीक पहले जैसी है: एक दावा, एक प्रदर्शन, फिर प्रदर्शन को भीतर समेटे हुए दावे की पुनरुक्ति। पर छवि की भूमिका में एक शब्द बदले बिना अर्थ बदल गया है — जो आग बहुत नहीं जला सकती थी वही बहुत जला सकती है, और अंतर केवल तृण का है।\n\nशिष्य के विषय में कहा जाए तो शिक्षण क्या है, इसका यह उल्लेखनीय रूप से भावुकता-रहित विवरण है। श्वेतकेतु में ऐसा कुछ नहीं डाला गया जो पहले से न हो। ज़रूरत ईंधन की थी, और बाकी काम अंगारे ने स्वयं किया।",
      },
    },
  },

  {
    id: "chandogya-6-7-6",
    locator: "6.7.6",
    handle: {
      en: "So he understood — so he understood",
      kn: "ಹಾಗೆ ಅವನು ತಿಳಿದನು — ತಿಳಿದನು",
      hi: "और उसने समझा — समझा",
    },
    sanskrit: [
      "एवं सोम्य ते षोडशानां कलानामेका कलातिशिष्टाभूत्",
      "सान्नेनोपसमाहिता प्राज्वालीत्",
      "तयैतर्हि वेदाननुभवस्य्",
      "अन्नमयं हि सोम्य मन आपोमयः प्राणस्तेजोमयी वागिति ।",
      "तद्धास्य विजज्ञाविति विजज्ञाविति ॥",
    ],
    iast: [
      "evaṃ somya te ṣoḍaśānāṃ kalānām ekā kalātiśiṣṭābhūt",
      "sānnenopasamāhitā prājvālīt",
      "tayaitarhi vedān anubhavasy",
      "annamayaṃ hi somya mana āpomayaḥ prāṇas tejomayī vāg iti |",
      "tad dhāsya vijajñāv iti vijajñāv iti ||",
    ],
    keywords: [
      {
        term: "सान्नेनोपसमाहिता",
        iast: "sānnenopasamāhitā",
        gloss: {
          en: "it, being fed with food, was built up again",
          kn: "ಅನ್ನದಿಂದ ಪೋಷಿಸಲ್ಪಟ್ಟು ಮತ್ತೆ ಕಟ್ಟಲ್ಪಟ್ಟಿತು",
          hi: "अन्न से पोषित होकर फिर से चुन दी गई",
        },
      },
      {
        term: "विजज्ञौ",
        iast: "vijajñau",
        gloss: {
          en: "he understood — repeated to mark the end of a section",
          kn: "ಅವನು ತಿಳಿದನು — ಭಾಗದ ಅಂತ್ಯ ಸೂಚಿಸಲು ಪುನರುಕ್ತ",
          hi: "उसने समझा — खंड का अंत सूचित करने को दोहराया",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "'So, my dear, of your sixteen parts one part was left; fed with food, it was built up again and blazed. With that you now recall the Vedas. For mind, my dear, is made of food; breath is made of water; speech is made of heat.' And he understood it — he understood it.",
        explanation:
          "The experiment is closed and the conclusion restated for the third time, now with evidence behind it rather than argument. Mind is made of food, and the proof is that this student lost his Vedas and got them back by eating.\n\nThe doubled ending — vijajñāv iti vijajñāv iti, he understood, he understood — is a formal marker of closure in this text, and it also says something true. This is the first time in the chapter that Śvetaketu is described as having understood anything. He has been asking since 6.1.7; now, for the moment, he has arrived.\n\nAnd the chapter is not half over. What he has understood is the constitution of a person: three intakes, three faculties, sixteen parts. What has not yet been said is what all of it rests on — and the next khaṇḍa begins by asking him about sleep.",
      },
      kn: {
        translation:
          "'ಹಾಗೆಯೇ ಪ್ರಿಯನೇ, ನಿನ್ನ ಹದಿನಾರು ಕಲೆಗಳಲ್ಲಿ ಒಂದು ಉಳಿದಿತ್ತು; ಅನ್ನದಿಂದ ಪೋಷಿತವಾಗಿ ಅದು ಮತ್ತೆ ಕಟ್ಟಿಕೊಂಡು ಪ್ರಜ್ವಲಿಸಿತು. ಅದರಿಂದಲೇ ಈಗ ನಿನಗೆ ವೇದಗಳು ನೆನಪಾಗುತ್ತಿವೆ. ಪ್ರಿಯನೇ, ಮನಸ್ಸು ಅನ್ನಮಯ; ಪ್ರಾಣ ಆಪೋಮಯ; ವಾಕ್ ತೇಜೋಮಯೀ.' ಮತ್ತು ಅವನು ಅದನ್ನು ತಿಳಿದನು — ತಿಳಿದನು.",
        explanation:
          "ಪ್ರಯೋಗ ಮುಗಿಯಿತು ಮತ್ತು ತೀರ್ಮಾನ ಮೂರನೆಯ ಬಾರಿ ಹೇಳಲ್ಪಟ್ಟಿತು, ಈಗ ವಾದವಲ್ಲ ಸಾಕ್ಷ್ಯ ಅದರ ಹಿಂದಿದೆ. ಮನಸ್ಸು ಅನ್ನಮಯ, ಮತ್ತು ಸಾಕ್ಷಿ ಇದು — ಈ ಶಿಷ್ಯ ತನ್ನ ವೇದಗಳನ್ನು ಕಳೆದುಕೊಂಡು ತಿಂದು ಮರಳಿ ಪಡೆದನು.\n\nದ್ವಿಗುಣಿತ ಅಂತ್ಯ — 'ವಿಜಜ್ಞಾವಿತಿ ವಿಜಜ್ಞಾವಿತಿ', ತಿಳಿದನು, ತಿಳಿದನು — ಈ ಪಠ್ಯದಲ್ಲಿ ಸಮಾಪ್ತಿಯ ವಿಧ್ಯುಕ್ತ ಗುರುತು, ಮತ್ತು ಅದು ನಿಜವಾದದ್ದನ್ನೂ ಹೇಳುತ್ತದೆ. ಶ್ವೇತಕೇತು ಏನನ್ನಾದರೂ ತಿಳಿದನೆಂದು ಈ ಅಧ್ಯಾಯದಲ್ಲಿ ಹೇಳಿರುವುದು ಇದೇ ಮೊದಲು. ೬.೧.೭ರಿಂದ ಅವನು ಕೇಳುತ್ತಲೇ ಇದ್ದಾನೆ; ಈಗ, ಸದ್ಯಕ್ಕೆ, ತಲುಪಿದ್ದಾನೆ.\n\nಆದರೆ ಅಧ್ಯಾಯ ಇನ್ನೂ ಅರ್ಧವೂ ಆಗಿಲ್ಲ. ಅವನು ತಿಳಿದದ್ದು ಮನುಷ್ಯನ ರಚನೆಯನ್ನು: ಮೂರು ಸೇವನೆ, ಮೂರು ಸಾಮರ್ಥ್ಯ, ಹದಿನಾರು ಕಲೆ. ಇನ್ನೂ ಹೇಳದಿರುವುದು — ಇದೆಲ್ಲ ಯಾವುದರ ಮೇಲೆ ನಿಂತಿದೆ ಎಂಬುದು; ಮತ್ತು ಮುಂದಿನ ಖಂಡ ಅವನಿಗೆ ನಿದ್ರೆಯ ಬಗ್ಗೆ ಕೇಳುವುದರಿಂದ ಆರಂಭವಾಗುತ್ತದೆ.",
      },
      hi: {
        translation:
          "'इसी प्रकार हे सौम्य, तुम्हारी सोलह कलाओं में से एक शेष थी; अन्न से पोषित होकर वह फिर चुन दी गई और प्रज्वलित हुई। उसी से अब तुम वेदों को स्मरण करते हो। क्योंकि हे सौम्य, मन अन्नमय है; प्राण आपोमय है; वाक् तेजोमयी है।' और उसने यह समझ लिया — समझ लिया।",
        explanation:
          "प्रयोग समाप्त हुआ और निष्कर्ष तीसरी बार दोहराया गया, अब उसके पीछे तर्क नहीं प्रमाण है। मन अन्नमय है, और प्रमाण यह कि इस शिष्य ने अपने वेद खोए और खाकर वापस पा लिए।\n\nदोहरा अंत — 'विजज्ञाविति विजज्ञाविति', उसने समझा, उसने समझा — इस पाठ में समाप्ति का विधिवत् चिह्न है, और वह एक सच्ची बात भी कहता है। इस अध्याय में पहली बार श्वेतकेतु के विषय में कहा गया है कि उसने कुछ समझा। ६.१.७ से वह पूछता ही आ रहा है; अब, फ़िलहाल, वह पहुँचा है।\n\nऔर अध्याय अभी आधा भी नहीं हुआ। उसने जो समझा वह मनुष्य की रचना है: तीन ग्रहण, तीन शक्तियाँ, सोलह कलाएँ। जो अभी नहीं कहा गया वह यह है कि यह सब किस पर टिका है — और अगला खंड उससे नींद के विषय में पूछकर आरंभ होता है।",
      },
    },
  },
];

registerText({
  slug: "chandogya",
  textId: "t-chandogya",
  verses: VERSES,
  completeness: "selections",
  covers: {
    en: "Chapter six entire — all sixteen khaṇḍas of the Uddālaka–Śvetaketu teaching, where Tat Tvam Asi is given nine times. The Chāndogya's other seven chapters are not here.",
    kn: "ಆರನೆಯ ಅಧ್ಯಾಯ ಸಂಪೂರ್ಣ — ಉದ್ದಾಲಕ–ಶ್ವೇತಕೇತು ಬೋಧನೆಯ ಹದಿನಾರೂ ಖಂಡಗಳು, ಇಲ್ಲಿಯೇ ತತ್ತ್ವಮಸಿ ಒಂಬತ್ತು ಬಾರಿ ಬರುತ್ತದೆ. ಛಾಂದೋಗ್ಯದ ಉಳಿದ ಏಳು ಅಧ್ಯಾಯಗಳು ಇಲ್ಲಿಲ್ಲ.",
    hi: "छठा अध्याय सम्पूर्ण — उद्दालक–श्वेतकेतु उपदेश के सोलहों खंड, जहाँ तत्त्वमसि नौ बार दिया गया है। छान्दोग्य के शेष सात अध्याय यहाँ नहीं हैं।",
  },
});
