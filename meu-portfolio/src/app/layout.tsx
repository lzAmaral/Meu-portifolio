import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luiz Amaral | Desenvolvedor Backend Java · Spring Boot",
  description:
    "Desenvolvedor Backend especializado em Java, Spring Boot e APIs escaláveis. Experiência internacional (Canadá). Disponível para oportunidades.",
  openGraph: {
    title: "Luiz Amaral | Desenvolvedor Backend Java",
    description:
      "APIs de alta performance com Java, Spring Boot, Docker e PostgreSQL.",
    url: "https://luizamaral.vercel.app",
    siteName: "Luiz Amaral — Backend Developer",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luiz Amaral | Backend Developer",
    description:
      "Java · Spring Boot · Docker · PostgreSQL — Disponível para oportunidades.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
