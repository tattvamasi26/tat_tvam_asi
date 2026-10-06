import type { TimeUnitView } from "@/lib/data";

/**
 * The ladder of time, drawn on a logarithmic scale.
 *
 * It has to be logarithmic. A blink is a fifth of a second and a life
 * of Brahmā is about 10²² seconds; on a linear axis every unit below
 * a kalpa would sit on top of the zero and the drawing would say
 * nothing. The decades are marked so nobody mistakes it for a linear
 * one — a chart that quietly compresses twenty-two orders of
 * magnitude and does not say so is a lie told in ink.
 *
 * What it shows, and no table does: the rungs are roughly evenly
 * spaced. The scheme climbs by multiplication, in steps of much the
 * same size, from something a person can blink to something nothing
 * can outlive.
 */

const LEFT = 40;
const RIGHT = 575;
const BASE = 74;
const LO = -1; // log10 seconds at the low end
const HI = 22;

const x = (seconds: number) =>
  LEFT + ((Math.log10(seconds) - LO) / (HI - LO)) * (RIGHT - LEFT);

/** Every third decade, so the axis is readable at a phone width. */
const DECADES = [0, 3, 6, 9, 12, 15, 18, 21];

export function TimeScale({
  units,
  caption,
  decadeLabel,
}: {
  units: TimeUnitView[];
  caption: string;
  /** "seconds", for the axis. */
  decadeLabel: string;
}) {
  return (
    <figure className="co-scale">
      <svg viewBox="0 0 600 112" role="img" aria-label={caption}>
        {DECADES.map((d) => (
          <g key={d}>
            <line
              x1={x(Math.pow(10, d))}
              y1={28}
              x2={x(Math.pow(10, d))}
              y2={BASE}
              className="co-grid"
            />
            <text x={x(Math.pow(10, d))} y={BASE + 20} className="co-axis-label">
              {d === 0 ? (
                "1"
              ) : (
                <>
                  10
                  {/* A raised ordinary digit, not a superscript
                      character. U+2070-U+2079 are absent from Google's
                      font subsets, so Chrome drew them in Arial and the
                      font audit failed — which is exactly the rule
                      about never typing a glyph the fonts lack. */}
                  <tspan dy="-4" fontSize="8">
                    {d.toLocaleString("en-IN")}
                  </tspan>
                </>
              )}
            </text>
          </g>
        ))}

        <line x1={LEFT} y1={BASE} x2={RIGHT} y2={BASE} className="co-axis" />

        {units.map((u, i) => (
          <g key={u.id}>
            <line
              x1={x(u.seconds)}
              y1={BASE}
              x2={x(u.seconds)}
              y2={i % 2 === 0 ? 46 : 34}
              className="co-stem"
            />
            <circle cx={x(u.seconds)} cy={BASE} r={4} className="co-dot" />
            <text
              x={x(u.seconds)}
              y={i % 2 === 0 ? 40 : 28}
              className="co-rung-n"
            >
              {(i + 1).toLocaleString("en-IN")}
            </text>
          </g>
        ))}

        <text x={RIGHT} y={BASE + 36} className="co-axis-label" textAnchor="end">
          {decadeLabel}
        </text>
      </svg>
      <figcaption className="co-caption">{caption}</figcaption>
    </figure>
  );
}
