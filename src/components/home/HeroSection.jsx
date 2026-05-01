import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center pt-20 pb-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/home/hero-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "70% center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* OVERLAY SYSTEM */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/80 to-background/20" />
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-background/60" />

      {/* CONTEÚDO */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-6"
            >
              Soberania Digital & Autonomia
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl lg:text-6xl font-bold leading-[1.06] tracking-tight"
            >
              Seu sistema, seu patrimônio. <br />
              <span className="text-gradient-green italic">
                Sem aluguel de software.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-base text-muted-foreground max-w-lg leading-relaxed"
            >
              Construímos sistemas de gestão, sites e landing pages de alto padrão em Flask e React. 
              Entregamos o controle total e a propriedade do código para o seu negócio — sem taxas de licença abusivas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-10 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-7 py-3.5 rounded-xl hover:shadow-lg transition-all"
                >
                  Construir minha solução <ArrowRight size={15} />
                </Link>

                <Link
                  to="/solucoes"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-3.5"
                >
                  Conhecer o modelo Brototec
                </Link>
              </div>

              <p className="text-[11px] text-muted-foreground/70 tracking-wide leading-relaxed flex items-center gap-2">
                <span className="text-primary text-lg">🌱</span> 
                Economia solidária: foco em transparência, propriedade do cliente e impacto real.
              </p>
            </motion.div>
          </div>

          {/* VISUAL DIREITA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex justify-center lg:justify-end"
          >
            <div className="relative w-[460px] h-[460px]">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-[100px]" />
              <img
                src="/images/home/brototec.svg"
                alt="Brototec Logo"
                className="relative w-full h-full object-contain drop-shadow-2xl animate-float"
              />
            </div>
          </motion.div>
        </div>

        {/* DIVISOR */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.55 }}
          className="mt-20 h-px bg-gradient-to-r from-primary/50 via-primary/15 to-transparent origin-left"
        />
      </div>
    </section>
  );
}