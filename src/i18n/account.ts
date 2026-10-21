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
  keptTitle: string;
  kept: string;
  unavailable: string;
  failed: string;
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
  signinLede: "An account is optional. Every page on the site can be read without one.",
  google: "Continue with Google",
  keptTitle: "What is kept",
  kept: "Your name and email address, as Google gives them, and when you joined and last signed in. Nothing else is asked of Google.",
  unavailable: "Sign-in is not switched on yet.",
  failed: "Sign-in did not complete. Please try again.",
  accountTitle: "Your account",
  accountLede: "Signed in with Google.",
  name: "Name",
  email: "Email",
  joined: "Joined",
  lastSignIn: "Last signed in",
  signOut: "Sign out",
};

const kn: AccountStrings = {
  navAccount: "ಖಾತೆ",
  signinTitle: "ಸೈನ್ ಇನ್",
  signinLede: "ಖಾತೆ ಕಡ್ಡಾಯವಲ್ಲ. ತಾಣದ ಪ್ರತಿಯೊಂದು ಪುಟವನ್ನೂ ಖಾತೆ ಇಲ್ಲದೆ ಓದಬಹುದು.",
  google: "Google ಮೂಲಕ ಮುಂದುವರಿಯಿರಿ",
  keptTitle: "ಏನನ್ನು ಉಳಿಸಿಕೊಳ್ಳಲಾಗುತ್ತದೆ",
  kept: "Google ನೀಡುವ ನಿಮ್ಮ ಹೆಸರು ಮತ್ತು ಇಮೇಲ್ ವಿಳಾಸ, ಹಾಗೂ ನೀವು ಸೇರಿದ ಮತ್ತು ಕೊನೆಯ ಬಾರಿ ಸೈನ್ ಇನ್ ಮಾಡಿದ ಸಮಯ. Google ನಿಂದ ಇದಕ್ಕಿಂತ ಹೆಚ್ಚಿನದನ್ನು ಕೇಳಲಾಗುವುದಿಲ್ಲ.",
  unavailable: "ಸೈನ್ ಇನ್ ಇನ್ನೂ ಆರಂಭವಾಗಿಲ್ಲ.",
  failed: "ಸೈನ್ ಇನ್ ಪೂರ್ಣಗೊಳ್ಳಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
  accountTitle: "ನಿಮ್ಮ ಖಾತೆ",
  accountLede: "Google ಮೂಲಕ ಸೈನ್ ಇನ್ ಆಗಿದ್ದೀರಿ.",
  name: "ಹೆಸರು",
  email: "ಇಮೇಲ್",
  joined: "ಸೇರಿದ ದಿನ",
  lastSignIn: "ಕೊನೆಯ ಸೈನ್ ಇನ್",
  signOut: "ಸೈನ್ ಔಟ್",
};

const hi: AccountStrings = {
  navAccount: "खाता",
  signinTitle: "साइन इन",
  signinLede: "खाता बनाना आवश्यक नहीं है। साइट का हर पृष्ठ बिना खाते के पढ़ा जा सकता है।",
  google: "Google से जारी रखें",
  keptTitle: "क्या रखा जाता है",
  kept: "Google से मिला आपका नाम और ईमेल पता, तथा आपके जुड़ने और पिछली बार साइन इन करने का समय। Google से इसके अतिरिक्त कुछ नहीं माँगा जाता।",
  unavailable: "साइन इन अभी चालू नहीं हुआ है।",
  failed: "साइन इन पूरा नहीं हुआ। कृपया फिर से प्रयास करें।",
  accountTitle: "आपका खाता",
  accountLede: "Google से साइन इन किया गया।",
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
