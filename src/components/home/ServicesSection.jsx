import { motion } from "framer-motion";
import { Monitor, LayoutGrid, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Monitor,
    num: "01",
    title: "Desenvolvimento de Interfaces",
    tagline: "React • Vite • Componentização",
    desc: "Construção de interfaces modernas utilizando componentes reutilizáveis, organização escalável do projeto e foco em performance, manutenção e experiência do usuário.",
  },
  {
    icon: LayoutGrid,
    num: "02",
    title: "UX, UI & Responsividade",
    tagline: "Experiência em qualquer dispositivo",
    desc: "Aplicação de boas práticas de UX/UI, hierarquia visual, acessibilidade, responsividade e consistência visual para criar interfaces intuitivas e agradáveis.",
  },
  {
    icon: ShieldCheck,
    num: "03",
    title: "Boas Práticas de Código",
    tagline: "Arquitetura e organização",
    desc: "Estruturação do projeto utilizando componentes reutilizáveis, organização por responsabilidades, animações, tipagem e padrões que facilitam evolução e manutenção.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 border-t border-border/40 bg-background/50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase"
        >
          Competências Demonstradas
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-4xl font-bold mt-4 max-w-xl leading-[1.1] text-white"
        >
          Mais do que um layout. <br />
          <span className="text-gradient-amber italic">
            Um projeto para demonstrar conhecimento técnico.
          </span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40 rounded-3xl overflow-hidden border border-border/40 shadow-sm">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card hover:bg-primary/[0.02] p-10 transition-colors duration-500 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <s.icon size={22} className="text-primary" />
              </div>

              <span className="text-[10px] font-bold text-primary/30 tracking-widest uppercase block mb-3">
                Competência {s.num}
              </span>

              <h3 className="font-heading text-xl font-bold mb-3 text-white">
                {s.title}
              </h3>

              <p className="text-xs text-primary font-bold mb-5 tracking-wide uppercase">
                {s.tagline}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/sobre"
            className="group inline-flex items-center gap-3 text-[10px] font-bold text-primary tracking-[0.2em] uppercase hover:gap-5 transition-all"
          >
            Conhecer o projeto <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}