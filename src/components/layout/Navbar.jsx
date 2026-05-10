"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics", children: [{ label: "Curriculum Overview", href: "/academics" }, { label: "Subjects Offered", href: "/academics#subjects" }, { label: "Academic Calendar", href: "/academics#calendar" }] },
  { label: "Admissions", href: "/admissions", children: [{ label: "How to Apply", href: "/admissions" }, { label: "Entry Requirements", href: "/admissions#requirements" }, { label: "Fees Structure", href: "/admissions#fees" }] },
  { label: "School Life", href: "/school-life", children: [{ label: "Co-Curricular Activities", href: "/school-life" }, { label: "Sports", href: "/school-life#sports" }, { label: "Clubs & Societies", href: "/school-life#clubs" }, { label: "Gallery", href: "/gallery" }] },

  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [isMobile, setIsMobile] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const desktopNavRef = useRef(null);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsTablet(window.innerWidth >= 768);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target)) setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navBg = scrolled ? "#ffffff" : "#0C2340";
  const navShadow = scrolled ? "0 4px 24px rgba(0,0,0,0.10)" : "none";
  const logoTitleColor = scrolled ? "#0C2340" : "#ffffff";
  const logoSubColor = scrolled ? "#6B7280" : "rgba(255,255,255,0.6)";
  const linkColor = scrolled ? "#0C2340" : "rgba(255,255,255,0.90)";
  const hamburgerColor = scrolled ? "#0C2340" : "#ffffff";
  const navBorder = scrolled ? "1px solid #E5E9EF" : "1px solid rgba(255,255,255,0.08)";

  const handleHamburger = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  return (
    <header style={{ width: "100%", position: "fixed", top: 0, left: 0, zIndex: 50 }}>

      {/* TOP BAR — tablet and above only */}
      {isTablet && (
        <div style={{ background: "#0C2340", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "0.4rem", paddingBottom: "0.4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <a href="tel:+265991627231" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem", color: "#ffffff", textDecoration: "none" }}>
                <Phone size={11} /> +265 99 162 7231
              </a>
              <a href="mailto:info@jampark.edu.mw" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem", color: "#ffffff", textDecoration: "none" }}>
                <Mail size={11} />sylesscef@yahoo.com
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.72rem", color: "rgba(255,255,255,0.70)", letterSpacing: "0.05em" }}>
              <span>Area 25, Sector 5B, Lilongwe, Malawi</span>
              <span style={{ color: "rgba(255,255,255,0.25)" }}>|</span>
              <span>P.O. Box 31326</span>
            </div>
          </div>
        </div>
      )}

      {/* MAIN NAV */}
      <nav style={{ background: navBg, borderBottom: navBorder, boxShadow: navShadow, transition: "all 0.35s ease" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", paddingBottom: "1rem" }}>

          {/* LOGO — always visible */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
            <Image src="/logo.png" alt="Jam Park Logo" width={55} height={55} style={{ objectFit: "contain" }} />
            <div>
              <p style={{ fontFamily: "var(--font-display)", color: logoTitleColor, fontWeight: 800, fontSize: isMobile ? "0.9rem" : "1.05rem", lineHeight: "1.15", margin: 0, transition: "color 0.3s ease" }}>
                JAM PARK
              </p>
              <p style={{ fontFamily: "var(--font-ui)", color: logoSubColor, fontSize: "0.55rem", letterSpacing: "0.12em", textTransform: "uppercase", margin: 0, transition: "color 0.3s ease" }}>
                {isMobile ? "Pvt Secondary School" : "Private Secondary School"}
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          {!isMobile && (
            <ul ref={desktopNavRef} style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", alignItems: "center", gap: "0.1rem" }}>
              {navLinks.map((link) => (
                <li key={link.label} style={{ position: "relative" }}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontFamily: "var(--font-ui)", color: linkColor, fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.6rem 0.9rem", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s ease", whiteSpace: "nowrap" }}
                      >
                        {link.label}
                        <ChevronDown size={13} style={{ transition: "transform 0.2s ease", transform: activeDropdown === link.label ? "rotate(180deg)" : "rotate(0deg)", opacity: 0.7 }} />
                      </button>
                      {activeDropdown === link.label && (
                        <div style={{ position: "absolute", top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", background: "#ffffff", boxShadow: "0 8px 40px rgba(0,0,0,0.12)", borderTop: "3px solid #0EA5E9", minWidth: "220px", zIndex: 100 }}>
                          {link.children.map((child) => (
                            <Link key={child.href} href={child.href} onClick={() => setActiveDropdown(null)}
                              style={{ display: "block", padding: "0.75rem 1.25rem", fontFamily: "var(--font-ui)", fontSize: "0.82rem", fontWeight: 500, color: "#0C2340", borderBottom: "1px solid #E5E9EF", transition: "all 0.15s ease", textDecoration: "none" }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={link.href}
                      style={{ fontFamily: "var(--font-ui)", color: linkColor, fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.6rem 0.9rem", display: "block", transition: "color 0.2s ease", whiteSpace: "nowrap", textDecoration: "none" }}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}

          {/* DESKTOP APPLY BUTTON */}
          {!isMobile && (
            <Link href="/apply" className="btn-primary" style={{ fontSize: "0.75rem", padding: "0.65rem 1.4rem", whiteSpace: "nowrap" }}>
              Apply Now
            </Link>
          )}

          {/* MOBILE — Apply + Hamburger */}
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Link href="/apply" className="btn-primary" style={{ fontSize: "0.65rem", padding: "0.4rem 0.75rem", whiteSpace: "nowrap" }}>
                Apply Now
              </Link>
              <button
                onClick={handleHamburger}
                onTouchEnd={handleHamburger}
                style={{
                  color: hamburgerColor,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "44px",
                  minHeight: "44px",
                  WebkitTapHighlightColor: "transparent",
                  touchAction: "manipulation",
                  zIndex: 999,
                  position: "relative",
                }}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          )}

        </div>
      </nav>

      {/* MOBILE MENU DRAWER */}
      {isMobile && (
        <div style={{ background: "#0C2340", maxHeight: menuOpen ? "100vh" : "0", overflow: "hidden", transition: "max-height 0.45s ease", width: "100%" }}>
          <div className="container" style={{ paddingTop: "1rem", paddingBottom: "1.5rem", display: "flex", flexDirection: "column" }}>
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.9)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.9rem 0", borderTop: "none", borderLeft: "none", borderRight: "none", borderBottom: "1px solid rgba(255,255,255,0.07)", background: "none", cursor: "pointer", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", touchAction: "manipulation" }}
                    >
                      {link.label}
                      <ChevronDown size={14} style={{ color: "rgba(255,255,255,0.5)", transform: mobileExpanded === link.label ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }} />
                    </button>
                    {mobileExpanded === link.label && (
                      <div style={{ background: "rgba(255,255,255,0.04)", padding: "0.25rem 0 0.25rem 1rem" }}>
                        {link.children.map((child) => (
                          <Link key={child.href} href={child.href}
                            onClick={() => { setMenuOpen(false); setMobileExpanded(null); }}
                            style={{ display: "block", fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.75)", fontSize: "0.8rem", fontWeight: 400, padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.04)", transition: "color 0.2s ease", textDecoration: "none" }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href} onClick={() => setMenuOpen(false)}
                    style={{ display: "block", fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.9)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.9rem 0", borderBottom: "1px solid rgba(255,255,255,0.07)", transition: "color 0.2s ease", textDecoration: "none" }}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href="tel:+265991627231" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "#ffffff", textDecoration: "none" }}>
                <Phone size={13} /> +265 99 162 7231
              </a>
              <a href="mailto:info@jampark.edu.mw" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "#ffffff", textDecoration: "none" }}>
                <Mail size={13} />sylesscef@yahoo.com
              </a>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}