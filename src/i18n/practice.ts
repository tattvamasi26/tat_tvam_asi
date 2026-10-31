import type { Locale } from "./config";

// ─────────────────────────────────────────────────────────
//  Vedanta in Everyday Life — the section's own words.
//
//  Two of these carry weight beyond their length. `standing` says
//  what this section will and will not claim, because a page with a
//  timer on it is read as advice in a way a page of text is not. And
//  `streakNote` says where the streak is kept — in this browser, and
//  nowhere else — since a counter that looks like an account and is
//  not would be a small lie told every day.
// ─────────────────────────────────────────────────────────

export interface PracticeStrings {
  title: string;
  lede: string;
  standing: string;
  count: (n: string) => string;

  labelHowTo: string;
  labelOrigin: string;
  labelText: string;
  labelListen: string;
  labelElsewhere: string;

  chooseLength: string;
  minutes: string;
  /** A sitting with no end time, which counts up instead. */
  open: string;
  openNote: string;
  begin: string;
  pause: string;
  resume: string;
  reset: string;
  finish: string;
  done: string;
  doneNote: string;

  /** The two switches that change how a sitting sounds. */
  bell: string;
  halfwayBell: string;
  /** The full-screen surface. */
  focus: string;
  leaveFocus: string;
  awake: string;

  /** Carries {n}; substituted on the client. */
  streak: string;
  streakNote: string;
  /** Carries {n}; substituted on the client. */
  sittings: string;

  noTrack: string;
  back: string;
}

