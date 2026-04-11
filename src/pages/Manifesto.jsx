import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CtaSection from "../components/home/CtaSection";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const beliefs = [
  {
    num: "01",
    statement: "Tecnologia só tem valor quando resolve problemas reais.",
    sub: "Não construímos por construir. Cada linha de código tem propósito.",
  },
  {
    num: "02",
    statement: "Simplicidade é a forma mais sofisticada de inteligência.",
    sub: "O difícil é simplificar. O fácil é complicar.",
  },
  {
    num: "03",
    statement: "Crescimento sem impacto coletivo não é progresso.",
    sub: "Acreditamos que cada projeto pode contribuir para algo maior.",
  },
  {
    num: "04",
    statement: "Clareza é respeito.",
    sub: "Com o cliente, com o time, com o processo.",
  },
];

export default function Manifesto() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-44 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-50" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-sm font-medium text-primary tracking-widest uppercase mb-8"
          >
            Manifesto
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.0] tracking-tight max-w-4xl"
          >
            Fazemos tecnologia{" "}
            <span className="text-gradient-green">com intenção.</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mt-20 h-px bg-gradient-to-r from-primary/60 via-primary/20 to-transparent origin-left"
          />
        </div>
      </section>

      {/* OPENING STATEMENT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-1" />
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <p className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.3] text-foreground/90">
                Vivemos num mundo com excesso de ferramentas e escassez de{" "}
                <em className="not-italic text-gradient-green">pensamento.</em>{" "}
                A Brototec existe para inverter isso.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BELIEFS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-0">
          {beliefs.map((b, i) => (
            <motion.div
              key={b.num}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group grid lg:grid-cols-12 gap-6 lg:gap-8 py-14 border-t border-border/40 last:border-b hover:pl-3 transition-all duration-500"
            >
              <div className="lg:col-span-1">
                <span className="font-heading text-sm text-primary/40 group-hover:text-primary/70 transition-colors duration-500 font-medium">
                  {b.num}
                </span>
              </div>
              <div className="lg:col-span-7">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                  {b.statement}
                </h2>
              </div>
              <div className="lg:col-span-4 flex items-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {b.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INTERLUDE — large quote */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/4 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.9 }}
          >
            <span className="font-heading text-8xl sm:text-[10rem] lg:text-[14rem] font-black leading-none text-primary/6 select-none pointer-events-none">
              broto
            </span>
          </motion.div>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading text-xl sm:text-2xl lg:text-3xl font-medium max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            "Brotar é o ato de crescer a partir de dentro — com raiz, com força, com direção."
          </motion.p>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="py-24 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Somos um time pequeno que pensa{" "}
                <span className="text-gradient-green">grande.</span>
              </h2>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }}>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Acreditamos que o tamanho de uma empresa não define sua capacidade de impacto. Definição disso é a clareza da sua visão e a qualidade do seu trabalho.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada projeto que entregamos carrega um compromisso com a excelência, com a pessoa do outro lado e com o futuro que queremos construir.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  );
}