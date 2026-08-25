import type { TeacherRow, TeacherTranslationRow } from "./types";

export const TEACHERS: TeacherRow[] = [
  {
    id: "te-shankara",
    slug: "adi-shankaracharya",
    name_sanskrit: "आदि शङ्कराचार्य",
    birth_year: 788,
    death_year: 820,
    image_url: "/images/site/shankara.jpg",
    image_credit: "Raja Ravi Varma · Public domain · Wikimedia Commons",
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
];

export const TEACHER_TRANSLATIONS: TeacherTranslationRow[] = [
  // ── Adi Shankaracharya
  {
    teacher_id: "te-shankara", language: "en",
    name: "Adi Shankaracharya", era: "8th century CE", tradition: "Advaita Vedanta",
    key_works: ["Brahmasutra Bhashya", "Vivekachudamani", "Upadeshasahasri", "Bhagavad Gita Bhashya", "Aparokshanubhuti"],
    biography: "Born in Kaladi, Kerala, Shankaracharya consolidated and systematised Advaita Vedanta at a time when India's philosophical landscape was fragmented. He walked the length of the country on foot, engaging scholars in debate, establishing four Mathas at the four directions, and writing extensive commentaries on the Prasthanatrayi — the Upanishads, Brahma Sutras and Bhagavad Gita. He accomplished all of it before the age of thirty-two.",
    quote: "Brahma satyam, jagan mithya, jivo brahmaiva naparah — Brahman alone is real. The world is appearance. The individual self is none other than Brahman.",
  },
  {
    teacher_id: "te-shankara", language: "kn",
    name: "ಆದಿ ಶಂಕರಾಚಾರ್ಯ", era: "ಕ್ರಿ.ಶ. 8ನೇ ಶತಮಾನ", tradition: "ಅದ್ವೈತ ವೇದಾಂತ",
    key_works: ["ಬ್ರಹ್ಮಸೂತ್ರ ಭಾಷ್ಯ", "ವಿವೇಕಚೂಡಾಮಣಿ", "ಉಪದೇಶಸಾಹಸ್ರೀ", "ಭಗವದ್ಗೀತಾ ಭಾಷ್ಯ", "ಅಪರೋಕ್ಷಾನುಭೂತಿ"],
    biography: "ಕೇರಳದ ಕಾಲಡಿಯಲ್ಲಿ ಜನಿಸಿದ ಶಂಕರಾಚಾರ್ಯರು, ಭಾರತದ ತಾತ್ವಿಕ ಚಿಂತನೆ ಛಿದ್ರಗೊಂಡಿದ್ದ ಕಾಲದಲ್ಲಿ ಅದ್ವೈತ ವೇದಾಂತವನ್ನು ಕ್ರೋಡೀಕರಿಸಿ ವ್ಯವಸ್ಥೆಗೊಳಿಸಿದರು. ಅವರು ದೇಶದುದ್ದಕ್ಕೂ ಕಾಲ್ನಡಿಗೆಯಲ್ಲಿ ಸಂಚರಿಸಿ, ವಿದ್ವಾಂಸರೊಂದಿಗೆ ವಾದ ಮಾಡಿ, ನಾಲ್ಕು ದಿಕ್ಕುಗಳಲ್ಲಿ ನಾಲ್ಕು ಮಠಗಳನ್ನು ಸ್ಥಾಪಿಸಿ, ಪ್ರಸ್ಥಾನತ್ರಯಿಗೆ — ಉಪನಿಷತ್ತು, ಬ್ರಹ್ಮಸೂತ್ರ ಮತ್ತು ಭಗವದ್ಗೀತೆಗೆ — ವಿಸ್ತೃತ ಭಾಷ್ಯಗಳನ್ನು ಬರೆದರು. ಇದೆಲ್ಲವನ್ನೂ ಮೂವತ್ತೆರಡು ವರ್ಷ ತುಂಬುವ ಮೊದಲೇ ಸಾಧಿಸಿದರು.",
    quote: "ಬ್ರಹ್ಮ ಸತ್ಯಂ ಜಗನ್ಮಿಥ್ಯಾ ಜೀವೋ ಬ್ರಹ್ಮೈವ ನಾಪರಃ — ಬ್ರಹ್ಮವೊಂದೇ ಸತ್ಯ. ಜಗತ್ತು ತೋರಿಕೆ. ಜೀವನು ಬ್ರಹ್ಮನೇ ಹೊರತು ಬೇರೆಯಲ್ಲ.",
  },
  {
    teacher_id: "te-shankara", language: "hi",
    name: "आदि शंकराचार्य", era: "8वीं शताब्दी ईस्वी", tradition: "अद्वैत वेदांत",
    key_works: ["ब्रह्मसूत्र भाष्य", "विवेकचूडामणि", "उपदेशसाहस्री", "भगवद्गीता भाष्य", "अपरोक्षानुभूति"],
    biography: "केरल के कालडी में जन्मे शंकराचार्य ने उस समय अद्वैत वेदांत को सुसंगठित और व्यवस्थित किया जब भारत का दार्शनिक परिदृश्य बिखरा हुआ था। उन्होंने पूरे देश की पैदल यात्रा की, विद्वानों से शास्त्रार्थ किया, चारों दिशाओं में चार मठ स्थापित किए, और प्रस्थानत्रयी — उपनिषद्, ब्रह्मसूत्र और भगवद्गीता — पर विस्तृत भाष्य लिखे। यह सब उन्होंने बत्तीस वर्ष की आयु से पहले पूर्ण किया।",
    quote: "ब्रह्म सत्यं जगन्मिथ्या जीवो ब्रह्मैव नापरः — ब्रह्म ही सत्य है। जगत् प्रतीति है। जीव ब्रह्म से भिन्न नहीं।",
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
