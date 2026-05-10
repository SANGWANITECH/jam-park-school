"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Microscope, BookOpen, Calculator, Globe2 } from "lucide-react";

const subjects = [
  {
    icon: Microscope,
    title: "Sciences",
    color: "#0EA5E9",
    courses: ["Biology", "Chemistry", "Physics", "Agriculture"],
  },
  {
    icon: BookOpen,
    title: "Humanities",
    color: "#16A34A",
    courses: ["History", "Geography", "Bible Knowledge", "Chichewa"],
  },
  {
    icon: Calculator,
    title: "Mathematics",
    color: "#0EA5E9",
    courses: ["Mathematics", "Additional Mathematics", " Computer studies"],
  },
  {
    icon: Globe2,
    title: "Languages",
    color: "#16A34A",
    courses: ["English Language", "English Literature", "French"],
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

function SubjectCard({ subject, index }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);
  const Icon = subject.icon;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#ffffff" : "#0C2340",
        border: `1px solid ${hovered ? subject.color : "rgba(255,255,255,0.08)"}`,
        padding: "2.25rem",
        position: "relative",
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(60px) scale(0.96)",
        transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s, background 0.3s ease, border-color 0.3s ease`,
        cursor: "default",
        boxShadow: hovered ? "0 20px 50px rgba(0,0,0,0.12)" : "none",
      }}
    >
      {/* Top color bar */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: subject.color,
      }} />

      {/* Watermark number */}
      <div style={{
        position: "absolute",
        bottom: "-10px",
        right: "1rem",
        fontFamily: "var(--font-display)",
        color: hovered ? "rgba(12,35,64,0.06)" : "rgba(255,255,255,0.04)",
        fontSize: "6rem",
        fontWeight: 900,
        lineHeight: 1,
        userSelect: "none",
        transition: "color 0.3s ease",
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Icon box */}
      <div style={{
        width: "52px",
        height: "52px",
        background: hovered
          ? `rgba(${subject.color === "#0EA5E9" ? "14,165,233" : "22,163,74"}, 0.1)`
          : `rgba(${subject.color === "#0EA5E9" ? "14,165,233" : "22,163,74"}, 0.12)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1.25rem",
        border: `1px solid rgba(${subject.color === "#0EA5E9" ? "14,165,233" : "22,163,74"}, 0.25)`,
        transition: "background 0.3s ease",
      }}>
        <Icon size={22} style={{ color: subject.color }} />
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "var(--font-display)",
        color: hovered ? "#0C2340" : "#ffffff",
        fontWeight: 700,
        fontSize: "1.15rem",
        margin: "0 0 1rem 0",
        transition: "color 0.3s ease",
      }}>
        {subject.title}
      </h3>

      {/* Divider */}
      <div style={{
        width: "30px",
        height: "2px",
        background: subject.color,
        marginBottom: "1rem",
        transition: "width 0.3s ease",
      }} />

      {/* Course list */}
      <ul style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}>
        {subject.courses.map((course, i) => (
          <li key={i} style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            fontFamily: "var(--font-ui)",
            color: hovered ? "#4B5563" : "rgba(255,255,255,0.65)",
            fontSize: "0.83rem",
            lineHeight: 1.5,
            transition: "color 0.3s ease",
          }}>
            <div style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: subject.color,
              flexShrink: 0,
            }} />
            {course}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default function Academics() {
  const [headerRef, headerInView] = useInView(0.1);
  const [bottomRef, bottomInView] = useInView(0.1);

  return (
    <section style={{ background: "#F8FAFC", padding: "6rem 0", overflow: "hidden" }}>
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
            Academics
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
            A Comprehensive Curriculum for Every Student
          </h2>

          <p style={{
            fontFamily: "var(--font-body)",
            color: "#6B7280",
            fontSize: "0.97rem",
            lineHeight: 1.8,
            margin: "0 auto",
            maxWidth: "560px",
          }}>
            We offer a broad and balanced curriculum aligned with the Malawi National Curriculum — covering sciences, humanities, languages and mathematics at both JCE and MSCE level.
          </p>
        </div>

        {/* CARDS */}
        <div
          className="academics-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.25rem",
            marginBottom: "3.5rem",
          }}
        >
          {subjects.map((subject, i) => (
            <SubjectCard key={i} subject={subject} index={i} />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div
          ref={bottomRef}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            opacity: bottomInView ? 1 : 0,
            transform: bottomInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            width: "100%",
            maxWidth: "420px",
          }}>
            <div style={{ flex: 1, height: "1px", background: "#E5E9EF" }} />
            <span style={{
              fontFamily: "var(--font-ui)",
              color: "#9CA3AF",
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}>
              JCE & MSCE Programmes
            </span>
            <div style={{ flex: 1, height: "1px", background: "#E5E9EF" }} />
          </div>

          <Link
            href="/academics"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#0C2340",
              color: "#ffffff",
              padding: "0.9rem 2.25rem",
              fontFamily: "var(--font-ui)",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "2px solid #0C2340",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#0EA5E9"; e.currentTarget.style.borderColor = "#0EA5E9"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#0C2340"; e.currentTarget.style.borderColor = "#0C2340"; }}
          >
            View Full Curriculum <ArrowRight size={15} />
          </Link>
        </div>

      </div>

      <style>{`
       @media (max-width: 640px) {
  .academics-grid {
    grid-template-columns: 1fr !important;
    gap: 1rem !important;
  }
}
        @media (min-width: 641px) and (max-width: 1024px) {
          .academics-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>

    </section>
  );
}