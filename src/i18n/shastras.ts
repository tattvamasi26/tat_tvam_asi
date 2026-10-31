import type { Locale } from "./config";

// ─────────────────────────────────────────────────────────
//  The śāstra map's own words, kept beside the section the way the
//  bhajans and the Kollur page keep theirs.
//
//  The honest ones matter most here. This page lists a great many
//  texts the site cannot show yet, and it has to say so plainly
//  rather than let nine full-looking branches imply a library that
//  is not there.
// ─────────────────────────────────────────────────────────

export interface ShastraStrings {
  /** The section's own name, as the owner calls it. */
  title: string;
  lede: string;
  /** The standing note: what this page is, and what it is not. */
  standingTitle: string;
  standing: string;
  progress: (live: string, total: string) => string;

  statusLive: string;
  statusPartial: string;
  statusPlanned: string;

  read: string;
  branches: string;
  readableOf: (n: string, total: string) => string;
  noneYet: string;
}

export const SHASTRA_STRINGS: Record<Locale, ShastraStrings> = {
  en: {
    title: "Shastras & Puranas",
    lede: "The whole tradition in one shape — from the Vedas to the short teaching texts, and where each one is on this site.",
    standingTitle: "How to read this page",
    standing:
      "This is a map, not a library. Where a text is readable here, its name is a link. Where it is not, it is still listed — because the shape of the tradition includes the parts this site has not reached yet, and hiding them would draw a smaller picture than the truth.",
    progress: (live, total) => `${live} of ${total} readable so far.`,

    statusLive: "Readable",
    statusPartial: "Begun",
    statusPlanned: "Not yet",

    read: "Read",
    branches: "branches",
    readableOf: (n, total) => `${n} of ${total} readable`,
    noneYet: "Not yet on this site",
  },

  kn: {
    title: "ಶಾಸ್ತ್ರ ಮತ್ತು ಪುರಾಣ",
    lede: "ಇಡೀ ಪರಂಪರೆ ಒಂದೇ ಆಕಾರದಲ್ಲಿ — ವೇದಗಳಿಂದ ಪ್ರಕರಣ ಗ್ರಂಥಗಳವರೆಗೆ, ಮತ್ತು ಈ ತಾಣದಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಎಲ್ಲಿದೆ ಎಂಬುದು.",
    standingTitle: "ಈ ಪುಟವನ್ನು ಹೇಗೆ ಓದಬೇಕು",
    standing:
      "ಇದು ನಕ್ಷೆ, ಗ್ರಂಥಾಲಯವಲ್ಲ. ಯಾವ ಗ್ರಂಥ ಇಲ್ಲಿ ಓದಲು ಸಿಗುತ್ತದೋ ಅದರ ಹೆಸರು ಕೊಂಡಿಯಾಗಿದೆ. ಸಿಗದಿದ್ದರೂ ಅದನ್ನು ಪಟ್ಟಿಯಲ್ಲಿ ಉಳಿಸಲಾಗಿದೆ — ಏಕೆಂದರೆ ಪರಂಪರೆಯ ಆಕಾರದಲ್ಲಿ ಈ ತಾಣ ಇನ್ನೂ ತಲುಪದ ಭಾಗಗಳೂ ಸೇರಿವೆ; ಅವನ್ನು ಮರೆಮಾಚಿದರೆ ಸತ್ಯಕ್ಕಿಂತ ಚಿಕ್ಕ ಚಿತ್ರ ಸಿಗುತ್ತದೆ.",
    progress: (live, total) => `${total}ರಲ್ಲಿ ${live} ಇದುವರೆಗೆ ಓದಲು ಸಿಗುತ್ತವೆ.`,

    statusLive: "ಓದಲು ಸಿದ್ಧ",
    statusPartial: "ಆರಂಭವಾಗಿದೆ",
    statusPlanned: "ಇನ್ನೂ ಇಲ್ಲ",

    read: "ಓದಿ",
    branches: "ಶಾಖೆಗಳು",
    readableOf: (n, total) => `${total}ರಲ್ಲಿ ${n} ಓದಲು ಸಿದ್ಧ`,
    noneYet: "ಈ ತಾಣದಲ್ಲಿ ಇನ್ನೂ ಇಲ್ಲ",
  },

  hi: {
    title: "शास्त्र और पुराण",
    lede: "पूरी परंपरा एक ही आकार में — वेदों से लेकर प्रकरण ग्रंथों तक, और इस साइट पर हर एक कहाँ है।",
    standingTitle: "यह पृष्ठ कैसे पढ़ें",
    standing:
      "यह मानचित्र है, पुस्तकालय नहीं। जो ग्रंथ यहाँ पढ़ा जा सकता है उसका नाम कड़ी है। जो नहीं पढ़ा जा सकता, वह भी सूची में है — क्योंकि परंपरा के आकार में वे भाग भी हैं जहाँ तक यह साइट अभी नहीं पहुँची; उन्हें छिपाना सत्य से छोटा चित्र बनाना होगा।",
    progress: (live, total) => `${total} में से ${live} अब तक पढ़े जा सकते हैं।`,

    statusLive: "पढ़ने योग्य",
    statusPartial: "आरंभ",
    statusPlanned: "अभी नहीं",

    read: "पढ़ें",
    branches: "शाखाएँ",
    readableOf: (n, total) => `${total} में से ${n} पढ़ने योग्य`,
    noneYet: "इस साइट पर अभी नहीं",
  },
};

export function shastraStrings(locale: Locale): ShastraStrings {
  return SHASTRA_STRINGS[locale];
}
