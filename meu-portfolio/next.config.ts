import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    // Evita que o Turbopack infira a raiz do workspace acima do projeto;
    // process.cwd() funciona tanto local quanto na Vercel (root = meu-portfolio).
    root: process.cwd(),
  },
};

export default nextConfig;
