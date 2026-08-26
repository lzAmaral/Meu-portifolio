import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luiz Amaral | Desenvolvedor Fullstack e Sistemas Agênticos",
  description:
    "Desenvolvedor Fullstack especializado em sistemas agênticos, LangGraph, RAG e automação de processos com IA.",
  openGraph: {
    title: "Luiz Amaral | Desenvolvedor Fullstack e Sistemas Agênticos",
    description:
      "Aplicações que conectam agentes de IA, dados e ferramentas para automatizar processos reais.",
    url: "https://luizamaral.dev",
    siteName: "Luiz Amaral — Fullstack Developer",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luiz Amaral | Fullstack e Sistemas Agênticos",
    description:
      "LangGraph · RAG · Embeddings · Desenvolvimento Fullstack.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
