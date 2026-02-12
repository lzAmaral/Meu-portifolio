import { Mail, Phone, Send, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Contato() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white p-8">
      <nav className="flex justify-between items-center max-w-6xl mx-auto mb-20">
        <Link href="/" className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition font-medium">
          <ChevronLeft size={20} /> Voltar para Home
        </Link>
      </nav>

      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500">Vamos Trabalhar Juntos?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Entre em contato para discutir seu projeto, oportunidades de parceria ou vagas de emprego.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1e1e1e] p-8 rounded-3xl border border-gray-800">
            <h3 className="text-blue-500 text-xl font-semibold mb-8 flex items-center gap-2">
              <Send size={20} className="rotate-45" /> Contato Direto
            </h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#2a2a2a] p-4 rounded-xl text-blue-500"><Phone size={24} /></div>
                <div><p className="text-gray-500 text-sm">Telefone</p><p className="text-white font-medium">(+55) 15 99785-6788</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#2a2a2a] p-4 rounded-xl text-blue-500"><Mail size={24} /></div>
                <div><p className="text-gray-500 text-sm">Email</p><p className="text-white font-medium">Luizgustavo092005@gmail.com</p></div>
              </div>
            </div>
          </div>

          <div className="bg-[#1e1e1e] p-8 rounded-3xl border border-gray-800">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Nome *" className="bg-[#121212] border border-gray-800 rounded-xl p-4 text-sm focus:border-blue-500 outline-none transition w-full" />
                <input type="text" placeholder="Sobrenome *" className="bg-[#121212] border border-gray-800 rounded-xl p-4 text-sm focus:border-blue-500 outline-none transition w-full" />
              </div>
              <input type="email" placeholder="seu@email.com *" className="w-full bg-[#121212] border border-gray-800 rounded-xl p-4 text-sm focus:border-blue-500 outline-none transition" />
              <textarea placeholder="Sua mensagem..." rows={4} className="w-full bg-[#121212] border border-gray-800 rounded-xl p-4 text-sm focus:border-blue-500 outline-none transition resize-none"></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}