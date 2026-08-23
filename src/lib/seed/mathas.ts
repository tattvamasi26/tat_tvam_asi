import type { MathaRow, MathaTranslationRow } from "./types";

const C = "https://upload.wikimedia.org/wikipedia/commons";

export const MATHAS: MathaRow[] = [
  {
    id: "m-sringeri", slug: "sringeri-sharada-peetham", direction: "south", veda: "Yajurveda", mahavakya: "Aham Brahmasmi",
    image_url: `${C}/2/2a/Vidyashankara_Temple_at_Shringeri.jpg`,
    image_credit: "Calvinkrishy · CC BY-SA 2.5 · Wikimedia Commons",
  },
  {
    id: "m-jyotirmath", slug: "jyotirmath", direction: "north", veda: "Atharvaveda", mahavakya: "Ayam Atma Brahma",
    image_url: `${C}/thumb/1/19/Joshimath.jpg/1920px-Joshimath.jpg`,
    image_credit: "ArmouredCyborg · CC BY-SA 4.0 · Wikimedia Commons",
  },
  {
    id: "m-govardhana", slug: "govardhana-peetham", direction: "east", veda: "Rigveda", mahavakya: "Prajnanam Brahma",
    image_url: `${C}/thumb/b/b7/Shri_Jagannath_temple.jpg/1920px-Shri_Jagannath_temple.jpg`,
    image_credit: "Prachites · CC BY-SA 3.0 · Wikimedia Commons",
  },
  {
    id: "m-dwarka", slug: "dwarka-sharada-peetham", direction: "west", veda: "Samaveda", mahavakya: "Tat Tvam Asi",
    image_url: `${C}/0/0c/Dwarakadheesh_Temple%2C_2014.jpg`,
    image_credit: "Vishnupranay.k · CC BY-SA 4.0 · Wikimedia Commons",
  },
];

