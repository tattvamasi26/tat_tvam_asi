import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "@/i18n/server";
import { kollur } from "@/i18n/kollur";

export const metadata: Metadata = {
  title: "Kollur Mookambika Temple — Temples of Tulunadu",
  description: "The complete guide to Sri Mookambika Temple, Kollur — history, Puranika Katha, rituals, agama shastra, significance of the deity, and how to reach.",
};

const IMGS = {
  deityMain:       "/images/mookambika/deity-main.jpg",
  deityGold:       "/images/mookambika/deity-gold.jpg",
  deitySilver:     "/images/mookambika/deity-silver-palanquin.jpg",
  flowersEntrance: "/images/mookambika/flowers-entrance.jpg",
  deepasthambha:   "/images/mookambika/deepasthambha.jpg",
};

// Reusable image container with overlay caption
function TempleImg({ src, alt, caption, subCaption, aspectRatio = "4/3", objectPosition = "center" }: {
  src: string; alt: string; caption?: string; subCaption?: string;
  aspectRatio?: string; objectPosition?: string;
}) {
  return (
    <div style={{ position: "relative", aspectRatio, overflow: "hidden", borderRadius: 2 }}>
      <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition, display: "block" }}/>
      {(caption || subCaption) && (
        <>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)", pointerEvents: "none" }}/>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1rem 1.2rem" }}>
            {caption && <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontWeight: 300, color: "var(--text0)" }}>{caption}</p>}
            {subCaption && <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", color: "var(--gold)", letterSpacing: "0.1em", marginTop: "0.2rem" }}>{subCaption}</p>}
          </div>
        </>
      )}
    </div>
  );
}

