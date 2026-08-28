import type { Locale } from "./config";

// ─────────────────────────────────────────────────────────
//  The Kollur Mookambika guide.
//
//  This page was hand-authored in English with every sentence
//  written straight into the JSX, so it stayed English no matter
//  what language the rest of the site was in — the last page on
//  the site that did not answer the language switcher.
//
//  The prose lives here rather than in ui.ts because it belongs to
//  one page and would otherwise triple the size of the site-wide
//  dictionary. It is shaped like the page, not like a flat string
//  table, so a translator can see what each passage sits next to.
//
//  Note what deliberately does NOT get translated: the temple's
//  Kannada name in the masthead, the closing "ಜಯ ಮೂಕಾಂಬಿಕೆ", the
//  address, the phone number and the website. Those are the
//  temple's own identity and contact details, not prose about it.
// ─────────────────────────────────────────────────────────

export interface Named {
  name: string;
  desc: string;
}

export interface KollurContent {
  backTemples: string;
  region: string;
  title: string;
  tagline: string;
  facts: [string, string][];
  quote: string;

  kathaEyebrow: string;
  kathaTitle: string;
  demonTitle: string;
  demonP1: string;
  demonP2: string;
  shankaraTitle: string;
  shankaraP1: string;
  shankaraP2: string;

  deityEyebrow: string;
  deityTitle: string;
  deityBody: string;
  forms: { time: string; form: string; aspect: string }[];
  deepaTitle: string;
  deepaBody: string;

  agamaEyebrow: string;
  agamaTitle: string;
  agamaIntro: string;
  practices: { title: string; desc: string }[];

  scheduleEyebrow: string;
  scheduleTitle: string;
  rituals: { time: string; name: string; desc: string }[];
  timingsTitle: string;
  timings: [string, string][];

  festivalsEyebrow: string;
  festivalsTitle: string;
  festivals: { name: string; when: string; desc: string }[];

  landEyebrow: string;
  landTitle: string;
  landP1: string;
  landP2: string;
  places: [string, string][];

  visitEyebrow: string;
  visitTitle: string;
  addressLabel: string;
  bestTimeLabel: string;
  bestTime: { strong: string; rest: string }[];
  travel: { mode: string; detail: string }[];

  captions: {
    flowers: string;
    flowersSub: string;
    gold: string;
    goldSub: string;
    silver: string;
    silverSub: string;
    deepa: string;
    deepaSub: string;
  };
  alts: { hero: string; flowers: string; gold: string; silver: string; deepa: string };

  allTemples: string;
  nextTemple: string;
}

const en: KollurContent = {
  backTemples: "← Temples of Tulunadu",
  region: "Tulunadu · Udupi District · Karnataka",
  title: "Sri Mookambika Temple",
  tagline: "Kollur · One of the Seven Mukti Sthalas of Parashurama Kshetra",
  facts: [
    ["Deity", "Mookambika Devi"],
    ["Form", "Adi Parashakti — Tridevi"],
    ["Temple Age", "~1200 years"],
    ["Established by", "Adi Shankaracharya"],
    ["River", "Souparnika"],
    ["Hills", "Kodachadri"],
  ],
  quote:
    "She is not worshipped as one goddess but three — Saraswati at dawn, Lakshmi at noon, Parvati at dusk. The same form, three truths. This is the teaching of Kollur.",

  kathaEyebrow: "Puranika Katha",
  kathaTitle: "The Story of Mookambika",
  demonTitle: "The Demon Who Could Not Speak",
  demonP1:
    "A demon named Kaumasura undertook severe penance to propitiate Lord Shiva, seeking an invincible boon. Sensing the danger, Saraswati herself intervened and rendered the demon mute. Unable to speak his boon, Kaumasura became Mookasura — mooka meaning dumb.",
  demonP2:
    "Even voiceless, Mookasura was formidable. He defeated Indra and subjected the three worlds to chaos. The Trimurti called upon the Tridevi to create a form to defeat the asura. Their combined energies became Mookambika — the one who silenced the mute demon.",
  shankaraTitle: "Adi Shankaracharya and the Goddess Who Stayed",
  shankaraP1:
    "In the 8th century, Adi Shankaracharya traversed the Kodachadri hills and encountered the divine presence of Mookambika. He wished to bring her to Kerala. She agreed to follow — on one condition: he must walk ahead without looking back, guided only by the sound of her anklets.",
  shankaraP2:
    "He walked. The anklets rang. Then suddenly — silence. Doubt overtook him. He looked back. The goddess chose to remain at Kollur. But because of his austerities, she also agreed to be present at Chottanikkara in Kerala. Even today, Chottanikkara's doors open only after Kollur's — this daily rhythm maintained for over twelve centuries.",

  deityEyebrow: "The Deity",
  deityTitle: "Who is Mookambika?",
  deityBody:
    "Mookambika is the fusion of Adipara Shakti and Parabrahma — the integration of Maha Kali, Maha Lakshmi, and Maha Saraswati in a single form. She is not one of the Tridevi. She is all three, simultaneously, at the same altar.",
  forms: [
    { time: "Dawn", form: "Saraswati", aspect: "Knowledge, Speech & Learning" },
    { time: "Noon", form: "Lakshmi", aspect: "Abundance, Grace & Prosperity" },
    { time: "Dusk", form: "Parvati", aspect: "Power, Devotion & Liberation" },
  ],
  deepaTitle: "The Deepasthambha",
  deepaBody:
    "The lamp tower at the temple entrance has its base shaped like a tortoise's head with 21 concentric circles. When all lamps are lit and viewed from a distance, they appear similar to the divine Makara Jyothi of Sabarimala. The golden Dwajasthambha (flag mast) beside it marks the axis of the temple's sacred space.",

  agamaEyebrow: "Agama Shastra",
  agamaTitle: "The Science of Worship",
  agamaIntro:
    "The Vijayagama system — prescribed by Adi Shankaracharya — governs every ritual at Kollur to this day. Every gesture, every substance, every time of day has a reason rooted in Vedic cosmology.",
  practices: [
    {
      title: "Trikala Pooja",
      desc: "Three daily worship sessions — Saraswati at dawn, Lakshmi at noon, Parvati at dusk. The same deity, three truths.",
    },
    {
      title: "Panchamrutha Abhishekam",
      desc: "Ritual bathing in five sacred substances: milk for purity, honey for sweetness, ghee for illumination, curd for nourishment, sugarcane juice for abundance.",
    },
    {
      title: "Sri Chakra Worship",
      desc: "The Devi stands on a Sri Chakra Yantra installed by Adi Shankara. Worship of the idol is simultaneously worship of the yantra — the geometric body of the goddess.",
    },
    {
      title: "Vidyarambham",
      desc: "Children's first letters are written here, guided by the priest's hand. As the goddess of speech, Mookambika presides over all beginnings of learning.",
    },
    {
      title: "Anna Prashana",
      desc: "An infant's first solid food is offered before the goddess. Two of life's most sacred beginnings — speech and food — consecrated at Kollur.",
    },
    {
      title: "Bali Pooja",
      desc: "Offerings made to the guardian energies of the temple complex — acknowledging that the sacred space is inhabited by many presences.",
    },
  ],

  scheduleEyebrow: "Daily Schedule",
  scheduleTitle: "Rituals of the Day",
  rituals: [
    {
      time: "5:00 AM",
      name: "Nirmalya Pooja",
      desc: "The day begins before dawn. The Swayambhu Lingam is revealed — the only time the raw linga is directly visible to early devotees.",
    },
    {
      time: "6:30 AM",
      name: "Suprabhatha Seva",
      desc: "The goddess is awakened with Vedic hymns. The morning invocation prepares the sanctum for the day's worship.",
    },
    {
      time: "6:00 – 8:00 AM",
      name: "Srinagara Pooja",
      desc: "The goddess is adorned with fresh flowers, new silks, and ornaments — the divine mother dressed for the day.",
    },
    {
      time: "7:30 AM",
      name: "Panchamrutha Abhishekam",
      desc: "The deity is bathed in five sacred substances — milk, curd, ghee, honey, and sugarcane juice.",
    },
    {
      time: "8:00 AM",
      name: "Mangala Aarati",
      desc: "The first full aarati of the day. Lamps waved before the goddess as priests chant the Chamundi Ashtakam.",
    },
    {
      time: "9:00 AM",
      name: "Nityotsava Pooja",
      desc: "Daily festival worship with food offerings, Vedic chanting, and sahasranama archana per the Vijayagama system.",
    },
    {
      time: "12:30 PM",
      name: "Mahamangala Aarati",
      desc: "The great midday aarati. The goddess is worshipped as Lakshmi at noon, representing abundance and sustenance.",
    },
    {
      time: "6:30 PM",
      name: "Pradosha Pooja",
      desc: "As dusk falls, evening worship begins. The goddess transforms into Parvati. The lamps multiply, the chanting deepens.",
    },
    {
      time: "8:00 PM",
      name: "Kashya Mangala Aarati",
      desc: "The final aarati of the day. The goddess is bid goodnight. The lamp continues to burn through the night.",
    },
  ],
  timingsTitle: "Darshan Timings",
  timings: [
    ["Morning Darshan", "5:00 AM – 1:00 PM"],
    ["Evening Darshan", "3:00 PM – 9:00 PM"],
    ["Temple Open", "5:00 AM – 9:00 PM"],
    ["Special Days", "Extended during Navaratri & Rathotsava"],
  ],

  festivalsEyebrow: "Sacred Celebrations",
  festivalsTitle: "Festivals & Significance",
  festivals: [
    {
      name: "Navaratri",
      when: "Ashwin (Sep–Oct)",
      desc: "The nine nights of the goddess — the most significant festival at Kollur. Chandi Homam, Sahasranama Archana, and special processions mark each night. Vijayadashami marks the victory of Mookambika over Mookasura — the very event for which this temple exists.",
    },
    {
      name: "Rathotsava",
      when: "Phalguna (Feb–Mar)",
      desc: "The chariot festival. The goddess is placed in the great wooden chariot and pulled through the temple streets. The silver palanquin seen in these photographs is used during the procession. Moola Nakshatra in this month is observed as Devi's birthday.",
    },
    {
      name: "Shivaratri",
      when: "Magha (Feb–Mar)",
      desc: "As the Jyotirlinga represents both Shiva and Shakti, Mahashivaratri is observed with special midnight worship of the Swayambhu Linga — the only night when the raw linga is accessible to devotees in the pre-dawn darkness.",
    },
  ],

  landEyebrow: "The Sacred Land",
  landTitle: "Kollur & its Surroundings",
  landP1:
    "The temple is at the base of Kodachadri Hills, on the southern bank of the Souparnika River — named for Garuda (Suparna) who performed penance on its banks. The Western Ghats rise behind the town, creating a natural valley of unbroken sanctity.",
  landP2:
    "Kollur is one of the Seven Mukti Sthalas of Parashurama Kshetra — alongside Udupi, Subrahmanya, Kumbasi, Kodeshwara, Sankaranarayana, and Gokarna. To visit all seven is a complete traversal of Tulunadu's sacred geography.",
  places: [
    ["Souparnika River", "Sacred river beside the temple. Ritual bath here before darshan."],
    ["Kodachadri Hills", "The hills from which Shankaracharya descended with Mookambika."],
    ["Marana Katte", "The spot where Devi slew Mookasura — sub-shrine within the complex."],
    ["Shankaracharya Peetha", "Western side of sanctum where Shankara sat in meditation."],
    ["Saraswathi Mantapam", "Southern mandapa — Vidyarambham and Anna Prashana performed here."],
  ],

  visitEyebrow: "Plan Your Visit",
  visitTitle: "Getting There",
  addressLabel: "Address",
  bestTimeLabel: "Best Time to Visit",
  bestTime: [
    { strong: "October – March", rest: " — pleasant weather, ideal for the surrounding hills." },
    { strong: "Avoid June – September", rest: " — heavy monsoon in the Western Ghats." },
    { strong: "Weekdays", rest: " — darshan in under 15 minutes vs 60+ on weekends." },
  ],
  travel: [
    {
      mode: "By Air",
      detail: "Mangalore International Airport — 135 km. Taxi via Udupi approx 2.5 hours through the Western Ghats.",
    },
    {
      mode: "By Train",
      detail: "Kundapura Railway Station — 40 km. Byndoor Station — 28 km. Buses and taxis to Kollur from both.",
    },
    {
      mode: "By Road",
      detail: "NH 169 from Mangalore (135 km). KSRTC buses from Udupi (60 km), Mangalore, and Shimoga.",
    },
    {
      mode: "Dress Code",
      detail: "Men: white dhoti preferred. Women: traditional dress required. Footwear removed before inner sanctum.",
    },
    {
      mode: "Stay",
      detail: "Four temple guest houses within walking distance. ₹200–₹600/night. Advance booking needed during Navaratri.",
    },
  ],

  captions: {
    flowers: "Flower offerings at the entrance",
    flowersSub: "Lotus, jasmine and chrysanthemum — offered before darshan",
    gold: "Sri Mookambika Devi — adorned in gold",
    goldSub: "The Panchaloha idol on Sri Chakra · Kollur sanctum",
    silver: "Devi in the silver palanquin",
    silverSub: "During the Rathotsava procession",
    deepa: "Deepasthambha & Dwajasthambha",
    deepaSub: "The lamp tower with 21 concentric circles · temple courtyard",
  },
  alts: {
    hero: "Sri Mookambika Devi — sanctum sanctorum, Kollur",
    flowers: "Flower offerings at Mookambika temple entrance",
    gold: "Sri Mookambika Devi adorned in gold",
    silver: "Mookambika Devi in silver palanquin",
    deepa: "Deepasthambha and Dwajasthambha at Mookambika Temple",
  },

  allTemples: "← All Temples",
  nextTemple: "Next Temple →",
};

