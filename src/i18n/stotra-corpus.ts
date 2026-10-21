import type { Locale } from "./config";

/**
 * Words for the stotras taken from a printed edition (lib/stotra-corpus):
 * their section on a devata's page, the notice that they are not yet
 * translated, and the record of how each was checked. Held to the same
 * keys in every language by tests/unit/stotra-corpus.test.ts.
 */
export interface StotraCorpusStrings {
  groupTitle: string;
  groupNote: string;
  textOnlyTitle: string;
  textOnlyBody: string;
  editionTitle: string;
  printedPages: string;
  pageAbbr: string;
  method: string;
  refrain: string;
  correctionsTitle: string;
  misprint: string;
  variantsTitle: string;
  witnessHas: string;
  witnessLacks: string;
  scansLink: string;
  witnessLink: string;
  checkedOn: string;
}

const en: StotraCorpusStrings = {
  groupTitle: "From the Bṛhat Stotra Ratnākara",
  groupNote: "The Sanskrit as printed in the 1953 Madras edition, checked against its pages. Not yet translated.",
  textOnlyTitle: "The Sanskrit is checked. The translation is not written yet.",
  textOnlyBody: "This page shows the mūla alone, as printed in the edition named below. Nothing on it is a translation.",
  editionTitle: "Edition and checking",
  printedPages: "Printed pages",
  pageAbbr: "p.",
  method:
    "Each page of the book was transcribed and proofread on Wikisource. The text was then compared, verse by verse, with an independent transcription on stotranidhi.com, and every place where the two disagree was read on the scan of the printed page. What was decided is listed here.",
  refrain: "The book prints the refrain once and abbreviates it after. It is written out here in full.",
  correctionsTitle: "Corrected from the scan",
  misprint: "a misprint in the book",
  variantsTitle: "The book's readings, kept",
  witnessHas: "the other transcription has",
  witnessLacks: "not in the other transcription",
  scansLink: "The scans, page by page",
  witnessLink: "The transcription it was checked against",
  checkedOn: "Checked",
};

const kn: StotraCorpusStrings = {
  groupTitle: "ಬೃಹತ್ ಸ್ತೋತ್ರ ರತ್ನಾಕರದಿಂದ",
  groupNote: "1953ರ ಮದ್ರಾಸ್ ಆವೃತ್ತಿಯಲ್ಲಿ ಮುದ್ರಿತವಾದ ಸಂಸ್ಕೃತ ಪಾಠ, ಅದರ ಪುಟಗಳೊಂದಿಗೆ ಪರಿಶೀಲಿಸಲಾಗಿದೆ. ಇನ್ನೂ ಅನುವಾದವಾಗಿಲ್ಲ.",
  textOnlyTitle: "ಸಂಸ್ಕೃತ ಪಾಠವನ್ನು ಪರಿಶೀಲಿಸಲಾಗಿದೆ. ಅನುವಾದ ಇನ್ನೂ ಬರೆದಿಲ್ಲ.",
  textOnlyBody: "ಈ ಪುಟದಲ್ಲಿ ಕೆಳಗೆ ಹೆಸರಿಸಿದ ಆವೃತ್ತಿಯಲ್ಲಿ ಮುದ್ರಿತವಾದ ಮೂಲಪಾಠ ಮಾತ್ರ ಇದೆ. ಇಲ್ಲಿ ಯಾವುದೂ ಅನುವಾದವಲ್ಲ.",
  editionTitle: "ಆವೃತ್ತಿ ಮತ್ತು ಪರಿಶೀಲನೆ",
  printedPages: "ಮುದ್ರಿತ ಪುಟಗಳು",
  pageAbbr: "ಪು.",
  method:
    "ಪುಸ್ತಕದ ಪ್ರತಿಯೊಂದು ಪುಟವನ್ನು ವಿಕಿಸೋರ್ಸ್‌ನಲ್ಲಿ ಲಿಪ್ಯಂತರಿಸಿ ಕರಡು ತಿದ್ದಲಾಗಿದೆ. ನಂತರ ಆ ಪಾಠವನ್ನು stotranidhi.com ನಲ್ಲಿರುವ ಸ್ವತಂತ್ರ ಲಿಪ್ಯಂತರದೊಂದಿಗೆ ಶ್ಲೋಕದಿಂದ ಶ್ಲೋಕಕ್ಕೆ ಹೋಲಿಸಲಾಯಿತು; ಎರಡೂ ಭಿನ್ನವಾಗಿರುವ ಪ್ರತಿಯೊಂದು ಜಾಗವನ್ನೂ ಮುದ್ರಿತ ಪುಟದ ಸ್ಕ್ಯಾನ್‌ನಲ್ಲಿ ಓದಲಾಯಿತು. ತೀರ್ಮಾನಗಳನ್ನು ಇಲ್ಲಿ ಪಟ್ಟಿ ಮಾಡಲಾಗಿದೆ.",
  refrain: "ಪುಸ್ತಕವು ಪಲ್ಲವಿಯನ್ನು ಒಮ್ಮೆ ಪೂರ್ಣವಾಗಿ ಮುದ್ರಿಸಿ ನಂತರ ಸಂಕ್ಷೇಪಿಸುತ್ತದೆ. ಇಲ್ಲಿ ಅದನ್ನು ಪೂರ್ಣವಾಗಿ ಬರೆಯಲಾಗಿದೆ.",
  correctionsTitle: "ಸ್ಕ್ಯಾನ್ ನೋಡಿ ತಿದ್ದಿದವು",
  misprint: "ಪುಸ್ತಕದಲ್ಲೇ ಇರುವ ಮುದ್ರಣದೋಷ",
  variantsTitle: "ಉಳಿಸಿಕೊಂಡ ಪುಸ್ತಕದ ಪಾಠಗಳು",
  witnessHas: "ಇನ್ನೊಂದು ಲಿಪ್ಯಂತರದಲ್ಲಿ",
  witnessLacks: "ಇನ್ನೊಂದು ಲಿಪ್ಯಂತರದಲ್ಲಿ ಇಲ್ಲ",
  scansLink: "ಪುಟದಿಂದ ಪುಟಕ್ಕೆ ಸ್ಕ್ಯಾನ್‌ಗಳು",
  witnessLink: "ಹೋಲಿಸಿದ ಲಿಪ್ಯಂತರ",
  checkedOn: "ಪರಿಶೀಲಿಸಿದ ದಿನ",
};

