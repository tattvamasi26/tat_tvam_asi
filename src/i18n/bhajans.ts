import type { Locale } from "./config";

// ─────────────────────────────────────────────────────────
//  The bhajan section's own words, the way the Kollur page keeps its
//  own dictionary rather than filling ui.ts with strings one section
//  uses.
//
//  The important ones are the honest ones. These 913 songs arrive with
//  their Kannada text and a transliteration of it, and with no
//  meaning: the source carries one for thirteen of them. So the
//  section says that, in the reader's own language, on the front door
//  and on every song — the same bargain the Rigveda makes.
// ─────────────────────────────────────────────────────────

export interface BhajanStrings {
  /** The front door. */
  lede: string;
  corpusNote: (n: string) => string;
  noMeaningTitle: string;
  noMeaning: string;
  fromSource: string;

  /** Listings. */
  byDevata: string;
  byComposer: string;
  songsOne: string;
  songsMany: string;
  alsoSung: string;
  alsoSungNote: string;

  /** A group page. */
  groupLede: (name: string, n: string) => string;
  nitiNote: string;
  openNote: string;
  backToAll: string;
  romanLabel: string;

  /** A song. */
  showTransliteration: string;
  hideTransliteration: string;
  labelComposer: string;
  labelForm: string;
  labelRaga: string;
  labelTala: string;
  labelAnkita: string;
  labelListen: string;
  meaningPending: string;
  sourceLine: string;
  backToGroup: (name: string) => string;
  next: string;
  previous: string;

  /** Finding a song (lib/bhajans/search.ts). */
  findTitle: string;
  findLede: string;
  searchLabel: string;
  searchPlaceholder: string;
  searchButton: string;
  filterDevata: string;
  filterComposer: string;
  filterForm: string;
  filterListen: string;
  anyDevata: string;
  anyComposer: string;
  anyForm: string;
  unsigned: string;
  clear: string;
  results: (n: string) => string;
  noResults: string;
  noResultsHint: string;
  foundInLine: string;
  showMore: string;
  searching: string;
  searchHere: (name: string) => string;
  songsBy: (name: string) => string;
}

