import { motion } from "framer-motion";
import { Monitor, Cpu, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Monitor,
    num: "01",
    title: "Ecossistemas Digitais",
    tagline: "Sua presença com soberania.",
    desc: "Desenvolvemos sites e landing pages de alto padrão (React/Next.js) com painéis administrativos intuitivos. Você altera conteúdo e evolui sua marca sem depender de chamados técnicos ou taxas extras.",
  },
  {
    icon: Cpu,
    num: "02",
    title: "Sistemas & Dashboards",
    tagline: "Gestão inteligente em Flask.",
    desc: "Criamos sistemas personalizados para gerir clínicas, estoques ou faturamento. Dashboards privados e seguros onde você é dono dos dados e da lógica de negócio. Sem mensalidade de licença por usuário.",
  },
  {
    icon: ShieldCheck,
    num: "03",
    title: "Patrimônio Digital",
    tagline: "A chave é sempre sua.",
    desc: "Entregamos o código-fonte, a documentação e a infraestrutura. Diferente de plataformas fechadas, na Brototec você constrói um ativo que pertence legalmente à sua empresa. Liberdade total de migração.",
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
          O Valor da Entrega
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-4xl font-bold mt-4 max-w-xl leading-[1.1]"
        >
          Transformamos custos de software em <br />
          <span className="text-gradient-green italic">ativos de faturamento.</span>
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border/40 rounded-3xl overflow-hidden border border-border/40 shadow-sm">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background hover:bg-primary/[0.02] p-10 transition-colors duration-500 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <s.icon size={22} className="text-primary" />
              </div>

              <span className="text-[10px] font-bold text-primary/30 tracking-widest uppercase block mb-3">
                Serviço {s.num}
              </span>

              <h3 className="font-heading text-xl font-bold mb-3">{s.title}</h3>

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
            to="/solucoes"
            className="group inline-flex items-center gap-3 text-[10px] font-bold text-primary tracking-[0.2em] uppercase hover:gap-5 transition-all"
          >
            Explorar todas as soluções <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}