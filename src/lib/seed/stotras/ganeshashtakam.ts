import { registerStotra } from "../stotras";

// ─────────────────────────────────────────────────────────
//  Gaṇeśāṣṭakam — eight verses sung by all the beings Kaśyapa had
//  brought forth, from the Gaṇeśa Purāṇa (Upāsanā-khaṇḍa 91.44–51),
//  with the verse Gaṇeśa speaks after it (92.8) as its phala.
//
//  Checked against two texts on Sanskrit Wikisource: the Purāṇa's
//  chapters 91–92, and the Aṣṭakam as printed in the Bṛhat Stotra
//  Ratnākara (1953), whose OCR slips the Purāṇa settles. Where the two
//  differ in a word, the stotra edition is followed, as recitations
//  are:
//    · v1 अप्रमेया गुणास्ते — the Purāṇa has अप्रमेयाद् गुणास्ते
//    · v2 देवसङ्घा — the Purāṇa has दैत्यसंघा
//    · v5 भक्तसन्तोषिकाः — the Purāṇa has भक्तसंतोषकः
//    · v6 यतोऽभक्तविघ्नाः — the Purāṇa has यतो भक्तिविद्याः
//    · v8 यत्ता गृणन्ति — the Purāṇa has ता यं गृणन्ति
//  The Purāṇa goes on with more verses on the fruit of reciting it;
//  the stotra edition keeps only the one entered here.
// ─────────────────────────────────────────────────────────

const REFRAIN = "सदा तं गणेशं नमामो भजामः ॥";
const REFRAIN_IAST = "sadā taṃ gaṇeśaṃ namāmo bhajāmaḥ ||";

const REFRAIN_EN = "— that Gaṇeśa we always bow to and worship.";
const REFRAIN_KN = "— ಆ ಗಣೇಶನಿಗೆ ಸದಾ ನಮಿಸುತ್ತೇವೆ, ಅವನನ್ನು ಭಜಿಸುತ್ತೇವೆ.";
const REFRAIN_HI = "— उन गणेश को हम सदा नमन करते हैं, उनका भजन करते हैं।";

