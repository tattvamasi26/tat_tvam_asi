import type { DvipaView } from "@/lib/data";

/**
 * The seven islands and the seven seas, concentric, Meru at the
 * centre.
 *
 * **The rings are drawn equal and the texts say they are not.** Each
 * island is twice the width of the one inside it, so Puṣkara is a
 * hundred and twenty-eight times Jambū; drawn to scale, the inner six
 * would vanish into a dot and the picture would show one ring. The
 * caption says so. A diagram that silently abandons the proportion it
 * is illustrating is worse than one that admits it.
 *
 * What the drawing does carry truly is the arrangement: a centre, and
 * alternating land and sea outwards from it, with Bhārata as a part
 * of the innermost island rather than the middle of the world.
 */

const C = 150;
const R0 = 16;
const STEP = 9;

export function DvipaRings({
  dvipas,
  caption,
  centre,
}: {
  dvipas: DvipaView[];
  caption: string;
  /** Meru's name. */
  centre: string;
}) {
  const ordered = [...dvipas].sort((a, b) => b.ring - a.ring);

  return (
    <figure className="co-dvipas">
      <svg viewBox="0 0 300 300" role="img" aria-label={caption}>
        {/* Outermost first, so the inner rings draw over them. */}
        {ordered.map((d) => {
          const land = R0 + (d.ring - 1) * STEP * 2 + STEP;
          const sea = R0 + (d.ring - 1) * STEP * 2 + STEP * 2;
          return (
            <g key={d.id}>
              <circle cx={C} cy={C} r={sea} className="co-sea" />
              <circle cx={C} cy={C} r={land} className="co-land" />
            </g>
          );
        })}

        <circle cx={C} cy={C} r={R0} className="co-meru" />
        <text x={C} y={C + 4} className="co-meru-name">
          {centre}
        </text>
      </svg>
      <figcaption className="co-caption">{caption}</figcaption>
    </figure>
  );
}
