"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

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

export default function AdmissionsCTA() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      style={{
        position: "relative",
        background: "#0EA5E9",
        padding: "5rem 0",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, rgba(12,35,64,0.15) 0%, transparent 50%)`,
          zIndex: 0,
        }}
      />

      {/* Top border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(to right, #0C2340, #16A34A, #0C2340)",
          zIndex: 1,
        }}
      />

      {/* Bottom border */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(to right, #0C2340, #16A34A, #0C2340)",
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          ref={ref}
          className="cta-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "3rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* LEFT */}
          <div>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "0.35rem 1rem",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#ffffff",
                  animation: "pulse 2s infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  color: "#ffffff",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Now Enrolling — 2026 Intake
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "#ffffff",
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                lineHeight: 1.1,
                margin: "0 0 1rem 0",
                letterSpacing: "-0.01em",
              }}
            >
              Begin Your Journey
              <br />
              <span style={{ color: "#0C2340" }}>
                at Jam Park Today
              </span>
            </h2>

            {/* Text */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(255,255,255,0.85)",
                fontSize: "1rem",
                lineHeight: 1.8,
                margin: "0 0 1.75rem 0",
                maxWidth: "520px",
              }}
            >
              Applications are now open for Form 1 intake. Secure your child's
              place at one of Lilongwe's leading private secondary schools.
              Limited spaces available.
            </p>

            {/* Contact links */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
              }}
            >
              <a
                href="tel:+265991627231"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#ffffff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    "rgba(255,255,255,0.85)")
                }
              >
                <Phone size={14} /> +265 99 162 7231
              </a>

              <a
                href="mailto:sylesscef@yahoo.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#ffffff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    "rgba(255,255,255,0.85)")
                }
              >
                <Mail size={14} />sylesscef@yahoo.com
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              minWidth: "200px",
            }}
          >
            <Link
              href="/admissions"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                background: "#0C2340",
                color: "#ffffff",
                padding: "1rem 2rem",
                fontFamily: "var(--font-ui)",
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "2px solid #0C2340",
                transition: "all 0.25s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#0C2340";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0C2340";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              Apply Now <ArrowRight size={15} />
            </Link>

            <Link
              href="/admissions#requirements"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                background: "transparent",
                color: "#ffffff",
                padding: "1rem 2rem",
                fontFamily: "var(--font-ui)",
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.5)",
                transition: "all 0.25s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ffffff";
                e.currentTarget.style.background =
                  "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.5)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Entry Requirements
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @media (max-width: 768px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}