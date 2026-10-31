// The twenty-five suktas whose devata the Anukramani notes do not give.
//
// sa.wikisource's per-sukta header carries the devata for 1,003 of the
// 1,028 hymns. For the other 25 the notes field holds something else —
// usually a complicated rishi attribution — and for RV 6.68 there are
// no notes at all.
//
// None of them needs an outside source. Sayana opens his commentary on
// every hymn by stating its rishi, devata, metre and verse count, and
// all 1,028 bhashya blocks are harvested. These were READ, one at a
// time, not parsed: the statements take a dozen grammatical forms
// (indravarunau devata, traishtubham aindram, vishvakarmadevatyam,
// kashabdabhidheyah prajapatir devata) and no regex would catch that
// set honestly.
//
// Each entry therefore carries the exact clause it was read from, so
// the claim can be checked against the source without rerunning
// anything. Where the Anukramani itself states the devata plainly but
// outside the field the harvester reads, the witness is that line and
// the source is the Anukramani.
//
// RV 9.101 is not really a gap: its page does say "de. pavamanah
// somah", but below the header template the harvester parsed.

export type DevataByHand = {
  /** "6.68" */
  ref: string;
  /** Canonical id, from DEVATAS. */
  devataId: string;
  /** The attribution to print on the sukta's page, in Devanagari. */
  attribution: string;
  /** The clause this was read from, quoted as the source writes it. */
  witness: string;
  source: "sayana" | "anukramani";
};

