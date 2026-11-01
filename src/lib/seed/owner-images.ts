import type { Locale } from "@/i18n/config";

// ─────────────────────────────────────────────────────────
//  Pictures the site's owner supplied (Project V/Images/TTA), placed
//  across the site on 31 October 2026 where a section had only a
//  drawing, a coloured tile, or a weak photograph.
//
//  Every one was looked at before it was placed, for what it actually
//  shows rather than its filename. Burnt-in captions and watermarks
//  were cropped off (`public/images/owner/`, converted to JPEG), and
//  each credit says "cropped" where that happened.
//
//  **The source and licence of these files are not recorded.** They
//  are credited the way seed/stuti-images.ts credits the owner's
//  earlier pictures: "Supplied by the site owner", with no link.
//
//  **Alt text says what is in the frame**, never what it is meant to
//  stand for. Several are modern devotional artwork rather than
//  photographs or old paintings; the alt text does not call them
//  either.
//
//  Left out on purpose: pictures with words printed across them (the
//  Purushartha chart, the Gita quotation cards, "Tat tvam asi" on
//  paper), screenshots with app chrome in frame, and anything whose
//  subject could not be told for certain — a temple murti is placed
//  only where its own caption or the owner's filename names it.
// ─────────────────────────────────────────────────────────

export interface OwnerImage {
  src: string;
  width: number;
  height: number;
  credit: string;
  alt: Record<Locale, string>;
  /** Which part of the frame a crop must keep. */
  position: string;
}

const OWNER = "Supplied by the site owner";
const CROPPED = "Supplied by the site owner, cropped";

const a = (en: string, kn: string, hi: string): Record<Locale, string> => ({ en, kn, hi });

const pic = (
  name: string,
  width: number,
  height: number,
  alt: Record<Locale, string>,
  position = "50% 40%",
  cropped = false,
): OwnerImage => ({ src: `/images/owner/${name}.jpg`, width, height, credit: cropped ? CROPPED : OWNER, alt, position });

