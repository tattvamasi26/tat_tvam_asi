import type { Locale } from "./config";

// ─────────────────────────────────────────────────────────
//  The stories — the section's own words.
//
//  `labelReading` is the one that carries the section. These stories
//  all have famous meanings attached to them, and the meanings are
//  old and worth having; they are still readings rather than what the
//  story says. The label has to make that difference visible on the
//  page without arguing about it.
// ─────────────────────────────────────────────────────────

export interface StoryStrings {
  title: string;
  lede: string;
  standing: string;
  count: (n: string) => string;

  labelTold: string;
  labelStory: string;
  labelReading: string;
  labelDiffers: string;
  labelElsewhere: string;

  read: string;
  back: string;
  next: string;
  previous: string;
  /** Shown on a Purāṇa's page, above the stories it carries. */
  fromThis: string;
}

export const STORY_STRINGS: Record<Locale, StoryStrings> = {
  en: {
    title: "Stories",
    lede: "Nine of the Puranas' stories, each told plainly and each saying which text it is told in.",
    standing:
      "Every story here names the Purana it is told in and where in it, because a story with no address is folklore — a fine thing to be, and a different thing from what this section claims. Where the tellings differ, the difference is printed rather than smoothed over. And what the tradition reads a story to mean is kept apart from what the story says, because the two are not the same and the readings are worth having on their own terms.",
    count: (n) => `${n} stories.`,

    labelTold: "Told in",
    labelStory: "The story",
    labelReading: "How it is read",
    labelDiffers: "Where the tellings differ",
    labelElsewhere: "Elsewhere on this site",

    read: "Read",
    back: "All stories",
    next: "Next",
    previous: "Previous",
    fromThis: "Stories from it",
  },

  kn: {
    title: "ಕಥೆಗಳು",
    lede: "ಪುರಾಣಗಳ ಒಂಬತ್ತು ಕಥೆಗಳು — ಪ್ರತಿಯೊಂದೂ ಸರಳವಾಗಿ ಹೇಳಲ್ಪಟ್ಟಿದೆ, ಮತ್ತು ಯಾವ ಗ್ರಂಥದಲ್ಲಿ ಹೇಳಲಾಗಿದೆ ಎಂದು ತಿಳಿಸುತ್ತದೆ.",
    standing:
      "ಇಲ್ಲಿನ ಪ್ರತಿ ಕಥೆಯೂ ತಾನು ಯಾವ ಪುರಾಣದಲ್ಲಿ, ಅದರ ಎಲ್ಲಿ ಹೇಳಲ್ಪಟ್ಟಿದೆ ಎಂದು ಹೆಸರಿಸುತ್ತದೆ — ವಿಳಾಸವಿಲ್ಲದ ಕಥೆ ಜಾನಪದ; ಅದು ಒಳ್ಳೆಯ ವಿಷಯವೇ, ಆದರೆ ಈ ವಿಭಾಗ ಹೇಳಿಕೊಳ್ಳುವುದಕ್ಕಿಂತ ಬೇರೆ ವಿಷಯ. ಕಥನಗಳು ಭಿನ್ನವಾದಲ್ಲಿ ಆ ಭಿನ್ನತೆಯನ್ನು ಮುಚ್ಚದೆ ಮುದ್ರಿಸಲಾಗಿದೆ. ಮತ್ತು ಪರಂಪರೆ ಒಂದು ಕಥೆಗೆ ಕೊಡುವ ಅರ್ಥವನ್ನು ಕಥೆ ಹೇಳುವುದರಿಂದ ಬೇರ್ಪಡಿಸಿ ಇಡಲಾಗಿದೆ — ಎರಡೂ ಒಂದೇ ಅಲ್ಲ, ಮತ್ತು ಆ ಓದುಗಳಿಗೆ ತಮ್ಮದೇ ಬೆಲೆ ಇದೆ.",
    count: (n) => `${n} ಕಥೆಗಳು.`,

    labelTold: "ಹೇಳಲ್ಪಟ್ಟಿರುವುದು",
    labelStory: "ಕಥೆ",
    labelReading: "ಹೇಗೆ ಓದಲಾಗುತ್ತದೆ",
    labelDiffers: "ಕಥನಗಳು ಎಲ್ಲಿ ಭಿನ್ನ",
    labelElsewhere: "ಈ ತಾಣದ ಇತರೆಡೆ",

    read: "ಓದಿ",
    back: "ಎಲ್ಲ ಕಥೆಗಳು",
    next: "ಮುಂದೆ",
    previous: "ಹಿಂದೆ",
    fromThis: "ಇದರಿಂದ ಬಂದ ಕಥೆಗಳು",
  },

  hi: {
    title: "कथाएँ",
    lede: "पुराणों की नौ कथाएँ — प्रत्येक सीधे शब्दों में कही गई, और प्रत्येक बताती है कि वह किस ग्रंथ में है।",
    standing:
      "यहाँ की हर कथा बताती है कि वह किस पुराण में और उसमें कहाँ कही गई है, क्योंकि बिना पते की कथा लोककथा है — वह अच्छी बात है, और इस अनुभाग के दावे से भिन्न बात है। जहाँ कथन भिन्न हैं वहाँ भेद को ढँका नहीं, छापा गया है। और परंपरा किसी कथा का जो अर्थ लगाती है उसे कथा जो कहती है उससे अलग रखा गया है — दोनों एक नहीं हैं, और उन पाठों का अपना मूल्य है।",
    count: (n) => `${n} कथाएँ।`,

    labelTold: "कहाँ कही गई",
    labelStory: "कथा",
    labelReading: "इसे कैसे पढ़ा जाता है",
    labelDiffers: "कथन कहाँ भिन्न हैं",
    labelElsewhere: "इस साइट पर अन्यत्र",

    read: "पढ़ें",
    back: "सभी कथाएँ",
    next: "आगे",
    previous: "पीछे",
    fromThis: "इससे आई कथाएँ",
  },
};

export function storyStrings(locale: Locale): StoryStrings {
  return STORY_STRINGS[locale];
}
