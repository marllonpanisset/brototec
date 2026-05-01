import { motion } from "framer-motion";

export default function SolucoesHero() {
  return (
    <section
      className="relative pt-40 pb-28 overflow-hidden"
      style={{
        backgroundImage: "url('/images/solucoes/solucoes-hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "75% center", // puxa arte pra direita
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* OVERLAY SYSTEM */}

      {/* 1. BASE — legibilidade forte */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/85 to-background/30" />

      {/* 2. LIGHT BLOOM — mais sutil que home */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-primary/8 blur-[120px] rounded-full" />
      </div>

      {/* 3. DEPTH FADE — integração com página */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-background/70" />

      {/* CONTEÚDO */}
      <div className="relative z-20 max-w-7xl mx-auto px-6">
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
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl"
        >
          Soberania Digital —{" "}
          <span className="text-gradient-green italic">
            seu sistema, suas regras.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 text-base text-muted-foreground max-w-lg leading-relaxed"
        >
          Desenvolvemos ecossistemas digitais e automações sob medida. 
          Entregamos o código, a propriedade e a chave de tudo. 
          Na Brototec, você não aluga o seu sucesso; você é dono da sua estrutura.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-3 text-sm text-muted-foreground/60 max-w-md"
        >
          Para negócios que querem crescer sem abrir chamado pra trocar uma
          foto.
        </motion.p>

        {/* DIVISOR */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="mt-16 h-px bg-gradient-to-r from-primary/50 via-primary/15 to-transparent origin-left"
        />
      </div>
    </section>
  );
}