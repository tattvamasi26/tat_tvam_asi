import type { Locale } from "@/i18n/config";

// ─────────────────────────────────────────────────────────
//  The six seasons, each two lunar months.
//
//  The festival half of the section is arranged by these rather than
//  by twelve months, because twelve rows of which three are empty
//  read as a calendar with gaps, while six seasons read as the year
//  the festivals actually describe — the new year in spring, the
//  serpent and the clay Gaṇeśa in the rains, the Goddess and the
//  lamps after them, the sun turning north in the cold.
//
//  The month-to-season mapping is the standard one. A solar festival
//  has no lunar month and is placed in the season it falls in.
// ─────────────────────────────────────────────────────────

export interface Rtu {
  id: string;
  name: Record<Locale, string>;
  /** In Devanagari. The view converts it. */
  sanskrit: string;
  /** The two lunar months, by the ids seed/festivals.ts uses. */
  months: [string, string];
  /** One line on what the season is like. */
  character: Record<Locale, string>;
}

export const RTUS: Rtu[] = [
  {
    id: "vasanta",
    name: { en: "Spring", kn: "ವಸಂತ", hi: "वसंत" },
    sanskrit: "वसन्तः",
    months: ["chaitra", "vaishakha"],
    character: {
      en: "The year begins, the mango flowers, and the heat starts to build.",
      kn: "ವರ್ಷ ಆರಂಭ, ಮಾವು ಹೂಬಿಡುತ್ತದೆ, ಬಿಸಿಲು ಏರತೊಡಗುತ್ತದೆ.",
      hi: "वर्ष आरंभ होता है, आम बौराता है, और गर्मी चढ़ने लगती है।",
    },
  },
  {
    id: "grishma",
    name: { en: "Summer", kn: "ಗ್ರೀಷ್ಮ", hi: "ग्रीष्म" },
    sanskrit: "ग्रीष्मः",
    months: ["jyeshtha", "ashadha"],
    character: {
      en: "The quietest season of the year — Āṣāḍha is held to be inauspicious for beginnings, and almost nothing is begun.",
      kn: "ವರ್ಷದ ಅತಿ ಶಾಂತ ಋತು — ಆಷಾಢ ಆರಂಭಗಳಿಗೆ ಅಶುಭವೆಂದು ನಂಬಿಕೆ, ಬಹುತೇಕ ಏನೂ ಆರಂಭವಾಗುವುದಿಲ್ಲ.",
      hi: "वर्ष की सबसे शांत ऋतु — आषाढ़ आरंभों के लिए अशुभ माना जाता है, और लगभग कुछ आरंभ नहीं होता।",
    },
  },
  {
    id: "varsha",
    name: { en: "The rains", kn: "ವರ್ಷ ಋತು", hi: "वर्षा" },
    sanskrit: "वर्षाः",
    months: ["shravana", "bhadrapada"],
    character: {
      en: "The monsoon months, and the busiest in the household calendar — vratas for the women, the serpent, and Gaṇeśa in clay.",
      kn: "ಮುಂಗಾರಿನ ತಿಂಗಳುಗಳು, ಮನೆಯ ಪಂಚಾಂಗದಲ್ಲಿ ಅತಿ ಕಾರ್ಯನಿರತವಾದವು — ಹೆಂಗಸರ ವ್ರತಗಳು, ನಾಗ, ಮಣ್ಣಿನ ಗಣೇಶ.",
      hi: "मानसून के महीने, और घर के पंचांग में सबसे व्यस्त — स्त्रियों के व्रत, नाग, और मिट्टी के गणेश।",
    },
  },
  {
    id: "sharad",
    name: { en: "Autumn", kn: "ಶರದ್", hi: "शरद" },
    sanskrit: "शरद्",
    months: ["ashvina", "kartika"],
    character: {
      en: "The rains end and the sky clears. The Goddess's nine nights, then the lamps, then Viṣṇu wakes.",
      kn: "ಮಳೆ ಮುಗಿದು ಆಕಾಶ ತಿಳಿಯಾಗುತ್ತದೆ. ದೇವಿಯ ಒಂಬತ್ತು ರಾತ್ರಿಗಳು, ಆಮೇಲೆ ದೀಪಗಳು, ಆಮೇಲೆ ವಿಷ್ಣು ಏಳುತ್ತಾನೆ.",
      hi: "वर्षा समाप्त होती है और आकाश निर्मल होता है। देवी की नौ रातें, फिर दीपक, फिर विष्णु जागते हैं।",
    },
  },
  {
    id: "hemanta",
    name: { en: "Early winter", kn: "ಹೇಮಂತ", hi: "हेमंत" },
    sanskrit: "हेमन्तः",
    months: ["margashirsha", "pausha"],
    character: {
      en: "The cool season. The Gītā's day, and the sun's move into Makara.",
      kn: "ತಂಪಿನ ಋತು. ಗೀತೆಯ ದಿನ, ಮತ್ತು ಸೂರ್ಯ ಮಕರಕ್ಕೆ ಪ್ರವೇಶಿಸುವುದು.",
      hi: "शीतल ऋतु। गीता का दिन, और सूर्य का मकर में प्रवेश।",
    },
  },
  {
    id: "shishira",
    name: { en: "Late winter", kn: "ಶಿಶಿರ", hi: "शिशिर" },
    sanskrit: "शिशिरः",
    months: ["magha", "phalguna"],
    character: {
      en: "The year closes on Śiva's night and a fire at the full moon.",
      kn: "ವರ್ಷ ಶಿವನ ರಾತ್ರಿ ಮತ್ತು ಹುಣ್ಣಿಮೆಯ ಬೆಂಕಿಯೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ.",
      hi: "वर्ष शिव की रात्रि और पूर्णिमा की अग्नि पर समाप्त होता है।",
    },
  },
];

/** The season a festival falls in. A solar festival goes by its note. */
export const SOLAR_RTU: Record<string, string> = {
  "makara-sankranti": "hemanta",
};

export function rtuForMonth(month: string | null | undefined): Rtu | undefined {
  if (!month) return undefined;
  return RTUS.find((r) => r.months.includes(month));
}
