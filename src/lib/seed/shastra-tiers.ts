import type { Locale } from "@/i18n/config";

// ─────────────────────────────────────────────────────────
//  The three tiers the śāstra map is arranged by.
//
//  Ten branches in one undifferentiated grid hid the one distinction
//  the tradition itself draws first: between what is heard (śruti),
//  held to have no human author, and what is remembered (smṛti), which
//  is authoritative where it agrees with what is heard. A third tier
//  holds what is built on both — the systems that argue about what the
//  Veda means, the temple tradition, and the short teaching books.
//
//  The Āgamas sit uneasily in any such scheme: some Śaiva and Vaiṣṇava
//  traditions rank them beside the Veda. The third tier's lede says so
//  rather than filing them quietly.
// ─────────────────────────────────────────────────────────

export interface ShastraTier {
  id: string;
  name: Record<Locale, string>;
  /** In Devanagari, where the tier has a name of its own. */
  sanskrit?: string;
  lede: Record<Locale, string>;
  /** Branch ids from seed/shastras.ts, in the order they are shown. */
  branches: string[];
}

export const SHASTRA_TIERS: ShastraTier[] = [
  {
    id: "shruti",
    name: { en: "What is heard", kn: "ಶ್ರುತಿ", hi: "श्रुति" },
    sanskrit: "श्रुतिः",
    lede: {
      en: "Held to be heard rather than composed — the Veda, and the Upaniṣads at its end. Every other branch claims its authority from these.",
      kn: "ರಚಿಸಿದ್ದಲ್ಲ, ಕೇಳಿಸಿಕೊಂಡದ್ದು ಎಂದು ನಂಬುವುದು — ವೇದ, ಮತ್ತು ಅದರ ಕೊನೆಯ ಉಪನಿಷತ್ತುಗಳು. ಉಳಿದ ಪ್ರತಿ ಶಾಖೆಯೂ ತನ್ನ ಪ್ರಾಮಾಣ್ಯವನ್ನು ಇವುಗಳಿಂದಲೇ ಪಡೆಯುತ್ತದೆ.",
      hi: "रचा हुआ नहीं, सुना हुआ माना गया — वेद, और उसके अंत के उपनिषद्। हर अन्य शाखा अपना प्रामाण्य इन्हीं से लेती है।",
    },
    branches: ["veda", "upanishads"],
  },
  {
    id: "smriti",
    name: { en: "What is remembered", kn: "ಸ್ಮೃತಿ", hi: "स्मृति" },
    sanskrit: "स्मृतिः",
    lede: {
      en: "Composed, often by a named author, and authoritative where it agrees with what is heard — the limbs of the Veda, the law, the epics and the Purāṇas.",
      kn: "ರಚಿತವಾದದ್ದು, ಹಲವು ಬಾರಿ ಹೆಸರಿರುವ ಕರ್ತೃವಿನಿಂದ, ಮತ್ತು ಶ್ರುತಿಗೆ ಹೊಂದುವಲ್ಲಿ ಪ್ರಮಾಣ — ವೇದಾಂಗಗಳು, ಧರ್ಮಶಾಸ್ತ್ರ, ಇತಿಹಾಸ ಮತ್ತು ಪುರಾಣಗಳು.",
      hi: "रचित, प्रायः किसी नामित कर्ता द्वारा, और श्रुति से मेल खाने पर प्रमाण — वेदांग, धर्मशास्त्र, इतिहास और पुराण।",
    },
    branches: ["vedangas", "dharma", "itihasa", "puranas"],
  },
  {
    id: "built",
    name: { en: "What is built on them", kn: "ಅವುಗಳ ಮೇಲೆ ಕಟ್ಟಿದ್ದು", hi: "उन पर जो बना" },
    lede: {
      en: "The systems that argue about what the Veda means, the short books that teach them, and the temple tradition — whose Āgamas some Śaiva and Vaiṣṇava schools rank beside the Veda itself.",
      kn: "ವೇದದ ಅರ್ಥದ ಬಗ್ಗೆ ವಾದಿಸುವ ದರ್ಶನಗಳು, ಅವನ್ನು ಕಲಿಸುವ ಸಣ್ಣ ಗ್ರಂಥಗಳು, ಮತ್ತು ದೇವಾಲಯ ಪರಂಪರೆ — ಅದರ ಆಗಮಗಳನ್ನು ಕೆಲವು ಶೈವ ಮತ್ತು ವೈಷ್ಣವ ಶಾಖೆಗಳು ವೇದದ ಪಕ್ಕದಲ್ಲೇ ಇಡುತ್ತವೆ.",
      hi: "वे दर्शन जो वेद के अर्थ पर विवाद करते हैं, उन्हें सिखाने वाले छोटे ग्रंथ, और मंदिर परंपरा — जिसके आगमों को कुछ शैव और वैष्णव शाखाएँ वेद के बराबर रखती हैं।",
    },
    branches: ["vedanta", "darshanas", "agamas", "prakarana"],
  },
];
