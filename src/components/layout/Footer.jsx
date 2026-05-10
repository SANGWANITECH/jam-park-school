"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>

      {/* ── MAIN FOOTER ── */}
      <div style={{ background: "#0C2340", paddingTop: "4rem", paddingBottom: "3rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem" }}>

            {/* COL 1 — School Identity */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <Image src="/logo.png" alt="Jam Park Logo" width={52} height={52} style={{ objectFit: "contain" }} />
                <div>
                  <p style={{ fontFamily: "var(--font-display)", color: "#ffffff", fontWeight: 800, fontSize: "1rem", lineHeight: "1.15", margin: 0 }}>
                    JAM PARK
                  </p>
                  <p style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.5)", fontSize: "0.55rem", letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>
                    Private Secondary School
                  </p>
                </div>
              </div>
              <p style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", lineHeight: "1.8", margin: "0 0 1.5rem 0" }}>
                Nurturing academic excellence, strong character, and responsible citizenship in the heart of Lilongwe, Malawi.
              </p>

              {/* Social Links */}
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {[
                  { icon: FaFacebookF, href: "#", color: "#1877F2" },
                  { icon: FaWhatsapp, href: "https://wa.me/265991627231", color: "#25D366" },
                  { icon: FaInstagram, href: "#", color: "#E1306C" },
                ].map(({ icon: Icon, href, color }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ width: "36px", height: "36px", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", transition: "all 0.2s ease", textDecoration: "none" }}
                    onMouseEnter={e => { e.currentTarget.style.background = color; e.currentTarget.style.borderColor = color; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* COL 2 — Quick Links */}
            <div>
              <h4 style={{ fontFamily: "var(--font-ui)", color: "#ffffff", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "2px solid #0EA5E9", display: "inline-block" }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Academics", href: "/academics" },
                  { label: "Admissions", href: "/admissions" },
                  { label: "School Life", href: "/school-life" },
                  { label: "News & Events", href: "/news" },
                  { label: "Gallery", href: "/gallery" },
                  { label: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}
                      style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s ease" }}
                      onMouseEnter={e => e.currentTarget.style.color = "#0EA5E9"}
                      onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                    >
                      <ChevronRight size={13} style={{ color: "#0EA5E9", flexShrink: 0 }} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 3 — Academics */}
            <div>
              <h4 style={{ fontFamily: "var(--font-ui)", color: "#ffffff", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "2px solid #0EA5E9", display: "inline-block" }}>
                Academics
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  { label: "Curriculum Overview", href: "/academics" },
                  { label: "Subjects Offered", href: "/academics#subjects" },
                  { label: "Academic Calendar", href: "/academics#calendar" },
                  { label: "Exam Results", href: "/academics#results" },
                  { label: "How to Apply", href: "/admissions" },
                  { label: "Fees Structure", href: "/admissions#fees" },
                  { label: "Download Forms", href: "/admissions#forms" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}
                      style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s ease" }}
                      onMouseEnter={e => e.currentTarget.style.color = "#0EA5E9"}
                      onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                    >
                      <ChevronRight size={13} style={{ color: "#0EA5E9", flexShrink: 0 }} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 4 — Contact Info */}
            <div>
              <h4 style={{ fontFamily: "var(--font-ui)", color: "#ffffff", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "2px solid #0EA5E9", display: "inline-block" }}>
                Contact Us
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <MapPin size={16} style={{ color: "#0EA5E9", flexShrink: 0, marginTop: "2px" }} />
                  <p style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", lineHeight: "1.6", margin: 0 }}>
                    Area 25, Sector 5B<br />
                    Lilongwe, Malawi<br />
                    P.O. Box 31326
                  </p>
                </div>
                <a href="tel:+265991627231"
                  style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s ease" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#0EA5E9"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                >
                  <Phone size={15} style={{ color: "#0EA5E9", flexShrink: 0 }} />
                  +265 99 162 7231
                </a>
                <a href="mailto:info@jampark.edu.mw"
                  style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s ease" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#0EA5E9"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                >
                  <Mail size={15} style={{ color: "#0EA5E9", flexShrink: 0 }} />
                 sylesscef@yahoo.com
                </a>
              </div>

              {/* Apply CTA */}
              <div style={{ marginTop: "1.75rem", padding: "1.25rem", background: "rgba(14,165,233,0.08)", borderLeft: "3px solid #0EA5E9" }}>
                <p style={{ fontFamily: "var(--font-ui)", color: "#ffffff", fontSize: "0.82rem", fontWeight: 600, margin: "0 0 0.75rem 0" }}>
                  Admissions Open 2026
                </p>
                <p style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.55)", fontSize: "0.78rem", margin: "0 0 1rem 0", lineHeight: "1.6" }}>
                  Applications are now being accepted for Form 1 intake.
                </p>
                <Link href="/apply"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "#0EA5E9", color: "#ffffff", padding: "0.55rem 1.1rem", fontFamily: "var(--font-ui)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", textDecoration: "none" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#0284C7"}
                  onMouseLeave={e => e.currentTarget.style.background = "#0EA5E9"}
                >
                  Apply Now
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ background: "#071829", paddingTop: "1rem", paddingBottom: "1rem" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.35)", fontSize: "0.78rem", margin: 0 }}>
            © {currentYear} Jam Park Pvt Secondary School. All rights reserved.
          </p>
       
        </div>
      </div>

    </footer>
  );
}