import Link from "next/link";
import type { Temple, Teacher } from "@/types";
import type { VerseDetail } from "@/lib/db";

const S = {
  label: { fontFamily:"var(--sans)", fontSize:"0.65rem", letterSpacing:"0.3em", textTransform:"uppercase" as const, color:"var(--saffron)", marginBottom:"1.2rem" },
  title: { fontFamily:"var(--serif)", fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:300, color:"var(--text0)", lineHeight:1.15 },
  divider: { width:40, height:1, background:"var(--gold-dim)", margin:"1.8rem 0" },
  body: { fontFamily:"var(--sans)", fontSize:"0.92rem", color:"var(--text1)", lineHeight:2, fontWeight:300 },
};

const pillars = [
  { title:"Advaita Vedanta", sub:"The Path of Non-Duality", desc:"The teaching that Atman and Brahman are one — individual self not separate from infinite consciousness.", icon:"☽", href:"/concepts", accent:"saffron" },
  { title:"Shruti & Smriti", sub:"Vedas and Upanishads", desc:"The revealed scriptures and remembered tradition that have guided seekers across millennia.", icon:"✦", href:"/verses", accent:"gold" },
  { title:"The Living Stones", sub:"Glory of Hindu Temples", desc:"Temples are cosmograms — sacred maps of the universe in stone, encoding cosmology and the divine.", icon:"◈", href:"/temples", accent:"saffron" },
  { title:"Dharma & Daily Life", sub:"Sanatana Dharma", desc:"The eternal order present in every breath, every action, every relationship.", icon:"◉", href:"/concepts", accent:"gold" },
];

