import Link from "next/link";
import Image from "next/image";
import type { TempleMonographView } from "@/lib/data";
import { Arrow } from "@/components/ui/Arrow";
import { ProseBlock } from "@/components/content/ProseBlock";

/**
 * One temple, written in depth: the facts bar, then the sections of
 * prose as the module wrote them, the pictures, the sources every fact
 * came from, and the temples either side of it in the same region.
 *
 * A temple needs no page code — it is a module under seed/temple-pages/.
 */

export function Monograph({
  temple,
  labels,
}: {
  temple: TempleMonographView;
  labels: { sources: string; imageCredit: string; previous: string; next: string };
}) {
  return (
    <div className="temple-page">
      <section className="pagehead">
        <div className="shell region-head">
          <Link href={temple.region.href} className="eyebrow">
            {temple.region.name}
          </Link>
          <h1 className="title temple-title">{temple.name}</h1>
          {/* On a Kannada page the name and the temple's own name are the
              same words; printing both would say it twice. */}
          {temple.nameLocal !== temple.name && (
            <p className="temple-local" lang={temple.nameLocalLang}>
              {temple.nameLocal}
            </p>
          )}
          <p className="temple-place">{temple.place}</p>
          <p className="temple-tagline">{temple.tagline}</p>
        </div>
      </section>

      <div className="shell">
        {temple.hero && (
          <div className="temple-hero">
            <Image
              src={temple.hero.src}
              alt={temple.hero.alt}
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 1100px"
              style={{ objectFit: "cover", objectPosition: temple.hero.position }}
            />
          </div>
        )}

        {temple.facts.length > 0 && (
          <dl className="temple-facts">
            {temple.facts.map(([label, value]) => (
              <div key={label} className="temple-fact">
                <dt className="temple-fact-label">{label}</dt>
                <dd className="temple-fact-value">{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <div className="shell-narrow">
        {temple.quote && <p className="temple-quote">{temple.quote}</p>}

        {temple.sections.map((section) => (
          <section key={section.id} id={section.id} className="temple-section">
            <p className="eyebrow">{section.eyebrow}</p>
            <h2 className="temple-section-title">{section.title}</h2>
            {section.blocks.map((block, i) => (
              <ProseBlock key={i} block={block} />
            ))}
          </section>
        ))}

        {temple.gallery.length > 0 && (
          <div className="temple-gallery">
            {temple.gallery.map((shot) => (
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

        <ul className="temple-sources">
          <li className="fact-label">{labels.sources}</li>
          {temple.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.title}
              </a>
            </li>
          ))}
          {temple.hero && (
            <li>
              {labels.imageCredit}: {temple.hero.credit}
            </li>
          )}
        </ul>

        {(temple.prev || temple.next) && (
          <nav className="temple-pager" aria-label={temple.region.name}>
            {temple.prev ? (
              <Link href={temple.prev.href} className="pager-link" data-dir="prev">
                <span className="pager-label">
                  <Arrow dir="left" /> {labels.previous}
                </span>
                <span className="pager-name">{temple.prev.name}</span>
              </Link>
            ) : (
              <span />
            )}
            {temple.next ? (
              <Link href={temple.next.href} className="pager-link" data-dir="next">
                <span className="pager-label">
                  {labels.next} <Arrow />
                </span>
                <span className="pager-name">{temple.next.name}</span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        )}

        <Link href={temple.region.href} className="btn-ghost temple-back">
          <Arrow dir="left" /> {temple.region.name}
        </Link>
      </div>
    </div>
  );
}
