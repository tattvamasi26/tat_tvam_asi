import { CONCEPTS } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Vedantic Concepts" };

export default function ConceptsPage() {
  return (
    <div style={{ background: "var(--bg0)", minHeight: "100vh", paddingTop: 100 }}>
      <div style={{ borderBottom: "1px solid rgba(200,150,62,0.1)", padding: "60px 2rem 50px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Vedantic Tattvas</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 300, color: "var(--text0)" }}>Concepts & Terms</h1>
          <p style={{ fontFamily: "var(--serif)", fontSize: "1.05rem", fontStyle: "italic", color: "var(--gold)", marginTop: "1rem" }}>"The vocabulary of liberation — each term a pointer toward the infinite."</p>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 2, background: "var(--bg3)" }}>
          {CONCEPTS.map(c => (
            <Link key={c.id} href={`/concepts/${c.slug}`}
              style={{ display: "block", background: "var(--bg0)", padding: "2.5rem 2rem", textDecoration: "none", transition: "background 0.4s" }}
              className="hover-bg0-to-bg2">
              <p style={{ fontFamily: "var(--serif)", fontSize: "2.5rem", fontWeight: 300, color: "var(--gold)", opacity: 0.8, marginBottom: "0.3rem" }}>{c.term_sanskrit}</p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--text2)", fontStyle: "italic", marginBottom: "0.8rem" }}>{c.term_iast}</p>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--text0)", marginBottom: "0.8rem" }}>{c.term_en}</h3>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "var(--text1)", lineHeight: 1.8, fontWeight: 300 }}>{c.definition}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
