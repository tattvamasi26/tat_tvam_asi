import type { Locale } from "@/i18n/config";
import type { TranslationRow, VerseNoteRow, VerseRow } from "./types";
import { ISHA_COMMENTARY } from "./isha-commentary";
import { ISHA_VIDEOS, type VerseVideo } from "./isha-video";

// ─────────────────────────────────────────────────────────
//  Īśāvāsya Upaniṣad — the complete text.
//
//  Eighteen verses plus the śānti mantra. It is the fortieth and
//  final chapter of the Vājasaneyi Saṃhitā of the Śukla Yajurveda,
//  which is why it is the only Upaniṣad embedded in a Saṃhitā
//  rather than in a Brāhmaṇa or Āraṇyaka.
//
//  AUTHORING SHAPE vs STORAGE SHAPE
//
//  The rows in the rest of src/lib/seed/ mirror Postgres columns
//  one-for-one, which is right for a handful of verses and wrong
//  for a whole text: laid out flat, one verse becomes seven
//  scattered rows and nobody can proofread it.
//
//  So this file is authored verse-by-verse in the shape a reader
//  thinks in, and the flat VerseRow / TranslationRow / VerseNoteRow
//  arrays are derived from it at the bottom. The seed script still
//  gets exactly the rows it expects; the DB parity rule is intact.
//
//  CITATION STATUS — read before trusting anything here
//
//  The Sanskrit mūla is the received text and is not in question.
//  The translations and explanations are the site's own editorial
//  work, so every row below points at `site-editorial` and renders
//  with the visible "not yet cited" notice. They are NOT attributed
//  to Hume, Müller or anyone else, because they are not their words.
//
//  Replacing the English column verse-by-verse with the actual
//  Hume 1921 wording (already registered as `hume-1921` in
//  sources.ts, public domain) is the obvious next step, and is
//  exactly the workflow docs/ROADMAP.md Phase 4 describes.
// ─────────────────────────────────────────────────────────

export interface IshaReading {
  /** The verse in this language. */
  translation: string;
  /** The site's own commentary — what the verse is doing, and why. */
  explanation: string;
}

export interface IshaVerse {
  /** The Sarvapriyananda talk that treats this verse, if there is one. */
  video?: VerseVideo;
  /** Stable id, also the anchor in the URL. */
  id: string;
  /** "invocation", or "1".."18" — what the reader is told. */
  locator: string;
  /** Devanagari mūla, one pada per line. */
  sanskrit: string[];
  /** IAST, aligned line-for-line with the Sanskrit. */
  iast: string[];
  /** A short handle for the verse, per language. Shown beside the
   *  verse number, so it has to follow the reading language like
   *  everything else on the page. */
  handle: Record<Locale, string>;
  /** Two or three Sanskrit terms worth knowing before reading. */
  keywords: { term: string; iast: string; gloss: Record<Locale, string> }[];
  readings: Record<Locale, IshaReading>;
}

