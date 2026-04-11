import { motion } from "framer-motion";

const points = [
  { num: "01", title: "Diagnóstico", desc: "Entendemos o problema antes de propor a solução." },
  { num: "02", title: "Estratégia", desc: "Cada decisão é pensada com base em dados e objetivos claros." },
  { num: "03", title: "Execução", desc: "Implementação ágil com qualidade de engenharia." },
  { num: "04", title: "Evolução", desc: "Acompanhamento contínuo para resultados crescentes." },
];

export default function DifferentiationSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-start">
          {/* Left text - asymmetric */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <span className="text-sm font-medium text-primary tracking-widest uppercase">
              Diferencial
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight leading-tight">
              Pensamento estruturado,{" "}
              <span className="text-gradient-green">não apenas execução.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A maioria entrega tarefas. Nós entregamos soluções completas com raciocínio estratégico em cada etapa.
            </p>
          </motion.div>

          {/* Right steps - broken grid */}
          <div className="lg:col-span-3 space-y-0">
            {points.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group flex gap-6 py-8 border-b border-border/50 last:border-0 hover:pl-4 transition-all duration-500"
              >
                <span className="font-heading text-3xl font-bold text-primary/20 group-hover:text-primary/50 transition-colors duration-500 shrink-0">
                  {p.num}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}