// src/pages/Manifesto.jsx
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
    desc: "Você recebe a estrutura completa, com acessos, painéis e controle. Nada fica preso com a gente.",
  },
  {
    num: "02",
    title: "Clareza total",
    desc: "Cada decisão é explicada. Você entende o que está sendo feito e por quê.",
  },
  {
    num: "03",
    title: "Layout descomplicado",
    desc: "Nada de interfaces complexas desnecessárias. Tudo é feito para funcionar de verdade e ser fácil de gerir.",
  },
  {
    num: "04",
    title: "Estrutura que evolui",
    desc: "Seu ambiente digital cresce com o negócio sem precisar refazer tudo do zero.",
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
  "Entrega completa + treinamento prático",
  "Painel intuitivo para você editar",
  "Sem contrato de manutenção obrigatório",
  "Você controla hospedagem e domínio",
];

export default function Manifesto() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />

      {/* HERO — Contraste Corrigido para Padrão Premium */}
      <section className="relative pt-32 md:pt-44 pb-16 md:pb-28 min-h-[90vh] md:min-h-[100vh] flex items-center overflow-hidden bg-black">
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/manifesto/manifesto-hero-solarpunk.jpeg" 
            alt="Solarpunk Rio" 
            className="w-full h-full object-cover object-[17%] md:object-center opacity-40 md:opacity-50 select-none pointer-events-none" 
          />
          
          {/* MASK DE LEGIBILIDADE AJUSTADA */}
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10 z-10 hidden md:block" />
<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent z-10 md:hidden" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <motion.span 
            className="text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full backdrop-blur-md inline-block"
          >
            Como trabalhamos
          </motion.span>

          <motion.h1
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-4xl mt-8 text-white"
          >
            Interfaces sem <br className="hidden md:block" />
            <span className="text-gradient-amber italic">dependência.</span>
            <br />
            E isso muda tudo.
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed font-normal text-white/80"
          >
            A maioria dos projetos prende o cliente corporativo. <br className="hidden sm:block" />
            O nosso faz o contrário: <span className="underline decoration-primary/50 underline-offset-4 font-semibold text-white">entrega controle absoluto.</span>
          </motion.p>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-12 md:py-24 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="font-heading text-2xl md:text-4xl font-bold text-white">
            O padrão do mercado é criar barreiras.
          </motion.h2>

          <motion.p {...fadeUp} className="mt-6 text-muted-foreground max-w-xl text-base md:text-lg">
            Ambientes que só quem criou consegue mexer. Mudanças simples que viram cobranças abusivas. Estruturas rígidas que travam o crescimento do seu negócio.
          </motion.p>

          <motion.p {...fadeUp} className="mt-4 text-muted-foreground max-w-xl text-base md:text-lg">
            No início parece prático delegar tudo. Depois, vira limitação comercial.
          </motion.p>
        </div>
      </section>

      {/* PILARES */}
      <section className="py-12 md:py-24 border-t border-border/40">
        <div className="max-w-6xl mx-auto px-6 space-y-8 md:space-y-10">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              {...fadeUp}
              transition={{ delay: i * 0.06 }}
              className="grid md:grid-cols-3 gap-4 md:gap-6 border-t border-border/40 pt-6 md:pt-8"
            >
              <span className="text-xs text-primary font-bold">{p.num}</span>
              <h3 className="font-heading font-semibold text-lg md:text-xl text-white">
                {p.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMO ISSO IMPACTA VOCÊ (Imagem Esquerda) */}
      <section className="py-12 md:py-24 border-t border-border/40 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">
          
          <motion.div 
            {...fadeUp}
            className="w-full md:w-1/2 order-2 md:order-1"
          >
            <img 
              src="/images/manifesto/manifesto-2.jpeg" 
              alt="Entrega e Autonomia Brototec" 
              className="w-full h-[350px] md:h-[650px] object-cover object-center rounded-r-2xl md:rounded-r-[80px] border-r border-y border-border/40 select-none pointer-events-none" 
          />
          </motion.div>

          <div className="w-full md:w-1/2 px-6 md:pr-12 lg:pr-24 xl:pr-32 order-1 md:order-2">
            <div className="max-w-xl ml-auto">
              <motion.h2 {...fadeUp} className="font-heading text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white">
                O que isso significa na prática
              </motion.h2>

              <ul className="space-y-4">
                {practice.map((item) => (
                  <li key={item} className="text-sm md:text-base text-muted-foreground flex items-start gap-3">
                    <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </section>

      {/* COMO FUNCIONAMOS POR DENTRO */}
      <section className="py-12 md:py-24 border-t border-border/40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="font-heading text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-white">
            Como operamos internamente
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {internal.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl border border-border/40 bg-primary/[0.02]"
              >
                <h3 className="font-heading font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FECHAMENTO (Imagem Direita) */}
      <section className="py-12 md:py-24 border-t border-border/40 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">
          
          <div className="w-full md:w-1/2 px-6 md:pl-12 lg:pl-24 xl:pl-32 order-1">
            <div className="max-w-xl">
              <motion.h2 {...fadeUp} className="font-heading text-2xl md:text-4xl font-bold leading-tight text-white">
                Você não precisa de um fornecedor fixo.
                <br />
                <span className="text-gradient-amber">Precisa de uma interface que funcione.</span>
              </motion.h2>

              <motion.p {...fadeUp} className="mt-6 text-muted-foreground text-base md:text-lg">
                A gente planeja, constrói a identidade, te entrega e capacita — e você segue com controle absoluto sobre a sua presença digital.
              </motion.p>
            </div>
          </div>

          <motion.div 
            {...fadeUp}
            className="w-full md:w-1/2 order-2"
          >
            <img 
              src="/images/manifesto/manifesto-1.jpeg" 
              alt="Ambiente Autônomo Brototec" 
              className="w-full h-[350px] md:h-[650px] object-cover object-center rounded-l-2xl md:rounded-l-[80px] border-l border-y border-border/40 select-none pointer-events-none" 
            />
          </motion.div>
        </div>
      </section>

      <CtaSection
        heading="Quer um ecossistema que você realmente controle?"
        body="A gente constrói junto com você — e entrega sem nenhuma dependência futura."
        cta="Quero entender como funciona"
        hint="Sem compromisso. Só clareza."
      />

      <Footer />
    </div>
  );
}