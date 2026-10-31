// The devatas of the Rigveda, as the Anukramani names them.
//
// The harvested devata field is an attribution, not a name. It carries
// 290 distinct strings for what is a bounded set of gods, because it
// records per-verse attributions ("1-3 Vayu, 4-6 Indra-Vayu, 7-9
// Mitra-Varuna"), epithets (Agni Vaishvanara, Agni the demon-slayer),
// spelling and number variants, and subjects that are not gods at all
// (knowledge, faith, the coming-to-be).
//
// This file is the editorial layer over that field. It does two things
// and no more:
//
//   1. It names every canonical devata once, with the Sanskrit the
//      Anukramani uses, its IAST, and plain English.
//   2. It maps the PRINCIPAL devata of each hymn — the one addressed
//      in verse 1, extracted by scripts/rigveda/attribution.mjs — onto
//      one of those names.
//
// What it deliberately does NOT do is decide what a hymn is "really"
// about. The full attribution string is carried beside the principal
// and printed on the sukta's own page, so a hymn that changes devata
// mid-way says so where a reader is actually reading.
//
// Epithets fold into the god they qualify: Agni Vaishvanara, Agni
// Jatavedas and Agni the demon-slayer are all Agni, and the epithet
// survives in the printed attribution. Compound deities do not fold —
// Indragni and Mitravaruna are their own devatas, as the tradition
// treats them.

export type DevataKind = "deity" | "subject" | "hymn-type";

export type Devata = {
  /** Stable slug, used in the URL. */
  id: string;
  /** As the Anukramani writes it, in Devanagari. */
  sa: string;
  /** IAST, for English pages. */
  iast: string;
  /** Plain English. Not a translation of the name — a description. */
  en: string;
  kind: DevataKind;
};

