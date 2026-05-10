"use client";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, Shield, Globe } from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "We maintain the highest academic standards through a rigorous curriculum, experienced teachers, and a culture of continuous improvement. Our students consistently perform well in JCE and MSCE national examinations.",
    color: "#0EA5E9",
    number: "01",
  },
  {
    icon: Shield,
    title: "Discipline & Character",
    description:
      "We believe education goes beyond books. We instill strong moral values, respect, integrity, and personal responsibility in every student — shaping not just scholars but exceptional human beings.",
    color: "#16A34A",
    number: "02",
  },
  {
    icon: Globe,
    title: "Community & Service",
    description:
      "Our students are raised to be responsible citizens. Through community service, leadership programmes, and civic engagement, we prepare young people to give back and lead with purpose.",
    color: "#0EA5E9",
    number: "03",
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

export default function Pillars() {
  const [headerRef, headerInView] = useInView(0.1);
  const [card0Ref, card0InView] = useInView(0.1);
  const [card1Ref, card1InView] = useInView(0.1);
  const [card2Ref, card2InView] = useInView(0.1);

  const cardRefs = [
    [card0Ref, card0InView],
    [card1Ref, card1InView],
    [card2Ref, card2InView],
  ];

  return (
    <section style={{ background: "#0C2340", padding: "6rem 0", overflow: "hidden" }}>
      <div className="container">

        {/* HEADER */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
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
            What We Stand For
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            color: "#ffffff",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            lineHeight: 1.15,
            margin: "0 auto 1rem auto",
            maxWidth: "550px",
          }}>
            Our Three Pillars of Excellence
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            color: "rgba(255,255,255,0.55)",
            fontSize: "0.97rem",
            lineHeight: 1.8,
            margin: "0 auto",
            maxWidth: "520px",
          }}>
            Everything we do at Jam Park is guided by three core pillars that define who we are and what we stand for as an institution.
          </p>
        </div>

        {/* CARDS — each has its own ref for individual triggering on mobile */}
        <div
          className="pillars-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const [ref, inView] = cardRefs[i];
            return (
              <div
                key={i}
                ref={ref}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "2.5rem",
                  position: "relative",
                  overflow: "hidden",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0) scale(1)" : "translateY(80px) scale(0.95)",
                  transition: `opacity 0.8s ease, transform 0.8s ease`,
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.borderColor = pillar.color;
                  e.currentTarget.style.transform = "translateY(-6px) scale(1)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                }}
              >
                {/* Big number watermark */}
                <div style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1.5rem",
                  fontFamily: "var(--font-display)",
                  color: "rgba(255,255,255,0.04)",
                  fontSize: "5rem",
                  fontWeight: 900,
                  lineHeight: 1,
                  userSelect: "none",
                }}>
                  {pillar.number}
                </div>

                {/* Top border accent */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: pillar.color,
                }} />

                {/* Icon */}
                <div style={{
                  width: "56px",
                  height: "56px",
                  background: `rgba(${pillar.color === "#0EA5E9" ? "14,165,233" : "22,163,74"}, 0.12)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  border: `1px solid rgba(${pillar.color === "#0EA5E9" ? "14,165,233" : "22,163,74"}, 0.25)`,
                }}>
                  <Icon size={24} style={{ color: pillar.color }} />
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  lineHeight: 1.3,
                  margin: "0 0 1rem 0",
                }}>
                  {pillar.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.9rem",
                  lineHeight: 1.85,
                  margin: 0,
                }}>
                  {pillar.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>

    </section>
  );
}