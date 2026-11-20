import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Crimson_Pro } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
  style: "italic",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Luiz Amaral | AI Engineer & Sistemas Agênticos",
  description:
    "AI Engineer na Fluxomind. Construo sistemas agênticos com LangGraph, pipelines de RAG e integrações via MCP. Software que coloca a IA pra trabalhar em operações reais.",
  openGraph: {
    title: "Luiz Amaral | AI Engineer & Sistemas Agênticos",
    description:
      "Sistemas agênticos, RAG, MCP e fullstack: da plataforma multi-tenant ao SaaS em produção.",
    url: "https://luizamaral.vercel.app",
    siteName: "Luiz Amaral · AI Engineer",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luiz Amaral | AI Engineer & Sistemas Agênticos",
    description:
      "LangGraph · RAG · MCP · Fullstack. Software que coloca a IA pra trabalhar.",
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
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${crimsonPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
