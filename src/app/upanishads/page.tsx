import Link from "next/link";
import { getAllUpanishads } from "@/lib/db";

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const metadata = { title: "Upanishads" };

export default async function UpanishadsPage() {
  const rows = await getAllUpanishads();
  const upanishads = rows.map(u => ({
    sa: u.name_sanskrit,
    en: u.name_en,
    veda: capitalize(u.veda),
    verses: u.verse_count,
    teaching: u.key_teaching,
    slug: u.slug,
  }));
  return (
    <div style={{ background:"var(--bg0)", minHeight:"100vh", paddingTop:100 }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"60px 2rem" }}>
        <p style={{ fontFamily:"var(--sans)", fontSize:"0.65rem", letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--saffron)", marginBottom:"1.2rem" }}>Shruti</p>
        <h1 style={{ fontFamily:"var(--serif)", fontSize:"clamp(2.5rem,5vw,4rem)", fontWeight:300, color:"var(--text0)", marginBottom:"1rem" }}>The Upanishads</h1>
        <p style={{ fontFamily:"var(--serif)", fontSize:"1.05rem", fontStyle:"italic", color:"var(--gold)", marginBottom:"1rem" }}>"The Upanishads do not explain truth — they create the conditions in which truth can be recognised."</p>
        <div style={{ width:40, height:1, background:"var(--gold-dim)", margin:"2rem 0 4rem" }}/>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:2, background:"var(--bg3)" }}>
          {upanishads.map(u => (
            <div key={u.slug} style={{ background:"var(--bg0)", padding:"2.5rem 2rem", transition:"background 0.4s" }}
              className="hover-bg0-to-bg2">
              <p style={{ fontFamily:"var(--serif)", fontSize:"1.8rem", fontWeight:300, color:"var(--gold)", opacity:0.8, marginBottom:"0.3rem" }}>{u.sa}</p>
              <p style={{ fontFamily:"var(--serif)", fontSize:"1.1rem", fontWeight:300, color:"var(--text0)", marginBottom:"0.3rem" }}>{u.en}</p>
              <p style={{ fontFamily:"var(--sans)", fontSize:"0.62rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--text2)", marginBottom:"1.2rem" }}>{u.veda} · {u.verses} verses</p>
              <p style={{ fontFamily:"var(--serif)", fontSize:"0.95rem", fontStyle:"italic", color:"var(--text1)", lineHeight:1.7, borderLeft:"1px solid rgba(200,150,62,0.2)", paddingLeft:"1rem" }}>{u.teaching}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
