"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

const sports = [
  {
    image: "/images/football.jpeg",
    title: "Football",
    badge: "Boys Team",
    description: "Our football team competes in inter-school leagues and local tournaments. Training focuses on teamwork, fitness and tactical discipline under qualified coaching staff.",
    highlights: ["Inter-school competitions", "Weekly training sessions", "Boys & mixed teams", "Qualified coaching staff"],
    color: "#0EA5E9",
    number: "01",
  },
  {
    image: "/images/netball.jpeg",
    title: "Netball",
    badge: "Girls Team",
    description: "Netball is one of our most celebrated sports at Jam Park. Our girls team has a strong record in district competitions and continues to grow in strength each season.",
    highlights: ["District level competitions", "Twice weekly training", "Girls team", "Strong winning record"],
    color: "#16A34A",
    number: "02",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

function SportCard({ sport, index }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(60px)",
        transition: `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderTop: `4px solid ${sport.color}`,
        overflow: "hidden",
      }}
    >
      {/* IMAGE — full width on top */}
      <div style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16/9",
        overflow: "hidden",
      }}>
        <Image
          src={sport.image}
          alt={sport.title}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        {/* Overlays */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(7,24,41,0.35)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,24,41,0.9) 0%, transparent 60%)" }} />

        {/* Big number watermark */}
        <div style={{
          position: "absolute",
          top: "1rem",
          right: "1.25rem",
          fontFamily: "var(--font-display)",
          color: "rgba(255,255,255,0.08)",
          fontSize: "5rem",
          fontWeight: 900,
          lineHeight: 1,
          userSelect: "none",
        }}>
          {sport.number}
        </div>

        {/* Badge top left */}
        <div style={{
          position: "absolute",
          top: "1.25rem",
          left: "1.25rem",
          background: sport.color,
          padding: "0.3rem 0.85rem",
        }}>
          <span style={{
            fontFamily: "var(--font-ui)",
            color: "#ffffff",
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}>
            {sport.badge}
          </span>
        </div>

        {/* Title on image bottom */}
        <div style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "1.5rem",
          right: "1.5rem",
        }}>
          <h3 style={{
            fontFamily: "var(--font-display)",
            color: "#ffffff",
            fontWeight: 900,
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            margin: 0,
            lineHeight: 1.1,
            textShadow: "0 2px 12px rgba(0,0,0,0.4)",
          }}>
            {sport.title}
          </h3>
        </div>
      </div>

      {/* CONTENT below image */}
      <div style={{ padding: "2rem" }}>

        {/* Divider */}
        <div style={{ width: "40px", height: "3px", background: sport.color, marginBottom: "1.25rem" }} />

        {/* Description */}
        <p style={{
          fontFamily: "var(--font-body)",
          color: "rgba(255,255,255,0.68)",
          fontSize: "0.92rem",
          lineHeight: 1.85,
          margin: "0 0 1.75rem 0",
        }}>
          {sport.description}
        </p>

        {/* Highlights grid */}
        <div className="highlights-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.75rem",
          marginBottom: "1.75rem",
        }}>
          {sport.highlights.map((h, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.6rem",
              background: "rgba(255,255,255,0.04)",
              padding: "0.75rem",
              borderLeft: `2px solid ${sport.color}`,
            }}>
              <CheckCircle size={13} style={{ color: sport.color, flexShrink: 0, marginTop: "2px" }} />
              <span style={{
                fontFamily: "var(--font-ui)",
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.8rem",
                lineHeight: 1.4,
              }}>
                {h}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        
         <a href="/gallery"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: sport.color,
            color: "#ffffff",
            padding: "0.75rem 1.5rem",
            fontFamily: "var(--font-ui)",
            fontWeight: 700,
            fontSize: "0.78rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          View Gallery <ArrowRight size={14} />
        </a>

      </div>
    </div>
  );
}

export default function Sports() {
  const [headerRef, headerInView] = useInView(0.1);

  return (
    <section id="sports" style={{ background: "#0C2340", padding: "6rem 0", overflow: "hidden" }}>
      <div className="container">

        {/* HEADER */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span style={{
            display: "inline-block",
            background: "rgba(14,165,233,0.12)",
            color: "#7DD3FC",
            fontFamily: "var(--font-ui)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "0.4rem 1rem",
            marginBottom: "1rem",
          }}>
            Sports
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            color: "#ffffff",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            lineHeight: 1.15,
            margin: "0 auto 1rem auto",
            maxWidth: "560px",
          }}>
            Discipline, Teamwork & Excellence
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            color: "rgba(255,255,255,0.55)",
            fontSize: "0.97rem",
            lineHeight: 1.8,
            margin: "0 auto",
            maxWidth: "520px",
          }}>
            Sports at Jam Park go beyond physical fitness. They teach our students discipline, resilience and how to work together toward a common goal.
          </p>
        </div>

        {/* SPORTS GRID */}
        <div
          className="sports-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
        >
          {sports.map((sport, i) => (
            <SportCard key={i} sport={sport} index={i} />
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .sports-grid {
            grid-template-columns: 1fr !important;
          }
          .highlights-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </section>
  );
}