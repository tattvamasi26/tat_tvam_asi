import type { Locale } from "./config";

// ─────────────────────────────────────────────────────────
//  The Purāṇas — the words the redesign added.
//
//  The older strings stay in i18n/puranas.ts. These are the three
//  groups the index is now arranged by, the length scale, the two
//  links onward, and the labels of the deeper detail page.
//
//  The groups are the Padma Purāṇa's guṇa grading, under its own
//  names. They are not named by deity: the rājasa six include the
//  Brahmavaivarta, which leans to Kṛṣṇa, and two of the tāmasa six are
//  named for Viṣṇu's avatāras. The grading is a Vaiṣṇava text's
//  ranking of its rivals, and `groupNote` says so on the page itself.
// ─────────────────────────────────────────────────────────

export interface PuranaUi {
  groupSattvika: string;
  groupSattvikaLede: string;
  groupTamasa: string;
  groupTamasaLede: string;
  groupRajasa: string;
  groupRajasaLede: string;
  gradeTitle: string;
  groupNote: string;

  scaleTitle: string;
  scaleLede: string;

  alsoTitle: string;
  storiesTitle: string;
  storiesBlurb: string;
  cosmosTitle: string;
  cosmosBlurb: string;

  labelParts: string;
  labelPassages: string;
  labelOrder: string;
  /** Carries {n}. */
  countPuranas: string;
}

