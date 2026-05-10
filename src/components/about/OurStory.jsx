"use client";
import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    year: "2005",
    title: "Foundation",
    description: "Jam Park Private Secondary School was founded with a vision to provide quality private secondary education to students in Lilongwe's Area 25 and surrounding communities.",
  },
  {
    year: "2008",
    title: "First MSCE Class",
    description: "Our inaugural Form 4 class sat their Malawi School Certificate of Education examinations, achieving an impressive pass rate that set the standard for years to come.",
  },
  {
    year: "2012",
    title: "Expansion & Growth",
    description: "Following strong demand from parents and students, the school expanded its facilities and increased student intake — growing to over 200 enrolled students.",
  },
  {
    year: "2016",
    title: "Academic Recognition",
    description: "Jam Park was formally recognised for consistently high MSCE and JCE performance, cementing its reputation as one of Lilongwe's leading private secondary institutions.",
  },
  {
    year: "2020",
    title: "Modern Facilities",
    description: "Major infrastructure improvements were made including upgraded science laboratories, a computer lab and an expanded library — enhancing the learning experience for all students.",
  },
  {
    year: "2025",
    title: "Today & Beyond",
    description: "With over 400 students enrolled and 20+ years of excellence, Jam Park continues to grow — building on a strong foundation to shape the next generation of Malawi's leaders.",
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

function MilestoneItem({ milestone, index }) {
  const [ref, inView] = useInView(0.1);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="milestone-row"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 60px 1fr",
        gap: "0",
        alignItems: "start",
        marginBottom: "0",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
      }}
    >
      {/* LEFT SIDE */}
      <div style={{
        padding: "0 2.5rem 3rem 0",
        textAlign: "right",
        paddingTop: "0.2rem",
      }}>
        {isLeft ? (
          <div>
            <span style={{
              display: "inline-block",
              fontFamily: "var(--font-display)",
              color: "#0EA5E9",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
              background: "#EFF6FF",
              padding: "0.25rem 0.75rem",
            }}>
              {milestone.year}
            </span>
            <h3 style={{
              fontFamily: "var(--font-display)",
              color: "#0C2340",
              fontWeight: 700,
              fontSize: "1.1rem",
              margin: "0.5rem 0 0.75rem 0",
              lineHeight: 1.3,
            }}>
              {milestone.title}
            </h3>
            <p style={{
              fontFamily: "var(--font-body)",
              color: "#6B7280",
              fontSize: "0.88rem",
              lineHeight: 1.8,
              margin: 0,
            }}>
              {milestone.description}
            </p>
          </div>
        ) : (
          <div style={{ height: "1px" }} />
        )}
      </div>

      {/* CENTER — Timeline line + dot */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}>
        {/* Dot */}
        <div style={{
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          background: "#0EA5E9",
          border: "3px solid #ffffff",
          boxShadow: "0 0 0 2px #0EA5E9",
          flexShrink: 0,
          zIndex: 2,
          marginTop: "0.2rem",
          transition: "transform 0.3s ease",
        }} />
        {/* Line */}
        {index < milestones.length - 1 && (
          <div style={{
            width: "2px",
            flex: 1,
            minHeight: "80px",
            background: "linear-gradient(to bottom, #0EA5E9, rgba(14,165,233,0.2))",
            marginTop: "4px",
          }} />
        )}
      </div>

      {/* RIGHT SIDE */}
      <div style={{
        padding: "0 0 3rem 2.5rem",
        paddingTop: "0.2rem",
      }}>
        {!isLeft ? (
          <div>
            <span style={{
              display: "inline-block",
              fontFamily: "var(--font-display)",
              color: "#0EA5E9",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
              background: "#EFF6FF",
              padding: "0.25rem 0.75rem",
            }}>
              {milestone.year}
            </span>
            <h3 style={{
              fontFamily: "var(--font-display)",
              color: "#0C2340",
              fontWeight: 700,
              fontSize: "1.1rem",
              margin: "0.5rem 0 0.75rem 0",
              lineHeight: 1.3,
            }}>
              {milestone.title}
            </h3>
            <p style={{
              fontFamily: "var(--font-body)",
              color: "#6B7280",
              fontSize: "0.88rem",
              lineHeight: 1.8,
              margin: 0,
            }}>
              {milestone.description}
            </p>
          </div>
        ) : (
          <div style={{ height: "1px" }} />
        )}
      </div>

    </div>
  );
}

export default function OurStory() {
  const [headerRef, headerInView] = useInView(0.1);

  return (
    <section style={{ background: "#F8FAFC", padding: "6rem 0", overflow: "hidden" }}>
      <div className="container">

        {/* HEADER */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "5rem",
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
            Our Journey
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
            Our Story Since 2005
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            color: "#6B7280",
            fontSize: "0.97rem",
            lineHeight: 1.8,
            margin: "0 auto",
            maxWidth: "520px",
          }}>
            From humble beginnings to one of Lilongwe's most respected private secondary schools — here is the journey that has shaped who we are today.
          </p>
        </div>

        {/* TIMELINE — desktop */}
        <div className="timeline-desktop">
          {milestones.map((milestone, i) => (
            <MilestoneItem key={i} milestone={milestone} index={i} />
          ))}
        </div>

        {/* TIMELINE — mobile (simple list) */}
        <div className="timeline-mobile">
          {milestones.map((milestone, i) => {
            const [ref, inView] = [useRef(null), false];
            return (
              <MobileItem key={i} milestone={milestone} index={i} />
            );
          })}
        </div>

      </div>

      <style>{`
        .timeline-mobile { display: none; }
        @media (max-width: 768px) {
          .timeline-desktop { display: none; }
          .timeline-mobile { display: block; }
        }
      `}</style>

    </section>
  );
}

function MobileItem({ milestone, index }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        gap: "1.25rem",
        paddingBottom: "2.5rem",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-30px)",
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
      }}
    >
      {/* Left — dot + line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          background: "#0EA5E9",
          border: "3px solid #ffffff",
          boxShadow: "0 0 0 2px #0EA5E9",
          flexShrink: 0,
          marginTop: "0.3rem",
        }} />
        {index < milestones.length - 1 && (
          <div style={{
            width: "2px",
            flex: 1,
            minHeight: "60px",
            background: "linear-gradient(to bottom, #0EA5E9, rgba(14,165,233,0.2))",
            marginTop: "4px",
          }} />
        )}
      </div>

      {/* Right — content */}
      <div style={{ paddingBottom: "0.5rem" }}>
        <span style={{
          display: "inline-block",
          fontFamily: "var(--font-display)",
          color: "#0EA5E9",
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "0.4rem",
          background: "#EFF6FF",
          padding: "0.2rem 0.6rem",
        }}>
          {milestone.year}
        </span>
        <h3 style={{
          fontFamily: "var(--font-display)",
          color: "#0C2340",
          fontWeight: 700,
          fontSize: "1rem",
          margin: "0.4rem 0 0.6rem 0",
          lineHeight: 1.3,
        }}>
          {milestone.title}
        </h3>
        <p style={{
          fontFamily: "var(--font-body)",
          color: "#6B7280",
          fontSize: "0.86rem",
          lineHeight: 1.8,
          margin: 0,
        }}>
          {milestone.description}
        </p>
      </div>
    </div>
  );
}