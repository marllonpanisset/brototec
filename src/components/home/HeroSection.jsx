import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE = "../images/home/hero.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block text-sm font-medium text-primary mb-6 tracking-widest uppercase">
                Tecnologia com propósito
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Criamos o{" "}
              <span className="text-gradient-green">futuro digital</span>
              <br />
              da sua marca.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed"
            >
              Soluções de tecnologia que impulsionam crescimento real.
              Simples, eficiente e sob medida.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-7 py-3.5 rounded-full text-sm hover:opacity-90 transition-all duration-300"
              >
                Fale conosco
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 px-4 py-3.5"
              >
                Ver projetos
              </a>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[460px] lg:h-[460px]">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-[60px] animate-pulse-glow" />
              <img
                src={HERO_IMAGE}
                alt="Brototec visual abstrato"
                className="relative w-full h-full object-contain animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}