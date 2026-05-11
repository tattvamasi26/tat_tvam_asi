import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kollur Mookambika Temple — Temples of Tulunadu",
  description: "The complete guide to Sri Mookambika Temple, Kollur — history, Puranika Katha, rituals, agama shastra, the significance of the deity, and how to reach.",
};

const rituals = [
  { time: "5:00 AM", name: "Nirmalya Pooja", desc: "The day begins before dawn. The previous day's offerings are cleared and the Swayambhu Lingam is revealed to early devotees — the only time the raw linga is directly visible." },
  { time: "6:30 AM", name: "Suprabhatha Seva", desc: "The goddess is awakened with Vedic hymns. The morning invocation prepares the sanctum for the day's worship, filling the air with chanting." },
  { time: "6:00 – 8:00 AM", name: "Srinagara Pooja", desc: "The goddess is adorned with fresh flowers, new silks, and ornaments. One of the most beautiful rituals — the divine mother dressed for the day." },
  { time: "7:30 AM", name: "Panchamrutha Abhishekam", desc: "The deity is bathed in five sacred substances — milk, curd, ghee, honey, and sugarcane juice — each representing a dimension of divine nourishment." },
  { time: "8:00 AM", name: "Mangala Aarati", desc: "The first full aarati of the day. Lamps are waved before the goddess as priests chant the Chamundi Ashtakam. Attendance is considered highly auspicious." },
  { time: "8:15 AM", name: "Uday Bali Pooja", desc: "Offerings are made to the protective deities and the surrounding energies of the kshetra — sanctifying the entire space of the temple." },
  { time: "8:00 – 9:00 AM", name: "Nityotsava Pooja", desc: "Daily festival worship with food offerings, Vedic chanting, and sahasranama archana. The full ritual sequence prescribed by Vijayagama, the system established by Adi Shankaracharya." },
  { time: "12:30 PM", name: "Mahamangala Aarati", desc: "The great midday aarati — the most elaborate of the day. The goddess is worshipped as Lakshmi at noon, representing abundance and sustenance." },
  { time: "6:30 PM", name: "Pradosha Pooja", desc: "As dusk falls, the evening worship begins. The goddess transforms into Parvati for the evening. The atmosphere shifts — the lamps multiply, the chanting deepens." },
  { time: "7:15 PM", name: "Thurthu Mangala Aarati", desc: "The penultimate aarati of the day, marking the transition into night worship." },
  { time: "7:30 PM", name: "Salam Mangala Aarati", desc: "A royal salutation to the goddess — a tradition continuing from the Keladi dynasty, when the temple was the state shrine." },
  { time: "8:00 PM", name: "Kashya Mangala Aarati", desc: "The final aarati of the day. The goddess is bid goodnight. The sanctum closes. The lamp continues to burn through the night." },
];

