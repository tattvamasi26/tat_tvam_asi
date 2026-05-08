import Link from "next/link";
export default function NotFound() {
  return (
    <div style={{ background:"var(--bg0)", minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"2rem" }}>
      <p style={{ fontFamily:"var(--serif)", fontSize:"5rem", color:"var(--gold)", opacity:0.2, marginBottom:"2rem" }}>ॐ</p>
      <h1 style={{ fontFamily:"var(--serif)", fontSize:"3rem", fontWeight:300, color:"var(--text0)", marginBottom:"1rem" }}>Page Not Found</h1>
      <p style={{ fontFamily:"var(--serif)", fontSize:"1.1rem", fontStyle:"italic", color:"var(--text1)", marginBottom:"3rem" }}>
        "The seeker and the sought are one. Perhaps you were never lost."
      </p>
      <Link href="/" style={{ fontFamily:"var(--sans)", fontSize:"0.68rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--gold)", border:"1px solid rgba(200,150,62,0.4)", padding:"0.75rem 2rem", textDecoration:"none" }}>
        Return Home
      </Link>
    </div>
  );
}
