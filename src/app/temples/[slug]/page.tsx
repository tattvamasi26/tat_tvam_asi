import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { getTempleBySlug } from "@/lib/data";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tp = getTempleBySlug(params.slug, "en");
  return tp ? { title: tp.name, description: tp.description } : {};
}

export default function TempleDetailPage({ params }: { params: { slug: string } }) {
  const { locale, t } = getTranslations();
  const tp = getTempleBySlug(params.slug, locale);
  if (!tp) notFound();

  return (
    <>
      <section className="hero" style={{ minHeight: "clamp(420px, 62vh, 640px)" }}>
        {tp.imageUrl && (
          <div className="hero-bg">
            <Image src={tp.imageUrl} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
          </div>
        )}
        <div className="shell hero-inner">
          <p className="eyebrow">
            {tp.location} · {tp.state}
          </p>
          <h1 className="display" style={{ fontSize: "clamp(2.2rem, 6vw, 4.2rem)" }}>
            {tp.name}
          </h1>
          <p className="subtitle" style={{ color: "var(--gold)" }}>{tp.nameLocal}</p>
        </div>
      </section>

      <section className="shell">
        <div className="factbar">
          <div className="fact">
            <div className="fact-label">{t.labelDeity}</div>
            <div className="fact-value">{tp.presidingDeity}</div>
          </div>
          <div className="fact">
            <div className="fact-label">{t.labelDynasty}</div>
            <div className="fact-value">{tp.dynasty}</div>
          </div>
          <div className="fact">
            <div className="fact-label">{t.labelCentury}</div>
            <div className="fact-value">{tp.centuryBuilt}</div>
          </div>
          <div className="fact">
            <div className="fact-label">{t.labelArchitecture}</div>
            <div className="fact-value">{tp.architectureStyle}</div>
          </div>
        </div>
      </section>

      <section className="shell-narrow stack-lg">
        <p className="prose" style={{ fontSize: "1.1rem", color: "var(--ink-0)" }}>{tp.description}</p>

        <hr className="rule" style={{ margin: "2.75rem 0 2rem" }} />

        <p className="eyebrow">{t.labelSignificance}</p>
        <p className="prose" style={{ marginTop: "0.9rem" }}>{tp.significance}</p>

        {tp.imageCredit && <p className="credit" style={{ marginTop: "2.5rem" }}>{t.imageCredit}: {tp.imageCredit}</p>}

        <div style={{ marginTop: "2.5rem" }}>
          <Link href="/temples" className="btn-ghost">← {t.templesTitle}</Link>
        </div>
      </section>
    </>
  );
}
