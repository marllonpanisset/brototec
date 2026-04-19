import { motion } from "framer-motion";

const audience = [
  {
    num: "01",
    text: "Empresas que querem atualizar o próprio site sem depender de desenvolvedor",
  },
  {
    num: "02",
    text: "Negócios que precisam de um site profissional que acompanhe o crescimento",
  },
  {
    num: "03",
    text: "Equipes que querem mais autonomia e menos retrabalho no dia a dia",
  },
];

export default function ConceptSection() {
  return (
    <section className="py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">

        <span className="text-xs font-medium text-primary tracking-[0.2em] uppercase">
          Para quem é
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl sm:text-3xl font-bold mt-3 max-w-md leading-snug"
        >
          Feito para quem quer mais controle e menos dependência
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-3 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {audience.map((a, i) => (
            <motion.div
              key={a.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-background hover:bg-primary/[0.03] p-6 transition-colors duration-300"
            >
              <span className="text-xs font-medium text-primary/50 tracking-[0.15em] uppercase block mb-3">
                {a.num}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {a.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}