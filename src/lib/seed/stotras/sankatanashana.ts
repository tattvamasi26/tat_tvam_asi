import { registerStotra } from "../stotras";

// ─────────────────────────────────────────────────────────
//  Saṅkaṭanāśana Gaṇeśa Stotram — Nārada Purāṇa.
//
//  Checked against Sanskrit Wikisource (गणेशस्तोत्रम्). Two
//  departures, both corrections of evident typing slips there:
//    · v1 स्मरेनित्यं → स्मरेन्नित्यम् (smaret + nityam; the n doubles)
//    · v8 अष्टेभ्यो → अष्टभ्यो (the dative plural of aṣṭan)
//  In v5 Wikisource reads सर्वसिद्धिकरः प्रभुः, followed here; many
//  printed texts read सर्वसिद्धिकरं प्रभो. The commentary notes it.
// ─────────────────────────────────────────────────────────

registerStotra({
  slug: "sankatanashana-ganesha-stotram",
  textId: "t-stuti-sankatanashana",
  devata: "ganesha",
  group: "stotra",
  order: 8,
  category: "smriti",
  metre: "anuṣṭubh",
  origin: { en: "Narada Purana", kn: "ನಾರದ ಪುರಾಣ", hi: "नारद पुराण" },
  composer: { en: "Narada", kn: "ನಾರದ", hi: "नारद" },
  video: { id: "8r7AWFkjVpw", title: "Pranamya Shirasa Devam, with lyrics", channel: "Rajshri Soul" },
  verses: [
    {
      id: "sankatanashana-1",
      locator: "1",
      handle: { en: "Bowing to Gauri's son", kn: "ಗೌರೀಪುತ್ರನಿಗೆ ನಮಿಸಿ", hi: "गौरीपुत्र को प्रणाम" },
      sanskrit: ["प्रणम्य शिरसा देवं गौरीपुत्रं विनायकम् ।", "भक्तावासं स्मरेन्नित्यमायुःकामार्थसिद्धये ॥"],
      iast: ["praṇamya śirasā devaṃ gaurīputraṃ vināyakam |", "bhaktāvāsaṃ smaren nityam āyuḥkāmārthasiddhaye ||"],
      keywords: [
        { term: "प्रणम्य शिरसा", iast: "praṇamya śirasā", gloss: { en: "bowing the head", kn: "ತಲೆಬಾಗಿ ನಮಿಸಿ", hi: "सिर झुकाकर प्रणाम करके" } },
        { term: "गौरीपुत्रम्", iast: "gaurīputram", gloss: { en: "the son of Gaurī", kn: "ಗೌರಿಯ ಮಗನನ್ನು", hi: "गौरी के पुत्र को" } },
        { term: "भक्तावासम्", iast: "bhaktāvāsam", gloss: { en: "who makes his home in his devotees", kn: "ಭಕ್ತರಲ್ಲಿ ನೆಲೆಸಿರುವವನು", hi: "भक्तों में निवास करने वाले" } },
        { term: "आयुःकामार्थसिद्धये", iast: "āyuḥkāmārthasiddhaye", gloss: { en: "for long life, desire and livelihood to be fulfilled", kn: "ಆಯುಸ್ಸು, ಕಾಮ, ಅರ್ಥಗಳ ಸಿದ್ಧಿಗಾಗಿ", hi: "आयु, काम और अर्थ की सिद्धि के लिए" } },
      ],
      readings: {
        en: {
          translation:
            "Bowing the head to the god Vināyaka, son of Gaurī, who makes his home in his devotees, one should remember him every day — for long life, and for what one desires and needs to come to pass.",
          explanation:
            "Nārada speaks, and the stotra opens as instruction rather than address: bow first, then remember. What it offers is a practice more than a hymn — twelve names to be said in order — and its first verse states its purpose as plainly as the Purāṇas do: āyus, kāma, artha — life, what one wants, what one lives by.",
        },
        kn: {
          translation:
            "ಭಕ್ತರಲ್ಲಿ ನೆಲೆಸಿರುವ, ಗೌರೀಪುತ್ರನಾದ ವಿನಾಯಕದೇವನಿಗೆ ತಲೆಬಾಗಿ ನಮಿಸಿ, ಅವನನ್ನು ನಿತ್ಯವೂ ಸ್ಮರಿಸಬೇಕು — ಆಯುಸ್ಸು, ಬಯಕೆ ಮತ್ತು ಜೀವನೋಪಾಯಗಳ ಸಿದ್ಧಿಗಾಗಿ.",
          explanation:
            "ನಾರದರು ಹೇಳುತ್ತಾರೆ, ಮತ್ತು ಸ್ತೋತ್ರ ಸಂಬೋಧನೆಯಾಗಿ ಅಲ್ಲ, ಉಪದೇಶವಾಗಿ ಆರಂಭವಾಗುತ್ತದೆ: ಮೊದಲು ನಮಿಸು, ನಂತರ ಸ್ಮರಿಸು. ಇದು ನೀಡುವುದು ಸ್ತುತಿಗಿಂತ ಹೆಚ್ಚಾಗಿ ಒಂದು ಅಭ್ಯಾಸ — ಕ್ರಮವಾಗಿ ಹೇಳಬೇಕಾದ ಹನ್ನೆರಡು ನಾಮಗಳು — ಮತ್ತು ಮೊದಲ ಶ್ಲೋಕವೇ ಪುರಾಣಗಳ ಶೈಲಿಯಲ್ಲಿ ತನ್ನ ಉದ್ದೇಶವನ್ನು ನೇರವಾಗಿ ಹೇಳುತ್ತದೆ: ಆಯುಸ್ಸು, ಕಾಮ, ಅರ್ಥ — ಬದುಕು, ಬಯಕೆ, ಬದುಕುವ ದಾರಿ.",
        },
        hi: {
          translation:
            "भक्तों में निवास करने वाले, गौरीपुत्र विनायक देव को सिर झुकाकर प्रणाम करके उनका नित्य स्मरण करना चाहिए — आयु, कामना और अर्थ की सिद्धि के लिए।",
          explanation:
            "नारद बोलते हैं, और स्तोत्र संबोधन के रूप में नहीं, उपदेश के रूप में आरंभ होता है: पहले प्रणाम, फिर स्मरण। यह स्तुति से अधिक एक अभ्यास देता है — क्रम से कहे जाने वाले बारह नाम — और पहला श्लोक पुराणों की शैली में अपना प्रयोजन सीधे कहता है: आयु, काम, अर्थ — जीवन, इच्छा, और जीविका।",
        },
      },
    },
    {
      id: "sankatanashana-2",
      locator: "2",
      handle: { en: "Names one to four", kn: "ಮೊದಲ ನಾಲ್ಕು ನಾಮಗಳು", hi: "पहले चार नाम" },
      sanskrit: ["प्रथमं वक्रतुण्डं च एकदन्तं द्वितीयकम् ।", "तृतीयं कृष्णपिङ्गाक्षं गजवक्त्रं चतुर्थकम् ॥"],
      iast: ["prathamaṃ vakratuṇḍaṃ ca ekadantaṃ dvitīyakam |", "tṛtīyaṃ kṛṣṇapiṅgākṣaṃ gajavaktraṃ caturthakam ||"],
      keywords: [
        { term: "वक्रतुण्डम्", iast: "vakratuṇḍam", gloss: { en: "the curved trunk", kn: "ವಕ್ರತುಂಡ, ಬಾಗಿದ ಸೊಂಡಿಲಿನವನು", hi: "वक्रतुंड, मुड़ी सूँड वाले" } },
        { term: "एकदन्तम्", iast: "ekadantam", gloss: { en: "the one tusk", kn: "ಏಕದಂತ", hi: "एकदंत" } },
        { term: "कृष्णपिङ्गाक्षम्", iast: "kṛṣṇapiṅgākṣam", gloss: { en: "of dark and tawny eyes", kn: "ಕಪ್ಪು-ಪಿಂಗಳ ಕಣ್ಣುಗಳವನು", hi: "काली-पिंगल आँखों वाले" } },
        { term: "गजवक्त्रम्", iast: "gajavaktram", gloss: { en: "the elephant-faced", kn: "ಗಜಮುಖ", hi: "गजमुख" } },
      ],
      readings: {
        en: {
          translation:
            "First, Vakratuṇḍa, the curved trunk; second, Ekadanta, the one tusk; third, Kṛṣṇapiṅgākṣa, of dark and tawny eyes; fourth, Gajavaktra, the elephant-faced.",
          explanation:
            "The names come with their numbers, so the verse is also a way of keeping count: the ordinals — prathamam, dvitīyakam, tṛtīyam, caturthakam — carry the recitation along. Each name is a feature of his form, as someone standing before an image would see it.",
        },
        kn: {
          translation:
            "ಮೊದಲನೆಯದು ವಕ್ರತುಂಡ; ಎರಡನೆಯದು ಏಕದಂತ; ಮೂರನೆಯದು ಕೃಷ್ಣಪಿಂಗಾಕ್ಷ — ಕಪ್ಪು-ಪಿಂಗಳ ಕಣ್ಣುಗಳವನು; ನಾಲ್ಕನೆಯದು ಗಜವಕ್ತ್ರ — ಗಜಮುಖ.",
          explanation:
            "ನಾಮಗಳು ತಮ್ಮ ಸಂಖ್ಯೆಗಳೊಂದಿಗೇ ಬರುತ್ತವೆ, ಹೀಗಾಗಿ ಶ್ಲೋಕ ಲೆಕ್ಕ ಇಟ್ಟುಕೊಳ್ಳುವ ದಾರಿಯೂ ಹೌದು: ಪ್ರಥಮಂ, ದ್ವಿತೀಯಕಂ, ತೃತೀಯಂ, ಚತುರ್ಥಕಂ ಎಂಬ ಕ್ರಮಸಂಖ್ಯೆಗಳು ಪಠಣವನ್ನು ಮುನ್ನಡೆಸುತ್ತವೆ. ಪ್ರತಿ ನಾಮವೂ ಮೂರ್ತಿಯ ಮುಂದೆ ನಿಂತವನು ಕಾಣುವ ಅವನ ರೂಪದ ಒಂದು ಲಕ್ಷಣ.",
        },
        hi: {
          translation:
            "पहला, वक्रतुंड; दूसरा, एकदंत; तीसरा, कृष्णपिंगाक्ष — काली-पिंगल आँखों वाले; चौथा, गजवक्त्र — गजमुख।",
          explanation:
            "नाम अपनी संख्याओं के साथ आते हैं, इसलिए श्लोक गिनती रखने का साधन भी है: प्रथमं, द्वितीयकं, तृतीयं, चतुर्थकं — ये क्रमसंख्याएँ पाठ को आगे बढ़ाती हैं। हर नाम उनके रूप की एक विशेषता है, जैसी प्रतिमा के सामने खड़ा व्यक्ति देखता है।",
        },
      },
    },
    {
      id: "sankatanashana-3",
      locator: "3",
      handle: { en: "Names five to eight", kn: "ಐದರಿಂದ ಎಂಟನೆಯ ನಾಮ", hi: "पाँचवें से आठवें नाम" },
      sanskrit: ["लम्बोदरं पञ्चमं च षष्ठं विकटमेव च ।", "सप्तमं विघ्नराजेन्द्रं धूम्रवर्णं तथाष्टमम् ॥"],
      iast: ["lambodaraṃ pañcamaṃ ca ṣaṣṭhaṃ vikaṭam eva ca |", "saptamaṃ vighnarājendraṃ dhūmravarṇaṃ tathāṣṭamam ||"],
      keywords: [
        { term: "लम्बोदरम्", iast: "lambodaram", gloss: { en: "the great-bellied", kn: "ಲಂಬೋದರ, ದೊಡ್ಡ ಹೊಟ್ಟೆಯವನು", hi: "लंबोदर, बड़े पेट वाले" } },
        { term: "विकटम्", iast: "vikaṭam", gloss: { en: "the formidable, of striking form", kn: "ವಿಕಟ, ಅಸಾಮಾನ್ಯ ರೂಪದವನು", hi: "विकट, विलक्षण रूप वाले" } },
        { term: "विघ्नराजेन्द्रम्", iast: "vighnarājendram", gloss: { en: "sovereign over obstacles", kn: "ವಿಘ್ನಗಳ ಅಧಿರಾಜ", hi: "विघ्नों के अधिराज" } },
        { term: "धूम्रवर्णम्", iast: "dhūmravarṇam", gloss: { en: "the smoke-coloured", kn: "ಹೊಗೆಯ ಬಣ್ಣದವನು", hi: "धूम्र वर्ण वाले" } },
      ],
      readings: {
        en: {
          translation:
            "Fifth, Lambodara, the great-bellied; sixth, Vikaṭa, the formidable; seventh, Vighnarājendra, sovereign over obstacles; and eighth, Dhūmravarṇa, the smoke-coloured.",
          explanation:
            "Vighnarājendra — king of obstacles, not only their remover — says outright what the whole tradition assumes: the obstacle is his to place and his to lift. Several of these twelve names — Vakratuṇḍa, Ekadanta, Lambodara, Vikaṭa, Vighnarāja, Dhūmravarṇa — are also the names of the eight forms in which the Mudgala Purāṇa has Gaṇeśa descend.",
        },
        kn: {
          translation:
            "ಐದನೆಯದು ಲಂಬೋದರ; ಆರನೆಯದು ವಿಕಟ; ಏಳನೆಯದು ವಿಘ್ನರಾಜೇಂದ್ರ — ವಿಘ್ನಗಳ ಅಧಿರಾಜ; ಎಂಟನೆಯದು ಧೂಮ್ರವರ್ಣ — ಹೊಗೆಯ ಬಣ್ಣದವನು.",
          explanation:
            "ವಿಘ್ನರಾಜೇಂದ್ರ — ವಿಘ್ನಗಳನ್ನು ತೊಲಗಿಸುವವನಷ್ಟೇ ಅಲ್ಲ, ಅವುಗಳ ರಾಜ — ಇಡೀ ಪರಂಪರೆ ಊಹಿಸಿಕೊಳ್ಳುವುದನ್ನು ನೇರವಾಗಿ ಹೇಳುತ್ತದೆ: ವಿಘ್ನವನ್ನು ಇಡುವುದೂ ಅವನದೇ, ತೆಗೆಯುವುದೂ ಅವನದೇ. ಈ ಹನ್ನೆರಡರಲ್ಲಿ ಹಲವು ನಾಮಗಳು — ವಕ್ರತುಂಡ, ಏಕದಂತ, ಲಂಬೋದರ, ವಿಕಟ, ವಿಘ್ನರಾಜ, ಧೂಮ್ರವರ್ಣ — ಮುದ್ಗಲ ಪುರಾಣವು ಹೇಳುವ ಗಣೇಶನ ಎಂಟು ಅವತಾರಗಳ ಹೆಸರುಗಳೂ ಹೌದು.",
        },
        hi: {
          translation:
            "पाँचवाँ, लंबोदर; छठा, विकट; सातवाँ, विघ्नराजेंद्र — विघ्नों के अधिराज; और आठवाँ, धूम्रवर्ण — धूम्र वर्ण वाले।",
          explanation:
            "विघ्नराजेंद्र — केवल विघ्न हरने वाले नहीं, विघ्नों के राजा — वह सीधे कह देता है जो पूरी परंपरा मानकर चलती है: विघ्न रखना भी उन्हीं का है और हटाना भी। इन बारह में से कई नाम — वक्रतुंड, एकदंत, लंबोदर, विकट, विघ्नराज, धूम्रवर्ण — मुद्गल पुराण में वर्णित गणेश के आठ अवतारों के नाम भी हैं।",
        },
      },
    },
    {
      id: "sankatanashana-4",
      locator: "4",
      handle: { en: "Names nine to twelve", kn: "ಒಂಬತ್ತರಿಂದ ಹನ್ನೆರಡನೆಯ ನಾಮ", hi: "नौवें से बारहवें नाम" },
      sanskrit: ["नवमं भालचन्द्रं च दशमं तु विनायकम् ।", "एकादशं गणपतिं द्वादशं तु गजाननम् ॥"],
      iast: ["navamaṃ bhālacandraṃ ca daśamaṃ tu vināyakam |", "ekādaśaṃ gaṇapatiṃ dvādaśaṃ tu gajānanam ||"],
      keywords: [
        { term: "भालचन्द्रम्", iast: "bhālacandram", gloss: { en: "the moon on his brow", kn: "ಹಣೆಯಲ್ಲಿ ಚಂದ್ರನುಳ್ಳವನು", hi: "मस्तक पर चंद्र वाले" } },
        { term: "विनायकम्", iast: "vināyakam", gloss: { en: "the leader, with no leader above him", kn: "ತನಗಿಂತ ಮೇಲೆ ನಾಯಕನಿಲ್ಲದ ನಾಯಕ", hi: "जिनके ऊपर कोई नायक नहीं, ऐसे नायक" } },
        { term: "गणपतिम्", iast: "gaṇapatim", gloss: { en: "lord of the hosts", kn: "ಗಣಗಳ ಒಡೆಯ", hi: "गणों के स्वामी" } },
        { term: "गजाननम्", iast: "gajānanam", gloss: { en: "the elephant-faced", kn: "ಗಜಾನನ", hi: "गजानन" } },
      ],
      readings: {
        en: {
          translation:
            "Ninth, Bhālacandra, the moon on his brow; tenth, Vināyaka, the leader; eleventh, Gaṇapati, lord of the hosts; and twelfth, Gajānana, the elephant-faced.",
          explanation:
            "The list ends where its first half ended, with his face: Gajavaktra was the fourth name and Gajānana is the twelfth, one meaning in two words. Vināyaka is often explained as vi-nāyaka, 'the leader who has no leader over him'.",
        },
        kn: {
          translation:
            "ಒಂಬತ್ತನೆಯದು ಭಾಲಚಂದ್ರ — ಹಣೆಯಲ್ಲಿ ಚಂದ್ರನುಳ್ಳವನು; ಹತ್ತನೆಯದು ವಿನಾಯಕ; ಹನ್ನೊಂದನೆಯದು ಗಣಪತಿ; ಹನ್ನೆರಡನೆಯದು ಗಜಾನನ.",
          explanation:
            "ಪಟ್ಟಿಯ ಮೊದಲಾರ್ಧ ಮುಗಿದಲ್ಲೇ, ಅವನ ಮುಖದಲ್ಲೇ, ಪಟ್ಟಿ ಮುಗಿಯುತ್ತದೆ: ನಾಲ್ಕನೆಯ ನಾಮ ಗಜವಕ್ತ್ರ, ಹನ್ನೆರಡನೆಯದು ಗಜಾನನ — ಎರಡು ಪದಗಳಲ್ಲಿ ಒಂದೇ ಅರ್ಥ. 'ವಿನಾಯಕ'ವನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ವಿ-ನಾಯಕ, 'ತನ್ನ ಮೇಲೆ ಯಾವ ನಾಯಕನೂ ಇಲ್ಲದ ನಾಯಕ' ಎಂದು ವಿವರಿಸಲಾಗುತ್ತದೆ.",
        },
        hi: {
          translation:
            "नौवाँ, भालचंद्र — मस्तक पर चंद्र वाले; दसवाँ, विनायक; ग्यारहवाँ, गणपति; और बारहवाँ, गजानन।",
          explanation:
            "सूची वहीं समाप्त होती है जहाँ उसका पहला आधा समाप्त हुआ था, उनके मुख पर: चौथा नाम गजवक्त्र था और बारहवाँ गजानन है — दो शब्दों में एक ही अर्थ। 'विनायक' को प्रायः वि-नायक, 'जिनके ऊपर कोई नायक नहीं', के रूप में समझाया जाता है।",
        },
      },
    },
    {
      id: "sankatanashana-5",
      locator: "5",
      handle: { en: "At the three twilights", kn: "ಮೂರು ಸಂಧ್ಯೆಗಳಲ್ಲಿ", hi: "तीनों संध्याओं में" },
      sanskrit: ["द्वादशैतानि नामानि त्रिसन्ध्यं यः पठेन्नरः ।", "न च विघ्नभयं तस्य सर्वसिद्धिकरः प्रभुः ॥"],
      iast: ["dvādaśaitāni nāmāni trisandhyaṃ yaḥ paṭhen naraḥ |", "na ca vighnabhayaṃ tasya sarvasiddhikaraḥ prabhuḥ ||"],
      keywords: [
        { term: "त्रिसन्ध्यम्", iast: "trisandhyam", gloss: { en: "at dawn, noon and dusk", kn: "ಮುಂಜಾನೆ, ಮಧ್ಯಾಹ್ನ, ಸಂಜೆ", hi: "प्रातः, मध्याह्न और सायं" } },
        { term: "विघ्नभयम्", iast: "vighnabhayam", gloss: { en: "fear of obstacles", kn: "ವಿಘ್ನಗಳ ಭಯ", hi: "विघ्नों का भय" } },
        { term: "सर्वसिद्धिकरः", iast: "sarvasiddhikaraḥ", gloss: { en: "who brings every accomplishment", kn: "ಎಲ್ಲ ಸಿದ್ಧಿಗಳನ್ನು ನೀಡುವವನು", hi: "सब सिद्धियाँ देने वाले" } },
      ],
      readings: {
        en: {
          translation:
            "Whoever recites these twelve names at dawn, noon and dusk has no fear of obstacles; the Lord brings about every accomplishment.",
          explanation:
            "The phalaśruti begins here: the last four verses say what the practice brings, in the stotra's own words. Trisandhyam ties it to the three junctions of the day at which the Gāyatrī is said. Many printed texts end the verse sarvasiddhikaraṃ prabho, 'O Lord, it brings every accomplishment'; the text followed here reads sarvasiddhikaraḥ prabhuḥ. The sense is the same.",
        },
        kn: {
          translation:
            "ಈ ಹನ್ನೆರಡು ನಾಮಗಳನ್ನು ಮುಂಜಾನೆ, ಮಧ್ಯಾಹ್ನ, ಸಂಜೆ ಪಠಿಸುವವನಿಗೆ ವಿಘ್ನಗಳ ಭಯವಿಲ್ಲ; ಪ್ರಭುವು ಎಲ್ಲ ಸಿದ್ಧಿಗಳನ್ನೂ ಉಂಟುಮಾಡುತ್ತಾನೆ.",
          explanation:
            "ಇಲ್ಲಿಂದ ಫಲಶ್ರುತಿ ಆರಂಭ: ಕೊನೆಯ ನಾಲ್ಕು ಶ್ಲೋಕಗಳು ಈ ಅಭ್ಯಾಸ ಏನು ತರುತ್ತದೆ ಎಂಬುದನ್ನು ಸ್ತೋತ್ರದ ತನ್ನದೇ ಮಾತಿನಲ್ಲಿ ಹೇಳುತ್ತವೆ. 'ತ್ರಿಸಂಧ್ಯಂ' ಇದನ್ನು ಗಾಯತ್ರಿಯನ್ನು ಜಪಿಸುವ ದಿನದ ಅದೇ ಮೂರು ಸಂಧಿಕಾಲಗಳಿಗೆ ಜೋಡಿಸುತ್ತದೆ. ಹಲವು ಮುದ್ರಿತ ಪಾಠಗಳು ಈ ಶ್ಲೋಕವನ್ನು 'ಸರ್ವಸಿದ್ಧಿಕರಂ ಪ್ರಭೋ' ಎಂದು ಮುಗಿಸುತ್ತವೆ; ಇಲ್ಲಿ ಅನುಸರಿಸಿರುವ ಪಾಠ 'ಸರ್ವಸಿದ್ಧಿಕರಃ ಪ್ರಭುಃ'. ಅರ್ಥ ಒಂದೇ.",
        },
        hi: {
          translation:
            "जो इन बारह नामों का प्रातः, मध्याह्न और सायं पाठ करता है, उसे विघ्नों का भय नहीं रहता; प्रभु सब सिद्धियाँ प्रदान करते हैं।",
          explanation:
            "यहाँ से फलश्रुति आरंभ होती है: अंतिम चार श्लोक स्तोत्र के अपने शब्दों में बताते हैं कि यह अभ्यास क्या देता है। 'त्रिसन्ध्यं' इसे दिन की उन्हीं तीन संधियों से जोड़ता है जिनमें गायत्री जपी जाती है। अनेक छपे पाठ इस श्लोक को 'सर्वसिद्धिकरं प्रभो' पर समाप्त करते हैं; यहाँ अपनाया गया पाठ 'सर्वसिद्धिकरः प्रभुः' है। अर्थ वही है।",
        },
      },
    },
    {
      id: "sankatanashana-6",
      locator: "6",
      handle: { en: "Each gains what they seek", kn: "ಬಯಸಿದ್ದನ್ನು ಪಡೆಯುವರು", hi: "जो चाहे सो पाए" },
      sanskrit: ["विद्यार्थी लभते विद्यां धनार्थी लभते धनम् ।", "पुत्रार्थी लभते पुत्रान्मोक्षार्थी लभते गतिम् ॥"],
      iast: ["vidyārthī labhate vidyāṃ dhanārthī labhate dhanam |", "putrārthī labhate putrān mokṣārthī labhate gatim ||"],
      keywords: [
        { term: "विद्यार्थी", iast: "vidyārthī", gloss: { en: "one who seeks learning", kn: "ವಿದ್ಯೆಯನ್ನು ಬಯಸುವವನು", hi: "विद्या चाहने वाला" } },
        { term: "लभते", iast: "labhate", gloss: { en: "gains, obtains", kn: "ಪಡೆಯುತ್ತಾನೆ", hi: "पाता है" } },
        { term: "मोक्षार्थी", iast: "mokṣārthī", gloss: { en: "one who seeks liberation", kn: "ಮೋಕ್ಷವನ್ನು ಬಯಸುವವನು", hi: "मोक्ष चाहने वाला" } },
        { term: "गतिम्", iast: "gatim", gloss: { en: "the goal, the way through", kn: "ಗತಿ, ಗುರಿ", hi: "गति, परम लक्ष्य" } },
      ],
      readings: {
        en: {
          translation:
            "The seeker of learning gains learning, the seeker of wealth gains wealth; the one who longs for children gains children, and the seeker of liberation gains the goal.",
          explanation:
            "The best-known verse of the stotra, and deliberately symmetrical: four seekers, four gains, the same verb, labhate, four times. It does not rank them. Learning, wealth, children and liberation stand in one line, and the same twelve names serve all four.",
        },
        kn: {
          translation:
            "ವಿದ್ಯೆ ಬಯಸುವವನು ವಿದ್ಯೆಯನ್ನು, ಧನ ಬಯಸುವವನು ಧನವನ್ನು ಪಡೆಯುತ್ತಾನೆ; ಸಂತಾನ ಬಯಸುವವನು ಸಂತಾನವನ್ನು, ಮೋಕ್ಷ ಬಯಸುವವನು ಗತಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ.",
          explanation:
            "ಸ್ತೋತ್ರದ ಅತ್ಯಂತ ಪ್ರಸಿದ್ಧ ಶ್ಲೋಕ, ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಸಮರೂಪಿ: ನಾಲ್ಕು ಅರ್ಥಿಗಳು, ನಾಲ್ಕು ಲಾಭಗಳು, ಅದೇ ಕ್ರಿಯಾಪದ — ಲಭತೇ — ನಾಲ್ಕು ಬಾರಿ. ಇದು ಅವುಗಳಿಗೆ ಶ್ರೇಣಿ ಕೊಡುವುದಿಲ್ಲ. ವಿದ್ಯೆ, ಧನ, ಸಂತಾನ, ಮೋಕ್ಷ ಒಂದೇ ಸಾಲಿನಲ್ಲಿ ನಿಲ್ಲುತ್ತವೆ, ಮತ್ತು ಅದೇ ಹನ್ನೆರಡು ನಾಮಗಳು ನಾಲ್ಕಕ್ಕೂ ಒದಗುತ್ತವೆ.",
        },
        hi: {
          translation:
            "विद्या चाहने वाला विद्या पाता है, धन चाहने वाला धन; संतान चाहने वाला संतान पाता है, और मोक्ष चाहने वाला परम गति।",
          explanation:
            "स्तोत्र का सबसे प्रसिद्ध श्लोक, और सोच-समझकर सममित: चार याचक, चार प्राप्तियाँ, एक ही क्रिया — लभते — चार बार। यह उनमें ऊँच-नीच नहीं करता। विद्या, धन, संतान और मोक्ष एक ही पंक्ति में खड़े हैं, और वही बारह नाम चारों के काम आते हैं।",
        },
      },
    },
    {
      id: "sankatanashana-7",
      locator: "7",
      handle: { en: "Six months, a year", kn: "ಆರು ತಿಂಗಳು, ಒಂದು ವರ್ಷ", hi: "छह मास, एक वर्ष" },
      sanskrit: ["जपेद्गणपतिस्तोत्रं षड्भिर्मासैः फलं लभेत् ।", "संवत्सरेण सिद्धिं च लभते नात्र संशयः ॥"],
      iast: ["japed gaṇapatistotraṃ ṣaḍbhir māsaiḥ phalaṃ labhet |", "saṃvatsareṇa siddhiṃ ca labhate nātra saṃśayaḥ ||"],
      keywords: [
        { term: "जपेत्", iast: "japet", gloss: { en: "should recite, again and again", kn: "ಜಪಿಸಬೇಕು", hi: "जप करे" } },
        { term: "षड्भिर्मासैः", iast: "ṣaḍbhir māsaiḥ", gloss: { en: "in six months", kn: "ಆರು ತಿಂಗಳುಗಳಲ್ಲಿ", hi: "छह महीनों में" } },
        { term: "संवत्सरेण", iast: "saṃvatsareṇa", gloss: { en: "in a year", kn: "ಒಂದು ವರ್ಷದಲ್ಲಿ", hi: "एक वर्ष में" } },
        { term: "नात्र संशयः", iast: "nātra saṃśayaḥ", gloss: { en: "there is no doubt of it", kn: "ಇದರಲ್ಲಿ ಸಂಶಯವಿಲ್ಲ", hi: "इसमें संशय नहीं" } },
      ],
      readings: {
        en: {
          translation:
            "One who recites this stotra of Gaṇapati sees its fruit in six months, and in a year gains fulfilment — of this there is no doubt.",
          explanation:
            "Japa is repetition, and the verse asks for patience: six months for the first fruit, a year for siddhi. 'There is no doubt of it', nātra saṃśayaḥ, is the stock close of a phalaśruti, and is the stotra's own assurance.",
        },
        kn: {
          translation:
            "ಈ ಗಣಪತಿ ಸ್ತೋತ್ರವನ್ನು ಜಪಿಸುವವನು ಆರು ತಿಂಗಳಲ್ಲಿ ಫಲವನ್ನು ಕಾಣುತ್ತಾನೆ, ಒಂದು ವರ್ಷದಲ್ಲಿ ಸಿದ್ಧಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ — ಇದರಲ್ಲಿ ಸಂಶಯವಿಲ್ಲ.",
          explanation:
            "ಜಪ ಎಂದರೆ ಪುನರಾವರ್ತನೆ, ಮತ್ತು ಶ್ಲೋಕ ತಾಳ್ಮೆಯನ್ನು ಕೇಳುತ್ತದೆ: ಮೊದಲ ಫಲಕ್ಕೆ ಆರು ತಿಂಗಳು, ಸಿದ್ಧಿಗೆ ಒಂದು ವರ್ಷ. 'ನಾತ್ರ ಸಂಶಯಃ' — 'ಇದರಲ್ಲಿ ಸಂಶಯವಿಲ್ಲ' — ಫಲಶ್ರುತಿಯ ರೂಢಿಯ ಮುಕ್ತಾಯ; ಇದು ಸ್ತೋತ್ರದ ತನ್ನದೇ ಭರವಸೆ.",
        },
        hi: {
          translation:
            "जो इस गणपति स्तोत्र का जप करता है, वह छह महीनों में फल देखता है और एक वर्ष में सिद्धि पाता है — इसमें संशय नहीं।",
          explanation:
            "जप का अर्थ है आवृत्ति, और श्लोक धैर्य माँगता है: पहले फल के लिए छह महीने, सिद्धि के लिए एक वर्ष। 'नात्र संशयः' — 'इसमें संशय नहीं' — फलश्रुति का प्रचलित समापन है, और यह स्तोत्र का अपना आश्वासन है।",
        },
      },
    },
    {
      id: "sankatanashana-8",
      locator: "8",
      handle: { en: "Written out and given", kn: "ಬರೆದು ಸಮರ್ಪಿಸಿದರೆ", hi: "लिखकर समर्पित करे" },
      sanskrit: ["अष्टभ्यो ब्राह्मणेभ्यश्च लिखित्वा यः समर्पयेत् ।", "तस्य विद्या भवेत्सर्वा गणेशस्य प्रसादतः ॥"],
      iast: ["aṣṭabhyo brāhmaṇebhyaś ca likhitvā yaḥ samarpayet |", "tasya vidyā bhavet sarvā gaṇeśasya prasādataḥ ||"],
      keywords: [
        { term: "अष्टभ्यः", iast: "aṣṭabhyaḥ", gloss: { en: "to eight", kn: "ಎಂಟು ಜನರಿಗೆ", hi: "आठ को" } },
        { term: "लिखित्वा", iast: "likhitvā", gloss: { en: "having written it out", kn: "ಬರೆದು", hi: "लिखकर" } },
        { term: "समर्पयेत्", iast: "samarpayet", gloss: { en: "should offer, hand over", kn: "ಸಮರ್ಪಿಸಬೇಕು", hi: "समर्पित करे" } },
        { term: "प्रसादतः", iast: "prasādataḥ", gloss: { en: "by the grace of", kn: "ಅನುಗ್ರಹದಿಂದ", hi: "कृपा से" } },
      ],
      readings: {
        en: {
          translation:
            "Whoever writes it out and offers it to eight brāhmaṇas — by Gaṇeśa's grace, all learning becomes theirs.",
          explanation:
            "The last verse asks for the text to be copied by hand and given away, which is how a stotra travelled before print: one copy became eight. The colophon names the source — iti śrī-nārada-purāṇe saṅkaṭanāśanaṃ gaṇeśa-stotraṃ sampūrṇam, 'thus ends, from the Nārada Purāṇa, the Gaṇeśa stotra that destroys distress'.",
        },
        kn: {
          translation:
            "ಇದನ್ನು ಬರೆದು ಎಂಟು ಬ್ರಾಹ್ಮಣರಿಗೆ ಸಮರ್ಪಿಸುವವನಿಗೆ — ಗಣೇಶನ ಅನುಗ್ರಹದಿಂದ ಎಲ್ಲ ವಿದ್ಯೆಯೂ ಲಭಿಸುತ್ತದೆ.",
          explanation:
            "ಕೊನೆಯ ಶ್ಲೋಕ ಪಠ್ಯವನ್ನು ಕೈಯಿಂದ ಬರೆದು ಇತರರಿಗೆ ನೀಡಲು ಕೇಳುತ್ತದೆ — ಮುದ್ರಣಕ್ಕೆ ಮೊದಲು ಸ್ತೋತ್ರಗಳು ಹರಡುತ್ತಿದ್ದುದು ಹೀಗೆಯೇ: ಒಂದು ಪ್ರತಿ ಎಂಟಾಗುತ್ತಿತ್ತು. ಸಮಾಪ್ತಿವಾಕ್ಯ ಮೂಲವನ್ನು ಹೆಸರಿಸುತ್ತದೆ — ಇತಿ ಶ್ರೀನಾರದಪುರಾಣೇ ಸಂಕಟನಾಶನಂ ಗಣೇಶಸ್ತೋತ್ರಂ ಸಂಪೂರ್ಣಂ, 'ಹೀಗೆ ನಾರದ ಪುರಾಣದ ಸಂಕಟನಾಶನ ಗಣೇಶ ಸ್ತೋತ್ರ ಸಂಪೂರ್ಣ'.",
        },
        hi: {
          translation:
            "जो इसे लिखकर आठ ब्राह्मणों को समर्पित करता है — गणेश की कृपा से उसे सारी विद्या प्राप्त होती है।",
          explanation:
            "अंतिम श्लोक पाठ को हाथ से लिखकर दूसरों को देने को कहता है — छपाई से पहले स्तोत्र ऐसे ही फैलते थे: एक प्रति आठ बन जाती थी। पुष्पिका स्रोत का नाम देती है — इति श्रीनारदपुराणे संकटनाशनं गणेशस्तोत्रं सम्पूर्णम्, 'इस प्रकार नारद पुराण का संकटनाशन गणेश स्तोत्र संपूर्ण हुआ'।",
        },
      },
    },
  ],
});
