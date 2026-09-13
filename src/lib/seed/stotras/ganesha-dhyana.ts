import { registerStotra } from "../stotras";

// ─────────────────────────────────────────────────────────
//  Four verses said before beginning anything.
//
//  A set, not one text: each verse has its own source, named in
//  its commentary. Checked against:
//    · शुक्लाम्बरधरं — several Āgamas and the Viṣṇu Sahasranāma's
//      opening, all on Sanskrit Wikisource, identical.
//    · वक्रतुण्ड — Hindi Wikipedia's दैनिक पूजा; the Kannada
//      reading कोटिसूर्य is noted in the commentary.
//    · अगजानन — the Ṣaṭsahasra Kālottara Āgama on Wikisource,
//      which prints गजाननमहार्निशं; अहर्निशम् ("day and night") is
//      the correct word and what every recitation says.
//    · मूषिकवाहन — the विनायकस्तोत्रम् on Wikisource.
// ─────────────────────────────────────────────────────────

registerStotra({
  slug: "ganesha-dhyana-shlokas",
  textId: "t-stuti-ganesha-dhyana",
  devata: "ganesha",
  order: 1,
  category: "smriti",
  origin: {
    en: "The Āgamas and household practice — each verse's source is given with it",
    kn: "ಆಗಮಗಳು ಮತ್ತು ಗೃಹಾಚರಣೆ — ಪ್ರತಿ ಶ್ಲೋಕದ ಮೂಲವನ್ನು ಅದರೊಂದಿಗೇ ನೀಡಲಾಗಿದೆ",
    hi: "आगम और गृह-परंपरा — प्रत्येक श्लोक का स्रोत उसी के साथ दिया गया है",
  },
  verses: [
    {
      id: "ganesha-dhyana-1",
      locator: "1",
      handle: { en: "Clothed in white", kn: "ಶ್ವೇತಾಂಬರಧಾರಿ", hi: "श्वेत वस्त्रधारी" },
      sanskrit: ["शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् ।", "प्रसन्नवदनं ध्यायेत् सर्वविघ्नोपशान्तये ॥"],
      iast: ["śuklāmbaradharaṃ viṣṇuṃ śaśivarṇaṃ caturbhujam |", "prasannavadanaṃ dhyāyet sarvavighnopaśāntaye ||"],
      keywords: [
        { term: "शुक्लाम्बरधरम्", iast: "śuklāmbaradharam", gloss: { en: "clothed in white", kn: "ಬಿಳಿಯ ವಸ್ತ್ರ ಧರಿಸಿದವನು", hi: "श्वेत वस्त्र धारण किए" } },
        { term: "शशिवर्णम्", iast: "śaśivarṇam", gloss: { en: "the colour of the moon", kn: "ಚಂದ್ರನ ಬಣ್ಣದವನು", hi: "चंद्रमा के वर्ण वाले" } },
        { term: "प्रसन्नवदनम्", iast: "prasannavadanam", gloss: { en: "gracious of face", kn: "ಪ್ರಸನ್ನ ಮುಖದವನು", hi: "प्रसन्न मुख वाले" } },
        {
          term: "सर्वविघ्नोपशान्तये",
          iast: "sarvavighnopaśāntaye",
          gloss: { en: "for the stilling of every obstacle", kn: "ಎಲ್ಲ ವಿಘ್ನಗಳ ಶಮನಕ್ಕಾಗಿ", hi: "सभी विघ्नों की शांति के लिए" },
        },
      ],
      readings: {
        en: {
          translation:
            "Clothed in white, all-pervading, the colour of the moon, four-armed, gracious of face — on him one should meditate, so that every obstacle is stilled.",
          explanation:
            "The verse names no one by a Gaṇeśa name. 'Viṣṇu', the all-pervading, is the only name in it, and in the Vaiṣṇava tradition it opens the Viṣṇu Sahasranāma. Its purpose is in its last word — for the stilling of every obstacle — and in South Indian practice it is the first verse of any undertaking, said to Vighneśvara with the knuckles tapped lightly at the temples.\n\nIt is found at the head of several Āgamas, and one of them sets it directly before the verse that follows here, the Agajānana, as a pair.",
        },
        kn: {
          translation:
            "ಬಿಳಿಯ ವಸ್ತ್ರ ಧರಿಸಿದ, ಸರ್ವವ್ಯಾಪಿಯಾದ, ಚಂದ್ರನ ಬಣ್ಣದ, ನಾಲ್ಕು ಭುಜಗಳ, ಪ್ರಸನ್ನ ಮುಖದವನನ್ನು ಧ್ಯಾನಿಸಬೇಕು — ಎಲ್ಲ ವಿಘ್ನಗಳೂ ಶಮನವಾಗಲೆಂದು.",
          explanation:
            "ಈ ಶ್ಲೋಕ ಯಾರನ್ನೂ ಗಣೇಶನ ಹೆಸರಿನಿಂದ ಕರೆಯುವುದಿಲ್ಲ. ಇದರಲ್ಲಿರುವ ಏಕೈಕ ಹೆಸರು 'ವಿಷ್ಣು' — ಸರ್ವವ್ಯಾಪಿ — ಮತ್ತು ವೈಷ್ಣವ ಪರಂಪರೆಯಲ್ಲಿ ಇದು ವಿಷ್ಣುಸಹಸ್ರನಾಮವನ್ನು ಆರಂಭಿಸುತ್ತದೆ. ಇದರ ಉದ್ದೇಶ ಕೊನೆಯ ಪದದಲ್ಲಿದೆ — ಎಲ್ಲ ವಿಘ್ನಗಳ ಶಮನಕ್ಕಾಗಿ — ಮತ್ತು ದಕ್ಷಿಣ ಭಾರತದ ಆಚರಣೆಯಲ್ಲಿ ಯಾವುದೇ ಕಾರ್ಯದ ಮೊದಲ ಶ್ಲೋಕ ಇದೇ; ಹಣೆಯ ಇಕ್ಕೆಲಗಳಿಗೆ ಮುಷ್ಟಿಯಿಂದ ಮೆಲ್ಲನೆ ತಟ್ಟಿಕೊಳ್ಳುತ್ತಾ ವಿಘ್ನೇಶ್ವರನಿಗೆ ಹೇಳಲಾಗುತ್ತದೆ.\n\nಇದು ಹಲವು ಆಗಮಗಳ ಆರಂಭದಲ್ಲಿ ಕಾಣಸಿಗುತ್ತದೆ; ಅವುಗಳಲ್ಲಿ ಒಂದು ಇದನ್ನು ಇಲ್ಲಿ ಮುಂದೆ ಬರುವ ಅಗಜಾನನ ಶ್ಲೋಕದ ಜೊತೆಯಾಗಿ, ಅದರ ಹಿಂದೆಯೇ ಇರಿಸುತ್ತದೆ.",
        },
        hi: {
          translation:
            "श्वेत वस्त्र धारण किए, सर्वव्यापी, चंद्रमा के वर्ण वाले, चतुर्भुज, प्रसन्न मुख वाले का ध्यान करना चाहिए — ताकि सभी विघ्न शांत हों।",
          explanation:
            "यह श्लोक किसी को गणेश के नाम से नहीं पुकारता। इसमें एकमात्र नाम 'विष्णु' — सर्वव्यापी — है, और वैष्णव परंपरा में यह विष्णुसहस्रनाम का आरंभ करता है। इसका प्रयोजन इसके अंतिम शब्द में है — सभी विघ्नों की शांति के लिए — और दक्षिण भारत की परंपरा में किसी भी कार्य का पहला श्लोक यही है, जिसे कनपटियों को मुट्ठी से हल्के-हल्के थपथपाते हुए विघ्नेश्वर से कहा जाता है।\n\nयह कई आगमों के आरंभ में मिलता है, और उनमें से एक इसे यहाँ आगे आने वाले अगजानन श्लोक के ठीक पहले, उसके जोड़े के रूप में रखता है।",
        },
      },
    },
    {
      id: "ganesha-dhyana-2",
      locator: "2",
      handle: { en: "Curved trunk, vast body", kn: "ವಕ್ರತುಂಡ, ಮಹಾಕಾಯ", hi: "वक्रतुंड, महाकाय" },
      sanskrit: ["वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभ ।", "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥"],
      iast: ["vakratuṇḍa mahākāya sūryakoṭisamaprabha |", "nirvighnaṃ kuru me deva sarvakāryeṣu sarvadā ||"],
      keywords: [
        { term: "वक्रतुण्ड", iast: "vakratuṇḍa", gloss: { en: "O curved-trunked one", kn: "ಓ ಬಾಗಿದ ಸೊಂಡಿಲಿನವನೇ", hi: "हे मुड़ी सूँड वाले" } },
        { term: "महाकाय", iast: "mahākāya", gloss: { en: "O vast-bodied one", kn: "ಓ ಮಹಾಕಾಯನೇ", hi: "हे विशालकाय" } },
        {
          term: "सूर्यकोटिसमप्रभ",
          iast: "sūryakoṭisamaprabha",
          gloss: { en: "bright as ten million suns", kn: "ಕೋಟಿ ಸೂರ್ಯರಿಗೆ ಸಮನಾದ ಕಾಂತಿಯುಳ್ಳವನೇ", hi: "करोड़ों सूर्यों के समान प्रभा वाले" },
        },
        { term: "निर्विघ्नम्", iast: "nirvighnam", gloss: { en: "free of obstacles", kn: "ವಿಘ್ನರಹಿತವಾಗಿ", hi: "विघ्नरहित" } },
        { term: "सर्वकार्येषु", iast: "sarvakāryeṣu", gloss: { en: "in every undertaking", kn: "ಎಲ್ಲ ಕಾರ್ಯಗಳಲ್ಲಿ", hi: "सभी कार्यों में" } },
      ],
      readings: {
        en: {
          translation:
            "O curved-trunked one, vast of body, bright as ten million suns — O god, keep every undertaking of mine free of obstacles, always.",
          explanation:
            "The most widely said verse to Gaṇeśa, and the plainest: three ways of addressing him, then a single request. It is said at the start of study, of a journey, of a pūjā — anything that could go wrong.\n\nPrinted forms differ in one place. Many, as here, read sūryakoṭi-samaprabha, 'bright as ten million suns'; others, common in Karnataka, read koṭisūrya-samaprabha — the same two words in the other order, and the same meaning. The verse is not tied to a single source text; it comes to us through household and temple practice.",
        },
        kn: {
          translation:
            "ಓ ವಕ್ರತುಂಡನೇ, ಮಹಾಕಾಯನೇ, ಕೋಟಿ ಸೂರ್ಯರಿಗೆ ಸಮನಾದ ಕಾಂತಿಯುಳ್ಳವನೇ — ದೇವಾ, ನನ್ನ ಎಲ್ಲ ಕಾರ್ಯಗಳನ್ನೂ ಸದಾ ವಿಘ್ನರಹಿತವಾಗಿಸು.",
          explanation:
            "ಗಣೇಶನಿಗೆ ಅತ್ಯಂತ ವ್ಯಾಪಕವಾಗಿ ಹೇಳುವ ಶ್ಲೋಕ, ಮತ್ತು ಅತ್ಯಂತ ಸರಳವಾದದ್ದು: ಅವನನ್ನು ಸಂಬೋಧಿಸುವ ಮೂರು ಬಗೆಗಳು, ನಂತರ ಒಂದೇ ಬೇಡಿಕೆ. ಓದಿನ, ಪ್ರಯಾಣದ, ಪೂಜೆಯ — ತಪ್ಪಬಹುದಾದ ಯಾವುದೇ ಕಾರ್ಯದ ಆರಂಭದಲ್ಲಿ ಇದನ್ನು ಹೇಳಲಾಗುತ್ತದೆ.\n\nಮುದ್ರಿತ ಪಾಠಗಳು ಒಂದೆಡೆ ಭಿನ್ನವಾಗಿವೆ. ಇಲ್ಲಿರುವಂತೆ ಹಲವು 'ಸೂರ್ಯಕೋಟಿಸಮಪ್ರಭ' ಎಂದು ಓದುತ್ತವೆ; ಕರ್ನಾಟಕದಲ್ಲಿ ಸಾಮಾನ್ಯವಾದ ಇನ್ನು ಕೆಲವು 'ಕೋಟಿಸೂರ್ಯಸಮಪ್ರಭ' ಎಂದು ಓದುತ್ತವೆ — ಅವೇ ಎರಡು ಪದಗಳು ಬೇರೆ ಕ್ರಮದಲ್ಲಿ, ಅದೇ ಅರ್ಥ. ಈ ಶ್ಲೋಕ ಯಾವುದೇ ಒಂದು ಮೂಲಗ್ರಂಥಕ್ಕೆ ಕಟ್ಟುಬಿದ್ದಿಲ್ಲ; ಮನೆ ಮತ್ತು ದೇವಾಲಯಗಳ ಆಚರಣೆಯ ಮೂಲಕ ನಮಗೆ ಬಂದಿದೆ.",
        },
        hi: {
          translation:
            "हे वक्रतुंड, महाकाय, करोड़ों सूर्यों के समान प्रभा वाले — हे देव, मेरे सभी कार्यों को सदा विघ्नरहित करो।",
          explanation:
            "गणेश को सबसे अधिक कहा जाने वाला श्लोक, और सबसे सरल: उन्हें संबोधित करने के तीन रूप, फिर एक ही याचना। अध्ययन, यात्रा, पूजा — जिस भी कार्य में कुछ बिगड़ सकता है, उसके आरंभ में यह कहा जाता है।\n\nछपे पाठ एक स्थान पर भिन्न हैं। यहाँ की तरह अनेक 'सूर्यकोटिसमप्रभ' पढ़ते हैं; कर्नाटक में प्रचलित कुछ पाठ 'कोटिसूर्यसमप्रभ' पढ़ते हैं — वही दो शब्द दूसरे क्रम में, वही अर्थ। यह श्लोक किसी एक मूल ग्रंथ से बँधा नहीं है; यह घर और मंदिर की परंपरा के माध्यम से हम तक पहुँचा है।",
        },
      },
    },
    {
      id: "ganesha-dhyana-3",
      locator: "3",
      handle: { en: "Sun to Parvati's lotus face", kn: "ಪಾರ್ವತಿಯ ಮುಖಕಮಲಕ್ಕೆ ಸೂರ್ಯ", hi: "पार्वती के मुखकमल के सूर्य" },
      sanskrit: ["अगजाननपद्मार्कं गजाननमहर्निशम् ।", "अनेकदन्तं भक्तानामेकदन्तमुपास्महे ॥"],
      iast: ["agajānanapadmārkaṃ gajānanam aharniśam |", "anekadantaṃ bhaktānām ekadantam upāsmahe ||"],
      keywords: [
        { term: "अगजा", iast: "agajā", gloss: { en: "Pārvatī — 'born of the mountain'", kn: "ಪಾರ್ವತಿ — 'ಪರ್ವತದಲ್ಲಿ ಹುಟ್ಟಿದವಳು'", hi: "पार्वती — 'पर्वत से जन्मी'" } },
        { term: "पद्मार्कम्", iast: "padmārkam", gloss: { en: "the sun to a lotus", kn: "ಕಮಲಕ್ಕೆ ಸೂರ್ಯನಾದವನು", hi: "कमल के लिए सूर्य" } },
        { term: "अहर्निशम्", iast: "aharniśam", gloss: { en: "day and night", kn: "ಹಗಲಿರುಳು", hi: "दिन-रात" } },
        { term: "अनेकदं तम्", iast: "anekadaṃ tam", gloss: { en: "him who gives many gifts", kn: "ಅನೇಕವನ್ನು ಕೊಡುವ ಅವನನ್ನು", hi: "अनेक देने वाले उनको" } },
        { term: "एकदन्तम्", iast: "ekadantam", gloss: { en: "the one-tusked", kn: "ಏಕದಂತನನ್ನು", hi: "एकदंत को" } },
        { term: "उपास्महे", iast: "upāsmahe", gloss: { en: "we worship, we sit near", kn: "ಉಪಾಸಿಸುತ್ತೇವೆ", hi: "हम उपासना करते हैं" } },
      ],
      readings: {
        en: {
          translation:
            "Day and night we worship the elephant-faced one, the sun that opens the lotus of Pārvatī's face — the one-tusked, who gives his devotees many gifts.",
          explanation:
            "A verse built on two plays. Agajā, 'born of the mountain', is Pārvatī, and her son is the sun to the lotus of her face: as the sun opens a lotus, the sight of him makes her face bloom.\n\nThe second line hides a pun in plain sight. Anekadantam looks like 'many-tusked', but it divides as anekadaṃ tam, 'him who gives many things', and it is set right beside ekadantam, 'the one-tusked'. One tusk, and gifts without number. The verse comes from the Āgama literature, where it follows the Śuklāmbaradharam.",
        },
        kn: {
          translation:
            "ಪಾರ್ವತಿಯ ಮುಖಕಮಲಕ್ಕೆ ಸೂರ್ಯನಂತಿರುವ ಗಜಾನನನನ್ನು ಹಗಲಿರುಳು ಉಪಾಸಿಸುತ್ತೇವೆ — ಭಕ್ತರಿಗೆ ಅನೇಕವನ್ನು ಕೊಡುವ ಏಕದಂತನನ್ನು.",
          explanation:
            "ಎರಡು ಶ್ಲೇಷೆಗಳ ಮೇಲೆ ಕಟ್ಟಿದ ಶ್ಲೋಕ. ಅಗಜಾ — 'ಪರ್ವತದಲ್ಲಿ ಹುಟ್ಟಿದವಳು' — ಎಂದರೆ ಪಾರ್ವತಿ; ಅವಳ ಮಗನು ಅವಳ ಮುಖಕಮಲಕ್ಕೆ ಸೂರ್ಯ: ಸೂರ್ಯನು ಕಮಲವನ್ನು ಅರಳಿಸುವಂತೆ, ಅವನನ್ನು ಕಂಡಾಗ ಅವಳ ಮುಖ ಅರಳುತ್ತದೆ.\n\nಎರಡನೆಯ ಪಾದದಲ್ಲಿ ಶ್ಲೇಷೆ ಕಣ್ಣೆದುರೇ ಅಡಗಿದೆ. 'ಅನೇಕದಂತಂ' ಎಂಬುದು 'ಅನೇಕ ದಂತಗಳುಳ್ಳವನು' ಎಂಬಂತೆ ಕಾಣುತ್ತದೆ, ಆದರೆ 'ಅನೇಕದಂ ತಂ' — 'ಅನೇಕವನ್ನು ಕೊಡುವ ಅವನನ್ನು' — ಎಂದು ಬಿಡಿಸಿಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು ಅದರ ಪಕ್ಕದಲ್ಲೇ 'ಏಕದಂತಂ' — 'ಒಂದೇ ದಂತದವನು' — ಇದೆ. ಒಂದೇ ದಂತ, ಲೆಕ್ಕವಿಲ್ಲದಷ್ಟು ವರಗಳು. ಈ ಶ್ಲೋಕ ಆಗಮ ಸಾಹಿತ್ಯದಿಂದ ಬಂದದ್ದು; ಅಲ್ಲಿ ಇದು ಶುಕ್ಲಾಂಬರಧರಂ ಶ್ಲೋಕದ ನಂತರ ಬರುತ್ತದೆ.",
        },
        hi: {
          translation:
            "पार्वती के मुखकमल के सूर्य, गजानन की हम दिन-रात उपासना करते हैं — उन एकदंत की, जो भक्तों को अनेक वर देते हैं।",
          explanation:
            "दो श्लेषों पर रचा श्लोक। अगजा — 'पर्वत से जन्मी' — पार्वती हैं, और उनका पुत्र उनके मुखकमल का सूर्य है: जैसे सूर्य कमल को खिलाता है, वैसे ही उसे देखकर उनका मुख खिल उठता है।\n\nदूसरे पाद में श्लेष आँखों के सामने छिपा है। 'अनेकदन्तं' 'अनेक दाँतों वाला' जैसा दिखता है, पर 'अनेकदं तं' — 'अनेक देने वाले उनको' — में विभक्त होता है, और ठीक उसके पास 'एकदन्तं' — 'एक दाँत वाले' — रखा है। एक दाँत, और अनगिनत वर। यह श्लोक आगम साहित्य से आता है, जहाँ यह शुक्लाम्बरधरं के बाद आता है।",
        },
      },
    },
    {
      id: "ganesha-dhyana-4",
      locator: "4",
      handle: { en: "Rider of the mouse", kn: "ಮೂಷಿಕವಾಹನ", hi: "मूषकवाहन" },
      sanskrit: ["मूषिकवाहन मोदकहस्त", "चामरकर्ण विलम्बितसूत्र ।", "वामनरूप महेश्वरपुत्र", "विघ्नविनायक पाद नमस्ते ॥"],
      iast: ["mūṣikavāhana modakahasta", "cāmarakarṇa vilambitasūtra |", "vāmanarūpa maheśvaraputra", "vighnavināyaka pāda namaste ||"],
      keywords: [
        { term: "मूषिकवाहन", iast: "mūṣikavāhana", gloss: { en: "you whose mount is the mouse", kn: "ಇಲಿಯನ್ನು ವಾಹನವಾಗಿ ಉಳ್ಳವನೇ", hi: "हे मूषक पर सवार" } },
        { term: "मोदकहस्त", iast: "modakahasta", gloss: { en: "modaka in hand", kn: "ಕೈಯಲ್ಲಿ ಮೋದಕವುಳ್ಳವನೇ", hi: "हाथ में मोदक लिए" } },
        { term: "चामरकर्ण", iast: "cāmarakarṇa", gloss: { en: "ears wide as fans", kn: "ಚಾಮರದಂತಹ ಕಿವಿಗಳುಳ್ಳವನೇ", hi: "चँवर जैसे कानों वाले" } },
        { term: "विलम्बितसूत्र", iast: "vilambitasūtra", gloss: { en: "sacred thread hanging low", kn: "ಇಳಿಬಿದ್ದ ಯಜ್ಞಸೂತ್ರವುಳ್ಳವನೇ", hi: "लटकते यज्ञसूत्र वाले" } },
        { term: "वामनरूप", iast: "vāmanarūpa", gloss: { en: "short of stature", kn: "ಕುಳ್ಳನೆಯ ರೂಪದವನೇ", hi: "वामन रूप वाले" } },
      ],
      readings: {
        en: {
          translation:
            "Rider of the mouse, modaka in hand, ears wide as fans, sacred thread hanging low; short of stature, son of Maheśvara, Vināyaka who removes obstacles — I bow at your feet.",
          explanation:
            "A portrait in the vocative. Every word but the last two addresses him by something you would see in an image of him: the mouse he rides, the sweet in his hand, the great ears, the sacred thread across the belly, the small stature.\n\nThe rhythm is quick and even, four beats to a line, and easy for a child to keep, which is why this is so often the first Gaṇeśa verse learned. It opens a Vināyaka stotra, and is said on its own at the start of the day.",
        },
        kn: {
          translation:
            "ಇಲಿಯನ್ನು ವಾಹನವಾಗಿ ಉಳ್ಳವನೇ, ಕೈಯಲ್ಲಿ ಮೋದಕವುಳ್ಳವನೇ, ಚಾಮರದಂತಹ ಕಿವಿಗಳವನೇ, ಇಳಿಬಿದ್ದ ಯಜ್ಞಸೂತ್ರದವನೇ; ಕುಳ್ಳನೆಯ ರೂಪದವನೇ, ಮಹೇಶ್ವರನ ಪುತ್ರನೇ, ವಿಘ್ನಗಳನ್ನು ನಿವಾರಿಸುವ ವಿನಾಯಕನೇ — ನಿನ್ನ ಪಾದಗಳಿಗೆ ನಮಸ್ಕಾರ.",
          explanation:
            "ಸಂಬೋಧನೆಗಳಲ್ಲೇ ಬಿಡಿಸಿದ ಒಂದು ಚಿತ್ರ. ಕೊನೆಯ ಎರಡು ಪದಗಳನ್ನು ಬಿಟ್ಟು ಉಳಿದ ಪ್ರತಿಯೊಂದು ಪದವೂ ಅವನ ಮೂರ್ತಿಯಲ್ಲಿ ಕಾಣುವ ಒಂದೊಂದು ಅಂಶದಿಂದ ಅವನನ್ನು ಕರೆಯುತ್ತದೆ: ಅವನು ಏರುವ ಇಲಿ, ಕೈಯಲ್ಲಿನ ಸಿಹಿ, ದೊಡ್ಡ ಕಿವಿಗಳು, ಹೊಟ್ಟೆಯ ಮೇಲೆ ಇಳಿಬಿದ್ದ ಯಜ್ಞಸೂತ್ರ, ಕುಳ್ಳನೆಯ ರೂಪ.\n\nಲಯ ವೇಗವಾದದ್ದು, ಸಮನಾದದ್ದು — ಪ್ರತಿ ಸಾಲಿಗೆ ನಾಲ್ಕು ಬಡಿತಗಳು — ಮಗುವೂ ಸುಲಭವಾಗಿ ಹಿಡಿಯಬಲ್ಲದು; ಆದ್ದರಿಂದಲೇ ಬಹಳ ಮಂದಿ ಕಲಿಯುವ ಮೊದಲ ಗಣೇಶ ಶ್ಲೋಕ ಇದು. ಇದು ಒಂದು ವಿನಾಯಕ ಸ್ತೋತ್ರವನ್ನು ಆರಂಭಿಸುತ್ತದೆ, ಮತ್ತು ದಿನದ ಆರಂಭದಲ್ಲಿ ಒಂಟಿಯಾಗಿಯೂ ಹೇಳಲಾಗುತ್ತದೆ.",
        },
        hi: {
          translation:
            "हे मूषकवाहन, हाथ में मोदक लिए, चँवर जैसे कानों वाले, लटकते यज्ञसूत्र वाले; वामन रूप, महेश्वर के पुत्र, विघ्नों को हरने वाले विनायक — आपके चरणों में नमस्कार।",
          explanation:
            "संबोधनों में ही बना एक चित्र। अंतिम दो शब्दों को छोड़ हर शब्द उन्हें उनकी प्रतिमा में दिखने वाली किसी वस्तु से पुकारता है: वे जिस मूषक पर चलते हैं, हाथ की मिठाई, बड़े कान, पेट पर लटकता यज्ञसूत्र, छोटा कद।\n\nलय तेज़ और सम है — हर पंक्ति में चार ताल — जिसे बच्चा भी आसानी से पकड़ ले; इसीलिए बहुत से लोगों का सीखा पहला गणेश श्लोक यही होता है। यह एक विनायक स्तोत्र का आरंभ करता है, और दिन के आरंभ में अकेले भी कहा जाता है।",
        },
      },
    },
  ],
});
