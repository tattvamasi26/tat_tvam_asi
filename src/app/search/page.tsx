"use client";
import { useState } from "react";
import { VERSES, TEMPLES, CONCEPTS, TEACHERS } from "@/lib/data";
import Link from "next/link";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const q = query.toLowerCase().trim();
  const results = q.length < 2 ? null : {
    verses:   VERSES.filter(v => v.translation_en.toLowerCase().includes(q) || v.source.toLowerCase().includes(q) || v.transliteration.toLowerCase().includes(q)),
    temples:  TEMPLES.filter(t => t.name.toLowerCase().includes(q) || t.location.toLowerCase().includes(q) || t.dynasty.toLowerCase().includes(q)),
    concepts: CONCEPTS.filter(c => c.term_en.toLowerCase().includes(q) || c.definition.toLowerCase().includes(q) || c.term_iast.toLowerCase().includes(q)),
    teachers: TEACHERS.filter(t => t.name.toLowerCase().includes(q) || t.biography?.toLowerCase().includes(q)),
  };
  const total = results ? results.verses.length + results.temples.length + results.concepts.length + results.teachers.length : 0;

  return (
    <div style={{ background: "var(--bg0)", minHeight: "100vh", paddingTop: 100 }}>
      <div style={{ borderBottom: "1px solid rgba(200,150,62,0.1)", padding: "60px 2rem 50px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Search</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 300, color: "var(--text0)" }}>Find Wisdom</h1>
        </div>
      </div>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 2rem" }}>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search verses, temples, concepts, teachers…"
          style={{ width: "100%", background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.2)", outline: "none", padding: "1rem 1.5rem", fontFamily: "var(--sans)", fontSize: "0.9rem", color: "var(--text0)", marginBottom: "0.8rem", transition: "border-color 0.3s" }}
          onFocus={e => (e.target.style.borderColor = "rgba(200,150,62,0.5)")}
          onBlur={e => (e.target.style.borderColor = "rgba(200,150,62,0.2)")}/>
        {query && <p style={{ fontFamily: "var(--sans)", fontSize: "0.72rem", color: "var(--text2)", letterSpacing: "0.1em" }}>{total > 0 ? `${total} results` : "No results found"}</p>}

        {results && total > 0 && (
          <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "3rem" }}>
            {results.verses.length > 0 && (
              <div>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.63rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Verses ({results.verses.length})</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--bg3)" }}>
                  {results.verses.map(v => (
                    <Link key={v.id} href={`/verses/${v.id}`} style={{ display: "block", background: "var(--bg0)", padding: "1.5rem 2rem", textDecoration: "none", transition: "background 0.3s" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "var(--bg2)")} onMouseLeave={e => (e.currentTarget.style.background = "var(--bg0)")}>
                      <p style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", fontWeight: 300, color: "var(--text0)" }}>{v.sanskrit}</p>
                      <p style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", color: "var(--text1)", marginTop: "0.3rem" }}>{v.translation_en.slice(0, 100)}…</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {results.teachers.length > 0 && (
              <div>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.63rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Teachers ({results.teachers.length})</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--bg3)" }}>
                  {results.teachers.map(t => (
                    <Link key={t.id} href={`/teachers/${t.slug}`} style={{ display: "block", background: "var(--bg0)", padding: "1.5rem 2rem", textDecoration: "none", transition: "background 0.3s" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "var(--bg2)")} onMouseLeave={e => (e.currentTarget.style.background = "var(--bg0)")}>
                      <p style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", fontWeight: 300, color: "var(--text0)" }}>{t.name}</p>
                      <p style={{ fontFamily: "var(--sans)", fontSize: "0.72rem", color: "var(--saffron)", marginTop: "0.2rem" }}>{t.era}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {results.concepts.length > 0 && (
              <div>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.63rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Concepts ({results.concepts.length})</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 2, background: "var(--bg3)" }}>
                  {results.concepts.map(c => (
                    <Link key={c.id} href={`/concepts/${c.slug}`} style={{ display: "block", background: "var(--bg0)", padding: "1.5rem 2rem", textDecoration: "none", transition: "background 0.3s" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "var(--bg2)")} onMouseLeave={e => (e.currentTarget.style.background = "var(--bg0)")}>
                      <p style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", fontWeight: 300, color: "var(--gold)", opacity: 0.8 }}>{c.term_sanskrit}</p>
                      <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 300, color: "var(--text0)", marginTop: "0.2rem" }}>{c.term_en}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {results.temples.length > 0 && (
              <div>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.63rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Temples ({results.temples.length})</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--bg3)" }}>
                  {results.temples.map(t => (
                    <Link key={t.id} href={`/temples/${t.slug}`} style={{ display: "block", background: "var(--bg0)", padding: "1.5rem 2rem", textDecoration: "none", transition: "background 0.3s" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "var(--bg2)")} onMouseLeave={e => (e.currentTarget.style.background = "var(--bg0)")}>
                      <p style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", fontWeight: 300, color: "var(--text0)" }}>{t.name}</p>
                      <p style={{ fontFamily: "var(--sans)", fontSize: "0.72rem", color: "var(--text2)", marginTop: "0.2rem" }}>{t.location}, {t.state}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