export const DEVATAS: Devata[] = [
  // ── the gods the Rigveda returns to ────────────────────────────
  { id: "indra", sa: "इन्द्रः", iast: "Indra", en: "Indra", kind: "deity" },
  { id: "agni", sa: "अग्निः", iast: "Agni", en: "Agni", kind: "deity" },
  { id: "soma-pavamana", sa: "पवमानः सोमः", iast: "Soma Pavamāna", en: "Soma as he flows clear", kind: "deity" },
  { id: "vishve-devah", sa: "विश्वे देवाः", iast: "Viśve Devāḥ", en: "All the gods together", kind: "deity" },
  { id: "ashvins", sa: "अश्विनौ", iast: "Aśvinau", en: "The Aśvins, the twin horsemen", kind: "deity" },
  { id: "maruts", sa: "मरुतः", iast: "Marutaḥ", en: "The Maruts, the storm gods", kind: "deity" },
  { id: "mitra-varuna", sa: "मित्रावरुणौ", iast: "Mitrāvaruṇau", en: "Mitra and Varuṇa", kind: "deity" },
  { id: "ushas", sa: "उषाः", iast: "Uṣas", en: "Uṣas, the dawn", kind: "deity" },
  { id: "vayu", sa: "वायुः", iast: "Vāyu", en: "Vāyu, the wind", kind: "deity" },
  { id: "indra-agni", sa: "इन्द्राग्नी", iast: "Indrāgnī", en: "Indra and Agni", kind: "deity" },
  { id: "ribhus", sa: "ऋभवः", iast: "Ṛbhavaḥ", en: "The Ṛbhus, the craftsmen", kind: "deity" },
  { id: "savitr", sa: "सविता", iast: "Savitṛ", en: "Savitṛ, who sets things moving", kind: "deity" },
  { id: "indra-varuna", sa: "इन्द्रावरुणौ", iast: "Indrāvaruṇau", en: "Indra and Varuṇa", kind: "deity" },
  { id: "varuna", sa: "वरुणः", iast: "Varuṇa", en: "Varuṇa", kind: "deity" },
  { id: "pushan", sa: "पूषा", iast: "Pūṣan", en: "Pūṣan, who guards the roads", kind: "deity" },
  { id: "surya", sa: "सूर्यः", iast: "Sūrya", en: "Sūrya, the sun", kind: "deity" },
  { id: "brihaspati", sa: "बृहस्पतिः", iast: "Bṛhaspati", en: "Bṛhaspati", kind: "deity" },
  { id: "dyava-prithivi", sa: "द्यावापृथिवी", iast: "Dyāvāpṛthivī", en: "Heaven and Earth", kind: "deity" },
  { id: "soma", sa: "सोमः", iast: "Soma", en: "Soma", kind: "deity" },
  { id: "adityas", sa: "आदित्याः", iast: "Ādityāḥ", en: "The Ādityas", kind: "deity" },
  { id: "brahmanaspati", sa: "ब्रह्मणस्पतिः", iast: "Brahmaṇaspati", en: "Brahmaṇaspati, lord of the word", kind: "deity" },
  { id: "rudra", sa: "रुद्रः", iast: "Rudra", en: "Rudra", kind: "deity" },
  { id: "vishnu", sa: "विष्णुः", iast: "Viṣṇu", en: "Viṣṇu", kind: "deity" },
  { id: "apah", sa: "आपः", iast: "Āpaḥ", en: "The waters", kind: "deity" },
  { id: "parjanya", sa: "पर्जन्यः", iast: "Parjanya", en: "Parjanya, the rain", kind: "deity" },
  { id: "sarasvati", sa: "सरस्वती", iast: "Sarasvatī", en: "Sarasvatī", kind: "deity" },
  { id: "yama", sa: "यमः", iast: "Yama", en: "Yama", kind: "deity" },
  { id: "devah", sa: "देवाः", iast: "Devāḥ", en: "The gods", kind: "deity" },
  { id: "gravanah", sa: "ग्रावाणः", iast: "Grāvāṇaḥ", en: "The stones that press the soma", kind: "deity" },
  { id: "mitra", sa: "मित्रः", iast: "Mitra", en: "Mitra", kind: "deity" },
  { id: "ashva", sa: "अश्वः", iast: "Aśva", en: "The horse", kind: "deity" },
  { id: "shakunta", sa: "शकुन्तः", iast: "Śakunta", en: "The bird of omen", kind: "deity" },
  { id: "nadyah", sa: "नद्यः", iast: "Nadyaḥ", en: "The rivers", kind: "deity" },
  { id: "indra-vayu", sa: "इन्द्रवायू", iast: "Indravāyū", en: "Indra and Vāyu", kind: "deity" },
  { id: "gavah", sa: "गावः", iast: "Gāvaḥ", en: "The cows", kind: "deity" },
  { id: "indra-soma", sa: "इन्द्रासोमौ", iast: "Indrāsomau", en: "Indra and Soma", kind: "deity" },
  { id: "vastoshpati", sa: "वास्तोष्पतिः", iast: "Vāstoṣpati", en: "The lord of the dwelling", kind: "deity" },
  { id: "manyu", sa: "मन्युः", iast: "Manyu", en: "Manyu, battle fury", kind: "deity" },
  { id: "dadhikra", sa: "दधिक्राः", iast: "Dadhikrā", en: "Dadhikrā, the swift horse", kind: "deity" },
  { id: "ka", sa: "कः (प्रजापतिः)", iast: "Ka (Prajāpati)", en: "Ka — “who?” — understood as Prajāpati", kind: "deity" },
  { id: "varuna-mitra-aryaman", sa: "वरुणमित्रार्यमणः", iast: "Varuṇa, Mitra, Aryaman", en: "Varuṇa, Mitra and Aryaman", kind: "deity" },
  { id: "agni-soma", sa: "अग्नीषोमौ", iast: "Agnīṣomau", en: "Agni and Soma", kind: "deity" },
  { id: "apam-napat", sa: "अपांनपात्", iast: "Apāṃ Napāt", en: "The child of the waters", kind: "deity" },
  { id: "ritavah", sa: "ऋतुदेवताः", iast: "Ṛtudevatāḥ", en: "The seasons", kind: "deity" },
  { id: "soma-pushan", sa: "सोमापूषणौ", iast: "Somāpūṣaṇau", en: "Soma and Pūṣan", kind: "deity" },
  { id: "yupa", sa: "यूपः", iast: "Yūpa", en: "The sacrificial post", kind: "deity" },
  { id: "vamadeva", sa: "वामदेवः", iast: "Vāmadeva", en: "Vāmadeva", kind: "deity" },
  { id: "shyena", sa: "श्येनः", iast: "Śyena", en: "The falcon that brought the soma", kind: "deity" },
  { id: "trasadasyu", sa: "त्रसदस्युः", iast: "Trasadasyu", en: "Trasadasyu, the king", kind: "deity" },
  { id: "indra-brihaspati", sa: "इन्द्राबृहस्पती", iast: "Indrābṛhaspatī", en: "Indra and Bṛhaspati", kind: "deity" },
  { id: "kshetrapati", sa: "क्षेत्रपतिः", iast: "Kṣetrapati", en: "The lord of the field", kind: "deity" },
  { id: "prithivi", sa: "पृथिवी", iast: "Pṛthivī", en: "The earth", kind: "deity" },
  { id: "indra-pushan", sa: "इन्द्रापूषणौ", iast: "Indrāpūṣaṇau", en: "Indra and Pūṣan", kind: "deity" },
  { id: "indra-vishnu", sa: "इन्द्राविष्णू", iast: "Indrāviṣṇū", en: "Indra and Viṣṇu", kind: "deity" },
  { id: "soma-rudra", sa: "सोमारुद्रौ", iast: "Somārudrau", en: "Soma and Rudra", kind: "deity" },
  { id: "vasishtha-putrah", sa: "वसिष्ठपुत्राः", iast: "Vasiṣṭhaputrāḥ", en: "The sons of Vasiṣṭha", kind: "deity" },
  { id: "mandukah", sa: "मण्डूकाः", iast: "Maṇḍūkāḥ", en: "The frogs", kind: "deity" },
  { id: "havirdhane", sa: "हविर्धाने", iast: "Havirdhāne", en: "The two carts that carry the offering", kind: "deity" },
  { id: "pitarah", sa: "पितरः", iast: "Pitaraḥ", en: "The fathers", kind: "deity" },
  { id: "saranyu", sa: "सरण्यूः", iast: "Saraṇyū", en: "Saraṇyū", kind: "deity" },
  { id: "mrityu", sa: "मृत्युः", iast: "Mṛtyu", en: "Death", kind: "deity" },
  { id: "akshah", sa: "अक्षाः", iast: "Akṣāḥ", en: "The dice", kind: "deity" },
  { id: "nirriti", sa: "निर्ऋतिः", iast: "Nirṛti", en: "Nirṛti, ruin", kind: "deity" },
  { id: "asamati", sa: "असमातिः", iast: "Asamāti", en: "Asamāti, the king", kind: "deity" },
  { id: "vishvakarman", sa: "विश्वकर्मा", iast: "Viśvakarman", en: "Viśvakarman, who made everything", kind: "deity" },
  { id: "purusha", sa: "पुरुषः", iast: "Puruṣa", en: "Puruṣa, the cosmic person", kind: "deity" },
  { id: "urvashi", sa: "उर्वशी", iast: "Urvaśī", en: "Urvaśī", kind: "deity" },
  { id: "hari", sa: "हरिः", iast: "Hari", en: "Indra’s two bay horses", kind: "deity" },
  { id: "oshadhayah", sa: "ओषधयः", iast: "Oṣadhayaḥ", en: "The healing plants", kind: "deity" },
  { id: "drughana", sa: "द्रुघणः", iast: "Drughaṇa", en: "The wooden club", kind: "deity" },
  { id: "dakshina", sa: "दक्षिणा", iast: "Dakṣiṇā", en: "Dakṣiṇā, the gift to the priests", kind: "deity" },
  { id: "sarama", sa: "सरमा", iast: "Saramā", en: "Saramā, Indra’s messenger", kind: "deity" },
  { id: "vena", sa: "वेनः", iast: "Vena", en: "Vena", kind: "deity" },
  { id: "ratri", sa: "रात्रिः", iast: "Rātri", en: "Rātri, the night", kind: "deity" },
  { id: "aranyani", sa: "अरण्यानी", iast: "Araṇyānī", en: "Araṇyānī, the spirit of the forest", kind: "deity" },
  { id: "shachi", sa: "शची", iast: "Śacī", en: "Śacī", kind: "deity" },
  { id: "tarkshya", sa: "तार्क्ष्यः", iast: "Tārkṣya", en: "Tārkṣya, the swift steed", kind: "deity" },

  // ── subjects the Anukramani names in the devata slot ───────────
  // These are traditional and correct: not every hymn is addressed to
  // a god, so the section headings on this site are not all gods.
  { id: "bhava-vrittam", sa: "भाववृत्तम्", iast: "Bhāvavṛttam", en: "How things came to be", kind: "subject" },
  { id: "atma", sa: "आत्मा", iast: "Ātman", en: "The self", kind: "subject" },
  { id: "jnanam", sa: "ज्ञानम्", iast: "Jñānam", en: "Knowledge", kind: "subject" },
  { id: "shraddha", sa: "श्रद्धा", iast: "Śraddhā", en: "Faith", kind: "subject" },
  { id: "rajan", sa: "राजा", iast: "Rājā", en: "The king", kind: "subject" },
  { id: "dana-stuti", sa: "दानस्तुतिः", iast: "Dānastuti", en: "Praise of a patron’s gift", kind: "subject" },
  { id: "rati", sa: "रतिः", iast: "Rati", en: "Love", kind: "subject" },
  { id: "annam", sa: "अन्नम्", iast: "Annam", en: "Food", kind: "subject" },
  { id: "apa-trina-surya", sa: "अप्तृणसूर्याः", iast: "Aptṛṇasūryāḥ", en: "The waters, the grass and the sun, against poison", kind: "subject" },
  { id: "yajna", sa: "यज्ञः", iast: "Yajña", en: "The sacrifice and the one who offers it", kind: "subject" },
  { id: "manas-avartanam", sa: "मन आवर्तनम्", iast: "Mana āvartanam", en: "Calling the mind back", kind: "subject" },
  { id: "dhana-anna-danam", sa: "धनान्नदानम्", iast: "Dhanānnadānam", en: "The giving of wealth and food", kind: "subject" },
  { id: "samgrama-angani", sa: "संग्रामाङ्गानि", iast: "Saṃgrāmāṅgāni", en: "The weapons of war", kind: "subject" },
  { id: "sapatni-badhanam", sa: "सपत्नीबाधनम्", iast: "Sapatnībādhanam", en: "Against a rival wife", kind: "subject" },
  { id: "alakshmi-ghnam", sa: "अलक्ष्मीघ्नम्", iast: "Alakṣmīghnam", en: "Against ill fortune", kind: "subject" },
  { id: "yakshma-nashanam", sa: "यक्ष्मनाशनम्", iast: "Yakṣmanāśanam", en: "Against wasting sickness", kind: "subject" },
  { id: "duhsvapna-nashanam", sa: "दुःस्वप्ननाशनम्", iast: "Duḥsvapnanāśanam", en: "Against bad dreams", kind: "subject" },
  { id: "sapatna-ghnam", sa: "सपत्नघ्नम्", iast: "Sapatnaghnam", en: "Against a rival", kind: "subject" },
  { id: "maya-bhedah", sa: "मायाभेदः", iast: "Māyābhedaḥ", en: "The undoing of illusion", kind: "subject" },
  { id: "yajamana", sa: "यजमानः", iast: "Yajamāna", en: "The one who offers the sacrifice", kind: "subject" },

  // ── a hymn type, not a devata ──────────────────────────────────
  { id: "apri", sa: "आप्रीसूक्तम्", iast: "Āprīsūktam", en: "An Āprī hymn, calling eleven or twelve powers in fixed order", kind: "hymn-type" },
];

