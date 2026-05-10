"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const clubs = [
  {
    image: "/images/scom.jpeg",
    title: "SCOM",
    fullName: "Students Christian Organisation of Malawi",
    color: "#0EA5E9",
    description: "SCOM is our active Christian fellowship group that meets weekly for Bible study, prayer and community outreach. It nurtures spiritual growth, moral values and servant leadership in our students.",
    activities: ["Weekly fellowship meetings", "Community outreach", "Bible study sessions", "Prayer & worship"],
  },
  {
    image: "/images/wildlife.jpeg",
    title: "Wildlife Club",
    fullName: "Jam Park Wildlife & Environment Club",
    color: "#16A34A",
    description: "Our Wildlife Club promotes environmental awareness and conservation among students. Members learn about Malawi's rich biodiversity, participate in clean-up campaigns and engage in conservation projects.",
    activities: ["Environmental campaigns", "Wildlife awareness", "Tree planting projects", "Conservation education"],
  },
  {
    image: "/images/innovation.jpeg",
    title: "Innovation Hub",
    fullName: "Jam Park Innovation & Technology Hub",
    color: "#0EA5E9",
    description: "The Innovation Hub is our flagship club for students passionate about technology, science and creative problem solving. Members work on real-world projects, build prototypes and develop entrepreneurial skills.",
    activities: ["Technology projects", "Problem-solving challenges", "Science experiments", "Entrepreneurship skills"],
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

function ClubCard({ club, index }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      style={{
        background: "#ffffff",
        border: "1px solid #E5E9EF",
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(60px)",
        transition: `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`,
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden" }}>
        <Image
          src={club.image}
          alt={club.title}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,35,64,0.85) 0%, rgba(12,35,64,0.2) 60%, transparent 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: club.color }} />
        <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem", right: "1.25rem" }}>
          <span style={{ fontFamily: "var(--font-ui)", color: club.color, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "0.3rem" }}>
            Club & Society
          </span>
          <h3 style={{ fontFamily: "var(--font-display)", color: "#ffffff", fontWeight: 800, fontSize: "1.3rem", margin: 0, lineHeight: 1.2 }}>
            {club.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.75rem" }}>
        <p style={{ fontFamily: "var(--font-ui)", color: "#0EA5E9", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 0.75rem 0" }}>
          {club.fullName}
        </p>

        <p style={{ fontFamily: "var(--font-body)", color: "#4B5563", fontSize: "0.88rem", lineHeight: 1.8, margin: "0 0 1.5rem 0" }}>
          {club.description}
        </p>

        {/* Activities */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "1.5rem" }}>
          {club.activities.map((activity, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: club.color, flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-ui)", color: "#6B7280", fontSize: "0.78rem", lineHeight: 1.4 }}>
                {activity}
              </span>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: "1.25rem", borderTop: "1px solid #E5E9EF" }}>
          <a href="/gallery"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-ui)", color: club.color, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none", transition: "gap 0.2s ease" }}
            onMouseEnter={e => e.currentTarget.style.gap = "0.7rem"}
            onMouseLeave={e => e.currentTarget.style.gap = "0.4rem"}
          >
            See Photos <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ClubsSocieties() {
  const [headerRef, headerInView] = useInView(0.1);

  return (
    <section id="clubs" style={{ background: "#F8FAFC", padding: "6rem 0", overflow: "hidden" }}>
      <div className="container">

        <div ref={headerRef} style={{ textAlign: "center", marginBottom: "4rem", opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
          <span style={{ display: "inline-block", background: "#EFF6FF", color: "#0EA5E9", fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "0.4rem 1rem", marginBottom: "1rem" }}>
            Clubs & Societies
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", color: "#0C2340", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.15, margin: "0 auto 1rem auto", maxWidth: "560px" }}>
            Find Your Community at Jam Park
          </h2>
          <p style={{ fontFamily: "var(--font-body)", color: "#6B7280", fontSize: "0.97rem", lineHeight: 1.8, margin: "0 auto", maxWidth: "520px" }}>
            Our clubs and societies give students a space to explore their interests, develop leadership skills and build friendships that last a lifetime.
          </p>
        </div>

        <div className="clubs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {clubs.map((club, i) => (
            <ClubCard key={i} club={club} index={i} />
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) { .clubs-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .clubs-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}