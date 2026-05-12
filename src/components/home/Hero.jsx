"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slides = [
  "/images/student1.jpeg",
  "/images/student2.jpeg",
  "/images/student3.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    let timeoutId;
    const checkSize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 100);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const heroHeight = isMobile ? "70vh" : "88vh";
  const navOffset = isMobile ? "72px" : "105px";

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: heroHeight,
        minHeight: isMobile ? "70vh" : "620px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        marginTop: navOffset,
      }}
    >

      {/* SLIDESHOW */}
      {slides.map((src, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
            zIndex: 0,
          }}
        />
      ))}

      {/* DARK OVERLAY */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(7, 24, 41, 0.78)",
        zIndex: 1,
      }} />

      {/* BOTTOM ACCENT */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: "linear-gradient(to right, #0EA5E9, #16A34A)",
        zIndex: 3,
      }} />

      {/* CONTENT */}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: isMobile ? "100%" : "620px" }}>

          <h1 style={{
            fontFamily: "var(--font-display)",
            color: "#ffffff",
            fontWeight: 900,
            fontSize: isMobile ? "2.4rem" : "clamp(3.2rem, 6vw, 5rem)",
            lineHeight: 1.05,
            margin: "0 0 0.85rem 0",
            letterSpacing: "-0.02em",
          }}>
            Jam Park<br />
            <span style={{ color: "#0EA5E9" }}>Private</span> Secondary School
          </h1>

          <p style={{
            fontFamily: "var(--font-display)",
            color: "rgba(255,255,255,0.85)",
            fontSize: isMobile ? "1rem" : "clamp(1.1rem, 2.5vw, 1.5rem)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.5,
            margin: isMobile ? "0 0 1.5rem 0" : "0 0 2rem 0",
          }}>
            The future depends on it
          </p>

          {/* BUTTONS */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link
              href="/admissions"
              style={{
                flex: isMobile ? "1" : "0 0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                background: "#0EA5E9",
                color: "#ffffff",
                padding: isMobile ? "0.85rem 1.25rem" : "1rem 2.25rem",
                fontFamily: "var(--font-ui)",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.25s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#0284C7")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0EA5E9")}
            >
              Apply Now <ArrowRight size={16} />
            </Link>

            <Link
              href="/about"
              style={{
                flex: isMobile ? "1" : "0 0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                background: "transparent",
                color: "#ffffff",
                padding: isMobile ? "0.85rem 1.25rem" : "1rem 2.25rem",
                fontFamily: "var(--font-ui)",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.6)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#fff";
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Learn More
            </Link>
          </div>

        </div>
      </div>

      {/* SLIDE DOTS */}
      <div style={{
        position: "absolute",
        bottom: "2rem",
        right: "2rem",
        zIndex: 3,
        display: "flex",
        gap: "0.6rem",
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              borderRadius: "9999px",
              background: i === current ? "#0EA5E9" : "rgba(255,255,255,0.5)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.35s ease",
            }}
          />
        ))}
      </div>

    </section>
  );
}