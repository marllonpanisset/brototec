import { motion } from "framer-motion";

export default function SolucoesHero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-primary/60 to-transparent blur-[120px] translate-x-1/4 -translate-y-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-[10px] font-bold text-primary tracking-[0.4em] uppercase mb-8"
        >
          Soluções
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl"
        >
          O que construímos —{" "}
          <span className="text-gradient-green italic">
            e por que funciona.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 text-base text-muted-foreground max-w-lg leading-relaxed"
        >
          Sites, landing pages e automações construídos com escopo claro e entregues
          com autonomia real. Você termina o projeto sabendo operar tudo — sem depender
          de nós para cada mudança.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-3 text-sm text-muted-foreground/60 max-w-md"
        >
          Para negócios que querem crescer sem abrir chamado pra trocar uma foto.
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