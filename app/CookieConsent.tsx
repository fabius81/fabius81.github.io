
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
        bottom: 20,
        left: 20,
        right: 20,
        maxWidth: 560,
        margin: "0 auto",
        padding: 24,
        borderRadius: 18,
        background: "var(--background)",
        color: "var(--foreground)",
        border: "1px solid var(--border)",
        boxShadow: "0 12px 45px rgba(0,0,0,0.18)",
        zIndex: 1000,
      }}
    >
      <h2 style={{ marginTop: 0, fontSize: 20 }}>{t.title}</h2>

      <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
        {t.description}
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          marginTop: 20,
        }}
      >
        <button
          className="button-primary"
          onClick={() => saveChoice("accepted")}
        >
          {t.accept}
        </button>

        <button
          className="button-secondary"
          onClick={() => saveChoice("rejected")}
        >
          {t.reject}
        </button>
      </div>
    </div>
  );
}
