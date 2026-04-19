import { motion } from "framer-motion";
import { Users, ShieldCheck, Clock, TrendingUp } from "lucide-react";

const blocks = [
  {
    icon: Users,
    title: "Crescimento coletivo",
    desc: "Não terceirizamos decisões. Trabalhamos junto com sua equipe para construir autonomia digital real.",
  },
  {
    icon: ShieldCheck,
    title: "Autonomia digital",
    desc: "O código é seu. A infra é sua. Você não fica refém de fornecedor para mudar o próprio site.",
  },
  {
    icon: Clock,
    title: "Tecnologia com intenção",
    desc: "Nada é construído sem clareza do impacto na operação. Cada decisão técnica é justificada.",
  },
  {
    icon: TrendingUp,
    title: "Preparado para escalar",
    desc: "Arquitetura que cresce com o negócio — sem refazer tudo do zero quando a demanda aumentar.",
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
            Crescimento coletivo.
            <br />Tecnologia com intenção.
          </h2>
          <p className="mt-5 text-muted-foreground text-sm leading-relaxed">
            Nossa estrutura colaborativa garante que cada decisão técnica seja
            clara, justificada e alinhada ao contexto real do seu negócio.
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