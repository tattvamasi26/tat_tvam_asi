import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { getAllTemples } from "@/lib/data";

export const metadata: Metadata = { title: "Temples" };

export default function TemplesPage() {
  const { locale, t } = getTranslations();
  const temples = getAllTemples(locale);

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
          {temples.map((tp) => (
            <Link key={tp.id} href={`/temples/${tp.slug}`} className="card">
              {tp.imageUrl && (
                <div className="card-img">
                  <Image
                    src={tp.imageUrl}
                    alt={tp.name}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
              <div className="card-body">
                <h2 className="card-title">{tp.name}</h2>
                <p className="translit">{tp.nameLocal}</p>
                <p className="card-text clamp-3" style={{ marginTop: "0.5rem" }}>{tp.description}</p>
                <div className="card-foot">
                  <span className="meta">
                    {tp.location} · {tp.state}
                  </span>
                  <span className="chip chip-gold">{tp.centuryBuilt}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* The Tulunadu pillar is hand-built rather than data-driven —
            it is the first long-form temple monograph on the site. */}
        <div style={{ marginTop: "clamp(3rem, 7vw, 5rem)" }}>
          <hr className="rule" />
          <div className="feature" style={{ marginTop: "clamp(2rem, 5vw, 3.5rem)" }}>
            <div className="feature-media">
              <Image
                src="/images/mookambika/deity-main.jpg"
                alt="Sri Mookambika Temple, Kollur"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="feature-body">
              <p className="eyebrow">Temples of Tulunadu</p>
              <h2 className="title" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)" }}>
                Sri Mookambika Temple
              </h2>
              <p className="kannada" style={{ color: "var(--gold)", fontSize: "1.2rem" }}>
                ಕೊಲ್ಲೂರು ಶ್ರೀ ಮೂಕಾಂಬಿಕಾ ದೇವಸ್ಥಾನ
              </p>
              <p className="prose">
                Kollur · One of the Seven Mukti Sthalas of Parashurama Kshetra. History, Puranika
                Katha, rituals, agama shastra, and the significance of the Swayambhu Lingam.
              </p>
              <Link href="/temples/tulunadu/kollur-mookambika" className="btn" style={{ marginTop: "0.6rem" }}>
                {t.readMore}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
