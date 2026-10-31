import type { Locale } from "@/i18n/config";
import { OWNER_IMAGES, type OwnerImageId } from "@/lib/seed/owner-images";
import puranas from "../../../public/images/puranas/commons.json";
import stories from "../../../public/images/stories/commons.json";
import darshanas from "../../../public/images/darshanas/commons.json";
import shastras from "../../../public/images/shastras/commons.json";

// ─────────────────────────────────────────────────────────
//  Pictures for the Purāṇas, the Stories, the darśanas and the
//  branches of the śāstra map.
//
//  Fetched by scripts/images/fetch-commons.mjs from the reviewed sets in
//  scripts/images/sets/, which asks Commons for each file's real licence
//  and author and refuses anything not freely licensed. Every candidate
//  was looked at on a contact sheet before it was chosen, and every
//  chosen file was looked at again at full size. Rejected on the way: a
//  folio of the gopīs' clothes for the Bhāgavata, a disembowelling for
//  Prahlāda, a pale museum Garuḍa, Veda manuscripts whose titles date
//  them to "1500–1200 BCE", a page of lizards for "Āgama", Jain hell
//  scenes for the cosmos, a fan-made postage stamp for Kaṇāda, and a
//  palm-leaf photograph with its caption burnt in.
//
//  **Paintings, manuscripts and sculpture, not snapshots** — the rule the
//  festival pictures already keep.
//
//  **No alt text, no picture.** An entry with no alt written is not
//  shown, so a file can never reach a page undescribed.
//
//  **Where no picture would do, a drawing.** `ART` names the drawing in
//  components/rituals/RiteArt.tsx for each place a free picture does not
//  exist — Nyāya, Mīmāṃsā, Pṛthu, the Vedānta and Āgama branches.
// ─────────────────────────────────────────────────────────

export type ImageKind = "purana" | "story" | "darshana" | "branch";

export interface SectionImage {
  src: string;
  width: number;
  height: number;
  credit: string;
  /** Absent for a picture the owner supplied without a source. */
  sourceUrl?: string;
  alt: Record<Locale, string>;
  /** Which part of the frame a crop must keep. */
  position: string;
}

type Entry = { src: string; width: number; height: number; credit: string; sourceUrl: string };

const a = (en: string, kn: string, hi: string): Record<Locale, string> => ({ en, kn, hi });

