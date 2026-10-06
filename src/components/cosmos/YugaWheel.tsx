import type { YugaView } from "@/lib/data";

/**
 * The four ages as one ring, each arc sized to its share.
 *
 * The ratio is 4:3:2:1, so Kṛta takes four tenths of the circle and
 * Kali one. Drawn, that says in a glance what a table of four large
 * numbers does not: the age we are in is the shortest of the four by
 * a long way, and it is also the one the texts spend the most words
 * complaining about.
 *
 * The ring is a ring because the mahāyuga repeats. There is no
 * starting point marked, because the scheme has none.
 */

const C = 110;
const OUTER = 86;
const INNER = 58;

function polar(r: number, deg: number): [number, number] {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [C + r * Math.cos(rad), C + r * Math.sin(rad)];
}

function wedge(from: number, to: number): string {
  const [ox1, oy1] = polar(OUTER, from);
  const [ox2, oy2] = polar(OUTER, to);
  const [ix2, iy2] = polar(INNER, to);
  const [ix1, iy1] = polar(INNER, from);
  const large = to - from > 180 ? 1 : 0;
  return [
    `M ${ox1} ${oy1}`,
    `A ${OUTER} ${OUTER} 0 ${large} 1 ${ox2} ${oy2}`,
    `L ${ix2} ${iy2}`,
    `A ${INNER} ${INNER} 0 ${large} 0 ${ix1} ${iy1}`,
    "Z",
  ].join(" ");
}

export function YugaWheel({
  yugas,
  caption,
  centre,
}: {
  yugas: YugaView[];
  caption: string;
  /** Two short lines for the middle. */
  centre: { top: string; bottom: string };
}) {
  const total = yugas.reduce((n, y) => n + y.parts, 0);
  let at = 0;

  return (
    <figure className="co-yuga">
      <svg viewBox="0 0 220 220" role="img" aria-label={caption}>
        {yugas.map((y, i) => {
          const span = (y.parts / total) * 360;
          const from = at;
          at += span;
          const [lx, ly] = polar((OUTER + INNER) / 2, from + span / 2);
          return (
            <g key={y.id}>
              <path
                d={wedge(from + 0.8, from + span - 0.8)}
                className="co-yuga-arc"
                data-yuga={y.id}
                style={{ fillOpacity: 0.22 + i * 0.18 }}
              />
              <text x={lx} y={ly} className="co-yuga-n">
                {y.parts.toLocaleString("en-IN")}
              </text>
            </g>
          );
        })}

        <text x={C} y={C - 6} className="co-centre-top">
          {centre.top}
        </text>
        <text x={C} y={C + 13} className="co-centre-bottom">
          {centre.bottom}
        </text>
      </svg>
      <figcaption className="co-caption">{caption}</figcaption>
    </figure>
  );
}