export const BHAJAN_STRINGS: Record<Locale, BhajanStrings> = {
  en: {
    lede: "Kannada devotional songs — the padas of the Haridasas, and what is sung beside them.",
    corpusNote: (n) => `${n} songs, arranged by the devata each one addresses.`,
    noMeaningTitle: "What is here, and what is not",
    noMeaning:
      "Every song is given whole, in Kannada, with the transliteration the singers use. None of them has a meaning written yet. That is a real gap and it is not hidden: the text is complete, the translation has not been done.",
    fromSource: "Brought over from Bhakthi Lahari, which this site's owner also keeps.",

    byDevata: "By devata",
    byComposer: "The Haridasas",
    songsOne: "song",
    songsMany: "songs",
    alsoSung: "Also sung",
    alsoSungNote: "Bhajans from beyond Karnataka, entered separately.",

    groupLede: (name, n) => `${n} songs addressed to ${name}.`,
    nitiNote:
      "A niti pada turns away from the devata and speaks to the singer's own mind. Purandara Dasa wrote a great many of them.",
    openNote:
      "Songs of devotion that name no single form of God. A Haridasa very often sings to Hari plainly, or to his own guru, and forcing one face onto such a song would misread it. The sorting goes on.",
    backToAll: "All bhajans",
    romanLabel: "In roman letters",

    showTransliteration: "Show transliteration",
    hideTransliteration: "Hide transliteration",
    labelComposer: "Composer",
    labelForm: "Form",
    labelRaga: "Raga",
    labelTala: "Tala",
    labelAnkita: "Signed",
    labelListen: "Listen",
    meaningPending: "A meaning for this song has not been written yet.",
    sourceLine: "Text from Bhakthi Lahari",
    backToGroup: (name) => `All ${name} songs`,
    next: "Next",
    previous: "Previous",

    findTitle: "Find a song",
    findLede: "Type a line you remember, a title or a Haridasa, in Kannada or in roman letters, spelled however you spell it.",
    searchLabel: "Search the songs",
    searchPlaceholder: "bhagyada lakshmi, ಕೃಷ್ಣ, purandara…",
    searchButton: "Search",
    filterDevata: "Devata",
    filterComposer: "Haridasa",
    filterForm: "Form",
    filterListen: "With a recitation",
    anyDevata: "Every devata",
    anyComposer: "Every Haridasa",
    anyForm: "Every form",
    unsigned: "Not signed",
    clear: "Clear",
    results: (n) => (n === "1" ? "1 song" : `${n} songs`),
    noResults: "No song matches.",
    noResultsHint: "Try fewer words, or a single word from the line you remember. Spelling does not have to be exact.",
    foundInLine: "Found in the line",
    showMore: "Show more",
    searching: "Searching…",
    searchHere: (name) => `Search ${name} songs`,
    songsBy: (name) => `Songs by ${name}`,
  },

  kn: {
    lede: "ಕನ್ನಡ ಭಕ್ತಿಗೀತೆಗಳು — ಹರಿದಾಸರ ಪದಗಳು ಮತ್ತು ಅವುಗಳ ಜೊತೆಗೆ ಹಾಡುವವು.",
    corpusNote: (n) => `${n} ಪದಗಳು, ಪ್ರತಿಯೊಂದೂ ಯಾವ ದೇವತೆಯನ್ನು ಸಂಬೋಧಿಸುತ್ತದೋ ಆ ದೇವತೆಯ ಪ್ರಕಾರ ಜೋಡಿಸಲಾಗಿದೆ.`,
    noMeaningTitle: "ಇಲ್ಲಿ ಏನಿದೆ, ಏನಿಲ್ಲ",
    noMeaning:
      "ಪ್ರತಿ ಪದವೂ ಪೂರ್ಣವಾಗಿ ಕನ್ನಡದಲ್ಲಿದೆ, ಜೊತೆಗೆ ಹಾಡುಗಾರರು ಬಳಸುವ ಲಿಪ್ಯಂತರವೂ ಇದೆ. ಆದರೆ ಯಾವುದಕ್ಕೂ ಇನ್ನೂ ಅರ್ಥ ಬರೆದಿಲ್ಲ. ಇದು ನಿಜವಾದ ಕೊರತೆ, ಮತ್ತು ಅದನ್ನು ಮರೆಮಾಚಿಲ್ಲ: ಪಠ್ಯ ಪೂರ್ಣ, ಅನುವಾದ ಆಗಿಲ್ಲ.",
    fromSource: "ಈ ತಾಣದ ಮಾಲೀಕರೇ ನಡೆಸುವ ಭಕ್ತಿ ಲಹರಿಯಿಂದ ತಂದವು.",

    byDevata: "ದೇವತೆಯ ಪ್ರಕಾರ",
    byComposer: "ಹರಿದಾಸರು",
    songsOne: "ಪದ",
    songsMany: "ಪದಗಳು",
    alsoSung: "ಇವನ್ನೂ ಹಾಡುತ್ತಾರೆ",
    alsoSungNote: "ಕರ್ನಾಟಕದಾಚೆಯ ಭಜನೆಗಳು, ಪ್ರತ್ಯೇಕವಾಗಿ ದಾಖಲಿಸಿದವು.",

    groupLede: (name, n) => `${name} ದೇವರಿಗೆ ಸಲ್ಲಿಸಿದ ${n} ಪದಗಳು.`,
    nitiNote:
      "ನೀತಿ ಪದವು ದೇವತೆಯಿಂದ ತಿರುಗಿ ಹಾಡುಗಾರನ ಸ್ವಂತ ಮನಸ್ಸಿಗೇ ಹೇಳುತ್ತದೆ. ಪುರಂದರ ದಾಸರು ಇಂಥವನ್ನು ಬಹಳ ರಚಿಸಿದ್ದಾರೆ.",
    openNote:
      "ದೇವರ ಯಾವುದೇ ಒಂದು ರೂಪವನ್ನು ಹೆಸರಿಸದ ಭಕ್ತಿಯ ಪದಗಳು. ಹರಿದಾಸರು ಬಹುವೇಳೆ ಹರಿಯನ್ನೇ ನೇರವಾಗಿ, ಅಥವಾ ತಮ್ಮ ಗುರುವನ್ನೇ ಹಾಡುತ್ತಾರೆ; ಅಂಥ ಪದಕ್ಕೆ ಒಂದೇ ಮುಖವನ್ನು ಹೇರುವುದು ತಪ್ಪು. ವಿಂಗಡಣೆ ನಡೆಯುತ್ತಿದೆ.",
    backToAll: "ಎಲ್ಲ ಭಜನೆಗಳು",
    romanLabel: "ರೋಮನ್ ಲಿಪಿಯಲ್ಲಿ",

    showTransliteration: "ಲಿಪ್ಯಂತರ ತೋರಿಸು",
    hideTransliteration: "ಲಿಪ್ಯಂತರ ಮರೆಮಾಡು",
    labelComposer: "ರಚನೆ",
    labelForm: "ಪ್ರಕಾರ",
    labelRaga: "ರಾಗ",
    labelTala: "ತಾಳ",
    labelAnkita: "ಅಂಕಿತ",
    labelListen: "ಕೇಳಿ",
    meaningPending: "ಈ ಪದಕ್ಕೆ ಇನ್ನೂ ಅರ್ಥ ಬರೆದಿಲ್ಲ.",
    sourceLine: "ಪಠ್ಯ ಭಕ್ತಿ ಲಹರಿಯಿಂದ",
    backToGroup: (name) => `${name} ಎಲ್ಲ ಪದಗಳು`,
    next: "ಮುಂದೆ",
    previous: "ಹಿಂದೆ",

    findTitle: "ಪದ ಹುಡುಕಿ",
    findLede: "ನೆನಪಿರುವ ಒಂದು ಸಾಲು, ಶೀರ್ಷಿಕೆ ಅಥವಾ ಹರಿದಾಸರ ಹೆಸರನ್ನು ಕನ್ನಡದಲ್ಲಾಗಲೀ ರೋಮನ್ ಅಕ್ಷರಗಳಲ್ಲಾಗಲೀ, ನಿಮಗೆ ಬೇಕಾದ ಕಾಗುಣಿತದಲ್ಲಿ ಬರೆಯಿರಿ.",
    searchLabel: "ಪದಗಳನ್ನು ಹುಡುಕಿ",
    searchPlaceholder: "ಭಾಗ್ಯದ ಲಕ್ಷ್ಮಿ, krishna, ಪುರಂದರ…",
    searchButton: "ಹುಡುಕಿ",
    filterDevata: "ದೇವತೆ",
    filterComposer: "ಹರಿದಾಸರು",
    filterForm: "ಪ್ರಕಾರ",
    filterListen: "ಗಾಯನ ಇರುವವು",
    anyDevata: "ಎಲ್ಲ ದೇವತೆಗಳು",
    anyComposer: "ಎಲ್ಲ ಹರಿದಾಸರು",
    anyForm: "ಎಲ್ಲ ಪ್ರಕಾರಗಳು",
    unsigned: "ಅಂಕಿತವಿಲ್ಲದವು",
    clear: "ತೆರವುಗೊಳಿಸಿ",
    results: (n) => `${n} ಪದಗಳು`,
    noResults: "ಯಾವ ಪದವೂ ಹೊಂದುವುದಿಲ್ಲ.",
    noResultsHint: "ಕಡಿಮೆ ಪದಗಳನ್ನು, ಅಥವಾ ನೆನಪಿರುವ ಸಾಲಿನ ಒಂದೇ ಪದವನ್ನು ಪ್ರಯತ್ನಿಸಿ. ಕಾಗುಣಿತ ನಿಖರವಾಗಿರಬೇಕಿಲ್ಲ.",
    foundInLine: "ಈ ಸಾಲಿನಲ್ಲಿ ಸಿಕ್ಕಿತು",
    showMore: "ಇನ್ನಷ್ಟು ತೋರಿಸಿ",
    searching: "ಹುಡುಕುತ್ತಿದೆ…",
    searchHere: (name) => `${name} ಪದಗಳಲ್ಲಿ ಹುಡುಕಿ`,
    songsBy: (name) => `${name} ಅವರ ಪದಗಳು`,
  },

  hi: {
    lede: "कन्नड़ भक्ति गीत — हरिदासों के पद, और उनके साथ गाए जाने वाले।",
    corpusNote: (n) => `${n} पद, हर एक जिस देवता को सम्बोधित है उसी के अनुसार सजाए गए।`,
    noMeaningTitle: "यहाँ क्या है, और क्या नहीं",
    noMeaning:
      "हर पद पूरा दिया गया है, कन्नड़ में, और साथ में वह लिप्यंतरण जो गायक उपयोग करते हैं। पर किसी का अर्थ अभी नहीं लिखा गया। यह एक वास्तविक कमी है और इसे छिपाया नहीं गया: पाठ पूरा है, अनुवाद नहीं हुआ।",
    fromSource: "भक्ति लहरी से लाए गए, जिसे इस साइट के स्वामी ही चलाते हैं।",

    byDevata: "देवता के अनुसार",
    byComposer: "हरिदास",
    songsOne: "पद",
    songsMany: "पद",
    alsoSung: "ये भी गाए जाते हैं",
    alsoSungNote: "कर्नाटक से बाहर के भजन, अलग से दर्ज।",

    groupLede: (name, n) => `${name} को सम्बोधित ${n} पद।`,
    nitiNote:
      "नीति पद देवता से मुड़कर गायक के अपने मन से कहता है। पुरंदर दास ने ऐसे बहुत रचे।",
    openNote:
      "भक्ति के वे पद जो ईश्वर के किसी एक रूप का नाम नहीं लेते। हरिदास अक्सर सीधे हरि को, या अपने गुरु को गाते हैं; ऐसे पद पर एक चेहरा थोपना उसे गलत पढ़ना होगा। वर्गीकरण चल रहा है।",
    backToAll: "सभी भजन",
    romanLabel: "रोमन लिपि में",

    showTransliteration: "लिप्यंतरण दिखाएँ",
    hideTransliteration: "लिप्यंतरण छिपाएँ",
    labelComposer: "रचयिता",
    labelForm: "प्रकार",
    labelRaga: "राग",
    labelTala: "ताल",
    labelAnkita: "अंकित",
    labelListen: "सुनें",
    meaningPending: "इस पद का अर्थ अभी नहीं लिखा गया है।",
    sourceLine: "पाठ भक्ति लहरी से",
    backToGroup: (name) => `${name} के सब पद`,
    next: "आगे",
    previous: "पीछे",

    findTitle: "पद खोजें",
    findLede: "याद रही कोई पंक्ति, शीर्षक या किसी हरिदास का नाम लिखें, कन्नड़ में या रोमन अक्षरों में, जैसी भी वर्तनी हो।",
    searchLabel: "पद खोजें",
    searchPlaceholder: "bhagyada lakshmi, ಕೃಷ್ಣ, purandara…",
    searchButton: "खोजें",
    filterDevata: "देवता",
    filterComposer: "हरिदास",
    filterForm: "प्रकार",
    filterListen: "गायन सहित",
    anyDevata: "सभी देवता",
    anyComposer: "सभी हरिदास",
    anyForm: "सभी प्रकार",
    unsigned: "अंकित रहित",
    clear: "साफ़ करें",
    results: (n) => `${n} पद`,
    noResults: "कोई पद मेल नहीं खाता।",
    noResultsHint: "कम शब्द आज़माएँ, या याद रही पंक्ति का एक ही शब्द। वर्तनी सटीक होना ज़रूरी नहीं।",
    foundInLine: "इस पंक्ति में मिला",
    showMore: "और दिखाएँ",
    searching: "खोज रहे हैं…",
    searchHere: (name) => `${name} के पदों में खोजें`,
    songsBy: (name) => `${name} के पद`,
  },
};

export function bhajanStrings(locale: Locale): BhajanStrings {
  return BHAJAN_STRINGS[locale];
}

/**
 * The search form's words, as plain strings: the form is a client
 * component, and the strings object carries functions that cannot
 * cross to the browser.
 */
export function finderLabels(b: BhajanStrings) {
  return {
    searchLabel: b.searchLabel,
    searchPlaceholder: b.searchPlaceholder,
    searchButton: b.searchButton,
    filterDevata: b.filterDevata,
    filterComposer: b.filterComposer,
    filterForm: b.filterForm,
    filterListen: b.filterListen,
    anyDevata: b.anyDevata,
    anyComposer: b.anyComposer,
    anyForm: b.anyForm,
    clear: b.clear,
    searching: b.searching,
  };
}
