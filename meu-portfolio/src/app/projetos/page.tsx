import { ChevronLeft, Github, Code2, Smartphone, Video } from "lucide-react";
import Link from "next/link";

export default function Projetos() {
  const projetos = [
    {
      id: "01",
      titulo: "Coimbra Editor - Landing Page",
      subtitulo: "Portfólio para Editor de Vídeo",
      imagem: "/lpcoimbra.png", // Lembre de adicionar a imagem na pasta public
      descricao: "Landing page de alta conversão desenvolvida para um serviço de edição de vídeo. Focada em design moderno, performance e apresentação de portfólio audiovisual.",
      tecnologias: ["React", "Tailwind CSS", "Lucide React"],
      linkGithub: "https://github.com/lzAmaral/LP-CoimbraEditor",
      detalhes: [
        "Design responsivo otimizado para dispositivos móveis.",
        "Interface limpa e focada na experiência do usuário (UX).",
        "Seções estratégicas para exibição de serviços e contato."
      ]
    },
    {
      id: "02",
      titulo: "UniLoja - E-commerce API",
      subtitulo: "Sistema de Gestão de Vendas",
      imagem: "/uniloja.jpg.png",
      descricao: "API robusta em Java para gerenciamento de e-commerce, com foco em modelagem de dados complexa e segurança nas transações de pedidos.",
      tecnologias: ["Java", "Spring Boot", "JPA / Hibernate", "H2 Database"],
      linkGithub: "https://github.com/lzAmaral/UniLoja",
      detalhes: [
        "Modelagem de Entidade e Relacionamento (MER) avançada.",
        "Persistência de dados com foco em integridade.",
        "Arquitetura escalável seguindo padrões de mercado."
      ]
    },
    {
      id: "03",
      titulo: "Encurtador de URL",
      subtitulo: "Utilitário Backend",
      imagem: "/encurtador.jpg",
      descricao: "Serviço focado em performance para encurtamento de links, utilizando algoritmos de hashing para redirecionamento instantâneo.",
      tecnologias: ["Java", "Spring Boot", "Maven"],
      linkGithub: "https://github.com/lzAmaral/Encurtador-de-URL",
      detalhes: [
        "Lógica de geração de identificadores únicos.",
        "Redirecionamento HTTP eficiente (302).",
        "Desenvolvimento orientado a performance."
      ]
    },
    {
      id: "04",
      titulo: "Sistema de Agendamento",
      subtitulo: "Gestão de Fluxo",
      imagem: "/agendamento.jpg",
      descricao: "Sistema de agendamento em Java projetado para gerenciar horários e serviços, evitando conflitos e automatizando o atendimento.",
      tecnologias: ["Java", "Spring Boot", "MySQL"],
      linkGithub: "https://github.com/lzAmaral/SISTEMA-DE-AGENDAMENTO",
      detalhes: [
        "Tratamento de regras de negócio complexas.",
        "Persistência em banco de dados relacional.",
        "Estruturação baseada no padrão MVC."
      ]
    },
    {
      id: "05",
      titulo: "Sistema RAG com OpenAI",
      subtitulo: "Inteligência Artificial & Backend",
      imagem: "/Captura de Tela 2026-03-01 às 22.59.31.png",
      descricao: "Implementação do padrão RAG (Retrieval-Augmented Generation) integrando a API da OpenAI para buscar informações em bases de dados e gerar respostas contextualizadas.",
      tecnologias: ["Java", "Spring Boot", "OpenAI API", "RAG"],
      linkGithub: "https://github.com/lzAmaral/Estudos_RAG_OpenAI",
      detalhes: [
        "Integração direta com a API da OpenAI.",
        "Arquitetura de Retrieval-Augmented Generation (RAG).",
        "Processamento e injeção de contexto inteligente na IA."
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white p-8">
      <nav className="max-w-6xl mx-auto mb-16">
        <Link href="/" className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition font-medium">
          <ChevronLeft size={20} /> Voltar para Home
        </Link>
      </nav>

      <section className="max-w-6xl mx-auto pb-20">
        <header className="mb-24">
          <span className="text-blue-500 font-mono tracking-widest uppercase text-sm">Portfólio</span>
          <h2 className="text-5xl font-bold mt-4">Meus <span className="text-blue-500">Projetos</span></h2>
          <p className="text-gray-400 mt-4 max-w-2xl text-lg">
            Abaixo estão alguns dos projetos que desenvolvi nos últimos 2 anos de estudo, unindo o poder do Java Backend com interfaces modernas.
          </p>
        </header>

        <div className="space-y-40">
          {projetos.map((proj) => (
            <div key={proj.id} className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <span className="text-7xl font-bold text-gray-800/40 select-none leading-none">{proj.id}</span>
                  <h3 className="text-4xl font-bold leading-tight">{proj.titulo}</h3>
                  <p className="text-blue-400 font-mono text-sm uppercase tracking-wider">{proj.subtitulo}</p>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed">{proj.descricao}</p>

                <div className="space-y-6">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <Code2 size={20} className="text-blue-500" /> Destaques Técnicos
                  </h4>
                  <ul className="space-y-3">
                    {proj.detalhes.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-400 text-sm italic">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4">
                  <a 
                    href={proj.linkGithub} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 px-8 py-3 rounded-full hover:bg-blue-700 transition-all font-bold text-white shadow-lg shadow-blue-500/20"
                  >
                    <Github size={18} /> GITHUB REPO
                  </a>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center items-center">
                <div className="relative group max-w-[300px] w-full">
                  <div className="relative z-10 rounded-[2.5rem] border-[8px] border-gray-800 bg-gray-900 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:border-blue-500/50">
                    <img 
                      src={proj.imagem} 
                      alt={proj.titulo}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute -bottom-4 -right-4 z-20 bg-[#1e1e1e] border border-gray-800 p-4 rounded-2xl shadow-xl hidden md:block">
                    <div className="flex items-center gap-3">
                      {proj.id === "01" ? <Video size={20} className="text-blue-500" /> : <Smartphone size={20} className="text-blue-500" />}
                      <span className="text-xs font-bold text-gray-300 uppercase">
                        {proj.id === "01" ? "Video Portfolio" : "System Preview"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      <footer className="max-w-6xl mx-auto mt-40 py-10 border-t border-gray-800 text-center text-gray-500 text-sm italic">
        © 2026 Luiz Amaral • Desenvolvedor Backend Java
      </footer>
    </main>
  );
}