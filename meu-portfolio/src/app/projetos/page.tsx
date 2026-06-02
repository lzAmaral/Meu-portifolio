import { ChevronLeft, Github, Terminal, Database, Server, Cpu } from "lucide-react";
import Link from "next/link";

export default function Projetos() {
  const projetos = [
    {
      id: "01",
      titulo: "E-commerce Ana Modas",
      subtitulo: "Plataforma de Gestão de Vendas",
      icone: <Database className="w-6 h-6 text-blue-500" />,
      descricao: "Solução completa de e-commerce construída para automatizar processos físicos. A arquitetura foi desenhada em camadas rigorosas (Controller, Service, Repository), focando em integridade transacional e escalabilidade.",
      tecnologias: ["Java 17", "Spring Boot", "MySQL", "Telegram API", "REST"],
      linkGithub: "https://github.com/lzAmaral/UniLoja",
      detalhes: [
        "Dashboard analítico de indicadores.",
        "Módulo de estoque real-time.",
        "Notificações automatizadas via Telegram Bot.",
        "Modelagem Relacional (MER) avançada."
      ]
    },
    {
      id: "02",
      titulo: "Pipeline RAG com IA",
      subtitulo: "Motor de Busca Semântica (Em dev)",
      icone: <Cpu className="w-6 h-6 text-blue-500" />,
      descricao: "Pipeline backend para indexação vetorial e recuperação de contexto. Integra a API da OpenAI com banco PostgreSQL para criar uma base de conhecimento inteligente capaz de responder perguntas sobre PDFs.",
      tecnologias: ["Java", "Spring Boot", "pgvector", "OpenAI API", "PostgreSQL"],
      linkGithub: "https://github.com/lzAmaral/Estudos_RAG_OpenAI",
      detalhes: [
        "Geração e persistência de Embeddings.",
        "Busca vetorial de vizinhos mais próximos.",
        "Context Injection no modelo GPT (RAG).",
        "Suporte a Chatbots documentais."
      ]
    },
    {
      id: "03",
      titulo: "Gestão de Consultas",
      subtitulo: "API REST de Agendamento",
      icone: <Server className="w-6 h-6 text-blue-500" />,
      descricao: "API projetada para o setor de saúde. Gerencia horários e serviços evitando conflitos de concorrência. Utiliza Flyway para migrações e dispara e-mails transacionais com templates HTML.",
      tecnologias: ["Java 17", "Spring Data JPA", "PostgreSQL", "Flyway", "JavaMailSender"],
      linkGithub: "https://github.com/lzAmaral/SISTEMA-DE-AGENDAMENTO",
      detalhes: [
        "Regras complexas de sobreposição de horário.",
        "Notificações automáticas por e-mail.",
        "Versionamento de banco de dados estruturado."
      ]
    },
    {
      id: "04",
      titulo: "URL Shortener",
      subtitulo: "Utilitário de Alta Performance",
      icone: <Terminal className="w-6 h-6 text-blue-500" />,
      descricao: "Microsserviço ultrarrápido para encurtamento de links. Implementa algoritmos de hashing e redirecionamentos HTTP 302 com o menor overhead possível.",
      tecnologias: ["Java", "Spring Boot", "Hashing", "HTTP 302"],
      linkGithub: "https://github.com/lzAmaral/Encurtador-de-URL",
      detalhes: [
        "Lógica de identificadores únicos curtos.",
        "Foco em latência mínima no redirecionamento.",
        "Arquitetura clean e objetiva."
      ]
    },
    {
      id: "05",
      titulo: "Coimbra Editor",
      subtitulo: "Portfólio / Landing Page",
      icone: <Terminal className="w-6 h-6 text-blue-500" />,
      descricao: "Projeto front-end focado em conversão. Desenvolvido para apresentar portfólio audiovisual com altíssima performance e responsividade em dispositivos móveis.",
      tecnologias: ["React", "Tailwind CSS", "Lucide", "Vite"],
      linkGithub: "https://github.com/lzAmaral/LP-CoimbraEditor",
      detalhes: [
        "Design focado na experiência do usuário (UX).",
        "Performance otimizada de imagens e vídeos.",
        "Interface sem dependência de bibliotecas CSS pesadas."
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white p-8 selection:bg-blue-500/30">
      <nav className="max-w-7xl mx-auto mb-20 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition font-mono uppercase text-sm tracking-widest">
          <ChevronLeft size={16} /> [ Voltar_Home ]
        </Link>
      </nav>

      <section className="max-w-7xl mx-auto pb-32">
        <header className="mb-32">
          <span className="text-blue-500/50 font-mono tracking-widest uppercase text-xs">/sistema/portfolio/projetos</span>
          <h2 className="text-6xl md:text-8xl font-black mt-6 tracking-tighter uppercase">
            Engenharia <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">Aplicada.</span>
          </h2>
          <p className="text-gray-400 mt-8 max-w-2xl text-xl font-light leading-relaxed">
            Arquitetura de software, integrações complexas e APIs robustas. 
            Estes são os sistemas construídos com foco em <strong className="text-white font-normal">performance e escalabilidade</strong>.
          </p>
        </header>

        <div className="flex flex-col border-t border-gray-900">
          {projetos.map((proj) => (
            <article key={proj.id} className="relative group border-b border-gray-900 py-24 overflow-hidden">
              {/* Background giant number */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 text-[20rem] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-blue-500/[0.03] transition-colors duration-700 font-mono">
                {proj.id}
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
                
                {/* Meta column */}
                <div className="lg:col-span-3 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-gray-500">{proj.id}</span>
                    <div className="h-[1px] flex-1 bg-gray-800" />
                    {proj.icone}
                  </div>
                  <h3 className="text-blue-500 font-mono text-sm uppercase tracking-widest leading-relaxed">
                    {proj.subtitulo}
                  </h3>
                </div>

                {/* Content column */}
                <div className="lg:col-span-9 space-y-8">
                  <h4 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-gray-100 group-hover:text-white transition-colors">
                    {proj.titulo}
                  </h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {proj.tecnologias.map((tech, i) => (
                      <span key={i} className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 text-xs font-mono uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                    {proj.descricao}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 pt-4 max-w-3xl">
                    {proj.detalhes.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                        <span className="text-blue-500 font-mono mt-0.5">{">"}</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8">
                    <a 
                      href={proj.linkGithub} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-white font-mono text-sm uppercase tracking-widest hover:text-blue-400 transition-colors group/link"
                    >
                      <Github size={18} className="text-blue-500 group-hover/link:-translate-y-1 transition-transform" /> 
                      <span className="border-b border-gray-700 group-hover/link:border-blue-400 transition-colors pb-1">
                        Analisar Código-Fonte
                      </span>
                    </a>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="max-w-7xl mx-auto mt-20 py-10 text-center md:text-left text-gray-600 font-mono text-xs uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© 2026 Luiz Amaral</span>
        <span>SISTEMA.STATUS: ONLINE</span>
      </footer>
    </main>
  );
}