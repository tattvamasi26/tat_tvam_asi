import { getVerseIds, getVerseById } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const ids = await getVerseIds();
  return ids.map(id => ({ id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const verse = await getVerseById(params.id);
  if (!verse) return { title: "Verse Not Found" };
  return { title: `${verse.source} ${verse.chapter}`, description: verse.translation_en };
}

export default async function VersePage({ params }: { params: { id: string } }) {
  const verse = await getVerseById(params.id);
  if (!verse) notFound();

  return (
    <div style={{ background: "var(--bg0)", minHeight: "100vh", paddingTop: 100 }}>
      <div style={{ borderBottom: "1px solid rgba(200,150,62,0.1)", padding: "60px 2rem 50px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Link href="/verses" style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", textDecoration: "none", display: "block", marginBottom: "2rem" }}>← All Verses</Link>
          {verse.is_mahavakya && <span style={{ display: "inline-block", fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", border: "1px solid rgba(200,150,62,0.3)", padding: "0.3rem 1rem", marginBottom: "1.5rem" }}>Mahavakya</span>}
          <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem,6vw,4rem)", fontWeight: 300, color: "var(--text0)", letterSpacing: "0.04em", lineHeight: 1.4, marginBottom: "0.8rem" }}>{verse.sanskrit}</p>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.82rem", letterSpacing: "0.15em", color: "var(--text2)", fontStyle: "italic" }}>{verse.transliteration}</p>
        </div>
      </div>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 2rem" }}>
        <blockquote style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", fontStyle: "italic", fontWeight: 300, color: "var(--text0)", lineHeight: 1.7, borderLeft: "2px solid var(--gold)", paddingLeft: "2rem", marginBottom: "3rem", opacity: 0.9 }}>
          "{verse.translation_en}"
        </blockquote>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "3rem", flexWrap: "wrap" }}>
          {[["Source", verse.source], ["Chapter", verse.chapter], ["Category", verse.category]].filter(([,v]) => v).map(([label, value]) => (
            <div key={label} style={{ background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.1)", padding: "1rem 1.5rem" }}>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", marginBottom: "0.3rem" }}>{label}</p>
              <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontWeight: 300, color: "var(--gold)", textTransform: "capitalize" }}>{value}</p>
            </div>
          ))}
        </div>
        {verse.commentary && (
          <>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1.2rem" }}>Commentary</p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.95rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300 }}>{verse.commentary}</p>
          </>
        )}
        {verse.tags?.length > 0 && (
          <div style={{ marginTop: "3rem", display: "flex", flexWrap: "wrap", gap: 8 }}>
            {verse.tags.map(tag => (
              <span key={tag} style={{ fontFamily: "var(--sans)", fontSize: "0.63rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text2)", border: "1px solid rgba(90,82,69,0.4)", padding: "0.3rem 0.8rem" }}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
