import type { Locale } from "./config";

/**
 * Words for signing in and for a reader's account page. Kept in their
 * own file, as the rights notice is, so the three languages sit side by
 * side and a test can hold them to the same keys.
 */
export interface AccountStrings {
  navAccount: string;
  signinTitle: string;
  signinLede: string;
  google: string;
  or: string;
  emailLabel: string;
  sendCode: string;
  codeTitle: string;
  /** "{email}" is replaced with the address. */
  codeSent: string;
  codeLabel: string;
  verify: string;
  useAnotherEmail: string;
  keptTitle: string;
  kept: string;
  unavailable: string;
  notSwitchedOn: string;
  failed: string;
  badEmail: string;
  badCode: string;
  sendFailed: string;
  wait: string;
  expired: string;
  accountTitle: string;
  accountLede: string;
  name: string;
  email: string;
  joined: string;
  lastSignIn: string;
  signOut: string;
}

const en: AccountStrings = {
  navAccount: "Account",
  signinTitle: "Sign in",
  signinLede: "An account is optional. Every page on the site can be read without one. Signing in for the first time creates your account.",
  google: "Continue with Google",
  or: "or",
  emailLabel: "Email address",
  sendCode: "Email me a sign-in code",
  codeTitle: "Enter your code",
  codeSent: "We sent a 6-digit code to {email}. It works for one hour.",
  codeLabel: "6-digit code",
  verify: "Sign in",
  useAnotherEmail: "Use a different email",
  keptTitle: "What is kept",
  kept: "Your email address, your name if you sign in with Google, and when you joined and last signed in. Nothing else is kept.",
  unavailable: "Sign-in is not available right now. Please try again later.",
  notSwitchedOn: "Sign-in is not switched on yet.",
  failed: "Sign-in did not complete. Please try again.",
  badEmail: "That does not look like an email address.",
  badCode: "That code did not work. Check it, or send a new one.",
  sendFailed: "The code could not be sent. Please try again.",
  wait: "A code was sent a moment ago. Please wait a minute before asking for another.",
  expired: "That sign-in took too long. Please start again.",
  accountTitle: "Your account",
  accountLede: "You are signed in.",
  name: "Name",
  email: "Email",
  joined: "Joined",
  lastSignIn: "Last signed in",
  signOut: "Sign out",
};

const kn: AccountStrings = {
  navAccount: "ಖಾತೆ",
  signinTitle: "ಸೈನ್ ಇನ್",
  signinLede: "ಖಾತೆ ಕಡ್ಡಾಯವಲ್ಲ. ತಾಣದ ಪ್ರತಿಯೊಂದು ಪುಟವನ್ನೂ ಖಾತೆ ಇಲ್ಲದೆ ಓದಬಹುದು. ಮೊದಲ ಬಾರಿ ಸೈನ್ ಇನ್ ಮಾಡಿದಾಗ ನಿಮ್ಮ ಖಾತೆ ತೆರೆಯುತ್ತದೆ.",
  google: "Google ಮೂಲಕ ಮುಂದುವರಿಯಿರಿ",
  or: "ಅಥವಾ",
  emailLabel: "ಇಮೇಲ್ ವಿಳಾಸ",
  sendCode: "ಸೈನ್ ಇನ್ ಕೋಡ್ ಅನ್ನು ಇಮೇಲ್ ಮಾಡಿ",
  codeTitle: "ನಿಮ್ಮ ಕೋಡ್ ನಮೂದಿಸಿ",
  codeSent: "{email} ಗೆ 6 ಅಂಕಿಗಳ ಕೋಡ್ ಕಳುಹಿಸಲಾಗಿದೆ. ಅದು ಒಂದು ಗಂಟೆ ಮಾನ್ಯ.",
  codeLabel: "6 ಅಂಕಿಗಳ ಕೋಡ್",
  verify: "ಸೈನ್ ಇನ್",
  useAnotherEmail: "ಬೇರೆ ಇಮೇಲ್ ಬಳಸಿ",
  keptTitle: "ಏನನ್ನು ಉಳಿಸಿಕೊಳ್ಳಲಾಗುತ್ತದೆ",
  kept: "ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸ, Google ಮೂಲಕ ಸೈನ್ ಇನ್ ಮಾಡಿದರೆ ನಿಮ್ಮ ಹೆಸರು, ಹಾಗೂ ನೀವು ಸೇರಿದ ಮತ್ತು ಕೊನೆಯ ಬಾರಿ ಸೈನ್ ಇನ್ ಮಾಡಿದ ಸಮಯ. ಇದಕ್ಕಿಂತ ಹೆಚ್ಚಿನದನ್ನು ಉಳಿಸಿಕೊಳ್ಳುವುದಿಲ್ಲ.",
  unavailable: "ಸೈನ್ ಇನ್ ಈಗ ಲಭ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ನಂತರ ಪ್ರಯತ್ನಿಸಿ.",
  notSwitchedOn: "ಸೈನ್ ಇನ್ ಇನ್ನೂ ಆರಂಭವಾಗಿಲ್ಲ.",
  failed: "ಸೈನ್ ಇನ್ ಪೂರ್ಣಗೊಳ್ಳಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
  badEmail: "ಇದು ಇಮೇಲ್ ವಿಳಾಸದಂತೆ ಕಾಣುತ್ತಿಲ್ಲ.",
  badCode: "ಈ ಕೋಡ್ ಸರಿಯಾಗಲಿಲ್ಲ. ಪರಿಶೀಲಿಸಿ, ಅಥವಾ ಹೊಸ ಕೋಡ್ ಪಡೆಯಿರಿ.",
  sendFailed: "ಕೋಡ್ ಕಳುಹಿಸಲಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
  wait: "ಈಗಷ್ಟೇ ಒಂದು ಕೋಡ್ ಕಳುಹಿಸಲಾಗಿದೆ. ಇನ್ನೊಂದಕ್ಕೆ ಒಂದು ನಿಮಿಷ ಕಾಯಿರಿ.",
  expired: "ಸೈನ್ ಇನ್‌ಗೆ ತುಂಬಾ ಸಮಯ ಹಿಡಿಯಿತು. ದಯವಿಟ್ಟು ಮತ್ತೆ ಆರಂಭಿಸಿ.",
  accountTitle: "ನಿಮ್ಮ ಖಾತೆ",
  accountLede: "ನೀವು ಸೈನ್ ಇನ್ ಆಗಿದ್ದೀರಿ.",
  name: "ಹೆಸರು",
  email: "ಇಮೇಲ್",
  joined: "ಸೇರಿದ ದಿನ",
  lastSignIn: "ಕೊನೆಯ ಸೈನ್ ಇನ್",
  signOut: "ಸೈನ್ ಔಟ್",
};

