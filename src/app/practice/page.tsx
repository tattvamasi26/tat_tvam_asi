import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { practiceStrings } from "@/i18n/practice";
import { getPractices } from "@/lib/data";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "Vedanta in Everyday Life",
  description: "Sittings you can actually do — with the site's own texts, and a timer.",
};

/**
 * The sittings.
 *
 * The first section of the site a reader *does* rather than reads, so
 * it opens with the practices themselves and not with an argument for
 * them. The standing note about what this section will not claim sits
 * directly under the head, because a page carrying a timer is read as
 * advice in a way a page of text is not.
 */
export default function PracticePage() {
  const { locale } = getTranslations();
  const s = practiceStrings(locale);
  const practices = getPractices(locale);
  const sc = scriptClass(locale);

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">{s.count(practices.length.toLocaleString("en-IN"))}</p>
          <h1 className="title">{s.title}</h1>
          <p className="lede">{s.lede}</p>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <div className="pr-standing">
          <p className="pr-standing-text">{s.standing}</p>
        </div>

        <ul className="pr-grid">
          {practices.map((p) => (
            <li key={p.slug}>
              <Link href={`/practice/${p.slug}`} className="pr-card">
                <span className="pr-frame">
                  {p.image && (
                    <Image
                      src={p.image.src}
                      alt=""
                      fill
                      sizes="(max-width: 760px) 100vw, 45vw"
                      style={{ objectFit: "cover", objectPosition: p.image.position }}
                    />
                  )}
                  <span className="pr-scrim" aria-hidden="true" />

                  <span className="pr-frame-foot">
                    <span className="pr-lengths">
                      {p.durations.map((m) => (
                        <span key={m} className="pr-length">
                          {m}
                        </span>
                      ))}
                      <span className="pr-length-unit">{s.minutes}</span>
                    </span>
                    <span className="pr-name">{p.name}</span>
                    {p.sanskrit && <span className={`pr-sanskrit ${sc}`}>{p.sanskrit}</span>}
                  </span>
                </span>

                <span className="pr-card-body">
                  <span className="pr-lede">{p.lede}</span>
                  <span className="pr-more">
                    {s.begin} <Arrow />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
