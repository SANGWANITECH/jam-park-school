"use client";
import { useEffect, useRef, useState } from "react";
import { BookOpen, GraduationCap, CheckCircle } from "lucide-react";

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

const levels = [
  {
    icon: BookOpen,
    color: "#0EA5E9",
    badge: "Form 1 & 2",
    title: "Junior Certificate of Education (JCE)",
    description: "The JCE programme covers the first two years of secondary school — Form 1 and Form 2. Students study a broad range of compulsory subjects that build a strong academic foundation across sciences, humanities, languages and mathematics.",
    points: [
      "Duration: 2 years (Form 1 — Form 2)",
      "Examined by MANEB at the end of Form 2",
      "All subjects are compulsory at this level",
      "Results determine progression to MSCE",
      "Foundation for all future academic pathways",
    ],
    bg: "#0C2340",
  },
  {
    icon: GraduationCap,
    color: "#16A34A",
    badge: "Form 3 & 4",
    title: "Malawi School Certificate of Education (MSCE)",
    description: "The MSCE programme covers Form 3 and Form 4 — the final two years of secondary school. Students sit national examinations set and marked by MANEB. The MSCE certificate is the primary qualification for entry into tertiary education in Malawi.",
    points: [
      "Duration: 2 years (Form 3 — Form 4)",
      "Examined by MANEB at the end of Form 4",
      "Students select optional subjects at this level",
      "Minimum 6 credits required for university entry",
      "Gateway to colleges and universities in Malawi",
    ],
    bg: "#0EA5E9",
  },
];

export default function CurriculumOverview() {
  const [headerRef, headerInView] = useInView(0.1);
  const [card0Ref, card0InView] = useInView(0.1);
  const [card1Ref, card1InView] = useInView(0.1);
  const [bottomRef, bottomInView] = useInView(0.1);

  const cardRefs = [[card0Ref, card0InView], [card1Ref, card1InView]];

  return (
    <section
      id="curriculum"
      style={{ background: "#ffffff", padding: "6rem 0", overflow: "hidden" }}
    >
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
            Curriculum Overview
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            color: "#0C2340",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            lineHeight: 1.15,
            margin: "0 auto 1rem auto",
            maxWidth: "600px",
          }}>
            Two Levels. One Strong Foundation.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            color: "#6B7280",
            fontSize: "0.97rem",
            lineHeight: 1.8,
            margin: "0 auto",
            maxWidth: "560px",
          }}>
            Jam Park offers the full Malawi National Curriculum at both JCE and MSCE level — giving every student a complete, nationally recognised secondary education.
          </p>
        </div>

        {/* LEVEL CARDS */}
        <div
          className="curriculum-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          {levels.map((level, i) => {
            const Icon = level.icon;
            const [ref, inView] = cardRefs[i];
            return (
              <div
                key={i}
                ref={ref}
                style={{
                  background: level.bg,
                  padding: "3rem",
                  position: "relative",
                  overflow: "hidden",
                  opacity: inView ? 1 : 0,
                  transform: inView
                    ? "translateY(0)"
                    : "translateY(60px)",
                  transition: `opacity 0.8s ease ${i * 0.15}s, transform 0.8s ease ${i * 0.15}s`,
                }}
              >
                {/* Top accent */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: level.color,
                }} />

                {/* Watermark */}
                <div style={{
                  position: "absolute",
                  bottom: "-10px",
                  right: "1rem",
                  fontFamily: "var(--font-display)",
                  color: "rgba(255,255,255,0.04)",
                  fontSize: "7rem",
                  fontWeight: 900,
                  lineHeight: 1,
                  userSelect: "none",
                }}>
                  {i === 0 ? "JCE" : "MSCE"}
                </div>

                {/* Badge */}
                <span style={{
                  display: "inline-block",
                  background: level.color,
                  color: "#ffffff",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "0.3rem 0.85rem",
                  marginBottom: "1.5rem",
                }}>
                  {level.badge}
                </span>

                {/* Icon */}
                <div style={{
                  width: "54px",
                  height: "54px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}>
                  <Icon size={24} style={{ color: "#ffffff" }} />
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  lineHeight: 1.3,
                  margin: "0 0 1rem 0",
                }}>
                  {level.title}
                </h3>

                

                {/* Description */}
                <p style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "0.9rem",
                  lineHeight: 1.85,
                  margin: "0 0 1.75rem 0",
                }}>
                  {level.description}
                </p>

                {/* Points */}
                <ul style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}>
                  {level.points.map((point, j) => (
                    <li key={j} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      fontFamily: "var(--font-ui)",
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.84rem",
                      lineHeight: 1.5,
                    }}>
                      <CheckCircle size={14} style={{ color: level.color, flexShrink: 0, marginTop: "2px" }} />
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}
        </div>

        {/* MANEB NOTE */}
        <div
          ref={bottomRef}
          style={{
            background: "#B8BFC5",
            borderLeft: "4px solid #0EA5E9",
            padding: "1.75rem 2rem",
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            opacity: bottomInView ? 1 : 0,
            transform: bottomInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          <div style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#0EA5E9",
            flexShrink: 0,
            marginTop: "6px",
          }} />
          <p style={{
            fontFamily: "var(--font-body)",
            color: "#374151",
            fontSize: "0.9rem",
            lineHeight: 1.8,
            margin: 0,
          }}>
            All examinations at Jam Park Private Secondary School are administered by the <strong>Malawi National Examinations Board (MANEB)</strong> — the national body responsible for setting, administering and marking all public examinations in Malawi. Our curriculum is fully aligned with the national syllabus.
          </p>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .curriculum-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </section>
  );
}