import { Download, Github, Linkedin, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white p-4 md:p-8 selection:bg-blue-500/30">
      <nav className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto mb-16 md:mb-32 pt-4 gap-8 md:gap-0">
        <div className="flex items-center gap-3">
          <Terminal size={24} className="text-blue-500" />
          <h1 className="text-xl font-mono font-bold tracking-widest text-blue-500 uppercase">
            Luiz_Amaral.dev
          </h1>
        </div>

        <div className="flex items-center gap-6 md:gap-10 text-sm md:text-base font-mono uppercase tracking-widest">
          <Link href="/" className="text-white border-b-2 border-blue-500 pb-1">
            Home
          </Link>
          <Link href="/projetos" className="text-gray-400 hover:text-blue-400 hover:border-b-2 hover:border-blue-500/50 pb-1 transition-all">
            Projetos
          </Link>
          <Link
            href="/contato"
            className="bg-blue-500 text-[#050505] px-6 py-2 font-bold hover:bg-blue-400 transition-colors"
          >
            Contato
          </Link>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 text-center lg:text-left mb-32">
        <div className="flex-1 space-y-8 flex flex-col items-center lg:items-start z-10">
          <div className="inline-flex items-center gap-3 border border-blue-500/20 bg-blue-500/5 px-4 py-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-blue-400 font-mono text-xs md:text-sm uppercase tracking-widest">Backend Java Engineer</span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
            Engenharia <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">Robusta.</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light leading-relaxed">
            Desenvolvedor Backend com expertise em ecossistemas <strong className="text-white font-normal">Java & Spring Boot</strong>. Especializado em criar APIs de alta performance, integrações com IA e modelagem relacional.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto pt-4">
            {/* CORREÇÃO AQUI: Link do PDF atualizado para o novo arquivo */}
            <a
              href="/Luiz_Gustavo_Amaral_CV.pdf"
              download
              className="group flex items-center justify-center gap-3 border border-blue-500 bg-transparent text-blue-500 px-8 py-4 font-mono font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-[#050505] transition-all w-full sm:w-auto"
            >
              Baixar_CV <Download size={18} className="group-hover:animate-bounce" />
            </a>

            <div className="flex gap-6 items-center justify-center">
              <a href="https://github.com/lzAmaral" target="_blank" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/luiz-gustavo-de-campos-amaral-122622278/" target="_blank" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end order-first lg:order-last w-full max-w-md lg:max-w-none">
          {/* Fuga do Clichê: Foto brutalista com glitch/border effect ao invés de circulo perfeito */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500 translate-x-4 translate-y-4 opacity-20 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
            <div className="relative w-72 h-72 md:w-[26rem] md:h-[26rem] border border-gray-800 bg-[#0A0A0A] overflow-hidden z-10">
              <Image
                src="/LuizFtPerfil.jpeg"
                alt="Luiz Amaral"
                fill
                className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 border border-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Elementos decorativos Matrix/Code */}
            <div className="absolute -left-8 top-12 text-blue-500/20 font-mono text-xs rotate-90 tracking-widest hidden md:block">
              {">"} SISTEMA.INICIAR()
            </div>
            <div className="absolute -right-8 bottom-12 text-blue-500/20 font-mono text-xs -rotate-90 tracking-widest hidden md:block">
              V 2.0.26
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto border-t border-gray-900 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">

          <div className="space-y-4 p-6 border border-gray-900 bg-[#0A0A0A] hover:border-blue-500/30 transition-colors">
            <h3 className="text-blue-500 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="text-gray-600">//</span> TEMPO_ATIVIDADE
            </h3>
            <div className="text-5xl font-black text-white">2<span className="text-blue-500">+</span></div>
            <p className="text-gray-500 font-mono text-sm">Anos de estudo</p>
          </div>

          <div className="space-y-4 p-6 border border-gray-900 bg-[#0A0A0A] hover:border-blue-500/30 transition-colors">
            <h3 className="text-blue-500 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="text-gray-600">//</span> PROJETOS_ENTREGUES
            </h3>
            <div className="text-5xl font-black text-white">10<span className="text-blue-500">+</span></div>
            <p className="text-gray-500 font-mono text-sm">Sistemas Entregues</p>
          </div>

          <div className="space-y-4 p-6 border border-gray-900 bg-[#0A0A0A] hover:border-blue-500/30 transition-colors">
            <h3 className="text-blue-500 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="text-gray-600">//</span> TECNOLOGIAS_ATIVAS
            </h3>
            <div className="text-5xl font-black text-white">10<span className="text-blue-500">+</span></div>
            <p className="text-gray-500 font-mono text-sm">Tecnologias Dominadas</p>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto border-t border-gray-900 pt-24 pb-24">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter flex items-center gap-4">
            <span className="text-blue-500 font-mono text-xl md:text-3xl">{"//"}</span>
            Log_Carreira
          </h2>
          <p className="text-gray-400 mt-4 font-mono text-sm uppercase tracking-widest">
            Histórico Profissional & Acadêmico
          </p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">

          {/* Item 1: Experiência SESI */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050505] bg-blue-500 text-[#050505] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#050505] z-10">
              <Terminal size={16} className="animate-pulse" />
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 border border-blue-500/30 bg-[#0A0A0A] hover:bg-[#0c0c0c] transition-colors relative">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-2 gap-2">
                <h3 className="font-bold text-xl text-white uppercase tracking-wider">Estagiário de Tecnologia</h3>
                <span className="text-blue-500 font-mono text-xs border border-blue-500/20 bg-blue-500/10 px-2 py-1 shrink-0">2026 - Atual</span>
              </div>
              <h4 className="text-gray-400 font-mono text-sm mb-4">SESI (Espaço Maker)</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">{">"}</span>
                  Integração entre tecnologia e educação através de atividades práticas e inovadoras.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">{">"}</span>
                  Ensino de lógica de programação e ferramentas tecnológicas, desenvolvendo raciocínio analítico.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">{">"}</span>
                  Suporte técnico e operacional do ambiente.
                </li>
              </ul>
            </div>
          </div>

          {/* Item 2: FACENS */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050505] bg-gray-800 text-gray-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#050505] z-10 group-hover:bg-blue-500 group-hover:text-[#050505] transition-colors">
              <Terminal size={16} />
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 border border-gray-900 bg-[#0A0A0A] hover:border-blue-500/30 transition-colors relative">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-2 gap-2">
                <h3 className="font-bold text-xl text-white uppercase tracking-wider">Análise e Desenv. de Sistemas</h3>
                <span className="text-gray-500 font-mono text-xs border border-gray-800 px-2 py-1 shrink-0">2025 - 2027</span>
              </div>
              <h4 className="text-gray-400 font-mono text-sm mb-4">FACENS</h4>
              <p className="text-gray-500 text-sm">
                Formação superior focada em engenharia de software, modelagem de sistemas, banco de dados e arquitetura de aplicações corporativas.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}