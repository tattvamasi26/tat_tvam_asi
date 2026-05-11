import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Temples",
  description: "The living stones of Sanatana Dharma — temples of Tulunadu and beyond.",
};

const regions = [
  {
    region: "Temples of Tulunadu",
    description: "Tulunadu — the land between Gokarna and Kasaragod — is one of the most densely sacred geographies in India. The rivers, the hills, the coast, and the forests are all inhabited by the divine. These temples are not monuments. They are living presences.",
    temples: [
      {
        name: "Sri Mookambika Temple",
        localName: "ಕೊಲ್ಲೂರು ಮೂಕಾಂಬಿಕಾ",
        location: "Kollur, Udupi District",
        deity: "Mookambika Devi — Tridevi",
        significance: "One of the Seven Mukti Sthalas of Parashurama Kshetra. Established by Adi Shankaracharya. The Swayambhu Jyotirlinga divided by the golden Swarnarekha — Shiva and Shakti as one.",
        tag: "Shakti Kshetra · Jyotirlinga",
        href: "/temples/tulunadu/kollur-mookambika",
      },
    ],
  },
];

export default function TemplesPage() {
  return (
    <div style={{ background: "var(--bg0)", minHeight: "100vh", paddingTop: 100 }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid rgba(200,150,62,0.1)", padding: "60px 2rem 50px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Deva-Sthanam</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>The Living Stones</h1>
          <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontStyle: "italic", fontWeight: 300, color: "var(--gold)", maxWidth: 600 }}>
            "A temple is not a building. It is the universe compressed into stone — so you may walk through it and remember what you are."
          </p>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", margin: "2rem 0" }}/>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.88rem", color: "var(--text1)", maxWidth: 620, lineHeight: 2, fontWeight: 300 }}>
            Hindu temples are cosmograms — sacred diagrams of the universe expressed in stone, proportion, ritual, and geometry. Each shikhara points to Meru. Each garbhagriha is the cave of the heart. We are building this section one temple at a time, each covered in depth — not as a travel guide but as a philosophical document.
          </p>
        </div>
      </div>

      {/* Regions */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 2rem" }}>
        {regions.map(r => (
          <div key={r.region} style={{ marginBottom: "80px" }}>
            {/* Region header */}
            <div style={{ marginBottom: "3rem" }}>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text2)", marginBottom: "0.8rem" }}>Region</p>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>{r.region}</h2>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.88rem", color: "var(--text1)", maxWidth: 640, lineHeight: 2, fontWeight: 300 }}>{r.description}</p>
            </div>

            {/* Temple cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--bg3)" }}>
              {r.temples.map(t => (
                <Link key={t.name} href={t.href} className="card-link card-link-dark">
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", padding: "3rem 2.5rem", alignItems: "start" }}>
                    <div>
                      <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "0.5rem" }}>{t.tag}</p>
                      <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", fontWeight: 300, color: "var(--text0)", marginBottom: "0.2rem" }}>{t.name}</h3>
                      <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", color: "var(--text2)", marginBottom: "0.8rem" }}>{t.localName}</p>
                      <p style={{ fontFamily: "var(--sans)", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-dim)", marginBottom: "1.2rem" }}>{t.location}</p>
                      <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontStyle: "italic", color: "var(--gold)", marginBottom: "0.8rem" }}>{t.deity}</p>
                      <p style={{ fontFamily: "var(--sans)", fontSize: "0.87rem", color: "var(--text1)", lineHeight: 1.9, fontWeight: 300, maxWidth: 560 }}>{t.significance}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", paddingTop: "1rem" }}>
                      <span style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--saffron)", whiteSpace: "nowrap" }}>Enter →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Coming soon note */}
            <div style={{ marginTop: "1.5rem", padding: "1.2rem 2rem", border: "1px dashed rgba(200,150,62,0.15)" }}>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.75rem", color: "var(--text2)", fontStyle: "italic" }}>
                More temples of Tulunadu will be added — Udupi Sri Krishna, Kukke Subramanya, Kateel Durgaparameshwari, Ananthashayana, Kollur's sister shrines, and beyond. Each in depth. Each with patience.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}