/**
 * Principal devata (as scripts/rigveda/attribution.mjs extracts it) to
 * canonical id. Every distinct principal in the harvest appears here;
 * the build fails on one that does not, so a re-harvest cannot quietly
 * introduce an unmapped god.
 */
export const DEVATA_FROM_PRINCIPAL: Record<string, string> = {
  "इन्द्रः": "indra",
  "अग्निः": "agni",
  "पवमानः सोमः": "soma-pavamana",
  "विश्वे देवाः": "vishve-devah",
  "विश्वेदेवाः": "vishve-devah",
  "विश्वे देवा": "vishve-devah",
  "अश्विनौ": "ashvins",
  "मरुतः": "maruts",
  "मरुत्": "maruts",
  "मरुतोऽग्नमरुतौ": "maruts",
  "मित्रावरुणौ": "mitra-varuna",
  "उषाः": "ushas",
  "उषसः": "ushas",
  "उषाः रात्रिश्च": "ushas",
  "वायुः": "vayu",
  "इन्द्राग्नी": "indra-agni",
  "इ्न्द्राग्नी": "indra-agni", // the source’s own typo, kept and mapped
  "ऋभवः": "ribhus",
  "सविता": "savitr",
  "इन्द्रावरुणौ": "indra-varuna",
  "वरुणः": "varuna",
  "पूषा": "pushan",
  "सूर्यः": "surya",
  "बृहस्पतिः": "brihaspati",
  "ब्रह्मणस्पतिः": "brahmanaspati",
  "द्यावापृथिवी": "dyava-prithivi",
  "द्यावापृथिव्यौ": "dyava-prithivi",
  "सोमः": "soma",
  "आदित्याः": "adityas",
  "आदित्यः /अदितिः": "adityas",
  "रुद्रः": "rudra",
  "विष्णुः": "vishnu",
  "विष्णु-त्वष्टृ-प्रजापति-धातारः": "vishnu",
  "आपः": "apah",
  "पर्जन्यः": "parjanya",
  "सरस्वती": "sarasvati",
  "यमः": "yama",
  "देवाः": "devah",
  "ग्रावाणः": "gravanah",
  "मित्रः": "mitra",
  "अश्वः": "ashva",
  "शकुन्तः": "shakunta",
  "नद्यः": "nadyah",
  "इन्द्रवायू": "indra-vayu",
  "गावः": "gavah",
  "इन्द्रासोमौ": "indra-soma",
  "वास्तोष्पतिः": "vastoshpati",
  "मन्युः": "manyu",
  "राजा": "rajan",
  "दधिक्राः": "dadhikra",
  "दधिक्रा": "dadhikra",
  "कः": "ka",
  "वरुणमित्रार्यमणः": "varuna-mitra-aryaman",
  "अग्नीषोमौ": "agni-soma",
  "अपांनपात्": "apam-napat",
  "सोमापूषणौ": "soma-pushan",
  "यूपः": "yupa",
  "वामदेवः": "vamadeva",
  "श्येनः": "shyena",
  "त्रसदस्युः": "trasadasyu",
  "इन्द्राबृहस्पती": "indra-brihaspati",
  "क्षेत्रपतिः": "kshetrapati",
  "पृथिवी": "prithivi",
  "इन्द्रापूषणौ": "indra-pushan",
  "इन्द्राविष्णू": "indra-vishnu",
  "सोमारुद्रौ": "soma-rudra",
  "वसिष्ठपुत्राः इन्द्रो": "vasishtha-putrah",
  "मण्डूकाः": "mandukah",
  "हविर्धाने": "havirdhane",
  "पितरः": "pitarah",
  "सरण्यूः": "saranyu",
  "मृत्युः": "mrityu",
  "अक्षाः": "akshah",
  "निर्ऋतिः": "nirriti",
  "असमातिः": "asamati",
  "विश्वकर्मा": "vishvakarman",
  "पुरुषः": "purusha",
  "उर्वशी": "urvashi",
  "हरिः": "hari",
  "ओषधयः": "oshadhayah",
  "द्रुघण": "drughana",
  "दक्षिणा": "dakshina",
  "सरमा देवता": "sarama",
  "वेनः": "vena",
  "रात्रिः": "ratri",
  "अरण्यानी": "aranyani",
  "शची": "shachi",
  "तार्क्ष्यः": "tarkshya",

  // Epithets of Agni. The epithet survives in the printed attribution.
  "वैश्वानरोऽग्निः": "agni",
  "अग्निर्वैश्वानरः": "agni",
  "सूर्य-वैश्वानरो अग्निः": "agni",
  "जातवेदा अग्निः": "agni",
  "रक्षोहाऽग्निः": "agni",
  "रक्षोहाग्निः": "agni",
  "रक्षोहा": "agni",
  "अग्निर्मरुतश्च": "agni",
  "अग्निः मध्यमोग्निर्वा": "agni",
  "अग्नीन्द्रमित्रावरुणाश्विभगपूषब्रह्मणस्पतिसोमरुद्राः": "agni",

  // Epithets of Indra.
  "मरुत्वानिन्द्रः": "indra",
  "वैकुण्ठ इन्द्रः": "indra",
  "इन्द्रो विश्वे देवा": "indra",

  // Apri hymns, under each spelling the source uses.
  "आप्रीसूक्तं": "apri",
  "आप्री सूक्तं": "apri",
  "आप्रीसूक्तं - १ इध्मः समिद्धोऽग्निर्वा": "apri",

  // The seasons, under both spellings.
  "ऋतुदेवताः - १ इन्द्रो मधुश्च": "ritavah",
  "ऋतुदेवताः १-४ द्रविणोदा ऋतवश्च": "ritavah",

  // Subjects.
  "भाववृत्तम्": "bhava-vrittam",
  "आत्मा": "atma",
  "स्वनयस्य दानस्तुतिः": "dana-stuti",
  "स्वनयो भावयव्यः": "dana-stuti",
  "रतिः": "rati",
  "अन्नं": "annam",
  "अप्तृणसूर्याः": "apa-trina-surya",
  "यज्ञः यजमानश्च": "yajna",
  "मन आवर्तनम्": "manas-avartanam",
  "धनान्नदानं": "dhana-anna-danam",
  "सपत्नीबाधनम्": "sapatni-badhanam",
  "अलक्ष्मीघ्नम्": "alakshmi-ghnam",
  "यक्ष्मनाशनम्": "yakshma-nashanam",
  "दुःस्वप्ननाशनम्": "duhsvapna-nashanam",
  "सपत्नघ्नम्": "sapatna-ghnam",
  "मायाभेदः": "maya-bhedah",
  "यजमानः": "yajamana",
};
