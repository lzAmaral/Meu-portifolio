"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DotField from "@/components/DotField";
import Dock from "@/components/Dock";
import {
  Github, Download, ExternalLink, House, BriefcaseBusiness,
  FolderOpen, Layers3, Mail
} from "lucide-react";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
  });
  window.history.replaceState(null, "", `#${id}`);
};

type Lang = "pt" | "en";

type Projeto = {
  id: string;
  titulo: string;
  subtitulo: string;
  status?: string;
  descricao: string;
  tecnologias: string[];
  linkGithub?: string;
  linkSite?: string;
  img: string;
  termTitle: string;
  dotColor: string;
};

type Entry = {
  periodo: string;
  cargo: string;
  org: string;
  bullets: string[];
  destaque?: boolean;
};

const dict = {
  pt: {
    announce: "Novo projeto: ",
    announceName: "Trama",
    announceRest: ": um app nativo para macOS que orquestra agentes de código. ",
    announceCta: "Ver no GitHub",
    nav: { inicio: "Início", trajetoria: "Trajetória", projetos: "Projetos", stack: "Stack", contato: "Contato" },
    heroTag: "// luiz amaral · sorocaba, sp",
    heroLine1: "Muitos falam de IA.",
    heroLine2: "Eu construo os sistemas que a colocam pra ",
    heroAccent: "trabalhar.",
    heroSub: "AI ENGINEER · SISTEMAS AGÊNTICOS · FULLSTACK",
    heroDesc: "Software Engineer na Fluxomind. Construo agentes com LangGraph, pipelines de RAG e integrações via MCP, com supervisão humana sobre ações sensíveis e foco em operação real de negócio.",
    ctaProjetos: "[ VER PROJETOS ]",
    ctaCv: "[ BAIXAR CV ]",
    stats: [
      ["2+", "anos construindo"],
      ["10+", "sistemas entregues"],
      ["1", "SaaS em produção"],
      ["12", "usuários reais"],
    ],
    nowLabel: "// agora",
    nowTitle: "O que estou construindo",
    nowBody1: "Na Fluxomind, trabalho na evolução de uma plataforma multi-tenant de agentes de IA: isolamento de dados, controle de acesso, integração de ferramentas via MCP e automação de processos conectada a dados reais.",
    nowBody2: "Uso agentes de programação no meu próprio ciclo de desenvolvimento, da investigação de um problema à implementação e validação da mudança. O objetivo é sempre o mesmo: software útil, seguro e confiável.",
    trajLabel: "// trajetória",
    trajTitle: "Experiência & Formação",
    expTitle: "EXPERIÊNCIA",
    eduTitle: "FORMAÇÃO",
    entries: [
      {
        periodo: "2026 - ATUAL",
        cargo: "Software Engineer · Aplicações de IA",
        org: "Fluxomind",
        destaque: true,
        bullets: [
          "Evolução de plataforma multi-tenant de agentes: isolamento de dados, controle de acesso e automação de processos.",
          "Sistemas agênticos com LangGraph: tools, memória, estado e fluxos de decisão.",
          "Pipelines de RAG com embeddings e recuperação semântica sobre bases de conhecimento.",
          "Integração de ferramentas via MCP, conectando agentes a APIs, bancos de dados e serviços na GCP.",
          "Confiabilidade na execução dos agentes e supervisão humana sobre ações sensíveis.",
        ],
      },
      {
        periodo: "2025 - 2026",
        cargo: "Estagiário de TI · Espaço Maker",
        org: "SESI",
        bullets: [
          "Robótica, impressão 3D e apoio à equipe em competições da OBR. Foi onde decidi seguir carreira como dev.",
        ],
      },
    ] as Entry[],
    edu: [
      {
        periodo: "PREV. 2027",
        cargo: "Análise e Desenvolvimento de Sistemas",
        org: "FACENS · Sorocaba, SP",
        bullets: ["Engenharia de software, banco de dados e arquitetura de aplicações."],
      },
      {
        periodo: "2024",
        cargo: "Técnico em Multimídia · Power BI",
        org: "SENAI",
        bullets: ["Curso e certificação em Power BI."],
      },
    ] as Entry[],
    langsLabel: "IDIOMAS",
    langsValue: "Português nativo · Inglês profissional",
    projLabel: "// projetos",
    projTitle: "O que eu construí",
    projCode: "[ CÓDIGO ]",
    projSite: "[ VER ONLINE ]",
    projGithubAll: "[ VER GITHUB COMPLETO ]",
    projetos: [
      {
        id: "01",
        titulo: "Trama",
        subtitulo: "Orquestrador de agentes de código para macOS",
        status: "EM DESENVOLVIMENTO",
        descricao: "App nativo que reúne projetos, agentes de código e terminais em um só lugar: acompanhe vários CLIs mantendo o contexto de cada pasta, tarefa e alteração. Interface em SwiftUI, motor de sessões em Rust e comunicação via RPC JSON, com worktrees, diffs, revisão de alterações e medições de memória para manter o app leve.",
        tecnologias: ["Swift 6", "SwiftUI", "AppKit", "Rust", "SwiftTerm", "RPC JSON"],
        linkGithub: "https://github.com/lzAmaral/Trama-AI",
        img: "/trama.png",
        termTitle: "trama · swift · rust",
        dotColor: "var(--mint)",
      },
      {
        id: "02",
        titulo: "VetNoCampo",
        subtitulo: "SaaS em produção · 12 usuários",
        status: "EM PRODUÇÃO",
        descricao: "“O atendimento acaba. A papelada também.” SaaS para veterinários de equinos que atendem no campo: registro de visitas, cobrança itemizada (consulta, medicação, deslocamento) e resumo em PDF direto do celular. Assinatura via Stripe com trial de 14 dias e agenda integrada ao Google Calendar.",
        tecnologias: ["SaaS", "Mobile-first", "Stripe", "Google Calendar", "PDF"],
        linkSite: "https://vetnocampo.com.br/landing",
        img: "/vetnocampo.png",
        termTitle: "vetnocampo.com.br · saas",
        dotColor: "var(--mustard)",
      },
      {
        id: "03",
        titulo: "WebCars",
        subtitulo: "E-commerce de veículos com IA",
        descricao: "Catálogo com filtros e comparação lado a lado, assistente de IA em RAG ancorada no catálogo real (quando falta informação, ela pergunta em vez de inventar) e classificação de leads em frio, morno ou quente a partir do comportamento do usuário. Inclui painel administrativo completo.",
        tecnologias: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "pgvector", "Gemini AI"],
        linkGithub: "https://github.com/lzAmaral/FluxoMind_WebCars",
        img: "/webcars.png",
        termTitle: "webcars · next.js · rag",
        dotColor: "var(--salmon)",
      },
    ] as Projeto[],
    stackLabel: "// stack",
    stackTitle: "Stack Técnico",
    stackGroups: [
      { title: "IA & Agentes", color: "var(--accent)", skills: ["LangGraph", "RAG & Embeddings", "MCP", "Agent Harnesses", "pgvector", "Gemini API"] },
      { title: "Backend", color: "var(--salmon)", skills: ["Java 17+", "Spring Boot", "Spring Batch", "Spring AI", "Node.js", "REST APIs"] },
      { title: "Frontend & Apps", color: "var(--mustard)", skills: ["TypeScript", "React", "Next.js", "Tailwind", "SwiftUI"] },
      { title: "Dados & Infra", color: "var(--mint)", skills: ["PostgreSQL", "Supabase", "Docker", "GCP", "Vercel", "Stripe"] },
    ],
    contactLabel: "// contato",
    contactTitle1: "Bora colocar a IA pra ",
    contactAccent: "trabalhar",
    contactTitle2: "?",
    contactDesc: "Aberto a oportunidades como AI Engineer e Fullstack: sistemas agênticos, RAG, integrações e produto de verdade.",
    contactEmail: "[ EMAIL ]",
    contactLinkedin: "[ LINKEDIN ]",
    contactGithub: "[ GITHUB ]",
    contactCv: "[ BAIXAR CV ]",
    footerLeft: "© 2026 Luiz Amaral · Sorocaba, SP",
    footerStatus: "SISTEMA.STATUS: ONLINE",
  },
  en: {
    announce: "New project: ",
    announceName: "Trama",
    announceRest: ": a native macOS app that orchestrates coding agents. ",
    announceCta: "View on GitHub",
    nav: { inicio: "Home", trajetoria: "Journey", projetos: "Projects", stack: "Stack", contato: "Contact" },
    heroTag: "// luiz amaral · sorocaba, brazil",
    heroLine1: "Everyone talks about AI.",
    heroLine2: "I build the systems that put it to ",
    heroAccent: "work.",
    heroSub: "AI ENGINEER · AGENTIC SYSTEMS · FULLSTACK",
    heroDesc: "Software Engineer at Fluxomind. I build agents with LangGraph, RAG pipelines and MCP integrations, with human oversight on sensitive actions and a focus on real business operations.",
    ctaProjetos: "[ VIEW PROJECTS ]",
    ctaCv: "[ DOWNLOAD CV ]",
    stats: [
      ["2+", "years building"],
      ["10+", "systems shipped"],
      ["1", "SaaS in production"],
      ["12", "real users"],
    ],
    nowLabel: "// now",
    nowTitle: "What I'm building",
    nowBody1: "At Fluxomind I help evolve a multi-tenant AI agent platform: data isolation, access control, tool integration via MCP and process automation connected to real data.",
    nowBody2: "I use coding agents in my own development cycle, from investigating a problem to implementing and validating the change. The goal is always the same: useful, safe, reliable software.",
    trajLabel: "// journey",
    trajTitle: "Experience & Education",
    expTitle: "EXPERIENCE",
    eduTitle: "EDUCATION",
    entries: [
      {
        periodo: "2026 - PRESENT",
        cargo: "Software Engineer · AI Applications",
        org: "Fluxomind",
        destaque: true,
        bullets: [
          "Evolving a multi-tenant agent platform: data isolation, access control and process automation.",
          "Agentic systems with LangGraph: tools, memory, state and decision flows.",
          "RAG pipelines with embeddings and semantic retrieval over knowledge bases.",
          "Tool integration via MCP, connecting agents to APIs, databases and GCP services.",
          "Agent execution reliability and human oversight over sensitive actions.",
        ],
      },
      {
        periodo: "2025 - 2026",
        cargo: "IT Intern · Maker Space",
        org: "SESI",
        bullets: [
          "Robotics, 3D printing and supporting the robotics team in OBR competitions. That is where I decided to become a dev.",
        ],
      },
    ] as Entry[],
    edu: [
      {
        periodo: "EXP. 2027",
        cargo: "Systems Analysis and Development",
        org: "FACENS · Sorocaba, Brazil",
        bullets: ["Software engineering, databases and application architecture."],
      },
      {
        periodo: "2024",
        cargo: "Multimedia Technician · Power BI",
        org: "SENAI",
        bullets: ["Course and certification in Power BI."],
      },
    ] as Entry[],
    langsLabel: "LANGUAGES",
    langsValue: "Native Portuguese · Professional English",
    projLabel: "// projects",
    projTitle: "What I've built",
    projCode: "[ CODE ]",
    projSite: "[ LIVE SITE ]",
    projGithubAll: "[ FULL GITHUB ]",
    projetos: [
      {
        id: "01",
        titulo: "Trama",
        subtitulo: "Coding-agent orchestrator for macOS",
        status: "IN DEVELOPMENT",
        descricao: "A native app that brings local projects, coding agents and terminals together: track multiple CLIs while keeping the context of every folder, task and change. SwiftUI interface, Rust session engine and JSON RPC communication, with worktrees, diffs, change review and memory profiling to keep the app lean.",
        tecnologias: ["Swift 6", "SwiftUI", "AppKit", "Rust", "SwiftTerm", "JSON RPC"],
        linkGithub: "https://github.com/lzAmaral/Trama-AI",
        img: "/trama.png",
        termTitle: "trama · swift · rust",
        dotColor: "var(--mint)",
      },
      {
        id: "02",
        titulo: "VetNoCampo",
        subtitulo: "SaaS in production · 12 users",
        status: "IN PRODUCTION",
        descricao: "“The visit ends. So does the paperwork.” A SaaS for equine field veterinarians: visit logging, itemized billing (consultation, medication, travel) and PDF summaries straight from the phone. Stripe subscriptions with a 14-day trial and Google Calendar integration.",
        tecnologias: ["SaaS", "Mobile-first", "Stripe", "Google Calendar", "PDF"],
        linkSite: "https://vetnocampo.com.br/landing",
        img: "/vetnocampo.png",
        termTitle: "vetnocampo.com.br · saas",
        dotColor: "var(--mustard)",
      },
      {
        id: "03",
        titulo: "WebCars",
        subtitulo: "AI-powered vehicle e-commerce",
        descricao: "Catalog with filters and side-by-side comparison, a RAG assistant grounded in the real inventory (when information is missing it asks instead of making things up) and lead scoring (cold, warm, hot) based on user behavior. Includes a full admin panel.",
        tecnologias: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "pgvector", "Gemini AI"],
        linkGithub: "https://github.com/lzAmaral/FluxoMind_WebCars",
        img: "/webcars.png",
        termTitle: "webcars · next.js · rag",
        dotColor: "var(--salmon)",
      },
    ] as Projeto[],
    stackLabel: "// stack",
    stackTitle: "Tech Stack",
    stackGroups: [
      { title: "AI & Agents", color: "var(--accent)", skills: ["LangGraph", "RAG & Embeddings", "MCP", "Agent Harnesses", "pgvector", "Gemini API"] },
      { title: "Backend", color: "var(--salmon)", skills: ["Java 17+", "Spring Boot", "Spring Batch", "Spring AI", "Node.js", "REST APIs"] },
      { title: "Frontend & Apps", color: "var(--mustard)", skills: ["TypeScript", "React", "Next.js", "Tailwind", "SwiftUI"] },
      { title: "Data & Infra", color: "var(--mint)", skills: ["PostgreSQL", "Supabase", "Docker", "GCP", "Vercel", "Stripe"] },
    ],
    contactLabel: "// contact",
    contactTitle1: "Let's put AI to ",
    contactAccent: "work",
    contactTitle2: "?",
    contactDesc: "Open to AI Engineer and Fullstack opportunities: agentic systems, RAG, integrations and real product work.",
    contactEmail: "[ EMAIL ]",
    contactLinkedin: "[ LINKEDIN ]",
    contactGithub: "[ GITHUB ]",
    contactCv: "[ DOWNLOAD CV ]",
    footerLeft: "© 2026 Luiz Amaral · Sorocaba, Brazil",
    footerStatus: "SYSTEM.STATUS: ONLINE",
  },
} as const;