const ALT: Record<ImageKind, Record<string, Record<Locale, string>>> = {
  purana: {
    brahma: a("Brahmā, four-headed, riding his swan — a Pahari painting", "ನಾಲ್ಕು ತಲೆಯ ಬ್ರಹ್ಮ ತನ್ನ ಹಂಸದ ಮೇಲೆ — ಪಹಾಡಿ ಚಿತ್ರ", "चतुर्मुख ब्रह्मा अपने हंस पर — पहाड़ी चित्र"),
    padma: a("Brahmā, Viṣṇu and Śiva, each seated on a lotus with his consort — painting, about 1770", "ಬ್ರಹ್ಮ, ವಿಷ್ಣು, ಶಿವ — ಪ್ರತಿಯೊಬ್ಬರೂ ಪತ್ನಿಯೊಡನೆ ಕಮಲದ ಮೇಲೆ — ಸುಮಾರು 1770ರ ಚಿತ್ರ", "ब्रह्मा, विष्णु और शिव, प्रत्येक पत्नी सहित कमल पर — लगभग 1770 का चित्र"),
    vishnu: a("Viṣṇu and Lakṣmī seated on a lotus — painting", "ಕಮಲದ ಮೇಲೆ ಕುಳಿತ ವಿಷ್ಣು ಮತ್ತು ಲಕ್ಷ್ಮಿ — ಚಿತ್ರ", "कमल पर विराजमान विष्णु और लक्ष्मी — चित्र"),
    shiva: a("Śiva and Pārvatī playing dice — Devidāsa of Nurpur, 1690s", "ಪಗಡೆಯಾಡುತ್ತಿರುವ ಶಿವ ಮತ್ತು ಪಾರ್ವತಿ — ನೂರ್‌ಪುರದ ದೇವಿದಾಸ, 1690ರ ದಶಕ", "चौपड़ खेलते शिव और पार्वती — नूरपुर के देवीदास, 1690 का दशक"),
    bhagavata: a("Kṛṣṇa and Balarāma taking the cattle to graze — folio from a Bhāgavata Purāṇa manuscript", "ಕೃಷ್ಣ ಬಲರಾಮರು ಹಸುಗಳನ್ನು ಮೇಯಿಸಲು ಒಯ್ಯುವುದು — ಭಾಗವತ ಹಸ್ತಪ್ರತಿಯ ಪುಟ", "कृष्ण और बलराम गायें चराने ले जाते हुए — भागवत पुराण की पांडुलिपि का पृष्ठ"),
    narada: a("Nārada at Vālmīki's hermitage, asking him to write the story of Rāma — painting", "ರಾಮಕಥೆ ಬರೆಯಲು ವಾಲ್ಮೀಕಿಯನ್ನು ಕೇಳುತ್ತಿರುವ ನಾರದ, ಅವರ ಆಶ್ರಮದಲ್ಲಿ — ಚಿತ್ರ", "वाल्मीकि के आश्रम में नारद, उनसे रामकथा लिखने का आग्रह करते हुए — चित्र"),
    markandeya: a("The Goddess battling the demons — folio from a Devī Māhātmya manuscript", "ದೈತ್ಯರೊಡನೆ ಹೋರಾಡುತ್ತಿರುವ ದೇವಿ — ದೇವೀ ಮಾಹಾತ್ಮ್ಯ ಹಸ್ತಪ್ರತಿಯ ಪುಟ", "दैत्यों से युद्ध करती देवी — देवी माहात्म्य की पांडुलिपि का पृष्ठ"),
    agni: a("Agni, god of fire, riding a ram, with attendants — Poona painting", "ಟಗರಿನ ಮೇಲೆ ಅಗ್ನಿ, ಪರಿಚಾರಕರೊಡನೆ — ಪುಣೆಯ ಚಿತ್ರ", "मेढ़े पर सवार अग्नि, सेवकों सहित — पुणे का चित्र"),
    bhavishya: a("Sūrya, the sun, driving his chariot — gouache drawing", "ರಥವನ್ನು ನಡೆಸುತ್ತಿರುವ ಸೂರ್ಯ — ಗೌಷ್ ಚಿತ್ರ", "अपना रथ चलाते सूर्य — गुआश चित्र"),
    brahmavaivarta: a("Rādhā and Kṛṣṇa in a grove — Kangra painting", "ತೋಪಿನಲ್ಲಿ ರಾಧೆ ಮತ್ತು ಕೃಷ್ಣ — ಕಾಂಗ್ರಾ ಚಿತ್ರ", "कुंज में राधा और कृष्ण — कांगड़ा चित्र"),
    linga: a("Liṅgodbhava: Śiva appearing in the pillar of fire — carved temple niche", "ಲಿಂಗೋದ್ಭವ: ಅಗ್ನಿಸ್ತಂಭದಲ್ಲಿ ಪ್ರಕಟವಾಗುವ ಶಿವ — ದೇವಾಲಯದ ಕೆತ್ತನೆ", "लिंगोद्भव: अग्नि-स्तंभ में प्रकट शिव — मंदिर की उत्कीर्ण आला"),
    varaha: a("Viṣṇu as the boar Varāha, lifting the earth — Raja Ravi Varma", "ಭೂಮಿಯನ್ನು ಎತ್ತುತ್ತಿರುವ ವರಾಹರೂಪಿ ವಿಷ್ಣು — ರಾಜಾ ರವಿವರ್ಮ", "पृथ्वी को उठाते वराह-रूप विष्णु — राजा रवि वर्मा"),
    skanda: a("Murugan, Skanda, on his peacock with his consorts — Raja Ravi Varma", "ನವಿಲಿನ ಮೇಲೆ ಪತ್ನಿಯರೊಡನೆ ಮುರುಗನ್, ಸ್ಕಂದ — ರಾಜಾ ರವಿವರ್ಮ", "मोर पर पत्नियों सहित मुरुगन, स्कंद — राजा रवि वर्मा"),
    vamana: a("Viṣṇu as Vāmana accepting water from Bali as the token of a gift — painting", "ದಾನದ ಸಂಕೇತವಾಗಿ ಬಲಿಯಿಂದ ನೀರು ಸ್ವೀಕರಿಸುತ್ತಿರುವ ವಾಮನ — ಚಿತ್ರ", "दान के चिह्न के रूप में बलि से जल ग्रहण करते वामन — चित्र"),
    kurma: a("Viṣṇu as Kūrma, the tortoise, rising from the ocean — Raja Ravi Varma", "ಸಮುದ್ರದಿಂದ ಏಳುತ್ತಿರುವ ಕೂರ್ಮರೂಪಿ ವಿಷ್ಣು — ರಾಜಾ ರವಿವರ್ಮ", "समुद्र से उठते कूर्म-रूप विष्णु — राजा रवि वर्मा"),
    matsya: a("Viṣṇu as Matsya, the fish — painting, about 1850", "ಮತ್ಸ್ಯರೂಪಿ ವಿಷ್ಣು — ಸುಮಾರು 1850ರ ಚಿತ್ರ", "मत्स्य-रूप विष्णु — लगभग 1850 का चित्र"),
    garuda: a("Viṣṇu and Lakṣmī riding Garuḍa — Raja Ravi Varma", "ಗರುಡನ ಮೇಲೆ ವಿಷ್ಣು ಮತ್ತು ಲಕ್ಷ್ಮಿ — ರಾಜಾ ರವಿವರ್ಮ", "गरुड़ पर विष्णु और लक्ष्मी — राजा रवि वर्मा"),
    brahmanda: a("Tripurasundarī, the goddess Lalitā, enthroned in a pavilion — Kangra painting", "ಮಂಟಪದಲ್ಲಿ ಆಸೀನಳಾದ ತ್ರಿಪುರಸುಂದರಿ, ಲಲಿತಾ ದೇವಿ — ಕಾಂಗ್ರಾ ಚಿತ್ರ", "मंडप में विराजमान त्रिपुरसुंदरी, देवी ललिता — कांगड़ा चित्र"),
  },
  story: {
    dhruva: a("The boy Dhruva in meditation as Viṣṇu appears before him — painting", "ಧ್ಯಾನದಲ್ಲಿರುವ ಬಾಲಕ ಧ್ರುವನ ಮುಂದೆ ವಿಷ್ಣು ಪ್ರತ್ಯಕ್ಷನಾಗುವುದು — ಚಿತ್ರ", "ध्यानमग्न बालक ध्रुव के सामने विष्णु का प्रकट होना — चित्र"),
    prahlada: a("Narasiṃha, the man-lion — oil painting", "ನರಸಿಂಹ — ತೈಲಚಿತ್ರ", "नरसिंह — तैलचित्र"),
    "samudra-manthana": a("Gods and demons churning the ocean of milk — painting, Metropolitan Museum of Art", "ದೇವಾಸುರರು ಕ್ಷೀರಸಮುದ್ರವನ್ನು ಮಥಿಸುವುದು — ಚಿತ್ರ, ಮೆಟ್ರೊಪಾಲಿಟನ್ ವಸ್ತುಸಂಗ್ರಹಾಲಯ", "देव और असुर क्षीरसागर का मंथन करते हुए — चित्र, मेट्रोपॉलिटन संग्रहालय"),
    "vamana-bali": a("Vāmana being blessed by King Bali — painting, Metropolitan Museum of Art", "ರಾಜ ಬಲಿಯಿಂದ ಆಶೀರ್ವಾದ ಪಡೆಯುತ್ತಿರುವ ವಾಮನ — ಚಿತ್ರ, ಮೆಟ್ರೊಪಾಲಿಟನ್ ವಸ್ತುಸಂಗ್ರಹಾಲಯ", "राजा बलि से आशीर्वाद पाते वामन — चित्र, मेट्रोपॉलिटन संग्रहालय"),
    "gajendra-moksha": a("Viṣṇu coming to free the elephant king from the crocodile — Kota painting, 19th century", "ಮೊಸಳೆಯಿಂದ ಗಜೇಂದ್ರನನ್ನು ಬಿಡಿಸಲು ಬರುತ್ತಿರುವ ವಿಷ್ಣು — ಕೋಟಾ ಚಿತ್ರ, 19ನೇ ಶತಮಾನ", "मगर से गजराज को छुड़ाने आते विष्णु — कोटा चित्र, 19वीं शताब्दी"),
    "mahishasura-mardini": a("Durgā slaying the buffalo demon Mahiṣa — painting", "ಮಹಿಷಾಸುರನನ್ನು ಸಂಹರಿಸುತ್ತಿರುವ ದುರ್ಗೆ — ಚಿತ್ರ", "महिषासुर का वध करती दुर्गा — चित्र"),
    jadabharata: a("Bharata saving the fawn — illustration", "ಜಿಂಕೆಮರಿಯನ್ನು ಕಾಪಾಡುತ್ತಿರುವ ಭರತ — ಚಿತ್ರ", "मृगशावक को बचाते भरत — चित्र"),
    markandeya: a("The boy Mārkaṇḍeya clinging to the liṅga as Śiva strikes down Yama — Raja Ravi Varma", "ಲಿಂಗವನ್ನು ತಬ್ಬಿದ ಬಾಲಕ ಮಾರ್ಕಂಡೇಯ, ಶಿವ ಯಮನನ್ನು ಕೆಡವುವುದು — ರಾಜಾ ರವಿವರ್ಮ", "लिंग से लिपटा बालक मार्कंडेय, शिव यम को गिराते हुए — राजा रवि वर्मा"),
  },
  darshana: {
    sankhya: a("Kapila, the sage held to have founded Sāṅkhya — Company painting", "ಸಾಂಖ್ಯದ ಸ್ಥಾಪಕನೆಂದು ನಂಬುವ ಋಷಿ ಕಪಿಲ — ಕಂಪನಿ ಶೈಲಿಯ ಚಿತ್ರ", "सांख्य के प्रवर्तक माने गए ऋषि कपिल — कंपनी शैली का चित्र"),
    yoga: a("Patañjali, shown half-serpent as an incarnation of Ādiśeṣa — painting", "ಆದಿಶೇಷನ ಅವತಾರವಾಗಿ ಅರ್ಧ ಸರ್ಪರೂಪದ ಪತಂಜಲಿ — ಚಿತ್ರ", "आदिशेष के अवतार के रूप में अर्ध-सर्प पतंजलि — चित्र"),
    vedanta: a("Shankara teaching his disciples beside a river — painting", "ನದಿಯ ದಡದಲ್ಲಿ ಶಿಷ್ಯರಿಗೆ ಉಪದೇಶಿಸುತ್ತಿರುವ ಶಂಕರರು — ಚಿತ್ರ", "नदी तट पर शिष्यों को उपदेश देते शंकर — चित्र"),
  },
  branch: {
    vedangas: a("Patañjali's Great Commentary on grammar, with a later commentary on it — manuscript pages", "ವ್ಯಾಕರಣದ ಮೇಲಿನ ಪತಂಜಲಿಯ ಮಹಾಭಾಷ್ಯ, ನಂತರದ ಟೀಕೆಯೊಡನೆ — ಹಸ್ತಪ್ರತಿ ಪುಟಗಳು", "व्याकरण पर पतंजलि का महाभाष्य, बाद की टीका सहित — पांडुलिपि के पृष्ठ"),
    dharma: a("The Nāradasmṛti, a law text, on palm leaves — Nepal, 1407", "ತಾಳೆಗರಿಯ ಮೇಲೆ ನಾರದಸ್ಮೃತಿ ಎಂಬ ಧರ್ಮಶಾಸ್ತ್ರ — ನೇಪಾಳ, 1407", "ताड़पत्र पर नारदस्मृति, एक धर्मशास्त्र — नेपाल, 1407"),
    itihasa: a("Rāma and Lakṣmaṇa arrive at Lake Pampā — Mewar Rāmāyaṇa, 1653", "ರಾಮ ಲಕ್ಷ್ಮಣರು ಪಂಪಾ ಸರೋವರಕ್ಕೆ ಬರುವುದು — ಮೇವಾಡ ರಾಮಾಯಣ, 1653", "राम और लक्ष्मण पंपा सरोवर पहुँचते हुए — मेवाड़ रामायण, 1653"),
  },
};

