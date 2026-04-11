import { motion } from "framer-motion";
import { Code, Megaphone, Share2, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    desc: "Sites e aplicações de alta performance, feitos sob medida.",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    desc: "Estratégias de crescimento orientadas por dados reais.",
  },
  {
    icon: Share2,
    title: "Redes Sociais",
    desc: "Presença digital autêntica que conecta e converte.",
  },
  {
    icon: TrendingUp,
    title: "Tráfego Pago",
    desc: "Campanhas otimizadas para o máximo retorno.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Serviços
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
            O que fazemos.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border/60 bg-card/50 p-8 lg:p-10 hover:border-primary/30 hover:bg-card transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

              <div className="relative">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-500">
                  <s.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}