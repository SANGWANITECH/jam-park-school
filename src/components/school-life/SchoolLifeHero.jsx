"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SchoolLifeHero() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navOffset = isMobile ? "72px" : "105px";

  return (
    <section style={{
      position: "relative",
      width: "100%",
      height: "65vh",
      minHeight: "500px",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      marginTop: navOffset,
    }}>

      {/* BACKGROUND */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url(/images/all.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: loaded ? "scale(1)" : "scale(1.05)",
        transition: "transform 1.2s ease",
        zIndex: 0,
      }} />

      {/* OVERLAYS */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(7,24,41,0.75)", zIndex: 1 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(7,24,41,0.97) 0%, rgba(7,24,41,0.80) 45%, rgba(7,24,41,0.30) 100%)", zIndex: 2 }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "180px", background: "linear-gradient(to top, rgba(7,24,41,0.95) 0%, transparent 100%)", zIndex: 2 }} />

      {/* TOP ACCENT */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(to right, #0EA5E9, #16A34A)", zIndex: 4 }} />

      {/* CONTENT */}
      <div className="container" style={{ position: "relative", zIndex: 3, paddingTop: "2rem", paddingBottom: "3rem" }}>
        <div style={{ maxWidth: "650px" }}>

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "1.5rem", opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s" }}>
            <Link href="/" style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.55)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = "#0EA5E9"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
            >
              Home
            </Link>
            <ChevronRight size={12} style={{ color: "rgba(255,255,255,0.3)" }} />
            <span style={{ fontFamily: "var(--font-ui)", color: "#0EA5E9", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              School Life
            </span>
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: "var(--font-display)", color: "#ffffff", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.05, margin: "0 0 1rem 0", letterSpacing: "-0.02em", opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s" }}>
            Life Beyond<br />
            <span style={{ color: "#0EA5E9" }}>the Classroom</span>
          </h1>

         
          {/* Subtitle */}
          <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)", lineHeight: 1.85, margin: "0 0 2rem 0", maxWidth: "520px", opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.8s ease 0.55s, transform 0.8s ease 0.55s" }}>
            At Jam Park, education extends far beyond the classroom. Through sports, clubs and activities, we develop well-rounded students ready to lead.
          </p>

          {/* Quick nav pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.7s" }}>
            {[
              { label: "Co-Curricular", href: "#co-curricular" },
              { label: "Sports", href: "#sports" },
              { label: "Clubs & Societies", href: "#clubs" },
              { label: "Gallery", href: "/gallery" },
            ].map((item) => (
              <a key={item.href} href={item.href}
                style={{ display: "inline-block", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#ffffff", fontFamily: "var(--font-ui)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.45rem 1rem", textDecoration: "none", transition: "all 0.2s ease" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#0EA5E9"; e.currentTarget.style.borderColor = "#0EA5E9"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
              >
                {item.label}
              </a>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}