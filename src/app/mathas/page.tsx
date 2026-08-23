import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { getAllMathas } from "@/lib/data";

export const metadata: Metadata = { title: "The Four Mathas" };

export default function MathasPage() {
  const { locale, t } = getTranslations();
  const mathas = getAllMathas(locale);

  const dirLabel: Record<string, string> = {
    north: t.dirNorth,
    south: t.dirSouth,
    east: t.dirEast,
    west: t.dirWest,
  };

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">{t.navMathas}</p>
          <h1 className="title">{t.mathasTitle}</h1>
          <p className="lede">{t.mathasBlurb}</p>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <div className="grid-cards">
          {mathas.map((m) => (
            <article key={m.id} className="card">
              {m.imageUrl && (
                <div className="card-img">
                  <Image
                    src={m.imageUrl}
                    alt={m.name}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
              <div className="card-body">
                <span className="chip chip-gold">{dirLabel[m.direction] ?? m.direction}</span>
                <h2 className="card-title" style={{ marginTop: "0.3rem" }}>{m.name}</h2>
                <p className="meta">
                  {m.location} · {m.state}
                </p>

                <p className="card-text" style={{ marginTop: "0.7rem" }}>{m.description}</p>

                <div className="factbar" style={{ marginTop: "1.2rem", borderBottom: 0 }}>
                  <div className="fact" style={{ paddingInline: 0 }}>
                    <div className="fact-label">{t.labelVeda}</div>
                    <div className="fact-value" style={{ fontSize: "0.95rem" }}>{m.veda}</div>
                  </div>
                  <div className="fact" style={{ borderRight: 0, paddingInline: "0 0 0 1rem" }}>
                    <div className="fact-label">{t.labelMahavakya}</div>
                    <div className="fact-value" style={{ fontSize: "0.95rem" }}>{m.mahavakya}</div>
                  </div>
                </div>

                <div className="card-foot">
                  <span className="meta">
                    {t.labelDeity}: {m.presidingDeity}
                  </span>
                </div>

                {m.imageCredit && <p className="credit">{t.imageCredit}: {m.imageCredit}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
