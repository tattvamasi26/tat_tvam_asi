import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { getTempleRegions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Temples",
  description: "Temples by region — Tulunadu, Tamil Nadu, the Deccan and Odisha.",
};

/**
 * The temples, by region. Each card opens a region: its own temples,
 * written in depth, and its circuits. Temples are added to a region
 * rather than to one flat list, so a section can grow without the
 * index growing with it.
 */
export default function TemplesPage() {
  const { locale, t } = getTranslations();
  const regions = getTempleRegions(locale);

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">{t.navTemples}</p>
          <h1 className="title">{t.templesTitle}</h1>
          <p className="lede">{t.templesBlurb}</p>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <div className="grid-cards">
          {regions.map((r) => (
            <Link key={r.slug} href={r.href} className="card region-card">
              {r.image && (
                <div className="card-img">
                  <Image
                    src={r.image.src}
                    alt=""
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: r.image.position }}
                  />
                </div>
              )}
              <div className="card-body">
                <h2 className="card-title">{r.name}</h2>
                <p className="card-text">{r.blurb}</p>
                <div className="card-foot">
                  <span className="region-meta">
                    <span className="chip chip-gold">
                      {r.templeCount} {r.templeCount === 1 ? t.labelTempleOne : t.labelTemplesCount}
                    </span>
                    {r.collectionCount > 0 && (
                      <span className="chip">
                        {r.collectionCount} {r.collectionCount === 1 ? t.labelCircuitOne : t.labelCircuits}
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