export const MATHA_TRANSLATIONS: MathaTranslationRow[] = [
  // ── Sringeri (south)
  { matha_id: "m-sringeri", language: "en", name: "Sringeri Sharada Peetham", location: "Sringeri", state: "Karnataka", presiding_deity: "Sharadamba", founded_by: "Adi Shankaracharya",
    description: "The southern Matha, established on the banks of the Tunga in Karnataka. Shankara is said to have seen a frog sheltered from the sun by the hood of a cobra, and chose that spot of natural harmony for his first foundation. It is the most prominent of the four and keeps the Yajurveda tradition." },
  { matha_id: "m-sringeri", language: "kn", name: "ಶೃಂಗೇರಿ ಶಾರದಾ ಪೀಠ", location: "ಶೃಂಗೇರಿ", state: "ಕರ್ನಾಟಕ", presiding_deity: "ಶಾರದಾಂಬೆ", founded_by: "ಆದಿ ಶಂಕರಾಚಾರ್ಯ",
    description: "ಕರ್ನಾಟಕದ ತುಂಗಾ ನದಿಯ ದಡದಲ್ಲಿ ಸ್ಥಾಪಿತವಾದ ದಕ್ಷಿಣ ಮಠ. ಬಿಸಿಲಿನಿಂದ ಕಪ್ಪೆಗೆ ನಾಗರಹಾವು ತನ್ನ ಹೆಡೆಯಿಂದ ನೆರಳು ನೀಡುತ್ತಿದ್ದುದನ್ನು ಶಂಕರರು ಕಂಡರೆಂದೂ, ಸಹಜ ಸೌಹಾರ್ದದ ಆ ಸ್ಥಳವನ್ನೇ ತಮ್ಮ ಮೊದಲ ಪೀಠಕ್ಕೆ ಆರಿಸಿಕೊಂಡರೆಂದೂ ಹೇಳಲಾಗುತ್ತದೆ. ನಾಲ್ಕರಲ್ಲಿ ಅತ್ಯಂತ ಪ್ರಮುಖವಾದ ಇದು ಯಜುರ್ವೇದ ಪರಂಪರೆಯನ್ನು ಕಾಪಾಡುತ್ತದೆ." },
  { matha_id: "m-sringeri", language: "hi", name: "शृंगेरी शारदा पीठम्", location: "शृंगेरी", state: "कर्नाटक", presiding_deity: "शारदाम्बा", founded_by: "आदि शंकराचार्य",
    description: "कर्नाटक में तुंगा नदी के तट पर स्थापित दक्षिण मठ। कहा जाता है कि शंकर ने देखा कि एक नाग अपने फण से मेंढक को धूप से बचा रहा है, और इस सहज सामंजस्य के स्थान को उन्होंने अपने प्रथम पीठ के लिए चुना। चारों में सर्वाधिक प्रमुख यह मठ यजुर्वेद परंपरा का संरक्षक है।" },

  // ── Jyotirmath (north)
  { matha_id: "m-jyotirmath", language: "en", name: "Jyotirmath", location: "Joshimath", state: "Uttarakhand", presiding_deity: "Narayana", founded_by: "Adi Shankaracharya",
    description: "The northern Matha in the Himalayas, near Badrinath — the northernmost seat and keeper of the Atharvaveda tradition. The mulberry tree under which Shankara is said to have meditated still stands at Joshimath." },
  { matha_id: "m-jyotirmath", language: "kn", name: "ಜ್ಯೋತಿರ್ಮಠ", location: "ಜೋಶಿಮಠ", state: "ಉತ್ತರಾಖಂಡ", presiding_deity: "ನಾರಾಯಣ", founded_by: "ಆದಿ ಶಂಕರಾಚಾರ್ಯ",
    description: "ಬದರಿನಾಥದ ಸಮೀಪ ಹಿಮಾಲಯದಲ್ಲಿರುವ ಉತ್ತರ ಮಠ — ಅತ್ಯಂತ ಉತ್ತರದ ಪೀಠ ಮತ್ತು ಅಥರ್ವವೇದ ಪರಂಪರೆಯ ರಕ್ಷಕ. ಶಂಕರರು ಧ್ಯಾನ ಮಾಡಿದರೆನ್ನಲಾದ ಹಿಪ್ಪುನೇರಳೆ ಮರವು ಜೋಶಿಮಠದಲ್ಲಿ ಇಂದಿಗೂ ಇದೆ." },
  { matha_id: "m-jyotirmath", language: "hi", name: "ज्योतिर्मठ", location: "जोशीमठ", state: "उत्तराखंड", presiding_deity: "नारायण", founded_by: "आदि शंकराचार्य",
    description: "बद्रीनाथ के निकट हिमालय में स्थित उत्तर मठ — सबसे उत्तरी पीठ और अथर्ववेद परंपरा का संरक्षक। जिस शहतूत वृक्ष के नीचे शंकर ने ध्यान किया कहा जाता है, वह आज भी जोशीमठ में खड़ा है।" },

  // ── Govardhana (east)
  { matha_id: "m-govardhana", language: "en", name: "Govardhana Peetham", location: "Puri", state: "Odisha", presiding_deity: "Vimala", founded_by: "Adi Shankaracharya",
    description: "The eastern Matha at the sacred city of Puri, home of Jagannatha. Keeper of the Rigveda — the oldest of the four Vedas — and of the Mahavakya Prajnanam Brahma: consciousness is Brahman." },
  { matha_id: "m-govardhana", language: "kn", name: "ಗೋವರ್ಧನ ಪೀಠ", location: "ಪುರಿ", state: "ಒಡಿಶಾ", presiding_deity: "ವಿಮಲಾ", founded_by: "ಆದಿ ಶಂಕರಾಚಾರ್ಯ",
    description: "ಜಗನ್ನಾಥನ ನೆಲೆಯಾದ ಪವಿತ್ರ ಪುರಿ ನಗರದಲ್ಲಿರುವ ಪೂರ್ವ ಮಠ. ನಾಲ್ಕು ವೇದಗಳಲ್ಲಿ ಅತ್ಯಂತ ಪ್ರಾಚೀನವಾದ ಋಗ್ವೇದದ ಮತ್ತು ಪ್ರಜ್ಞಾನಂ ಬ್ರಹ್ಮ ಎಂಬ ಮಹಾವಾಕ್ಯದ ರಕ್ಷಕ." },
  { matha_id: "m-govardhana", language: "hi", name: "गोवर्धन पीठम्", location: "पुरी", state: "ओडिशा", presiding_deity: "विमला", founded_by: "आदि शंकराचार्य",
    description: "जगन्नाथ के धाम पवित्र पुरी नगर में स्थित पूर्व मठ। चारों वेदों में प्राचीनतम ऋग्वेद का तथा प्रज्ञानं ब्रह्म महावाक्य का संरक्षक।" },

  // ── Dwarka (west)
  { matha_id: "m-dwarka", language: "en", name: "Dwarka Sharada Peetham", location: "Dwarka", state: "Gujarat", presiding_deity: "Siddheshwari", founded_by: "Adi Shankaracharya",
    description: "The western Matha at the sacred coastal city of Dwarka in Gujarat. Keeper of the Samaveda and of Tat Tvam Asi — the teaching for which this platform is named." },
  { matha_id: "m-dwarka", language: "kn", name: "ದ್ವಾರಕಾ ಶಾರದಾ ಪೀಠ", location: "ದ್ವಾರಕಾ", state: "ಗುಜರಾತ್", presiding_deity: "ಸಿದ್ಧೇಶ್ವರಿ", founded_by: "ಆದಿ ಶಂಕರಾಚಾರ್ಯ",
    description: "ಗುಜರಾತಿನ ಕಡಲತೀರದ ಪವಿತ್ರ ದ್ವಾರಕಾ ನಗರದಲ್ಲಿರುವ ಪಶ್ಚಿಮ ಮಠ. ಸಾಮವೇದದ ಮತ್ತು ತತ್ತ್ವಮಸಿಯ ರಕ್ಷಕ — ಈ ತಾಣಕ್ಕೆ ಹೆಸರು ಬಂದ ಬೋಧನೆ." },
  { matha_id: "m-dwarka", language: "hi", name: "द्वारका शारदा पीठम्", location: "द्वारका", state: "गुजरात", presiding_deity: "सिद्धेश्वरी", founded_by: "आदि शंकराचार्य",
    description: "गुजरात के समुद्र तटवर्ती पवित्र द्वारका नगर में स्थित पश्चिम मठ। सामवेद का तथा तत्त्वमसि का संरक्षक — वही उपदेश जिस पर इस मंच का नाम है।" },
];