export const PURANA_UI: Record<Locale, PuranaUi> = {
  en: {
    groupSattvika: "Sāttvika",
    groupSattvikaLede: "The six the Padma Purāṇa ranks highest — all of them Vaiṣṇava.",
    groupTamasa: "Tāmasa",
    groupTamasaLede: "The six it ranks lowest — Śaiva in the main, though two are named for Viṣṇu's avatāras.",
    groupRajasa: "Rājasa",
    groupRajasaLede: "The six between — a mixed group: Brahmā's, the Goddess's, the Sun's, and Kṛṣṇa's in the Brahmavaivarta.",
    gradeTitle: "The Padma Purāṇa's grading",
    groupNote:
      "This sorting comes from the Padma Purāṇa, a Vaiṣṇava text grading its rivals. It is used here because it is the traditional way the eighteen are grouped, not because the ranking is right.",

    scaleTitle: "How long each one is",
    scaleLede:
      "By the verse counts the Purāṇas give for each other. The Skanda is eight times the Mārkaṇḍeya; the figures are tradition, not a count of any surviving manuscript.",

    alsoTitle: "Also in this section",
    storiesTitle: "Nine stories",
    storiesBlurb: "The stories the Purāṇas are known for, each with where it is told.",
    cosmosTitle: "Time and the cosmos",
    cosmosBlurb: "The ages, the fourteen worlds and the dissolutions, drawn.",

    labelParts: "How it is arranged",
    labelPassages: "What a reader has probably met",
    labelOrder: "In the list",
    countPuranas: "{n} Purāṇas",
  },

  kn: {
    groupSattvika: "ಸಾತ್ತ್ವಿಕ",
    groupSattvikaLede: "ಪದ್ಮ ಪುರಾಣ ಅತ್ಯುನ್ನತವೆಂದು ಶ್ರೇಣೀಕರಿಸುವ ಆರು — ಎಲ್ಲವೂ ವೈಷ್ಣವ.",
    groupTamasa: "ತಾಮಸ",
    groupTamasaLede: "ಅದು ಅತಿ ಕೆಳಗೆ ಇಡುವ ಆರು — ಬಹುತೇಕ ಶೈವ, ಆದರೆ ಎರಡು ವಿಷ್ಣುವಿನ ಅವತಾರಗಳ ಹೆಸರಿನವು.",
    groupRajasa: "ರಾಜಸ",
    groupRajasaLede: "ನಡುವಿನ ಆರು — ಬೆರೆತ ಗುಂಪು: ಬ್ರಹ್ಮನದು, ದೇವಿಯದು, ಸೂರ್ಯನದು, ಮತ್ತು ಬ್ರಹ್ಮವೈವರ್ತದಲ್ಲಿ ಕೃಷ್ಣನದು.",
    gradeTitle: "ಪದ್ಮ ಪುರಾಣದ ಶ್ರೇಣಿ",
    groupNote:
      "ಈ ವಿಂಗಡಣೆ ಪದ್ಮ ಪುರಾಣದ್ದು — ತನ್ನ ಪ್ರತಿಸ್ಪರ್ಧಿಗಳನ್ನು ಶ್ರೇಣೀಕರಿಸುವ ವೈಷ್ಣವ ಗ್ರಂಥ. ಹದಿನೆಂಟನ್ನು ಗುಂಪಿಸುವ ಪಾರಂಪರಿಕ ವಿಧಾನವಾದ್ದರಿಂದ ಇಲ್ಲಿ ಬಳಸಲಾಗಿದೆ, ಶ್ರೇಣಿ ಸರಿಯೆಂದಲ್ಲ.",

    scaleTitle: "ಪ್ರತಿಯೊಂದೂ ಎಷ್ಟು ದೊಡ್ಡದು",
    scaleLede:
      "ಪುರಾಣಗಳು ಪರಸ್ಪರಕ್ಕೆ ಕೊಡುವ ಶ್ಲೋಕಸಂಖ್ಯೆಗಳ ಪ್ರಕಾರ. ಸ್ಕಂದ ಮಾರ್ಕಂಡೇಯದ ಎಂಟರಷ್ಟು; ಈ ಸಂಖ್ಯೆಗಳು ಪರಂಪರೆ, ಉಳಿದಿರುವ ಯಾವುದೇ ಹಸ್ತಪ್ರತಿಯ ಎಣಿಕೆಯಲ್ಲ.",

    alsoTitle: "ಈ ವಿಭಾಗದಲ್ಲಿ ಇನ್ನೂ",
    storiesTitle: "ಒಂಬತ್ತು ಕಥೆಗಳು",
    storiesBlurb: "ಪುರಾಣಗಳು ಹೆಸರಾದ ಕಥೆಗಳು, ಪ್ರತಿಯೊಂದೂ ಎಲ್ಲಿ ಹೇಳಲ್ಪಟ್ಟಿದೆ ಎಂಬುದರೊಂದಿಗೆ.",
    cosmosTitle: "ಕಾಲ ಮತ್ತು ವಿಶ್ವ",
    cosmosBlurb: "ಯುಗಗಳು, ಹದಿನಾಲ್ಕು ಲೋಕಗಳು ಮತ್ತು ಪ್ರಳಯಗಳು, ಚಿತ್ರಿಸಿ.",

    labelParts: "ಹೇಗೆ ವಿಂಗಡಣೆಯಾಗಿದೆ",
    labelPassages: "ಓದುಗ ಬಹುಶಃ ಕಂಡಿರುವುದು",
    labelOrder: "ಪಟ್ಟಿಯಲ್ಲಿ",
    countPuranas: "{n} ಪುರಾಣಗಳು",
  },

  hi: {
    groupSattvika: "सात्त्विक",
    groupSattvikaLede: "वे छह जिन्हें पद्म पुराण सर्वोच्च रखता है — सभी वैष्णव।",
    groupTamasa: "तामस",
    groupTamasaLede: "वे छह जिन्हें वह सबसे नीचे रखता है — मुख्यतः शैव, यद्यपि दो विष्णु के अवतारों के नाम पर हैं।",
    groupRajasa: "राजस",
    groupRajasaLede: "बीच के छह — मिश्रित समूह: ब्रह्मा के, देवी के, सूर्य के, और ब्रह्मवैवर्त में कृष्ण के।",
    gradeTitle: "पद्म पुराण की श्रेणी",
    groupNote:
      "यह विभाजन पद्म पुराण का है — अपने प्रतिद्वंद्वियों को श्रेणीबद्ध करता एक वैष्णव ग्रंथ। यहाँ इसलिए प्रयुक्त है कि अठारह को समूहित करने का यही पारंपरिक ढंग है, इसलिए नहीं कि श्रेणी सही है।",

    scaleTitle: "प्रत्येक कितना लंबा है",
    scaleLede:
      "उन श्लोक-संख्याओं के अनुसार जो पुराण एक-दूसरे के लिए देते हैं। स्कंद मार्कंडेय का आठ गुना है; ये संख्याएँ परंपरा हैं, किसी बची पांडुलिपि की गिनती नहीं।",

    alsoTitle: "इस अनुभाग में और",
    storiesTitle: "नौ कथाएँ",
    storiesBlurb: "वे कथाएँ जिनके लिए पुराण जाने जाते हैं, हर एक के साथ कि वह कहाँ कही गई है।",
    cosmosTitle: "काल और विश्व",
    cosmosBlurb: "युग, चौदह लोक और प्रलय, चित्रित।",

    labelParts: "विभाजन कैसे है",
    labelPassages: "पाठक ने शायद जो देखा है",
    labelOrder: "सूची में",
    countPuranas: "{n} पुराण",
  },
};

export function puranaUi(locale: Locale): PuranaUi {
  return PURANA_UI[locale];
}
