export const metadata = { title: "The Four Mathas" };

const mathas = [
  { dir:"South", name:"Sringeri Sharada Peetham", loc:"Sringeri, Karnataka", vakya:"Aham Brahmasmi", veda:"Yajurveda", desc:"The southern Matha, established on the banks of the Tunga river. Shankara is said to have watched a frog sheltered by a cobra's hood — and chose this spot of harmony as his first foundation." },
  { dir:"North", name:"Jyotirmath", loc:"Joshimath, Uttarakhand", vakya:"Ayam Atma Brahma", veda:"Atharvaveda", desc:"In the Himalayas, near Badrinath. The northernmost seat, keeper of the Atharvaveda tradition. The mulberry tree under which Shankara meditated still stands." },
  { dir:"East",  name:"Govardhana Peetham", loc:"Puri, Odisha", vakya:"Prajnanam Brahma", veda:"Rigveda", desc:"The eastern Matha at the sacred city of Puri, home of Jagannatha. Keeper of the Rigveda — the oldest of the four Vedas." },
  { dir:"West",  name:"Dwarka Sharada Peetham", loc:"Dwarka, Gujarat", vakya:"Tat Tvam Asi", veda:"Samaveda", desc:"At the westernmost sacred city on the coast of Gujarat. Keeper of the Samaveda and of Tat Tvam Asi — the teaching for which this platform is named." },
];

export default function MathasPage() {
  return (
    <div style={{ background:"var(--bg0)", minHeight:"100vh", paddingTop:100 }}>
      <div style={{ borderBottom:"1px solid rgba(200,150,62,0.1)", padding:"60px 2rem 50px" }}>
        <div style={{ maxWidth:1000, margin:"0 auto" }}>
          <p style={{ fontFamily:"var(--sans)", fontSize:"0.65rem", letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--saffron)", marginBottom:"1rem" }}>Guru Parampara</p>
          <h1 style={{ fontFamily:"var(--serif)", fontSize:"clamp(2.5rem,5vw,4rem)", fontWeight:300, color:"var(--text0)" }}>The Four Amnaya Mathas</h1>
          <p style={{ fontFamily:"var(--serif)", fontSize:"1.05rem", fontStyle:"italic", color:"var(--gold)", marginTop:"1rem" }}>"Shankara built four hearths at the four directions of India — so the flame would never go out."</p>
        </div>
      </div>
      <div style={{ maxWidth:1000, margin:"0 auto", padding:"60px 2rem" }}>
        <div style={{ display:"flex", flexDirection:"column", gap:2, background:"var(--bg3)" }}>
          {mathas.map(m => (
            <div key={m.dir} className="matha-item" style={{ background:"var(--bg0)", padding:"2.4rem 2.2rem", display:"grid", gridTemplateColumns:"100px 1fr", gap:"1.8rem" }}>
              <div>
                <p style={{ fontFamily:"var(--sans)", fontSize:"0.6rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--saffron)" }}>{m.dir}</p>
                <p style={{ fontFamily:"var(--sans)", fontSize:"0.65rem", color:"var(--text2)", marginTop:"0.3rem" }}>{m.veda}</p>
              </div>
              <div>
                <h3 style={{ fontFamily:"var(--serif)", fontSize:"1.35rem", fontWeight:300, color:"var(--text0)", marginBottom:"0.2rem" }}>{m.name}</h3>
                <p style={{ fontFamily:"var(--sans)", fontSize:"0.62rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--gold-dim)", marginBottom:"0.6rem" }}>{m.loc}</p>
                <p style={{ fontFamily:"var(--serif)", fontSize:"0.95rem", fontStyle:"italic", color:"var(--gold)", marginBottom:"0.6rem" }}>{m.vakya}</p>
                <p style={{ fontFamily:"var(--sans)", fontSize:"0.84rem", color:"var(--text1)", lineHeight:1.85, fontWeight:300 }}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}