export const PRACTICE_STRINGS: Record<Locale, PracticeStrings> = {
  en: {
    title: "Vedanta in Everyday Life",
    lede: "Sittings you can actually do — with the site's own texts, and a timer that asks nothing of you but the time.",
    standing:
      "This section makes no claims. It says what is traditionally done and where each practice comes from; what it produces is not this site's to promise. Nothing here is medical or psychological advice, and none of it needs a teacher's permission to try.",
    count: (n) => `${n} sittings.`,

    labelHowTo: "How it is done",
    labelOrigin: "Where it comes from",
    labelText: "The text",
    labelListen: "The recitation",
    labelElsewhere: "Elsewhere on this site",

    chooseLength: "How long",
    minutes: "min",
    open: "Open",
    openNote: "No end time. It counts up, and you finish when you finish.",
    begin: "Begin",
    pause: "Pause",
    resume: "Resume",
    reset: "Reset",
    finish: "Finish",
    done: "Done",
    doneNote: "That is the sitting. Nothing more is asked.",

    bell: "Bell",
    halfwayBell: "Bell at halfway",
    focus: "Full screen",
    leaveFocus: "Leave full screen",
    awake: "The screen stays awake until the sitting ends.",

    streak: "{n} days running",
    streakNote: "Kept in this browser only. No account, nothing sent anywhere.",
    sittings: "{n} sittings so far",

    noTrack: "No recitation has been chosen for this one yet.",
    back: "All sittings",
  },

  kn: {
    title: "ನಿತ್ಯ ಜೀವನದಲ್ಲಿ ವೇದಾಂತ",
    lede: "ನಿಜವಾಗಿ ಮಾಡಬಹುದಾದ ಕೂರುವಿಕೆಗಳು — ಈ ತಾಣದ ಪಠ್ಯಗಳೊಂದಿಗೆ, ಮತ್ತು ಸಮಯವನ್ನಷ್ಟೇ ಕೇಳುವ ಗಡಿಯಾರದೊಂದಿಗೆ.",
    standing:
      "ಈ ವಿಭಾಗ ಯಾವ ಹಕ್ಕನ್ನೂ ಮಂಡಿಸುವುದಿಲ್ಲ. ಪರಂಪರೆಯಲ್ಲಿ ಏನು ಮಾಡುತ್ತಾರೆ ಮತ್ತು ಪ್ರತಿ ಸಾಧನೆ ಎಲ್ಲಿಂದ ಬಂದಿದೆ ಎಂಬುದನ್ನಷ್ಟೇ ಹೇಳುತ್ತದೆ; ಅದರ ಫಲವನ್ನು ಭರವಸೆ ಕೊಡುವುದು ಈ ತಾಣದ ಕೆಲಸವಲ್ಲ. ಇಲ್ಲಿ ಯಾವುದೂ ವೈದ್ಯಕೀಯ ಅಥವಾ ಮಾನಸಿಕ ಸಲಹೆಯಲ್ಲ, ಮತ್ತು ಪ್ರಯತ್ನಿಸಲು ಗುರುವಿನ ಅನುಮತಿ ಬೇಕಿಲ್ಲ.",
    count: (n) => `${n} ಕೂರುವಿಕೆಗಳು.`,

    labelHowTo: "ಹೇಗೆ ಮಾಡುವುದು",
    labelOrigin: "ಎಲ್ಲಿಂದ ಬಂದಿದೆ",
    labelText: "ಪಠ್ಯ",
    labelListen: "ಪಠಣ",
    labelElsewhere: "ಈ ತಾಣದ ಇತರೆಡೆ",

    chooseLength: "ಎಷ್ಟು ಹೊತ್ತು",
    minutes: "ನಿ",
    open: "ಮುಕ್ತ",
    openNote: "ಮುಗಿಯುವ ಹೊತ್ತಿಲ್ಲ. ಸಮಯ ಏರುತ್ತ ಹೋಗುತ್ತದೆ, ನೀವು ಮುಗಿಸಿದಾಗ ಮುಗಿಯುತ್ತದೆ.",
    begin: "ಆರಂಭಿಸಿ",
    pause: "ನಿಲ್ಲಿಸಿ",
    resume: "ಮುಂದುವರಿಸಿ",
    reset: "ಮರುಹೊಂದಿಸಿ",
    finish: "ಮುಗಿಸಿ",
    done: "ಮುಗಿಯಿತು",
    doneNote: "ಅಷ್ಟೇ ಕೂರುವಿಕೆ. ಇನ್ನೇನೂ ಕೇಳಲಾಗುವುದಿಲ್ಲ.",

    bell: "ಘಂಟೆ",
    halfwayBell: "ಅರ್ಧದಲ್ಲಿ ಘಂಟೆ",
    focus: "ಪೂರ್ಣ ಪರದೆ",
    leaveFocus: "ಪೂರ್ಣ ಪರದೆಯಿಂದ ಹೊರಬನ್ನಿ",
    awake: "ಕೂರುವಿಕೆ ಮುಗಿಯುವವರೆಗೆ ಪರದೆ ಆರುವುದಿಲ್ಲ.",

    streak: "ಸತತ {n} ದಿನ",
    streakNote: "ಈ ಬ್ರೌಸರಿನಲ್ಲಿ ಮಾತ್ರ ಉಳಿಯುತ್ತದೆ. ಖಾತೆ ಇಲ್ಲ, ಎಲ್ಲಿಗೂ ಏನೂ ಕಳುಹಿಸುವುದಿಲ್ಲ.",
    sittings: "ಇದುವರೆಗೆ {n} ಕೂರುವಿಕೆಗಳು",

    noTrack: "ಇದಕ್ಕೆ ಇನ್ನೂ ಪಠಣ ಆಯ್ಕೆಯಾಗಿಲ್ಲ.",
    back: "ಎಲ್ಲ ಕೂರುವಿಕೆಗಳು",
  },

  hi: {
    title: "रोज़मर्रा में वेदांत",
    lede: "वे बैठकें जो वास्तव में की जा सकें — इस साइट के अपने पाठों के साथ, और ऐसे समय-यंत्र के साथ जो आपसे केवल समय माँगता है।",
    standing:
      "यह अनुभाग कोई दावा नहीं करता। यह केवल बताता है कि परंपरा में क्या किया जाता है और हर साधना कहाँ से आती है; उसका फल क्या होगा, यह वचन देना इस साइट का काम नहीं। यहाँ कुछ भी चिकित्सकीय या मनोवैज्ञानिक सलाह नहीं है, और आज़माने के लिए किसी गुरु की अनुमति नहीं चाहिए।",
    count: (n) => `${n} बैठकें।`,

    labelHowTo: "कैसे किया जाता है",
    labelOrigin: "कहाँ से आता है",
    labelText: "पाठ",
    labelListen: "वाचन",
    labelElsewhere: "इस साइट पर अन्यत्र",

    chooseLength: "कितनी देर",
    minutes: "मि",
    open: "खुली",
    openNote: "कोई अंत-समय नहीं। समय आगे बढ़ता है, और आप जब पूरा करें तब पूरा।",
    begin: "आरंभ",
    pause: "रोकें",
    resume: "जारी रखें",
    reset: "फिर से",
    finish: "पूरा करें",
    done: "पूर्ण",
    doneNote: "बस इतनी ही बैठक। और कुछ नहीं माँगा जाता।",

    bell: "घंटा",
    halfwayBell: "आधे पर घंटा",
    focus: "पूर्ण स्क्रीन",
    leaveFocus: "पूर्ण स्क्रीन से बाहर",
    awake: "बैठक समाप्त होने तक स्क्रीन जागती रहती है।",

    streak: "लगातार {n} दिन",
    streakNote: "केवल इसी ब्राउज़र में रहता है। कोई खाता नहीं, कहीं कुछ नहीं भेजा जाता।",
    sittings: "अब तक {n} बैठकें",

    noTrack: "इसके लिए अभी कोई वाचन नहीं चुना गया।",
    back: "सभी बैठकें",
  },
};

export function practiceStrings(locale: Locale): PracticeStrings {
  return PRACTICE_STRINGS[locale];
}
