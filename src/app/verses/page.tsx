import { getAllVerses } from "@/lib/db";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sacred Verses",
  description: "Sanskrit shlokas from the Upanishads and Vedantic texts — with transliteration, translation, and commentary.",
};

export default async function VersesPage({ searchParams }: { searchParams: { category?: string } }) {
  const category = searchParams.category;
  const all = await getAllVerses();
  const verses = category ? all.filter(v => v.category === category) : all;

  return (
    <div style={{ background: "var(--bg0)", minHeight: "100vh", paddingTop: 100 }}>
      <div style={{ borderBottom: "1px solid rgba(200,150,62,0.1)", padding: "60px 2rem 50px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Shruti & Smriti</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 300, color: "var(--text0)" }}>Sacred Verses</h1>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: "var(--text1)", marginTop: "1rem" }}>{verses.length} verses from the Upanishads and Vedantic texts</p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 2rem 20px" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[undefined, "advaita", "shruti", "dharma"].map(cat => (
            <a key={cat ?? "all"} href={cat ? `/verses?category=${cat}` : "/verses"}
              style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", padding: "0.5rem 1.2rem", border: `1px solid ${category === cat ? "var(--saffron)" : "rgba(90,82,69,0.4)"}`, color: category === cat ? "var(--saffron)" : "var(--text2)", textDecoration: "none", transition: "all 0.3s" }}>
              {cat ?? "All"}
            </a>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 2rem 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 2, background: "var(--bg3)" }}>
          {verses.map(v => (
            <Link key={v.id} href={`/verses/${v.id}`}
              style={{ display: "block", background: "var(--bg0)", padding: "2.5rem 2rem", textDecoration: "none", transition: "background 0.4s", position: "relative" }}
              className="hover-bg0-to-bg2">
              <div style={{ position: "absolute", top: 0, left: 0, width: 2, height: "100%", background: "var(--gold)", opacity: 0.5 }}/>
              {v.is_mahavakya && <span style={{ fontFamily: "var(--sans)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", border: "1px solid rgba(200,150,62,0.3)", padding: "0.2rem 0.7rem", display: "inline-block", marginBottom: "1rem" }}>Mahavakya</span>}
              <p style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", fontWeight: 300, color: "var(--text0)", letterSpacing: "0.04em", marginBottom: "0.4rem" }}>{v.sanskrit}</p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.72rem", letterSpacing: "0.12em", color: "var(--text2)", fontStyle: "italic", marginBottom: "1rem" }}>{v.transliteration}</p>
              <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontStyle: "italic", fontWeight: 300, color: "var(--text0)", opacity: 0.75, lineHeight: 1.6, marginBottom: "1rem" }}>"{v.translation_en}"</p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.63rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>{v.source}{v.chapter ? ` · ${v.chapter}` : ""}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
