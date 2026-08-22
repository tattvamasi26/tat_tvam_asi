import Link from "next/link";

const upanishads = [
  { sa:"माण्डूक्य", en:"Mandukya Upanishad", veda:"Atharvaveda", verses:12, teaching:"The shortest and most complete — twelve verses mapping the entire inner territory through Om and the four states of consciousness.", slug:"mandukya" },
  { sa:"केन", en:"Kena Upanishad", veda:"Samaveda", verses:35, teaching:"What the mind cannot reach, but by which the mind thinks — that alone is Brahman. Not the known, not the unknown.", slug:"kena" },
  { sa:"ईश", en:"Isha Upanishad", veda:"Yajurveda", verses:18, teaching:"All this is enveloped by the Lord. Renounce and enjoy. Do not covet. Whose is wealth?", slug:"isha" },
  { sa:"कठ", en:"Katha Upanishad", veda:"Yajurveda", verses:119, teaching:"Nachiketa asks Yama about the self that does not die. The conversation is the entire teaching on immortality.", slug:"katha" },
  { sa:"मुण्डक", en:"Mundaka Upanishad", veda:"Atharvaveda", verses:64, teaching:"Two birds on the same tree. One eats the fruits; the other only watches. The watcher is the Self.", slug:"mundaka" },
  { sa:"छान्दोग्य", en:"Chandogya Upanishad", veda:"Samaveda", verses:628, teaching:"Contains Tat Tvam Asi — you are not what you appear to be, but what everything is.", slug:"chandogya" },
  { sa:"बृहदारण्यक", en:"Brihadaranyaka Upanishad", veda:"Yajurveda", verses:435, teaching:"The largest Upanishad. Rich with Yajnavalkya's dialogues on the nature of the Self and death.", slug:"brihadaranyaka" },
  { sa:"ऐतरेय", en:"Aitareya Upanishad", veda:"Rigveda", verses:33, teaching:"Prajnanam Brahma — Consciousness is Brahman. Pure awareness is the ground of all existence.", slug:"aitareya" },
];

export const metadata = { title: "Upanishads" };

export default function UpanishadsPage() {
  return (
    <div style={{ background:"var(--bg0)", minHeight:"100vh", paddingTop:100 }}>
      <div style={{ borderBottom:"1px solid rgba(200,150,62,0.1)", padding:"60px 2rem 50px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <p style={{ fontFamily:"var(--sans)", fontSize:"0.65rem", letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--saffron)", marginBottom:"1rem" }}>Shruti</p>
          <h1 style={{ fontFamily:"var(--serif)", fontSize:"clamp(2.5rem,5vw,4rem)", fontWeight:300, color:"var(--text0)" }}>The Upanishads</h1>
          <p style={{ fontFamily:"var(--serif)", fontSize:"1.05rem", fontStyle:"italic", color:"var(--gold)", marginTop:"1rem" }}>"They do not explain truth — they create the conditions in which truth can be recognised."</p>
        </div>
      </div>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"60px 2rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:2, background:"var(--bg3)" }}>
          {upanishads.map(u => (
            <div key={u.slug} className="u-card" style={{ background:"var(--bg0)", padding:"2.5rem 2rem" }}>
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