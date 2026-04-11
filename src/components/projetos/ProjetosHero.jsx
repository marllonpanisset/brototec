import { motion } from "framer-motion";

export default function ProjetosHero() {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-sm font-medium text-primary tracking-widest uppercase mb-6"
        >
          Portfólio
        </motion.span>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Trabalhos que{" "}
            <span className="text-gradient-green">falam</span>{" "}
            por si.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-muted-foreground max-w-xs leading-relaxed lg:text-right lg:pb-2 shrink-0"
          >
            Cada projeto é uma solução única construída com cuidado e intenção.
          </motion.p>
        </div>

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