import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kollur Mookambika Temple — Temples of Tulunadu",
  description: "The complete guide to Sri Mookambika Temple, Kollur — history, Puranika Katha, rituals, agama shastra, significance of the deity, and how to reach.",
};

const IMGS = {
  deityMain:       "/images/mookambika/deity-main.jpg",
  deityGold:       "/images/mookambika/deity-gold.jpg",
  deitySilver:     "/images/mookambika/deity-silver-palanquin.jpg",
  flowersEntrance: "/images/mookambika/flowers-entrance.jpg",
  deepasthambha:   "/images/mookambika/deepasthambha.jpg",
};

// Reusable image container with overlay caption
function TempleImg({ src, alt, caption, subCaption, aspectRatio = "4/3", objectPosition = "center" }: {
  src: string; alt: string; caption?: string; subCaption?: string;
  aspectRatio?: string; objectPosition?: string;
}) {
  return (
    <div style={{ position: "relative", aspectRatio, overflow: "hidden", borderRadius: 2 }}>
      <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition, display: "block" }}/>
      {(caption || subCaption) && (
        <>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)", pointerEvents: "none" }}/>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1rem 1.2rem" }}>
            {caption && <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontWeight: 300, color: "var(--text0)" }}>{caption}</p>}
            {subCaption && <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", color: "var(--gold)", letterSpacing: "0.1em", marginTop: "0.2rem" }}>{subCaption}</p>}
          </div>
        </>
      )}
    </div>
  );
}

const rituals = [
  { time: "5:00 AM",        name: "Nirmalya Pooja",         desc: "The day begins before dawn. The Swayambhu Lingam is revealed — the only time the raw linga is directly visible to early devotees." },
  { time: "6:30 AM",        name: "Suprabhatha Seva",        desc: "The goddess is awakened with Vedic hymns. The morning invocation prepares the sanctum for the day's worship." },
  { time: "6:00 – 8:00 AM", name: "Srinagara Pooja",        desc: "The goddess is adorned with fresh flowers, new silks, and ornaments — the divine mother dressed for the day." },
  { time: "7:30 AM",        name: "Panchamrutha Abhishekam", desc: "The deity is bathed in five sacred substances — milk, curd, ghee, honey, and sugarcane juice." },
  { time: "8:00 AM",        name: "Mangala Aarati",          desc: "The first full aarati of the day. Lamps waved before the goddess as priests chant the Chamundi Ashtakam." },
  { time: "9:00 AM",        name: "Nityotsava Pooja",        desc: "Daily festival worship with food offerings, Vedic chanting, and sahasranama archana per the Vijayagama system." },
  { time: "12:30 PM",       name: "Mahamangala Aarati",      desc: "The great midday aarati. The goddess is worshipped as Lakshmi at noon, representing abundance and sustenance." },
  { time: "6:30 PM",        name: "Pradosha Pooja",          desc: "As dusk falls, evening worship begins. The goddess transforms into Parvati. The lamps multiply, the chanting deepens." },
  { time: "8:00 PM",        name: "Kashya Mangala Aarati",   desc: "The final aarati of the day. The goddess is bid goodnight. The lamp continues to burn through the night." },
];

