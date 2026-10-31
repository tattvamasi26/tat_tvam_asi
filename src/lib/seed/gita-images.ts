import { OWNER_IMAGES, type OwnerImage, type OwnerImageId } from "./owner-images";

// ─────────────────────────────────────────────────────────
//  A picture for each of the eighteen chapters, from the pictures the
//  owner supplied, each chosen for what its chapter does:
//
//   1  Arjuna alone in the mist — the only chapter with no teaching.
//   2  Arjuna kneeling to be taught — "I am your disciple" (2.7).
//   3  The chariot between the armies — action that cannot be avoided.
//   4  The avatāra descending — "whenever dharma declines" (4.7).
//   5  A lotus on dark water — untouched, as the lotus leaf (5.10).
//   6  Sitting on the hill — the practical chapter on where to sit.
//   7  Kṛṣṇa with Viṣṇu behind him — where the speaker is revealed.
//   8  Sun and moon — the two roads the dead are said to take.
//   9  A lotus offered to a blue hand — "a leaf, a flower" (9.26).
//  10  Viṣṇu on Śeṣa among the stars — the glories.
//  11  The universal form over the battlefield — the vision.
//  12  Kṛṣṇa with the flute — devotion.
//  13  The body and its centres — the field and its knower.
//  14  A lamp against the dusk — light among the three strands.
//  15  The temple and its tree reflected upside down — the inverted
//      aśvattha the chapter opens with.
//  16  Kṛṣṇa radiant in the clouds — the divine nature.
//  17  A japa mala — austerity of speech, the third kind of tapas.
//  18  Arjuna kneeling before the discus — letting go.
// ─────────────────────────────────────────────────────────

const CHAPTERS: Record<number, OwnerImageId> = {
  1: "gitaArjunaAlone",
  2: "gitaArjunaKneels",
  3: "gitaChariot",
  4: "gitaDescent",
  5: "lotus",
  6: "meditationHill",
  7: "gitaKrishnaVishnu",
  8: "cosmos",
  9: "lotusOffering",
  10: "vishnuAnantashayana",
  11: "gitaVishvarupaField",
  12: "krishnaFluteMist",
  13: "bodyChakras",
  14: "deepaDusk",
  15: "templeWatercolour",
  16: "krishnaClouds",
  17: "japaMala",
  18: "gitaSurrender",
};

/** Where a wide card's crop must hold, where the picture's own default misses a face. */
const POSITION: Record<number, string> = {
  1: "50% 22%",
  4: "50% 24%",
  11: "50% 18%",
  16: "50% 18%",
};

export function gitaChapterImage(n: number): OwnerImage | undefined {
  const key = CHAPTERS[n];
  if (!key) return undefined;
  const img = OWNER_IMAGES[key];
  return POSITION[n] ? { ...img, position: POSITION[n] } : img;
}

/** The picture at the head of the Gita's own page. */
export const GITA_HEAD_IMAGE = OWNER_IMAGES.gitaTeaching;
