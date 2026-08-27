// ─────────────────────────────────────────────────────────
//  Hero imagery.
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

export interface HeroImage {
  src: string;
  /** Shown as the caption; the images themselves are decorative. */
  place: string;
  credit: string;
  /** Focal point, so cropping at any viewport keeps the subject. */
  position: string;
}

export const HERO_IMAGES: HeroImage[] = [
  {
    src: "/images/site/brihadeeswarar.jpg",
    place: "Brihadeeswarar · Thanjavur",
    credit: "Rainer Halama / UnpetitproleX · CC BY-SA 4.0",
    position: "50% 40%",
  },
  {
    src: "/images/site/konark-wheel.jpg",
    place: "Sun Temple · Konark",
    credit: "Subhrajyoti07 · CC BY-SA 4.0",
    position: "50% 50%",
  },
  {
    src: "/images/site/ranakpur.jpg",
    place: "Ranakpur",
    credit: "Mustang Joe · CC0",
    position: "50% 50%",
  },
  {
    src: "/images/site/ellora.jpg",
    place: "Kailasa Temple · Ellora",
    credit: "Shishirdasika · CC BY-SA 4.0",
    position: "50% 45%",
  },
  {
    src: "/images/site/varanasi.jpg",
    place: "The Ganga at sunrise · Varanasi",
    credit: "Schwiki · CC BY-SA 4.0",
    position: "50% 50%",
  },
];

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
