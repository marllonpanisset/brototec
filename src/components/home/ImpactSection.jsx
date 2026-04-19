import { motion } from "framer-motion";

const impacts = [
  {
    title: "Menos dependência externa",
    desc: "Código seu, infra sua. Mudanças acontecem sem precisar abrir chamado.",
  },
  {
    title: "Mais tempo para o que importa",
    desc: "Tarefas repetitivas automatizadas. Equipe focada em crescimento.",
  },
  {
    title: "Decisões com informação real",
    desc: "Dados organizados e acessíveis. Sem planilhas empilhadas.",
  },
  {
    title: "Estrutura que acompanha você",
    desc: "Arquitetura pensada para evoluir — não para refazer.",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">

        <span className="text-xs font-medium text-primary tracking-[0.2em] uppercase">
          Autonomia digital na prática
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl sm:text-3xl font-bold mt-3 max-w-sm leading-snug"
        >
          O que muda no dia a dia
        </motion.h2>

        <div className="mt-8 grid sm:grid-cols-2 gap-3">
          {impacts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-start gap-4 p-5 border border-border/40 rounded-xl hover:bg-primary/[0.02] transition-colors duration-300"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold mb-1">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}