const hi: AccountStrings = {
  navAccount: "खाता",
  signinTitle: "साइन इन",
  signinLede: "खाता बनाना आवश्यक नहीं है। साइट का हर पृष्ठ बिना खाते के पढ़ा जा सकता है। पहली बार साइन इन करने पर आपका खाता बन जाता है।",
  google: "Google से जारी रखें",
  or: "या",
  emailLabel: "ईमेल पता",
  sendCode: "साइन इन कोड ईमेल करें",
  codeTitle: "अपना कोड डालें",
  codeSent: "{email} पर 6 अंकों का कोड भेजा गया है। यह एक घंटे तक मान्य है।",
  codeLabel: "6 अंकों का कोड",
  verify: "साइन इन",
  useAnotherEmail: "दूसरा ईमेल इस्तेमाल करें",
  keptTitle: "क्या रखा जाता है",
  kept: "आपका ईमेल पता, Google से साइन इन करने पर आपका नाम, और आपके जुड़ने व पिछली बार साइन इन करने का समय। इसके अलावा कुछ नहीं रखा जाता।",
  unavailable: "साइन इन अभी उपलब्ध नहीं है। कृपया बाद में प्रयास करें।",
  notSwitchedOn: "साइन इन अभी चालू नहीं हुआ है।",
  failed: "साइन इन पूरा नहीं हुआ। कृपया फिर से प्रयास करें।",
  badEmail: "यह ईमेल पता जैसा नहीं लगता।",
  badCode: "यह कोड काम नहीं किया। जाँच लें, या नया कोड भेजें।",
  sendFailed: "कोड भेजा नहीं जा सका। कृपया फिर से प्रयास करें।",
  wait: "अभी-अभी एक कोड भेजा गया है। दूसरे के लिए एक मिनट रुकें।",
  expired: "साइन इन में बहुत समय लग गया। कृपया फिर से शुरू करें।",
  accountTitle: "आपका खाता",
  accountLede: "आप साइन इन हैं।",
  name: "नाम",
  email: "ईमेल",
  joined: "जुड़ने की तिथि",
  lastSignIn: "पिछला साइन इन",
  signOut: "साइन आउट",
};

const ALL: Record<Locale, AccountStrings> = { en, kn, hi };

export function accountStrings(locale: Locale): AccountStrings {
  return ALL[locale] ?? en;
}
