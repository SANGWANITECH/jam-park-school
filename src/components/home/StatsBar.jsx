"use client";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, Users, BookOpen, Trophy } from "lucide-react";

const stats = [
  { icon: BookOpen, value: 2022, label: "Year Established", prefix: "Est.", suffix: "", noCount: true },
  { icon: Users, value: 400, label: "Students Enrolled", prefix: "", suffix: "+", noCount: false },
  { icon: GraduationCap, value: 20, label: "Qualified Teachers", prefix: "", suffix: "+", noCount: false },
  { icon: Trophy, value: 94, label: "MSCE Pass Rate", prefix: "", suffix: "%", noCount: false },
];

function CountUp({ target, duration = 2000, prefix, suffix, noCount }) {
  const [count, setCount] = useState(noCount ? target : 0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (noCount) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started, noCount]);

  useEffect(() => {
    if (!started || noCount) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration, noCount]);

  return (
    <div ref={ref} style={{
      fontFamily: "var(--font-display)",
      color: "#ffffff",
      fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
      fontWeight: 900,
      lineHeight: 1,
      marginBottom: "0.5rem",
      letterSpacing: "-0.02em",
    }}>
      {prefix && (
        <span style={{ fontSize: "0.55em", fontWeight: 600, color: "#0EA5E9", marginRight: "0.2rem", letterSpacing: "0.05em" }}>
          {prefix}
        </span>
      )}
      {noCount ? target : count}
      {suffix && (
        <span style={{ fontSize: "0.65em", color: "#0EA5E9", marginLeft: "0.1rem" }}>
          {suffix}
        </span>
      )}
    </div>
  );
}

export default function StatsBar() {
  return (
    <section style={{ background: "#0C2340", borderTop: "3px solid #0EA5E9" }}>
      <div className="container">
        <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                style={{
                  padding: "2.5rem 1.5rem",
                  textAlign: "center",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.75rem" }}>
                  <Icon size={22} style={{ color: "#0EA5E9" }} />
                </div>

                <CountUp
                  target={stat.value}
                  duration={2000}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  noCount={stat.noCount}
                />

                <p style={{
                  fontFamily: "var(--font-ui)",
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: 0,
                }}>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}