export default function MookambikaPage() {
  return (
    <div style={{ background: "var(--bg0)", minHeight: "100vh", color: "var(--text0)" }}>

      {/* ── HERO ── */}
      <div style={{ position: "relative", height: "90vh", minHeight: 560, overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <img
          src={IMGS.deityMain}
          alt="Sri Mookambika Devi — sanctum sanctorum, Kollur"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", filter: "brightness(0.5) saturate(0.9)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0F0E0C 15%, rgba(15,14,12,0.3) 60%, transparent 100%)" }}/>
        <div style={{ position: "relative", zIndex: 1, padding: "0 2rem 6rem", maxWidth: 900, margin: "0 auto", width: "100%" }}>
          <Link href="/temples" style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,150,62,0.7)", textDecoration: "none", display: "block", marginBottom: "2rem" }}>
            ← Temples of Tulunadu
          </Link>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Tulunadu · Udupi District · Karnataka</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 300, color: "var(--text0)", lineHeight: 1.1, marginBottom: "0.8rem" }}>Sri Mookambika Temple</h1>
          <p style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontStyle: "italic", fontWeight: 300, color: "var(--gold)", marginBottom: "0.5rem" }}>ಕೊಲ್ಲೂರು ಶ್ರೀ ಮೂಕಾಂಬಿಕಾ ದೇವಸ್ಥಾನ</p>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.82rem", color: "rgba(237,228,208,0.55)", letterSpacing: "0.1em" }}>Kollur · One of the Seven Mukti Sthalas of Parashurama Kshetra</p>
        </div>
      </div>

      {/* ── QUICK FACTS ── */}
      <div style={{ background: "var(--bg2)", borderTop: "1px solid rgba(200,150,62,0.15)", borderBottom: "1px solid rgba(200,150,62,0.15)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))" }}>
          {[["Deity","Mookambika Devi"],["Form","Adi Parashakti — Tridevi"],["Temple Age","~1200 years"],["Established by","Adi Shankaracharya"],["River","Souparnika"],["Hills","Kodachadri"]].map(([l,v]) => (
            <div key={l} style={{ padding: "1.4rem 1rem", borderRight: "1px solid rgba(200,150,62,0.1)" }}>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", marginBottom: "0.3rem" }}>{l}</p>
              <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontWeight: 300, color: "var(--gold)" }}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 2rem" }}>

        {/* ── OPENING QUOTE ── */}
        <div style={{ padding: "80px 0 60px", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontStyle: "italic", fontWeight: 300, color: "var(--text0)", lineHeight: 1.7, borderLeft: "2px solid var(--gold)", paddingLeft: "2rem" }}>
            "She is not worshipped as one goddess but three — Saraswati at dawn, Lakshmi at noon, Parvati at dusk. The same form, three truths. This is the teaching of Kollur."
          </p>
        </div>

        {/* ── PURANIKA KATHA ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Puranika Katha</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>The Story of Mookambika</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "3rem" }}/>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start", marginBottom: "3rem" }}>
            <div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)", marginBottom: "1rem" }}>The Demon Who Could Not Speak</h3>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginBottom: "1rem" }}>
                A demon named Kaumasura undertook severe penance to propitiate Lord Shiva, seeking an invincible boon. Sensing the danger, Saraswati herself intervened and rendered the demon mute. Unable to speak his boon, Kaumasura became Mookasura — mooka meaning dumb.
              </p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300 }}>
                Even voiceless, Mookasura was formidable. He defeated Indra and subjected the three worlds to chaos. The Trimurti called upon the Tridevi to create a form to defeat the asura. Their combined energies became Mookambika — the one who silenced the mute demon.
              </p>
            </div>
            <TempleImg
              src={IMGS.flowersEntrance}
              alt="Flower offerings at Mookambika temple entrance"
              caption="Flower offerings at the entrance"
              subCaption="Lotus, jasmine and chrysanthemum — offered before darshan"
              aspectRatio="3/4"
            />
          </div>

          {/* Deity gold — full width */}
          <TempleImg
            src={IMGS.deityGold}
            alt="Sri Mookambika Devi adorned in gold"
            caption="Sri Mookambika Devi — adorned in gold"
            subCaption="The Panchaloha idol on Sri Chakra · Kollur sanctum"
            aspectRatio="4/5"
            objectPosition="top"
          />

          <div style={{ background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.12)", padding: "2.5rem", marginTop: "3rem" }}>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)", marginBottom: "1rem" }}>Adi Shankaracharya and the Goddess Who Stayed</h3>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginBottom: "1rem" }}>
              In the 8th century, Adi Shankaracharya traversed the Kodachadri hills and encountered the divine presence of Mookambika. He wished to bring her to Kerala. She agreed to follow — on one condition: he must walk ahead without looking back, guided only by the sound of her anklets.
            </p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300 }}>
              He walked. The anklets rang. Then suddenly — silence. Doubt overtook him. He looked back. The goddess chose to remain at Kollur. But because of his austerities, she also agreed to be present at Chottanikkara in Kerala. Even today, Chottanikkara's doors open only after Kollur's — this daily rhythm maintained for over twelve centuries.
            </p>
          </div>
        </section>

        {/* ── THE DEITY ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>The Deity</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>Who is Mookambika?</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "2.5rem" }}/>

          <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginBottom: "2.5rem" }}>
            Mookambika is the fusion of Adipara Shakti and Parabrahma — the integration of Maha Kali, Maha Lakshmi, and Maha Saraswati in a single form. She is not one of the Tridevi. She is all three, simultaneously, at the same altar.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, background: "var(--bg3)", marginBottom: "3rem" }}>
            {[
              { time: "Dawn", form: "Saraswati", aspect: "Knowledge, Speech & Learning",  color: "var(--text0)" },
              { time: "Noon", form: "Lakshmi",   aspect: "Abundance, Grace & Prosperity", color: "var(--gold)" },
              { time: "Dusk", form: "Parvati",   aspect: "Power, Devotion & Liberation",  color: "var(--saffron)" },
            ].map(f => (
              <div key={f.form} style={{ background: "var(--bg1)", padding: "2rem" }}>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", marginBottom: "0.5rem" }}>{f.time}</p>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 300, color: f.color, marginBottom: "0.4rem" }}>{f.form}</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", color: "var(--text1)", lineHeight: 1.7 }}>{f.aspect}</p>
              </div>
            ))}
          </div>

          {/* Silver palanquin + Deepasthambha */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2.5rem" }}>
            <TempleImg
              src={IMGS.deitySilver}
              alt="Mookambika Devi in silver palanquin"
              caption="Devi in the silver palanquin"
              subCaption="During the Rathotsava procession"
              aspectRatio="3/4"
              objectPosition="top"
            />
            <TempleImg
              src={IMGS.deepasthambha}
              alt="Deepasthambha and Dwajasthambha at Mookambika Temple"
              caption="Deepasthambha & Dwajasthambha"
              subCaption="The lamp tower with 21 concentric circles · temple courtyard"
              aspectRatio="3/4"
            />
          </div>

          <div style={{ background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.12)", padding: "2rem" }}>
            <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontStyle: "italic", color: "var(--gold)", marginBottom: "0.8rem" }}>The Deepasthambha</p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: "var(--text1)", lineHeight: 1.9 }}>
              The lamp tower at the temple entrance has its base shaped like a tortoise's head with 21 concentric circles. When all lamps are lit and viewed from a distance, they appear similar to the divine Makara Jyothi of Sabarimala. The golden Dwajasthambha (flag mast) beside it marks the axis of the temple's sacred space.
            </p>
          </div>
        </section>

        {/* ── AGAMA SHASTRA ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Agama Shastra</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>The Science of Worship</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "2.5rem" }}/>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginBottom: "3rem" }}>
            The Vijayagama system — prescribed by Adi Shankaracharya — governs every ritual at Kollur to this day. Every gesture, every substance, every time of day has a reason rooted in Vedic cosmology.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {[
              { title: "Trikala Pooja",           desc: "Three daily worship sessions — Saraswati at dawn, Lakshmi at noon, Parvati at dusk. The same deity, three truths." },
              { title: "Panchamrutha Abhishekam", desc: "Ritual bathing in five sacred substances: milk for purity, honey for sweetness, ghee for illumination, curd for nourishment, sugarcane juice for abundance." },
              { title: "Sri Chakra Worship",      desc: "The Devi stands on a Sri Chakra Yantra installed by Adi Shankara. Worship of the idol is simultaneously worship of the yantra — the geometric body of the goddess." },
              { title: "Vidyarambham",            desc: "Children's first letters are written here, guided by the priest's hand. As the goddess of speech, Mookambika presides over all beginnings of learning." },
              { title: "Anna Prashana",           desc: "An infant's first solid food is offered before the goddess. Two of life's most sacred beginnings — speech and food — consecrated at Kollur." },
              { title: "Bali Pooja",              desc: "Offerings made to the guardian energies of the temple complex — acknowledging that the sacred space is inhabited by many presences." },
            ].map(p => (
              <div key={p.title} style={{ borderLeft: "1px solid rgba(200,150,62,0.25)", paddingLeft: "1.5rem" }}>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 300, color: "var(--gold)", marginBottom: "0.5rem" }}>{p.title}</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "var(--text1)", lineHeight: 1.85 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── DAILY RITUALS ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Daily Schedule</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>Rituals of the Day</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "3rem" }}/>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--bg3)", marginBottom: "3rem" }}>
            {rituals.map((r, i) => (
              <div key={i} style={{ background: i % 2 === 0 ? "var(--bg1)" : "var(--bg0)", padding: "1.6rem 2rem", display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
                <div>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.78rem", color: "var(--gold)" }}>{r.time}</p>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontStyle: "italic", color: "var(--text0)", marginTop: "0.2rem", fontWeight: 300 }}>{r.name}</p>
                </div>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "var(--text1)", lineHeight: 1.85, fontWeight: 300 }}>{r.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.15)", padding: "2rem" }}>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1.2rem" }}>Darshan Timings</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1.5rem" }}>
              {[["Morning Darshan","5:00 AM – 1:00 PM"],["Evening Darshan","3:00 PM – 9:00 PM"],["Temple Open","5:00 AM – 9:00 PM"],["Special Days","Extended during Navaratri & Rathotsava"]].map(([l,v]) => (
                <div key={l}>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text2)", marginBottom: "0.3rem" }}>{l}</p>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 300, color: "var(--text0)" }}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FESTIVALS ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Sacred Celebrations</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>Festivals & Significance</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "3rem" }}/>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {[
              { name: "Navaratri",  when: "Ashwin (Sep–Oct)", desc: "The nine nights of the goddess — the most significant festival at Kollur. Chandi Homam, Sahasranama Archana, and special processions mark each night. Vijayadashami marks the victory of Mookambika over Mookasura — the very event for which this temple exists." },
              { name: "Rathotsava", when: "Phalguna (Feb–Mar)", desc: "The chariot festival. The goddess is placed in the great wooden chariot and pulled through the temple streets. The silver palanquin seen in these photographs is used during the procession. Moola Nakshatra in this month is observed as Devi's birthday." },
              { name: "Shivaratri", when: "Magha (Feb–Mar)",   desc: "As the Jyotirlinga represents both Shiva and Shakti, Mahashivaratri is observed with special midnight worship of the Swayambhu Linga — the only night when the raw linga is accessible to devotees in the pre-dawn darkness." },
            ].map(f => (
              <div key={f.name} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", paddingBottom: "2.5rem", borderBottom: "1px solid rgba(200,150,62,0.08)" }}>
                <div>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)" }}>{f.name}</p>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", color: "var(--text2)", letterSpacing: "0.1em", marginTop: "0.3rem" }}>{f.when}</p>
                </div>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.88rem", color: "var(--text1)", lineHeight: 1.95, fontWeight: 300 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SURROUNDINGS ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>The Sacred Land</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>Kollur & its Surroundings</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "2.5rem" }}/>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginBottom: "1.5rem" }}>
                The temple is at the base of Kodachadri Hills, on the southern bank of the Souparnika River — named for Garuda (Suparna) who performed penance on its banks. The Western Ghats rise behind the town, creating a natural valley of unbroken sanctity.
              </p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300 }}>
                Kollur is one of the Seven Mukti Sthalas of Parashurama Kshetra — alongside Udupi, Subrahmanya, Kumbasi, Kodeshwara, Sankaranarayana, and Gokarna. To visit all seven is a complete traversal of Tulunadu's sacred geography.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--bg3)" }}>
              {[
                ["Souparnika River","Sacred river beside the temple. Ritual bath here before darshan."],
                ["Kodachadri Hills","The hills from which Shankaracharya descended with Mookambika."],
                ["Marana Katte","The spot where Devi slew Mookasura — sub-shrine within the complex."],
                ["Shankaracharya Peetha","Western side of sanctum where Shankara sat in meditation."],
                ["Saraswathi Mantapam","Southern mandapa — Vidyarambham and Anna Prashana performed here."],
              ].map(([place, desc]) => (
                <div key={place} style={{ background: "var(--bg1)", padding: "1.2rem 1.5rem" }}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontWeight: 300, color: "var(--gold)", marginBottom: "0.2rem" }}>{place}</p>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", color: "var(--text1)", lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW TO REACH ── */}
        <section style={{ padding: "80px 0" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Plan Your Visit</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>Getting There</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "3rem" }}/>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <div>
              <div style={{ background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.15)", padding: "2rem", marginBottom: "2rem" }}>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Address</p>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 300, color: "var(--text0)", lineHeight: 1.8 }}>
                  Sri Mookambika Temple<br/>
                  Kollur, Byndoor Taluk<br/>
                  Udupi District<br/>
                  Karnataka — 576 220
                </p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", color: "var(--text1)", marginTop: "1rem" }}>📞 82542 58221</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", color: "var(--text1)", marginTop: "0.3rem" }}>🌐 kollurmookambikatemple.org</p>
              </div>
              <div style={{ background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.15)", padding: "2rem" }}>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Best Time to Visit</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "var(--text1)", lineHeight: 1.85 }}>
                  <strong style={{ color: "var(--gold)", fontWeight: 400 }}>October – March</strong> — pleasant weather, ideal for the surrounding hills.<br/><br/>
                  <strong style={{ color: "var(--gold)", fontWeight: 400 }}>Avoid June – September</strong> — heavy monsoon in the Western Ghats.<br/><br/>
                  <strong style={{ color: "var(--gold)", fontWeight: 400 }}>Weekdays</strong> — darshan in under 15 minutes vs 60+ on weekends.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { mode: "By Air",    detail: "Mangalore International Airport — 135 km. Taxi via Udupi approx 2.5 hours through the Western Ghats." },
                { mode: "By Train",  detail: "Kundapura Railway Station — 40 km. Byndoor Station — 28 km. Buses and taxis to Kollur from both." },
                { mode: "By Road",   detail: "NH 169 from Mangalore (135 km). KSRTC buses from Udupi (60 km), Mangalore, and Shimoga." },
                { mode: "Dress Code",detail: "Men: white dhoti preferred. Women: traditional dress required. Footwear removed before inner sanctum." },
                { mode: "Stay",      detail: "Four temple guest houses within walking distance. ₹200–₹600/night. Advance booking needed during Navaratri." },
              ].map(item => (
                <div key={item.mode} style={{ display: "flex", gap: "1.2rem" }}>
                  <div style={{ width: 100, flexShrink: 0 }}>
                    <p style={{ fontFamily: "var(--serif)", fontSize: "0.9rem", fontWeight: 300, color: "var(--gold)" }}>{item.mode}</p>
                  </div>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "var(--text1)", lineHeight: 1.8, fontWeight: 300 }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ── FOOTER NAV ── */}
      <div style={{ background: "var(--bg1)", borderTop: "1px solid rgba(200,150,62,0.1)", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <Link href="/temples" style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", textDecoration: "none" }}>← All Temples</Link>
          <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontStyle: "italic", color: "var(--gold)", opacity: 0.6 }}>ಜಯ ಮೂಕಾಂಬಿಕೆ</p>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)" }}>Next Temple →</p>
        </div>
      </div>

    </div>
  );
}