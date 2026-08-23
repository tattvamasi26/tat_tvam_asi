import Link from "next/link";

const cols = [
  { title: "Study",   links: [["Verses","/verses"],["Upanishads","/upanishads"],["Mahavakyas","/verses?category=advaita"],["Concepts","/concepts"]] },
  { title: "Explore", links: [["Temples","/temples"],["Teachers","/teachers"],["Mathas","/mathas"],["Search","/search"]] },
  { title: "About",   links: [["About","/about"],["Content Roadmap","/about"]] },
];

export function Footer() {
  return (
    <footer style={{ background: "#080806", borderTop: "1px solid rgba(200,150,62,0.1)", paddingTop: "80px", paddingBottom: "40px", paddingLeft: "2rem", paddingRight: "2rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--serif)", fontSize: "2rem", color: "var(--gold)", opacity: 0.5, marginBottom: "2.5rem" }}>ॐ</p>

        {/* Shanti mantra */}
        <div style={{ background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.1)", padding: "3rem 2rem", marginBottom: "4rem", position: "relative" }}>
          <span style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", background: "#080806", padding: "0 1rem", fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold-dim)" }}>
            Shanti Mantra
          </span>
          <p style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", fontWeight: 300, color: "var(--text0)", lineHeight: 2, marginBottom: "1rem", opacity: 0.85 }}>
            ॐ सह नाववतु। सह नौ भुनक्तु।<br/>
            सह वीर्यं करवावहै।<br/>
            तेजस्विनावधीतमस्तु। मा विद्विषावहै।
          </p>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.82rem", color: "var(--text1)", lineHeight: 1.9 }}>
            May we be protected together. May we be nourished together.<br/>
            May we create strength together. May our study be brilliant.<br/>
            May we not be at enmity with each other.
          </p>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.25em", color: "var(--gold-dim)", marginTop: "1.2rem" }}>
            ॐ शान्तिः शान्तिः शान्तिः
          </p>
        </div>

        {/* Nav links */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem", marginBottom: "4rem", textAlign: "left" }}>
          {cols.map(col => (
            <div key={col.title}>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold-dim)", marginBottom: "1.2rem" }}>{col.title}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {col.links.map(([label, href]) => (
                  <Link key={href} href={href}
                    style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", color: "var(--text2)", textDecoration: "none", transition: "color 0.3s" }}
                    className="hover-text2-to-saffron">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom rule */}
        <div style={{ width: "100%", height: 1, background: "linear-gradient(to right,transparent,rgba(200,150,62,0.25),transparent)", marginBottom: "2rem" }}/>
        <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", color: "var(--gold-dim)", letterSpacing: "0.05em" }}>तत् त्वम् असि</p>
        <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", color: "var(--text2)", marginTop: "0.5rem", letterSpacing: "0.1em" }}>
          Chandogya Upanishad 6.8.7 &nbsp;·&nbsp; A sanctuary for seekers of the eternal
        </p>
      </div>
    </footer>
  );
}
