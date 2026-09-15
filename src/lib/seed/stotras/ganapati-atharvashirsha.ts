import { registerStotra } from "../stotras";

// ─────────────────────────────────────────────────────────
//  Gaṇapati Atharvaśīrṣa — the Gaṇapati Upaniṣad, in fourteen
//  sections, with its opening śānti.
//
//  Checked against the two texts on Sanskrit Wikisource: the stotra
//  text (श्रीगणपत्यथर्वशीर्ष) and the Upaniṣad text
//  (गणपत्यथर्वशीर्षोपनिषत्). Sections are numbered as in the first,
//  which keeps ऋतं वच्मि । सत्यं वच्मि as section 2 on its own. Where
//  the two differ:
//    · §4 वाङ्मयः and §6 मूलाधारस्थितोऽसि follow the Upaniṣad text; the
//      stotra text has printing slips in both.
//    · §2 leaves out the stotra text's gloss "(वदिष्यामि)".
//    · §10 follows the stotra text: विघ्ननाशिने … नमो नमः.
//    · §11 takes the Upaniṣad text's order (न बाध्यते, then सुखमेधते)
//      and the stotra text's प्रयुञ्जानोऽपापो and सर्वत्राधीयानोऽपविघ्नो
//      भवति, as recitations do.
//    · §12 leaves out the stotra text's extra स यशोवान् भवति.
//    · §14 keeps the Upaniṣad text's महाप्रत्यवायात् प्रमुच्यते.
//  The closing śānti repeats the opening one and is not entered twice.
// ─────────────────────────────────────────────────────────

