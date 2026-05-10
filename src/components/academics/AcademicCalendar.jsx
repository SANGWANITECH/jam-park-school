"use client";
import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, Award } from "lucide-react";

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

const terms = [
  {
    term: "Term 1",
    period: "22nd September — 19th December",
    weeks: "13 weeks",
    status: "Completed",
    color: "#0EA5E9",
    highlight: "JCE & MSCE Revision & Examinations Begin",
  },
  {
    term: "Term 2",
    period: "5th January — 2nd April",
    weeks: "13 weeks",
    status: "completed",
    color: "#16A34A",
    highlight: "Mid-year Assessments",
  },
  {
    term: "Term 3",
    period: "20th April — 24th July",
    weeks: "14 weeks",
    status: "ongoing",
    color: "#8B5CF6",
    highlight: "Final Examinations (MSCE & JCE)",
  },
];

export default function AcademicCalendar() {
  const [headerRef, headerInView] = useInView(0.1);
  const [calendarRef, calendarInView] = useInView(0.15);

  return (
    <section id="calendar" style={{ background: "#ffffff", padding: "6rem 0" }}>
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
            Academic Calendar 2025/2026
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
            Official Malawi National Calendar
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "#6B7280",
              fontSize: "1rem",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Jam Park Private Secondary School fully adheres to the official academic calendar released by the Ministry of Basic and Secondary Education.
          </p>
        </div>

        {/* Terms Grid */}
        <div
          ref={calendarRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            opacity: calendarInView ? 1 : 0,
            transform: calendarInView ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.9s ease",
          }}
        >
          {terms.map((term, index) => (
            <div
              key={index}
              style={{
                border: `1px solid #E2E8F0`,
                borderRadius: "12px",
                padding: "2.5rem 2rem",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = term.color;
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E2E8F0";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Accent Bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "5px",
                  background: term.color,
                }}
              />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.45rem",
                      fontWeight: 700,
                      color: "#0C2340",
                      margin: 0,
                    }}
                  >
                    {term.term}
                  </h3>
                  <p style={{ color: term.color, fontWeight: 600, margin: "0.25rem 0 0 0", fontSize: "0.95rem" }}>
                    {term.weeks}
                  </p>
                </div>

                <div
                  style={{
                    padding: "0.35rem 0.9rem",
                    background: term.status === "Ongoing" ? "#16A34A15" : "#64748B15",
                    color: term.status === "Ongoing" ? "#16A34A" : "#64748B",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    borderRadius: "9999px",
                  }}
                >
                  {term.status}
                </div>
              </div>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#1E2937",
                  fontWeight: 500,
                  marginBottom: "1.25rem",
                }}
              >
                {term.period}
              </p>

              <div
                style={{
                  padding: "1rem",
                  background: "#F8FAFC",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  color: "#475569",
                  borderLeft: `4px solid ${term.color}`,
                }}
              >
                {term.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div
          style={{
            marginTop: "4rem",
            padding: "2rem",
            background: "#F0F9FF",
            borderRadius: "12px",
            borderLeft: "6px solid #0EA5E9",
          }}
        >
          <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <Calendar size={28} style={{ color: "#0EA5E9", marginTop: "4px" }} />
            <div>
              <h4 style={{ margin: "0 0 0.75rem 0", color: "#0C2340", fontWeight: 700 }}>
                Important Information
              </h4>
              <p style={{ margin: 0, color: "#334155", lineHeight: 1.75 }}>
                All national examinations (JCE and MSCE) are conducted by MANEB. Exact examination dates are communicated by MANEB during each academic year. Parents and students are advised to regularly check official announcements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}