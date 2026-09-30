import type { YearLensView } from "@/lib/data";

/**
 * The lunar year, drawn as what it is: a ring.
 *
 * Three things are on it, from the outside in — the festivals as
 * dots at their tithi, the twelve months as a band tinted by how
 * many fall in each, and the observances that come round many times
 * a year as a rhythm of ticks. A reader should be able to see, in one
 * look, that Āṣāḍha is nearly empty and Āśvina is crowded, and that
 * Ekādaśī comes twenty-four times while Ugādi comes once.
 *
 * **It is a drawing, not a control.** Every link lives in the list
 * beside it. A four-pixel dot is a bad tap target and a worse
 * keyboard stop, and the same information twice — once drawn, once
 * written — is what makes the drawing safe to make decorative.
 */

const C = 150; // centre of a 300×300 box
const BAND_OUTER = 118;
const BAND_INNER = 86;
const DOT_RING = 132;
const TICK_RING = 74;
const SPAN_RING = 60;

/** 0° at the top, running clockwise, the way a year is read. */
function polar(r: number, deg: number): [number, number] {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [C + r * Math.cos(rad), C + r * Math.sin(rad)];
}

function arc(r: number, from: number, to: number): string {
  const [x1, y1] = polar(r, from);
  const [x2, y2] = polar(r, to);
  const large = to - from > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
}

function wedge(from: number, to: number): string {
  const [ox1, oy1] = polar(BAND_OUTER, from);
  const [ox2, oy2] = polar(BAND_OUTER, to);
  const [ix2, iy2] = polar(BAND_INNER, to);
  const [ix1, iy1] = polar(BAND_INNER, from);
  return [
    `M ${ox1} ${oy1}`,
    `A ${BAND_OUTER} ${BAND_OUTER} 0 0 1 ${ox2} ${oy2}`,
    `L ${ix2} ${iy2}`,
    `A ${BAND_INNER} ${BAND_INNER} 0 0 0 ${ix1} ${iy1}`,
    "Z",
  ].join(" ");
}

export function YearWheel({
  year,
  caption,
  centre,
}: {
  year: YearLensView;
  caption: string;
  /** Two short lines for the middle of the ring. */
  centre: { top: string; bottom: string };
}) {
  // The busiest month sets the top of the tint scale, so the shading
  // says "relative to the rest of the year" rather than a made-up
  // absolute.
  const busiest = Math.max(1, ...year.months.map((m) => m.festivals.length));

  return (
    <figure className="ry-wheel">
      <svg viewBox="0 0 300 300" role="img" aria-label={caption}>
        {/* the twelve months */}
        {year.months.map((m, i) => {
          const from = i * 30;
          const [tx, ty] = polar((BAND_OUTER + BAND_INNER) / 2, from + 15);
          return (
            <g key={m.id}>
              <path
                d={wedge(from + 0.6, from + 29.4)}
                className="ry-month"
                style={{ fillOpacity: 0.08 + (m.festivals.length / busiest) * 0.34 }}
              />
              <text x={tx} y={ty} className="ry-month-n">
                {m.index.toLocaleString("en-IN")}
              </text>
            </g>
          );
        })}

        {/* the stretches of the year that are kept as a whole */}
        {year.spans.map((s, i) => (
          <path
            key={s.slug}
            d={arc(SPAN_RING - i * 9, s.from, s.to)}
            className="ry-span"
          />
        ))}

        {/* the rhythm of what comes round many times */}
        {year.recurring.map((r, i) =>
          Array.from({ length: r.timesAYear }, (_, k) => {
            const deg = (k / r.timesAYear) * 360;
            const ring = TICK_RING - i * 8;
            const [x1, y1] = polar(ring - 3, deg);
            const [x2, y2] = polar(ring + 3, deg);
            return (
              <line key={`${r.slug}-${k}`} x1={x1} y1={y1} x2={x2} y2={y2} className="ry-tick" />
            );
          }),
        )}

        {/* the festivals */}
        {year.marks.map((m) => {
          const [x, y] = polar(DOT_RING, m.angle ?? 0);
          const [sx, sy] = polar(BAND_OUTER, m.angle ?? 0);
          return (
            <g key={m.slug}>
              <line x1={sx} y1={sy} x2={x} y2={y} className="ry-stem" />
              <circle cx={x} cy={y} r={4} className="ry-dot" />
            </g>
          );
        })}

        <text x={C} y={C - 7} className="ry-centre-top">
          {centre.top}
        </text>
        <text x={C} y={C + 12} className="ry-centre-bottom">
          {centre.bottom}
        </text>
      </svg>
      <figcaption className="ry-caption">{caption}</figcaption>
    </figure>
  );
}
