"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ClipboardCheck, FileText, UserCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    color: "#0EA5E9",
    title: "Check Requirements",
    description: "Before applying, ensure your child meets our entry requirements. Review the minimum PSLCE grade, required documents and age requirements listed on this page.",
    action: null,
  },
  {
    number: "02",
    icon: FileText,
    color: "#16A34A",
    title: "Complete Online Application",
    description: "Visit our online application portal and fill in all required details — student information, guardian details and academic background. The process takes approximately 10 minutes.",
    action: { label: "Go to Application Portal", href: "/apply" },
  },
  {
    number: "03",
    icon: UserCheck,
    color: "#0EA5E9",
    title: "Await Confirmation",
    description: "Once your application is received, our admissions team will review it and contact you within 3 to 5 working days via phone or WhatsApp to confirm your child's place and next steps.",
    action: null,
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

function StepCard({ step, index }) {
  const [ref, inView] = useInView(0.1);
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(60px)",
        transition: `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`,
      }}
    >
      {/* Connector line — between steps */}
      {index < steps.length - 1 && (
        <div className="step-connector" style={{
          position: "absolute",
          top: "2rem",
          right: "-50%",
          width: "100%",
          height: "2px",
          background: "linear-gradient(to right, #0EA5E9, rgba(14,165,233,0.1))",
          zIndex: 0,
        }} />
      )}

      {/* Card */}
      <div style={{
        background: "#ffffff",
        border: "1px solid #E5E9EF",
        padding: "2.5rem 2rem",
        position: "relative",
        zIndex: 1,
        height: "100%",
        borderTop: `3px solid ${step.color}`,
        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
      }}>

        {/* Step number — watermark */}
        <div style={{
          position: "absolute",
          top: "1rem",
          right: "1.25rem",
          fontFamily: "var(--font-display)",
          color: "rgba(12,35,64,0.05)",
          fontSize: "4rem",
          fontWeight: 900,
          lineHeight: 1,
          userSelect: "none",
        }}>
          {step.number}
        </div>

        {/* Icon circle */}
        <div style={{
          width: "60px",
          height: "60px",
          background: step.color === "#0EA5E9" ? "rgba(14,165,233,0.08)" : "rgba(22,163,74,0.08)",
          border: `2px solid ${step.color === "#0EA5E9" ? "rgba(14,165,233,0.2)" : "rgba(22,163,74,0.2)"}`,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.5rem",
        }}>
          <Icon size={24} style={{ color: step.color }} />
        </div>

        {/* Step label */}
        <span style={{
          display: "inline-block",
          fontFamily: "var(--font-ui)",
          color: step.color,
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
        }}>
          Step {step.number}
        </span>

        {/* Title */}
        <h3 style={{
          fontFamily: "var(--font-display)",
          color: "#0C2340",
          fontWeight: 700,
          fontSize: "1.15rem",
          margin: "0 0 1rem 0",
          lineHeight: 1.3,
        }}>
          {step.title}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: "var(--font-body)",
          color: "#6B7280",
          fontSize: "0.9rem",
          lineHeight: 1.85,
          margin: step.action ? "0 0 1.5rem 0" : 0,
        }}>
          {step.description}
        </p>

        {/* Action link */}
        {step.action && (
          <Link href={step.action.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontFamily: "var(--font-ui)",
              color: step.color,
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderBottom: `2px solid ${step.color}`,
              paddingBottom: "2px",
              transition: "gap 0.2s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.gap = "0.7rem"}
            onMouseLeave={e => e.currentTarget.style.gap = "0.4rem"}
          >
            {step.action.label} <ArrowRight size={13} />
          </Link>
        )}

      </div>
    </div>
  );
}

export default function HowToApply() {
  const [headerRef, headerInView] = useInView(0.1);
  const [ctaRef, ctaInView] = useInView(0.1);

  return (
    <section
      id="how-to-apply"
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
            Admissions Process
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
            3 steps to apply
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            color: "#6B7280",
            fontSize: "0.97rem",
            lineHeight: 1.8,
            margin: "0 auto",
            maxWidth: "520px",
          }}>
            Our admissions process is straightforward and transparent. Follow these three steps to secure your child's place at Jam Park Private Secondary School.
          </p>
        </div>

        {/* STEPS */}
        <div
          className="steps-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginBottom: "4rem",
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div
          ref={ctaRef}
          style={{
            background: "#0C2340",
            padding: "3rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            borderTop: "3px solid #0EA5E9",
          }}
          className="apply-cta-bottom"
        >
          <div>
            <p style={{
              fontFamily: "var(--font-display)",
              color: "#ffffff",
              fontSize: "1.3rem",
              fontWeight: 700,
              margin: "0 0 0.4rem 0",
            }}>
              Ready to Apply?
            </p>
            <p style={{
              fontFamily: "var(--font-body)",
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.9rem",
              margin: 0,
              lineHeight: 1.6,
            }}>
              Spaces are limited. Submit your application today to secure your child's place for the 2025 intake.
            </p>
          </div>
          <Link href="/apply"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#0EA5E9",
              color: "#ffffff",
              padding: "0.95rem 2.25rem",
              fontFamily: "var(--font-ui)",
              fontWeight: 700,
              fontSize: "0.82rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "2px solid #0EA5E9",
              transition: "all 0.25s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0EA5E9"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#0EA5E9"; e.currentTarget.style.color = "#ffffff"; }}
          >
            Start Application <ArrowRight size={15} />
          </Link>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
          .step-connector {
            display: none !important;
          }
          .apply-cta-bottom {
            flex-direction: column !important;
            text-align: center !important;
          }
          .apply-cta-bottom a {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>

    </section>
  );
}