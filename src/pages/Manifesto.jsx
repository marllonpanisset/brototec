import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CtaSection from "../components/home/CtaSection";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const pillars = [
  {
    num: "01",
    title: "Autonomia real",
    desc: "Você recebe o projeto completo, com acesso, painel e controle. Nada fica preso com a gente.",
  },
  {
    num: "02",
    title: "Clareza total",
    desc: "Cada decisão é explicada. Você entende o que está sendo feito e por quê.",
  },
  {
    num: "03",
    title: "Tecnologia simples",
    desc: "Nada de sistemas complexos desnecessários. Tudo é feito para funcionar e ser usado.",
  },
  {
    num: "04",
    title: "Estrutura que evolui",
    desc: "Seu site cresce com o negócio sem precisar refazer tudo do zero.",
  },
];

const internal = [
  {
    title: "Sem hierarquia tradicional",
    desc: "Operamos de forma horizontal. Quem constrói também decide.",
  },
  {
    title: "Distribuição justa",
    desc: "O valor gerado é dividido entre quem participa do projeto.",
  },
  {
    title: "Transparência interna",
    desc: "Decisões, processos e aprendizados são abertos entre todos.",
  },
];

const practice = [
  "Escopo claro antes de começar",
  "Entrega completa + treinamento",
  "Painel simples para você editar",
  "Sem contrato de manutenção",
  "Você controla hospedagem e domínio",
];

export default function Manifesto() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />

      {/* HERO */}
      <section className="pt-44 pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.2em] text-primary/70"
          >
            Como trabalhamos
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold mt-6 max-w-4xl"
          >
            Tecnologia sem dependência.
            <br />
            <span className="text-gradient-green">
              E isso muda tudo.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-muted-foreground max-w-xl"
          >
            A maioria dos projetos prende o cliente.  
            O nosso faz o contrário: entrega controle.
          </motion.p>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-20 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="font-heading text-3xl font-bold">
            O padrão do mercado é criar dependência.
          </motion.h2>

          <motion.p {...fadeUp} className="mt-6 text-muted-foreground max-w-xl">
            Sites que só quem criou entende.  
            Mudanças que viram cobrança.  
            Sistemas que travam o crescimento.
          </motion.p>

          <motion.p {...fadeUp} className="mt-4 text-muted-foreground max-w-xl">
            No início parece prático. Depois vira limitação.
          </motion.p>
        </div>
      </section>

      {/* PILARES */}
      <section className="py-20 border-t border-border/40">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              {...fadeUp}
              transition={{ delay: i * 0.06 }}
              className="grid md:grid-cols-3 gap-6 border-t border-border/40 pt-8"
            >
              <span className="text-xs text-primary/50">{p.num}</span>

              <h3 className="font-heading font-semibold">
                {p.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMO ISSO IMPACTA VOCÊ */}
      <section className="py-20 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="font-heading text-2xl font-bold mb-8">
            O que isso significa na prática
          </motion.h2>

          <ul className="space-y-4">
            {practice.map((item) => (
              <li key={item} className="text-sm text-muted-foreground">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMO FUNCIONAMOS POR DENTRO */}
      <section className="py-20 border-t border-border/40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="font-heading text-2xl font-bold mb-10">
            Como operamos internamente
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {internal.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl border border-border/40 bg-primary/[0.02]"
              >
                <h3 className="font-heading font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="py-20 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="font-heading text-3xl font-bold">
            Você não precisa de um fornecedor.
            <br />
            Precisa de um sistema que funcione.
          </motion.h2>

          <motion.p {...fadeUp} className="mt-6 text-muted-foreground max-w-xl">
            A gente constrói, te entrega, te ensina —  
            e você segue com controle.
          </motion.p>
        </div>
      </section>

      <CtaSection
        heading="Quer um site que você realmente controle?"
        body="A gente constrói junto com você — e entrega sem dependência."
        cta="Quero entender como funciona"
        hint="Sem compromisso. Só clareza."
      />

      <Footer />
    </div>
  );
}