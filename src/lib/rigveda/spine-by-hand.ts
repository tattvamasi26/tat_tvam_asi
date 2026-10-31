// Rishi and metre read by hand.
//
// sa.wikisource's per-sukta header gives the rishi in an `author`
// field and the devata and metre in `notes`. For most hymns that is
// enough, and for a further handful the notes carry the value behind
// its own marker — `r.` for the rishi, `ch.` for the chandas — which
// the build reads.
//
// What is left are hymns whose header genuinely does not state one of
// the three. Sayana states all of them, at the head of his commentary,
// and these were read there one at a time. Each entry quotes the
// clause it was read from, so the claim can be checked without
// rerunning anything.
//
// One entry is not read from a text at all: RV 10.136's metre. Neither
// Sayana nor the Anukramani names it, because by their own convention
// an unstated metre continues from the hymn before. That entry says so
// in its witness and is marked `counted`, not attributed to a source
// that does not make the claim.

export type SpineSource = "sayana" | "anukramani" | "counted";

export type SpineByHand = {
  /** "6.68" */
  ref: string;
  /** The clause this was read from, quoted as the source writes it. */
  witness: string;
  source: SpineSource;
};

export const RISHIS_BY_HAND: (SpineByHand & { rishi: string })[] = [
  {
    ref: "5.44",
    rishi: "अवत्सारः काश्यपः",
    witness: "अवत्सारो नाम ऋषिः स च कश्यपगोत्रः ।",
    source: "sayana",
  },
  {
    ref: "6.68",
    rishi: "बार्हस्पत्यो भरद्वाजः",
    witness: "इत्येकादशर्चं सप्तमं सूक्तं भरद्वाजस्यार्षं त्रैष्टुभमैन्द्रावरुणम् ।",
    source: "sayana",
  },
  {
    ref: "10.10",
    rishi: "वैवस्वती यमी (नवमीवर्ज्यानामयुजां षष्ठ्याश्च); शिष्टानां वैवस्वतो यमः",
    witness:
      "विवस्वतः पुत्री यम्यृषिर्यमो देवता … तथा नवम्यां द्वितीयाचतुर्थीप्रभृतिषु युक्षु वैवस्वतो यम ऋषिर्यमी देवता ।",
    source: "sayana",
  },
];

export const METRES_BY_HAND: (SpineByHand & { metre: string })[] = [
  {
    ref: "5.44",
    metre: "जगती, १४-१५ त्रिष्टुप्",
    witness: "चतुर्दशीपञ्चदश्यौ त्रिष्टुभौ शिष्टास्त्रिष्टुबन्तपरिभाषया जगत्यः ।",
    source: "sayana",
  },
  {
    ref: "6.68",
    metre: "त्रिष्टुप्, ९-१० जगती",
    witness: "‘प्र सम्राजे', ‘इन्द्रावरुणा सुतपौ' इत्येते जगत्यौ शिष्टास्त्रिष्टुभः ।",
    source: "sayana",
  },
  {
    ref: "7.32",
    metre: "प्रगाथः — अयुजो बृहत्यः, युजः सतोबृहत्यः; ३ द्विपदा विराट्",
    witness: "अयुजो बृहत्यो युजः सतोबृहत्यः । तृतीया तु द्विपदा विराट् ।",
    source: "sayana",
  },
  {
    ref: "8.1",
    metre: "बार्हतः प्रगाथः, अन्त्ये द्वे त्रिष्टुभौ",
    witness: "ऐन्द्रं बार्हतं द्विप्रगाथादि द्वित्रिष्टुबन्तम् ।",
    source: "anukramani",
  },
  {
    ref: "8.102",
    metre: "गायत्री",
    witness: "इति द्वाविंशत्यृचं नवमं सूक्तं गायत्रमाग्नेयम् ।",
    source: "sayana",
  },
  {
    ref: "9.67",
    metre: "गायत्री (१-३ द्विपदा गायत्री, ३० पुरउष्णिक्, तिस्रोऽनुष्टुभः)",
    witness:
      "‘पवस्व सोम मन्दयन्' इत्याद्यास्तिस्रो द्विपदा गायत्र्यः । ‘अलाय्यस्य' इत्येषा त्रिंशी पुरउष्णिक् … शिष्टा गायत्र्यः ।",
    source: "sayana",
  },
  {
    ref: "9.86",
    metre: "जगती",
    witness: "जगती छन्दः ।",
    source: "sayana",
  },
  {
    ref: "9.97",
    metre: "त्रिष्टुप्",
    witness: "इत्यष्टापञ्चाशदृचं प्रथमं सूक्तं त्रैष्टुभं पवमानसोमदेवताकम् ।",
    source: "sayana",
  },
  {
    ref: "9.101",
    metre: "अनुष्टुप्, २-३ गायत्री",
    witness: "द्वितीयतृतीये गायत्र्यौ शिष्टाश्चतुर्दशानुष्टुभः ।",
    source: "sayana",
  },
  {
    ref: "9.107",
    metre: "प्रगाथः — बृहती, सतोबृहती; ३ भुरिग्विराड् द्विपदा, १६ द्विपदा विराट्",
    witness:
      "आद्या बृहती द्वितीया सतोबृहती । अयमेकः प्रगाथः । ‘परि सुवानः' इत्येषा तृतीयैकविंशत्यक्षरा भुरिग्विराड् द्विपदा । ‘नृभिर्येमानः' इति षोडशी विंशत्यक्षरा द्विपदा विराट् ।",
    source: "sayana",
  },
  {
    ref: "9.108",
    metre: "प्रगाथः — अयुजः ककुभः, युजः सतोबृहत्यः; ‘स सुन्वे यो वसूनाम्' यवमध्या गायत्री",
    witness:
      "प्रथमातृतीयाद्या अयुजः ककुभः । द्वितीयाचतुर्थ्याद्या युजः सतोबृहत्यः । ‘स सुन्वे यो वसूनाम्' इत्येषा तु यवमध्या गायत्री ।",
    source: "sayana",
  },
  {
    ref: "10.28",
    metre: "त्रिष्टुप्",
    witness: "‘विश्वो हि' इति द्वादशर्चं द्वादशं सूक्तं त्रैष्टुभम् ।",
    source: "sayana",
  },
  {
    ref: "10.136",
    metre: "अनुष्टुप्",
    witness:
      "Neither Sayana nor the Anukramani names a metre for this hymn: by their convention an unstated metre continues from the hymn before, and 10.135 is anustubh. All seven verses are printed as two lines of sixteen syllables, which is anustubh.",
    source: "counted",
  },
];
