import type { TempleRow, TempleTranslationRow } from "./types";

export const TEMPLES: TempleRow[] = [
  {
    id: "tp-brihadeeswarar", slug: "brihadeeswarar-temple", name_local: "பெரிய கோயில்",
    century_built: "11th century CE", latitude: 10.7828, longitude: 79.1318,
    image_url: "/images/site/brihadeeswarar.jpg",
    image_credit: "Rainer Halama / UnpetitproleX · CC BY-SA 4.0 · Wikimedia Commons",
  },
  {
    id: "tp-kailasa", slug: "kailasa-temple-ellora", name_local: "कैलास मंदिर",
    century_built: "8th century CE", latitude: 20.0263, longitude: 75.1779,
    image_url: "/images/site/ellora.jpg",
    image_credit: "Shishirdasika · CC BY-SA 4.0 · Wikimedia Commons",
  },
  {
    id: "tp-meenakshi", slug: "meenakshi-amman-temple", name_local: "மீனாக்ஷி அம்மன் கோவில்",
    century_built: "17th century CE", latitude: 9.9195, longitude: 78.1193,
    image_url: "/images/site/meenakshi.jpg",
    image_credit: "எஸ்ஸார் · CC BY 3.0 · Wikimedia Commons",
  },
  {
    id: "tp-konark", slug: "konark-sun-temple", name_local: "କୋଣାର୍କ",
    century_built: "13th century CE", latitude: 19.8876, longitude: 86.0945,
    image_url: "/images/site/konark.jpg",
    image_credit: "Subham9423 · CC BY-SA 4.0 · Wikimedia Commons",
  },
  {
    id: "tp-virupaksha", slug: "virupaksha-temple-hampi", name_local: "ವಿರೂಪಾಕ್ಷ ದೇವಾಲಯ",
    century_built: "7th century CE", latitude: 15.3350, longitude: 76.4600,
    image_url: "/images/site/hampi.jpg",
    image_credit: "iMahesh · CC BY-SA 4.0 · Wikimedia Commons",
  },
];

