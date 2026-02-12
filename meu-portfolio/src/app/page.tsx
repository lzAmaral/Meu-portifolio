import { Download, Github, Linkedin } from "lucide-react";
import Link from "next/link"; // Importante para navegação interna

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white p-8">
      <nav className="flex justify-between items-center max-w-6xl mx-auto mb-20">
        <h1 className="text-2xl font-bold tracking-tighter text-blue-500">LUIZ AMARAL.DEV</h1>
        <div className="flex items-center gap-8">
          <Link href="/" className="hover:text-blue-400 transition hidden md:block">Home</Link>
          <Link href="/projetos" className="hover:text-blue-400 transition hidden md:block">Projetos</Link>
          <Link
            href="/contato"
            className="bg-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
          >
            Contato
          </Link>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <span className="text-blue-400 font-mono">Desenvolvedor Backend Java</span>
          <h2 className="text-5xl md:text-7xl font-bold">Olá, Eu sou <br /> <span className="text-blue-500">Luiz Amaral</span></h2>
          <p className="text-gray-400 text-lg max-w-lg">
            Desenvolvedor Backend com expertise em ecossistemas <span className="text-blue-400 font-semibold">Java</span>. Especializado em criar APIs de alta performance e arquiteturas escaláveis.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <a href="/Luiz_Amaral_CV.pdf" download className="flex items-center gap-2 border border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition cursor-pointer font-medium">
              DOWNLOAD CV <Download size={20} />
            </a>
            <div className="flex gap-5 items-center">
              <a href="https://github.com/lzAmaral" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors"><Github size={28} /></a>
              <a href="https://www.linkedin.com/in/luiz-gustavo-de-campos-amaral-122622278/" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors"><Linkedin size={28} /></a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-blue-500 rounded-full overflow-hidden shadow-lg shadow-blue-500/20">
            <img src="/LuizFtPerfil.jpeg" alt="Luiz Amaral" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24 grid grid-cols-3 gap-8 text-center border-t border-gray-800 pt-12">
        <div><h3 className="text-4xl font-bold text-blue-500">2+</h3><p className="text-gray-500">Anos de Estudo</p></div>
        <div><h3 className="text-4xl font-bold text-blue-500">10+</h3><p className="text-gray-500">Projetos Concluídos</p></div>
        <div><h3 className="text-4xl font-bold text-blue-500">10+</h3><p className="text-gray-500">Tecnologias</p></div>
      </section>
    </main>
  );
}