export const DEVATAS_BY_HAND: DevataByHand[] = [
  {
    ref: "5.44",
    devataId: "vishve-devah",
    attribution: "विश्वे देवाः",
    witness: "विश्वे देवा देवता ।",
    source: "sayana",
  },
  {
    ref: "6.68",
    devataId: "indra-varuna",
    attribution: "इन्द्रावरुणौ",
    witness: "इत्येकादशर्चं सप्तमं सूक्तं भरद्वाजस्यार्षं त्रैष्टुभमैन्द्रावरुणम् । … इन्द्रावरुणौ देवता ।",
    source: "sayana",
  },
  {
    ref: "6.75",
    devataId: "samgrama-angani",
    attribution: "संग्रामाङ्गानि — वर्म, धनुः, ज्या, आर्त्नी, इषुधिः, सारथिः, रश्मयः, अश्वाः, रथः, रथगोपाः, इषवः, प्रतोदः, हस्तघ्नः",
    witness: "संग्रामाङ्गान्यृक्शोऽभितुष्टाव वर्म धनुर्ज्यामार्त्नी इषुधिं … लिङ्गोक्तदेवताः संग्रामाशिषः",
    source: "sayana",
  },
  {
    ref: "7.32",
    devataId: "indra",
    attribution: "इन्द्रः",
    witness: "इन्द्रो देवता ।",
    source: "sayana",
  },
  {
    ref: "8.1",
    devataId: "indra",
    attribution: "इन्द्रः",
    witness: "कृत्स्नस्य सूक्तस्येन्द्रो देवता ।",
    source: "sayana",
  },
  {
    ref: "8.102",
    devataId: "agni",
    attribution: "अग्निः",
    witness: "इति द्वाविंशत्यृचं नवमं सूक्तं गायत्रमाग्नेयम् ।",
    source: "sayana",
  },
  {
    ref: "9.67",
    devataId: "soma-pavamana",
    attribution: "पवमानः सोमः",
    witness: "शिष्टाः सर्वाः पवमानसोमदेवताकाः ।",
    source: "sayana",
  },
  {
    ref: "9.86",
    devataId: "soma-pavamana",
    attribution: "पवमानः सोमः",
    witness: "पवमानः सोमो देवता ।",
    source: "sayana",
  },
  {
    ref: "9.97",
    devataId: "soma-pavamana",
    attribution: "पवमानः सोमः",
    witness: "इत्यष्टापञ्चाशदृचं प्रथमं सूक्तं त्रैष्टुभं पवमानसोमदेवताकम् ।",
    source: "sayana",
  },
  {
    ref: "9.101",
    devataId: "soma-pavamana",
    attribution: "पवमानः सोमः",
    witness: "दे. पवमानः सोमः।",
    source: "anukramani",
  },
  {
    ref: "9.107",
    devataId: "soma-pavamana",
    attribution: "पवमानः सोमः",
    witness: "पवमानः सोमो देवता ।",
    source: "sayana",
  },
  {
    ref: "9.108",
    devataId: "soma-pavamana",
    attribution: "पवमानः सोमः",
    witness: "पवमानः सोमो देवता ।",
    source: "sayana",
  },
  {
    ref: "10.28",
    devataId: "indra",
    attribution: "इन्द्रः (इन्द्रवसुक्रयोः संवादः)",
    witness: "अतस्तस्याः सर्षिः इन्द्रो देवता ।",
    source: "sayana",
  },
  {
    ref: "10.71",
    devataId: "jnanam",
    attribution: "ज्ञानम्",
    witness: "ज्ञानम् । त्रिष्टुप्, ९ जगती",
    source: "anukramani",
  },
  {
    ref: "10.81",
    devataId: "vishvakarman",
    attribution: "विश्वकर्मा",
    witness: "इति सप्तर्चं त्रयोदशं सूक्तं भुवनपुत्रस्य विश्वकर्मण आर्षं त्रैष्टुभं विश्वकर्मदेवत्यम् ।",
    source: "sayana",
  },
  {
    ref: "10.91",
    devataId: "agni",
    attribution: "अग्निः",
    witness: "इति पञ्चदशर्चं प्रथमं सूक्तं वीतहव्यपुत्रस्यारुणनाम्न आर्षमग्निदेवत्यम् ।",
    source: "sayana",
  },
  {
    ref: "10.111",
    devataId: "indra",
    attribution: "इन्द्रः",
    witness: "इति दशर्चं द्वादशं सूक्तं वैरूपस्याष्ट्रादंष्ट्रस्यार्षं त्रैष्टुभमैन्द्रम् ।",
    source: "sayana",
  },
  {
    ref: "10.121",
    devataId: "ka",
    attribution: "कः (प्रजापतिः)",
    witness: "कशब्दाभिधेयः प्रजापतिर्देवता ।",
    source: "sayana",
  },
  {
    ref: "10.136",
    devataId: "agni",
    attribution: "अग्निः, सूर्यः, वायुः (कैशिनम् — केशी मुनिः)",
    witness: "इति सप्तर्चमष्टमं सूक्तमग्निसूर्यवायुदेवताकम् ।",
    source: "sayana",
  },
  {
    ref: "10.141",
    devataId: "vishve-devah",
    attribution: "विश्वे देवाः",
    witness: "इति षडृचं त्रयोदशं सूक्तं तापसगुणविशिष्टस्याग्नेरार्षं वैश्वदेवमनुष्टुभम् ।",
    source: "sayana",
  },
  {
    ref: "10.151",
    devataId: "shraddha",
    attribution: "श्रद्धा",
    witness: "इति पञ्चर्चं त्रयोविंशं सूक्तमानुष्टुभं श्रद्धादेवत्यम् ।",
    source: "sayana",
  },
  {
    ref: "10.161",
    devataId: "indra-agni",
    attribution: "इन्द्राग्नी, राजयक्ष्मघ्नं वा",
    witness: "इन्द्राग्नी, राजयक्ष्मघ्नं वा । त्रिष्टुप्, ५ अनुष्टुप्।",
    source: "anukramani",
  },
  {
    ref: "10.171",
    devataId: "indra",
    attribution: "इन्द्रः",
    witness: "इति चतुर्ऋचं विंशं सूक्तं भृगुपुत्रस्येटस्यार्षं गायत्रमैन्द्रम् ।",
    source: "sayana",
  },
  {
    ref: "10.181",
    devataId: "vishve-devah",
    attribution: "विश्वे देवाः",
    witness: "इति तृचं त्रिंशं सूक्तं वैश्वदेवं त्रैष्टुभम् ।",
    source: "sayana",
  },
  {
    ref: "10.191",
    devataId: "agni",
    attribution: "अग्निः, २-४ संज्ञानम्",
    witness: "प्रथमाया अग्निर्देवता । शिष्टानां संज्ञानम् ।",
    source: "sayana",
  },
];
