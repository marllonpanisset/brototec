import { motion } from "framer-motion";

const audience = [
  {
    num: "01",
    text: "Demonstrar boas práticas de desenvolvimento Front-end utilizando React, TypeScript e Vite.",
  },
  {
    num: "02",
    text: "Explorar arquitetura de componentes reutilizáveis, organização de código e escalabilidade da interface.",
  },
  {
    num: "03",
    text: "Aplicar princípios de UX, responsividade, acessibilidade e performance em um projeto completo.",
  },
  {
    num: "04",
    text: "A Brototec é um projeto fictício criado exclusivamente para estudo e composição de portfólio. Nenhum conteúdo representa uma empresa ou atividade comercial real.",
    negative: true,
  },
];

export default function ConceptSection() {
  return (
    <section id="ConceptSection" className="py-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-medium text-primary tracking-[0.2em] uppercase"
        >
          Sobre o Projeto
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl sm:text-3xl font-bold mt-3 max-w-xl leading-tight text-white"
        >
          Mais do que um layout. <br />
          <span className="text-gradient-amber italic">
            Um estudo completo de desenvolvimento Front-end.
          </span>
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border/40 shadow-sm">
          {audience.map((a, i) => (
            <motion.div
              key={a.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 transition-colors duration-500 ${
                a.negative
                  ? "bg-muted/30 hover:bg-muted/50"
                  : "bg-background hover:bg-primary/[0.02]"
              }`}
            >
              <span
                className={`text-[10px] font-bold tracking-[0.2em] uppercase block mb-4 ${
                  a.negative ? "text-destructive/50" : "text-primary/60"
                }`}
              >
                {a.negative ? "Importante" : `Objetivo ${a.num}`}
              </span>

              <p
                className={`text-sm leading-relaxed ${
                  a.negative
                    ? "text-muted-foreground/50 italic"
                    : "text-muted-foreground font-medium"
                }`}
              >
                {a.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-[10px] text-muted-foreground/40 uppercase tracking-[0.3em]"
        >
          Brototec — Projeto fictício desenvolvido para fins educacionais e demonstração técnica.
        </motion.p>

      </div>
    </section>
  );
}