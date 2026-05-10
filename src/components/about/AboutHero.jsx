"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AboutHero() {
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

  // Navbar height — desktop has topbar + nav = ~100px, mobile = ~72px
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

      {/* BACKGROUND IMAGE */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url(/images/abouthero.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: loaded ? "scale(1)" : "scale(1.05)",
        transition: "transform 1.2s ease",
        zIndex: 0,
      }} />

      {/* MAIN DARK OVERLAY */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(7,24,41,0.72)",
        zIndex: 1,
      }} />

      {/* LEFT GRADIENT — stronger on left for text */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to right, rgba(7,24,41,0.97) 0%, rgba(7,24,41,0.80) 35%, rgba(7,24,41,0.30) 100%)",
        zIndex: 2,
      }} />

      {/* BOTTOM GRADIENT — dark navy, not white */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "180px",
        background: "linear-gradient(to top, rgba(7,24,41,0.95) 0%, transparent 50%)",
        zIndex: 2,
      }} />

      {/* TOP ACCENT LINE */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(to right, #0EA5E9, #16A34A)",
        zIndex: 4,
      }} />

      {/* CONTENT */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 3,
          paddingTop: "2rem",
          paddingBottom: "3rem",
        }}
      >
        <div style={{ maxWidth: "650px" }}>

          {/* Breadcrumb */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            marginBottom: "1.5rem",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-ui)",
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#0EA5E9"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
            >
              Home
            </Link>
            <ChevronRight size={12} style={{ color: "rgba(255,255,255,0.3)" }} />
            <span style={{
              fontFamily: "var(--font-ui)",
              color: "#0EA5E9",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}>
              About Us
            </span>
          </div>

          {/* Page Title */}
          <h1 style={{
            fontFamily: "var(--font-display)",
            color: "#ffffff",
            fontWeight: 900,
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            lineHeight: 1.05,
            margin: "0 0 1rem 0",
            letterSpacing: "-0.02em",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s",
          }}>
            About Jam Park<br />
            <span style={{ color: "#0EA5E9" }}>Private Secondary</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: "var(--font-body)",
            color: "rgba(255,255,255,0.72)",
            fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
            lineHeight: 1.85,
            margin: 0,
            maxWidth: "520px",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.55s, transform 0.8s ease 0.55s",
          }}>
            Learn about our history, vision, mission and the values that have guided us in shaping generations of leaders in Lilongwe, Malawi.
          </p>

        </div>
      </div>

    </section>
  );
}