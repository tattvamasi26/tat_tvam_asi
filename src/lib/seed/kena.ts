import { registerText, type FullVerse } from "./upanishads";
import { KENA_VIDEOS, KENA_SERIES } from "./lectures";

// ─────────────────────────────────────────────────────────
//  Kena Upaniṣad — the complete text.
//
//  Thirty-five sections in four khaṇḍas, belonging to the
//  Talavakāra Brāhmaṇa of the Sāmaveda — which is why it is also
//  called the Talavakāra Upaniṣad.
//
//  Its shape is unusual and deliberate. The first two khaṇḍas are
//  verse and argue the hardest epistemological point in the
//  Upaniṣads: that the knower cannot be made an object of its own
//  knowing. The last two are prose, and tell a story about three
//  gods who could not identify a spirit standing in front of them.
//
//  Those halves are not a seam between two texts. The story is the
//  argument restated for anyone the argument did not reach: Agni
//  and Vāyu fail at exactly the point the verses said they must,
//  and Indra succeeds only when he stops trying to grasp and is
//  told instead.
//
//  Citation status is the same as everywhere on the site: the mūla
//  is the received text; the translations and commentary are the
//  site's own editorial work and are labelled as such.
// ─────────────────────────────────────────────────────────

const VERSES: FullVerse[] = [
  {
    id: "kena-shanti",
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
        term: "निराकुर्याम्",
        iast: "nirākuryām",
        gloss: {
          en: "may I reject, deny, turn away",
          kn: "ನಾನು ನಿರಾಕರಿಸದಿರಲಿ",
          hi: "मैं निराकरण न करूँ",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "May my limbs be nourished — speech, breath, eye, ear, and all my strength and senses. All is the Brahman of the Upaniṣads. May I never deny Brahman; may Brahman never deny me. Let there be no denial at all. Om — peace, peace, peace.",
        explanation:
          "The Sāmaveda's peace invocation, and it asks for something concrete before it asks for anything spiritual: working senses. The text about to be read will argue that the senses cannot reach Brahman, so it is worth noticing that it opens by asking for them to be strong. Nothing here treats the body as an obstacle.\n\nThe central petition is oddly negative — not 'may I know Brahman' but 'may I not deny it, and may it not deny me'. Anirākaraṇa, non-denial, is a smaller thing to ask for than knowledge and a more honest one. Given what the first khaṇḍa is about to say about the limits of knowing, asking merely not to turn away is exactly the right size of request.",
      },
      kn: {
        translation:
          "ನನ್ನ ಅಂಗಗಳು ಪುಷ್ಟವಾಗಲಿ — ವಾಕ್, ಪ್ರಾಣ, ಕಣ್ಣು, ಕಿವಿ, ಬಲ ಮತ್ತು ಎಲ್ಲ ಇಂದ್ರಿಯಗಳು. ಎಲ್ಲವೂ ಉಪನಿಷತ್ತುಗಳ ಬ್ರಹ್ಮವೇ. ನಾನು ಬ್ರಹ್ಮವನ್ನು ನಿರಾಕರಿಸದಿರಲಿ; ಬ್ರಹ್ಮ ನನ್ನನ್ನು ನಿರಾಕರಿಸದಿರಲಿ. ನಿರಾಕರಣವೇ ಇಲ್ಲದಿರಲಿ. ಓಂ — ಶಾಂತಿ, ಶಾಂತಿ, ಶಾಂತಿ.",
        explanation:
          "ಸಾಮವೇದದ ಶಾಂತಿಮಂತ್ರ, ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕವಾದ ಯಾವುದನ್ನೂ ಕೇಳುವ ಮೊದಲು ಅದು ಒಂದು ಸ್ಥೂಲ ಸಂಗತಿಯನ್ನು ಕೇಳುತ್ತದೆ: ಕೆಲಸ ಮಾಡುವ ಇಂದ್ರಿಯಗಳು. ಇಂದ್ರಿಯಗಳು ಬ್ರಹ್ಮವನ್ನು ತಲುಪಲಾರವು ಎಂದು ಮುಂದೆ ವಾದಿಸಲಿರುವ ಪಠ್ಯವು ಅವು ಬಲವಾಗಿರಲಿ ಎಂದು ಕೇಳುತ್ತಾ ಆರಂಭವಾಗುವುದು ಗಮನಾರ್ಹ. ಇಲ್ಲಿ ಶರೀರವನ್ನು ಅಡ್ಡಿಯೆಂದು ಪರಿಗಣಿಸಿಲ್ಲ.\n\nಮುಖ್ಯ ಪ್ರಾರ್ಥನೆ ವಿಚಿತ್ರವಾಗಿ ನಕಾರಾತ್ಮಕ — 'ಬ್ರಹ್ಮವನ್ನು ತಿಳಿಯಲಿ' ಎಂದಲ್ಲ, 'ನಾನು ಅದನ್ನು ನಿರಾಕರಿಸದಿರಲಿ, ಅದು ನನ್ನನ್ನು ನಿರಾಕರಿಸದಿರಲಿ' ಎಂದು. 'ಅನಿರಾಕರಣ' ಎಂಬುದು ಜ್ಞಾನಕ್ಕಿಂತ ಚಿಕ್ಕ ಬೇಡಿಕೆ ಮತ್ತು ಹೆಚ್ಚು ಪ್ರಾಮಾಣಿಕವಾದದ್ದು. ತಿಳಿಯುವಿಕೆಯ ಮಿತಿಗಳ ಬಗ್ಗೆ ಮೊದಲ ಖಂಡ ಹೇಳಲಿರುವುದನ್ನು ನೋಡಿದರೆ, ಕೇವಲ ಮುಖ ತಿರುಗಿಸದಿರಲಿ ಎಂದು ಕೇಳುವುದೇ ಸರಿಯಾದ ಗಾತ್ರದ ಕೋರಿಕೆ.",
      },
      hi: {
        translation:
          "मेरे अंग पुष्ट हों — वाक्, प्राण, चक्षु, श्रोत्र, बल और समस्त इंद्रियाँ। सब कुछ उपनिषदों का ब्रह्म ही है। मैं ब्रह्म का निराकरण न करूँ; ब्रह्म मेरा निराकरण न करे। निराकरण हो ही नहीं। ॐ — शांति, शांति, शांति।",
        explanation:
          "सामवेद का शांतिमंत्र, और आध्यात्मिक कुछ माँगने से पहले वह एक ठोस वस्तु माँगता है: काम करती इंद्रियाँ। जो पाठ आगे यह तर्क करेगा कि इंद्रियाँ ब्रह्म तक नहीं पहुँच सकतीं, वही उनके सशक्त होने की प्रार्थना से आरंभ होता है — यह ध्यान देने योग्य है। यहाँ शरीर को बाधा नहीं माना गया।\n\nकेंद्रीय याचना विचित्र रूप से नकारात्मक है — 'मैं ब्रह्म को जानूँ' नहीं, बल्कि 'मैं उसका निराकरण न करूँ, वह मेरा निराकरण न करे'। 'अनिराकरण' ज्ञान से छोटी माँग है और अधिक ईमानदार भी। ज्ञान की सीमाओं के विषय में प्रथम खंड जो कहने वाला है, उसे देखते हुए केवल मुँह न मोड़ने की प्रार्थना ही उचित आकार की है।",
      },
    },
  },

  {
    id: "kena-1-1",
    locator: "1.1",
    handle: {
      en: "By whom impelled?",
      kn: "ಯಾರಿಂದ ಪ್ರೇರಿತ?",
      hi: "किससे प्रेरित?",
    },
    sanskrit: [
      "ॐ केनेषितं पतति प्रेषितं मनः",
      "केन प्राणः प्रथमः प्रैति युक्तः ।",
      "केनेषितां वाचमिमां वदन्ति",
      "चक्षुः श्रोत्रं क उ देवो युनक्ति ॥",
    ],
    iast: [
      "oṃ keneṣitaṃ patati preṣitaṃ manaḥ",
      "kena prāṇaḥ prathamaḥ praiti yuktaḥ |",
      "keneṣitāṃ vācam imāṃ vadanti",
      "cakṣuḥ śrotraṃ ka u devo yunakti ||",
    ],
    keywords: [
      {
        term: "केन",
        iast: "kena",
        gloss: {
          en: "by whom, by what — the word the text is named for",
          kn: "ಯಾರಿಂದ, ಯಾವುದರಿಂದ — ಪಠ್ಯಕ್ಕೆ ಹೆಸರು ಕೊಟ್ಟ ಪದ",
          hi: "किससे, किसके द्वारा — वही शब्द जिससे पाठ का नाम है",
        },
      },
      {
        term: "युनक्ति",
        iast: "yunakti",
        gloss: {
          en: "yokes, harnesses, sets to work",
          kn: "ಜೋಡಿಸುತ್ತಾನೆ, ಕೆಲಸಕ್ಕೆ ಹಚ್ಚುತ್ತಾನೆ",
          hi: "जोड़ता है, नियुक्त करता है",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "By whom impelled does the mind fly to its object? By whom commanded does the first breath go forth? By whom impelled is this speech that people utter? What god yokes the eye and the ear?",
        explanation:
          "The text opens with a question and takes its name from the first word of it — kena, 'by whom'. Four faculties are named: mind, breath, speech, eye and ear. None is denied. What is asked is what sets them going.\n\nThe verb yunakti is the key: it means to yoke, as one yokes an animal to a cart. The senses are being treated as instruments, and an instrument by definition does not operate itself. So the question is not mystical but strictly logical — if every faculty you have is something being used, who is using it? Note that the student asks this. The whole Upaniṣad is a reply to a question somebody was troubled enough to ask.",
      },
      kn: {
        translation:
          "ಯಾರಿಂದ ಪ್ರೇರಿತವಾಗಿ ಮನಸ್ಸು ತನ್ನ ವಿಷಯದತ್ತ ಹಾರುತ್ತದೆ? ಯಾರ ಆಜ್ಞೆಯಿಂದ ಮೊದಲ ಪ್ರಾಣ ಹೊರಡುತ್ತದೆ? ಯಾರಿಂದ ಪ್ರೇರಿತವಾಗಿ ಜನರು ಈ ಮಾತನ್ನು ಆಡುತ್ತಾರೆ? ಯಾವ ದೇವನು ಕಣ್ಣನ್ನೂ ಕಿವಿಯನ್ನೂ ಜೋಡಿಸುತ್ತಾನೆ?",
        explanation:
          "ಪಠ್ಯವು ಒಂದು ಪ್ರಶ್ನೆಯಿಂದ ಆರಂಭವಾಗುತ್ತದೆ ಮತ್ತು ಅದರ ಮೊದಲ ಪದದಿಂದಲೇ ತನ್ನ ಹೆಸರನ್ನು ಪಡೆಯುತ್ತದೆ — 'ಕೇನ', ಅಂದರೆ 'ಯಾರಿಂದ'. ನಾಲ್ಕು ಶಕ್ತಿಗಳನ್ನು ಹೆಸರಿಸಲಾಗಿದೆ: ಮನಸ್ಸು, ಪ್ರಾಣ, ವಾಕ್, ಕಣ್ಣು-ಕಿವಿ. ಯಾವುದನ್ನೂ ನಿರಾಕರಿಸಿಲ್ಲ. ಅವನ್ನು ಚಲಿಸುವಂತೆ ಮಾಡುವುದೇನು ಎಂಬುದೇ ಪ್ರಶ್ನೆ.\n\n'ಯುನಕ್ತಿ' ಎಂಬ ಕ್ರಿಯಾಪದವೇ ಕೀಲಿ: ಗಾಡಿಗೆ ಎತ್ತನ್ನು ಜೋಡಿಸುವಂತೆ ಜೋಡಿಸುವುದು ಎಂದರ್ಥ. ಇಂದ್ರಿಯಗಳನ್ನು ಸಾಧನಗಳಾಗಿ ಪರಿಗಣಿಸಲಾಗಿದೆ, ಮತ್ತು ಸಾಧನವು ಸ್ವಭಾವತಃ ತನ್ನನ್ನು ತಾನೇ ನಡೆಸಿಕೊಳ್ಳುವುದಿಲ್ಲ. ಆದ್ದರಿಂದ ಪ್ರಶ್ನೆ ಗೂಢವಲ್ಲ, ಶುದ್ಧ ತಾರ್ಕಿಕ — ನಿಮ್ಮ ಪ್ರತಿಯೊಂದು ಶಕ್ತಿಯೂ ಬಳಸಲ್ಪಡುತ್ತಿರುವುದಾದರೆ, ಬಳಸುತ್ತಿರುವವನು ಯಾರು? ಇದನ್ನು ಕೇಳುವವನು ಶಿಷ್ಯ ಎಂಬುದನ್ನು ಗಮನಿಸಿ. ಇಡೀ ಉಪನಿಷತ್ತು ಯಾರೋ ಒಬ್ಬರು ಕೇಳುವಷ್ಟು ತಳಮಳಗೊಂಡ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರ.",
      },
      hi: {
        translation:
          "किससे प्रेरित होकर मन अपने विषय की ओर दौड़ता है? किसके आदेश से प्रथम प्राण गति करता है? किससे प्रेरित होकर लोग यह वाणी बोलते हैं? कौन देव चक्षु और श्रोत्र को नियुक्त करता है?",
        explanation:
          "पाठ एक प्रश्न से आरंभ होता है और उसी के पहले शब्द से अपना नाम पाता है — 'केन', अर्थात् 'किससे'। चार शक्तियाँ नामित हैं: मन, प्राण, वाणी, चक्षु-श्रोत्र। किसी का निषेध नहीं। प्रश्न यह है कि इन्हें चलाता कौन है।\n\n'युनक्ति' क्रिया कुंजी है: जैसे गाड़ी में बैल जोता जाता है, वैसे जोतना। इंद्रियों को उपकरण माना गया है, और उपकरण स्वभाव से स्वयं को नहीं चलाता। अतः प्रश्न रहस्यमय नहीं, विशुद्ध तार्किक है — यदि आपकी हर शक्ति प्रयुक्त हो रही है, तो प्रयोग करने वाला कौन है? ध्यान दें कि यह शिष्य पूछ रहा है। सारा उपनिषद् उस प्रश्न का उत्तर है जिसे पूछने भर की व्याकुलता किसी को हुई थी।",
      },
    },
  },

  {
    id: "kena-1-2",
    locator: "1.2",
    handle: {
      en: "The ear of the ear",
      kn: "ಕಿವಿಯ ಕಿವಿ",
      hi: "कान का कान",
    },
    sanskrit: [
      "श्रोत्रस्य श्रोत्रं मनसो मनो यद्",
      "वाचो ह वाचं स उ प्राणस्य प्राणः ।",
      "चक्षुषश्चक्षुरतिमुच्य धीराः",
      "प्रेत्यास्माल्लोकादमृता भवन्ति ॥",
    ],
    iast: [
      "śrotrasya śrotraṃ manaso mano yad",
      "vāco ha vācaṃ sa u prāṇasya prāṇaḥ |",
      "cakṣuṣaś cakṣur atimucya dhīrāḥ",
      "pretyāsmāl lokād amṛtā bhavanti ||",
    ],
    keywords: [
      {
        term: "अतिमुच्य",
        iast: "atimucya",
        gloss: {
          en: "having let go of, released oneself from",
          kn: "ಬಿಟ್ಟುಬಿಟ್ಟು, ಬಿಡುಗಡೆ ಪಡೆದು",
          hi: "छोड़कर, मुक्त होकर",
        },
      },
      {
        term: "धीर",
        iast: "dhīra",
        gloss: {
          en: "the steady one",
          kn: "ಧೀರ, ಸ್ಥಿರಬುದ್ಧಿ",
          hi: "धीर, स्थिरबुद्धि",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "It is the ear of the ear, the mind of the mind, the speech of speech, the breath of the breath, the eye of the eye. Letting these go, the steady ones depart this world and become immortal.",
        explanation:
          "The answer, and it is given in a construction rather than a name. The ear of the ear. Not a bigger ear — the hearing by which hearing is hearing at all. Each faculty is repeated in the genitive, and the effect is to point past the instrument to what makes it an instrument.\n\nThis single phrase is one of the most reused formulations in Vedānta; the Īśa's paradox verses and Māṇḍūkya's Turīya are both working the same ground. Note the practical instruction hidden in atimucya — 'having let go'. Immortality is not reached by improving the senses or by adding a faculty. It is reached by releasing the identification with them, which is a subtraction and not an achievement.",
      },
      kn: {
        translation:
          "ಅದು ಕಿವಿಯ ಕಿವಿ, ಮನಸ್ಸಿನ ಮನಸ್ಸು, ವಾಕ್ಕಿನ ವಾಕ್ಕು, ಪ್ರಾಣದ ಪ್ರಾಣ, ಕಣ್ಣಿನ ಕಣ್ಣು. ಇವನ್ನು ಬಿಟ್ಟುಬಿಟ್ಟು ಧೀರರು ಈ ಲೋಕದಿಂದ ತೆರಳಿ ಅಮರರಾಗುತ್ತಾರೆ.",
        explanation:
          "ಇದೇ ಉತ್ತರ, ಮತ್ತು ಅದನ್ನು ಹೆಸರಿನಿಂದಲ್ಲ, ಒಂದು ರಚನೆಯಿಂದ ಕೊಡಲಾಗಿದೆ. ಕಿವಿಯ ಕಿವಿ. ದೊಡ್ಡ ಕಿವಿಯಲ್ಲ — ಕೇಳುವಿಕೆ ಕೇಳುವಿಕೆಯಾಗಿರುವುದೇ ಯಾವುದರಿಂದಲೋ ಆ ಕೇಳುವಿಕೆ. ಪ್ರತಿ ಶಕ್ತಿಯನ್ನೂ ಷಷ್ಠೀವಿಭಕ್ತಿಯಲ್ಲಿ ಪುನರಾವರ್ತಿಸಲಾಗಿದೆ, ಮತ್ತು ಪರಿಣಾಮವಾಗಿ ಸಾಧನವನ್ನು ದಾಟಿ, ಅದನ್ನು ಸಾಧನವನ್ನಾಗಿ ಮಾಡುವುದರತ್ತ ಬೆರಳು ತೋರುತ್ತದೆ.\n\nಈ ಒಂದೇ ನುಡಿಗಟ್ಟು ವೇದಾಂತದಲ್ಲಿ ಅತ್ಯಂತ ಹೆಚ್ಚು ಬಳಕೆಯಾದವುಗಳಲ್ಲಿ ಒಂದು; ಈಶಾವಾಸ್ಯದ ವಿರೋಧಾಭಾಸ ಶ್ಲೋಕಗಳೂ ಮಾಂಡೂಕ್ಯದ ತುರೀಯವೂ ಇದೇ ನೆಲದಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ. 'ಅತಿಮುಚ್ಯ' — ಬಿಟ್ಟುಬಿಟ್ಟು — ಎಂಬ ಪದದಲ್ಲಿ ಅಡಗಿರುವ ಆಚರಣಾತ್ಮಕ ಉಪದೇಶವನ್ನು ಗಮನಿಸಿ. ಇಂದ್ರಿಯಗಳನ್ನು ಸುಧಾರಿಸಿಯೋ ಹೊಸ ಶಕ್ತಿಯನ್ನು ಸೇರಿಸಿಯೋ ಅಮೃತತ್ವ ದೊರೆಯುವುದಿಲ್ಲ. ಅವುಗಳೊಂದಿಗಿನ ತಾದಾತ್ಮ್ಯವನ್ನು ಬಿಡುವುದರಿಂದ ದೊರೆಯುತ್ತದೆ — ಅದು ಕಳೆಯುವಿಕೆ, ಸಾಧನೆಯಲ್ಲ.",
      },
      hi: {
        translation:
          "वह कान का कान है, मन का मन, वाणी की वाणी, प्राण का प्राण, आँख की आँख। इन्हें छोड़कर धीर पुरुष इस लोक से जाकर अमर हो जाते हैं।",
        explanation:
          "यही उत्तर है, और वह नाम से नहीं, एक रचना से दिया गया है। कान का कान। बड़ा कान नहीं — वह सुनना जिससे सुनना सुनना है। हर शक्ति को षष्ठी में दोहराया गया है, और प्रभाव यह होता है कि उपकरण के पार, उसे उपकरण बनाने वाले की ओर संकेत हो जाता है।\n\nयह एक ही वाक्यांश वेदांत में सर्वाधिक पुनःप्रयुक्त सूत्रों में से है; ईशावास्य के विरोधाभास श्लोक और माण्डूक्य का तुरीय दोनों इसी भूमि पर काम करते हैं। 'अतिमुच्य' — छोड़कर — में छिपे व्यावहारिक उपदेश पर ध्यान दें। इंद्रियों को सुधारकर या कोई नई शक्ति जोड़कर अमरत्व नहीं मिलता। उनसे तादात्म्य छोड़ने से मिलता है — यह घटाव है, उपलब्धि नहीं।",
      },
    },
  },

  {
    id: "kena-1-3",
    locator: "1.3",
    handle: {
      en: "We do not know how to teach it",
      kn: "ಅದನ್ನು ಹೇಗೆ ಕಲಿಸುವುದೆಂದು ತಿಳಿಯದು",
      hi: "उसे कैसे सिखाएँ, यह हम नहीं जानते",
    },
    sanskrit: [
      "न तत्र चक्षुर्गच्छति न वाग्गच्छति नो मनः ।",
      "न विद्मो न विजानीमो यथैतदनुशिष्यात् ॥",
    ],
    iast: [
      "na tatra cakṣur gacchati na vāg gacchati no manaḥ |",
      "na vidmo na vijānīmo yathaitad anuśiṣyāt ||",
    ],
    keywords: [
      {
        term: "अनुशिष्यात्",
        iast: "anuśiṣyāt",
        gloss: {
          en: "one might teach, instruct",
          kn: "ಕಲಿಸಬಹುದು, ಬೋಧಿಸಬಹುದು",
          hi: "सिखा सके, अनुशासन दे सके",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "There the eye does not go, nor speech, nor mind. We do not know, we do not understand, how one might teach it.",
        explanation:
          "A remarkable admission for a scripture to make about its own subject. Having named the answer in verse 2, the text immediately says the answer cannot be taught.\n\nThe reason is structural, not modest. Teaching works by pointing at something, and the three faculties that could do the pointing — eye, speech, mind — have just been established as things it lies behind. You cannot indicate the indicator.\n\nWhat follows in the rest of the khaṇḍa is therefore not a description but a formula repeated five times, each closing off one route rather than opening one. The text is not being coy. It is telling you in advance that what it is about to do is subtraction.",
      },
      kn: {
        translation:
          "ಅಲ್ಲಿಗೆ ಕಣ್ಣು ಹೋಗುವುದಿಲ್ಲ, ವಾಕ್ ಹೋಗುವುದಿಲ್ಲ, ಮನಸ್ಸೂ ಇಲ್ಲ. ಅದನ್ನು ಹೇಗೆ ಕಲಿಸಬೇಕೆಂದು ನಾವು ತಿಳಿಯೆವು, ಅರಿಯೆವು.",
        explanation:
          "ಒಂದು ಶಾಸ್ತ್ರವು ತನ್ನದೇ ವಿಷಯದ ಬಗ್ಗೆ ಮಾಡುವ ಗಮನಾರ್ಹ ಒಪ್ಪಿಗೆ. ಎರಡನೆಯ ಶ್ಲೋಕದಲ್ಲಿ ಉತ್ತರವನ್ನು ಹೇಳಿದ ಕೂಡಲೇ, ಆ ಉತ್ತರವನ್ನು ಕಲಿಸಲಾಗದೆಂದು ಪಠ್ಯ ಹೇಳುತ್ತದೆ.\n\nಕಾರಣ ವಿನಯವಲ್ಲ, ರಚನಾತ್ಮಕ. ಬೋಧನೆ ಯಾವುದನ್ನಾದರೂ ತೋರಿಸುವ ಮೂಲಕ ನಡೆಯುತ್ತದೆ, ಮತ್ತು ತೋರಿಸಬಲ್ಲ ಮೂರು ಶಕ್ತಿಗಳು — ಕಣ್ಣು, ವಾಕ್, ಮನಸ್ಸು — ಅದು ಯಾವುದರ ಹಿಂದಿದೆಯೋ ಅವೇ ಎಂದು ಈಗಷ್ಟೇ ಸ್ಥಾಪಿಸಲಾಗಿದೆ. ತೋರಿಸುವವನನ್ನು ತೋರಿಸಲಾಗದು.\n\nಆದ್ದರಿಂದ ಖಂಡದ ಉಳಿದ ಭಾಗದಲ್ಲಿ ಬರುವುದು ವರ್ಣನೆಯಲ್ಲ, ಐದು ಬಾರಿ ಪುನರಾವರ್ತಿತವಾಗುವ ಒಂದು ಸೂತ್ರ — ಪ್ರತಿಯೊಂದೂ ಒಂದು ದಾರಿಯನ್ನು ತೆರೆಯುವ ಬದಲು ಮುಚ್ಚುತ್ತದೆ. ಪಠ್ಯ ನಾಟಕವಾಡುತ್ತಿಲ್ಲ. ತಾನು ಮಾಡಲಿರುವುದು ಕಳೆಯುವಿಕೆ ಎಂದು ಮೊದಲೇ ಹೇಳುತ್ತಿದೆ.",
      },
      hi: {
        translation:
          "वहाँ न आँख जाती है, न वाणी, न मन। हम नहीं जानते, नहीं समझते कि उसे कैसे सिखाया जाए।",
        explanation:
          "किसी शास्त्र का अपने ही विषय के बारे में यह स्वीकार उल्लेखनीय है। दूसरे श्लोक में उत्तर बता चुकने के तुरंत बाद पाठ कहता है कि वह उत्तर सिखाया नहीं जा सकता।\n\nकारण विनम्रता नहीं, संरचनात्मक है। शिक्षण किसी वस्तु की ओर संकेत करके चलता है, और जो तीन शक्तियाँ संकेत कर सकती थीं — आँख, वाणी, मन — उन्हीं के पीछे वह है, यह अभी स्थापित हुआ। संकेतक की ओर संकेत नहीं किया जा सकता।\n\nइसलिए खंड में आगे जो आता है वह वर्णन नहीं, पाँच बार दोहराया गया एक सूत्र है — हर बार एक मार्ग खोलने के बजाय बंद करता हुआ। पाठ चतुराई नहीं कर रहा। वह पहले ही बता रहा है कि आगे जो होगा वह घटाव है।",
      },
    },
  },

  {
    id: "kena-1-4",
    locator: "1.4",
    handle: {
      en: "Other than known and unknown",
      kn: "ತಿಳಿದದ್ದಕ್ಕೂ ತಿಳಿಯದ್ದಕ್ಕೂ ಬೇರೆ",
      hi: "ज्ञात और अज्ञात दोनों से भिन्न",
    },
    sanskrit: [
      "अन्यदेव तद्विदितादथो अविदितादधि ।",
      "इति शुश्रुम पूर्वेषां ये नस्तद्व्याचचक्षिरे ॥",
    ],
    iast: [
      "anyad eva tad viditād atho aviditād adhi |",
      "iti śuśruma pūrveṣāṃ ye nas tad vyācacakṣire ||",
    ],
    keywords: [
      {
        term: "विदित",
        iast: "vidita",
        gloss: {
          en: "the known",
          kn: "ತಿಳಿಯಲ್ಪಟ್ಟದ್ದು",
          hi: "ज्ञात",
        },
      },
      {
        term: "अविदित",
        iast: "avidita",
        gloss: {
          en: "the unknown — not the unknowable, merely the not-yet-known",
          kn: "ತಿಳಿಯದ್ದು — ತಿಳಿಯಲಾಗದ್ದಲ್ಲ, ಇನ್ನೂ ತಿಳಿಯದ್ದು",
          hi: "अज्ञात — अज्ञेय नहीं, केवल अभी तक न जाना गया",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "It is other than the known, and other than the unknown as well. So we have heard from the ancients who explained it to us.",
        explanation:
          "The sharpest move in the khaṇḍa, and easy to read past. Brahman is other than the known — that much any mystical text would say. It is also other than the unknown, and that second clause is where the work is done.\n\nThe known and the unknown between them exhaust everything that can be an object. The unknown is not a different kind of thing; it is simply an object not yet reached. To say Brahman is neither is to say it is not on that axis at all — not an object that happens to be hard to reach, but not an object.\n\nThe closing line hands authority back to the tradition, śuśruma, 'we have heard', exactly as the Īśa does at its hardest moments. The claim is transmitted, not asserted.",
      },
      kn: {
        translation:
          "ಅದು ತಿಳಿಯಲ್ಪಟ್ಟದ್ದಕ್ಕಿಂತ ಬೇರೆ, ಮತ್ತು ತಿಳಿಯದ್ದಕ್ಕಿಂತಲೂ ಬೇರೆ. ನಮಗೆ ಅದನ್ನು ವಿವರಿಸಿದ ಪೂರ್ವಜರಿಂದ ನಾವು ಹೀಗೆ ಕೇಳಿದ್ದೇವೆ.",
        explanation:
          "ಈ ಖಂಡದ ಅತ್ಯಂತ ತೀಕ್ಷ್ಣ ನಡೆ, ಮತ್ತು ಸುಲಭವಾಗಿ ದಾಟಿಹೋಗಬಹುದಾದದ್ದು. ಬ್ರಹ್ಮ ತಿಳಿಯಲ್ಪಟ್ಟದ್ದಕ್ಕಿಂತ ಬೇರೆ — ಇಷ್ಟನ್ನು ಯಾವ ಗೂಢ ಪಠ್ಯವೂ ಹೇಳುತ್ತದೆ. ಅದು ತಿಳಿಯದ್ದಕ್ಕಿಂತಲೂ ಬೇರೆ, ಮತ್ತು ಆ ಎರಡನೆಯ ಮಾತಿನಲ್ಲಿಯೇ ಕೆಲಸ ನಡೆಯುತ್ತದೆ.\n\nತಿಳಿದದ್ದು ಮತ್ತು ತಿಳಿಯದ್ದು ಸೇರಿ ವಸ್ತುವಾಗಬಲ್ಲ ಎಲ್ಲವನ್ನೂ ಮುಗಿಸುತ್ತವೆ. ತಿಳಿಯದ್ದು ಬೇರೆ ಬಗೆಯ ವಸ್ತುವಲ್ಲ; ಇನ್ನೂ ತಲುಪದ ವಸ್ತು ಅಷ್ಟೇ. ಬ್ರಹ್ಮ ಇವೆರಡೂ ಅಲ್ಲ ಎಂದರೆ ಅದು ಆ ಅಕ್ಷದ ಮೇಲೆಯೇ ಇಲ್ಲ ಎಂದರ್ಥ — ತಲುಪಲು ಕಷ್ಟವಾದ ವಸ್ತುವಲ್ಲ, ವಸ್ತುವೇ ಅಲ್ಲ.\n\nಕೊನೆಯ ಸಾಲು ಅಧಿಕಾರವನ್ನು ಪರಂಪರೆಗೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ — 'ಶುಶ್ರುಮ', ನಾವು ಕೇಳಿದ್ದೇವೆ; ಈಶಾವಾಸ್ಯ ತನ್ನ ಅತ್ಯಂತ ಕಠಿಣ ಗಳಿಗೆಗಳಲ್ಲಿ ಮಾಡುವಂತೆಯೇ. ಈ ಪ್ರತಿಪಾದನೆ ಹಸ್ತಾಂತರಿತ, ಸ್ವಂತದ್ದಲ್ಲ.",
      },
      hi: {
        translation:
          "वह ज्ञात से भिन्न है, और अज्ञात से भी भिन्न। ऐसा हमने उन पूर्वजों से सुना है जिन्होंने हमें यह समझाया।",
        explanation:
          "इस खंड की सबसे तीक्ष्ण चाल, और सहज ही छूट जाने वाली। ब्रह्म ज्ञात से भिन्न है — इतना तो कोई भी रहस्यवादी पाठ कहेगा। वह अज्ञात से भी भिन्न है, और यही दूसरा वाक्य असली काम करता है।\n\nज्ञात और अज्ञात मिलकर वह सब समेट लेते हैं जो विषय बन सकता है। अज्ञात कोई भिन्न प्रकार की वस्तु नहीं; वह बस अभी तक न पहुँची हुई वस्तु है। ब्रह्म को दोनों से भिन्न कहना अर्थात् वह उस अक्ष पर है ही नहीं — कठिनाई से मिलने वाली वस्तु नहीं, वस्तु ही नहीं।\n\nअंतिम पंक्ति अधिकार परंपरा को लौटाती है — 'शुश्रुम', हमने सुना; ठीक वैसे ही जैसे ईशावास्य अपने कठिनतम क्षणों में करता है। यह दावा हस्तांतरित है, स्वयंप्रतिपादित नहीं।",
      },
    },
  },

  {
    id: "kena-1-5",
    locator: "1.5",
    handle: {
      en: "Not what people worship here",
      kn: "ಇಲ್ಲಿ ಜನ ಉಪಾಸಿಸುವುದಲ್ಲ",
      hi: "जिसकी यहाँ उपासना होती है, वह नहीं",
    },
    sanskrit: [
      "यद्वाचानभ्युदितं येन वागभ्युद्यते ।",
      "तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते ॥",
    ],
    iast: [
      "yad vācānabhyuditaṃ yena vāg abhyudyate |",
      "tad eva brahma tvaṃ viddhi nedaṃ yad idam upāsate ||",
    ],
    keywords: [
      {
        term: "अनभ्युदित",
        iast: "anabhyudita",
        gloss: {
          en: "not uttered, not expressed",
          kn: "ಉಚ್ಚರಿಸಲ್ಪಡದ್ದು",
          hi: "जो कहा नहीं जाता",
        },
      },
      {
        term: "उपासते",
        iast: "upāsate",
        gloss: {
          en: "they worship, they meditate upon",
          kn: "ಉಪಾಸಿಸುತ್ತಾರೆ",
          hi: "उपासना करते हैं",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "That which is not uttered by speech, but by which speech is uttered — know that alone to be Brahman, not this that people here worship.",
        explanation:
          "The formula begins, and it will run five times with only the faculty changing. Two clauses set the pattern: what the faculty cannot reach, and what makes the faculty work. Then the identification: that is Brahman.\n\nThe sting is in the final line, and it is repeated every time. Na idaṃ yad idam upāsate — not this, which people here worship. Having located Brahman behind speech, the text immediately warns that whatever the listener now pictures is not it. Every act of worship takes an object, so the moment Brahman is worshipped it has been made into one of the things it lies behind.\n\nŚaṅkara reads this line as aimed at ritualists who have substituted a deity for the Self. It is aimed just as squarely at the reader who has understood the argument and now has a concept.",
      },
      kn: {
        translation:
          "ಯಾವುದನ್ನು ವಾಕ್ ಉಚ್ಚರಿಸಲಾರದೋ, ಆದರೆ ಯಾವುದರಿಂದ ವಾಕ್ ಉಚ್ಚರಿಸಲ್ಪಡುತ್ತದೋ — ಅದನ್ನೇ ಬ್ರಹ್ಮವೆಂದು ತಿಳಿ, ಇಲ್ಲಿ ಜನರು ಉಪಾಸಿಸುವ ಇದನ್ನಲ್ಲ.",
        explanation:
          "ಸೂತ್ರ ಆರಂಭವಾಗುತ್ತದೆ, ಮತ್ತು ಶಕ್ತಿಯೊಂದೇ ಬದಲಾಗುತ್ತಾ ಅದು ಐದು ಬಾರಿ ಸಾಗುತ್ತದೆ. ಎರಡು ವಾಕ್ಯಾಂಶಗಳು ಮಾದರಿಯನ್ನು ರೂಪಿಸುತ್ತವೆ: ಆ ಶಕ್ತಿ ತಲುಪಲಾಗದ್ದು, ಮತ್ತು ಆ ಶಕ್ತಿಯನ್ನು ಕೆಲಸ ಮಾಡಿಸುವುದು. ಆಮೇಲೆ ಅಭೇದ: ಅದೇ ಬ್ರಹ್ಮ.\n\nಚುಚ್ಚುವುದು ಕೊನೆಯ ಸಾಲಿನಲ್ಲಿ, ಮತ್ತು ಅದು ಪ್ರತಿ ಬಾರಿಯೂ ಪುನರಾವರ್ತನೆಗೊಳ್ಳುತ್ತದೆ. 'ನೇದಂ ಯದಿದಮುಪಾಸತೇ' — ಇಲ್ಲಿ ಜನರು ಉಪಾಸಿಸುವ ಇದನ್ನಲ್ಲ. ವಾಕ್ಕಿನ ಹಿಂದೆ ಬ್ರಹ್ಮವನ್ನು ಇರಿಸಿದ ಕೂಡಲೇ, ಕೇಳುಗನು ಈಗ ಮನಸ್ಸಿನಲ್ಲಿ ಚಿತ್ರಿಸಿಕೊಂಡದ್ದು ಅದಲ್ಲ ಎಂದು ಪಠ್ಯ ಎಚ್ಚರಿಸುತ್ತದೆ. ಪ್ರತಿ ಉಪಾಸನೆಗೂ ಒಂದು ವಿಷಯ ಬೇಕು, ಆದ್ದರಿಂದ ಬ್ರಹ್ಮವನ್ನು ಉಪಾಸಿಸಿದ ಕ್ಷಣವೇ ಅದು ತಾನು ಯಾವುದರ ಹಿಂದಿದೆಯೋ ಆ ವಸ್ತುಗಳಲ್ಲಿ ಒಂದಾಗಿಬಿಟ್ಟಿದೆ.\n\nಶಂಕರರು ಈ ಸಾಲನ್ನು ಆತ್ಮದ ಬದಲಿಗೆ ದೇವತೆಯನ್ನು ಇಟ್ಟುಕೊಂಡ ಕರ್ಮಠರತ್ತ ಗುರಿಯಿಟ್ಟದ್ದೆಂದು ಓದುತ್ತಾರೆ. ವಾದವನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡು ಈಗ ಒಂದು ಪರಿಕಲ್ಪನೆಯನ್ನು ಹೊಂದಿರುವ ಓದುಗನತ್ತಲೂ ಅದು ಅಷ್ಟೇ ನೇರವಾಗಿ ಗುರಿಯಿಟ್ಟಿದೆ.",
      },
      hi: {
        translation:
          "जो वाणी से नहीं कहा जाता, किंतु जिससे वाणी कही जाती है — उसी को ब्रह्म जान, इसे नहीं जिसकी यहाँ लोग उपासना करते हैं।",
        explanation:
          "सूत्र आरंभ होता है, और केवल शक्ति बदलते हुए वह पाँच बार चलेगा। दो वाक्यांश प्रतिरूप बनाते हैं: जिस तक वह शक्ति नहीं पहुँचती, और जो उस शक्ति को चलाता है। फिर अभेद: वही ब्रह्म है।\n\nचुभन अंतिम पंक्ति में है, और वह हर बार दोहराई जाती है। 'नेदं यदिदमुपासते' — यह नहीं जिसकी यहाँ लोग उपासना करते हैं। वाणी के पीछे ब्रह्म को रखते ही पाठ चेतावनी देता है कि श्रोता ने अब जो चित्र बनाया, वह वह नहीं। हर उपासना का एक विषय होता है, इसलिए जिस क्षण ब्रह्म की उपासना हुई, वह उन्हीं वस्तुओं में से एक बन गया जिनके पीछे वह है।\n\nशंकर इस पंक्ति को उन कर्मकांडियों पर लक्षित मानते हैं जिन्होंने आत्मा के स्थान पर देवता रख लिया। वह उस पाठक पर भी उतनी ही सीधी है जिसने तर्क समझ लिया और अब उसके पास एक अवधारणा है।",
      },
    },
  },

  {
    id: "kena-1-6",
    locator: "1.6",
    handle: {
      en: "The mind of the mind",
      kn: "ಮನಸ್ಸಿನ ಮನಸ್ಸು",
      hi: "मन का मन",
    },
    sanskrit: [
      "यन्मनसा न मनुते येनाहुर्मनो मतम् ।",
      "तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते ॥",
    ],
    iast: [
      "yan manasā na manute yenāhur mano matam |",
      "tad eva brahma tvaṃ viddhi nedaṃ yad idam upāsate ||",
    ],
    keywords: [
      {
        term: "मनुते",
        iast: "manute",
        gloss: {
          en: "thinks, conceives",
          kn: "ಯೋಚಿಸುತ್ತದೆ, ಕಲ್ಪಿಸುತ್ತದೆ",
          hi: "सोचता है, कल्पना करता है",
        },
      },
      {
        term: "मत",
        iast: "mata",
        gloss: {
          en: "thought, that which is thought of",
          kn: "ಚಿಂತಿತ, ಯೋಚಿಸಲ್ಪಟ್ಟದ್ದು",
          hi: "मत, जो सोचा गया",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "That which is not thought by the mind, but by which the mind is thought — know that alone to be Brahman, not this that people here worship.",
        explanation:
          "The same formula, now turned on the mind — and this is the one that matters most, because the mind is where the reader has been standing all along.\n\nThe second clause is doing something subtle: yena āhur mano matam, by which the mind is itself thought. The mind is not only the instrument of thinking, it is also an object of thought — you can be aware of your own thinking. So something is aware of the mind, and that something is not the mind.\n\nThis is the strongest form of the argument. One can imagine transcending the senses while still identifying with the mind. This verse closes that exit.",
      },
      kn: {
        translation:
          "ಯಾವುದನ್ನು ಮನಸ್ಸು ಯೋಚಿಸಲಾರದೋ, ಆದರೆ ಯಾವುದರಿಂದ ಮನಸ್ಸೇ ಯೋಚಿಸಲ್ಪಡುತ್ತದೋ — ಅದನ್ನೇ ಬ್ರಹ್ಮವೆಂದು ತಿಳಿ, ಇಲ್ಲಿ ಜನರು ಉಪಾಸಿಸುವ ಇದನ್ನಲ್ಲ.",
        explanation:
          "ಅದೇ ಸೂತ್ರ, ಈಗ ಮನಸ್ಸಿನ ಮೇಲೆ ತಿರುಗಿದೆ — ಮತ್ತು ಇದೇ ಅತ್ಯಂತ ಮುಖ್ಯವಾದದ್ದು, ಏಕೆಂದರೆ ಓದುಗನು ಇಲ್ಲಿಯವರೆಗೆ ನಿಂತಿದ್ದದ್ದೇ ಮನಸ್ಸಿನಲ್ಲಿ.\n\nಎರಡನೆಯ ವಾಕ್ಯಾಂಶ ಸೂಕ್ಷ್ಮವಾದದ್ದನ್ನು ಮಾಡುತ್ತಿದೆ: 'ಯೇನಾಹುರ್ಮನೋ ಮತಮ್', ಯಾವುದರಿಂದ ಮನಸ್ಸೇ ಯೋಚಿಸಲ್ಪಡುತ್ತದೋ. ಮನಸ್ಸು ಯೋಚನೆಯ ಸಾಧನ ಮಾತ್ರವಲ್ಲ, ಯೋಚನೆಯ ವಿಷಯವೂ ಹೌದು — ನಿಮ್ಮ ಸ್ವಂತ ಯೋಚನೆಯ ಅರಿವು ನಿಮಗಿರಬಲ್ಲದು. ಆದ್ದರಿಂದ ಮನಸ್ಸಿನ ಅರಿವಿರುವ ಏನೋ ಇದೆ, ಮತ್ತು ಅದು ಮನಸ್ಸಲ್ಲ.\n\nಇದೇ ವಾದದ ಅತ್ಯಂತ ಪ್ರಬಲ ರೂಪ. ಇಂದ್ರಿಯಗಳನ್ನು ಮೀರಿಯೂ ಮನಸ್ಸಿನೊಂದಿಗೆ ತಾದಾತ್ಮ್ಯ ಉಳಿಸಿಕೊಳ್ಳುವುದನ್ನು ಕಲ್ಪಿಸಬಹುದು. ಈ ಶ್ಲೋಕ ಆ ದಾರಿಯನ್ನು ಮುಚ್ಚುತ್ತದೆ.",
      },
      hi: {
        translation:
          "जिसे मन नहीं सोच सकता, किंतु जिससे मन ही सोचा जाता है — उसी को ब्रह्म जान, इसे नहीं जिसकी यहाँ लोग उपासना करते हैं।",
        explanation:
          "वही सूत्र, अब मन पर मुड़ा — और यही सर्वाधिक महत्वपूर्ण है, क्योंकि पाठक अब तक खड़ा ही मन में था।\n\nदूसरा वाक्यांश सूक्ष्म काम कर रहा है: 'येनाहुर्मनो मतम्', जिससे मन स्वयं सोचा जाता है। मन केवल सोचने का उपकरण नहीं, सोचने का विषय भी है — आप अपने सोचने के प्रति सजग हो सकते हैं। अतः कुछ है जो मन के प्रति सजग है, और वह मन नहीं है।\n\nयह तर्क का प्रबलतम रूप है। इंद्रियों को लाँघकर भी मन से तादात्म्य बनाए रखने की कल्पना की जा सकती है। यह श्लोक वह निकास बंद कर देता है।",
      },
    },
  },

  {
    id: "kena-1-7",
    locator: "1.7",
    handle: {
      en: "The eye of the eye",
      kn: "ಕಣ್ಣಿನ ಕಣ್ಣು",
      hi: "आँख की आँख",
    },
    sanskrit: [
      "यच्चक्षुषा न पश्यति येन चक्षूंषि पश्यति ।",
      "तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते ॥",
    ],
    iast: [
      "yac cakṣuṣā na paśyati yena cakṣūṃṣi paśyati |",
      "tad eva brahma tvaṃ viddhi nedaṃ yad idam upāsate ||",
    ],
    keywords: [
      {
        term: "चक्षुस्",
        iast: "cakṣus",
        gloss: {
          en: "eye; the faculty of sight",
          kn: "ಕಣ್ಣು; ದೃಷ್ಟಿಶಕ್ತಿ",
          hi: "चक्षु; दृष्टि की शक्ति",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "That which one does not see with the eye, but by which the eyes see — know that alone to be Brahman, not this that people here worship.",
        explanation:
          "Sight turned on itself. The eye is the most convincing of the senses, the one that makes the world feel simply given, and the verse takes it apart with the same two clauses as the others.\n\nNote the plural in the second half: cakṣūṃṣi, eyes. Not one person's eye but every eye — the seeing that all seeing borrows. This is why the argument never becomes solipsism. What lies behind my seeing is not private to me; it is what lies behind yours as well.",
      },
      kn: {
        translation:
          "ಯಾವುದನ್ನು ಕಣ್ಣಿನಿಂದ ನೋಡಲಾಗದೋ, ಆದರೆ ಯಾವುದರಿಂದ ಕಣ್ಣುಗಳು ನೋಡುತ್ತವೋ — ಅದನ್ನೇ ಬ್ರಹ್ಮವೆಂದು ತಿಳಿ, ಇಲ್ಲಿ ಜನರು ಉಪಾಸಿಸುವ ಇದನ್ನಲ್ಲ.",
        explanation:
          "ದೃಷ್ಟಿ ತನ್ನ ಮೇಲೆಯೇ ತಿರುಗಿದೆ. ಇಂದ್ರಿಯಗಳಲ್ಲಿ ಕಣ್ಣೇ ಅತ್ಯಂತ ಮನವೊಲಿಸುವಂಥದ್ದು, ಜಗತ್ತನ್ನು ಸರಳವಾಗಿ ಕೊಟ್ಟದ್ದೆಂಬಂತೆ ಭಾಸವಾಗಿಸುವಂಥದ್ದು, ಮತ್ತು ಶ್ಲೋಕ ಅದನ್ನೂ ಇತರವುಗಳ ಅದೇ ಎರಡು ವಾಕ್ಯಾಂಶಗಳಿಂದ ಬಿಡಿಸುತ್ತದೆ.\n\nಎರಡನೆಯ ಅರ್ಧದ ಬಹುವಚನವನ್ನು ಗಮನಿಸಿ: 'ಚಕ್ಷೂಂಷಿ', ಕಣ್ಣುಗಳು. ಒಬ್ಬನ ಕಣ್ಣಲ್ಲ, ಪ್ರತಿ ಕಣ್ಣೂ — ಎಲ್ಲ ನೋಟವೂ ಎರವಲು ಪಡೆಯುವ ನೋಟ. ಆದ್ದರಿಂದಲೇ ಈ ವಾದ ಎಂದೂ ಏಕಜೀವವಾದವಾಗುವುದಿಲ್ಲ. ನನ್ನ ನೋಟದ ಹಿಂದಿರುವುದು ನನಗೆ ಮಾತ್ರ ಸೇರಿದ್ದಲ್ಲ; ಅದೇ ನಿಮ್ಮ ನೋಟದ ಹಿಂದೆಯೂ ಇದೆ.",
      },
      hi: {
        translation:
          "जिसे आँख से नहीं देखा जाता, किंतु जिससे आँखें देखती हैं — उसी को ब्रह्म जान, इसे नहीं जिसकी यहाँ लोग उपासना करते हैं।",
        explanation:
          "दृष्टि स्वयं पर मुड़ी। इंद्रियों में आँख सबसे अधिक विश्वास दिलाने वाली है, वही जो जगत् को सीधा-सादा दिया हुआ प्रतीत कराती है, और श्लोक उसे भी उन्हीं दो वाक्यांशों से खोलता है।\n\nदूसरे आधे के बहुवचन पर ध्यान दें: 'चक्षूंषि', आँखें। किसी एक की आँख नहीं, हर आँख — वह देखना जिससे सब देखना उधार लेता है। इसीलिए यह तर्क कभी एकजीववाद नहीं बनता। जो मेरे देखने के पीछे है वह मेरा निजी नहीं; वही आपके देखने के पीछे भी है।",
      },
    },
  },

  {
    id: "kena-1-8",
    locator: "1.8",
    handle: {
      en: "The hearing of hearing",
      kn: "ಕೇಳುವಿಕೆಯ ಕೇಳುವಿಕೆ",
      hi: "सुनने का सुनना",
    },
    sanskrit: [
      "यच्छ्रोत्रेण न शृणोति येन श्रोत्रमिदं श्रुतम् ।",
      "तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते ॥",
    ],
    iast: [
      "yac chrotreṇa na śṛṇoti yena śrotram idaṃ śrutam |",
      "tad eva brahma tvaṃ viddhi nedaṃ yad idam upāsate ||",
    ],
    keywords: [
      {
        term: "श्रोत्र",
        iast: "śrotra",
        gloss: {
          en: "ear; hearing",
          kn: "ಕಿವಿ; ಶ್ರವಣ",
          hi: "श्रोत्र; श्रवण",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "That which one does not hear with the ear, but by which this hearing is heard — know that alone to be Brahman, not this that people here worship.",
        explanation:
          "The fourth turn of the formula. Hearing carries particular weight in a tradition that calls its scripture śruti — 'that which is heard' — and transmits it by ear rather than by text.\n\nSo there is a quiet point being made about the Upaniṣad itself. The words being heard right now are reaching the ear; what makes hearing possible is not among them. Even revelation is an object, and the text is not exempting itself from its own argument.",
      },
      kn: {
        translation:
          "ಯಾವುದನ್ನು ಕಿವಿಯಿಂದ ಕೇಳಲಾಗದೋ, ಆದರೆ ಯಾವುದರಿಂದ ಈ ಕೇಳುವಿಕೆಯೇ ಕೇಳಲ್ಪಡುತ್ತದೋ — ಅದನ್ನೇ ಬ್ರಹ್ಮವೆಂದು ತಿಳಿ, ಇಲ್ಲಿ ಜನರು ಉಪಾಸಿಸುವ ಇದನ್ನಲ್ಲ.",
        explanation:
          "ಸೂತ್ರದ ನಾಲ್ಕನೆಯ ಸುತ್ತು. ತನ್ನ ಶಾಸ್ತ್ರವನ್ನು 'ಶ್ರುತಿ' — ಕೇಳಲ್ಪಟ್ಟದ್ದು — ಎಂದು ಕರೆದು, ಪಠ್ಯದಿಂದಲ್ಲ ಕಿವಿಯಿಂದ ಹಸ್ತಾಂತರಿಸುವ ಪರಂಪರೆಯಲ್ಲಿ ಶ್ರವಣಕ್ಕೆ ವಿಶೇಷ ಭಾರವಿದೆ.\n\nಆದ್ದರಿಂದ ಉಪನಿಷತ್ತು ತನ್ನ ಬಗ್ಗೆಯೇ ಒಂದು ಸದ್ದಿಲ್ಲದ ಮಾತನ್ನು ಹೇಳುತ್ತಿದೆ. ಈಗ ಕೇಳುತ್ತಿರುವ ಈ ಮಾತುಗಳು ಕಿವಿಯನ್ನು ತಲುಪುತ್ತಿವೆ; ಕೇಳುವಿಕೆಯನ್ನು ಸಾಧ್ಯಗೊಳಿಸುವುದು ಅವುಗಳಲ್ಲಿ ಇಲ್ಲ. ಶ್ರುತಿಯೂ ಒಂದು ವಿಷಯವೇ, ಮತ್ತು ಪಠ್ಯವು ತನ್ನದೇ ವಾದದಿಂದ ತನಗೆ ವಿನಾಯಿತಿ ಕೊಟ್ಟುಕೊಳ್ಳುತ್ತಿಲ್ಲ.",
      },
      hi: {
        translation:
          "जिसे कान से नहीं सुना जाता, किंतु जिससे यह सुनना सुना जाता है — उसी को ब्रह्म जान, इसे नहीं जिसकी यहाँ लोग उपासना करते हैं।",
        explanation:
          "सूत्र का चौथा फेर। जिस परंपरा में शास्त्र को 'श्रुति' — जो सुना गया — कहा जाता है और जो पाठ से नहीं, कान से हस्तांतरित होती है, उसमें श्रवण का विशेष भार है।\n\nअतः उपनिषद् अपने ही विषय में एक चुपचाप बात कह रहा है। अभी जो शब्द सुने जा रहे हैं वे कान तक पहुँच रहे हैं; जो सुनना संभव बनाता है वह उनमें नहीं। श्रुति भी एक विषय है, और पाठ अपने ही तर्क से स्वयं को छूट नहीं दे रहा।",
      },
    },
  },

  {
    id: "kena-1-9",
    locator: "1.9",
    handle: {
      en: "The breath of the breath",
      kn: "ಪ್ರಾಣದ ಪ್ರಾಣ",
      hi: "प्राण का प्राण",
    },
    sanskrit: [
      "यत्प्राणेन न प्राणिति येन प्राणः प्रणीयते ।",
      "तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते ॥",
    ],
    iast: [
      "yat prāṇena na prāṇiti yena prāṇaḥ praṇīyate |",
      "tad eva brahma tvaṃ viddhi nedaṃ yad idam upāsate ||",
    ],
    keywords: [
      {
        term: "प्रणीयते",
        iast: "praṇīyate",
        gloss: {
          en: "is led forward, is impelled",
          kn: "ಮುಂದೆ ನಡೆಸಲ್ಪಡುತ್ತದೆ",
          hi: "आगे ले जाया जाता है",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "That which does not breathe by the breath, but by which the breath is led forward — know that alone to be Brahman, not this that people here worship.",
        explanation:
          "The fifth and last turn, and the faculty chosen to close on is the most involuntary one. Breath continues without decision; it is the clearest case of something in you that you do not do.\n\nExactly that makes it the right ending. If Brahman were merely the inner agent, breath would be evidence against it — nobody chooses to breathe. But the verse does not say Brahman breathes. It says breath is led forward, praṇīyate, in the passive. What is behind the faculties is not a busier doer than you. It is that in whose presence the doing happens, which is why the story in the next two khaṇḍas can show gods failing at exactly this point.",
      },
      kn: {
        translation:
          "ಯಾವುದು ಪ್ರಾಣದಿಂದ ಉಸಿರಾಡುವುದಿಲ್ಲವೋ, ಆದರೆ ಯಾವುದರಿಂದ ಪ್ರಾಣವು ಮುಂದೆ ನಡೆಸಲ್ಪಡುತ್ತದೋ — ಅದನ್ನೇ ಬ್ರಹ್ಮವೆಂದು ತಿಳಿ, ಇಲ್ಲಿ ಜನರು ಉಪಾಸಿಸುವ ಇದನ್ನಲ್ಲ.",
        explanation:
          "ಐದನೆಯ ಮತ್ತು ಕೊನೆಯ ಸುತ್ತು, ಮತ್ತು ಮುಗಿಸಲು ಆರಿಸಿಕೊಂಡ ಶಕ್ತಿ ಅತ್ಯಂತ ಅನೈಚ್ಛಿಕವಾದದ್ದು. ಉಸಿರಾಟ ನಿರ್ಧಾರವಿಲ್ಲದೆ ನಡೆಯುತ್ತದೆ; ನಿಮ್ಮೊಳಗಿದ್ದೂ ನೀವು ಮಾಡದ ಸಂಗತಿಗೆ ಅದೇ ಸ್ಪಷ್ಟ ಉದಾಹರಣೆ.\n\nಅದೇ ಇದನ್ನು ಸರಿಯಾದ ಅಂತ್ಯವನ್ನಾಗಿ ಮಾಡುತ್ತದೆ. ಬ್ರಹ್ಮ ಕೇವಲ ಒಳಗಿನ ಕರ್ತೃವಾಗಿದ್ದರೆ ಉಸಿರಾಟ ಅದಕ್ಕೆ ವಿರುದ್ಧ ಸಾಕ್ಷಿಯಾಗುತ್ತಿತ್ತು — ಉಸಿರಾಡಲು ಯಾರೂ ನಿರ್ಧರಿಸುವುದಿಲ್ಲ. ಆದರೆ ಬ್ರಹ್ಮ ಉಸಿರಾಡುತ್ತದೆ ಎಂದು ಶ್ಲೋಕ ಹೇಳುವುದಿಲ್ಲ. ಪ್ರಾಣವು ಮುಂದೆ ನಡೆಸಲ್ಪಡುತ್ತದೆ — 'ಪ್ರಣೀಯತೇ', ಕರ್ಮಣಿ ಪ್ರಯೋಗ — ಎನ್ನುತ್ತದೆ. ಶಕ್ತಿಗಳ ಹಿಂದಿರುವುದು ನಿಮಗಿಂತ ಹೆಚ್ಚು ಕಾರ್ಯನಿರತ ಕರ್ತೃವಲ್ಲ. ಯಾವುದರ ಸಾನ್ನಿಧ್ಯದಲ್ಲಿ ಕ್ರಿಯೆ ನಡೆಯುತ್ತದೋ ಅದು — ಆದ್ದರಿಂದಲೇ ಮುಂದಿನ ಎರಡು ಖಂಡಗಳ ಕಥೆ ದೇವತೆಗಳು ನಿಖರವಾಗಿ ಈ ಸ್ಥಳದಲ್ಲಿ ಸೋಲುವುದನ್ನು ತೋರಿಸಬಲ್ಲದು.",
      },
      hi: {
        translation:
          "जो प्राण से श्वास नहीं लेता, किंतु जिससे प्राण आगे ले जाया जाता है — उसी को ब्रह्म जान, इसे नहीं जिसकी यहाँ लोग उपासना करते हैं।",
        explanation:
          "पाँचवाँ और अंतिम फेर, और समापन के लिए चुनी गई शक्ति सबसे अनैच्छिक है। श्वास बिना निर्णय के चलती है; आपके भीतर होकर भी जो आप नहीं करते, उसका यही स्पष्टतम उदाहरण है।\n\nयही इसे सही अंत बनाता है। यदि ब्रह्म केवल भीतरी कर्ता होता तो श्वास उसके विरुद्ध प्रमाण होती — श्वास लेने का निर्णय कोई नहीं करता। किंतु श्लोक यह नहीं कहता कि ब्रह्म श्वास लेता है। वह कहता है प्राण आगे ले जाया जाता है — 'प्रणीयते', कर्मवाच्य में। शक्तियों के पीछे जो है वह आपसे अधिक व्यस्त कर्ता नहीं। वह है जिसकी उपस्थिति में क्रिया होती है — इसीलिए अगले दो खंडों की कथा देवताओं को ठीक इसी बिंदु पर विफल दिखा सकती है।",
      },
    },
  },
  {
    id: "kena-2-1",
    locator: "2.1",
    handle: {
      en: "If you think you know well",
      kn: "ಚೆನ್ನಾಗಿ ತಿಳಿದಿದ್ದೇನೆಂದು ಭಾವಿಸಿದರೆ",
      hi: "यदि तुम समझते हो कि भली जानते हो",
    },
    sanskrit: [
      "यदि मन्यसे सुवेदेति दहरमेवापि",
      "नूनं त्वं वेत्थ ब्रह्मणो रूपम् ।",
      "यदस्य त्वं यदस्य देवेषु",
      "अथ नु मीमांस्यमेव ते मन्ये विदितम् ॥",
    ],
    iast: [
      "yadi manyase suvedeti daharam evāpi",
      "nūnaṃ tvaṃ vettha brahmaṇo rūpam |",
      "yad asya tvaṃ yad asya deveṣu",
      "atha nu mīmāṃsyam eva te manye viditam ||",
    ],
    keywords: [
      {
        term: "सुवेद",
        iast: "suveda",
        gloss: {
          en: "well known, thoroughly understood",
          kn: "ಚೆನ್ನಾಗಿ ತಿಳಿದದ್ದು",
          hi: "भली भाँति ज्ञात",
        },
      },
      {
        term: "मीमांस्य",
        iast: "mīmāṃsya",
        gloss: {
          en: "to be enquired into further",
          kn: "ಇನ್ನಷ್ಟು ವಿಚಾರಿಸಬೇಕಾದದ್ದು",
          hi: "और विचार करने योग्य",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "If you think you know it well, then you know only very little of Brahman's form — only what of it is in you, and what of it is among the gods. Therefore it is still to be enquired into, I think, by you.",
        explanation:
          "The teacher turns on the student, and the reversal is the point. Confidence is treated not as evidence of understanding but as evidence against it.\n\nThe reasoning is exact. Anything you can be sure you have grasped is an object, and Brahman was established in khaṇḍa 1 as what no faculty reaches. So the feeling of having got it is itself a symptom: what you are certain of is some form of it — daharam, a very little — and not the thing.\n\nWhat makes this more than a rebuke is the last clause. The student is not told they have failed; they are told the enquiry continues. Mīmāṃsya is a verbal adjective, 'to be enquired into'. The correct response to this teaching is not belief and not despair but further attention.",
      },
      kn: {
        translation:
          "ಚೆನ್ನಾಗಿ ತಿಳಿದಿದ್ದೇನೆಂದು ನೀನು ಭಾವಿಸಿದರೆ, ಬ್ರಹ್ಮದ ರೂಪದ ಬಹಳ ಕೊಂಚವನ್ನಷ್ಟೇ ನೀನು ತಿಳಿದಿರುವೆ — ಅದರಲ್ಲಿ ನಿನ್ನೊಳಗಿರುವಷ್ಟನ್ನು, ಮತ್ತು ದೇವತೆಗಳಲ್ಲಿರುವಷ್ಟನ್ನು. ಆದ್ದರಿಂದ ನೀನು ಇನ್ನೂ ವಿಚಾರಿಸಬೇಕಾಗಿದೆ ಎಂದು ನಾನು ಭಾವಿಸುತ್ತೇನೆ.",
        explanation:
          "ಗುರುವು ಶಿಷ್ಯನ ಮೇಲೆಯೇ ತಿರುಗುತ್ತಾನೆ, ಮತ್ತು ಈ ತಿರುವೇ ಸಾರ. ಆತ್ಮವಿಶ್ವಾಸವನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡದ್ದರ ಸಾಕ್ಷಿಯಾಗಿ ಅಲ್ಲ, ಅದರ ವಿರುದ್ಧ ಸಾಕ್ಷಿಯಾಗಿ ಪರಿಗಣಿಸಲಾಗಿದೆ.\n\nತರ್ಕ ನಿಖರ. ನೀವು ಗ್ರಹಿಸಿದ್ದೇನೆಂದು ಖಚಿತವಾಗಿ ಹೇಳಬಲ್ಲ ಯಾವುದೂ ಒಂದು ವಿಷಯ, ಮತ್ತು ಯಾವ ಶಕ್ತಿಯೂ ತಲುಪದ್ದೇ ಬ್ರಹ್ಮ ಎಂದು ಮೊದಲ ಖಂಡ ಸ್ಥಾಪಿಸಿತು. ಆದ್ದರಿಂದ 'ಸಿಕ್ಕಿತು' ಎಂಬ ಭಾವನೆಯೇ ಒಂದು ಲಕ್ಷಣ: ನೀವು ಖಚಿತವಾಗಿರುವುದು ಅದರ ಒಂದು ರೂಪ — 'ದಹರಂ', ಬಹಳ ಕೊಂಚ — ಆ ವಸ್ತುವಲ್ಲ.\n\nಇದನ್ನು ಕೇವಲ ನಿಂದೆಗಿಂತ ಹೆಚ್ಚಾಗಿಸುವುದು ಕೊನೆಯ ಮಾತು. ಶಿಷ್ಯನಿಗೆ ನೀನು ಸೋತೆ ಎಂದು ಹೇಳಿಲ್ಲ; ವಿಚಾರಣೆ ಮುಂದುವರಿಯುತ್ತದೆ ಎಂದು ಹೇಳಲಾಗಿದೆ. 'ಮೀಮಾಂಸ್ಯ' ಎಂಬುದು 'ವಿಚಾರಿಸಬೇಕಾದದ್ದು' ಎಂಬ ಕೃದಂತ. ಈ ಬೋಧನೆಗೆ ಸರಿಯಾದ ಪ್ರತಿಕ್ರಿಯೆ ನಂಬಿಕೆಯೂ ಅಲ್ಲ, ನಿರಾಶೆಯೂ ಅಲ್ಲ — ಮತ್ತಷ್ಟು ಗಮನ.",
      },
      hi: {
        translation:
          "यदि तुम समझते हो कि तुम इसे भली भाँति जानते हो, तो तुम ब्रह्म के रूप का बहुत थोड़ा ही जानते हो — उसका उतना जो तुममें है, और उतना जो देवताओं में है। अतः मैं मानता हूँ कि तुम्हें अभी और विचार करना है।",
        explanation:
          "गुरु शिष्य पर ही पलटता है, और यही पलटाव सार है। आत्मविश्वास को समझ का प्रमाण नहीं, उसके विरुद्ध प्रमाण माना गया है।\n\nतर्क सटीक है। जिसे आप निश्चित रूप से पकड़ा हुआ कह सकते हैं वह एक विषय है, और प्रथम खंड ने स्थापित किया कि ब्रह्म वही है जिस तक कोई शक्ति नहीं पहुँचती। अतः 'समझ लिया' यह अनुभूति ही एक लक्षण है: जिसके विषय में आप निश्चित हैं वह उसका कोई रूप है — 'दहरम्', बहुत थोड़ा — वह वस्तु नहीं।\n\nइसे केवल फटकार से अधिक बनाता है अंतिम वाक्य। शिष्य से यह नहीं कहा गया कि वह विफल हुआ; कहा गया कि जिज्ञासा जारी है। 'मीमांस्य' अर्थात् 'विचार किए जाने योग्य'। इस उपदेश का उचित उत्तर न विश्वास है न निराशा — और अधिक ध्यान है।",
      },
    },
  },

  {
    id: "kena-2-2",
    locator: "2.2",
    handle: {
      en: "I do not think I know it well",
      kn: "ಚೆನ್ನಾಗಿ ತಿಳಿದಿದ್ದೇನೆಂದು ಭಾವಿಸೆನು",
      hi: "मैं नहीं मानता कि भली जानता हूँ",
    },
    sanskrit: [
      "नाहं मन्ये सुवेदेति नो न वेदेति वेद च ।",
      "यो नस्तद्वेद तद्वेद नो न वेदेति वेद च ॥",
    ],
    iast: [
      "nāhaṃ manye suvedeti no na vedeti veda ca |",
      "yo nas tad veda tad veda no na vedeti veda ca ||",
    ],
    keywords: [
      {
        term: "वेद",
        iast: "veda",
        gloss: {
          en: "knows — the same root that names the Vedas",
          kn: "ತಿಳಿಯುತ್ತಾನೆ — ವೇದಗಳಿಗೆ ಹೆಸರು ಕೊಟ್ಟ ಅದೇ ಧಾತು",
          hi: "जानता है — वही धातु जिससे वेद नाम बना",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "I do not think I know it well. Nor do I think I do not know it — I do know. Whoever among us knows this: he knows it, and he knows also that he does not know.",
        explanation:
          "The student's reply, and one of the most carefully balanced sentences in the Upaniṣads. It refuses both available positions in the same breath.\n\nNot 'I know it well' — that was corrected in the previous verse. But equally not 'I do not know it', because the Self cannot be unknown to itself; every experience whatever is already its presence. So the answer is a double negation that lands somewhere neither claim reaches: veda ca, and I do know.\n\nThe second line generalises: correct knowledge of Brahman includes the knowledge that it is not known as an object. Certainty and ignorance are both wrong postures. What is right is a knowing that is aware of not being a grasp.",
      },
      kn: {
        translation:
          "ಚೆನ್ನಾಗಿ ತಿಳಿದಿದ್ದೇನೆಂದು ನಾನು ಭಾವಿಸೆನು. ತಿಳಿಯೆನೆಂದೂ ಭಾವಿಸೆನು — ನಾನು ತಿಳಿಯುತ್ತೇನೆ. ನಮ್ಮಲ್ಲಿ ಯಾರು ಇದನ್ನು ತಿಳಿಯುತ್ತಾನೋ, ಅವನು ಅದನ್ನು ತಿಳಿಯುತ್ತಾನೆ, ಮತ್ತು ತಾನು ತಿಳಿಯನೆಂದೂ ತಿಳಿಯುತ್ತಾನೆ.",
        explanation:
          "ಶಿಷ್ಯನ ಉತ್ತರ, ಮತ್ತು ಉಪನಿಷತ್ತುಗಳಲ್ಲಿ ಅತ್ಯಂತ ಎಚ್ಚರಿಕೆಯಿಂದ ತೂಗಿದ ವಾಕ್ಯಗಳಲ್ಲಿ ಒಂದು. ದೊರೆಯುವ ಎರಡೂ ನಿಲುವುಗಳನ್ನು ಒಂದೇ ಉಸಿರಿನಲ್ಲಿ ನಿರಾಕರಿಸುತ್ತದೆ.\n\n'ಚೆನ್ನಾಗಿ ತಿಳಿದಿದ್ದೇನೆ' ಅಲ್ಲ — ಅದನ್ನು ಹಿಂದಿನ ಶ್ಲೋಕ ತಿದ್ದಿತು. ಆದರೆ 'ತಿಳಿಯೆನು' ಎಂದೂ ಅಲ್ಲ, ಏಕೆಂದರೆ ಆತ್ಮವು ತನಗೇ ಅಜ್ಞಾತವಾಗಿರಲಾರದು; ಯಾವ ಅನುಭವವೂ ಈಗಾಗಲೇ ಅದರ ಸಾನ್ನಿಧ್ಯವೇ. ಆದ್ದರಿಂದ ಉತ್ತರವು ಎರಡೂ ಪ್ರತಿಪಾದನೆಗಳು ತಲುಪದ ಕಡೆ ಇಳಿಯುವ ದ್ವಿಗುಣ ನಿಷೇಧ: 'ವೇದ ಚ', ಮತ್ತು ನಾನು ತಿಳಿಯುತ್ತೇನೆ.\n\nಎರಡನೆಯ ಸಾಲು ಸಾಮಾನ್ಯೀಕರಿಸುತ್ತದೆ: ಬ್ರಹ್ಮದ ಸರಿಯಾದ ಜ್ಞಾನದಲ್ಲಿ, ಅದು ವಿಷಯವಾಗಿ ತಿಳಿಯಲ್ಪಡುವುದಿಲ್ಲ ಎಂಬ ಅರಿವೂ ಸೇರಿದೆ. ಖಚಿತತೆ ಮತ್ತು ಅಜ್ಞಾನ ಎರಡೂ ತಪ್ಪು ನಿಲುವುಗಳು. ಸರಿಯಾದದ್ದು — ತಾನು ಹಿಡಿತವಲ್ಲ ಎಂಬ ಅರಿವಿರುವ ತಿಳಿವು.",
      },
      hi: {
        translation:
          "मैं नहीं मानता कि इसे भली भाँति जानता हूँ। यह भी नहीं कि नहीं जानता — मैं जानता हूँ। हममें से जो इसे जानता है, वह इसे जानता है, और यह भी जानता है कि वह नहीं जानता।",
        explanation:
          "शिष्य का उत्तर, और उपनिषदों के सर्वाधिक सावधानी से तौले गए वाक्यों में से एक। यह उपलब्ध दोनों स्थितियों को एक ही साँस में अस्वीकार करता है।\n\n'भली भाँति जानता हूँ' नहीं — पिछले श्लोक ने उसे सुधार दिया। किंतु 'नहीं जानता' भी नहीं, क्योंकि आत्मा स्वयं से अज्ञात नहीं हो सकती; कोई भी अनुभव पहले से ही उसी की उपस्थिति है। अतः उत्तर एक द्विगुण निषेध है जो वहाँ उतरता है जहाँ दोनों दावे नहीं पहुँचते: 'वेद च', और मैं जानता हूँ।\n\nदूसरी पंक्ति सामान्यीकरण करती है: ब्रह्म के सम्यक् ज्ञान में यह ज्ञान भी सम्मिलित है कि वह विषय रूप में ज्ञात नहीं होता। निश्चय और अज्ञान — दोनों गलत मुद्राएँ हैं। सही वह जानना है जो जानता है कि वह पकड़ नहीं है।",
      },
    },
  },

  {
    id: "kena-2-3",
    locator: "2.3",
    handle: {
      en: "Known to those who do not know",
      kn: "ತಿಳಿಯದವರಿಗೆ ತಿಳಿದದ್ದು",
      hi: "जो नहीं जानते, उन्हें ज्ञात",
    },
    sanskrit: [
      "यस्यामतं तस्य मतं मतं यस्य न वेद सः ।",
      "अविज्ञातं विजानतां विज्ञातमविजानताम् ॥",
    ],
    iast: [
      "yasyāmataṃ tasya mataṃ mataṃ yasya na veda saḥ |",
      "avijñātaṃ vijānatāṃ vijñātam avijānatām ||",
    ],
    keywords: [
      {
        term: "अमत",
        iast: "amata",
        gloss: {
          en: "not thought, not conceived",
          kn: "ಚಿಂತಿಸಲ್ಪಡದ್ದು",
          hi: "जो सोचा नहीं गया",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "To whom it is not conceived, to him it is known; he who conceives it does not know. It is not understood by those who understand; it is understood by those who do not understand.",
        explanation:
          "The paradox stated in its most compressed form, and it is not wordplay. Two different senses of 'know' are in play, and the chiasmus forces the reader to separate them.\n\nTo conceive Brahman is to have formed an idea of it, and an idea is an object — so whoever has one has precisely missed. To have no such idea, while still being the awareness in which ideas occur, is to be it. Hence the reversal: not understood by the understanders, understood by those who do not understand.\n\nŚaṅkara is careful to add what the verse does not say: this is no praise of ignorance. The avijānat here is not the person who has never enquired but the one who has enquired far enough to stop mistaking a concept for the thing.",
      },
      kn: {
        translation:
          "ಯಾರಿಗೆ ಅದು ಚಿಂತಿಸಲ್ಪಟ್ಟಿಲ್ಲವೋ ಅವನಿಗೆ ಅದು ತಿಳಿದಿದೆ; ಯಾರು ಅದನ್ನು ಚಿಂತಿಸುತ್ತಾನೋ ಅವನು ತಿಳಿಯನು. ತಿಳಿದವರಿಗೆ ಅದು ಅವಿಜ್ಞಾತ; ತಿಳಿಯದವರಿಗೆ ವಿಜ್ಞಾತ.",
        explanation:
          "ಅತ್ಯಂತ ಸಂಗ್ರಹ ರೂಪದಲ್ಲಿ ಹೇಳಿದ ವಿರೋಧಾಭಾಸ, ಮತ್ತು ಇದು ಪದಚಮತ್ಕಾರವಲ್ಲ. 'ತಿಳಿಯುವಿಕೆ' ಎಂಬುದರ ಎರಡು ಬೇರೆ ಅರ್ಥಗಳು ಇಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತಿವೆ, ಮತ್ತು ಈ ವ್ಯತಿಕ್ರಮ ರಚನೆ ಓದುಗನನ್ನು ಅವನ್ನು ಬೇರ್ಪಡಿಸುವಂತೆ ಒತ್ತಾಯಿಸುತ್ತದೆ.\n\nಬ್ರಹ್ಮವನ್ನು ಕಲ್ಪಿಸಿಕೊಳ್ಳುವುದೆಂದರೆ ಅದರ ಒಂದು ಕಲ್ಪನೆಯನ್ನು ರೂಪಿಸಿಕೊಂಡದ್ದು, ಮತ್ತು ಕಲ್ಪನೆ ಒಂದು ವಿಷಯ — ಆದ್ದರಿಂದ ಅಂಥದೊಂದನ್ನು ಹೊಂದಿದವನು ನಿಖರವಾಗಿ ತಪ್ಪಿಸಿಕೊಂಡಿದ್ದಾನೆ. ಅಂಥ ಕಲ್ಪನೆಯಿಲ್ಲದೆ, ಆದರೆ ಕಲ್ಪನೆಗಳು ಯಾವುದರಲ್ಲಿ ಉದಿಸುತ್ತವೋ ಆ ಅರಿವಾಗಿಯೇ ಇರುವುದು — ಅದೇ ಆಗಿರುವುದು. ಆದ್ದರಿಂದ ಈ ತಿರುವು.\n\nಶ್ಲೋಕ ಹೇಳದಿರುವುದನ್ನು ಶಂಕರರು ಎಚ್ಚರಿಕೆಯಿಂದ ಸೇರಿಸುತ್ತಾರೆ: ಇದು ಅಜ್ಞಾನದ ಹೊಗಳಿಕೆಯಲ್ಲ. ಇಲ್ಲಿನ 'ಅವಿಜಾನತ್' ಎಂದರೆ ಎಂದೂ ವಿಚಾರಿಸದವನಲ್ಲ, ಪರಿಕಲ್ಪನೆಯನ್ನು ವಸ್ತುವೆಂದು ತಪ್ಪಾಗಿ ತಿಳಿಯುವುದನ್ನು ನಿಲ್ಲಿಸುವಷ್ಟು ದೂರ ವಿಚಾರಿಸಿದವನು.",
      },
      hi: {
        translation:
          "जिसने उसे नहीं सोचा, उसे वह ज्ञात है; जो उसे सोचता है वह नहीं जानता। जो जानते हैं उनके लिए वह अविज्ञात है; जो नहीं जानते उनके लिए विज्ञात।",
        explanation:
          "अत्यंत संक्षिप्त रूप में कहा गया विरोधाभास, और यह शब्दक्रीड़ा नहीं। 'जानना' के दो भिन्न अर्थ यहाँ काम कर रहे हैं, और यह व्यतिक्रम रचना पाठक को उन्हें अलग करने पर विवश करती है।\n\nब्रह्म की कल्पना करना अर्थात् उसका कोई विचार बना लेना, और विचार एक विषय है — अतः जिसके पास वह है वह ठीक-ठीक चूक गया। ऐसा कोई विचार न रखते हुए भी उस चेतना के रूप में बने रहना जिसमें विचार उठते हैं — वही होना है। इसीलिए यह उलटाव।\n\nशंकर सावधानी से वह जोड़ते हैं जो श्लोक नहीं कहता: यह अज्ञान की प्रशंसा नहीं। यहाँ 'अविजानत्' वह नहीं जिसने कभी जिज्ञासा ही न की, बल्कि वह जिसने इतनी दूर जिज्ञासा की कि अवधारणा को वस्तु समझना छोड़ दिया।",
      },
    },
  },

  {
    id: "kena-2-4",
    locator: "2.4",
    handle: {
      en: "Known in every awakening",
      kn: "ಪ್ರತಿ ಬೋಧದಲ್ಲಿ ತಿಳಿಯಲ್ಪಡುವುದು",
      hi: "हर बोध में ज्ञात",
    },
    sanskrit: [
      "प्रतिबोधविदितं मतममृतत्वं हि विन्दते ।",
      "आत्मना विन्दते वीर्यं विद्यया विन्दतेऽमृतम् ॥",
    ],
    iast: [
      "pratibodhaviditaṃ matam amṛtatvaṃ hi vindate |",
      "ātmanā vindate vīryaṃ vidyayā vindate 'mṛtam ||",
    ],
    keywords: [
      {
        term: "प्रतिबोध",
        iast: "pratibodha",
        gloss: {
          en: "each act of cognition; every awakening to something",
          kn: "ಪ್ರತಿ ಅರಿವಿನ ಕ್ರಿಯೆ; ಪ್ರತಿ ಬೋಧ",
          hi: "प्रत्येक बोध-क्रिया; हर जागना",
        },
      },
      {
        term: "वीर्य",
        iast: "vīrya",
        gloss: {
          en: "strength, vigour",
          kn: "ವೀರ್ಯ, ಬಲ",
          hi: "वीर्य, बल",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "It is known in every act of cognition — so one finds immortality. By the Self one finds strength; by knowledge one finds the deathless.",
        explanation:
          "After three verses of negation, the one positive instruction in the khaṇḍa, and it is startlingly practical. Pratibodha-viditam: known in each cognition. Not in a special state, not after long preparation — in every single act of knowing anything at all.\n\nThe argument has been running toward this. If Brahman is what makes seeing see and thinking think, then it is not distant. It is nearer than the object of every thought, present in each one as its condition. What was framed as unreachable turns out to be unmissable; only the looking was pointed the wrong way.\n\nThe closing line divides the work honestly. Strength comes from the Self — that much is one's own. But amṛtatva, the deathless, comes by vidyā. Effort alone does not produce it.",
      },
      kn: {
        translation:
          "ಪ್ರತಿ ಅರಿವಿನ ಕ್ರಿಯೆಯಲ್ಲಿಯೂ ಅದು ತಿಳಿಯಲ್ಪಡುತ್ತದೆ — ಹೀಗೆ ಅಮೃತತ್ವ ದೊರೆಯುತ್ತದೆ. ಆತ್ಮದಿಂದ ಬಲ ದೊರೆಯುತ್ತದೆ; ವಿದ್ಯೆಯಿಂದ ಅಮೃತ ದೊರೆಯುತ್ತದೆ.",
        explanation:
          "ಮೂರು ನಿಷೇಧದ ಶ್ಲೋಕಗಳ ನಂತರ ಈ ಖಂಡದ ಏಕೈಕ ವಿಧ್ಯಾತ್ಮಕ ಉಪದೇಶ, ಮತ್ತು ಅದು ಆಶ್ಚರ್ಯಕರವಾಗಿ ವ್ಯಾವಹಾರಿಕ. 'ಪ್ರತಿಬೋಧವಿದಿತಂ': ಪ್ರತಿ ಅರಿವಿನಲ್ಲಿ ತಿಳಿಯಲ್ಪಡುವುದು. ವಿಶೇಷ ಸ್ಥಿತಿಯಲ್ಲಲ್ಲ, ದೀರ್ಘ ಸಿದ್ಧತೆಯ ನಂತರವಲ್ಲ — ಯಾವುದನ್ನಾದರೂ ತಿಳಿಯುವ ಪ್ರತಿಯೊಂದು ಕ್ರಿಯೆಯಲ್ಲಿ.\n\nವಾದ ಇದರತ್ತಲೇ ಸಾಗಿತ್ತು. ನೋಟವನ್ನು ನೋಡುವಂತೆ, ಚಿಂತನೆಯನ್ನು ಚಿಂತಿಸುವಂತೆ ಮಾಡುವುದೇ ಬ್ರಹ್ಮವಾದರೆ, ಅದು ದೂರವಿಲ್ಲ. ಪ್ರತಿ ಯೋಚನೆಯ ವಿಷಯಕ್ಕಿಂತಲೂ ಹತ್ತಿರ, ಪ್ರತಿಯೊಂದರಲ್ಲೂ ಅದರ ಷರತ್ತಾಗಿ ಇರುತ್ತದೆ. ತಲುಪಲಾಗದ್ದೆಂದು ಚಿತ್ರಿಸಲ್ಪಟ್ಟದ್ದು ತಪ್ಪಿಸಿಕೊಳ್ಳಲಾಗದ್ದೆಂದು ತಿಳಿಯುತ್ತದೆ; ನೋಟದ ದಿಕ್ಕು ಮಾತ್ರ ತಪ್ಪಾಗಿತ್ತು.\n\nಕೊನೆಯ ಸಾಲು ಕೆಲಸವನ್ನು ಪ್ರಾಮಾಣಿಕವಾಗಿ ಹಂಚುತ್ತದೆ. ಬಲವು ಆತ್ಮದಿಂದ — ಅಷ್ಟು ತನ್ನದೇ. ಆದರೆ ಅಮೃತತ್ವ ವಿದ್ಯೆಯಿಂದ ಬರುತ್ತದೆ. ಪ್ರಯತ್ನ ಮಾತ್ರದಿಂದ ಅದು ಉಂಟಾಗುವುದಿಲ್ಲ.",
      },
      hi: {
        translation:
          "वह प्रत्येक बोध-क्रिया में ज्ञात होता है — इस प्रकार अमृतत्व मिलता है। आत्मा से बल मिलता है; विद्या से अमृत मिलता है।",
        explanation:
          "तीन निषेध-श्लोकों के बाद इस खंड का एकमात्र विधेय उपदेश, और वह आश्चर्यजनक रूप से व्यावहारिक है। 'प्रतिबोधविदितम्': हर बोध में ज्ञात। किसी विशेष अवस्था में नहीं, लंबी तैयारी के बाद नहीं — किसी भी वस्तु को जानने की हर एक क्रिया में।\n\nतर्क इसी ओर बढ़ रहा था। यदि ब्रह्म वही है जो देखने को देखना और सोचने को सोचना बनाता है, तो वह दूर नहीं। वह हर विचार के विषय से भी निकट है, हर एक में उसकी शर्त के रूप में उपस्थित। जो अगम्य बताया गया वही अपरिहार्य निकलता है; केवल देखने की दिशा गलत थी।\n\nअंतिम पंक्ति काम को ईमानदारी से बाँटती है। बल आत्मा से आता है — इतना अपना है। किंतु अमृतत्व विद्या से आता है। केवल प्रयत्न से वह उत्पन्न नहीं होता।",
      },
    },
  },

  {
    id: "kena-2-5",
    locator: "2.5",
    handle: {
      en: "If known here, then truth",
      kn: "ಇಲ್ಲಿ ತಿಳಿದರೆ ಸತ್ಯ",
      hi: "यहाँ जान लिया तो सत्य",
    },
    sanskrit: [
      "इह चेदवेदीदथ सत्यमस्ति",
      "न चेदिहावेदीन्महती विनष्टिः ।",
      "भूतेषु भूतेषु विचित्य धीराः",
      "प्रेत्यास्माल्लोकादमृता भवन्ति ॥",
    ],
    iast: [
      "iha ced avedīd atha satyam asti",
      "na ced ihāvedīn mahatī vinaṣṭiḥ |",
      "bhūteṣu bhūteṣu vicitya dhīrāḥ",
      "pretyāsmāl lokād amṛtā bhavanti ||",
    ],
    keywords: [
      {
        term: "इह",
        iast: "iha",
        gloss: {
          en: "here — in this life, in this body",
          kn: "ಇಲ್ಲಿ — ಈ ಜನ್ಮದಲ್ಲಿ, ಈ ದೇಹದಲ್ಲಿ",
          hi: "यहाँ — इसी जीवन में, इसी शरीर में",
        },
      },
      {
        term: "विचित्य",
        iast: "vicitya",
        gloss: {
          en: "having discerned, picked out",
          kn: "ವಿವೇಚಿಸಿ, ಗುರುತಿಸಿ",
          hi: "विवेचन करके, पहचानकर",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "If one has known it here, then there is truth. If one has not known it here, great is the destruction. Discerning it in every being, the steady ones depart this world and become immortal.",
        explanation:
          "The khaṇḍa closes by putting the whole matter in this life. Iha — here — carries the weight, and the text repeats it in both halves of the condition. Not after death, not in some other world; here, in the body reading this.\n\nMahatī vinaṣṭiḥ, 'great is the destruction', is the strongest language Kena uses. It matches the Īśa's 'slayers of the Self' — not a threat of punishment but a statement about what a life amounts to if it never once turned to look at what was doing the looking.\n\nThe last line supplies the method, and it is the same as Īśa 6: bhūteṣu bhūteṣu, in beings and beings. The discernment is not achieved by withdrawal from the world but by recognition across it, one being at a time.",
      },
      kn: {
        translation:
          "ಇಲ್ಲಿಯೇ ಅದನ್ನು ತಿಳಿದರೆ ಸತ್ಯವಿದೆ. ಇಲ್ಲಿ ತಿಳಿಯದಿದ್ದರೆ ಮಹಾ ವಿನಾಶ. ಪ್ರತಿಯೊಂದು ಭೂತದಲ್ಲೂ ಅದನ್ನು ವಿವೇಚಿಸಿ ಧೀರರು ಈ ಲೋಕದಿಂದ ತೆರಳಿ ಅಮರರಾಗುತ್ತಾರೆ.",
        explanation:
          "ಈ ಖಂಡ ಇಡೀ ವಿಷಯವನ್ನು ಈ ಜನ್ಮದಲ್ಲಿ ಇರಿಸಿ ಮುಗಿಯುತ್ತದೆ. 'ಇಹ' — ಇಲ್ಲಿ — ಎಂಬುದೇ ಭಾರ ಹೊತ್ತಿದೆ, ಮತ್ತು ಷರತ್ತಿನ ಎರಡೂ ಅರ್ಧಗಳಲ್ಲಿ ಪಠ್ಯ ಅದನ್ನು ಪುನರಾವರ್ತಿಸುತ್ತದೆ. ಮರಣಾನಂತರವಲ್ಲ, ಬೇರೊಂದು ಲೋಕದಲ್ಲಲ್ಲ; ಇಲ್ಲಿ, ಇದನ್ನು ಓದುತ್ತಿರುವ ದೇಹದಲ್ಲಿ.\n\n'ಮಹತೀ ವಿನಷ್ಟಿಃ' — ಮಹಾ ವಿನಾಶ — ಎಂಬುದು ಕೇನ ಬಳಸುವ ಅತ್ಯಂತ ಕಠಿಣ ಮಾತು. ಈಶಾವಾಸ್ಯದ 'ಆತ್ಮಘಾತಕರು' ಎಂಬುದಕ್ಕೆ ಅದು ಹೊಂದುತ್ತದೆ — ಶಿಕ್ಷೆಯ ಬೆದರಿಕೆಯಲ್ಲ, ನೋಡುತ್ತಿದ್ದದ್ದನ್ನು ಒಮ್ಮೆಯೂ ತಿರುಗಿ ನೋಡದ ಬದುಕು ಏನಾಗುತ್ತದೆ ಎಂಬ ಹೇಳಿಕೆ.\n\nಕೊನೆಯ ಸಾಲು ವಿಧಾನವನ್ನು ಕೊಡುತ್ತದೆ, ಮತ್ತು ಅದು ಈಶಾವಾಸ್ಯದ ಆರನೆಯ ಶ್ಲೋಕದಂತೆಯೇ: 'ಭೂತೇಷು ಭೂತೇಷು', ಭೂತಗಳಲ್ಲಿ ಭೂತಗಳಲ್ಲಿ. ಈ ವಿವೇಚನೆ ಜಗತ್ತಿನಿಂದ ಹಿಂದೆ ಸರಿಯುವುದರಿಂದ ಬರುವುದಿಲ್ಲ, ಜಗತ್ತಿನಾದ್ಯಂತ ಒಂದೊಂದೇ ಜೀವಿಯಲ್ಲಿ ಗುರುತಿಸುವುದರಿಂದ ಬರುತ್ತದೆ.",
      },
      hi: {
        translation:
          "यदि यहीं उसे जान लिया, तो सत्य है। यदि यहाँ नहीं जाना, तो महान् विनाश है। प्रत्येक भूत में उसका विवेचन करके धीर पुरुष इस लोक से जाकर अमर हो जाते हैं।",
        explanation:
          "खंड सारे विषय को इसी जीवन में रखकर समाप्त होता है। 'इह' — यहाँ — ही भार उठाए है, और शर्त के दोनों आधों में पाठ उसे दोहराता है। मृत्यु के बाद नहीं, किसी अन्य लोक में नहीं; यहाँ, इसी शरीर में जो यह पढ़ रहा है।\n\n'महती विनष्टिः' — महान् विनाश — केन की सबसे कठोर भाषा है। यह ईशावास्य के 'आत्महंता' से मेल खाती है — दंड की धमकी नहीं, बल्कि यह कथन कि जो जीवन एक बार भी मुड़कर उसे न देखे जो देख रहा था, वह किस पर आ ठहरता है।\n\nअंतिम पंक्ति विधि देती है, और वह ईशावास्य ६ जैसी ही है: 'भूतेषु भूतेषु', भूतों-भूतों में। यह विवेचन जगत् से हटकर नहीं, जगत् भर में एक-एक प्राणी में पहचानकर सिद्ध होता है।",
      },
    },
  },

  {
    id: "kena-3-1",
    locator: "3.1",
    handle: {
      en: "Brahman won a victory",
      kn: "ಬ್ರಹ್ಮ ಜಯ ಗಳಿಸಿತು",
      hi: "ब्रह्म ने विजय पाई",
    },
    sanskrit: [
      "ब्रह्म ह देवेभ्यो विजिग्ये तस्य ह ब्रह्मणो विजये",
      "देवा अमहीयन्त ॥",
    ],
    iast: [
      "brahma ha devebhyo vijigye tasya ha brahmaṇo vijaye",
      "devā amahīyanta ||",
    ],
    keywords: [
      {
        term: "विजिग्ये",
        iast: "vijigye",
        gloss: {
          en: "won, conquered — for the sake of",
          kn: "ಜಯಿಸಿತು — ಇವರಿಗಾಗಿ",
          hi: "जीता — इनके लिए",
        },
      },
      {
        term: "अमहीयन्त",
        iast: "amahīyanta",
        gloss: {
          en: "they became elated, swelled with pride",
          kn: "ಅವರು ಉಬ್ಬಿಹೋದರು",
          hi: "वे फूल उठे, गर्वित हुए",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Brahman won a victory for the gods. In that victory of Brahman's, the gods became elated.",
        explanation:
          "The prose half begins, and it opens a story rather than an argument. Two sentences establish everything the rest of the narrative will turn on.\n\nThe first states a fact: the victory was Brahman's, won on the gods' behalf. The second states an error: the gods swelled. Note the text does not say they lied or boasted — amahīyanta is closer to being carried away. The mistake is not dishonesty but the automatic assumption that the power one is acting with is one's own.\n\nWhich is exactly the position of every reader of khaṇḍa 1. You see with your eye. Except that the eye of the eye is what the seeing was.",
      },
      kn: {
        translation:
          "ಬ್ರಹ್ಮವು ದೇವತೆಗಳಿಗಾಗಿ ಜಯವನ್ನು ಗಳಿಸಿತು. ಬ್ರಹ್ಮದ ಆ ಜಯದಲ್ಲಿ ದೇವತೆಗಳು ಉಬ್ಬಿಹೋದರು.",
        explanation:
          "ಗದ್ಯಭಾಗ ಆರಂಭವಾಗುತ್ತದೆ, ಮತ್ತು ಅದು ವಾದವನ್ನಲ್ಲ, ಕಥೆಯನ್ನು ತೆರೆಯುತ್ತದೆ. ಎರಡು ವಾಕ್ಯಗಳು ಮುಂದಿನ ಇಡೀ ನಿರೂಪಣೆ ತಿರುಗುವ ಎಲ್ಲವನ್ನೂ ಸ್ಥಾಪಿಸುತ್ತವೆ.\n\nಮೊದಲನೆಯದು ಒಂದು ಸತ್ಯವನ್ನು ಹೇಳುತ್ತದೆ: ಜಯ ಬ್ರಹ್ಮದ್ದು, ದೇವತೆಗಳ ಪರವಾಗಿ ಗಳಿಸಿದ್ದು. ಎರಡನೆಯದು ಒಂದು ತಪ್ಪನ್ನು ಹೇಳುತ್ತದೆ: ದೇವತೆಗಳು ಉಬ್ಬಿದರು. ಅವರು ಸುಳ್ಳು ಹೇಳಿದರೆಂದೋ ಜಂಬ ಕೊಚ್ಚಿಕೊಂಡರೆಂದೋ ಪಠ್ಯ ಹೇಳುವುದಿಲ್ಲ ಎಂಬುದನ್ನು ಗಮನಿಸಿ — 'ಅಮಹೀಯಂತ' ಎಂಬುದು 'ಕೊಚ್ಚಿಹೋದರು' ಎಂಬುದಕ್ಕೆ ಹತ್ತಿರ. ತಪ್ಪು ಅಪ್ರಾಮಾಣಿಕತೆಯಲ್ಲ, ತಾನು ಯಾವ ಶಕ್ತಿಯಿಂದ ಕೆಲಸ ಮಾಡುತ್ತಿದ್ದೇನೋ ಅದು ತನ್ನದೇ ಎಂಬ ಸ್ವಯಂಚಾಲಿತ ಊಹೆ.\n\nಇದೇ ಮೊದಲ ಖಂಡವನ್ನು ಓದಿದ ಪ್ರತಿಯೊಬ್ಬನ ಸ್ಥಿತಿ. ನೀವು ನಿಮ್ಮ ಕಣ್ಣಿನಿಂದ ನೋಡುತ್ತೀರಿ. ಆದರೆ ಆ ನೋಡುವಿಕೆ ಕಣ್ಣಿನ ಕಣ್ಣಾಗಿತ್ತು.",
      },
      hi: {
        translation:
          "ब्रह्म ने देवताओं के लिए विजय प्राप्त की। ब्रह्म की उस विजय में देवता फूल उठे।",
        explanation:
          "गद्य भाग आरंभ होता है, और वह तर्क नहीं, कथा खोलता है। दो वाक्य वह सब स्थापित कर देते हैं जिस पर आगे का सारा आख्यान घूमेगा।\n\nपहला एक तथ्य कहता है: विजय ब्रह्म की थी, देवताओं के लिए प्राप्त की गई। दूसरा एक भूल कहता है: देवता फूल उठे। ध्यान दें कि पाठ यह नहीं कहता कि उन्होंने झूठ बोला या डींग हाँकी — 'अमहीयन्त' 'बहक गए' के अधिक निकट है। भूल बेईमानी नहीं, बल्कि यह स्वचालित धारणा है कि जिस शक्ति से मैं काम कर रहा हूँ वह मेरी अपनी है।\n\nयही प्रथम खंड के हर पाठक की स्थिति है। आप अपनी आँख से देखते हैं। सिवाय इसके कि वह देखना आँख की आँख था।",
      },
    },
  },

  {
    id: "kena-3-2",
    locator: "3.2",
    handle: {
      en: "Ours alone, they thought",
      kn: "ನಮ್ಮದೇ ಎಂದುಕೊಂಡರು",
      hi: "हमारी ही है, ऐसा सोचा",
    },
    sanskrit: [
      "त एैक्षन्तास्माकमेवायं विजयोऽस्माकमेवायं",
      "महिमेति ॥",
    ],
    iast: [
      "ta aikṣantāsmākam evāyaṃ vijayo 'smākam evāyaṃ",
      "mahimeti ||",
    ],
    keywords: [
      {
        term: "अस्माकम् एव",
        iast: "asmākam eva",
        gloss: {
          en: "ours alone — the eva is the whole error",
          kn: "ನಮ್ಮದೇ — 'ಏವ' ಎಂಬುದೇ ಇಡೀ ತಪ್ಪು",
          hi: "हमारी ही — 'एव' में ही सारी भूल है",
        },
      },
      {
        term: "महिमा",
        iast: "mahimā",
        gloss: {
          en: "greatness, glory",
          kn: "ಮಹಿಮೆ, ಗೌರವ",
          hi: "महिमा, गौरव",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "They thought: ours alone is this victory, ours alone this greatness.",
        explanation:
          "The error stated in the gods' own words, and the whole of it sits in one syllable: eva, 'alone'. Remove it and the sentence is true — the victory was theirs, in the sense that they fought and won. Adding eva makes it false.\n\nThis is precise about how appropriation works. Nobody in the story invents a falsehood. They take something correct — we won — and quietly close it against any other source. The Īśa's mā gṛdhaḥ, 'do not covet', is the same observation about possessions; here it is about achievement.",
      },
      kn: {
        translation:
          "ಅವರು ಯೋಚಿಸಿದರು: ಈ ಜಯ ನಮ್ಮದೇ, ಈ ಮಹಿಮೆ ನಮ್ಮದೇ.",
        explanation:
          "ದೇವತೆಗಳ ಸ್ವಂತ ಮಾತಿನಲ್ಲಿಯೇ ಹೇಳಿದ ತಪ್ಪು, ಮತ್ತು ಅದೆಲ್ಲವೂ ಒಂದೇ ಅಕ್ಷರದಲ್ಲಿದೆ: 'ಏವ', ಅಂದರೆ 'ಮಾತ್ರ'. ಅದನ್ನು ತೆಗೆದರೆ ವಾಕ್ಯ ಸತ್ಯ — ಅವರು ಹೋರಾಡಿ ಗೆದ್ದರೆಂಬ ಅರ್ಥದಲ್ಲಿ ಜಯ ಅವರದೇ. 'ಏವ' ಸೇರಿಸಿದರೆ ಅದು ಸುಳ್ಳಾಗುತ್ತದೆ.\n\nಅಪಹರಣ ಹೇಗೆ ನಡೆಯುತ್ತದೆ ಎಂಬುದರ ಬಗ್ಗೆ ಇದು ನಿಖರ. ಕಥೆಯಲ್ಲಿ ಯಾರೂ ಸುಳ್ಳನ್ನು ಕಟ್ಟುವುದಿಲ್ಲ. ಸರಿಯಾದ ಒಂದನ್ನು — ನಾವು ಗೆದ್ದೆವು — ತೆಗೆದುಕೊಂಡು, ಬೇರೆ ಯಾವ ಮೂಲದ ವಿರುದ್ಧವೂ ಅದನ್ನು ಸದ್ದಿಲ್ಲದೆ ಮುಚ್ಚಿಬಿಡುತ್ತಾರೆ. ಈಶಾವಾಸ್ಯದ 'ಮಾ ಗೃಧಃ' — ಆಸೆಪಡಬೇಡ — ಎಂಬುದು ಸಂಪತ್ತಿನ ಬಗ್ಗೆ ಇದೇ ಗಮನಿಕೆ; ಇಲ್ಲಿ ಅದು ಸಾಧನೆಯ ಬಗ್ಗೆ.",
      },
      hi: {
        translation:
          "उन्होंने सोचा: यह विजय हमारी ही है, यह महिमा हमारी ही है।",
        explanation:
          "देवताओं के अपने ही शब्दों में कही गई भूल, और वह सारी एक अक्षर में बैठी है: 'एव', अर्थात् 'ही'। उसे हटा दीजिए, वाक्य सत्य है — विजय उन्हीं की थी, इस अर्थ में कि वे लड़े और जीते। 'एव' जोड़ते ही वह असत्य हो जाता है।\n\nहड़पना कैसे काम करता है, इस विषय में यह सटीक है। कथा में कोई असत्य गढ़ता नहीं। वे एक सही बात लेते हैं — हम जीते — और चुपचाप उसे किसी अन्य स्रोत के विरुद्ध बंद कर देते हैं। ईशावास्य का 'मा गृधः' — लोभ मत करो — संपत्ति के विषय में यही टिप्पणी है; यहाँ वह उपलब्धि के विषय में है।",
      },
    },
  },

  {
    id: "kena-3-3",
    locator: "3.3",
    handle: {
      en: "It appeared before them",
      kn: "ಅದು ಅವರೆದುರು ಕಾಣಿಸಿಕೊಂಡಿತು",
      hi: "वह उनके सामने प्रकट हुआ",
    },
    sanskrit: [
      "तद्धैषां विजज्ञौ तेभ्यो ह प्रादुर्बभूव",
      "तन्न व्यजानत किमिदं यक्षमिति ॥",
    ],
    iast: [
      "tad dhaiṣāṃ vijajñau tebhyo ha prādurbabhūva",
      "tan na vyajānata kim idaṃ yakṣam iti ||",
    ],
    keywords: [
      {
        term: "यक्ष",
        iast: "yakṣa",
        gloss: {
          en: "a spirit, an apparition — here, something wondrous and unidentified",
          kn: "ಯಕ್ಷ, ಒಂದು ಆಕೃತಿ — ಇಲ್ಲಿ ಗುರುತಿಸಲಾಗದ ಅದ್ಭುತವಾದದ್ದು",
          hi: "यक्ष, कोई आकृति — यहाँ अपरिचित और अद्भुत कुछ",
        },
      },
      {
        term: "प्रादुर्बभूव",
        iast: "prādurbabhūva",
        gloss: {
          en: "became manifest, appeared",
          kn: "ಪ್ರಕಟವಾಯಿತು",
          hi: "प्रकट हुआ",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Brahman knew this of them, and appeared before them. They did not recognise it. 'What is this spirit?' they said.",
        explanation:
          "The turn. Brahman does not correct them by argument or punish them; it simply becomes visible. And they do not know what they are looking at.\n\nThis is the argument of khaṇḍa 1 rendered as an event. The gods are the faculties personified — Agni is speech and heat, Vāyu is breath, Indra is mind — and khaṇḍa 1 established precisely that no faculty can reach what stands behind it. So their failure to recognise is not stupidity. It is structural, and it was predicted.\n\nYakṣa is left deliberately vague: something wondrous, unidentified. The word itself performs the not-knowing.",
      },
      kn: {
        translation:
          "ಬ್ರಹ್ಮವು ಅವರ ಈ ಸ್ಥಿತಿಯನ್ನು ಅರಿಯಿತು ಮತ್ತು ಅವರೆದುರು ಪ್ರಕಟವಾಯಿತು. ಅವರು ಅದನ್ನು ಗುರುತಿಸಲಿಲ್ಲ. 'ಇದೇನು ಯಕ್ಷ?' ಎಂದರು.",
        explanation:
          "ತಿರುವು. ಬ್ರಹ್ಮ ಅವರನ್ನು ವಾದದಿಂದ ತಿದ್ದುವುದಿಲ್ಲ, ಶಿಕ್ಷಿಸುವುದೂ ಇಲ್ಲ; ಕೇವಲ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ. ಮತ್ತು ತಾವು ಏನನ್ನು ನೋಡುತ್ತಿದ್ದೇವೆಂದು ಅವರಿಗೆ ತಿಳಿಯುವುದಿಲ್ಲ.\n\nಇದು ಮೊದಲ ಖಂಡದ ವಾದವನ್ನು ಘಟನೆಯಾಗಿ ತೋರಿಸಿದ್ದು. ದೇವತೆಗಳೇ ವ್ಯಕ್ತಿರೂಪ ಪಡೆದ ಶಕ್ತಿಗಳು — ಅಗ್ನಿ ವಾಕ್ ಮತ್ತು ಶಾಖ, ವಾಯು ಪ್ರಾಣ, ಇಂದ್ರ ಮನಸ್ಸು — ಮತ್ತು ಯಾವ ಶಕ್ತಿಯೂ ತನ್ನ ಹಿಂದಿರುವುದನ್ನು ತಲುಪಲಾರದೆಂದು ಮೊದಲ ಖಂಡ ಸ್ಥಾಪಿಸಿತ್ತು. ಆದ್ದರಿಂದ ಅವರು ಗುರುತಿಸದಿರುವುದು ಮೂರ್ಖತನವಲ್ಲ. ಅದು ರಚನಾತ್ಮಕ, ಮತ್ತು ಮೊದಲೇ ಭವಿಷ್ಯ ನುಡಿಯಲಾಗಿತ್ತು.\n\n'ಯಕ್ಷ' ಎಂಬುದನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಅಸ್ಪಷ್ಟವಾಗಿ ಬಿಡಲಾಗಿದೆ: ಅದ್ಭುತವಾದದ್ದು, ಗುರುತಿಸಲಾಗದ್ದು. ಆ ಪದವೇ ತಿಳಿಯದಿರುವಿಕೆಯನ್ನು ನಡೆಸಿ ತೋರಿಸುತ್ತದೆ.",
      },
      hi: {
        translation:
          "ब्रह्म ने उनकी यह दशा जान ली और उनके सामने प्रकट हुआ। उन्होंने उसे नहीं पहचाना। 'यह यक्ष क्या है?' उन्होंने कहा।",
        explanation:
          "मोड़। ब्रह्म उन्हें तर्क से नहीं सुधारता, दंड भी नहीं देता; बस दिखाई दे जाता है। और वे जो देख रहे हैं उसे पहचान नहीं पाते।\n\nयह प्रथम खंड का तर्क घटना के रूप में है। देवता ही मूर्त शक्तियाँ हैं — अग्नि वाणी और ताप, वायु प्राण, इंद्र मन — और प्रथम खंड ने ठीक यही स्थापित किया था कि कोई शक्ति अपने पीछे वाले तक नहीं पहुँच सकती। अतः उनका न पहचानना मूर्खता नहीं। वह संरचनात्मक है, और पहले ही कहा जा चुका था।\n\n'यक्ष' को जानबूझकर अस्पष्ट छोड़ा गया है: कुछ अद्भुत, अपरिचित। वह शब्द स्वयं न-जानने को घटित कर देता है।",
      },
    },
  },

  {
    id: "kena-3-4",
    locator: "3.4–3.7",
    handle: {
      en: "Agni cannot burn a blade of grass",
      kn: "ಅಗ್ನಿಗೆ ಒಂದು ಹುಲ್ಲುಕಡ್ಡಿಯೂ ಸುಡಲಾಗಲಿಲ್ಲ",
      hi: "अग्नि एक तिनका भी नहीं जला सका",
    },
    sanskrit: [
      "तेऽग्निमब्रुवन् जातवेद एतद्विजानीहि किमेतद्यक्षमिति तथेति ।",
      "तदभ्यद्रवत् तमभ्यवदत् कोऽसीति अग्निर्वा अहमस्मीत्यब्रवीत् ।",
      "तस्मिंस्त्वयि किं वीर्यमिति अपीदं सर्वं दहेयं यदिदं पृथिव्यामिति ।",
      "तस्मै तृणं निदधौ एतद्दहेति तदुपप्रेयाय सर्वजवेन",
      "तन्न शशाक दग्धुं स तत एव निववृते ॥",
    ],
    iast: [
      "te 'gnim abruvan jātaveda etad vijānīhi kim etad yakṣam iti tatheti |",
      "tad abhyadravat tam abhyavadat ko 'sīti agnir vā aham asmīty abravīt |",
      "tasmiṃs tvayi kiṃ vīryam iti apīdaṃ sarvaṃ daheyaṃ yad idaṃ pṛthivyām iti |",
      "tasmai tṛṇaṃ nidadhau etad daheti tad upapreyāya sarvajavena",
      "tan na śaśāka dagdhuṃ sa tata eva nivavṛte ||",
    ],
    keywords: [
      {
        term: "जातवेदस्",
        iast: "jātavedas",
        gloss: {
          en: "knower of all that is born — a title of Agni",
          kn: "ಹುಟ್ಟಿದ ಎಲ್ಲವನ್ನೂ ಬಲ್ಲವನು — ಅಗ್ನಿಯ ಬಿರುದು",
          hi: "जो जन्मे हुए सबको जानता है — अग्नि की उपाधि",
        },
      },
      {
        term: "सर्वजवेन",
        iast: "sarvajavena",
        gloss: {
          en: "with all his speed, with everything he had",
          kn: "ತನ್ನೆಲ್ಲ ವೇಗದಿಂದ",
          hi: "अपने पूरे वेग से",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "They said to Agni: 'Jātavedas, find out what this spirit is.' 'So be it,' he said. He rushed to it. It asked him: 'Who are you?' 'I am Agni,' he said, 'I am Jātavedas.' 'What power is in you?' 'I could burn everything here on earth.' It placed a blade of grass before him: 'Burn this.' He went at it with all his speed and could not burn it. He turned back from there.",
        explanation:
          "The first test, and the detail that makes it land is the blade of grass. Not a mountain — the smallest possible thing. Agni's claim was to burn everything on earth, and it fails at the least of what it claimed.\n\nNotice the sequence. He is asked who he is and answers with two names and a title. He is asked what power is in him and answers with a boast. Neither answer is untrue. Both are irrelevant to the question standing in front of him, and the grass demonstrates it without a word of argument.\n\nThe theological point is exact: fire burns by the power of Brahman, and where that is withheld the identity 'Agni' has nothing left in it. The claim was never false — it was borrowed.",
      },
      kn: {
        translation:
          "ಅವರು ಅಗ್ನಿಗೆ ಹೇಳಿದರು: 'ಜಾತವೇದಸೇ, ಈ ಯಕ್ಷ ಏನೆಂದು ತಿಳಿ.' 'ಆಗಲಿ' ಎಂದನು. ಅದರತ್ತ ಧಾವಿಸಿದನು. ಅದು ಕೇಳಿತು: 'ನೀನು ಯಾರು?' 'ನಾನು ಅಗ್ನಿ, ನಾನು ಜಾತವೇದಸ್' ಎಂದನು. 'ನಿನ್ನಲ್ಲಿ ಯಾವ ಶಕ್ತಿಯಿದೆ?' 'ಈ ಭೂಮಿಯ ಮೇಲಿನ ಎಲ್ಲವನ್ನೂ ಸುಡಬಲ್ಲೆ.' ಅದು ಅವನ ಮುಂದೆ ಒಂದು ಹುಲ್ಲುಕಡ್ಡಿಯನ್ನಿಟ್ಟಿತು: 'ಇದನ್ನು ಸುಡು.' ಅವನು ತನ್ನೆಲ್ಲ ವೇಗದಿಂದ ಅದರತ್ತ ಹೋದನು, ಸುಡಲಾಗಲಿಲ್ಲ. ಅಲ್ಲಿಂದಲೇ ಹಿಂತಿರುಗಿದನು.",
        explanation:
          "ಮೊದಲ ಪರೀಕ್ಷೆ, ಮತ್ತು ಅದನ್ನು ನಾಟುವಂತೆ ಮಾಡುವ ವಿವರವೇ ಹುಲ್ಲುಕಡ್ಡಿ. ಪರ್ವತವಲ್ಲ — ಸಾಧ್ಯವಿರುವ ಅತಿ ಚಿಕ್ಕ ವಸ್ತು. ಭೂಮಿಯ ಮೇಲಿನ ಎಲ್ಲವನ್ನೂ ಸುಡುವೆನೆಂಬುದು ಅಗ್ನಿಯ ಪ್ರತಿಪಾದನೆ, ಮತ್ತು ಅದು ತಾನು ಹೇಳಿಕೊಂಡದ್ದರ ಅತ್ಯಂತ ಕನಿಷ್ಠದಲ್ಲಿ ಸೋಲುತ್ತದೆ.\n\nಕ್ರಮವನ್ನು ಗಮನಿಸಿ. 'ನೀನು ಯಾರು' ಎಂದು ಕೇಳಿದರೆ ಎರಡು ಹೆಸರು ಮತ್ತು ಒಂದು ಬಿರುದಿನಿಂದ ಉತ್ತರಿಸುತ್ತಾನೆ. 'ಯಾವ ಶಕ್ತಿ' ಎಂದರೆ ಜಂಬದಿಂದ ಉತ್ತರಿಸುತ್ತಾನೆ. ಎರಡೂ ಉತ್ತರಗಳು ಸುಳ್ಳಲ್ಲ. ಎರಡೂ ಎದುರು ನಿಂತಿರುವ ಪ್ರಶ್ನೆಗೆ ಅಪ್ರಸ್ತುತ, ಮತ್ತು ಹುಲ್ಲುಕಡ್ಡಿ ಒಂದೂ ಮಾತಿನ ವಾದವಿಲ್ಲದೆ ಅದನ್ನು ತೋರಿಸುತ್ತದೆ.\n\nಸಿದ್ಧಾಂತದ ಅಂಶ ನಿಖರ: ಬೆಂಕಿ ಬ್ರಹ್ಮದ ಶಕ್ತಿಯಿಂದ ಸುಡುತ್ತದೆ, ಮತ್ತು ಅದನ್ನು ತಡೆಹಿಡಿದಾಗ 'ಅಗ್ನಿ' ಎಂಬ ಗುರುತಿನಲ್ಲಿ ಏನೂ ಉಳಿಯುವುದಿಲ್ಲ. ಆ ಪ್ರತಿಪಾದನೆ ಎಂದೂ ಸುಳ್ಳಾಗಿರಲಿಲ್ಲ — ಎರವಲಾಗಿತ್ತು.",
      },
      hi: {
        translation:
          "उन्होंने अग्नि से कहा: 'जातवेदस्, पता लगाओ यह यक्ष क्या है।' 'ऐसा ही हो,' उसने कहा। वह उसकी ओर दौड़ा। उसने पूछा: 'तुम कौन हो?' 'मैं अग्नि हूँ, मैं जातवेदस् हूँ।' 'तुममें क्या शक्ति है?' 'मैं पृथ्वी पर जो कुछ है, सब जला सकता हूँ।' उसने उसके सामने एक तिनका रखा: 'इसे जलाओ।' वह पूरे वेग से उस पर गया और जला न सका। वहीं से लौट आया।",
        explanation:
          "पहली परीक्षा, और उसे चुभने वाला विवरण है तिनका। पर्वत नहीं — संभव सबसे छोटी वस्तु। अग्नि का दावा था पृथ्वी का सब कुछ जला देने का, और वह अपने ही दावे के न्यूनतम पर विफल होता है।\n\nक्रम पर ध्यान दें। 'तुम कौन हो' पूछने पर वह दो नाम और एक उपाधि से उत्तर देता है। 'क्या शक्ति है' पूछने पर डींग से। दोनों उत्तर असत्य नहीं। दोनों सामने खड़े प्रश्न के लिए अप्रासंगिक हैं, और तिनका बिना एक शब्द तर्क के यह दिखा देता है।\n\nसैद्धांतिक बिंदु सटीक है: अग्नि ब्रह्म की शक्ति से जलाती है, और वह रोक ली जाए तो 'अग्नि' नाम में कुछ शेष नहीं रहता। दावा कभी झूठा नहीं था — उधार का था।",
      },
    },
  },

  {
    id: "kena-3-8",
    locator: "3.8–3.11",
    handle: {
      en: "Vāyu cannot lift it either",
      kn: "ವಾಯುವಿಗೂ ಎತ್ತಲಾಗಲಿಲ್ಲ",
      hi: "वायु भी नहीं उठा सका",
    },
    sanskrit: [
      "अथ वायुमब्रुवन् वायवेतद्विजानीहि किमेतद्यक्षमिति तथेति ।",
      "तदभ्यद्रवत् तमभ्यवदत् कोऽसीति वायुर्वा अहमस्मीत्यब्रवीत् ।",
      "तस्मिंस्त्वयि किं वीर्यमिति अपीदं सर्वमाददीय यदिदं पृथिव्यामिति ।",
      "तस्मै तृणं निदधौ एतदादत्स्वेति तदुपप्रेयाय सर्वजवेन",
      "तन्न शशाकादातुं स तत एव निववृते ॥",
    ],
    iast: [
      "atha vāyum abruvan vāyav etad vijānīhi kim etad yakṣam iti tatheti |",
      "tad abhyadravat tam abhyavadat ko 'sīti vāyur vā aham asmīty abravīt |",
      "tasmiṃs tvayi kiṃ vīryam iti apīdaṃ sarvam ādadīya yad idaṃ pṛthivyām iti |",
      "tasmai tṛṇaṃ nidadhau etad ādatsveti tad upapreyāya sarvajavena",
      "tan na śaśākādātuṃ sa tata eva nivavṛte ||",
    ],
    keywords: [
      {
        term: "मातरिश्वन्",
        iast: "mātariśvan",
        gloss: {
          en: "the wind, growing in the mother — Vāyu's title",
          kn: "ಮಾತರಿಶ್ವನ್ — ವಾಯುವಿನ ಬಿರುದು",
          hi: "मातरिश्वन् — वायु की उपाधि",
        },
      },
      {
        term: "आदातुम्",
        iast: "ādātum",
        gloss: {
          en: "to take, to carry off",
          kn: "ತೆಗೆದುಕೊಳ್ಳಲು, ಹೊತ್ತೊಯ್ಯಲು",
          hi: "लेने के लिए, उड़ा ले जाने के लिए",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Then they said to Vāyu: 'Vāyu, find out what this spirit is.' 'So be it.' He rushed to it. It asked: 'Who are you?' 'I am Vāyu,' he said, 'I am Mātariśvan.' 'What power is in you?' 'I could carry off everything here on earth.' It placed a blade of grass before him: 'Take this.' He went at it with all his speed and could not take it. He turned back from there.",
        explanation:
          "The episode repeats almost word for word, and the repetition is the argument. Change the god, change the power, change the verb — burn to carry off — and nothing else changes at all. The same grass, the same full speed, the same return.\n\nThis is how the text says 'and so on for every faculty' without listing them. Whatever the power and however great, an instrument meeting the ground of instruments comes back with nothing.\n\nVāyu is breath, and khaṇḍa 1 closed on breath for the same reason: it is the most involuntary faculty, the one you least own. He too answers with a name and a boast, and neither is any use.",
      },
      kn: {
        translation:
          "ಆಮೇಲೆ ಅವರು ವಾಯುವಿಗೆ ಹೇಳಿದರು: 'ವಾಯುವೇ, ಈ ಯಕ್ಷ ಏನೆಂದು ತಿಳಿ.' 'ಆಗಲಿ.' ಅದರತ್ತ ಧಾವಿಸಿದನು. ಅದು ಕೇಳಿತು: 'ನೀನು ಯಾರು?' 'ನಾನು ವಾಯು, ನಾನು ಮಾತರಿಶ್ವನ್.' 'ನಿನ್ನಲ್ಲಿ ಯಾವ ಶಕ್ತಿ?' 'ಈ ಭೂಮಿಯ ಮೇಲಿನ ಎಲ್ಲವನ್ನೂ ಹೊತ್ತೊಯ್ಯಬಲ್ಲೆ.' ಅದು ಅವನ ಮುಂದೆ ಹುಲ್ಲುಕಡ್ಡಿಯನ್ನಿಟ್ಟಿತು: 'ಇದನ್ನು ತೆಗೆದುಕೋ.' ತನ್ನೆಲ್ಲ ವೇಗದಿಂದ ಹೋದನು, ತೆಗೆದುಕೊಳ್ಳಲಾಗಲಿಲ್ಲ. ಅಲ್ಲಿಂದಲೇ ಹಿಂತಿರುಗಿದನು.",
        explanation:
          "ಪ್ರಸಂಗ ಬಹುತೇಕ ಪದಶಃ ಪುನರಾವರ್ತನೆಗೊಳ್ಳುತ್ತದೆ, ಮತ್ತು ಈ ಪುನರಾವರ್ತನೆಯೇ ವಾದ. ದೇವತೆಯನ್ನು ಬದಲಿಸಿ, ಶಕ್ತಿಯನ್ನು ಬದಲಿಸಿ, ಕ್ರಿಯಾಪದವನ್ನು ಬದಲಿಸಿ — ಸುಡುವುದರಿಂದ ಹೊತ್ತೊಯ್ಯುವುದಕ್ಕೆ — ಬೇರೆ ಏನೂ ಬದಲಾಗುವುದಿಲ್ಲ. ಅದೇ ಹುಲ್ಲು, ಅದೇ ಪೂರ್ಣ ವೇಗ, ಅದೇ ಹಿಂತಿರುಗುವಿಕೆ.\n\n'ಪ್ರತಿ ಶಕ್ತಿಗೂ ಹೀಗೆಯೇ' ಎಂದು ಪಟ್ಟಿ ಮಾಡದೆ ಪಠ್ಯ ಹೇಳುವ ಕ್ರಮ ಇದು. ಶಕ್ತಿ ಯಾವುದೇ ಇರಲಿ, ಎಷ್ಟೇ ದೊಡ್ಡದಿರಲಿ, ಸಾಧನಗಳ ಆಧಾರವನ್ನು ಎದುರಿಸಿದ ಸಾಧನವು ಬರಿಗೈಯಲ್ಲಿ ಹಿಂತಿರುಗುತ್ತದೆ.\n\nವಾಯು ಎಂದರೆ ಪ್ರಾಣ, ಮತ್ತು ಮೊದಲ ಖಂಡವು ಪ್ರಾಣದಲ್ಲಿ ಮುಗಿದದ್ದೂ ಇದೇ ಕಾರಣಕ್ಕೆ: ಅದು ಅತ್ಯಂತ ಅನೈಚ್ಛಿಕ ಶಕ್ತಿ, ನಿಮ್ಮ ಒಡೆತನ ಅತಿ ಕಡಿಮೆ ಇರುವುದು. ಅವನೂ ಹೆಸರಿನಿಂದ ಮತ್ತು ಜಂಬದಿಂದ ಉತ್ತರಿಸುತ್ತಾನೆ, ಎರಡೂ ಪ್ರಯೋಜನಕ್ಕೆ ಬರುವುದಿಲ್ಲ.",
      },
      hi: {
        translation:
          "फिर उन्होंने वायु से कहा: 'वायु, पता लगाओ यह यक्ष क्या है।' 'ऐसा ही हो।' वह उसकी ओर दौड़ा। उसने पूछा: 'तुम कौन हो?' 'मैं वायु हूँ, मैं मातरिश्वन् हूँ।' 'तुममें क्या शक्ति है?' 'मैं पृथ्वी का सब कुछ उड़ा ले जा सकता हूँ।' उसने उसके सामने तिनका रखा: 'इसे ले जाओ।' वह पूरे वेग से गया और ले न जा सका। वहीं से लौट आया।",
        explanation:
          "प्रसंग लगभग शब्दशः दोहराया जाता है, और यही पुनरावृत्ति तर्क है। देवता बदलिए, शक्ति बदलिए, क्रिया बदलिए — जलाने से उड़ा ले जाने तक — और कुछ नहीं बदलता। वही तिनका, वही पूरा वेग, वही वापसी।\n\nयही वह ढंग है जिससे पाठ 'और इसी प्रकार हर शक्ति के लिए' कहता है, बिना सूची बनाए। शक्ति चाहे जो हो और जितनी बड़ी हो, उपकरणों के आधार से भेंट करने वाला उपकरण खाली हाथ लौटता है।\n\nवायु प्राण है, और प्रथम खंड प्राण पर ही समाप्त हुआ था — इसी कारण से: वह सबसे अनैच्छिक शक्ति है, जिस पर आपका स्वामित्व सबसे कम है। वह भी नाम और डींग से उत्तर देता है, और दोनों किसी काम नहीं आते।",
      },
    },
  },

  {
    id: "kena-3-12",
    locator: "3.12",
    handle: {
      en: "Indra approaches, and it vanishes",
      kn: "ಇಂದ್ರ ಬಂದನು, ಅದು ಮಾಯವಾಯಿತು",
      hi: "इंद्र आया, और वह अंतर्धान हुआ",
    },
    sanskrit: [
      "अथेन्द्रमब्रुवन् मघवन्नेतद्विजानीहि",
      "किमेतद्यक्षमिति तथेति तदभ्यद्रवत् तस्मात्तिरोदधे ॥",
    ],
    iast: [
      "athendram abruvan maghavann etad vijānīhi",
      "kim etad yakṣam iti tatheti tad abhyadravat tasmāt tirodadhe ||",
    ],
    keywords: [
      {
        term: "मघवन्",
        iast: "maghavan",
        gloss: {
          en: "the bountiful — a title of Indra",
          kn: "ಮಘವನ್ — ಇಂದ್ರನ ಬಿರುದು",
          hi: "मघवन् — इंद्र की उपाधि",
        },
      },
      {
        term: "तिरोदधे",
        iast: "tirodadhe",
        gloss: {
          en: "vanished, withdrew from sight",
          kn: "ಅಂತರ್ಧಾನವಾಯಿತು",
          hi: "अंतर्धान हो गया",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Then they said to Indra: 'Maghavan, find out what this spirit is.' 'So be it.' He rushed to it. It vanished from him.",
        explanation:
          "The pattern breaks, and it breaks by omission. Indra is not asked who he is. He does not name himself, does not boast, is not handed a blade of grass. The spirit simply disappears.\n\nThat is a promotion, not a rebuff. Agni and Vāyu were allowed their claims and then shown them failing; Indra is spared the demonstration. What he is given instead is absence — the one thing that cannot be grasped, burnt or carried off, and therefore the only honest presentation of what he came to identify.\n\nIndra is the mind, the highest of the faculties. It is exactly right that the mind's encounter with what lies behind it should end not in failure but in the object of enquiry ceasing to be an object.",
      },
      kn: {
        translation:
          "ಆಮೇಲೆ ಅವರು ಇಂದ್ರನಿಗೆ ಹೇಳಿದರು: 'ಮಘವನೇ, ಈ ಯಕ್ಷ ಏನೆಂದು ತಿಳಿ.' 'ಆಗಲಿ.' ಅದರತ್ತ ಧಾವಿಸಿದನು. ಅದು ಅವನಿಂದ ಅಂತರ್ಧಾನವಾಯಿತು.",
        explanation:
          "ಮಾದರಿ ಮುರಿಯುತ್ತದೆ, ಮತ್ತು ಅದು ಬಿಟ್ಟುಬಿಡುವುದರಿಂದ ಮುರಿಯುತ್ತದೆ. ಇಂದ್ರನನ್ನು 'ನೀನು ಯಾರು' ಎಂದು ಕೇಳಿಲ್ಲ. ಅವನು ತನ್ನ ಹೆಸರು ಹೇಳುವುದಿಲ್ಲ, ಜಂಬ ಕೊಚ್ಚುವುದಿಲ್ಲ, ಅವನಿಗೆ ಹುಲ್ಲುಕಡ್ಡಿಯನ್ನೂ ಕೊಟ್ಟಿಲ್ಲ. ಆ ಯಕ್ಷ ಕೇವಲ ಮಾಯವಾಗುತ್ತದೆ.\n\nಇದು ತಿರಸ್ಕಾರವಲ್ಲ, ಬಡ್ತಿ. ಅಗ್ನಿ ಮತ್ತು ವಾಯುವಿಗೆ ಅವರ ಪ್ರತಿಪಾದನೆಗಳಿಗೆ ಅವಕಾಶ ಕೊಟ್ಟು ಅವು ಸೋಲುವುದನ್ನು ತೋರಿಸಲಾಯಿತು; ಇಂದ್ರನಿಗೆ ಆ ಪ್ರದರ್ಶನವನ್ನು ಉಳಿಸಲಾಗಿದೆ. ಅವನಿಗೆ ಕೊಟ್ಟದ್ದು ಅನುಪಸ್ಥಿತಿ — ಹಿಡಿಯಲಾಗದ, ಸುಡಲಾಗದ, ಹೊತ್ತೊಯ್ಯಲಾಗದ ಏಕೈಕ ಸಂಗತಿ, ಮತ್ತು ಆದ್ದರಿಂದಲೇ ಅವನು ಗುರುತಿಸಲು ಬಂದದ್ದರ ಏಕೈಕ ಪ್ರಾಮಾಣಿಕ ಪ್ರಸ್ತುತಿ.\n\nಇಂದ್ರ ಮನಸ್ಸು, ಶಕ್ತಿಗಳಲ್ಲಿ ಅತ್ಯುನ್ನತ. ತನ್ನ ಹಿಂದಿರುವುದರೊಂದಿಗಿನ ಮನಸ್ಸಿನ ಭೇಟಿ ಸೋಲಿನಲ್ಲಲ್ಲ, ವಿಚಾರಣೆಯ ವಿಷಯವು ವಿಷಯವಾಗಿ ಉಳಿಯದಿರುವುದರಲ್ಲಿ ಮುಗಿಯುವುದೇ ಸರಿ.",
      },
      hi: {
        translation:
          "फिर उन्होंने इंद्र से कहा: 'मघवन्, पता लगाओ यह यक्ष क्या है।' 'ऐसा ही हो।' वह उसकी ओर दौड़ा। वह उससे अंतर्धान हो गया।",
        explanation:
          "प्रतिरूप टूटता है, और वह छोड़ देने से टूटता है। इंद्र से 'तुम कौन हो' नहीं पूछा जाता। वह अपना नाम नहीं बताता, डींग नहीं हाँकता, उसे तिनका भी नहीं दिया जाता। वह यक्ष बस अदृश्य हो जाता है।\n\nयह तिरस्कार नहीं, पदोन्नति है। अग्नि और वायु को उनके दावे रखने दिए गए और फिर विफल होते दिखाए गए; इंद्र को वह प्रदर्शन बख्श दिया गया। उसे जो मिलता है वह अनुपस्थिति है — वही एक वस्तु जो पकड़ी, जलाई या उड़ाई नहीं जा सकती, और इसीलिए जिसे पहचानने वह आया था, उसकी एकमात्र ईमानदार प्रस्तुति।\n\nइंद्र मन है, शक्तियों में सर्वोच्च। यही उचित है कि अपने पीछे वाले से मन की भेंट विफलता में नहीं, बल्कि जिज्ञासा के विषय के विषय न रह जाने में समाप्त हो।",
      },
    },
  },

  {
    id: "kena-4-1",
    locator: "4.1–4.2",
    handle: {
      en: "Umā tells him: it is Brahman",
      kn: "ಉಮೆ ಹೇಳುತ್ತಾಳೆ: ಅದು ಬ್ರಹ್ಮ",
      hi: "उमा कहती हैं: वह ब्रह्म है",
    },
    sanskrit: [
      "स तस्मिन्नेवाकाशे स्त्रियमाजगाम बहुशोभमानाम्",
      "उमां हैमवतीं तां होवाच किमेतद्यक्षमिति ।",
      "सा ब्रह्मेति होवाच ब्रह्मणो वा एतद्विजये महीयध्वमिति",
      "ततो हैव विदाञ्चकार ब्रह्मेति ॥",
    ],
    iast: [
      "sa tasminn evākāśe striyam ājagāma bahuśobhamānām",
      "umāṃ haimavatīṃ tāṃ hovāca kim etad yakṣam iti |",
      "sā brahmeti hovāca brahmaṇo vā etad vijaye mahīyadhvam iti",
      "tato haiva vidāñcakāra brahmeti ||",
    ],
    keywords: [
      {
        term: "हैमवती",
        iast: "haimavatī",
        gloss: {
          en: "daughter of Himavat; of the snow mountain",
          kn: "ಹಿಮವಂತನ ಮಗಳು",
          hi: "हिमवान् की पुत्री",
        },
      },
      {
        term: "विदाञ्चकार",
        iast: "vidāñcakāra",
        gloss: {
          en: "came to know, recognised",
          kn: "ತಿಳಿದುಕೊಂಡನು",
          hi: "जान लिया, पहचान लिया",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "In that very space he came upon a woman greatly shining — Umā, daughter of Himavat. He said to her: 'What is this spirit?' She said: 'It is Brahman. In Brahman's victory it is that you have been exulting.' From that alone he knew it was Brahman.",
        explanation:
          "The resolution, and it comes from a direction nothing prepared. Indra does not work it out, does not try harder, does not receive a vision. He is told — by someone who was not part of the contest at all.\n\nTwo details carry it. The first is where she appears: tasminn eva ākāśe, in that very space — the emptiness the spirit left behind. Knowledge arrives exactly where grasping ended. The second is what she actually says, which is a correction of tense as much as of fact: it is Brahman's victory you have been exulting in. She does not deny that they won. She restores what was quietly deleted in 3.2.\n\nUmā Haimavatī entering here is one of the earliest appearances of the Goddess as the one who imparts knowledge of Brahman. She is not tested and does not compete; she simply knows, and says.",
      },
      kn: {
        translation:
          "ಅದೇ ಆಕಾಶದಲ್ಲಿ ಅವನು ಬಹಳ ಶೋಭಿಸುತ್ತಿದ್ದ ಸ್ತ್ರೀಯನ್ನು ಕಂಡನು — ಹಿಮವಂತನ ಮಗಳಾದ ಉಮೆಯನ್ನು. ಅವಳಿಗೆ ಕೇಳಿದನು: 'ಈ ಯಕ್ಷ ಏನು?' ಅವಳು ಹೇಳಿದಳು: 'ಅದು ಬ್ರಹ್ಮ. ಬ್ರಹ್ಮದ ಜಯದಲ್ಲಿಯೇ ನೀವು ಉಬ್ಬಿಕೊಂಡಿದ್ದೀರಿ.' ಅದರಿಂದಲೇ ಅವನು ಅದು ಬ್ರಹ್ಮವೆಂದು ತಿಳಿದನು.",
        explanation:
          "ಪರಿಹಾರ, ಮತ್ತು ಅದು ಯಾವುದೂ ಸಿದ್ಧಗೊಳಿಸದ ದಿಕ್ಕಿನಿಂದ ಬರುತ್ತದೆ. ಇಂದ್ರ ಅದನ್ನು ಬಿಡಿಸುವುದಿಲ್ಲ, ಹೆಚ್ಚು ಪ್ರಯತ್ನಿಸುವುದಿಲ್ಲ, ದರ್ಶನವನ್ನೂ ಪಡೆಯುವುದಿಲ್ಲ. ಅವನಿಗೆ ಹೇಳಲಾಗುತ್ತದೆ — ಸ್ಪರ್ಧೆಯಲ್ಲಿ ಭಾಗವೇ ಇರದವರಿಂದ.\n\nಎರಡು ವಿವರಗಳು ಇದನ್ನು ಹೊತ್ತಿವೆ. ಮೊದಲನೆಯದು ಅವಳು ಎಲ್ಲಿ ಕಾಣಿಸುತ್ತಾಳೆ ಎಂಬುದು: 'ತಸ್ಮಿನ್ನೇವಾಕಾಶೇ', ಅದೇ ಆಕಾಶದಲ್ಲಿ — ಯಕ್ಷ ಬಿಟ್ಟುಹೋದ ಬರಿದುತನದಲ್ಲಿ. ಹಿಡಿಯುವಿಕೆ ಮುಗಿದ ನಿಖರ ಸ್ಥಳದಲ್ಲಿಯೇ ಜ್ಞಾನ ಬರುತ್ತದೆ. ಎರಡನೆಯದು ಅವಳು ನಿಜಕ್ಕೂ ಹೇಳುವುದು, ಅದು ಸತ್ಯದ ತಿದ್ದುಪಡಿಯಷ್ಟೇ ಕಾಲದ ತಿದ್ದುಪಡಿಯೂ ಹೌದು: ನೀವು ಉಬ್ಬಿಕೊಂಡದ್ದು ಬ್ರಹ್ಮದ ಜಯದಲ್ಲಿ. ಅವರು ಗೆದ್ದದ್ದನ್ನು ಅವಳು ನಿರಾಕರಿಸುವುದಿಲ್ಲ. ೩.೨ರಲ್ಲಿ ಸದ್ದಿಲ್ಲದೆ ಅಳಿಸಿಹೋದದ್ದನ್ನು ಮರಳಿಸುತ್ತಾಳೆ.\n\nಉಮಾ ಹೈಮವತಿ ಇಲ್ಲಿ ಪ್ರವೇಶಿಸುವುದು ಬ್ರಹ್ಮಜ್ಞಾನವನ್ನು ನೀಡುವವಳಾಗಿ ದೇವಿಯ ಅತ್ಯಂತ ಪ್ರಾಚೀನ ಕಾಣಿಕೆಗಳಲ್ಲಿ ಒಂದು. ಅವಳನ್ನು ಪರೀಕ್ಷಿಸಿಲ್ಲ, ಅವಳು ಸ್ಪರ್ಧಿಸುವುದೂ ಇಲ್ಲ; ಅವಳಿಗೆ ಸರಳವಾಗಿ ತಿಳಿದಿದೆ, ಮತ್ತು ಹೇಳುತ್ತಾಳೆ.",
      },
      hi: {
        translation:
          "उसी आकाश में उसने एक अत्यंत शोभायमान स्त्री को पाया — हिमवान् की पुत्री उमा को। उसने उनसे कहा: 'यह यक्ष क्या है?' उन्होंने कहा: 'वह ब्रह्म है। ब्रह्म की ही विजय में तुम फूल रहे थे।' इसी से उसने जाना कि वह ब्रह्म है।",
        explanation:
          "समाधान, और वह उस दिशा से आता है जिसकी कोई तैयारी नहीं थी। इंद्र न स्वयं सुलझाता है, न अधिक प्रयत्न करता है, न कोई दर्शन पाता है। उसे बताया जाता है — उनके द्वारा जो प्रतियोगिता का भाग थीं ही नहीं।\n\nदो विवरण इसे उठाए हैं। पहला यह कि वे कहाँ प्रकट होती हैं: 'तस्मिन्नेवाकाशे', उसी आकाश में — उस रिक्तता में जो यक्ष छोड़ गया। ज्ञान ठीक वहीं आता है जहाँ पकड़ना समाप्त हुआ। दूसरा वह जो वे वस्तुतः कहती हैं, और वह तथ्य जितना ही काल का सुधार भी है: तुम जिसमें फूल रहे थे वह ब्रह्म की विजय थी। वे यह नहीं नकारतीं कि वे जीते। वे वही लौटाती हैं जो ३.२ में चुपचाप मिटा दिया गया था।\n\nउमा हैमवती का यहाँ प्रवेश ब्रह्मज्ञान देने वाली देवी के प्राचीनतम रूपों में से एक है। उनकी परीक्षा नहीं होती, वे प्रतिस्पर्धा भी नहीं करतीं; वे बस जानती हैं, और कह देती हैं।",
      },
    },
  },

  {
    id: "kena-4-3",
    locator: "4.3–4.4",
    handle: {
      en: "Why these three surpass the rest",
      kn: "ಈ ಮೂವರು ಏಕೆ ಮಿಗಿಲು",
      hi: "ये तीन क्यों श्रेष्ठ हैं",
    },
    sanskrit: [
      "तस्माद्वा एते देवा अतितरामिवान्यान्देवान्",
      "यदग्निर्वायुरिन्द्रस्ते ह्येनन्नेदिष्ठं पस्पर्शुः",
      "ते ह्येनत्प्रथमो विदाञ्चकार ब्रह्मेति ।",
      "तस्माद्वा इन्द्रोऽतितरामिवान्यान्देवान्",
      "स ह्येनन्नेदिष्ठं पस्पर्श स ह्येनत्प्रथमो विदाञ्चकार ब्रह्मेति ॥",
    ],
    iast: [
      "tasmād vā ete devā atitarām ivānyān devān",
      "yad agnir vāyur indras te hy enan nediṣṭhaṃ pasparśuḥ",
      "te hy enat prathamo vidāñcakāra brahmeti |",
      "tasmād vā indro 'titarām ivānyān devān",
      "sa hy enan nediṣṭhaṃ pasparśa sa hy enat prathamo vidāñcakāra brahmeti ||",
    ],
    keywords: [
      {
        term: "नेदिष्ठम्",
        iast: "nediṣṭham",
        gloss: {
          en: "nearest, most closely",
          kn: "ಅತ್ಯಂತ ಸಮೀಪದಲ್ಲಿ",
          hi: "सबसे निकट",
        },
      },
      {
        term: "पस्पर्शुः",
        iast: "pasparśuḥ",
        gloss: {
          en: "they touched, came into contact with",
          kn: "ಅವರು ಸ್ಪರ್ಶಿಸಿದರು",
          hi: "उन्होंने स्पर्श किया",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Therefore these gods — Agni, Vāyu and Indra — surpass the other gods, for they came nearest to it, and they first knew it to be Brahman. And therefore Indra surpasses the other gods, for he came nearest, and he first knew it to be Brahman.",
        explanation:
          "The story issues its verdict, and the verdict rewards failure. Agni and Vāyu are ranked above the gods who never went — and both of them came back beaten by a blade of grass.\n\nThe criterion given is not success but proximity: nediṣṭhaṃ pasparśuḥ, they touched it most nearly. Having a claim taken apart at close range counts for more than never having tested one. Indra is placed highest for the same reason, sharpened: he alone stayed when there was nothing left to confront, and he alone asked someone.\n\nThis is a distinctly Upaniṣadic ranking. The gods are ordered not by power but by how far each got in an enquiry that none of them could complete on their own strength.",
      },
      kn: {
        translation:
          "ಆದ್ದರಿಂದಲೇ ಈ ದೇವತೆಗಳು — ಅಗ್ನಿ, ವಾಯು, ಇಂದ್ರ — ಇತರ ದೇವತೆಗಳನ್ನು ಮೀರಿಸುತ್ತಾರೆ, ಏಕೆಂದರೆ ಅವರು ಅದನ್ನು ಅತ್ಯಂತ ಸಮೀಪದಿಂದ ಸ್ಪರ್ಶಿಸಿದರು ಮತ್ತು ಅದು ಬ್ರಹ್ಮವೆಂದು ಮೊದಲು ತಿಳಿದರು. ಮತ್ತು ಆದ್ದರಿಂದಲೇ ಇಂದ್ರನು ಇತರ ದೇವತೆಗಳನ್ನು ಮೀರಿಸುತ್ತಾನೆ, ಏಕೆಂದರೆ ಅವನು ಅತ್ಯಂತ ಸಮೀಪಕ್ಕೆ ಬಂದನು ಮತ್ತು ಅದು ಬ್ರಹ್ಮವೆಂದು ಮೊದಲು ತಿಳಿದನು.",
        explanation:
          "ಕಥೆ ತನ್ನ ತೀರ್ಪನ್ನು ಕೊಡುತ್ತದೆ, ಮತ್ತು ಆ ತೀರ್ಪು ಸೋಲನ್ನು ಬಹುಮಾನಿಸುತ್ತದೆ. ಎಂದೂ ಹೋಗದ ದೇವತೆಗಳಿಗಿಂತ ಅಗ್ನಿ ಮತ್ತು ವಾಯುವನ್ನು ಮೇಲಿಡಲಾಗಿದೆ — ಮತ್ತು ಅವರಿಬ್ಬರೂ ಹುಲ್ಲುಕಡ್ಡಿಯಿಂದ ಸೋತು ಹಿಂತಿರುಗಿದವರು.\n\nಕೊಟ್ಟ ಮಾನದಂಡ ಯಶಸ್ಸಲ್ಲ, ಸಾಮೀಪ್ಯ: 'ನೇದಿಷ್ಠಂ ಪಸ್ಪರ್ಶುಃ', ಅತ್ಯಂತ ಸಮೀಪದಿಂದ ಸ್ಪರ್ಶಿಸಿದರು. ಹತ್ತಿರದಿಂದ ತನ್ನ ಪ್ರತಿಪಾದನೆ ಬಿಚ್ಚಿಹೋಗುವುದನ್ನು ಕಾಣುವುದು, ಎಂದೂ ಪರೀಕ್ಷಿಸದಿರುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ಬೆಲೆಬಾಳುತ್ತದೆ. ಇಂದ್ರನನ್ನು ಅದೇ ಕಾರಣಕ್ಕೆ, ಇನ್ನಷ್ಟು ತೀಕ್ಷ್ಣವಾಗಿ, ಅತ್ಯುನ್ನತದಲ್ಲಿ ಇಡಲಾಗಿದೆ: ಎದುರಿಸಲು ಏನೂ ಉಳಿಯದಿದ್ದಾಗಲೂ ಉಳಿದವನು ಅವನೊಬ್ಬನೇ, ಮತ್ತು ಯಾರನ್ನಾದರೂ ಕೇಳಿದವನೂ ಅವನೊಬ್ಬನೇ.\n\nಇದು ವಿಶಿಷ್ಟವಾಗಿ ಔಪನಿಷದಿಕ ಶ್ರೇಣಿ. ದೇವತೆಗಳನ್ನು ಶಕ್ತಿಯಿಂದಲ್ಲ, ತಮ್ಮ ಸ್ವಂತ ಬಲದಿಂದ ಯಾರೂ ಪೂರೈಸಲಾಗದ ವಿಚಾರಣೆಯಲ್ಲಿ ಎಷ್ಟು ದೂರ ಸಾಗಿದರೆಂಬುದರಿಂದ ಕ್ರಮಗೊಳಿಸಲಾಗಿದೆ.",
      },
      hi: {
        translation:
          "इसीलिए ये देवता — अग्नि, वायु और इंद्र — अन्य देवताओं से श्रेष्ठ हैं, क्योंकि वे उसके सबसे निकट पहुँचे और उन्होंने पहले जाना कि वह ब्रह्म है। और इसीलिए इंद्र अन्य देवताओं से श्रेष्ठ है, क्योंकि वह सबसे निकट पहुँचा और उसने पहले जाना कि वह ब्रह्म है।",
        explanation:
          "कथा अपना निर्णय सुनाती है, और वह निर्णय विफलता को पुरस्कृत करता है। अग्नि और वायु उन देवताओं से ऊपर रखे गए हैं जो कभी गए ही नहीं — और वे दोनों एक तिनके से हारकर लौटे थे।\n\nदिया गया मानदंड सफलता नहीं, निकटता है: 'नेदिष्ठं पस्पर्शुः', सबसे निकट से स्पर्श किया। निकट से अपने दावे को खुलते देखना, कभी परीक्षा ही न करने से अधिक मूल्यवान है। इंद्र को उसी कारण से, और तीक्ष्ण रूप में, सर्वोच्च रखा गया है: जब सामना करने को कुछ बचा ही नहीं तब भी वही ठहरा, और किसी से पूछा भी उसी ने।\n\nयह विशिष्ट रूप से औपनिषदिक क्रम है। देवताओं को शक्ति से नहीं, बल्कि इससे क्रमित किया गया है कि उस जिज्ञासा में कौन कितनी दूर गया जिसे कोई अपने बल पर पूरा नहीं कर सका।",
      },
    },
  },

  {
    id: "kena-4-5",
    locator: "4.5–4.6",
    handle: {
      en: "Lightning, and the blink of an eye",
      kn: "ಮಿಂಚು, ಮತ್ತು ಕಣ್ಣುಮಿಟುಕು",
      hi: "बिजली, और पलक झपकना",
    },
    sanskrit: [
      "तस्यैष आदेशो यदेतद्विद्युतो व्यद्युतदा",
      "इतीन् न्यमीमिषदा इत्यधिदैवतम् ।",
      "अथाध्यात्मं यदेतद्गच्छतीव च मनोऽनेन",
      "चैतदुपस्मरत्यभीक्ष्णं सङ्कल्पः ॥",
    ],
    iast: [
      "tasyaiṣa ādeśo yad etad vidyuto vyadyutadā",
      "itīn nyamīmiṣadā ity adhidaivatam |",
      "athādhyātmaṃ yad etad gacchatīva ca mano 'nena",
      "caitad upasmaraty abhīkṣṇaṃ saṅkalpaḥ ||",
    ],
    keywords: [
      {
        term: "आदेश",
        iast: "ādeśa",
        gloss: {
          en: "indication, pointing-out",
          kn: "ಸೂಚನೆ, ನಿರ್ದೇಶ",
          hi: "आदेश, संकेत",
        },
      },
      {
        term: "अधिदैवतम् / अध्यात्मम्",
        iast: "adhidaivatam / adhyātmam",
        gloss: {
          en: "with reference to the gods / to the self",
          kn: "ದೇವತೆಗಳ ದೃಷ್ಟಿಯಿಂದ / ಆತ್ಮದ ದೃಷ್ಟಿಯಿಂದ",
          hi: "देवताओं की दृष्टि से / आत्मा की दृष्टि से",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "This is its indication: it is as when lightning flashes, as when the eye blinks — that is with reference to the gods. And with reference to the self: it is that toward which the mind seems to go, and by which one remembers again and again, and intention.",
        explanation:
          "Two pointers, one cosmic and one interior, and both are chosen for their brevity. Lightning does not stay to be examined; the blink is over before it is noticed. What is being indicated is not something brief but something that can only be caught in that mode — not looked at, only glimpsed as it passes.\n\nThe adhyātma half is the more useful of the two. Three ordinary mental events are named: the mind's movement toward something, the recurrence of memory, and saṅkalpa, intention. Each is a moment where consciousness turns without being told to. That turning is where the Self shows, and it happens constantly.\n\nThis is 2.4 again — known in every act of cognition — now given three concrete places to look.",
      },
      kn: {
        translation:
          "ಅದರ ಸೂಚನೆ ಇದು: ಮಿಂಚು ಮಿಂಚಿದಂತೆ, ಕಣ್ಣು ಮಿಟುಕಿದಂತೆ — ಇದು ದೇವತೆಗಳ ದೃಷ್ಟಿಯಿಂದ. ಇನ್ನು ಆತ್ಮದ ದೃಷ್ಟಿಯಿಂದ: ಮನಸ್ಸು ಯಾವುದರತ್ತ ಹೋಗುವಂತೆ ತೋರುತ್ತದೋ ಅದು, ಯಾವುದರಿಂದ ಮತ್ತೆ ಮತ್ತೆ ಸ್ಮರಿಸುತ್ತಾನೋ ಅದು, ಮತ್ತು ಸಂಕಲ್ಪ.",
        explanation:
          "ಎರಡು ಸೂಚಕಗಳು, ಒಂದು ವಿಶ್ವಸಂಬಂಧಿ ಮತ್ತೊಂದು ಆಂತರಿಕ, ಮತ್ತು ಎರಡನ್ನೂ ಅವುಗಳ ಕ್ಷಣಿಕತೆಗಾಗಿ ಆರಿಸಲಾಗಿದೆ. ಮಿಂಚು ಪರೀಕ್ಷಿಸಿಕೊಳ್ಳಲು ನಿಲ್ಲುವುದಿಲ್ಲ; ಕಣ್ಣುಮಿಟುಕು ಗಮನಕ್ಕೆ ಬರುವ ಮೊದಲೇ ಮುಗಿದಿರುತ್ತದೆ. ಇಲ್ಲಿ ಸೂಚಿಸುತ್ತಿರುವುದು ಕ್ಷಣಿಕವಾದದ್ದನ್ನಲ್ಲ, ಆ ರೀತಿಯಲ್ಲಿ ಮಾತ್ರ ಹಿಡಿಯಬಹುದಾದದ್ದನ್ನು — ದಿಟ್ಟಿಸಿ ನೋಡಲಾಗದ್ದು, ಸಾಗುತ್ತಿರುವಾಗ ಒಂದು ಝಲಕಿನಲ್ಲಿ ಮಾತ್ರ ಕಾಣುವಂಥದ್ದು.\n\nಎರಡರಲ್ಲಿ ಅಧ್ಯಾತ್ಮದ ಅರ್ಧವೇ ಹೆಚ್ಚು ಉಪಯುಕ್ತ. ಮೂರು ಸಾಮಾನ್ಯ ಮಾನಸಿಕ ಘಟನೆಗಳನ್ನು ಹೆಸರಿಸಲಾಗಿದೆ: ಯಾವುದರತ್ತಲೋ ಮನಸ್ಸಿನ ಚಲನೆ, ಸ್ಮೃತಿಯ ಪುನರಾವರ್ತನೆ, ಮತ್ತು 'ಸಂಕಲ್ಪ'. ಪ್ರತಿಯೊಂದೂ ಪ್ರಜ್ಞೆಯು ಹೇಳದೆಯೇ ತಿರುಗುವ ಕ್ಷಣ. ಆ ತಿರುಗುವಿಕೆಯಲ್ಲಿಯೇ ಆತ್ಮ ತೋರುತ್ತದೆ, ಮತ್ತು ಅದು ನಿರಂತರವಾಗಿ ನಡೆಯುತ್ತದೆ.\n\nಇದು ೨.೪ರ ಪುನರಾವರ್ತನೆ — ಪ್ರತಿ ಅರಿವಿನ ಕ್ರಿಯೆಯಲ್ಲಿ ತಿಳಿಯಲ್ಪಡುವುದು — ಈಗ ನೋಡಲು ಮೂರು ಸ್ಥೂಲ ಸ್ಥಳಗಳನ್ನು ಕೊಟ್ಟಿದೆ.",
      },
      hi: {
        translation:
          "उसका संकेत यह है: जैसे बिजली चमके, जैसे पलक झपके — यह देवताओं की दृष्टि से। और आत्मा की दृष्टि से: वह जिसकी ओर मन जाता-सा प्रतीत होता है, और जिससे बार-बार स्मरण होता है, और संकल्प।",
        explanation:
          "दो संकेत, एक ब्रह्मांडीय और एक आंतरिक, और दोनों अपनी क्षणिकता के लिए चुने गए हैं। बिजली जाँचने के लिए ठहरती नहीं; पलक झपकना लक्षित होने से पहले बीत जाता है। यहाँ जिसकी ओर संकेत है वह कोई क्षणिक वस्तु नहीं, बल्कि वह जो केवल इसी ढंग में पकड़ में आता है — देखा नहीं जा सकता, गुज़रते हुए झलक भर मिलती है।\n\nदोनों में अध्यात्म वाला आधा अधिक उपयोगी है। तीन सामान्य मानसिक घटनाएँ नामित हैं: किसी ओर मन का जाना, स्मृति का बार-बार लौटना, और 'संकल्प'। हर एक वह क्षण है जहाँ चेतना बिना कहे मुड़ती है। उसी मुड़ने में आत्मा दिखती है, और वह निरंतर होता रहता है।\n\nयह २.४ की ही पुनरावृत्ति है — हर बोध-क्रिया में ज्ञात — अब देखने के लिए तीन ठोस स्थान देकर।",
      },
    },
  },

  {
    id: "kena-4-7",
    locator: "4.7–4.9",
    handle: {
      en: "Its name is Tadvanam",
      kn: "ಅದರ ಹೆಸರು ತದ್ವನಮ್",
      hi: "उसका नाम तद्वनम् है",
    },
    sanskrit: [
      "तद्ध तद्वनं नाम तद्वनमित्युपासितव्यं",
      "स य एतदेवं वेदाभि हैनं सर्वाणि भूतानि संवाञ्छन्ति ।",
      "उपनिषदं भो ब्रूहीत्युक्ता त उपनिषद्",
      "ब्राह्मीं वाव त उपनिषदमब्रूमेति ।",
      "तस्यै तपो दमः कर्मेति प्रतिष्ठा",
      "वेदाः सर्वाङ्गानि सत्यमायतनम् ॥",
    ],
    iast: [
      "tad dha tadvanaṃ nāma tadvanam ity upāsitavyaṃ",
      "sa ya etad evaṃ vedābhi hainaṃ sarvāṇi bhūtāni saṃvāñchanti |",
      "upaniṣadaṃ bho brūhīty uktā ta upaniṣad",
      "brāhmīṃ vāva ta upaniṣadam abrūmeti |",
      "tasyai tapo damaḥ karmeti pratiṣṭhā",
      "vedāḥ sarvāṅgāni satyam āyatanam ||",
    ],
    keywords: [
      {
        term: "तद्वनम्",
        iast: "tadvanam",
        gloss: {
          en: "the longed-for; that which is desired by all",
          kn: "ಎಲ್ಲರೂ ಬಯಸುವಂಥದ್ದು",
          hi: "जो सबको वांछित है",
        },
      },
      {
        term: "प्रतिष्ठा",
        iast: "pratiṣṭhā",
        gloss: {
          en: "foundation, what it stands on",
          kn: "ಪ್ರತಿಷ್ಠೆ, ಆಧಾರ",
          hi: "प्रतिष्ठा, आधार",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "It is named Tadvanam — the longed-for. As the longed-for it should be worshipped. One who knows it thus: all beings long for him. 'Teach me the Upaniṣad, sir.' 'The Upaniṣad has been taught you. We have taught you the Upaniṣad of Brahman.' Its foundation is austerity, restraint and works; the Vedas are its limbs; truth is its dwelling place.",
        explanation:
          "The name given at the end is the one positive thing said about Brahman in the entire text: Tadvanam, the longed-for. Everything else was negation. Here at last is a description, and it is not a property of Brahman but a fact about everyone else — it is what all wanting is finally wanting.\n\nThe consequence follows exactly: one who knows it thus becomes what all beings long for. Not because they have acquired something attractive, but because they have become what the longing was always aimed at.\n\nThe closing exchange is the traditional end of instruction, and its answer is a small correction. 'Teach me the Upaniṣad.' 'It has been taught.' There is no further secret; the student has already received it and is asking for something else. The last line then names what holds it: tapas, restraint, works, the Vedas, and truth as the place it lives. The text that spent four khaṇḍas dismantling every claim to power closes by grounding itself in ordinary discipline.",
      },
      kn: {
        translation:
          "ಅದರ ಹೆಸರು ತದ್ವನಮ್ — ಎಲ್ಲರೂ ಬಯಸುವಂಥದ್ದು. ಹಾಗೆಂದೇ ಅದನ್ನು ಉಪಾಸಿಸಬೇಕು. ಹೀಗೆ ತಿಳಿದವನನ್ನು ಸಮಸ್ತ ಭೂತಗಳೂ ಬಯಸುತ್ತವೆ. 'ಸ್ವಾಮಿ, ಉಪನಿಷತ್ತನ್ನು ಹೇಳಿ.' 'ಉಪನಿಷತ್ತನ್ನು ನಿನಗೆ ಹೇಳಿಯಾಗಿದೆ. ಬ್ರಹ್ಮದ ಉಪನಿಷತ್ತನ್ನೇ ನಿನಗೆ ಹೇಳಿದೆವು.' ಅದರ ಪ್ರತಿಷ್ಠೆ ತಪಸ್ಸು, ದಮ ಮತ್ತು ಕರ್ಮ; ವೇದಗಳು ಅದರ ಅಂಗಗಳು; ಸತ್ಯ ಅದರ ನೆಲೆ.",
        explanation:
          "ಕೊನೆಯಲ್ಲಿ ಕೊಟ್ಟ ಹೆಸರೇ ಇಡೀ ಪಠ್ಯದಲ್ಲಿ ಬ್ರಹ್ಮದ ಬಗ್ಗೆ ಹೇಳಿದ ಏಕೈಕ ವಿಧ್ಯಾತ್ಮಕ ಸಂಗತಿ: 'ತದ್ವನಮ್', ಎಲ್ಲರೂ ಬಯಸುವಂಥದ್ದು. ಉಳಿದೆಲ್ಲವೂ ನಿಷೇಧವಾಗಿತ್ತು. ಕೊನೆಗೂ ಇಲ್ಲಿ ಒಂದು ವರ್ಣನೆ, ಮತ್ತು ಅದು ಬ್ರಹ್ಮದ ಗುಣವಲ್ಲ, ಉಳಿದೆಲ್ಲರ ಬಗೆಗಿನ ಸತ್ಯ — ಎಲ್ಲ ಬಯಕೆಯೂ ಕೊನೆಗೆ ಬಯಸುತ್ತಿರುವುದು ಅದನ್ನೇ.\n\nಪರಿಣಾಮ ನಿಖರವಾಗಿ ಅನುಸರಿಸುತ್ತದೆ: ಹೀಗೆ ತಿಳಿದವನು ಸಮಸ್ತ ಭೂತಗಳೂ ಬಯಸುವಂಥವನಾಗುತ್ತಾನೆ. ಆಕರ್ಷಕವಾದದ್ದೇನನ್ನೋ ಪಡೆದದ್ದರಿಂದಲ್ಲ, ಆ ಬಯಕೆ ಯಾವಾಗಲೂ ಗುರಿಯಿಟ್ಟಿದ್ದೇ ಅವನಾಗಿಬಿಟ್ಟದ್ದರಿಂದ.\n\nಕೊನೆಯ ಸಂವಾದ ಬೋಧನೆಯ ಸಾಂಪ್ರದಾಯಿಕ ಅಂತ್ಯ, ಮತ್ತು ಅದರ ಉತ್ತರ ಒಂದು ಸಣ್ಣ ತಿದ್ದುಪಡಿ. 'ಉಪನಿಷತ್ತನ್ನು ಹೇಳಿ.' 'ಹೇಳಿಯಾಗಿದೆ.' ಇನ್ನೊಂದು ರಹಸ್ಯವಿಲ್ಲ; ಶಿಷ್ಯನಿಗೆ ಈಗಾಗಲೇ ದೊರೆತಿದೆ, ಅವನು ಬೇರೊಂದನ್ನು ಕೇಳುತ್ತಿದ್ದಾನೆ. ಕೊನೆಯ ಸಾಲು ಅದನ್ನು ಹಿಡಿದಿಡುವುದನ್ನು ಹೆಸರಿಸುತ್ತದೆ: ತಪಸ್ಸು, ದಮ, ಕರ್ಮ, ವೇದಗಳು, ಮತ್ತು ನೆಲೆಯಾಗಿ ಸತ್ಯ. ಶಕ್ತಿಯ ಪ್ರತಿ ಪ್ರತಿಪಾದನೆಯನ್ನೂ ನಾಲ್ಕು ಖಂಡಗಳ ಕಾಲ ಬಿಚ್ಚಿದ ಪಠ್ಯವು ಸಾಮಾನ್ಯ ಶಿಸ್ತಿನಲ್ಲಿ ತನ್ನನ್ನು ನೆಲೆಗೊಳಿಸಿ ಮುಗಿಯುತ್ತದೆ.",
      },
      hi: {
        translation:
          "उसका नाम तद्वनम् है — जो सबको वांछित है। उसी रूप में उसकी उपासना करनी चाहिए। जो उसे ऐसा जानता है, उसे समस्त भूत चाहते हैं। 'भगवन्, उपनिषद् कहिए।' 'उपनिषद् तुम्हें कह दी गई। ब्रह्म की उपनिषद् ही हमने तुम्हें कही।' उसकी प्रतिष्ठा तप, दम और कर्म है; वेद उसके अंग हैं; सत्य उसका आयतन है।",
        explanation:
          "अंत में दिया गया नाम ही पूरे पाठ में ब्रह्म के विषय में कही गई एकमात्र विधेय बात है: 'तद्वनम्', जो सबको वांछित है। शेष सब निषेध था। यहाँ अंततः एक वर्णन है, और वह ब्रह्म का गुण नहीं, बाकी सबके विषय में तथ्य है — सारी चाह अंततः जिसे चाह रही है, वही।\n\nपरिणाम ठीक-ठीक अनुसरण करता है: जो उसे ऐसा जानता है वह वही बन जाता है जिसे समस्त भूत चाहते हैं। इसलिए नहीं कि उसने कुछ आकर्षक पा लिया, बल्कि इसलिए कि वह वही हो गया जिस पर वह चाह सदा लक्षित थी।\n\nअंतिम संवाद उपदेश का पारंपरिक अंत है, और उसका उत्तर एक छोटा सुधार है। 'उपनिषद् कहिए।' 'कह दी गई।' आगे कोई रहस्य नहीं; शिष्य को वह मिल चुकी है, वह कुछ और माँग रहा है। अंतिम पंक्ति फिर उसे थामने वाले को नामित करती है: तप, दम, कर्म, वेद, और निवास के रूप में सत्य। जिस पाठ ने चार खंड शक्ति के हर दावे को खोलने में लगाए, वह साधारण अनुशासन में स्वयं को टिकाकर समाप्त होता है।",
      },
    },
  },
];

registerText({
  slug: "kena",
  textId: "t-kena",
  verses: VERSES,
  videos: KENA_VIDEOS,
  series: KENA_SERIES,
});
