import Link from "next/link";
import type { DarshanaPairView } from "@/lib/data";
import { Arrow } from "@/components/ui/Arrow";

/**
 * The three pairs, drawn as three pairs.
 *
 * The point this makes visually is the one worth making before a
 * reader opens any of the six: they are not six answers to one
 * question but three questions approached from two sides. Two cards
 * joined by a seam, three times — plain CSS grid, one column on a
 * phone, where the seam becomes a vertical rule instead.
 */
export function PairBand({
  pairs,
  scriptClass,
  readLabel,
}: {
  pairs: DarshanaPairView[];
  scriptClass: string;
  readLabel: string;
}) {
  return (
    <ol className="da-pairs">
      {pairs.map((p, i) => (
        <li key={p.id} className="da-pair">
          <p className="da-pair-label">
            <span className="da-pair-n">{(i + 1).toLocaleString("en-IN")}</span>
            {p.label}
          </p>

          <div className="da-pair-halves">
            {p.members.map((m) => (
              <Link key={m.slug} href={`/darshanas/${m.slug}`} className="da-pair-half">
                <span className="da-pair-role">{m.role}</span>
                <span className="da-pair-name">{m.name}</span>
                <span className={`da-pair-sanskrit ${scriptClass}`}>{m.sanskrit}</span>
                <span className="da-pair-read">
                  {readLabel} <Arrow />
                </span>
              </Link>
            ))}
          </div>

          <p className="da-pair-note">{p.note}</p>
        </li>
      ))}
    </ol>
  );
}
