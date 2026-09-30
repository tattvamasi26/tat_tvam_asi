import type { SamskaraView } from "@/lib/data";

/**
 * The sixteen saṃskāras, placed at the ages they fall at rather than
 * spread evenly.
 *
 * Drawn to scale, seven of the sixteen land inside the first three
 * years and cluster into a knot at the left-hand end, while fifty
 * years pass between the last two with nothing on them. That shape is
 * the finding: the tradition marks the beginning of a life in great
 * detail and then very nearly stops. Spacing them evenly, as the
 * first version of this page did, hides exactly that.
 *
 * The axis is broken once, on purpose. Three of the sixteen fall
 * before birth, and on a 0–80 scale they would sit on top of each
 * other at the origin, so they get a segment of their own with a
 * visible break — an honest scale break, labelled, not a squeeze.
 *
 * The ages are the Gṛhya Sūtras', and those texts disagree with each
 * other. They are here to place a dot, not to be quoted.
 */

const BEFORE_FROM = 34;
const BEFORE_TO = 92;
const AFTER_FROM = 108;
const AFTER_TO = 566;
const MAX_AGE = 80;
const BASE = 56;

function x(age: number): number {
  if (age < 0) {
    // -0.8 is conception, 0 is birth; the three before-birth rites
    // spread across their own segment.
    const t = Math.min(1, Math.max(0, (age + 1) / 1));
    return BEFORE_FROM + t * (BEFORE_TO - BEFORE_FROM);
  }
  return AFTER_FROM + (Math.min(age, MAX_AGE) / MAX_AGE) * (AFTER_TO - AFTER_FROM);
}

const DECADES = [0, 10, 20, 30, 40, 50, 60, 70, 80];

export function LifeLine({
  samskaras,
  caption,
  labels,
}: {
  samskaras: (SamskaraView & { age: number })[];
  caption: string;
  labels: { before: string; years: string };
}) {
  return (
    <figure className="ry-life">
      <svg viewBox="0 0 600 92" role="img" aria-label={caption}>
        {/* before birth, then the break, then a life */}
        <line x1={BEFORE_FROM} y1={BASE} x2={BEFORE_TO} y2={BASE} className="ry-axis" />
        <line x1={AFTER_FROM} y1={BASE} x2={AFTER_TO} y2={BASE} className="ry-axis" />
        <path
          d={`M ${BEFORE_TO + 3} ${BASE - 6} L ${BEFORE_TO + 9} ${BASE + 6}`}
          className="ry-break"
        />
        <path
          d={`M ${AFTER_FROM - 9} ${BASE - 6} L ${AFTER_FROM - 3} ${BASE + 6}`}
          className="ry-break"
        />

        <text x={(BEFORE_FROM + BEFORE_TO) / 2} y={BASE + 22} className="ry-axis-label">
          {labels.before}
        </text>

        {DECADES.map((d) => (
          <g key={d}>
            <line x1={x(d)} y1={BASE - 4} x2={x(d)} y2={BASE + 4} className="ry-axis-tick" />
            {d % 20 === 0 && (
              <text x={x(d)} y={BASE + 22} className="ry-axis-label">
                {d.toLocaleString("en-IN")}
              </text>
            )}
          </g>
        ))}

        {samskaras.map((s) => (
          <circle
            key={s.id}
            cx={x(s.age)}
            cy={BASE}
            r={5}
            className="ry-dot"
            data-kept={s.kept}
          />
        ))}

        <text x={AFTER_TO} y={BASE - 16} className="ry-axis-label" textAnchor="end">
          {labels.years}
        </text>
      </svg>
      <figcaption className="ry-caption">{caption}</figcaption>
    </figure>
  );
}