registerStotra({
  slug: "ganeshashtakam",
  textId: "t-stuti-ganeshashtakam",
  devata: "ganesha",
  group: "stotra",
  order: 10,
  category: "smriti",
  metre: "bhujaṅgaprayāta",
  origin: { en: "Ganesha Purana", kn: "ಗಣೇಶ ಪುರಾಣ", hi: "गणेश पुराण" },
  video: {
    id: "UsJMB7Yuh1s",
    title: "Sri Ganesha Ashtakam",
    channel: "Madman Dreams Entertainment Studio",
  },
  verses: [
    {
      id: "ganeshashtakam-1",
      locator: "1",
      sanskrit: ["यतोऽनन्तशक्तेरनन्ताश्च जीवा", "यतो निर्गुणादप्रमेया गुणास्ते ।", "यतो भाति सर्वं त्रिधा भेदभिन्नं", REFRAIN],
      iast: ["yato 'nantaśakter anantāś ca jīvā", "yato nirguṇād aprameyā guṇās te |", "yato bhāti sarvaṃ tridhā bhedabhinnaṃ", REFRAIN_IAST],
      readings: {
        en: { translation: `From whom, of endless power, come the countless living beings; from whom, beyond all qualities, come the qualities past measuring; through whom all this shines, divided in three ${REFRAIN_EN}` },
        kn: { translation: `ಅನಂತ ಶಕ್ತಿಯುಳ್ಳ ಯಾರಿಂದ ಅಸಂಖ್ಯ ಜೀವಿಗಳು ಹುಟ್ಟುತ್ತವೆಯೋ, ಗುಣಾತೀತನಾದ ಯಾರಿಂದ ಅಳೆಯಲಾಗದ ಗುಣಗಳು ಬರುತ್ತವೆಯೋ, ಮೂರು ಬಗೆಯಾಗಿ ಭಿನ್ನವಾದ ಇದೆಲ್ಲವೂ ಯಾರಿಂದ ಬೆಳಗುತ್ತದೆಯೋ ${REFRAIN_KN}` },
        hi: { translation: `जिन अनंत शक्ति वाले से अनंत जीव उत्पन्न होते हैं, जिन गुणातीत से अपार गुण आते हैं, जिनसे तीन प्रकार से भिन्न यह सब प्रकाशित होता है ${REFRAIN_HI}` },
      },
    },
    {
      id: "ganeshashtakam-2",
      locator: "2",
      sanskrit: ["यतश्चाविरासीज्जगत्सर्वमेतत्", "तथाब्जासनो विश्वगो विश्वगोप्ता ।", "तथेन्द्रादयो देवसङ्घा मनुष्याः", REFRAIN],
      iast: ["yataś cāvirāsīj jagat sarvam etat", "tathābjāsano viśvago viśvagoptā |", "tathendrādayo devasaṅghā manuṣyāḥ", REFRAIN_IAST],
      readings: {
        en: { translation: `From whom this whole world came forth; so too Brahmā on his lotus, and the all-pervading protector of the world; so too Indra and the hosts of gods, and men ${REFRAIN_EN}` },
        kn: { translation: `ಯಾರಿಂದ ಈ ಜಗತ್ತೆಲ್ಲವೂ ಆವಿರ್ಭವಿಸಿತೋ, ಹಾಗೆಯೇ ಕಮಲಾಸನನಾದ ಬ್ರಹ್ಮನೂ ಸರ್ವವ್ಯಾಪಿಯಾದ ಜಗದ್ರಕ್ಷಕನೂ, ಹಾಗೆಯೇ ಇಂದ್ರಾದಿ ದೇವಗಣಗಳೂ ಮನುಷ್ಯರೂ ಯಾರಿಂದ ಬಂದರೋ ${REFRAIN_KN}` },
        hi: { translation: `जिनसे यह सारा जगत प्रकट हुआ, वैसे ही कमलासन ब्रह्मा और सर्वव्यापी जगत्पालक, वैसे ही इंद्र आदि देवगण और मनुष्य ${REFRAIN_HI}` },
      },
    },
    {
      id: "ganeshashtakam-3",
      locator: "3",
      sanskrit: ["यतो वह्निभानू भवो भूर्जलं च", "यतः सागराश्चन्द्रमा व्योम वायुः ।", "यतः स्थावरा जङ्गमा वृक्षसङ्घाः", REFRAIN],
      iast: ["yato vahnibhānū bhavo bhūr jalaṃ ca", "yataḥ sāgarāś candramā vyoma vāyuḥ |", "yataḥ sthāvarā jaṅgamā vṛkṣasaṅghāḥ", REFRAIN_IAST],
      readings: {
        en: { translation: `From whom come fire and the sun, Śiva, the earth and water; from whom the oceans, the moon, the sky and the wind; from whom all that stands still and all that moves, and the multitudes of trees ${REFRAIN_EN}` },
        kn: { translation: `ಯಾರಿಂದ ಅಗ್ನಿ, ಸೂರ್ಯ, ಶಿವ, ಭೂಮಿ, ನೀರು ಬರುತ್ತವೆಯೋ, ಯಾರಿಂದ ಸಾಗರಗಳು, ಚಂದ್ರ, ಆಕಾಶ, ವಾಯು ಬರುತ್ತವೆಯೋ, ಯಾರಿಂದ ಸ್ಥಾವರ ಜಂಗಮಗಳೂ ವೃಕ್ಷಸಮೂಹಗಳೂ ಬರುತ್ತವೆಯೋ ${REFRAIN_KN}` },
        hi: { translation: `जिनसे अग्नि और सूर्य, शिव, पृथ्वी और जल आते हैं, जिनसे सागर, चंद्रमा, आकाश और वायु आते हैं, जिनसे स्थावर-जंगम और वृक्षों के समूह आते हैं ${REFRAIN_HI}` },
      },
    },
    {
      id: "ganeshashtakam-4",
      locator: "4",
      sanskrit: ["यतो दानवाः किन्नरा यक्षसङ्घा", "यतश्चारणा वारणाः श्वापदाश्च ।", "यतः पक्षिकीटा यतो वीरुधश्च", REFRAIN],
      iast: ["yato dānavāḥ kinnarā yakṣasaṅghā", "yataś cāraṇā vāraṇāḥ śvāpadāś ca |", "yataḥ pakṣikīṭā yato vīrudhaś ca", REFRAIN_IAST],
      readings: {
        en: { translation: `From whom come the dānavas, the kinnaras and the hosts of yakṣas; from whom the cāraṇas, the elephants and the wild beasts; from whom the birds and insects, and the creepers and plants ${REFRAIN_EN}` },
        kn: { translation: `ಯಾರಿಂದ ದಾನವರು, ಕಿನ್ನರರು, ಯಕ್ಷಗಣಗಳು ಬರುತ್ತಾರೋ, ಯಾರಿಂದ ಚಾರಣರು, ಆನೆಗಳು, ಕಾಡುಮೃಗಗಳು ಬರುತ್ತವೆಯೋ, ಯಾರಿಂದ ಪಕ್ಷಿ ಕೀಟಗಳು, ಬಳ್ಳಿ ಗಿಡಗಳು ಬರುತ್ತವೆಯೋ ${REFRAIN_KN}` },
        hi: { translation: `जिनसे दानव, किन्नर और यक्षों के समूह आते हैं, जिनसे चारण, हाथी और वन्य पशु आते हैं, जिनसे पक्षी और कीट, और लताएँ-पौधे आते हैं ${REFRAIN_HI}` },
      },
    },
    {
      id: "ganeshashtakam-5",
      locator: "5",
      sanskrit: ["यतो बुद्धिरज्ञाननाशो मुमुक्षोः", "यतः सम्पदो भक्तसन्तोषिकाः स्युः ।", "यतो विघ्ननाशो यतः कार्यसिद्धिः", REFRAIN],
      iast: ["yato buddhir ajñānanāśo mumukṣoḥ", "yataḥ sampado bhaktasantoṣikāḥ syuḥ |", "yato vighnanāśo yataḥ kāryasiddhiḥ", REFRAIN_IAST],
      readings: {
        en: { translation: `From whom comes understanding, and the end of ignorance for one who seeks liberation; from whom come the riches that gladden his devotees; from whom obstacles are destroyed and work is accomplished ${REFRAIN_EN}` },
        kn: { translation: `ಯಾರಿಂದ ಬುದ್ಧಿಯೂ ಮುಮುಕ್ಷುವಿನ ಅಜ್ಞಾನದ ನಾಶವೂ ಉಂಟಾಗುತ್ತದೆಯೋ, ಯಾರಿಂದ ಭಕ್ತರನ್ನು ಸಂತೋಷಪಡಿಸುವ ಸಂಪತ್ತುಗಳು ಬರುತ್ತವೆಯೋ, ಯಾರಿಂದ ವಿಘ್ನನಾಶವೂ ಕಾರ್ಯಸಿದ್ಧಿಯೂ ಆಗುತ್ತದೆಯೋ ${REFRAIN_KN}` },
        hi: { translation: `जिनसे बुद्धि और मुमुक्षु के अज्ञान का नाश होता है, जिनसे भक्तों को प्रसन्न करने वाली संपदाएँ आती हैं, जिनसे विघ्नों का नाश और कार्य की सिद्धि होती है ${REFRAIN_HI}` },
      },
    },
    {
      id: "ganeshashtakam-6",
      locator: "6",
      sanskrit: ["यतः पुत्रसम्पद्यतो वाञ्छितार्थो", "यतोऽभक्तविघ्नास्तथानेकरूपाः ।", "यतः शोकमोहौ यतः काम एव", REFRAIN],
      iast: ["yataḥ putrasampad yato vāñchitārtho", "yato 'bhaktavighnās tathānekarūpāḥ |", "yataḥ śokamohau yataḥ kāma eva", REFRAIN_IAST],
      readings: {
        en: { translation: `From whom come the blessing of children and the things one longs for; from whom, too, the many kinds of obstacles for those without devotion; from whom come sorrow and delusion, and desire itself ${REFRAIN_EN}` },
        kn: { translation: `ಯಾರಿಂದ ಸಂತಾನಭಾಗ್ಯವೂ ಬಯಸಿದ ಫಲವೂ ಬರುತ್ತವೆಯೋ, ಯಾರಿಂದ ಭಕ್ತರಲ್ಲದವರಿಗೆ ಅನೇಕ ರೂಪದ ವಿಘ್ನಗಳೂ ಬರುತ್ತವೆಯೋ, ಯಾರಿಂದ ಶೋಕ, ಮೋಹ ಮತ್ತು ಕಾಮವೂ ಬರುತ್ತವೆಯೋ ${REFRAIN_KN}` },
        hi: { translation: `जिनसे संतान का सुख और मनचाहे पदार्थ आते हैं, जिनसे अभक्तों के लिए अनेक रूपों के विघ्न भी आते हैं, जिनसे शोक और मोह, और स्वयं काम भी आता है ${REFRAIN_HI}` },
      },
    },
    {
      id: "ganeshashtakam-7",
      locator: "7",
      sanskrit: ["यतोऽनन्तशक्तिः स शेषो बभूव", "धराधारणेऽनेकरूपे च शक्तः ।", "यतोऽनेकधा स्वर्गलोका हि नाना", REFRAIN],
      iast: ["yato 'nantaśaktiḥ sa śeṣo babhūva", "dharādhāraṇe 'nekarūpe ca śaktaḥ |", "yato 'nekadhā svargalokā hi nānā", REFRAIN_IAST],
      readings: {
        en: { translation: `From whom Śeṣa, of endless strength, came to be, able to bear the earth in its many forms; from whom come the heavenly worlds, many and of many kinds ${REFRAIN_EN}` },
        kn: { translation: `ಯಾರಿಂದ ಅನಂತ ಶಕ್ತಿಯುಳ್ಳ ಶೇಷನು ಹುಟ್ಟಿ, ಅನೇಕ ರೂಪಗಳಲ್ಲಿ ಭೂಮಿಯನ್ನು ಹೊರಲು ಸಮರ್ಥನಾದನೋ, ಯಾರಿಂದ ಅನೇಕ ಬಗೆಯ ಸ್ವರ್ಗಲೋಕಗಳು ಬಂದವೋ ${REFRAIN_KN}` },
        hi: { translation: `जिनसे अनंत शक्ति वाले शेष उत्पन्न हुए, जो अनेक रूपों में धरती को धारण करने में समर्थ हैं, जिनसे अनेक प्रकार के स्वर्गलोक आए ${REFRAIN_HI}` },
      },
    },
    {
      id: "ganeshashtakam-8",
      locator: "8",
      sanskrit: ["यतो वेदवाचो विकुण्ठा मनोभिः", "सदा नेति नेतीति यत्ता गृणन्ति ।", "परब्रह्मरूपं चिदानन्दभूतं", REFRAIN],
      iast: ["yato vedavāco vikuṇṭhā manobhiḥ", "sadā neti netīti yat tā gṛṇanti |", "parabrahmarūpaṃ cidānandabhūtaṃ", REFRAIN_IAST],
      readings: {
        en: { translation: `He from whom the words of the Veda turn back, baffled, with the mind, and whom they ever describe as 'not this, not this'; whose form is the supreme Brahman, who is consciousness and bliss ${REFRAIN_EN}` },
        kn: { translation: `ಯಾರಿಂದ ವೇದವಾಕ್ಯಗಳು ಮನಸ್ಸಿನೊಡನೆ ಕುಂಠಿತವಾಗಿ ಹಿಂದಿರುಗುತ್ತವೆಯೋ, ಯಾರನ್ನು ಅವು ಸದಾ 'ಇದಲ್ಲ, ಇದಲ್ಲ' ಎಂದು ವರ್ಣಿಸುತ್ತವೆಯೋ, ಪರಬ್ರಹ್ಮರೂಪನಾದ, ಚಿದಾನಂದಸ್ವರೂಪನಾದ ${REFRAIN_KN}` },
        hi: { translation: `जिनसे वेद के वचन मन सहित कुंठित होकर लौट आते हैं, जिन्हें वे सदा 'नेति नेति' कहकर बताते हैं, जो परब्रह्मरूप और चिदानंदस्वरूप हैं ${REFRAIN_HI}` },
      },
    },
    {
      id: "ganeshashtakam-phala",
      locator: "phala",
      sanskrit: ["पुनरूचे गणाधीशः स्तोत्रमेतत्पठेन्नरः ।", "त्रिसन्ध्यं त्रिदिनं तस्य सर्वकार्यं भविष्यति ॥"],
      iast: ["punar ūce gaṇādhīśaḥ stotram etat paṭhen naraḥ |", "trisandhyaṃ tridinaṃ tasya sarvakāryaṃ bhaviṣyati ||"],
      readings: {
        en: { translation: "Gaṇādhīśa spoke again: whoever recites this hymn at dawn, noon and dusk for three days — everything they set out to do will be accomplished." },
        kn: { translation: "ಗಣಾಧೀಶನು ಮತ್ತೆ ಹೇಳಿದನು: ಈ ಸ್ತೋತ್ರವನ್ನು ಮೂರು ದಿನ ಮೂರು ಸಂಧ್ಯೆಗಳಲ್ಲಿ ಪಠಿಸುವವನ ಎಲ್ಲ ಕಾರ್ಯಗಳೂ ಸಿದ್ಧಿಸುತ್ತವೆ." },
        hi: { translation: "गणाधीश ने फिर कहा: जो इस स्तोत्र का तीन दिन, तीनों संध्याओं में पाठ करता है, उसके सब कार्य सिद्ध होंगे।" },
      },
    },
  ],
});