registerStotra({
  slug: "ganapati-atharvashirsha",
  textId: "t-stuti-ganapati-atharvashirsha",
  devata: "ganesha",
  group: "vedic",
  order: 6,
  category: "shruti",
  origin: { en: "Ganapati Upanishad, Atharvaveda", kn: "ಗಣಪತಿ ಉಪನಿಷತ್, ಅಥರ್ವವೇದ", hi: "गणपति उपनिषद्, अथर्ववेद" },
  composer: { en: "Rishi Atharvana", kn: "ಅಥರ್ವಣ ಋಷಿ", hi: "अथर्वण ऋषि" },
  video: {
    id: "7nIZcKM-BiM",
    title: "Ganapati Atharvashirsha, chanted by the priests of Kashi",
    channel: "Ved Vrind · Strumm Spiritual",
  },
  verses: [
    {
      id: "ganapati-atharvashirsha-invocation",
      locator: "invocation",
      sanskrit: [
        "ॐ भद्रं कर्णेभिः शृणुयाम देवाः ।",
        "भद्रं पश्येमाक्षभिर्यजत्राः ।",
        "स्थिरैरङ्गैस्तुष्टुवांसस्तनूभिः ।",
        "व्यशेम देवहितं यदायुः ॥",
        "स्वस्ति न इन्द्रो वृद्धश्रवाः ।",
        "स्वस्ति नः पूषा विश्ववेदाः ।",
        "स्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः ।",
        "स्वस्ति नो बृहस्पतिर्दधातु ॥",
        "ॐ शान्तिः शान्तिः शान्तिः ॥",
      ],
      iast: [
        "oṃ bhadraṃ karṇebhiḥ śṛṇuyāma devāḥ |",
        "bhadraṃ paśyemākṣabhir yajatrāḥ |",
        "sthirair aṅgais tuṣṭuvāṃsas tanūbhiḥ |",
        "vyaśema devahitaṃ yad āyuḥ ||",
        "svasti na indro vṛddhaśravāḥ |",
        "svasti naḥ pūṣā viśvavedāḥ |",
        "svasti nas tārkṣyo ariṣṭanemiḥ |",
        "svasti no bṛhaspatir dadhātu ||",
        "oṃ śāntiḥ śāntiḥ śāntiḥ ||",
      ],
      readings: {
        en: { translation: "Oṃ. May we hear with our ears what is good, O gods; may we see with our eyes what is good, you who are worshipped. Praising you with steady limbs and bodies, may we live out the span of life the gods have given. May Indra of great fame, Pūṣan who knows all, Tārkṣya whose wheel is never broken, and Bṛhaspati grant us well-being. Oṃ, peace, peace, peace." },
        kn: { translation: "ಓಂ. ದೇವತೆಗಳೇ, ಕಿವಿಗಳಿಂದ ಮಂಗಳವನ್ನೇ ಕೇಳುವಂತಾಗಲಿ; ಪೂಜ್ಯರೇ, ಕಣ್ಣುಗಳಿಂದ ಮಂಗಳವನ್ನೇ ಕಾಣುವಂತಾಗಲಿ. ದೃಢವಾದ ಅಂಗಗಳಿಂದ, ದೇಹದಿಂದ ನಿಮ್ಮನ್ನು ಸ್ತುತಿಸುತ್ತಾ ದೇವತೆಗಳು ನೀಡಿದ ಆಯುಸ್ಸನ್ನು ಬಾಳುವಂತಾಗಲಿ. ಮಹಾಕೀರ್ತಿಯ ಇಂದ್ರ, ಸರ್ವಜ್ಞನಾದ ಪೂಷ, ಅರಿಷ್ಟನೇಮಿಯಾದ ತಾರ್ಕ್ಷ್ಯ ಮತ್ತು ಬೃಹಸ್ಪತಿ ನಮಗೆ ಮಂಗಳವನ್ನು ನೀಡಲಿ. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ." },
        hi: { translation: "ॐ। हे देवो, हम कानों से कल्याणकारी ही सुनें; हे पूज्यो, आँखों से कल्याणकारी ही देखें। स्थिर अंगों और शरीर से आपकी स्तुति करते हुए देवताओं द्वारा दी गई आयु जिएँ। महान कीर्ति वाले इंद्र, सर्वज्ञ पूषा, अरिष्टनेमि तार्क्ष्य और बृहस्पति हमारा कल्याण करें। ॐ शांतिः शांतिः शांतिः।" },
      },
    },
    {
      id: "ganapati-atharvashirsha-1",
      locator: "1",
      sanskrit: [
        "हरिः ॐ नमस्ते गणपतये ।",
        "त्वमेव प्रत्यक्षं तत्त्वमसि ।",
        "त्वमेव केवलं कर्तासि ।",
        "त्वमेव केवलं धर्तासि ।",
        "त्वमेव केवलं हर्तासि ।",
        "त्वमेव सर्वं खल्विदं ब्रह्मासि ।",
        "त्वं साक्षादात्मासि नित्यम् ॥",
      ],
      iast: [
        "hariḥ oṃ namas te gaṇapataye |",
        "tvam eva pratyakṣaṃ tattvam asi |",
        "tvam eva kevalaṃ kartāsi |",
        "tvam eva kevalaṃ dhartāsi |",
        "tvam eva kevalaṃ hartāsi |",
        "tvam eva sarvaṃ khalv idaṃ brahmāsi |",
        "tvaṃ sākṣād ātmāsi nityam ||",
      ],
      readings: {
        en: { translation: "Hari Oṃ. Salutations to you, Gaṇapati. You alone are the truth before our eyes. You alone are the creator, you alone the sustainer, you alone the destroyer. You alone are all this — truly, you are Brahman. You are the Self itself, eternal." },
        kn: { translation: "ಹರಿಃ ಓಂ. ಗಣಪತಿಯೇ, ನಿನಗೆ ನಮಸ್ಕಾರ. ಕಣ್ಣೆದುರಿನ ಸತ್ಯವು ನೀನೇ. ಸೃಷ್ಟಿಸುವವನು ನೀನೊಬ್ಬನೇ, ಪಾಲಿಸುವವನು ನೀನೊಬ್ಬನೇ, ಸಂಹರಿಸುವವನು ನೀನೊಬ್ಬನೇ. ಇದೆಲ್ಲವೂ ನೀನೇ — ನಿಜವಾಗಿ ನೀನೇ ಬ್ರಹ್ಮ. ನೀನು ಸಾಕ್ಷಾತ್ ಆತ್ಮ, ನಿತ್ಯ." },
        hi: { translation: "हरिः ॐ। हे गणपति, तुम्हें नमस्कार। प्रत्यक्ष तत्त्व तुम ही हो। तुम ही एकमात्र कर्ता, तुम ही एकमात्र धर्ता, तुम ही एकमात्र हर्ता हो। यह सब कुछ तुम ही हो — निश्चय ही तुम ब्रह्म हो। तुम साक्षात् आत्मा हो, नित्य।" },
      },
    },
    {
      id: "ganapati-atharvashirsha-2",
      locator: "2",
      sanskrit: ["ऋतं वच्मि ।", "सत्यं वच्मि ॥"],
      iast: ["ṛtaṃ vacmi |", "satyaṃ vacmi ||"],
      readings: {
        en: { translation: "I speak what is right. I speak what is true." },
        kn: { translation: "ಋತವನ್ನು ನುಡಿಯುತ್ತೇನೆ. ಸತ್ಯವನ್ನು ನುಡಿಯುತ್ತೇನೆ." },
        hi: { translation: "मैं ऋत कहता हूँ। मैं सत्य कहता हूँ।" },
      },
    },
    {
      id: "ganapati-atharvashirsha-3",
      locator: "3",
      sanskrit: [
        "अव त्वं माम् । अव वक्तारम् ।",
        "अव श्रोतारम् । अव दातारम् ।",
        "अव धातारम् । अवानूचानमव शिष्यम् ।",
        "अव पश्चात्तात् । अव पुरस्तात् ।",
        "अवोत्तरात्तात् । अव दक्षिणात्तात् ।",
        "अव चोर्ध्वात्तात् । अवाधरात्तात् ।",
        "सर्वतो मां पाहि पाहि समन्तात् ॥",
      ],
      iast: [
        "ava tvaṃ mām | ava vaktāram |",
        "ava śrotāram | ava dātāram |",
        "ava dhātāram | avānūcānam ava śiṣyam |",
        "ava paścāttāt | ava purastāt |",
        "avottarāttāt | ava dakṣiṇāttāt |",
        "ava cordhvāttāt | avādharāttāt |",
        "sarvato māṃ pāhi pāhi samantāt ||",
      ],
      readings: {
        en: { translation: "Protect me. Protect the one who speaks and the one who listens; the one who gives and the one who holds. Protect the teacher who recites, protect the disciple. Protect from behind and from before, from the north and from the south, from above and from below. Guard me on every side, all around." },
        kn: { translation: "ನನ್ನನ್ನು ಕಾಪಾಡು. ಹೇಳುವವನನ್ನು, ಕೇಳುವವನನ್ನು ಕಾಪಾಡು; ಕೊಡುವವನನ್ನು, ಧರಿಸುವವನನ್ನು ಕಾಪಾಡು. ಪಠಿಸುವ ಗುರುವನ್ನು ಕಾಪಾಡು, ಶಿಷ್ಯನನ್ನು ಕಾಪಾಡು. ಹಿಂದಿನಿಂದ, ಮುಂದಿನಿಂದ, ಉತ್ತರದಿಂದ, ದಕ್ಷಿಣದಿಂದ, ಮೇಲಿನಿಂದ, ಕೆಳಗಿನಿಂದ ಕಾಪಾಡು. ಎಲ್ಲೆಡೆಯಿಂದಲೂ, ಸುತ್ತಲೂ ನನ್ನನ್ನು ರಕ್ಷಿಸು, ರಕ್ಷಿಸು." },
        hi: { translation: "मेरी रक्षा करो। वक्ता की और श्रोता की रक्षा करो; दाता की और धारण करने वाले की रक्षा करो। पाठ कराने वाले गुरु की रक्षा करो, शिष्य की रक्षा करो। पीछे से, आगे से, उत्तर से, दक्षिण से, ऊपर से और नीचे से रक्षा करो। सब ओर से, चारों ओर से मेरी रक्षा करो, रक्षा करो।" },
      },
    },
    {
      id: "ganapati-atharvashirsha-4",
      locator: "4",
      sanskrit: [
        "त्वं वाङ्मयस्त्वं चिन्मयः ।",
        "त्वमानन्दमयस्त्वं ब्रह्ममयः ।",
        "त्वं सच्चिदानन्दाद्वितीयोऽसि ।",
        "त्वं प्रत्यक्षं ब्रह्मासि ।",
        "त्वं ज्ञानमयो विज्ञानमयोऽसि ॥",
      ],
      iast: [
        "tvaṃ vāṅmayas tvaṃ cinmayaḥ |",
        "tvam ānandamayas tvaṃ brahmamayaḥ |",
        "tvaṃ saccidānandādvitīyo 'si |",
        "tvaṃ pratyakṣaṃ brahmāsi |",
        "tvaṃ jñānamayo vijñānamayo 'si ||",
      ],
      readings: {
        en: { translation: "You are made of speech, you are made of consciousness. You are made of bliss, you are made of Brahman. You are being, consciousness and bliss, one without a second. You are Brahman before our eyes. You are made of knowledge and of wisdom." },
        kn: { translation: "ನೀನು ವಾಙ್ಮಯ, ನೀನು ಚಿನ್ಮಯ. ನೀನು ಆನಂದಮಯ, ನೀನು ಬ್ರಹ್ಮಮಯ. ನೀನು ಸಚ್ಚಿದಾನಂದ, ಅದ್ವಿತೀಯ. ನೀನು ಪ್ರತ್ಯಕ್ಷ ಬ್ರಹ್ಮ. ನೀನು ಜ್ಞಾನಮಯ, ವಿಜ್ಞಾನಮಯ." },
        hi: { translation: "तुम वाङ्मय हो, तुम चिन्मय हो। तुम आनंदमय हो, तुम ब्रह्ममय हो। तुम सच्चिदानंद, अद्वितीय हो। तुम प्रत्यक्ष ब्रह्म हो। तुम ज्ञानमय और विज्ञानमय हो।" },
      },
    },
    {
      id: "ganapati-atharvashirsha-5",
      locator: "5",
      sanskrit: [
        "सर्वं जगदिदं त्वत्तो जायते ।",
        "सर्वं जगदिदं त्वत्तस्तिष्ठति ।",
        "सर्वं जगदिदं त्वयि लयमेष्यति ।",
        "सर्वं जगदिदं त्वयि प्रत्येति ।",
        "त्वं भूमिरापोऽनलोऽनिलो नभः ।",
        "त्वं चत्वारि वाक्पदानि ॥",
      ],
      iast: [
        "sarvaṃ jagad idaṃ tvatto jāyate |",
        "sarvaṃ jagad idaṃ tvattas tiṣṭhati |",
        "sarvaṃ jagad idaṃ tvayi layam eṣyati |",
        "sarvaṃ jagad idaṃ tvayi pratyeti |",
        "tvaṃ bhūmir āpo 'nalo 'nilo nabhaḥ |",
        "tvaṃ catvāri vākpadāni ||",
      ],
      readings: {
        en: { translation: "This whole world is born from you. This whole world stands through you. This whole world will dissolve in you. This whole world returns to you. You are earth, water, fire, air and sky. You are the four levels of speech." },
        kn: { translation: "ಈ ಜಗತ್ತೆಲ್ಲವೂ ನಿನ್ನಿಂದ ಹುಟ್ಟುತ್ತದೆ. ಈ ಜಗತ್ತೆಲ್ಲವೂ ನಿನ್ನಿಂದ ನಿಂತಿದೆ. ಈ ಜಗತ್ತೆಲ್ಲವೂ ನಿನ್ನಲ್ಲಿ ಲಯವಾಗುತ್ತದೆ. ಈ ಜಗತ್ತೆಲ್ಲವೂ ನಿನ್ನಲ್ಲಿಗೆ ಹಿಂದಿರುಗುತ್ತದೆ. ನೀನು ಭೂಮಿ, ನೀರು, ಅಗ್ನಿ, ವಾಯು, ಆಕಾಶ. ನೀನು ವಾಕ್ಕಿನ ನಾಲ್ಕು ಹಂತಗಳು." },
        hi: { translation: "यह सारा जगत तुमसे उत्पन्न होता है। यह सारा जगत तुमसे टिका है। यह सारा जगत तुममें लय होगा। यह सारा जगत तुममें लौटता है। तुम पृथ्वी, जल, अग्नि, वायु और आकाश हो। तुम वाणी के चारों स्तर हो।" },
      },
    },
    {
      id: "ganapati-atharvashirsha-6",
      locator: "6",
      sanskrit: [
        "त्वं गुणत्रयातीतः । त्वमवस्थात्रयातीतः ।",
        "त्वं देहत्रयातीतः । त्वं कालत्रयातीतः ।",
        "त्वं मूलाधारस्थितोऽसि नित्यम् ।",
        "त्वं शक्तित्रयात्मकः ।",
        "त्वां योगिनो ध्यायन्ति नित्यम् ।",
        "त्वं ब्रह्मा त्वं विष्णुस्त्वं रुद्रस्त्वमिन्द्रस्त्वमग्निस्त्वं वायुस्त्वं सूर्यस्त्वं चन्द्रमास्त्वं ब्रह्म भूर्भुवः स्वरोम् ॥",
      ],
      iast: [
        "tvaṃ guṇatrayātītaḥ | tvam avasthātrayātītaḥ |",
        "tvaṃ dehatrayātītaḥ | tvaṃ kālatrayātītaḥ |",
        "tvaṃ mūlādhārasthito 'si nityam |",
        "tvaṃ śaktitrayātmakaḥ |",
        "tvāṃ yogino dhyāyanti nityam |",
        "tvaṃ brahmā tvaṃ viṣṇus tvaṃ rudras tvam indras tvam agnis tvaṃ vāyus tvaṃ sūryas tvaṃ candramās tvaṃ brahma bhūr bhuvaḥ svar om ||",
      ],
      readings: {
        en: { translation: "You are beyond the three guṇas; beyond the three states of waking, dream and deep sleep; beyond the three bodies; beyond the three times. You dwell always in the mūlādhāra. You are the three powers in one. Yogis meditate on you always. You are Brahmā, you are Viṣṇu, you are Rudra; you are Indra, Agni, Vāyu, the sun and the moon; you are Brahman — earth, sky and heaven — and Oṃ." },
        kn: { translation: "ನೀನು ಮೂರು ಗುಣಗಳನ್ನು ಮೀರಿದವನು; ಎಚ್ಚರ, ಕನಸು, ಗಾಢನಿದ್ರೆ ಎಂಬ ಮೂರು ಅವಸ್ಥೆಗಳನ್ನು ಮೀರಿದವನು; ಮೂರು ದೇಹಗಳನ್ನು ಮೀರಿದವನು; ಮೂರು ಕಾಲಗಳನ್ನು ಮೀರಿದವನು. ನೀನು ಸದಾ ಮೂಲಾಧಾರದಲ್ಲಿ ನೆಲೆಸಿರುವೆ. ನೀನು ಮೂರು ಶಕ್ತಿಗಳ ಸ್ವರೂಪ. ಯೋಗಿಗಳು ನಿನ್ನನ್ನು ಸದಾ ಧ್ಯಾನಿಸುತ್ತಾರೆ. ನೀನು ಬ್ರಹ್ಮದೇವ, ನೀನು ವಿಷ್ಣು, ನೀನು ರುದ್ರ; ನೀನು ಇಂದ್ರ, ಅಗ್ನಿ, ವಾಯು, ಸೂರ್ಯ, ಚಂದ್ರ; ನೀನು ಪರಬ್ರಹ್ಮ — ಭೂಃ, ಭುವಃ, ಸ್ವಃ — ಮತ್ತು ಓಂಕಾರ." },
        hi: { translation: "तुम तीनों गुणों से परे हो; जाग्रत, स्वप्न और सुषुप्ति — तीनों अवस्थाओं से परे हो; तीनों शरीरों से परे हो; तीनों कालों से परे हो। तुम सदा मूलाधार में स्थित हो। तुम तीनों शक्तियों के स्वरूप हो। योगी सदा तुम्हारा ध्यान करते हैं। तुम ब्रह्मा हो, तुम विष्णु हो, तुम रुद्र हो; तुम इंद्र, अग्नि, वायु, सूर्य और चंद्रमा हो; तुम ब्रह्म हो — भूः, भुवः, स्वः — और ओंकार।" },
      },
    },
    {
      id: "ganapati-atharvashirsha-7",
      locator: "7",
      sanskrit: [
        "गणादिं पूर्वमुच्चार्य वर्णादींस्तदनन्तरम् ।",
        "अनुस्वारः परतरः । अर्धेन्दुलसितम् ।",
        "तारेण ऋद्धम् । एतत्तव मनुस्वरूपम् ।",
        "गकारः पूर्वरूपम् । अकारो मध्यमरूपम् ।",
        "अनुस्वारश्चान्त्यरूपम् । बिन्दुरुत्तररूपम् ।",
        "नादः सन्धानम् । संहितासन्धिः ।",
        "सैषा गणेशविद्या ।",
        "गणक ऋषिः । निचृद्गायत्रीच्छन्दः । गणपतिर्देवता ।",
        "ॐ गं गणपतये नमः ॥",
      ],
      iast: [
        "gaṇādiṃ pūrvam uccārya varṇādīṃs tadanantaram |",
        "anusvāraḥ parataraḥ | ardhendulasitam |",
        "tāreṇa ṛddham | etat tava manusvarūpam |",
        "gakāraḥ pūrvarūpam | akāro madhyamarūpam |",
        "anusvāraś cāntyarūpam | bindur uttararūpam |",
        "nādaḥ sandhānam | saṃhitāsandhiḥ |",
        "saiṣā gaṇeśavidyā |",
        "gaṇaka ṛṣiḥ | nicṛdgāyatrīcchandaḥ | gaṇapatir devatā |",
        "oṃ gaṃ gaṇapataye namaḥ ||",
      ],
      readings: {
        en: { translation: "First say the first letter of 'gaṇa', then the first of the vowels; after them the anusvāra, adorned with the half-moon and joined to Oṃ. This is the form of your mantra: 'g' its first part, 'a' its middle, the anusvāra its last, the bindu above; nāda joins them, and they are said as one. This is the knowledge of Gaṇeśa. Its seer is Gaṇaka, its metre nicṛd gāyatrī, its deity Gaṇapati. Oṃ gaṃ gaṇapataye namaḥ." },
        kn: { translation: "ಮೊದಲು 'ಗಣ'ದ ಮೊದಲ ಅಕ್ಷರವನ್ನು, ನಂತರ ಸ್ವರಗಳಲ್ಲಿ ಮೊದಲನೆಯದನ್ನು ಉಚ್ಚರಿಸಬೇಕು; ಅವುಗಳ ನಂತರ ಅನುಸ್ವಾರ, ಅರ್ಧಚಂದ್ರದಿಂದ ಶೋಭಿಸುವುದು, ಓಂಕಾರದೊಡನೆ ಕೂಡಿದುದು. ಇದು ನಿನ್ನ ಮಂತ್ರದ ಸ್ವರೂಪ: 'ಗ'ಕಾರ ಮೊದಲ ರೂಪ, 'ಅ'ಕಾರ ಮಧ್ಯ ರೂಪ, ಅನುಸ್ವಾರ ಕೊನೆಯ ರೂಪ, ಬಿಂದು ಮೇಲಿನ ರೂಪ; ನಾದ ಅವುಗಳನ್ನು ಜೋಡಿಸುತ್ತದೆ, ಎಲ್ಲವನ್ನೂ ಒಂದಾಗಿ ಉಚ್ಚರಿಸಲಾಗುತ್ತದೆ. ಇದೇ ಗಣೇಶವಿದ್ಯೆ. ಇದರ ಋಷಿ ಗಣಕ, ಛಂದಸ್ಸು ನಿಚೃದ್ಗಾಯತ್ರೀ, ದೇವತೆ ಗಣಪತಿ. ಓಂ ಗಂ ಗಣಪತಯೇ ನಮಃ." },
        hi: { translation: "पहले 'गण' का पहला अक्षर, फिर स्वरों में पहला बोलें; उनके बाद अनुस्वार, अर्धचंद्र से शोभित, ओंकार से युक्त। यह तुम्हारे मंत्र का स्वरूप है: 'ग'कार पहला रूप, 'अ'कार मध्य रूप, अनुस्वार अंतिम रूप, बिंदु ऊपर का रूप; नाद इन्हें जोड़ता है, और सब एक साथ बोले जाते हैं। यही गणेशविद्या है। इसके ऋषि गणक हैं, छंद निचृद्गायत्री, देवता गणपति। ॐ गं गणपतये नमः।" },
      },
    },
    {
      id: "ganapati-atharvashirsha-8",
      locator: "8",
      sanskrit: ["एकदन्ताय विद्महे वक्रतुण्डाय धीमहि ।", "तन्नो दन्तिः प्रचोदयात् ॥"],
      iast: ["ekadantāya vidmahe vakratuṇḍāya dhīmahi |", "tan no dantiḥ pracodayāt ||"],
      readings: {
        en: { translation: "We know the one-tusked; we meditate on the curved-trunked. May the tusked one set us in motion." },
        kn: { translation: "ಏಕದಂತನನ್ನು ಅರಿಯುತ್ತೇವೆ; ವಕ್ರತುಂಡನನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ದಂತವುಳ್ಳವನು ನಮ್ಮನ್ನು ಪ್ರೇರೇಪಿಸಲಿ." },
        hi: { translation: "हम एकदंत को जानते हैं; वक्रतुंड का ध्यान करते हैं। वे दंतधारी हमें प्रेरित करें।" },
      },
    },
    {
      id: "ganapati-atharvashirsha-9",
      locator: "9",
      sanskrit: [
        "एकदन्तं चतुर्हस्तं पाशमङ्कुशधारिणम् ।",
        "रदं च वरदं हस्तैर्बिभ्राणं मूषकध्वजम् ॥",
        "रक्तं लम्बोदरं शूर्पकर्णकं रक्तवाससम् ।",
        "रक्तगन्धानुलिप्ताङ्गं रक्तपुष्पैः सुपूजितम् ॥",
        "भक्तानुकम्पिनं देवं जगत्कारणमच्युतम् ।",
        "आविर्भूतं च सृष्ट्यादौ प्रकृतेः पुरुषात्परम् ॥",
        "एवं ध्यायति यो नित्यं स योगी योगिनां वरः ॥",
      ],
      iast: [
        "ekadantaṃ caturhastaṃ pāśam aṅkuśadhāriṇam |",
        "radaṃ ca varadaṃ hastair bibhrāṇaṃ mūṣakadhvajam ||",
        "raktaṃ lambodaraṃ śūrpakarṇakaṃ raktavāsasam |",
        "raktagandhānuliptāṅgaṃ raktapuṣpaiḥ supūjitam ||",
        "bhaktānukampinaṃ devaṃ jagatkāraṇam acyutam |",
        "āvirbhūtaṃ ca sṛṣṭyādau prakṛteḥ puruṣāt param ||",
        "evaṃ dhyāyati yo nityaṃ sa yogī yogināṃ varaḥ ||",
      ],
      readings: {
        en: { translation: "One-tusked, four-armed, holding the noose and the goad, his other hands bearing the tusk and giving blessing, the mouse on his banner; red, great-bellied, with ears like winnowing fans, dressed in red, anointed with red sandal, worshipped with red flowers; the god who is tender to his devotees, the cause of the world, the unfailing one, who appeared at the beginning of creation, beyond nature and spirit — whoever meditates on him so, every day, is a yogi, the best of yogis." },
        kn: { translation: "ಏಕದಂತ, ಚತುರ್ಭುಜ, ಪಾಶ ಮತ್ತು ಅಂಕುಶಗಳನ್ನು ಹಿಡಿದವನು, ಉಳಿದ ಕೈಗಳಲ್ಲಿ ದಂತವನ್ನೂ ವರದಮುದ್ರೆಯನ್ನೂ ಧರಿಸಿದವನು, ಇಲಿಯನ್ನು ಧ್ವಜದಲ್ಲಿ ಉಳ್ಳವನು; ಕೆಂಪು ಬಣ್ಣದ, ಲಂಬೋದರ, ಮೊರದಂತಹ ಕಿವಿಗಳ, ಕೆಂಪು ವಸ್ತ್ರ ಧರಿಸಿದ, ಕೆಂಪು ಗಂಧ ಲೇಪಿಸಿದ, ಕೆಂಪು ಹೂಗಳಿಂದ ಪೂಜಿತನಾದ; ಭಕ್ತರ ಮೇಲೆ ಕರುಣೆಯುಳ್ಳ ದೇವ, ಜಗತ್ತಿನ ಕಾರಣ, ಅಚ್ಯುತ, ಸೃಷ್ಟಿಯ ಆರಂಭದಲ್ಲಿ ಆವಿರ್ಭವಿಸಿದವನು, ಪ್ರಕೃತಿ ಪುರುಷರನ್ನು ಮೀರಿದವನು — ಹೀಗೆ ಅವನನ್ನು ನಿತ್ಯವೂ ಧ್ಯಾನಿಸುವವನು ಯೋಗಿ, ಯೋಗಿಗಳಲ್ಲಿ ಶ್ರೇಷ್ಠ." },
        hi: { translation: "एकदंत, चतुर्भुज, पाश और अंकुश धारण किए, शेष हाथों में दाँत और वरमुद्रा लिए, ध्वजा पर मूषक वाले; लाल वर्ण, लंबोदर, सूप जैसे कानों वाले, लाल वस्त्र पहने, लाल चंदन से लिप्त, लाल फूलों से पूजित; भक्तों पर करुणा करने वाले देव, जगत के कारण, अच्युत, सृष्टि के आरंभ में प्रकट हुए, प्रकृति और पुरुष से परे — जो नित्य इस प्रकार उनका ध्यान करता है, वह योगी है, योगियों में श्रेष्ठ।" },
      },
    },
    {
      id: "ganapati-atharvashirsha-10",
      locator: "10",
      sanskrit: [
        "नमो व्रातपतये नमो गणपतये नमः प्रमथपतये",
        "नमस्तेऽस्तु लम्बोदरायैकदन्ताय विघ्ननाशिने शिवसुताय",
        "श्रीवरदमूर्तये नमो नमः ॥",
      ],
      iast: [
        "namo vrātapataye namo gaṇapataye namaḥ pramathapataye",
        "namas te 'stu lambodarāyaikadantāya vighnanāśine śivasutāya",
        "śrīvaradamūrtaye namo namaḥ ||",
      ],
      readings: {
        en: { translation: "Salutations to the lord of the companies, salutations to Gaṇapati, salutations to the lord of the pramathas. Salutations to you — great-bellied, one-tusked, destroyer of obstacles, son of Śiva, the giver of blessings in bodily form — salutations, salutations." },
        kn: { translation: "ವ್ರಾತಗಳ ಒಡೆಯನಿಗೆ ನಮಸ್ಕಾರ, ಗಣಪತಿಗೆ ನಮಸ್ಕಾರ, ಪ್ರಮಥಗಳ ಒಡೆಯನಿಗೆ ನಮಸ್ಕಾರ. ಲಂಬೋದರನೂ ಏಕದಂತನೂ ವಿಘ್ನನಾಶಕನೂ ಶಿವನ ಪುತ್ರನೂ ವರ ನೀಡುವ ಮೂರ್ತಿಯೂ ಆದ ನಿನಗೆ ನಮಸ್ಕಾರ, ನಮಸ್ಕಾರ." },
        hi: { translation: "व्रातों के स्वामी को नमस्कार, गणपति को नमस्कार, प्रमथों के स्वामी को नमस्कार। लंबोदर, एकदंत, विघ्नों का नाश करने वाले, शिव के पुत्र, वरद मूर्ति — तुम्हें नमस्कार, नमस्कार।" },
      },
    },
    {
      id: "ganapati-atharvashirsha-11",
      locator: "11",
      sanskrit: [
        "एतदथर्वशीर्षं योऽधीते । स ब्रह्मभूयाय कल्पते ।",
        "स सर्वविघ्नैर्न बाध्यते । स सर्वतः सुखमेधते ।",
        "स पञ्चमहापापात्प्रमुच्यते ।",
        "सायमधीयानो दिवसकृतं पापं नाशयति ।",
        "प्रातरधीयानो रात्रिकृतं पापं नाशयति ।",
        "सायंप्रातः प्रयुञ्जानोऽपापो भवति ।",
        "सर्वत्राधीयानोऽपविघ्नो भवति ।",
        "धर्मार्थकाममोक्षं च विन्दति ।",
        "इदमथर्वशीर्षमशिष्याय न देयम् ।",
        "यो यदि मोहाद्दास्यति स पापीयान् भवति ।",
        "सहस्रावर्तनाद्यं यं काममधीते तं तमनेन साधयेत् ॥",
      ],
      iast: [
        "etad atharvaśīrṣaṃ yo 'dhīte | sa brahmabhūyāya kalpate |",
        "sa sarvavighnair na bādhyate | sa sarvataḥ sukham edhate |",
        "sa pañcamahāpāpāt pramucyate |",
        "sāyam adhīyāno divasakṛtaṃ pāpaṃ nāśayati |",
        "prātar adhīyāno rātrikṛtaṃ pāpaṃ nāśayati |",
        "sāyaṃprātaḥ prayuñjāno 'pāpo bhavati |",
        "sarvatrādhīyāno 'pavighno bhavati |",
        "dharmārthakāmamokṣaṃ ca vindati |",
        "idam atharvaśīrṣam aśiṣyāya na deyam |",
        "yo yadi mohād dāsyati sa pāpīyān bhavati |",
        "sahasrāvartanād yaṃ yaṃ kāmam adhīte taṃ tam anena sādhayet ||",
      ],
      readings: {
        en: { translation: "Whoever studies this Atharvaśīrṣa becomes fit to be one with Brahman. No obstacle holds them back; they prosper on every side; they are freed from the five great sins. Recited in the evening, it destroys the sins of the day; recited in the morning, the sins of the night. Whoever recites it morning and evening is free of sin; whoever recites it everywhere is free of obstacles, and gains dharma, wealth, the fulfilment of desire and liberation. This Atharvaśīrṣa is not to be given to one who is not a disciple; whoever gives it out of delusion becomes a sinner. Whatever wish one recites it for, a thousand times over, one achieves by it." },
        kn: { translation: "ಈ ಅಥರ್ವಶೀರ್ಷವನ್ನು ಅಧ್ಯಯನ ಮಾಡುವವನು ಬ್ರಹ್ಮಭಾವಕ್ಕೆ ಅರ್ಹನಾಗುತ್ತಾನೆ. ಅವನನ್ನು ಯಾವ ವಿಘ್ನವೂ ಬಾಧಿಸದು; ಎಲ್ಲೆಡೆಯಿಂದಲೂ ಸುಖದಿಂದ ಬೆಳೆಯುತ್ತಾನೆ; ಐದು ಮಹಾಪಾಪಗಳಿಂದ ಮುಕ್ತನಾಗುತ್ತಾನೆ. ಸಂಜೆ ಪಠಿಸಿದರೆ ಹಗಲು ಮಾಡಿದ ಪಾಪ, ಬೆಳಿಗ್ಗೆ ಪಠಿಸಿದರೆ ರಾತ್ರಿ ಮಾಡಿದ ಪಾಪ ನಾಶವಾಗುತ್ತದೆ. ಬೆಳಿಗ್ಗೆ ಸಂಜೆ ಪಠಿಸುವವನು ಪಾಪರಹಿತನಾಗುತ್ತಾನೆ; ಎಲ್ಲೆಡೆ ಪಠಿಸುವವನು ವಿಘ್ನರಹಿತನಾಗುತ್ತಾನೆ, ಮತ್ತು ಧರ್ಮ, ಅರ್ಥ, ಕಾಮ, ಮೋಕ್ಷಗಳನ್ನು ಪಡೆಯುತ್ತಾನೆ. ಈ ಅಥರ್ವಶೀರ್ಷವನ್ನು ಶಿಷ್ಯನಲ್ಲದವನಿಗೆ ಕೊಡಬಾರದು; ಮೋಹದಿಂದ ಕೊಡುವವನು ಪಾಪಿಯಾಗುತ್ತಾನೆ. ಸಾವಿರ ಬಾರಿ ಪಠಿಸಿ ಯಾವ ಯಾವ ಬಯಕೆಯನ್ನು ಬಯಸುತ್ತಾನೋ ಅದನ್ನು ಇದರಿಂದ ಸಾಧಿಸುತ್ತಾನೆ." },
        hi: { translation: "जो इस अथर्वशीर्ष का अध्ययन करता है, वह ब्रह्मभाव के योग्य होता है। उसे कोई विघ्न बाधा नहीं देता; वह सब ओर से सुख पाता है; वह पाँच महापापों से मुक्त होता है। सायं पढ़ने से दिन में किए पाप का, प्रातः पढ़ने से रात में किए पाप का नाश होता है। सायं-प्रातः पढ़ने वाला निष्पाप होता है; सर्वत्र पढ़ने वाला विघ्नरहित होता है, और धर्म, अर्थ, काम और मोक्ष पाता है। यह अथर्वशीर्ष अशिष्य को नहीं देना चाहिए; जो मोहवश देता है, वह पापी होता है। सहस्र आवृत्ति से जिस-जिस कामना से इसका पाठ करता है, वह-वह इससे सिद्ध करता है।" },
      },
    },
    {
      id: "ganapati-atharvashirsha-12",
      locator: "12",
      sanskrit: [
        "अनेन गणपतिमभिषिञ्चति स वाग्मी भवति ।",
        "चतुर्थ्यामनश्नन् जपति स विद्यावान् भवति ।",
        "इत्यथर्वणवाक्यम् ।",
        "ब्रह्माद्याचरणं विद्यान्न बिभेति कदाचनेति ॥",
      ],
      iast: [
        "anena gaṇapatim abhiṣiñcati sa vāgmī bhavati |",
        "caturthyām anaśnan japati sa vidyāvān bhavati |",
        "ity atharvaṇavākyam |",
        "brahmādyācaraṇaṃ vidyān na bibheti kadācaneti ||",
      ],
      readings: {
        en: { translation: "Whoever bathes Gaṇapati while reciting this becomes eloquent. Whoever fasts on a Chaturthi and recites it becomes learned. These are the words of Atharvaṇa. One who knows this practice of Brahmā and the others is never afraid." },
        kn: { translation: "ಇದನ್ನು ಪಠಿಸುತ್ತಾ ಗಣಪತಿಗೆ ಅಭಿಷೇಕ ಮಾಡುವವನು ವಾಗ್ಮಿಯಾಗುತ್ತಾನೆ. ಚತುರ್ಥಿಯಂದು ಉಪವಾಸವಿದ್ದು ಜಪಿಸುವವನು ವಿದ್ಯಾವಂತನಾಗುತ್ತಾನೆ. ಇದು ಅಥರ್ವಣನ ವಾಕ್ಯ. ಬ್ರಹ್ಮಾದಿಗಳ ಈ ಆಚರಣೆಯನ್ನು ತಿಳಿದವನು ಎಂದಿಗೂ ಭಯಪಡುವುದಿಲ್ಲ." },
        hi: { translation: "जो इससे गणपति का अभिषेक करता है, वह वाग्मी होता है। जो चतुर्थी को उपवास रखकर इसका जप करता है, वह विद्यावान होता है। यह अथर्वण का वचन है। ब्रह्मा आदि के इस आचरण को जानने वाला कभी भयभीत नहीं होता।" },
      },
    },
    {
      id: "ganapati-atharvashirsha-13",
      locator: "13",
      sanskrit: [
        "यो दूर्वाङ्कुरैर्यजति स वैश्रवणोपमो भवति ।",
        "यो लाजैर्यजति स यशोवान् भवति । स मेधावान् भवति ।",
        "यो मोदकसहस्रेण यजति स वाञ्छितफलमवाप्नोति ।",
        "यः साज्यसमिद्भिर्यजति स सर्वं लभते स सर्वं लभते ॥",
      ],
      iast: [
        "yo dūrvāṅkurair yajati sa vaiśravaṇopamo bhavati |",
        "yo lājair yajati sa yaśovān bhavati | sa medhāvān bhavati |",
        "yo modakasahasreṇa yajati sa vāñchitaphalam avāpnoti |",
        "yaḥ sājyasamidbhir yajati sa sarvaṃ labhate sa sarvaṃ labhate ||",
      ],
      readings: {
        en: { translation: "Whoever worships with shoots of dūrvā grass becomes like Kubera. Whoever worships with puffed rice becomes famous and wise. Whoever worships with a thousand modakas gains the fruit they long for. Whoever offers sticks of firewood with ghee gains everything — gains everything." },
        kn: { translation: "ಗರಿಕೆಯ ಚಿಗುರುಗಳಿಂದ ಪೂಜಿಸುವವನು ಕುಬೇರನಂತಾಗುತ್ತಾನೆ. ಅರಳಿನಿಂದ ಪೂಜಿಸುವವನು ಕೀರ್ತಿವಂತನೂ ಮೇಧಾವಿಯೂ ಆಗುತ್ತಾನೆ. ಸಾವಿರ ಮೋದಕಗಳಿಂದ ಪೂಜಿಸುವವನು ಬಯಸಿದ ಫಲವನ್ನು ಪಡೆಯುತ್ತಾನೆ. ತುಪ್ಪದೊಂದಿಗೆ ಸಮಿತ್ತುಗಳನ್ನು ಅರ್ಪಿಸುವವನು ಎಲ್ಲವನ್ನೂ ಪಡೆಯುತ್ತಾನೆ, ಎಲ್ಲವನ್ನೂ ಪಡೆಯುತ್ತಾನೆ." },
        hi: { translation: "जो दूर्वा के अंकुरों से पूजन करता है, वह कुबेर के समान होता है। जो लाजा (धान की खील) से पूजन करता है, वह यशस्वी और मेधावी होता है। जो सहस्र मोदकों से पूजन करता है, वह मनचाहा फल पाता है। जो घी सहित समिधाएँ अर्पित करता है, वह सब कुछ पाता है, सब कुछ पाता है।" },
      },
    },
    {
      id: "ganapati-atharvashirsha-14",
      locator: "14",
      sanskrit: [
        "अष्टौ ब्राह्मणान् सम्यग्ग्राहयित्वा सूर्यवर्चस्वी भवति ।",
        "सूर्यग्रहे महानद्यां प्रतिमासन्निधौ वा जप्त्वा सिद्धमन्त्रो भवति ।",
        "महाविघ्नात्प्रमुच्यते । महादोषात्प्रमुच्यते ।",
        "महापापात्प्रमुच्यते । महाप्रत्यवायात्प्रमुच्यते ।",
        "स सर्वविद्भवति स सर्वविद्भवति ।",
        "य एवं वेद । इत्युपनिषत् ॥",
      ],
      iast: [
        "aṣṭau brāhmaṇān samyag grāhayitvā sūryavarcasvī bhavati |",
        "sūryagrahe mahānadyāṃ pratimāsannidhau vā japtvā siddhamantro bhavati |",
        "mahāvighnāt pramucyate | mahādoṣāt pramucyate |",
        "mahāpāpāt pramucyate | mahāpratyavāyāt pramucyate |",
        "sa sarvavid bhavati sa sarvavid bhavati |",
        "ya evaṃ veda | ity upaniṣat ||",
      ],
      readings: {
        en: { translation: "Whoever teaches it rightly to eight brāhmaṇas becomes radiant as the sun. Recited during a solar eclipse, in a great river, or before an image of the god, the mantra comes to fruition. One is freed from great obstacles, great faults and great sins, and from the great harm of duties left undone. One comes to know all — comes to know all. So it is for whoever knows this. Thus the Upaniṣad." },
        kn: { translation: "ಎಂಟು ಬ್ರಾಹ್ಮಣರಿಗೆ ಇದನ್ನು ಸರಿಯಾಗಿ ಕಲಿಸುವವನು ಸೂರ್ಯನಂತೆ ತೇಜಸ್ವಿಯಾಗುತ್ತಾನೆ. ಸೂರ್ಯಗ್ರಹಣದಲ್ಲಿ, ಮಹಾನದಿಯಲ್ಲಿ ಅಥವಾ ಪ್ರತಿಮೆಯ ಸಾನ್ನಿಧ್ಯದಲ್ಲಿ ಜಪಿಸಿದರೆ ಮಂತ್ರ ಸಿದ್ಧಿಸುತ್ತದೆ. ಮಹಾವಿಘ್ನದಿಂದ, ಮಹಾದೋಷದಿಂದ, ಮಹಾಪಾಪದಿಂದ, ಬಿಟ್ಟ ಕರ್ತವ್ಯಗಳ ಮಹಾಲೋಪದಿಂದ ಮುಕ್ತನಾಗುತ್ತಾನೆ. ಅವನು ಸರ್ವಜ್ಞನಾಗುತ್ತಾನೆ, ಸರ್ವಜ್ಞನಾಗುತ್ತಾನೆ — ಇದನ್ನು ಹೀಗೆ ತಿಳಿದವನು. ಇದು ಉಪನಿಷತ್ತು." },
        hi: { translation: "जो आठ ब्राह्मणों को इसे भली-भाँति सिखाता है, वह सूर्य के समान तेजस्वी होता है। सूर्यग्रहण में, महानदी में या प्रतिमा के समीप इसका जप करने से मंत्र सिद्ध होता है। वह महाविघ्न से, महादोष से, महापाप से, छूटे कर्तव्यों के महाप्रत्यवाय से मुक्त होता है। वह सर्वज्ञ होता है, सर्वज्ञ होता है — जो इसे इस प्रकार जानता है। यही उपनिषद् है।" },
      },
    },
  ],
});
