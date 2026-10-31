// Which devata is a song addressed to?
//
// The site's own categories answer it for 151 of the 915, and the
// title answers it for about 200. The remaining seven hundred have to
// be read, and what makes that possible is that a Kannada devotional
// song names its devata over and over — in epithets more often than in
// the plain name. Gaṇeśa is far more often ಏಕದಂತ or ಲಂಬೋದರ or ಬೆನಕ
// than he is ಗಣೇಶ.
//
// So each devata is given the names it actually goes by, in both
// scripts, and a song is scored on all of them: a name in the title
// counts for more than a name in the body, and a devata has to win by
// a clear margin or the song is left unsorted rather than guessed at.
//
// Two traps this has to avoid:
//
//   1. The ankita. Four Haridasas sign with ...ವಿಠಲ — Purandara
//      Viṭhala, Vijaya Viṭhala, Jagannātha Viṭhala, Gopāla Viṭhala.
//      Scored naively, every one of their five hundred songs would be
//      filed under Viṭṭhala. The signature is removed before scoring.
//   2. Shared epithets. ಗೋವಿಂದ belongs to Krishna and to Venkaṭeśa
//      alike; ರಂಗ to Viṭṭhala and to Raṅganātha. Shared names are
//      given half weight so that an unshared name decides.

/** Names that are the signature of a composer, not a devata. */
export const ANKITA_STRIP =
  /(ಪುರಂದರ|ವಿಜಯ|ಜಗನ್ನಾಥ|ಗೋಪಾಲ|ಮೋಹನ|ಹೆನ್ನೆ|ವೇಣುಗೋಪಾಲ)\s*ವಿ?ಠ್?ಠ?ಲ|(purandara|vijaya|jagannatha|gopala|mohana|venugopala)\s*vi[tṭ]+h?ala/gi;

/**
 * shared: an epithet more than one devata answers to, worth half.
 * strong: a name that on its own settles it.
 */
const D = (id, strong, shared = []) => ({ id, strong, shared });