const kn: KollurContent = {
  backTemples: "← ತುಳುನಾಡಿನ ದೇವಾಲಯಗಳು",
  region: "ತುಳುನಾಡು · ಉಡುಪಿ ಜಿಲ್ಲೆ · ಕರ್ನಾಟಕ",
  title: "ಶ್ರೀ ಮೂಕಾಂಬಿಕಾ ದೇವಸ್ಥಾನ",
  tagline: "ಕೊಲ್ಲೂರು · ಪರಶುರಾಮ ಕ್ಷೇತ್ರದ ಸಪ್ತ ಮುಕ್ತಿಸ್ಥಳಗಳಲ್ಲಿ ಒಂದು",
  facts: [
    ["ದೇವತೆ", "ಮೂಕಾಂಬಿಕಾ ದೇವಿ"],
    ["ಸ್ವರೂಪ", "ಆದಿ ಪರಾಶಕ್ತಿ — ತ್ರಿದೇವಿ"],
    ["ದೇವಾಲಯದ ವಯಸ್ಸು", "ಸುಮಾರು ೧೨೦೦ ವರ್ಷ"],
    ["ಸ್ಥಾಪಕರು", "ಆದಿ ಶಂಕರಾಚಾರ್ಯರು"],
    ["ನದಿ", "ಸೌಪರ್ಣಿಕಾ"],
    ["ಬೆಟ್ಟ", "ಕೊಡಚಾದ್ರಿ"],
  ],
  quote:
    "ಆಕೆಯನ್ನು ಒಬ್ಬ ದೇವಿಯಾಗಿ ಅಲ್ಲ, ಮೂವರಾಗಿ ಪೂಜಿಸಲಾಗುತ್ತದೆ — ಬೆಳಗಿನಲ್ಲಿ ಸರಸ್ವತಿ, ಮಧ್ಯಾಹ್ನ ಲಕ್ಷ್ಮಿ, ಸಂಜೆ ಪಾರ್ವತಿ. ಒಂದೇ ರೂಪ, ಮೂರು ಸತ್ಯಗಳು. ಇದೇ ಕೊಲ್ಲೂರಿನ ಬೋಧನೆ.",

  kathaEyebrow: "ಪೌರಾಣಿಕ ಕಥೆ",
  kathaTitle: "ಮೂಕಾಂಬಿಕೆಯ ಕಥೆ",
  demonTitle: "ಮಾತನಾಡಲಾಗದ ಅಸುರ",
  demonP1:
    "ಕೌಮಾಸುರನೆಂಬ ಅಸುರನು ಅಜೇಯ ವರವನ್ನು ಬಯಸಿ ಶಿವನನ್ನು ಒಲಿಸಿಕೊಳ್ಳಲು ಘೋರ ತಪಸ್ಸು ಮಾಡಿದನು. ಅಪಾಯವನ್ನು ಅರಿತ ಸರಸ್ವತಿಯೇ ಮಧ್ಯ ಪ್ರವೇಶಿಸಿ ಅವನನ್ನು ಮೂಕನನ್ನಾಗಿ ಮಾಡಿದಳು. ವರವನ್ನು ಕೇಳಲಾಗದೆ ಕೌಮಾಸುರನು ಮೂಕಾಸುರನಾದನು — ಮೂಕ ಎಂದರೆ ಮಾತಿಲ್ಲದವನು.",
  demonP2:
    "ಧ್ವನಿಯಿಲ್ಲದಿದ್ದರೂ ಮೂಕಾಸುರ ಪ್ರಬಲನಾಗಿದ್ದನು. ಅವನು ಇಂದ್ರನನ್ನು ಸೋಲಿಸಿ ಮೂರು ಲೋಕಗಳನ್ನೂ ಅಲ್ಲೋಲಕಲ್ಲೋಲಗೊಳಿಸಿದನು. ಆ ಅಸುರನನ್ನು ಸಂಹರಿಸಲು ಒಂದು ರೂಪವನ್ನು ಸೃಷ್ಟಿಸುವಂತೆ ತ್ರಿಮೂರ್ತಿಗಳು ತ್ರಿದೇವಿಯರನ್ನು ಕೋರಿದರು. ಅವರ ಸಂಯುಕ್ತ ಶಕ್ತಿಯೇ ಮೂಕಾಂಬಿಕೆಯಾಯಿತು — ಮೂಕ ಅಸುರನನ್ನು ಮೌನಗೊಳಿಸಿದವಳು.",
  shankaraTitle: "ಆದಿ ಶಂಕರಾಚಾರ್ಯರು ಮತ್ತು ಇಲ್ಲಿಯೇ ನಿಂತ ದೇವಿ",
  shankaraP1:
    "ಎಂಟನೆಯ ಶತಮಾನದಲ್ಲಿ ಆದಿ ಶಂಕರಾಚಾರ್ಯರು ಕೊಡಚಾದ್ರಿ ಬೆಟ್ಟಗಳನ್ನು ದಾಟಿ ಮೂಕಾಂಬಿಕೆಯ ದಿವ್ಯ ಸಾನ್ನಿಧ್ಯವನ್ನು ಕಂಡರು. ಅವರು ಆಕೆಯನ್ನು ಕೇರಳಕ್ಕೆ ಕರೆದೊಯ್ಯಲು ಬಯಸಿದರು. ಆಕೆ ಒಂದು ಷರತ್ತಿನ ಮೇಲೆ ಒಪ್ಪಿದಳು — ಅವರು ಹಿಂತಿರುಗಿ ನೋಡದೆ, ಕೇವಲ ಆಕೆಯ ಗೆಜ್ಜೆಯ ನಾದವನ್ನೇ ಆಧರಿಸಿ ಮುಂದೆ ನಡೆಯಬೇಕು.",
  shankaraP2:
    "ಅವರು ನಡೆದರು. ಗೆಜ್ಜೆ ನುಡಿಯಿತು. ಆಮೇಲೆ ಇದ್ದಕ್ಕಿದ್ದಂತೆ — ಮೌನ. ಸಂಶಯ ಆವರಿಸಿತು. ಅವರು ಹಿಂತಿರುಗಿ ನೋಡಿದರು. ದೇವಿ ಕೊಲ್ಲೂರಿನಲ್ಲಿಯೇ ಉಳಿಯಲು ನಿರ್ಧರಿಸಿದಳು. ಆದರೆ ಅವರ ತಪಸ್ಸಿನ ಫಲವಾಗಿ ಕೇರಳದ ಚೊಟ್ಟಾನಿಕ್ಕರೆಯಲ್ಲಿಯೂ ನೆಲೆಸಲು ಒಪ್ಪಿದಳು. ಇಂದಿಗೂ ಚೊಟ್ಟಾನಿಕ್ಕರೆಯ ಬಾಗಿಲುಗಳು ಕೊಲ್ಲೂರಿನ ನಂತರವೇ ತೆರೆಯುತ್ತವೆ — ಹನ್ನೆರಡು ಶತಮಾನಗಳಿಂದ ಈ ದೈನಂದಿನ ಕ್ರಮ ಪಾಲಿಸಲ್ಪಡುತ್ತಿದೆ.",

  deityEyebrow: "ದೇವತೆ",
  deityTitle: "ಮೂಕಾಂಬಿಕೆ ಯಾರು?",
  deityBody:
    "ಮೂಕಾಂಬಿಕೆ ಆದಿಪರಾ ಶಕ್ತಿ ಮತ್ತು ಪರಬ್ರಹ್ಮದ ಸಂಗಮ — ಮಹಾಕಾಳಿ, ಮಹಾಲಕ್ಷ್ಮಿ ಮತ್ತು ಮಹಾಸರಸ್ವತಿಯರ ಏಕರೂಪ ಸಮಾಗಮ. ಆಕೆ ತ್ರಿದೇವಿಯರಲ್ಲಿ ಒಬ್ಬಳಲ್ಲ. ಆಕೆ ಒಂದೇ ಪೀಠದಲ್ಲಿ, ಏಕಕಾಲದಲ್ಲಿ, ಮೂವರೂ ಆಗಿದ್ದಾಳೆ.",
  forms: [
    { time: "ಪ್ರಾತಃಕಾಲ", form: "ಸರಸ್ವತಿ", aspect: "ಜ್ಞಾನ, ವಾಕ್ಕು ಮತ್ತು ವಿದ್ಯೆ" },
    { time: "ಮಧ್ಯಾಹ್ನ", form: "ಲಕ್ಷ್ಮಿ", aspect: "ಸಮೃದ್ಧಿ, ಕೃಪೆ ಮತ್ತು ಐಶ್ವರ್ಯ" },
    { time: "ಸಂಧ್ಯಾಕಾಲ", form: "ಪಾರ್ವತಿ", aspect: "ಶಕ್ತಿ, ಭಕ್ತಿ ಮತ್ತು ಮುಕ್ತಿ" },
  ],
  deepaTitle: "ದೀಪಸ್ತಂಭ",
  deepaBody:
    "ದೇವಾಲಯದ ಪ್ರವೇಶದ್ವಾರದಲ್ಲಿರುವ ದೀಪಸ್ತಂಭದ ಬುಡವು ಆಮೆಯ ತಲೆಯ ಆಕಾರದಲ್ಲಿದ್ದು ೨೧ ಏಕಕೇಂದ್ರ ವರ್ತುಲಗಳನ್ನು ಹೊಂದಿದೆ. ಎಲ್ಲ ದೀಪಗಳನ್ನೂ ಬೆಳಗಿಸಿ ದೂರದಿಂದ ನೋಡಿದಾಗ ಅವು ಶಬರಿಮಲೆಯ ದಿವ್ಯ ಮಕರಜ್ಯೋತಿಯಂತೆ ಕಾಣುತ್ತವೆ. ಪಕ್ಕದಲ್ಲಿರುವ ಸುವರ್ಣ ಧ್ವಜಸ್ತಂಭವು ದೇವಾಲಯದ ಪವಿತ್ರ ಆಕಾಶದ ಅಕ್ಷವನ್ನು ಸೂಚಿಸುತ್ತದೆ.",

  agamaEyebrow: "ಆಗಮ ಶಾಸ್ತ್ರ",
  agamaTitle: "ಪೂಜೆಯ ಶಾಸ್ತ್ರ",
  agamaIntro:
    "ಆದಿ ಶಂಕರಾಚಾರ್ಯರು ವಿಧಿಸಿದ ವಿಜಯಾಗಮ ಪದ್ಧತಿಯು ಇಂದಿಗೂ ಕೊಲ್ಲೂರಿನ ಪ್ರತಿಯೊಂದು ಆಚರಣೆಯನ್ನೂ ನಿಯಂತ್ರಿಸುತ್ತದೆ. ಪ್ರತಿಯೊಂದು ಮುದ್ರೆಗೂ, ಪ್ರತಿಯೊಂದು ದ್ರವ್ಯಕ್ಕೂ, ದಿನದ ಪ್ರತಿಯೊಂದು ಗಳಿಗೆಗೂ ವೈದಿಕ ವಿಶ್ವದೃಷ್ಟಿಯಲ್ಲಿ ಬೇರೂರಿದ ಕಾರಣವಿದೆ.",
  practices: [
    {
      title: "ತ್ರಿಕಾಲ ಪೂಜೆ",
      desc: "ದಿನಕ್ಕೆ ಮೂರು ಪೂಜೆಗಳು — ಬೆಳಗಿನಲ್ಲಿ ಸರಸ್ವತಿ, ಮಧ್ಯಾಹ್ನ ಲಕ್ಷ್ಮಿ, ಸಂಜೆ ಪಾರ್ವತಿ. ಒಂದೇ ದೇವತೆ, ಮೂರು ಸತ್ಯಗಳು.",
    },
    {
      title: "ಪಂಚಾಮೃತ ಅಭಿಷೇಕ",
      desc: "ಐದು ಪವಿತ್ರ ದ್ರವ್ಯಗಳಿಂದ ಅಭಿಷೇಕ: ಶುದ್ಧಿಗಾಗಿ ಹಾಲು, ಮಾಧುರ್ಯಕ್ಕಾಗಿ ಜೇನು, ಪ್ರಕಾಶಕ್ಕಾಗಿ ತುಪ್ಪ, ಪೋಷಣೆಗಾಗಿ ಮೊಸರು, ಸಮೃದ್ಧಿಗಾಗಿ ಕಬ್ಬಿನ ರಸ.",
    },
    {
      title: "ಶ್ರೀಚಕ್ರ ಪೂಜೆ",
      desc: "ಆದಿ ಶಂಕರರು ಪ್ರತಿಷ್ಠಾಪಿಸಿದ ಶ್ರೀಚಕ್ರ ಯಂತ್ರದ ಮೇಲೆ ದೇವಿ ನಿಂತಿದ್ದಾಳೆ. ಮೂರ್ತಿಯ ಪೂಜೆಯೇ ಏಕಕಾಲದಲ್ಲಿ ಯಂತ್ರದ ಪೂಜೆಯೂ ಹೌದು — ಅದು ದೇವಿಯ ರೇಖಾಗಣಿತದ ಶರೀರ.",
    },
    {
      title: "ವಿದ್ಯಾರಂಭ",
      desc: "ಮಕ್ಕಳ ಮೊದಲ ಅಕ್ಷರಗಳನ್ನು ಅರ್ಚಕರ ಕೈಹಿಡಿತದಲ್ಲಿ ಇಲ್ಲಿಯೇ ಬರೆಸಲಾಗುತ್ತದೆ. ವಾಗ್ದೇವಿಯಾಗಿ ಮೂಕಾಂಬಿಕೆ ಎಲ್ಲ ವಿದ್ಯಾರಂಭಗಳಿಗೂ ಅಧಿದೇವತೆ.",
    },
    {
      title: "ಅನ್ನಪ್ರಾಶನ",
      desc: "ಶಿಶುವಿನ ಮೊದಲ ಘನ ಆಹಾರವನ್ನು ದೇವಿಯ ಸನ್ನಿಧಿಯಲ್ಲಿ ಅರ್ಪಿಸಲಾಗುತ್ತದೆ. ಜೀವನದ ಎರಡು ಪವಿತ್ರ ಆರಂಭಗಳು — ಮಾತು ಮತ್ತು ಅನ್ನ — ಕೊಲ್ಲೂರಿನಲ್ಲಿ ಸಂಸ್ಕಾರಗೊಳ್ಳುತ್ತವೆ.",
    },
    {
      title: "ಬಲಿ ಪೂಜೆ",
      desc: "ದೇವಾಲಯ ಪ್ರಾಂಗಣದ ಕ್ಷೇತ್ರಪಾಲ ಶಕ್ತಿಗಳಿಗೆ ಅರ್ಪಿಸುವ ನೈವೇದ್ಯ — ಪವಿತ್ರ ಸ್ಥಳದಲ್ಲಿ ಅನೇಕ ಸಾನ್ನಿಧ್ಯಗಳು ನೆಲೆಸಿವೆ ಎಂಬ ಅರಿವಿನ ಸೂಚಕ.",
    },
  ],

  scheduleEyebrow: "ದೈನಂದಿನ ಕ್ರಮ",
  scheduleTitle: "ದಿನದ ಪೂಜಾವಿಧಿಗಳು",
  rituals: [
    {
      time: "ಬೆಳಿಗ್ಗೆ ೫:೦೦",
      name: "ನಿರ್ಮಾಲ್ಯ ಪೂಜೆ",
      desc: "ದಿನವು ಬೆಳಗಾಗುವ ಮೊದಲೇ ಆರಂಭವಾಗುತ್ತದೆ. ಸ್ವಯಂಭೂ ಲಿಂಗದ ದರ್ಶನ — ಮುಂಜಾನೆಯ ಭಕ್ತರಿಗೆ ಮೂಲ ಲಿಂಗ ನೇರವಾಗಿ ಕಾಣುವ ಏಕೈಕ ಸಮಯ.",
    },
    {
      time: "ಬೆಳಿಗ್ಗೆ ೬:೩೦",
      name: "ಸುಪ್ರಭಾತ ಸೇವೆ",
      desc: "ವೈದಿಕ ಮಂತ್ರಗಳಿಂದ ದೇವಿಯನ್ನು ಎಚ್ಚರಗೊಳಿಸಲಾಗುತ್ತದೆ. ಪ್ರಾತಃಕಾಲದ ಆವಾಹನೆ ಗರ್ಭಗುಡಿಯನ್ನು ದಿನದ ಪೂಜೆಗೆ ಸಿದ್ಧಗೊಳಿಸುತ್ತದೆ.",
    },
    {
      time: "ಬೆಳಿಗ್ಗೆ ೬:೦೦ – ೮:೦೦",
      name: "ಶೃಂಗಾರ ಪೂಜೆ",
      desc: "ತಾಜಾ ಹೂವು, ಹೊಸ ರೇಷ್ಮೆ ಮತ್ತು ಆಭರಣಗಳಿಂದ ದೇವಿಯನ್ನು ಅಲಂಕರಿಸಲಾಗುತ್ತದೆ — ದಿನಕ್ಕಾಗಿ ಸಿಂಗರಿಸಿಕೊಂಡ ಜಗನ್ಮಾತೆ.",
    },
    {
      time: "ಬೆಳಿಗ್ಗೆ ೭:೩೦",
      name: "ಪಂಚಾಮೃತ ಅಭಿಷೇಕ",
      desc: "ಹಾಲು, ಮೊಸರು, ತುಪ್ಪ, ಜೇನು ಮತ್ತು ಕಬ್ಬಿನ ರಸ — ಈ ಐದು ಪವಿತ್ರ ದ್ರವ್ಯಗಳಿಂದ ದೇವಿಗೆ ಅಭಿಷೇಕ.",
    },
    {
      time: "ಬೆಳಿಗ್ಗೆ ೮:೦೦",
      name: "ಮಂಗಳ ಆರತಿ",
      desc: "ದಿನದ ಮೊದಲ ಪೂರ್ಣ ಆರತಿ. ಅರ್ಚಕರು ಚಾಮುಂಡಿ ಅಷ್ಟಕವನ್ನು ಪಠಿಸುತ್ತಿರುವಾಗ ದೇವಿಯ ಮುಂದೆ ದೀಪಗಳನ್ನು ಬೆಳಗಲಾಗುತ್ತದೆ.",
    },
    {
      time: "ಬೆಳಿಗ್ಗೆ ೯:೦೦",
      name: "ನಿತ್ಯೋತ್ಸವ ಪೂಜೆ",
      desc: "ವಿಜಯಾಗಮ ಪದ್ಧತಿಯಂತೆ ನೈವೇದ್ಯ, ವೇದಘೋಷ ಮತ್ತು ಸಹಸ್ರನಾಮ ಅರ್ಚನೆಯೊಂದಿಗೆ ನಡೆಯುವ ದೈನಂದಿನ ಉತ್ಸವ ಪೂಜೆ.",
    },
    {
      time: "ಮಧ್ಯಾಹ್ನ ೧೨:೩೦",
      name: "ಮಹಾಮಂಗಳ ಆರತಿ",
      desc: "ಮಧ್ಯಾಹ್ನದ ಮಹಾ ಆರತಿ. ಈ ಹೊತ್ತಿನಲ್ಲಿ ದೇವಿಯನ್ನು ಲಕ್ಷ್ಮಿಯಾಗಿ ಪೂಜಿಸಲಾಗುತ್ತದೆ — ಸಮೃದ್ಧಿ ಮತ್ತು ಪೋಷಣೆಯ ಸ್ವರೂಪ.",
    },
    {
      time: "ಸಂಜೆ ೬:೩೦",
      name: "ಪ್ರದೋಷ ಪೂಜೆ",
      desc: "ಸಂಜೆ ಕವಿಯುತ್ತಿದ್ದಂತೆ ಸಾಯಂಕಾಲದ ಪೂಜೆ ಆರಂಭ. ದೇವಿ ಪಾರ್ವತಿಯ ರೂಪ ತಾಳುತ್ತಾಳೆ. ದೀಪಗಳು ಹೆಚ್ಚುತ್ತವೆ, ಮಂತ್ರಘೋಷ ಗಾಢವಾಗುತ್ತದೆ.",
    },
    {
      time: "ರಾತ್ರಿ ೮:೦೦",
      name: "ಕಾಶ್ಯ ಮಂಗಳ ಆರತಿ",
      desc: "ದಿನದ ಕೊನೆಯ ಆರತಿ. ದೇವಿಗೆ ಶಯನದ ವಿದಾಯ. ದೀಪವು ರಾತ್ರಿಯಿಡೀ ಉರಿಯುತ್ತಲೇ ಇರುತ್ತದೆ.",
    },
  ],
  timingsTitle: "ದರ್ಶನದ ಸಮಯ",
  timings: [
    ["ಬೆಳಗಿನ ದರ್ಶನ", "ಬೆಳಿಗ್ಗೆ ೫:೦೦ – ಮಧ್ಯಾಹ್ನ ೧:೦೦"],
    ["ಸಂಜೆಯ ದರ್ಶನ", "ಮಧ್ಯಾಹ್ನ ೩:೦೦ – ರಾತ್ರಿ ೯:೦೦"],
    ["ದೇವಾಲಯ ತೆರೆದಿರುವ ಸಮಯ", "ಬೆಳಿಗ್ಗೆ ೫:೦೦ – ರಾತ್ರಿ ೯:೦೦"],
    ["ವಿಶೇಷ ದಿನಗಳು", "ನವರಾತ್ರಿ ಮತ್ತು ರಥೋತ್ಸವದಲ್ಲಿ ವಿಸ್ತರಿಸಲಾಗುತ್ತದೆ"],
  ],

  festivalsEyebrow: "ಪವಿತ್ರ ಉತ್ಸವಗಳು",
  festivalsTitle: "ಹಬ್ಬಗಳು ಮತ್ತು ಅವುಗಳ ಮಹತ್ವ",
  festivals: [
    {
      name: "ನವರಾತ್ರಿ",
      when: "ಆಶ್ವಯುಜ (ಸೆಪ್ಟೆಂಬರ್–ಅಕ್ಟೋಬರ್)",
      desc: "ದೇವಿಯ ಒಂಬತ್ತು ರಾತ್ರಿಗಳು — ಕೊಲ್ಲೂರಿನ ಅತ್ಯಂತ ಮಹತ್ವದ ಹಬ್ಬ. ಪ್ರತಿ ರಾತ್ರಿಯೂ ಚಂಡಿ ಹೋಮ, ಸಹಸ್ರನಾಮ ಅರ್ಚನೆ ಮತ್ತು ವಿಶೇಷ ಮೆರವಣಿಗೆಗಳು ನಡೆಯುತ್ತವೆ. ವಿಜಯದಶಮಿಯು ಮೂಕಾಸುರನ ಮೇಲೆ ಮೂಕಾಂಬಿಕೆಯ ವಿಜಯವನ್ನು ಸೂಚಿಸುತ್ತದೆ — ಈ ದೇವಾಲಯ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವುದೇ ಆ ಘಟನೆಗಾಗಿ.",
    },
    {
      name: "ರಥೋತ್ಸವ",
      when: "ಫಾಲ್ಗುಣ (ಫೆಬ್ರವರಿ–ಮಾರ್ಚ್)",
      desc: "ರಥದ ಹಬ್ಬ. ದೇವಿಯನ್ನು ಮಹಾ ಮರದ ರಥದಲ್ಲಿ ಕೂರಿಸಿ ದೇವಾಲಯದ ಬೀದಿಗಳಲ್ಲಿ ಎಳೆಯಲಾಗುತ್ತದೆ. ಈ ಚಿತ್ರಗಳಲ್ಲಿ ಕಾಣುವ ಬೆಳ್ಳಿಯ ಪಲ್ಲಕ್ಕಿಯನ್ನು ಮೆರವಣಿಗೆಯಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ. ಈ ಮಾಸದ ಮೂಲಾ ನಕ್ಷತ್ರವನ್ನು ದೇವಿಯ ಜನ್ಮದಿನವಾಗಿ ಆಚರಿಸಲಾಗುತ್ತದೆ.",
    },
    {
      name: "ಶಿವರಾತ್ರಿ",
      when: "ಮಾಘ (ಫೆಬ್ರವರಿ–ಮಾರ್ಚ್)",
      desc: "ಜ್ಯೋತಿರ್ಲಿಂಗವು ಶಿವ ಮತ್ತು ಶಕ್ತಿ ಎರಡನ್ನೂ ಪ್ರತಿನಿಧಿಸುವುದರಿಂದ, ಮಹಾಶಿವರಾತ್ರಿಯಂದು ಸ್ವಯಂಭೂ ಲಿಂಗಕ್ಕೆ ವಿಶೇಷ ಮಧ್ಯರಾತ್ರಿ ಪೂಜೆ ನಡೆಯುತ್ತದೆ — ಬೆಳಗಿನ ಮುಂಚಿನ ಕತ್ತಲೆಯಲ್ಲಿ ಭಕ್ತರಿಗೆ ಮೂಲ ಲಿಂಗ ದೊರೆಯುವ ಏಕೈಕ ರಾತ್ರಿ.",
    },
  ],

  landEyebrow: "ಪವಿತ್ರ ಭೂಮಿ",
  landTitle: "ಕೊಲ್ಲೂರು ಮತ್ತು ಸುತ್ತಮುತ್ತ",
  landP1:
    "ದೇವಾಲಯವು ಕೊಡಚಾದ್ರಿ ಬೆಟ್ಟಗಳ ತಪ್ಪಲಿನಲ್ಲಿ, ಸೌಪರ್ಣಿಕಾ ನದಿಯ ದಕ್ಷಿಣ ದಂಡೆಯಲ್ಲಿದೆ — ಈ ನದಿಗೆ ಅದರ ದಡದಲ್ಲಿ ತಪಸ್ಸು ಮಾಡಿದ ಗರುಡನ (ಸುಪರ್ಣ) ಹೆಸರಿಡಲಾಗಿದೆ. ಊರಿನ ಹಿಂದೆ ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು ಎದ್ದುನಿಂತು ಅಖಂಡ ಪಾವಿತ್ರ್ಯದ ಸಹಜ ಕಣಿವೆಯನ್ನು ರೂಪಿಸುತ್ತವೆ.",
  landP2:
    "ಉಡುಪಿ, ಸುಬ್ರಹ್ಮಣ್ಯ, ಕುಂಬಾಸಿ, ಕೋಡೇಶ್ವರ, ಶಂಕರನಾರಾಯಣ ಮತ್ತು ಗೋಕರ್ಣಗಳ ಜೊತೆಗೆ ಕೊಲ್ಲೂರು ಪರಶುರಾಮ ಕ್ಷೇತ್ರದ ಸಪ್ತ ಮುಕ್ತಿಸ್ಥಳಗಳಲ್ಲಿ ಒಂದು. ಈ ಏಳನ್ನೂ ದರ್ಶಿಸುವುದೆಂದರೆ ತುಳುನಾಡಿನ ಪವಿತ್ರ ಭೂಗೋಳವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಸಂಚರಿಸಿದಂತೆ.",
  places: [
    ["ಸೌಪರ್ಣಿಕಾ ನದಿ", "ದೇವಾಲಯದ ಪಕ್ಕದ ಪವಿತ್ರ ನದಿ. ದರ್ಶನಕ್ಕೂ ಮೊದಲು ಇಲ್ಲಿ ಸ್ನಾನ."],
    ["ಕೊಡಚಾದ್ರಿ ಬೆಟ್ಟ", "ಶಂಕರಾಚಾರ್ಯರು ಮೂಕಾಂಬಿಕೆಯೊಂದಿಗೆ ಇಳಿದುಬಂದ ಬೆಟ್ಟಗಳು."],
    ["ಮಾರಣ ಕಟ್ಟೆ", "ದೇವಿ ಮೂಕಾಸುರನನ್ನು ಸಂಹರಿಸಿದ ಸ್ಥಳ — ಪ್ರಾಂಗಣದೊಳಗಿನ ಉಪ ಸನ್ನಿಧಿ."],
    ["ಶಂಕರಾಚಾರ್ಯ ಪೀಠ", "ಶಂಕರರು ಧ್ಯಾನಕ್ಕೆ ಕುಳಿತ ಗರ್ಭಗುಡಿಯ ಪಶ್ಚಿಮ ಭಾಗ."],
    ["ಸರಸ್ವತಿ ಮಂಟಪ", "ದಕ್ಷಿಣ ಮಂಟಪ — ವಿದ್ಯಾರಂಭ ಮತ್ತು ಅನ್ನಪ್ರಾಶನ ಇಲ್ಲಿ ನಡೆಯುತ್ತವೆ."],
  ],

  visitEyebrow: "ಪ್ರಯಾಣದ ಯೋಜನೆ",
  visitTitle: "ತಲುಪುವ ಬಗೆ",
  addressLabel: "ವಿಳಾಸ",
  bestTimeLabel: "ಭೇಟಿಗೆ ಉತ್ತಮ ಕಾಲ",
  bestTime: [
    { strong: "ಅಕ್ಟೋಬರ್ – ಮಾರ್ಚ್", rest: " — ಹಿತಕರ ಹವಾಮಾನ, ಸುತ್ತಲಿನ ಬೆಟ್ಟಗಳಿಗೆ ಸೂಕ್ತ." },
    { strong: "ಜೂನ್ – ಸೆಪ್ಟೆಂಬರ್ ಬೇಡ", rest: " — ಪಶ್ಚಿಮ ಘಟ್ಟಗಳಲ್ಲಿ ಭಾರೀ ಮಳೆ." },
    { strong: "ವಾರದ ದಿನಗಳು", rest: " — ೧೫ ನಿಮಿಷದೊಳಗೆ ದರ್ಶನ; ವಾರಾಂತ್ಯದಲ್ಲಿ ೬೦ ನಿಮಿಷಕ್ಕೂ ಹೆಚ್ಚು." },
  ],
  travel: [
    {
      mode: "ವಿಮಾನದಲ್ಲಿ",
      detail: "ಮಂಗಳೂರು ಅಂತಾರಾಷ್ಟ್ರೀಯ ವಿಮಾನ ನಿಲ್ದಾಣ — ೧೩೫ ಕಿ.ಮೀ. ಉಡುಪಿ ಮಾರ್ಗವಾಗಿ ಟ್ಯಾಕ್ಸಿಯಲ್ಲಿ ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ಮೂಲಕ ಸುಮಾರು ೨.೫ ಗಂಟೆ.",
    },
    {
      mode: "ರೈಲಿನಲ್ಲಿ",
      detail: "ಕುಂದಾಪುರ ರೈಲು ನಿಲ್ದಾಣ — ೪೦ ಕಿ.ಮೀ. ಬೈಂದೂರು ನಿಲ್ದಾಣ — ೨೮ ಕಿ.ಮೀ. ಎರಡರಿಂದಲೂ ಕೊಲ್ಲೂರಿಗೆ ಬಸ್ ಮತ್ತು ಟ್ಯಾಕ್ಸಿ ಲಭ್ಯ.",
    },
    {
      mode: "ರಸ್ತೆಯಲ್ಲಿ",
      detail: "ಮಂಗಳೂರಿನಿಂದ ರಾ.ಹೆ. ೧೬೯ (೧೩೫ ಕಿ.ಮೀ.). ಉಡುಪಿ (೬೦ ಕಿ.ಮೀ.), ಮಂಗಳೂರು ಮತ್ತು ಶಿವಮೊಗ್ಗದಿಂದ ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ. ಬಸ್‌ಗಳು.",
    },
    {
      mode: "ಉಡುಗೆ ನಿಯಮ",
      detail: "ಪುರುಷರು: ಬಿಳಿ ಪಂಚೆ ಅಪೇಕ್ಷಣೀಯ. ಮಹಿಳೆಯರು: ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಗೆ ಕಡ್ಡಾಯ. ಗರ್ಭಗುಡಿಯ ಮೊದಲು ಪಾದರಕ್ಷೆ ತೆಗೆಯಬೇಕು.",
    },
    {
      mode: "ವಸತಿ",
      detail: "ನಡೆದುಹೋಗುವ ದೂರದಲ್ಲಿ ನಾಲ್ಕು ದೇವಸ್ಥಾನದ ಅತಿಥಿಗೃಹಗಳು. ರಾತ್ರಿಗೆ ₹೨೦೦–₹೬೦೦. ನವರಾತ್ರಿಯಲ್ಲಿ ಮುಂಗಡ ಕಾಯ್ದಿರಿಸುವಿಕೆ ಅಗತ್ಯ.",
    },
  ],

  captions: {
    flowers: "ಪ್ರವೇಶದ್ವಾರದಲ್ಲಿ ಪುಷ್ಪ ಸಮರ್ಪಣೆ",
    flowersSub: "ಕಮಲ, ಮಲ್ಲಿಗೆ ಮತ್ತು ಸೇವಂತಿಗೆ — ದರ್ಶನಕ್ಕೂ ಮೊದಲು ಅರ್ಪಣೆ",
    gold: "ಶ್ರೀ ಮೂಕಾಂಬಿಕಾ ದೇವಿ — ಸುವರ್ಣಾಲಂಕಾರದಲ್ಲಿ",
    goldSub: "ಶ್ರೀಚಕ್ರದ ಮೇಲಿನ ಪಂಚಲೋಹ ಮೂರ್ತಿ · ಕೊಲ್ಲೂರು ಗರ್ಭಗುಡಿ",
    silver: "ಬೆಳ್ಳಿಯ ಪಲ್ಲಕ್ಕಿಯಲ್ಲಿ ದೇವಿ",
    silverSub: "ರಥೋತ್ಸವದ ಮೆರವಣಿಗೆಯ ವೇಳೆ",
    deepa: "ದೀಪಸ್ತಂಭ ಮತ್ತು ಧ್ವಜಸ್ತಂಭ",
    deepaSub: "೨೧ ಏಕಕೇಂದ್ರ ವರ್ತುಲಗಳ ದೀಪಸ್ತಂಭ · ದೇವಾಲಯ ಪ್ರಾಂಗಣ",
  },
  alts: {
    hero: "ಶ್ರೀ ಮೂಕಾಂಬಿಕಾ ದೇವಿ — ಗರ್ಭಗುಡಿ, ಕೊಲ್ಲೂರು",
    flowers: "ಮೂಕಾಂಬಿಕಾ ದೇವಾಲಯದ ಪ್ರವೇಶದ್ವಾರದಲ್ಲಿ ಪುಷ್ಪ ಸಮರ್ಪಣೆ",
    gold: "ಸುವರ್ಣಾಲಂಕಾರದಲ್ಲಿ ಶ್ರೀ ಮೂಕಾಂಬಿಕಾ ದೇವಿ",
    silver: "ಬೆಳ್ಳಿಯ ಪಲ್ಲಕ್ಕಿಯಲ್ಲಿ ಮೂಕಾಂಬಿಕಾ ದೇವಿ",
    deepa: "ಮೂಕಾಂಬಿಕಾ ದೇವಾಲಯದ ದೀಪಸ್ತಂಭ ಮತ್ತು ಧ್ವಜಸ್ತಂಭ",
  },

  allTemples: "← ಎಲ್ಲ ದೇವಾಲಯಗಳು",
  nextTemple: "ಮುಂದಿನ ದೇವಾಲಯ →",
};

