// Proper names in the English translation, spelled as the 1905 edition
// prints them. The Wikisource transcription mostly drops the print's
// diacritics ("Pandavas" for Pâṇḍavas), so the build restores the
// printed spelling from this table, word by word, wherever the plain
// form stands. Every entry was read on the scans; add a name only once
// it has been seen in print, and give the page.
//
// The print marks a long vowel with a circumflex (â, î, û), retroflex
// consonants and vocalic ṛ with a dot below, and ñ for the palatal nasal.

export const NAMES = [
  // plain form      as printed         seen on page
  ["Dhritarashtra", "Dhṛitarâṣhṭra", 47],
  ["Pandavas", "Pâṇḍavas", 47],
  ["Pandu", "Pâṇḍu", 48],
  ["Sanjaya", "Sañjaya", 48],
  ["Raja", "Râjâ", 48],
  ["Bhishma", "Bhîṣhma", 50],
  ["Bhima", "Bhîma", 48],
  ["Yuyudhana", "Yuyudhâna", 48],
  ["Virata", "Virâṭa", 48],
  ["Dhrishtaketu", "Dhṛiṣhṭaketu", 49],
  ["Chekitana", "Chekitâna", 49],
  ["Kashi", "Kâshî", 49],
  ["Yudhamanyu", "Yudhâmanyu", 49],
  ["Uttamauja", "Uttamaujâ", 49],
  ["Karna", "Karṇa", 50],
  ["Kripa", "Kṛipa", 50],
  ["Ashvatthama", "Ashvatthâmâ", 50],
  ["Vikarna", "Vikarṇa", 50],
  ["Madhava", "Mâdhava", 53],
  ["Panchajanya", "Pâñchajanya", 53],
  ["Hrishikesha", "Hṛiṣhîkesha", 53],
  ["Dhananjaya", "Dhanañjaya", 53],
  ["Vrikodara", "Vṛikodara", 53],
  ["Paundra", "Pauṇḍra", 53],
  ["Kunti", "Kuntî", 54],
  ["Yudhishthira", "Yudhiṣhṭhira", 54],
  ["Sughosha", "Sughoṣha", 54],
  ["Manipushpaka", "Maṇipuṣhpaka", 54],
  ["Kashya", "Kâshya", 54],
  ["Shikhandi", "Shikhaṇḍî", 54],
  ["Dhrishtadyumna", "Dhṛiṣhṭadyumna", 54],
  ["Satyaki", "Sâtyaki", 54],
  ["Gudakesha", "Guḍâkesha", 57],
  ["Bharata", "Bhârata", 57],
  ["Partha", "Pârtha", 58],
  ["Krishna", "Kṛiṣhṇa", 59],
  ["Gandiva", "Gâṇḍîva", 60],
  ["Madhusudana", "Madhusûdana", 62],
  ["Janardana", "Janârdana", 62],
  ["Varshneya", "Vârṣhṇeya", 65],
  ["Drona", "Droṇa", 58],
];

/** The translation with every listed name in its printed spelling. */
export function asPrinted(text) {
  let out = text;
  for (const [plain, printed] of NAMES) out = out.replace(new RegExp(`\\b${plain}\\b`, "g"), printed);
  return out;
}
