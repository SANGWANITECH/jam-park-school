"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "Fully registered with the Malawi National Examinations Board (MANEB)",
  "Experienced and qualified teaching staff",
  "Strong academic track record in MSCE & JCE examinations",
  "Safe, disciplined and conducive learning environment",
];

function useInView(threshold = 0.15) {
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

export default function About() {
  const [sectionRef, sectionInView] = useInView(0.1);
  const [imgRef, imgInView] = useInView(0.1);
  const [contentRef, contentInView] = useInView(0.1);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#ffffff", padding: "6rem 0", overflow: "hidden" }}
    >
      <div className="container">

        {/* SECTION HEADER — centered, modern */}
        <div style={{
          textAlign: "center",
          marginBottom: "4rem",
          opacity: sectionInView ? 1 : 0,
          transform: sectionInView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
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
            borderRadius: "2px",
            marginBottom: "1rem",
          }}>
            About Us
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
            A Premier Institution Built on Excellence
          </h2>
          <div style={{
            width: "50px",
            height: "3px",
            background: "#0EA5E9",
            margin: "0 auto",
          }} />
        </div>

        {/* MAIN CONTENT GRID */}
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >

          {/* LEFT — IMAGE */}
          <div
            ref={imgRef}
            style={{
              opacity: imgInView ? 1 : 0,
              transform: imgInView ? "translateX(0)" : "translateX(-50px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <div style={{ position: "relative" }}>

              {/* Main image */}
              <div style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/5",
                overflow: "hidden",
                boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
              }}>
                <Image
                  src="/images/about1.jpeg"
                  alt="Students at Jam Park Private Secondary School"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>

              {/* Floating card — bottom right */}
              <div style={{
                position: "absolute",
                bottom: "-1.5rem",
                right: "-1.5rem",
                background: "#0C2340",
                padding: "1.5rem",
                boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                borderTop: "3px solid #0EA5E9",
                minWidth: "160px",
                textAlign: "center",
              }}>
                <p style={{
                  fontFamily: "var(--font-display)",
                  color: "#ffffff",
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  margin: 0,
                  lineHeight: 1,
                }}>
                  4<span style={{ color: "#0EA5E9" }}>+</span>
                </p>
                <p style={{
                  fontFamily: "var(--font-ui)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  margin: "0.5rem 0 0 0",
                  lineHeight: 1.6,
                }}>
                  Years of<br />Excellence
                </p>
              </div>

              {/* Top left accent */}
              <div style={{
                position: "absolute",
                top: "-12px",
                left: "-12px",
                width: "80px",
                height: "80px",
                border: "3px solid #0EA5E9",
                zIndex: -1,
              }} />

            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div
            ref={contentRef}
            style={{
              opacity: contentInView ? 1 : 0,
              transform: contentInView ? "translateX(0)" : "translateX(50px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <p style={{
              fontFamily: "var(--font-body)",
              color: "#4B5563",
              fontSize: "0.97rem",
              lineHeight: 1.9,
              margin: "0 0 1.25rem 0",
            }}>
              Jam Park Private Secondary School is a leading private institution located in Area 25, Sector 5B, Lilongwe. Since our establishment, we have been committed to providing quality education that prepares students for national examinations and for life beyond the classroom.
            </p>

            <p style={{
              fontFamily: "var(--font-body)",
              color: "#4B5563",
              fontSize: "0.97rem",
              lineHeight: 1.9,
              margin: "0 0 2rem 0",
            }}>
              We combine rigorous academic instruction with strong moral values, discipline, and character formation — ensuring every student leaves as a well-rounded individual ready to contribute meaningfully to society.
            </p>

            {/* Highlights */}
            <ul style={{
              listStyle: "none",
              margin: "0 0 2.5rem 0",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}>
              {highlights.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    opacity: contentInView ? 1 : 0,
                    transform: contentInView ? "translateX(0)" : "translateX(20px)",
                    transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${0.3 + i * 0.1}s`,
                  }}
                >
                  <CheckCircle size={16} style={{ color: "#16A34A", flexShrink: 0, marginTop: "3px" }} />
                  <span style={{
                    fontFamily: "var(--font-ui)",
                    color: "#374151",
                    fontSize: "0.88rem",
                    lineHeight: 1.65,
                  }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Two stats inline */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "2.5rem",
              padding: "1.5rem",
              background: "#F8FAFC",
              borderLeft: "3px solid #0EA5E9",
            }}>
              <div>
                <p style={{ fontFamily: "var(--font-display)", color: "#0C2340", fontSize: "1.8rem", fontWeight: 900, margin: 0, lineHeight: 1 }}>
                  400<span style={{ color: "#0EA5E9", fontSize: "1.1rem" }}>+</span>
                </p>
                <p style={{ fontFamily: "var(--font-ui)", color: "#6B7280", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0.4rem 0 0 0" }}>
                  Students
                </p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-display)", color: "#0C2340", fontSize: "1.8rem", fontWeight: 900, margin: 0, lineHeight: 1 }}>
                  94<span style={{ color: "#0EA5E9", fontSize: "1.1rem" }}>%</span>
                </p>
                <p style={{ fontFamily: "var(--font-ui)", color: "#6B7280", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0.4rem 0 0 0" }}>
                  MSCE Pass Rate
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#0C2340",
                color: "#ffffff",
                padding: "0.9rem 2rem",
                fontFamily: "var(--font-ui)",
                fontWeight: 700,
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.25s ease",
                border: "2px solid #0C2340",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#0EA5E9"; e.currentTarget.style.borderColor = "#0EA5E9"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#0C2340"; e.currentTarget.style.borderColor = "#0C2340"; }}
            >
              Read More About Us <ArrowRight size={15} />
            </Link>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>

    </section>
  );
}