export default function MookambikaPage() {
  return (
    <div style={{ background: "var(--bg0)", minHeight: "100vh", color: "var(--text0)", fontFamily: "var(--sans)" }}>

      {/* ── HERO ── */}
      <div style={{ position: "relative", height: "85vh", minHeight: 500, overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Mookambika_Temple%2C_Kollur.jpg/1280px-Mookambika_Temple%2C_Kollur.jpg"
          alt="Sri Mookambika Temple, Kollur"
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
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))" }}>
          {[
            ["Deity", "Mookambika Devi"],
            ["Form", "Adi Parashakti — Tridevi"],
            ["Temple Age", "~1200 years"],
            ["Established by", "Adi Shankaracharya"],
            ["River", "Souparnika"],
            ["Hills", "Kodachadri"],
          ].map(([label, value]) => (
            <div key={label} style={{ padding: "1.4rem 1rem", borderRight: "1px solid rgba(200,150,62,0.1)" }}>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", marginBottom: "0.3rem" }}>{label}</p>
              <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontWeight: 300, color: "var(--gold)" }}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 2rem" }}>

        {/* ── ESSENCE ── */}
        <div style={{ padding: "80px 0 60px", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.4rem,2.5vw,1.9rem)", fontStyle: "italic", fontWeight: 300, color: "var(--text0)", lineHeight: 1.7, borderLeft: "2px solid var(--gold)", paddingLeft: "2rem" }}>
            "She is not worshipped as one goddess but three — Saraswati at dawn, Lakshmi at noon, Parvati at dusk. The same form, three truths. This is the teaching of Kollur: that the divine feminine is not a single note but the entire scale."
          </p>
        </div>

        {/* ── SECTION 1: PURANIKA KATHA ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Puranika Katha</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>The Story of Mookambika</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "3rem" }}/>

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
              <div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)", marginBottom: "1rem" }}>The Demon Who Could Not Speak</h3>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300 }}>
                  In the ages when the three worlds were balanced by dharma, there lived a demon named Kaumasura — fierce, ambitious, determined to conquer the heavens. He undertook severe penance to propitiate Lord Shiva, seeking an invincible boon.
                </p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginTop: "1rem" }}>
                  Sensing the grave danger if the boon were granted, the goddess of speech — Saraswati herself — intervened and rendered the demon mute. Unable to speak his boon, Kaumasura became Mookasura — mooka meaning dumb.
                </p>
              </div>
              <div style={{ background: "var(--bg2)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Mookambika_Temple%2C_Kollur.jpg/800px-Mookambika_Temple%2C_Kollur.jpg"
                  alt="Mookambika Temple Kollur"
                  fill
                  style={{ objectFit: "cover", filter: "brightness(0.6) sepia(0.3)" }}
                  unoptimized
                />
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)", marginBottom: "1rem" }}>The Birth of Mookambika</h3>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300 }}>
                Even voiceless, Mookasura was formidable. He defeated Indra, took over his kingdom, and subjected the three worlds to chaos. In order to restore the cosmic balance, the Trimurti — Brahma, Vishnu, and Shiva — called upon their consorts, the Tridevi — Saraswati, Lakshmi, and Parvati — to create a form to defeat the asura. Their combined energies culminated into a goddess, who rode on a lion and slew Mookasura. She acquired the name Mookambika — the one who silenced the mute demon.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)", marginBottom: "1rem" }}>The Sage Kola and the Jyotirlinga</h3>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300 }}>
                At this place of victory, a sage named Maharishi Kola performed deep penance to both the Trimurti and Tridevi, requesting that a murti of all these deities be established on the very spot. Moved by his devotion, the Lord with His Consort agreed to remain here forever. To grant his wish, a Jyotirlinga appeared — with a Swarnarekha (a golden line) dividing it in the middle.
              </p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginTop: "1rem" }}>
                One half of this Linga stands for the conscious principle as embodied by Shiva, Vishnu and Brahma, while the other stands for the Creative Principle in the form of Parvati, Lakshmi and Saraswathi. This is why the temple belongs simultaneously to 108 Shivalayas and 108 Durgalayas — it is both and neither. Shiva and Shakti, undivided.
              </p>
            </div>

            <div style={{ background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.12)", padding: "2.5rem" }}>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)", marginBottom: "1rem" }}>Adi Shankaracharya and the Goddess Who Stayed</h3>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300 }}>
                The most beloved story of Kollur belongs to Adi Shankaracharya. In the 8th century, he traversed the Kodachadri hills and encountered the divine presence of Mookambika in deep meditation. He wished to bring her to Kerala, where no temple for the goddess existed. Saraswati agreed to come — on one condition: that he lead her to Kerala without looking back at her. He agreed.
              </p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginTop: "1rem" }}>
                He walked, and he could always hear her anklets. Then suddenly, the sound stopped. Doubt overtook him. He looked back. When he saw she was still with him, he apologised — but he had broken his vow. The goddess asked him to install her idol right there, at that very spot in Kollur.
              </p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginTop: "1rem" }}>
                Because he had performed austerities for her, the goddess agreed that she would also be present at the Chottanikkara Temple in Kerala. Thus, the doors of the Chottanikkara Temple are opened right after those of the Mookambika Temple — even today. The connection between these two temples, separated by hundreds of kilometres, is kept alive by this daily ritual.
              </p>
            </div>

          </div>
        </section>

        {/* ── SECTION 2: THE DEITY ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>The Deity</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>Who is Mookambika?</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "3rem" }}/>

          <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginBottom: "2rem" }}>
            Mookambika represents the fusion of Adipara Shakti and Parabrahma. She is the integration of Maha Kali, Maha Lakshmi, and Maha Saraswati — all three aspects of the divine feminine in a single form. This is not theological compromise. It is the recognition that the divine mother does not divide herself — she is wholeness worshipped in three aspects by different traditions.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 2, background: "var(--bg3)", marginBottom: "3rem" }}>
            {[
              { time: "Dawn", form: "Saraswati", aspect: "Goddess of Knowledge, Speech, Learning", color: "var(--text0)" },
              { time: "Noon", form: "Lakshmi", aspect: "Goddess of Abundance, Grace, Prosperity", color: "var(--gold)" },
              { time: "Dusk", form: "Parvati", aspect: "Goddess of Power, Devotion, Liberation", color: "var(--saffron)" },
            ].map(f => (
              <div key={f.form} style={{ background: "var(--bg1)", padding: "2rem" }}>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", marginBottom: "0.5rem" }}>{f.time}</p>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 300, color: f.color, marginBottom: "0.5rem" }}>{f.form}</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.82rem", color: "var(--text1)", lineHeight: 1.7 }}>{f.aspect}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)", marginBottom: "1.2rem" }}>The Panchaloha Idol</h3>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginBottom: "2rem" }}>
            The temple houses a four-armed panchaloha idol of Goddess Mookambika — crafted from five metals: gold, silver, copper, iron, and lead. She is depicted seated in Padmasana with two arms holding a Shankha (conch) and Chakra (divine discus), and the other two arms in the Abhaya mudra (gesture of protection) and Varada mudra (gesture of blessing).
          </p>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300 }}>
            Behind this idol stands the Swayambhu Jyotirlinga — the self-manifested lingam divided by the golden Swarnarekha. Adi Shankara installed the statue of Devi on a Sri Chakra Yantra. Even today the worshipping ritual is continued as per the Vijayagama system formulated by Adi Shankaracharya. The Sri Chakra — the geometric diagram of Devi's cosmic body — forms the very foundation on which she stands.
          </p>

          <div style={{ background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.12)", padding: "2rem", marginTop: "2.5rem" }}>
            <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontStyle: "italic", color: "var(--gold)", marginBottom: "0.8rem" }}>The Deepasthambha</p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: "var(--text1)", lineHeight: 1.9 }}>
              A huge Deepasthambha (lamp tower) stands at the temple entrance with its base shaped like a tortoise's head. It has 21 beautiful concentric circles which, when all lamps are lit and viewed from a distance, appear similar to the divine Makara Jyothi — the sacred light that appears at Sabarimala.
            </p>
          </div>
        </section>

        {/* ── SECTION 3: AGAMA SHASTRA ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Agama Shastra</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>The Science of Worship</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "2rem" }}/>

          <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginBottom: "3rem" }}>
            The Vijayagama system — the framework of worship prescribed by Adi Shankaracharya — governs every ritual at Kollur to this day. Agama Shastra is the science that encodes the relationship between the worshipper and the worshipped — it is not superstition but a precise technology for making contact between human consciousness and the divine. Every gesture, every substance, every time of day has a reason rooted in Vedic cosmology.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }}>
            {[
              { title: "Trikala Pooja", desc: "Three daily worship sessions — morning, noon, and evening — corresponding to the three aspects of the deity and the three states of time. Each session transforms the atmosphere of the sanctum completely." },
              { title: "Panchamrutha Abhishekam", desc: "The ritual bathing of the deity in five sacred substances. Each substance carries specific meaning: milk for purity, honey for sweetness, ghee for illumination, curd for nourishment, sugarcane juice for abundance." },
              { title: "Sri Chakra Worship", desc: "The Devi stands on a Sri Chakra Yantra — the geometric encoding of the goddess's own cosmic form. Worship of the idol is simultaneously worship of the yantra, the living diagram of consciousness." },
              { title: "Bali Pooja", desc: "Offerings made to the guardian energies and protective deities of the temple complex. This ancient ritual acknowledges that the sacred space is inhabited by many presences, all requiring acknowledgement." },
              { title: "Vidyarambham", desc: "Children are initiated into learning at this temple — the first letters written by a child's hand guided by the priest. As the goddess of speech, Mookambika is the presiding deity of all learning." },
              { title: "Anna Prashana", desc: "The first solid food given to an infant is offered here before the goddess of nourishment. Two of life's most sacred beginnings — speech and food — are consecrated at Kollur." },
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
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Daily Schedule</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>Rituals of the Day</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "3rem" }}/>

          <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--bg3)" }}>
            {rituals.map((r, i) => (
              <div key={i} style={{ background: i % 2 === 0 ? "var(--bg1)" : "var(--bg0)", padding: "1.6rem 2rem", display: "grid", gridTemplateColumns: "140px 1fr", gap: "2rem", alignItems: "start" }}>
                <div>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.78rem", color: "var(--gold)", fontWeight: 400 }}>{r.time}</p>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontStyle: "italic", color: "var(--text0)", marginTop: "0.2rem", fontWeight: 300 }}>{r.name}</p>
                </div>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "var(--text1)", lineHeight: 1.85, fontWeight: 300 }}>{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Darshan timings box */}
          <div style={{ marginTop: "3rem", background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.15)", padding: "2rem" }}>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1.2rem" }}>Darshan Timings</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1.5rem" }}>
              {[
                ["Morning Darshan", "5:00 AM – 1:00 PM"],
                ["Evening Darshan", "3:00 PM – 9:00 PM"],
                ["Temple Open", "5:00 AM – 9:00 PM"],
                ["Special Days", "Extended hours during Navaratri & Phalguna"],
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
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Sacred Celebrations</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>Festivals & Significance</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "3rem" }}/>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {[
              { name: "Navaratri", when: "Ashwin (September–October)", desc: "The nine nights of the goddess. This is when Kollur reaches its fullest intensity — thousands of devotees arrive from Karnataka, Kerala, and across India. Chandi Homam, Sahasranama Archana, and special processions mark each night. The goddess is worshipped in her nine forms, one for each night. The final day — Vijayadashami — marks the victory of the goddess over Mookasura, the very event for which this temple exists." },
              { name: "Rathotsava", when: "Phalguna (February–March)", desc: "The chariot festival. The goddess is placed in a great wooden chariot and pulled through the temple streets by devotees. Moola Nakshatra in this month is observed as the birthday of Devi — considered one of the most auspicious days in the Tulunadu calendar. Jesudas, the legendary singer and lifelong devotee, performs the Chandika Homa Seva here on his own birthday every year." },
              { name: "Saptapadi", when: "Annually by government order", desc: "A free mass wedding ceremony conducted at the temple — the Saptapadi ritual performed before the goddess who represents the complete union of Shiva and Shakti. Couples from across the region participate." },
              { name: "Shivaratri", when: "Magha (February–March)", desc: "As the Jyotirlinga represents both Shiva and Shakti in one, Mahashivaratri is observed with special midnight worship of the Swayambhu Linga — the only night when the full linga is accessible to devotees in the pre-dawn darkness." },
            ].map(f => (
              <div key={f.name} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "2rem", paddingBottom: "2.5rem", borderBottom: "1px solid rgba(200,150,62,0.08)" }}>
                <div>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)" }}>{f.name}</p>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", color: "var(--text2)", letterSpacing: "0.1em", marginTop: "0.3rem" }}>{f.when}</p>
                </div>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.88rem", color: "var(--text1)", lineHeight: 1.95, fontWeight: 300 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 6: SURROUNDINGS ── */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>The Sacred Land</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>Kollur & its Surroundings</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "3rem" }}/>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginBottom: "1.5rem" }}>
                The temple is located at the base of the Kodachadri Hills, on the southern bank of the Souparnika River, in an area believed to have been created by the sage Parashurama, situated between Gokarna and Kanyakumari.
              </p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300, marginBottom: "1.5rem" }}>
                The Souparnika River — named for the divine eagle Suparna (Garuda) who performed penance on its banks — flows beside the temple. Bathing in its waters before entering the temple is the traditional practice. The Western Ghats rise behind the town, creating a natural enclosure that has kept this valley sacred for millennia.
              </p>
              <p style={{ fontFamily: "var(--sans)", fontSize: "0.92rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300 }}>
                Kollur is regarded as one of the Seven Mukti Sthalas — pilgrimage sites of liberation — in Parashurama Kshetra, alongside Udupi, Subrahmanya, Kumbasi, Kodeshwara, Sankaranarayana, and Gokarna. To visit all seven in one pilgrimage is considered a complete traversal of Tulunadu's spiritual geography.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--bg3)" }}>
              {[
                ["Souparnika River", "Sacred river flowing beside the temple. Ritual bath before darshan."],
                ["Kodachadri Hills", "The hills from which Shankaracharya descended with Mookambika."],
                ["Marana Katte", "The spot where Devi slew Mookasura — a sub-shrine within the complex."],
                ["Shankaracharya Peetha", "The western side of the sanctum marks where Shankara sat in meditation."],
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

        {/* ── SECTION 7: HOW TO REACH / ADDRESS ── */}
        <section style={{ padding: "80px 0" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Plan Your Visit</p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, color: "var(--text0)", marginBottom: "1rem" }}>Getting There</h2>
          <div style={{ width: 40, height: 1, background: "var(--gold-dim)", marginBottom: "3rem" }}/>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <div>
              {/* Address box */}
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

              {/* Best time */}
              <div style={{ background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.15)", padding: "2rem" }}>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Best Time to Visit</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", color: "var(--text1)", lineHeight: 1.85 }}>
                  <strong style={{ color: "var(--gold)", fontWeight: 400 }}>October – March</strong> — pleasant weather, clear skies, ideal for the hill surroundings.<br/><br/>
                  <strong style={{ color: "var(--gold)", fontWeight: 400 }}>Avoid June – September</strong> — heavy monsoon in the Western Ghats may disrupt travel.<br/><br/>
                  <strong style={{ color: "var(--gold)", fontWeight: 400 }}>Weekdays</strong> — significantly less crowded. Darshan wait under 15 minutes vs 60+ on weekends.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { mode: "By Air", detail: "Mangalore International Airport — 135 km. Taxi to Kollur via Udupi takes approx 2.5 hours through the Western Ghats." },
                { mode: "By Train", detail: "Kundapura Railway Station — 40 km (closest). Byndoor Station — 28 km. From either station, buses and taxis run to Kollur regularly." },
                { mode: "By Road", detail: "Well-connected by NH 169 from Mangalore (135 km). KSRTC buses run from Udupi (60 km), Mangalore, and Shimoga. Private taxis available from Udupi and Mangalore." },
                { mode: "Dress Code", detail: "Men: white dhoti and upper cloth preferred. Women: traditional dress required. Footwear must be removed before entering the inner sanctum." },
                { mode: "Accommodation", detail: "Four temple-managed guest houses within walking distance. Budget rooms ₹200–₹600/night. Advance booking required during Navaratri and Rathotsava." },
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
          <Link href="/temples" style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", textDecoration: "none" }}>
            ← All Temples
          </Link>
          <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontStyle: "italic", color: "var(--gold)", opacity: 0.6 }}>
            ಜಯ ಮೂಕಾಂಬಿಕೆ
          </p>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)" }}>
            Next Temple →
          </p>
        </div>
      </div>

    </div>
  );
}