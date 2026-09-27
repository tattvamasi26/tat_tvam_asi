import type { Locale } from "@/i18n/config";

// ─────────────────────────────────────────────────────────
//  Vedanta in Everyday Life — the practice sessions.
//
//  This is the first section of the site a reader *does* rather than
//  reads, and it is built on the corpus that is already here. The
//  Gāyatrī is not a new text: it is the first devatā in /stutis, with
//  its mūla, its transliteration and its meaning already entered and
//  checked. A session points at it rather than copying it.
//
//  **The recitations are the owner's own choices.** Every track below
//  is a video already chosen for a stotra page, which means somebody
//  listened to it and confirmed it recites the exact text. A session
//  with no such track says so rather than borrowing a stranger's.
//
//  **Nothing here promises anything.** No claim about health, stress,
//  or spiritual attainment appears in this data, and none should be
//  added. The instruction says what is traditionally done and where
//  the practice comes from; what it produces is not this site's to
//  assert. tests/unit/practice.test.ts enforces that.
//
//  **Privacy is unchanged.** A track uses the same player as the
//  stotras: nothing is loaded from YouTube until the reader presses
//  play. The timer is independent of it and needs no network at all.
// ─────────────────────────────────────────────────────────

/** What kind of sitting this is. */
export type PracticeKind = "japa" | "chant" | "sitting";

export interface PracticeTrack {
  /** YouTube id. */
  id: string;
  title: string;
  channel: string;
}

export interface PracticeLink {
  href: string;
  label: Record<Locale, string>;
}

export interface Practice {
  slug: string;
  name: Record<Locale, string>;
  /** In Devanagari, converted by the view. Absent for a wordless sitting. */
  sanskrit?: string;
  kind: PracticeKind;
  /** Minutes the reader can choose between. */
  durations: number[];
  /** One line: what this sitting is. */
  lede: Record<Locale, string>;
  /** How it is done, step by step. */
  howTo: Record<Locale, string[]>;
  /** Where the practice comes from — never what it will do for you. */
  origin: Record<Locale, string>;
  /** The site's own text for this practice, where there is one. */
  text?: PracticeLink;
  /** A recitation already chosen for a stotra page. */
  track?: PracticeTrack;
  /** Anything else on the site worth following. */
  links?: PracticeLink[];
}

const L = (href: string, en: string, kn: string, hi: string): PracticeLink => ({
  href,
  label: { en, kn, hi },
});

