import type { TeacherRow, TeacherTranslationRow } from "./types";

// Four of the portraits were supplied by the site's owner rather than
// taken from Commons: Basavanna, Madhva, and the two living Jagadgurus
// of Sringeri, of whom no freely licensed photograph exists. Their
// original source and licence are not recorded, so they carry no
// source link and the credit says who supplied them.
const OWNER = "Supplied by the site owner";
const OWNER_LOWER = "supplied by the site owner";

export const TEACHERS: TeacherRow[] = [
  {
    id: "te-shankara",
    slug: "adi-shankaracharya",
    name_sanskrit: "आदि शङ्कराचार्य",
    // 788-820 CE was an early-Indology estimate (Tiele, then Max Muller
    // and Radhakrishnan) that later scholarship has set aside for the
    // first half of the 8th century — and the mathas' own traditions
    // place him a thousand years earlier still. Printing two precise
    // years would state as fact what is genuinely contested, so the
    // era string carries the claim and these stay null.
    // See docs/SHANKARA.md §2.
    birth_year: null,
    death_year: null,
    image_url: "/images/site/shankara.jpg",
    image_credit: "Raja Ravi Varma · Public domain · Wikimedia Commons",
  },
  {
    id: "te-ramanuja",
    slug: "ramanujacharya",
    name_sanskrit: "रामानुजाचार्यः",
    // Tradition gives 1017-1137, a lifespan of 120 years; modern work
    // on temple records argues 1077-1157. Both are in circulation, so
    // the era string carries the claim and these stay null.
    birth_year: null,
    death_year: null,
    image_url: "/images/acharyas/ramanuja-statue.jpg",
    image_credit: "Kasyap · CC BY-SA 4.0 · Wikimedia Commons — the Statue of Equality, Muchintal",
  },
  {
    id: "te-basavanna",
    slug: "basavanna",
    name_sanskrit: "बसवण्णः",
    birth_year: 1131,
    death_year: 1196,
    // A portrait of the man, supplied by the owner, in place of the
    // Commons photograph of his memorial statue in Bengaluru.
    image_url: "/images/acharyas/basavanna.jpg",
    image_credit: OWNER,
  },
  {
    id: "te-madhva",
    slug: "madhvacharya",
    // Two datings are current — 1199-1278 and 1238-1317 — so the era
    // string carries the century and these stay null.
    name_sanskrit: "मध्वाचार्यः",
    birth_year: null,
    death_year: null,
    // A devotional painting: Madhva teaching, flanked by Hanuman and
    // Bhima — the two earlier forms his tradition holds him to be.
    image_url: "/images/acharyas/madhvacharya.jpg",
    image_credit: OWNER,
  },
  {
    id: "te-ramakrishna",
    slug: "ramakrishna-paramahamsa",
    name_sanskrit: "रामकृष्ण परमहंसः",
    birth_year: 1836,
    death_year: 1886,
    image_url: "/images/acharyas/ramakrishna.jpg",
    image_credit: "Photograph, 1881 · Public domain · Wikimedia Commons",
  },
  {
    id: "te-ramana",
    slug: "ramana-maharshi",
    name_sanskrit: "रमण महर्षि",
    birth_year: 1879,
    death_year: 1950,
    image_url: "/images/site/ramana.jpg",
    image_credit: "G. G. Welling, 1948 · Public domain · Wikimedia Commons",
  },
  {
    id: "te-nisargadatta",
    slug: "nisargadatta-maharaj",
    name_sanskrit: "निसर्गदत्त महाराज",
    birth_year: 1897,
    death_year: 1981,
    image_url: "/images/site/nisargadatta.jpg",
    image_credit: "Shree Nisargadatta Adhyatma Kendra · Attribution · Wikimedia Commons",
  },
  {
    id: "te-bharati-tirtha",
    slug: "bharati-tirtha",
    name_sanskrit: "भारती तीर्थः",
    // Living. Wikipedia carries two birth dates in April 1951; the
    // year is not in doubt, the day is, so only the year is stated.
    birth_year: 1951,
    death_year: null,
    // No freely licensed photograph of him exists on Commons; this one
    // was supplied by the site's owner. Its photographer is not
    // recorded, so it carries no source link.
    image_url: "/images/acharyas/bharati-tirtha.jpg",
    image_credit: OWNER,
  },
  {
    id: "te-vidhushekhara-bharati",
    slug: "vidhushekhara-bharati",
    name_sanskrit: "विधुशेखर भारती",
    // Living. His year of birth is not published by the matha, and is
    // not guessed at here.
    birth_year: null,
    death_year: null,
    // Supplied by the owner, and watermarked by the photographer who
    // took it, so he is named. It is not a free licence: keep the
    // watermark, and keep the credit.
    image_url: "/images/acharyas/vidhushekhara-bharati.jpg",
    image_credit: "Photograph © Nagabhushan Beloor · " + OWNER_LOWER,
  },
];

