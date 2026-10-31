import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { getTranslations } from "@/i18n/server";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { getTempleRegionPage, getTempleRoutes, templeHref, type TempleCardView } from "@/lib/data";
import { Arrow } from "@/components/ui/Arrow";

/**
 * One region: its own paragraph, its circuits, and its temples.
 *
 * Before the regions, a temple lived at /temples/<slug>. Those
 * addresses land here, where the slug is not a region — so they
 * redirect to the temple's page inside its region rather than 404.
 */

export function generateStaticParams() {
  return getTempleRoutes().regions;
}

export function generateMetadata({ params }: { params: { section: string } }): Metadata {
  const r = getTempleRegionPage(params.section, DEFAULT_LOCALE, "temples");
  return r ? { title: r.name, description: r.blurb } : {};
}

function TempleCard({ card, inDepthLabel }: { card: TempleCardView; inDepthLabel: string }) {
  return (
    <Link href={card.href} className="card temple-card">
      {card.image && (
        <div className="card-img">
          <Image
            src={card.image.src}
            alt=""
            fill
            sizes="(max-width: 700px) 100vw, 33vw"
            style={{ objectFit: "cover", objectPosition: card.image.position }}
          />
        </div>
      )}
      <div className="card-body">
        <h3 className="card-title">{card.name}</h3>
        {card.nameLocal && card.nameLocal !== card.name && (
          <p className="temple-card-local" lang={card.nameLocalLang}>
            {card.nameLocal}
          </p>
        )}
        <p className="card-text clamp-3" style={{ marginTop: "0.4rem" }}>
          {card.blurb}
        </p>
        <div className="card-foot">
          <span className="meta">{card.meta}</span>
          {card.inDepth && <span className="chip chip-gold">{inDepthLabel}</span>}
        </div>
      </div>
    </Link>
  );
}

export default function RegionPage({ params }: { params: { section: string } }) {
  const { locale, t } = getTranslations();
  const region = getTempleRegionPage(params.section, locale, t.labelTemplesCount);

  if (!region) {
    const moved = templeHref(params.section);
    if (moved) permanentRedirect(moved);
    notFound();
  }

  return (
    <>
      <section className="pagehead">
        <div className="shell region-head">
          <Link href="/temples" className="eyebrow">
            {t.templesTitle}
          </Link>
          <h1 className="title">{region.name}</h1>
          <p className="region-lede">{region.lede}</p>
        </div>
      </section>

      {region.collections.length > 0 && (
        <section className="shell stack-lg" style={{ paddingTop: 0 }}>
          <h2 className="temples-h2">{t.labelCircuits}</h2>
          <div className="grid-cards">
            {region.collections.map((c) => (
              <TempleCard key={c.slug} card={c} inDepthLabel={t.labelInDepth} />
            ))}
          </div>
        </section>
      )}

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <h2 className="temples-h2">{t.templesTitle}</h2>
        <div className="grid-cards">
          {region.temples.map((c) => (
            <TempleCard key={c.slug} card={c} inDepthLabel={t.labelInDepth} />
          ))}
        </div>

        <Link href="/temples" className="btn-ghost temple-back">
          <Arrow dir="left" /> {t.templesTitle}
        </Link>
      </section>
    </>
  );
}
