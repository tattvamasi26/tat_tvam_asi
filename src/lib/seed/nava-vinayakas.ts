import type { Locale } from "@/i18n/config";
import type { DevataImage } from "./devatas";

// ─────────────────────────────────────────────────────────
//  Nava Vinayakas of Tulunadu — nine Gaṇeśa temples of the coast,
//  listed south to north, that devotees visit as a circuit.
//
//  The grouping is a pilgrims' tradition, not a list from any
//  scripture, and it is not fixed. The Wikipedia articles on Madhur
//  and Idagunji name an older circuit of six — Madhur, Sharavu,
//  Anegudde, Hattiangadi, Idagunji and Gokarna; the nine add
//  Sowthadka, Pavanje and Guddattu. The page says so. Idagunji and
//  Gokarna lie north of historic Tulunadu, in Uttara Kannada.
//
//  Facts are from the temples' Wikipedia articles and, where those are
//  thin (Sharavu, Sowthadka, Pavanje, Guddattu), from the temples' own
//  sites and regional heritage sites. Photographs are from Wikimedia
//  Commons under the licence in each credit; three temples have no
//  free photograph yet, and show their Kannada name instead.
// ─────────────────────────────────────────────────────────

type Text = Record<Locale, string>;

export interface NavaVinayaka {
  slug: string;
  /** The place, for the route at the top of the page. */
  short: Text;
  name: Text;
  /** The temple's name in Kannada, shown on every page. */
  nameLocal: string;
  place: Text;
  text: Text;
  photo?: DevataImage;
}

export const NAVA_VINAYAKAS_PAGE = {
  title: { en: "Nava Vinayakas of Tulunadu", kn: "ತುಳುನಾಡಿನ ನವ ವಿನಾಯಕರು", hi: "तुलुनाडु के नव विनायक" },
  eyebrow: { en: "Temples of Tulunadu", kn: "ತುಳುನಾಡಿನ ದೇವಾಲಯಗಳು", hi: "तुलुनाडु के मंदिर" },
  lede: {
    en: "Nine Ganesha temples along the coast, from Madhur in Kerala to Gokarna, listed from south to north. Devotees visit them as a circuit.",
    kn: "ಕೇರಳದ ಮಧೂರಿನಿಂದ ಗೋಕರ್ಣದವರೆಗೆ, ಕರಾವಳಿಯುದ್ದಕ್ಕೂ ಇರುವ ಒಂಬತ್ತು ಗಣೇಶ ದೇವಾಲಯಗಳು — ದಕ್ಷಿಣದಿಂದ ಉತ್ತರಕ್ಕೆ. ಭಕ್ತರು ಇವನ್ನು ಒಂದು ಯಾತ್ರೆಯಾಗಿ ದರ್ಶಿಸುತ್ತಾರೆ.",
    hi: "केरल के मधूर से गोकर्ण तक, तट पर स्थित नौ गणेश मंदिर — दक्षिण से उत्तर की ओर। भक्त इनके दर्शन एक यात्रा के रूप में करते हैं।",
  } as Text,
  note: {
    en: "The nine are a pilgrims' tradition, not a list from scripture, and the list varies. An older circuit has six of them: Madhur, Sharavu, Anegudde, Hattiangadi, Idagunji and Gokarna. Idagunji and Gokarna lie north of Tulunadu proper, in Uttara Kannada.",
    kn: "ಈ ಒಂಬತ್ತು ಭಕ್ತರ ಸಂಪ್ರದಾಯ, ಶಾಸ್ತ್ರದ ಪಟ್ಟಿಯಲ್ಲ; ಪಟ್ಟಿ ಬದಲಾಗುತ್ತದೆ. ಹಳೆಯ ಯಾತ್ರೆಯಲ್ಲಿ ಇವುಗಳಲ್ಲಿ ಆರು ಇವೆ: ಮಧೂರು, ಶರವು, ಆನೆಗುಡ್ಡೆ, ಹಟ್ಟಿಯಂಗಡಿ, ಇಡಗುಂಜಿ ಮತ್ತು ಗೋಕರ್ಣ. ಇಡಗುಂಜಿ ಮತ್ತು ಗೋಕರ್ಣ ತುಳುನಾಡಿನ ಉತ್ತರಕ್ಕೆ, ಉತ್ತರ ಕನ್ನಡದಲ್ಲಿವೆ.",
    hi: "ये नौ भक्तों की परंपरा हैं, शास्त्र की सूची नहीं, और सूची बदलती रहती है। एक पुरानी यात्रा में इनमें से छह हैं: मधूर, शरवु, आनेगुड्डे, हट्टियंगडि, इडगुंजी और गोकर्ण। इडगुंजी और गोकर्ण तुलुनाडु के उत्तर में, उत्तर कन्नड़ में हैं।",
  } as Text,
  blurb: {
    en: "Nine Ganesha temples of the coast, from Madhur to Gokarna, that devotees visit as a circuit.",
    kn: "ಮಧೂರಿನಿಂದ ಗೋಕರ್ಣದವರೆಗೆ, ಭಕ್ತರು ಯಾತ್ರೆಯಾಗಿ ದರ್ಶಿಸುವ ಕರಾವಳಿಯ ಒಂಬತ್ತು ಗಣೇಶ ದೇವಾಲಯಗಳು.",
    hi: "मधूर से गोकर्ण तक, तट के नौ गणेश मंदिर, जिनके दर्शन भक्त एक यात्रा के रूप में करते हैं।",
  } as Text,
  routeLabel: { en: "South to north", kn: "ದಕ್ಷಿಣದಿಂದ ಉತ್ತರಕ್ಕೆ", hi: "दक्षिण से उत्तर" } as Text,
};

