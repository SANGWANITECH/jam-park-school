"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function UniversitySelectionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("universityPopupSeen");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem("universityPopupSeen", "true");
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        padding: "1rem",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "500px",
          animation: "fadeIn 0.3s ease",
        }}
      >
        {/* Close Button */}
        <button
          onClick={closePopup}
          aria-label="Close popup"
          style={{
            position: "absolute",
            top: "-14px",
            right: "-14px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "none",
            background: "#ffffff",
            color: "#000",
            fontSize: "1.2rem",
            fontWeight: "bold",
            cursor: "pointer",
            zIndex: 10,
            boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
          }}
        >
          ×
        </button>

        {/* Poster */}
        <div
          style={{
            borderRadius: "18px",
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
          }}
        >
          <Image
            src="/images/university-selection-poster.jpg"
            alt="University Selection Poster"
            width={800}
            height={1200}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
}