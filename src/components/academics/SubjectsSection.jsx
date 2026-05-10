"use client";
import { useEffect, useRef, useState } from "react";
import { Book, Microscope, Users, Globe, Calculator, Award } from "lucide-react";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

const subjectCategories = [
  {
    icon: Microscope,
    title: "Sciences",
    color: "#0EA5E9",
    subjects: [
      "Mathematics",
      "Biology",
      "Chemistry",
      "Physics",
      "Agriculture",
      "computer Studies",
    ],
    note: "Strong emphasis on practical experiments and critical thinking",
  },
  {
    icon: Globe,
    title: "Humanities & Social Studies",
    color: "#16A34A",
    subjects: [
      "History",
      "Geography",
      "Social Studies",
      "Life Skills",
      "Religious Education",
    ],
    note: "Building responsible and culturally aware citizens",
  },
  {
    icon: Book,
    title: "Languages",
    color: "#8B5CF6",
    subjects: [
      "English",
      "Chichewa",
      "French (Optional)",
    ],
    note: "Focus on communication, literature & comprehension",
  },
 
];

export default function SubjectsSection() {
  const [headerRef, headerInView] = useInView(0.1);
  const [gridRef, gridInView] = useInView(0.15);

  return (
    <section id="subjects" style={{ background: "#F8FAFC", padding: "6rem 0" }}>
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.7s ease",
          }}
        >
          <span
            style={{
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
              borderRadius: "4px",
            }}
          >
            Subjects Offered
          </span>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              color: "#0C2340",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4.2vw, 2.85rem)",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            Comprehensive Curriculum
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "#6B7280",
              fontSize: "1rem",
              maxWidth: "620px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            We follow the official Malawi National Curriculum while maintaining high academic standards and practical relevance.
          </p>
        </div>

        {/* Subjects Grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.75rem",
            opacity: gridInView ? 1 : 0,
            transform: gridInView ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.8s ease",
          }}
        >
          {subjectCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                style={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  padding: "2.25rem 2rem",
                  boxShadow: "0 4px 25px rgba(0,0,0,0.06)",
                  borderTop: `4px solid ${category.color}`,
                  transition: "all 0.3s ease",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 25px rgba(0,0,0,0.06)";
                }}
              >
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    background: `${category.color}15`,
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <Icon size={28} style={{ color: category.color }} />
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#0C2340",
                    marginBottom: "1rem",
                  }}
                >
                  {category.title}
                </h3>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0" }}>
                  {category.subjects.map((subject, i) => (
                    <li
                      key={i}
                      style={{
                        padding: "0.45rem 0",
                        borderBottom: i !== category.subjects.length - 1 ? "1px solid #F1F5F9" : "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        color: "#374151",
                        fontSize: "0.95rem",
                      }}
                    >
                      <Award size={16} style={{ color: category.color, flexShrink: 0 }} />
                      {subject}
                    </li>
                  ))}
                </ul>

                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#64748B",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                  }}
                >
                  {category.note}
                </p>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div
          style={{
            marginTop: "3.5rem",
            padding: "1.75rem 2rem",
            background: "#F0F9FF",
            borderLeft: "5px solid #0EA5E9",
            borderRadius: "8px",
          }}
        >
          <p style={{ margin: 0, color: "#1E40AF", fontSize: "0.95rem", lineHeight: 1.7 }}>
            <strong>Note:</strong> English and Mathematics are compulsory at all levels. Students in Form 3 & 4 choose additional subjects based on their strengths and career aspirations.
          </p>
        </div>
      </div>
    </section>
  );
}