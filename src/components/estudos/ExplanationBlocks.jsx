import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Settings, Repeat } from "lucide-react";

const blocks = [
  {
    icon: ShieldCheck,
    title: "Arquitetura Digital",
    desc: "Exploração de estruturas digitais organizadas, com foco em clareza, escalabilidade visual e construção de experiências consistentes.",
  },
  {
    icon: UserCheck,
    title: "Experiência do Usuário",
    desc: "Estudos de interfaces e fluxos pensados para facilitar navegação, gerenciamento de informações e interação entre diferentes elementos digitais.",
  },
  {
    icon: Settings,
    title: "Sistemas Visuais",
    desc: "Criação de componentes, padrões e estruturas reutilizáveis para demonstrar organização, consistência e eficiência no desenvolvimento de interfaces.",
  },
  {
    icon: Repeat,
    title: "Evolução Contínua",
    desc: "Projetos experimentais desenvolvidos para explorar melhorias, novas abordagens visuais e diferentes possibilidades de experiência digital.",
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
            Princípios de Desenvolvimento
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 leading-tight text-white">
            Tecnologia pensada para criar, <br />
            <span className="text-gradient-amber italic">
              experimentar e evoluir.
            </span>
          </h2>

          <p className="mt-5 text-muted-foreground text-sm leading-relaxed">
            Cada projeto apresentado funciona como um estudo de possibilidades
            digitais, explorando diferentes abordagens de design, experiência
            do usuário e construção de interfaces modernas.
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

              <h3 className="font-heading text-sm font-semibold mb-2 text-white">
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