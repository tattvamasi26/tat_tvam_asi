import { getAllTemples, getTempleBySlug } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const temples = await getAllTemples();
  return temples.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const t = await getTempleBySlug(params.slug);
  if (!t) return { title: "Temple Not Found" };
  return { title: t.name, description: t.description };
}

export default async function TemplePage({ params }: { params: { slug: string } }) {
  const temple = await getTempleBySlug(params.slug);
  if (!temple) notFound();

  return (
    <div style={{ background: "var(--bg0)", minHeight: "100vh", paddingTop: 100 }}>
      <div style={{ borderBottom: "1px solid rgba(200,150,62,0.1)", padding: "60px 2rem 50px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Link href="/temples" style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", textDecoration: "none", display: "block", marginBottom: "2rem" }}>← All Temples</Link>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>{temple.architecture_style} · {temple.dynasty}</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 300, color: "var(--text0)", lineHeight: 1.1, marginBottom: "0.5rem" }}>{temple.name}</h1>
          {temple.name_local && <p style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", color: "var(--text2)", marginBottom: "1rem" }}>{temple.name_local}</p>}
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-dim)" }}>{temple.location}, {temple.state} · {temple.century_built}</p>
        </div>
      </div>
      <div style={{ background: "var(--bg2)", aspectRatio: "21/9", maxHeight: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "var(--serif)", fontSize: "5rem", color: "var(--gold)", opacity: 0.08 }}>◈</span>
      </div>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>About this Temple</p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.95rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginBottom: "3rem" }}>{temple.description}</p>
            {temple.significance && (
              <>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Philosophical Significance</p>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontStyle: "italic", fontWeight: 300, color: "var(--text0)", lineHeight: 1.8, borderLeft: "2px solid rgba(200,150,62,0.3)", paddingLeft: "1.5rem" }}>{temple.significance}</p>
              </>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--bg3)" }}>
            {[["Presiding Deity", temple.presiding_deity], ["Dynasty", temple.dynasty], ["Architecture", temple.architecture_style], ["Built", temple.century_built], ["Location", `${temple.location}, ${temple.state}`]].map(([label, value]) => (
              <div key={label} style={{ background: "var(--bg1)", padding: "1.2rem 1.5rem" }}>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", marginBottom: "0.3rem" }}>{label}</p>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 300, color: "var(--text0)" }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
