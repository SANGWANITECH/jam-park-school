"use client";
import { useEffect, useRef, useState } from "react";
import { Eye, Target, Heart } from "lucide-react";

const values = [
  { icon: Eye, color: "#0EA5E9", label: "Our Vision" },
  { icon: Target, color: "#16A34A", label: "Our Mission" },
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

export default function VisionMission() {
  const [headerRef, headerInView] = useInView(0.1);
  const [card0Ref, card0InView] = useInView(0.1);
  const [card1Ref, card1InView] = useInView(0.1);
  const [mottoRef, mottoInView] = useInView(0.1);

  const cards = [
    {
      ref: card0Ref,
      inView: card0InView,
      icon: Eye,
      color: "#0EA5E9",
      label: "Our Vision",
      heading: "To be Malawi's most respected centre of academic and moral excellence.",
      body: "We envision a school where every student is empowered to achieve their fullest potential — academically, socially and morally — and goes on to make a meaningful difference in Malawi and beyond.",
      bg: "#0C2340",
      direction: "left",
    },
    {
      ref: card1Ref,
      inView: card1InView,
      icon: Target,
      color: "#16A34A",
      label: "Our Mission",
      heading: "To provide quality education that develops the whole student.",
      body: "Our mission is to deliver a rigorous, well-rounded education grounded in discipline, strong values and academic excellence — preparing every student for national examinations and for life as a responsible citizen of Malawi.",
      bg: "#0EA5E9",
      direction: "right",
    },
  ];

  return (
    <section style={{ background: "#ffffff", padding: "6rem 0", overflow: "hidden" }}>
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
            background: "#EFF6FF",
            color: "#0EA5E9",
            fontFamily: "var(--font-ui)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "0.4rem 1rem",
            marginBottom: "1rem",
          }}>
            Who We Are
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            color: "#0C2340",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            lineHeight: 1.15,
            margin: "0 auto 1rem auto",
            maxWidth: "560px",
          }}>
            Our Vision & Mission
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            color: "#6B7280",
            fontSize: "0.97rem",
            lineHeight: 1.8,
            margin: "0 auto",
            maxWidth: "520px",
          }}>
            Everything we do at Jam Park flows from a clear sense of purpose — a vision and mission that guide every decision we make as an institution.
          </p>
        </div>

        {/* VISION & MISSION CARDS */}
        <div
          className="vm-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                ref={card.ref}
                style={{
                  background: card.bg,
                  padding: "3rem",
                  position: "relative",
                  overflow: "hidden",
                  opacity: card.inView ? 1 : 0,
                  transform: card.inView
                    ? "translateX(0)"
                    : card.direction === "left"
                    ? "translateX(-60px)"
                    : "translateX(60px)",
                  transition: "opacity 0.8s ease, transform 0.8s ease",
                }}
              >
                {/* Watermark */}
                <div style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "1rem",
                  fontFamily: "var(--font-display)",
                  color: "rgba(255,255,255,0.04)",
                  fontSize: "8rem",
                  fontWeight: 900,
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}>
                  {i === 0 ? "V" : "M"}
                </div>

                {/* Top accent */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: card.color,
                }} />

                {/* Icon */}
                <div style={{
                  width: "54px",
                  height: "54px",
                  background: `rgba(255,255,255,0.1)`,
                  border: `1px solid rgba(255,255,255,0.15)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.75rem",
                }}>
                  <Icon size={24} style={{ color: "#ffffff" }} />
                </div>

                {/* Label */}
                <span style={{
                  fontFamily: "var(--font-ui)",
                  color: card.color,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "0.75rem",
                }}>
                  {card.label}
                </span>

                {/* Heading */}
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  lineHeight: 1.4,
                  margin: "0 0 1.25rem 0",
                }}>
                  {card.heading}
                </h3>

               
                {/* Body */}
                <p style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.92rem",
                  lineHeight: 1.85,
                  margin: 0,
                }}>
                  {card.body}
                </p>

              </div>
            );
          })}
        </div>

        {/* SCHOOL MOTTO */}
        <div
          ref={mottoRef}
          style={{
            background: "#0EA4E921",
            borderLeft: "4px solid #0EA5E9",
            padding: "2rem 2.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            opacity: mottoInView ? 1 : 0,
            transform: mottoInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
          className="motto-flex"
        >
          <Heart size={28} style={{ color: "#0EA5E9", flexShrink: 0 }} />
          <div>
            <p style={{
              fontFamily: "var(--font-ui)",
              color: "#0EA5E9",
              fontSize: "0.68rem",
              fontWeight: 700,
             
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              margin: "0 0 0.4rem 0",
            }}>
              School Motto
            </p>
            <p style={{
              fontFamily: "var(--font-display)",
              color: "#0C2340",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              fontWeight: 800,
              fontStyle: "italic",
              margin: 0,
              lineHeight: 1.3,
            }}>
              "The Future Depends on it"
            </p>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .vm-grid {
            grid-template-columns: 1fr !important;
          }
          .motto-flex {
            flex-direction: column !important;
            text-align: center !important;
            gap: 1rem !important;
          }
        }
      `}</style>

    </section>
  );
}