// Monograma "LA" em blocos pixelados, estilo tetris (col, row, cor)
const pixelBlocks: [number, number, string][] = [
  // L
  [0, 0, "var(--accent)"],
  [0, 1, "var(--accent)"],
  [0, 2, "var(--accent)"],
  [0, 3, "var(--accent)"],
  [0, 4, "var(--mint)"], [1, 4, "var(--mint)"], [2, 4, "var(--mint)"],
  // A
  [5, 0, "var(--salmon)"],
  [4, 1, "var(--salmon)"], [6, 1, "var(--salmon)"],
  [4, 2, "var(--mustard)"], [5, 2, "var(--mustard)"], [6, 2, "var(--mustard)"],
  [4, 3, "var(--salmon)"], [6, 3, "var(--salmon)"],
  [4, 4, "var(--salmon)"], [6, 4, "var(--salmon)"],
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- o HTML é pré-renderizado em PT; o idioma salvo só pode ser lido no cliente, após a hidratação
    if (saved === "en" || saved === "pt") setLang(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = dict[lang];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const dockItems = [
    { icon: <House size={20} />, label: t.nav.inicio, onClick: () => scrollToSection("inicio") },
    { icon: <BriefcaseBusiness size={20} />, label: t.nav.trajetoria, onClick: () => scrollToSection("trajetoria") },
    { icon: <FolderOpen size={20} />, label: t.nav.projetos, onClick: () => scrollToSection("projetos") },
    { icon: <Layers3 size={20} />, label: t.nav.stack, onClick: () => scrollToSection("stack") },
    { icon: <Mail size={20} />, label: t.nav.contato, onClick: () => scrollToSection("contato") },
  ];

  const renderEntry = (entry: Entry, idx: number) => (
    <motion.div
      key={`${entry.org}-${idx}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className={`exp-card-glass p-7 md:p-8 ${entry.destaque ? "border-l-2 border-l-[var(--accent)]" : ""}`}
    >
      <div className="flex flex-wrap justify-between items-baseline gap-2 mb-4">
        <h3 className="serif-display text-2xl text-foreground">{entry.cargo}</h3>
        <span className="mono text-xs tracking-[0.2em] text-accent">{entry.periodo}</span>
      </div>
      <p className="mono text-sm uppercase tracking-widest text-foreground/50 mb-5">{entry.org}</p>
      <ul className="space-y-3 text-foreground/70 leading-relaxed">
        {entry.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-accent mt-1">▹</span>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <div className="site-shell">
      <div className="site-dot-field">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(138, 180, 220, 0.30)"
          gradientTo="rgba(95, 125, 160, 0.16)"
          glowColor="#22324a"
        />
      </div>
      <div className="site-content">

      {/* Announcement bar */}
      <div className="announce-bar serif-display relative z-50">
        {t.announce}<strong>{t.announceName}</strong>{t.announceRest}
        <a href="https://github.com/lzAmaral/Trama-AI" target="_blank" rel="noopener noreferrer">{t.announceCta}</a>
      </div>

      {/* Brand header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[#10151f]/85 backdrop-blur-md border-b border-white/5' : 'py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#inicio" className="mono font-bold text-lg tracking-tight hover:text-accent transition-colors">
            luiz<span className="text-accent">.</span>amaral
          </a>
          <div className="mono text-xs tracking-[0.2em] flex items-center gap-1">
            <span className="text-foreground/40">[</span>
            <button
              onClick={() => setLang("pt")}
              className={`px-1 transition-colors cursor-pointer ${lang === "pt" ? "text-accent" : "text-foreground/40 hover:text-foreground"}`}
            >
              PT
            </button>
            <span className="text-foreground/40">/</span>
            <button
              onClick={() => setLang("en")}
              className={`px-1 transition-colors cursor-pointer ${lang === "en" ? "text-accent" : "text-foreground/40 hover:text-foreground"}`}
            >
              EN
            </button>
            <span className="text-foreground/40">]</span>
          </div>
        </div>
      </motion.header>

      <Dock items={dockItems} panelHeight={68} baseItemSize={50} magnification={70} />

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-10"
          >
            <div className="pixel-grid">
              {pixelBlocks.map(([col, row, color], i) => (
                <span key={i} style={{ gridColumn: col + 1, gridRow: row + 1, background: color }} />
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mono text-accent text-sm mb-8"
          >
            {t.heroTag}
          </motion.p>

          <motion.h1
            key={`hero-${lang}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="serif-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground/90"
          >
            {t.heroLine1}
            <br />
            {t.heroLine2}
            <span className="text-accent">{t.heroAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mono text-xs md:text-sm tracking-[0.3em] text-foreground/50 mt-10"
          >
            {t.heroSub}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 text-foreground/60 text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            {t.heroDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-5"
          >
            <a href="#projetos" className="btn-bracket btn-bracket--fill">{t.ctaProjetos}</a>
            <a href="/Curriculo_Luiz-Amaral.pdf" download className="btn-bracket gap-2">{t.ctaCv} <Download size={16} /></a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-12 text-left"
          >
            {t.stats.map(([num, label]) => (
              <div key={label}>
                <h3 className="text-4xl md:text-5xl font-black mb-2">{num.replace("+", "")}{num.includes("+") && <span className="text-accent">+</span>}</h3>
                <p className="mono text-xs text-foreground/40 uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Now Section */}
      <section id="agora" className="py-24 px-6 md:px-12 section-shade border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <p className="section-label mb-4">{t.nowLabel}</p>
            <h2 className="serif-display text-3xl md:text-5xl mb-8">{t.nowTitle}</h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">{t.nowBody1}</p>
            <p className="text-foreground/70 text-lg leading-relaxed">{t.nowBody2}</p>
          </motion.div>
        </div>
      </section>

      {/* Trajetória Section */}
      <section id="trajetoria" className="py-28 px-6 md:px-12 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <p className="section-label mb-4">{t.trajLabel}</p>
            <h2 className="serif-display text-4xl md:text-6xl">{t.trajTitle}</h2>
          </motion.div>

          <p className="mono text-xs tracking-[0.3em] text-foreground/40 mb-6">{t.expTitle}</p>
          <div className="space-y-6 mb-16">
            {t.entries.map(renderEntry)}
          </div>

          <p className="mono text-xs tracking-[0.3em] text-foreground/40 mb-6">{t.eduTitle}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {t.edu.map(renderEntry)}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-t border-white/10 pt-8"
          >
            <span className="mono text-xs tracking-[0.3em] text-accent">{t.langsLabel}</span>
            <span className="mono text-sm tracking-wider text-foreground/80">{t.langsValue}</span>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-28 px-6 md:px-12 section-shade border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-20"
          >
            <p className="section-label mb-4">{t.projLabel}</p>
            <h2 className="serif-display text-4xl md:text-6xl">{t.projTitle}</h2>
          </motion.div>

          <div className="space-y-28">
            {t.projetos.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                <div className={`order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="mono text-2xl font-black text-accent/40">{proj.id}</span>
                    <div className="h-[1px] flex-1 bg-white/10" />
                    {proj.status && (
                      <span className="mono text-[10px] tracking-[0.2em] px-3 py-1 border" style={{ color: proj.dotColor, borderColor: "var(--line)" }}>
                        {proj.status}
                      </span>
                    )}
                  </div>

                  <h3 className="mono text-sm text-accent uppercase tracking-widest mb-3">
                    {proj.subtitulo}
                  </h3>
                  <h4 className="serif-display text-4xl md:text-5xl mb-8">
                    {proj.titulo}
                  </h4>

                  <p className="text-foreground/60 text-lg leading-relaxed mb-8">
                    {proj.descricao}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {proj.tecnologias.map(tech => (
                      <span key={tech} className="mono text-xs uppercase tracking-wider text-foreground/80 bg-white/5 border border-white/10 px-3 py-1.5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {proj.linkGithub && (
                      <a href={proj.linkGithub} target="_blank" rel="noopener noreferrer" className="btn-bracket gap-2">
                        {t.projCode} <Github size={16} />
                      </a>
                    )}
                    {proj.linkSite && (
                      <a href={proj.linkSite} target="_blank" rel="noopener noreferrer" className="btn-bracket gap-2">
                        {t.projSite} <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <div className={`order-1 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="term-panel">
                    <div className="term-titlebar">
                      <span className="term-dot" style={{ background: proj.dotColor }} />
                      {proj.termTitle}
                    </div>
                    <div className="h-[300px] relative overflow-hidden group">
                      <Image
                        src={proj.img}
                        alt={proj.titulo}
                        fill
                        className="object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-28 text-center">
            <a href="https://github.com/lzAmaral" target="_blank" rel="noopener noreferrer" className="btn-bracket btn-bracket--fill">
              {t.projGithubAll}
            </a>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section id="stack" className="py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <p className="section-label mb-4">{t.stackLabel}</p>
            <h2 className="serif-display text-4xl md:text-6xl">{t.stackTitle}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.stackGroups.map((group, i) => (
              <motion.div
                key={group.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="exp-card-glass p-8 group"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: group.color }} />
                  <h3 className="mono font-bold text-sm uppercase tracking-widest">{group.title}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {group.skills.map(skill => (
                    <span key={skill} className="mono text-sm text-foreground/60 group-hover:text-foreground/90 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-28 px-6 md:px-12 border-t border-white/5 section-shade">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="section-label mb-6">{t.contactLabel}</p>
            <h2 className="serif-display text-4xl md:text-6xl mb-8">
              {t.contactTitle1}<span className="text-accent">{t.contactAccent}</span>{t.contactTitle2}
            </h2>
            <p className="text-xl text-foreground/60 font-light mb-14 max-w-2xl mx-auto">
              {t.contactDesc}
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <a href="mailto:luizgustavo092005@gmail.com" className="btn-bracket btn-bracket--fill gap-2">
                {t.contactEmail} <Mail size={16} />
              </a>
              <a href="https://www.linkedin.com/in/luiz-amarall/" target="_blank" rel="noopener noreferrer" className="btn-bracket gap-2">
                {t.contactLinkedin} <ExternalLink size={16} />
              </a>
              <a href="https://github.com/lzAmaral" target="_blank" rel="noopener noreferrer" className="btn-bracket gap-2">
                {t.contactGithub} <Github size={16} />
              </a>
              <a href="/Curriculo_Luiz-Amaral.pdf" download className="btn-bracket gap-2">
                {t.contactCv} <Download size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 pb-32 border-t border-white/5 px-6 md:px-12 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="mono text-xs text-foreground/40 uppercase tracking-widest">
            {t.footerLeft}
          </p>
          <div className="flex items-center gap-2 mono text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent">{t.footerStatus}</span>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
