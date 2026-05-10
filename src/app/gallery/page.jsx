"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, X, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";

const images = [
  { src: "/images/gallery1.jpeg", category: "School Life", title: "Students at Jam Park" },
  { src: "/images/gallery2.jpeg", category: "Sports", title: "Football in Action" },
  { src: "/images/gallery3.jpeg", category: "Library", title: "A Culture of Reading" },
  { src: "/images/gallery4.jpeg", category: "Laboratory", title: "Science in Action" },
  { src: "/images/gallery5.jpeg", category: "Clubs", title: "SCOM Fellowship" },
  { src: "/images/gallery6.jpeg", category: "Sports", title: "Netball Team" },
  { src: "/images/gallery7.jpeg", category: "Clubs", title: "Wildlife Club" },
  { src: "/images/gallery8.jpeg", category: "Clubs", title: "Innovation Hub" },
  { src: "/images/gallery9.jpeg", category: "School Life", title: "Prize Giving Day" },
  { src: "/images/gallery10.jpeg", category: "School Life", title: "Together We Grow" },
];

const categories = ["All", "School Life", "Sports", "Library", "Laboratory", "Clubs"];

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

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [headerRef, headerInView] = useInView(0.1);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((prev) => (prev + 1) % filtered.length);
      if (e.key === "ArrowLeft") setLightbox((prev) => (prev - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  const navOffset = isMobile ? "72px" : "105px";
  const filtered = activeCategory === "All" ? images : images.filter(img => img.category === activeCategory);

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFC", marginTop: navOffset }}>

      {/* HERO */}
      <div style={{ background: "#0C2340", padding: "4rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 15% 50%, rgba(14,165,233,0.1) 0%, transparent 50%)", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "60px 60px", zIndex: 0 }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(to right, #0EA5E9, #16A34A)", zIndex: 4 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(to right, #16A34A, #0EA5E9)", zIndex: 4 }} />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "1.5rem", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.1s" }}>
            <Link href="/" style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Home</Link>
            <ChevronRight size={12} style={{ color: "rgba(255,255,255,0.25)" }} />
            <Link href="/school-life" style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>School Life</Link>
            <ChevronRight size={12} style={{ color: "rgba(255,255,255,0.25)" }} />
            <span style={{ fontFamily: "var(--font-ui)", color: "#0EA5E9", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Gallery</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", color: "#ffffff", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 3.5rem)", lineHeight: 1.05, margin: "0 0 1rem 0", letterSpacing: "-0.02em", opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s" }}>
            Photo <span style={{ color: "#0EA5E9" }}>Gallery</span>
          </h1>
          
          <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.65)", fontSize: "0.97rem", lineHeight: 1.8, margin: 0, maxWidth: "500px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.5s" }}>
            A glimpse into life at Jam Park Private Secondary School — from the classroom to the sports field and beyond.
          </p>
        </div>
      </div>

      {/* GALLERY */}
      <div className="container" style={{ padding: "4rem 1.5rem" }}>

        {/* FILTER TABS */}
        <div
          ref={headerRef}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "3rem", justifyContent: "center", opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.55rem 1.25rem",
                border: `2px solid ${activeCategory === cat ? "#0EA5E9" : "#E5E9EF"}`,
                background: activeCategory === cat ? "#0EA5E9" : "#ffffff",
                color: activeCategory === cat ? "#ffffff" : "#6B7280",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PHOTO COUNT */}
        <p style={{ fontFamily: "var(--font-ui)", color: "#9CA3AF", fontSize: "0.8rem", textAlign: "center", marginBottom: "2rem" }}>
          Showing {filtered.length} {filtered.length === 1 ? "photo" : "photos"}
          {activeCategory !== "All" && ` in "${activeCategory}"`}
        </p>

        {/* GRID */}
        <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
          {filtered.map((img, i) => (
            <GalleryItem key={i} img={img} index={i} onClick={() => setLightbox(i)} />
          ))}
        </div>

      </div>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#ffffff", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 10 }}>
            <X size={20} />
          </button>

          {/* Prev */}
          <button onClick={(e) => { e.stopPropagation(); setLightbox((prev) => (prev - 1 + filtered.length) % filtered.length); }}
            style={{ position: "absolute", left: "1rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#ffffff", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 10 }}>
            <ChevronLeft size={20} />
          </button>

          {/* Image */}
          <div style={{ position: "relative", maxWidth: "900px", width: "100%", maxHeight: "80vh" }} onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              width={900}
              height={600}
              style={{ objectFit: "contain", maxHeight: "80vh", width: "100%", height: "auto" }}
            />
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <p style={{ fontFamily: "var(--font-display)", color: "#ffffff", fontSize: "1rem", fontWeight: 700, margin: "0 0 0.25rem 0" }}>{filtered[lightbox].title}</p>
              <p style={{ fontFamily: "var(--font-ui)", color: "#0EA5E9", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>{filtered[lightbox].category}</p>
            </div>
          </div>

          {/* Next */}
          <button onClick={(e) => { e.stopPropagation(); setLightbox((prev) => (prev + 1) % filtered.length); }}
            style={{ position: "absolute", right: "1rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#ffffff", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 10 }}>
            <ChevronRightIcon size={20} />
          </button>

          {/* Counter */}
          <div style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.5)", fontSize: "0.78rem" }}>
            {lightbox + 1} / {filtered.length}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) { .gallery-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>

    </div>
  );
}

function GalleryItem({ img, index, onClick }) {
  const [ref, inView] = useInView(0.05);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        aspectRatio: "4/3",
        overflow: "hidden",
        cursor: "pointer",
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.95)",
        transition: `opacity 0.6s ease ${(index % 3) * 0.1}s, transform 0.6s ease ${(index % 3) * 0.1}s`,
        background: "#0C2340",
      }}
    >
      <Image
        src={img.src}
        alt={img.title}
        fill
        style={{ objectFit: "cover", transform: hovered ? "scale(1.06)" : "scale(1)", transition: "transform 0.5s ease" }}
      />

      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, background: hovered ? "rgba(12,35,64,0.7)" : "rgba(12,35,64,0.15)", transition: "background 0.3s ease" }} />

      {/* Category tag */}
      <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", background: "#0EA5E9", padding: "0.2rem 0.6rem", opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease" }}>
        <span style={{ fontFamily: "var(--font-ui)", color: "#ffffff", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          {img.category}
        </span>
      </div>

      {/* Title */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem 1rem", opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(10px)", transition: "opacity 0.3s ease, transform 0.3s ease" }}>
        <p style={{ fontFamily: "var(--font-display)", color: "#ffffff", fontSize: "0.9rem", fontWeight: 700, margin: 0, textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
          {img.title}
        </p>
      </div>
    </div>
  );
}