"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DotField from "@/components/DotField";
import Dock from "@/components/Dock";
import {
  Terminal, Database, Cpu, Github,
  Download, ExternalLink, House, BriefcaseBusiness, FolderOpen, Layers3, Mail
} from "lucide-react";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
  });
  window.history.replaceState(null, "", `#${id}`);
};

const dockItems = [
  { icon: <House size={20} />, label: "Início", onClick: () => scrollToSection("inicio") },
  { icon: <BriefcaseBusiness size={20} />, label: "Experiência", onClick: () => scrollToSection("experiencia") },
  { icon: <FolderOpen size={20} />, label: "Projetos", onClick: () => scrollToSection("projetos") },
  { icon: <Layers3 size={20} />, label: "Skills", onClick: () => scrollToSection("skills") },
  { icon: <Mail size={20} />, label: "Contato", onClick: () => scrollToSection("contato") },
];


type Projeto = {
  id: string;
  titulo: string;
  subtitulo: string;
  icone: ReactNode;
  descricao: string;
  tecnologias: string[];
  linkGithub: string;
  img?: string;
  url?: string;
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const wordAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] as const }
    })
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const projetos: Projeto[] = [
    {
      id: "01",
      titulo: "WebCars",
      subtitulo: "Loja de Carros Online com IA",
      icone: <Cpu className="w-5 h-5 text-[#00b4d8]" />,
      descricao: "E-commerce de veículos com catálogo, filtros e comparação lado a lado. Inclui assistente de IA em RAG ancorado no catálogo real, captura de leads com pontuação de interesse (frio/morno/quente) e painel administrativo completo.",
      tecnologias: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "pgvector", "Gemini AI"],
      linkGithub: "https://github.com/lzAmaral/FluxoMind_WebCars",
      img: "/webcars.png",
      url: "github.com/lzAmaral/FluxoMind_WebCars"
    },
    {
      id: "02",
      titulo: "Mercado Tech Brasil",
      subtitulo: "Analytics do Mercado de TI (CAGED)",
      icone: <Database className="w-5 h-5 text-[#00b4d8]" />,
      descricao: "Plataforma analítica que transforma mais de 411 mil registros oficiais do Novo CAGED em insights sobre salários e contratações de TI no Brasil, com pipeline de ETL em Spring Batch e dashboards interativos.",
      tecnologias: ["Java", "Spring Boot", "Spring Batch", "PostgreSQL", "JavaScript", "Chart.js"],
      linkGithub: "https://github.com/lzAmaral/caged-etl-analytics",
      img: "/mercado-tech-brasil.jpeg",
      url: "github.com/lzAmaral/caged-etl-analytics"
    }
  ];

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
          gradientFrom="rgba(0, 180, 216, 0.38)"
          gradientTo="rgba(55, 112, 150, 0.2)"
          glowColor="#0b4561"
        />
      </div>
      <div className="site-content">
      {/* Brand header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/5' : 'py-8'}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#inicio" className="font-bold text-xl tracking-tighter hover:text-[#00b4d8] transition-colors">
            luiz<span className="text-[#00b4d8]">.</span>amaral
          </a>
        </div>
      </motion.header>

      <Dock items={dockItems} panelHeight={68} baseItemSize={50} magnification={70} />

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mono text-[#00b4d8] mb-8"
          >
            {"// luiz amaral"}
          </motion.p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.95] max-w-5xl">
            {["Transformo", "processos", "em"].map((word, i) => (
              <motion.span key={i} custom={i} variants={wordAnimation} initial="hidden" animate="visible" className="inline-block mr-[0.2em]">
                {word}
              </motion.span>
            ))}
            <br className="hidden md:block" />
            {["software", "que", "funciona."].map((word, i) => (
              <motion.span key={i+3} custom={i+3} variants={wordAnimation} initial="hidden" animate="visible" className="hero-plantin inline-block mr-[0.2em] text-[#00b4d8]">
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 text-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed"
          >
            Desenvolvedor Fullstack especializado em sistemas agênticos. Construo aplicações que conectam agentes de IA, dados e ferramentas para automatizar processos reais.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <a href="#projetos" className="btn-fill">Ver projetos ↓</a>
            <a href="/Luiz_Gustavo_Amaral_CV.pdf" download className="btn-ghost gap-2">Baixar_CV <Download size={18} /></a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/10 pt-12"
          >
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-2">2<span className="text-[#00b4d8]">+</span></h3>
              <p className="mono text-sm text-white/40 uppercase tracking-widest">Anos de estudo</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-2">10<span className="text-[#00b4d8]">+</span></h3>
              <p className="mono text-sm text-white/40 uppercase tracking-widest">Sistemas Entregues</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-2">10<span className="text-[#00b4d8]">+</span></h3>
              <p className="mono text-sm text-white/40 uppercase tracking-widest">Tecnologias</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-2 flex items-center"><Terminal className="text-[#00b4d8] w-10 h-10" /></h3>
              <p className="mono text-sm text-white/40 uppercase tracking-widest">Arquitetura Limpa</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-32 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <p className="mono text-[#00b4d8] mb-4">{"// trajetória"}</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Experiência Profissional</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="exp-card-glass p-8 md:p-10 max-w-2xl"
          >
            <div className="flex justify-between items-start mb-8 border-b border-white/10 pb-6">
              <div>
                <span className="mono text-5xl font-black text-white/10">01</span>
              </div>
              <span className="mono text-xs text-[#00b4d8] bg-[#00b4d8]/10 px-3 py-1 border border-[#00b4d8]/20">2026 — ATUAL</span>
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-wide mb-2">Desenvolvedor Fullstack</h3>
            <h4 className="text-xl text-white/60 mb-6 font-light">Fluxomind</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#00b4d8] mt-1">▹</span>
                Desenvolvimento fullstack de aplicações e fluxos de trabalho baseados em IA.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00b4d8] mt-1">▹</span>
                Construção de sistemas agênticos com LangGraph, incluindo ferramentas, memória, estado e fluxos de decisão.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00b4d8] mt-1">▹</span>
                Implementação de pipelines RAG, embeddings, indexação e recuperação semântica sobre bases de conhecimento.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00b4d8] mt-1">▹</span>
                Desenvolvimento de harnesses para fornecer contexto, validações e mecanismos de controle aos agentes.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00b4d8] mt-1">▹</span>
                Integração de agentes com APIs, bancos de dados, serviços externos e interfaces utilizadas pelos usuários.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="formacao" className="py-32 px-6 md:px-12 relative section-shade border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <p className="mono text-[#00b4d8] mb-4">{"// formação"}</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Formação Acadêmica</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="exp-card-glass p-8 md:p-10 max-w-2xl"
          >
            <div className="flex justify-between items-start mb-8 border-b border-white/10 pb-6">
              <div>
                <span className="mono text-5xl font-black text-white/10">02</span>
              </div>
              <span className="mono text-xs text-white/40 border border-white/10 px-3 py-1">2025 — 2027</span>
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-wide mb-2">Análise e Desenv. de Sistemas</h3>
            <h4 className="text-xl text-white/60 mb-6 font-light">FACENS</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-white/40 mt-1">▹</span>
                Formação focada em engenharia de software e modelagem de sistemas.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/40 mt-1">▹</span>
                Banco de dados, estrutura de dados e arquitetura de aplicações corporativas.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/40 mt-1">▹</span>
                Práticas de desenvolvimento Ágil.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-32 px-6 md:px-12 section-shade">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-24"
          >
            <p className="mono text-[#00b4d8] mb-4">{"// projetos"}</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">O que eu construí</h2>
          </motion.div>

          <div className="space-y-32">
            {projetos.map((proj, idx) => (
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
                    <span className="mono text-2xl font-black text-[#00b4d8]/40">{proj.id}</span>
                    <div className="h-[1px] flex-1 bg-white/10" />
                    {proj.icone}
                  </div>
                  
                  <h3 className="mono text-sm text-[#00b4d8] uppercase tracking-widest mb-4">
                    {proj.subtitulo}
                  </h3>
                  <h4 className="text-4xl font-bold uppercase tracking-tight mb-8">
                    {proj.titulo}
                  </h4>
                  
                  <p className="text-white/60 text-lg leading-relaxed mb-8">
                    {proj.descricao}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {proj.tecnologias.map(tech => (
                      <span key={tech} className="mono text-xs uppercase tracking-wider text-white/80 bg-white/5 border border-white/10 px-3 py-1.5">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a href={proj.linkGithub} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex gap-3">
                    Analisar Código <Github size={18} />
                  </a>
                </div>

                <div className={`order-1 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="browser-chrome">
                    <div className="browser-dots">
                      <span className="browser-dot browser-dot--red" />
                      <span className="browser-dot browser-dot--yellow" />
                      <span className="browser-dot browser-dot--green" />
                    </div>
                    <div className="browser-url-bar text-center">
                      {proj.url || "github.com/lzAmaral"}
                    </div>
                  </div>
                  <div className="bg-[#0a0a0a] border border-t-0 border-[#222] border-b-lg h-[300px] flex items-center justify-center relative overflow-hidden group">
                    {proj.img ? (
                      <div className="relative w-full h-full">
                        <Image 
                          src={proj.img} 
                          alt={proj.titulo} 
                          fill
                          className="object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700" 
                        />
                      </div>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00b4d8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <pre className="mono text-[#00b4d8]/30 text-xs w-full overflow-hidden p-10 group-hover:text-[#00b4d8]/60 transition-colors duration-500">
{`public class ${proj.titulo.replace(/ /g, '')} {
    @Autowired
    private SystemEngine engine;
    
    public void execute() {
        // High performance execution
        engine.runOptimizer(true);
        engine.scale(100);
        return success();
    }
}`}
                        </pre>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-32 text-center">
            <a href="https://github.com/lzAmaral" target="_blank" rel="noopener noreferrer" className="btn-fill">
              Ver GitHub Completo →
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <p className="mono text-[#00b4d8] mb-4">{"// skills"}</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Stack Técnico</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Backend Core", 
                color: "#00b4d8", 
                skills: ["Java 17+", "Spring Boot", "Spring Data JPA", "Spring Security", "REST APIs", "Node.js"] 
              },
              { 
                title: "Banco de Dados", 
                color: "#ff8c42", 
                skills: ["PostgreSQL", "MySQL", "pgvector", "Modelagem MER", "Flyway"] 
              },
              { 
                title: "IA & Automação", 
                color: "#a855f7", 
                skills: ["OpenAI API", "RAG Pipeline", "Embeddings", "Telegram Bot API", "Automação"] 
              },
              { 
                title: "Infra & DevOps", 
                color: "#27c93f", 
                skills: ["Docker", "Git", "Clean Architecture", "Solid", "CI/CD Básico"] 
              }
            ].map((group, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="exp-card-glass p-8 group"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: group.color }} />
                  <h3 className="font-bold uppercase tracking-widest">{group.title}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {group.skills.map(skill => (
                    <span key={skill} className="mono text-sm text-white/60 group-hover:text-white/90 transition-colors">
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
      <section id="contato" className="py-32 px-6 md:px-12 border-t border-white/5 section-shade">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mono text-[#00b4d8] mb-6">{"// iniciar_conexao"}</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">Bora construir<br/>algo robusto?</h2>
            <p className="text-xl text-white/60 font-light mb-16 max-w-2xl mx-auto">
              Sempre aberto a novos desafios em engenharia de software, desenvolvimento de APIs ou integração com IAs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="mailto:luizgustavodecamposama@gmail.com" className="btn-fill text-lg">
                luizgustavodecamposama@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/luiz-gustavo-de-campos-amaral-122622278/" target="_blank" rel="noopener noreferrer" className="btn-ghost text-lg">
                LinkedIn <ExternalLink size={18} className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 pb-32 border-t border-white/5 px-6 md:px-12 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="mono text-xs text-white/40 uppercase tracking-widest">
            Desenvolvido com foco em performance.
          </p>
          <div className="flex items-center gap-2 mono text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#00b4d8] animate-pulse" />
            <span className="text-[#00b4d8]">SISTEMA.STATUS: ONLINE</span>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
