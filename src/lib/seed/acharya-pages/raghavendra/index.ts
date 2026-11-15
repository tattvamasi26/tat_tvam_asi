import { registerAcharyaPage } from "../../acharya-pages";
import { OWNER_IMAGES } from "../../owner-images";
import { en } from "./en";
import { kn } from "./kn";
import { hi } from "./hi";

// ─────────────────────────────────────────────────────────
//  Sri Raghavendra Tirtha.
//
//  Written from docs/RAGHAVENDRA.md, which carries the sources and
//  the decisions. The prose lives one file per language; this module
//  holds what they share — the pictures and the sources.
//
//  His difficulty is the opposite of Shankara's. The life is close to
//  the record — a contemporary biography, dated grants, a year of
//  death no one disputes — and the works are not in doubt. What needs
//  care is the miracle literature around him, which is large and
//  devotional. The page keeps the two apart:
//
//   1. Birth is "1595 or 1598"; the start of the pontificate is a
//      disagreement between 1621 and 1624; 1671 is known.
//   2. The earlier births (Prahlada, Vyasatirtha), the grant of
//      Manchale and the Munro story are given as tradition, each in
//      the words of whoever tells it.
//   3. The Aradhana is dated by the lunar calendar only.
// ─────────────────────────────────────────────────────────

const COMMONS = "https://commons.wikimedia.org/wiki/";

registerAcharyaPage({
  slug: "raghavendra-tirtha",
  nameSanskrit: "श्रीराघवेन्द्रतीर्थः",

  hero: { ...OWNER_IMAGES.raghavendra },

  gallery: [
    {
      ...OWNER_IMAGES.raghavendraSketch,
      caption: {
        en: "Rayaru with the image of Krishna he is shown holding to his cheek, and Rama, Sita and Lakshmana beside him — a modern drawing.",
        kn: "ಕೆನ್ನೆಗೆ ಹಿಡಿದ ಕೃಷ್ಣನ ವಿಗ್ರಹ, ಪಕ್ಕದಲ್ಲಿ ರಾಮ, ಸೀತೆ, ಲಕ್ಷ್ಮಣ — ರಾಯರ ಇಂದಿನ ಕಾಲದ ಚಿತ್ರ.",
        hi: "गाल से लगाई कृष्ण की प्रतिमा, पास में राम, सीता और लक्ष्मण — रायरु का एक आधुनिक चित्र।",
      },
    },
    {
      src: "/images/acharyas/raghavendra/mantralayam-matha.jpg",
      width: 1200,
      height: 1000,
      credit: "Jahnavi satish · CC BY-SA 4.0 · Wikimedia Commons",
      sourceUrl: COMMONS + "File:Mantralayam_Raghavendra_Matham_750.jpg",
      alt: {
        en: "The white front of the Raghavendra Swamy Matha at Mantralaya, its tower over the entrance, pilgrims on the steps",
        kn: "ಮಂತ್ರಾಲಯದ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿ ಮಠದ ಬಿಳಿಯ ಮುಂಭಾಗ — ಪ್ರವೇಶದ ಮೇಲಿನ ಗೋಪುರ, ಮೆಟ್ಟಿಲುಗಳ ಮೇಲೆ ಯಾತ್ರಿಕರು",
        hi: "मंत्रालय के राघवेंद्र स्वामी मठ का श्वेत अग्रभाग — प्रवेश के ऊपर शिखर, सीढ़ियों पर तीर्थयात्री",
      },
      caption: {
        en: "The matha at Mantralaya, which keeps the brindavana",
        kn: "ಮಂತ್ರಾಲಯದ ಮಠ — ಬೃಂದಾವನವನ್ನು ಕಾಯುವ ಸ್ಥಳ",
        hi: "मंत्रालय का मठ, जो वृंदावन को सँभालता है",
      },
    },
    {
      src: "/images/acharyas/raghavendra/mantralayam-court.jpg",
      width: 1920,
      height: 1440,
      credit: "Mouryan · CC BY-SA 4.0 · Wikimedia Commons",
      sourceUrl: COMMONS + "File:View_of_Sri_Guru_Raghavendra_Swamy_Mutt,_Mantrayalam.jpg",
      alt: {
        en: "The long paved approach to the matha at Mantralaya between gilded colonnades, under a wide sky",
        kn: "ಚಿನ್ನದ ಬಣ್ಣದ ಕಂಬಸಾಲುಗಳ ನಡುವೆ ಮಂತ್ರಾಲಯದ ಮಠಕ್ಕೆ ಸಾಗುವ ಉದ್ದನೆಯ ಹಾದಿ, ಮೇಲೆ ವಿಶಾಲ ಆಕಾಶ",
        hi: "स्वर्णिम स्तंभ-पंक्तियों के बीच मंत्रालय के मठ तक जाता लंबा पक्का पथ, ऊपर खुला आकाश",
      },
      caption: {
        en: "The approach to the matha, Mantralaya",
        kn: "ಮಠಕ್ಕೆ ಸಾಗುವ ಹಾದಿ, ಮಂತ್ರಾಲಯ",
        hi: "मठ की ओर जाता पथ, मंत्रालय",
      },
    },
  ],

  sources: [
    {
      title: "Raghavendra Tirtha — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Raghavendra_Tirtha",
      note: "For the family, the dates, the travels and the works, citing B. N. K. Sharma.",
    },
    {
      title: "Raghavendra Math (Mantralayam) — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Raghavendra_Math_(Mantralayam)",
      note: "For the matha's names, the mathatraya and the succession.",
    },
    {
      title: "Sri Raghavendra Swamy Matha, Mantralayam — the matha's history",
      url: "https://srsmatha.org/mathahistory.php",
      note: "For the guru parampara as the matha gives it.",
    },
    {
      title: "Sudhindra Tirtha — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Sudhindra_Tirtha",
      note: "For his teacher, and the year his teacher died.",
    },
    {
      title: "Siddi Masud — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Siddi_Masud",
      note: "For the Adil Shahi general at Adoni whom the tradition credits with the grant.",
    },
    {
      title: "Dvaita Vedanta — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Dvaita_Vedanta",
      note: "For the five differences and the doctrine in outline.",
    },
  ],

  content: { en, kn, hi },
});
