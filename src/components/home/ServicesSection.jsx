import { motion } from "framer-motion";
import { Monitor, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Monitor,
    num: "01",
    title: "Sites com controle total",
    tagline: "Seu site, suas regras.",
    desc: "Criamos sites e landing pages com um painel simples onde você pode editar textos, imagens e conteúdos sempre que quiser — sem depender de ninguém.",
  },
  {
    icon: Zap,
    num: "02",
    title: "Automação e eficiência",
    tagline: "Menos retrabalho, mais resultado.",
    desc: "Conectamos suas ferramentas e automatizamos processos para sua equipe ganhar tempo e focar no que realmente importa.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">

        <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">
          O que você ganha
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl font-bold mt-4 max-w-md leading-tight"
        >
          O que você ganha ao trabalhar com a gente
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-2 gap-px bg-border/40 rounded-3xl overflow-hidden border border-border/40">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white hover:bg-primary/[0.02] p-10 transition-colors duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <s.icon size={18} className="text-primary" />
              </div>

              <span className="text-[10px] font-bold text-primary/40 tracking-widest uppercase block mb-2">
                {s.num}
              </span>

              <h3 className="font-heading text-xl font-bold mb-2">{s.title}</h3>

              <p className="text-sm text-primary font-semibold mb-4 italic">
                {s.tagline}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/solucoes"
            className="text-xs font-bold text-primary hover:underline underline-offset-8 tracking-widest uppercase"
          >
            Explorar detalhes →
          </Link>
        </div>
      </div>
    </section>
  );
}