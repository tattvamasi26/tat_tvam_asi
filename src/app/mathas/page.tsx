export const metadata = { title: "The Four Mathas" };

const mathas = [
  { dir:"South", name:"Sringeri Sharada Peetham", loc:"Sringeri, Karnataka", vakya:"Aham Brahmasmi", veda:"Yajurveda", deity:"Sharadamba", desc:"Established on the banks of the Tunga river, this is the first and most prominent of the four Mathas. Shankara is said to have watched a frog being sheltered from the sun by the hood of a cobra — and chosen this spot of harmony as his first foundation." },
  { dir:"North", name:"Jyotirmath", loc:"Joshimath, Uttarakhand", vakya:"Ayam Atma Brahma", veda:"Atharvaveda", deity:"Narayana", desc:"In the Himalayas, near Badrinath. The northernmost seat, keeper of the Atharvaveda tradition. The mulberry tree under which Shankara is said to have meditated still stands." },
  { dir:"East",  name:"Govardhana Peetham", loc:"Puri, Odisha", vakya:"Prajnanam Brahma", veda:"Rigveda", deity:"Vimala", desc:"The eastern Matha at the sacred city of Puri, home of Jagannatha. Keeper of the Rigveda, the oldest of the four Vedas, and the Mahavakya of pure consciousness." },
  { dir:"West",  name:"Dwarka Sharada Peetham", loc:"Dwarka, Gujarat", vakya:"Tat Tvam Asi", veda:"Samaveda", deity:"Siddheshwari", desc:"At the westernmost sacred city on the coast of Gujarat. Keeper of the Samaveda and of Tat Tvam Asi — the teaching for which this entire platform is named." },
];

export default function MathasPage() {
  return (
    <div style={{ background:"var(--bg0)", minHeight:"100vh", paddingTop:100 }}>
      <div style={{ maxWidth:1000, margin:"0 auto", padding:"60px 2rem" }}>
        <p style={{ fontFamily:"var(--sans)", fontSize:"0.65rem", letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--saffron)", marginBottom:"1.2rem" }}>Guru Parampara</p>
        <h1 style={{ fontFamily:"var(--serif)", fontSize:"clamp(2.5rem,5vw,4rem)", fontWeight:300, color:"var(--text0)", marginBottom:"1rem" }}>The Four Amnaya Mathas</h1>
        <p style={{ fontFamily:"var(--serif)", fontSize:"1.05rem", fontStyle:"italic", color:"var(--gold)", marginBottom:"1rem" }}>"Shankara did not write books and leave. He built four hearths at the four directions of India — so the flame would never go out."</p>
        <div style={{ width:40, height:1, background:"var(--gold-dim)", margin:"2rem 0 4rem" }}/>
        <div style={{ display:"flex", flexDirection:"column", gap:2, background:"var(--bg3)" }}>
          {mathas.map(m => (
            <div key={m.dir} style={{ background:"var(--bg0)", padding:"3rem 2.5rem", display:"grid", gridTemplateColumns:"120px 1fr", gap:"2rem", transition:"background 0.4s" }}
              className="hover-bg0-to-bg2">
              <div>
                <p style={{ fontFamily:"var(--sans)", fontSize:"0.62rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--saffron)" }}>{m.dir}</p>
                <p style={{ fontFamily:"var(--sans)", fontSize:"0.72rem", color:"var(--text2)", marginTop:"0.4rem" }}>{m.veda}</p>
              </div>
              <div>
                <h3 style={{ fontFamily:"var(--serif)", fontSize:"1.5rem", fontWeight:300, color:"var(--text0)", marginBottom:"0.3rem" }}>{m.name}</h3>
                <p style={{ fontFamily:"var(--sans)", fontSize:"0.65rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--gold-dim)", marginBottom:"0.8rem" }}>{m.loc}</p>
                <p style={{ fontFamily:"var(--serif)", fontSize:"1rem", fontStyle:"italic", color:"var(--gold)", marginBottom:"0.8rem" }}>{m.vakya}</p>
                <p style={{ fontFamily:"var(--sans)", fontSize:"0.87rem", color:"var(--text1)", lineHeight:1.9, fontWeight:300 }}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