export const TEMPLE_TRANSLATIONS: TempleTranslationRow[] = [
  // ── Brihadeeswarar
  { temple_id: "tp-brihadeeswarar", language: "en", name: "Brihadeeswarar Temple", location: "Thanjavur", state: "Tamil Nadu", dynasty: "Chola", architecture_style: "Dravidian", presiding_deity: "Shiva (Brihadeeswara)",
    description: "Built by Raja Raja Chola I, this UNESCO World Heritage Site rises 66 metres to a vimana crowned by a single 80-tonne granite capstone, raised without modern machinery. The shadow of the shikhara is said never to fall on the ground at noon.",
    significance: "The temple embodies the Chola understanding that a temple is a model of Mount Meru, the axis of the cosmos. The garbhagriha represents the cave of the heart. The whole structure is a three-dimensional mandala of the universe." },
  { temple_id: "tp-brihadeeswarar", language: "kn", name: "ಬೃಹದೀಶ್ವರ ದೇವಾಲಯ", location: "ತಂಜಾವೂರು", state: "ತಮಿಳುನಾಡು", dynasty: "ಚೋಳ", architecture_style: "ದ್ರಾವಿಡ", presiding_deity: "ಶಿವ (ಬೃಹದೀಶ್ವರ)",
    description: "ರಾಜರಾಜ ಚೋಳ I ನಿರ್ಮಿಸಿದ ಈ ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆಯ ತಾಣವು 66 ಮೀಟರ್ ಎತ್ತರಕ್ಕೆ ಏರುತ್ತದೆ; ಅದರ ವಿಮಾನದ ಶಿಖರದಲ್ಲಿ 80 ಟನ್ ತೂಕದ ಒಂದೇ ಗ್ರಾನೈಟ್ ಕಲ್ಲನ್ನು ಆಧುನಿಕ ಯಂತ್ರಗಳಿಲ್ಲದೆ ಏರಿಸಲಾಗಿದೆ. ಮಧ್ಯಾಹ್ನ ಶಿಖರದ ನೆರಳು ನೆಲದ ಮೇಲೆ ಬೀಳುವುದಿಲ್ಲ ಎಂದು ಹೇಳಲಾಗುತ್ತದೆ.",
    significance: "ದೇವಾಲಯವು ಬ್ರಹ್ಮಾಂಡದ ಅಕ್ಷವಾದ ಮೇರು ಪರ್ವತದ ಪ್ರತಿರೂಪ ಎಂಬ ಚೋಳರ ತಿಳಿವಳಿಕೆಯನ್ನು ಇದು ಸಾಕಾರಗೊಳಿಸುತ್ತದೆ. ಗರ್ಭಗೃಹವು ಹೃದಯಗುಹೆಯನ್ನು ಸೂಚಿಸುತ್ತದೆ. ಇಡೀ ರಚನೆಯೇ ವಿಶ್ವದ ತ್ರಿಆಯಾಮದ ಮಂಡಲ." },
  { temple_id: "tp-brihadeeswarar", language: "hi", name: "बृहदीश्वर मंदिर", location: "तंजावुर", state: "तमिलनाडु", dynasty: "चोल", architecture_style: "द्रविड़", presiding_deity: "शिव (बृहदीश्वर)",
    description: "राजराज चोल प्रथम द्वारा निर्मित यह यूनेस्को विश्व धरोहर स्थल 66 मीटर ऊँचा है; इसके विमान के शिखर पर 80 टन की एक ही ग्रेनाइट शिला बिना आधुनिक यंत्रों के चढ़ाई गई। कहा जाता है कि दोपहर में शिखर की छाया भूमि पर नहीं पड़ती।",
    significance: "यह मंदिर चोलों की इस समझ को साकार करता है कि मंदिर मेरु पर्वत — ब्रह्मांड की धुरी — का प्रतिरूप है। गर्भगृह हृदय-गुहा का प्रतीक है। सम्पूर्ण संरचना ब्रह्मांड का त्रिआयामी मंडल है।" },

  // ── Kailasa, Ellora
  { temple_id: "tp-kailasa", language: "en", name: "Kailasa Temple", location: "Ellora", state: "Maharashtra", dynasty: "Rashtrakuta", architecture_style: "Rock-cut", presiding_deity: "Shiva (Kailashanatha)",
    description: "Carved downward from a single basalt cliff, the Kailasa Temple is the largest monolithic structure in the world. An estimated 200,000 tonnes of rock were removed by hand over several decades. It was not built — it was subtracted.",
    significance: "A three-dimensional mandala cut into the living rock of the earth. It was not constructed from the outside in but revealed from the inside out — the same movement by which the Self is uncovered." },
  { temple_id: "tp-kailasa", language: "kn", name: "ಕೈಲಾಸ ದೇವಾಲಯ", location: "ಎಲ್ಲೋರಾ", state: "ಮಹಾರಾಷ್ಟ್ರ", dynasty: "ರಾಷ್ಟ್ರಕೂಟ", architecture_style: "ಶಿಲಾಕೃತ", presiding_deity: "ಶಿವ (ಕೈಲಾಸನಾಥ)",
    description: "ಒಂದೇ ಬಸಾಲ್ಟ್ ಬಂಡೆಯನ್ನು ಮೇಲಿನಿಂದ ಕೆಳಕ್ಕೆ ಕೊರೆದು ರೂಪಿಸಿದ ಕೈಲಾಸ ದೇವಾಲಯವು ಜಗತ್ತಿನ ಅತಿ ದೊಡ್ಡ ಏಕಶಿಲಾ ರಚನೆ. ಹಲವು ದಶಕಗಳಲ್ಲಿ ಸುಮಾರು 2,00,000 ಟನ್ ಕಲ್ಲನ್ನು ಕೈಯಿಂದಲೇ ತೆಗೆಯಲಾಗಿದೆ. ಇದನ್ನು ಕಟ್ಟಲಿಲ್ಲ — ಕಳೆಯಲಾಯಿತು.",
    significance: "ಭೂಮಿಯ ಜೀವಂತ ಶಿಲೆಯಲ್ಲಿ ಕೊರೆದ ತ್ರಿಆಯಾಮದ ಮಂಡಲ. ಇದನ್ನು ಹೊರಗಿನಿಂದ ಒಳಕ್ಕೆ ಕಟ್ಟಲಿಲ್ಲ, ಒಳಗಿನಿಂದ ಹೊರಕ್ಕೆ ಪ್ರಕಟಿಸಲಾಯಿತು — ಆತ್ಮವು ಅನಾವರಣಗೊಳ್ಳುವ ಅದೇ ರೀತಿಯಲ್ಲಿ." },
  { temple_id: "tp-kailasa", language: "hi", name: "कैलास मंदिर", location: "एलोरा", state: "महाराष्ट्र", dynasty: "राष्ट्रकूट", architecture_style: "शैलकृत", presiding_deity: "शिव (कैलासनाथ)",
    description: "एक ही बेसाल्ट चट्टान को ऊपर से नीचे तराशकर बनाया गया कैलास मंदिर विश्व की सबसे बड़ी एकाश्म संरचना है। कई दशकों में लगभग 2,00,000 टन पत्थर हाथ से हटाया गया। इसे बनाया नहीं गया — घटाया गया।",
    significance: "पृथ्वी की जीवंत शिला में उकेरा गया त्रिआयामी मंडल। इसे बाहर से भीतर की ओर नहीं बनाया गया, बल्कि भीतर से बाहर की ओर प्रकट किया गया — ठीक उसी गति से जिससे आत्मा अनावृत होती है।" },

  // ── Meenakshi
  { temple_id: "tp-meenakshi", language: "en", name: "Meenakshi Amman Temple", location: "Madurai", state: "Tamil Nadu", dynasty: "Nayak", architecture_style: "Dravidian", presiding_deity: "Meenakshi (Parvati)",
    description: "One of the largest temple complexes in India, with fourteen gopurams covered in thousands of painted sculptures. Its corridors encode the sixty-four sacred games of Shiva.",
    significance: "The temple encodes an entire cosmos in its plan; walking through it is walking through a living scripture. The rituals performed here have continued without interruption for over a thousand years." },
  { temple_id: "tp-meenakshi", language: "kn", name: "ಮೀನಾಕ್ಷಿ ಅಮ್ಮನ್ ದೇವಾಲಯ", location: "ಮಧುರೈ", state: "ತಮಿಳುನಾಡು", dynasty: "ನಾಯಕ", architecture_style: "ದ್ರಾವಿಡ", presiding_deity: "ಮೀನಾಕ್ಷಿ (ಪಾರ್ವತಿ)",
    description: "ಭಾರತದ ಅತಿ ದೊಡ್ಡ ದೇವಾಲಯ ಸಂಕೀರ್ಣಗಳಲ್ಲಿ ಒಂದು; ಸಾವಿರಾರು ವರ್ಣಚಿತ್ರಿತ ಶಿಲ್ಪಗಳಿಂದ ಆವೃತವಾದ ಹದಿನಾಲ್ಕು ಗೋಪುರಗಳಿವೆ. ಇದರ ಪ್ರಾಕಾರಗಳು ಶಿವನ ಅರವತ್ತನಾಲ್ಕು ತಿರುವಿಳೈಯಾಡಲ್‌ಗಳನ್ನು ಒಳಗೊಂಡಿವೆ.",
    significance: "ದೇವಾಲಯದ ಯೋಜನೆಯಲ್ಲಿಯೇ ಇಡೀ ಬ್ರಹ್ಮಾಂಡವಿದೆ; ಅದರೊಳಗೆ ನಡೆಯುವುದೆಂದರೆ ಜೀವಂತ ಶಾಸ್ತ್ರದೊಳಗೆ ನಡೆದಂತೆ. ಇಲ್ಲಿ ನಡೆಯುವ ಪೂಜಾವಿಧಿಗಳು ಸಾವಿರ ವರ್ಷಗಳಿಗೂ ಹೆಚ್ಚು ಕಾಲ ಅವಿಚ್ಛಿನ್ನವಾಗಿ ಮುಂದುವರಿದಿವೆ." },
  { temple_id: "tp-meenakshi", language: "hi", name: "मीनाक्षी अम्मन मंदिर", location: "मदुरै", state: "तमिलनाडु", dynasty: "नायक", architecture_style: "द्रविड़", presiding_deity: "मीनाक्षी (पार्वती)",
    description: "भारत के सबसे बड़े मंदिर परिसरों में से एक, जिसमें हज़ारों रंगीन मूर्तियों से ढके चौदह गोपुरम हैं। इसके प्राकार शिव की चौंसठ लीलाओं को अंकित करते हैं।",
    significance: "मंदिर की योजना में ही सम्पूर्ण ब्रह्मांड निहित है; इसमें चलना जीवंत शास्त्र में चलना है। यहाँ के अनुष्ठान एक हज़ार वर्षों से अधिक समय से अटूट रूप से चले आ रहे हैं।" },

  // ── Konark
  { temple_id: "tp-konark", language: "en", name: "Konark Sun Temple", location: "Konark", state: "Odisha", dynasty: "Eastern Ganga", architecture_style: "Kalinga", presiding_deity: "Surya (the Sun)",
    description: "Conceived as a colossal chariot of the sun god, with twenty-four intricately carved wheels that function as sundials — a masterpiece of Odishan architecture encoding the Vedic understanding of time.",
    significance: "The twenty-four wheels answer to the twenty-four hours, the eight spokes to the eight praharas of the day. The whole structure asserts that time itself is sacred — that the movement of the sun is the movement of the divine." },
  { temple_id: "tp-konark", language: "kn", name: "ಕೋಣಾರ್ಕ ಸೂರ್ಯ ದೇವಾಲಯ", location: "ಕೋಣಾರ್ಕ", state: "ಒಡಿಶಾ", dynasty: "ಪೂರ್ವ ಗಂಗ", architecture_style: "ಕಳಿಂಗ", presiding_deity: "ಸೂರ್ಯ",
    description: "ಸೂರ್ಯದೇವನ ಬೃಹತ್ ರಥವಾಗಿ ಕಲ್ಪಿಸಲಾದ ಈ ದೇವಾಲಯದಲ್ಲಿ ಸೂಕ್ಷ್ಮವಾಗಿ ಕೆತ್ತಿದ ಇಪ್ಪತ್ತನಾಲ್ಕು ಚಕ್ರಗಳಿವೆ; ಅವು ಸೂರ್ಯಗಡಿಯಾರಗಳಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ. ಕಾಲದ ಬಗೆಗಿನ ವೈದಿಕ ತಿಳಿವಳಿಕೆಯನ್ನು ಒಳಗೊಂಡ ಒಡಿಶಾ ವಾಸ್ತುಶಿಲ್ಪದ ಮೇರುಕೃತಿ.",
    significance: "ಇಪ್ಪತ್ತನಾಲ್ಕು ಚಕ್ರಗಳು ಇಪ್ಪತ್ತನಾಲ್ಕು ಗಂಟೆಗಳಿಗೆ, ಎಂಟು ಅರೆಗಳು ದಿನದ ಎಂಟು ಪ್ರಹರಗಳಿಗೆ ಸಂವಾದಿ. ಕಾಲವೇ ಪವಿತ್ರ ಎಂಬುದನ್ನು ಇಡೀ ರಚನೆ ಘೋಷಿಸುತ್ತದೆ — ಸೂರ್ಯನ ಚಲನೆಯೇ ದೈವದ ಚಲನೆ." },
  { temple_id: "tp-konark", language: "hi", name: "कोणार्क सूर्य मंदिर", location: "कोणार्क", state: "ओडिशा", dynasty: "पूर्वी गंग", architecture_style: "कलिंग", presiding_deity: "सूर्य",
    description: "सूर्यदेव के विशाल रथ के रूप में परिकल्पित, जिसमें बारीकी से तराशे गए चौबीस पहिये हैं जो सूर्यघड़ी का काम करते हैं — काल की वैदिक समझ को अंकित करती ओडिशा वास्तुकला की उत्कृष्ट कृति।",
    significance: "चौबीस पहिये चौबीस घंटों के, आठ अरे दिन के आठ प्रहरों के अनुरूप हैं। सम्पूर्ण संरचना यह घोषित करती है कि काल स्वयं पवित्र है — सूर्य की गति ही दिव्य की गति है।" },

  // ── Virupaksha
  { temple_id: "tp-virupaksha", language: "en", name: "Virupaksha Temple", location: "Hampi", state: "Karnataka", dynasty: "Vijayanagara", architecture_style: "Dravidian", presiding_deity: "Shiva (Virupaksha)",
    description: "One of the oldest continuously functioning temples in India, worshipped without a break for over 1,300 years, at the heart of the ruins of the Vijayanagara empire.",
    significance: "Thirteen centuries of unbroken worship. Empires rose and fell around it; the lamp inside never went out. This is what Dharma means in stone — not a belief but a continuity that outlasts circumstance." },
  { temple_id: "tp-virupaksha", language: "kn", name: "ವಿರೂಪಾಕ್ಷ ದೇವಾಲಯ", location: "ಹಂಪಿ", state: "ಕರ್ನಾಟಕ", dynasty: "ವಿಜಯನಗರ", architecture_style: "ದ್ರಾವಿಡ", presiding_deity: "ಶಿವ (ವಿರೂಪಾಕ್ಷ)",
    description: "ಭಾರತದಲ್ಲಿ ನಿರಂತರವಾಗಿ ಪೂಜೆ ನಡೆಯುತ್ತಿರುವ ಅತ್ಯಂತ ಪ್ರಾಚೀನ ದೇವಾಲಯಗಳಲ್ಲಿ ಒಂದು; 1,300 ವರ್ಷಗಳಿಗೂ ಹೆಚ್ಚು ಕಾಲ ಅಡೆತಡೆಯಿಲ್ಲದೆ ಪೂಜಿಸಲ್ಪಡುತ್ತಿದೆ. ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಅವಶೇಷಗಳ ಹೃದಯಭಾಗದಲ್ಲಿದೆ.",
    significance: "ಹದಿಮೂರು ಶತಮಾನಗಳ ಅವಿಚ್ಛಿನ್ನ ಪೂಜೆ. ಸುತ್ತಲೂ ಸಾಮ್ರಾಜ್ಯಗಳು ಏಳುತ್ತಾ ಬೀಳುತ್ತಾ ಇದ್ದವು; ಒಳಗಿನ ದೀಪ ಮಾತ್ರ ಆರಲಿಲ್ಲ. ಕಲ್ಲಿನಲ್ಲಿ ಧರ್ಮ ಎಂದರೆ ಇದೇ — ನಂಬಿಕೆಯಲ್ಲ, ಸನ್ನಿವೇಶಗಳನ್ನು ಮೀರಿ ಉಳಿಯುವ ನಿರಂತರತೆ." },
  { temple_id: "tp-virupaksha", language: "hi", name: "विरूपाक्ष मंदिर", location: "हम्पी", state: "कर्नाटक", dynasty: "विजयनगर", architecture_style: "द्रविड़", presiding_deity: "शिव (विरूपाक्ष)",
    description: "भारत के उन प्राचीनतम मंदिरों में से एक जहाँ पूजा निरंतर चलती रही है — 1,300 वर्षों से अधिक समय से अटूट। विजयनगर साम्राज्य के खंडहरों के हृदय में स्थित।",
    significance: "तेरह शताब्दियों की अटूट पूजा। चारों ओर साम्राज्य उठते और गिरते रहे; भीतर का दीपक कभी नहीं बुझा। पत्थर में धर्म का अर्थ यही है — कोई मान्यता नहीं, बल्कि वह निरंतरता जो परिस्थितियों से अधिक टिकती है।" },
];
