"use client";
import { useEffect, useRef, useState } from "react";
import { Trophy, Users, Lightbulb, Music, BookOpen, Heart } from "lucide-react";

const activities = [
  { icon: Trophy, color: "#0EA5E9", title: "Sports & Athletics", description: "Competitive and recreational sports that build teamwork, discipline and physical fitness in every student." },
  { icon: Users, color: "#16A34A", title: "Clubs & Societies", description: "Student-led clubs covering science, wildlife conservation, innovation and community engagement." },
  { icon: Lightbulb, color: "#0EA5E9", title: "Innovation & Technology", description: "Hands-on projects and challenges that develop problem-solving, creativity and critical thinking skills." },
  { icon: Music, color: "#16A34A", title: "Arts & Culture", description: "Creative expression through music, drama and cultural activities that celebrate our Malawian heritage." },
  { icon: BookOpen, color: "#0EA5E9", title: "Academic Competitions", description: "Inter-school debates, quiz competitions and science fairs that challenge students beyond the curriculum." },
  { icon: Heart, color: "#16A34A", title: "Community Service", description: "Outreach programmes and charity initiatives that teach compassion, leadership and civic responsibility." },
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

function ActivityCard({ activity, index }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);
  const Icon = activity.icon;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#0C2340" : "#ffffff",
        border: `1px solid ${hovered ? activity.color : "#E5E9EF"}`,
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s, background 0.3s ease, border-color 0.3s ease`,
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.1)" : "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: activity.color, transform: hovered ? "scaleX(1)" : "scaleX(0.3)", transformOrigin: "left", transition: "transform 0.3s ease" }} />

      <div style={{ width: "50px", height: "50px", background: hovered ? `rgba(${activity.color === "#0EA5E9" ? "14,165,233" : "22,163,74"}, 0.15)` : `rgba(${activity.color === "#0EA5E9" ? "14,165,233" : "22,163,74"}, 0.08)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", transition: "background 0.3s ease" }}>
        <Icon size={22} style={{ color: activity.color }} />
      </div>

      <h3 style={{ fontFamily: "var(--font-display)", color: hovered ? "#ffffff" : "#0C2340", fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.6rem 0", transition: "color 0.3s ease" }}>
        {activity.title}
      </h3>

      <div style={{ width: "28px", height: "2px", background: activity.color, marginBottom: "0.85rem" }} />

      <p style={{ fontFamily: "var(--font-body)", color: hovered ? "rgba(255,255,255,0.68)" : "#6B7280", fontSize: "0.87rem", lineHeight: 1.8, margin: 0, transition: "color 0.3s ease" }}>
        {activity.description}
      </p>
    </div>
  );
}

export default function CoCurricular() {
  const [headerRef, headerInView] = useInView(0.1);

  return (
    <section id="co-curricular" style={{ background: "#F8FAFC", padding: "6rem 0", overflow: "hidden" }}>
      <div className="container">

        <div ref={headerRef} style={{ textAlign: "center", marginBottom: "4rem", opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
          <span style={{ display: "inline-block", background: "#EFF6FF", color: "#0EA5E9", fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "0.4rem 1rem", marginBottom: "1rem" }}>
            Co-Curricular Activities
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", color: "#0C2340", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.15, margin: "0 auto 1rem auto", maxWidth: "580px" }}>
            Developing the Whole Student
          </h2>
          <p style={{ fontFamily: "var(--font-body)", color: "#6B7280", fontSize: "0.97rem", lineHeight: 1.8, margin: "0 auto", maxWidth: "540px" }}>
            We believe that true education develops every dimension of a student's character. Our co-curricular programme offers every student the opportunity to discover their passion and lead.
          </p>
        </div>

        <div className="cocurricular-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {activities.map((activity, i) => (
            <ActivityCard key={i} activity={activity} index={i} />
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) { .cocurricular-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 641px) and (max-width: 1024px) { .cocurricular-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}