export function PillarsGrid() {
  return (
    <section style={{ padding:"120px 2rem", background:"var(--bg0)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <p style={S.label}>Four Pillars</p>
        <h2 style={S.title}>Rivers of Wisdom</h2>
        <div style={S.divider}/>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:2, marginTop:"3rem", background:"var(--bg3)" }}>
          {pillars.map(p => (
            <Link key={p.title} href={p.href} className="pillar-link"
              style={{ padding:"2.8rem 2.2rem", position:"relative" }}>
              <div style={{ position:"absolute", top:0, left:0, width:2, height:"100%", background:p.accent==="saffron"?"var(--saffron)":"var(--gold)", opacity:0.7 }}/>
              <p style={{ fontSize:"1.6rem", color:p.accent==="saffron"?"var(--saffron)":"var(--gold)", marginBottom:"1.5rem" }}>{p.icon}</p>
              <h3 style={{ fontFamily:"var(--serif)", fontSize:"1.6rem", fontWeight:300, color:"var(--text0)", marginBottom:"0.3rem" }}>{p.title}</h3>
              <p style={{ fontFamily:"var(--sans)", fontSize:"0.63rem", letterSpacing:"0.2em", textTransform:"uppercase", color:p.accent==="saffron"?"var(--saffron)":"var(--gold)", marginBottom:"1.2rem" }}>{p.sub}</p>
              <div style={{ width:32, height:1, background:"var(--bg3)", marginBottom:"1.2rem" }}/>
              <p style={{ fontFamily:"var(--sans)", fontSize:"0.87rem", color:"var(--text1)", lineHeight:1.9, fontWeight:300 }}>{p.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VerseOfTheDay({ verse }: { verse: VerseDetail }) {
  return (
    <section style={{ padding:"100px 2rem", background:"var(--bg1)" }}>
      <div style={{ maxWidth:720, margin:"0 auto", textAlign:"center" }}>
        <p style={{ ...S.label, textAlign:"center" }}>Verse of the Day</p>
        <div style={{ position:"relative", padding:"0 2rem", marginTop:"3rem" }}>
          <span style={{ position:"absolute", top:"-1rem", left:"0.5rem", fontFamily:"var(--serif)", fontSize:"5rem", color:"var(--gold)", opacity:0.12, lineHeight:1 }}>"</span>
          <p style={{ fontFamily:"var(--serif)", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:300, color:"var(--text0)", letterSpacing:"0.04em", lineHeight:1.5, marginBottom:"0.6rem" }}>{verse.sanskrit}</p>
          <p style={{ fontFamily:"var(--sans)", fontSize:"0.78rem", letterSpacing:"0.15em", color:"var(--text2)", fontStyle:"italic", marginBottom:"1.5rem" }}>{verse.transliteration}</p>
          <p style={{ fontFamily:"var(--serif)", fontSize:"1.25rem", fontStyle:"italic", fontWeight:300, color:"var(--text0)", opacity:0.8, lineHeight:1.7, marginBottom:"1.5rem" }}>"{verse.translation_en}"</p>
        </div>
        <p style={{ fontFamily:"var(--sans)", fontSize:"0.68rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--gold)", marginTop:"1.5rem" }}>{verse.source}{verse.chapter ? ` · ${verse.chapter}` : ""}</p>
        {verse.is_mahavakya && (
          <span style={{ display:"inline-block", marginTop:"1rem", fontFamily:"var(--sans)", fontSize:"0.6rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--gold)", border:"1px solid rgba(200,150,62,0.3)", padding:"0.3rem 1rem" }}>Mahavakya</span>
        )}
      </div>
    </section>
  );
}

export function MahavakyaGrid({ verses }: { verses: VerseDetail[] }) {
  if (!verses.length) return null;
  return (
    <section style={{ padding:"120px 2rem", background:"var(--bg0)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <p style={{ ...S.label, textAlign:"center" }}>The Four Great Sayings</p>
          <h2 style={{ ...S.title, textAlign:"center" }}>Mahavakyas</h2>
          <div style={{ ...S.divider, margin:"1.8rem auto" }}/>
          <p style={{ ...S.body, maxWidth:520, margin:"0 auto" }}>Each Mahavakya is a complete teaching. Not a statement to believe — a pointer toward the recognition that ends seeking.</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:2, background:"var(--bg3)" }}>
          {verses.map(v => (
            <Link key={v.id} href={`/verses/${v.id}`} className="card-link card-link-dark"
              style={{ padding:"2.5rem" }}>
              <p style={{ fontFamily:"var(--serif)", fontSize:"2rem", fontWeight:300, color:"var(--text0)", marginBottom:"0.4rem", letterSpacing:"0.04em" }}>{v.sanskrit}</p>
              <p style={{ fontFamily:"var(--sans)", fontSize:"0.7rem", letterSpacing:"0.15em", color:"var(--text2)", fontStyle:"italic", marginBottom:"0.8rem" }}>{v.transliteration}</p>
              <p style={{ fontFamily:"var(--serif)", fontSize:"1.1rem", fontStyle:"italic", fontWeight:300, color:"var(--gold)", marginBottom:"0.6rem" }}>{v.translation_en}</p>
              <p style={{ fontFamily:"var(--sans)", fontSize:"0.63rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--text2)" }}>{v.source}</p>
            </Link>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:"2.5rem" }}>
          <Link href="/verses" style={{ fontFamily:"var(--sans)", fontSize:"0.65rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--text2)", textDecoration:"none" }}>Explore all verses →</Link>
        </div>
      </div>
    </section>
  );
}

export function TempleGallery({ temples }: { temples: Temple[] }) {
  if (!temples.length) return null;
  return (
    <section style={{ padding:"120px 2rem", background:"var(--bg1)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <p style={S.label}>Deva-Sthanam</p>
        <h2 style={S.title}>The Living Stones</h2>
        <div style={S.divider}/>
        <p style={{ ...S.body, maxWidth:580, marginBottom:"3rem" }}>Hindu temples are not buildings — they are the universe crystallised in stone, so you may walk through it and remember what you are.</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:2, background:"var(--bg3)" }}>
          {temples.slice(0,3).map(t => (
            <Link key={t.id} href={`/temples/${t.slug}`} className="card-link card-link-mid">
              <div style={{ background:"var(--bg2)", aspectRatio:"4/3", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontFamily:"var(--serif)", fontSize:"3rem", color:"var(--gold)", opacity:0.1 }}>◈</span>
              </div>
              <div style={{ padding:"1.8rem" }}>
                <p style={{ fontFamily:"var(--serif)", fontSize:"1.1rem", fontWeight:300, color:"var(--text0)", marginBottom:"0.3rem" }}>{t.name}</p>
                <p style={{ fontFamily:"var(--sans)", fontSize:"0.63rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--gold-dim)", marginBottom:"0.5rem" }}>{t.location} · {t.dynasty}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:"2.5rem" }}>
          <Link href="/temples" style={{ fontFamily:"var(--sans)", fontSize:"0.65rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--text2)", textDecoration:"none" }}>Explore all temples →</Link>
        </div>
      </div>
    </section>
  );
}

export function TeacherRow({ teachers }: { teachers: Teacher[] }) {
  if (!teachers.length) return null;
  return (
    <section style={{ padding:"120px 2rem", background:"var(--bg0)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <p style={{ ...S.label, textAlign:"center" }}>Guru Parampara</p>
          <h2 style={{ ...S.title, textAlign:"center" }}>The Acharyas</h2>
          <div style={{ ...S.divider, margin:"1.8rem auto" }}/>
          <p style={{ ...S.body, maxWidth:500, margin:"0 auto", textAlign:"center" }}>The flame of Advaita passes from teacher to student across millennia. Each Acharya — a lamp lighting the next without diminishing.</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:2, background:"var(--bg3)" }}>
          {teachers.map(t => (
            <Link key={t.id} href={`/teachers/${t.slug}`} className="card-link card-link-dark"
              style={{ padding:"2.5rem 2rem" }}>
              <p style={{ fontFamily:"var(--sans)", fontSize:"0.62rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--saffron)", marginBottom:"1rem" }}>{t.era}</p>
              <p style={{ fontFamily:"var(--serif)", fontSize:"1.6rem", fontWeight:300, color:"var(--text0)", marginBottom:"0.2rem" }}>{t.name}</p>
              {t.name_sanskrit && <p style={{ fontFamily:"var(--serif)", fontSize:"1rem", color:"var(--text2)", marginBottom:"1.2rem" }}>{t.name_sanskrit}</p>}
              {t.quote && <blockquote style={{ fontFamily:"var(--serif)", fontSize:"0.95rem", fontStyle:"italic", color:"var(--text1)", borderLeft:"1px solid rgba(200,150,62,0.2)", paddingLeft:"1rem", lineHeight:1.7 }}>"{t.quote}"</blockquote>}
            </Link>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:"2.5rem" }}>
          <Link href="/teachers" style={{ fontFamily:"var(--sans)", fontSize:"0.65rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--text2)", textDecoration:"none" }}>All teachers →</Link>
        </div>
      </div>
    </section>
  );
}