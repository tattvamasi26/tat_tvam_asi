import { TEMPLES } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hindu Temples",
  description: "The glory and science of Hindu temple architecture — cosmograms in stone encoding the Vedic universe.",
};

export default function TemplesPage() {
  return (
    <div style={{ background: "var(--bg0)", minHeight: "100vh", paddingTop: 100 }}>
      <div style={{ borderBottom: "1px solid rgba(200,150,62,0.1)", padding: "60px 2rem 50px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Deva-Sthanam</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 300, color: "var(--text0)" }}>The Living Stones</h1>
          <p style={{ fontFamily: "var(--serif)", fontSize: "1.05rem", fontStyle: "italic", color: "var(--gold)", marginTop: "1rem", maxWidth: 560 }}>"Hindu temples are not architecture — they are the universe crystallised in stone."</p>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 2, background: "var(--bg3)" }}>
          {TEMPLES.map(t => (
            <Link key={t.id} href={`/temples/${t.slug}`}
              style={{ display: "block", background: "var(--bg0)", textDecoration: "none", transition: "background 0.4s" }}
              className="hover-bg0-to-bg2">
              <div style={{ background: "var(--bg2)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--serif)", fontSize: "3rem", color: "var(--gold)", opacity: 0.1 }}>◈</span>
              </div>
              <div style={{ padding: "1.8rem" }}>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "0.5rem" }}>{t.architecture_style}</p>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", fontWeight: 300, color: "var(--text0)", marginBottom: "0.3rem" }}>{t.name}</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.63rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-dim)", marginBottom: "0.8rem" }}>{t.location}, {t.state} · {t.dynasty}</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "var(--text1)", lineHeight: 1.8, fontWeight: 300 }}>{t.description?.slice(0, 120)}...</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