const hi: StotraCorpusStrings = {
  groupTitle: "बृहत् स्तोत्र रत्नाकर से",
  groupNote: "1953 के मद्रास संस्करण में छपा संस्कृत पाठ, उसके पृष्ठों से मिलाया गया। अभी अनुवाद नहीं हुआ है।",
  textOnlyTitle: "संस्कृत पाठ जाँचा गया है। अनुवाद अभी लिखा नहीं गया।",
  textOnlyBody: "इस पृष्ठ पर नीचे बताए संस्करण में छपा मूल पाठ ही है। यहाँ कुछ भी अनुवाद नहीं है।",
  editionTitle: "संस्करण और जाँच",
  printedPages: "मुद्रित पृष्ठ",
  pageAbbr: "पृ.",
  method:
    "पुस्तक का हर पृष्ठ विकिस्रोत पर लिप्यंतरित और संशोधित हुआ है। फिर उस पाठ को stotranidhi.com पर उपलब्ध एक स्वतंत्र लिप्यंतरण से श्लोक-दर-श्लोक मिलाया गया, और जहाँ-जहाँ दोनों में अंतर था, वहाँ छपे पृष्ठ का स्कैन देखकर पढ़ा गया। जो निर्णय हुए, वे यहाँ दिए हैं।",
  refrain: "पुस्तक टेक को एक बार पूरा छापकर आगे संक्षेप में देती है। यहाँ उसे पूरा लिखा गया है।",
  correctionsTitle: "स्कैन देखकर सुधारे गए",
  misprint: "पुस्तक की अपनी छपाई की भूल",
  variantsTitle: "पुस्तक के पाठ, जो रखे गए",
  witnessHas: "दूसरे लिप्यंतरण में",
  witnessLacks: "दूसरे लिप्यंतरण में नहीं",
  scansLink: "पृष्ठ-दर-पृष्ठ स्कैन",
  witnessLink: "जिस लिप्यंतरण से मिलाया गया",
  checkedOn: "जाँच की तिथि",
};

const ALL: Record<Locale, StotraCorpusStrings> = { en, kn, hi };

export function stotraCorpusStrings(locale: Locale): StotraCorpusStrings {
  return ALL[locale] ?? en;
}
