import type { LokaView } from "@/lib/data";

/**
 * The fourteen worlds on their axis, ours in the middle.
 *
 * Vertical because the texts are: they are stacked, not scattered,
 * and bhūḥ is not at the bottom of the arrangement but at its centre
 * with seven above and seven below. Almost every popular diagram puts
 * this world at the bottom and the lower worlds in a cellar, which
 * inverts the one structural fact the scheme is making a point of.
 *
 * The three that burn at the end of a kalpa are marked, because they
 * are exactly the three the gāyatrī names.
 */

const LEFT = 26;
const TOP = 14;
const STEP = 23;
const DOT = 5.5;

export function LokaAxis({
  lokas,
  caption,
  perishableLabel,
}: {
  lokas: LokaView[];
  caption: string;
  /** Marks the three that burn. */
  perishableLabel: string;
}) {
  const height = TOP * 2 + STEP * (lokas.length - 1);
  // Sorted from the top of the axis downwards.
  const ordered = [...lokas].sort((a, b) => b.level - a.level);

  return (
    <figure className="co-lokas">
      <svg viewBox={`0 0 420 ${height}`} role="img" aria-label={caption}>
        <line x1={LEFT} y1={TOP} x2={LEFT} y2={TOP + STEP * (ordered.length - 1)} className="co-axis" />

        {ordered.map((l, i) => {
          const y = TOP + i * STEP;
          const here = l.level === 0;
          const perishable = l.level >= 0 && l.level <= 2;
          return (
            <g key={l.id}>
              {here && <rect x={0} y={y - 11} width={420} height={22} className="co-here-band" />}
              <circle
                cx={LEFT}
                cy={y}
                r={here ? DOT + 2 : DOT}
                className="co-loka-dot"
                data-here={here ? "yes" : "no"}
                data-perishable={perishable ? "yes" : "no"}
              />
              <text x={LEFT + 16} y={y + 4} className="co-loka-name" data-here={here ? "yes" : "no"}>
                {l.name}
              </text>
              {perishable && (
                <text x={414} y={y + 4} className="co-loka-note" textAnchor="end">
                  {perishableLabel}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      <figcaption className="co-caption">{caption}</figcaption>
    </figure>
  );
}
