import { motion } from "framer-motion";

export default function SolucoesHero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-70" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-primary/6 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-sm font-medium text-primary tracking-widest uppercase mb-6"
        >
          O que entregamos
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-3xl"
        >
          Soluções que{" "}
          <span className="text-gradient-green">transformam</span>{" "}
          negócios.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
        >
          Cada serviço foi desenhado para gerar resultados reais — com estratégia, tecnologia e execução de alto nível.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-16 h-px bg-gradient-to-r from-primary/60 via-primary/20 to-transparent origin-left"
        />
      </div>
    </section>
  );
}