const COMMONS = "via Wikimedia Commons";

export const NAVA_VINAYAKAS: NavaVinayaka[] = [
  {
    slug: "madhur",
    short: { en: "Madhur", kn: "ಮಧೂರು", hi: "मधूर" },
    name: {
      en: "Madhur Sri Madanantheshwara Siddhivinayaka Temple",
      kn: "ಮಧೂರು ಶ್ರೀ ಮದನಂತೇಶ್ವರ ಸಿದ್ಧಿವಿನಾಯಕ ದೇವಸ್ಥಾನ",
      hi: "मधूर श्री मदनंतेश्वर सिद्धिविनायक मंदिर",
    },
    nameLocal: "ಮಧೂರು ಶ್ರೀ ಮದನಂತೇಶ್ವರ ಸಿದ್ಧಿವಿನಾಯಕ ದೇವಸ್ಥಾನ",
    place: { en: "Madhur, Kasaragod, Kerala", kn: "ಮಧೂರು, ಕಾಸರಗೋಡು, ಕೇರಳ", hi: "मधूर, कासरगोड, केरल" },
    text: {
      en: "On the bank of the Madhuvahini river, 7 km from Kasaragod. The main deity is Shiva as Madanantheshwara, but devotees come for the Ganapati in the same sanctum, facing south; tradition says a boy drew him on the sanctum wall and the figure grew. The temple, under a three-tiered gajaprishta roof, is known for its appam offerings, above all the Moodappam Seva, in which the idol is covered in appams.",
      kn: "ಕಾಸರಗೋಡಿನಿಂದ 7 ಕಿ.ಮೀ. ದೂರದಲ್ಲಿ, ಮಧುವಾಹಿನಿ ನದಿಯ ದಡದಲ್ಲಿದೆ. ಪ್ರಧಾನ ದೇವರು ಮದನಂತೇಶ್ವರನಾಗಿ ಶಿವ; ಆದರೆ ಭಕ್ತರು ಬರುವುದು ಅದೇ ಗರ್ಭಗುಡಿಯಲ್ಲಿ ದಕ್ಷಿಣಾಭಿಮುಖವಾಗಿರುವ ಗಣಪತಿಗಾಗಿ; ಒಬ್ಬ ಬಾಲಕ ಗರ್ಭಗುಡಿಯ ಗೋಡೆಯ ಮೇಲೆ ಅವನನ್ನು ಬಿಡಿಸಿದ, ಆ ಚಿತ್ರ ಬೆಳೆಯಿತು ಎಂಬುದು ಪ್ರತೀತಿ. ಗಜಪೃಷ್ಠ ಶೈಲಿಯ ಮೂರು ಅಂತಸ್ತಿನ ಛಾವಣಿಯ ಈ ದೇವಾಲಯ ಅಪ್ಪದ ಸೇವೆಗಳಿಗೆ, ಅದರಲ್ಲೂ ಮೂರ್ತಿಯನ್ನು ಅಪ್ಪಗಳಿಂದ ಮುಚ್ಚುವ ಮೂಡಪ್ಪ ಸೇವೆಗೆ ಹೆಸರಾಗಿದೆ.",
      hi: "कासरगोड से 7 किमी दूर, मधुवाहिनी नदी के तट पर। मुख्य देवता मदनंतेश्वर के रूप में शिव हैं, पर भक्त उसी गर्भगृह में दक्षिणमुखी गणपति के लिए आते हैं; परंपरा कहती है कि एक बालक ने गर्भगृह की दीवार पर उनका चित्र बनाया और वह आकृति बढ़ती गई। गजपृष्ठ शैली की तीन तल वाली छत वाला यह मंदिर अप्पम के चढ़ावों के लिए, विशेषकर मूडप्पम सेवा के लिए प्रसिद्ध है, जिसमें प्रतिमा को अप्पमों से ढक दिया जाता है।",
    },
    photo: {
      src: "/images/temples/nava-vinayakas/madhur.jpg",
      width: 1200,
      height: 900,
      credit: `Madhur temple — photo by ARUNKUMAR P.R, CC BY-SA 3.0, ${COMMONS}`,
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Madhurtemple.jpg",
      alt: {
        en: "The Madhur temple and its three-tiered roof.",
        kn: "ಮೂರು ಅಂತಸ್ತಿನ ಛಾವಣಿಯ ಮಧೂರು ದೇವಾಲಯ.",
        hi: "तीन तल वाली छत वाला मधूर मंदिर।",
      },
    },
  },
  {
    slug: "sharavu",
    short: { en: "Sharavu", kn: "ಶರವು", hi: "शरवु" },
    name: { en: "Sharavu Sri Mahaganapathi Temple", kn: "ಶರವು ಶ್ರೀ ಮಹಾಗಣಪತಿ ದೇವಸ್ಥಾನ", hi: "शरवु श्री महागणपति मंदिर" },
    nameLocal: "ಶರವು ಶ್ರೀ ಮಹಾಗಣಪತಿ ದೇವಸ್ಥಾನ",
    place: { en: "Mangaluru, Dakshina Kannada", kn: "ಮಂಗಳೂರು, ದಕ್ಷಿಣ ಕನ್ನಡ", hi: "मंगलूरु, दक्षिण कन्नड़" },
    text: {
      en: "In the middle of Mangaluru, and about 800 years old. It began as a Shiva temple, Sharabheshwara; the name comes from shara, 'arrow'. A ten-armed Mahaganapati on the southern wall of the sanctum is now its best-known deity.",
      kn: "ಮಂಗಳೂರು ನಗರದ ಮಧ್ಯದಲ್ಲಿರುವ, ಸುಮಾರು 800 ವರ್ಷ ಹಳೆಯ ದೇವಾಲಯ. ಇದು ಶರಭೇಶ್ವರನ ಶಿವಾಲಯವಾಗಿ ಆರಂಭವಾಯಿತು; 'ಶರ' ಎಂದರೆ ಬಾಣ, ಹೆಸರು ಅಲ್ಲಿಂದ ಬಂದಿದೆ. ಗರ್ಭಗುಡಿಯ ದಕ್ಷಿಣ ಗೋಡೆಯ ಮೇಲಿನ ದಶಭುಜ ಮಹಾಗಣಪತಿ ಇಂದು ಇಲ್ಲಿನ ಪ್ರಸಿದ್ಧ ದೇವರು.",
      hi: "मंगलूरु नगर के बीच, लगभग 800 वर्ष पुराना मंदिर। यह शरभेश्वर के शिव मंदिर के रूप में आरंभ हुआ; नाम 'शर', अर्थात् बाण, से आया है। गर्भगृह की दक्षिणी दीवार पर दशभुज महागणपति आज यहाँ के सबसे प्रसिद्ध देवता हैं।",
    },
    photo: {
      src: "/images/temples/nava-vinayakas/sharavu.jpg",
      width: 1200,
      height: 900,
      credit: `Sri Sharavu Maha Ganapathy Temple — photo by Gpkp, CC BY-SA 4.0, ${COMMONS}`,
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Sri_Sharavu_Maha_Ganapathy_Temple,_Mangalore_(2025)_01.jpg",
      alt: {
        en: "The carved wooden shrines inside the Sharavu temple.",
        kn: "ಶರವು ದೇವಾಲಯದ ಒಳಗಿನ ಕೆತ್ತನೆಯ ಮರದ ಗುಡಿಗಳು.",
        hi: "शरवु मंदिर के भीतर नक्काशीदार लकड़ी के देवस्थान।",
      },
    },
  },
  {
    slug: "sowthadka",
    short: { en: "Sowthadka", kn: "ಸೌತಡ್ಕ", hi: "सौतड्क" },
    name: { en: "Sowthadka Sri Mahaganapathi Temple", kn: "ಸೌತಡ್ಕ ಶ್ರೀ ಮಹಾಗಣಪತಿ ದೇವಸ್ಥಾನ", hi: "सौतड्क श्री महागणपति मंदिर" },
    nameLocal: "ಸೌತಡ್ಕ ಶ್ರೀ ಮಹಾಗಣಪತಿ ದೇವಸ್ಥಾನ",
    place: { en: "Kokkada, Belthangady, Dakshina Kannada", kn: "ಕೊಕ್ಕಡ, ಬೆಳ್ತಂಗಡಿ, ದಕ್ಷಿಣ ಕನ್ನಡ", hi: "कोक्कड, बेलतंगडी, दक्षिण कन्नड़" },
    text: {
      en: "An open-air shrine: the idol stands under the sky, with no sanctum or roof over it, and can be visited at any hour. Tradition says cowherds hid it here to keep it from raiders. The name joins sowthe, 'cucumber', and adka, 'meadow'. Devotees tie bells here when they make a vow.",
      kn: "ಬಯಲು ಗುಡಿ: ಗರ್ಭಗುಡಿಯಾಗಲಿ ಛಾವಣಿಯಾಗಲಿ ಇಲ್ಲದೆ ಮೂರ್ತಿ ಆಕಾಶದ ಕೆಳಗೆ ನಿಂತಿದೆ, ಯಾವ ಹೊತ್ತಿನಲ್ಲಾದರೂ ದರ್ಶನ ಮಾಡಬಹುದು. ದಾಳಿಕೋರರಿಂದ ಕಾಪಾಡಲು ದನಗಾಹಿಗಳು ಅದನ್ನು ಇಲ್ಲಿ ಬಚ್ಚಿಟ್ಟರು ಎಂಬುದು ಪ್ರತೀತಿ. 'ಸೌತೆ' ಮತ್ತು 'ಅಡ್ಕ' (ಹುಲ್ಲುಗಾವಲು) ಸೇರಿ ಈ ಹೆಸರು. ಹರಕೆ ಹೊತ್ತ ಭಕ್ತರು ಇಲ್ಲಿ ಗಂಟೆಗಳನ್ನು ಕಟ್ಟುತ್ತಾರೆ.",
      hi: "खुले में स्थित देवस्थान: न गर्भगृह, न छत — प्रतिमा आकाश के नीचे खड़ी है, और किसी भी समय दर्शन हो सकते हैं। परंपरा कहती है कि आक्रमणकारियों से बचाने के लिए ग्वालों ने इसे यहाँ छिपाया था। नाम 'सौते' (ककड़ी) और 'अड्क' (घास का मैदान) से बना है। मन्नत मानने वाले भक्त यहाँ घंटियाँ बाँधते हैं।",
    },
  },
  {
    slug: "pavanje",
    short: { en: "Pavanje", kn: "ಪಾವಂಜೆ", hi: "पावंजे" },
    name: {
      en: "Pavanje Sri Mahalingeshwara Mahaganapathi Temple",
      kn: "ಪಾವಂಜೆ ಶ್ರೀ ಮಹಾಲಿಂಗೇಶ್ವರ ಮಹಾಗಣಪತಿ ದೇವಸ್ಥಾನ",
      hi: "पावंजे श्री महालिंगेश्वर महागणपति मंदिर",
    },
    nameLocal: "ಪಾವಂಜೆ ಶ್ರೀ ಮಹಾಲಿಂಗೇಶ್ವರ ಮಹಾಗಣಪತಿ ದೇವಸ್ಥಾನ",
    place: { en: "Pavanje, Dakshina Kannada", kn: "ಪಾವಂಜೆ, ದಕ್ಷಿಣ ಕನ್ನಡ", hi: "पावंजे, दक्षिण कन्नड़" },
    text: {
      en: "On the north bank of the Nandini river, beside the highway just north of Mangaluru. Shiva as Mahalingeshwara is worshipped on top of a small hill; the Mahaganapati has a shrine of his own outside the main temple, which is rare.",
      kn: "ಮಂಗಳೂರಿನ ಉತ್ತರಕ್ಕೆ, ಹೆದ್ದಾರಿಯ ಪಕ್ಕದಲ್ಲಿ, ನಂದಿನಿ ನದಿಯ ಉತ್ತರ ದಡದಲ್ಲಿದೆ. ಸಣ್ಣ ಗುಡ್ಡದ ಮೇಲೆ ಮಹಾಲಿಂಗೇಶ್ವರನಾಗಿ ಶಿವನ ಪೂಜೆ ನಡೆಯುತ್ತದೆ; ಮಹಾಗಣಪತಿಗೆ ಮುಖ್ಯ ದೇವಾಲಯದ ಹೊರಗೆ ಪ್ರತ್ಯೇಕ ಗುಡಿ ಇದೆ — ಇದು ಅಪರೂಪ.",
      hi: "मंगलूरु के ठीक उत्तर में, राजमार्ग के किनारे, नंदिनी नदी के उत्तरी तट पर। एक छोटी पहाड़ी पर महालिंगेश्वर के रूप में शिव की पूजा होती है; महागणपति का मुख्य मंदिर के बाहर अपना अलग मंदिर है, जो दुर्लभ है।",
    },
  },
  {
    slug: "guddattu",
    short: { en: "Guddattu", kn: "ಗುಡ್ಡಟ್ಟು", hi: "गुड्डट्टु" },
    name: { en: "Guddattu Sri Vinayaka Temple", kn: "ಗುಡ್ಡಟ್ಟು ಶ್ರೀ ವಿನಾಯಕ ದೇವಸ್ಥಾನ", hi: "गुड्डट्टु श्री विनायक मंदिर" },
    nameLocal: "ಗುಡ್ಡಟ್ಟು ಶ್ರೀ ವಿನಾಯಕ ದೇವಸ್ಥಾನ",
    place: { en: "Guddattu, Kundapura, Udupi", kn: "ಗುಡ್ಡಟ್ಟು, ಕುಂದಾಪುರ, ಉಡುಪಿ", hi: "गुड्डट्टु, कुंदापुर, उडुपी" },
    text: {
      en: "Known as the Jaladhivasa Ganapati, 'the Ganapati who dwells in water'. The idol, about three feet tall, is believed to have emerged from the rock. In the Aayira Koda Seva, a thousand pots of water are poured over it until it is under water.",
      kn: "'ಜಲಾಧಿವಾಸ ಗಣಪತಿ' — ನೀರಿನಲ್ಲಿ ನೆಲೆಸಿರುವ ಗಣಪತಿ — ಎಂದು ಪ್ರಸಿದ್ಧ. ಸುಮಾರು ಮೂರು ಅಡಿ ಎತ್ತರದ ಮೂರ್ತಿ ಬಂಡೆಯಿಂದ ಉದ್ಭವಿಸಿತು ಎಂಬ ನಂಬಿಕೆ. ಆಯಿರ ಕೊಡ ಸೇವೆಯಲ್ಲಿ ಸಾವಿರ ಕೊಡ ನೀರನ್ನು ಸುರಿದು ಮೂರ್ತಿಯನ್ನು ನೀರಿನಲ್ಲಿ ಮುಳುಗಿಸಲಾಗುತ್ತದೆ.",
      hi: "'जलाधिवास गणपति' — जल में निवास करने वाले गणपति — के नाम से प्रसिद्ध। लगभग तीन फुट ऊँची प्रतिमा के बारे में माना जाता है कि वह चट्टान से प्रकट हुई। आयिर कोड सेवा में हज़ार घड़े जल चढ़ाकर प्रतिमा को जल में डुबो दिया जाता है।",
    },
    photo: {
      src: "/images/temples/nava-vinayakas/guddattu.jpg",
      width: 1200,
      height: 900,
      credit: `Sri Vinayaka Temple, Guddattu — photo by Gpkp, CC BY-SA 4.0, ${COMMONS}, cropped`,
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Sri_Vinayaka_Temple,_Guddattu,_Karnataka_(2026)_11.jpg",
      alt: {
        en: "The Guddattu temple, a two-tiered tiled shrine among coconut palms.",
        kn: "ತೆಂಗಿನ ಮರಗಳ ನಡುವೆ ಎರಡು ಅಂತಸ್ತಿನ ಹೆಂಚಿನ ಛಾವಣಿಯ ಗುಡ್ಡಟ್ಟು ದೇವಾಲಯ.",
        hi: "नारियल के पेड़ों के बीच दो तल वाली खपरैल छत का गुड्डट्टु मंदिर।",
      },
    },
  },
  {
    slug: "anegudde",
    short: { en: "Anegudde", kn: "ಆನೆಗುಡ್ಡೆ", hi: "आनेगुड्डे" },
    name: {
      en: "Anegudde Sri Vinayaka Temple, Kumbhashi",
      kn: "ಆನೆಗುಡ್ಡೆ ಶ್ರೀ ವಿನಾಯಕ ದೇವಸ್ಥಾನ, ಕುಂಭಾಶಿ",
      hi: "आनेगुड्डे श्री विनायक मंदिर, कुंभाशी",
    },
    nameLocal: "ಆನೆಗುಡ್ಡೆ ಶ್ರೀ ವಿನಾಯಕ ದೇವಸ್ಥಾನ, ಕುಂಭಾಶಿ",
    place: { en: "Kumbhashi, Kundapura, Udupi", kn: "ಕುಂಭಾಶಿ, ಕುಂದಾಪುರ, ಉಡುಪಿ", hi: "कुंभाशी, कुंदापुर, उडुपी" },
    text: {
      en: "On a hillock called Anegudde, 'elephant hill', beside the highway between Udupi and Kundapura. Kumbhashi is one of the seven muktisthalas of the Parashurama Kshetra, and the temple is named in Vadiraja Tirtha's Tirtha Prabandha.",
      kn: "ಉಡುಪಿ ಮತ್ತು ಕುಂದಾಪುರದ ನಡುವಿನ ಹೆದ್ದಾರಿಯ ಪಕ್ಕದಲ್ಲಿ, ಆನೆಗುಡ್ಡೆ ಎಂಬ ದಿಬ್ಬದ ಮೇಲಿದೆ. ಕುಂಭಾಶಿ ಪರಶುರಾಮ ಕ್ಷೇತ್ರದ ಏಳು ಮುಕ್ತಿಸ್ಥಳಗಳಲ್ಲಿ ಒಂದು; ವಾದಿರಾಜ ತೀರ್ಥರ ತೀರ್ಥಪ್ರಬಂಧದಲ್ಲಿ ಈ ದೇವಾಲಯದ ಉಲ್ಲೇಖವಿದೆ.",
      hi: "उडुपी और कुंदापुर के बीच राजमार्ग के किनारे, आनेगुड्डे — 'हाथी पहाड़ी' — नामक टीले पर। कुंभाशी परशुराम क्षेत्र के सात मुक्तिस्थलों में से एक है, और वादिराज तीर्थ के तीर्थप्रबंध में इस मंदिर का उल्लेख है।",
    },
    photo: {
      src: "/images/temples/nava-vinayakas/anegudde.jpg",
      width: 1024,
      height: 768,
      credit: `Anegudde temple, Kumbhashi — photo by Raghavendra Nayak Muddur, CC BY 3.0, ${COMMONS}`,
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Anegudde.jpg",
      alt: {
        en: "The gopura of the Anegudde temple above its entrance hall.",
        kn: "ಆನೆಗುಡ್ಡೆ ದೇವಾಲಯದ ಪ್ರವೇಶ ಮಂಟಪದ ಮೇಲಿನ ಗೋಪುರ.",
        hi: "प्रवेश मंडप के ऊपर आनेगुड्डे मंदिर का गोपुर।",
      },
    },
  },
  {
    slug: "hattiangadi",
    short: { en: "Hattiangadi", kn: "ಹಟ್ಟಿಯಂಗಡಿ", hi: "हट्टियंगडि" },
    name: {
      en: "Hattiangadi Sri Siddhivinayaka Temple",
      kn: "ಹಟ್ಟಿಯಂಗಡಿ ಶ್ರೀ ಸಿದ್ಧಿವಿನಾಯಕ ದೇವಸ್ಥಾನ",
      hi: "हट्टियंगडि श्री सिद्धिविनायक मंदिर",
    },
    nameLocal: "ಹಟ್ಟಿಯಂಗಡಿ ಶ್ರೀ ಸಿದ್ಧಿವಿನಾಯಕ ದೇವಸ್ಥಾನ",
    place: { en: "Hattiangadi, Kundapura, Udupi", kn: "ಹಟ್ಟಿಯಂಗಡಿ, ಕುಂದಾಪುರ, ಉಡುಪಿ", hi: "हट्टियंगडि, कुंदापुर, उडुपी" },
    text: {
      en: "On the Varahi river, in what was once a capital of the Alupa kings; the temple is dated to the seventh or eighth century. The idol, of Saligrama stone and 2.5 feet tall, is Bala Ganesha with two arms and his hair falling loose at the back — said to be the only Vinayaka shown with jata.",
      kn: "ವಾರಾಹಿ ನದಿಯ ದಡದಲ್ಲಿ, ಒಮ್ಮೆ ಆಳುಪ ಅರಸರ ರಾಜಧಾನಿಯಾಗಿದ್ದ ಊರಿನಲ್ಲಿದೆ; ದೇವಾಲಯ ಏಳನೆಯ ಅಥವಾ ಎಂಟನೆಯ ಶತಮಾನದ್ದು ಎನ್ನಲಾಗುತ್ತದೆ. ಸಾಲಿಗ್ರಾಮ ಶಿಲೆಯ, ಎರಡೂವರೆ ಅಡಿ ಎತ್ತರದ ಮೂರ್ತಿ ದ್ವಿಭುಜ ಬಾಲಗಣೇಶ, ಹಿಂದೆ ಇಳಿಬಿದ್ದ ಕೂದಲಿನೊಂದಿಗೆ — ಜಟೆಯುಳ್ಳ ಏಕೈಕ ವಿನಾಯಕ ಎಂದು ಹೇಳಲಾಗುತ್ತದೆ.",
      hi: "वाराही नदी के तट पर, कभी आलुप राजाओं की राजधानी रहे स्थान पर; मंदिर सातवीं या आठवीं शताब्दी का माना जाता है। शालिग्राम शिला की ढाई फुट ऊँची प्रतिमा द्विभुज बालगणेश की है, जिनके केश पीछे खुले लटकते हैं — कहा जाता है कि जटा वाले ये एकमात्र विनायक हैं।",
    },
  },
  {
    slug: "idagunji",
    short: { en: "Idagunji", kn: "ಇಡಗುಂಜಿ", hi: "इडगुंजी" },
    name: { en: "Idagunji Sri Mahaganapati Temple", kn: "ಇಡಗುಂಜಿ ಶ್ರೀ ಮಹಾಗಣಪತಿ ದೇವಸ್ಥಾನ", hi: "इडगुंजी श्री महागणपति मंदिर" },
    nameLocal: "ಇಡಗುಂಜಿ ಶ್ರೀ ಮಹಾಗಣಪತಿ ದೇವಸ್ಥಾನ",
    place: { en: "Idagunji, Honnavar, Uttara Kannada", kn: "ಇಡಗುಂಜಿ, ಹೊನ್ನಾವರ, ಉತ್ತರ ಕನ್ನಡ", hi: "इडगुंजी, होन्नावर, उत्तर कन्नड़" },
    text: {
      en: "Near the Sharavathi river, about 14 km from Honnavar; about a million people visit each year. The standing idol, from around the 4th–5th century, has two arms and two tusks, and is said to be the only Ganapati shown with both tusks. Legend says Narada brought Ganesha here so that the sage Valakhilya's rites could go on without obstacles.",
      kn: "ಹೊನ್ನಾವರದಿಂದ ಸುಮಾರು 14 ಕಿ.ಮೀ., ಶರಾವತಿ ನದಿಯ ಸಮೀಪದಲ್ಲಿದೆ; ವರ್ಷಕ್ಕೆ ಸುಮಾರು ಹತ್ತು ಲಕ್ಷ ಜನ ಭೇಟಿ ನೀಡುತ್ತಾರೆ. ಸುಮಾರು 4–5ನೇ ಶತಮಾನದ ನಿಂತಿರುವ ಮೂರ್ತಿಗೆ ಎರಡು ಕೈಗಳು ಮತ್ತು ಎರಡು ದಂತಗಳು; ಎರಡೂ ದಂತಗಳಿರುವ ಏಕೈಕ ಗಣಪತಿ ಎಂದು ಹೇಳಲಾಗುತ್ತದೆ. ವಾಲಖಿಲ್ಯ ಋಷಿಯ ಯಜ್ಞ ವಿಘ್ನವಿಲ್ಲದೆ ನಡೆಯಲೆಂದು ನಾರದರು ಗಣೇಶನನ್ನು ಇಲ್ಲಿಗೆ ಕರೆತಂದರು ಎಂಬುದು ಕಥೆ.",
      hi: "होन्नावर से लगभग 14 किमी, शरावती नदी के पास; हर वर्ष लगभग दस लाख लोग आते हैं। लगभग चौथी-पाँचवीं शताब्दी की खड़ी प्रतिमा के दो हाथ और दो दाँत हैं; कहा जाता है कि दोनों दाँतों वाले ये एकमात्र गणपति हैं। कथा है कि ऋषि वालखिल्य का यज्ञ निर्विघ्न चले, इसलिए नारद गणेश को यहाँ लाए।",
    },
    photo: {
      src: "/images/temples/nava-vinayakas/idagunji.jpg",
      width: 1024,
      height: 768,
      credit: `Idagunji Ganesh Temple's entrance — photo by Deepak Patil, CC BY-SA 3.0, ${COMMONS}`,
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Idagunji_Ganesh_Temple%27s_Entrance_-_panoramio.jpg",
      alt: {
        en: "The painted entrance of the Idagunji temple, with figures of deities above the door.",
        kn: "ಬಾಗಿಲ ಮೇಲೆ ದೇವತೆಗಳ ಮೂರ್ತಿಗಳಿರುವ, ಬಣ್ಣ ಬಳಿದ ಇಡಗುಂಜಿ ದೇವಾಲಯದ ಪ್ರವೇಶದ್ವಾರ.",
        hi: "द्वार के ऊपर देवताओं की आकृतियों वाला, रंगा हुआ इडगुंजी मंदिर का प्रवेश द्वार।",
      },
    },
  },
  {
    slug: "gokarna",
    short: { en: "Gokarna", kn: "ಗೋಕರ್ಣ", hi: "गोकर्ण" },
    name: { en: "Gokarna Sri Maha Ganapati Temple", kn: "ಗೋಕರ್ಣ ಶ್ರೀ ಮಹಾಗಣಪತಿ ದೇವಸ್ಥಾನ", hi: "गोकर्ण श्री महागणपति मंदिर" },
    nameLocal: "ಗೋಕರ್ಣ ಶ್ರೀ ಮಹಾಗಣಪತಿ ದೇವಸ್ಥಾನ",
    place: { en: "Gokarna, Kumta, Uttara Kannada", kn: "ಗೋಕರ್ಣ, ಕುಮಟಾ, ಉತ್ತರ ಕನ್ನಡ", hi: "गोकर्ण, कुमटा, उत्तर कन्नड़" },
    text: {
      en: "Near the Mahabaleshwar temple. The Skanda Purana tells how Ganesha, as a young cowherd, took the Atmalinga from Ravana and set it down here, where it stayed for good. The idol is a standing, two-armed Ganapati.",
      kn: "ಮಹಾಬಲೇಶ್ವರ ದೇವಾಲಯದ ಸಮೀಪದಲ್ಲಿದೆ. ಗಣೇಶನು ಬಾಲ ಗೋಪಾಲಕನ ವೇಷದಲ್ಲಿ ರಾವಣನಿಂದ ಆತ್ಮಲಿಂಗವನ್ನು ಪಡೆದು ಇಲ್ಲಿ ನೆಲದ ಮೇಲಿಟ್ಟನು, ಅದು ಇಲ್ಲೇ ನೆಲೆಯಾಯಿತು ಎಂದು ಸ್ಕಂದ ಪುರಾಣ ಹೇಳುತ್ತದೆ. ಇಲ್ಲಿನ ಮೂರ್ತಿ ನಿಂತಿರುವ ದ್ವಿಭುಜ ಗಣಪತಿ.",
      hi: "महाबलेश्वर मंदिर के पास। स्कंद पुराण बताता है कि गणेश ने बाल ग्वाले के वेश में रावण से आत्मलिंग लेकर यहाँ भूमि पर रख दिया, और वह सदा के लिए यहीं स्थिर हो गया। यहाँ की प्रतिमा खड़े, द्विभुज गणपति की है।",
    },
    photo: {
      src: "/images/temples/nava-vinayakas/gokarna.jpg",
      width: 1024,
      height: 768,
      credit: `Shri Ganesh Temple at Gokarna — photo by Deepak Patil, CC BY-SA 3.0, ${COMMONS}`,
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Shri_Ganesh_Temple_at_Gokarna_-_panoramio.jpg",
      alt: {
        en: "The brightly painted Maha Ganapati shrine at Gokarna, with pilgrims and cows outside.",
        kn: "ಹೊರಗೆ ಯಾತ್ರಿಕರು ಮತ್ತು ಹಸುಗಳಿರುವ, ಗಾಢ ಬಣ್ಣದ ಗೋಕರ್ಣದ ಮಹಾಗಣಪತಿ ಗುಡಿ.",
        hi: "बाहर तीर्थयात्रियों और गायों के साथ, चटक रंगों से रँगा गोकर्ण का महागणपति देवस्थान।",
      },
    },
  },
];
