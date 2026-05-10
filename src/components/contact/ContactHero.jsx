"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ContactHero() {
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
      minHeight: "55vh",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      marginTop: navOffset,
      background: "#0C2340",
    }}>

      {/* Background pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          radial-gradient(circle at 10% 50%, rgba(14,165,233,0.1) 0%, transparent 45%),
          radial-gradient(circle at 90% 30%, rgba(22,163,74,0.06) 0%, transparent 40%)
        `,
        zIndex: 0,
      }} />
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        zIndex: 0,
      }} />

      {/* TOP ACCENT */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "3px",
        background: "linear-gradient(to right, #0EA5E9, #16A34A)",
        zIndex: 4,
      }} />

      {/* BOTTOM ACCENT */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
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
            Contact Us
          </span>
        </div>

        <div className="contact-hero-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}>

          {/* LEFT */}
          <div>
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
              transition: "opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s",
            }}>
              Get in Touch<br />
              <span style={{ color: "#0EA5E9" }}>With Us</span>
            </h1>

     

            <p style={{
              fontFamily: "var(--font-body)",
              color: "rgba(255,255,255,0.68)",
              fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
              lineHeight: 1.85,
              margin: 0,
              maxWidth: "440px",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.45s, transform 0.8s ease 0.45s",
            }}>
              We are always happy to hear from parents, students and members of the community. Reach out to us through any of the channels below.
            </p>
          </div>

          {/* RIGHT — Quick contact info */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s",
          }}>
            {[
              { label: "Phone", value: "+265 99 162 7231", href: "tel:+265991627231", color: "#0EA5E9" },
              { label: "Email", value: "sylesscef@yahoo.com", href: "mailto:sylesscef@yahoo.com", color: "#16A34A" },
              { label: "Location", value: "Area 25, Sector 5B, Lilongwe", href: "#map", color: "#0EA5E9" },
              { label: "Office Hours", value: "Mon – Fri: 7:30 AM – 4:30 PM", href: null, color: "#16A34A" },
            ].map((item, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderLeft: `3px solid ${item.color}`,
                padding: "1rem 1.25rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
              }}>
                <span style={{
                  fontFamily: "var(--font-ui)",
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}>
                  {item.label}
                </span>
                {item.href ? (
                  <a href={item.href} style={{
                    fontFamily: "var(--font-ui)",
                    color: "#ffffff",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    textAlign: "right",
                    transition: "color 0.2s ease",
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = item.color}
                    onMouseLeave={e => e.currentTarget.style.color = "#ffffff"}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{
                    fontFamily: "var(--font-ui)",
                    color: "#ffffff",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    textAlign: "right",
                  }}>
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>

    </section>
  );
}