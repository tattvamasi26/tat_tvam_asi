import type { Locale } from "@/i18n/config";

// ─────────────────────────────────────────────────────────
//  What the bhajan section sorts its songs into.
//
//  Twenty of these are devatas. Two are not, and both earn their place
//  by being true rather than tidy:
//
//    niti      — a nīti pada turns away from the devata and addresses
//                the singer's own mind. Purandara Dāsa wrote a great
//                many. Filing them under a god would misread them.
//    unsorted  — the songs whose devata could not be settled from the
//                owner's own category or from the text. They are shown
//                as unsorted rather than guessed at.
//
//  Where a devata already has a slug in seed/devatas.ts — ganesha,
//  shiva, vishnu, devi — that slug is used here too, so the stutis and
//  the bhajans call the same god by the same name.
// ─────────────────────────────────────────────────────────

export interface BhajanGroup {
  id: string;
  name: Record<Locale, string>;
  /** A devata group takes a devata's name; the other two do not. */
  kind: "devata" | "form" | "gap";
}

const G = (id: string, en: string, kn: string, hi: string, kind: BhajanGroup["kind"] = "devata"): BhajanGroup => ({
  id,
  name: { en, kn, hi },
  kind,
});

export const BHAJAN_GROUPS: BhajanGroup[] = [
  G("ganesha", "Ganesha", "ಗಣೇಶ", "गणेश"),
  G("krishna", "Krishna", "ಕೃಷ್ಣ", "कृष्ण"),
  G("vitthala", "Vitthala", "ವಿಠ್ಠಲ", "विट्ठल"),
  G("rama", "Rama", "ರಾಮ", "राम"),
  G("venkateshwara", "Venkateshwara", "ವೆಂಕಟೇಶ್ವರ", "वेंकटेश्वर"),
  G("narasimha", "Narasimha", "ನರಸಿಂಹ", "नरसिंह"),
  G("vishnu", "Vishnu", "ವಿಷ್ಣು", "विष्णु"),
  G("anjaneya", "Anjaneya", "ಆಂಜನೇಯ", "आंजनेय"),
  G("shiva", "Shiva", "ಶಿವ", "शिव"),
  G("devi", "Devi", "ದೇವಿ", "देवी"),
  G("lakshmi", "Lakshmi", "ಲಕ್ಷ್ಮಿ", "लक्ष्मी"),
  G("saraswati", "Saraswati", "ಸರಸ್ವತಿ", "सरस्वती"),
  G("subramanya", "Subramanya", "ಸುಬ್ರಹ್ಮಣ್ಯ", "सुब्रह्मण्य"),
  G("ayyappa", "Ayyappa", "ಅಯ್ಯಪ್ಪ", "अय्यप्प"),
  G("raghavendra", "Raghavendra", "ರಾಘವೇಂದ್ರ", "राघवेंद्र"),
  G("madhva", "Madhva", "ಮಧ್ವ", "मध्व"),
  G("dattatreya", "Dattatreya", "ದತ್ತಾತ್ರೇಯ", "दत्तात्रेय"),
  G("hayagriva", "Hayagriva", "ಹಯಗ್ರೀವ", "हयग्रीव"),
  G("tulasi", "Tulasi", "ತುಳಸಿ", "तुळसी"),
  G("surya", "Surya", "ಸೂರ್ಯ", "सूर्य"),
  G("shani", "Shani", "ಶನಿ", "शनि"),
  G("niti", "Songs to the mind", "ಮನಸ್ಸಿಗೆ ಹೇಳಿದ ಪದಗಳು", "मन से कहे गए पद", "form"),
  G("unsorted", "Not yet sorted", "ಇನ್ನೂ ವಿಂಗಡಿಸದವು", "अभी वर्गीकृत नहीं", "gap"),
];

const BY_ID = new Map(BHAJAN_GROUPS.map((g) => [g.id, g]));

export function bhajanGroup(id: string): BhajanGroup | undefined {
  return BY_ID.get(id);
}

// ─────────────────────────────────────────────────────────
//  The Haridasas, named by the ankita they sign with.
//
//  A Haridasa works his signature into the last lines of every song he
//  composes, so this attribution sits inside the text rather than
//  beside it — which makes it the one claim in this whole corpus that
//  can be checked instead of believed. The ankita is given in Kannada
//  so a reader can find it in the song.
// ─────────────────────────────────────────────────────────

export interface Haridasa {
  id: string;
  name: Record<Locale, string>;
  /** The signature, as it appears in the songs. */
  ankita: string;
  /** When he lived, in the words the page should use. */
  when: Record<Locale, string>;
}

