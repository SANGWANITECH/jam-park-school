"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

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

export default function Leadership() {
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
            Leadership
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            color: "#0C2340",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            lineHeight: 1.15,
            margin: "0 auto",
            maxWidth: "560px",
          }}>
            A Message from Our Director
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div
          className="leadership-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "380px 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >

          {/* LEFT — PHOTO */}
          <div
            ref={imgRef}
            style={{
              opacity: imgInView ? 1 : 0,
              transform: imgInView ? "translateX(0)" : "translateX(-60px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          >
            <div style={{ position: "relative" }}>

              {/* Main photo */}
              <div style={{
                position: "relative",
                width: "100%",
                aspectRatio: "3/4",
                overflow: "hidden",
                boxShadow: "0 30px 70px rgba(12,35,64,0.2)",
              }}>
                <Image
                  src="/images/director.jpg"
                  alt="Director — Jam Park Private Secondary School"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
                {/* Bottom overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(12,35,64,0.85) 0%, transparent 55%)",
                }} />
                {/* Name on image */}
                <div style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  right: "1.5rem",
                  zIndex: 2,
                }}>
                  <p style={{
                    fontFamily: "var(--font-display)",
                    color: "#ffffff",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    margin: "0 0 0.25rem 0",
                    lineHeight: 1.2,
                  }}>
                    Mr. Samuel Namasowa Nkhoma
                  </p>
                  <p style={{
                    fontFamily: "var(--font-ui)",
                    color: "#7DD3FC",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}>
                    School Director
                  </p>
                </div>
              </div>

              {/* Blue accent — top left */}
              <div style={{
                position: "absolute",
                top: "-14px",
                left: "-14px",
                width: "70px",
                height: "70px",
                border: "3px solid #0EA5E9",
                zIndex: -1,
              }} />

              {/* Green accent — bottom right */}
              <div style={{
                position: "absolute",
                bottom: "-14px",
                right: "-14px",
                width: "70px",
                height: "70px",
                background: "#16A34A",
                opacity: 0.15,
                zIndex: -1,
              }} />

            </div>
          </div>

          {/* RIGHT — MESSAGE */}
          <div
            ref={contentRef}
            style={{
              opacity: contentInView ? 1 : 0,
              transform: contentInView ? "translateX(0)" : "translateX(60px)",
              transition: "opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s",
            }}
          >
            {/* Large quote icon */}
            <div style={{
              width: "56px",
              height: "56px",
              background: "#EFF6FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "2rem",
            }}>
              <Quote size={24} style={{ color: "#0EA5E9" }} />
            </div>

            {/* Message paragraphs */}
            <p style={{
              fontFamily: "var(--font-body)",
              color: "#374151",
              fontSize: "1.05rem",
              lineHeight: 1.9,
              margin: "0 0 1.5rem 0",
              fontStyle: "italic",
            }}>
              "At Jam Park Private Secondary School, we believe that every child who walks through our gates carries within them an extraordinary potential. Our role as educators is not simply to fill minds with knowledge — it is to ignite a lifelong love of learning, to build character, and to prepare young people for the responsibilities and opportunities that lie ahead."
            </p>

            <p style={{
              fontFamily: "var(--font-body)",
              color: "#4B5563",
              fontSize: "0.97rem",
              lineHeight: 1.9,
              margin: "0 0 1.5rem 0",
            }}>
              Since our founding in 2005, we have remained committed to one simple but powerful idea — that quality education, delivered with discipline and care, can transform lives. We have seen it happen year after year, class after class, student after student.
            </p>

            <p style={{
              fontFamily: "var(--font-body)",
              color: "#4B5563",
              fontSize: "0.97rem",
              lineHeight: 1.9,
              margin: "0 0 2.5rem 0",
            }}>
              To every parent who entrusts us with your child — thank you. We do not take that responsibility lightly. To every student at Jam Park — you are the reason we come to work every day. Give us your best, and we will give you ours.
            </p>

            {/* Signature block */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              paddingTop: "1.75rem",
              borderTop: "1px solid #E5E9EF",
            }}>
              <div style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                border: "2px solid #0EA5E9",
              }}>
                <Image
                  src="/images/director.jpg"
                  alt="Director"
                  width={52}
                  height={52}
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div>
                <p style={{
                  fontFamily: "var(--font-display)",
                  color: "#0C2340",
                  fontSize: "1rem",
                  fontWeight: 700,
                  margin: "0 0 0.2rem 0",
                }}>
                    Mr. Samuel Nkhoma
                </p>
                <p style={{
                  fontFamily: "var(--font-ui)",
                  color: "#0EA5E9",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: 0,
                }}>
                  School Director, Jam Park Private Secondary School
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .leadership-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>

    </section>
  );
}