export const DEITIES = [
  D("ganapati",
    [/ಗಣಪತಿ|ಗಣೇಶ|ಗಣನಾಥ|ವಿನಾಯಕ|ಏಕದಂತ|ಲಂಬೋದರ|ಗಜಮುಖ|ಗಜಾನನ|ಬೆನಕ|ವಿಘ್ನ(ೇಶ|ರಾಜ|ಹರ)|ಮೂಷಿಕ|ಹೇರಂಬ|ಸಿದ್ಧಿವಿನಾಯಕ/,
     /ganapati|ganesha|ganesa|vinayaka|ekadanta|lambodara|gajamukha|gajanana|benaka|vighn|heramba|moushika/i]),

  D("krishna",
    [/ಕೃಷ್ಣ|ಮುರಳಿ|ಮುಕುಂದ|ಯಶೋದ|ನಂದಗೋಪ|ಬಾಲಕೃಷ್ಣ|ವೇಣುಗೋಪಾಲ|ಗೋಪಿ|ಬೃಂದಾವನ|ರಾಧ|ಮಾಧವ|ದಾಮೋದರ|ಕಾಳಿಂಗ|ಉಡುಪಿ|ಚೆನ್ನಿಗ|ಚೆನ್ನಕೇಶವ|ಘನಶ್ಯಾಮ|ಶ್ಯಾಮಸುಂದರ|ಮುರಹರ|ಬಾಲಗೋಪಾಲ|ನವನೀತ/,
     /krishna|krsna|murali|mukunda|yashoda|balakrishna|venugopala|gopi|brindavana|vrindavana|radha|damodara|udupi|chenniga|chennakeshava|ghanashyama|shyamasundara|murahara|navaneeta/i],
    [/ಗೋವಿಂದ|ಗೋಪಾಲ|ಕೇಶವ|ರಂಗ/, /govinda|gopala|keshava|ranga/i]),

  D("vitthala",
    [/ಪಾಂಡುರಂಗ|ಪಂಢರಿ|ಪಂಢರಪುರ|ವಿಠೋಬ|ಭೀಮಾತೀರ/,
     /panduranga|pandhari|pandharpur|vithoba/i],
    [/ವಿಠ್?ಠಲ|ರಂಗ/, /vi[tṭ]+h?ala|ranga/i]),

  D("rama",
    [/ರಾಮಚಂದ್ರ|ರಘುರಾಮ|ರಘುಪತಿ|ರಘುವೀರ|ರಾಘವ|ಕೋದಂಡ|ಸೀತಾ|ಸೀತೆ|ದಾಶರಥಿ|ಅಯೋಧ್ಯ|ಶ್ರೀರಾಮ|ರಾಮನ|ರಾಮಾ/,
     /ramachandra|raghurama|raghupati|raghuveera|raghava|kodanda|sita|seeta|dasharathi|ayodhya|shriram|sriram/i],
    [/ರಾಮ/, /\brama\b/i]),

  D("venkateshwara",
    [/ವೆಂಕಟ|ಶ್ರೀನಿವಾಸ|ತಿರುಪತಿ|ತಿಮ್ಮಪ್ಪ|ಬಾಲಾಜಿ|ಶೇಷಾದ್ರಿ|ಶೇಷಗಿರಿ|ವೃಷಭಾದ್ರಿ|ಅಲಮೇಲು|ತಿರುಮಲ/,
     /venkat|srinivasa|shrinivasa|tirupati|timmappa|balaji|sheshadri|tirumala|alamelu/i],
    [/ಗೋವಿಂದ/, /govinda/i]),

  D("narasimha",
    [/ನರಸಿಂಹ|ನಾರಸಿಂಹ|ಪ್ರಹ್ಲಾದ|ಹಿರಣ್ಯ|ಉಗ್ರನರ/,
     /narasimha|narasinha|nrsimha|prahlada|hiranya/i]),

  D("vishnu",
    [/ನಾರಾಯಣ|ವಿಷ್ಣು|ಅಚ್ಯುತ|ಪದ್ಮನಾಭ|ಜನಾರ್ದನ|ವಾಸುದೇವ|ಶ್ರೀಹರಿ|ವೈಕುಂಠ|ಗರುಡ|ಲಕ್ಷ್ಮೀಪತಿ|ಶ್ರೀಪತಿ|ಅನಂತ|ತ್ರಿವಿಕ್ರಮ|ವಾಮನ|ವರಾಹ|ಮತ್ಸ್ಯ|ಕೂರ್ಮ/,
     /narayana|vishnu|achyuta|padmanabha|janardana|vasudeva|shrihari|vaikuntha|garuda|shripati|sripati|ananta|trivikrama|vamana|varaha/i],
    [/ಹರಿ/, /\bhari\b/i]),

  D("shiva",
    [/ಶಿವ|ಈಶ್ವರ|ಮಹಾದೇವ|ಗಂಗಾಧರ|ನೀಲಕಂಠ|ಪಶುಪತಿ|ಸದಾಶಿವ|ಸೋಮೇಶ್ವರ|ಚಂದ್ರಶೇಖರ|ತ್ರಿಪುರ|ಕೈಲಾಸ|ನಟರಾಜ|ರುದ್ರ|ಲಿಂಗ|ಭಸ್ಮ|ಡಮರು|ಮೃತ್ಯುಂಜಯ|ವಿಶ್ವನಾಥ|ಮಲ್ಲಿಕಾರ್ಜುನ/,
     /shiva|eeshwara|ishwara|mahadeva|gangadhara|neelakantha|pashupati|sadashiva|someshwara|chandrashekhara|kailasa|nataraja|rudra|mrityunjaya|vishwanatha|mallikarjuna/i],
    [/ಶಂಕರ/, /shankara/i]),

  D("anjaneya",
    [/ಆಂಜನೇಯ|ಹನುಮ|ಮುಖ್ಯಪ್ರಾಣ|ಮಾರುತಿ|ಕಪಿ|ವಾಯುಪುತ್ರ|ಅಂಜನಿ|ರಾಮದೂತ|ಭೀಮಸೇನ/,
     /anjaneya|hanuma|mukhyaprana|maruti|kapi|vayuputra|anjani|ramaduta|bhimasena/i],
    [/ವಾಯು|ಭೀಮ/, /\bvayu\b|\bbhima\b/i]),

  D("lakshmi",
    [/ಲಕ್ಷ್ಮಿ|ಲಕ್ಷ್ಮೀ|ಮಹಾಲಕ್ಷ್ಮಿ|ಶ್ರೀದೇವಿ|ಕಮಲಾ|ಪದ್ಮಾವತಿ|ಇಂದಿರಾ|ರಮಾದೇವಿ|ಧನಲಕ್ಷ್ಮಿ|ಕೊಲ್ಲಾಪುರ/,
     /lakshmi|laxmi|mahalakshmi|shridevi|kamala|padmavati|indira|ramadevi|kolhapur/i]),

  D("durga",
    [/ದುರ್ಗಾ|ದುರ್ಗೆ|ಚಾಮುಂಡಿ|ಚಾಮುಂಡೇಶ್ವರಿ|ಭವಾನಿ|ಪಾರ್ವತಿ|ಗೌರಿ|ಗೌರೀ|ಅಂಬಾ|ಅಂಬೆ|ಮಹಿಷ|ಕಾಳಿ|ಶಕ್ತಿ|ಮೂಕಾಂಬಿಕ|ಅನ್ನಪೂರ್ಣ|ಲಲಿತಾ|ಜಗದಂಬ|ಭುವನೇಶ್ವರಿ|ಬನಶಂಕರಿ|ಯಲ್ಲಮ್ಮ|ರೇಣುಕ/,
     /durga|chamundi|chamundeshwari|bhavani|parvati|gowri|gauri|amba|mahisha|kali|mookambika|annapurna|lalita|jagadamba|bhuvaneshwari|banashankari|yellamma|renuka/i],
    [/ದೇವಿ/, /\bdevi\b/i]),

  D("saraswati",
    [/ಸರಸ್ವತಿ|ಸರಸ್ವತೀ|ಶಾರದ|ಶಾರದೆ|ವಾಗ್ದೇವಿ|ವೀಣಾಪಾಣಿ|ಬ್ರಹ್ಮಾಣಿ|ಅಕ್ಷರ/,
     /saraswati|sarasvati|sharade|sharada|vagdevi|veenapani/i],
    [/ವಾಣಿ|ಭಾರತಿ/, /\bvani\b|\bbharati\b/i]),

  D("raghavendra",
    [/ರಾಘವೇಂದ್ರ|ಗುರುರಾಯ|ಮಂತ್ರಾಲಯ|ರಾಯರ|ಗುರುಸಾರ್ವಭೌಮ|ಪ್ರಹ್ಲಾದರಾಯ|ವೆಂಕಣ್ಣ/,
     /raghavendra|gururaya|mantralaya|rayara|gurusarvabhauma/i]),

  D("subramanya",
    [/ಸುಬ್ರಹ್ಮಣ್ಯ|ಷಣ್ಮುಖ|ಕಾರ್ತಿಕೇಯ|ಮುರುಗ|ಸ್ಕಂದ|ಕುಮಾರಸ್ವಾಮಿ|ವೇಲಾಯುಧ|ಕುಕ್ಕೆ/,
     /subramanya|subrahmanya|shanmukha|kartikeya|muruga|skanda|kumaraswamy|kukke/i]),

  D("ayyappa", [/ಅಯ್ಯಪ್ಪ|ಶಬರಿಮಲೆ|ಮಣಿಕಂಠ/, /ayyappa|shabarimala|sabarimala|manikantha/i]),

  D("surya", [/ಸೂರ್ಯ|ಆದಿತ್ಯ|ಭಾಸ್ಕರ|ರವಿದೇವ|ಸವಿತೃ/, /surya|aditya|bhaskara|savitr/i]),

  D("madhva",
    [/ಮಧ್ವ|ಮಧ್ವಾಚಾರ್ಯ|ಆನಂದತೀರ್ಥ|ಪೂರ್ಣಪ್ರಜ್ಞ|ಜಯತೀರ್ಥ|ವ್ಯಾಸರಾಯ|ವಾದಿರಾಜ|ಟೀಕಾಚಾರ್ಯ/,
     /madhva|anandatirtha|purnaprajna|jayatirtha|vyasaraya|vadiraja|teekacharya/i]),

  D("tulasi", [/ತುಳಸಿ|ತುಲಸಿ|ಬೃಂದಾ/, /tulasi|tulsi/i]),

  D("shani", [/ಶನಿ|ಶನೈಶ್ಚರ|ಶನಿರಾಜ/, /shani|shanaishchara|shaniraja/i]),

  D("dattatreya", [/ದತ್ತಾತ್ರೇಯ|ದತ್ತ\s*ಗುರು|ಶ್ರೀದತ್ತ/, /dattatreya|dattaguru/i]),

  D("hayagriva", [/ಹಯಗ್ರೀವ/, /hayagriva|hayagreeva/i]),
];

