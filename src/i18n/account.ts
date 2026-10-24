import type { Locale } from "./config";

/**
 * Words for signing in, the reading meter and a reader's account page.
 * Kept in their own file, as the rights notice is, so the three
 * languages sit side by side and a test can hold them to the same keys.
 * "{n}", "{used}" and "{email}" are filled in by the page.
 */
export interface AccountStrings {
  navAccount: string;
  signIn: string;
  yourAccount: string;

  // The sign-in page
  chip: string;
  chipLimit: string;
  title: string;
  titleAccent: string;
  titleLimit: string;
  titleLimitAccent: string;
  lede: string;
  ledeLimit: string;
  meter: string;
  google: string;
  or: string;
  emailLabel: string;
  sendCode: string;
  codeTitle: string;
  codeTitleAccent: string;
  codeSent: string;
  codeLabel: string;
  verify: string;
  useAnotherEmail: string;
  pointFree: string;
  pointFreeNote: string;
  pointOpen: string;
  pointOpenNote: string;
  pointKept: string;
  pointKeptNote: string;
  notNow: string;
  rightsNote: string;
  rightsLink: string;
  pictureCredit: string;

  // States
  unavailable: string;
  notSwitchedOn: string;
  failed: string;
  badEmail: string;
  badCode: string;
  sendFailed: string;
  wait: string;
  expired: string;

  // The notice on a reading page
  leftOne: string;
  leftMany: string;
  leftNone: string;
  noticeCta: string;
  noticeClose: string;

  // The account page
  accountTitle: string;
  accountTitleAccent: string;
  accountLede: string;
  name: string;
  email: string;
  joined: string;
  lastSignIn: string;
  reading: string;
  readingValue: string;
  signOut: string;
  keepReading: string;
}

const en: AccountStrings = {
  navAccount: "Account",
  signIn: "Sign in",
  yourAccount: "Your account",

  chip: "Free account",
  chipLimit: "Free pages used",
  title: "Read without",
  titleAccent: "limits.",
  titleLimit: "Sign in to",
  titleLimitAccent: "keep reading.",
  lede: "Sign in once and every text on the site is open to you. It is free and takes a few seconds.",
  ledeLimit: "You have opened your {n} free pages for this month. Sign in to read on. It is free, and you come straight back to the page you were on.",
  meter: "{used} of {n} free pages read",
  google: "Continue with Google",
  or: "or",
  emailLabel: "Email address",
  sendCode: "Email me a sign-in code",
  codeTitle: "Check your",
  codeTitleAccent: "email.",
  codeSent: "We sent a 6-digit code to {email}. It works for one hour.",
  codeLabel: "6-digit code",
  verify: "Sign in",
  useAnotherEmail: "Use a different email",
  pointFree: "Free",
  pointFreeNote: "No payment, no card.",
  pointOpen: "Every page open",
  pointOpenNote: "Read as much as you like.",
  pointKept: "Little kept",
  pointKeptNote: "Your name and email, nothing else.",
  notNow: "Not now, back to the home page",
  rightsNote: "How the site may be used:",
  rightsLink: "Rights and reuse",
  pictureCredit: "Rigveda manuscript, MS 2097 · public domain",

  unavailable: "Sign-in is not available right now. Please try again later.",
  notSwitchedOn: "Sign-in is not switched on yet.",
  failed: "Sign-in did not complete. Please try again.",
  badEmail: "That does not look like an email address.",
  badCode: "That code did not work. Check it, or send a new one.",
  sendFailed: "The code could not be sent. Please try again.",
  wait: "A code was sent a moment ago. Please wait a minute before asking for another.",
  expired: "That sign-in took too long. Please start again.",

  leftOne: "1 free page left this month.",
  leftMany: "{n} free pages left this month.",
  leftNone: "This was your last free page this month.",
  noticeCta: "Sign in to read on",
  noticeClose: "Close",

  accountTitle: "Your",
  accountTitleAccent: "account.",
  accountLede: "You are signed in. Every page on the site is open to you.",
  name: "Name",
  email: "Email",
  joined: "Joined",
  lastSignIn: "Last signed in",
  reading: "Reading",
  readingValue: "Every page, without a limit",
  signOut: "Sign out",
  keepReading: "Keep reading",
};

