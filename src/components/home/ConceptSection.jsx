import { motion } from "framer-motion";
import { Zap, Target, Eye } from "lucide-react";

const concepts = [
  {
    icon: Zap,
    title: "Simplicidade",
    desc: "Menos ruído, mais resultado. Tecnologia que funciona sem complicação.",
  },
  {
    icon: Target,
    title: "Eficiência",
    desc: "Cada decisão otimizada para gerar impacto máximo com recursos mínimos.",
  },
  {
    icon: Eye,
    title: "Clareza",
    desc: "Processos transparentes. Você entende cada etapa do seu projeto.",
  },
];

export default function ConceptSection() {
  return (
    <section id="conceito" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Princípios
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
            O que nos guia.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-2xl overflow-hidden">
          {concepts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-background p-10 lg:p-14 group hover:bg-card transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors duration-500">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}