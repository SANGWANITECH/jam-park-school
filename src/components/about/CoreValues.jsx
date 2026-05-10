"use client";
import { useEffect, useRef, useState } from "react";
import { Star, Shield, Heart, Users, BookOpen, Award } from "lucide-react";

const values = [
  {
    icon: Star,
    title: "Excellence",
    description: "We pursue the highest standards in everything we do — academically, morally and professionally. Mediocrity has no place at Jam Park.",
    color: "#0EA5E9",
  },
  {
    icon: Shield,
    title: "Discipline",
    description: "We believe structure and self-discipline are the foundation of all achievement. Our students are taught to be responsible, punctual and focused.",
    color: "#16A34A",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honesty and moral uprightness are non-negotiable. We raise students who are truthful, fair and consistent in their character.",
    color: "#0EA5E9",
  },
  {
    icon: Users,
    title: "Respect",
    description: "We foster a culture of mutual respect — for teachers, fellow students, parents and the wider community. Every person matters.",
    color: "#16A34A",
  },
  {
    icon: BookOpen,
    title: "Love for Learning",
    description: "We cultivate curiosity, critical thinking and a genuine love for knowledge that extends far beyond the classroom and national examinations.",
    color: "#0EA5E9",
  },
  {
    icon: Award,
    title: "Service",
    description: "We raise students who understand their responsibility to give back. Leadership at Jam Park means serving others with humility and purpose.",
    color: "#16A34A",
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

function ValueCard({ value, index }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);
  const Icon = value.icon;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#0C2340" : "#ffffff",
        border: `1px solid ${hovered ? value.color : "#E5E9EF"}`,
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.7s ease ${index * 0.08}s, transform 0.7s ease ${index * 0.08}s, background 0.3s ease, border-color 0.3s ease`,
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.1)" : "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      {/* Top accent */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: value.color,
        transform: hovered ? "scaleX(1)" : "scaleX(0.4)",
        transformOrigin: "left",
        transition: "transform 0.4s ease",
      }} />

      {/* Icon */}
      <div style={{
        width: "48px",
        height: "48px",
        background: hovered
          ? `rgba(${value.color === "#0EA5E9" ? "14,165,233" : "22,163,74"}, 0.15)`
          : `rgba(${value.color === "#0EA5E9" ? "14,165,233" : "22,163,74"}, 0.08)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1.25rem",
        transition: "background 0.3s ease",
      }}>
        <Icon size={20} style={{ color: value.color }} />
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "var(--font-display)",
        color: hovered ? "#ffffff" : "#0C2340",
        fontWeight: 700,
        fontSize: "1.1rem",
        margin: "0 0 0.75rem 0",
        transition: "color 0.3s ease",
      }}>
        {value.title}
      </h3>

      {/* Divider */}
      <div style={{
        width: "28px",
        height: "2px",
        background: value.color,
        marginBottom: "0.85rem",
      }} />

      {/* Description */}
      <p style={{
        fontFamily: "var(--font-body)",
        color: hovered ? "rgba(255,255,255,0.68)" : "#6B7280",
        fontSize: "0.87rem",
        lineHeight: 1.8,
        margin: 0,
        transition: "color 0.3s ease",
      }}>
        {value.description}
      </p>

    </div>
  );
}

export default function CoreValues() {
  const [headerRef, headerInView] = useInView(0.1);

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
            What We Believe
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
            Our Core Values
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            color: "rgba(255,255,255,0.55)",
            fontSize: "0.97rem",
            lineHeight: 1.8,
            margin: "0 auto",
            maxWidth: "500px",
          }}>
            These six values are the backbone of everything we do at Jam Park — from how we teach to how we treat one another every single day.
          </p>
        </div>

        {/* VALUES GRID */}
        <div
          className="values-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }}
        >
          {values.map((value, i) => (
            <ValueCard key={i} value={value} index={i} />
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .values-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .values-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>

    </section>
  );
}