/** Where the crop must hold. Tall paintings lose the face centred. */
const POSITION: Record<string, string> = {
  "purana:brahma": "50% 30%",
  "purana:kurma": "50% 30%",
  "purana:matsya": "50% 30%",
  "purana:skanda": "50% 30%",
  "purana:vamana": "50% 40%",
  "purana:garuda": "50% 35%",
  "purana:brahmanda": "50% 40%",
  "purana:vishnu": "50% 45%",
  "purana:varaha": "50% 30%",
  "story:markandeya": "50% 35%",
  "story:dhruva": "50% 40%",
  "story:vamana-bali": "50% 35%",
  "darshana:sankhya": "50% 35%",
  "darshana:yoga": "50% 30%",
};

/** A drawing for each place no free picture exists. */
const ART: Record<string, string> = {
  "story:prithu": "story-prithu",
  "darshana:nyaya": "darshana-nyaya",
  "darshana:mimamsa": "darshana-mimamsa",
  "branch:vedanta": "branch-vedanta",
  "branch:agamas": "branch-agamas",
  "darshana:vaisheshika": "darshana-vaisheshika",
  "branch:prakarana": "branch-prakarana",
  "branch:veda": "branch-veda",
  "branch:upanishads": "branch-upanishads",
  "branch:darshanas": "branch-darshanas",
};

