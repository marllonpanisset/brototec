import { motion } from "framer-motion";

export default function SolucoesHero() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden bg-black">
      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-background/70" />

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-[10px] font-bold text-primary tracking-[0.4em] uppercase mb-8"
        >
          Soluções
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl text-white"
        >
          Interfaces digitais que viram{" "}
          <span className="text-gradient-amber italic">
            ativos reais de negócio.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-base text-muted-foreground max-w-xl leading-relaxed"
        >
          Estruturamos ecossistemas completos para posicionamento, vendas e crescimento de negócios.  
          Arquitetura de informação sob medida, eliminando dependências desnecessárias de ferramentas de aluguel.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-3 text-sm text-muted-foreground/60 max-w-md"
        >
          Da landing page ao painel de controle — tudo pertence à sua empresa.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 h-px bg-gradient-to-r from-primary/50 via-primary/15 to-transparent origin-left"
        />
      </div>
    </section>
  );
}