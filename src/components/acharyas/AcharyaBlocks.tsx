import Image from "next/image";
import type { AcharyaBlockView } from "@/lib/data";
import { ProseBlock } from "@/components/content/ProseBlock";

/**
 * The blocks that only a life needs.
 *
 * Prose blocks (para, sub, list, rows) fall through to ProseBlock, the
 * renderer the temples use. What is added here is drawn rather than
 * written, because some things are understood by being seen: a
 * disagreement of thirteen centuries, four seats at four directions,
 * one order of reality inside another.
 *
 * Every one of these is plain CSS on semantic markup — a band, a grid,
 * nested boxes — so they print, they scale, they read at 390px, and a
 * screen reader gets the same content in the same order.
 */

/** Where a year sits on the band, 0 at the left edge and 100 at the right. */
function position(year: number, from: number, to: number): number {
  const clamped = Math.min(Math.max(year, from), to);
  return ((clamped - from) / (to - from)) * 100;
}

export function AcharyaBlock({ block, scriptClass }: { block: AcharyaBlockView; scriptClass: string }) {
  switch (block.kind) {
    // ── the dating dispute, drawn to scale ──────────────────────
    case "timeline": {
      const years = block.marks.map((m) => m.year);
      const from = Math.min(...years) - 120;
      const to = Math.max(...years) + 120;
      return (
        <figure className="ach-timeline">
          {block.title && <figcaption className="ach-block-title">{block.title}</figcaption>}
          <div className="ach-band" aria-hidden="true">
            <div className="ach-band-line" />
            {(block.ticks ?? []).map((t) => (
              <span key={t.label} className="ach-band-tick" style={{ left: `${position(t.year, from, to)}%` }}>
                <i />
                {t.label}
              </span>
            ))}
            {block.marks.map((m) => (
              <span
                key={m.when + m.label}
                className={`ach-band-pin${m.emphasis ? " is-held" : ""}`}
                style={{ left: `${position(m.year, from, to)}%` }}
              />
            ))}
          </div>
          <ol className="ach-marks">
            {block.marks.map((m) => (
              <li key={m.when + m.label} className={`ach-mark${m.emphasis ? " is-held" : ""}`}>
                <span className="ach-mark-when">{m.when}</span>
                <span className="ach-mark-body">
                  <strong>{m.label}</strong>
                  {m.text && <span>{m.text}</span>}
                </span>
              </li>
            ))}
          </ol>
          {block.note && <p className="ach-note">{block.note}</p>}
        </figure>
      );
    }

    // ── the life as a route ─────────────────────────────────────
    case "journey":
      return (
        <div className="ach-journey">
          {block.title && <p className="ach-block-title">{block.title}</p>}
          <ol>
            {block.stops.map((s, i) => (
              <li key={s.place}>
                <span className="ach-stop-n" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="ach-stop-body">
                  <strong>{s.place}</strong>
                  <span>{s.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      );

    // ── four seats at four directions ───────────────────────────
    case "compass":
      return (
        <div className="ach-compass">
          {block.title && <p className="ach-block-title">{block.title}</p>}
          <div className="ach-compass-grid">
            {block.points.map((p) => (
              <article key={p.dir} className={`ach-seat ach-seat-${p.dir}`}>
                <span className="ach-seat-dir">{p.dirLabel}</span>
                <h4 className="ach-seat-name">{p.name}</h4>
                <span className="ach-seat-line">{p.veda}</span>
                <span className={`ach-seat-vakya ${scriptClass}`}>{p.vakya}</span>
                <span className="ach-seat-line">{p.gloss}</span>
              </article>
            ))}
            <div className="ach-compass-hub" aria-hidden="true">
              <span className={scriptClass}>{block.centre}</span>
            </div>
          </div>
        </div>
      );

    // ── one order of reality inside another ─────────────────────
    case "layers":
      return (
        <div className="ach-layers">
          {block.title && <p className="ach-block-title">{block.title}</p>}
          <div className="ach-layer-stack">
            {block.layers.map((l, i) => (
              <div key={l.name} className={`ach-layer ach-layer-${i}`}>
                <span className="ach-layer-name">{l.name}</span>
                <span className="ach-layer-text">{l.text}</span>
              </div>
            ))}
          </div>
        </div>
      );

    // ── what is his, what is doubted, what only carries his name ─
    case "tiers":
      return (
        <div className="ach-tiers">
          {block.title && <p className="ach-block-title">{block.title}</p>}
          <div className="ach-tier-grid">
            {block.tiers.map((t) => (
              <article key={t.name} className={`ach-tier is-${t.tone}`}>
                <header>
                  <h4>{t.name}</h4>
                  {t.count && <span className="ach-tier-count">{t.count}</span>}
                </header>
                <ul>
                  {t.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      );

    // ── who taught whom ─────────────────────────────────────────
    case "lineage":
      return (
        <div className="ach-lineage">
          {block.title && <p className="ach-block-title">{block.title}</p>}
          {block.generations.map((g, i) => (
            <div key={i} className="ach-gen">
              {g.label && <span className="ach-gen-label">{g.label}</span>}
              <div className="ach-gen-row">
                {g.people.map((p) => (
                  <span key={p.name} className="ach-person">
                    <strong>{p.name}</strong>
                    {p.text && <span>{p.text}</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );

    // ── the text itself ─────────────────────────────────────────
    case "verse":
      return (
        <figure className="ach-verse">
          <p className={`ach-verse-mula ${scriptClass}`}>{block.sanskrit}</p>
          {block.iast && <p className="ach-verse-iast translit">{block.iast}</p>}
          <blockquote>{block.translation}</blockquote>
          <figcaption>{block.attribution}</figcaption>
        </figure>
      );

    // ── the words a section turns on ────────────────────────────
    case "terms":
      return (
        <div className="ach-terms">
          {block.title && <p className="ach-block-title">{block.title}</p>}
          <dl>
            {block.terms.map((t) => (
              <div key={t.term} className="ach-term">
                <dt>
                  {t.term}
                  {t.sanskrit && <span className={`ach-term-sa ${scriptClass}`}>{t.sanskrit}</span>}
                </dt>
                <dd>{t.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      );

    // ── a picture inside the section it belongs to ──────────────
    case "figure":
      return (
        <figure className="ach-figure">
          <div className="ach-figure-frame">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="(max-width: 860px) 100vw, 720px"
              style={{ objectFit: "cover", objectPosition: block.position }}
            />
          </div>
          <figcaption>{block.caption}</figcaption>
        </figure>
      );

    default:
      return <ProseBlock block={block} />;
  }
}
