import { motion } from "framer-motion";
import { BarChart2, Users, RefreshCw, ShieldCheck } from "lucide-react";

const blocks = [
  {
    icon: BarChart2,
    title: "Orientado por dados",
    desc: "Cada decisão é respaldada por análises reais, não por suposições.",
  },
  {
    icon: Users,
    title: "Foco no usuário",
    desc: "Construímos experiências centradas em quem vai usar o produto.",
  },
  {
    icon: RefreshCw,
    title: "Iteração contínua",
    desc: "Evoluímos o produto junto com seu negócio, sem parar.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade garantida",
    desc: "Processos rigorosos de revisão em cada entrega.",
  },
];

export default function ExplanationBlocks() {
  return (
    <section className="relative py-28 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Nossa abordagem
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 tracking-tight">
            Como trabalhamos.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 rounded-2xl overflow-hidden">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-background hover:bg-card transition-colors duration-500 p-8 lg:p-10"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <b.icon size={18} className="text-primary" />
              </div>
              <h3 className="font-heading text-base font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}