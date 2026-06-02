import { Download, Github, Linkedin, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white p-4 md:p-8 selection:bg-emerald-500/30">
      <nav className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto mb-16 md:mb-32 pt-4 gap-8 md:gap-0">
        <div className="flex items-center gap-3">
          <Terminal size={24} className="text-emerald-500" />
          <h1 className="text-xl font-mono font-bold tracking-widest text-emerald-500 uppercase">
            Luiz_Amaral.sys
          </h1>
        </div>
        
        <div className="flex items-center gap-6 md:gap-10 text-sm md:text-base font-mono uppercase tracking-widest">
          <Link href="/" className="text-white border-b-2 border-emerald-500 pb-1">
            Home
          </Link>
          <Link href="/projetos" className="text-gray-400 hover:text-emerald-400 hover:border-b-2 hover:border-emerald-500/50 pb-1 transition-all">
            Projetos
          </Link>
          <Link
            href="/contato"
            className="bg-emerald-500 text-[#050505] px-6 py-2 font-bold hover:bg-emerald-400 transition-colors"
          >
            Contato
          </Link>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 text-center lg:text-left mb-32">
        <div className="flex-1 space-y-8 flex flex-col items-center lg:items-start z-10">
          <div className="inline-flex items-center gap-3 border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-400 font-mono text-xs md:text-sm uppercase tracking-widest">Backend Java Engineer</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
            Engenharia <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-700">Robusta.</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light leading-relaxed">
            Desenvolvedor Backend com expertise em ecossistemas <strong className="text-white font-normal">Java & Spring Boot</strong>. Especializado em criar APIs de alta performance, integrações com IA e modelagem relacional.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto pt-4">
            {/* CORREÇÃO AQUI: Link do PDF atualizado para o novo arquivo */}
            <a 
              href="/Luiz_Gustavo_Amaral_CV.pdf" 
              download 
              className="group flex items-center justify-center gap-3 border border-emerald-500 bg-transparent text-emerald-500 px-8 py-4 font-mono font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-[#050505] transition-all w-full sm:w-auto"
            >
              Download_CV <Download size={18} className="group-hover:animate-bounce" />
            </a>
            
            <div className="flex gap-6 items-center justify-center">
              <a href="https://github.com/lzAmaral" target="_blank" className="text-gray-500 hover:text-emerald-500 transition-colors">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/luiz-gustavo-de-campos-amaral-122622278/" target="_blank" className="text-gray-500 hover:text-emerald-500 transition-colors">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end order-first lg:order-last w-full max-w-md lg:max-w-none">
          {/* Fuga do Clichê: Foto brutalista com glitch/border effect ao invés de circulo perfeito */}
          <div className="relative group">
            <div className="absolute inset-0 bg-emerald-500 translate-x-4 translate-y-4 opacity-20 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
            <div className="relative w-72 h-72 md:w-[26rem] md:h-[26rem] border border-gray-800 bg-[#0A0A0A] overflow-hidden z-10">
              <Image 
                src="/LuizFtPerfil.jpeg" 
                alt="Luiz Amaral" 
                fill 
                className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                priority 
              />
              <div className="absolute inset-0 border border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Elementos decorativos Matrix/Code */}
            <div className="absolute -left-8 top-12 text-emerald-500/20 font-mono text-xs rotate-90 tracking-widest hidden md:block">
              {">"} SYSTEM.INIT()
            </div>
            <div className="absolute -right-8 bottom-12 text-emerald-500/20 font-mono text-xs -rotate-90 tracking-widest hidden md:block">
              V 2.0.26
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto border-t border-gray-900 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          <div className="space-y-4 p-6 border border-gray-900 bg-[#0A0A0A] hover:border-emerald-500/30 transition-colors">
            <h3 className="text-emerald-500 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="text-gray-600">//</span> SYS_UPTIME
            </h3>
            <div className="text-5xl font-black text-white">2<span className="text-emerald-500">+</span></div>
            <p className="text-gray-500 font-mono text-sm">Anos de Engenharia</p>
          </div>

          <div className="space-y-4 p-6 border border-gray-900 bg-[#0A0A0A] hover:border-emerald-500/30 transition-colors">
            <h3 className="text-emerald-500 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="text-gray-600">//</span> DEPLOYED_PROJECTS
            </h3>
            <div className="text-5xl font-black text-white">10<span className="text-emerald-500">+</span></div>
            <p className="text-gray-500 font-mono text-sm">Sistemas Entregues</p>
          </div>

          <div className="space-y-4 p-6 border border-gray-900 bg-[#0A0A0A] hover:border-emerald-500/30 transition-colors">
            <h3 className="text-emerald-500 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="text-gray-600">//</span> STACK_MODULES
            </h3>
            <div className="text-5xl font-black text-white">10<span className="text-emerald-500">+</span></div>
            <p className="text-gray-500 font-mono text-sm">Tecnologias Dominadas</p>
          </div>

        </div>
      </section>
    </main>
  );
}