export const ISHA_VERSES: IshaVerse[] = [
  {
    id: "isha-shanti",
    locator: "invocation",
    handle: { en: "The whole from the whole", kn: "ಪೂರ್ಣದಿಂದ ಪೂರ್ಣ", hi: "पूर्ण से पूर्ण" },
    sanskrit: [
      "ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते ।",
      "पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥",
      "ॐ शान्तिः शान्तिः शान्तिः ॥",
    ],
    iast: [
      "oṃ pūrṇam adaḥ pūrṇam idaṃ pūrṇāt pūrṇam udacyate |",
      "pūrṇasya pūrṇam ādāya pūrṇam evāvaśiṣyate ||",
      "oṃ śāntiḥ śāntiḥ śāntiḥ ||",
    ],
    keywords: [
      {
        term: "पूर्ण",
        iast: "pūrṇa",
        gloss: {
          en: "full, whole, lacking nothing",
          kn: "ಪೂರ್ಣ, ಸಮಗ್ರ, ಯಾವ ಕೊರತೆಯೂ ಇಲ್ಲದ್ದು",
          hi: "पूर्ण, समग्र, जिसमें कोई कमी न हो",
        },
      },
      {
        term: "अवशिष्यते",
        iast: "avaśiṣyate",
        gloss: {
          en: "remains over, is left behind",
          kn: "ಉಳಿಯುತ್ತದೆ, ಶೇಷವಾಗಿ ನಿಲ್ಲುತ್ತದೆ",
          hi: "शेष रहता है, बचा रहता है",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "That is whole. This is whole. From the whole, the whole arises. Take the whole from the whole, and the whole alone remains. Om — peace, peace, peace.",
        explanation:
          "The invocation states the arithmetic that the rest of the text depends on. 'That' is Brahman unmanifest, 'this' the manifest world; the verse refuses to make the second a fragment of the first. Subtraction is introduced only to be defeated — remove the infinite from the infinite and nothing has been diminished. What is denied here is quantity itself as a way of thinking about the real. The threefold śānti quiets the three sources of disturbance: the self, other beings, and the elements.",
      },
      kn: {
        translation:
          "ಅದು ಪೂರ್ಣ. ಇದು ಪೂರ್ಣ. ಪೂರ್ಣದಿಂದ ಪೂರ್ಣವು ಉದಯಿಸುತ್ತದೆ. ಪೂರ್ಣದಿಂದ ಪೂರ್ಣವನ್ನು ತೆಗೆದರೂ ಪೂರ್ಣವೇ ಉಳಿಯುತ್ತದೆ. ಓಂ — ಶಾಂತಿ, ಶಾಂತಿ, ಶಾಂತಿ.",
        explanation:
          "ಈ ಶಾಂತಿಮಂತ್ರವು ಮುಂದಿನ ಇಡೀ ಪಠ್ಯವು ಆಧರಿಸಿರುವ ಗಣಿತವನ್ನು ಹೇಳುತ್ತದೆ. 'ಅದು' ಎಂದರೆ ಅವ್ಯಕ್ತ ಬ್ರಹ್ಮ, 'ಇದು' ಎಂದರೆ ವ್ಯಕ್ತ ಜಗತ್ತು; ಎರಡನೆಯದನ್ನು ಮೊದಲನೆಯದರ ತುಣುಕೆಂದು ಒಪ್ಪಲು ಈ ಶ್ಲೋಕ ನಿರಾಕರಿಸುತ್ತದೆ. ವ್ಯವಕಲನವನ್ನು ಇಲ್ಲಿ ತರುವುದೇ ಅದನ್ನು ಸೋಲಿಸುವುದಕ್ಕಾಗಿ — ಅನಂತದಿಂದ ಅನಂತವನ್ನು ತೆಗೆದರೂ ಏನೂ ಕಡಿಮೆಯಾಗುವುದಿಲ್ಲ. ಇಲ್ಲಿ ನಿರಾಕರಿಸಲ್ಪಡುವುದು ಪರಿಮಾಣವೆಂಬ ಆಲೋಚನಾ ಕ್ರಮವೇ. ಮೂರು ಬಾರಿಯ ಶಾಂತಿಯು ಆಧ್ಯಾತ್ಮಿಕ, ಆಧಿಭೌತಿಕ ಮತ್ತು ಆಧಿದೈವಿಕ — ಈ ಮೂರು ವಿಘ್ನಗಳನ್ನು ಶಮನಗೊಳಿಸುತ್ತದೆ.",
      },
      hi: {
        translation:
          "वह पूर्ण है। यह पूर्ण है। पूर्ण से पूर्ण उत्पन्न होता है। पूर्ण में से पूर्ण निकाल लेने पर भी पूर्ण ही शेष रहता है। ॐ — शांति, शांति, शांति।",
        explanation:
          "यह शांतिमंत्र उस गणित को कह देता है जिस पर आगे का सारा पाठ टिका है। 'वह' अव्यक्त ब्रह्म है, 'यह' व्यक्त जगत्; यह श्लोक दूसरे को पहले का टुकड़ा मानने से इनकार करता है। घटाव को यहाँ लाया ही इसलिए गया है कि उसे परास्त किया जाए — अनंत में से अनंत निकाल लीजिए, कुछ भी कम नहीं होता। यहाँ जिसका निषेध है वह परिमाण नामक सोचने का ढंग ही है। तीन बार का शांतिपाठ आध्यात्मिक, आधिभौतिक और आधिदैविक — तीनों विघ्नों को शांत करता है।",
      },
    },
  },

  {
    id: "isha-1",
    locator: "1",
    handle: { en: "Renounce, and enjoy", kn: "ತ್ಯಜಿಸಿ ಅನುಭವಿಸು", hi: "त्याग कर भोगो" },
    sanskrit: [
      "ईशा वास्यमिदँ सर्वं यत्किञ्च जगत्यां जगत् ।",
      "तेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥",
    ],
    iast: [
      "īśā vāsyam idaṃ sarvaṃ yat kiñca jagatyāṃ jagat |",
      "tena tyaktena bhuñjīthā mā gṛdhaḥ kasya svid dhanam ||",
    ],
    keywords: [
      {
        term: "वास्य",
        iast: "vāsya",
        gloss: {
          en: "to be clothed, enveloped, indwelt",
          kn: "ಆವರಿಸಲ್ಪಡಬೇಕಾದ್ದು, ಒಳಗೆ ನೆಲೆಸಿರುವುದು",
          hi: "आवृत किया जाने योग्य, जिसमें वास हो",
        },
      },
      {
        term: "त्यक्तेन",
        iast: "tyaktena",
        gloss: {
          en: "by that which is relinquished",
          kn: "ತ್ಯಜಿಸಿದ್ದರಿಂದ",
          hi: "त्यागे हुए के द्वारा",
        },
      },
      {
        term: "मा गृधः",
        iast: "mā gṛdhaḥ",
        gloss: {
          en: "do not covet",
          kn: "ಆಸೆಪಡಬೇಡ",
          hi: "लोभ मत करो",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "All this — whatever moves in this moving world — is to be dwelt in by the Lord. Therefore find your enjoyment in renunciation; do not covet what belongs to another.",
        explanation:
          "The famous opening does two things at once. First it makes the world a garment rather than an obstacle: nothing is excluded from the divine, so nothing needs escaping. Second it redefines enjoyment. Tena tyaktena bhuñjīthāḥ is not 'give things up in order to be rewarded later' — it says the giving up is itself the enjoying. Grasping is what spoils a thing; released, the same world becomes available. The closing line supplies the reason nobody can own anything: it was never theirs to begin with.",
      },
      kn: {
        translation:
          "ಈ ಚಲಿಸುವ ಜಗತ್ತಿನಲ್ಲಿ ಚಲಿಸುವ ಎಲ್ಲವೂ ಈಶ್ವರನಿಂದ ಆವೃತವಾಗಿರಬೇಕಾದ್ದು. ಆದ್ದರಿಂದ ತ್ಯಾಗದಿಂದಲೇ ಅನುಭವಿಸು; ಬೇರೊಬ್ಬರ ಸಂಪತ್ತಿಗೆ ಆಸೆಪಡಬೇಡ.",
        explanation:
          "ಈ ಪ್ರಸಿದ್ಧ ಆರಂಭಿಕ ಶ್ಲೋಕ ಏಕಕಾಲದಲ್ಲಿ ಎರಡು ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಮೊದಲನೆಯದಾಗಿ ಜಗತ್ತನ್ನು ಅಡ್ಡಿಯನ್ನಾಗಿ ಅಲ್ಲ, ವಸ್ತ್ರವನ್ನಾಗಿ ಮಾಡುತ್ತದೆ: ದೈವದಿಂದ ಹೊರಗಿರುವುದು ಏನೂ ಇಲ್ಲ, ಆದ್ದರಿಂದ ಯಾವುದರಿಂದಲೂ ಓಡಿಹೋಗುವ ಅಗತ್ಯವಿಲ್ಲ. ಎರಡನೆಯದಾಗಿ ಭೋಗದ ಅರ್ಥವನ್ನೇ ಬದಲಿಸುತ್ತದೆ. 'ತೇನ ತ್ಯಕ್ತೇನ ಭುಂಜೀಥಾಃ' ಎಂದರೆ 'ಮುಂದೆ ಫಲ ಸಿಗಲೆಂದು ಈಗ ಬಿಡು' ಎಂದಲ್ಲ — ಬಿಡುವುದೇ ಅನುಭವಿಸುವುದು ಎನ್ನುತ್ತದೆ. ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುವುದೇ ವಸ್ತುವನ್ನು ಕೆಡಿಸುತ್ತದೆ; ಬಿಟ್ಟಾಗ ಅದೇ ಜಗತ್ತು ಲಭ್ಯವಾಗುತ್ತದೆ. ಕೊನೆಯ ಸಾಲು ಯಾರೂ ಏನನ್ನೂ ಸ್ವಂತ ಮಾಡಿಕೊಳ್ಳಲಾರರು ಎಂಬುದಕ್ಕೆ ಕಾರಣ ಕೊಡುತ್ತದೆ: ಅದು ಮೊದಲಿನಿಂದಲೂ ಅವರದ್ದಾಗಿರಲಿಲ್ಲ.",
      },
      hi: {
        translation:
          "इस चराचर जगत् में जो कुछ भी है, वह सब ईश्वर से आवृत है। इसलिए त्याग के द्वारा ही भोग करो; किसी के धन का लोभ मत करो।",
        explanation:
          "यह प्रसिद्ध आरंभिक श्लोक एक साथ दो काम करता है। पहला, यह जगत् को बाधा नहीं, वस्त्र बना देता है: दैवी से बाहर कुछ है ही नहीं, इसलिए किसी से भागने की आवश्यकता नहीं। दूसरा, यह भोग की परिभाषा ही बदल देता है। 'तेन त्यक्तेन भुञ्जीथाः' का अर्थ 'आगे फल मिले इसलिए अभी छोड़ो' नहीं है — यह कहता है कि छोड़ना ही भोगना है। पकड़ना ही वस्तु को बिगाड़ता है; छोड़ देने पर वही जगत् सुलभ हो जाता है। अंतिम पंक्ति यह कारण देती है कि कोई किसी वस्तु का स्वामी हो ही नहीं सकता: वह कभी उसकी थी ही नहीं।",
      },
    },
  },

  {
    id: "isha-2",
    locator: "2",
    handle: { en: "A hundred years of action", kn: "ಕರ್ಮದ ನೂರು ವರ್ಷ", hi: "कर्म के सौ वर्ष" },
    sanskrit: [
      "कुर्वन्नेवेह कर्माणि जिजीविषेच्छतँ समाः ।",
      "एवं त्वयि नान्यथेतोऽस्ति न कर्म लिप्यते नरे ॥",
    ],
    iast: [
      "kurvann eveha karmāṇi jijīviṣec chataṃ samāḥ |",
      "evaṃ tvayi nānyatheto 'sti na karma lipyate nare ||",
    ],
    keywords: [
      {
        term: "जिजीविषेत्",
        iast: "jijīviṣet",
        gloss: {
          en: "one should wish to live",
          kn: "ಬದುಕಲು ಇಚ್ಛಿಸಬೇಕು",
          hi: "जीने की इच्छा करे",
        },
      },
      {
        term: "लिप्यते",
        iast: "lipyate",
        gloss: {
          en: "clings, smears, adheres",
          kn: "ಅಂಟಿಕೊಳ್ಳುತ್ತದೆ, ಲೇಪಿಸುತ್ತದೆ",
          hi: "लिपटता है, चिपकता है",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Performing works here, let a man wish to live a hundred years. For one who is thus — a man, and no other way — action does not cling.",
        explanation:
          "Having praised renunciation, the text immediately refuses to let it become a reason to withdraw. A full lifespan of action is not a concession to weakness; it is the recommended course. The operative word is lipyate, 'smears'. Action is not the problem — adhesion is. Once the first verse has removed ownership from the picture, work can be done at full stretch without leaving a residue on the doer. Śaṅkara reads verses 1 and 2 as addressed to two different competences; the plain sense is that they are two halves of one instruction.",
      },
      kn: {
        translation:
          "ಇಲ್ಲಿ ಕರ್ಮಗಳನ್ನು ಮಾಡುತ್ತಲೇ ನೂರು ವರ್ಷ ಬದುಕಲು ಇಚ್ಛಿಸಬೇಕು. ಹೀಗಿರುವ ನಿನಗೆ — ಮನುಷ್ಯನಿಗೆ — ಬೇರೆ ಮಾರ್ಗವಿಲ್ಲ; ಹೀಗಿದ್ದರೆ ಕರ್ಮವು ಅಂಟುವುದಿಲ್ಲ.",
        explanation:
          "ತ್ಯಾಗವನ್ನು ಹೊಗಳಿದ ಕೂಡಲೇ, ಅದು ಹಿಂದೆ ಸರಿಯುವುದಕ್ಕೆ ಕಾರಣವಾಗಬಾರದೆಂದು ಈ ಶ್ಲೋಕ ಎಚ್ಚರಿಸುತ್ತದೆ. ಕರ್ಮದಲ್ಲಿ ತೊಡಗಿದ ಪೂರ್ಣ ಆಯುಷ್ಯ ದೌರ್ಬಲ್ಯಕ್ಕೆ ಕೊಟ್ಟ ರಿಯಾಯಿತಿಯಲ್ಲ; ಅದೇ ಶಿಫಾರಸು ಮಾಡಿದ ಮಾರ್ಗ. ಮುಖ್ಯ ಪದ 'ಲಿಪ್ಯತೇ' — ಅಂಟುವುದು. ಕರ್ಮ ಸಮಸ್ಯೆಯಲ್ಲ; ಅಂಟುವಿಕೆ ಸಮಸ್ಯೆ. ಮೊದಲ ಶ್ಲೋಕವು ಒಡೆತನವನ್ನು ತೆಗೆದುಹಾಕಿದ ಮೇಲೆ, ಕರ್ತೃವಿನ ಮೇಲೆ ಯಾವ ಕಲೆಯನ್ನೂ ಉಳಿಸದೆ ಪೂರ್ಣ ಶಕ್ತಿಯಿಂದ ಕೆಲಸ ಮಾಡಬಹುದು. ಶಂಕರರು ೧ ಮತ್ತು ೨ನೆಯ ಶ್ಲೋಕಗಳನ್ನು ಬೇರೆ ಬೇರೆ ಅಧಿಕಾರಿಗಳಿಗೆ ಹೇಳಿದ್ದೆಂದು ವ್ಯಾಖ್ಯಾನಿಸುತ್ತಾರೆ; ಸರಳ ಅರ್ಥದಲ್ಲಿ ಅವು ಒಂದೇ ಉಪದೇಶದ ಎರಡು ಅರ್ಧಗಳು.",
      },
      hi: {
        translation:
          "यहाँ कर्म करते हुए ही सौ वर्ष जीने की इच्छा करे। ऐसा होने पर तुझ मनुष्य के लिए इससे भिन्न कोई मार्ग नहीं; और तब कर्म लिपटता नहीं।",
        explanation:
          "त्याग की प्रशंसा करने के तुरंत बाद यह पाठ उसे पलायन का बहाना बनने नहीं देता। कर्म में लगा पूरा जीवनकाल दुर्बलता को दी गई छूट नहीं, वही अनुशंसित मार्ग है। मुख्य शब्द है 'लिप्यते' — लिपटना। कर्म समस्या नहीं है, चिपकना समस्या है। पहला श्लोक स्वामित्व को हटा चुका है, इसलिए अब कर्ता पर कोई अवशेष छोड़े बिना पूरी शक्ति से काम किया जा सकता है। शंकर १ और २ को दो भिन्न अधिकारियों के लिए मानते हैं; सीधे अर्थ में ये एक ही उपदेश के दो आधे हैं।",
      },
    },
  },

  {
    id: "isha-3",
    locator: "3",
    handle: { en: "The worlds of the sunless", kn: "ಸೂರ್ಯರಹಿತ ಲೋಕಗಳು", hi: "सूर्यहीन लोक" },
    sanskrit: [
      "असुर्या नाम ते लोका अन्धेन तमसाऽऽवृताः ।",
      "ताँस्ते प्रेत्याभिगच्छन्ति ये के चात्महनो जनाः ॥",
    ],
    iast: [
      "asuryā nāma te lokā andhena tamasāvṛtāḥ |",
      "tāṃs te pretyābhigacchanti ye ke cātmahano janāḥ ||",
    ],
    keywords: [
      {
        term: "असुर्य",
        iast: "asurya",
        gloss: {
          en: "sunless; demonic — the pun is deliberate",
          kn: "ಸೂರ್ಯರಹಿತ; ಅಸುರಸಂಬಂಧಿ — ಈ ಶ್ಲೇಷೆ ಉದ್ದೇಶಪೂರ್ವಕ",
          hi: "सूर्यरहित; आसुरी — यह श्लेष जानबूझकर है",
        },
      },
      {
        term: "आत्महन्",
        iast: "ātmahan",
        gloss: {
          en: "slayer of the Self",
          kn: "ಆತ್ಮಘಾತಕ",
          hi: "आत्मा का हनन करने वाला",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Sunless are those worlds, covered over with blinding darkness. To them, after death, go those people who are slayers of the Self.",
        explanation:
          "Asurya carries two senses at once — 'without sun' and 'of the asuras' — and the verse uses both. The darkness is not a punishment imposed from outside but the natural condition of a life spent unaware of what one is. Ātmahan, 'Self-slayer', is the text's severest phrase: not someone who has destroyed the Self, which is impossible, but someone who has lived as though it were not there. The obscuring is self-administered, which is precisely why the remaining verses can undo it.",
      },
      kn: {
        translation:
          "ಸೂರ್ಯರಹಿತವಾದ ಆ ಲೋಕಗಳು ಕುರುಡು ಕತ್ತಲೆಯಿಂದ ಆವೃತವಾಗಿವೆ. ಆತ್ಮಘಾತಕರಾದ ಜನರು ಮರಣಾನಂತರ ಅವುಗಳನ್ನೇ ಸೇರುತ್ತಾರೆ.",
        explanation:
          "'ಅಸುರ್ಯ' ಎಂಬ ಪದಕ್ಕೆ ಎರಡು ಅರ್ಥ — 'ಸೂರ್ಯನಿಲ್ಲದ್ದು' ಮತ್ತು 'ಅಸುರರಿಗೆ ಸೇರಿದ್ದು' — ಶ್ಲೋಕವು ಎರಡನ್ನೂ ಬಳಸುತ್ತದೆ. ಈ ಕತ್ತಲೆ ಹೊರಗಿನಿಂದ ಹೇರಿದ ಶಿಕ್ಷೆಯಲ್ಲ; ತಾನು ಯಾರೆಂಬ ಅರಿವಿಲ್ಲದೆ ಕಳೆದ ಬದುಕಿನ ಸಹಜ ಸ್ಥಿತಿಯೇ ಅದು. 'ಆತ್ಮಹನ್' ಎಂಬುದು ಈ ಪಠ್ಯದ ಅತ್ಯಂತ ಕಠಿಣ ಪದ: ಆತ್ಮವನ್ನು ನಾಶಮಾಡಿದವನಲ್ಲ — ಅದು ಅಸಾಧ್ಯ — ಆದರೆ ಆತ್ಮವೇ ಇಲ್ಲವೆಂಬಂತೆ ಬದುಕಿದವನು. ಈ ಮರೆಮಾಚುವಿಕೆ ತಾನೇ ಮಾಡಿಕೊಂಡದ್ದು; ಆದ್ದರಿಂದಲೇ ಮುಂದಿನ ಶ್ಲೋಕಗಳು ಅದನ್ನು ಪರಿಹರಿಸಬಲ್ಲವು.",
      },
      hi: {
        translation:
          "वे लोक सूर्यरहित हैं, अंधकार से ढके हुए। मृत्यु के पश्चात् वे ही लोग उन्हें प्राप्त होते हैं जो आत्महंता हैं।",
        explanation:
          "'असुर्य' शब्द के दो अर्थ एक साथ चलते हैं — 'सूर्यहीन' और 'असुरों का' — और श्लोक दोनों का प्रयोग करता है। यह अंधकार बाहर से थोपा गया दंड नहीं, बल्कि उस जीवन की स्वाभाविक दशा है जो यह जाने बिना बीता कि वह क्या है। 'आत्महन्' इस पाठ का सबसे कठोर शब्द है: वह नहीं जिसने आत्मा को नष्ट किया — यह असंभव है — बल्कि वह जो ऐसे जिया मानो आत्मा है ही नहीं। यह आवरण स्वयं ओढ़ा हुआ है, इसीलिए शेष श्लोक उसे हटा सकते हैं।",
      },
    },
  },

  {
    id: "isha-4",
    locator: "4",
    handle: { en: "Unmoving, it outruns the mind", kn: "ಚಲಿಸದೆಯೇ ಮನಸ್ಸನ್ನು ಮೀರುತ್ತದೆ", hi: "अचल, फिर भी मन से आगे" },
    sanskrit: [
      "अनेजदेकं मनसो जवीयो नैनद्देवा आप्नुवन्पूर्वमर्षत् ।",
      "तद्धावतोऽन्यानत्येति तिष्ठत्तस्मिन्नपो मातरिश्वा दधाति ॥",
    ],
    iast: [
      "anejad ekaṃ manaso javīyo nainad devā āpnuvan pūrvam arṣat |",
      "tad dhāvato 'nyān atyeti tiṣṭhat tasminn apo mātariśvā dadhāti ||",
    ],
    keywords: [
      {
        term: "अनेजत्",
        iast: "anejat",
        gloss: {
          en: "unmoving, unshaking",
          kn: "ಚಲಿಸದ, ಕಂಪಿಸದ",
          hi: "अचल, कंपनरहित",
        },
      },
      {
        term: "मातरिश्वा",
        iast: "mātariśvā",
        gloss: {
          en: "the wind; the cosmic life-breath",
          kn: "ವಾಯು; ವಿಶ್ವಪ್ರಾಣ",
          hi: "वायु; विश्वप्राण",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Unmoving, the One is swifter than the mind. The senses could not overtake It, for It ran ahead. Standing still, It outstrips others who run. In It, Mātariśvan supports the waters.",
        explanation:
          "The first of the great paradox verses. Speed is a property of things that travel between two places; what is already at every place cannot be overtaken, and so appears infinitely fast while never moving. The senses arrive late by definition, because they go looking for what is doing the looking. The final line grounds the paradox in cosmology: the still centre is what allows the cosmic wind to hold the waters in place. Immobility is not inertness here — it is what makes movement possible.",
      },
      kn: {
        translation:
          "ಚಲಿಸದ ಆ ಏಕವು ಮನಸ್ಸಿಗಿಂತ ವೇಗವಾದದ್ದು. ಇಂದ್ರಿಯಗಳು ಅದನ್ನು ಹಿಡಿಯಲಾರವು, ಏಕೆಂದರೆ ಅದು ಮೊದಲೇ ಮುಂದೆ ಹೋಗಿದೆ. ನಿಂತಿದ್ದೇ ಓಡುವವರನ್ನು ಹಿಂದಿಕ್ಕುತ್ತದೆ. ಅದರಲ್ಲಿಯೇ ಮಾತರಿಶ್ವನು ಜಲಗಳನ್ನು ಧರಿಸುತ್ತಾನೆ.",
        explanation:
          "ವಿರೋಧಾಭಾಸದ ಶ್ಲೋಕಗಳಲ್ಲಿ ಮೊದಲನೆಯದು. ವೇಗವೆಂಬುದು ಎರಡು ಸ್ಥಳಗಳ ನಡುವೆ ಸಂಚರಿಸುವ ವಸ್ತುವಿನ ಗುಣ; ಈಗಾಗಲೇ ಎಲ್ಲ ಕಡೆ ಇರುವುದನ್ನು ಹಿಡಿಯಲಾಗದು, ಆದ್ದರಿಂದ ಅದು ಚಲಿಸದೆಯೇ ಅನಂತವೇಗವಾಗಿ ಕಾಣುತ್ತದೆ. ಇಂದ್ರಿಯಗಳು ಸ್ವಭಾವತಃ ತಡವಾಗಿ ತಲುಪುತ್ತವೆ, ಏಕೆಂದರೆ ಅವು ನೋಡುತ್ತಿರುವುದನ್ನೇ ಹುಡುಕಲು ಹೊರಡುತ್ತವೆ. ಕೊನೆಯ ಸಾಲು ಈ ವಿರೋಧಾಭಾಸವನ್ನು ವಿಶ್ವರಚನೆಯಲ್ಲಿ ನೆಲೆಗೊಳಿಸುತ್ತದೆ: ನಿಶ್ಚಲ ಕೇಂದ್ರವಿರುವುದರಿಂದಲೇ ವಿಶ್ವವಾಯುವು ಜಲಗಳನ್ನು ಹಿಡಿದಿಡಬಲ್ಲದು. ಇಲ್ಲಿ ನಿಶ್ಚಲತೆ ಜಡತೆಯಲ್ಲ — ಚಲನೆಯನ್ನು ಸಾಧ್ಯಗೊಳಿಸುವುದೇ ಅದು.",
      },
      hi: {
        translation:
          "वह अचल एक मन से भी तीव्र है। इंद्रियाँ उसे नहीं पा सकीं, क्योंकि वह पहले ही आगे निकल चुका था। स्थिर रहते हुए ही वह दौड़ने वालों को पीछे छोड़ देता है। उसी में मातरिश्वा जल को धारण करता है।",
        explanation:
          "विरोधाभास वाले श्लोकों में पहला। गति उस वस्तु का गुण है जो दो स्थानों के बीच चलती है; जो पहले से ही सर्वत्र है उसे पकड़ा नहीं जा सकता, इसलिए वह बिना चले ही अनंत वेग वाला प्रतीत होता है। इंद्रियाँ स्वभावतः देर से पहुँचती हैं, क्योंकि वे उसी को खोजने निकलती हैं जो देख रहा है। अंतिम पंक्ति इस विरोधाभास को ब्रह्मांड-रचना में टिका देती है: स्थिर केंद्र के कारण ही विश्ववायु जल को धारण कर पाता है। यहाँ अचलता जड़ता नहीं — वही गति को संभव बनाती है।",
      },
    },
  },

  {
    id: "isha-5",
    locator: "5",
    handle: { en: "It moves; it moves not", kn: "ಅದು ಚಲಿಸುತ್ತದೆ; ಚಲಿಸುವುದಿಲ್ಲ", hi: "वह चलता है; नहीं चलता" },
    sanskrit: [
      "तदेजति तन्नैजति तद्दूरे तद्वन्तिके ।",
      "तदन्तरस्य सर्वस्य तदु सर्वस्यास्य बाह्यतः ॥",
    ],
    iast: [
      "tad ejati tan naijati tad dūre tad v antike |",
      "tad antar asya sarvasya tad u sarvasyāsya bāhyataḥ ||",
    ],
    keywords: [
      {
        term: "एजति",
        iast: "ejati",
        gloss: {
          en: "moves, stirs",
          kn: "ಚಲಿಸುತ್ತದೆ, ಕದಲುತ್ತದೆ",
          hi: "चलता है, हिलता है",
        },
      },
      {
        term: "अन्तिके",
        iast: "antike",
        gloss: {
          en: "near at hand",
          kn: "ಸಮೀಪದಲ್ಲಿ",
          hi: "अत्यंत निकट",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "It moves, and It moves not. It is far, and It is near. It is within all this, and It is outside all this.",
        explanation:
          "Four contradictions in two lines, and none of them is resolved. The technique is deliberate: each pair cancels a category the mind would otherwise use to file the Absolute away — motion, distance, containment. What survives the cancelling is not a description but a direction of attention. Note that 'far' and 'near' are not compromised into 'medium distance'; both are asserted fully. Distance is a relation between two things, and here there are not two.",
      },
      kn: {
        translation:
          "ಅದು ಚಲಿಸುತ್ತದೆ, ಅದು ಚಲಿಸುವುದಿಲ್ಲ. ಅದು ದೂರವಾಗಿದೆ, ಅದು ಹತ್ತಿರವಾಗಿದೆ. ಅದು ಇದೆಲ್ಲದರ ಒಳಗಿದೆ, ಮತ್ತು ಅದು ಇದೆಲ್ಲದರ ಹೊರಗಿದೆ.",
        explanation:
          "ಎರಡು ಸಾಲುಗಳಲ್ಲಿ ನಾಲ್ಕು ವಿರೋಧಗಳು, ಯಾವುದನ್ನೂ ಬಗೆಹರಿಸಿಲ್ಲ. ಈ ತಂತ್ರ ಉದ್ದೇಶಪೂರ್ವಕ: ಪ್ರತಿ ಜೋಡಿಯೂ ಮನಸ್ಸು ಪರಬ್ರಹ್ಮವನ್ನು ಒಂದು ಕಡೆ ಇಟ್ಟುಬಿಡಲು ಬಳಸಬಹುದಾದ ಒಂದೊಂದು ಪರಿಕಲ್ಪನೆಯನ್ನು ರದ್ದುಗೊಳಿಸುತ್ತದೆ — ಚಲನೆ, ಅಂತರ, ಆವರಣ. ಈ ರದ್ದತಿಯ ನಂತರ ಉಳಿಯುವುದು ವರ್ಣನೆಯಲ್ಲ, ಗಮನದ ದಿಕ್ಕು. 'ದೂರ' ಮತ್ತು 'ಹತ್ತಿರ' ಎಂಬುದನ್ನು 'ಮಧ್ಯಮ ದೂರ' ಎಂದು ರಾಜಿ ಮಾಡಿಲ್ಲ; ಎರಡನ್ನೂ ಪೂರ್ಣವಾಗಿ ಹೇಳಲಾಗಿದೆ. ಅಂತರವೆಂಬುದು ಎರಡು ವಸ್ತುಗಳ ನಡುವಿನ ಸಂಬಂಧ, ಮತ್ತು ಇಲ್ಲಿ ಎರಡಿಲ್ಲ.",
      },
      hi: {
        translation:
          "वह चलता है, और वह नहीं चलता। वह दूर है, और वह निकट है। वह इस सबके भीतर है, और वह इस सबके बाहर है।",
        explanation:
          "दो पंक्तियों में चार विरोध, और कोई भी सुलझाया नहीं गया। यह युक्ति जानबूझकर है: प्रत्येक युग्म उस एक श्रेणी को रद्द कर देता है जिससे मन परब्रह्म को कहीं रखकर निश्चिंत हो जाता — गति, दूरी, आवरण। इस रद्दीकरण के बाद जो बचता है वह वर्णन नहीं, ध्यान की दिशा है। ध्यान दें कि 'दूर' और 'निकट' को 'मध्यम दूरी' में समझौता नहीं किया गया; दोनों पूर्णतः कहे गए हैं। दूरी दो वस्तुओं के बीच का संबंध है, और यहाँ दो हैं ही नहीं।",
      },
    },
  },

  {
    id: "isha-6",
    locator: "6",
    handle: { en: "He does not shrink away", kn: "ಅವನು ಹಿಂಜರಿಯುವುದಿಲ್ಲ", hi: "वह घृणा नहीं करता" },
    sanskrit: [
      "यस्तु सर्वाणि भूतान्यात्मन्येवानुपश्यति ।",
      "सर्वभूतेषु चात्मानं ततो न विजुगुप्सते ॥",
    ],
    iast: [
      "yas tu sarvāṇi bhūtāny ātmany evānupaśyati |",
      "sarvabhūteṣu cātmānaṃ tato na vijugupsate ||",
    ],
    keywords: [
      {
        term: "अनुपश्यति",
        iast: "anupaśyati",
        gloss: {
          en: "sees continuously, keeps on seeing",
          kn: "ನಿರಂತರವಾಗಿ ನೋಡುತ್ತಾನೆ",
          hi: "निरंतर देखता है",
        },
      },
      {
        term: "विजुगुप्सते",
        iast: "vijugupsate",
        gloss: {
          en: "recoils, feels revulsion, hides from",
          kn: "ಅಸಹ್ಯಪಡುತ್ತಾನೆ, ಹಿಂಜರಿಯುತ್ತಾನೆ",
          hi: "घृणा करता है, सिकुड़ता है",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "But one who sees all beings in the Self alone, and the Self in all beings, from that he does not shrink away.",
        explanation:
          "The turn from metaphysics to conduct, and it happens in a single word. Vijugupsate means to recoil, to feel disgust, to want to hide — and the verse says the seeing simply removes the possibility. Not that one overcomes revulsion by effort; there is nothing left to recoil from once the other is no longer other. Note the two directions given equal weight: beings in the Self, and the Self in beings. One alone would collapse into either absorption or pantheism. Held together they produce ethics without a rule.",
      },
      kn: {
        translation:
          "ಆದರೆ ಯಾವನು ಸಮಸ್ತ ಭೂತಗಳನ್ನೂ ಆತ್ಮದಲ್ಲಿಯೇ ಕಾಣುತ್ತಾನೋ, ಮತ್ತು ಸಮಸ್ತ ಭೂತಗಳಲ್ಲಿ ಆತ್ಮವನ್ನು ಕಾಣುತ್ತಾನೋ, ಅವನು ಯಾವುದರಿಂದಲೂ ಹಿಂಜರಿಯುವುದಿಲ್ಲ.",
        explanation:
          "ತತ್ತ್ವಶಾಸ್ತ್ರದಿಂದ ನಡವಳಿಕೆಗೆ ಇಲ್ಲಿ ತಿರುವು, ಅದೂ ಒಂದೇ ಪದದಲ್ಲಿ. 'ವಿಜುಗುಪ್ಸತೇ' ಎಂದರೆ ಹಿಂಜರಿಯುವುದು, ಅಸಹ್ಯಪಡುವುದು, ಮರೆಯಾಗಬಯಸುವುದು — ಈ ದರ್ಶನವು ಆ ಸಾಧ್ಯತೆಯನ್ನೇ ತೆಗೆದುಹಾಕುತ್ತದೆ ಎನ್ನುತ್ತದೆ ಶ್ಲೋಕ. ಪ್ರಯತ್ನದಿಂದ ಅಸಹ್ಯವನ್ನು ಗೆಲ್ಲುವುದಲ್ಲ; ಬೇರೆಯವನು ಬೇರೆಯಲ್ಲವಾದ ಮೇಲೆ ಹಿಂಜರಿಯುವುದಕ್ಕೆ ಏನೂ ಉಳಿಯುವುದಿಲ್ಲ. ಎರಡು ದಿಕ್ಕುಗಳಿಗೂ ಸಮಾನ ತೂಕ ಕೊಟ್ಟಿರುವುದನ್ನು ಗಮನಿಸಿ: ಆತ್ಮದಲ್ಲಿ ಭೂತಗಳು, ಮತ್ತು ಭೂತಗಳಲ್ಲಿ ಆತ್ಮ. ಒಂದೇ ಇದ್ದರೆ ಅದು ಲಯವಾಗಿಯೋ ಸರ್ವೇಶ್ವರವಾದವಾಗಿಯೋ ಕುಸಿಯುತ್ತಿತ್ತು. ಎರಡೂ ಜೊತೆಗಿದ್ದಾಗ ನಿಯಮವಿಲ್ಲದ ನೀತಿ ಹುಟ್ಟುತ್ತದೆ.",
      },
      hi: {
        translation:
          "किंतु जो समस्त भूतों को आत्मा में ही देखता है, और समस्त भूतों में आत्मा को देखता है, वह किसी से घृणा नहीं करता।",
        explanation:
          "तत्त्व से आचरण की ओर मोड़, और वह एक ही शब्द में होता है। 'विजुगुप्सते' का अर्थ है सिकुड़ना, घृणा करना, छिप जाना चाहना — और श्लोक कहता है कि यह दर्शन उस संभावना को ही समाप्त कर देता है। प्रयत्न से घृणा जीती नहीं जाती; जब दूसरा दूसरा रहा ही नहीं, तो सिकुड़ने के लिए कुछ बचता ही नहीं। दोनों दिशाओं को समान भार दिया गया है: आत्मा में भूत, और भूतों में आत्मा। अकेली एक दिशा या तो लय में या सर्वेश्वरवाद में ढह जाती। दोनों साथ रहने पर नियम-रहित नीति जन्म लेती है।",
      },
    },
  },

  {
    id: "isha-7",
    locator: "7",
    handle: { en: "What delusion, what sorrow", kn: "ಯಾವ ಮೋಹ, ಯಾವ ಶೋಕ", hi: "कौन-सा मोह, कौन-सा शोक" },
    sanskrit: [
      "यस्मिन्सर्वाणि भूतान्यात्मैवाभूद्विजानतः ।",
      "तत्र को मोहः कः शोक एकत्वमनुपश्यतः ॥",
    ],
    iast: [
      "yasmin sarvāṇi bhūtāny ātmaivābhūd vijānataḥ |",
      "tatra ko mohaḥ kaḥ śoka ekatvam anupaśyataḥ ||",
    ],
    keywords: [
      {
        term: "मोह",
        iast: "moha",
        gloss: {
          en: "delusion, bewilderment",
          kn: "ಮೋಹ, ಭ್ರಮೆ",
          hi: "मोह, भ्रम",
        },
      },
      {
        term: "एकत्व",
        iast: "ekatva",
        gloss: {
          en: "oneness, the state of being one",
          kn: "ಏಕತ್ವ, ಒಂದಾಗಿರುವಿಕೆ",
          hi: "एकत्व, एक होने की स्थिति",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "When, to one who knows, all beings have become the Self — then what delusion, what sorrow, can there be for that seer of oneness?",
        explanation:
          "The two questions are rhetorical, and their form matters: not 'his sorrow is lessened' but 'what sorrow?' — the category has lost its footing. Grief requires a gap between what is and what one wanted; delusion requires a second thing to mistake the first for. Remove twoness and neither has anywhere to stand. Note abhūt, a past tense: not 'will become' but 'has become'. Nothing is being constructed here; something is being noticed.",
      },
      kn: {
        translation:
          "ತಿಳಿದವನಿಗೆ ಸಮಸ್ತ ಭೂತಗಳೂ ಆತ್ಮವೇ ಆಗಿಬಿಟ್ಟಾಗ — ಏಕತ್ವವನ್ನು ಕಾಣುವ ಅವನಿಗೆ ಯಾವ ಮೋಹ, ಯಾವ ಶೋಕ?",
        explanation:
          "ಈ ಎರಡು ಪ್ರಶ್ನೆಗಳು ಪ್ರತಿವಚನ ಅಪೇಕ್ಷಿಸದವು, ಮತ್ತು ಅವುಗಳ ರೂಪವೇ ಮುಖ್ಯ: 'ಅವನ ಶೋಕ ಕಡಿಮೆಯಾಗುತ್ತದೆ' ಎಂದಲ್ಲ, 'ಯಾವ ಶೋಕ?' ಎಂದು — ಆ ಪರಿಕಲ್ಪನೆಗೇ ನೆಲೆ ಇಲ್ಲವಾಗಿದೆ. ಶೋಕಕ್ಕೆ ಇರುವುದಕ್ಕೂ ಬಯಸಿದ್ದಕ್ಕೂ ನಡುವೆ ಅಂತರ ಬೇಕು; ಮೋಹಕ್ಕೆ ಮೊದಲನೆಯದನ್ನು ಬೇರೆಯದೆಂದು ತಪ್ಪಾಗಿ ತಿಳಿಯಲು ಎರಡನೆಯದೊಂದು ಬೇಕು. ದ್ವಿತ್ವವನ್ನು ತೆಗೆದರೆ ಎರಡಕ್ಕೂ ನಿಲ್ಲಲು ಜಾಗವಿಲ್ಲ. 'ಅಭೂತ್' ಎಂಬ ಭೂತಕಾಲವನ್ನು ಗಮನಿಸಿ: 'ಆಗುತ್ತದೆ' ಅಲ್ಲ, 'ಆಗಿಬಿಟ್ಟಿದೆ'. ಇಲ್ಲಿ ಏನನ್ನೂ ಕಟ್ಟುತ್ತಿಲ್ಲ; ಇರುವುದನ್ನು ಗಮನಿಸಲಾಗುತ್ತಿದೆ.",
      },
      hi: {
        translation:
          "जानने वाले के लिए जब समस्त भूत आत्मा ही हो गए — तब एकत्व को देखने वाले उस द्रष्टा के लिए कौन-सा मोह, कौन-सा शोक?",
        explanation:
          "दोनों प्रश्न आलंकारिक हैं, और उनका रूप महत्वपूर्ण है: 'उसका शोक घट जाता है' नहीं, बल्कि 'कौन-सा शोक?' — उस श्रेणी का आधार ही जाता रहा। शोक के लिए जो है और जो चाहा था, उनके बीच अंतर चाहिए; मोह के लिए एक को दूसरा समझने हेतु दूसरा चाहिए। द्वैत हटा दीजिए, दोनों के खड़े होने की जगह नहीं बचती। 'अभूत्' इस भूतकाल पर ध्यान दें: 'हो जाएगा' नहीं, 'हो चुका'। यहाँ कुछ रचा नहीं जा रहा; जो है उसे लक्षित किया जा रहा है।",
      },
    },
  },

  {
    id: "isha-8",
    locator: "8",
    handle: { en: "He has reached out", kn: "ಅವನು ಎಲ್ಲೆಡೆ ವ್ಯಾಪಿಸಿದ್ದಾನೆ", hi: "वह सर्वत्र व्याप्त है" },
    sanskrit: [
      "स पर्यगाच्छुक्रमकायमव्रणमस्नाविरँ शुद्धमपापविद्धम् ।",
      "कविर्मनीषी परिभूः स्वयम्भूर्याथातथ्यतोऽर्थान्",
      "व्यदधाच्छाश्वतीभ्यः समाभ्यः ॥",
    ],
    iast: [
      "sa paryagāc chukram akāyam avraṇam asnāviraṃ śuddham apāpaviddham |",
      "kavir manīṣī paribhūḥ svayambhūr yāthātathyato 'rthān",
      "vyadadhāc chāśvatībhyaḥ samābhyaḥ ||",
    ],
    keywords: [
      {
        term: "कवि",
        iast: "kavi",
        gloss: {
          en: "seer — the one who sees, not merely a poet",
          kn: "ಕವಿ — ದ್ರಷ್ಟಾ, ಕೇವಲ ಕಾವ್ಯಕರ್ತನಲ್ಲ",
          hi: "कवि — द्रष्टा, केवल काव्यकार नहीं",
        },
      },
      {
        term: "स्वयम्भू",
        iast: "svayambhū",
        gloss: {
          en: "self-existent, arising from itself",
          kn: "ಸ್ವಯಂಭೂ, ತಾನಾಗಿಯೇ ಇರುವವನು",
          hi: "स्वयंभू, स्वयं से उत्पन्न",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "He has reached out everywhere — radiant, bodiless, without wound, without sinew, pure, untouched by evil. Seer, thinker, all-encompassing, self-existent, He has ordered things rightly through the endless years.",
        explanation:
          "The verse works by stripping. Bodiless, unwounded, sinewless, unpierced by evil — each negation removes something that could be damaged, and what is left cannot be harmed because there is nothing in it to break. Then the positive terms arrive: seer, thinker, self-existent. The final clause is the reason the Upanishad can be calm about the world's disorder — the ordering is not pending, it was done yāthātathyataḥ, 'according to what actually is', across time without beginning.",
      },
      kn: {
        translation:
          "ಅವನು ಎಲ್ಲೆಡೆ ವ್ಯಾಪಿಸಿದ್ದಾನೆ — ತೇಜೋಮಯ, ದೇಹರಹಿತ, ವ್ರಣರಹಿತ, ಸ್ನಾಯುರಹಿತ, ಶುದ್ಧ, ಪಾಪದಿಂದ ಸ್ಪರ್ಶಿಸಲ್ಪಡದವನು. ಕವಿ, ಮನೀಷಿ, ಸರ್ವವ್ಯಾಪಿ, ಸ್ವಯಂಭೂ — ಅವನು ಶಾಶ್ವತ ಸಂವತ್ಸರಗಳಿಂದ ವಸ್ತುಗಳನ್ನು ಯಥಾರ್ಥವಾಗಿ ವಿಧಿಸಿದ್ದಾನೆ.",
        explanation:
          "ಈ ಶ್ಲೋಕ ಕಳೆಯುವ ಮೂಲಕ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ದೇಹರಹಿತ, ವ್ರಣರಹಿತ, ಸ್ನಾಯುರಹಿತ, ಪಾಪದಿಂದ ಅಭೇದ್ಯ — ಪ್ರತಿ ನಿಷೇಧವೂ ಹಾನಿಗೊಳಗಾಗಬಲ್ಲ ಒಂದೊಂದನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ, ಮತ್ತು ಉಳಿದದ್ದಕ್ಕೆ ಹಾನಿಯಾಗದು ಏಕೆಂದರೆ ಅದರಲ್ಲಿ ಒಡೆಯುವಂಥದ್ದೇನೂ ಇಲ್ಲ. ಆಮೇಲೆ ಸಕಾರಾತ್ಮಕ ಪದಗಳು ಬರುತ್ತವೆ: ಕವಿ, ಮನೀಷಿ, ಸ್ವಯಂಭೂ. ಕೊನೆಯ ಭಾಗವೇ ಜಗತ್ತಿನ ಅವ್ಯವಸ್ಥೆಯ ಬಗ್ಗೆ ಉಪನಿಷತ್ತು ಶಾಂತವಾಗಿರಲು ಕಾರಣ — ಆ ವ್ಯವಸ್ಥೆ ಇನ್ನೂ ಬಾಕಿಯಿಲ್ಲ, ಅದು 'ಯಾಥಾತಥ್ಯತಃ' ಅಂದರೆ ವಾಸ್ತವವಾಗಿ ಇರುವಂತೆಯೇ, ಆದಿಯಿಲ್ಲದ ಕಾಲದಿಂದ ಮಾಡಲ್ಪಟ್ಟಿದೆ.",
      },
      hi: {
        translation:
          "वह सर्वत्र व्याप्त है — तेजोमय, अशरीरी, व्रणरहित, स्नायुरहित, शुद्ध, पाप से अस्पृष्ट। कवि, मनीषी, सर्वव्यापी, स्वयंभू — उसने अनादि काल से पदार्थों को यथार्थ रूप में विहित किया है।",
        explanation:
          "यह श्लोक घटाकर काम करता है। अशरीरी, व्रणरहित, स्नायुरहित, पाप से अभेद्य — प्रत्येक निषेध उस एक वस्तु को हटाता है जो क्षतिग्रस्त हो सकती थी, और जो शेष रहता है उसे हानि नहीं पहुँच सकती क्योंकि उसमें टूटने योग्य कुछ है ही नहीं। फिर विधेय पद आते हैं: कवि, मनीषी, स्वयंभू। अंतिम अंश ही वह कारण है जिससे उपनिषद् जगत् की अव्यवस्था पर शांत रह सकता है — वह व्यवस्था लंबित नहीं, वह 'याथातथ्यतः' अर्थात् जैसा वस्तुतः है वैसा ही, अनादि काल से की जा चुकी है।",
      },
    },
  },

  {
    id: "isha-9",
    locator: "9",
    handle: { en: "Into blind darkness", kn: "ಕುರುಡು ಕತ್ತಲೆಗೆ", hi: "अंधकार में प्रवेश" },
    sanskrit: [
      "अन्धं तमः प्रविशन्ति येऽविद्यामुपासते ।",
      "ततो भूय इव ते तमो य उ विद्यायाँ रताः ॥",
    ],
    iast: [
      "andhaṃ tamaḥ praviśanti ye 'vidyām upāsate |",
      "tato bhūya iva te tamo ya u vidyāyāṃ ratāḥ ||",
    ],
    keywords: [
      {
        term: "अविद्या",
        iast: "avidyā",
        gloss: {
          en: "here: ritual action, works — not simply ignorance",
          kn: "ಇಲ್ಲಿ: ಕರ್ಮಕಾಂಡ — ಕೇವಲ ಅಜ್ಞಾನವಲ್ಲ",
          hi: "यहाँ: कर्मकांड — केवल अज्ञान नहीं",
        },
      },
      {
        term: "विद्या",
        iast: "vidyā",
        gloss: {
          en: "here: knowledge of the deities, meditation",
          kn: "ಇಲ್ಲಿ: ದೇವತಾಜ್ಞಾನ, ಉಪಾಸನೆ",
          hi: "यहाँ: देवताज्ञान, उपासना",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Into blind darkness enter those who worship ignorance; into greater darkness still, as it were, those who delight in knowledge alone.",
        explanation:
          "The verse is startling because it condemns the pious reader more sharply than the ignorant one. In this context avidyā means ritual works and vidyā means meditative knowledge of the deities — so the target is not learning as such, but exclusive attachment to either. The person who does only rites is in the dark; the person who has knowledge and therefore despises rites is deeper in, because their darkness comes with the conviction of being enlightened. The 'as it were' (iva) keeps the judgement from hardening into a doctrine.",
      },
      kn: {
        translation:
          "ಅವಿದ್ಯೆಯನ್ನು ಉಪಾಸಿಸುವವರು ಕುರುಡು ಕತ್ತಲೆಯನ್ನು ಪ್ರವೇಶಿಸುತ್ತಾರೆ; ವಿದ್ಯೆಯಲ್ಲಿಯೇ ರಮಿಸುವವರು ಅದಕ್ಕಿಂತಲೂ ಹೆಚ್ಚಿನ ಕತ್ತಲೆಯನ್ನು ಸೇರುತ್ತಾರೆ.",
        explanation:
          "ಈ ಶ್ಲೋಕ ಬೆಚ್ಚಿಬೀಳಿಸುತ್ತದೆ, ಏಕೆಂದರೆ ಅಜ್ಞಾನಿಗಿಂತ ಪಂಡಿತನನ್ನೇ ಹೆಚ್ಚು ಕಠಿಣವಾಗಿ ಖಂಡಿಸುತ್ತದೆ. ಇಲ್ಲಿ 'ಅವಿದ್ಯಾ' ಎಂದರೆ ಕರ್ಮಕಾಂಡ, 'ವಿದ್ಯಾ' ಎಂದರೆ ದೇವತೋಪಾಸನೆ — ಆದ್ದರಿಂದ ಗುರಿ ಜ್ಞಾನವಲ್ಲ, ಎರಡರಲ್ಲಿ ಯಾವುದಾದರೂ ಒಂದಕ್ಕೆ ಮಾತ್ರ ಅಂಟಿಕೊಳ್ಳುವುದು. ಕೇವಲ ಕರ್ಮ ಮಾಡುವವನು ಕತ್ತಲೆಯಲ್ಲಿದ್ದಾನೆ; ಜ್ಞಾನವಿದೆಯೆಂದು ಕರ್ಮವನ್ನು ತಿರಸ್ಕರಿಸುವವನು ಇನ್ನೂ ಆಳದಲ್ಲಿದ್ದಾನೆ, ಏಕೆಂದರೆ ಅವನ ಕತ್ತಲೆಯ ಜೊತೆಗೆ ತಾನು ಬೆಳಗಿದ್ದೇನೆಂಬ ನಂಬಿಕೆಯೂ ಇದೆ. 'ಇವ' ಎಂಬ ಪದವು ಈ ತೀರ್ಪು ಸಿದ್ಧಾಂತವಾಗಿ ಗಟ್ಟಿಯಾಗದಂತೆ ತಡೆಯುತ್ತದೆ.",
      },
      hi: {
        translation:
          "जो अविद्या की उपासना करते हैं वे अंधकार में प्रवेश करते हैं; और जो केवल विद्या में ही रमते हैं वे मानो उससे भी अधिक अंधकार में।",
        explanation:
          "यह श्लोक चौंकाता है, क्योंकि यह अज्ञानी से अधिक कठोरता से विद्वान् की भर्त्सना करता है। यहाँ 'अविद्या' का अर्थ कर्मकांड और 'विद्या' का अर्थ देवोपासना है — इसलिए लक्ष्य ज्ञान नहीं, बल्कि दोनों में से किसी एक से विशेष आसक्ति है। जो केवल कर्म करता है वह अंधकार में है; जो ज्ञान के बल पर कर्म को तुच्छ मानता है वह और गहरे में है, क्योंकि उसके अंधकार के साथ प्रबुद्ध होने का विश्वास भी जुड़ा है। 'इव' शब्द इस निर्णय को सिद्धांत बनकर कठोर होने से रोकता है।",
      },
    },
  },

  {
    id: "isha-10",
    locator: "10",
    handle: { en: "So we heard from the wise", kn: "ಧೀರರಿಂದ ಹೀಗೆ ಕೇಳಿದೆವು", hi: "धीरों से ऐसा सुना" },
    sanskrit: [
      "अन्यदेवाहुर्विद्ययाऽन्यदाहुरविद्यया ।",
      "इति शुश्रुम धीराणां ये नस्तद्विचचक्षिरे ॥",
    ],
    iast: [
      "anyad evāhur vidyayānyad āhur avidyayā |",
      "iti śuśruma dhīrāṇāṃ ye nas tad vicacakṣire ||",
    ],
    keywords: [
      {
        term: "धीर",
        iast: "dhīra",
        gloss: {
          en: "steady one, the wise",
          kn: "ಧೀರ, ಸ್ಥಿತಪ್ರಜ್ಞ",
          hi: "धीर, स्थिरबुद्धि",
        },
      },
      {
        term: "शुश्रुम",
        iast: "śuśruma",
        gloss: {
          en: "we have heard — the verb of śruti itself",
          kn: "ನಾವು ಕೇಳಿದ್ದೇವೆ — ಶ್ರುತಿಯ ಕ್ರಿಯಾಪದವೇ",
          hi: "हमने सुना — श्रुति की ही क्रिया",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "One thing, they say, comes of knowledge; another thing, they say, comes of ignorance. So have we heard from the wise who explained it to us.",
        explanation:
          "A verse about how the teaching travels. Note that the speaker does not claim first-hand authority: śuśruma, 'we have heard' — the same root that gives śruti its name. The tradition is being cited, not invented. The content is deliberately withheld — 'one thing... another thing' — because the point is that the two produce genuinely different results and must therefore not be confused. Verse 11 will supply what this one refuses to state.",
      },
      kn: {
        translation:
          "ವಿದ್ಯೆಯಿಂದ ಒಂದು ಫಲ ಬರುತ್ತದೆ, ಅವಿದ್ಯೆಯಿಂದ ಬೇರೆಯದೇ ಬರುತ್ತದೆ ಎನ್ನುತ್ತಾರೆ. ಇದನ್ನು ನಮಗೆ ವಿವರಿಸಿದ ಧೀರರಿಂದ ನಾವು ಹೀಗೆ ಕೇಳಿದ್ದೇವೆ.",
        explanation:
          "ಬೋಧನೆ ಹೇಗೆ ಸಾಗಿಬರುತ್ತದೆ ಎಂಬುದರ ಬಗೆಗಿನ ಶ್ಲೋಕ. ವಕ್ತೃ ತನ್ನದೇ ಅಧಿಕಾರವನ್ನು ಹೇಳಿಕೊಳ್ಳುವುದಿಲ್ಲ ಎಂಬುದನ್ನು ಗಮನಿಸಿ: 'ಶುಶ್ರುಮ' — ನಾವು ಕೇಳಿದ್ದೇವೆ, ಇದೇ ಧಾತುವಿನಿಂದ 'ಶ್ರುತಿ' ಎಂಬ ಹೆಸರು ಬಂದದ್ದು. ಇಲ್ಲಿ ಪರಂಪರೆಯನ್ನು ಉಲ್ಲೇಖಿಸಲಾಗುತ್ತಿದೆ, ಹೊಸದಾಗಿ ಕಟ್ಟಲಾಗುತ್ತಿಲ್ಲ. ವಿಷಯವನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಹೇಳಿಲ್ಲ — 'ಒಂದು... ಬೇರೆಯದು' — ಏಕೆಂದರೆ ಆ ಎರಡೂ ನಿಜಕ್ಕೂ ಬೇರೆ ಬೇರೆ ಫಲ ಕೊಡುತ್ತವೆ, ಆದ್ದರಿಂದ ಅವನ್ನು ಬೆರೆಸಬಾರದು ಎಂಬುದೇ ಇಲ್ಲಿನ ಸಾರ. ಈ ಶ್ಲೋಕ ಹೇಳದಿರುವುದನ್ನು ಹನ್ನೊಂದನೆಯದು ಹೇಳುತ್ತದೆ.",
      },
      hi: {
        translation:
          "वे कहते हैं कि विद्या से एक फल होता है, और अविद्या से दूसरा। ऐसा हमने उन धीर पुरुषों से सुना है जिन्होंने हमें यह समझाया।",
        explanation:
          "यह श्लोक इस बारे में है कि उपदेश कैसे चला आता है। ध्यान दें कि वक्ता अपना स्वतंत्र अधिकार नहीं जताता: 'शुश्रुम' — हमने सुना, वही धातु जिससे 'श्रुति' नाम बना। यहाँ परंपरा उद्धृत की जा रही है, गढ़ी नहीं जा रही। विषय जानबूझकर नहीं बताया गया — 'एक... दूसरा' — क्योंकि सार यही है कि दोनों वस्तुतः भिन्न फल देते हैं, अतः उन्हें मिलाना नहीं चाहिए। जो यह श्लोक नहीं कहता, ग्यारहवाँ वही देगा।",
      },
    },
  },

  {
    id: "isha-11",
    locator: "11",
    handle: { en: "Both together", kn: "ಎರಡೂ ಜೊತೆಯಾಗಿ", hi: "दोनों साथ-साथ" },
    sanskrit: [
      "विद्यां चाविद्यां च यस्तद्वेदोभयँ सह ।",
      "अविद्यया मृत्युं तीर्त्वा विद्ययाऽमृतमश्नुते ॥",
    ],
    iast: [
      "vidyāṃ cāvidyāṃ ca yas tad vedobhayaṃ saha |",
      "avidyayā mṛtyuṃ tīrtvā vidyayāmṛtam aśnute ||",
    ],
    keywords: [
      {
        term: "सह",
        iast: "saha",
        gloss: {
          en: "together, jointly — the pivot of the verse",
          kn: "ಜೊತೆಯಾಗಿ — ಈ ಶ್ಲೋಕದ ಕೀಲು",
          hi: "साथ-साथ — इस श्लोक की धुरी",
        },
      },
      {
        term: "तीर्त्वा",
        iast: "tīrtvā",
        gloss: {
          en: "having crossed over, as one crosses a river",
          kn: "ದಾಟಿ, ನದಿಯನ್ನು ದಾಟುವಂತೆ",
          hi: "पार करके, जैसे नदी पार की जाए",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "He who knows both knowledge and ignorance together — by ignorance crosses over death, by knowledge attains the deathless.",
        explanation:
          "This is the resolution the whole text has been building toward, and it is a synthesis rather than a choice. Ritual action carries one across death — it works within time and settles what belongs to time. Knowledge gives what was never in time to begin with. Each does what the other cannot, so neither can be discarded. Saha, 'together', is the operative word: not one after the other, not one instead of the other. The same reconciliation of works and knowledge recurs as the central problem of the Gita.",
      },
      kn: {
        translation:
          "ವಿದ್ಯೆ ಮತ್ತು ಅವಿದ್ಯೆ ಎರಡನ್ನೂ ಜೊತೆಯಾಗಿ ತಿಳಿದವನು — ಅವಿದ್ಯೆಯಿಂದ ಮೃತ್ಯುವನ್ನು ದಾಟಿ, ವಿದ್ಯೆಯಿಂದ ಅಮೃತತ್ವವನ್ನು ಪಡೆಯುತ್ತಾನೆ.",
        explanation:
          "ಇಡೀ ಪಠ್ಯ ಸಾಗಿಬಂದ ಪರಿಹಾರವಿದು, ಮತ್ತು ಇದು ಆಯ್ಕೆಯಲ್ಲ, ಸಮನ್ವಯ. ಕರ್ಮವು ಮೃತ್ಯುವನ್ನು ದಾಟಿಸುತ್ತದೆ — ಅದು ಕಾಲದೊಳಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಮತ್ತು ಕಾಲಕ್ಕೆ ಸೇರಿದ್ದನ್ನು ಇತ್ಯರ್ಥಗೊಳಿಸುತ್ತದೆ. ಜ್ಞಾನವು ಎಂದೂ ಕಾಲದೊಳಗೆ ಇಲ್ಲದಿದ್ದುದನ್ನು ಕೊಡುತ್ತದೆ. ಒಂದು ಮಾಡಲಾಗದ್ದನ್ನು ಇನ್ನೊಂದು ಮಾಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಯಾವುದನ್ನೂ ಬಿಡಲಾಗದು. 'ಸಹ' ಎಂಬುದೇ ಇಲ್ಲಿನ ಮುಖ್ಯ ಪದ: ಒಂದಾದ ಮೇಲೆ ಇನ್ನೊಂದಲ್ಲ, ಒಂದರ ಬದಲಿಗೆ ಇನ್ನೊಂದೂ ಅಲ್ಲ. ಕರ್ಮ ಮತ್ತು ಜ್ಞಾನಗಳ ಇದೇ ಸಮನ್ವಯವು ಗೀತೆಯ ಕೇಂದ್ರ ಸಮಸ್ಯೆಯಾಗಿ ಮತ್ತೆ ಬರುತ್ತದೆ.",
      },
      hi: {
        translation:
          "जो विद्या और अविद्या दोनों को साथ-साथ जानता है — वह अविद्या से मृत्यु को पार कर, विद्या से अमृतत्व प्राप्त करता है।",
        explanation:
          "यही वह समाधान है जिसकी ओर सारा पाठ बढ़ रहा था, और यह चुनाव नहीं, समन्वय है। कर्म मृत्यु के पार ले जाता है — वह काल के भीतर काम करता है और जो काल का है उसे निपटाता है। ज्ञान वह देता है जो कभी काल में था ही नहीं। एक वह करता है जो दूसरा नहीं कर सकता, इसलिए किसी को छोड़ा नहीं जा सकता। 'सह' ही मुख्य शब्द है: एक के बाद दूसरा नहीं, एक के बदले दूसरा भी नहीं। कर्म और ज्ञान का यही समन्वय गीता की केंद्रीय समस्या बनकर फिर लौटता है।",
      },
    },
  },

  {
    id: "isha-12",
    locator: "12",
    handle: { en: "The unmanifest and the manifest", kn: "ಅವ್ಯಕ್ತ ಮತ್ತು ವ್ಯಕ್ತ", hi: "अव्यक्त और व्यक्त" },
    sanskrit: [
      "अन्धं तमः प्रविशन्ति येऽसम्भूतिमुपासते ।",
      "ततो भूय इव ते तमो य उ सम्भूत्याँ रताः ॥",
    ],
    iast: [
      "andhaṃ tamaḥ praviśanti ye 'sambhūtim upāsate |",
      "tato bhūya iva te tamo ya u sambhūtyāṃ ratāḥ ||",
    ],
    keywords: [
      {
        term: "सम्भूति",
        iast: "sambhūti",
        gloss: {
          en: "becoming, the manifest, that which has come to be",
          kn: "ಸಂಭೂತಿ, ವ್ಯಕ್ತವಾದದ್ದು",
          hi: "संभूति, व्यक्त, जो हो चुका",
        },
      },
      {
        term: "असम्भूति",
        iast: "asambhūti",
        gloss: {
          en: "the unmanifest, the unborn ground",
          kn: "ಅಸಂಭೂತಿ, ಅವ್ಯಕ್ತ ಮೂಲ",
          hi: "असंभूति, अव्यक्त मूल",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Into blind darkness enter those who worship the unmanifest; into greater darkness still, as it were, those who delight in the manifest.",
        explanation:
          "The structure of verse 9 returns with a new pair, which tells you the pattern is the argument. Where 9 balanced works against knowledge, 12 balances the unmanifest ground against the manifest world. Again both exclusive positions are condemned, and again the more refined-looking one is condemned harder. A reader who has just learned to prefer the formless is caught here as squarely as the materialist. The Upanishad is systematically closing every exit that leads to a single half.",
      },
      kn: {
        translation:
          "ಅಸಂಭೂತಿಯನ್ನು ಉಪಾಸಿಸುವವರು ಕುರುಡು ಕತ್ತಲೆಯನ್ನು ಪ್ರವೇಶಿಸುತ್ತಾರೆ; ಸಂಭೂತಿಯಲ್ಲಿಯೇ ರಮಿಸುವವರು ಅದಕ್ಕಿಂತಲೂ ಹೆಚ್ಚಿನ ಕತ್ತಲೆಯನ್ನು ಸೇರುತ್ತಾರೆ.",
        explanation:
          "ಒಂಬತ್ತನೆಯ ಶ್ಲೋಕದ ರಚನೆ ಹೊಸ ಜೋಡಿಯೊಂದಿಗೆ ಮರಳುತ್ತದೆ — ಅಂದರೆ ಈ ಮಾದರಿಯೇ ವಾದ. ಒಂಬತ್ತನೆಯದು ಕರ್ಮ ಮತ್ತು ಜ್ಞಾನವನ್ನು ತೂಗಿದರೆ, ಹನ್ನೆರಡನೆಯದು ಅವ್ಯಕ್ತ ಮೂಲ ಮತ್ತು ವ್ಯಕ್ತ ಜಗತ್ತನ್ನು ತೂಗುತ್ತದೆ. ಇಲ್ಲಿಯೂ ಎರಡೂ ಏಕಪಕ್ಷೀಯ ನಿಲುವುಗಳು ಖಂಡಿಸಲ್ಪಡುತ್ತವೆ, ಮತ್ತು ಹೆಚ್ಚು ಸೂಕ್ಷ್ಮವಾಗಿ ಕಾಣುವುದೇ ಹೆಚ್ಚು ಕಠಿಣವಾಗಿ. ನಿರಾಕಾರವನ್ನೇ ಶ್ರೇಷ್ಠವೆಂದು ಈಗಷ್ಟೇ ಕಲಿತವನೂ ಇಲ್ಲಿ ಭೌತವಾದಿಯಷ್ಟೇ ನೇರವಾಗಿ ಸಿಕ್ಕಿಬೀಳುತ್ತಾನೆ. ಒಂದೇ ಅರ್ಧಕ್ಕೆ ಒಯ್ಯುವ ಪ್ರತಿ ದಾರಿಯನ್ನೂ ಉಪನಿಷತ್ತು ಕ್ರಮವಾಗಿ ಮುಚ್ಚುತ್ತಿದೆ.",
      },
      hi: {
        translation:
          "जो असंभूति की उपासना करते हैं वे अंधकार में प्रवेश करते हैं; और जो संभूति में ही रमते हैं वे मानो उससे भी अधिक अंधकार में।",
        explanation:
          "नवें श्लोक की संरचना नए युग्म के साथ लौटती है — अर्थात् यह प्रतिरूप ही तर्क है। जहाँ नवाँ कर्म और ज्ञान को तौलता है, वहाँ बारहवाँ अव्यक्त मूल और व्यक्त जगत् को तौलता है। यहाँ भी दोनों एकांगी पक्षों की भर्त्सना है, और जो अधिक सूक्ष्म दिखता है उसकी अधिक कठोर। जिसने अभी-अभी निराकार को श्रेष्ठ मानना सीखा है, वह यहाँ भौतिकवादी जितनी ही सीधाई से पकड़ा जाता है। उपनिषद् क्रमशः हर उस निकास को बंद कर रहा है जो किसी एक आधे तक ले जाता है।",
      },
    },
  },

  {
    id: "isha-13",
    locator: "13",
    handle: { en: "Different, they said", kn: "ಬೇರೆಯದೆಂದರು", hi: "भिन्न, ऐसा कहा" },
    sanskrit: [
      "अन्यदेवाहुः सम्भवादन्यदाहुरसम्भवात् ।",
      "इति शुश्रुम धीराणां ये नस्तद्विचचक्षिरे ॥",
    ],
    iast: [
      "anyad evāhuḥ sambhavād anyad āhur asambhavāt |",
      "iti śuśruma dhīrāṇāṃ ye nas tad vicacakṣire ||",
    ],
    keywords: [
      {
        term: "सम्भव",
        iast: "sambhava",
        gloss: {
          en: "coming into being, origination",
          kn: "ಉತ್ಪತ್ತಿ, ಹುಟ್ಟುವಿಕೆ",
          hi: "उत्पत्ति, होना",
        },
      },
      {
        term: "विचचक्षिरे",
        iast: "vicacakṣire",
        gloss: {
          en: "they expounded, made clear",
          kn: "ಅವರು ವಿವರಿಸಿದರು",
          hi: "उन्होंने स्पष्ट किया",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "One thing, they say, comes from becoming; another thing, they say, comes from non-becoming. So have we heard from the wise who explained it to us.",
        explanation:
          "Verse 10 repeated exactly, with the new pair substituted in. The repetition is doing structural work: it signals that this second problem is to be handled by the same method as the first, and it hands authority back to the tradition at precisely the moment the reasoning gets hardest. Notice again that the speaker reports rather than asserts. What is being transmitted is a way of holding two things at once, not a conclusion to memorise.",
      },
      kn: {
        translation:
          "ಸಂಭವದಿಂದ ಒಂದು ಫಲ ಬರುತ್ತದೆ, ಅಸಂಭವದಿಂದ ಬೇರೆಯದೇ ಬರುತ್ತದೆ ಎನ್ನುತ್ತಾರೆ. ಇದನ್ನು ನಮಗೆ ವಿವರಿಸಿದ ಧೀರರಿಂದ ನಾವು ಹೀಗೆ ಕೇಳಿದ್ದೇವೆ.",
        explanation:
          "ಹತ್ತನೆಯ ಶ್ಲೋಕವೇ ಹೊಸ ಜೋಡಿಯೊಂದಿಗೆ ಯಥಾವತ್ತಾಗಿ ಪುನರಾವರ್ತನೆಗೊಂಡಿದೆ. ಈ ಪುನರಾವರ್ತನೆ ರಚನಾತ್ಮಕ ಕೆಲಸ ಮಾಡುತ್ತಿದೆ: ಈ ಎರಡನೆಯ ಸಮಸ್ಯೆಯನ್ನೂ ಮೊದಲನೆಯದರ ವಿಧಾನದಿಂದಲೇ ಪರಿಹರಿಸಬೇಕೆಂದು ಸೂಚಿಸುತ್ತದೆ, ಮತ್ತು ತರ್ಕವು ಅತ್ಯಂತ ಕಠಿಣವಾಗುವ ಗಳಿಗೆಯಲ್ಲಿಯೇ ಅಧಿಕಾರವನ್ನು ಪರಂಪರೆಗೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ವಕ್ತೃ ಇಲ್ಲಿಯೂ ಪ್ರತಿಪಾದಿಸುವುದಿಲ್ಲ, ವರದಿ ಮಾಡುತ್ತಾನೆ. ಇಲ್ಲಿ ಹಸ್ತಾಂತರವಾಗುತ್ತಿರುವುದು ಕಂಠಪಾಠ ಮಾಡಬೇಕಾದ ತೀರ್ಮಾನವಲ್ಲ, ಎರಡನ್ನೂ ಏಕಕಾಲದಲ್ಲಿ ಹಿಡಿದಿಡುವ ಕ್ರಮ.",
      },
      hi: {
        translation:
          "वे कहते हैं कि संभव से एक फल होता है, और असंभव से दूसरा। ऐसा हमने उन धीर पुरुषों से सुना है जिन्होंने हमें यह समझाया।",
        explanation:
          "दसवाँ श्लोक ही नए युग्म के साथ ज्यों का त्यों दोहराया गया है। यह पुनरावृत्ति संरचनात्मक काम कर रही है: यह संकेत देती है कि इस दूसरी समस्या को भी पहली वाली विधि से ही सुलझाना है, और ठीक उसी क्षण अधिकार परंपरा को लौटा देती है जब तर्क सबसे कठिन होता है। यहाँ भी वक्ता प्रतिपादित नहीं करता, सूचित करता है। जो हस्तांतरित हो रहा है वह रटने योग्य निष्कर्ष नहीं, दो को एक साथ थामे रखने की रीति है।",
      },
    },
  },

  {
    id: "isha-14",
    locator: "14",
    handle: { en: "Crossing by destruction", kn: "ವಿನಾಶದಿಂದ ದಾಟುವುದು", hi: "विनाश से पार" },
    sanskrit: [
      "सम्भूतिं च विनाशं च यस्तद्वेदोभयँ सह ।",
      "विनाशेन मृत्युं तीर्त्वा सम्भूत्याऽमृतमश्नुते ॥",
    ],
    iast: [
      "sambhūtiṃ ca vināśaṃ ca yas tad vedobhayaṃ saha |",
      "vināśena mṛtyuṃ tīrtvā sambhūtyāmṛtam aśnute ||",
    ],
    keywords: [
      {
        term: "विनाश",
        iast: "vināśa",
        gloss: {
          en: "destruction, dissolution",
          kn: "ವಿನಾಶ, ಲಯ",
          hi: "विनाश, लय",
        },
      },
      {
        term: "अमृतम्",
        iast: "amṛtam",
        gloss: {
          en: "the deathless",
          kn: "ಅಮೃತ, ಮರಣರಹಿತ",
          hi: "अमृत, मृत्युरहित",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "He who knows both becoming and destruction together — by destruction crosses over death, by becoming attains the deathless.",
        explanation:
          "The second synthesis, matching verse 11 exactly in form. What passes away is precisely what carries one through death, because dissolution is how the temporal completes itself rather than a failure of it. Manifestation, understood rightly, is not a fall from the absolute but its availability. As before, saha holds the two together. The Upanishad has now refused, twice, to let its reader escape into either half of a pair — and the argument of the text is complete.",
      },
      kn: {
        translation:
          "ಸಂಭೂತಿ ಮತ್ತು ವಿನಾಶ ಎರಡನ್ನೂ ಜೊತೆಯಾಗಿ ತಿಳಿದವನು — ವಿನಾಶದಿಂದ ಮೃತ್ಯುವನ್ನು ದಾಟಿ, ಸಂಭೂತಿಯಿಂದ ಅಮೃತತ್ವವನ್ನು ಪಡೆಯುತ್ತಾನೆ.",
        explanation:
          "ಹನ್ನೊಂದನೆಯ ಶ್ಲೋಕದ ರೂಪಕ್ಕೆ ನಿಖರವಾಗಿ ಹೊಂದುವ ಎರಡನೆಯ ಸಮನ್ವಯ. ನಶಿಸಿಹೋಗುವುದೇ ಮೃತ್ಯುವನ್ನು ದಾಟಿಸುತ್ತದೆ, ಏಕೆಂದರೆ ಲಯವೆಂಬುದು ಕಾಲಿಕವಾದದ್ದರ ಸೋಲಲ್ಲ, ಅದು ತನ್ನನ್ನು ಪೂರ್ಣಗೊಳಿಸಿಕೊಳ್ಳುವ ಕ್ರಮ. ಸರಿಯಾಗಿ ಅರ್ಥಮಾಡಿಕೊಂಡರೆ ವ್ಯಕ್ತವಾಗುವಿಕೆ ಪರಬ್ರಹ್ಮದಿಂದ ಬಿದ್ದದ್ದಲ್ಲ, ಅದರ ಲಭ್ಯತೆ. ಮೊದಲಿನಂತೆಯೇ 'ಸಹ' ಎರಡನ್ನೂ ಜೊತೆಗಿಡುತ್ತದೆ. ಜೋಡಿಯ ಯಾವುದೇ ಒಂದು ಅರ್ಧಕ್ಕೆ ಓದುಗನು ತಪ್ಪಿಸಿಕೊಂಡು ಹೋಗುವುದನ್ನು ಉಪನಿಷತ್ತು ಎರಡು ಬಾರಿ ನಿರಾಕರಿಸಿದೆ — ಪಠ್ಯದ ವಾದ ಇಲ್ಲಿಗೆ ಪೂರ್ಣ.",
      },
      hi: {
        translation:
          "जो संभूति और विनाश दोनों को साथ-साथ जानता है — वह विनाश से मृत्यु को पार कर, संभूति से अमृतत्व प्राप्त करता है।",
        explanation:
          "ग्यारहवें श्लोक के रूप से ठीक मेल खाता दूसरा समन्वय। जो नष्ट होता है वही मृत्यु के पार ले जाता है, क्योंकि लय कालिक की विफलता नहीं, उसके पूर्ण होने की रीति है। ठीक से समझें तो व्यक्त होना परब्रह्म से पतन नहीं, उसकी सुलभता है। पहले की भाँति 'सह' दोनों को साथ थामे रखता है। युग्म के किसी एक आधे में पाठक के भाग निकलने से उपनिषद् दो बार इनकार कर चुका — पाठ का तर्क यहीं पूर्ण होता है।",
      },
    },
  },

  {
    id: "isha-15",
    locator: "15",
    handle: { en: "The golden vessel", kn: "ಸುವರ್ಣ ಪಾತ್ರೆ", hi: "स्वर्णमय पात्र" },
    sanskrit: [
      "हिरण्मयेन पात्रेण सत्यस्यापिहितं मुखम् ।",
      "तत्त्वं पूषन्नपावृणु सत्यधर्माय दृष्टये ॥",
    ],
    iast: [
      "hiraṇmayena pātreṇa satyasyāpihitaṃ mukham |",
      "tat tvaṃ pūṣann apāvṛṇu satyadharmāya dṛṣṭaye ||",
    ],
    keywords: [
      {
        term: "हिरण्मय",
        iast: "hiraṇmaya",
        gloss: {
          en: "golden — beautiful, and therefore the harder to see past",
          kn: "ಸುವರ್ಣಮಯ — ಸುಂದರ, ಆದ್ದರಿಂದಲೇ ದಾಟಿ ನೋಡುವುದು ಕಷ್ಟ",
          hi: "स्वर्णमय — सुंदर, इसीलिए पार देखना कठिन",
        },
      },
      {
        term: "पूषन्",
        iast: "pūṣan",
        gloss: {
          en: "the Nourisher — the sun addressed by name",
          kn: "ಪೂಷನ್ — ಪೋಷಕ, ಸೂರ್ಯನನ್ನು ಹೆಸರಿಸಿ ಕರೆದದ್ದು",
          hi: "पूषन् — पोषक, सूर्य को नाम लेकर संबोधन",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "The face of truth is covered with a golden vessel. Unveil it, O Nourisher, that I who love the truth may see.",
        explanation:
          "The last four verses turn from argument to prayer, and this is the most quoted of them. The covering is golden — not a wall but a brilliance, the sun's own disc, and beauty is precisely what makes it hard to see past. What obscures truth here is not darkness but a lesser radiance mistaken for the thing itself. The request is not for a new vision but for a removal: apāvṛṇu, uncover. And the speaker gives their qualification plainly — satyadharmāya, one whose law is truth.",
      },
      kn: {
        translation:
          "ಸತ್ಯದ ಮುಖವು ಸುವರ್ಣಮಯ ಪಾತ್ರೆಯಿಂದ ಮುಚ್ಚಲ್ಪಟ್ಟಿದೆ. ಪೂಷನೇ, ಸತ್ಯವನ್ನೇ ಧರ್ಮವಾಗಿಸಿಕೊಂಡ ನಾನು ಕಾಣುವಂತೆ ಅದನ್ನು ತೆರೆದುಬಿಡು.",
        explanation:
          "ಕೊನೆಯ ನಾಲ್ಕು ಶ್ಲೋಕಗಳು ವಾದದಿಂದ ಪ್ರಾರ್ಥನೆಗೆ ತಿರುಗುತ್ತವೆ, ಮತ್ತು ಅವುಗಳಲ್ಲಿ ಇದೇ ಅತ್ಯಂತ ಉಲ್ಲೇಖಿತ. ಮುಚ್ಚಿರುವುದು ಸುವರ್ಣಮಯ — ಗೋಡೆಯಲ್ಲ, ಪ್ರಕಾಶ; ಸೂರ್ಯನ ಬಿಂಬವೇ. ಸೌಂದರ್ಯವೇ ಅದನ್ನು ದಾಟಿ ನೋಡುವುದನ್ನು ಕಷ್ಟಗೊಳಿಸುತ್ತದೆ. ಇಲ್ಲಿ ಸತ್ಯವನ್ನು ಮರೆಮಾಚುವುದು ಕತ್ತಲೆಯಲ್ಲ, ವಸ್ತುವೆಂದೇ ಭ್ರಮಿಸಲ್ಪಟ್ಟ ಒಂದು ಕಿರಿಯ ಪ್ರಕಾಶ. ಕೋರಿಕೆ ಹೊಸ ದರ್ಶನಕ್ಕಲ್ಲ, ತೆಗೆದುಹಾಕುವಿಕೆಗೆ: 'ಅಪಾವೃಣು' — ತೆರೆ. ಮತ್ತು ವಕ್ತೃ ತನ್ನ ಅರ್ಹತೆಯನ್ನು ನೇರವಾಗಿ ಹೇಳುತ್ತಾನೆ — 'ಸತ್ಯಧರ್ಮಾಯ', ಸತ್ಯವೇ ಧರ್ಮವಾದವನಿಗೆ.",
      },
      hi: {
        translation:
          "सत्य का मुख स्वर्णमय पात्र से ढका है। हे पूषन्, उसे हटा दे, जिससे सत्यधर्मा मैं देख सकूँ।",
        explanation:
          "अंतिम चार श्लोक तर्क से प्रार्थना की ओर मुड़ते हैं, और उनमें यही सर्वाधिक उद्धृत है। ढकने वाला स्वर्णमय है — दीवार नहीं, आभा; सूर्य का ही बिंब। सुंदरता ही उसके पार देखना कठिन बनाती है। यहाँ सत्य को अंधकार नहीं ढकता, बल्कि एक छोटी आभा ढकती है जिसे वस्तु ही मान लिया गया। याचना नए दर्शन की नहीं, हटाने की है: 'अपावृणु' — अनावृत कर। और वक्ता अपनी पात्रता सीधे बता देता है — 'सत्यधर्माय', जिसका धर्म सत्य है।",
      },
    },
  },

  {
    id: "isha-16",
    locator: "16",
    handle: { en: "That Person, I am he", kn: "ಆ ಪುರುಷನು — ನಾನೇ ಅವನು", hi: "वह पुरुष — मैं वही हूँ" },
    sanskrit: [
      "पूषन्नेकर्षे यम सूर्य प्राजापत्य व्यूह रश्मीन् समूह ।",
      "तेजो यत्ते रूपं कल्याणतमं तत्ते पश्यामि",
      "योऽसावसौ पुरुषः सोऽहमस्मि ॥",
    ],
    iast: [
      "pūṣann ekarṣe yama sūrya prājāpatya vyūha raśmīn samūha |",
      "tejo yat te rūpaṃ kalyāṇatamaṃ tat te paśyāmi",
      "yo 'sāv asau puruṣaḥ so 'ham asmi ||",
    ],
    keywords: [
      {
        term: "व्यूह",
        iast: "vyūha",
        gloss: {
          en: "draw apart, disperse (the rays)",
          kn: "ಚದುರಿಸು, ಬೇರ್ಪಡಿಸು (ಕಿರಣಗಳನ್ನು)",
          hi: "बिखेर दे, हटा दे (किरणों को)",
        },
      },
      {
        term: "सोऽहमस्मि",
        iast: "so 'ham asmi",
        gloss: {
          en: "I am he — the identity declared outright",
          kn: "ಸೋಽಹಮಸ್ಮಿ — ನಾನೇ ಅವನು, ನೇರವಾಗಿ ಹೇಳಿದ ಅಭೇದ",
          hi: "सोऽहमस्मि — मैं वही हूँ, सीधा अभेद-कथन",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "O Nourisher, sole seer, Controller, Sun, child of Prajāpati — spread apart your rays, gather up your burning. That form of yours which is most blessed, that I behold. That Person yonder — I am he.",
        explanation:
          "The prayer becomes an address, naming the sun five times over, and then does something no petition prepares you for. Having asked for the glare to be gathered so the form behind it can be seen, the speaker looks — and the seeing collapses the distance entirely. So 'ham asmi: I am he. The verse enacts in its own grammar the movement the whole text has argued for. What began as worship of another ends as recognition, and the one addressed turns out to be the one addressing.",
      },
      kn: {
        translation:
          "ಪೂಷನೇ, ಏಕಋಷಿಯೇ, ಯಮನೇ, ಸೂರ್ಯನೇ, ಪ್ರಜಾಪತಿಪುತ್ರನೇ — ನಿನ್ನ ಕಿರಣಗಳನ್ನು ಚದುರಿಸು, ನಿನ್ನ ತೇಜಸ್ಸನ್ನು ಸಂಗ್ರಹಿಸು. ನಿನ್ನ ಯಾವ ರೂಪವು ಅತ್ಯಂತ ಕಲ್ಯಾಣಕರವೋ ಅದನ್ನು ನಾನು ನೋಡುತ್ತೇನೆ. ಅಲ್ಲಿರುವ ಆ ಪುರುಷನು — ನಾನೇ ಅವನು.",
        explanation:
          "ಪ್ರಾರ್ಥನೆ ಸಂಬೋಧನೆಯಾಗುತ್ತದೆ, ಸೂರ್ಯನನ್ನು ಐದು ಹೆಸರುಗಳಿಂದ ಕರೆಯುತ್ತದೆ, ಆಮೇಲೆ ಯಾವ ಬೇಡಿಕೆಯೂ ಸಿದ್ಧಗೊಳಿಸದ ಒಂದನ್ನು ಮಾಡುತ್ತದೆ. ಹಿಂದಿನ ರೂಪ ಕಾಣುವಂತೆ ಪ್ರಖರತೆಯನ್ನು ಸಂಗ್ರಹಿಸಲು ಕೇಳಿದ ಮೇಲೆ ವಕ್ತೃ ನೋಡುತ್ತಾನೆ — ಮತ್ತು ಆ ನೋಟವೇ ಅಂತರವನ್ನು ಸಂಪೂರ್ಣ ಕುಸಿಸುತ್ತದೆ. 'ಸೋಽಹಮಸ್ಮಿ' — ನಾನೇ ಅವನು. ಇಡೀ ಪಠ್ಯ ವಾದಿಸಿದ ಚಲನೆಯನ್ನು ಈ ಶ್ಲೋಕ ತನ್ನ ವ್ಯಾಕರಣದಲ್ಲಿಯೇ ನಡೆಸಿ ತೋರಿಸುತ್ತದೆ. ಬೇರೊಬ್ಬನ ಆರಾಧನೆಯಾಗಿ ಆರಂಭವಾದದ್ದು ಗುರುತಿಸುವಿಕೆಯಾಗಿ ಮುಗಿಯುತ್ತದೆ, ಮತ್ತು ಸಂಬೋಧಿಸಲ್ಪಟ್ಟವನೇ ಸಂಬೋಧಿಸುತ್ತಿದ್ದವನೆಂದು ತಿಳಿಯುತ್ತದೆ.",
      },
      hi: {
        translation:
          "हे पूषन्, हे एकर्षि, हे यम, हे सूर्य, हे प्राजापत्य — अपनी किरणें बिखेर दे, अपना तेज समेट ले। तेरा जो रूप सर्वाधिक कल्याणकर है, उसी को मैं देखता हूँ। वह जो पुरुष वहाँ है — मैं वही हूँ।",
        explanation:
          "प्रार्थना संबोधन बन जाती है, सूर्य को पाँच नामों से पुकारती है, और फिर वह करती है जिसके लिए कोई याचना तैयार नहीं करती। पीछे का रूप दिखे इसलिए तेज समेटने को कहकर वक्ता देखता है — और वह देखना दूरी को पूरी तरह ढहा देता है। 'सोऽहमस्मि' — मैं वही हूँ। जिस गति का सारा पाठ तर्क करता रहा, उसे यह श्लोक अपने ही व्याकरण में घटित कर देता है। जो दूसरे की उपासना के रूप में आरंभ हुआ, वह पहचान बनकर समाप्त होता है, और जिसे संबोधित किया गया वही संबोधित करने वाला निकलता है।",
      },
    },
  },

  {
    id: "isha-17",
    locator: "17",
    handle: { en: "Remember the deed", kn: "ಮಾಡಿದ್ದನ್ನು ಸ್ಮರಿಸು", hi: "किया हुआ स्मरण कर" },
    sanskrit: [
      "वायुरनिलममृतमथेदं भस्मान्तँ शरीरम् ।",
      "ॐ क्रतो स्मर कृतँ स्मर क्रतो स्मर कृतँ स्मर ॥",
    ],
    iast: [
      "vāyur anilam amṛtam athedaṃ bhasmāntaṃ śarīram |",
      "oṃ krato smara kṛtaṃ smara krato smara kṛtaṃ smara ||",
    ],
    keywords: [
      {
        term: "क्रतु",
        iast: "kratu",
        gloss: {
          en: "will, resolve, the power of intention",
          kn: "ಸಂಕಲ್ಪ, ಇಚ್ಛಾಶಕ್ತಿ",
          hi: "संकल्प, इच्छाशक्ति",
        },
      },
      {
        term: "भस्मान्त",
        iast: "bhasmānta",
        gloss: {
          en: "ending in ash",
          kn: "ಭಸ್ಮದಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುವ",
          hi: "भस्म में समाप्त होने वाला",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "Now let this breath return to the immortal air, and this body end in ash. Om. O Will, remember — remember what was done. O Will, remember — remember what was done.",
        explanation:
          "The verse of the last moment. Breath and body are dispatched in half a line each, with no argument and no regret — the reasoning was finished four verses ago. What remains is kratu, the will, and it is addressed directly as a person. The doubling is not decoration; it is how someone speaks at the edge of dissolution, holding attention on one thing. What is asked for is not merit but memory: that the shape a life actually took should be present at the moment it ends.",
      },
      kn: {
        translation:
          "ಈಗ ಈ ಪ್ರಾಣವು ಅಮರವಾದ ವಾಯುವನ್ನು ಸೇರಲಿ, ಈ ದೇಹವು ಭಸ್ಮದಲ್ಲಿ ಕೊನೆಗೊಳ್ಳಲಿ. ಓಂ. ಸಂಕಲ್ಪವೇ, ಸ್ಮರಿಸು — ಮಾಡಿದ್ದನ್ನು ಸ್ಮರಿಸು. ಸಂಕಲ್ಪವೇ, ಸ್ಮರಿಸು — ಮಾಡಿದ್ದನ್ನು ಸ್ಮರಿಸು.",
        explanation:
          "ಕೊನೆಯ ಕ್ಷಣದ ಶ್ಲೋಕ. ಪ್ರಾಣ ಮತ್ತು ದೇಹವನ್ನು ಅರ್ಧರ್ಧ ಸಾಲಿನಲ್ಲಿ ಕಳುಹಿಸಿಬಿಡಲಾಗಿದೆ — ವಾದವಿಲ್ಲ, ವಿಷಾದವಿಲ್ಲ; ತರ್ಕ ನಾಲ್ಕು ಶ್ಲೋಕಗಳ ಹಿಂದೆಯೇ ಮುಗಿದಿದೆ. ಉಳಿಯುವುದು 'ಕ್ರತು' ಎಂಬ ಸಂಕಲ್ಪ, ಮತ್ತು ಅದನ್ನು ವ್ಯಕ್ತಿಯಂತೆಯೇ ನೇರವಾಗಿ ಸಂಬೋಧಿಸಲಾಗಿದೆ. ಈ ಪುನರಾವರ್ತನೆ ಅಲಂಕಾರವಲ್ಲ; ಲಯದ ಅಂಚಿನಲ್ಲಿ ನಿಂತವನು ಒಂದೇ ವಿಷಯದ ಮೇಲೆ ಗಮನ ಹಿಡಿದಿಡುವ ಬಗೆ ಅದು. ಇಲ್ಲಿ ಕೇಳುತ್ತಿರುವುದು ಪುಣ್ಯವನ್ನಲ್ಲ, ಸ್ಮೃತಿಯನ್ನು: ಬದುಕು ನಿಜವಾಗಿ ಪಡೆದ ಆಕಾರವು ಅದು ಮುಗಿಯುವ ಕ್ಷಣದಲ್ಲಿ ಎದುರಿಗಿರಬೇಕು.",
      },
      hi: {
        translation:
          "अब यह प्राण अमर वायु में लीन हो, और यह शरीर भस्म में समाप्त हो। ॐ। हे क्रतु, स्मरण कर — जो किया गया उसे स्मरण कर। हे क्रतु, स्मरण कर — जो किया गया उसे स्मरण कर।",
        explanation:
          "अंतिम क्षण का श्लोक। प्राण और शरीर को आधी-आधी पंक्ति में विदा कर दिया गया है — न तर्क, न पश्चाताप; विवेचन चार श्लोक पहले ही पूरा हो चुका। जो शेष है वह 'क्रतु' अर्थात् संकल्प है, और उसे व्यक्ति की भाँति सीधे संबोधित किया गया है। यह द्विरुक्ति अलंकार नहीं; लय के कगार पर खड़ा व्यक्ति एक ही वस्तु पर ध्यान थामे रखने के लिए ऐसे ही बोलता है। यहाँ याचना पुण्य की नहीं, स्मृति की है: जीवन ने वस्तुतः जो आकार लिया, वह समाप्ति के क्षण उपस्थित रहे।",
      },
    },
  },

  {
    id: "isha-18",
    locator: "18",
    handle: { en: "Lead us by the good path", kn: "ಸುಮಾರ್ಗದಿಂದ ನಡೆಸು", hi: "सुमार्ग से ले चल" },
    sanskrit: [
      "अग्ने नय सुपथा राये अस्मान् विश्वानि देव वयुनानि विद्वान् ।",
      "युयोध्यस्मज्जुहुराणमेनो भूयिष्ठां ते नमउक्तिं विधेम ॥",
    ],
    iast: [
      "agne naya supathā rāye asmān viśvāni deva vayunāni vidvān |",
      "yuyodhy asmaj juhurāṇam eno bhūyiṣṭhāṃ te nama-uktiṃ vidhema ||",
    ],
    keywords: [
      {
        term: "सुपथा",
        iast: "supathā",
        gloss: {
          en: "by the good path",
          kn: "ಒಳ್ಳೆಯ ಮಾರ್ಗದಿಂದ",
          hi: "सुमार्ग से",
        },
      },
      {
        term: "जुहुराण",
        iast: "juhurāṇa",
        gloss: {
          en: "crooked, deceitful, winding",
          kn: "ವಕ್ರವಾದ, ಮೋಸದ",
          hi: "कुटिल, छलपूर्ण",
        },
      },
    ],
    readings: {
      en: {
        translation:
          "O Agni, lead us by the good path to prosperity, O god who knows all our ways. Keep from us crooked-going sin. To you we would offer our fullest word of homage.",
        explanation:
          "The Upanishad ends not in silence but in a Vedic prayer, addressed to fire. After all the paradox and negation, the last word is practical: lead us, keep sin from us, receive our homage. Two details carry the ending. Agni is called the one who knows all our ways — the guide is not being informed, only asked. And juhurāṇa, 'crooked-going', names the danger as deviousness rather than mere failure. The text that opened by enveloping everything in the Lord closes by asking, simply, to be led straight.",
      },
      kn: {
        translation:
          "ಅಗ್ನಿಯೇ, ನಮ್ಮೆಲ್ಲ ದಾರಿಗಳನ್ನೂ ಬಲ್ಲ ದೇವನೇ, ಒಳ್ಳೆಯ ಮಾರ್ಗದಿಂದ ನಮ್ಮನ್ನು ಸಂಪತ್ತಿಗೆ ಒಯ್ಯು. ವಕ್ರವಾಗಿ ನಡೆಯುವ ಪಾಪವನ್ನು ನಮ್ಮಿಂದ ದೂರವಿಡು. ನಿನಗೆ ನಾವು ನಮ್ಮ ಪೂರ್ಣ ನಮಸ್ಕಾರವನ್ನು ಸಲ್ಲಿಸುತ್ತೇವೆ.",
        explanation:
          "ಉಪನಿಷತ್ತು ಮೌನದಲ್ಲಲ್ಲ, ಅಗ್ನಿಗೆ ಸಲ್ಲಿಸಿದ ವೈದಿಕ ಪ್ರಾರ್ಥನೆಯಲ್ಲಿ ಮುಗಿಯುತ್ತದೆ. ಇಷ್ಟೆಲ್ಲ ವಿರೋಧಾಭಾಸ ಮತ್ತು ನಿಷೇಧಗಳ ನಂತರ ಕೊನೆಯ ಮಾತು ವ್ಯಾವಹಾರಿಕ: ನಮ್ಮನ್ನು ಒಯ್ಯು, ಪಾಪವನ್ನು ದೂರವಿಡು, ನಮಸ್ಕಾರವನ್ನು ಸ್ವೀಕರಿಸು. ಎರಡು ಸಂಗತಿಗಳು ಈ ಅಂತ್ಯವನ್ನು ಹೊತ್ತಿವೆ. ಅಗ್ನಿಯನ್ನು 'ನಮ್ಮೆಲ್ಲ ದಾರಿಗಳನ್ನೂ ಬಲ್ಲವನು' ಎಂದು ಕರೆಯಲಾಗಿದೆ — ಮಾರ್ಗದರ್ಶಕನಿಗೆ ಮಾಹಿತಿ ಕೊಡುತ್ತಿಲ್ಲ, ಕೇವಲ ಕೇಳಿಕೊಳ್ಳಲಾಗುತ್ತಿದೆ. ಮತ್ತು 'ಜುಹುರಾಣ' ಎಂಬ ಪದವು ಅಪಾಯವನ್ನು ಕೇವಲ ಸೋಲೆಂದಲ್ಲ, ವಕ್ರತೆಯೆಂದು ಹೆಸರಿಸುತ್ತದೆ. ಎಲ್ಲವನ್ನೂ ಈಶ್ವರನಿಂದ ಆವರಿಸಿ ಆರಂಭವಾದ ಪಠ್ಯವು, ನೇರವಾಗಿ ನಡೆಸು ಎಂದು ಸರಳವಾಗಿ ಕೇಳುತ್ತಾ ಮುಗಿಯುತ್ತದೆ.",
      },
      hi: {
        translation:
          "हे अग्नि, हमारे सब मार्गों को जानने वाले देव, हमें सुमार्ग से ऐश्वर्य की ओर ले चल। कुटिल गति वाले पाप को हमसे दूर रख। तुझे हम अपना पूर्ण नमस्कार अर्पित करते हैं।",
        explanation:
          "उपनिषद् मौन में नहीं, अग्नि को संबोधित एक वैदिक प्रार्थना में समाप्त होता है। इतने विरोधाभास और निषेध के बाद अंतिम बात व्यावहारिक है: हमें ले चल, पाप दूर रख, नमस्कार स्वीकार कर। दो बातें इस अंत को थामे हैं। अग्नि को 'हमारे सब मार्गों का ज्ञाता' कहा गया — मार्गदर्शक को सूचना नहीं दी जा रही, केवल प्रार्थना की जा रही है। और 'जुहुराण' शब्द संकट को मात्र विफलता नहीं, कुटिलता कहकर नामित करता है। जो पाठ सब कुछ ईश्वर से आवृत करके आरंभ हुआ था, वह सीधे ले चलने की सरल याचना के साथ समाप्त होता है।",
      },
    },
  },
];

// ─────────────────────────────────────────────────────────
//  Derived storage rows.
//
//  Everything below is generated from ISHA_VERSES so there is
//  exactly one place to edit a verse. The seed script consumes
//  these arrays exactly as it consumes the ones in verses.ts.
// ─────────────────────────────────────────────────────────

const LOCALES: Locale[] = ["en", "kn", "hi"];

export const ISHA_VERSE_ROWS: VerseRow[] = ISHA_VERSES.map((v) => ({
  id: v.id,
  text_id: "t-isha",
  sanskrit: v.sanskrit.join("\n"),
  transliteration_iast: v.iast.join("\n"),
  locator: v.locator,
  division_1: null,
  division_2: v.locator === "invocation" ? null : v.locator,
  category: "shruti",
  is_mahavakya: v.id === "isha-16",
  citation_status: "legacy_uncited",
  tags: ["isha", "upanishad", "yajurveda"],
}));

export const ISHA_TRANSLATION_ROWS: TranslationRow[] = ISHA_VERSES.flatMap((v) =>
  LOCALES.map((l) => ({
    verse_id: v.id,
    language: l,
    translation_text: v.readings[l].translation,
    source_id: "site-editorial",
    is_primary: true,
  }))
);

export const ISHA_NOTE_ROWS: VerseNoteRow[] = ISHA_VERSES.flatMap((v) =>
  LOCALES.map((l) => ({
    verse_id: v.id,
    language: l,
    note: commentaryFor(v.id, l),
  }))
);

/**
 * The commentary lives in isha-commentary.ts — the mūla is fixed, the
 * commentary is the layer that keeps being revised. Falls back to the
 * short reading if a verse has no long-form entry yet.
 */
export function commentaryFor(verseId: string, locale: Locale): string {
  const long = ISHA_COMMENTARY[verseId]?.[locale];
  if (long) return long;
  const v = ISHA_VERSES.find((x) => x.id === verseId);
  return v?.readings[locale]?.explanation ?? "";
}

export function videoFor(locator: string): VerseVideo | undefined {
  return ISHA_VIDEOS[locator];
}
