"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const photos = [
  {
    src: "/images/libray.jpeg",
    category: "Library",
    title: "A Culture of Reading",
    size: "tall", // spans 2 rows
  },
  {
    src: "/images/sports.jpeg",
    category: "Sports",
    title: "Football & Athletics",
    size: "normal",
  },
  {
    src: "/images/lab.jpeg",
    category: "Laboratory",
    title: "Science in Action",
    size: "normal",
  },
  {
    src: "/images/all.jpeg",
    category: "School Life",
    title: "Together We Grow",
    size: "wide", // spans 2 columns
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

function PhotoCard({ photo, index }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        gridColumn: photo.size === "wide" ? "span 2" : "span 1",
        gridRow: photo.size === "tall" ? "span 2" : "span 1",
        aspectRatio: photo.size === "wide" ? "16/7" : photo.size === "tall" ? "auto" : "4/3",
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.95)",
        transition: `opacity 0.8s ease ${index * 0.12}s, transform 0.8s ease ${index * 0.12}s`,
        cursor: "pointer",
        background: "#0C2340",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${photo.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.6s ease",
        }}
      />

      {/* Gradient overlay — always visible at bottom */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: hovered
          ? "linear-gradient(to top, rgba(12,35,64,0.92) 20%, rgba(12,35,64,0.4) 50%, rgba(12,35,64,0.1) 100%)"
          : "linear-gradient(to top, rgba(12,35,64,0.85) 30%, rgba(12,35,64,0.2) 60%, transparent 100%)",
        transition: "background 0.4s ease",
      }} />

      {/* Right shadow */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to left, rgba(12,35,64,0.3) 0%, transparent 40%)",
      }} />

      {/* Category tag — top left */}
      <div style={{
        position: "absolute",
        top: "1.25rem",
        left: "1.25rem",
        background: "#0EA5E9",
        color: "#ffffff",
        fontFamily: "var(--font-ui)",
        fontSize: "0.62rem",
        fontWeight: 700,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        padding: "0.3rem 0.75rem",
        zIndex: 2,
      }}>
        {photo.category}
      </div>

      {/* Bottom content */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "1.5rem",
        zIndex: 2,
      }}>
        <h3 style={{
          fontFamily: "var(--font-display)",
          color: "#ffffff",
          fontWeight: 700,
          fontSize: photo.size === "wide" ? "1.3rem" : "1.1rem",
          margin: "0 0 0.75rem 0",
          lineHeight: 1.3,
          textShadow: "0 2px 10px rgba(0,0,0,0.3)",
          transform: hovered ? "translateY(0)" : "translateY(4px)",
          transition: "transform 0.4s ease",
        }}>
          {photo.title}
        </h3>

        {/* Explore link — appears on hover */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          fontFamily: "var(--font-ui)",
          color: "#7DD3FC",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}>
          Explore <ArrowRight size={13} />
        </div>
      </div>

    </div>
  );
}

export default function SchoolLife() {
  const [headerRef, headerInView] = useInView(0.1);
  const [ctaRef, ctaInView] = useInView(0.1);

  return (
    <section style={{ background: "#0C2340", padding: "6rem 0", overflow: "hidden" }}>
      <div className="container">

        {/* HEADER */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
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
            School Life
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
            Life Beyond the Classroom
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            color: "rgba(255,255,255,0.55)",
            fontSize: "0.97rem",
            lineHeight: 1.8,
            margin: "0 auto",
            maxWidth: "500px",
          }}>
            At Jam Park, education is about the whole student. From the laboratory to the football pitch — we invest in every dimension of your child's growth.
          </p>
        </div>

        {/* PHOTO GRID */}
        <div
          className="schoollife-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "300px 250px",
            gap: "0.75rem",
            marginBottom: "3rem",
          }}
        >
          {photos.map((photo, i) => (
            <PhotoCard key={i} photo={photo} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          style={{
            textAlign: "center",
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          <Link
            href="/school-life"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "transparent",
              color: "#ffffff",
              padding: "0.9rem 2.25rem",
              fontFamily: "var(--font-ui)",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "2px solid rgba(255,255,255,0.3)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#0EA5E9"; e.currentTarget.style.color = "#0EA5E9"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#ffffff"; }}
          >
            Explore School Life <ArrowRight size={15} />
          </Link>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .schoollife-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
            gap: 0.75rem !important;
          }
          .schoollife-grid > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            aspect-ratio: 4/3 !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .schoollife-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: auto !important;
          }
        }
      `}</style>

    </section>
  );
}