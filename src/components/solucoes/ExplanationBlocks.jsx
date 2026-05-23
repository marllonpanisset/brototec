import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Settings, Repeat } from "lucide-react";

const blocks = [
  {
    icon: ShieldCheck,
    title: "Soberania Digital",
    desc: "A estrutura de design e as informações são suas. Você não aluga a presença da sua empresa; você constrói um patrimônio digital de propriedade da sua marca.",
  },
  {
    icon: UserCheck,
    title: "Autonomia via Dashboard",
    desc: "Gerencie textos, imagens e dados sem abrir chamados técnicos. Entregamos o controle operacional na sua mão através de um painel de gerenciamento intuitivo.",
  },
  {
    icon: Settings,
    title: "Custeio Operacional",
    desc: "Para as plataformas, você mantém apenas o custo essencial da infraestrutura de hospedagem e backup. Sem taxas de licença ou assinaturas abusivas.",
  },
  {
    icon: Repeat,
    title: "Evolução sob Demanda",
    desc: "Sua estrutura digital cresce com o seu negócio. Novas expansões visuais e funcionais são planejadas conforme sua necessidade, sem mensalidades infladas.",
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
            Tecnologia Regenerativa
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 leading-tight">
            Tecnologia feita para libertar, <br />não para aprisionar.
          </h2>
          <p className="mt-5 text-muted-foreground text-sm leading-relaxed">
            Nosso modelo de Economia Solidária elimina a dependência de grandes plataformas. 
            Você paga pelo desenvolvimento e mantém apenas o custo de operação.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border/40">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-background hover:bg-primary/[0.02] p-8 transition-colors duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <b.icon size={16} className="text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold mb-2">{b.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}