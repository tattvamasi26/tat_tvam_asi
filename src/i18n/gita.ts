import type { Locale } from "./config";

// ─────────────────────────────────────────────────────────
//  Geetha Rasa Dhara — the chapter section's own words.
//
//  `verseNote` and `mulaNote` are the two that matter.
//
//  The first says why the chapters add up to 701 when everybody calls
//  the Gita seven hundred verses: chapter 13 has 34 or 35 depending
//  on the recension, and the round number uses 34.
//
//  The second says plainly that no verse is entered here yet and
//  why — the site's rule is to set down mula only where every
//  syllable can be verified, and a verse written from memory is not
//  verified however confident the memory. Saying that is better than
//  a page of verses nobody collated.
// ─────────────────────────────────────────────────────────

export interface GitaStrings {
  chaptersTitle: string;
  chaptersLede: string;
  /** Carries {summed} and {traditional}. */
  verseNote: string;
  mulaNote: string;

  labelChapter: string;
  labelVerses: string;
  labelArgument: string;
  labelTurn: string;
  labelNote: string;
  labelElsewhere: string;

  read: string;
  back: string;
  next: string;
  previous: string;
}

export const GITA_STRINGS: Record<Locale, GitaStrings> = {
  en: {
    chaptersTitle: "The eighteen chapters",
    chaptersLede:
      "What each chapter actually does, where it turns, and what it is answering — because a name and a verse count is not a reading.",
    verseNote:
      "The chapters here add up to {summed} while the Gita is universally called {traditional} verses. Chapter 13 is the reason: it has thirty-four or thirty-five depending on whether Arjuna's opening question is counted, and the round number uses thirty-four.",
    mulaNote:
      "No verse is set down here yet, and that is deliberate rather than unfinished. This site enters Sanskrit mula only where every syllable can be verified against an edition, and a verse written out from memory is not verified however confident the memory. The chapter titles above are the ones the site already held. Entering the verses needs a named edition to collate against; until there is one, a page of uncollated Sanskrit would be the one kind of mistake this site is built to avoid.",

    labelChapter: "Chapter",
    labelVerses: "Verses",
    labelArgument: "What happens in it",
    labelTurn: "Where it turns",
    labelNote: "Where the text is disputed",
    labelElsewhere: "Elsewhere on this site",

    read: "Read",
    back: "All eighteen",
    next: "Next",
    previous: "Previous",
  },

  kn: {
    chaptersTitle: "ಹದಿನೆಂಟು ಅಧ್ಯಾಯಗಳು",
    chaptersLede:
      "ಪ್ರತಿ ಅಧ್ಯಾಯ ನಿಜವಾಗಿ ಏನು ಮಾಡುತ್ತದೆ, ಎಲ್ಲಿ ತಿರುಗುತ್ತದೆ, ಮತ್ತು ಯಾವುದಕ್ಕೆ ಉತ್ತರಿಸುತ್ತಿದೆ — ಏಕೆಂದರೆ ಹೆಸರು ಮತ್ತು ಶ್ಲೋಕ ಸಂಖ್ಯೆ ಓದಲ್ಲ.",
    verseNote:
      "ಇಲ್ಲಿನ ಅಧ್ಯಾಯಗಳ ಮೊತ್ತ {summed}, ಆದರೆ ಗೀತೆಯನ್ನು ಎಲ್ಲೆಡೆ {traditional} ಶ್ಲೋಕ ಎನ್ನಲಾಗುತ್ತದೆ. ಕಾರಣ ಹದಿಮೂರನೇ ಅಧ್ಯಾಯ: ಅರ್ಜುನನ ಆರಂಭದ ಪ್ರಶ್ನೆಯನ್ನು ಎಣಿಸುತ್ತೀರೋ ಇಲ್ಲವೋ ಎಂಬುದರ ಮೇಲೆ ಅದರಲ್ಲಿ ಮೂವತ್ತನಾಲ್ಕು ಅಥವಾ ಮೂವತ್ತೈದು ಶ್ಲೋಕ, ಮತ್ತು ದುಂಡಾದ ಸಂಖ್ಯೆ ಮೂವತ್ತನಾಲ್ಕನ್ನು ಬಳಸುತ್ತದೆ.",
    mulaNote:
      "ಇಲ್ಲಿ ಇನ್ನೂ ಯಾವ ಶ್ಲೋಕವನ್ನೂ ಹಾಕಿಲ್ಲ, ಮತ್ತು ಅದು ಅಪೂರ್ಣತೆಯಲ್ಲ, ಉದ್ದೇಶಪೂರ್ವಕ. ಪ್ರತಿ ಅಕ್ಷರವನ್ನೂ ಒಂದು ಆವೃತ್ತಿಯೊಂದಿಗೆ ಪರಿಶೀಲಿಸಬಹುದಾದಲ್ಲಿ ಮಾತ್ರ ಈ ತಾಣ ಸಂಸ್ಕೃತ ಮೂಲವನ್ನು ಸೇರಿಸುತ್ತದೆ; ನೆನಪಿನಿಂದ ಬರೆದ ಶ್ಲೋಕ, ನೆನಪು ಎಷ್ಟೇ ದೃಢವಿದ್ದರೂ, ಪರಿಶೀಲಿತವಲ್ಲ. ಮೇಲಿನ ಅಧ್ಯಾಯಗಳ ಹೆಸರುಗಳು ಈ ತಾಣ ಈಗಾಗಲೇ ಹೊಂದಿದ್ದವು. ಶ್ಲೋಕಗಳನ್ನು ಸೇರಿಸಲು ಹೋಲಿಸಲು ಒಂದು ನಿರ್ದಿಷ್ಟ ಆವೃತ್ತಿ ಬೇಕು; ಅದು ಸಿಗುವವರೆಗೆ, ಪರಿಶೀಲಿಸದ ಸಂಸ್ಕೃತದ ಪುಟವೇ ಈ ತಾಣ ತಪ್ಪಿಸಿಕೊಳ್ಳಲು ಕಟ್ಟಲ್ಪಟ್ಟ ಏಕೈಕ ಬಗೆಯ ತಪ್ಪು.",

    labelChapter: "ಅಧ್ಯಾಯ",
    labelVerses: "ಶ್ಲೋಕಗಳು",
    labelArgument: "ಅದರಲ್ಲಿ ಏನು ನಡೆಯುತ್ತದೆ",
    labelTurn: "ಎಲ್ಲಿ ತಿರುಗುತ್ತದೆ",
    labelNote: "ಪಾಠ ಎಲ್ಲಿ ವಿವಾದದಲ್ಲಿದೆ",
    labelElsewhere: "ಈ ತಾಣದ ಇತರೆಡೆ",

    read: "ಓದಿ",
    back: "ಹದಿನೆಂಟೂ",
    next: "ಮುಂದೆ",
    previous: "ಹಿಂದೆ",
  },

  hi: {
    chaptersTitle: "अठारह अध्याय",
    chaptersLede:
      "हर अध्याय वस्तुतः क्या करता है, कहाँ मुड़ता है, और किसका उत्तर दे रहा है — क्योंकि नाम और श्लोक-संख्या पाठ नहीं है।",
    verseNote:
      "यहाँ अध्यायों का योग {summed} है जबकि गीता को सर्वत्र {traditional} श्लोक कहा जाता है। कारण तेरहवाँ अध्याय है: अर्जुन का आरंभिक प्रश्न गिना जाए या नहीं, इसके अनुसार उसमें चौंतीस या पैंतीस श्लोक हैं, और गोल संख्या चौंतीस का प्रयोग करती है।",
    mulaNote:
      "यहाँ अभी कोई श्लोक नहीं रखा गया, और यह अपूर्णता नहीं, निर्णय है। यह साइट संस्कृत मूल तभी दर्ज करती है जब हर अक्षर किसी संस्करण से जाँचा जा सके; स्मृति से लिखा श्लोक, स्मृति कितनी भी दृढ़ हो, जाँचा हुआ नहीं होता। ऊपर के अध्याय-नाम वे हैं जो साइट पहले से रखती थी। श्लोक दर्ज करने के लिए मिलान हेतु एक निश्चित संस्करण चाहिए; जब तक वह न हो, बिना मिलान की संस्कृत का पृष्ठ ठीक वही एक भूल होगी जिससे बचने के लिए यह साइट बनी है।",

    labelChapter: "अध्याय",
    labelVerses: "श्लोक",
    labelArgument: "उसमें क्या होता है",
    labelTurn: "कहाँ मुड़ता है",
    labelNote: "पाठ कहाँ विवादित है",
    labelElsewhere: "इस साइट पर अन्यत्र",

    read: "पढ़ें",
    back: "अठारहों",
    next: "आगे",
    previous: "पीछे",
  },
};

export function gitaStrings(locale: Locale): GitaStrings {
  return GITA_STRINGS[locale];
}
