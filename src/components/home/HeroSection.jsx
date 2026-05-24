import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-28 overflow-hidden bg-background"
    >
      {/* 🌌 NOVO SISTEMA DE BACKGROUND ATMOFSFÉRICO */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Camada 1: O Noise sofisticado que já definimos */}
        <div className="absolute inset-0 bg-noise opacity-40 md:opacity-50" />
        
        {/* Camada 2: O Visual Orgânico 3D sutil */}
        <img 
          src="/images/home/hero-organic-flow.png" 
          alt=""
          className="w-full h-full object-cover object-center opacity-10 md:opacity-15"
        />

        {/* Camada 3: O Glow Atmosférico Solar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
        
        {/* Overlay de Mascaramento para Legibilidade Absoluta */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/90" />
      </div>

      {/* 📦 CONTEÚDO PRINCIPAL */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full">

          {/* TEXTO (Esquerda) - TOTALMENTE BLINDADO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex gap-2 items-center text-[10px] font-bold text-primary tracking-[0.4em] uppercase mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Soberania Digital & Autonomia
            </motion.span>

            {/* 🛠️ COPIA CORRIGIDA: Sem termos de desenvolvimento de software */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-3xl text-white"
            >
              Sua plataforma, seu patrimônio. <br />
              <span className="text-gradient-amber italic">
                Sua marca sem intermediários.
              </span>
            </motion.h1>

            {/* 🛠️ DESCRIÇÃO CORRIGIDA: Foco em estruturas, posicionamento e interfaces */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 text-base md:text-lg text-white/80 max-w-lg leading-relaxed font-normal antialiased"
            >
              Plataformas digitais com autonomia, performance e identidade.
              Tecnologia feita para você não depender de ninguém depois da entrega.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-12 flex flex-col gap-6"
            >
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="#ConceptSection"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] hover:scale-[1.02] transition-all duration-300"
                >
                  Conhecer o modelo Brototec <ArrowRight size={16} />
                </a>

                <Link
                  to="/solucoes"
                  className="text-sm font-medium text-white/70 hover:text-white hover:underline decoration-primary/50 underline-offset-4 transition-colors py-4"
                >
                  Explorar soluções de marca
                </Link>
              </div>

              <p className="text-[11px] text-muted-foreground/60 tracking-wide leading-relaxed flex items-center gap-2 max-w-md antialiased">
                 <span className="text-primary text-lg">🌱</span>
                Economia solidária: foco em transparência, propriedade do cliente e impacto real, sem dependência futura de terceiros.
              </p>
            </motion.div>
          </motion.div>

          {/* VISUAL (Direita): O Ícone Solarpunk em Darkmode */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px]">
              <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full bg-primary/20 blur-[90px]" />
              
              {/* Puxando o arquivo corrigido que você resolveu aí */}
              <img
                src="/images/home/hero-icon-solarpunk-amber.png"
                alt="Brototec Conceito"
                className="relative w-full h-full object-contain select-none pointer-events-none antialiased z-10"
              />
            </div>
          </motion.div>
          
        </div>

        {/* DIVISOR INSTITUCIONAL */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="mt-24 h-px bg-gradient-to-r from-primary/60 via-primary/10 to-transparent origin-left"
        />
      </div>
    </section>
  );
}