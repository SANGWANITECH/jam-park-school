"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Award, Shield, TrendingUp, BookOpen, Star } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Our small class sizes ensure every student receives individual attention and personalized support from our teachers.",
  },
  {
    icon: Award,
    title: "Experienced Teachers",
    description: "All our teachers are qualified, experienced and passionate about delivering quality education to every student.",
  },
  {
    icon: Shield,
    title: "Safe & Disciplined Environment",
    description: "We maintain a secure, structured and respectful environment where students can focus and thrive academically.",
  },
  {
    icon: TrendingUp,
    title: "Strong MSCE Results",
    description: "Our students consistently achieve outstanding results in national examinations, with a 94% pass rate at MSCE level.",
  },
  {
    icon: BookOpen,
    title: "Broad Curriculum",
    description: "We offer a comprehensive curriculum covering sciences, humanities, languages and mathematics at JCE and MSCE level.",
  },
  {
    icon: Star,
    title: "Holistic Development",
    description: "Beyond academics, we nurture character, leadership, sport and community service in every student we teach.",
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

export default function WhyUs() {
  const [headerRef, headerInView] = useInView(0.1);
  const [imgRef, imgInView] = useInView(0.1);
  const [contentRef, contentInView] = useInView(0.1);

  return (
    <section style={{ background: "#ffffff", padding: "6rem 0", overflow: "hidden" }}>
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
            Why Choose Us
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
            Why Parents & Students Choose Jam Park
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            color: "#6B7280",
            fontSize: "0.97rem",
            lineHeight: 1.8,
            margin: "0 auto",
            maxWidth: "540px",
          }}>
            We are more than a school. We are a community dedicated to raising the next generation of Malawi's leaders, thinkers and changemakers.
          </p>
        </div>

        {/* MAIN GRID */}
        <div
          className="whyus-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >

          {/* LEFT — IMAGE */}
          <div
            ref={imgRef}
            style={{
              opacity: imgInView ? 1 : 0,
              transform: imgInView ? "translateX(0)" : "translateX(-60px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          >
            <div style={{ position: "relative" }}>

              {/* Main image */}
              <div style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/5",
                overflow: "hidden",
                boxShadow: "0 30px 80px rgba(12,35,64,0.25)",
              }}>
                <Image
                  src="/images/why1.jpeg"
                  alt="Students at Jam Park Private Secondary School"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />

                {/* Left blue shadow overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to right, rgba(12,35,64,0.6) 0%, rgba(12,35,64,0.1) 50%, transparent 100%)",
                }} />

                {/* Bottom overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(12,35,64,0.7) 0%, transparent 50%)",
                }} />

                {/* Text on image — bottom left */}
                <div style={{
                  position: "absolute",
                  bottom: "1.75rem",
                  left: "1.75rem",
                  zIndex: 2,
                }}>
                  <p style={{
                    fontFamily: "var(--font-display)",
                    color: "#ffffff",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    fontStyle: "italic",
                    margin: 0,
                    lineHeight: 1.4,
                    maxWidth: "220px",
                    textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                  }}>
                    "Excellence is not a destination — it's a daily pursuit."
                  </p>
                  <p style={{
                    fontFamily: "var(--font-ui)",
                    color: "#7DD3FC",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    margin: "0.6rem 0 0 0",
                  }}>
                    — Jam Park motto
                  </p>
                </div>

              </div>

              {/* Blue accent block — top right */}
              <div style={{
                position: "absolute",
                top: "-16px",
                right: "-16px",
                width: "100px",
                height: "100px",
                background: "#0EA5E9",
                zIndex: -1,
                opacity: 0.15,
              }} />

              {/* Navy accent block — bottom left */}
              <div style={{
                position: "absolute",
                bottom: "-16px",
                left: "-16px",
                width: "80px",
                height: "80px",
                background: "#0C2340",
                zIndex: -1,
                opacity: 0.15,
              }} />

            </div>
          </div>

          {/* RIGHT — REASONS */}
          <div
            ref={contentRef}
            style={{
              opacity: contentInView ? 1 : 0,
              transform: contentInView ? "translateX(0)" : "translateX(60px)",
              transition: "opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s",
            }}
          >
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
            }}
              className="reasons-grid"
            >
              {reasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={i}
                    style={{
                      padding: "1.5rem",
                      background: "#F8FAFC",
                      borderTop: "3px solid transparent",
                      borderImage: "linear-gradient(to right, #0EA5E9, #16A34A) 1",
                      opacity: contentInView ? 1 : 0,
                      transform: contentInView ? "translateY(0)" : "translateY(30px)",
                      transition: `opacity 0.6s ease ${0.2 + i * 0.08}s, transform 0.6s ease ${0.2 + i * 0.08}s`,
                    }}
                  >
                    <div style={{
                      width: "40px",
                      height: "40px",
                      background: "rgba(14,165,233,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}>
                      <Icon size={18} style={{ color: "#0EA5E9" }} />
                    </div>
                    <h4 style={{
                      fontFamily: "var(--font-display)",
                      color: "#0C2340",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      margin: "0 0 0.5rem 0",
                      lineHeight: 1.3,
                    }}>
                      {reason.title}
                    </h4>
                    <p style={{
                      fontFamily: "var(--font-ui)",
                      color: "#6B7280",
                      fontSize: "0.8rem",
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div style={{ marginTop: "2rem" }}>
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
                  border: "2px solid #0C2340",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#0EA5E9"; e.currentTarget.style.borderColor = "#0EA5E9"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#0C2340"; e.currentTarget.style.borderColor = "#0C2340"; }}
              >
                Learn More About Us <ArrowRight size={15} />
              </Link>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .whyus-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .reasons-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .whyus-grid {
            gap: 3rem !important;
          }
        }
      `}</style>

    </section>
  );
}