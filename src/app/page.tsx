"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const VERSES = [
  { sa: "सर्वं खल्विदं ब्रह्म", ia: "Sarvaṃ Khalvidaṃ Brahma", tr: "All this is verily Brahman — not some of it, not most of it. All of it. The ground beneath apparent difference.", src: "Chandogya Upanishad · 3.14.1" },
  { sa: "अहं ब्रह्मास्मि", ia: "Ahaṃ Brahmāsmi", tr: "I am Brahman. Not as arrogance — as the recognition that there is no boundary between the knower and the known.", src: "Brihadaranyaka Upanishad · 1.4.10" },
  { sa: "एकमेवाद्वितीयम्", ia: "Ekam Evādvitīyam", tr: "One only, without a second. Not one among many — one in which there is no other. The most radical statement in human thought.", src: "Chandogya Upanishad · 6.2.1" },
  { sa: "नेति नेति", ia: "Neti Neti", tr: "Not this, not this. Arriving at Brahman by negating everything it is not — until only the negator remains.", src: "Brihadaranyaka Upanishad · 2.3.6" },
];

const PILLARS = [
  { icon: "☽", title: "Advaita Vedanta", sub: "The Path of Non-Duality", desc: "Not a doctrine to accept — a direct recognition to arrive at. The teaching begins with a simple question: who is the one who is aware right now? Follow that inward and philosophy dissolves into experience.", accent: "saffron", href: "/concepts" },
  { icon: "✦", title: "Shruti & Smriti", sub: "Vedas and Upanishads", desc: "The Vedas are not books. They are the breath of existence, remembered by those who listened in silence. The Upanishads do not explain truth — they create conditions in which truth can be recognised.", accent: "gold", href: "/verses" },
  { icon: "◉", title: "Vedanta in Life", sub: "Sadhana & Dharma", desc: "Liberation is not an event at the end of a long spiritual career. It is a way of seeing — available in this moment, in this breath. The ancient teachings speak directly to ordinary living.", accent: "gold", href: "/concepts" },
  { icon: "◈", title: "The Living Stones", sub: "Temples & Sacred Space", desc: "A temple is not a building. It is a cosmogram — the universe compressed into stone so you can walk through it and remember what you are. The garbhagriha is the cave of the heart.", accent: "saffron", href: "/temples" },
];

const MAHAVAKYAS = [
  { sa: "प्रज्ञानं ब्रह्म", ia: "Prajñānaṃ Brahma", meaning: "Consciousness is Brahman", src: "Aitareya Upanishad · Rigveda" },
  { sa: "अहं ब्रह्मास्मि", ia: "Ahaṃ Brahmāsmi", meaning: "I am Brahman", src: "Brihadaranyaka Upanishad · Yajurveda" },
  { sa: "तत्त्वमसि", ia: "Tat Tvam Asi", meaning: "Thou Art That", src: "Chandogya Upanishad · Samaveda" },
  { sa: "अयमात्मा ब्रह्म", ia: "Ayam Ātmā Brahma", meaning: "This Self is Brahman", src: "Mandukya Upanishad · Atharvaveda" },
];

const TEACHERS = [
  { era: "8th Century CE", name: "Adi Shankaracharya", sa: "आदि शङ्कराचार्य", quote: "Brahma satyam, jagan mithya, jivo brahmaiva naparah — Brahman alone is real. The world is appearance. The individual self is none other than Brahman.", slug: "adi-shankaracharya" },
  { era: "1879 – 1950", name: "Ramana Maharshi", sa: "रमण महर्षि", quote: "The degree of freedom from unwanted thoughts and the degree of concentration on a single thought — these are the measure of spiritual progress.", slug: "ramana-maharshi" },
  { era: "1897 – 1981", name: "Nisargadatta Maharaj", sa: "निसर्गदत्त महाराज", quote: "Love says I am everything. Wisdom says I am nothing. Between the two, my life flows.", slug: "nisargadatta-maharaj" },
];

