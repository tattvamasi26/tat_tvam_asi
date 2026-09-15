import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { getNavaVinayakas } from "@/lib/data";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "Nava Vinayakas of Tulunadu",
  description: "Nine Ganesha temples of the coast, from Madhur to Gokarna, that devotees visit as a circuit.",
};

/**
 * The Nava Vinayakas: nine Gaṇeśa temples of the coast, south to north.
 * The page head says plainly that the nine are a pilgrims' tradition,
 * then the route as a line of numbered places, then one entry per
 * temple in the site's feature style — its photograph (or, where there
 * is no free photograph, its Kannada name), its names, place and a few
 * plain lines, with the photograph's credit.
 */
export default function NavaVinayakasPage() {
  const { locale, t } = getTranslations();
  const page = getNavaVinayakas(locale);

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <Link href="/temples" className="eyebrow">
            {page.eyebrow}
          </Link>
          <h1 className="title">{page.title}</h1>
          <p className="lede">{page.lede}</p>
          <p className="nv-note">{page.note}</p>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <nav className="nv-route" aria-label={page.routeLabel}>
          <p className="fact-label">{page.routeLabel}</p>
          <ol className="nv-route-list">
            {page.temples.map((tp, i) => (
              <li key={tp.slug}>
                <a href={`#${tp.slug}`}>
                  <span className="nv-route-num">{i + 1}</span>
                  {tp.short}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <ol className="nv-list">
          {page.temples.map((tp, i) => (
            <li key={tp.slug} id={tp.slug} className="nv-item">
              <div className="nv-media">
                {tp.photo ? (
                  <Image
                    src={tp.photo.src}
                    alt={tp.photo.alt}
                    fill
                    sizes="(max-width: 860px) 100vw, 420px"
                    style={{ objectFit: "cover", objectPosition: tp.photo.position }}
                  />
                ) : (
                  <span className="name-local nv-media-name" lang="kn">
                    {tp.nameLocal}
                  </span>
                )}
              </div>
              <div className="nv-body">
                <span className="nv-num">{i + 1}</span>
                <h2 className="nv-name">{tp.name}</h2>
                {locale !== "kn" && (
                  <p className="name-local" lang="kn">
                    {tp.nameLocal}
                  </p>
                )}
                <p className="nv-place">{tp.place}</p>
                <p className="nv-text">{tp.text}</p>
                {tp.photo && (
                  <p className="credit">
                    {t.imageCredit}:{" "}
                    {tp.photo.sourceUrl ? (
                      <a href={tp.photo.sourceUrl} target="_blank" rel="noopener noreferrer">
                        {tp.photo.credit}
                      </a>
                    ) : (
                      tp.photo.credit
                    )}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <Link href="/temples" className="btn-ghost nv-back">
          <Arrow dir="left" /> {t.navTemples}
        </Link>
      </section>
    </>
  );
}
