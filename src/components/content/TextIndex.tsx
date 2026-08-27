import { Reveal } from "@/components/motion/Reveal";
import type { UpanishadView } from "@/lib/data";

/**
 * The shared index used by Vedas, Gita chapters, Stutis and Bhajans.
 *
 * All four render rows from the same `texts` table and differ only in
 * work_type, so they get one component rather than four near-identical
 * pages. `dense` switches between the roomy treatment used where there
 * are a handful of entries and the tighter list used for the Gita's
 * eighteen chapters.
 */
export function TextIndex({
  items,
  labels,
  dense = false,
}: {
  items: UpanishadView[];
  labels: { keyTeaching: string; verseCount: string; veda: string };
  dense?: boolean;
}) {
  return (
    <ol className={dense ? "text-list text-list-dense" : "text-list"}>
      {items.map((item, i) => (
        <Reveal key={item.id} as="li" delay={i * 40}>
          <article className="text-row">
            <div className="text-row-glyph">
              <span className="deva">{item.nameSanskrit}</span>
            </div>

            <div className="text-row-body">
              <h2 className="text-row-name">{item.name}</h2>
              <p className="translit">{item.nameIast}</p>
              {item.summary && <p className="card-text text-row-summary">{item.summary}</p>}

              {item.keyTeaching && !dense && (
                <div className="text-row-teaching">
                  <span className="fact-label">{labels.keyTeaching}</span>
                  <p className="lede" style={{ fontSize: "1rem", marginTop: "0.3rem" }}>
                    {item.keyTeaching}
                  </p>
                </div>
              )}
            </div>

            <div className="text-row-meta">
              {item.veda && <span className="chip">{item.veda}</span>}
              {item.verseCount != null && (
                <span className="chip chip-gold">
                  {item.verseCount.toLocaleString("en-IN")} {labels.verseCount}
                </span>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </ol>
  );
}
