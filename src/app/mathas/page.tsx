import { getAllMathas } from "@/lib/db";

export const metadata = { title: "The Four Mathas" };

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default async function MathasPage() {
  const rows = await getAllMathas();
  const mathas = rows.map(m => ({
    dir: capitalize(m.direction),
    name: m.name,
    loc: `${m.location}, ${m.state}`,
    vakya: m.mahavakya,
    veda: capitalize(m.veda),
    deity: m.presiding_deity,
    desc: m.description,
  }));
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
