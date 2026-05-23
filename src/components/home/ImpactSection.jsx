import { motion } from "framer-motion";

const stats = [
  {
    value: "100%",
    label: "Propriedade Estrutural",
    desc: "O cliente detém todos os direitos de propriedade, arquivos e acessos ao final do projeto.",
  },
  {
    value: "Zero",
    label: "Taxas de Licença",
    desc: "Economia vitalícia em mensalidades e assinaturas de plataformas proprietárias travadas.",
  },
  {
    value: "24/7",
    label: "Autonomia Operacional",
    desc: "Gestão total de conteúdo, mídias e dados via painel administrativo exclusivo.",
  },
  {
    value: "High",
    label: "Padrão de Performance",
    desc: "Interfaces leves, fluidas e rápidas estruturadas com tecnologias de alto rendimento.",
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
              Impacto e Resultados
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 leading-tight">
              Onde a tecnologia <br />
              <span className="text-gradient-green italic">encontra a viabilidade.</span>
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-lg">
              Não acreditamos em tecnologia por tecnologia. Nosso foco é criar ativos digitais que reduzem seus custos fixos e aumentam sua eficiência operacional. 
              <br /><br />
              Na Brototec, o sucesso do projeto é medido pela sua independência tecnológica.
            </p>
          </motion.div>

          {/* STATS GRID */}
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