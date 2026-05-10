"use client";
import { useEffect, useRef, useState } from "react";
import { CheckCircle, AlertCircle, FileText, User, CreditCard } from "lucide-react";

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

const documentsList = [
  "Original PSLCE Results Slip",
  "Birth Certificate (original + photocopy)",
  "2 Recent Passport-Size Photographs",
  "Parent or Guardian National ID (photocopy)",
  "Completed Application Form",
];

const academicReqs = [
  "Minimum overall grade of Credit (C) in PSLCE",
  "Must have passed English Language at PSLCE",
  "Must have passed Mathematics at PSLCE",
  
];

export default function EntryRequirements() {
  const [headerRef, headerInView] = useInView(0.1);
  const [col1Ref, col1InView] = useInView(0.1);
  const [col2Ref, col2InView] = useInView(0.1);
  const [feeRef, feeInView] = useInView(0.1);

  return (
    <section
      id="requirements"
      style={{ background: "#ffffff", padding: "6rem 0", overflow: "hidden" }}
    >
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
            Entry Requirements
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            color: "#0C2340",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            lineHeight: 1.15,
            margin: "0 auto 1rem auto",
            maxWidth: "560px",
          }}>
            What You Will Need
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            color: "#6B7280",
            fontSize: "0.97rem",
            lineHeight: 1.8,
            margin: "0 auto",
            maxWidth: "520px",
          }}>
            Please ensure you have all the following requirements ready before submitting your application. Incomplete applications will not be processed.
          </p>
        </div>

        {/* TWO COLUMNS */}
        <div
          className="req-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >

          {/* Academic Requirements */}
          <div
            ref={col1Ref}
            style={{
              background: "#0C2340",
              padding: "2.5rem",
              position: "relative",
              overflow: "hidden",
              opacity: col1InView ? 1 : 0,
              transform: col1InView ? "translateX(0)" : "translateX(-50px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
              borderTop: "3px solid #0EA5E9",
            }}
          >
            {/* Watermark */}
            <div style={{
              position: "absolute",
              bottom: "-10px",
              right: "1rem",
              fontFamily: "var(--font-display)",
              color: "rgba(255,255,255,0.03)",
              fontSize: "6rem",
              fontWeight: 900,
              userSelect: "none",
            }}>
              ACAD
            </div>

            <div style={{
              width: "48px",
              height: "48px",
              background: "rgba(14,165,233,0.12)",
              border: "1px solid rgba(14,165,233,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
            }}>
              <User size={22} style={{ color: "#0EA5E9" }} />
            </div>

            <h3 style={{
              fontFamily: "var(--font-display)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "1.15rem",
              margin: "0 0 0.5rem 0",
            }}>
              Academic Requirements
            </h3>
           
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {academicReqs.map((req, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle size={15} style={{ color: "#16A34A", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{
                    fontFamily: "var(--font-ui)",
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "0.87rem",
                    lineHeight: 1.65,
                  }}>
                    {req}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents Required */}
          <div
            ref={col2Ref}
            style={{
              background: "#0EA5E9",
              padding: "2.5rem",
              position: "relative",
              overflow: "hidden",
              opacity: col2InView ? 1 : 0,
              transform: col2InView ? "translateX(0)" : "translateX(50px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
              borderTop: "3px solid #0C2340",
            }}
          >
            {/* Watermark */}
            <div style={{
              position: "absolute",
              bottom: "-10px",
              right: "1rem",
              fontFamily: "var(--font-display)",
              color: "rgba(255,255,255,0.06)",
              fontSize: "6rem",
              fontWeight: 900,
              userSelect: "none",
            }}>
              DOCS
            </div>

            <div style={{
              width: "48px",
              height: "48px",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
            }}>
              <FileText size={22} style={{ color: "#ffffff" }} />
            </div>

            <h3 style={{
              fontFamily: "var(--font-display)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "1.15rem",
              margin: "0 0 0.5rem 0",
            }}>
              Required Documents
            </h3>
           

            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {documentsList.map((doc, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle size={15} style={{ color: "#ffffff", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{
                    fontFamily: "var(--font-ui)",
                    color: "rgba(255,255,255,0.88)",
                    fontSize: "0.87rem",
                    lineHeight: 1.65,
                  }}>
                    {doc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* APPLICATION FEE NOTICE */}
        <div
          ref={feeRef}
          style={{
            background: "#FFF9F0",
            border: "1px solid #FCD34D",
            borderLeft: "4px solid #F59E0B",
            padding: "1.75rem 2rem",
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            opacity: feeInView ? 1 : 0,
            transform: feeInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
          className="fee-notice"
        >
          <CreditCard size={22} style={{ color: "#F59E0B", flexShrink: 0, marginTop: "2px" }} />
          <div>
            <p style={{
              fontFamily: "var(--font-display)",
              color: "#92400E",
              fontSize: "1rem",
              fontWeight: 700,
              margin: "0 0 0.4rem 0",
            }}>
              Non-Refundable Application Fee: MWK 20,000
            </p>
            <p style={{
              fontFamily: "var(--font-body)",
              color: "#78350F",
              fontSize: "0.88rem",
              lineHeight: 1.75,
              margin: 0,
            }}>
              A non-refundable application fee of <strong>MWK 20,000</strong> is payable upon arrival at the school campus.
            </p>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .req-grid {
            grid-template-columns: 1fr !important;
          }
          .fee-notice {
            flex-direction: column !important;
          }
        }
      `}</style>

    </section>
  );
}