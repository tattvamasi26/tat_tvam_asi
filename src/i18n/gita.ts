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
  /** The row of pictures, each leading to its chapter. */
  scenesTitle: string;
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

  // ── The verses (src/lib/gita) ──
  versesTitle: string;
  versesLede: string;
  /** A chapter whose text has not yet passed its check. */
  versesPending: string;
  /** Who translated the English shown under each verse. */
  translationCredit: string;
  /** Kannada and Hindi pages: the translation shown is the English one. Empty in English. */
  translationNotYet: string;
  labelVerse: string;
  /** Carries {n} and {total}. */
  verseOf: string;
  openVerse: string;
  allVerses: string;
  // The record of how the text was checked.
  recordOpen: string;
  checkedLine: string;
  method: string;
  englishMethod: string;
  correctionsTitle: string;
  misprint: string;
  keptTitle: string;
  scansLink: string;
  pageAbbr: string;
  checkedOn: string;
}

export const GITA_STRINGS: Record<Locale, GitaStrings> = {
  en: {
    scenesTitle: "Scenes from the Gita",
    chaptersTitle: "The eighteen chapters",
    chaptersLede:
      "What each chapter actually does, where it turns, and what it is answering — because a name and a verse count is not a reading.",
    verseNote:
      "The chapters here add up to {summed} while the Gita is universally called {traditional} verses. Chapter 13 is the reason: it has thirty-four or thirty-five depending on whether Arjuna's opening question is counted, and the round number uses thirty-four.",
    mulaNote:
      "The verses are the text printed by Annie Besant and Bhagavan Das in 1905, with their English translation. Every page of that edition has been transcribed on Sanskrit Wikisource, and each place where the transcription disagrees with two independent digital texts of the Gita has been read on the printed page itself. A chapter appears here only once that check is finished: {done} of eighteen so far. This site enters Sanskrit only where every syllable can be verified against an edition, so the rest wait rather than appear unchecked.",

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

    versesTitle: "The verses",
    versesLede: "The whole chapter in the order it is spoken, with the English of Annie Besant and Bhagavan Das under each verse.",
    versesPending:
      "The verses of this chapter are still being checked against the printed edition. They appear here once every place in question has been read on the page.",
    translationCredit: "Translation: Annie Besant and Bhagavan Das, 1905.",
    translationNotYet: "",
    labelVerse: "Verse",
    verseOf: "Verse {n} of {total}",
    openVerse: "Open",
    allVerses: "The whole chapter",
    recordOpen: "How this text was checked",
    checkedLine: "Checked against the printed page",
    method:
      "The Sanskrit was compared with two independent digital texts of the Gita, the Gita Initiative's gita/gita and vedicscriptures/bhagavad-gita, after levelling spelling conventions such as the anusvāra. Wherever the transcription disagreed with both, the printed page was read. A slip in the transcription is corrected from the print; a misprint in the book is corrected only where its own word-by-word gloss and both texts agree on the reading.",
    englishMethod:
      "The English was compared with a second, independent scan of another copy of the same printing, on the Internet Archive, and every word on which the two disagreed was read on the page. Names are given in the book's own spelling.",
    correctionsTitle: "Corrected from the scan",
    misprint: "a misprint in the book",
    keptTitle: "Kept as the book prints it",
    scansLink: "The edition's pages on Wikisource",
    pageAbbr: "p.",
    checkedOn: "Checked on",
  },

  kn: {
    scenesTitle: "ಗೀತೆಯ ದೃಶ್ಯಗಳು",
    chaptersTitle: "ಹದಿನೆಂಟು ಅಧ್ಯಾಯಗಳು",
    chaptersLede:
      "ಪ್ರತಿ ಅಧ್ಯಾಯ ನಿಜವಾಗಿ ಏನು ಮಾಡುತ್ತದೆ, ಎಲ್ಲಿ ತಿರುಗುತ್ತದೆ, ಮತ್ತು ಯಾವುದಕ್ಕೆ ಉತ್ತರಿಸುತ್ತಿದೆ — ಏಕೆಂದರೆ ಹೆಸರು ಮತ್ತು ಶ್ಲೋಕ ಸಂಖ್ಯೆ ಓದಲ್ಲ.",
    verseNote:
      "ಇಲ್ಲಿನ ಅಧ್ಯಾಯಗಳ ಮೊತ್ತ {summed}, ಆದರೆ ಗೀತೆಯನ್ನು ಎಲ್ಲೆಡೆ {traditional} ಶ್ಲೋಕ ಎನ್ನಲಾಗುತ್ತದೆ. ಕಾರಣ ಹದಿಮೂರನೇ ಅಧ್ಯಾಯ: ಅರ್ಜುನನ ಆರಂಭದ ಪ್ರಶ್ನೆಯನ್ನು ಎಣಿಸುತ್ತೀರೋ ಇಲ್ಲವೋ ಎಂಬುದರ ಮೇಲೆ ಅದರಲ್ಲಿ ಮೂವತ್ತನಾಲ್ಕು ಅಥವಾ ಮೂವತ್ತೈದು ಶ್ಲೋಕ, ಮತ್ತು ದುಂಡಾದ ಸಂಖ್ಯೆ ಮೂವತ್ತನಾಲ್ಕನ್ನು ಬಳಸುತ್ತದೆ.",
    mulaNote:
      "ಶ್ಲೋಕಗಳು ಆನಿ ಬೆಸೆಂಟ್ ಮತ್ತು ಭಗವಾನ್ ದಾಸ್ 1905ರಲ್ಲಿ ಮುದ್ರಿಸಿದ ಪಾಠ, ಅವರ ಇಂಗ್ಲಿಷ್ ಅನುವಾದದೊಂದಿಗೆ. ಆ ಆವೃತ್ತಿಯ ಪ್ರತಿ ಪುಟವನ್ನೂ ಸಂಸ್ಕೃತ ವಿಕಿಸೋರ್ಸ್‌ನಲ್ಲಿ ಲಿಪ್ಯಂತರಿಸಲಾಗಿದೆ; ಆ ಲಿಪ್ಯಂತರ ಗೀತೆಯ ಎರಡು ಸ್ವತಂತ್ರ ಡಿಜಿಟಲ್ ಪಾಠಗಳೊಂದಿಗೆ ಒಪ್ಪದ ಪ್ರತಿ ಸ್ಥಳವನ್ನೂ ಮುದ್ರಿತ ಪುಟದಲ್ಲೇ ಓದಲಾಗಿದೆ. ಆ ಪರಿಶೀಲನೆ ಮುಗಿದ ಮೇಲಷ್ಟೇ ಒಂದು ಅಧ್ಯಾಯ ಇಲ್ಲಿ ಕಾಣುತ್ತದೆ: ಇದುವರೆಗೆ ಹದಿನೆಂಟರಲ್ಲಿ {done}. ಪ್ರತಿ ಅಕ್ಷರವನ್ನೂ ಒಂದು ಆವೃತ್ತಿಯೊಂದಿಗೆ ಪರಿಶೀಲಿಸಬಹುದಾದಲ್ಲಿ ಮಾತ್ರ ಈ ತಾಣ ಸಂಸ್ಕೃತವನ್ನು ಸೇರಿಸುತ್ತದೆ; ಹಾಗಾಗಿ ಉಳಿದವು ಪರಿಶೀಲನೆಯಿಲ್ಲದೆ ಕಾಣುವ ಬದಲು ಕಾಯುತ್ತವೆ.",

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

    versesTitle: "ಶ್ಲೋಕಗಳು",
    versesLede: "ಇಡೀ ಅಧ್ಯಾಯ, ಹೇಳಲಾದ ಕ್ರಮದಲ್ಲೇ; ಪ್ರತಿ ಶ್ಲೋಕದ ಕೆಳಗೆ ಆನಿ ಬೆಸೆಂಟ್ ಮತ್ತು ಭಗವಾನ್ ದಾಸರ ಇಂಗ್ಲಿಷ್.",
    versesPending:
      "ಈ ಅಧ್ಯಾಯದ ಶ್ಲೋಕಗಳನ್ನು ಮುದ್ರಿತ ಆವೃತ್ತಿಯೊಂದಿಗೆ ಇನ್ನೂ ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ. ಸಂಶಯದ ಪ್ರತಿ ಸ್ಥಳವನ್ನೂ ಪುಟದಲ್ಲಿ ಓದಿದ ಮೇಲೆ ಅವು ಇಲ್ಲಿ ಕಾಣುತ್ತವೆ.",
    translationCredit: "ಅನುವಾದ: ಆನಿ ಬೆಸೆಂಟ್ ಮತ್ತು ಭಗವಾನ್ ದಾಸ್, 1905.",
    translationNotYet: "ಕೆಳಗಿನ ಅನುವಾದ 1905ರ ಇಂಗ್ಲಿಷ್. ಕನ್ನಡ ಅನುವಾದ ಇನ್ನೂ ಬರೆದಿಲ್ಲ.",
    labelVerse: "ಶ್ಲೋಕ",
    verseOf: "{total}ರಲ್ಲಿ {n}ನೇ ಶ್ಲೋಕ",
    openVerse: "ತೆರೆಯಿರಿ",
    allVerses: "ಇಡೀ ಅಧ್ಯಾಯ",
    recordOpen: "ಈ ಪಾಠವನ್ನು ಹೇಗೆ ಪರಿಶೀಲಿಸಲಾಯಿತು",
    checkedLine: "ಮುದ್ರಿತ ಪುಟದೊಂದಿಗೆ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    method:
      "ಸಂಸ್ಕೃತವನ್ನು ಗೀತೆಯ ಎರಡು ಸ್ವತಂತ್ರ ಡಿಜಿಟಲ್ ಪಾಠಗಳೊಂದಿಗೆ ಹೋಲಿಸಲಾಯಿತು: ಗೀತಾ ಇನಿಷಿಯೇಟಿವ್‌ನ gita/gita ಮತ್ತು vedicscriptures/bhagavad-gita. ಅನುಸ್ವಾರದಂತಹ ಬರವಣಿಗೆಯ ರೂಢಿಗಳನ್ನು ಮೊದಲು ಸಮಗೊಳಿಸಲಾಯಿತು. ಲಿಪ್ಯಂತರ ಎರಡರೊಂದಿಗೂ ಒಪ್ಪದ ಪ್ರತಿ ಸ್ಥಳದಲ್ಲಿ ಮುದ್ರಿತ ಪುಟವನ್ನು ಓದಲಾಯಿತು. ಲಿಪ್ಯಂತರದ ತಪ್ಪನ್ನು ಮುದ್ರಣದಿಂದ ಸರಿಪಡಿಸಲಾಗಿದೆ; ಪುಸ್ತಕದ ಮುದ್ರಣದೋಷವನ್ನು ಅದರದೇ ಪದಶಃ ಅರ್ಥ ಮತ್ತು ಎರಡೂ ಪಾಠಗಳು ಒಪ್ಪುವಲ್ಲಿ ಮಾತ್ರ ಸರಿಪಡಿಸಲಾಗಿದೆ.",
    englishMethod:
      "ಇಂಗ್ಲಿಷನ್ನು ಅದೇ ಮುದ್ರಣದ ಇನ್ನೊಂದು ಪ್ರತಿಯ ಸ್ವತಂತ್ರ ಸ್ಕ್ಯಾನ್‌ನೊಂದಿಗೆ (ಇಂಟರ್ನೆಟ್ ಆರ್ಕೈವ್) ಹೋಲಿಸಲಾಯಿತು; ಎರಡೂ ಒಪ್ಪದ ಪ್ರತಿ ಪದವನ್ನೂ ಪುಟದಲ್ಲಿ ಓದಲಾಯಿತು. ಹೆಸರುಗಳು ಪುಸ್ತಕದ ಕಾಗುಣಿತದಲ್ಲೇ ಇವೆ.",
    correctionsTitle: "ಸ್ಕ್ಯಾನ್‌ನಿಂದ ಸರಿಪಡಿಸಿದವು",
    misprint: "ಪುಸ್ತಕದ ಮುದ್ರಣದೋಷ",
    keptTitle: "ಪುಸ್ತಕ ಮುದ್ರಿಸಿದಂತೆಯೇ ಉಳಿಸಿದವು",
    scansLink: "ವಿಕಿಸೋರ್ಸ್‌ನಲ್ಲಿ ಆವೃತ್ತಿಯ ಪುಟಗಳು",
    pageAbbr: "ಪು.",
    checkedOn: "ಪರಿಶೀಲಿಸಿದ ದಿನ",
  },

  hi: {
    scenesTitle: "गीता के दृश्य",
    chaptersTitle: "अठारह अध्याय",
    chaptersLede:
      "हर अध्याय वस्तुतः क्या करता है, कहाँ मुड़ता है, और किसका उत्तर दे रहा है — क्योंकि नाम और श्लोक-संख्या पाठ नहीं है।",
    verseNote:
      "यहाँ अध्यायों का योग {summed} है जबकि गीता को सर्वत्र {traditional} श्लोक कहा जाता है। कारण तेरहवाँ अध्याय है: अर्जुन का आरंभिक प्रश्न गिना जाए या नहीं, इसके अनुसार उसमें चौंतीस या पैंतीस श्लोक हैं, और गोल संख्या चौंतीस का प्रयोग करती है।",
    mulaNote:
      "श्लोक वह पाठ है जिसे एनी बेसेंट और भगवान दास ने 1905 में अपने अंग्रेज़ी अनुवाद के साथ छापा। उस संस्करण का हर पृष्ठ संस्कृत विकिस्रोत पर लिप्यंतरित है, और जहाँ-जहाँ वह लिप्यंतरण गीता के दो स्वतंत्र डिजिटल पाठों से मेल नहीं खाता, वह स्थान छपे पृष्ठ पर ही पढ़ा गया है। कोई अध्याय यहाँ तभी आता है जब यह जाँच पूरी हो: अब तक अठारह में से {done}। यह साइट संस्कृत तभी दर्ज करती है जब हर अक्षर किसी संस्करण से जाँचा जा सके, इसलिए शेष बिना जाँचे दिखने के बजाय प्रतीक्षा करते हैं।",

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

    versesTitle: "श्लोक",
    versesLede: "पूरा अध्याय, उसी क्रम में जिसमें वह कहा गया; हर श्लोक के नीचे एनी बेसेंट और भगवान दास का अंग्रेज़ी अनुवाद।",
    versesPending:
      "इस अध्याय के श्लोक अभी छपे संस्करण से जाँचे जा रहे हैं। संदेह का हर स्थान पृष्ठ पर पढ़ लिए जाने के बाद वे यहाँ दिखेंगे।",
    translationCredit: "अनुवाद: एनी बेसेंट और भगवान दास, 1905।",
    translationNotYet: "नीचे का अनुवाद 1905 का अंग्रेज़ी अनुवाद है। हिंदी अनुवाद अभी लिखा नहीं गया।",
    labelVerse: "श्लोक",
    verseOf: "{total} में से श्लोक {n}",
    openVerse: "खोलें",
    allVerses: "पूरा अध्याय",
    recordOpen: "यह पाठ कैसे जाँचा गया",
    checkedLine: "छपे पृष्ठ से जाँचा गया",
    method:
      "संस्कृत को गीता के दो स्वतंत्र डिजिटल पाठों से मिलाया गया: गीता इनिशिएटिव का gita/gita और vedicscriptures/bhagavad-gita। अनुस्वार जैसी लेखन-परिपाटियाँ पहले समान की गईं। जहाँ लिप्यंतरण दोनों से भिन्न था, वहाँ छपा पृष्ठ पढ़ा गया। लिप्यंतरण की भूल छपे पाठ से सुधारी गई है; पुस्तक की छपाई की भूल केवल वहीं सुधारी गई है जहाँ उसका अपना पदशः अर्थ और दोनों पाठ एक ही पाठ पर सहमत हैं।",
    englishMethod:
      "अंग्रेज़ी को उसी छपाई की एक दूसरी प्रति के स्वतंत्र स्कैन (इंटरनेट आर्काइव) से मिलाया गया, और जिस भी शब्द पर दोनों असहमत थे वह पृष्ठ पर पढ़ा गया। नाम पुस्तक की अपनी वर्तनी में हैं।",
    correctionsTitle: "स्कैन से सुधारे गए",
    misprint: "पुस्तक की छपाई की भूल",
    keptTitle: "जैसा पुस्तक में छपा, वैसा ही रखा",
    scansLink: "विकिस्रोत पर संस्करण के पृष्ठ",
    pageAbbr: "पृ.",
    checkedOn: "जाँच की तिथि",
  },
};

export function gitaStrings(locale: Locale): GitaStrings {
  return GITA_STRINGS[locale];
}