const kn: AccountStrings = {
  navAccount: "ಖಾತೆ",
  signIn: "ಸೈನ್ ಇನ್",
  yourAccount: "ನಿಮ್ಮ ಖಾತೆ",

  chip: "ಉಚಿತ ಖಾತೆ",
  chipLimit: "ಉಚಿತ ಪುಟಗಳು ಮುಗಿದಿವೆ",
  title: "ಮಿತಿಯಿಲ್ಲದೆ",
  titleAccent: "ಓದಿ.",
  titleLimit: "ಓದು ಮುಂದುವರಿಸಲು",
  titleLimitAccent: "ಸೈನ್ ಇನ್ ಮಾಡಿ.",
  lede: "ಒಮ್ಮೆ ಸೈನ್ ಇನ್ ಮಾಡಿದರೆ ತಾಣದ ಪ್ರತಿಯೊಂದು ಪಠ್ಯವೂ ನಿಮಗೆ ತೆರೆದಿರುತ್ತದೆ. ಇದು ಉಚಿತ, ಕೆಲವೇ ಕ್ಷಣ ಸಾಕು.",
  ledeLimit: "ಈ ತಿಂಗಳ ನಿಮ್ಮ {n} ಉಚಿತ ಪುಟಗಳನ್ನು ಓದಿದ್ದೀರಿ. ಮುಂದೆ ಓದಲು ಸೈನ್ ಇನ್ ಮಾಡಿ. ಇದು ಉಚಿತ, ಮತ್ತು ನೀವು ಓದುತ್ತಿದ್ದ ಪುಟಕ್ಕೇ ನೇರವಾಗಿ ಹಿಂದಿರುಗುತ್ತೀರಿ.",
  meter: "{n} ಉಚಿತ ಪುಟಗಳಲ್ಲಿ {used} ಓದಲಾಗಿದೆ",
  google: "Google ಮೂಲಕ ಮುಂದುವರಿಯಿರಿ",
  or: "ಅಥವಾ",
  emailLabel: "ಇಮೇಲ್ ವಿಳಾಸ",
  sendCode: "ಸೈನ್ ಇನ್ ಕೋಡ್ ಅನ್ನು ಇಮೇಲ್ ಮಾಡಿ",
  codeTitle: "ನಿಮ್ಮ ಇಮೇಲ್",
  codeTitleAccent: "ನೋಡಿ.",
  codeSent: "{email} ಗೆ 6 ಅಂಕಿಗಳ ಕೋಡ್ ಕಳುಹಿಸಲಾಗಿದೆ. ಅದು ಒಂದು ಗಂಟೆ ಮಾನ್ಯ.",
  codeLabel: "6 ಅಂಕಿಗಳ ಕೋಡ್",
  verify: "ಸೈನ್ ಇನ್",
  useAnotherEmail: "ಬೇರೆ ಇಮೇಲ್ ಬಳಸಿ",
  pointFree: "ಉಚಿತ",
  pointFreeNote: "ಯಾವುದೇ ಪಾವತಿ, ಕಾರ್ಡ್ ಬೇಡ.",
  pointOpen: "ಎಲ್ಲ ಪುಟಗಳೂ ತೆರೆದಿವೆ",
  pointOpenNote: "ಬೇಕಾದಷ್ಟು ಓದಿ.",
  pointKept: "ಕಡಿಮೆ ಮಾಹಿತಿ",
  pointKeptNote: "ನಿಮ್ಮ ಹೆಸರು ಮತ್ತು ಇಮೇಲ್ ಮಾತ್ರ.",
  notNow: "ಈಗ ಬೇಡ, ಮುಖಪುಟಕ್ಕೆ ಹಿಂದಿರುಗಿ",
  rightsNote: "ತಾಣವನ್ನು ಹೇಗೆ ಬಳಸಬಹುದು:",
  rightsLink: "ಹಕ್ಕುಗಳು ಮತ್ತು ಮರುಬಳಕೆ",
  pictureCredit: "ಋಗ್ವೇದ ಹಸ್ತಪ್ರತಿ, MS 2097 · ಸಾರ್ವಜನಿಕ ಸ್ವತ್ತು",

  unavailable: "ಸೈನ್ ಇನ್ ಈಗ ಲಭ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ನಂತರ ಪ್ರಯತ್ನಿಸಿ.",
  notSwitchedOn: "ಸೈನ್ ಇನ್ ಇನ್ನೂ ಆರಂಭವಾಗಿಲ್ಲ.",
  failed: "ಸೈನ್ ಇನ್ ಪೂರ್ಣಗೊಳ್ಳಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
  badEmail: "ಇದು ಇಮೇಲ್ ವಿಳಾಸದಂತೆ ಕಾಣುತ್ತಿಲ್ಲ.",
  badCode: "ಈ ಕೋಡ್ ಸರಿಯಾಗಲಿಲ್ಲ. ಪರಿಶೀಲಿಸಿ, ಅಥವಾ ಹೊಸ ಕೋಡ್ ಪಡೆಯಿರಿ.",
  sendFailed: "ಕೋಡ್ ಕಳುಹಿಸಲಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
  wait: "ಈಗಷ್ಟೇ ಒಂದು ಕೋಡ್ ಕಳುಹಿಸಲಾಗಿದೆ. ಇನ್ನೊಂದಕ್ಕೆ ಒಂದು ನಿಮಿಷ ಕಾಯಿರಿ.",
  expired: "ಸೈನ್ ಇನ್‌ಗೆ ತುಂಬಾ ಸಮಯ ಹಿಡಿಯಿತು. ದಯವಿಟ್ಟು ಮತ್ತೆ ಆರಂಭಿಸಿ.",

  leftOne: "ಈ ತಿಂಗಳು 1 ಉಚಿತ ಪುಟ ಉಳಿದಿದೆ.",
  leftMany: "ಈ ತಿಂಗಳು {n} ಉಚಿತ ಪುಟಗಳು ಉಳಿದಿವೆ.",
  leftNone: "ಇದು ಈ ತಿಂಗಳ ನಿಮ್ಮ ಕೊನೆಯ ಉಚಿತ ಪುಟ.",
  noticeCta: "ಮುಂದೆ ಓದಲು ಸೈನ್ ಇನ್",
  noticeClose: "ಮುಚ್ಚಿ",

  accountTitle: "ನಿಮ್ಮ",
  accountTitleAccent: "ಖಾತೆ.",
  accountLede: "ನೀವು ಸೈನ್ ಇನ್ ಆಗಿದ್ದೀರಿ. ತಾಣದ ಪ್ರತಿಯೊಂದು ಪುಟವೂ ನಿಮಗೆ ತೆರೆದಿದೆ.",
  name: "ಹೆಸರು",
  email: "ಇಮೇಲ್",
  joined: "ಸೇರಿದ ದಿನ",
  lastSignIn: "ಕೊನೆಯ ಸೈನ್ ಇನ್",
  reading: "ಓದು",
  readingValue: "ಎಲ್ಲ ಪುಟಗಳೂ, ಮಿತಿಯಿಲ್ಲದೆ",
  signOut: "ಸೈನ್ ಔಟ್",
  keepReading: "ಓದು ಮುಂದುವರಿಸಿ",
};

