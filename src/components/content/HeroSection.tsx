"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);

  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "100px 2rem 80px", position: "relative", overflow: "hidden", background: "var(--bg0)" }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <svg viewBox="0 0 900 900" style={{ width: "min(900px,100vw)", opacity: 0.045 }}>
          {[60,120,180,240,300,360,420].map((r,i) => <circle key={r} cx="450" cy="450" r={r} fill="none" stroke={i%2===0?"#C8963E":"#D4681E"} strokeWidth={i<4?0.6:0.3}/>)}
          <circle cx="450" cy="450" r="5" fill="#C8963E"/>
          <line x1="450" y1="30" x2="450" y2="870" stroke="#C8963E" strokeWidth="0.3"/>
          <line x1="30" y1="450" x2="870" y2="450" stroke="#C8963E" strokeWidth="0.3"/>
          <polygon points="450,210 630,510 270,510" fill="none" stroke="#D4681E" strokeWidth="0.5"/>
          <polygon points="450,690 270,390 630,390" fill="none" stroke="#C8963E" strokeWidth="0.5"/>
        </svg>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 55% at 50% 50%,transparent 20%,#0F0E0C 72%)" }}/>
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", color: "var(--gold)", opacity: visible ? 0.8 : 0, transition: "opacity 1s ease 0.3s", marginBottom: "1.2rem" }}>ॐ</p>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(3.5rem,10vw,7.5rem)", fontWeight: 300, color: "var(--text0)", lineHeight: 1.05, letterSpacing: "0.04em", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 1.2s ease 0.6s,transform 1.2s ease 0.6s", marginBottom: "0.8rem" }}>
          तत् त्वम् असि
        </h1>
        <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1rem,2.5vw,1.5rem)", fontStyle: "italic", fontWeight: 300, color: "var(--text1)", letterSpacing: "0.1em", opacity: visible ? 1 : 0, transition: "opacity 1s ease 1s" }}>Thou Art That</p>
        <p style={{ fontFamily: "var(--sans)", fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text2)", marginTop: "3rem", opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 1.4s" }}>Advaita Vedanta · Vedas · Temples · Dharma</p>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center", justifyContent: "center", marginTop: "2.5rem", opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 1.6s" }}>
          <Link href="/verses" style={{ fontFamily: "var(--sans)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", border: "1px solid rgba(200,150,62,0.4)", padding: "0.75rem 2rem", textDecoration: "none" }}>Enter the Sanctuary</Link>
          <Link href="/concepts" style={{ fontFamily: "var(--sans)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", textDecoration: "none" }}>Explore Concepts →</Link>
        </div>
        <div style={{ width: 1, height: 60, background: "linear-gradient(to bottom,transparent,var(--gold))", margin: "3rem auto 0", opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 1.8s" }}/>
      </div>
    </section>
  );
}