export const TEACHER_TRANSLATIONS: TeacherTranslationRow[] = [
  // ── Adi Shankaracharya
  {
    teacher_id: "te-shankara", language: "en",
    name: "Adi Shankaracharya", era: "8th century CE, by the usual estimate", tradition: "Advaita Vedanta",
    key_works: ["Brahmasutra Bhashya", "Upadeshasahasri", "Bhagavad Gita Bhashya", "Ten Upanishad Bhashyas", "Gaudapada Karika Bhashya"],
    biography: "Born in Kaladi, Kerala, Shankaracharya consolidated and systematised Advaita Vedanta at a time when India's philosophical landscape was fragmented. He walked the length of the country on foot, engaging scholars in debate, establishing four Mathas at the four directions, and writing extensive commentaries on the Prasthanatrayi — the Upanishads, Brahma Sutras and Bhagavad Gita. He accomplished all of it before the age of thirty-two.",
    quote: "Brahma satyam, jagan mithya, jivo brahmaiva naparah — Brahman alone is real. The world is appearance. The individual self is none other than Brahman.",
  },
  {
    teacher_id: "te-shankara", language: "kn",
    name: "ಆದಿ ಶಂಕರಾಚಾರ್ಯ", era: "ಕ್ರಿ.ಶ. 8ನೇ ಶತಮಾನ, ರೂಢಿಯ ಅಂದಾಜಿನಂತೆ", tradition: "ಅದ್ವೈತ ವೇದಾಂತ",
    key_works: ["ಬ್ರಹ್ಮಸೂತ್ರ ಭಾಷ್ಯ", "ಉಪದೇಶಸಾಹಸ್ರೀ", "ಭಗವದ್ಗೀತಾ ಭಾಷ್ಯ", "ಹತ್ತು ಉಪನಿಷತ್ ಭಾಷ್ಯಗಳು", "ಗೌಡಪಾದ ಕಾರಿಕಾ ಭಾಷ್ಯ"],
    biography: "ಕೇರಳದ ಕಾಲಡಿಯಲ್ಲಿ ಜನಿಸಿದ ಶಂಕರಾಚಾರ್ಯರು, ಭಾರತದ ತಾತ್ವಿಕ ಚಿಂತನೆ ಛಿದ್ರಗೊಂಡಿದ್ದ ಕಾಲದಲ್ಲಿ ಅದ್ವೈತ ವೇದಾಂತವನ್ನು ಕ್ರೋಡೀಕರಿಸಿ ವ್ಯವಸ್ಥೆಗೊಳಿಸಿದರು. ಅವರು ದೇಶದುದ್ದಕ್ಕೂ ಕಾಲ್ನಡಿಗೆಯಲ್ಲಿ ಸಂಚರಿಸಿ, ವಿದ್ವಾಂಸರೊಂದಿಗೆ ವಾದ ಮಾಡಿ, ನಾಲ್ಕು ದಿಕ್ಕುಗಳಲ್ಲಿ ನಾಲ್ಕು ಮಠಗಳನ್ನು ಸ್ಥಾಪಿಸಿ, ಪ್ರಸ್ಥಾನತ್ರಯಿಗೆ — ಉಪನಿಷತ್ತು, ಬ್ರಹ್ಮಸೂತ್ರ ಮತ್ತು ಭಗವದ್ಗೀತೆಗೆ — ವಿಸ್ತೃತ ಭಾಷ್ಯಗಳನ್ನು ಬರೆದರು. ಇದೆಲ್ಲವನ್ನೂ ಮೂವತ್ತೆರಡು ವರ್ಷ ತುಂಬುವ ಮೊದಲೇ ಸಾಧಿಸಿದರು.",
    quote: "ಬ್ರಹ್ಮ ಸತ್ಯಂ ಜಗನ್ಮಿಥ್ಯಾ ಜೀವೋ ಬ್ರಹ್ಮೈವ ನಾಪರಃ — ಬ್ರಹ್ಮವೊಂದೇ ಸತ್ಯ. ಜಗತ್ತು ತೋರಿಕೆ. ಜೀವನು ಬ್ರಹ್ಮನೇ ಹೊರತು ಬೇರೆಯಲ್ಲ.",
  },
  {
    teacher_id: "te-shankara", language: "hi",
    name: "आदि शंकराचार्य", era: "8वीं शताब्दी ईस्वी, प्रचलित अनुमान के अनुसार", tradition: "अद्वैत वेदांत",
    key_works: ["ब्रह्मसूत्र भाष्य", "उपदेशसाहस्री", "भगवद्गीता भाष्य", "दस उपनिषद् भाष्य", "गौडपाद कारिका भाष्य"],
    biography: "केरल के कालडी में जन्मे शंकराचार्य ने उस समय अद्वैत वेदांत को सुसंगठित और व्यवस्थित किया जब भारत का दार्शनिक परिदृश्य बिखरा हुआ था। उन्होंने पूरे देश की पैदल यात्रा की, विद्वानों से शास्त्रार्थ किया, चारों दिशाओं में चार मठ स्थापित किए, और प्रस्थानत्रयी — उपनिषद्, ब्रह्मसूत्र और भगवद्गीता — पर विस्तृत भाष्य लिखे। यह सब उन्होंने बत्तीस वर्ष की आयु से पहले पूर्ण किया।",
    quote: "ब्रह्म सत्यं जगन्मिथ्या जीवो ब्रह्मैव नापरः — ब्रह्म ही सत्य है। जगत् प्रतीति है। जीव ब्रह्म से भिन्न नहीं।",
  },

  // ── Ramanujacharya
  {
    teacher_id: "te-ramanuja", language: "en",
    name: "Ramanujacharya", era: "11th – 12th century CE", tradition: "Vishishtadvaita Vedanta",
    key_works: ["Sri Bhashya", "Vedartha Sangraha", "Bhagavad Gita Bhashya", "Gadya Traya", "Vedanta Dipa"],
    biography: "Born at Sriperumbudur near Chennai, Ramanuja answered Shankara with a Vedanta in which the world and the souls are real — the body of Brahman rather than an appearance laid over it. His Sri Bhashya on the Brahma Sutras is the founding text of Vishishtadvaita. He led the Ranganathaswamy temple at Srirangam, spent fourteen years in exile in the Hoysala country where he built the temple at Melkote, and opened temple worship and Sri Vaishnava initiation to castes that had been shut out of both. Tradition gives him 1017–1137; modern scholarship argues 1077–1157.",
    quote: "The Lord is the self of all; all souls and all matter form his body. To know that is to be released.",
  },
  {
    teacher_id: "te-ramanuja", language: "kn",
    name: "ರಾಮಾನುಜಾಚಾರ್ಯ", era: "ಕ್ರಿ.ಶ. ೧೧ – ೧೨ನೇ ಶತಮಾನ", tradition: "ವಿಶಿಷ್ಟಾದ್ವೈತ ವೇದಾಂತ",
    key_works: ["ಶ್ರೀಭಾಷ್ಯ", "ವೇದಾರ್ಥಸಂಗ್ರಹ", "ಭಗವದ್ಗೀತಾ ಭಾಷ್ಯ", "ಗದ್ಯತ್ರಯ", "ವೇದಾಂತದೀಪ"],
    biography: "ಚೆನ್ನೈ ಬಳಿಯ ಶ್ರೀಪೆರುಂಬುದೂರಿನಲ್ಲಿ ಜನಿಸಿದ ರಾಮಾನುಜರು ಶಂಕರರಿಗೆ ಉತ್ತರವಾಗಿ, ಜಗತ್ತೂ ಜೀವರೂ ಸತ್ಯವೆಂಬ ವೇದಾಂತವನ್ನು ಮಂಡಿಸಿದರು — ಅವು ಬ್ರಹ್ಮದ ಮೇಲಿನ ತೋರಿಕೆಯಲ್ಲ, ಬ್ರಹ್ಮದ ಶರೀರ. ಬ್ರಹ್ಮಸೂತ್ರಗಳ ಮೇಲಿನ ಅವರ ಶ್ರೀಭಾಷ್ಯವೇ ವಿಶಿಷ್ಟಾದ್ವೈತದ ಮೂಲಗ್ರಂಥ. ಶ್ರೀರಂಗದ ರಂಗನಾಥಸ್ವಾಮಿ ದೇವಾಲಯವನ್ನು ಮುನ್ನಡೆಸಿದರು, ಹೊಯ್ಸಳ ನಾಡಿನಲ್ಲಿ ಹದಿನಾಲ್ಕು ವರ್ಷ ಕಳೆದು ಮೇಲುಕೋಟೆಯ ದೇವಾಲಯವನ್ನು ಕಟ್ಟಿಸಿದರು, ಮತ್ತು ದೇವಾಲಯ ಪ್ರವೇಶ ಹಾಗೂ ಶ್ರೀವೈಷ್ಣವ ದೀಕ್ಷೆಯನ್ನು ಅವುಗಳಿಂದ ದೂರವಿಟ್ಟಿದ್ದ ಜಾತಿಗಳಿಗೆ ತೆರೆದರು. ಪರಂಪರೆ ೧೦೧೭–೧೧೩೭ ಎನ್ನುತ್ತದೆ; ಆಧುನಿಕ ಸಂಶೋಧನೆ ೧೦೭೭–೧೧೫೭ ಎಂದು ವಾದಿಸುತ್ತದೆ.",
    quote: "ಭಗವಂತನೇ ಎಲ್ಲದರ ಆತ್ಮ; ಎಲ್ಲ ಜೀವರೂ ಎಲ್ಲ ಜಡವೂ ಅವನ ಶರೀರ. ಇದನ್ನು ತಿಳಿಯುವುದೇ ಮುಕ್ತಿ.",
  },
  {
    teacher_id: "te-ramanuja", language: "hi",
    name: "रामानुजाचार्य", era: "११वीं – १२वीं शताब्दी ईस्वी", tradition: "विशिष्टाद्वैत वेदांत",
    key_works: ["श्रीभाष्य", "वेदार्थसंग्रह", "भगवद्गीता भाष्य", "गद्यत्रय", "वेदांतदीप"],
    biography: "चेन्नई के निकट श्रीपेरुम्बुदूर में जन्मे रामानुज ने शंकर को उत्तर देते हुए ऐसा वेदांत रखा जिसमें जगत् और जीव वास्तविक हैं — ब्रह्म पर आरोपित प्रतीति नहीं, ब्रह्म का शरीर। ब्रह्मसूत्रों पर उनका श्रीभाष्य विशिष्टाद्वैत का मूल ग्रंथ है। उन्होंने श्रीरंगम् के रंगनाथस्वामी मंदिर का संचालन किया, होयसल देश में चौदह वर्ष बिताकर मेलकोटे का मंदिर बनवाया, और मंदिर-प्रवेश तथा श्रीवैष्णव दीक्षा उन जातियों के लिए खोल दी जो दोनों से वंचित थीं। परंपरा १०१७–११३७ कहती है; आधुनिक शोध १०७७–११५७ का तर्क देता है।",
    quote: "भगवान् ही सबका आत्मा हैं; समस्त जीव और समस्त जड़ उनका शरीर हैं। यह जान लेना ही मुक्ति है।",
  },

  // ── Basavanna
  {
    teacher_id: "te-basavanna", language: "en",
    name: "Basavanna", era: "1131 – 1196", tradition: "Lingayat · the Sharana movement",
    key_works: ["Vachanas"],
    biography: "Poet, administrator and reformer, Basavanna served as chief minister to the Kalachuri king Bijjala II at Kalyana, and used the position to build something the court had no name for: the Anubhava Mantapa, a hall where men and women of every caste and trade debated spiritual and social questions in the open. He wrote not in Sanskrit but in Kannada, in short unmetered vachanas that anyone could carry in the mouth. He rejected caste, temple ritual and image worship, and taught that work itself is worship — kayaka — and that what is earned must be shared — dasoha.",
    quote: "The rich will make temples for Shiva. What shall I, a poor man, do? My legs are pillars, the body the shrine, the head a cupola of gold. Things standing shall fall, but the moving ever shall stay.",
  },
  {
    teacher_id: "te-basavanna", language: "kn",
    name: "ಬಸವಣ್ಣ", era: "೧೧೩೧ – ೧೧೯೬", tradition: "ಲಿಂಗಾಯತ · ಶರಣ ಚಳವಳಿ",
    key_works: ["ವಚನಗಳು"],
    biography: "ಕವಿ, ಆಡಳಿತಗಾರ ಮತ್ತು ಸಮಾಜ ಸುಧಾರಕರಾದ ಬಸವಣ್ಣನವರು ಕಲ್ಯಾಣದಲ್ಲಿ ಕಲಚುರಿ ಅರಸ ಎರಡನೆಯ ಬಿಜ್ಜಳನ ಮಹಾಮಂತ್ರಿಯಾಗಿದ್ದರು, ಮತ್ತು ಆ ಸ್ಥಾನವನ್ನು ಬಳಸಿ ಆಸ್ಥಾನಕ್ಕೆ ಹೆಸರೇ ಇಲ್ಲದಿದ್ದ ಒಂದನ್ನು ಕಟ್ಟಿದರು: ಅನುಭವ ಮಂಟಪ — ಎಲ್ಲ ಜಾತಿ, ಎಲ್ಲ ಕಸುಬಿನ ಹೆಣ್ಣು ಗಂಡುಗಳು ಆಧ್ಯಾತ್ಮಿಕ ಹಾಗೂ ಸಾಮಾಜಿಕ ಪ್ರಶ್ನೆಗಳನ್ನು ಮುಕ್ತವಾಗಿ ಚರ್ಚಿಸುವ ಸಭಾಂಗಣ. ಅವರು ಬರೆದದ್ದು ಸಂಸ್ಕೃತದಲ್ಲಲ್ಲ, ಕನ್ನಡದಲ್ಲಿ — ಯಾರೂ ಬಾಯಲ್ಲಿ ಹೊತ್ತೊಯ್ಯಬಹುದಾದ ಚಿಕ್ಕ ವಚನಗಳಲ್ಲಿ. ಜಾತಿ, ದೇವಾಲಯದ ಕರ್ಮಕಾಂಡ ಮತ್ತು ಮೂರ್ತಿಪೂಜೆಯನ್ನು ತಿರಸ್ಕರಿಸಿ, ಕಾಯಕವೇ ಪೂಜೆ ಎಂದೂ, ದುಡಿದದ್ದನ್ನು ಹಂಚಿಕೊಳ್ಳಬೇಕು — ದಾಸೋಹ — ಎಂದೂ ಬೋಧಿಸಿದರು.",
    quote: "ಉಳ್ಳವರು ಶಿವಾಲಯ ಮಾಡುವರು, ನಾನೇನ ಮಾಡುವೆ ಬಡವನಯ್ಯಾ? ಎನ್ನ ಕಾಲೇ ಕಂಬ, ದೇಹವೇ ದೇಗುಲ, ಶಿರ ಹೊನ್ನ ಕಳಸವಯ್ಯಾ. ಸ್ಥಾವರಕ್ಕಳಿವುಂಟು, ಜಂಗಮಕ್ಕಳಿವಿಲ್ಲ.",
  },
  {
    teacher_id: "te-basavanna", language: "hi",
    name: "बसवण्ण", era: "११३१ – ११९६", tradition: "लिंगायत · शरण आंदोलन",
    key_works: ["वचन"],
    biography: "कवि, प्रशासक और समाज-सुधारक बसवण्ण कल्याण में कलचुरि राजा द्वितीय बिज्जल के महामंत्री थे, और उन्होंने उस पद का उपयोग ऐसी संस्था बनाने में किया जिसके लिए दरबार के पास कोई नाम न था: अनुभव मंटप — वह सभा जहाँ हर जाति और हर पेशे के स्त्री-पुरुष आध्यात्मिक और सामाजिक प्रश्नों पर खुलकर चर्चा करते थे। उन्होंने संस्कृत में नहीं, कन्नड़ में लिखा — छोटे, छंदमुक्त वचनों में, जिन्हें कोई भी कंठस्थ रख सके। जाति, मंदिर-कर्मकांड और मूर्तिपूजा को अस्वीकार करते हुए उन्होंने सिखाया कि श्रम ही पूजा है — कायक — और जो कमाया जाए वह बाँटा जाए — दासोह।",
    quote: "धनी शिव के मंदिर बनवाएँगे। मैं निर्धन क्या करूँ? मेरे पैर स्तंभ हैं, देह मंदिर, सिर स्वर्ण-कलश। जो स्थिर है वह गिरेगा, जो चलता है वही बना रहेगा।",
  },

  // ── Madhvacharya
  {
    teacher_id: "te-madhva", language: "en",
    name: "Madhvacharya", era: "13th century CE", tradition: "Dvaita Vedanta · Tattvavada",
    key_works: ["Brahma Sutra Bhashya", "Anu Vyakhyana", "Gita Bhashya", "Dvadasha Stotra", "Sarvamula Granthas"],
    biography: "Born at Pajaka near Udupi, Madhva broke with both Shankara and Ramanuja and taught difference itself as the truth of things: the pancha bheda, the five irreducible differences — between God and soul, soul and soul, soul and matter, God and matter, and one material thing and another. Reality, he held, is of two kinds, independent and dependent, and only Vishnu is independent. He established the Krishna Matha at Udupi with its eight surrounding mathas, whose heads take the worship of Krishna in turn to this day. Thirty-seven works are attributed to him; the two datings in circulation are 1199–1278 and 1238–1317.",
    quote: "Reality is twofold: the independent and the dependent. Vishnu alone is independent.",
  },
  {
    teacher_id: "te-madhva", language: "kn",
    name: "ಮಧ್ವಾಚಾರ್ಯ", era: "ಕ್ರಿ.ಶ. ೧೩ನೇ ಶತಮಾನ", tradition: "ದ್ವೈತ ವೇದಾಂತ · ತತ್ತ್ವವಾದ",
    key_works: ["ಬ್ರಹ್ಮಸೂತ್ರ ಭಾಷ್ಯ", "ಅನುವ್ಯಾಖ್ಯಾನ", "ಗೀತಾ ಭಾಷ್ಯ", "ದ್ವಾದಶ ಸ್ತೋತ್ರ", "ಸರ್ವಮೂಲ ಗ್ರಂಥಗಳು"],
    biography: "ಉಡುಪಿ ಬಳಿಯ ಪಾಜಕದಲ್ಲಿ ಜನಿಸಿದ ಮಧ್ವಾಚಾರ್ಯರು ಶಂಕರರಿಂದಲೂ ರಾಮಾನುಜರಿಂದಲೂ ಬೇರೆಯಾಗಿ, ಭೇದವನ್ನೇ ವಸ್ತುಸ್ಥಿತಿಯ ಸತ್ಯವೆಂದು ಬೋಧಿಸಿದರು: ಪಂಚಭೇದ — ದೇವ-ಜೀವ, ಜೀವ-ಜೀವ, ಜೀವ-ಜಡ, ದೇವ-ಜಡ, ಜಡ-ಜಡ ಎಂಬ ಐದು ಅಳಿಸಲಾಗದ ಭೇದಗಳು. ಸತ್ಯ ಎರಡು ಬಗೆ — ಸ್ವತಂತ್ರ ಮತ್ತು ಪರತಂತ್ರ; ಸ್ವತಂತ್ರನು ವಿಷ್ಣು ಒಬ್ಬನೇ ಎಂದರು. ಉಡುಪಿಯಲ್ಲಿ ಕೃಷ್ಣಮಠವನ್ನೂ ಅದರ ಸುತ್ತಣ ಅಷ್ಟಮಠಗಳನ್ನೂ ಸ್ಥಾಪಿಸಿದರು; ಆ ಮಠಗಳ ಸ್ವಾಮಿಗಳು ಇಂದಿಗೂ ಸರದಿಯಂತೆ ಕೃಷ್ಣನ ಪೂಜೆ ನಡೆಸುತ್ತಾರೆ. ಅವರಿಗೆ ಮೂವತ್ತೇಳು ಕೃತಿಗಳನ್ನು ಆರೋಪಿಸಲಾಗಿದೆ; ಪ್ರಚಲಿತ ಎರಡು ಕಾಲನಿರ್ಣಯಗಳು ೧೧೯೯–೧೨೭೮ ಮತ್ತು ೧೨೩೮–೧೩೧೭.",
    quote: "ಸತ್ಯ ಎರಡು ಬಗೆ: ಸ್ವತಂತ್ರ ಮತ್ತು ಪರತಂತ್ರ. ಸ್ವತಂತ್ರನು ವಿಷ್ಣು ಒಬ್ಬನೇ.",
  },
  {
    teacher_id: "te-madhva", language: "hi",
    name: "मध्वाचार्य", era: "१३वीं शताब्दी ईस्वी", tradition: "द्वैत वेदांत · तत्त्ववाद",
    key_works: ["ब्रह्मसूत्र भाष्य", "अणुव्याख्यान", "गीता भाष्य", "द्वादश स्तोत्र", "सर्वमूल ग्रंथ"],
    biography: "उडुपी के निकट पाजक में जन्मे मध्वाचार्य ने शंकर और रामानुज — दोनों से अलग राह ली और भेद को ही वस्तुओं का सत्य बताया: पंचभेद — ईश्वर और जीव, जीव और जीव, जीव और जड़, ईश्वर और जड़, तथा एक जड़ और दूसरे जड़ के बीच के पाँच अमिट भेद। सत्ता दो प्रकार की है, स्वतंत्र और परतंत्र, और स्वतंत्र केवल विष्णु हैं। उन्होंने उडुपी में कृष्ण मठ और उसके चारों ओर अष्ट मठ स्थापित किए, जिनके स्वामी आज भी बारी-बारी से कृष्ण की पूजा करते हैं। उनके नाम से सैंतीस ग्रंथ मिलते हैं; प्रचलित दो काल-निर्णय हैं ११९९–१२७८ और १२३८–१३१७।",
    quote: "सत्ता दो प्रकार की है: स्वतंत्र और परतंत्र। स्वतंत्र केवल विष्णु हैं।",
  },

  // ── Ramakrishna Paramahamsa
  {
    teacher_id: "te-ramakrishna", language: "en",
    name: "Ramakrishna Paramahamsa", era: "1836 – 1886", tradition: "Shakta devotion · Advaita",
    key_works: ["The Gospel of Sri Ramakrishna"],
    biography: "Born Gadadhar Chattopadhyay in the Bengal village of Kamarpukur, he became priest of the Kali temple at Dakshineswar in his twenties and spent the rest of his life in states of absorption his contemporaries could not explain. He practised Tantra, then Vedanta under the wandering monk Totapuri, then Islam and Christianity in turn — and concluded from experience, not from theory, that the religions are so many paths to one goal. He wrote nothing. His talk was taken down by a schoolmaster and became the Gospel; his disciple Narendranath became Vivekananda, who founded the Ramakrishna Mission in 1897.",
    quote: "So many faiths, so many paths.",
  },
  {
    teacher_id: "te-ramakrishna", language: "kn",
    name: "ರಾಮಕೃಷ್ಣ ಪರಮಹಂಸ", era: "೧೮೩೬ – ೧೮೮೬", tradition: "ಶಾಕ್ತ ಭಕ್ತಿ · ಅದ್ವೈತ",
    key_works: ["ಶ್ರೀರಾಮಕೃಷ್ಣ ವಚನವೇದ"],
    biography: "ಬಂಗಾಳದ ಕಾಮಾರಪುಕುರ ಹಳ್ಳಿಯಲ್ಲಿ ಗದಾಧರ ಚಟ್ಟೋಪಾಧ್ಯಾಯರಾಗಿ ಜನಿಸಿದ ಅವರು ಇಪ್ಪತ್ತರ ಹರೆಯದಲ್ಲಿ ದಕ್ಷಿಣೇಶ್ವರದ ಕಾಳೀ ದೇವಾಲಯದ ಅರ್ಚಕರಾದರು, ಮತ್ತು ಉಳಿದ ಜೀವನವನ್ನು ಸಮಕಾಲೀನರಿಗೆ ವಿವರಿಸಲಾಗದ ಸಮಾಧಿ ಸ್ಥಿತಿಗಳಲ್ಲಿ ಕಳೆದರು. ತಂತ್ರ, ಆಮೇಲೆ ಪರಿವ್ರಾಜಕ ತೋಟಾಪುರಿಯ ಬಳಿ ವೇದಾಂತ, ಆಮೇಲೆ ಇಸ್ಲಾಂ ಮತ್ತು ಕ್ರೈಸ್ತ ಸಾಧನೆಗಳನ್ನು ಒಂದಾದ ಮೇಲೊಂದರಂತೆ ಮಾಡಿ, ಸಿದ್ಧಾಂತದಿಂದಲ್ಲ ಅನುಭವದಿಂದ, ಎಲ್ಲ ಧರ್ಮಗಳೂ ಒಂದೇ ಗುರಿಗೆ ಹೋಗುವ ಹಾದಿಗಳೆಂದು ನಿರ್ಣಯಿಸಿದರು. ಅವರು ಏನನ್ನೂ ಬರೆಯಲಿಲ್ಲ. ಅವರ ಮಾತುಗಳನ್ನು ಒಬ್ಬ ಶಾಲಾ ಮಾಸ್ತರರು ಬರೆದಿಟ್ಟರು; ಅವರ ಶಿಷ್ಯ ನರೇಂದ್ರನಾಥರೇ ವಿವೇಕಾನಂದರಾಗಿ ೧೮೯೭ರಲ್ಲಿ ರಾಮಕೃಷ್ಣ ಮಿಷನ್ ಸ್ಥಾಪಿಸಿದರು.",
    quote: "ಎಷ್ಟು ಮತಗಳೋ ಅಷ್ಟು ಪಥಗಳು.",
  },
  {
    teacher_id: "te-ramakrishna", language: "hi",
    name: "रामकृष्ण परमहंस", era: "१८३६ – १८८६", tradition: "शाक्त भक्ति · अद्वैत",
    key_works: ["श्रीरामकृष्ण वचनामृत"],
    biography: "बंगाल के कामारपुकुर गाँव में गदाधर चट्टोपाध्याय के रूप में जन्मे वे बीस के दशक में दक्षिणेश्वर के काली मंदिर के पुजारी बने, और शेष जीवन ऐसी समाधि-अवस्थाओं में बिताया जिन्हें उनके समकालीन समझा नहीं सके। उन्होंने तंत्र, फिर परिव्राजक तोतापुरी के पास वेदांत, फिर इस्लाम और ईसाइयत की साधना बारी-बारी से की — और सिद्धांत से नहीं, अनुभव से यह निष्कर्ष निकाला कि सभी धर्म एक ही लक्ष्य तक जाने वाले मार्ग हैं। उन्होंने कुछ नहीं लिखा। उनकी बातें एक विद्यालय-शिक्षक ने लिख लीं और वही वचनामृत बनीं; उनके शिष्य नरेंद्रनाथ ही विवेकानंद हुए, जिन्होंने १८९७ में रामकृष्ण मिशन की स्थापना की।",
    quote: "जितने मत, उतने पथ।",
  },

  // ── Sri Bharati Tirtha Mahaswamiji (living)
  {
    teacher_id: "te-bharati-tirtha", language: "en",
    name: "Sri Bharati Tirtha Mahaswamiji", era: "Born 1951 · Jagadguru of Sringeri since 1989", tradition: "Advaita Vedanta · Sringeri Sharada Peetham",
    key_works: ["Dharma Sasta Stavam", "Sri Guru Dhyanam", "Sarada Pancharatna Stuti", "Abhinava Vidyatirtha Aksharamala"],
    biography: "Born Sitarama Anjaneyulu in Andhra Pradesh, he took sannyasa on 11 November 1974 from Sri Abhinava Vidyatirtha Mahaswamiji, the thirty-fifth Jagadguru, and succeeded him in 1989 as the thirty-sixth head of the Sringeri Sharada Peetham — the southern matha of the four, in a succession the tradition traces through Sureshvara to Shankara himself. He is a Sanskrit poet as well as a teacher, and his stotras have been set to Carnatic ragas. In January 2015 he anointed his own successor.",
    quote: "",
  },
  {
    teacher_id: "te-bharati-tirtha", language: "kn",
    name: "ಶ್ರೀ ಭಾರತೀ ತೀರ್ಥ ಮಹಾಸ್ವಾಮಿಗಳು", era: "ಜನನ ೧೯೫೧ · ೧೯೮೯ರಿಂದ ಶೃಂಗೇರಿಯ ಜಗದ್ಗುರು", tradition: "ಅದ್ವೈತ ವೇದಾಂತ · ಶೃಂಗೇರಿ ಶಾರದಾ ಪೀಠ",
    key_works: ["ಧರ್ಮಶಾಸ್ತಾ ಸ್ತವ", "ಶ್ರೀ ಗುರು ಧ್ಯಾನಂ", "ಶಾರದಾ ಪಂಚರತ್ನ ಸ್ತುತಿ", "ಅಭಿನವ ವಿದ್ಯಾತೀರ್ಥ ಅಕ್ಷರಮಾಲಾ"],
    biography: "ಆಂಧ್ರಪ್ರದೇಶದಲ್ಲಿ ಸೀತಾರಾಮ ಆಂಜನೇಯುಲು ಆಗಿ ಜನಿಸಿದ ಅವರು ೧೯೭೪ರ ನವೆಂಬರ್ ೧೧ರಂದು ಮೂವತ್ತೈದನೆಯ ಜಗದ್ಗುರು ಶ್ರೀ ಅಭಿನವ ವಿದ್ಯಾತೀರ್ಥ ಮಹಾಸ್ವಾಮಿಗಳಿಂದ ಸಂನ್ಯಾಸ ಸ್ವೀಕರಿಸಿದರು, ಮತ್ತು ೧೯೮೯ರಲ್ಲಿ ಶೃಂಗೇರಿ ಶಾರದಾ ಪೀಠದ ಮೂವತ್ತಾರನೆಯ ಪೀಠಾಧಿಪತಿಗಳಾದರು — ನಾಲ್ಕರಲ್ಲಿ ದಕ್ಷಿಣಾಮ್ನಾಯ ಮಠ, ಪರಂಪರೆ ಸುರೇಶ್ವರರ ಮೂಲಕ ಶಂಕರರವರೆಗೆ ಗುರುತಿಸುವ ಗುರುಪರಂಪರೆ. ಅವರು ಆಚಾರ್ಯರಷ್ಟೇ ಅಲ್ಲ ಸಂಸ್ಕೃತ ಕವಿಯೂ ಹೌದು; ಅವರ ಸ್ತೋತ್ರಗಳನ್ನು ಕರ್ನಾಟಕ ಸಂಗೀತದ ರಾಗಗಳಲ್ಲಿ ಅಳವಡಿಸಲಾಗಿದೆ. ೨೦೧೫ರ ಜನವರಿಯಲ್ಲಿ ಅವರು ತಮ್ಮ ಉತ್ತರಾಧಿಕಾರಿಯನ್ನು ನಿಯೋಜಿಸಿದರು.",
    quote: "",
  },
  {
    teacher_id: "te-bharati-tirtha", language: "hi",
    name: "श्री भारती तीर्थ महास्वामीजी", era: "जन्म १९५१ · १९८९ से शृंगेरी के जगद्गुरु", tradition: "अद्वैत वेदांत · शृंगेरी शारदा पीठ",
    key_works: ["धर्मशास्ता स्तव", "श्री गुरु ध्यानम्", "शारदा पंचरत्न स्तुति", "अभिनव विद्यातीर्थ अक्षरमाला"],
    biography: "आंध्र प्रदेश में सीताराम आंजनेयुलु के रूप में जन्मे उन्होंने ११ नवंबर १९७४ को पैंतीसवें जगद्गुरु श्री अभिनव विद्यातीर्थ महास्वामीजी से संन्यास लिया, और १९८९ में शृंगेरी शारदा पीठ के छत्तीसवें पीठाधिपति बने — चारों में दक्षिण का मठ, जिसकी गुरु-परंपरा सुरेश्वर के माध्यम से स्वयं शंकर तक जाती है। वे आचार्य ही नहीं, संस्कृत कवि भी हैं; उनके स्तोत्र कर्नाटक संगीत की रागों में निबद्ध किए गए हैं। जनवरी २०१५ में उन्होंने अपने उत्तराधिकारी को नियुक्त किया।",
    quote: "",
  },

  // ── Sri Vidhushekhara Bharati Mahaswamiji (living)
  {
    teacher_id: "te-vidhushekhara-bharati", language: "en",
    name: "Sri Vidhushekhara Bharati Mahaswamiji", era: "Successor-designate at Sringeri since 2015", tradition: "Advaita Vedanta · Sringeri Sharada Peetham",
    key_works: [],
    biography: "On 23 January 2015, Sri Bharati Tirtha Mahaswamiji initiated the young scholar Kuppa Venkateshwara Prasada Sharma into sannyasa, gave him the monastic name Sri Vidhushekhara Bharati, and anointed him successor-designate — the thirty-seventh in the Sringeri line when he succeeds. He studied the shastras under his guru directly. The matha publishes little else about him, and nothing further is asserted here.",
    quote: "",
  },
  {
    teacher_id: "te-vidhushekhara-bharati", language: "kn",
    name: "ಶ್ರೀ ವಿಧುಶೇಖರ ಭಾರತೀ ಮಹಾಸ್ವಾಮಿಗಳು", era: "೨೦೧೫ರಿಂದ ಶೃಂಗೇರಿಯ ಉತ್ತರಾಧಿಕಾರಿ ನಿಯುಕ್ತರು", tradition: "ಅದ್ವೈತ ವೇದಾಂತ · ಶೃಂಗೇರಿ ಶಾರದಾ ಪೀಠ",
    key_works: [],
    biography: "೨೦೧೫ರ ಜನವರಿ ೨೩ರಂದು ಶ್ರೀ ಭಾರತೀ ತೀರ್ಥ ಮಹಾಸ್ವಾಮಿಗಳು ಯುವ ವಿದ್ವಾಂಸ ಕುಪ್ಪಾ ವೆಂಕಟೇಶ್ವರ ಪ್ರಸಾದ ಶರ್ಮರಿಗೆ ಸಂನ್ಯಾಸ ದೀಕ್ಷೆ ನೀಡಿ, ಶ್ರೀ ವಿಧುಶೇಖರ ಭಾರತೀ ಎಂಬ ಯೋಗಪಟ್ಟ ಅನುಗ್ರಹಿಸಿ, ಉತ್ತರಾಧಿಕಾರಿಯಾಗಿ ನಿಯೋಜಿಸಿದರು — ಪೀಠಾರೋಹಣದ ನಂತರ ಅವರು ಶೃಂಗೇರಿ ಪರಂಪರೆಯ ಮೂವತ್ತೇಳನೆಯವರಾಗುತ್ತಾರೆ. ಅವರು ಗುರುಗಳ ನೇರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಶಾಸ್ತ್ರಾಧ್ಯಯನ ಮಾಡಿದರು. ಮಠವು ಇದಕ್ಕಿಂತ ಹೆಚ್ಚಿನದನ್ನು ಪ್ರಕಟಿಸುವುದಿಲ್ಲ, ಮತ್ತು ಇಲ್ಲಿ ಹೆಚ್ಚಿನದನ್ನು ಹೇಳಲಾಗಿಲ್ಲ.",
    quote: "",
  },
  {
    teacher_id: "te-vidhushekhara-bharati", language: "hi",
    name: "श्री विधुशेखर भारती महास्वामीजी", era: "२०१५ से शृंगेरी के उत्तराधिकारी-नियुक्त", tradition: "अद्वैत वेदांत · शृंगेरी शारदा पीठ",
    key_works: [],
    biography: "२३ जनवरी २०१५ को श्री भारती तीर्थ महास्वामीजी ने युवा विद्वान् कुप्पा वेंकटेश्वर प्रसाद शर्मा को संन्यास दीक्षा दी, उन्हें श्री विधुशेखर भारती नाम दिया, और उत्तराधिकारी-नियुक्त के रूप में अभिषिक्त किया — पीठारोहण के बाद वे शृंगेरी परंपरा के सैंतीसवें होंगे। उन्होंने शास्त्रों का अध्ययन सीधे अपने गुरु के सान्निध्य में किया। मठ इससे अधिक प्रकाशित नहीं करता, और यहाँ इससे अधिक नहीं कहा गया।",
    quote: "",
  },

  // ── Ramana Maharshi
  {
    teacher_id: "te-ramana", language: "en",
    name: "Ramana Maharshi", era: "1879 – 1950", tradition: "Advaita Vedanta",
    key_works: ["Who am I?", "Forty Verses on Reality", "Upadesa Saram", "Ulladu Narpadu"],
    biography: "At sixteen, Venkataraman underwent a spontaneous experience of death and Self-realisation in Madurai with no prior spiritual training. He walked to Arunachala and never left. He taught primarily through silence — visitors arrived with elaborate questions and left with their doubts dissolved. His method of self-enquiry through the question 'Who am I?' is regarded as one of the most direct paths to liberation.",
    quote: "The degree of freedom from unwanted thoughts and the degree of concentration on a single thought — these are the measure of spiritual progress.",
  },
  {
    teacher_id: "te-ramana", language: "kn",
    name: "ರಮಣ ಮಹರ್ಷಿ", era: "1879 – 1950", tradition: "ಅದ್ವೈತ ವೇದಾಂತ",
    key_works: ["ನಾನು ಯಾರು?", "ಉಳ್ಳದು ನಾರ್ಪದು", "ಉಪದೇಶ ಸಾರ", "ಸತ್ಯದ ಬಗ್ಗೆ ನಲವತ್ತು ಶ್ಲೋಕಗಳು"],
    biography: "ಹದಿನಾರನೇ ವಯಸ್ಸಿನಲ್ಲಿ, ಯಾವುದೇ ಪೂರ್ವ ಆಧ್ಯಾತ್ಮಿಕ ಸಾಧನೆಯಿಲ್ಲದೆ, ವೆಂಕಟರಾಮನ್ ಮಧುರೈನಲ್ಲಿ ಮರಣಾನುಭವ ಮತ್ತು ಆತ್ಮಸಾಕ್ಷಾತ್ಕಾರವನ್ನು ಸ್ವಾಭಾವಿಕವಾಗಿ ಅನುಭವಿಸಿದರು. ಅವರು ಅರುಣಾಚಲಕ್ಕೆ ನಡೆದು ಹೋಗಿ ಮತ್ತೆಂದೂ ಅಲ್ಲಿಂದ ಹೊರಡಲಿಲ್ಲ. ಅವರು ಮುಖ್ಯವಾಗಿ ಮೌನದ ಮೂಲಕ ಬೋಧಿಸಿದರು — ಜಟಿಲ ಪ್ರಶ್ನೆಗಳೊಂದಿಗೆ ಬಂದವರು ಸಂಶಯಗಳು ಕರಗಿ ಹಿಂತಿರುಗುತ್ತಿದ್ದರು. 'ನಾನು ಯಾರು?' ಎಂಬ ಪ್ರಶ್ನೆಯ ಮೂಲಕ ಆತ್ಮವಿಚಾರವೆಂಬ ಅವರ ಮಾರ್ಗವು ಮುಕ್ತಿಗೆ ಅತ್ಯಂತ ನೇರ ದಾರಿಗಳಲ್ಲಿ ಒಂದೆಂದು ಪರಿಗಣಿಸಲಾಗಿದೆ.",
    quote: "ಅನಗತ್ಯ ಆಲೋಚನೆಗಳಿಂದ ಎಷ್ಟು ಮುಕ್ತಿ ಮತ್ತು ಒಂದೇ ಆಲೋಚನೆಯಲ್ಲಿ ಎಷ್ಟು ಏಕಾಗ್ರತೆ — ಇವೇ ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರಗತಿಯ ಅಳತೆ.",
  },
  {
    teacher_id: "te-ramana", language: "hi",
    name: "रमण महर्षि", era: "1879 – 1950", tradition: "अद्वैत वेदांत",
    key_works: ["मैं कौन हूँ?", "उल्लदु नार्पदु", "उपदेश सार", "सत्य पर चालीस श्लोक"],
    biography: "सोलह वर्ष की आयु में, बिना किसी पूर्व साधना के, वेंकटरमण को मदुरै में मृत्यु का अनुभव और आत्म-साक्षात्कार स्वतः हुआ। वे पैदल अरुणाचल गए और फिर कभी वहाँ से नहीं लौटे। उन्होंने मुख्यतः मौन से उपदेश दिया — जटिल प्रश्न लेकर आने वाले लोग संशय विलीन होकर लौटते थे। 'मैं कौन हूँ?' प्रश्न द्वारा आत्म-विचार की उनकी पद्धति मुक्ति के सर्वाधिक प्रत्यक्ष मार्गों में मानी जाती है।",
    quote: "अवांछित विचारों से कितनी मुक्ति और एक ही विचार में कितनी एकाग्रता — यही आध्यात्मिक प्रगति का मापदंड है।",
  },

  // ── Nisargadatta Maharaj
  {
    teacher_id: "te-nisargadatta", language: "en",
    name: "Nisargadatta Maharaj", era: "1897 – 1981", tradition: "Advaita Vedanta",
    key_works: ["I Am That", "Prior to Consciousness", "Seeds of Consciousness", "The Experience of Nothingness"],
    biography: "A Mumbai bidi-maker who attained Self-realisation under his guru Siddharameshwar Maharaj. His dialogues, collected in 'I Am That', are among the most direct and uncompromising expositions of Advaita in the modern era. He spoke from direct experience rather than scholarship, and had no patience for spiritual performance.",
    quote: "Love says I am everything. Wisdom says I am nothing. Between the two, my life flows.",
  },
  {
    teacher_id: "te-nisargadatta", language: "kn",
    name: "ನಿಸರ್ಗದತ್ತ ಮಹಾರಾಜ್", era: "1897 – 1981", tradition: "ಅದ್ವೈತ ವೇದಾಂತ",
    key_works: ["ಐ ಆಮ್ ದಟ್", "ಪ್ರಜ್ಞೆಗೂ ಮೊದಲು", "ಪ್ರಜ್ಞೆಯ ಬೀಜಗಳು", "ಶೂನ್ಯದ ಅನುಭವ"],
    biography: "ಮುಂಬೈನ ಬೀಡಿ ತಯಾರಕರಾಗಿದ್ದ ಇವರು ತಮ್ಮ ಗುರು ಸಿದ್ಧರಾಮೇಶ್ವರ ಮಹಾರಾಜರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಆತ್ಮಸಾಕ್ಷಾತ್ಕಾರ ಪಡೆದರು. 'ಐ ಆಮ್ ದಟ್' ಎಂಬ ಗ್ರಂಥದಲ್ಲಿ ಸಂಗ್ರಹಿಸಲಾದ ಅವರ ಸಂವಾದಗಳು ಆಧುನಿಕ ಕಾಲದ ಅತ್ಯಂತ ನೇರ ಮತ್ತು ರಾಜಿಯಿಲ್ಲದ ಅದ್ವೈತ ವಿವರಣೆಗಳಲ್ಲಿ ಸೇರಿವೆ. ಅವರು ಪಾಂಡಿತ್ಯದಿಂದಲ್ಲ, ನೇರ ಅನುಭವದಿಂದ ಮಾತನಾಡಿದರು.",
    quote: "ಪ್ರೀತಿ ಹೇಳುತ್ತದೆ ನಾನು ಎಲ್ಲವೂ. ಜ್ಞಾನ ಹೇಳುತ್ತದೆ ನಾನು ಏನೂ ಅಲ್ಲ. ಈ ಎರಡರ ನಡುವೆ ನನ್ನ ಬದುಕು ಹರಿಯುತ್ತದೆ.",
  },
  {
    teacher_id: "te-nisargadatta", language: "hi",
    name: "निसर्गदत्त महाराज", era: "1897 – 1981", tradition: "अद्वैत वेदांत",
    key_works: ["आई एम दैट", "चेतना से पूर्व", "चेतना के बीज", "शून्यता का अनुभव"],
    biography: "मुंबई के एक बीड़ी बनाने वाले, जिन्होंने अपने गुरु सिद्धरामेश्वर महाराज के मार्गदर्शन में आत्म-साक्षात्कार प्राप्त किया। 'आई एम दैट' में संकलित उनके संवाद आधुनिक युग में अद्वैत की सर्वाधिक प्रत्यक्ष और बेलाग व्याख्याओं में हैं। वे पांडित्य से नहीं, प्रत्यक्ष अनुभव से बोलते थे।",
    quote: "प्रेम कहता है मैं सब कुछ हूँ। ज्ञान कहता है मैं कुछ नहीं हूँ। इन दोनों के बीच मेरा जीवन बहता है।",
  },
];
