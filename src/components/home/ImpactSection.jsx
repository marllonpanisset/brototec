import { motion } from "framer-motion";

const stats = [
  {
    value: "100%",
    label: "Responsivo",
    desc: "Interface desenvolvida para oferecer uma experiência consistente em desktops, tablets e smartphones.",
  },
  {
    value: "A11Y",
    label: "Acessibilidade",
    desc: "Aplicação de boas práticas de semântica, navegação e usabilidade para diferentes perfis de usuários.",
  },
  {
    value: "UI/UX",
    label: "Experiência",
    desc: "Projeto estruturado com foco em hierarquia visual, clareza das informações e navegação intuitiva.",
  },
  {
    value: "React",
    label: "Tecnologia",
    desc: "Aplicação construída com React, Vite e arquitetura baseada em componentes reutilizáveis.",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-24 border-t border-border/40 bg-primary/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">
              Tecnologias & Boas Práticas
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 leading-tight">
              Um projeto pensado para <br />
              <span className="text-gradient-amber italic">
                demonstrar qualidade técnica.
              </span>
            </h2>

            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-lg">
              A Brototec foi desenvolvida como um projeto de portfólio para
              colocar em prática conceitos modernos de desenvolvimento Front-end,
              arquitetura de componentes, experiência do usuário e organização
              de código.
              <br />
              <br />
              Cada decisão de design e implementação busca demonstrar boas
              práticas utilizadas no desenvolvimento de aplicações web atuais.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl border border-border/40 bg-background hover:border-primary/30 transition-colors duration-500"
              >
                <span className="font-heading text-3xl font-bold text-primary block mb-2">
                  {s.value}
                </span>

                <span className="text-[10px] font-bold tracking-widest uppercase text-foreground block mb-3">
                  {s.label}
                </span>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}