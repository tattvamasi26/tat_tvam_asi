import { getAllConcepts, getConceptBySlug } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const concepts = await getAllConcepts();
  return concepts.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const c = await getConceptBySlug(params.slug);
  if (!c) return { title: "Concept Not Found" };
  return { title: `${c.term_en} — ${c.term_iast}`, description: c.definition };
}

export default async function ConceptPage({ params }: { params: { slug: string } }) {
  const concept = await getConceptBySlug(params.slug);
  if (!concept) notFound();

  return (
    <div style={{ background: "var(--bg0)", minHeight: "100vh", paddingTop: 100 }}>
      <div style={{ borderBottom: "1px solid rgba(200,150,62,0.1)", padding: "60px 2rem 50px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Link href="/concepts" style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", textDecoration: "none", display: "block", marginBottom: "2rem" }}>← All Concepts</Link>
          <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(3rem,8vw,6rem)", fontWeight: 300, color: "var(--gold)", opacity: 0.8, lineHeight: 1, marginBottom: "0.5rem" }}>{concept.term_sanskrit}</p>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--text2)", fontStyle: "italic", marginBottom: "0.8rem" }}>{concept.term_iast}</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 300, color: "var(--text0)" }}>{concept.term_en}</h1>
        </div>
      </div>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 2rem" }}>
        <p style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontStyle: "italic", fontWeight: 300, color: "var(--gold)", lineHeight: 1.6, borderLeft: "2px solid rgba(200,150,62,0.4)", paddingLeft: "1.5rem", marginBottom: "3rem" }}>{concept.definition}</p>
        {concept.detailed_explanation && (
          <>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1.2rem" }}>In Depth</p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.95rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginBottom: "3rem" }}>{concept.detailed_explanation}</p>
          </>
        )}
        {concept.related_concepts?.length > 0 && (
          <>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1.2rem" }}>Related Concepts</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {concept.related_concepts.map(slug => (
                <Link key={slug} href={`/concepts/${slug}`}
                  style={{ fontFamily: "var(--sans)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", border: "1px solid rgba(200,150,62,0.3)", padding: "0.4rem 1rem", textDecoration: "none" }}>
                  {slug}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
