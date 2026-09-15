import { registerStotra } from "../stotras";

// ─────────────────────────────────────────────────────────
//  The Gāyatrī mantra — Ṛgveda 3.62.10, with the three vyāhṛtis
//  that are said before it.
//
//  Mūla checked against Sanskrit Wikisource (गायत्रीमन्त्रः) and the
//  accented Ṛgveda text of 3.62.10. The svara marks are left out,
//  as everywhere else on the site; the syllables are as printed.
//
//  The vyāhṛtis are entered as their own "invocation" rather than
//  as the first line of the verse, because they are not in the
//  Ṛgveda verse: the Yajurvedic tradition sets them in front of it.
//  Translation and commentary are the site's own.
// ─────────────────────────────────────────────────────────

registerStotra({
  slug: "gayatri-mantra",
  textId: "t-stuti-gayatri-mantra",
  devata: "gayatri",
  group: "vedic",
  order: 1,
  category: "shruti",
  metre: "gāyatrī",
  origin: { en: "Rigveda 3.62.10", kn: "ಋಗ್ವೇದ 3.62.10", hi: "ऋग्वेद 3.62.10" },
  composer: { en: "Rishi Vishvamitra", kn: "ಋಷಿ ವಿಶ್ವಾಮಿತ್ರ", hi: "ऋषि विश्वामित्र" },
  verses: [
    {
      id: "gayatri-vyahriti",
      locator: "invocation",
      handle: { en: "Earth, sky, heaven", kn: "ಭೂಮಿ, ಅಂತರಿಕ್ಷ, ಸ್ವರ್ಗ", hi: "पृथ्वी, अंतरिक्ष, स्वर्ग" },
      sanskrit: ["ॐ भूर्भुवः स्वः"],
      iast: ["oṃ bhūr bhuvaḥ svaḥ"],
      keywords: [
        { term: "भूः", iast: "bhūḥ", gloss: { en: "the earth", kn: "ಭೂಲೋಕ", hi: "भूलोक, पृथ्वी" } },
        {
          term: "भुवः",
          iast: "bhuvaḥ",
          gloss: { en: "the space between, the middle air", kn: "ಭುವರ್ಲೋಕ, ನಡುವಿನ ಅಂತರಿಕ್ಷ", hi: "भुवर्लोक, बीच का अंतरिक्ष" },
        },
        { term: "स्वः", iast: "svaḥ", gloss: { en: "heaven, the lit sky", kn: "ಸ್ವರ್ಲೋಕ, ಬೆಳಗುವ ಆಕಾಶ", hi: "स्वर्लोक, प्रकाशित आकाश" } },
      ],
      readings: {
        en: {
          translation: "Om. Earth. The space between. Heaven.",
          explanation:
            "The three vyāhṛtis — 'utterances' — name the three worlds in a single breath: the ground underfoot, the air in between, the lit sky above. They are not part of the Ṛgveda's verse; the Yajurvedic tradition sets them in front of it, and in daily recitation the two are never said apart.\n\nThe Chāndogya Upaniṣad tells how Prajāpati pressed the three worlds for their essence and got Agni, Vāyu and Āditya; pressed those, and got the three Vedas; pressed the Vedas, and got bhūḥ, bhuvaḥ and svaḥ. So the three short words are meant to hold everything that follows them — the whole world is named before the verse asks for its light.",
        },
        kn: {
          translation: "ಓಂ. ಭೂಮಿ. ನಡುವಿನ ಅಂತರಿಕ್ಷ. ಸ್ವರ್ಗ.",
          explanation:
            "ಮೂರು ವ್ಯಾಹೃತಿಗಳು — 'ಉಚ್ಚಾರಣೆಗಳು' — ಮೂರು ಲೋಕಗಳನ್ನು ಒಂದೇ ಉಸಿರಿನಲ್ಲಿ ಹೆಸರಿಸುತ್ತವೆ: ಕಾಲಡಿಯ ನೆಲ, ನಡುವಿನ ಗಾಳಿ, ಮೇಲಿನ ಬೆಳಗುವ ಆಕಾಶ. ಇವು ಋಗ್ವೇದದ ಋಕ್ಕಿನ ಭಾಗವಲ್ಲ; ಯಜುರ್ವೇದ ಪರಂಪರೆ ಅವನ್ನು ಅದರ ಮುಂದೆ ಇರಿಸುತ್ತದೆ, ಮತ್ತು ನಿತ್ಯ ಜಪದಲ್ಲಿ ಇವೆರಡನ್ನು ಎಂದೂ ಬೇರ್ಪಡಿಸಿ ಹೇಳುವುದಿಲ್ಲ.\n\nಪ್ರಜಾಪತಿಯು ಮೂರು ಲೋಕಗಳ ಸಾರವನ್ನು ಹಿಂಡಿ ಅಗ್ನಿ, ವಾಯು, ಆದಿತ್ಯರನ್ನು ಪಡೆದನು; ಅವರಿಂದ ಮೂರು ವೇದಗಳನ್ನು, ವೇದಗಳಿಂದ ಭೂಃ, ಭುವಃ, ಸ್ವಃ ಎಂಬುದನ್ನು ಪಡೆದನು ಎಂದು ಛಾಂದೋಗ್ಯ ಉಪನಿಷತ್ತು ಹೇಳುತ್ತದೆ. ಹೀಗೆ ಈ ಮೂರು ಚಿಕ್ಕ ಪದಗಳು ಮುಂದೆ ಬರುವುದೆಲ್ಲವನ್ನೂ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತವೆ — ಮಂತ್ರವು ಬೆಳಕನ್ನು ಬೇಡುವ ಮೊದಲೇ ಇಡೀ ಜಗತ್ತನ್ನು ಹೆಸರಿಸಲಾಗುತ್ತದೆ.",
        },
        hi: {
          translation: "ॐ। पृथ्वी। बीच का अंतरिक्ष। स्वर्ग।",
          explanation:
            "तीन व्याहृतियाँ — 'उच्चारण' — तीनों लोकों को एक ही श्वास में नाम देती हैं: पैरों तले की धरती, बीच की वायु, ऊपर का प्रकाशित आकाश। ये ऋग्वेद की ऋचा का अंग नहीं हैं; यजुर्वेदीय परंपरा इन्हें उसके आगे रखती है, और नित्य जप में दोनों को कभी अलग नहीं कहा जाता।\n\nछान्दोग्य उपनिषद् बताता है कि प्रजापति ने तीनों लोकों का सार निचोड़ा तो अग्नि, वायु और आदित्य मिले; उन्हें निचोड़ा तो तीन वेद मिले; वेदों को निचोड़ा तो भूः, भुवः और स्वः मिले। इस प्रकार ये तीन छोटे शब्द आगे आने वाले सब कुछ को अपने में समेटे हैं — मंत्र प्रकाश माँगे, उससे पहले ही पूरे जगत् का नाम ले लिया जाता है।",
        },
      },
    },
    {
      id: "gayatri-mantra-1",
      locator: "1",
      handle: {
        en: "May it set our minds in motion",
        kn: "ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ",
        hi: "हमारी बुद्धि को प्रेरित करें",
      },
      sanskrit: ["तत्सवितुर्वरेण्यं", "भर्गो देवस्य धीमहि ।", "धियो यो नः प्रचोदयात् ॥"],
      iast: ["tat savitur vareṇyaṃ", "bhargo devasya dhīmahi |", "dhiyo yo naḥ pracodayāt ||"],
      keywords: [
        { term: "तत्", iast: "tat", gloss: { en: "that", kn: "ಆ", hi: "वह" } },
        {
          term: "सवितुः",
          iast: "savituḥ",
          gloss: { en: "of Savitṛ, the sun as the one who sets things going", kn: "ಸವಿತೃವಿನ — ಎಲ್ಲವನ್ನೂ ಚಲಿಸುವಂತೆ ಮಾಡುವ ಸೂರ್ಯನ", hi: "सविता का — सबको गति देने वाले सूर्य का" },
        },
        { term: "वरेण्यम्", iast: "vareṇyam", gloss: { en: "to be chosen, most excellent", kn: "ವರಿಸಲು ಯೋಗ್ಯವಾದ, ಶ್ರೇಷ್ಠ", hi: "वरण करने योग्य, श्रेष्ठ" } },
        { term: "भर्गः", iast: "bhargaḥ", gloss: { en: "radiance, the light that burns clean", kn: "ತೇಜಸ್ಸು, ಶುದ್ಧಗೊಳಿಸುವ ಬೆಳಕು", hi: "तेज, शुद्ध करने वाला प्रकाश" } },
        { term: "देवस्य", iast: "devasya", gloss: { en: "of the god, the shining one", kn: "ದೇವನ, ಪ್ರಕಾಶಿಸುವವನ", hi: "देव का, प्रकाशमान का" } },
        { term: "धीमहि", iast: "dhīmahi", gloss: { en: "we meditate on, we hold in mind", kn: "ಧ್ಯಾನಿಸುತ್ತೇವೆ, ಮನಸ್ಸಿನಲ್ಲಿ ಧರಿಸುತ್ತೇವೆ", hi: "हम ध्यान करते हैं, मन में धारण करते हैं" } },
        { term: "धियः", iast: "dhiyaḥ", gloss: { en: "thoughts, understandings", kn: "ಬುದ್ಧಿಗಳನ್ನು, ಆಲೋಚನೆಗಳನ್ನು", hi: "बुद्धियों को, विचारों को" } },
        { term: "यः", iast: "yaḥ", gloss: { en: "who", kn: "ಯಾರು", hi: "जो" } },
        { term: "नः", iast: "naḥ", gloss: { en: "our", kn: "ನಮ್ಮ", hi: "हमारी" } },
        { term: "प्रचोदयात्", iast: "pracodayāt", gloss: { en: "may he urge on, set in motion", kn: "ಪ್ರೇರೇಪಿಸಲಿ, ಮುನ್ನಡೆಸಲಿ", hi: "प्रेरित करे, आगे बढ़ाए" } },
      ],
      readings: {
        en: {
          translation: "We meditate on that most excellent radiance of the god Savitṛ — may he set our minds in motion.",
          explanation:
            "Ṛgveda 3.62.10, seen by Viśvāmitra, in the metre that gave it its name: gāyatrī, three lines of eight syllables. As it is written the first line has only seven; reciters restore the eighth by sounding vareṇyam as vareṇiyam, which is how the Vedic line was scanned.\n\nSavitṛ is the sun as impeller — the name comes from a root meaning 'to set going' — the power that wakes the world each morning and sends it about its work. The prayer asks for exactly that power and nothing else: not wealth, not long life, but that he impel our dhī, thought itself. The grammar turns in the middle. 'That radiance' is neuter; the 'who' of the last line is masculine. The verse begins by contemplating a light and ends by addressing the one whose light it is.\n\nIt is the verse whispered to a child at upanayana and said at dawn, noon and dusk for the rest of a life, which is how the name of a metre became the name of a goddess: Gāyatrī is this mantra, personified.",
        },
        kn: {
          translation: "ಸವಿತೃದೇವನ ಆ ಶ್ರೇಷ್ಠ ತೇಜಸ್ಸನ್ನು ನಾವು ಧ್ಯಾನಿಸುತ್ತೇವೆ — ಅವನು ನಮ್ಮ ಬುದ್ಧಿಗಳನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.",
          explanation:
            "ಋಗ್ವೇದ 3.62.10; ವಿಶ್ವಾಮಿತ್ರರು ದರ್ಶಿಸಿದ್ದು, ತನಗೆ ಹೆಸರು ಕೊಟ್ಟ ಛಂದಸ್ಸಿನಲ್ಲಿ: ಗಾಯತ್ರೀ, ಎಂಟು ಅಕ್ಷರಗಳ ಮೂರು ಪಾದಗಳು. ಬರೆದಂತೆ ಮೊದಲ ಪಾದದಲ್ಲಿ ಏಳೇ ಅಕ್ಷರಗಳಿವೆ; 'ವರೇಣ್ಯಂ' ಅನ್ನು 'ವರೇಣಿಯಂ' ಎಂದು ಉಚ್ಚರಿಸಿ ಪಠಿಸುವವರು ಎಂಟನೆಯದನ್ನು ಮರಳಿ ತರುತ್ತಾರೆ — ವೈದಿಕ ಪಾದವನ್ನು ಗಣಿಸುತ್ತಿದ್ದುದು ಹಾಗೆಯೇ.\n\nಸವಿತೃ ಎಂದರೆ ಪ್ರೇರಕನಾದ ಸೂರ್ಯ — ಈ ಹೆಸರು 'ಚಲಿಸುವಂತೆ ಮಾಡು' ಎಂಬ ಅರ್ಥದ ಧಾತುವಿನಿಂದ ಬಂದದ್ದು — ಪ್ರತಿ ಮುಂಜಾನೆ ಜಗತ್ತನ್ನು ಎಬ್ಬಿಸಿ ಅದರ ಕೆಲಸಕ್ಕೆ ಕಳುಹಿಸುವ ಶಕ್ತಿ. ಪ್ರಾರ್ಥನೆ ಕೇಳುವುದು ಆ ಶಕ್ತಿಯನ್ನೇ, ಬೇರೇನನ್ನೂ ಅಲ್ಲ: ಸಂಪತ್ತಲ್ಲ, ದೀರ್ಘಾಯುಸ್ಸಲ್ಲ — ಅವನು ನಮ್ಮ ಧೀ, ಅಂದರೆ ಆಲೋಚನೆಯನ್ನೇ, ಪ್ರೇರೇಪಿಸಲಿ ಎಂದು. ವ್ಯಾಕರಣ ನಡುವೆ ತಿರುವು ಪಡೆಯುತ್ತದೆ. 'ಆ ತೇಜಸ್ಸು' ನಪುಂಸಕಲಿಂಗ; ಕೊನೆಯ ಪಾದದ 'ಯಾರು' ಪುಲ್ಲಿಂಗ. ಮಂತ್ರವು ಒಂದು ಬೆಳಕನ್ನು ಧ್ಯಾನಿಸುತ್ತಾ ಆರಂಭವಾಗಿ, ಆ ಬೆಳಕು ಯಾರದೋ ಅವನನ್ನು ಸಂಬೋಧಿಸುತ್ತಾ ಮುಗಿಯುತ್ತದೆ.\n\nಉಪನಯನದಲ್ಲಿ ಮಗುವಿನ ಕಿವಿಯಲ್ಲಿ ಉಪದೇಶಿಸುವ, ಆಮೇಲೆ ಜೀವನಪೂರ್ತಿ ಮುಂಜಾನೆ, ಮಧ್ಯಾಹ್ನ, ಸಂಜೆ ಜಪಿಸುವ ಮಂತ್ರ ಇದು. ಹೀಗೆಯೇ ಒಂದು ಛಂದಸ್ಸಿನ ಹೆಸರು ದೇವಿಯ ಹೆಸರಾಯಿತು: ಗಾಯತ್ರೀ ಎಂದರೆ ಮೂರ್ತಿವೆತ್ತ ಈ ಮಂತ್ರವೇ.",
        },
        hi: {
          translation: "हम सविता देव के उस श्रेष्ठ तेज का ध्यान करते हैं — वे हमारी बुद्धियों को प्रेरित करें।",
          explanation:
            "ऋग्वेद 3.62.10, विश्वामित्र द्वारा दृष्ट, उसी छंद में जिसने इसे अपना नाम दिया: गायत्री, आठ-आठ अक्षरों के तीन पाद। लिखे रूप में पहले पाद में सात ही अक्षर हैं; पाठ करने वाले 'वरेण्यं' को 'वरेणियं' उच्चारित करके आठवाँ अक्षर लौटा देते हैं — वैदिक पाद की गणना इसी प्रकार होती थी।\n\nसविता प्रेरक के रूप में सूर्य हैं — यह नाम 'गति देना' अर्थ वाली धातु से बना है — वह शक्ति जो हर सुबह जगत् को जगाकर उसके काम पर भेजती है। प्रार्थना ठीक उसी शक्ति को माँगती है, और कुछ नहीं: न धन, न दीर्घायु, बल्कि यह कि वे हमारी धी को, स्वयं विचार को, प्रेरित करें। व्याकरण बीच में मुड़ता है। 'वह तेज' नपुंसकलिंग है; अंतिम पाद का 'जो' पुल्लिंग है। मंत्र एक प्रकाश के ध्यान से आरंभ होकर उसे संबोधित करते हुए समाप्त होता है जिसका वह प्रकाश है।\n\nयह वही मंत्र है जो उपनयन में बालक के कान में दिया जाता है और फिर जीवन भर प्रातः, मध्याह्न और सायं जपा जाता है। इसी से एक छंद का नाम एक देवी का नाम बना: गायत्री इसी मंत्र का साकार रूप हैं।",
        },
      },
    },
  ],
});