export const HARIDASAS: Haridasa[] = [
  {
    id: "sripadaraja",
    name: { en: "Sripadaraja", kn: "ಶ್ರೀಪಾದರಾಜರು", hi: "श्रीपादराज" },
    ankita: "ರಂಗವಿಠಲ",
    when: { en: "15th century", kn: "೧೫ನೇ ಶತಮಾನ", hi: "१५वीं सदी" },
  },
  {
    id: "vyasaraja",
    name: { en: "Vyasaraja", kn: "ವ್ಯಾಸರಾಜರು", hi: "व्यासराज" },
    ankita: "ಸಿರಿಕೃಷ್ಣ",
    when: { en: "15th–16th century", kn: "೧೫–೧೬ನೇ ಶತಮಾನ", hi: "१५–१६वीं सदी" },
  },
  {
    id: "purandara-dasa",
    name: { en: "Purandara Dasa", kn: "ಪುರಂದರ ದಾಸರು", hi: "पुरंदर दास" },
    ankita: "ಪುರಂದರ ವಿಠಲ",
    when: { en: "16th century", kn: "೧೬ನೇ ಶತಮಾನ", hi: "१६वीं सदी" },
  },
  {
    id: "kanaka-dasa",
    name: { en: "Kanaka Dasa", kn: "ಕನಕ ದಾಸರು", hi: "कनक दास" },
    ankita: "ಕಾಗಿನೆಲೆ ಆದಿಕೇಶವ",
    when: { en: "16th century", kn: "೧೬ನೇ ಶತಮಾನ", hi: "१६वीं सदी" },
  },
  {
    id: "vadiraja",
    name: { en: "Vadiraja Tirtha", kn: "ವಾದಿರಾಜ ತೀರ್ಥರು", hi: "वादिराज तीर्थ" },
    ankita: "ಹಯವದನ",
    when: { en: "16th century", kn: "೧೬ನೇ ಶತಮಾನ", hi: "१६वीं सदी" },
  },
  {
    id: "vijaya-dasa",
    name: { en: "Vijaya Dasa", kn: "ವಿಜಯ ದಾಸರು", hi: "विजय दास" },
    ankita: "ವಿಜಯ ವಿಠಲ",
    when: { en: "18th century", kn: "೧೮ನೇ ಶತಮಾನ", hi: "१८वीं सदी" },
  },
  {
    id: "gopala-dasa",
    name: { en: "Gopala Dasa", kn: "ಗೋಪಾಲ ದಾಸರು", hi: "गोपाल दास" },
    ankita: "ಗೋಪಾಲ ವಿಠಲ",
    when: { en: "18th century", kn: "೧೮ನೇ ಶತಮಾನ", hi: "१८वीं सदी" },
  },
  {
    id: "jagannatha-dasa",
    name: { en: "Jagannatha Dasa", kn: "ಜಗನ್ನಾಥ ದಾಸರು", hi: "जगन्नाथ दास" },
    ankita: "ಜಗನ್ನಾಥ ವಿಠಲ",
    when: { en: "18th–19th century", kn: "೧೮–೧೯ನೇ ಶತಮಾನ", hi: "१८–१९वीं सदी" },
  },
  {
    id: "basavanna",
    name: { en: "Basavanna", kn: "ಬಸವಣ್ಣ", hi: "बसवण्ण" },
    ankita: "ಕೂಡಲಸಂಗಮದೇವ",
    when: { en: "12th century", kn: "೧೨ನೇ ಶತಮಾನ", hi: "१२वीं सदी" },
  },
];

const DASA_BY_ID = new Map(HARIDASAS.map((h) => [h.id, h]));

export function haridasa(id: string | null): Haridasa | undefined {
  return id ? DASA_BY_ID.get(id) : undefined;
}

// ─────────────────────────────────────────────────────────
//  What kind of text a song is.
// ─────────────────────────────────────────────────────────

export const FORM_NAMES: Record<string, Record<Locale, string>> = {
  pada: { en: "Pada", kn: "ಪದ", hi: "पद" },
  niti: { en: "Niti pada", kn: "ನೀತಿ ಪದ", hi: "नीति पद" },
  ugabhoga: { en: "Ugabhoga", kn: "ಉಗಾಭೋಗ", hi: "उगाभोग" },
  suladi: { en: "Suladi", kn: "ಸುಳಾದಿ", hi: "सुळादि" },
  vachana: { en: "Vachana", kn: "ವಚನ", hi: "वचन" },
  stotra: { en: "Stotra", kn: "ಸ್ತೋತ್ರ", hi: "स्तोत्र" },
  ashtottara: { en: "Ashtottara", kn: "ಅಷ್ಟೋತ್ತರ", hi: "अष्टोत्तर" },
  suprabhata: { en: "Suprabhata", kn: "ಸುಪ್ರಭಾತ", hi: "सुप्रभात" },
  song: { en: "Song", kn: "ಹಾಡು", hi: "गीत" },
};
