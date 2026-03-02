import { Download, Github, Linkedin } from "lucide-react";
import Link from "next/link"; // Importante para navegação interna

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white p-4 md:p-8">
      {/* Ajustado: flex-col no celular, flex-row no desktop. Gaps dinâmicos. */}
      <nav className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto mb-12 md:mb-20 gap-6 md:gap-0">
        <h1 className="text-2xl font-bold tracking-tighter text-blue-500">LUIZ AMARAL.DEV</h1>
        
        <div className="flex items-center gap-4 md:gap-8 text-sm md:text-base">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/projetos" className="hover:text-blue-400 transition">Projetos</Link>
          <Link
            href="/contato"
            className="bg-blue-600 px-5 py-2 md:px-6 md:py-2 rounded-full font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
          >
            Contato
          </Link>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
        <div className="flex-1 space-y-6 flex flex-col items-center md:items-start">
          <span className="text-blue-400 font-mono text-sm md:text-base">Desenvolvedor Backend Java</span>
          <h2 className="text-4xl md:text-7xl font-bold leading-tight">Olá, Eu sou <br /> <span className="text-blue-500">Luiz Amaral</span></h2>
          <p className="text-gray-400 text-base md:text-lg max-w-lg">
            Desenvolvedor Backend com expertise em ecossistemas <span className="text-blue-400 font-semibold">Java</span>. Especializado em criar APIs de alta performance e arquiteturas escaláveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto justify-center md:justify-start">
            <a href="/Luiz Amaral - CV.pdf" download className="flex items-center justify-center gap-2 border border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition cursor-pointer font-medium w-full sm:w-auto">
              DOWNLOAD CV <Download size={20} />
            </a>
            <div className="flex gap-5 items-center justify-center">
              <a href="https://github.com/lzAmaral" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors"><Github size={28} /></a>
              <a href="https://www.linkedin.com/in/luiz-gustavo-de-campos-amaral-122622278/" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors"><Linkedin size={28} /></a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center order-first md:order-last mb-8 md:mb-0">
          <div className="relative w-56 h-56 md:w-80 md:h-80 border-4 border-blue-500 rounded-full overflow-hidden shadow-lg shadow-blue-500/20">
            <img src="/LuizFtPerfil.jpeg" alt="Luiz Amaral" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-gray-800 pt-12">
        <div><h3 className="text-4xl font-bold text-blue-500">2+</h3><p className="text-gray-500">Anos de Estudo</p></div>
        <div><h3 className="text-4xl font-bold text-blue-500">10+</h3><p className="text-gray-500">Projetos Concluídos</p></div>
        <div><h3 className="text-4xl font-bold text-blue-500">10+</h3><p className="text-gray-500">Tecnologias</p></div>
      </section>
    </main>
  );
}