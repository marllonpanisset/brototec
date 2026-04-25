import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-primary/60 to-transparent blur-[120px] translate-x-1/4 -translate-y-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="order-1">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-6"
            >
              Tecnologia que liberta
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl lg:text-6xl font-bold leading-[1.06] tracking-tight"
            >
              Controle total do seu site. <br />
              <span className="text-gradient-green italic">
                Sem depender de ninguém.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-base text-muted-foreground max-w-lg leading-relaxed"
            >
              Criamos sites e landing pages profissionais com um painel simples para você editar conteúdo, publicar mudanças e evoluir seu projeto quando quiser.
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
                  Criar meu site <ArrowRight size={15} />
                </Link>
                <Link
                  to="/projetos"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-3.5"
                >
                  Ver como funciona
                </Link>
              </div>

              {/* Linha de confiança */}
              <p className="text-[11px] text-muted-foreground/60 tracking-wide leading-relaxed">
                🌱 Projeto piloto aberto para os primeiros parceiros — sem burocracia, com contrato claro.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex order-2 justify-center lg:justify-end"
          >
            <div className="relative w-[460px] h-[460px]">
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-[80px] animate-pulse" />
              <img
                src="/images/home/brototec.svg"
                alt="Brototec"
                className="relative w-full h-full object-contain mix-blend-multiply drop-shadow-2xl animate-float"
              />
            </div>
          </motion.div>
        </div>

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