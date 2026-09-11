import type { CSSProperties } from "react";

// ─────────────────────────────────────────────────────────
//  The mark: a lotus in bloom, seen from the side.
//
//  Seven petals fan from one point at the stem — five in ink, and
//  the outer two in brass. This is the padma from the logo design
//  canvas ("Bloom, side profile", Tat tvam asi Logo Design.zip),
//  geometry copied exactly. Below 24px seven petals blur into a
//  smudge, so the mark drops to five, in one colour, on a tighter
//  viewBox — the rule the canvas specifies for small sizes.
//
//  Colour comes from CSS, never from the file: ink petals are
//  `currentColor` and brass petals read `--mark-accent`, so the one
//  component serves the cream masthead, the dark footer and the
//  index overlay without variants.
//
//  The Rosette below is the canvas's other study, the eight-petalled
//  ashtadala. It is the same family drawn radially, so it is used as
//  ornament — the slow-turning figure behind the footer and the
//  closing band — where a side profile would look wrong rotating.
// ─────────────────────────────────────────────────────────

const PETAL =
  "M0 0 C9 -16 16 -36 16 -54 C16 -68 8 -80 2 -87 C1 -88.5 -1 -88.5 -2 -87 C-8 -80 -16 -68 -16 -54 C-16 -36 -9 -16 0 0 Z";

type Petal = readonly [angle: number, scale: number];

interface BloomGeometry {
  box: readonly [number, number, number, number];
  accent: readonly Petal[];
  ink: readonly Petal[];
}

/** 24px and up: seven petals — five ink, the outermost two brass. */
const BLOOM: BloomGeometry = {
  box: [20, 46, 160, 106],
  accent: [
    [-84, 0.74],
    [84, 0.74],
  ],
  ink: [
    [-67, 0.9],
    [-34, 0.96],
    [0, 1],
    [34, 0.96],
    [67, 0.9],
  ],
};

/** Under 24px: five petals in one colour, on a tighter box. */
const BLOOM_COMPACT: BloomGeometry = {
  box: [26, 54, 148, 100],
  accent: [],
  ink: [
    [-70, 0.84],
    [-35, 0.94],
    [0, 1],
    [35, 0.94],
    [70, 0.84],
  ],
};

/** Rendered widths below this use the compact, five-petal bloom. */
export const MARK_COMPACT_BELOW = 24;

export function bloomGeometry(width: number): BloomGeometry {
  return width < MARK_COMPACT_BELOW ? BLOOM_COMPACT : BLOOM;
}

/** The mark's rendered height for a given width, keeping its proportions. */
export function markHeight(width: number): number {
  const [, , w, h] = bloomGeometry(width).box;
  return Math.round((width * h) / w);
}

function petal([angle, scale]: Petal) {
  return (
    <path
      key={angle}
      d={PETAL}
      transform={`translate(100 148) rotate(${angle}) scale(${scale})`}
      // Distance from the centre petal, for the opening animation's stagger.
      style={{ ["--k" as string]: Math.abs(angle) / 28 } as CSSProperties}
    />
  );
}

export function Mark({
  size = 36,
  className = "",
  animated = false,
  label,
}: {
  /** Rendered width in px; the height follows the mark's proportions. */
  size?: number;
  className?: string;
  /** Petals fan open from the stem on first paint. Used in the index overlay. */
  animated?: boolean;
  /** Give the mark a name only where it stands alone; in a lockup the link carries it. */
  label?: string;
}) {
  const g = bloomGeometry(size);

  return (
    <svg
      width={size}
      height={markHeight(size)}
      viewBox={g.box.join(" ")}
      className={["mark", animated ? "mark-bloom" : "", className].filter(Boolean).join(" ")}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {g.accent.length > 0 && (
        <g className="mark-accent" fill="#c9954a">
          {g.accent.map(petal)}
        </g>
      )}
      <g className="mark-ink" fill="currentColor">
        {g.ink.map(petal)}
      </g>
    </svg>
  );
}

const ROSETTE_OUTER =
  "M100 100 C106 88 111 72 111 57 C111 43 105 33 101.3 26 C100.7 24.8 99.3 24.8 98.7 26 C95 33 89 43 89 57 C89 72 94 88 100 100 Z";
const ROSETTE_INNER =
  "M100 96 C104 88 108 74 108 64 C108 57 104 53 101 49 C100.5 48.3 99.5 48.3 99 49 C96 53 92 57 92 64 C92 74 96 88 100 96 Z";

/**
 * The ashtadala: eight outline petals over a filled rosette, with the
 * bindu at the centre. Decorative only. `id` keeps the mask unique when
 * more than one rosette is on the page.
 */
export function Rosette({ id, size = 200, className = "" }: { id: string; size?: number; className?: string }) {
  const maskId = `rosette-hole-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={["rosette", className].filter(Boolean).join(" ")}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <mask id={maskId}>
          <rect width="200" height="200" fill="#fff" />
          <circle cx="100" cy="100" r="20" fill="#000" />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        <g
          className="rosette-line"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          {Array.from({ length: 8 }, (_, i) => (
            <path key={i} d={ROSETTE_OUTER} transform={`rotate(${45 * i} 100 100)`} />
          ))}
        </g>
        <g className="rosette-fill" fill="currentColor" opacity="0.55">
          {Array.from({ length: 8 }, (_, i) => (
            <path key={i} d={ROSETTE_INNER} transform={`rotate(${22.5 + 45 * i} 100 100)`} />
          ))}
        </g>
      </g>
      <circle className="rosette-bindu" cx="100" cy="100" r="11" fill="currentColor" />
    </svg>
  );
}

/**
 * Mark + name, the lockup used in the masthead, the index and the footer.
 *
 * The name follows the reading language rather than staying Latin
 * throughout: an English lockup above a Kannada page reads as another
 * site's logo pasted onto the wrong page. In Latin it is set as the
 * canvas specifies — Cormorant Garamond, lightly letter-spaced.
 *
 * `name` and `scriptClass` are passed in rather than read here, because
 * this also renders inside a client component with no access to the
 * request's locale.
 */
export function Wordmark({
  size = 38,
  name,
  scriptClass = "",
}: {
  size?: number;
  name: string;
  scriptClass?: string;
}) {
  return (
    <span className="lockup">
      <Mark size={size} />
      <span className={`lockup-text ${scriptClass}`.trim()}>{name}</span>
    </span>
  );
}
