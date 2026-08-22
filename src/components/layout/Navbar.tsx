"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";

const links = [
  { label: "Teachings", href: "/#teachings" },
  { label: "Verses",    href: "/verses" },
  { label: "Upanishads",href: "/upanishads" },
  { label: "Teachers",  href: "/teachers" },
  { label: "Temples",   href: "/temples" },
  { label: "Concepts",  href: "/concepts" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 2.5rem", height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(15,14,12,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,150,62,0.1)" : "1px solid transparent",
        transition: "all 0.5s ease",
      }}>
        <Link href="/" style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 300, color: "var(--gold)", letterSpacing: "0.08em", textDecoration: "none" }}>
          तत् त्वम् असि
        </Link>

        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }} className="desktop-nav">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="nav-link-item"
                style={{ fontFamily: "var(--sans)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text1)", textDecoration: "none" }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/search" aria-label="Search" className="nav-link-item" style={{ color: "var(--text1)", display: "flex" }}>
            <Search size={17}/>
          </Link>
          <button onClick={() => setOpen(!open)} aria-label="Menu"
            style={{ background: "none", border: "none", color: "var(--text1)", cursor: "pointer", padding: 0 }}
            className="mobile-menu-btn">
            {open ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </nav>

      {open && (
        <div style={{ position: "fixed", top: 60, left: 0, right: 0, zIndex: 99, background: "var(--bg0)", borderBottom: "1px solid rgba(200,150,62,0.1)", padding: "2rem 2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ fontFamily: "var(--sans)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text1)", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .desktop-nav{display:none!important}
          .mobile-menu-btn{display:flex!important}
        }
        @media(min-width:769px){
          .mobile-menu-btn{display:none!important}
        }
      `}</style>
    </header>
  );
}