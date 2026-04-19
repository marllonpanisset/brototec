import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Entendemos o processo real antes de qualquer linha de código.",
  },
  {
    num: "02",
    title: "Estruturação",
    desc: "Escopo claro, arquitetura definida, decisões justificadas.",
  },
  {
    num: "03",
    title: "Construção",
    desc: "Desenvolvimento com foco em clareza, não em volume.",
  },
  {
    num: "04",
    title: "Evolução",
    desc: "Ajustes contínuos conforme o negócio cresce — você no controle.",
  },
];

export default function DifferentiationSection() {
  return (
    <section className="py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">

        <span className="text-xs font-medium text-primary tracking-[0.2em] uppercase">
          Nossa estrutura colaborativa
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl sm:text-3xl font-bold mt-3 max-w-sm leading-snug"
        >
          Como trabalhamos juntos
        </motion.h2>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-border/40 border border-border/40 rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-6 bg-background hover:bg-primary/[0.03] transition-colors duration-300"
            >
              <span className="text-xs font-medium text-primary tracking-[0.12em] uppercase block mb-3">
                {s.num}
              </span>
              <h3 className="font-heading text-sm font-semibold mb-2">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}