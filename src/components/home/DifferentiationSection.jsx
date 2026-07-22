import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Pesquisa & Planejamento",
    desc: "Definição do conceito visual, arquitetura da informação e organização das páginas antes do desenvolvimento da interface.",
  },
  {
    num: "02",
    title: "Design da Interface",
    desc: "Construção do layout priorizando hierarquia visual, tipografia, experiência do usuário e consistência entre os componentes.",
  },
  {
    num: "03",
    title: "Desenvolvimento",
    desc: "Implementação utilizando React, Vite e componentes reutilizáveis, com foco em organização, responsividade e performance.",
  },
  {
    num: "04",
    title: "Refinamento",
    desc: "Aplicação de animações, otimizações, ajustes de acessibilidade e revisão da experiência para compor um projeto completo de portfólio.",
  },
];

export default function DifferentiationSection() {
  return (
    <section className="py-24 border-t border-border/40 bg-background/30">
      <div className="max-w-7xl mx-auto px-6">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase"
        >
          Processo de Desenvolvimento
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl font-bold mt-4 max-w-xl leading-tight text-white"
        >
          Do conceito inicial <br />
          <span className="text-gradient-amber italic">
            à aplicação das melhores práticas.
          </span>
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border/40 rounded-3xl overflow-hidden shadow-sm">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-background hover:bg-primary/[0.02] transition-all duration-500 border-r border-b border-border/40 last:border-r-0 md:[&:nth-child(2)]:border-r md:[&:nth-child(4)]:border-r-0"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold text-primary/40 tracking-[0.2em] uppercase">
                  Etapa {s.num}
                </span>

                <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
              </div>

              <h3 className="font-heading text-base font-bold mb-3 text-white">
                {s.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center text-[11px] text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto"
        >
          Este fluxo representa as etapas utilizadas na construção deste projeto
          fictício, demonstrando conhecimentos em planejamento, UX/UI,
          desenvolvimento Front-end e organização de código.
        </motion.p>

      </div>
    </section>
  );
}