const hi: KollurContent = {
  backTemples: "← तुलुनाडु के मंदिर",
  region: "तुलुनाडु · उडुपी ज़िला · कर्नाटक",
  title: "श्री मूकाम्बिका मंदिर",
  tagline: "कोल्लूर · परशुराम क्षेत्र के सात मुक्तिस्थलों में से एक",
  facts: [
    ["देवता", "मूकाम्बिका देवी"],
    ["स्वरूप", "आदि पराशक्ति — त्रिदेवी"],
    ["मंदिर की आयु", "लगभग १२०० वर्ष"],
    ["स्थापना", "आदि शंकराचार्य"],
    ["नदी", "सौपर्णिका"],
    ["पर्वत", "कोडचाद्रि"],
  ],
  quote:
    "उनकी पूजा एक देवी के रूप में नहीं, तीन के रूप में होती है — प्रातः सरस्वती, मध्याह्न लक्ष्मी, संध्या पार्वती। एक ही रूप, तीन सत्य। यही कोल्लूर की शिक्षा है।",

  kathaEyebrow: "पौराणिक कथा",
  kathaTitle: "मूकाम्बिका की कथा",
  demonTitle: "वह असुर जो बोल न सका",
  demonP1:
    "कौमासुर नामक असुर ने अजेय वरदान की कामना से भगवान शिव को प्रसन्न करने हेतु घोर तपस्या की। संकट को भाँपकर स्वयं सरस्वती ने हस्तक्षेप किया और उस असुर को मूक बना दिया। अपना वर माँग न पाने के कारण कौमासुर मूकासुर कहलाया — मूक अर्थात् जो बोल न सके।",
  demonP2:
    "वाणीहीन होकर भी मूकासुर दुर्जेय था। उसने इंद्र को परास्त किया और तीनों लोकों में उत्पात मचाया। त्रिमूर्ति ने त्रिदेवी से उस असुर के संहार हेतु एक रूप रचने की प्रार्थना की। उनकी संयुक्त शक्ति ही मूकाम्बिका बनी — वह जिसने मूक असुर को मौन कर दिया।",
  shankaraTitle: "आदि शंकराचार्य और वह देवी जो यहीं रुक गईं",
  shankaraP1:
    "आठवीं शताब्दी में आदि शंकराचार्य कोडचाद्रि की पहाड़ियों को पार करते हुए मूकाम्बिका के दिव्य सान्निध्य तक पहुँचे। वे उन्हें केरल ले जाना चाहते थे। देवी एक शर्त पर सहमत हुईं — वे बिना पीछे मुड़े आगे चलें, केवल उनके नूपुरों की ध्वनि के सहारे।",
  shankaraP2:
    "वे चले। नूपुर बजते रहे। फिर अचानक — मौन। संशय ने घेर लिया। उन्होंने पीछे मुड़कर देखा। देवी ने कोल्लूर में ही रहना चुना। किंतु उनकी तपस्या के फलस्वरूप वे केरल के चोट्टानिक्कारा में भी विराजने को सहमत हुईं। आज भी चोट्टानिक्कारा के द्वार कोल्लूर के बाद ही खुलते हैं — बारह शताब्दियों से यह दैनिक क्रम निभाया जा रहा है।",

  deityEyebrow: "देवता",
  deityTitle: "मूकाम्बिका कौन हैं?",
  deityBody:
    "मूकाम्बिका आदिपरा शक्ति और परब्रह्म का संगम हैं — महाकाली, महालक्ष्मी और महासरस्वती का एक ही रूप में एकीकरण। वे त्रिदेवी में से एक नहीं हैं। वे एक ही वेदी पर, एक ही समय, तीनों हैं।",
  forms: [
    { time: "प्रातः", form: "सरस्वती", aspect: "ज्ञान, वाणी और विद्या" },
    { time: "मध्याह्न", form: "लक्ष्मी", aspect: "समृद्धि, कृपा और ऐश्वर्य" },
    { time: "संध्या", form: "पार्वती", aspect: "शक्ति, भक्ति और मुक्ति" },
  ],
  deepaTitle: "दीपस्तंभ",
  deepaBody:
    "मंदिर के प्रवेश पर स्थित दीपस्तंभ का आधार कछुए के सिर के आकार का है, जिसमें २१ संकेंद्रित वृत्त हैं। जब सभी दीप प्रज्वलित होकर दूर से देखे जाते हैं, तो वे सबरीमला की दिव्य मकर ज्योति के समान प्रतीत होते हैं। उसके पास खड़ा स्वर्ण ध्वजस्तंभ मंदिर के पवित्र आकाश की धुरी को चिह्नित करता है।",

  agamaEyebrow: "आगम शास्त्र",
  agamaTitle: "पूजा का शास्त्र",
  agamaIntro:
    "आदि शंकराचार्य द्वारा विहित विजयागम पद्धति आज भी कोल्लूर के प्रत्येक अनुष्ठान का संचालन करती है। प्रत्येक मुद्रा, प्रत्येक द्रव्य और दिन के प्रत्येक प्रहर का कारण वैदिक विश्वदृष्टि में निहित है।",
  practices: [
    {
      title: "त्रिकाल पूजा",
      desc: "दिन में तीन पूजाएँ — प्रातः सरस्वती, मध्याह्न लक्ष्मी, संध्या पार्वती। एक ही देवी, तीन सत्य।",
    },
    {
      title: "पंचामृत अभिषेक",
      desc: "पाँच पवित्र द्रव्यों से अभिषेक: शुद्धि हेतु दूध, माधुर्य हेतु मधु, प्रकाश हेतु घृत, पोषण हेतु दधि, समृद्धि हेतु इक्षुरस।",
    },
    {
      title: "श्रीचक्र पूजा",
      desc: "देवी आदि शंकर द्वारा प्रतिष्ठित श्रीचक्र यंत्र पर विराजमान हैं। मूर्ति की पूजा साथ ही यंत्र की भी पूजा है — जो देवी का ज्यामितीय शरीर है।",
    },
    {
      title: "विद्यारंभ",
      desc: "बच्चों के पहले अक्षर यहीं, पुरोहित के हाथ के सहारे लिखवाए जाते हैं। वाग्देवी होने के नाते मूकाम्बिका समस्त विद्यारंभ की अधिष्ठात्री हैं।",
    },
    {
      title: "अन्नप्राशन",
      desc: "शिशु का पहला अन्न देवी के समक्ष अर्पित किया जाता है। जीवन के दो पवित्रतम आरंभ — वाणी और अन्न — कोल्लूर में संस्कारित होते हैं।",
    },
    {
      title: "बलि पूजा",
      desc: "मंदिर परिसर की क्षेत्रपाल शक्तियों को अर्पित नैवेद्य — इस स्वीकृति के साथ कि पवित्र स्थल में अनेक सान्निध्य निवास करते हैं।",
    },
  ],

  scheduleEyebrow: "दैनिक क्रम",
  scheduleTitle: "दिन के अनुष्ठान",
  rituals: [
    {
      time: "प्रातः ५:००",
      name: "निर्माल्य पूजा",
      desc: "दिन का आरंभ भोर से पहले होता है। स्वयंभू लिंग के दर्शन — यही एकमात्र समय है जब मूल लिंग प्रातःकालीन भक्तों को प्रत्यक्ष दिखाई देता है।",
    },
    {
      time: "प्रातः ६:३०",
      name: "सुप्रभात सेवा",
      desc: "वैदिक मंत्रों से देवी को जगाया जाता है। प्रातःकालीन आवाहन गर्भगृह को दिन की पूजा हेतु तैयार करता है।",
    },
    {
      time: "प्रातः ६:०० – ८:००",
      name: "शृंगार पूजा",
      desc: "ताज़े पुष्पों, नए रेशमी वस्त्रों और आभूषणों से देवी का शृंगार — दिन के लिए सज्जित जगन्माता।",
    },
    {
      time: "प्रातः ७:३०",
      name: "पंचामृत अभिषेक",
      desc: "दूध, दधि, घृत, मधु और इक्षुरस — इन पाँच पवित्र द्रव्यों से देवी का अभिषेक।",
    },
    {
      time: "प्रातः ८:००",
      name: "मंगल आरती",
      desc: "दिन की पहली पूर्ण आरती। पुरोहितों द्वारा चामुंडी अष्टक के पाठ के साथ देवी के समक्ष दीप घुमाए जाते हैं।",
    },
    {
      time: "प्रातः ९:००",
      name: "नित्योत्सव पूजा",
      desc: "विजयागम पद्धति के अनुसार नैवेद्य, वेदघोष और सहस्रनाम अर्चना सहित दैनिक उत्सव पूजा।",
    },
    {
      time: "मध्याह्न १२:३०",
      name: "महामंगल आरती",
      desc: "मध्याह्न की महा आरती। इस समय देवी की लक्ष्मी रूप में पूजा होती है — समृद्धि और पोषण का स्वरूप।",
    },
    {
      time: "संध्या ६:३०",
      name: "प्रदोष पूजा",
      desc: "संध्या ढलते ही सायंकालीन पूजा आरंभ होती है। देवी पार्वती का रूप धारण करती हैं। दीप बढ़ते हैं, मंत्रघोष गहराता है।",
    },
    {
      time: "रात्रि ८:००",
      name: "काश्य मंगल आरती",
      desc: "दिन की अंतिम आरती। देवी को शयन हेतु विदा दी जाती है। दीप रात्रि भर जलता रहता है।",
    },
  ],
  timingsTitle: "दर्शन का समय",
  timings: [
    ["प्रातःकालीन दर्शन", "प्रातः ५:०० – मध्याह्न १:००"],
    ["सायंकालीन दर्शन", "अपराह्न ३:०० – रात्रि ९:००"],
    ["मंदिर खुलने का समय", "प्रातः ५:०० – रात्रि ९:००"],
    ["विशेष दिन", "नवरात्रि और रथोत्सव में विस्तारित"],
  ],

  festivalsEyebrow: "पवित्र उत्सव",
  festivalsTitle: "पर्व और उनका महत्व",
  festivals: [
    {
      name: "नवरात्रि",
      when: "आश्विन (सितंबर–अक्टूबर)",
      desc: "देवी की नौ रातें — कोल्लूर का सर्वाधिक महत्वपूर्ण पर्व। प्रत्येक रात्रि चंडी होम, सहस्रनाम अर्चना और विशेष शोभायात्राएँ होती हैं। विजयादशमी मूकासुर पर मूकाम्बिका की विजय का स्मरण कराती है — यह मंदिर उसी घटना के लिए विद्यमान है।",
    },
    {
      name: "रथोत्सव",
      when: "फाल्गुन (फ़रवरी–मार्च)",
      desc: "रथ का पर्व। देवी को विशाल काष्ठ रथ में विराजित कर मंदिर की गलियों में खींचा जाता है। इन चित्रों में दिखती रजत पालकी शोभायात्रा में प्रयुक्त होती है। इस मास का मूला नक्षत्र देवी के जन्मदिवस के रूप में मनाया जाता है।",
    },
    {
      name: "शिवरात्रि",
      when: "माघ (फ़रवरी–मार्च)",
      desc: "चूँकि ज्योतिर्लिंग शिव और शक्ति दोनों का प्रतिनिधित्व करता है, महाशिवरात्रि पर स्वयंभू लिंग की विशेष मध्यरात्रि पूजा होती है — यही एकमात्र रात्रि है जब भोर से पूर्व के अंधकार में भक्तों को मूल लिंग सुलभ होता है।",
    },
  ],

  landEyebrow: "पवित्र भूमि",
  landTitle: "कोल्लूर और उसका परिवेश",
  landP1:
    "मंदिर कोडचाद्रि पहाड़ियों की तलहटी में, सौपर्णिका नदी के दक्षिण तट पर स्थित है — इस नदी का नाम गरुड़ (सुपर्ण) के नाम पर पड़ा, जिन्होंने इसके तट पर तपस्या की थी। नगर के पीछे पश्चिमी घाट उठते हैं, जो अखंड पवित्रता की एक प्राकृतिक घाटी रचते हैं।",
  landP2:
    "उडुपी, सुब्रह्मण्य, कुंबासी, कोडेश्वर, शंकरनारायण और गोकर्ण के साथ कोल्लूर परशुराम क्षेत्र के सात मुक्तिस्थलों में से एक है। इन सातों के दर्शन का अर्थ है तुलुनाडु के पवित्र भूगोल की संपूर्ण परिक्रमा।",
  places: [
    ["सौपर्णिका नदी", "मंदिर के निकट पवित्र नदी। दर्शन से पूर्व यहाँ स्नान।"],
    ["कोडचाद्रि पहाड़ियाँ", "वे पहाड़ियाँ जहाँ से शंकराचार्य मूकाम्बिका के साथ उतरे।"],
    ["मारण कट्टे", "वह स्थल जहाँ देवी ने मूकासुर का वध किया — परिसर के भीतर उपमंदिर।"],
    ["शंकराचार्य पीठ", "गर्भगृह का पश्चिमी भाग जहाँ शंकर ध्यानस्थ बैठे थे।"],
    ["सरस्वती मंटप", "दक्षिणी मंडप — यहाँ विद्यारंभ और अन्नप्राशन संपन्न होते हैं।"],
  ],

  visitEyebrow: "यात्रा की योजना",
  visitTitle: "कैसे पहुँचें",
  addressLabel: "पता",
  bestTimeLabel: "भ्रमण का उत्तम समय",
  bestTime: [
    { strong: "अक्टूबर – मार्च", rest: " — सुखद मौसम, आसपास की पहाड़ियों के लिए आदर्श।" },
    { strong: "जून – सितंबर से बचें", rest: " — पश्चिमी घाट में भारी वर्षा।" },
    { strong: "कार्यदिवस", rest: " — १५ मिनट से कम में दर्शन; सप्ताहांत पर ६० मिनट से अधिक।" },
  ],
  travel: [
    {
      mode: "वायुमार्ग",
      detail: "मंगलुरु अंतर्राष्ट्रीय हवाई अड्डा — १३५ कि.मी.। उडुपी होते हुए टैक्सी से पश्चिमी घाट के रास्ते लगभग २.५ घंटे।",
    },
    {
      mode: "रेलमार्ग",
      detail: "कुंदापुर रेलवे स्टेशन — ४० कि.मी.। बैंदूर स्टेशन — २८ कि.मी.। दोनों से कोल्लूर के लिए बस और टैक्सी उपलब्ध।",
    },
    {
      mode: "सड़क मार्ग",
      detail: "मंगलुरु से रा.रा. १६९ (१३५ कि.मी.)। उडुपी (६० कि.मी.), मंगलुरु और शिवमोग्गा से के.एस.आर.टी.सी. बसें।",
    },
    {
      mode: "वेशभूषा",
      detail: "पुरुष: श्वेत धोती वांछनीय। महिलाएँ: पारंपरिक वस्त्र अनिवार्य। गर्भगृह से पूर्व पादुकाएँ उतारना आवश्यक।",
    },
    {
      mode: "ठहरने की व्यवस्था",
      detail: "पैदल दूरी पर चार मंदिर अतिथिगृह। ₹२००–₹६०० प्रति रात्रि। नवरात्रि में अग्रिम आरक्षण आवश्यक।",
    },
  ],

  captions: {
    flowers: "प्रवेश द्वार पर पुष्प अर्पण",
    flowersSub: "कमल, चमेली और गुलदाउदी — दर्शन से पूर्व अर्पित",
    gold: "श्री मूकाम्बिका देवी — स्वर्ण अलंकरण में",
    goldSub: "श्रीचक्र पर पंचलोह प्रतिमा · कोल्लूर गर्भगृह",
    silver: "रजत पालकी में देवी",
    silverSub: "रथोत्सव शोभायात्रा के समय",
    deepa: "दीपस्तंभ और ध्वजस्तंभ",
    deepaSub: "२१ संकेंद्रित वृत्तों वाला दीपस्तंभ · मंदिर प्रांगण",
  },
  alts: {
    hero: "श्री मूकाम्बिका देवी — गर्भगृह, कोल्लूर",
    flowers: "मूकाम्बिका मंदिर के प्रवेश द्वार पर पुष्प अर्पण",
    gold: "स्वर्ण अलंकरण में श्री मूकाम्बिका देवी",
    silver: "रजत पालकी में मूकाम्बिका देवी",
    deepa: "मूकाम्बिका मंदिर का दीपस्तंभ और ध्वजस्तंभ",
  },

  allTemples: "← सभी मंदिर",
  nextTemple: "अगला मंदिर →",
};

const DICTIONARIES: Record<Locale, KollurContent> = { en, kn, hi };

export function kollur(locale: Locale): KollurContent {
  return DICTIONARIES[locale] ?? DICTIONARIES.en;
}
