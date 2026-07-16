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
  title: "Luiz Amaral | Desenvolvedor Backend Java",
  description:
    "Desenvolvedor Backend especializado em Java, Spring Boot e APIs escaláveis. Foco em performance e automação inteligente.",
  openGraph: {
    title: "Luiz Amaral | Desenvolvedor Backend Java",
    description:
      "Engenheiro Backend com expertise em Java, APIs de alta performance e modelagem relacional.",
    url: "https://luizamaral.dev",
    siteName: "Luiz Amaral — Backend Developer",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luiz Amaral | Backend Developer",
    description:
      "Java · Spring Boot · PostgreSQL — Engenharia Robusta.",
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
