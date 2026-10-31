import type { Locale } from "./config";

// ─────────────────────────────────────────────────────────
//  The śāstra map — the words the redesign added: the branch card's
//  way in, and the labels of a branch's own page. The older strings
//  stay in i18n/shastras.ts.
// ─────────────────────────────────────────────────────────

export interface ShastraUi {
  open: string;
  textsTitle: string;
  labelTier: string;
  labelTexts: string;
  labelOnSite: string;
  readHere: string;
  /** Carries {n}. */
  countTexts: string;
  /** Carries {n}. */
  countBranches: string;
  /** The Upaniṣads card, which is the one branch read here in depth. */
  featureTag: string;
  featureLede: string;
  featureCta: string;
  featureLater: string;
}

export const SHASTRA_UI: Record<Locale, ShastraUi> = {
  en: {
    open: "Open",
    textsTitle: "Its texts",
    labelTier: "Tier",
    labelTexts: "Texts",
    labelOnSite: "On this site",
    readHere: "Read it here",
    countTexts: "{n} texts",
    countBranches: "{n} branches",
    featureTag: "Read here, verse by verse",
    featureLede: "Each verse in Sanskrit, with a translation and an explanation, in English, Kannada and Hindi.",
    featureCta: "Start reading",
    featureLater: "Still to come",
  },
  kn: {
    open: "ತೆರೆಯಿರಿ",
    textsTitle: "ಇದರ ಗ್ರಂಥಗಳು",
    labelTier: "ಸ್ತರ",
    labelTexts: "ಗ್ರಂಥಗಳು",
    labelOnSite: "ಈ ತಾಣದಲ್ಲಿ",
    readHere: "ಇಲ್ಲಿ ಓದಿ",
    countTexts: "{n} ಗ್ರಂಥಗಳು",
    countBranches: "{n} ಶಾಖೆಗಳು",
    featureTag: "ಇಲ್ಲಿ ಓದಿ, ಶ್ಲೋಕ ಶ್ಲೋಕವಾಗಿ",
    featureLede: "ಪ್ರತಿ ಶ್ಲೋಕ ಸಂಸ್ಕೃತದಲ್ಲಿ, ಅನುವಾದ ಮತ್ತು ವಿವರಣೆಯೊಂದಿಗೆ — ಇಂಗ್ಲಿಷ್, ಕನ್ನಡ ಮತ್ತು ಹಿಂದಿಯಲ್ಲಿ.",
    featureCta: "ಓದಲು ಆರಂಭಿಸಿ",
    featureLater: "ಮುಂದೆ ಬರಲಿವೆ",
  },
  hi: {
    open: "खोलें",
    textsTitle: "इसके ग्रंथ",
    labelTier: "स्तर",
    labelTexts: "ग्रंथ",
    labelOnSite: "इस साइट पर",
    readHere: "यहाँ पढ़ें",
    countTexts: "{n} ग्रंथ",
    countBranches: "{n} शाखाएँ",
    featureTag: "यहाँ पढ़ें, श्लोक-दर-श्लोक",
    featureLede: "हर श्लोक संस्कृत में, अनुवाद और व्याख्या सहित — अंग्रेज़ी, कन्नड़ और हिंदी में।",
    featureCta: "पढ़ना शुरू करें",
    featureLater: "आगे आने वाले",
  },
};

export function shastraUi(locale: Locale): ShastraUi {
  return SHASTRA_UI[locale];
}
