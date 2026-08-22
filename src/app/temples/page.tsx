import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kollur Mookambika Temple — Temples of Tulunadu",
  description: "The complete guide to Sri Mookambika Temple, Kollur — history, Puranika Katha, rituals, agama shastra, the significance of the deity, and how to reach.",
};

// All images — Wikipedia (free) + uploaded deity photo
const IMAGES = {
  hero:     "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mookambika_temple_kollur.jpg/1280px-Mookambika_temple_kollur.jpg",
  exterior: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mookambika_temple_kollur.jpg/800px-Mookambika_temple_kollur.jpg",
  deity:    "/images/Shri_Kollur_Mookambika_Devi.jpg",
  souparnika: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Souparnika_river_at_Kollur.jpg/1280px-Souparnika_river_at_Kollur.jpg",
  kodachadri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Kodachadri_peak.jpg/1280px-Kodachadri_peak.jpg",
};

const rituals = [
  { time: "5:00 AM",          name: "Nirmalya Pooja",        desc: "The day begins before dawn. Previous day's offerings are cleared and the Swayambhu Lingam is revealed — the only time the raw linga is directly visible." },
  { time: "6:30 AM",          name: "Suprabhatha Seva",      desc: "The goddess is awakened with Vedic hymns. The morning invocation prepares the sanctum for the day's worship." },
  { time: "6:00 – 8:00 AM",   name: "Srinagara Pooja",       desc: "The goddess is adorned with fresh flowers, new silks, and ornaments — the divine mother dressed for the day." },
  { time: "7:30 AM",          name: "Panchamrutha Abhishekam",desc: "The deity is bathed in five sacred substances — milk, curd, ghee, honey, and sugarcane juice." },
  { time: "8:00 AM",          name: "Mangala Aarati",         desc: "The first full aarati of the day. Lamps are waved before the goddess as priests chant the Chamundi Ashtakam." },
  { time: "9:00 AM",          name: "Nityotsava Pooja",       desc: "Daily festival worship with food offerings, Vedic chanting, and sahasranama archana — per the Vijayagama system." },
  { time: "12:30 PM",         name: "Mahamangala Aarati",     desc: "The great midday aarati — the most elaborate of the day. The goddess is worshipped as Lakshmi at noon." },
  { time: "6:30 PM",          name: "Pradosha Pooja",         desc: "As dusk falls, the evening worship begins. The goddess transforms into Parvati for the evening." },
  { time: "8:00 PM",          name: "Kashya Mangala Aarati",  desc: "The final aarati of the day. The goddess is bid goodnight. The lamp continues to burn through the night." },
];

function SectionLabel({ text }: { text: string }) {
  return <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--saffron)", marginBottom: "1rem" }}>{text}</p>;
}

function SectionTitle({ text }: { text: string }) {
  return <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>{text}</h2>;
}

function Divider() {
  return <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "2.5rem" }}/>;
}

function BodyText({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, ...style }}>{children}</p>;
}

