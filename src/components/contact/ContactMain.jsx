"use client";
import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_k37827k";
const EMAILJS_TEMPLATE_ID = "template_dvt5o11";
const EMAILJS_PUBLIC_KEY = "uAgWQ-OiTRxazIfQ3";

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

const contactInfo = [
  { icon: Phone, color: "#0EA5E9", label: "Phone", value: "+265 99 162 7231", href: "tel:+265991627231", sub: "Call us during office hours" },
  { icon: FaWhatsapp, color: "#25D366", label: "WhatsApp", value: "+265 99 162 7231", href: "https://wa.me/265991627231", sub: "Message us anytime" },
  { icon: Mail, color: "#0EA5E9", label: "Email", value: "sylesscef@yahoo.com", href: "mailto:sylesscef@yahoo.com", sub: "We reply within 24 hours" },
  { icon: MapPin, color: "#16A34A", label: "Location", value: "Area 25, Sector 5B", href: "https://maps.google.com/?q=Lilongwe+Area+25", sub: "Lilongwe, Malawi — P.O. Box 31326" },
  { icon: Clock, color: "#16A34A", label: "Office Hours", value: "Mon – Fri: 7:30 AM – 4:30 PM", href: null, sub: "Closed on weekends & public holidays" },
];

export default function ContactMain() {
  const [formRef, formInView] = useInView(0.1);
  const [infoRef, infoInView] = useInView(0.1);

  const [form, setForm] = useState({
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    contact_subject: "",
    contact_message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.contact_name) { setError("Please enter your name."); return; }
    if (!form.contact_phone) { setError("Please enter your phone number."); return; }
    if (!form.contact_subject) { setError("Please select a subject."); return; }
    if (!form.contact_message) { setError("Please enter your message."); return; }

    setSubmitting(true);
    setError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          student_name: `CONTACT FORM — ${form.contact_name}`,
          student_dob: "N/A",
          student_gender: "N/A",
          student_school: "N/A",
          student_pslce: "N/A",
          applying_for: "N/A",
          guardian_name: form.contact_name,
          guardian_relationship: "N/A",
          guardian_phone: form.contact_phone,
          guardian_whatsapp: form.contact_phone,
          guardian_email: form.contact_email || "Not provided",
          how_heard: form.contact_subject,
          additional_notes: form.contact_message,
          submission_date: new Date().toLocaleString("en-GB", { dateStyle: "full", timeStyle: "short" }),
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "0.85rem 1rem",
    fontFamily: "var(--font-ui)",
    fontSize: "0.9rem",
    color: "#0C2340",
    background: "#ffffff",
    border: "1px solid #D1D5DB",
    outline: "none",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "var(--font-ui)",
    color: "#374151",
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    marginBottom: "0.5rem",
  };

  return (
    <section style={{ background: "#F8FAFC", padding: "6rem 0", overflow: "hidden" }}>
      <div className="container">
        <div className="contact-main-grid" style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 420px", 
          gap: "3rem", 
          alignItems: "start" 
        }}>
          
          {/* LEFT — FORM */}
          <div ref={formRef} style={{ 
            opacity: formInView ? 1 : 0, 
            transform: formInView ? "translateX(0)" : "translateX(-50px)", 
            transition: "opacity 0.8s ease, transform 0.8s ease" 
          }}>
            <div style={{ background: "#ffffff", border: "1px solid #E5E9EF", borderTop: "3px solid #0EA5E9", overflow: "hidden" }}>
              <div style={{ padding: "1.75rem 2rem", borderBottom: "1px solid #E5E9EF" }}>
                <span style={{ fontFamily: "var(--font-ui)", color: "#0EA5E9", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                  Send us a Message
                </span>
                <h2 style={{ fontFamily: "var(--font-display)", color: "#0C2340", fontWeight: 800, fontSize: "1.6rem", margin: 0, lineHeight: 1.2 }}>
                  We'd Love to Hear From You
                </h2>
              </div>

              <div style={{ padding: "2rem" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                    <div style={{ width: "64px", height: "64px", background: "rgba(22,163,74,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem auto" }}>
                      <CheckCircle size={30} style={{ color: "#16A34A" }} />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", color: "#0C2340", fontWeight: 700, fontSize: "1.3rem", margin: "0 0 0.75rem 0" }}>
                      Message Sent!
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", color: "#6B7280", fontSize: "0.92rem", lineHeight: 1.8, margin: "0 0 1.5rem 0" }}>
                      Thank you for reaching out. We will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { 
                        setSubmitted(false); 
                        setForm({ contact_name: "", contact_email: "", contact_phone: "", contact_subject: "", contact_message: "" }); 
                      }}
                      style={{ 
                        background: "#0C2340", 
                        color: "#ffffff", 
                        padding: "0.8rem 1.75rem", 
                        fontFamily: "var(--font-ui)", 
                        fontWeight: 700, 
                        fontSize: "0.78rem", 
                        letterSpacing: "0.08em", 
                        textTransform: "uppercase", 
                        border: "none", 
                        cursor: "pointer" 
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div className="form-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div>
                        <label style={labelStyle}>Full Name *</label>
                        <input name="contact_name" value={form.contact_name} onChange={handleChange} placeholder="Your full name" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Phone Number *</label>
                        <input name="contact_phone" value={form.contact_phone} onChange={handleChange} placeholder="+265 99 162 7231" style={inputStyle} />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Email Address (Optional)</label>
                      <input type="email" name="contact_email" value={form.contact_email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} />
                    </div>

                    <div>
                      <label style={labelStyle}>Subject *</label>
                      <select name="contact_subject" value={form.contact_subject} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                        <option value="">Select a subject</option>
                        <option value="Admissions Enquiry">Admissions Enquiry</option>
                        <option value="Fees Enquiry">Fees Enquiry</option>
                        <option value="Academic Enquiry">Academic Enquiry</option>
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label style={labelStyle}>Message *</label>
                      <textarea 
                        name="contact_message" 
                        value={form.contact_message} 
                        onChange={handleChange} 
                        placeholder="Write your message here..." 
                        rows={5} 
                        style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }} 
                      />
                    </div>

                    {error && (
                      <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderLeft: "3px solid #EF4444", padding: "0.85rem 1rem" }}>
                        <p style={{ fontFamily: "var(--font-ui)", color: "#991B1B", fontSize: "0.83rem", margin: 0 }}>{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      style={{ 
                        display: "inline-flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        gap: "0.5rem", 
                        background: submitting ? "#9CA3AF" : "#0C2340", 
                        color: "#ffffff", 
                        padding: "1rem 2rem", 
                        fontFamily: "var(--font-ui)", 
                        fontWeight: 700, 
                        fontSize: "0.82rem", 
                        letterSpacing: "0.08em", 
                        textTransform: "uppercase", 
                        border: "none", 
                        cursor: submitting ? "not-allowed" : "pointer", 
                        transition: "background 0.25s ease", 
                        width: "100%" 
                      }}
                    >
                      {submitting ? "Sending..." : "Send Message"}
                      {!submitting && <Send size={15} />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT — CONTACT INFO + WHATSAPP BUTTON */}
          <div ref={infoRef} style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "1rem", 
            opacity: infoInView ? 1 : 0, 
            transform: infoInView ? "translateX(0)" : "translateX(50px)", 
            transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s" 
          }}>
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  style={{ 
                    background: "#ffffff", 
                    border: "1px solid #E5E9EF", 
                    borderLeft: `3px solid ${item.color}`, 
                    padding: "1.25rem 1.5rem", 
                    display: "flex", 
                    alignItems: "flex-start", 
                    gap: "1rem" 
                  }}
                >
                  <div style={{ 
                    width: "42px", 
                    height: "42px", 
                    background: `rgba(${item.color === "#0EA5E9" ? "14,165,233" : item.color === "#25D366" ? "37,211,102" : "22,163,74"}, 0.08)`, 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    flexShrink: 0 
                  }}>
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "var(--font-ui)", color: "#9CA3AF", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 0.3rem 0" }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target={item.href.startsWith("http") ? "_blank" : "_self"} 
                        rel="noopener noreferrer"
                        style={{ fontFamily: "var(--font-ui)", color: "#0C2340", fontSize: "0.9rem", fontWeight: 700, textDecoration: "none", display: "block", marginBottom: "0.2rem" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontFamily: "var(--font-ui)", color: "#0C2340", fontSize: "0.9rem", fontWeight: 700, margin: "0 0 0.2rem 0" }}>
                        {item.value}
                      </p>
                    )}
                    <p style={{ fontFamily: "var(--font-ui)", color: "#9CA3AF", fontSize: "0.75rem", margin: 0 }}>
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* WhatsApp Big Button */}
            <a
              href="https://wa.me/265991627231"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: "0.6rem", 
                background: "#25D366", 
                color: "#ffffff", 
                padding: "1rem", 
                fontFamily: "var(--font-ui)", 
                fontWeight: 700, 
                fontSize: "0.82rem", 
                letterSpacing: "0.08em", 
                textTransform: "uppercase", 
                textDecoration: "none", 
                transition: "background 0.25s ease",
                marginTop: "0.5rem"
              }}
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* MAP */}
        <div id="map" style={{ marginTop: "4rem", border: "1px solid #E5E9EF", overflow: "hidden", borderTop: "3px solid #0EA5E9" }}>
          <div style={{ padding: "1.25rem 1.5rem", background: "#ffffff", borderBottom: "1px solid #E5E9EF" }}>
            <p style={{ fontFamily: "var(--font-ui)", color: "#0C2340", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>
              Find Us — Area 25, Sector 5B, Lilongwe, Malawi
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61568.54!2d33.7741!3d-13.9626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d4a89a6a7b0f%3A0x5c5a7c6c5c5a7c6c!2sLilongwe%2C%20Malawi!5e0!3m2!1sen!2smw!4v1234567890"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jam Park Location"
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-main-grid { grid-template-columns: 1fr !important; }
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}