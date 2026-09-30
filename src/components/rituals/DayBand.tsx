import type { MarkView } from "@/lib/data";

/**
 * The day, from before dawn to night, with the daily rites placed on
 * it at the hours they are done.
 *
 * The drawing exists to make one thing visible: everything falls at
 * the joins. Seven of the eight marks sit in the two shaded bands at
 * dawn and dusk, and the middle of the day is nearly empty. That is
 * what saṃdhi means, and a list of four rites cannot show it.
 *
 * The hours are the ordinary ones. The real saṃdhis move through the
 * year with the sun, which is why this is a drawing and not a
 * timetable, and why the caption says so.
 */

const FROM = 4;
const TO = 22;
const LEFT = 34;
const RIGHT = 566;
const BASE = 62;

const x = (hour: number) => LEFT + ((hour - FROM) / (TO - FROM)) * (RIGHT - LEFT);

/** The two joins the tradition names, and midday between them. */
const SANDHI: [number, number][] = [
  [5.2, 7],
  [17.6, 19.4],
];

const HOURS = [6, 9, 12, 15, 18, 21];

export function DayBand({
  marks,
  caption,
  labels,
}: {
  marks: MarkView[];
  caption: string;
  /** The three joins, named. */
  labels: { dawn: string; noon: string; dusk: string };
}) {
  // Every hour any rite is done at, so two rites at the same hour
  // draw one dot rather than two on top of each other.
  const points = marks.flatMap((m) => (m.hours ?? []).map((h) => ({ slug: m.slug, h })));

  return (
    <figure className="ry-day">
      <svg viewBox="0 0 600 96" role="img" aria-label={caption}>
        {SANDHI.map(([a, b], i) => (
          <rect
            key={i}
            x={x(a)}
            y={20}
            width={x(b) - x(a)}
            height={54}
            className="ry-sandhi"
            rx={6}
          />
        ))}

        <line x1={LEFT} y1={BASE} x2={RIGHT} y2={BASE} className="ry-axis" />

        {HOURS.map((h) => (
          <g key={h}>
            <line x1={x(h)} y1={BASE - 4} x2={x(h)} y2={BASE + 4} className="ry-axis-tick" />
            <text x={x(h)} y={BASE + 20} className="ry-axis-label">
              {h.toLocaleString("en-IN")}
            </text>
          </g>
        ))}

        {points.map((p, i) => (
          <circle key={`${p.slug}-${i}`} cx={x(p.h)} cy={BASE} r={5} className="ry-dot" />
        ))}

        <text x={x(6.1)} y={14} className="ry-join">
          {labels.dawn}
        </text>
        <text x={x(12)} y={14} className="ry-join">
          {labels.noon}
        </text>
        <text x={x(18.5)} y={14} className="ry-join">
          {labels.dusk}
        </text>
      </svg>
      <figcaption className="ry-caption">{caption}</figcaption>
    </figure>
  );
}