export const OWNER_IMAGES = {
  // ── the home page's section cards ─────────────────────
  vedaBooks: pic("veda-books", 736, 981, a(
    "Bound volumes stacked on a shelf, their spines lettered Yajurveda, Sāmaveda, Atharvaveda, Brahma Purāṇa and Padma Purāṇa",
    "ಕಪಾಟಿನಲ್ಲಿ ಜೋಡಿಸಿದ ಗ್ರಂಥಗಳು — ಬೆನ್ನಿನ ಮೇಲೆ ಯಜುರ್ವೇದ, ಸಾಮವೇದ, ಅಥರ್ವವೇದ, ಬ್ರಹ್ಮಪುರಾಣ, ಪದ್ಮಪುರಾಣ ಎಂಬ ಹೆಸರುಗಳು",
    "अलमारी में रखे ग्रंथ — जिल्दों पर यजुर्वेद, सामवेद, अथर्ववेद, ब्रह्मपुराण और पद्मपुराण लिखा है",
  ), "50% 30%"),
  gitaVishvarupa: pic("gita-vishvarupa", 1023, 1537, a(
    "Kṛṣṇa in his universal form, many-headed and many-armed in gold light, Arjuna kneeling in the chariot before him — painting",
    "ವಿಶ್ವರೂಪದಲ್ಲಿ ಕೃಷ್ಣ — ಚಿನ್ನದ ಬೆಳಕಿನಲ್ಲಿ ಅನೇಕ ತಲೆ, ಅನೇಕ ಕೈಗಳು; ರಥದಲ್ಲಿ ಮಂಡಿಯೂರಿದ ಅರ್ಜುನ — ಚಿತ್ರ",
    "विश्वरूप में कृष्ण — सुनहले प्रकाश में अनेक सिर और भुजाएँ, सामने रथ में घुटनों पर अर्जुन — चित्र",
  ), "50% 45%"),
  lakshmi: pic("lakshmi-painting", 1080, 1196, a(
    "Lakṣmī seated on a lotus, holding lotuses and a pot, two elephants behind her — painting",
    "ಕಮಲದ ಮೇಲೆ ಕುಳಿತ ಲಕ್ಷ್ಮಿ — ಕೈಗಳಲ್ಲಿ ಕಮಲ ಮತ್ತು ಕಲಶ, ಹಿಂದೆ ಎರಡು ಆನೆಗಳು — ಚಿತ್ರ",
    "कमल पर विराजमान लक्ष्मी — हाथों में कमल और कलश, पीछे दो हाथी — चित्र",
  ), "50% 30%"),
  purandaraDasa: pic("purandara-dasa", 400, 628, a(
    "Purandara Dāsa singing, a tambūri on his shoulder and cymbals in his hand — illustration",
    "ಹೆಗಲ ಮೇಲೆ ತಂಬೂರಿ, ಕೈಯಲ್ಲಿ ತಾಳ — ಹಾಡುತ್ತಿರುವ ಪುರಂದರದಾಸರು — ಚಿತ್ರ",
    "कंधे पर तंबूरा और हाथ में करताल लिए गाते पुरंदरदास — चित्र",
  ), "50% 25%"),

  // ── bhajan groups ─────────────────────────────────────
  krishnaUdupi: pic("krishna-udupi", 715, 1088, a(
    "A dark murti of Kṛṣṇa standing with the churning rod, garlanded in red and white flowers",
    "ಕಡಗೋಲು ಹಿಡಿದು ನಿಂತ ಕೃಷ್ಣನ ಕಪ್ಪು ಮೂರ್ತಿ — ಕೆಂಪು ಬಿಳಿ ಹೂಮಾಲೆಗಳೊಡನೆ",
    "मथानी लिए खड़े कृष्ण की श्याम मूर्ति — लाल और सफ़ेद फूलों की मालाओं सहित",
  ), "50% 30%", true),
  vitthalaSaffron: pic("vitthala-saffron", 736, 1308, a(
    "Viṭṭhala standing with hands on his hips, in a saffron robe and a garland of lotuses",
    "ಸೊಂಟದ ಮೇಲೆ ಕೈಯಿಟ್ಟು ನಿಂತ ವಿಠಲ — ಕಾವಿ ವಸ್ತ್ರ, ಕಮಲದ ಹಾರ",
    "कमर पर हाथ रखे खड़े विट्ठल — भगवा वस्त्र और कमलों की माला",
  ), "50% 40%"),
  ramaPattabhisheka: pic("rama-pattabhisheka", 736, 1104, a(
    "Rāma and Sītā crowned, with Lakṣmaṇa and his brothers beside them and Hanumān at their feet — painting",
    "ಕಿರೀಟಧಾರಿ ರಾಮ ಸೀತೆ, ಪಕ್ಕದಲ್ಲಿ ಲಕ್ಷ್ಮಣ ಮತ್ತು ಸಹೋದರರು, ಪಾದದ ಬಳಿ ಹನುಮಂತ — ಚಿತ್ರ",
    "मुकुटधारी राम और सीता, साथ में लक्ष्मण और भाई, चरणों में हनुमान — चित्र",
  ), "50% 30%"),
  narasimhaBronze: pic("narasimha-bronze", 1080, 1228, a(
    "A small bronze of Narasiṃha seated, holding the discus and conch",
    "ಚಕ್ರ ಶಂಖ ಹಿಡಿದು ಕುಳಿತ ನರಸಿಂಹನ ಪುಟ್ಟ ಕಂಚಿನ ಮೂರ್ತಿ",
    "चक्र और शंख लिए बैठे नरसिंह की छोटी कांस्य प्रतिमा",
  ), "50% 35%", true),
  vishnuAnantashayana: pic("vishnu-anantashayana", 736, 1308, a(
    "Viṣṇu reclining on the serpent Śeṣa among stars and planets — digital painting",
    "ನಕ್ಷತ್ರ ಗ್ರಹಗಳ ನಡುವೆ ಶೇಷನ ಮೇಲೆ ಮಲಗಿದ ವಿಷ್ಣು — ಡಿಜಿಟಲ್ ಚಿತ್ರ",
    "तारों और ग्रहों के बीच शेषनाग पर लेटे विष्णु — डिजिटल चित्र",
  ), "50% 45%"),
  hanumanSeated: pic("hanuman-seated", 855, 1600, a(
    "Hanumān seated cross-legged, crowned, with folded hands — painting",
    "ಕಿರೀಟಧಾರಿಯಾಗಿ ಚಕ್ಕಳಮಕ್ಕಳ ಹಾಕಿ ಕುಳಿತ ಹನುಮಂತ — ಚಿತ್ರ",
    "मुकुट पहने पालथी मारकर बैठे हनुमान — चित्र",
  ), "50% 70%", true),
  shivaFamily: pic("shiva-family", 977, 1280, a(
    "Śiva seated with Pārvatī, Gaṇeśa and Skanda, Nandi and the lion below — painting",
    "ಪಾರ್ವತಿ, ಗಣೇಶ, ಸ್ಕಂದರೊಡನೆ ಕುಳಿತ ಶಿವ; ಕೆಳಗೆ ನಂದಿ ಮತ್ತು ಸಿಂಹ — ಚಿತ್ರ",
    "पार्वती, गणेश और स्कंद के साथ बैठे शिव, नीचे नंदी और सिंह — चित्र",
  ), "50% 30%"),
  raghavendra: pic("raghavendra-painting", 736, 1307, a(
    "Rāghavendra Tīrtha seated in saffron, holding a small image of Rāma to his cheek — painting",
    "ಕಾವಿ ಧರಿಸಿ ಕುಳಿತ ರಾಘವೇಂದ್ರ ತೀರ್ಥರು — ರಾಮನ ಪುಟ್ಟ ವಿಗ್ರಹವನ್ನು ಕೆನ್ನೆಗೆ ಹಿಡಿದು — ಚಿತ್ರ",
    "भगवा वस्त्र में बैठे राघवेंद्र तीर्थ, राम की छोटी प्रतिमा गाल से लगाए — चित्र",
  ), "50% 40%"),
  dattatreya: pic("dattatreya-painting", 720, 1189, a(
    "Dattātreya, three-headed, seated under a tree with a cow and four dogs — painting",
    "ಮರದಡಿ ಕುಳಿತ ಮೂರು ತಲೆಯ ದತ್ತಾತ್ರೇಯ — ಹಸು ಮತ್ತು ನಾಲ್ಕು ನಾಯಿಗಳೊಡನೆ — ಚಿತ್ರ",
    "पेड़ के नीचे बैठे त्रिमुखी दत्तात्रेय, साथ में गाय और चार श्वान — चित्र",
  ), "50% 30%", true),
  tulasiLamp: pic("tulasi-lamp", 736, 1192, a(
    "A tulasī plant growing from a carved stone stand, a lamp lit in its niche",
    "ಕೆತ್ತಿದ ಕಲ್ಲಿನ ಕಟ್ಟೆಯಲ್ಲಿ ಬೆಳೆದ ತುಳಸಿ — ಗೂಡಿನಲ್ಲಿ ಹಚ್ಚಿದ ದೀಪ",
    "नक्काशीदार पत्थर की चौकी में उगी तुलसी, उसके आले में जलता दीपक",
  ), "50% 50%"),
  surya: pic("surya-chariot", 670, 1191, a(
    "Sūrya standing in a blaze of light, his seven horses running below him — digital painting",
    "ಬೆಳಕಿನ ಪ್ರಭೆಯಲ್ಲಿ ನಿಂತ ಸೂರ್ಯ, ಕೆಳಗೆ ಓಡುತ್ತಿರುವ ಏಳು ಕುದುರೆಗಳು — ಡಿಜಿಟಲ್ ಚಿತ್ರ",
    "प्रकाश की आभा में खड़े सूर्य, नीचे दौड़ते सात घोड़े — डिजिटल चित्र",
  ), "50% 45%"),
  shani: pic("shani-stone", 667, 1000, a(
    "A dark stone image of Śani in a shrine, with flowers and a crow carved at its foot",
    "ಗುಡಿಯಲ್ಲಿ ಶನಿಯ ಕಪ್ಪು ಕಲ್ಲಿನ ಮೂರ್ತಿ — ಹೂಗಳು, ಬುಡದಲ್ಲಿ ಕೆತ್ತಿದ ಕಾಗೆ",
    "मंदिर में शनि की श्याम पाषाण प्रतिमा — फूल, और नीचे उकेरा कौआ",
  ), "50% 45%"),
  veena: pic("veena-steps", 736, 1318, a(
    "A vīṇā resting on worn stone steps in a shaft of light",
    "ಬೆಳಕಿನ ಕಿರಣದಲ್ಲಿ ಸವೆದ ಕಲ್ಲಿನ ಮೆಟ್ಟಿಲುಗಳ ಮೇಲೆ ಇಟ್ಟ ವೀಣೆ",
    "प्रकाश की किरण में घिसी पत्थर की सीढ़ियों पर रखी वीणा",
  ), "50% 55%"),

  // ── festivals ─────────────────────────────────────────
  guruParampara: pic("guru-parampara", 736, 1039, a(
    "Dakṣiṇāmūrti above Śaṅkara, with two Śṛṅgeri teachers seated below — devotional print",
    "ಮೇಲೆ ದಕ್ಷಿಣಾಮೂರ್ತಿ, ಕೆಳಗೆ ಶಂಕರರು ಮತ್ತು ಶೃಂಗೇರಿಯ ಇಬ್ಬರು ಗುರುಗಳು — ಭಕ್ತಿ ಚಿತ್ರ",
    "ऊपर दक्षिणामूर्ति, नीचे शंकर और श्रृंगेरी के दो गुरु — भक्ति चित्र",
  ), "50% 35%"),
  ganeshaChaturthi: pic("ganesha-chaturthi-crowd", 1170, 659, a(
    "A tall clay Gaṇeśa carried through a dense crowd in the street",
    "ಜನಸಾಗರದ ನಡುವೆ ಬೀದಿಯಲ್ಲಿ ಒಯ್ಯುತ್ತಿರುವ ಎತ್ತರದ ಮಣ್ಣಿನ ಗಣೇಶ",
    "सड़क पर घनी भीड़ के बीच ले जाई जाती ऊँची मिट्टी की गणेश प्रतिमा",
  ), "50% 40%"),
  jambuSavari: pic("jambu-savari", 723, 952, a(
    "A caparisoned elephant carrying the golden howdah of the Goddess at night, the Mysuru Dasara procession",
    "ರಾತ್ರಿಯಲ್ಲಿ ದೇವಿಯ ಚಿನ್ನದ ಅಂಬಾರಿ ಹೊತ್ತ ಅಲಂಕೃತ ಆನೆ — ಮೈಸೂರು ದಸರಾ ಮೆರವಣಿಗೆ",
    "रात में देवी का स्वर्ण हौदा उठाए सजा हुआ हाथी — मैसूरु दशहरा की शोभायात्रा",
  ), "50% 30%", true),
  holi: pic("holi-colours", 506, 740, a(
    "Bowls of coloured powder on a table, a cloud of pink colour in the air behind",
    "ಮೇಜಿನ ಮೇಲೆ ಬಣ್ಣದ ಪುಡಿಯ ಬಟ್ಟಲುಗಳು, ಹಿಂದೆ ಗಾಳಿಯಲ್ಲಿ ಗುಲಾಬಿ ಬಣ್ಣದ ಮೋಡ",
    "मेज़ पर रंगीन गुलाल के कटोरे, पीछे हवा में गुलाबी रंग का बादल",
  ), "50% 60%"),
  gitaChariot: pic("gita-chariot", 900, 1600, a(
    "Kṛṣṇa driving Arjuna's chariot, four white horses at the gallop — painting on paper",
    "ಅರ್ಜುನನ ರಥವನ್ನು ನಡೆಸುತ್ತಿರುವ ಕೃಷ್ಣ, ಓಡುತ್ತಿರುವ ನಾಲ್ಕು ಬಿಳಿ ಕುದುರೆಗಳು — ಕಾಗದದ ಮೇಲಿನ ಚಿತ್ರ",
    "अर्जुन का रथ हाँकते कृष्ण, सरपट दौड़ते चार श्वेत घोड़े — काग़ज़ पर चित्र",
  ), "50% 72%"),
  navaratri: pic("navaratri-durga", 900, 1600, a(
    "A woman in a red sari seen from behind, the many-armed Goddess rising in shadow before her — drawing",
    "ಹಿಂದಿನಿಂದ ಕಾಣುವ ಕೆಂಪು ಸೀರೆಯ ಸ್ತ್ರೀ, ಎದುರು ನೆರಳಿನಲ್ಲಿ ಏಳುತ್ತಿರುವ ಬಹುಭುಜ ದೇವಿ — ಚಿತ್ರ",
    "पीछे से दिखती लाल साड़ी में स्त्री, सामने छाया में उभरती अनेक भुजाओं वाली देवी — चित्र",
  ), "50% 30%"),
  tulasiGarlanded: pic("tulasi-garlanded", 700, 1002, a(
    "A tulasī plant in a stone stand hung with marigold garlands — painting",
    "ಚೆಂಡು ಹೂವಿನ ಹಾರ ಹಾಕಿದ ಕಲ್ಲಿನ ಕಟ್ಟೆಯಲ್ಲಿನ ತುಳಸಿ — ಚಿತ್ರ",
    "गेंदे की मालाओं से सजी पत्थर की चौकी में तुलसी — चित्र",
  ), "50% 45%"),

  // ── rites ─────────────────────────────────────────────
  arati: pic("arati", 500, 749, a(
    "A many-tiered brass lamp of flames raised in a hand at night",
    "ರಾತ್ರಿಯಲ್ಲಿ ಕೈಯಲ್ಲಿ ಎತ್ತಿ ಹಿಡಿದ ಅನೇಕ ಹಂತಗಳ ಹಿತ್ತಾಳೆಯ ಆರತಿ",
    "रात में हाथ में उठाई गई कई परतों वाली पीतल की आरती",
  ), "50% 35%"),
  deepaDusk: pic("deepa-dusk", 900, 1600, a(
    "A lit brass lamp against the blue of dusk",
    "ಸಂಜೆಯ ನೀಲಿ ಬೆಳಕಿನ ಎದುರು ಉರಿಯುತ್ತಿರುವ ಹಿತ್ತಾಳೆಯ ದೀಪ",
    "सांझ के नीले प्रकाश के सामने जलता पीतल का दीपक",
  ), "50% 55%"),
  waterOffering: pic("water-offering", 720, 1280, a(
    "Water poured from a cupped leaf over a liṅga standing in a river",
    "ನದಿಯಲ್ಲಿ ನಿಂತ ಲಿಂಗದ ಮೇಲೆ ಎಲೆಯ ದೊನ್ನೆಯಿಂದ ಸುರಿಯುತ್ತಿರುವ ನೀರು",
    "नदी में स्थित लिंग पर पत्ते के दोने से डाला जाता जल",
  ), "50% 60%"),
  nandiLinga: pic("nandi-linga", 900, 1600, a(
    "Nandi resting beside a liṅga in a dark shrine",
    "ಕತ್ತಲ ಗುಡಿಯಲ್ಲಿ ಲಿಂಗದ ಪಕ್ಕ ವಿಶ್ರಮಿಸಿರುವ ನಂದಿ",
    "अँधेरे गर्भगृह में लिंग के पास विराजमान नंदी",
  ), "40% 45%"),
  vitthalaGarlanded: pic("vitthala-garlanded", 736, 1308, a(
    "Viṭṭhala standing with hands on his hips, heavily garlanded, incense smoke behind",
    "ಸೊಂಟದ ಮೇಲೆ ಕೈಯಿಟ್ಟು ನಿಂತ ವಿಠಲ — ದಟ್ಟ ಹಾರಗಳು, ಹಿಂದೆ ಧೂಪದ ಹೊಗೆ",
    "कमर पर हाथ रखे खड़े विट्ठल — घनी मालाएँ, पीछे धूप का धुआँ",
  ), "50% 20%"),
  ganeshaDurva: pic("ganesha-durva", 735, 902, a(
    "A black stone Gaṇeśa decked with dūrvā grass and jasmine, priests and lamps around",
    "ಗರಿಕೆ ಮತ್ತು ಮಲ್ಲಿಗೆಯಿಂದ ಅಲಂಕೃತ ಕಪ್ಪು ಕಲ್ಲಿನ ಗಣೇಶ — ಸುತ್ತ ಅರ್ಚಕರು ಮತ್ತು ದೀಪಗಳು",
    "दूर्वा और चमेली से सजे काले पत्थर के गणेश — आसपास पुजारी और दीपक",
  ), "50% 35%"),
  kashiGhats: pic("kashi-ghats", 732, 1316, a(
    "The ghats at Vārāṇasī at night, lamps raised along the river and crowds on the steps",
    "ರಾತ್ರಿಯ ವಾರಾಣಸಿಯ ಘಾಟುಗಳು — ನದಿಯುದ್ದಕ್ಕೂ ಎತ್ತಿದ ದೀಪಗಳು, ಮೆಟ್ಟಿಲುಗಳ ಮೇಲೆ ಜನಸಂದಣಿ",
    "रात में वाराणसी के घाट — नदी के किनारे उठे दीपक और सीढ़ियों पर भीड़",
  ), "50% 40%"),

  // ── Everyday Vedanta ──────────────────────────────────
  gangaDawn: pic("ganga-dawn", 736, 1104, a(
    "The sun rising over the Gaṅgā at Rishikesh, temples on the far bank",
    "ಋಷಿಕೇಶದಲ್ಲಿ ಗಂಗೆಯ ಮೇಲೆ ಉದಯಿಸುತ್ತಿರುವ ಸೂರ್ಯ, ಆಚೆಯ ದಡದಲ್ಲಿ ದೇವಾಲಯಗಳು",
    "ऋषिकेश में गंगा पर उगता सूर्य, उस पार मंदिर",
  ), "50% 35%"),
  japaMala: pic("japa-mala", 500, 750, a(
    "A hand holding a japa mala of dark beads — painting",
    "ಕಪ್ಪು ಮಣಿಗಳ ಜಪಮಾಲೆ ಹಿಡಿದ ಕೈ — ಚಿತ್ರ",
    "काले मनकों की जपमाला थामे हाथ — चित्र",
  ), "50% 40%"),
  ganeshaShrineLamps: pic("ganesha-shrine-lamps", 572, 891, a(
    "A stone Gaṇeśa garlanded in a dark shrine, hanging lamps lit on either side",
    "ಕತ್ತಲ ಗುಡಿಯಲ್ಲಿ ಹಾರ ಹಾಕಿದ ಕಲ್ಲಿನ ಗಣೇಶ, ಎರಡೂ ಬದಿ ಉರಿಯುತ್ತಿರುವ ತೂಗುದೀಪಗಳು",
    "अँधेरे गर्भगृह में माला पहने पत्थर के गणेश, दोनों ओर जलते लटकते दीपक",
  ), "50% 40%", true),
  lotus: pic("lotus-dark", 736, 1308, a(
    "A single pink lotus open on a dark pond",
    "ಕತ್ತಲ ಕೊಳದಲ್ಲಿ ಅರಳಿದ ಒಂದು ಗುಲಾಬಿ ಕಮಲ",
    "अँधेरे तालाब पर खिला एक गुलाबी कमल",
  ), "50% 50%"),

  // ── branches of the śāstra map ────────────────────────
  palmLeafBundles: pic("palm-leaf-bundles", 736, 1318, a(
    "A bundle of palm-leaf manuscripts tied with string on a wooden table, a brass lamp lit beside it",
    "ಮರದ ಮೇಜಿನ ಮೇಲೆ ದಾರದಿಂದ ಕಟ್ಟಿದ ತಾಳೆಗರಿ ಹಸ್ತಪ್ರತಿಗಳ ಕಟ್ಟು, ಪಕ್ಕದಲ್ಲಿ ಉರಿಯುತ್ತಿರುವ ಹಿತ್ತಾಳೆ ದೀಪ",
    "लकड़ी की मेज़ पर धागे से बँधा ताड़पत्र पांडुलिपियों का गट्ठर, पास में जलता पीतल का दीपक",
  ), "50% 45%"),
  palmLeafInHand: pic("palm-leaf-in-hand", 880, 586, a(
    "A small palm-leaf manuscript held open in a hand",
    "ಕೈಯಲ್ಲಿ ತೆರೆದು ಹಿಡಿದ ಪುಟ್ಟ ತಾಳೆಗರಿ ಹಸ್ತಪ್ರತಿ",
    "हाथ में खोलकर थामी गई छोटी ताड़पत्र पांडुलिपि",
  ), "45% 50%"),
  natarajaMeasures: pic("nataraja-measures", 720, 960, a(
    "A line drawing of Naṭarāja marked with the measurements an image-maker follows",
    "ಶಿಲ್ಪಿ ಅನುಸರಿಸುವ ಅಳತೆಗಳನ್ನು ಗುರುತಿಸಿದ ನಟರಾಜನ ರೇಖಾಚಿತ್ರ",
    "मूर्तिकार द्वारा पालन किए जाने वाले मापों से अंकित नटराज का रेखाचित्र",
  ), "50% 12%"),
  shankara: pic("shankara-painting", 702, 960, a(
    "Śaṅkara seated, holding a manuscript, with a staff and a halo behind him — painting",
    "ಹಸ್ತಪ್ರತಿ ಹಿಡಿದು ಕುಳಿತ ಶಂಕರರು — ದಂಡ, ಹಿಂದೆ ಪ್ರಭಾವಳಿ — ಚಿತ್ರ",
    "पांडुलिपि लिए बैठे शंकर — दंड, पीछे प्रभामंडल — चित्र",
  ), "50% 25%"),

  // ── temples ───────────────────────────────────────────
  idagunji: pic("idagunji-ganapati", 618, 654, a(
    "The standing black-stone Gaṇeśa of Idagunji in his golden arch, the background in red",
    "ಚಿನ್ನದ ಪ್ರಭಾವಳಿಯಲ್ಲಿ ನಿಂತ ಇಡಗುಂಜಿಯ ಕಪ್ಪು ಕಲ್ಲಿನ ಗಣಪತಿ, ಹಿನ್ನೆಲೆ ಕೆಂಪು",
    "स्वर्ण प्रभामंडल में खड़े इडगुंजी के काले पत्थर के गणपति, पृष्ठभूमि लाल",
  ), "50% 45%", true),
  anegudde: pic("anegudde-vinayaka", 793, 1139, a(
    "The Vinayaka of Anegudde in silver and gold armour, inside the decorated shrine",
    "ಅಲಂಕೃತ ಗರ್ಭಗುಡಿಯಲ್ಲಿ ಬೆಳ್ಳಿ ಚಿನ್ನದ ಕವಚದಲ್ಲಿ ಆನೆಗುಡ್ಡೆಯ ವಿನಾಯಕ",
    "सजे गर्भगृह में चाँदी और सोने के कवच में आनेगुड्डे के विनायक",
  ), "50% 35%", true),
  kukke: pic("kukke-alankara", 736, 1104, a(
    "The golden many-hooded serpent canopy, heaped with jasmine and marigold",
    "ಮಲ್ಲಿಗೆ ಚೆಂಡು ಹೂಗಳ ರಾಶಿಯ ನಡುವೆ ಚಿನ್ನದ ಬಹುಹೆಡೆಯ ಸರ್ಪ ಪ್ರಭಾವಳಿ",
    "चमेली और गेंदे के ढेर के बीच सोने का बहु-फण सर्प छत्र",
  ), "50% 40%"),
  // ── round two: the Gita, Itihāsa, the Purāṇas, two bhajan groups ──
  gitaTeaching: pic("gita-teaching", 736, 1104, a(
    "Kṛṣṇa standing and teaching, Arjuna kneeling before him, the two of them on a great book lettered Śrīmad Bhagavadgītā — digital painting",
    "ನಿಂತು ಉಪದೇಶಿಸುತ್ತಿರುವ ಕೃಷ್ಣ, ಎದುರು ಮಂಡಿಯೂರಿದ ಅರ್ಜುನ — ಇಬ್ಬರೂ ಶ್ರೀಮದ್ಭಗವದ್ಗೀತಾ ಎಂದು ಬರೆದ ದೊಡ್ಡ ಗ್ರಂಥದ ಮೇಲೆ — ಡಿಜಿಟಲ್ ಚಿತ್ರ",
    "खड़े होकर उपदेश देते कृष्ण, सामने घुटनों पर अर्जुन — दोनों 'श्रीमद्भगवद्गीता' लिखे एक बड़े ग्रंथ पर — डिजिटल चित्र",
  ), "50% 55%"),
  gitaArjunaKneels: pic("gita-arjuna-kneels", 736, 1308, a(
    "Arjuna kneeling with folded hands, his bow at his side, before Kṛṣṇa standing in a pool of light — painting",
    "ಬೆಳಕಿನಲ್ಲಿ ನಿಂತ ಕೃಷ್ಣನ ಎದುರು ಬಿಲ್ಲನ್ನು ಪಕ್ಕಕ್ಕಿಟ್ಟು ಕೈಮುಗಿದು ಮಂಡಿಯೂರಿದ ಅರ್ಜುನ — ಚಿತ್ರ",
    "प्रकाश में खड़े कृष्ण के सामने धनुष रखकर हाथ जोड़े घुटनों पर अर्जुन — चित्र",
  ), "50% 62%"),
  gitaDescent: pic("gita-descent", 900, 1600, a(
    "Viṣṇu descending through a blaze of light, holding the discus, above a chariot and its horses on the battlefield — digital painting",
    "ರಣಭೂಮಿಯ ರಥ ಮತ್ತು ಕುದುರೆಗಳ ಮೇಲೆ, ಚಕ್ರ ಹಿಡಿದು ಬೆಳಕಿನ ಪ್ರಭೆಯಲ್ಲಿ ಇಳಿಯುತ್ತಿರುವ ವಿಷ್ಣು — ಡಿಜಿಟಲ್ ಚಿತ್ರ",
    "रणभूमि में रथ और घोड़ों के ऊपर, चक्र लिए प्रकाश की आभा में उतरते विष्णु — डिजिटल चित्र",
  ), "50% 35%"),
  gitaKrishnaVishnu: pic("gita-krishna-vishnu", 736, 1167, a(
    "Kṛṣṇa in a crown, hand on his heart, with the four-armed Viṣṇu standing behind him — digital painting",
    "ಎದೆಯ ಮೇಲೆ ಕೈಯಿಟ್ಟ ಕಿರೀಟಧಾರಿ ಕೃಷ್ಣ, ಹಿಂದೆ ನಿಂತ ಚತುರ್ಭುಜ ವಿಷ್ಣು — ಡಿಜಿಟಲ್ ಚಿತ್ರ",
    "हृदय पर हाथ रखे मुकुटधारी कृष्ण, पीछे खड़े चतुर्भुज विष्णु — डिजिटल चित्र",
  ), "50% 45%"),
  gitaVishvarupaField: pic("gita-vishvarupa-field", 736, 817, a(
    "The universal form towering over the battlefield, many-headed and many-armed, Arjuna kneeling small before it between the armies — digital painting",
    "ಸೈನ್ಯಗಳ ನಡುವೆ ರಣಭೂಮಿಯ ಮೇಲೆ ಎತ್ತರವಾಗಿ ನಿಂತ ಅನೇಕ ತಲೆ ಅನೇಕ ಕೈಗಳ ವಿಶ್ವರೂಪ, ಎದುರು ಪುಟ್ಟದಾಗಿ ಮಂಡಿಯೂರಿದ ಅರ್ಜುನ — ಡಿಜಿಟಲ್ ಚಿತ್ರ",
    "सेनाओं के बीच रणभूमि पर ऊँचा खड़ा अनेक सिरों और भुजाओं वाला विश्वरूप, सामने छोटे-से घुटनों पर अर्जुन — डिजिटल चित्र",
  ), "50% 30%", true),
  gitaSurrender: pic("gita-surrender", 736, 1104, a(
    "Arjuna kneeling with folded hands before Kṛṣṇa, who holds up the discus, both in silhouette against a full moon",
    "ಹುಣ್ಣಿಮೆಯ ಚಂದ್ರನ ಎದುರು ನೆರಳಿನಲ್ಲಿ — ಚಕ್ರ ಎತ್ತಿ ಹಿಡಿದ ಕೃಷ್ಣನ ಮುಂದೆ ಕೈಮುಗಿದು ಮಂಡಿಯೂರಿದ ಅರ್ಜುನ",
    "पूर्ण चंद्र के सामने छाया-रूप में — चक्र उठाए कृष्ण के आगे हाथ जोड़े घुटनों पर अर्जुन",
  ), "50% 45%"),
  hanumanCarriesRama: pic("hanuman-carries-rama", 992, 1440, a(
    "Hanumān wading through the sea with Rāma and Lakṣmaṇa on his shoulders, the monkey army behind — painting",
    "ರಾಮ ಲಕ್ಷ್ಮಣರನ್ನು ಹೆಗಲ ಮೇಲೆ ಹೊತ್ತು ಸಮುದ್ರದಲ್ಲಿ ನಡೆಯುತ್ತಿರುವ ಹನುಮಂತ, ಹಿಂದೆ ವಾನರ ಸೈನ್ಯ — ಚಿತ್ರ",
    "राम और लक्ष्मण को कंधों पर लिए समुद्र में चलते हनुमान, पीछे वानर सेना — चित्र",
  ), "50% 10%"),
  puranaBook: pic("purana-book", 540, 783, a(
    "An old leather-bound book with पुराण embossed on its cover",
    "ಮುಖಪುಟದ ಮೇಲೆ 'ಪುರಾಣ' ಎಂದು ಉಬ್ಬು ಅಕ್ಷರಗಳಿರುವ ಹಳೆಯ ಚರ್ಮದ ಬೈಂಡಿಂಗ್‌ನ ಗ್ರಂಥ",
    "आवरण पर उभरे अक्षरों में 'पुराण' लिखी पुरानी चमड़े की जिल्द वाली पुस्तक",
  ), "50% 36%", true),
  // Not the golden murti first placed here: the owner identified that
  // one as Manjunatha, so it was taken off the Subrahmanya group.
  subrahmanyaPeacock: pic("subrahmanya-peacock", 914, 1600, a(
    "Six-headed Subrahmaṇya seated on his peacock with the vel, in a stone niche lined with lamps — digital art",
    "ದೀಪಗಳ ಸಾಲಿನ ಕಲ್ಲಿನ ಗೂಡಿನಲ್ಲಿ ವೇಲ್ ಹಿಡಿದು ನವಿಲಿನ ಮೇಲೆ ಕುಳಿತ ಷಣ್ಮುಖ ಸುಬ್ರಹ್ಮಣ್ಯ — ಡಿಜಿಟಲ್ ಚಿತ್ರ",
    "दीपों से घिरे पत्थर के आले में वेल लिए मोर पर विराजमान षण्मुख सुब्रह्मण्य — डिजिटल चित्र",
  ), "50% 50%"),
  ayyappa: pic("ayyappa-sabarimala", 736, 979, a(
    "Ayyappa, bow in hand, riding a tiger above the gateway and steps of a hill shrine — digital painting",
    "ಕೈಯಲ್ಲಿ ಬಿಲ್ಲು ಹಿಡಿದು ಹುಲಿಯ ಮೇಲೆ ಕುಳಿತ ಅಯ್ಯಪ್ಪ, ಕೆಳಗೆ ಬೆಟ್ಟದ ಗುಡಿಯ ಹೆಬ್ಬಾಗಿಲು ಮತ್ತು ಮೆಟ್ಟಿಲುಗಳು — ಡಿಜಿಟಲ್ ಚಿತ್ರ",
    "हाथ में धनुष लिए बाघ पर सवार अय्यप्पा, नीचे पहाड़ी मंदिर का द्वार और सीढ़ियाँ — डिजिटल चित्र",
  ), "50% 25%"),
  cosmos: pic("cosmos-sun-moon", 941, 1672, a(
    "A golden sun and a crescent moon on a dark starry sky, joined by a thread of small planets — digital painting",
    "ಕತ್ತಲ ನಕ್ಷತ್ರಾಕಾಶದಲ್ಲಿ ಚಿನ್ನದ ಸೂರ್ಯ ಮತ್ತು ಅರ್ಧಚಂದ್ರ, ನಡುವೆ ಪುಟ್ಟ ಗ್ರಹಗಳ ಸಾಲು — ಡಿಜಿಟಲ್ ಚಿತ್ರ",
    "अँधेरे तारों भरे आकाश में सुनहला सूर्य और अर्धचंद्र, बीच में छोटे ग्रहों की कड़ी — डिजिटल चित्र",
  ), "50% 45%"),
  templeWatercolour: pic("temple-watercolour", 736, 1252, a(
    "A temple tower standing in still blue water, a tree in red bloom on its top and a man fishing from a boat beside it — watercolour",
    "ನಿಶ್ಚಲ ನೀಲಿ ನೀರಿನಲ್ಲಿ ನಿಂತ ಗೋಪುರ, ಅದರ ತುದಿಯಲ್ಲಿ ಕೆಂಪು ಹೂಬಿಟ್ಟ ಮರ, ಪಕ್ಕದಲ್ಲಿ ದೋಣಿಯಿಂದ ಮೀನು ಹಿಡಿಯುತ್ತಿರುವ ವ್ಯಕ್ತಿ — ಜಲವರ್ಣ ಚಿತ್ರ",
    "स्थिर नीले जल में खड़ा गोपुर, उसके शिखर पर लाल फूलों से लदा पेड़, पास में नाव से मछली पकड़ता व्यक्ति — जलरंग चित्र",
  ), "40% 52%", true),
  // ── round three: a picture for every Gita chapter, five festivals ──
  gitaArjunaAlone: pic("gita-arjuna-alone", 900, 1600, a(
    "A lone warrior standing in silhouette in white mist",
    "ಬಿಳಿಯ ಮಂಜಿನಲ್ಲಿ ನೆರಳಿನಂತೆ ಒಬ್ಬಂಟಿಯಾಗಿ ನಿಂತ ಯೋಧ",
    "सफ़ेद धुंध में छाया-रूप में अकेला खड़ा योद्धा",
  ), "50% 35%"),
  lotusOffering: pic("lotus-offering", 900, 1600, a(
    "A hand offering a pink lotus to a blue hand reaching to take it — digital painting",
    "ನೀಲಿ ಕೈಗೆ ಗುಲಾಬಿ ಕಮಲವನ್ನು ಅರ್ಪಿಸುತ್ತಿರುವ ಕೈ — ಡಿಜಿಟಲ್ ಚಿತ್ರ",
    "नीले हाथ को गुलाबी कमल अर्पित करता हाथ — डिजिटल चित्र",
  ), "50% 40%"),
  bodyChakras: pic("body-chakras", 675, 1200, a(
    "A seated figure in meditation, the centres of the body marked in light along the spine — digital art",
    "ಧ್ಯಾನದಲ್ಲಿ ಕುಳಿತ ಆಕೃತಿ — ಬೆನ್ನುಹುರಿಯುದ್ದಕ್ಕೂ ದೇಹದ ಕೇಂದ್ರಗಳು ಬೆಳಕಿನಲ್ಲಿ — ಡಿಜಿಟಲ್ ಚಿತ್ರ",
    "ध्यान में बैठी आकृति — रीढ़ के साथ शरीर के केंद्र प्रकाश में अंकित — डिजिटल चित्र",
  ), "50% 50%"),
  krishnaClouds: pic("krishna-clouds", 736, 916, a(
    "Kṛṣṇa floating in golden clouds with open hands, white birds around him — digital painting",
    "ಹಕ್ಕಿಗಳ ನಡುವೆ ಚಿನ್ನದ ಮೋಡಗಳಲ್ಲಿ ತೆರೆದ ಕೈಗಳೊಡನೆ ತೇಲುತ್ತಿರುವ ಕೃಷ್ಣ — ಡಿಜಿಟಲ್ ಚಿತ್ರ",
    "सुनहले बादलों में खुले हाथों तैरते कृष्ण, आसपास श्वेत पक्षी — डिजिटल चित्र",
  ), "50% 25%", true),
  meditationHill: pic("meditation-hill", 736, 1302, a(
    "A monk in saffron sitting on a rock above misty hills at dawn",
    "ಮುಂಜಾವಿನ ಮಂಜಿನ ಬೆಟ್ಟಗಳ ಮೇಲಿನ ಬಂಡೆಯ ಮೇಲೆ ಕುಳಿತ ಕಾವಿಧಾರಿ",
    "भोर में धुंध भरी पहाड़ियों के ऊपर एक चट्टान पर बैठा भगवाधारी साधक",
  ), "50% 62%"),
  krishnaFluteMist: pic("krishna-flute-mist", 736, 1307, a(
    "Kṛṣṇa playing the flute, in silhouette against a bright misty sky",
    "ಬೆಳಗಿದ ಮಂಜಿನ ಆಕಾಶದ ಎದುರು ನೆರಳಿನಲ್ಲಿ ಕೊಳಲು ನುಡಿಸುತ್ತಿರುವ ಕೃಷ್ಣ",
    "उजले धुंधले आकाश के सामने छाया-रूप में बाँसुरी बजाते कृष्ण",
  ), "50% 30%"),
  ramaBow: pic("rama-bow", 736, 1307, a(
    "Rāma in profile holding his great bow, in silhouette against a pale sun",
    "ಮಸುಕಾದ ಸೂರ್ಯನ ಎದುರು ನೆರಳಿನಲ್ಲಿ ದೊಡ್ಡ ಬಿಲ್ಲು ಹಿಡಿದ ರಾಮನ ಪಾರ್ಶ್ವನೋಟ",
    "धुंधले सूर्य के सामने छाया-रूप में बड़ा धनुष लिए राम का पार्श्व",
  ), "50% 35%"),
  lingaLamps: pic("linga-lamps", 901, 1600, a(
    "A liṅga in a dark stone hall, rows of small lamps burning on either side",
    "ಕತ್ತಲ ಕಲ್ಲಿನ ಮಂಟಪದಲ್ಲಿ ಲಿಂಗ, ಎರಡೂ ಬದಿ ಸಾಲಾಗಿ ಉರಿಯುತ್ತಿರುವ ಪುಟ್ಟ ದೀಪಗಳು",
    "अँधेरे पत्थर के मंडप में लिंग, दोनों ओर पंक्तियों में जलते छोटे दीपक",
  ), "50% 60%"),
  lakshmiAlankara: pic("lakshmi-alankara", 1076, 1252, a(
    "The Goddess's golden face and crown, dressed in a green and orange sari and ringed with flowers",
    "ಹಸಿರು ಕಿತ್ತಳೆ ಸೀರೆಯುಟ್ಟು ಹೂಗಳಿಂದ ಸುತ್ತುವರಿದ ದೇವಿಯ ಚಿನ್ನದ ಮುಖ ಮತ್ತು ಕಿರೀಟ",
    "हरी और नारंगी साड़ी पहने, फूलों से घिरा देवी का स्वर्ण मुख और मुकुट",
  ), "50% 35%"),
  // ── round four: the rites, from pictures the owner named for them ──
  riteSimantonnayana: pic("rite-simantonnayana", 1152, 1270, a(
    "A pregnant woman in a blue sari, a hand on her belly, a basket of bangles beside her — illustration",
    "ಹೊಟ್ಟೆಯ ಮೇಲೆ ಕೈಯಿಟ್ಟ ನೀಲಿ ಸೀರೆಯ ಗರ್ಭಿಣಿ, ಪಕ್ಕದಲ್ಲಿ ಬಳೆಗಳ ಬುಟ್ಟಿ — ಚಿತ್ರ",
    "पेट पर हाथ रखे नीली साड़ी में गर्भवती स्त्री, पास में चूड़ियों की टोकरी — चित्र",
  ), "50% 75%", true),
  riteJatakarma: pic("rite-jatakarma", 564, 1002, a(
    "A finger tracing a horoscope chart drawn on paper",
    "ಕಾಗದದ ಮೇಲೆ ಬರೆದ ಜಾತಕ ಚಕ್ರವನ್ನು ತೋರುತ್ತಿರುವ ಬೆರಳು",
    "काग़ज़ पर बनी जन्मकुंडली पर रखी उँगली",
  ), "50% 55%"),
  riteNamakarana: pic("rite-namakarana", 1152, 799, a(
    "Father and mother seated on a mat, the father whispering into the baby's ear, kolam patterns on either side — illustration",
    "ಚಾಪೆಯ ಮೇಲೆ ಕುಳಿತ ತಂದೆ ತಾಯಿ, ಮಗುವಿನ ಕಿವಿಯಲ್ಲಿ ಪಿಸುಗುಡುತ್ತಿರುವ ತಂದೆ, ಎರಡೂ ಬದಿ ರಂಗೋಲಿ — ಚಿತ್ರ",
    "चटाई पर बैठे माता-पिता, शिशु के कान में फुसफुसाते पिता, दोनों ओर रंगोली — चित्र",
  ), "50% 55%", true),
  riteAnnaprashana: pic("rite-annaprashana", 591, 800, a(
    "A mother feeding the child Kṛṣṇa from a small bowl, a tray of food before them — painting",
    "ಪುಟ್ಟ ಬಟ್ಟಲಿನಿಂದ ಬಾಲಕೃಷ್ಣನಿಗೆ ಉಣಿಸುತ್ತಿರುವ ತಾಯಿ, ಎದುರು ಊಟದ ತಟ್ಟೆ — ಚಿತ್ರ",
    "छोटी कटोरी से बालकृष्ण को खिलाती माँ, सामने भोजन की थाली — चित्र",
  ), "50% 30%"),
  riteChudakarma: pic("rite-chudakarma", 736, 432, a(
    "A child's head being shaved as his parents and a priest sit around him, a lamp and a pot before them — watercolour",
    "ತಂದೆ ತಾಯಿ ಮತ್ತು ಪುರೋಹಿತರು ಸುತ್ತ ಕುಳಿತಿರಲು ಮಗುವಿನ ಚೌಲ — ಎದುರು ದೀಪ ಮತ್ತು ಕಲಶ — ಜಲವರ್ಣ ಚಿತ್ರ",
    "माता-पिता और पुरोहित के बीच शिशु का मुंडन — सामने दीपक और कलश — जलरंग चित्र",
  ), "50% 35%", true),
  riteUpanayana: pic("rite-upanayana", 1024, 1536, a(
    "A boy with a shaven head and the sacred thread, seated before an open book — painting",
    "ಯಜ್ಞೋಪವೀತ ಧರಿಸಿ ತೆರೆದ ಗ್ರಂಥದ ಎದುರು ಕುಳಿತ ಮುಂಡನದ ಬಾಲಕ — ಚಿತ್ರ",
    "जनेऊ धारण किए, खुली पुस्तक के सामने बैठा मुंडित बालक — चित्र",
  ), "50% 12%"),
  riteVivaha: { ...pic("rite-vivaha", 900, 1600, a(
    "Śiva and Pārvatī walking round the fire hand in hand, the gods and sages watching — painting",
    "ದೇವತೆಗಳು ಋಷಿಗಳು ನೋಡುತ್ತಿರಲು ಕೈ ಹಿಡಿದು ಅಗ್ನಿಯನ್ನು ಸುತ್ತುತ್ತಿರುವ ಶಿವ ಪಾರ್ವತಿ — ಚಿತ್ರ",
    "देवताओं और ऋषियों के सामने हाथ थामे अग्नि की परिक्रमा करते शिव और पार्वती — चित्र",
  ), "50% 55%"), credit: "Supplied by the site owner · signed by the artist, Pias" },
  riteHoma: pic("rite-homa", 736, 736, a(
    "Men in white seated round a fire pit, offering into the flames",
    "ಅಗ್ನಿಕುಂಡದ ಸುತ್ತ ಕುಳಿತು ಜ್ವಾಲೆಗೆ ಆಹುತಿ ನೀಡುತ್ತಿರುವ ಬಿಳಿ ವಸ್ತ್ರಧಾರಿಗಳು",
    "अग्निकुंड के चारों ओर बैठे श्वेत वस्त्रधारी, लपटों में आहुति देते हुए",
  ), "50% 50%"),
  riteAgnihotra: pic("rite-agnihotra", 800, 450, a(
    "A small fire burning in a copper vessel on a carved stand, petals scattered round it",
    "ಕೆತ್ತಿದ ಪೀಠದ ಮೇಲಿನ ತಾಮ್ರದ ಪಾತ್ರೆಯಲ್ಲಿ ಉರಿಯುತ್ತಿರುವ ಪುಟ್ಟ ಅಗ್ನಿ, ಸುತ್ತ ಹೂದಳಗಳು",
    "नक्काशीदार चौकी पर ताँबे के पात्र में जलती छोटी अग्नि, आसपास बिखरी पंखुड़ियाँ",
  ), "50% 45%"),
  riteChaturmasya: { ...pic("rite-chaturmasya", 847, 800, a(
    "Two sannyāsins in saffron seated with their staffs beside a shrine hung with flowers",
    "ಹೂಗಳಿಂದ ಅಲಂಕರಿಸಿದ ಮಂಟಪದ ಪಕ್ಕ ದಂಡ ಹಿಡಿದು ಕುಳಿತ ಇಬ್ಬರು ಕಾವಿಧಾರಿ ಸಂನ್ಯಾಸಿಗಳು",
    "फूलों से सजे मंडप के पास दंड लिए बैठे भगवाधारी दो संन्यासी",
  ), "30% 55%"), credit: "Supplied by the site owner · photograph © sringeri.net, whose mark it carries" },
} satisfies Record<string, OwnerImage>;

export type OwnerImageId = keyof typeof OWNER_IMAGES;

export function allOwnerImages(): [string, OwnerImage][] {
  return Object.entries(OWNER_IMAGES);
}
