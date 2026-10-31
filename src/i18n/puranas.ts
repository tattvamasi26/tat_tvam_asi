import type { Locale } from "./config";

// ─────────────────────────────────────────────────────────
//  The Purāṇas — the section's own words.
//
//  Three of these carry the section's honesty, and they are the ones
//  to keep if the rest are ever cut: `standing` says this is a
//  section about the Purāṇas and not a copy of them; `verseNote` says
//  the counts are the tradition's own figures rather than anything
//  counted; and `gunaNote` says that the famous three-way grading is
//  a sectarian ranking from inside one of the texts being ranked.
// ─────────────────────────────────────────────────────────

export interface PuranaStrings {
  title: string;
  lede: string;
  standing: string;
  count: (n: string, verses: string) => string;

  gunaSattvika: string;
  gunaRajasa: string;
  gunaTamasa: string;
  gunaNote: string;

  labelDeity: string;
  /** The Padma Purana's grading, labelled as a grading. */
  labelGuna: string;
  labelVerses: string;
  labelAbout: string;
  labelKnown: string;
  labelNote: string;
  labelElsewhere: string;
  verseNote: string;
  verseUnit: (n: string) => string;

  read: string;
  back: string;
  next: string;
  previous: string;
}

export const PURANA_STRINGS: Record<Locale, PuranaStrings> = {
  en: {
    title: "The Puranas",
    lede: "Eighteen Mahapuranas — what each one is, what is in it, and what came out of it into practice.",
    standing:
      "This is a section about the Puranas, not a copy of them. No Purana is entered here as a text: four hundred thousand verses are not going to arrive as a side effect of a page, and the Rigveda took a harvest, a build step and ten committed data files to enter honestly. What is here is what each one holds and what the rest of this site inherited from it.",
    count: (n, verses) => `${n} Mahapuranas, ${verses} verses by the traditional count.`,

    gunaSattvika: "Sattvika",
    gunaRajasa: "Rajasa",
    gunaTamasa: "Tamasa",
    gunaNote:
      "The grading of the eighteen into sattvika, rajasa and tamasa comes from the Padma Purana — a Vaishnava text, which puts the Vaishnava Puranas in the top class and the Shaiva ones in the bottom. It is given here because it is quoted everywhere, and labelled because it is a ranking made from inside the contest.",

    labelDeity: "Leans to",
    labelGuna: "Graded",
    labelVerses: "Verses",
    labelAbout: "What is in it",
    labelKnown: "What came out of it",
    labelNote: "Where it is disputed",
    labelElsewhere: "Elsewhere on this site",
    verseNote:
      "The verse counts are the figures the tradition gives, chiefly in the Puranas' own lists of one another. They are not counts: the manuscripts disagree with the lists and with each other, and Skanda's figure matches no surviving recension.",
    verseUnit: (n) => `${n} verses`,

    read: "Read",
    back: "All eighteen",
    next: "Next",
    previous: "Previous",
  },

  kn: {
    title: "ಪುರಾಣಗಳು",
    lede: "ಹದಿನೆಂಟು ಮಹಾಪುರಾಣಗಳು — ಪ್ರತಿಯೊಂದೂ ಏನು, ಅದರಲ್ಲಿ ಏನಿದೆ, ಮತ್ತು ಅದರಿಂದ ಆಚರಣೆಗೆ ಏನು ಬಂತು.",
    standing:
      "ಇದು ಪುರಾಣಗಳ ಬಗೆಗಿನ ವಿಭಾಗ, ಪುರಾಣಗಳ ಪ್ರತಿಯಲ್ಲ. ಇಲ್ಲಿ ಯಾವ ಪುರಾಣವನ್ನೂ ಪಠ್ಯವಾಗಿ ಸೇರಿಸಿಲ್ಲ: ನಾಲ್ಕು ಲಕ್ಷ ಶ್ಲೋಕಗಳು ಒಂದು ಪುಟದ ಅಡ್ಡಪರಿಣಾಮವಾಗಿ ಬರುವುದಿಲ್ಲ, ಮತ್ತು ಋಗ್ವೇದವನ್ನು ಪ್ರಾಮಾಣಿಕವಾಗಿ ಸೇರಿಸಲು ಒಂದು ಸಂಗ್ರಹ, ಒಂದು ನಿರ್ಮಾಣ ಹಂತ ಮತ್ತು ಹತ್ತು ದತ್ತಾಂಶ ಕಡತಗಳು ಬೇಕಾದವು. ಇಲ್ಲಿರುವುದು ಪ್ರತಿಯೊಂದರಲ್ಲಿ ಏನಿದೆ ಮತ್ತು ಈ ತಾಣದ ಉಳಿದ ಭಾಗ ಅದರಿಂದ ಏನನ್ನು ಪಡೆದಿದೆ ಎಂಬುದು.",
    count: (n, verses) => `${n} ಮಹಾಪುರಾಣಗಳು, ಸಾಂಪ್ರದಾಯಿಕ ಲೆಕ್ಕದಲ್ಲಿ ${verses} ಶ್ಲೋಕಗಳು.`,

    gunaSattvika: "ಸಾತ್ತ್ವಿಕ",
    gunaRajasa: "ರಾಜಸ",
    gunaTamasa: "ತಾಮಸ",
    gunaNote:
      "ಹದಿನೆಂಟನ್ನು ಸಾತ್ತ್ವಿಕ, ರಾಜಸ, ತಾಮಸ ಎಂದು ವಿಂಗಡಿಸುವುದು ಪದ್ಮ ಪುರಾಣದಿಂದ ಬಂದದ್ದು — ಅದು ವೈಷ್ಣವ ಗ್ರಂಥ, ಮತ್ತು ವೈಷ್ಣವ ಪುರಾಣಗಳನ್ನು ಅತ್ಯುನ್ನತ ವರ್ಗದಲ್ಲಿ, ಶೈವ ಪುರಾಣಗಳನ್ನು ಕೊನೆಯ ವರ್ಗದಲ್ಲಿ ಇರಿಸುತ್ತದೆ. ಎಲ್ಲೆಡೆ ಉಲ್ಲೇಖಿಸಲಾಗುವುದರಿಂದ ಇಲ್ಲಿ ಕೊಡಲಾಗಿದೆ, ಮತ್ತು ಸ್ಪರ್ಧೆಯ ಒಳಗಿನಿಂದಲೇ ಮಾಡಿದ ಶ್ರೇಣೀಕರಣವಾದ್ದರಿಂದ ಹಾಗೆಂದು ಗುರುತಿಸಲಾಗಿದೆ.",

    labelDeity: "ಒಲವು",
    labelGuna: "ವರ್ಗೀಕರಣ",
    labelVerses: "ಶ್ಲೋಕಗಳು",
    labelAbout: "ಅದರಲ್ಲಿ ಏನಿದೆ",
    labelKnown: "ಅದರಿಂದ ಏನು ಬಂತು",
    labelNote: "ಎಲ್ಲಿ ವಿವಾದವಿದೆ",
    labelElsewhere: "ಈ ತಾಣದ ಇತರೆಡೆ",
    verseNote:
      "ಶ್ಲೋಕ ಸಂಖ್ಯೆಗಳು ಪರಂಪರೆ ಕೊಡುವ ಅಂಕಿಗಳು — ಮುಖ್ಯವಾಗಿ ಪುರಾಣಗಳು ಪರಸ್ಪರರ ಬಗ್ಗೆ ಮಾಡಿದ ಪಟ್ಟಿಗಳಿಂದ. ಇವು ಎಣಿಕೆಗಳಲ್ಲ: ಹಸ್ತಪ್ರತಿಗಳು ಈ ಪಟ್ಟಿಗಳೊಂದಿಗೂ ಪರಸ್ಪರವೂ ಹೊಂದುವುದಿಲ್ಲ, ಮತ್ತು ಸ್ಕಾಂದದ ಅಂಕಿಗೆ ಉಳಿದಿರುವ ಯಾವ ಪಾಠಾಂತರವೂ ಹೊಂದುವುದಿಲ್ಲ.",
    verseUnit: (n) => `${n} ಶ್ಲೋಕಗಳು`,

    read: "ಓದಿ",
    back: "ಹದಿನೆಂಟೂ",
    next: "ಮುಂದೆ",
    previous: "ಹಿಂದೆ",
  },

  hi: {
    title: "पुराण",
    lede: "अठारह महापुराण — प्रत्येक क्या है, उसमें क्या है, और उससे आचरण में क्या आया।",
    standing:
      "यह पुराणों के विषय में अनुभाग है, पुराणों की प्रति नहीं। यहाँ कोई पुराण पाठ के रूप में दर्ज नहीं है: चार लाख श्लोक किसी पृष्ठ के दुष्प्रभाव से नहीं आ जाते, और ऋग्वेद को ईमानदारी से दर्ज करने में एक संचयन, एक निर्माण-चरण और दस डेटा फ़ाइलें लगीं। यहाँ जो है वह यह है कि प्रत्येक में क्या है और इस साइट के शेष भाग ने उससे क्या पाया।",
    count: (n, verses) => `${n} महापुराण, पारंपरिक गणना से ${verses} श्लोक।`,

    gunaSattvika: "सात्त्विक",
    gunaRajasa: "राजस",
    gunaTamasa: "तामस",
    gunaNote:
      "अठारह का सात्त्विक, राजस और तामस में वर्गीकरण पद्म पुराण से आता है — जो एक वैष्णव ग्रंथ है, और वैष्णव पुराणों को सर्वोच्च वर्ग में तथा शैव पुराणों को अंतिम वर्ग में रखता है। सर्वत्र उद्धृत होने के कारण इसे यहाँ दिया गया है, और प्रतिस्पर्धा के भीतर से किया गया वर्गीकरण होने के कारण वैसा ही चिह्नित किया गया है।",

    labelDeity: "झुकाव",
    labelGuna: "वर्गीकरण",
    labelVerses: "श्लोक",
    labelAbout: "उसमें क्या है",
    labelKnown: "उससे क्या निकला",
    labelNote: "कहाँ विवाद है",
    labelElsewhere: "इस साइट पर अन्यत्र",
    verseNote:
      "श्लोक-संख्याएँ वे अंक हैं जो परंपरा देती है — मुख्यतः पुराणों की परस्पर बनाई सूचियों से। ये गणनाएँ नहीं हैं: पांडुलिपियाँ न इन सूचियों से मेल खाती हैं न परस्पर, और स्कंद के अंक से कोई उपलब्ध पाठ मेल नहीं खाता।",
    verseUnit: (n) => `${n} श्लोक`,

    read: "पढ़ें",
    back: "अठारहों",
    next: "आगे",
    previous: "पीछे",
  },
};

export function puranaStrings(locale: Locale): PuranaStrings {
  return PURANA_STRINGS[locale];
}