function Reveal({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

const S = {
  label: { fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--saffron)", marginBottom: "1.2rem" },
  title: { fontFamily: "var(--serif)", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 300, color: "var(--text0)", lineHeight: 1.15 },
  essence: { fontFamily: "var(--serif)", fontSize: "1.05rem", fontStyle: "italic" as const, fontWeight: 300, color: "var(--gold)", marginTop: "1rem", lineHeight: 1.6 },
  body: { fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300 },
  divider: { width: 40, height: 1, background: "var(--gold-dim)", margin: "1.8rem 0" },
};

export default function Home() {
  const [heroVis, setHeroVis] = useState(false);
  const [vIdx, setVIdx] = useState(0);
  const [vFade, setVFade] = useState(false);

  useEffect(() => { setTimeout(() => setHeroVis(true), 80); }, []);
  useEffect(() => {
    const iv = setInterval(() => { setVFade(true); setTimeout(() => { setVIdx(i => (i + 1) % VERSES.length); setVFade(false); }, 500); }, 7000);
    return () => clearInterval(iv);
  }, []);

  const v = VERSES[vIdx];
  const fade = (i: number) => { setVFade(true); setTimeout(() => { setVIdx(i); setVFade(false); }, 400); };

  return (
    <div style={{ background: "var(--bg0)", color: "var(--text0)" }}>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "100px 2rem 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
          <svg viewBox="0 0 900 900" style={{ width: "min(900px,100vw)", opacity: 0.045 }}>
            {[60,120,180,240,300,360,420].map((r,i) => <circle key={r} cx="450" cy="450" r={r} fill="none" stroke={i%2===0?"#C8963E":"#D4681E"} strokeWidth={i<4?0.6:0.3}/>)}
            <circle cx="450" cy="450" r="5" fill="#C8963E"/>
            <line x1="450" y1="30" x2="450" y2="870" stroke="#C8963E" strokeWidth="0.3"/>
            <line x1="30" y1="450" x2="870" y2="450" stroke="#C8963E" strokeWidth="0.3"/>
            <line x1="156" y1="156" x2="744" y2="744" stroke="#C8963E" strokeWidth="0.2"/>
            <line x1="744" y1="156" x2="156" y2="744" stroke="#C8963E" strokeWidth="0.2"/>
            <polygon points="450,210 630,510 270,510" fill="none" stroke="#D4681E" strokeWidth="0.5"/>
            <polygon points="450,690 270,390 630,390" fill="none" stroke="#C8963E" strokeWidth="0.5"/>
          </svg>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 55% at 50% 50%,transparent 20%,#0F0E0C 72%)" }}/>
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", color: "var(--gold)", opacity: heroVis ? 0.8 : 0, transition: "opacity 1s ease 0.3s", marginBottom: "1.2rem" }}>ॐ</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(3.5rem,10vw,7.5rem)", fontWeight: 300, color: "var(--text0)", lineHeight: 1.05, letterSpacing: "0.04em", opacity: heroVis ? 1 : 0, transform: heroVis ? "translateY(0)" : "translateY(20px)", transition: "opacity 1.2s ease 0.6s,transform 1.2s ease 0.6s", marginBottom: "0.8rem" }}>
            तत् त्वम् असि
          </h1>
          <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1rem,2.5vw,1.5rem)", fontStyle: "italic", fontWeight: 300, color: "var(--text1)", letterSpacing: "0.1em", opacity: heroVis ? 1 : 0, transition: "opacity 1s ease 1s" }}>Thou Art That</p>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text2)", marginTop: "3rem", opacity: heroVis ? 1 : 0, transition: "opacity 0.8s ease 1.4s" }}>Advaita Vedanta · Vedas · Temples · Dharma</p>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center", justifyContent: "center", marginTop: "2.5rem", opacity: heroVis ? 1 : 0, transition: "opacity 0.8s ease 1.6s" }}>
            <Link href="/verses" style={{ fontFamily: "var(--sans)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", border: "1px solid rgba(200,150,62,0.4)", padding: "0.75rem 2rem", textDecoration: "none" }}>Enter the Sanctuary</Link>
            <Link href="/concepts" style={{ fontFamily: "var(--sans)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", textDecoration: "none" }}>Explore Concepts →</Link>
          </div>
          <div style={{ width: 1, height: 60, background: "linear-gradient(to bottom,transparent,var(--gold))", margin: "3rem auto 0", opacity: heroVis ? 1 : 0, transition: "opacity 0.8s ease 1.8s" }}/>
        </div>
      </section>

      {/* VERSE OF THE DAY */}
      <section style={{ padding: "100px 2rem", background: "var(--bg1)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Reveal>
            <p style={{ ...S.label, textAlign: "center" }}>Verse of the Day</p>
            <div style={{ position: "relative", paddingLeft: "3rem", borderLeft: "1px solid rgba(200,150,62,0.25)", marginTop: "3rem", opacity: vFade ? 0 : 1, transform: vFade ? "translateY(8px)" : "translateY(0)", transition: "opacity 0.5s,transform 0.5s" }}>
              <span style={{ position: "absolute", top: "-1rem", left: "0.8rem", fontFamily: "var(--serif)", fontSize: "5rem", color: "var(--gold)", opacity: 0.12, lineHeight: 1 }}>"</span>
              <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 300, color: "var(--text0)", letterSpacing: "0.04em", lineHeight: 1.5, marginBottom: "0.6rem" }}>{v.sa}</p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.78rem", letterSpacing: "0.15em", color: "var(--text2)", fontStyle: "italic", marginBottom: "1.5rem" }}>{v.ia}</p>
              <p style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", fontStyle: "italic", fontWeight: 300, color: "var(--text0)", opacity: 0.8, lineHeight: 1.7, marginBottom: "1.5rem" }}>"{v.tr}"</p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>{v.src}</p>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: "2.5rem" }}>
              {VERSES.map((_, i) => <button key={i} onClick={() => fade(i)} style={{ width: 24, height: 2, background: i === vIdx ? "var(--gold)" : "var(--bg3)", border: "none", cursor: "pointer", transition: "background 0.3s", padding: 0 }}/>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section style={{ padding: "120px 2rem", background: "var(--bg0)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal><p style={S.label}>Four Pillars</p><h2 style={S.title}>Rivers of Wisdom</h2><div style={S.divider}/></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 2, marginTop: "3rem", background: "var(--bg3)" }}>
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <Link href={p.href} style={{ display: "block", background: "var(--bg0)", padding: "2.8rem 2.2rem", position: "relative", textDecoration: "none", transition: "background 0.5s", height: "100%" }}
                  onMouseEnter={e=>(e.currentTarget.style.background="var(--bg2)")} onMouseLeave={e=>(e.currentTarget.style.background="var(--bg0)")}>
                  <div style={{ position: "absolute", top: 0, left: 0, width: 2, height: "100%", background: p.accent==="saffron"?"var(--saffron)":"var(--gold)", opacity: 0.7 }}/>
                  <p style={{ fontSize: "1.6rem", color: p.accent==="saffron"?"var(--saffron)":"var(--gold)", marginBottom: "1.5rem" }}>{p.icon}</p>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", fontWeight: 300, color: "var(--text0)", marginBottom: "0.3rem" }}>{p.title}</h3>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.63rem", letterSpacing: "0.2em", textTransform: "uppercase", color: p.accent==="saffron"?"var(--saffron)":"var(--gold)", marginBottom: "1.2rem" }}>{p.sub}</p>
                  <div style={{ width: 32, height: 1, background: "var(--bg3)", marginBottom: "1.2rem" }}/>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.87rem", color: "var(--text1)", lineHeight: 1.9, fontWeight: 300 }}>{p.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MAHAVAKYAS */}
      <section style={{ padding: "120px 2rem", background: "var(--bg1)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center" }}>
            <p style={{ ...S.label, textAlign: "center" }}>The Four Great Sayings</p>
            <h2 style={{ ...S.title, textAlign: "center" }}>Mahavakyas</h2>
            <div style={{ ...S.divider, margin: "1.8rem auto" }}/>
            <p style={{ ...S.body, maxWidth: 520, margin: "0 auto" }}>Each Mahavakya is a complete teaching. Not a statement to believe — a pointer toward the recognition that ends seeking.</p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 2, marginTop: "4rem", background: "var(--bg3)" }}>
            {MAHAVAKYAS.map((m, i) => (
              <Reveal key={m.sa} delay={i * 0.08}>
                <div style={{ background: "var(--bg1)", padding: "2.5rem", transition: "background 0.5s", height: "100%" }}
                  onMouseEnter={e=>(e.currentTarget.style.background="var(--bg2)")} onMouseLeave={e=>(e.currentTarget.style.background="var(--bg1)")}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: 300, color: "var(--text0)", marginBottom: "0.4rem", letterSpacing: "0.04em" }}>{m.sa}</p>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--text2)", fontStyle: "italic", marginBottom: "0.8rem" }}>{m.ia}</p>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontStyle: "italic", fontWeight: 300, color: "var(--gold)", marginBottom: "0.6rem" }}>{m.meaning}</p>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.63rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text2)" }}>{m.src}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/verses" style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", textDecoration: "none" }}>Explore all verses →</Link>
          </Reveal>
        </div>
      </section>

      {/* TEACHERS */}
      <section style={{ padding: "120px 2rem", background: "var(--bg0)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center" }}>
            <p style={{ ...S.label, textAlign: "center" }}>Guru Parampara</p>
            <h2 style={{ ...S.title, textAlign: "center" }}>The Acharyas</h2>
            <div style={{ ...S.divider, margin: "1.8rem auto" }}/>
            <p style={{ ...S.body, maxWidth: 500, margin: "0 auto", textAlign: "center" }}>The flame of Advaita passes from teacher to student across millennia. Each Acharya — a lamp lighting the next without diminishing.</p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 2, marginTop: "4rem", background: "var(--bg3)" }}>
            {TEACHERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <Link href={`/teachers/${t.slug}`} style={{ display: "block", background: "var(--bg0)", padding: "2.5rem 2rem", textDecoration: "none", transition: "background 0.5s", height: "100%" }}
                  onMouseEnter={e=>(e.currentTarget.style.background="var(--bg2)")} onMouseLeave={e=>(e.currentTarget.style.background="var(--bg0)")}>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>{t.era}</p>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", fontWeight: 300, color: "var(--text0)", marginBottom: "0.2rem" }}>{t.name}</p>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", color: "var(--text2)", marginBottom: "1.2rem" }}>{t.sa}</p>
                  <blockquote style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontStyle: "italic", color: "var(--text1)", borderLeft: "1px solid rgba(200,150,62,0.2)", paddingLeft: "1rem", lineHeight: 1.7 }}>"{t.quote}"</blockquote>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLES */}
      <section style={{ padding: "120px 2rem", background: "var(--bg1)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <p style={S.label}>Deva-Sthanam</p>
            <h2 style={S.title}>The Living Stones</h2>
            <p style={S.essence}>"A temple is not a building. It is the universe compressed into stone, so you may walk through it and remember what you are."</p>
            <div style={S.divider}/>
            <p style={{ ...S.body, maxWidth: 580 }}>Stand in a temple corridor before the sanctum. The lamp is visible. The deity is not yet. In that threshold — between the known and the unknown — you are in the most honest position a human being can occupy.</p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 2, marginTop: "4rem", background: "var(--bg3)" }}>
            {[
              { name: "Brihadeeswarar Temple", loc: "Thanjavur · Tamil Nadu · 11th century", sig: "The vimana reaches 66 metres — topped by a single 80-tonne granite cap raised without machinery. Its shadow never falls on the ground at noon.", slug: "brihadeeswarar-temple" },
              { name: "Kailasa Temple, Ellora", loc: "Maharashtra · 8th century", sig: "Carved from a single basalt cliff. Not built — subtracted. 200,000 tonnes removed by hand. The temple was already inside the rock.", slug: "kailasa-temple-ellora" },
              { name: "Virupaksha, Hampi", loc: "Karnataka · 7th century", sig: "1300 years of unbroken worship. Empires rose and fell. The lamp inside has not gone out. This is what Dharma means in stone.", slug: "virupaksha-temple-hampi" },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <Link href={`/temples/${t.slug}`} style={{ display: "block", background: "var(--bg1)", textDecoration: "none", transition: "background 0.4s", height: "100%" }}
                  onMouseEnter={e=>(e.currentTarget.style.background="var(--bg2)")} onMouseLeave={e=>(e.currentTarget.style.background="var(--bg1)")}>
                  <div style={{ background: "var(--bg2)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "var(--serif)", fontSize: "3rem", color: "var(--gold)", opacity: 0.12 }}>◈</span>
                  </div>
                  <div style={{ padding: "1.8rem" }}>
                    <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 300, color: "var(--text0)", marginBottom: "0.3rem" }}>{t.name}</p>
                    <p style={{ fontFamily: "var(--sans)", fontSize: "0.63rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-dim)", marginBottom: "0.8rem" }}>{t.loc}</p>
                    <p style={{ fontFamily: "var(--sans)", fontSize: "0.82rem", color: "var(--text1)", lineHeight: 1.8, fontWeight: 300 }}>{t.sig}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/temples" style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", textDecoration: "none" }}>Explore all temples →</Link>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#080806", borderTop: "1px solid var(--stroke)", padding: "80px 2rem 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--serif)", fontSize: "2rem", color: "var(--gold)", opacity: 0.5, marginBottom: "2.5rem" }}>ॐ</p>
          <div style={{ background: "var(--bg1)", border: "1px solid var(--stroke)", padding: "3rem 2rem", marginBottom: "3rem", position: "relative" }}>
            <span style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", background: "#080806", padding: "0 1rem", fontFamily: "var(--sans)", fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold-dim)" }}>Shanti Mantra</span>
            <p style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", fontWeight: 300, color: "var(--text0)", lineHeight: 1.9, marginBottom: "1.2rem", opacity: 0.85 }}>
              ॐ सह नाववतु। सह नौ भुनक्तु।<br/>सह वीर्यं करवावहै।<br/>तेजस्विनावधीतमस्तु। मा विद्विषावहै।
            </p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.82rem", color: "var(--text1)", lineHeight: 1.9 }}>May we be protected together. May we be nourished together.<br/>May we create strength together. May our study be brilliant.</p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.25em", color: "var(--gold-dim)", marginTop: "1.2rem" }}>ॐ शान्तिः शान्तिः शान्तिः</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
            {[["Verses","/verses"],["Upanishads","/upanishads"],["Concepts","/concepts"],["Teachers","/teachers"],["Temples","/temples"]].map(([l,h])=>(
              <Link key={h} href={h} style={{ fontFamily: "var(--sans)", fontSize: "0.63rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text2)", textDecoration: "none" }}>{l}</Link>
            ))}
          </div>
          <div style={{ width: "100%", height: 1, background: "linear-gradient(to right,transparent,rgba(200,150,62,0.3),transparent)", marginBottom: "2rem" }}/>
          <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", color: "var(--gold-dim)" }}>तत् त्वम् असि</p>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", color: "var(--text2)", marginTop: "0.4rem", letterSpacing: "0.1em" }}>Chandogya Upanishad 6.8.7 · A sanctuary for seekers of the eternal</p>
        </div>
      </footer>
    </div>
  );
}
