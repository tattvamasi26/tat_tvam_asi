import { registerStotra } from "../stotras";

// ─────────────────────────────────────────────────────────
//  Gaṇeśa Gāyatrī — from the Gaṇapati Atharvaśīrṣa.
//
//  Checked against the Atharvaśīrṣa text on Sanskrit Wikisource
//  (गणेशमन्त्रः, section 8), which reads दन्तिः. Some printed forms
//  have दन्ती; the commentary notes it.
// ─────────────────────────────────────────────────────────

registerStotra({
  slug: "ganesha-gayatri",
  textId: "t-stuti-ganesha-gayatri",
  devata: "ganesha",
  group: "daily",
  order: 4,
  category: "shruti",
  metre: "gāyatrī",
  origin: { en: "Ganapati Atharvashirsha", kn: "ಗಣಪತಿ ಅಥರ್ವಶೀರ್ಷ", hi: "गणपति अथर्वशीर्ष" },
  video: { id: "YI-JM9Mlaog", title: "Ganesha Gayatri, with lyrics", channel: "Rajshri Soul" },
  verses: [
    {
      id: "ganesha-gayatri-1",
      locator: "1",
      handle: { en: "The one-tusked, the curved trunk", kn: "ಏಕದಂತ, ವಕ್ರತುಂಡ", hi: "एकदंत, वक्रतुंड" },
      sanskrit: ["एकदन्ताय विद्महे", "वक्रतुण्डाय धीमहि ।", "तन्नो दन्तिः प्रचोदयात् ॥"],
      iast: ["ekadantāya vidmahe", "vakratuṇḍāya dhīmahi |", "tan no dantiḥ pracodayāt ||"],
      keywords: [
        { term: "एकदन्ताय", iast: "ekadantāya", gloss: { en: "the one-tusked", kn: "ಏಕದಂತನನ್ನು", hi: "एकदंत को" } },
        { term: "विद्महे", iast: "vidmahe", gloss: { en: "we come to know", kn: "ಅರಿಯುತ್ತೇವೆ", hi: "हम जानते हैं" } },
        { term: "वक्रतुण्डाय", iast: "vakratuṇḍāya", gloss: { en: "the curved-trunked", kn: "ವಕ್ರತುಂಡನನ್ನು", hi: "वक्रतुंड को" } },
        { term: "धीमहि", iast: "dhīmahi", gloss: { en: "we meditate on", kn: "ಧ್ಯಾನಿಸುತ್ತೇವೆ", hi: "हम ध्यान करते हैं" } },
        { term: "दन्तिः", iast: "dantiḥ", gloss: { en: "the tusked one", kn: "ದಂತವುಳ್ಳವನು", hi: "दंतधारी" } },
        { term: "प्रचोदयात्", iast: "pracodayāt", gloss: { en: "may he set us in motion", kn: "ಪ್ರೇರೇಪಿಸಲಿ", hi: "प्रेरित करे" } },
      ],
      readings: {
        en: {
          translation: "We know the one-tusked; we meditate on the curved-trunked. May the tusked one set us in motion.",
          explanation:
            "The Gāyatrī's form given to Gaṇeśa: the same metre and the same last word, pracodayāt, with his names in the places the Vedic verse gave to Savitṛ. The pattern — we know this one, we meditate on that one, may he impel us — is used for many devatas, and each takes the form of the verse on the Gāyatrī page.\n\nThis one comes from the Gaṇapati Atharvaśīrṣa. Printed texts vary between dantiḥ and dantī for the last name; the Atharvaśīrṣa text followed here reads dantiḥ.",
        },
        kn: {
          translation: "ಏಕದಂತನನ್ನು ಅರಿಯುತ್ತೇವೆ; ವಕ್ರತುಂಡನನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ದಂತವುಳ್ಳವನು ನಮ್ಮನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.",
          explanation:
            "ಗಣೇಶನಿಗೆ ನೀಡಿದ ಗಾಯತ್ರಿಯ ರೂಪ: ಅದೇ ಛಂದಸ್ಸು, ಅದೇ ಕೊನೆಯ ಪದ — ಪ್ರಚೋದಯಾತ್ — ವೈದಿಕ ಮಂತ್ರವು ಸವಿತೃವಿಗೆ ನೀಡಿದ ಸ್ಥಾನಗಳಲ್ಲಿ ಅವನ ಹೆಸರುಗಳು. 'ಇವನನ್ನು ಅರಿಯುತ್ತೇವೆ, ಅವನನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ, ಅವನು ನಮ್ಮನ್ನು ಪ್ರೇರೇಪಿಸಲಿ' ಎಂಬ ಈ ಮಾದರಿಯನ್ನು ಅನೇಕ ದೇವತೆಗಳಿಗೆ ಬಳಸಲಾಗುತ್ತದೆ; ಪ್ರತಿಯೊಂದೂ ಗಾಯತ್ರೀ ಪುಟದಲ್ಲಿರುವ ಮಂತ್ರದ ರೂಪವನ್ನೇ ಪಡೆಯುತ್ತದೆ.\n\nಇದು ಗಣಪತಿ ಅಥರ್ವಶೀರ್ಷದಿಂದ ಬಂದದ್ದು. ಕೊನೆಯ ಹೆಸರಿಗೆ ಮುದ್ರಿತ ಪಾಠಗಳಲ್ಲಿ 'ದಂತಿಃ' ಮತ್ತು 'ದಂತೀ' ಎರಡೂ ಇವೆ; ಇಲ್ಲಿ ಅನುಸರಿಸಿರುವ ಅಥರ್ವಶೀರ್ಷ ಪಾಠ 'ದಂತಿಃ' ಎಂದು ಓದುತ್ತದೆ.",
        },
        hi: {
          translation: "हम एकदंत को जानते हैं; वक्रतुंड का ध्यान करते हैं। वे दंतधारी हमें प्रेरित करें।",
          explanation:
            "गणेश को दिया गया गायत्री का रूप: वही छंद और वही अंतिम शब्द — प्रचोदयात् — और उन स्थानों पर उनके नाम जो वैदिक मंत्र ने सविता को दिए थे। 'इन्हें जानते हैं, उनका ध्यान करते हैं, वे हमें प्रेरित करें' — यह ढाँचा अनेक देवताओं के लिए प्रयुक्त होता है, और हर एक गायत्री पृष्ठ वाले मंत्र का ही रूप लेता है।\n\nयह गणपति अथर्वशीर्ष से आता है। अंतिम नाम के लिए छपे पाठों में 'दन्तिः' और 'दन्ती' दोनों मिलते हैं; यहाँ अपनाया गया अथर्वशीर्ष का पाठ 'दन्तिः' पढ़ता है।",
        },
      },
    },
  ],
});
