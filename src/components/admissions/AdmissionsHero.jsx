"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function AdmissionsHero() {
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
      minHeight: "65vh",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      marginTop: navOffset,
      background: "#0C2340",
    }}>

      {/* Background geometric pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          radial-gradient(circle at 15% 50%, rgba(14,165,233,0.12) 0%, transparent 50%),
          radial-gradient(circle at 85% 20%, rgba(22,163,74,0.08) 0%, transparent 40%),
          radial-gradient(circle at 70% 80%, rgba(14,165,233,0.06) 0%, transparent 35%)
        `,
        zIndex: 0,
      }} />

      {/* Grid lines overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        zIndex: 0,
      }} />

      {/* TOP ACCENT */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(to right, #0EA5E9, #16A34A)",
        zIndex: 4,
      }} />

      {/* BOTTOM ACCENT */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(to right, #16A34A, #0EA5E9)",
        zIndex: 4,
      }} />

      {/* CONTENT */}
      <div className="container" style={{
        position: "relative",
        zIndex: 3,
        paddingTop: "4rem",
        paddingBottom: "4rem",
      }}>
        <div className="admissions-hero-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}>

          {/* LEFT — TEXT */}
          <div>
            {/* Breadcrumb */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              marginBottom: "1.5rem",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}>
              <Link href="/" style={{
                fontFamily: "var(--font-ui)",
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}>
                Home
              </Link>
              <ChevronRight size={12} style={{ color: "rgba(255,255,255,0.25)" }} />
              <span style={{
                fontFamily: "var(--font-ui)",
                color: "#0EA5E9",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}>
                Admissions
              </span>
            </div>

            {/* Badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(14,165,233,0.12)",
              border: "1px solid rgba(14,165,233,0.3)",
              padding: "0.35rem 1rem",
              marginBottom: "1.5rem",
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.8s ease 0.2s",
            }}>
              <div style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#0EA5E9",
                animation: "admPulse 2s infinite",
              }} />
              <span style={{
                fontFamily: "var(--font-ui)",
                color: "#7DD3FC",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}>
                Now Enrolling . 2026 Intake
              </span>
            </div>

            {/* Title */}
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
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
            }}>
              Begin Your Journey<br />
              <span style={{ color: "#0EA5E9" }}>at Jam Park</span>
            </h1>

            

            {/* Subtitle */}
            <p style={{
              fontFamily: "var(--font-body)",
              color: "rgba(255,255,255,0.68)",
              fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
              lineHeight: 1.85,
              margin: "0 0 2rem 0",
              maxWidth: "460px",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
            }}>
              We welcome applications from motivated students who are ready to commit to academic excellence, discipline and personal growth.
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
            }}>
              <Link href="/apply"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#0EA5E9",
                  color: "#ffffff",
                  padding: "0.9rem 2rem",
                  fontFamily: "var(--font-ui)",
                  fontWeight: 700,
                  width: "13.2rem",
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  border: "2px solid #0EA5E9",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#0284C7"; e.currentTarget.style.borderColor = "#0284C7"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#0EA5E9"; e.currentTarget.style.borderColor = "#0EA5E9"; }}
              >
                Apply Now <ArrowRight size={15} />
              </Link>
              <a href="#requirements"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "transparent",
                  color: "#ffffff",
                  padding: "0.9rem 2rem",
                  fontFamily: "var(--font-ui)",
                  fontWeight: 700,
                  fontSize: "0.8rem",
            
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  border: "2px solid rgba(255,255,255,0.3)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#ffffff"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.background = "transparent"; }}
              >
                View Requirements
              </a>
            </div>
          </div>

          {/* RIGHT — QUICK INFO CARDS */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s",
          }}>
           
          </div>

        </div>
      </div>

      <style>{`
        @keyframes admPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }
        @media (max-width: 768px) {
          .admissions-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>

    </section>
  );
}