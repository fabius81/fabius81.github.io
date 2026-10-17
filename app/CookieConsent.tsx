
"use client";

import { useEffect, useState } from "react";

type Language = "en" | "it";
type ConsentChoice = "accepted" | "rejected" | null;

type Props = {
  language: Language;
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const STORAGE_KEY = "fabio-cookie-consent";

const translations = {
  en: {
    title: "Your privacy matters",
    description:
      "This website uses optional analytics cookies to understand how visitors use the site. You can accept or reject them.",
    accept: "Accept analytics",
    reject: "Reject analytics",
    preferences: "Cookie preferences",
  },
  it: {
    title: "La tua privacy è importante",
    description:
      "Questo sito utilizza cookie analitici facoltativi per capire come viene utilizzato. Puoi accettarli o rifiutarli.",
    accept: "Accetta analytics",
    reject: "Rifiuta analytics",
    preferences: "Preferenze cookie",
  },
};

export default function CookieConsent({ language }: Props) {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [visible, setVisible] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved === "accepted" || saved === "rejected") {
      setChoice(saved);
      updateConsent(saved);
    } else {
      setVisible(true);
    }
  }, []);

  function updateConsent(value: Exclude<ConsentChoice, null>) {
    window.dataLayer = window.dataLayer || [];

    window.gtag =
      window.gtag ||
      function (...args: unknown[]) {
        window.dataLayer.push(args);
      };

    window.gtag("consent", "update", {
      analytics_storage:
        value === "accepted" ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });

    if (value === "accepted") {
      window.dataLayer.push({
        event: "analytics_consent_granted",
      });
    }
  }

  function saveChoice(value: Exclude<ConsentChoice, null>) {
    localStorage.setItem(STORAGE_KEY, value);
    setChoice(value);
    updateConsent(value);
    setVisible(false);
  }

  useEffect(() => {
    const openPreferences = () => setVisible(true);

    window.addEventListener("open-cookie-preferences", openPreferences);

    return () => {
      window.removeEventListener(
        "open-cookie-preferences",
        openPreferences
      );
    };
  }, []);

  if (!visible) return null;


  return (
    <div
      role="dialog"
      aria-label={t.title}
      style={{
        position: "fixed",
        bottom: 16,
        left: 16,
        right: 16,
        maxWidth: 900,
        margin: "0 auto",
        padding: "18px 22px",
        borderRadius: 18,
        background: "#101a30",
        color: "#ffffff",
        boxShadow: "0 12px 40px rgba(0,0,0,0.22)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ flex: "1 1 260px", minWidth: 0 }}>
          <h2
            style={{
              margin: "0 0 6px",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            {language === "en"
              ? "Privacy & Analytics"
              : "Privacy e Analytics"}
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 13,
              lineHeight: 1.5,
              color: "#d1d9e8",
            }}
          >
            {language === "en"
              ? "We use optional analytics to improve this website. Your choice, your privacy."
              : "Utilizziamo analytics facoltativi per migliorare il sito. La scelta è tua."}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flex: "0 1 auto",
            gap: 8,
            width: "min(100%, 260px)",
          }}
        >
          <button
            onClick={() => saveChoice("accepted")}
            style={{
              flex: 1,
              padding: "11px 12px",
              borderRadius: 999,
              background: "#ffffff",
              color: "#101a30",
              border: "1px solid #ffffff",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {language === "en" ? "Accept" : "Accetta"}
          </button>

          <button
            onClick={() => saveChoice("rejected")}
            style={{
              flex: 1,
              padding: "11px 12px",
              borderRadius: 999,
              background: "transparent",
              color: "#ffffff",
              border: "1px solid #75849e",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {language === "en" ? "Reject" : "Rifiuta"}
          </button>
        </div>
      </div>
    </div>
  );
}