export default function MookambikaPage() {
  return (
    <div style={{ background: "var(--bg0)", minHeight: "100vh", color: "var(--text0)" }}>

      {/* ── HERO IMAGE ── */}
      <div style={{ position: "relative", height: "85vh", minHeight: 500, overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <Image
          src={IMAGES.hero}
          alt="Sri Mookambika Temple, Kollur — main gopuram"
          fill
          style={{ objectFit: "cover", filter: "brightness(0.45) saturate(0.8)" }}
          priority
          unoptimized
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0F0E0C 20%, transparent 70%)" }}/>
        <div style={{ position: "relative", zIndex: 1, padding: "0 2rem 5rem", maxWidth: 900, margin: "0 auto", width: "100%" }}>
          <Link href="/temples" style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,150,62,0.7)", textDecoration: "none", display: "block", marginBottom: "2rem" }}>
            ← Temples of Tulunadu
          </Link>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>
            Tulunadu · Udupi District · Karnataka
          </p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 300, color: "var(--text0)", lineHeight: 1.1, marginBottom: "0.8rem" }}>
            Sri Mookambika Temple
          </h1>
          <p style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontStyle: "italic", fontWeight: 300, color: "var(--gold)", marginBottom: "0.5rem" }}>
            ಕೊಲ್ಲೂರು ಶ್ರೀ ಮೂಕಾಂಬಿಕಾ ದೇವಸ್ಥಾನ
          </p>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.82rem", color: "rgba(237,228,208,0.6)", letterSpacing: "0.1em" }}>
            Kollur · One of the Seven Mukti Sthalas of Parashurama Kshetra
          </p>
        </div>
      </div>

      {/* ── QUICK FACTS BAR ── */}
      <div style={{ background: "var(--bg2)", borderTop: "1px solid rgba(200,150,62,0.15)", borderBottom: "1px solid rgba(200,150,62,0.15)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))" }}>
          {[
            ["Deity",          "Mookambika Devi"],
            ["Form",           "Adi Parashakti — Tridevi"],
            ["Temple Age",     "~1200 years"],
            ["Established by", "Adi Shankaracharya"],
            ["River",          "Souparnika"],
            ["Hills",          "Kodachadri"],
          ].map(([label, value]) => (
            <div key={label} style={{ padding: "1.4rem 1rem", borderRight: "1px solid rgba(200,150,62,0.1)" }}>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", marginBottom: "0.3rem" }}>{label}</p>
              <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontWeight: 300, color: "var(--gold)" }}>{value}</p>
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

        {/* ── SECTION 1: PURANIKA KATHA ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <SectionLabel text="Puranika Katha"/>
          <SectionTitle text="The Story of Mookambika"/>
          <Divider/>

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
              <div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)", marginBottom: "1rem" }}>The Demon Who Could Not Speak</h3>
                <BodyText>In the ages when the three worlds were balanced by dharma, there lived a demon named Kaumasura — fierce, determined to conquer the heavens. He undertook severe penance to propitiate Lord Shiva, seeking an invincible boon.</BodyText>
                <BodyText style={{ marginTop: "1rem" }}>Sensing the grave danger, the goddess of speech — Saraswati herself — intervened and rendered the demon mute. Unable to speak his boon, Kaumasura became Mookasura — mooka meaning dumb.</BodyText>
              </div>
              {/* Temple exterior image */}
              <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: 2, overflow: "hidden" }}>
                <Image
                  src={IMAGES.exterior}
                  alt="Sri Mookambika Temple exterior — gopuram and copper roofs"
                  fill
                  style={{ objectFit: "cover", filter: "brightness(0.75) sepia(0.2)" }}
                  unoptimized
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0.8rem 1rem", background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.62rem", color: "var(--text1)", letterSpacing: "0.1em" }}>Sri Mookambika Temple, Kollur — the gold-plated shikhara and copper roofs</p>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)", marginBottom: "1rem" }}>The Birth of Mookambika</h3>
              <BodyText>Even voiceless, Mookasura was formidable. He defeated Indra, took over his kingdom, and subjected the three worlds to chaos. The Trimurti called upon the Tridevi — Saraswati, Lakshmi, and Parvati — to create a form to defeat the asura. Their combined energies culminated into a goddess, who rode on a lion and slew Mookasura. She acquired the name Mookambika — the one who silenced the mute demon.</BodyText>
            </div>

            {/* Deity image — full width */}
            <div style={{ position: "relative", aspectRatio: "3/2", borderRadius: 2, overflow: "hidden" }}>
              <Image
                src={IMAGES.deity}
                alt="Sri Mookambika Devi — the Panchaloha idol in the sanctum sanctorum"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                unoptimized
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)" }}/>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem" }}>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 300, color: "var(--text0)" }}>Sri Mookambika Devi</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", color: "var(--gold)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "0.3rem" }}>The Panchaloha idol — sanctum sanctorum, Kollur</p>
              </div>
            </div>

            <div style={{ background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.12)", padding: "2.5rem" }}>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)", marginBottom: "1rem" }}>Adi Shankaracharya and the Goddess Who Stayed</h3>
              <BodyText>In the 8th century, Adi Shankaracharya traversed the Kodachadri hills and encountered the divine presence of Mookambika in deep meditation. He wished to bring her to Kerala. The goddess agreed — on one condition: that he lead her without looking back. He walked, guided by the sound of her anklets. Then suddenly, the sound stopped.</BodyText>
              <BodyText style={{ marginTop: "1rem" }}>Doubt overtook him. He turned back. When the goddess asked him to install her idol right there at Kollur, he obliged. But because he had performed austerities for her, she also agreed to be present at the Chottanikkara Temple in Kerala. Even today, the doors of Chottanikkara open only after Kollur's — the connection kept alive daily.</BodyText>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: THE DEITY ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <SectionLabel text="The Deity"/>
          <SectionTitle text="Who is Mookambika?"/>
          <Divider/>

          <BodyText style={{ marginBottom: "2rem" }}>
            Mookambika is the fusion of Adipara Shakti and Parabrahma — the integration of Maha Kali, Maha Lakshmi, and Maha Saraswati in a single form. She is not one of the Tridevi. She is all three, simultaneously, in the same form at the same altar.
          </BodyText>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 2, background: "var(--bg3)", marginBottom: "3rem" }}>
            {[
              { time: "Dawn",  form: "Saraswati", aspect: "Goddess of Knowledge, Speech & Learning", color: "var(--text0)" },
              { time: "Noon",  form: "Lakshmi",   aspect: "Goddess of Abundance, Grace & Prosperity", color: "var(--gold)" },
              { time: "Dusk",  form: "Parvati",   aspect: "Goddess of Power, Devotion & Liberation", color: "var(--saffron)" },
            ].map(f => (
              <div key={f.form} style={{ background: "var(--bg1)", padding: "2rem" }}>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", marginBottom: "0.5rem" }}>{f.time}</p>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 300, color: f.color, marginBottom: "0.5rem" }}>{f.form}</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.82rem", color: "var(--text1)", lineHeight: 1.7 }}>{f.aspect}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)", marginBottom: "1.2rem" }}>The Panchaloha Idol & Sri Chakra</h3>
          <BodyText>The temple houses a four-armed panchaloha idol of Goddess Mookambika — crafted from five metals: gold, silver, copper, iron, and lead. She is depicted seated in Padmasana, with two arms holding a Shankha and Chakra, and the other two in Abhaya and Varada mudras. Behind this idol stands the Swayambhu Jyotirlinga divided by the Swarnarekha — the golden line representing the union of Shiva and Shakti. Adi Shankara installed the idol on a Sri Chakra Yantra — the geometric body of the goddess. Even today, worship follows the Vijayagama system he formulated.</BodyText>

          {/* Souparnika river image */}
          <div style={{ position: "relative", aspectRatio: "16/7", borderRadius: 2, overflow: "hidden", marginTop: "3rem" }}>
            <Image
              src={IMAGES.souparnika}
              alt="Souparnika River at Kollur — the sacred river beside the temple"
              fill
              style={{ objectFit: "cover", filter: "brightness(0.7) sepia(0.15)" }}
              unoptimized
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)" }}/>
            <div style={{ position: "absolute", bottom: 0, left: 0, padding: "1.5rem 2rem" }}>
              <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 300, color: "var(--text0)" }}>The Souparnika River</p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", color: "var(--gold)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "0.3rem" }}>Named for Garuda who performed penance on its banks — ritual bathing here before darshan is the ancient tradition</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: AGAMA SHASTRA ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <SectionLabel text="Agama Shastra"/>
          <SectionTitle text="The Science of Worship"/>
          <Divider/>

          <BodyText style={{ marginBottom: "3rem" }}>
            The Vijayagama system — prescribed by Adi Shankaracharya — governs every ritual at Kollur to this day. Agama Shastra is not superstition but a precise technology for making contact between human consciousness and the divine. Every gesture, every substance, every time of day has a reason rooted in Vedic cosmology.
          </BodyText>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }}>
            {[
              { title: "Trikala Pooja", desc: "Three daily worship sessions — morning, noon, and evening — corresponding to the three aspects of the deity and the three states of time." },
              { title: "Panchamrutha Abhishekam", desc: "Ritual bathing in five sacred substances: milk for purity, honey for sweetness, ghee for illumination, curd for nourishment, sugarcane juice for abundance." },
              { title: "Sri Chakra Worship", desc: "The Devi stands on a Sri Chakra Yantra — the geometric encoding of the goddess's own cosmic form. Worship of the idol is simultaneously worship of the yantra." },
              { title: "Vidyarambham", desc: "Children are initiated into learning here — first letters written by a child's hand guided by the priest. As the goddess of speech, Mookambika presides over all learning." },
              { title: "Anna Prashana", desc: "The first solid food given to an infant is offered here before the goddess of nourishment. Two of life's most sacred beginnings — speech and food — consecrated at Kollur." },
              { title: "Bali Pooja", desc: "Offerings made to guardian energies and protective deities. This ancient ritual acknowledges that the sacred space is inhabited by many presences, all requiring acknowledgement." },
            ].map(p => (
              <div key={p.title} style={{ borderLeft: "1px solid rgba(200,150,62,0.25)", paddingLeft: "1.5rem" }}>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 300, color: "var(--gold)", marginBottom: "0.5rem" }}>{p.title}</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "var(--text1)", lineHeight: 1.85 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: DAILY RITUALS ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <SectionLabel text="Daily Schedule"/>
          <SectionTitle text="Rituals of the Day"/>
          <Divider/>

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
              {[
                ["Morning Darshan", "5:00 AM – 1:00 PM"],
                ["Evening Darshan", "3:00 PM – 9:00 PM"],
                ["Temple Open",    "5:00 AM – 9:00 PM"],
                ["Special Days",   "Extended during Navaratri & Phalguna"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text2)", marginBottom: "0.3rem" }}>{label}</p>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 300, color: "var(--text0)" }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: FESTIVALS ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <SectionLabel text="Sacred Celebrations"/>
          <SectionTitle text="Festivals & Significance"/>
          <Divider/>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {[
              { name: "Navaratri", when: "Ashwin (Sep–Oct)", desc: "The nine nights of the goddess. Thousands arrive from Karnataka, Kerala, and across India. Chandi Homam, Sahasranama Archana, and special processions mark each night. The final day — Vijayadashami — marks the victory of the goddess over Mookasura." },
              { name: "Rathotsava", when: "Phalguna (Feb–Mar)", desc: "The chariot festival. The goddess is placed in a great wooden chariot and pulled through the temple streets. Moola Nakshatra in this month is observed as Devi's birthday — considered one of the most auspicious days in the Tulunadu calendar." },
              { name: "Shivaratri", when: "Magha (Feb–Mar)", desc: "As the Jyotirlinga represents both Shiva and Shakti, Mahashivaratri is observed with special midnight worship of the Swayambhu Linga — the only night when the full linga is accessible to devotees in the pre-dawn darkness." },
            ].map(f => (
              <div key={f.name} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", paddingBottom: "2.5rem", borderBottom: "1px solid rgba(200,150,62,0.08)" }}>
                <div>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)" }}>{f.name}</p>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", color: "var(--text2)", letterSpacing: "0.1em", marginTop: "0.3rem" }}>{f.when}</p>
                </div>
                <BodyText>{f.desc}</BodyText>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 6: SURROUNDINGS ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <SectionLabel text="The Sacred Land"/>
          <SectionTitle text="Kollur & its Surroundings"/>
          <Divider/>

          {/* Kodachadri image */}
          <div style={{ position: "relative", aspectRatio: "16/7", borderRadius: 2, overflow: "hidden", marginBottom: "3rem" }}>
            <Image
              src={IMAGES.kodachadri}
              alt="Kodachadri Hills — the Western Ghats peak from which Shankaracharya descended"
              fill
              style={{ objectFit: "cover", filter: "brightness(0.65) sepia(0.1)" }}
              unoptimized
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }}/>
            <div style={{ position: "absolute", bottom: 0, left: 0, padding: "1.5rem 2rem" }}>
              <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 300, color: "var(--text0)" }}>Kodachadri Hills</p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", color: "var(--gold)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "0.3rem" }}>The peak from which Adi Shankaracharya descended — Western Ghats, Karnataka</p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <BodyText style={{ marginBottom: "1.5rem" }}>The temple is located at the base of the Kodachadri Hills, on the southern bank of the Souparnika River — the area believed to have been created by Parashurama, situated between Gokarna and Kanyakumari.</BodyText>
              <BodyText>Kollur is one of the Seven Mukti Sthalas of Parashurama Kshetra, alongside Udupi, Subrahmanya, Kumbasi, Kodeshwara, Sankaranarayana, and Gokarna. To visit all seven in one pilgrimage is a complete traversal of Tulunadu's spiritual geography.</BodyText>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--bg3)" }}>
              {[
                ["Souparnika River",     "Sacred river flowing beside the temple. Ritual bath before darshan."],
                ["Kodachadri Hills",     "The hills from which Shankaracharya descended with Mookambika."],
                ["Marana Katte",         "The spot where Devi slew Mookasura — a sub-shrine within the complex."],
                ["Shankaracharya Peetha","The western side of the sanctum where Shankara sat in meditation."],
                ["Saraswathi Mantapam", "Southern mandapa where Vidyarambham and Anna Prashana are performed."],
              ].map(([place, desc]) => (
                <div key={place} style={{ background: "var(--bg1)", padding: "1.2rem 1.5rem" }}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontWeight: 300, color: "var(--gold)", marginBottom: "0.2rem" }}>{place}</p>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", color: "var(--text1)", lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 7: HOW TO REACH ── */}
        <section style={{ padding: "80px 0" }}>
          <SectionLabel text="Plan Your Visit"/>
          <SectionTitle text="Getting There"/>
          <Divider/>

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
                  <strong style={{ color: "var(--gold)", fontWeight: 400 }}>October – March</strong> — pleasant weather, clear skies.<br/><br/>
                  <strong style={{ color: "var(--gold)", fontWeight: 400 }}>Avoid June – September</strong> — heavy monsoon in the Western Ghats.<br/><br/>
                  <strong style={{ color: "var(--gold)", fontWeight: 400 }}>Weekdays</strong> — significantly less crowded. Darshan wait under 15 minutes vs 60+ on weekends.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { mode: "By Air",    detail: "Mangalore International Airport — 135 km. Taxi via Udupi takes approx 2.5 hours through the Western Ghats." },
                { mode: "By Train",  detail: "Kundapura Railway Station — 40 km. Byndoor Station — 28 km. Buses and taxis run to Kollur from both stations." },
                { mode: "By Road",   detail: "NH 169 from Mangalore (135 km). KSRTC buses from Udupi (60 km), Mangalore, and Shimoga. Private taxis from Udupi and Mangalore." },
                { mode: "Dress Code",detail: "Men: white dhoti and upper cloth preferred. Women: traditional dress required. Footwear removed before the inner sanctum." },
                { mode: "Stay",      detail: "Four temple-managed guest houses within walking distance. ₹200–₹600/night. Advance booking required during Navaratri and Rathotsava." },
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