"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle, User, Users, BookOpen, Send, ChevronRight } from "lucide-react";
import emailjs from "@emailjs/browser";

// ── EmailJS Credentials ──
const EMAILJS_SERVICE_ID = "service_k37827k";
const EMAILJS_TEMPLATE_ID = "template_dvt5o11";
const EMAILJS_PUBLIC_KEY = "uAgWQ-OiTRxazIfQ3";

const steps = [
  { id: 1, label: "Student Info", icon: User },
  { id: 2, label: "Guardian Info", icon: Users },
  { id: 3, label: "Programme", icon: BookOpen },
  { id: 4, label: "Submit", icon: Send },
];

const initialForm = {
  student_name: "",
  student_dob: "",
  student_gender: "",
  student_school: "",
  student_pslce: "",
  guardian_name: "",
  guardian_relationship: "",
  guardian_phone: "",
  guardian_whatsapp: "",
  guardian_email: "",
  applying_for: "Form 1",
  how_heard: "",
  additional_notes: "",
};

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const navOffset = isMobile ? "72px" : "105px";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const validateStep = () => {
    if (currentStep === 1) {
      if (!form.student_name) return "Please enter the student's full name.";
      if (!form.student_dob) return "Please enter the student's date of birth.";
      if (!form.student_gender) return "Please select the student's gender.";
      if (!form.student_school) return "Please enter the student's previous school.";
      if (!form.student_pslce) return "Please enter the student's PSLCE grade.";
    }
    if (currentStep === 2) {
      if (!form.guardian_name) return "Please enter the guardian's full name.";
      if (!form.guardian_relationship) return "Please enter your relationship to the student.";
      if (!form.guardian_phone) return "Please enter a phone number.";
      if (!form.guardian_whatsapp) return "Please enter a WhatsApp number.";
    }
    if (currentStep === 3) {
      if (!form.how_heard) return "Please tell us how you heard about Jam Park.";
    }
    return null;
  };

  const nextStep = () => {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    setCurrentStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setCurrentStep((s) => s - 1);
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          ...form,
          submission_date: new Date().toLocaleString("en-GB", {
            dateStyle: "full",
            timeStyle: "short",
          }),
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again or contact us directly.");
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
    borderRadius: "0",
    outline: "none",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "var(--font-ui)",
    color: "#374151",
    fontSize: "0.8rem",
    fontWeight: 600,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    marginBottom: "0.5rem",
  };

  // SUCCESS STATE
  if (submitted) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "#F8FAFC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: navOffset,
        padding: "3rem 1.5rem",
      }}>
        <div style={{
          background: "#ffffff",
          border: "1px solid #E5E9EF",
          borderTop: "4px solid #16A34A",
          padding: "3rem",
          maxWidth: "560px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
        }}>
          <div style={{
            width: "72px",
            height: "72px",
            background: "rgba(22,163,74,0.1)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem auto",
          }}>
            <CheckCircle size={36} style={{ color: "#16A34A" }} />
          </div>

          <h2 style={{
            fontFamily: "var(--font-display)",
            color: "#0C2340",
            fontWeight: 800,
            fontSize: "1.8rem",
            margin: "0 0 1rem 0",
          }}>
            Application Submitted!
          </h2>

          <p style={{
            fontFamily: "var(--font-body)",
            color: "#6B7280",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            margin: "0 0 0.75rem 0",
          }}>
            Thank you, <strong style={{ color: "#0C2340" }}>{form.guardian_name}</strong>. Your application for <strong style={{ color: "#0C2340" }}>{form.student_name}</strong> has been received successfully.
          </p>

          <p style={{
            fontFamily: "var(--font-body)",
            color: "#6B7280",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            margin: "0 0 2rem 0",
          }}>
            Our admissions team will review your application and contact you within <strong style={{ color: "#0C2340" }}>3 to 5 working days</strong>.
          </p>

          <a
            href={`https://wa.me/265991627231?text=Hello%2C%20I%20just%20submitted%20an%20application%20for%20${encodeURIComponent(form.student_name)}%20on%20the%20Jam%20Park%20website.%20Kindly%20confirm%20receipt.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#25D366",
              color: "#ffffff",
              padding: "0.9rem 2rem",
              fontFamily: "var(--font-ui)",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              marginBottom: "1rem",
              width: "100%",
              justifyContent: "center",
              borderRadius: "6px",
            }}
          >
            Follow Up on WhatsApp
          </a>

          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "transparent",
              color: "#0C2340",
              padding: "0.9rem 2rem",
              fontFamily: "var(--font-ui)",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "2px solid #0C2340",
              width: "100%",
              justifyContent: "center",
              borderRadius: "6px",
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFC", marginTop: navOffset }}>
      {/* TOP HERO STRIP */}
      <div style={{
        background: "#0C2340",
        padding: "3rem 0",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(14,165,233,0.1) 0%, transparent 50%)",
        }} />
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "3px",
          background: "linear-gradient(to right, #0EA5E9, #16A34A)",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "1rem" }}>
            <Link href="/" style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
              Home
            </Link>
            <ChevronRight size={12} style={{ color: "rgba(255,255,255,0.25)" }} />
            <Link href="/admissions" style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
              Admissions
            </Link>
            <ChevronRight size={12} style={{ color: "rgba(255,255,255,0.25)" }} />
            <span style={{ fontFamily: "var(--font-ui)", color: "#0EA5E9", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Apply
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)",
            color: "#ffffff",
            fontWeight: 900,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            margin: "0 0 0.5rem 0",
            lineHeight: 1.1,
          }}>
            Online Application Form
          </h1>
          <p style={{
            fontFamily: "var(--font-body)",
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.95rem",
            margin: 0,
            lineHeight: 1.7,
          }}>
            Complete all sections carefully. All fields marked * are required.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: "3rem 1.5rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "280px 1fr",
          gap: "2rem",
          alignItems: "start",
        }}>
          {/* SIDEBAR — Steps */}
          <div style={{
            background: "#ffffff",
            border: "1px solid #E5E9EF",
            overflow: "hidden",
            position: isMobile ? "static" : "sticky",
            top: "130px",
          }}>
            <div style={{
              background: "#0C2340",
              padding: "1.25rem 1.5rem",
              borderBottom: "3px solid #0EA5E9",
            }}>
              <p style={{
                fontFamily: "var(--font-ui)",
                color: "#ffffff",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                margin: 0,
              }}>
                Application Progress
              </p>
            </div>

            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isDone = currentStep > step.id;
              return (
                <div
                  key={step.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.1rem 1.5rem",
                    background: isActive ? "#EFF6FF" : "#ffffff",
                    borderLeft: isActive ? "3px solid #0EA5E9" : "3px solid transparent",
                    borderBottom: "1px solid #F3F4F6",
                  }}
                >
                  <div style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: isDone ? "#16A34A" : isActive ? "#0EA5E9" : "#F3F4F6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {isDone ? (
                      <CheckCircle size={16} style={{ color: "#ffffff" }} />
                    ) : (
                      <Icon size={16} style={{ color: isActive ? "#ffffff" : "#9CA3AF" }} />
                    )}
                  </div>
                  <div>
                    <p style={{
                      fontFamily: "var(--font-ui)",
                      color: "#9CA3AF",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      margin: "0 0 0.15rem 0",
                    }}>
                      Step {step.id}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-ui)",
                      color: isActive ? "#0C2340" : isDone ? "#16A34A" : "#9CA3AF",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      margin: 0,
                    }}>
                      {step.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* MAIN FORM AREA */}
          <div style={{
            background: "#ffffff",
            border: "1px solid #E5E9EF",
            overflow: "hidden",
          }}>
            {/* Form Header */}
            <div style={{
              padding: "1.5rem 2rem",
              borderBottom: "1px solid #E5E9EF",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#F8FAFC",
            }}>
              <div>
                <p style={{
                  fontFamily: "var(--font-ui)",
                  color: "#0EA5E9",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  margin: "0 0 0.25rem 0",
                }}>
                  Step {currentStep} of {steps.length}
                </p>
                <p style={{
                  fontFamily: "var(--font-display)",
                  color: "#0C2340",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  margin: 0,
                }}>
                  {steps[currentStep - 1].label}
                </p>
              </div>

              <div style={{ width: "120px" }}>
                <div style={{ height: "4px", background: "#E5E9EF", borderRadius: "2px", overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    width: `${(currentStep / steps.length) * 100}%`,
                    background: "#0EA5E9",
                    transition: "width 0.4s ease",
                  }} />
                </div>
                <p style={{
                  fontFamily: "var(--font-ui)",
                  color: "#9CA3AF",
                  fontSize: "0.68rem",
                  textAlign: "right",
                  margin: "0.3rem 0 0 0",
                }}>
                  {Math.round((currentStep / steps.length) * 100)}% complete
                </p>
              </div>
            </div>

            {/* FORM FIELDS */}
            <div style={{ padding: "2rem" }}>
              {/* STEP 1 */}
              {currentStep === 1 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    <label style={labelStyle}>Student's Full Name *</label>
                    <input name="student_name" value={form.student_name} onChange={handleChange} placeholder="e.g. Chisomo Banda" style={inputStyle} />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={labelStyle}>Date of Birth *</label>
                      <input type="date" name="student_dob" value={form.student_dob} onChange={handleChange} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Gender *</label>
                      <select name="student_gender" value={form.student_gender} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Previous School Attended *</label>
                    <input name="student_school" value={form.student_school} onChange={handleChange} placeholder="e.g. Lilongwe Primary School" style={inputStyle} />
                  </div>

                  <div>
                    <label style={labelStyle}>PSLCE Overall Grade *</label>
                    <select name="student_pslce" value={form.student_pslce} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="">Select grade</option>
                      <option value="Distinction">Distinction</option>
                      <option value="Credit">Credit</option>
                      <option value="Pass">Pass</option>
                      <option value="Fail">Fail</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {currentStep === 2 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div>
                    <label style={labelStyle}>Guardian's Full Name *</label>
                    <input name="guardian_name" value={form.guardian_name} onChange={handleChange} placeholder="e.g. James Banda" style={inputStyle} />
                  </div>

                  <div>
                    <label style={labelStyle}>Relationship to Student *</label>
                    <select name="guardian_relationship" value={form.guardian_relationship} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="">Select relationship</option>
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Guardian">Guardian</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={labelStyle}>Phone Number *</label>
                      <input name="guardian_phone" value={form.guardian_phone} onChange={handleChange} placeholder="+265 99 162 7231" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>WhatsApp Number *</label>
                      <input name="guardian_whatsapp" value={form.guardian_whatsapp} onChange={handleChange} placeholder="+265 99 162 7231" style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Email Address (Optional)</label>
                    <input type="email" name="guardian_email" value={form.guardian_email} onChange={handleChange} placeholder="guardian@example.com" style={inputStyle} />
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {currentStep === 3 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div>
                    <label style={labelStyle}>Applying For *</label>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {["Form 1 (JCE — Year 1)", "Form 3 (MSCE — Year 1)"].map((option) => {
                        const val = option.split(" (")[0];
                        return (
                          <label key={option} style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.85rem",
                            padding: "1rem 1.25rem",
                            border: `2px solid ${form.applying_for === val ? "#0EA5E9" : "#E5E9EF"}`,
                            background: form.applying_for === val ? "#EFF6FF" : "#ffffff",
                            cursor: "pointer",
                            borderRadius: "4px",
                          }}>
                            <input
                              type="radio"
                              name="applying_for"
                              value={val}
                              checked={form.applying_for === val}
                              onChange={handleChange}
                            />
                            <span>{option}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>How Did You Hear About Us? *</label>
                    <select name="how_heard" value={form.how_heard} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="">Select an option</option>
                      <option value="Friend or Family">Friend or Family</option>
                      <option value="Facebook">Facebook</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="School Notice">School Notice</option>
                      <option value="Newspaper">Newspaper</option>
                      <option value="Passing by the school">Passing by the school</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Additional Notes (Optional)</label>
                    <textarea
                      name="additional_notes"
                      value={form.additional_notes}
                      onChange={handleChange}
                      placeholder="Any special needs, medical conditions or other information..."
                      rows={4}
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>
                </div>
              )}

              {/* STEP 4 - REVIEW */}
              {currentStep === 4 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {/* Review Summary */}
                  {[
                    { title: "Student Information", fields: [
                      { label: "Full Name", value: form.student_name },
                      { label: "Date of Birth", value: form.student_dob },
                      { label: "Gender", value: form.student_gender },
                      { label: "Previous School", value: form.student_school },
                      { label: "PSLCE Grade", value: form.student_pslce },
                    ]},
                    { title: "Guardian Information", fields: [
                      { label: "Guardian Name", value: form.guardian_name },
                      { label: "Relationship", value: form.guardian_relationship },
                      { label: "Phone", value: form.guardian_phone },
                      { label: "WhatsApp", value: form.guardian_whatsapp },
                      { label: "Email", value: form.guardian_email || "Not provided" },
                    ]},
                    { title: "Programme Details", fields: [
                      { label: "Applying For", value: form.applying_for },
                      { label: "How Heard", value: form.how_heard },
                      { label: "Notes", value: form.additional_notes || "None" },
                    ]},
                  ].map((section, si) => (
                    <div key={si} style={{ border: "1px solid #E5E9EF" }}>
                      <div style={{ background: "#F8FAFC", padding: "0.85rem 1.25rem", borderBottom: "1px solid #E5E9EF" }}>
                        <p style={{ fontWeight: 700, margin: 0 }}>{section.title}</p>
                      </div>
                      {section.fields.map((field, fi) => (
                        <div key={fi} style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0.85rem 1.25rem",
                          borderBottom: fi < section.fields.length - 1 ? "1px solid #F3F4F6" : "none",
                        }}>
                          <span style={{ color: "#6B7280" }}>{field.label}</span>
                          <span style={{ fontWeight: 600 }}>{field.value}</span>
                        </div>
                      ))}
                    </div>
                  ))}

                  <div style={{
                    background: "#F8FAFC",
                    borderLeft: "4px solid #0EA5E9",
                    padding: "1.5rem",
                    fontSize: "0.9rem",
                  }}>
                    By submitting this application, you confirm that all information is accurate. A non-refundable application fee of MWK 20,000 will be required upon arrival.
                  </div>
                </div>
              )}

              {error && (
                <div style={{
                  marginTop: "1.5rem",
                  background: "#FEF2F2",
                  borderLeft: "4px solid #EF4444",
                  padding: "1rem 1.25rem",
                  color: "#991B1B",
                }}>
                  {error}
                </div>
              )}

              {/* Navigation Buttons */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2.5rem",
                flexWrap: "wrap",
                gap: "1rem",
              }}>
                {currentStep > 1 && (
                  <button onClick={prevStep} style={{
                    padding: "0.85rem 1.75rem",
                    background: "transparent",
                    border: "2px solid #0C2340",
                    color: "#0C2340",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}>
                    ← Previous
                  </button>
                )}

                {currentStep < 4 ? (
                  <button onClick={nextStep} style={{
                    padding: "0.85rem 2rem",
                    background: "#0EA5E9",
                    color: "#fff",
                    border: "none",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}>
                    Continue →
                  </button>
                ) : (
                  <button onClick={handleSubmit} disabled={submitting} style={{
                    padding: "0.85rem 2rem",
                    background: submitting ? "#9CA3AF" : "#16A34A",
                    color: "#fff",
                    border: "none",
                    fontWeight: 700,
                    cursor: submitting ? "not-allowed" : "pointer",
                  }}>
                    {submitting ? "Submitting Application..." : "Submit Application"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}