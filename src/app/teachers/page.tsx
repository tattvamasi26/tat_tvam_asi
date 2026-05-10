import { TEACHERS } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Acharyas & Teachers" };

export default function TeachersPage() {
  return (
    <div style={{ background: "var(--bg0)", minHeight: "100vh", paddingTop: 100 }}>
      <div style={{ borderBottom: "1px solid rgba(200,150,62,0.1)", padding: "60px 2rem 50px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Guru Parampara</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 300, color: "var(--text0)" }}>Acharyas & Teachers</h1>
          <p style={{ fontFamily: "var(--serif)", fontSize: "1.05rem", fontStyle: "italic", color: "var(--gold)", marginTop: "1rem" }}>"The flame passes from teacher to student across millennia — each a lamp lighting the next without diminishing."</p>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 2rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--bg3)" }}>
          {TEACHERS.map(t => (
            <Link key={t.id} href={`/teachers/${t.slug}`} className="card-link card-link-dark"
              style={{ padding: "3rem 2.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "3rem", alignItems: "start" }}>
                <div>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--saffron)" }}>{t.era}</p>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.72rem", color: "var(--text2)", marginTop: "0.3rem" }}>{t.tradition}</p>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "1rem" }}>
                    <h3 style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: 300, color: "var(--text0)" }}>{t.name}</h3>
                    <span style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", color: "var(--text2)" }}>{t.name_sanskrit}</span>
                  </div>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.88rem", color: "var(--text1)", lineHeight: 1.9, fontWeight: 300, marginBottom: "1rem" }}>{t.biography?.slice(0, 200)}...</p>
                  {t.quote && <blockquote style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontStyle: "italic", color: "var(--text1)", borderLeft: "1px solid rgba(200,150,62,0.2)", paddingLeft: "1rem", lineHeight: 1.7 }}>"{t.quote.slice(0, 120)}…"</blockquote>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}