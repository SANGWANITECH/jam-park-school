"use client";
import { useEffect, useRef, useState } from "react";
import { Info } from "lucide-react";

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

const fees = [
  {
    category: "Registration & Application",
    items: [
      { label: "Registration fee (non-refundable)", amount: "MWK 5,000", note: "Payable upon arrival at campus" },
      
    ],
  },
  {
    category: "Tuition Fees (Per Term)",
    items: [
      { label: "Form 1 to Form 3 ", amount: "MWK 150,000", note: "Per term" },
      { label: "Form 4 (MSCE)", amount: "MWK 170,000", note: "Per term" },
    ],
  },
  {
    category: "Additional Levies",
    items: [
      
     
      { label: "School Uniform", amount: "MWK 100,000", note: "Per arrival" },
    
    ],
  },
];

export default function FeesStructure() {
  const [headerRef, headerInView] = useInView(0.1);
  const [tableRef, tableInView] = useInView(0.1);
  const [noteRef, noteInView] = useInView(0.1);

  return (
    <section
      id="fees"
      style={{ background: "#F8FAFC", padding: "6rem 0", overflow: "hidden" }}
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
            Fees Structure
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
            Transparent & Straightforward Fees
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            color: "#6B7280",
            fontSize: "0.97rem",
            lineHeight: 1.8,
            margin: "0 auto",
            maxWidth: "520px",
          }}>
            We believe in full transparency with our fees. Below is a complete breakdown of all costs associated with studying at Jam Park Private Secondary School for the 2026 academic year.
          </p>
        </div>

        {/* FEES TABLE */}
        <div
          ref={tableRef}
          style={{
            opacity: tableInView ? 1 : 0,
            transform: tableInView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
            marginBottom: "2rem",
          }}
        >
          {fees.map((section, si) => (
            <div key={si} style={{ marginBottom: "1.5rem" }}>

              {/* Category header */}
              <div style={{
                background: "#0C2340",
                padding: "1rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}>
                <div style={{
                  width: "4px",
                  height: "20px",
                  background: "#0EA5E9",
                  flexShrink: 0,
                }} />
                <h3 style={{
                  fontFamily: "var(--font-ui)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: 0,
                }}>
                  {section.category}
                </h3>
              </div>

              {/* Items */}
              {section.items.map((item, ii) => (
                <div
                  key={ii}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.25rem 1.5rem",
                    background: ii % 2 === 0 ? "#ffffff" : "#F8FAFC",
                    borderBottom: "1px solid #E5E9EF",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                  className="fee-row"
                >
                  <div>
                    <p style={{
                      fontFamily: "var(--font-ui)",
                      color: "#0C2340",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      margin: "0 0 0.2rem 0",
                    }}>
                      {item.label}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-ui)",
                      color: "#9CA3AF",
                      fontSize: "0.75rem",
                      margin: 0,
                    }}>
                      {item.note}
                    </p>
                  </div>
                  <div style={{
                    background: "#EFF6FF",
                    border: "1px solid rgba(14,165,233,0.2)",
                    padding: "0.4rem 1rem",
                    flexShrink: 0,
                  }}>
                    <p style={{
                      fontFamily: "var(--font-display)",
                      color: "#0C2340",
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      margin: 0,
                      whiteSpace: "nowrap",
                    }}>
                      {item.amount}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          ))}
        </div>

        {/* DISCLAIMER NOTE */}
        <div
          ref={noteRef}
          style={{
            background: "#EFF6FF",
            border: "1px solid rgba(14,165,233,0.2)",
            borderLeft: "4px solid #0EA5E9",
            padding: "1.5rem 2rem",
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            opacity: noteInView ? 1 : 0,
            transform: noteInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
          className="disclaimer"
        >
          <Info size={20} style={{ color: "#0EA5E9", flexShrink: 0, marginTop: "2px" }} />
          <p style={{
            fontFamily: "var(--font-body)",
            color: "#374151",
            fontSize: "0.88rem",
            lineHeight: 1.8,
            margin: 0,
          }}>
            <strong>Please Note:</strong> Fees listed above are for the 2026 academic year and are subject to review. All fees are payable at the school bursar's office. Payment plans may be discussed with the school administration. For any queries regarding fees, please contact us directly on <strong>+265 99 162 7231</strong> or email <strong>sylesscef@yahoo.com</strong>.
          </p>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .fee-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .disclaimer {
            flex-direction: column !important;
          }
        }
      `}</style>

    </section>
  );
}