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
//  Ordered deliberately: the rotation opens on Ellora — a temple
//  carved downward out of one rock — and moves from stone to river.
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
    src: "/images/site/brihadeeswarar.jpg",
    place: "Brihadeeswarar · Thanjavur",
    credit: "Rainer Halama / UnpetitproleX · CC BY-SA 4.0",
    position: "50% 40%",
  },
  {
    src: "/images/site/hampi.jpg",
    place: "Virupaksha · Hampi",
    credit: "iMahesh · CC BY-SA 4.0",
    position: "50% 50%",
  },
  {
    src: "/images/site/varanasi.jpg",
    place: "Dashashwamedh Ghat · Varanasi",
    credit: "Vrinda · CC BY-SA 3.0",
    position: "50% 55%",
  },
];

/** Detail imagery used as section texture rather than as a backdrop. */
export const TEXTURE = {
  manuscript: {
    src: "/images/site/rigveda.jpg",
    credit: "Rigveda manuscript MS2097 · Public domain · Wikimedia Commons",
  },
  reliefs: {
    src: "/images/site/halebidu.jpg",
    credit: "Goutam1962 · CC BY-SA 4.0 · Wikimedia Commons",
  },
};
