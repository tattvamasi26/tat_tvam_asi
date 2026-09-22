import type { Locale } from "@/i18n/config";
import type { DevataImage } from "./devatas";

// ─────────────────────────────────────────────────────────
//  The temples are arranged by region.
//
//  /temples lists the regions; /temples/[region] lists everything in
//  one — its temples, written in depth, and its circuits (a set of
//  temples visited together, such as the Nava Vinayakas).
//
//  A region is a cultural region, not an administrative one: Tulunadu
//  runs from Kasaragod in Kerala to the Kundapura coast in Karnataka,
//  so it is its own section rather than a slice of a state.
// ─────────────────────────────────────────────────────────

type Text = Record<Locale, string>;

export interface TempleRegion {
  slug: string;
  order: number;
  name: Text;
  /** One line, for the card on /temples. */
  blurb: Text;
  /** The opening paragraph of the region's own page. */
  lede: Text;
  image?: DevataImage;
}

export const TEMPLE_REGIONS: TempleRegion[] = [
  {
    slug: "tulunadu",
    order: 1,
    name: { en: "Temples of Tulunadu", kn: "ತುಳುನಾಡಿನ ದೇವಾಲಯಗಳು", hi: "तुलुनाडु के मंदिर" },
    blurb: {
      en: "The coast between the Western Ghats and the sea, from Kasaragod to Kundapura.",
      kn: "ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು ಮತ್ತು ಕಡಲ ನಡುವಿನ ಕರಾವಳಿ — ಕಾಸರಗೋಡಿನಿಂದ ಕುಂದಾಪುರದವರೆಗೆ.",
      hi: "पश्चिमी घाट और समुद्र के बीच का तट — कासरगोड से कुंदापुर तक।",
    },
    lede: {
      en: "Tulunadu is the strip of coast between the Western Ghats and the Arabian Sea, from Kasaragod in Kerala to the Kundapura coast in Karnataka. Tradition calls it part of Parashurama Kshetra, land reclaimed from the sea. Its temples keep their own customs: worship under the Agama followed beside the daivas of the countryside, temple cars drawn through narrow streets, and the seven muktisthalas and the Ashta Mathas of Udupi drawing pilgrims from far beyond the coast.",
      kn: "ತುಳುನಾಡು ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು ಮತ್ತು ಅರಬ್ಬೀ ಸಮುದ್ರದ ನಡುವಿನ ಕರಾವಳಿ ಪಟ್ಟಿ — ಕೇರಳದ ಕಾಸರಗೋಡಿನಿಂದ ಕರ್ನಾಟಕದ ಕುಂದಾಪುರ ಕರಾವಳಿಯವರೆಗೆ. ಸಮುದ್ರದಿಂದ ಮೇಲೆತ್ತಿದ ನೆಲ ಎಂದು ಪರಂಪರೆ ಹೇಳುವ ಪರಶುರಾಮ ಕ್ಷೇತ್ರದ ಭಾಗ ಇದು. ಇಲ್ಲಿನ ದೇವಾಲಯಗಳಿಗೆ ತಮ್ಮದೇ ಸಂಪ್ರದಾಯಗಳಿವೆ: ಆಗಮೋಕ್ತ ಪೂಜೆಯ ಪಕ್ಕದಲ್ಲೇ ನಾಡಿನ ದೈವಗಳ ಆರಾಧನೆ, ಕಿರಿದಾದ ಬೀದಿಗಳಲ್ಲಿ ಎಳೆಯುವ ರಥಗಳು, ಮತ್ತು ಕರಾವಳಿಯಾಚೆಗಿನಿಂದಲೂ ಯಾತ್ರಿಕರನ್ನು ಸೆಳೆಯುವ ಸಪ್ತ ಮುಕ್ತಿಸ್ಥಳಗಳು ಹಾಗೂ ಉಡುಪಿಯ ಅಷ್ಟ ಮಠಗಳು.",
      hi: "तुलुनाडु पश्चिमी घाट और अरब सागर के बीच की तटपट्टी है — केरल के कासरगोड से कर्नाटक के कुंदापुर तट तक। परंपरा इसे परशुराम क्षेत्र का भाग कहती है, समुद्र से निकाली गई भूमि। यहाँ के मंदिरों की अपनी रीतियाँ हैं: आगम के अनुसार पूजा के साथ-साथ गाँव के दैवों की आराधना, सँकरी गलियों में खींचे जाते रथ, और तट से कहीं दूर तक से तीर्थयात्रियों को खींचते सात मुक्तिस्थल तथा उडुपी के अष्ट मठ।",
    },
    image: {
      src: "/images/mookambika/deity-main.jpg",
      width: 474,
      height: 711,
      position: "50% 25%",
      credit: "Sri Mookambika Devi, Kollur",
      alt: {
        en: "Sri Mookambika Devi in the sanctum at Kollur.",
        kn: "ಕೊಲ್ಲೂರಿನ ಗರ್ಭಗುಡಿಯಲ್ಲಿ ಶ್ರೀ ಮೂಕಾಂಬಿಕಾ ದೇವಿ.",
        hi: "कोल्लूर के गर्भगृह में श्री मूकांबिका देवी।",
      },
    },
  },
  {
    slug: "tamil-nadu",
    order: 2,
    name: { en: "Temples of Tamil Nadu", kn: "ತಮಿಳುನಾಡಿನ ದೇವಾಲಯಗಳು", hi: "तमिलनाडु के मंदिर" },
    blurb: {
      en: "The Chola and Nayak temple cities, built as models of the cosmos.",
      kn: "ಬ್ರಹ್ಮಾಂಡದ ಪ್ರತಿರೂಪವಾಗಿ ಕಟ್ಟಿದ ಚೋಳ ಮತ್ತು ನಾಯಕರ ದೇವಾಲಯ ನಗರಗಳು.",
      hi: "ब्रह्मांड के प्रतिरूप के रूप में बने चोल और नायक मंदिर-नगर।",
    },
    lede: {
      en: "In Tamil Nadu the temple is a city: concentric walls, gateway towers that grow taller as they move outward, and a sanctum kept small and dark at the centre. The Chola and Nayak builders worked to the Agamas and the Shilpa Shastras, so the plan of a temple is also a diagram of the cosmos.",
      kn: "ತಮಿಳುನಾಡಿನಲ್ಲಿ ದೇವಾಲಯವೇ ಒಂದು ನಗರ: ಸುತ್ತುಸುತ್ತಿನ ಪ್ರಾಕಾರಗಳು, ಹೊರಕ್ಕೆ ಹೋದಂತೆ ಎತ್ತರವಾಗುತ್ತಾ ಹೋಗುವ ಗೋಪುರಗಳು, ಮಧ್ಯದಲ್ಲಿ ಚಿಕ್ಕದಾಗಿ, ಕತ್ತಲಾಗಿ ಉಳಿಸಿದ ಗರ್ಭಗೃಹ. ಚೋಳ ಮತ್ತು ನಾಯಕ ಶಿಲ್ಪಿಗಳು ಆಗಮ ಮತ್ತು ಶಿಲ್ಪಶಾಸ್ತ್ರಗಳ ಪ್ರಕಾರ ಕೆಲಸ ಮಾಡಿದರು; ಹಾಗಾಗಿ ದೇವಾಲಯದ ಯೋಜನೆಯೇ ಬ್ರಹ್ಮಾಂಡದ ನಕ್ಷೆ.",
      hi: "तमिलनाडु में मंदिर स्वयं एक नगर है: एक के भीतर एक प्राकार, बाहर की ओर बढ़ते हुए ऊँचे होते गोपुरम, और बीच में छोटा तथा अंधकारमय रखा गया गर्भगृह। चोल और नायक शिल्पियों ने आगम और शिल्पशास्त्र के अनुसार काम किया, इसलिए मंदिर की योजना ही ब्रह्मांड का आरेख है।",
    },
    image: {
      src: "/images/site/brihadeeswarar.jpg",
      width: 3840,
      height: 2400,
      credit: "Rainer Halama / UnpetitproleX · CC BY-SA 4.0 · Wikimedia Commons",
      alt: {
        en: "The vimana of the Brihadeeswarar Temple at Thanjavur.",
        kn: "ತಂಜಾವೂರಿನ ಬೃಹದೀಶ್ವರ ದೇವಾಲಯದ ವಿಮಾನ.",
        hi: "तंजावुर के बृहदीश्वर मंदिर का विमान।",
      },
    },
  },
  {
    slug: "deccan",
    order: 3,
    name: { en: "Temples of the Deccan", kn: "ದಖ್ಖನ್ನಿನ ದೇವಾಲಯಗಳು", hi: "दक्कन के मंदिर" },
    blurb: {
      en: "Rock-cut Ellora and imperial Hampi, on the plateau above the coast.",
      kn: "ಕರಾವಳಿಯ ಮೇಲಿನ ಪ್ರಸ್ಥಭೂಮಿಯಲ್ಲಿ — ಶಿಲೆಯಲ್ಲಿ ಕೊರೆದ ಎಲ್ಲೋರಾ ಮತ್ತು ಸಾಮ್ರಾಜ್ಯದ ಹಂಪಿ.",
      hi: "तट के ऊपर के पठार पर — शिला में तराशा एलोरा और साम्राज्य का हम्पी।",
    },
    lede: {
      en: "On the Deccan plateau the rock itself was the material. At Ellora a temple was cut downward out of a cliff; at Hampi a city of temples was raised among granite boulders, and worship in one of them has never stopped.",
      kn: "ದಖ್ಖನ್ ಪ್ರಸ್ಥಭೂಮಿಯಲ್ಲಿ ಶಿಲೆಯೇ ಸಾಮಗ್ರಿಯಾಗಿತ್ತು. ಎಲ್ಲೋರಾದಲ್ಲಿ ಬಂಡೆಯನ್ನು ಮೇಲಿನಿಂದ ಕೆಳಕ್ಕೆ ಕೊರೆದು ದೇವಾಲಯವನ್ನು ರೂಪಿಸಲಾಯಿತು; ಹಂಪಿಯಲ್ಲಿ ಗ್ರಾನೈಟ್ ಬಂಡೆಗಳ ನಡುವೆ ದೇವಾಲಯಗಳ ನಗರವೇ ಎದ್ದಿತು, ಮತ್ತು ಅವುಗಳಲ್ಲೊಂದರಲ್ಲಿ ಪೂಜೆ ಇಂದಿಗೂ ನಿಂತಿಲ್ಲ.",
      hi: "दक्कन के पठार पर शिला ही सामग्री थी। एलोरा में चट्टान को ऊपर से नीचे तराशकर मंदिर बनाया गया; हम्पी में ग्रेनाइट शिलाखंडों के बीच मंदिरों का नगर खड़ा हुआ, और उनमें से एक में पूजा कभी नहीं रुकी।",
    },
    image: {
      src: "/images/site/hampi.jpg",
      width: 3840,
      height: 2160,
      credit: "iMahesh · CC BY-SA 4.0 · Wikimedia Commons",
      alt: {
        en: "The Virupaksha Temple gopura at Hampi.",
        kn: "ಹಂಪಿಯ ವಿರೂಪಾಕ್ಷ ದೇವಾಲಯದ ಗೋಪುರ.",
        hi: "हम्पी के विरूपाक्ष मंदिर का गोपुर।",
      },
    },
  },
  {
    slug: "odisha",
    order: 4,
    name: { en: "Temples of Odisha", kn: "ಒಡಿಶಾದ ದೇವಾಲಯಗಳು", hi: "ओडिशा के मंदिर" },
    blurb: {
      en: "The Kalinga school on the eastern coast, where a temple is a chariot.",
      kn: "ಪೂರ್ವ ಕರಾವಳಿಯ ಕಳಿಂಗ ಶೈಲಿ — ಇಲ್ಲಿ ದೇವಾಲಯವೇ ರಥ.",
      hi: "पूर्वी तट की कलिंग शैली — जहाँ मंदिर स्वयं रथ है।",
    },
    lede: {
      en: "The Kalinga builders of the eastern coast gave the temple a curved tower of horizontal courses and, at Konark, the shape of the sun god's chariot, its wheels cut as sundials.",
      kn: "ಪೂರ್ವ ಕರಾವಳಿಯ ಕಳಿಂಗ ಶಿಲ್ಪಿಗಳು ದೇವಾಲಯಕ್ಕೆ ಅಡ್ಡ ಪದರಗಳ ಬಾಗಿದ ಶಿಖರವನ್ನು ನೀಡಿದರು; ಕೋಣಾರ್ಕದಲ್ಲಿ ಸೂರ್ಯದೇವನ ರಥದ ರೂಪವನ್ನೇ ನೀಡಿದರು, ಅದರ ಚಕ್ರಗಳನ್ನು ಸೂರ್ಯಗಡಿಯಾರಗಳಾಗಿ ಕೆತ್ತಿದರು.",
      hi: "पूर्वी तट के कलिंग शिल्पियों ने मंदिर को क्षैतिज परतों वाला वक्र शिखर दिया, और कोणार्क में सूर्यदेव के रथ का रूप — जिसके पहिये सूर्यघड़ी की तरह तराशे गए।",
    },
    image: {
      src: "/images/site/konark.jpg",
      width: 2048,
      height: 1366,
      credit: "Subham9423 · CC BY-SA 4.0 · Wikimedia Commons",
      alt: {
        en: "A carved stone wheel of the Konark Sun Temple.",
        kn: "ಕೋಣಾರ್ಕ ಸೂರ್ಯ ದೇವಾಲಯದ ಕೆತ್ತಿದ ಶಿಲಾಚಕ್ರ.",
        hi: "कोणार्क सूर्य मंदिर का तराशा हुआ शिला-चक्र।",
      },
    },
  },
];

export function getRegion(slug: string): TempleRegion | undefined {
  return TEMPLE_REGIONS.find((r) => r.slug === slug);
}