export default function MookambikaPage() {
  const { locale } = getTranslations();
  const k = kollur(locale);

  return (
    <div style={{ background: "var(--bg0)", minHeight: "100vh", color: "var(--text0)" }}>

      {/* ── HERO ── */}
      <div style={{ position: "relative", height: "90vh", minHeight: 560, overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <img
          src={IMGS.deityMain}
          alt={k.alts.hero}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", filter: "brightness(0.5) saturate(0.9)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0F0E0C 15%, rgba(15,14,12,0.3) 60%, transparent 100%)" }}/>
        <div style={{ position: "relative", zIndex: 1, padding: "0 2rem 6rem", maxWidth: 900, margin: "0 auto", width: "100%" }}>
          <Link href="/temples" style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,150,62,0.7)", textDecoration: "none", display: "block", marginBottom: "2rem" }}>
            {k.backTemples}
          </Link>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>{k.region}</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 300, color: "var(--text0)", lineHeight: 1.1, marginBottom: "0.8rem" }}>{k.title}</h1>
          <p style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontStyle: "italic", fontWeight: 300, color: "var(--gold)", marginBottom: "0.5rem" }}>ಕೊಲ್ಲೂರು ಶ್ರೀ ಮೂಕಾಂಬಿಕಾ ದೇವಸ್ಥಾನ</p>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.82rem", color: "rgba(237,228,208,0.55)", letterSpacing: "0.1em" }}>{k.tagline}</p>
        </div>
      </div>

      {/* ── QUICK FACTS ── */}
      <div style={{ background: "var(--bg2)", borderTop: "1px solid rgba(200,150,62,0.15)", borderBottom: "1px solid rgba(200,150,62,0.15)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))" }}>
          {k.facts.map(([l,v]) => (
            <div key={l} style={{ padding: "1.4rem 1rem", borderRight: "1px solid rgba(200,150,62,0.1)" }}>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", marginBottom: "0.3rem" }}>{l}</p>
              <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontWeight: 300, color: "var(--gold)" }}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 2rem" }}>

        {/* ── OPENING QUOTE ── */}
        <div style={{ padding: "80px 0 60px", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontStyle: "italic", fontWeight: 300, color: "var(--text0)", lineHeight: 1.7, borderLeft: "2px solid var(--gold)", paddingLeft: "2rem" }}>
            {k.quote}
          </p>
        </div>

        {/* ── PURANIKA KATHA ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>{k.kathaEyebrow}</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>{k.kathaTitle}</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "3rem" }}/>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start", marginBottom: "3rem" }}>
            <div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)", marginBottom: "1rem" }}>{k.demonTitle}</h3>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginBottom: "1rem" }}>
                {k.demonP1}
              </p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300 }}>
                {k.demonP2}
              </p>
            </div>
            <TempleImg
              src={IMGS.flowersEntrance}
              alt={k.alts.flowers}
              caption={k.captions.flowers}
              subCaption={k.captions.flowersSub}
              aspectRatio="3/4"
            />
          </div>

          {/* Deity gold — full width */}
          <TempleImg
            src={IMGS.deityGold}
            alt={k.alts.gold}
            caption={k.captions.gold}
            subCaption={k.captions.goldSub}
            aspectRatio="4/5"
            objectPosition="top"
          />

          <div style={{ background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.12)", padding: "2.5rem", marginTop: "3rem" }}>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)", marginBottom: "1rem" }}>{k.shankaraTitle}</h3>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginBottom: "1rem" }}>
              {k.shankaraP1}
            </p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300 }}>
              {k.shankaraP2}
            </p>
          </div>
        </section>

        {/* ── THE DEITY ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>{k.deityEyebrow}</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>{k.deityTitle}</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "2.5rem" }}/>

          <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginBottom: "2.5rem" }}>
            {k.deityBody}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, background: "var(--bg3)", marginBottom: "3rem" }}>
            {k.forms.map((f, i) => (
              <div key={f.form} style={{ background: "var(--bg1)", padding: "2rem" }}>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", marginBottom: "0.5rem" }}>{f.time}</p>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 300, color: ["var(--text0)", "var(--gold)", "var(--saffron)"][i], marginBottom: "0.4rem" }}>{f.form}</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", color: "var(--text1)", lineHeight: 1.7 }}>{f.aspect}</p>
              </div>
            ))}
          </div>

          {/* Silver palanquin + Deepasthambha */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2.5rem" }}>
            <TempleImg
              src={IMGS.deitySilver}
              alt={k.alts.silver}
              caption={k.captions.silver}
              subCaption={k.captions.silverSub}
              aspectRatio="3/4"
              objectPosition="top"
            />
            <TempleImg
              src={IMGS.deepasthambha}
              alt={k.alts.deepa}
              caption={k.captions.deepa}
              subCaption={k.captions.deepaSub}
              aspectRatio="3/4"
            />
          </div>

          <div style={{ background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.12)", padding: "2rem" }}>
            <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontStyle: "italic", color: "var(--gold)", marginBottom: "0.8rem" }}>{k.deepaTitle}</p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: "var(--text1)", lineHeight: 1.9 }}>
              {k.deepaBody}
            </p>
          </div>
        </section>

        {/* ── AGAMA SHASTRA ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>{k.agamaEyebrow}</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>{k.agamaTitle}</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "2.5rem" }}/>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginBottom: "3rem" }}>
            {k.agamaIntro}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {k.practices.map(p => (
              <div key={p.title} style={{ borderLeft: "1px solid rgba(200,150,62,0.25)", paddingLeft: "1.5rem" }}>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 300, color: "var(--gold)", marginBottom: "0.5rem" }}>{p.title}</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "var(--text1)", lineHeight: 1.85 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── DAILY RITUALS ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>{k.scheduleEyebrow}</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>{k.scheduleTitle}</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "3rem" }}/>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--bg3)", marginBottom: "3rem" }}>
            {k.rituals.map((r, i) => (
              <div key={i} style={{ background: i % 2 === 0 ? "var(--bg1)" : "var(--bg0)", padding: "1.6rem 2rem", display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
                <div>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.78rem", color: "var(--gold)" }}>{r.time}</p>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontStyle: "italic", color: "var(--text0)", marginTop: "0.2rem", fontWeight: 300 }}>{r.name}</p>
                </div>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "var(--text1)", lineHeight: 1.85, fontWeight: 300 }}>{r.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.15)", padding: "2rem" }}>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1.2rem" }}>{k.timingsTitle}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1.5rem" }}>
              {k.timings.map(([l,v]) => (
                <div key={l}>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text2)", marginBottom: "0.3rem" }}>{l}</p>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 300, color: "var(--text0)" }}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FESTIVALS ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>{k.festivalsEyebrow}</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>{k.festivalsTitle}</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "3rem" }}/>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {k.festivals.map(f => (
              <div key={f.name} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", paddingBottom: "2.5rem", borderBottom: "1px solid rgba(200,150,62,0.08)" }}>
                <div>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)" }}>{f.name}</p>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", color: "var(--text2)", letterSpacing: "0.1em", marginTop: "0.3rem" }}>{f.when}</p>
                </div>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.88rem", color: "var(--text1)", lineHeight: 1.95, fontWeight: 300 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SURROUNDINGS ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>{k.landEyebrow}</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>{k.landTitle}</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "2.5rem" }}/>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginBottom: "1.5rem" }}>
                {k.landP1}
              </p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300 }}>
                {k.landP2}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--bg3)" }}>
              {k.places.map(([place, desc]) => (
                <div key={place} style={{ background: "var(--bg1)", padding: "1.2rem 1.5rem" }}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontWeight: 300, color: "var(--gold)", marginBottom: "0.2rem" }}>{place}</p>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", color: "var(--text1)", lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW TO REACH ── */}
        <section style={{ padding: "80px 0" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>{k.visitEyebrow}</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>{k.visitTitle}</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "3rem" }}/>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <div>
              <div style={{ background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.15)", padding: "2rem", marginBottom: "2rem" }}>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>{k.addressLabel}</p>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 300, color: "var(--text0)", lineHeight: 1.8 }}>
                  Sri Mookambika Temple<br/>
                  Kollur, Byndoor Taluk<br/>
                  Udupi District<br/>
                  Karnataka — 576 220
                </p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", color: "var(--text1)", marginTop: "1rem" }}>📞 82542 58221</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", color: "var(--text1)", marginTop: "0.3rem" }}>🌐 kollurmookambikatemple.org</p>
              </div>
              <div style={{ background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.15)", padding: "2rem" }}>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>{k.bestTimeLabel}</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "var(--text1)", lineHeight: 1.85 }}>
                  {k.bestTime.map((b, i) => (
                    <span key={b.strong}>
                      <strong style={{ color: "var(--gold)", fontWeight: 400 }}>{b.strong}</strong>
                      {b.rest}
                      {i < k.bestTime.length - 1 && <><br/><br/></>}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {k.travel.map(item => (
                <div key={item.mode} style={{ display: "flex", gap: "1.2rem" }}>
                  <div style={{ width: 100, flexShrink: 0 }}>
                    <p style={{ fontFamily: "var(--serif)", fontSize: "0.9rem", fontWeight: 300, color: "var(--gold)" }}>{item.mode}</p>
                  </div>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "var(--text1)", lineHeight: 1.8, fontWeight: 300 }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ── FOOTER NAV ── */}
      <div style={{ background: "var(--bg1)", borderTop: "1px solid rgba(200,150,62,0.1)", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <Link href="/temples" style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", textDecoration: "none" }}>{k.allTemples}</Link>
          <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontStyle: "italic", color: "var(--gold)", opacity: 0.6 }}>ಜಯ ಮೂಕಾಂಬಿಕೆ</p>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)" }}>{k.nextTemple}</p>
        </div>
      </div>

    </div>
  );
}