/**
 * A picture another entry already carries, shown again where it
 * stands for the whole. The map's Purāṇas card takes the Bhāgavata
 * folio: a Purāṇa manuscript, which is what the branch is.
 */
const ALIAS: Record<string, [ImageKind, string, string?]> = {
  "branch:puranas": ["purana", "bhagavata", "30% 22%"],
};

/**
 * The owner's pictures (seed/owner-images.ts), which take the place of
 * a drawing: the Vedas' own volumes, palm-leaf bundles for the
 * Upanisads, one small manuscript in a hand for the short teaching
 * texts, the image-maker's measured Nataraja for the Agamas, and
 * Shankara for Vedanta.
 */
const OWNED: Record<string, OwnerImageId> = {
  "branch:veda": "vedaBooks",
  "branch:upanishads": "palmLeafBundles",
  "branch:prakarana": "palmLeafInHand",
  "branch:agamas": "natarajaMeasures",
  "branch:vedanta": "shankara",
};

const SOURCES: Record<ImageKind, Record<string, Entry>> = {
  purana: puranas as Record<string, Entry>,
  story: stories as Record<string, Entry>,
  darshana: darshanas as Record<string, Entry>,
  branch: shastras as Record<string, Entry>,
};

export function sectionImage(kind: ImageKind, slug: string): SectionImage | undefined {
  const owned = OWNED[`${kind}:${slug}`];
  if (owned) return OWNER_IMAGES[owned];
  const alias = ALIAS[`${kind}:${slug}`];
  if (alias) {
    const img = sectionImage(alias[0], alias[1]);
    return img && alias[2] ? { ...img, position: alias[2] } : img;
  }
  const entry = SOURCES[kind][slug];
  const alt = ALT[kind][slug];
  if (!entry || !alt) return undefined;
  return { ...entry, alt, position: POSITION[`${kind}:${slug}`] ?? "50% 50%" };
}

/** The drawing to show when there is no picture, if one was made. */
export function sectionArt(kind: ImageKind, slug: string): string | undefined {
  if (OWNED[`${kind}:${slug}`]) return undefined;
  return ART[`${kind}:${slug}`];
}

/** Every picture the registry will show, for the tests. */
export function allSectionImages(): [string, SectionImage][] {
  const out: [string, SectionImage][] = [];
  for (const key of Object.keys(OWNED)) {
    const [kind, slug] = key.split(":") as [ImageKind, string];
    out.push([key, sectionImage(kind, slug)!]);
  }
  for (const kind of Object.keys(SOURCES) as ImageKind[]) {
    for (const slug of Object.keys(SOURCES[kind])) {
      const img = sectionImage(kind, slug);
      if (img) out.push([`${kind}:${slug}`, img]);
    }
  }
  return out;
}
