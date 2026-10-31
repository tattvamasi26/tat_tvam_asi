import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "@/i18n/server";
import { getTempleRegions, type TempleView } from "@/lib/data";
import { Arrow } from "@/components/ui/Arrow";

/**
 * A temple held as a short entry: the facts, what it is, and why it
 * matters. It uses the same head, facts bar and prose as a temple
 * written in depth, so a section reads the same whether or not a
 * temple has been written up yet.
 */
export function ShortTemple({ temple }: { temple: TempleView }) {
  const { locale, t } = getTranslations();
  const region = getTempleRegions(locale).find((r) => r.slug === temple.region);

  return (
    <div className="temple-page">
      <section className="pagehead">
        <div className="shell region-head">
          {region && (
            <Link href={region.href} className="eyebrow">
              {region.name}
            </Link>
          )}
          <h1 className="title temple-title">{temple.name}</h1>
          <p className="temple-local" lang="kn">
            {temple.nameLocal}
          </p>
          <p className="temple-place">
            {temple.location} · {temple.state}
          </p>
        </div>
      </section>

      <div className="shell">
        {temple.imageUrl && (
          <div className="temple-hero">
            <Image
              src={temple.imageUrl}
              alt={temple.name}
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 1100px"
              style={{ objectFit: "cover" }}
            />
          </div>
        )}

        <dl className="temple-facts">
          <div className="temple-fact">
            <dt className="temple-fact-label">{t.labelDeity}</dt>
            <dd className="temple-fact-value">{temple.presidingDeity}</dd>
          </div>
          <div className="temple-fact">
            <dt className="temple-fact-label">{t.labelDynasty}</dt>
            <dd className="temple-fact-value">{temple.dynasty}</dd>
          </div>
          <div className="temple-fact">
            <dt className="temple-fact-label">{t.labelCentury}</dt>
            <dd className="temple-fact-value">{temple.centuryBuilt}</dd>
          </div>
          <div className="temple-fact">
            <dt className="temple-fact-label">{t.labelArchitecture}</dt>
            <dd className="temple-fact-value">{temple.architectureStyle}</dd>
          </div>
        </dl>
      </div>

      <div className="shell-narrow">
        <section className="temple-section">
          <p className="temple-para">{temple.description}</p>
        </section>

        <section className="temple-section">
          <p className="eyebrow">{t.labelSignificance}</p>
          <h2 className="temple-section-title">{t.labelSignificance}</h2>
          <p className="temple-para">{temple.significance}</p>
        </section>

        {temple.imageCredit && (
          <p className="credit">
            {t.imageCredit}: {temple.imageCredit}
          </p>
        )}

        {region && (
          <Link href={region.href} className="btn-ghost temple-back">
            <Arrow dir="left" /> {region.name}
          </Link>
        )}
      </div>
    </div>
  );
}
