import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Settings, Repeat } from "lucide-react";

const blocks = [
  {
    icon: ShieldCheck,
    title: "Você é dono do sistema",
    desc: "O site é seu. Código, acesso e estrutura ficam com você — sem dependência futura.",
  },
  {
    icon: UserCheck,
    title: "Autonomia total",
    desc: "Você aprende a usar. Entregamos o projeto com treinamento para você mesmo gerenciar conteúdo e estrutura.",
  },
  {
    icon: Settings,
    title: "Sem manutenção recorrente",
    desc: "Não trabalhamos com mensalidade de manutenção. O projeto é entregue completo e funcional para você operar sozinho.",
  },
  {
    icon: Repeat,
    title: "Estrutura simples e editável",
    desc: "Nada de sistemas complexos. Tudo é pensado para ser fácil de entender, atualizar e evoluir com o tempo.",
  },
];

export default function ExplanationBlocks() {
  return (
    <section className="relative py-28 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-xl"
        >
          <span className="text-xs font-medium text-primary tracking-[0.2em] uppercase">
            Como trabalhamos
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 leading-tight">
            Você não depende da gente.
            <br />E isso é intencional.
          </h2>

          <p className="mt-5 text-muted-foreground text-sm leading-relaxed">
            Nosso trabalho não é te prender — é te entregar controle.
            Você recebe um sistema completo, funcional e simples de gerenciar.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-background hover:bg-primary/[0.03] p-8 transition-colors duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <b.icon size={16} className="text-primary" />
              </div>

              <h3 className="font-heading text-sm font-semibold mb-2">
                {b.title}
              </h3>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}