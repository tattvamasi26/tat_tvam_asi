import type { TempleBlock } from "@/lib/data";

/**
 * One block of a monograph, as its module wrote it.
 *
 * This was the temples' renderer and is now shared, because an acharya
 * written in depth needs exactly the same four shapes: a paragraph, a
 * titled passage, label-and-text pairs, and three-column rows. Keeping
 * one renderer means a change to how a passage is set reaches every
 * monograph on the site at once.
 *
 * The class names stay `temple-*`: they are the styling of a passage
 * of prose rather than of a temple, and renaming them across the
 * stylesheet would be churn for no reader's benefit.
 */
export function ProseBlock({ block }: { block: TempleBlock }) {
  switch (block.kind) {
    case "para":
      return <p className="temple-para">{block.text}</p>;
    case "sub":
      return (
        <div className="temple-sub">
          <h3>{block.title}</h3>
          {block.paras.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      );
    case "list":
      return (
        <>
          {block.title && <p className="temple-block-title">{block.title}</p>}
          <dl className="temple-list">
            {block.items.map((item) => (
              <div key={item.label} className="temple-list-item">
                <dt>{item.label}</dt>
                <dd>{item.text}</dd>
              </div>
            ))}
          </dl>
        </>
      );
    case "rows":
      return (
        <>
          {block.title && <p className="temple-block-title">{block.title}</p>}
          <ol className="temple-rows">
            {block.rows.map((row) => (
              <li key={`${row.when}-${row.name}`} className="temple-row">
                <span className="temple-row-when">{row.when}</span>
                <span className="temple-row-name">{row.name}</span>
                {row.text && <p className="temple-row-text">{row.text}</p>}
              </li>
            ))}
          </ol>
        </>
      );
  }
}
