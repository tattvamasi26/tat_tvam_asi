import Link from "next/link";
import Image from "next/image";
import type { AcharyaMonographView } from "@/lib/data";
import { Arrow } from "@/components/ui/Arrow";
import { AcharyaBlock } from "@/components/acharyas/AcharyaBlocks";

/**
 * One acharya, written in depth.
 *
 * The monograph the temples get — head, facts bar, sections of prose,
 * pictures, and the sources every fact came from — with two additions
 * a long life needs:
 *
 *  · a contents rail, because a reader who wants the four mathas
 *    should not have to scroll through the dating dispute to find
 *    them;
 *  · drawn blocks inside the sections (AcharyaBlocks), because a
 *    disagreement of thirteen centuries and four seats at four
 *    directions are understood faster by being seen.
 */
export function AcharyaMonograph({
  acharya,
  labels,
}: {
  acharya: AcharyaMonographView;
  labels: { back: string; sources: string; imageCredit: string; contents: string };
}) {
  return (
    <div className="temple-page acharya-page">
      <section className="pagehead">
        <div className="shell region-head">
          <Link href="/acharyas" className="eyebrow">
            {labels.back}
          </Link>
          <h1 className="title temple-title">{acharya.name}</h1>
          <p className={`acharya-sanskrit ${acharya.scriptClass}`}>{acharya.nameSanskrit}</p>
          <p className="temple-place">{acharya.when}</p>
          <p className="temple-tagline">{acharya.tagline}</p>
        </div>
      </section>

      <div className="shell">
        {acharya.hero && (
          <figure className="acharya-hero">
            <div className="acharya-hero-frame">
              <Image
                src={acharya.hero.src}
                alt={acharya.hero.alt}
                fill
                priority
                sizes="(max-width: 860px) 100vw, 460px"
                style={{ objectFit: "cover", objectPosition: acharya.hero.position }}
              />
            </div>
            <figcaption>{acharya.hero.credit}</figcaption>
          </figure>
        )}

        {acharya.facts.length > 0 && (
          <dl className="temple-facts">
            {acharya.facts.map(([label, value]) => (
              <div key={label} className="temple-fact">
                <dt className="temple-fact-label">{label}</dt>
                <dd className="temple-fact-value">{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <div className="shell-narrow">
        {acharya.quote && <p className="temple-quote">{acharya.quote}</p>}

        <nav className="ach-contents" aria-label={labels.contents}>
          <p className="fact-label">{labels.contents}</p>
          <ol>
            {acharya.contents.map((c, i) => (
              <li key={c.id}>
                <a href={`#${c.id}`}>
                  <span className="ach-contents-n" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {c.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {acharya.sections.map((section) => (
          <section key={section.id} id={section.id} className="temple-section ach-section">
            <p className="eyebrow">{section.eyebrow}</p>
            <h2 className="temple-section-title">{section.title}</h2>
            {section.standfirst && <p className="ach-standfirst">{section.standfirst}</p>}
            {section.blocks.map((block, i) => (
              <AcharyaBlock key={i} block={block} scriptClass={acharya.scriptClass} />
            ))}
          </section>
        ))}

        {acharya.gallery.length > 0 && (
          <div className="temple-gallery">
            {acharya.gallery.map((shot) => (
              <figure key={shot.src} className="temple-shot">
                <div className="temple-shot-frame">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, 300px"
                    style={{ objectFit: "cover", objectPosition: shot.position }}
                  />
                </div>
                {shot.caption && <figcaption>{shot.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}

        <ul className="temple-sources ach-sources">
          <li className="fact-label">{labels.sources}</li>
          {acharya.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.title}
              </a>
              {s.note && <span className="ach-source-note">{s.note}</span>}
            </li>
          ))}
          {acharya.gallery.map((shot) => (
            <li key={`credit-${shot.src}`}>
              {labels.imageCredit}: {shot.credit}
            </li>
          ))}
        </ul>

        <Link href="/acharyas" className="btn-ghost temple-back">
          <Arrow dir="left" /> {labels.back}
        </Link>
      </div>
    </div>
  );
}
