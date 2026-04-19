import { motion } from "framer-motion";

export default function SolucoesHero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs font-medium text-primary tracking-[0.2em] uppercase mb-8"
        >
          Laboratório
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl"
        >
          Menos ferramentas.{" "}
          <span className="text-gradient-green">
            Mais clareza operacional.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-base text-muted-foreground max-w-lg leading-relaxed"
        >
          Tecnologia que liberta — não que aprisiona. Construímos junto com sua
          equipe, com escopo claro e autonomia real para evoluir.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-3 text-sm text-muted-foreground/70 max-w-md"
        >
          Para empresas que querem crescer sem depender de terceiros para cada mudança.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="mt-16 h-px bg-gradient-to-r from-primary/50 via-primary/15 to-transparent origin-left"
        />
      </div>
    </section>
  );
}