export const PRACTICES: Practice[] = [
  {
    slug: "gayatri",
    name: { en: "The Gāyatrī, at first light", kn: "ಮುಂಜಾನೆ ಗಾಯತ್ರೀ", hi: "प्रातः गायत्री" },
    sanskrit: "गायत्रीजपः",
    kind: "japa",
    durations: [5, 11, 21],
    lede: {
      en: "The oldest thing anyone on this site still says daily, held to be said at dawn, noon and dusk.",
      kn: "ಈ ತಾಣದ ಯಾರಾದರೂ ಇಂದಿಗೂ ನಿತ್ಯ ಹೇಳುವ ಅತ್ಯಂತ ಪ್ರಾಚೀನ ವಿಷಯ — ಮುಂಜಾನೆ, ಮಧ್ಯಾಹ್ನ, ಸಂಜೆ ಹೇಳಬೇಕೆಂದು ಪರಂಪರೆ.",
      hi: "इस साइट का कोई भी आज भी जो सबसे प्राचीन बात नित्य कहता है — प्रातः, मध्याह्न और सायं कहने की परंपरा।",
    },
    howTo: {
      en: [
        "Sit where you can keep still, with the spine upright and the hands resting.",
        "Read the verse once from the text, slowly, until the words are in the mouth rather than on the page.",
        "Then say it silently, one repetition at a time, returning to it whenever the mind has gone elsewhere.",
        "The mind going elsewhere is not a failure of the practice. Noticing and returning is the practice.",
      ],
      kn: [
        "ಸ್ಥಿರವಾಗಿ ಕೂರಬಹುದಾದ ಕಡೆ ಕುಳಿತುಕೊಳ್ಳಿ — ಬೆನ್ನು ನೇರ, ಕೈಗಳು ಸಡಿಲ.",
        "ಪಠ್ಯದಿಂದ ಶ್ಲೋಕವನ್ನು ಒಮ್ಮೆ ನಿಧಾನವಾಗಿ ಓದಿ — ಪದಗಳು ಹಾಳೆಯ ಮೇಲಲ್ಲ, ಬಾಯಲ್ಲಿ ನೆಲೆಸುವವರೆಗೆ.",
        "ನಂತರ ಮನಸ್ಸಿನಲ್ಲೇ ಹೇಳಿ, ಒಂದೊಂದಾಗಿ; ಮನಸ್ಸು ಬೇರೆಡೆ ಹೋದಾಗಲೆಲ್ಲ ಮತ್ತೆ ಅದಕ್ಕೇ ಮರಳಿ.",
        "ಮನಸ್ಸು ಬೇರೆಡೆ ಹೋಗುವುದು ಸಾಧನೆಯ ಸೋಲಲ್ಲ. ಗಮನಿಸಿ ಮರಳುವುದೇ ಸಾಧನೆ.",
      ],
      hi: [
        "जहाँ स्थिर बैठ सकें वहाँ बैठें — रीढ़ सीधी, हाथ शिथिल।",
        "पाठ से श्लोक एक बार धीरे पढ़ें — जब तक शब्द पन्ने पर नहीं, मुँह में न बस जाएँ।",
        "फिर मन ही मन कहें, एक-एक करके; मन जहाँ भी चला जाए, हर बार उसी पर लौटें।",
        "मन का भटकना साधना की विफलता नहीं है। देखना और लौटना ही साधना है।",
      ],
    },
    origin: {
      en: "Ṛgveda 3.62.10, in the Gāyatrī metre the verse is named for. It is part of the daily sandhyāvandana.",
      kn: "ಋಗ್ವೇದ ೩.೬೨.೧೦ — ಶ್ಲೋಕಕ್ಕೆ ಹೆಸರು ಕೊಟ್ಟ ಗಾಯತ್ರೀ ಛಂದಸ್ಸಿನಲ್ಲಿ. ಇದು ನಿತ್ಯ ಸಂಧ್ಯಾವಂದನೆಯ ಭಾಗ.",
      hi: "ऋग्वेद ३.६२.१०, उसी गायत्री छंद में जिससे श्लोक का नाम है। यह नित्य संध्यावंदन का अंग है।",
    },
    text: L("/stutis/gayatri/gayatri-mantra", "The Gāyatrī mantra", "ಗಾಯತ್ರೀ ಮಂತ್ರ", "गायत्री मंत्र"),
    links: [L("/vedas/rigveda/3/62", "Where it stands in the Ṛgveda", "ಋಗ್ವೇದದಲ್ಲಿ ಇದರ ಸ್ಥಾನ", "ऋग्वेद में इसका स्थान")],
  },

  {
    slug: "ganapati-japa",
    name: { en: "One hundred and eight names", kn: "ನೂರೆಂಟು ನಾಮ", hi: "एक सौ आठ नाम" },
    sanskrit: "गणपतिमूलमन्त्रः",
    kind: "japa",
    durations: [5, 11, 21],
    lede: {
      en: "A short mantra said a hundred and eight times, which is what a mala is strung to count.",
      kn: "ನೂರೆಂಟು ಸಲ ಹೇಳುವ ಚಿಕ್ಕ ಮಂತ್ರ — ಮಾಲೆಯನ್ನು ಪೋಣಿಸಿರುವುದೇ ಅದನ್ನು ಎಣಿಸಲು.",
      hi: "एक सौ आठ बार कहा जाने वाला छोटा मंत्र — माला इसी को गिनने के लिए पिरोई जाती है।",
    },
    howTo: {
      en: [
        "If you have a mala, hold it in the right hand and move one bead at each repetition, away from you.",
        "If you do not, count in rounds of ten on the fingers, or simply do not count.",
        "Say the mantra at whatever speed lets every syllable stay whole. Speed is not the point; completeness is.",
        "When the mala comes back to the large bead, stop there rather than crossing it.",
      ],
      kn: [
        "ಮಾಲೆ ಇದ್ದರೆ ಬಲಗೈಯಲ್ಲಿ ಹಿಡಿದು, ಪ್ರತಿ ಆವೃತ್ತಿಗೆ ಒಂದು ಮಣಿಯನ್ನು ತನ್ನಿಂದ ದೂರ ಸರಿಸಿ.",
        "ಇಲ್ಲದಿದ್ದರೆ ಬೆರಳುಗಳಲ್ಲಿ ಹತ್ತರ ಸುತ್ತಿನಲ್ಲಿ ಎಣಿಸಿ, ಅಥವಾ ಎಣಿಸದೆಯೇ ಇರಿ.",
        "ಪ್ರತಿ ಅಕ್ಷರವೂ ಪೂರ್ಣವಾಗಿ ಉಳಿಯುವಷ್ಟು ವೇಗದಲ್ಲಿ ಹೇಳಿ. ವೇಗ ಮುಖ್ಯವಲ್ಲ, ಪೂರ್ಣತೆ ಮುಖ್ಯ.",
        "ಮಾಲೆ ಮತ್ತೆ ದೊಡ್ಡ ಮಣಿಗೆ ಬಂದಾಗ ಅದನ್ನು ದಾಟದೆ ಅಲ್ಲಿಯೇ ನಿಲ್ಲಿಸಿ.",
      ],
      hi: [
        "माला हो तो दाहिने हाथ में लें और हर आवृत्ति पर एक मनका अपने से दूर सरकाएँ।",
        "न हो तो उँगलियों पर दस-दस के चक्र में गिनें, या गिनें ही नहीं।",
        "उतनी गति से कहें जिसमें हर अक्षर पूरा रहे। गति महत्त्व नहीं रखती, पूर्णता रखती है।",
        "माला फिर से बड़े मनके पर आ जाए तो उसे लाँघे बिना वहीं रुक जाएँ।",
      ],
    },
    origin: {
      en: "The mūla mantra of Gaṇapati, the shortest of the Gaṇeśa texts on this site.",
      kn: "ಗಣಪತಿಯ ಮೂಲಮಂತ್ರ — ಈ ತಾಣದ ಗಣೇಶ ಪಠ್ಯಗಳಲ್ಲಿ ಅತಿ ಚಿಕ್ಕದು.",
      hi: "गणपति का मूल मंत्र — इस साइट के गणेश पाठों में सबसे छोटा।",
    },
    text: L("/stutis/ganesha/ganapati-mula-mantra", "The mūla mantra", "ಮೂಲ ಮಂತ್ರ", "मूल मंत्र"),
    track: { id: "a8v4KAhZtLo", title: "Om Gam Ganapataye Namah, 108 times", channel: "Purnesh" },
  },

  {
    slug: "atharvashirsha",
    name: { en: "The Atharvaśīrṣa, chanted", kn: "ಅಥರ್ವಶೀರ್ಷ ಪಠಣ", hi: "अथर्वशीर्ष पाठ" },
    sanskrit: "गणपत्यथर्वशीर्षम्",
    kind: "chant",
    durations: [11, 21],
    lede: {
      en: "A longer text, followed aloud with the recitation rather than said alone.",
      kn: "ದೀರ್ಘವಾದ ಪಠ್ಯ — ಒಬ್ಬರೇ ಹೇಳುವ ಬದಲು ಪಠಣದ ಜೊತೆಗೇ ಗಟ್ಟಿಯಾಗಿ ಅನುಸರಿಸುವುದು.",
      hi: "लंबा पाठ — अकेले कहने के बजाय पाठ के साथ स्वर मिलाकर चलना।",
    },
    howTo: {
      en: [
        "Open the text alongside, and start the recitation.",
        "Follow aloud. Where you lose the place, stop and rejoin at the next line rather than hunting for it.",
        "The point of chanting with someone is that the metre carries you; it will not if you are reading ahead.",
        "A first sitting is usually spent listening more than chanting. That is the ordinary way in.",
      ],
      kn: [
        "ಪಠ್ಯವನ್ನು ಪಕ್ಕದಲ್ಲಿ ತೆರೆದಿಟ್ಟು ಪಠಣ ಆರಂಭಿಸಿ.",
        "ಗಟ್ಟಿಯಾಗಿ ಅನುಸರಿಸಿ. ಎಲ್ಲಿ ಜಾಗ ತಪ್ಪಿತೋ ಅಲ್ಲಿ ಹುಡುಕುವ ಬದಲು ನಿಲ್ಲಿಸಿ, ಮುಂದಿನ ಸಾಲಿನಿಂದ ಸೇರಿಕೊಳ್ಳಿ.",
        "ಬೇರೊಬ್ಬರ ಜೊತೆ ಪಠಿಸುವುದರ ಅರ್ಥವೇ ಛಂದಸ್ಸು ನಿಮ್ಮನ್ನು ಒಯ್ಯುವುದು; ಮುಂದೆ ಓದುತ್ತಿದ್ದರೆ ಅದು ಆಗುವುದಿಲ್ಲ.",
        "ಮೊದಲ ಕೂರುವಿಕೆ ಸಾಮಾನ್ಯವಾಗಿ ಪಠಿಸುವುದಕ್ಕಿಂತ ಕೇಳುವುದರಲ್ಲೇ ಕಳೆಯುತ್ತದೆ. ಅದೇ ಸಾಮಾನ್ಯ ಪ್ರವೇಶ.",
      ],
      hi: [
        "पाठ साथ में खोलें और वाचन आरंभ करें।",
        "स्वर मिलाकर चलें। जहाँ जगह छूट जाए वहाँ ढूँढने के बजाय रुकें और अगली पंक्ति से जुड़ जाएँ।",
        "किसी के साथ पाठ करने का अर्थ ही यह है कि छंद आपको ले चले; आगे पढ़ते रहने पर वह नहीं होगा।",
        "पहली बैठक प्रायः पाठ से अधिक सुनने में बीतती है। यही सामान्य प्रवेश है।",
      ],
    },
    origin: {
      en: "An Upaniṣad of the Atharvan tradition, recited here by the priests of Kashi.",
      kn: "ಅಥರ್ವಣ ಪರಂಪರೆಯ ಒಂದು ಉಪನಿಷತ್ತು — ಇಲ್ಲಿ ಕಾಶಿಯ ಪುರೋಹಿತರಿಂದ ಪಠಿತ.",
      hi: "अथर्वन परंपरा का एक उपनिषद् — यहाँ काशी के पुरोहितों द्वारा पठित।",
    },
    text: L("/stutis/ganesha/ganapati-atharvashirsha", "The Atharvaśīrṣa", "ಅಥರ್ವಶೀರ್ಷ", "अथर्वशीर्ष"),
    track: {
      id: "7nIZcKM-BiM",
      title: "Ganapati Atharvashirsha, chanted by the priests of Kashi",
      channel: "Kashi",
    },
  },

  {
    slug: "breath",
    name: { en: "Watching the breath", kn: "ಉಸಿರನ್ನು ಗಮನಿಸುವುದು", hi: "श्वास को देखना" },
    kind: "sitting",
    durations: [5, 11, 21],
    lede: {
      en: "No text and no sound. The oldest support there is, and the one always to hand.",
      kn: "ಪಠ್ಯವಿಲ್ಲ, ಶಬ್ದವಿಲ್ಲ. ಇರುವ ಅತ್ಯಂತ ಪ್ರಾಚೀನ ಆಧಾರ, ಮತ್ತು ಸದಾ ಕೈಗೆಟುಕುವಂಥದ್ದು.",
      hi: "न पाठ, न ध्वनि। जो सबसे पुराना आधार है, और सदा पास रहता है।",
    },
    howTo: {
      en: [
        "Sit upright. Let the breath be exactly as it is — this is watching, not breathing exercises.",
        "Put the attention where the breath is easiest to feel: the nostrils, or the rise at the chest.",
        "When you notice you have been thinking, that noticing is the moment of practice. Come back.",
        "Expect to come back many times. A sitting with fifty returns is not worse than one with five.",
      ],
      kn: [
        "ನೇರವಾಗಿ ಕುಳಿತುಕೊಳ್ಳಿ. ಉಸಿರು ಇರುವಂತೆಯೇ ಇರಲಿ — ಇದು ಗಮನಿಸುವುದು, ಪ್ರಾಣಾಯಾಮವಲ್ಲ.",
        "ಉಸಿರನ್ನು ಅನುಭವಿಸಲು ಸುಲಭವಾದ ಕಡೆ ಗಮನವಿಡಿ: ಮೂಗಿನ ಹೊಳ್ಳೆ, ಅಥವಾ ಎದೆಯ ಏರಿಳಿತ.",
        "ಯೋಚಿಸುತ್ತಿದ್ದೆ ಎಂದು ಗಮನಕ್ಕೆ ಬಂದ ಕ್ಷಣವೇ ಸಾಧನೆಯ ಕ್ಷಣ. ಮರಳಿ ಬನ್ನಿ.",
        "ಹಲವು ಬಾರಿ ಮರಳಬೇಕಾಗುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸಿ. ಐವತ್ತು ಬಾರಿ ಮರಳಿದ ಕೂರುವಿಕೆ ಐದು ಬಾರಿ ಮರಳಿದ್ದಕ್ಕಿಂತ ಕೀಳಲ್ಲ.",
      ],
      hi: [
        "सीधे बैठें। श्वास जैसी है वैसी ही रहने दें — यह देखना है, प्राणायाम नहीं।",
        "ध्यान वहाँ रखें जहाँ श्वास सबसे सहज अनुभव हो: नासिका, या छाती का उठना।",
        "जब ध्यान आए कि आप सोच रहे थे, वही क्षण साधना का क्षण है। लौट आएँ।",
        "कई बार लौटना पड़ेगा, यह अपेक्षित है। पचास बार लौटी बैठक पाँच बार लौटी से हीन नहीं।",
      ],
    },
    origin: {
      en: "Prāṇa as a support for attention appears across the Upaniṣads and the Yoga Sūtras; no single text owns it.",
      kn: "ಗಮನಕ್ಕೆ ಪ್ರಾಣವನ್ನು ಆಧಾರವಾಗಿಸುವುದು ಉಪನಿಷತ್ತುಗಳಲ್ಲೂ ಯೋಗಸೂತ್ರಗಳಲ್ಲೂ ಕಾಣಿಸುತ್ತದೆ; ಯಾವುದೇ ಒಂದು ಗ್ರಂಥದ ಸ್ವತ್ತಲ್ಲ.",
      hi: "ध्यान के आधार के रूप में प्राण उपनिषदों और योगसूत्रों दोनों में मिलता है; यह किसी एक ग्रंथ की संपत्ति नहीं।",
    },
  },

  {
    slug: "silence",
    name: { en: "Sitting with the question", kn: "ಪ್ರಶ್ನೆಯೊಂದಿಗೆ ಕೂರುವುದು", hi: "प्रश्न के साथ बैठना" },
    sanskrit: "आत्मविचारः",
    kind: "sitting",
    durations: [11, 21],
    lede: {
      en: "Self-enquiry: one question, asked without going looking for an answer.",
      kn: "ಆತ್ಮವಿಚಾರ: ಒಂದೇ ಪ್ರಶ್ನೆ, ಉತ್ತರ ಹುಡುಕಲು ಹೊರಡದೆ ಕೇಳುವುದು.",
      hi: "आत्मविचार: एक ही प्रश्न, उत्तर ढूँढने निकले बिना पूछा गया।",
    },
    howTo: {
      en: [
        "Sit still. Ask: who is it that is sitting here?",
        "Do not answer it with a name, a role, or a thought. Any answer that arrives as a thought is not the answer.",
        "When attention drifts into the next thought, ask again. The question is a direction, not a puzzle.",
        "This one is harder than it reads, and it is usual to get almost nowhere for a long time.",
      ],
      kn: [
        "ಸ್ಥಿರವಾಗಿ ಕುಳಿತುಕೊಳ್ಳಿ. ಕೇಳಿ: ಇಲ್ಲಿ ಕುಳಿತಿರುವವನು ಯಾರು?",
        "ಹೆಸರಿನಿಂದ, ಪಾತ್ರದಿಂದ, ಅಥವಾ ಯೋಚನೆಯಿಂದ ಉತ್ತರಿಸಬೇಡಿ. ಯೋಚನೆಯಾಗಿ ಬರುವ ಯಾವ ಉತ್ತರವೂ ಉತ್ತರವಲ್ಲ.",
        "ಗಮನ ಮುಂದಿನ ಯೋಚನೆಗೆ ಜಾರಿದಾಗ ಮತ್ತೆ ಕೇಳಿ. ಪ್ರಶ್ನೆ ಒಂದು ದಿಕ್ಕು, ಒಗಟಲ್ಲ.",
        "ಇದು ಓದುವುದಕ್ಕಿಂತ ಕಷ್ಟ, ಮತ್ತು ಬಹುಕಾಲ ಬಹುತೇಕ ಏನೂ ಆಗದಿರುವುದು ಸಾಮಾನ್ಯ.",
      ],
      hi: [
        "स्थिर बैठें। पूछें: यहाँ बैठा हुआ कौन है?",
        "नाम, भूमिका या विचार से उत्तर न दें। जो उत्तर विचार बनकर आए वह उत्तर नहीं।",
        "ध्यान अगले विचार में बह जाए तो फिर पूछें। प्रश्न एक दिशा है, पहेली नहीं।",
        "यह पढ़ने से कठिन है, और लंबे समय तक लगभग कुछ न होना सामान्य है।",
      ],
    },
    origin: {
      en: "The method Ramana Maharshi taught, and the one he most often gave when asked for a practice.",
      kn: "ರಮಣ ಮಹರ್ಷಿಗಳು ಕಲಿಸಿದ ವಿಧಾನ — ಸಾಧನೆ ಕೇಳಿದಾಗ ಅವರು ಹೆಚ್ಚಾಗಿ ಕೊಟ್ಟದ್ದೂ ಇದನ್ನೇ.",
      hi: "रमण महर्षि द्वारा सिखाई गई पद्धति — साधना पूछे जाने पर वे प्रायः यही देते थे।",
    },
    links: [L("/acharyas/ramana-maharshi", "Ramana Maharshi", "ರಮಣ ಮಹರ್ಷಿ", "रमण महर्षि")],
  },
];

export function practiceBySlug(slug: string): Practice | undefined {
  return PRACTICES.find((p) => p.slug === slug);
}
