"use client";

import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Download,
  Github,
  Languages,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Language = "en" | "it";

const copy = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      resume: "Resume",
      contact: "Contact"
    },
    hero: {
      availability: "Open to senior opportunities across Europe",
      intro: "Hi, I’m Fabio Di Paolo.",
      title: "I connect enterprise customers, technology and delivery.",
      description:
        "Senior Solution Consultant with a technical background and 18+ years in digital technology. I help customers turn complex requirements into practical solutions, coordinating business, product and engineering teams from discovery to successful delivery.",
      primary: "Explore my experience",
      secondary: "Download resume",
      stat1: "Years in digital & technology",
      stat2: "Enterprise customer focus",
      stat3: "Revenue growth on a key account"
    },
    about: {
      eyebrow: "About me",
      title: "A technical career shaped by customers, products and complex projects.",
      p1:
        "I started my career in software development and digital products. Over time, I discovered that my strongest contribution happens at the intersection of technology and people: understanding what a customer is trying to achieve, translating it into a clear technical path and bringing the right teams together.",
      p2:
        "Today I work across solution consulting, technical delivery, customer success and project coordination. I am comfortable discussing APIs and integrations with engineers, business outcomes with stakeholders and implementation plans with delivery teams.",
      p3:
        "I am now looking to bring this experience into an international, product-led technology company, with particular interest in AI, SaaS, developer tools and enterprise platforms.",
      valuesTitle: "How I work",
      values: [
        "Listen first and identify the real business outcome.",
        "Be transparent about constraints, risks and trade-offs.",
        "Create momentum with practical short-term solutions.",
        "Build trust through ownership and consistent delivery."
      ]
    },
    experience: {
      eyebrow: "Experience",
      title: "From software development to enterprise solution consulting.",
      description:
        "A career progression built around increasing responsibility for customers, implementations and cross-functional delivery.",
      roles: [
        {
          company: "RTL AdAlliance / smartclip",
          role: "Senior Solution Consultant",
          period: "2021 — 2026",
          summary:
            "Owned enterprise solution consulting and technical delivery for strategic media customers, acting as the bridge between client stakeholders, sales, product and engineering.",
          achievements: [
            "Supported a strategic account that grew revenue by more than 50% over two years.",
            "Led complex implementations involving video advertising, CTV, SDKs, APIs, privacy and measurement.",
            "Coordinated technical troubleshooting, testing, stakeholder communication and delivery planning.",
            "Delivered workshops and translated business requirements into actionable technical solutions."
          ],
          stack: "JavaScript · Node.js · REST APIs · SDKs · JSON · XML · Python · AdTech"
        },
        {
          company: "Good Move",
          role: "Technical Project Manager",
          period: "2019 — 2021",
          summary:
            "Managed technical delivery, publisher onboarding, ad-platform migrations and monetisation projects across multiple digital properties.",
          achievements: [
            "Led a full migration to Google Ad Manager, including EBDA and Prebid.js integrations.",
            "Coordinated engineering, commercial teams, publishers and external technology partners.",
            "Improved operational efficiency and helped protect revenue during a challenging market period."
          ],
          stack: "JavaScript · PHP · GitHub · Google Ad Manager · Prebid · Analytics"
        },
        {
          company: "Freedompro",
          role: "Technical Account Manager & Developer",
          period: "2015 — 2019",
          summary:
            "Progressed from software development to technical account management for IoT and smart-home platforms.",
          achievements: [
            "Owned customer onboarding, technical implementations and solution delivery.",
            "Coordinated engineering, QA and customer teams across integrations and product releases.",
            "Delivered technical training, workshops and troubleshooting support."
          ],
          stack: "Node.js · Java · SQLite · REST APIs · Networking · Bash · QA"
        },
        {
          company: "Earlier career",
          role: "Developer, Multimedia Specialist & Customer Support",
          period: "2000 — 2015",
          summary:
            "Built a broad foundation across web development, digital education, multimedia production, IT support, retail and customer-facing roles.",
          achievements: [
            "Developed digital products and interactive educational experiences.",
            "Worked directly with users and customers in technical and commercial environments.",
            "Built the practical communication skills that still shape my approach today."
          ],
          stack: "HTML · CSS · JavaScript · Multimedia · IT Support · Customer Service"
        }
      ]
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects where technology had to deliver a business result.",
      description:
        "A selection of representative initiatives. Details are intentionally high-level to respect customer and company confidentiality.",
      items: [
        {
          number: "01",
          title: "Enterprise media technology programme",
          subtitle: "Strategic customer · Solution consulting",
          text:
            "Supported the evolution of a complex enterprise advertising environment across web, mobile, connected TV and streaming. Coordinated discovery, integrations, testing, measurement, privacy and stakeholder alignment.",
          outcome: "Outcome: scalable delivery and sustained commercial growth."
        },
        {
          number: "02",
          title: "Advertising platform migration",
          subtitle: "Publisher network · Technical project management",
          text:
            "Led the migration of a multi-property publisher environment to Google Ad Manager, including programmatic integrations, reporting, governance and operational enablement.",
          outcome: "Outcome: stronger control, efficiency and monetisation."
        },
        {
          number: "03",
          title: "IoT customer onboarding",
          subtitle: "Smart home · Technical account management",
          text:
            "Guided customers through platform setup, API integration, testing and production readiness while coordinating engineering, QA and product stakeholders.",
          outcome: "Outcome: faster onboarding and more reliable releases."
        }
      ]
    },
    skills: {
      eyebrow: "Capabilities",
      title: "Technical enough for engineering. Commercial enough for customers.",
      groups: [
        {
          title: "Customer & delivery",
          items: ["Solution consulting", "Customer success", "Discovery", "Stakeholder management", "Project coordination", "Workshops & training"]
        },
        {
          title: "Technical",
          items: ["APIs & integrations", "JavaScript / Node.js", "SDK implementations", "JSON / XML", "Technical troubleshooting", "Testing & QA"]
        },
        {
          title: "Enterprise technology",
          items: ["SaaS platforms", "AdTech & CTV", "Privacy & compliance", "Data & measurement", "IoT platforms", "AI adoption"]
        }
      ],
      learningTitle: "Currently deepening",
      learning: ["Enterprise AI", "AI agents", "Docker", "Cloud-native delivery", "Developer platforms"]
    },
    resume: {
      eyebrow: "Resume",
      title: "The concise version of my professional story.",
      description:
        "Choose the version that best fits your hiring process. Both documents are designed for senior customer-facing technology roles.",
      english: "Download resume in English",
      italian: "Scarica il CV in italiano",
      note: "PDF files can be replaced at any time without changing the website code."
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s discuss your customers, platform and next implementation challenge.",
      description:
        "I am interested in senior roles across solution consulting, technical customer success, implementation and enterprise delivery, ideally in an international and remote-friendly environment.",
      email: "Email me",
      linkedin: "Connect on LinkedIn",
      github: "View GitHub",
      location: "Based in Italy · Open to remote roles across Europe"
    },
    footer: "Designed and built by Fabio Di Paolo."
  },
  it: {
    nav: {
      home: "Home",
      about: "Chi sono",
      experience: "Esperienza",
      projects: "Progetti",
      skills: "Competenze",
      resume: "CV",
      contact: "Contatti"
    },
    hero: {
      availability: "Disponibile per opportunità senior in Europa",
      intro: "Ciao, sono Fabio Di Paolo.",
      title: "Collego clienti enterprise, tecnologia e delivery.",
      description:
        "Senior Solution Consultant con background tecnico e oltre 18 anni nel digitale e nella tecnologia. Aiuto i clienti a trasformare requisiti complessi in soluzioni concrete, coordinando business, prodotto ed engineering dalla fase di analisi fino alla delivery.",
      primary: "Scopri la mia esperienza",
      secondary: "Scarica il CV",
      stat1: "Anni nel digitale e nella tecnologia",
      stat2: "Focus su clienti enterprise",
      stat3: "Crescita dei ricavi su un cliente strategico"
    },
    about: {
      eyebrow: "Chi sono",
      title: "Un percorso tecnico cresciuto attraverso clienti, prodotti e progetti complessi.",
      p1:
        "Ho iniziato la mia carriera nello sviluppo software e nei prodotti digitali. Con il tempo ho capito che il mio contributo migliore nasce nel punto d'incontro tra tecnologia e persone: comprendere il risultato che il cliente vuole ottenere, tradurlo in un percorso tecnico chiaro e coinvolgere i team giusti.",
      p2:
        "Oggi lavoro tra solution consulting, delivery tecnica, customer success e coordinamento progettuale. Mi trovo a mio agio parlando di API e integrazioni con gli ingegneri, di risultati di business con gli stakeholder e di piani di implementazione con i team di delivery.",
      p3:
        "Voglio portare questa esperienza in un'azienda tecnologica internazionale e orientata al prodotto, con particolare interesse per AI, SaaS, developer tools e piattaforme enterprise.",
      valuesTitle: "Come lavoro",
      values: [
        "Ascoltare prima di tutto e identificare il vero obiettivo di business.",
        "Essere trasparente su vincoli, rischi e compromessi.",
        "Creare slancio con soluzioni pratiche nel breve periodo.",
        "Costruire fiducia attraverso responsabilità e continuità nella delivery."
      ]
    },
    experience: {
      eyebrow: "Esperienza",
      title: "Dallo sviluppo software alla consulenza tecnologica enterprise.",
      description:
        "Un percorso costruito assumendo responsabilità crescenti su clienti, implementazioni e coordinamento tra team.",
      roles: [
        {
          company: "RTL AdAlliance / smartclip",
          role: "Senior Solution Consultant",
          period: "2021 — 2026",
          summary:
            "Responsabile della solution consulting e della delivery tecnica per clienti media strategici, come punto di collegamento tra stakeholder del cliente, sales, product ed engineering.",
          achievements: [
            "Supportato un cliente strategico che ha aumentato i ricavi di oltre il 50% in due anni.",
            "Gestito implementazioni complesse su video advertising, CTV, SDK, API, privacy e misurazione.",
            "Coordinato troubleshooting tecnico, test, comunicazione con gli stakeholder e pianificazione della delivery.",
            "Condotto workshop e trasformato requisiti di business in soluzioni tecniche concrete."
          ],
          stack: "JavaScript · Node.js · REST API · SDK · JSON · XML · Python · AdTech"
        },
        {
          company: "Good Move",
          role: "Technical Project Manager",
          period: "2019 — 2021",
          summary:
            "Gestione della delivery tecnica, onboarding degli editori, migrazioni di piattaforma e progetti di monetizzazione su diverse property digitali.",
          achievements: [
            "Guidato la migrazione completa a Google Ad Manager, incluse integrazioni EBDA e Prebid.js.",
            "Coordinato engineering, team commerciali, publisher e partner tecnologici esterni.",
            "Migliorato l'efficienza operativa e contribuito a proteggere i ricavi in una fase di mercato complessa."
          ],
          stack: "JavaScript · PHP · GitHub · Google Ad Manager · Prebid · Analytics"
        },
        {
          company: "Freedompro",
          role: "Technical Account Manager & Developer",
          period: "2015 — 2019",
          summary:
            "Passaggio dallo sviluppo software alla gestione tecnica dei clienti per piattaforme IoT e smart home.",
          achievements: [
            "Gestito onboarding, implementazioni tecniche e delivery delle soluzioni.",
            "Coordinato engineering, QA e team cliente durante integrazioni e release di prodotto.",
            "Erogato formazione tecnica, workshop e supporto al troubleshooting."
          ],
          stack: "Node.js · Java · SQLite · REST API · Networking · Bash · QA"
        },
        {
          company: "Esperienze precedenti",
          role: "Developer, Multimedia Specialist e Customer Support",
          period: "2000 — 2015",
          summary:
            "Costruito una base ampia tra sviluppo web, formazione digitale, produzione multimediale, supporto IT, retail e ruoli a contatto con il cliente.",
          achievements: [
            "Sviluppato prodotti digitali ed esperienze didattiche interattive.",
            "Lavorato direttamente con utenti e clienti in contesti tecnici e commerciali.",
            "Costruito le capacità di comunicazione pratica che ancora oggi guidano il mio approccio."
          ],
          stack: "HTML · CSS · JavaScript · Multimedia · Supporto IT · Customer Service"
        }
      ]
    },
    projects: {
      eyebrow: "Progetti selezionati",
      title: "Quando la tecnologia deve produrre un risultato di business.",
      description:
        "Una selezione di iniziative rappresentative. I dettagli sono volutamente generali per rispettare la riservatezza di clienti e aziende.",
      items: [
        {
          number: "01",
          title: "Programma tecnologico media enterprise",
          subtitle: "Cliente strategico · Solution consulting",
          text:
            "Supporto all'evoluzione di un ambiente pubblicitario enterprise complesso su web, mobile, connected TV e streaming. Coordinamento di analisi, integrazioni, test, misurazione, privacy e stakeholder.",
          outcome: "Risultato: delivery scalabile e crescita commerciale sostenuta."
        },
        {
          number: "02",
          title: "Migrazione della piattaforma advertising",
          subtitle: "Network di publisher · Technical project management",
          text:
            "Guida alla migrazione di un ambiente multi-property verso Google Ad Manager, incluse integrazioni programmatiche, reporting, governance e abilitazione operativa.",
          outcome: "Risultato: maggiore controllo, efficienza e monetizzazione."
        },
        {
          number: "03",
          title: "Onboarding clienti IoT",
          subtitle: "Smart home · Technical account management",
          text:
            "Supporto ai clienti durante configurazione della piattaforma, integrazione API, test e messa in produzione, coordinando engineering, QA e product.",
          outcome: "Risultato: onboarding più rapido e release più affidabili."
        }
      ]
    },
    skills: {
      eyebrow: "Competenze",
      title: "Abbastanza tecnico per l'engineering. Abbastanza business per i clienti.",
      groups: [
        {
          title: "Clienti e delivery",
          items: ["Solution consulting", "Customer success", "Discovery", "Stakeholder management", "Coordinamento progetti", "Workshop e formazione"]
        },
        {
          title: "Tecnologia",
          items: ["API e integrazioni", "JavaScript / Node.js", "Implementazioni SDK", "JSON / XML", "Troubleshooting tecnico", "Testing e QA"]
        },
        {
          title: "Tecnologia enterprise",
          items: ["Piattaforme SaaS", "AdTech e CTV", "Privacy e compliance", "Dati e misurazione", "Piattaforme IoT", "Adozione AI"]
        }
      ],
      learningTitle: "Sto approfondendo",
      learning: ["Enterprise AI", "AI agent", "Docker", "Cloud-native delivery", "Developer platform"]
    },
    resume: {
      eyebrow: "CV",
      title: "La versione sintetica della mia storia professionale.",
      description:
        "Scegli la versione più adatta al tuo processo di selezione. Entrambi i documenti sono pensati per ruoli tecnologici senior a contatto con il cliente.",
      english: "Download resume in English",
      italian: "Scarica il CV in italiano",
      note: "I file PDF possono essere sostituiti in qualsiasi momento senza modificare il codice."
    },
    contact: {
      eyebrow: "Contatti",
      title: "Parliamo dei vostri clienti, della piattaforma e della prossima sfida di implementazione.",
      description:
        "Sono interessato a ruoli senior in solution consulting, technical customer success, implementation e delivery enterprise, preferibilmente in un ambiente internazionale e remote-friendly.",
      email: "Scrivimi",
      linkedin: "Contattami su LinkedIn",
      github: "Visita GitHub",
      location: "Vivo in Italia · Disponibile per ruoli da remoto in Europa"
    },
    footer: "Progettato e sviluppato da Fabio Di Paolo."
  }
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setDark(useDark);
    document.documentElement.classList.toggle("dark", useDark);

    const savedLanguage = window.localStorage.getItem("language");
    if (savedLanguage === "it" || savedLanguage === "en") {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const t = useMemo(() => copy[language], [language]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  };

  const toggleLanguage = () => {
    const next: Language = language === "en" ? "it" : "en";
    setLanguage(next);
    document.documentElement.lang = next;
    window.localStorage.setItem("language", next);
    setMenuOpen(false);
  };

  const navItems = [
    ["home", t.nav.home],
    ["about", t.nav.about],
    ["experience", t.nav.experience],
    ["projects", t.nav.projects],
    ["skills", t.nav.skills],
    ["resume", t.nav.resume],
    ["contact", t.nav.contact]
  ];

  return (
    <>
      <header
        className="glass"
        style={{
          position: "fixed",
          zIndex: 50,
          top: 12,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(1120px, calc(100% - 1.2rem))",
          borderRadius: 999
        }}
      >
        <div
          style={{
            minHeight: 62,
            padding: "0.45rem 0.65rem 0.45rem 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem"
          }}
        >
          <a href="#home" style={{ color: "var(--foreground)", fontWeight: 900, letterSpacing: "-0.04em", textDecoration: "none" }}>
            Fabio Di Paolo
          </a>

          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "1.15rem" }}>
            {navItems.map(([href, label]) => (
              <a key={href} href={`#${href}`} className="anchor-link">
                {label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <button
              onClick={toggleLanguage}
              aria-label="Change language"
              title="Change language"
              className="button-secondary"
              style={{ minHeight: 42, padding: "0.65rem 0.8rem", border: "1px solid var(--border)", cursor: "pointer" }}
            >
              <Languages size={17} />
              {language === "en" ? "IT" : "EN"}
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              title="Toggle color theme"
              className="button-secondary"
              style={{ minHeight: 42, width: 42, padding: 0, border: "1px solid var(--border)", cursor: "pointer" }}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
              className="button-secondary"
              style={{
                minHeight: 42,
                width: 42,
                padding: 0,
                border: "1px solid var(--border)",
                cursor: "pointer",
                display: "none"
              }}
              id="mobile-menu-button"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="glass"
          style={{
            position: "fixed",
            zIndex: 49,
            top: 84,
            left: "0.6rem",
            right: "0.6rem",
            padding: "1rem",
            borderRadius: "1.4rem",
            display: "grid",
            gap: "0.25rem"
          }}
        >
          {navItems.map(([href, label]) => (
            <a
              key={href}
              href={`#${href}`}
              onClick={() => setMenuOpen(false)}
              className="anchor-link"
              style={{ padding: "0.8rem" }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <main>
        <section id="home" className="container" style={{ minHeight: "100vh", display: "grid", alignItems: "center", paddingTop: 110, paddingBottom: 54 }}>
          <div>
            <div className="pill">
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
              {t.hero.availability}
            </div>

            <p style={{ margin: "2.1rem 0 0.9rem", color: "var(--accent)", fontWeight: 850 }}>{t.hero.intro}</p>
            <h1
              style={{
                maxWidth: 980,
                margin: 0,
                fontSize: "clamp(3.2rem, 9.5vw, 7.7rem)",
                lineHeight: 0.93,
                letterSpacing: "-0.075em",
                fontWeight: 900
              }}
            >
              {t.hero.title}
            </h1>
            <p className="section-copy" style={{ maxWidth: 800, marginTop: "1.8rem", fontSize: "clamp(1.06rem, 2vw, 1.28rem)" }}>
              {t.hero.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2rem" }}>
              <a href="#experience" className="button-primary">
                {t.hero.primary} <ArrowDown size={17} />
              </a>
              <a href="/cv/Fabio_Di_Paolo_Resume_EN.pdf" className="button-secondary" download>
                {t.hero.secondary} <Download size={17} />
              </a>
            </div>

            <div
              style={{
                marginTop: "clamp(3rem, 8vw, 6rem)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                gap: "1rem"
              }}
            >
              {[
                ["18+", t.hero.stat1],
                ["B2B", t.hero.stat2],
                ["50%+", t.hero.stat3]
              ].map(([value, label]) => (
                <div className="card" key={label} style={{ padding: "1.25rem" }}>
                  <div style={{ fontSize: "2rem", fontWeight: 900, letterSpacing: "-0.05em" }}>{value}</div>
                  <div style={{ marginTop: "0.3rem", color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.5 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="eyebrow">{t.about.eyebrow}</div>
            <h2 className="section-title">{t.about.title}</h2>

            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.15fr) minmax(280px, 0.85fr)", gap: "clamp(1.5rem, 5vw, 4rem)", alignItems: "start", marginTop: "2rem" }} className="about-grid">
              <div className="section-copy">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>

              <div className="card" style={{ padding: "1.5rem" }}>
                <h3 style={{ margin: 0, fontSize: "1.2rem" }}>{t.about.valuesTitle}</h3>
                <div style={{ display: "grid", gap: "1rem", marginTop: "1.3rem" }}>
                  {t.about.values.map((value) => (
                    <div key={value} style={{ display: "flex", gap: "0.7rem", color: "var(--muted)", lineHeight: 1.55 }}>
                      <span style={{ flex: "0 0 auto", marginTop: 2, color: "var(--accent)" }}><Check size={18} /></span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <div className="eyebrow">{t.experience.eyebrow}</div>
            <h2 className="section-title">{t.experience.title}</h2>
            <p className="section-copy">{t.experience.description}</p>

            <div style={{ marginTop: "3rem", display: "grid", gap: "2.2rem" }}>
              {t.experience.roles.map((role, index) => (
                <article key={role.company} style={{ position: "relative", paddingLeft: "2.2rem" }}>
                  {index < t.experience.roles.length - 1 && <div className="timeline-line" />}
                  <div className="timeline-dot" />
                  <div className="card" style={{ padding: "clamp(1.35rem, 4vw, 2rem)" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "0.6rem" }}>
                      <div>
                        <h3 style={{ margin: 0, fontSize: "clamp(1.3rem, 3vw, 1.8rem)", letterSpacing: "-0.035em" }}>{role.role}</h3>
                        <div style={{ marginTop: "0.35rem", color: "var(--accent)", fontWeight: 800 }}>{role.company}</div>
                      </div>
                      <div className="pill">{role.period}</div>
                    </div>
                    <p style={{ color: "var(--muted)", lineHeight: 1.7, maxWidth: 850, marginTop: "1.2rem" }}>{role.summary}</p>
                    <ul style={{ color: "var(--muted)", lineHeight: 1.65, paddingLeft: "1.1rem" }}>
                      {role.achievements.map((item) => <li key={item} style={{ marginBottom: "0.45rem" }}>{item}</li>)}
                    </ul>
                    <div style={{ borderTop: "1px solid var(--border)", marginTop: "1.3rem", paddingTop: "1rem", color: "var(--muted)", fontSize: "0.84rem", fontWeight: 700 }}>
                      {role.stack}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="eyebrow">{t.projects.eyebrow}</div>
            <h2 className="section-title">{t.projects.title}</h2>
            <p className="section-copy">{t.projects.description}</p>

            <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "1rem" }}>
              {t.projects.items.map((item) => (
                <article className="card" key={item.number} style={{ padding: "1.5rem", display: "flex", flexDirection: "column", minHeight: 340 }}>
                  <div style={{ color: "var(--accent)", fontWeight: 900 }}>{item.number}</div>
                  <h3 style={{ margin: "2.2rem 0 0.4rem", fontSize: "1.35rem", letterSpacing: "-0.035em" }}>{item.title}</h3>
                  <div style={{ color: "var(--accent)", fontSize: "0.82rem", fontWeight: 800 }}>{item.subtitle}</div>
                  <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{item.text}</p>
                  <p style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--border)", fontWeight: 800, lineHeight: 1.5 }}>{item.outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="eyebrow">{t.skills.eyebrow}</div>
            <h2 className="section-title">{t.skills.title}</h2>

            <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
              {t.skills.groups.map((group) => (
                <div className="card" key={group.title} style={{ padding: "1.5rem" }}>
                  <h3 style={{ marginTop: 0 }}>{group.title}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem", marginTop: "1.2rem" }}>
                    {group.items.map((item) => <span className="pill" key={item}>{item}</span>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{ marginTop: "1rem", padding: "1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
              <div>
                <div className="eyebrow">{t.skills.learningTitle}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem", marginTop: "0.8rem" }}>
                  {t.skills.learning.map((item) => <span className="pill" key={item}>{item}</span>)}
                </div>
              </div>
              <BriefcaseBusiness size={34} style={{ color: "var(--accent)" }} />
            </div>
          </div>
        </section>

        <section id="resume" className="section">
          <div className="container">
            <div className="card" style={{ padding: "clamp(1.5rem, 6vw, 4rem)" }}>
              <div className="eyebrow">{t.resume.eyebrow}</div>
              <h2 className="section-title">{t.resume.title}</h2>
              <p className="section-copy">{t.resume.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.8rem" }}>
                <a href="/cv/Fabio_Di_Paolo_Resume_EN.pdf" download className="button-primary">
                  {t.resume.english} <Download size={17} />
                </a>
                <a href="/cv/Fabio_Di_Paolo_CV_IT.pdf" download className="button-secondary">
                  {t.resume.italian} <Download size={17} />
                </a>
              </div>
              <p style={{ color: "var(--muted)", fontSize: "0.82rem", marginTop: "1rem" }}>{t.resume.note}</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="eyebrow">{t.contact.eyebrow}</div>
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="section-copy">{t.contact.description}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2rem" }}>
              <a href="mailto:fabius81@gmail.com" className="button-primary">
                <Mail size={17} /> {t.contact.email}
              </a>
              <a href="https://www.linkedin.com/in/fdipaolo/" target="_blank" rel="noreferrer" className="button-secondary">
                <Linkedin size={17} /> {t.contact.linkedin} <ArrowUpRight size={15} />
              </a>
              <a href="https://github.com/fabius81" target="_blank" rel="noreferrer" className="button-secondary">
                <Github size={17} /> {t.contact.github} <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="pill" style={{ marginTop: "1.2rem" }}>{t.contact.location}</div>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid var(--border)", padding: "2rem 0 3rem" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1rem", color: "var(--muted)", fontSize: "0.85rem" }}>
          <span>© {new Date().getFullYear()} Fabio Di Paolo</span>
          <span>{t.footer}</span>
        </div>
      </footer>

      <style jsx global>{`
        @media (max-width: 780px) {
          #mobile-menu-button { display: inline-flex !important; }
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
