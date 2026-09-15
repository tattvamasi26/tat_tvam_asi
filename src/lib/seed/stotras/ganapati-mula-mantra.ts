import { registerStotra } from "../stotras";
import { GANESHA_MANTRA } from "../stuti-images";

// ─────────────────────────────────────────────────────────
//  The Gaṇapati mūla-mantra — ॐ गं गणपतये नमः.
//
//  From the Gaṇapati Atharvaśīrṣa (section 7), which builds the
//  mantra syllable by syllable and names its ṛṣi (Gaṇaka), its
//  metre (nicṛd gāyatrī) and its devatā (Gaṇapati). Checked against
//  both Atharvaśīrṣa texts on Sanskrit Wikisource.
// ─────────────────────────────────────────────────────────

registerStotra({
  slug: "ganapati-mula-mantra",
  textId: "t-stuti-ganapati-mula-mantra",
  devata: "ganesha",
  group: "daily",
  order: 3,
  category: "shruti",
  metre: "nicṛd gāyatrī",
  origin: { en: "Ganapati Atharvashirsha", kn: "ಗಣಪತಿ ಅಥರ್ವಶೀರ್ಷ", hi: "गणपति अथर्वशीर्ष" },
  composer: { en: "Rishi Ganaka", kn: "ಗಣಕ ಋಷಿ", hi: "गणक ऋषि" },
  video: { id: "a8v4KAhZtLo", title: "Om Gam Ganapataye Namah, 108 times", channel: "Purnesh" },
  image: GANESHA_MANTRA,
  verses: [
    {
      id: "ganapati-mula-mantra-1",
      locator: "1",
      sanskrit: ["ॐ गं गणपतये नमः ॥"],
      iast: ["oṃ gaṃ gaṇapataye namaḥ ||"],
      readings: {
        en: { translation: "Oṃ. Gaṃ, his seed-syllable. Salutations to Gaṇapati." },
        kn: { translation: "ಓಂ. ಗಂ — ಅವನ ಬೀಜಾಕ್ಷರ. ಗಣಪತಿಗೆ ನಮಸ್ಕಾರ." },
        hi: { translation: "ॐ। गं — उनका बीजाक्षर। गणपति को नमस्कार।" },
      },
    },
  ],
});