const hi: AccountStrings = {
  navAccount: "खाता",
  signIn: "साइन इन",
  yourAccount: "आपका खाता",

  chip: "मुफ़्त खाता",
  chipLimit: "मुफ़्त पृष्ठ पूरे हुए",
  title: "बिना सीमा के",
  titleAccent: "पढ़ें।",
  titleLimit: "आगे पढ़ने के लिए",
  titleLimitAccent: "साइन इन करें।",
  lede: "एक बार साइन इन करें और साइट का हर पाठ आपके लिए खुल जाता है। यह मुफ़्त है और कुछ ही क्षण लगते हैं।",
  ledeLimit: "आप इस महीने के अपने {n} मुफ़्त पृष्ठ पढ़ चुके हैं। आगे पढ़ने के लिए साइन इन करें। यह मुफ़्त है, और आप सीधे उसी पृष्ठ पर लौट आएँगे।",
  meter: "{n} मुफ़्त पृष्ठों में से {used} पढ़े गए",
  google: "Google से जारी रखें",
  or: "या",
  emailLabel: "ईमेल पता",
  sendCode: "साइन इन कोड ईमेल करें",
  codeTitle: "अपना ईमेल",
  codeTitleAccent: "देखें।",
  codeSent: "{email} पर 6 अंकों का कोड भेजा गया है। यह एक घंटे तक मान्य है।",
  codeLabel: "6 अंकों का कोड",
  verify: "साइन इन",
  useAnotherEmail: "दूसरा ईमेल इस्तेमाल करें",
  pointFree: "मुफ़्त",
  pointFreeNote: "न भुगतान, न कार्ड।",
  pointOpen: "हर पृष्ठ खुला",
  pointOpenNote: "जितना चाहें पढ़ें।",
  pointKept: "कम जानकारी",
  pointKeptNote: "केवल आपका नाम और ईमेल।",
  notNow: "अभी नहीं, मुखपृष्ठ पर लौटें",
  rightsNote: "साइट का उपयोग कैसे हो सकता है:",
  rightsLink: "अधिकार और पुनः उपयोग",
  pictureCredit: "ऋग्वेद पांडुलिपि, MS 2097 · सार्वजनिक संपत्ति",

  unavailable: "साइन इन अभी उपलब्ध नहीं है। कृपया बाद में प्रयास करें।",
  notSwitchedOn: "साइन इन अभी चालू नहीं हुआ है।",
  failed: "साइन इन पूरा नहीं हुआ। कृपया फिर से प्रयास करें।",
  badEmail: "यह ईमेल पता जैसा नहीं लगता।",
  badCode: "इस कोड ने काम नहीं किया। जाँच लें, या नया कोड भेजें।",
  sendFailed: "कोड भेजा नहीं जा सका। कृपया फिर से प्रयास करें।",
  wait: "अभी-अभी एक कोड भेजा गया है। दूसरे के लिए एक मिनट रुकें।",
  expired: "साइन इन में बहुत समय लग गया। कृपया फिर से शुरू करें।",

  leftOne: "इस महीने 1 मुफ़्त पृष्ठ बचा है।",
  leftMany: "इस महीने {n} मुफ़्त पृष्ठ बचे हैं।",
  leftNone: "यह इस महीने का आपका आख़िरी मुफ़्त पृष्ठ था।",
  noticeCta: "आगे पढ़ने के लिए साइन इन",
  noticeClose: "बंद करें",

  accountTitle: "आपका",
  accountTitleAccent: "खाता।",
  accountLede: "आप साइन इन हैं। साइट का हर पृष्ठ आपके लिए खुला है।",
  name: "नाम",
  email: "ईमेल",
  joined: "जुड़ने की तिथि",
  lastSignIn: "पिछला साइन इन",
  reading: "पढ़ना",
  readingValue: "हर पृष्ठ, बिना सीमा के",
  signOut: "साइन आउट",
  keepReading: "पढ़ना जारी रखें",
};

const ALL: Record<Locale, AccountStrings> = { en, kn, hi };

export function accountStrings(locale: Locale): AccountStrings {
  return ALL[locale] ?? en;
}

/** "{n}"-style placeholders filled in. */
export function fill(s: string, vars: Record<string, string | number>): string {
  return s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
}