/**
 * Score every devata over the song and return the winner, or null when
 * nothing wins clearly. Weights: a name in the title counts three, a
 * name in the body one, and a shared epithet counts half of either.
 */
export function classify({ title, body, categoryHints = [] }) {
  // The composer's signature is not an address to a devata.
  const cleanBody = body.replace(ANKITA_STRIP, " ");
  const cleanTitle = title.replace(ANKITA_STRIP, " ");

  const scores = new Map();
  const add = (id, n) => scores.set(id, (scores.get(id) ?? 0) + n);

  for (const d of DEITIES) {
    for (const re of d.strong) {
      const g = new RegExp(re.source, re.flags.includes("i") ? "gi" : "g");
      if (g.test(cleanTitle)) add(d.id, 3);
      const hits = (cleanBody.match(g) || []).length;
      if (hits) add(d.id, Math.min(hits, 6));
    }
    for (const re of d.shared) {
      const g = new RegExp(re.source, re.flags.includes("i") ? "gi" : "g");
      if (g.test(cleanTitle)) add(d.id, 1.5);
      const hits = (cleanBody.match(g) || []).length;
      if (hits) add(d.id, Math.min(hits, 6) * 0.5);
    }
  }

  // The owner's own category on the post is worth more than any of it.
  for (const hint of categoryHints) add(hint, 8);

  const ranked = [...scores.entries()].sort((a, b) => b[1] - a[1]);
  if (!ranked.length) return { devata: null, score: 0, runnerUp: null, ranked: [] };

  const [top, second] = ranked;
  const clear = top[1] >= 3 && (!second || top[1] >= second[1] * 1.35 || top[1] - second[1] >= 3);
  return {
    devata: clear ? top[0] : null,
    score: top[1],
    runnerUp: second ? { id: second[0], score: second[1] } : null,
    ranked: ranked.slice(0, 4),
  };
}
