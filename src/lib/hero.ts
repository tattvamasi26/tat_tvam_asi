// ─────────────────────────────────────────────────────────
//  Hero imagery, and the colour grading sampled from it.
//
//  Presentational, not content — these are not entities anyone
//  browses, so they stay out of src/lib/seed/ and out of the
//  Supabase push. Each still carries its author and licence,
//  because CC BY-SA requires attribution wherever the file is
//  served from, and because this site cites its sources.
//
//  Served from public/ rather than hotlinked: Wikimedia rate-
//  limits (HTTP 429) image requests from a single origin, which
//  left the hero blank under normal use. Local files also mean
//  the page renders offline and cannot break when an upstream
//  file is renamed or deleted.
//
//  EVERY frame here must be at least ~3840px wide. The rotation
//  is only as good as its worst frame: this list previously
//  carried a 753x450 Varanasi photograph that was being upscaled
//  roughly five times on a 4K display, and that single frame was
//  what made the whole hero look soft.
//
//  Ordered as a tonal arc, and deliberately opening on the
//  strongest frame: the first image is the LCP element and the
//  one every visitor lands on, so it is the dusk-lit Thanjavur
//  tower rather than a flatter midday shot. From there: carved
//  detail, marble, stone, and out to open water at sunrise.
// ─────────────────────────────────────────────────────────

/**
 * Colour grading sampled from the photograph itself.
 *
 * These are measured, not chosen: `public/_extract.html` draws each
 * frame to a canvas, reads the pixels back, and reports the frame's
 * own hue and its most chromatic colour. Regenerate it whenever a
 * frame is swapped, or the page grades itself to an image that is no
 * longer on screen.
 *
 * Note the accents are not all warm. Thanjavur at dusk and the haze
 * over Ellora genuinely are blue, so their frames grade cool — that is
 * the photograph being honest, not a sampling error. The site's gold
 * stays on the buttons and other fixed chrome; only per-frame
 * decoration follows the image.
 */
export interface Grade {
  /** The frame's hue pushed dark — what the scrim grades toward. */
  tint: string;
  /** The frame's most chromatic colour, lifted to stay legible on black. */
  accent: string;
  /** How hard to darken. Brighter frames need more to hold the same text. */
  scrim: number;
}

export interface HeroImage {
  src: string;
  grade: Grade;
  /** Shown as the caption; the images themselves are decorative. */
  place: string;
  credit: string;
  /** Focal point, so cropping at any viewport keeps the subject. */
  position: string;
}

export const HERO_IMAGES: HeroImage[] = [
  {
    src: "/images/site/brihadeeswarar.jpg",
    grade: { tint: "#090d13", accent: "#4b81d2", scrim: 0.465 },
    place: "Brihadeeswarar · Thanjavur",
    credit: "Rainer Halama / UnpetitproleX · CC BY-SA 4.0",
    position: "50% 40%",
  },
  {
    src: "/images/site/konark-wheel.jpg",
    grade: { tint: "#130d09", accent: "#b3754d", scrim: 0.443 },
    place: "Sun Temple · Konark",
    credit: "Subhrajyoti07 · CC BY-SA 4.0",
    position: "50% 50%",
  },
  {
    src: "/images/site/ranakpur.jpg",
    grade: { tint: "#130909", accent: "#c9a227", scrim: 0.456 },
    place: "Ranakpur",
    credit: "Mustang Joe · CC0",
    position: "50% 50%",
  },
  {
    src: "/images/site/ellora.jpg",
    grade: { tint: "#090d13", accent: "#73a2e8", scrim: 0.54 },
    place: "Kailasa Temple · Ellora",
    credit: "Shishirdasika · CC BY-SA 4.0",
    position: "50% 45%",
  },
  {
    src: "/images/site/varanasi.jpg",
    grade: { tint: "#130d09", accent: "#d1a68a", scrim: 0.42 },
    place: "The Ganga at sunrise · Varanasi",
    credit: "Schwiki · CC BY-SA 4.0",
    position: "50% 50%",
  },
];

/**
 * Grades for images that are not in the rotation but still get a
 * full-viewport treatment somewhere (a pinned scene, a texture band).
 * Same provenance as the ones above.
 */
const GRADES: Record<string, Grade> = {
  "/images/site/brihadeeswarar.jpg": { tint: "#090d13", accent: "#4b81d2", scrim: 0.465 },
  "/images/site/konark-wheel.jpg": { tint: "#130d09", accent: "#b3754d", scrim: 0.443 },
  "/images/site/ranakpur.jpg": { tint: "#130909", accent: "#c9a227", scrim: 0.456 },
  "/images/site/ellora.jpg": { tint: "#090d13", accent: "#73a2e8", scrim: 0.54 },
  "/images/site/varanasi.jpg": { tint: "#130d09", accent: "#d1a68a", scrim: 0.42 },
  "/images/site/hampi.jpg": { tint: "#130d09", accent: "#cea78d", scrim: 0.616 },
  "/images/site/halebidu.jpg": { tint: "#130f09", accent: "#b38b4f", scrim: 0.615 },
  "/images/site/rigveda.jpg": { tint: "#130f09", accent: "#d1b48a", scrim: 0.671 },
  "/images/site/meenakshi.jpg": { tint: "#130f09", accent: "#ceb48d", scrim: 0.573 },
  "/images/site/konark.jpg": { tint: "#090f13", accent: "#85b5d6", scrim: 0.545 },
};

/** The site's own tones, used for any image that has not been sampled. */
export const DEFAULT_GRADE: Grade = { tint: "#0b0a09", accent: "#c9a227", scrim: 0.55 };

export function gradeFor(src: string): Grade {
  return GRADES[src] ?? DEFAULT_GRADE;
}

/** Detail imagery used as section texture rather than as a backdrop. */
export const TEXTURE = {
  // Contextually the right image — an actual Rigveda manuscript — but only
  // 1100px wide, so it is never given a full-bleed treatment. Replace it
  // before using it any larger than a bounded panel.
  manuscript: {
    src: "/images/site/rigveda.jpg",
    credit: "Rigveda manuscript MS2097 · Public domain · Wikimedia Commons",
  },
  wheel: {
    src: "/images/site/konark-wheel.jpg",
    credit: "Subhrajyoti07 · CC BY-SA 4.0 · Wikimedia Commons",
  },
  reliefs: {
    src: "/images/site/halebidu.jpg",
    credit: "Goutam1962 · CC BY-SA 4.0 · Wikimedia Commons",
  },
};
