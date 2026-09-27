import type { Locale } from "./config";

// ─────────────────────────────────────────────────────────
//  The festivals section's own words.
//
//  The one that matters is `standing`. This section prints no
//  Gregorian dates at all, and a reader arriving expecting "when is
//  it this year" needs to be told why they are not here — otherwise
//  the omission reads as an oversight rather than a decision.
// ─────────────────────────────────────────────────────────

export interface FestivalStrings {
  title: string;
  lede: string;
  standing: string;
  count: (n: string) => string;

  labelWhen: string;
  labelAlsoCalled: string;
  labelObserved: string;
  labelWhy: string;
  labelRegional: string;
  labelElsewhere: string;

  lunar: string;
  solar: string;
  read: string;

  back: string;
  next: string;
  previous: string;
}

export const FESTIVAL_STRINGS: Record<Locale, FestivalStrings> = {
  en: {
    title: "Festivals",
    lede: "The year as it is actually kept — what is observed, when, and why.",
    standing:
      "Dates here are lunar, not Gregorian. Ganesha Chaturthi is not “August or September”: it is shukla chaturthi of Bhadrapada, and it falls on a different date every year. Printing a year's date would be wrong within twelve months, so this section gives the date the tradition actually uses.",
    count: (n) => `${n} festivals, in the order of the lunar year.`,

    labelWhen: "When",
    labelAlsoCalled: "In the north",
    labelObserved: "What is done",
    labelWhy: "Why",
    labelRegional: "Where it differs",
    labelElsewhere: "Elsewhere on this site",

    lunar: "Lunar",
    solar: "Solar",
    read: "Read",

    back: "All festivals",
    next: "Next",
    previous: "Previous",
  },

  kn: {
    title: "ಹಬ್ಬಗಳು",
    lede: "ವರ್ಷ ನಿಜವಾಗಿ ಆಚರಿಸಲ್ಪಡುವ ರೀತಿ — ಏನು ಮಾಡುತ್ತಾರೆ, ಯಾವಾಗ, ಏಕೆ.",
    standing:
      "ಇಲ್ಲಿನ ದಿನಾಂಕಗಳು ಚಾಂದ್ರಮಾನದವು, ಗ್ರೆಗೋರಿಯನ್ ಅಲ್ಲ. ಗಣೇಶ ಚತುರ್ಥಿ ಎಂದರೆ 'ಆಗಸ್ಟ್ ಅಥವಾ ಸೆಪ್ಟೆಂಬರ್' ಅಲ್ಲ: ಅದು ಭಾದ್ರಪದ ಶುಕ್ಲ ಚತುರ್ಥಿ, ಮತ್ತು ಪ್ರತಿ ವರ್ಷ ಬೇರೆ ದಿನಾಂಕದಂದು ಬರುತ್ತದೆ. ವರ್ಷದ ದಿನಾಂಕ ಹಾಕಿದರೆ ಹನ್ನೆರಡು ತಿಂಗಳಲ್ಲೇ ತಪ್ಪಾಗುತ್ತದೆ; ಆದ್ದರಿಂದ ಈ ವಿಭಾಗ ಪರಂಪರೆ ನಿಜವಾಗಿ ಬಳಸುವ ದಿನಾಂಕವನ್ನೇ ಕೊಡುತ್ತದೆ.",
    count: (n) => `${n} ಹಬ್ಬಗಳು, ಚಾಂದ್ರಮಾನ ವರ್ಷದ ಕ್ರಮದಲ್ಲಿ.`,

    labelWhen: "ಯಾವಾಗ",
    labelAlsoCalled: "ಉತ್ತರದಲ್ಲಿ",
    labelObserved: "ಏನು ಮಾಡುತ್ತಾರೆ",
    labelWhy: "ಏಕೆ",
    labelRegional: "ಎಲ್ಲಿ ಬೇರೆಯಾಗುತ್ತದೆ",
    labelElsewhere: "ಈ ತಾಣದ ಇತರೆಡೆ",

    lunar: "ಚಾಂದ್ರಮಾನ",
    solar: "ಸೌರಮಾನ",
    read: "ಓದಿ",

    back: "ಎಲ್ಲ ಹಬ್ಬಗಳು",
    next: "ಮುಂದೆ",
    previous: "ಹಿಂದೆ",
  },

  hi: {
    title: "पर्व",
    lede: "वर्ष जैसा वास्तव में मनाया जाता है — क्या किया जाता है, कब, और क्यों।",
    standing:
      "यहाँ की तिथियाँ चांद्र हैं, ग्रेगोरियन नहीं। गणेश चतुर्थी का अर्थ 'अगस्त या सितंबर' नहीं है: वह भाद्रपद शुक्ल चतुर्थी है, और हर वर्ष अलग तारीख़ को पड़ती है। किसी वर्ष की तारीख़ छापना बारह महीनों में ही गलत हो जाएगा, इसलिए यह अनुभाग वही तिथि देता है जो परंपरा वास्तव में उपयोग करती है।",
    count: (n) => `${n} पर्व, चांद्र वर्ष के क्रम में।`,

    labelWhen: "कब",
    labelAlsoCalled: "उत्तर में",
    labelObserved: "क्या किया जाता है",
    labelWhy: "क्यों",
    labelRegional: "कहाँ भिन्न है",
    labelElsewhere: "इस साइट पर अन्यत्र",

    lunar: "चांद्र",
    solar: "सौर",
    read: "पढ़ें",

    back: "सभी पर्व",
    next: "आगे",
    previous: "पीछे",
  },
};

export function festivalStrings(locale: Locale): FestivalStrings {
  return FESTIVAL_STRINGS[locale];
}
