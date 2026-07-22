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
    title: "Autonomia na entrega",
    desc: "Interfaces pensadas para facilitar a gestão e permitir que o projeto continue evoluindo mesmo após sua finalização.",
  },
  {
    num: "02",
    title: "Clareza no processo",
    desc: "Cada escolha de estrutura, design e experiência é construída com objetivo claro: comunicar melhor e resolver problemas reais.",
  },
  {
    num: "03",
    title: "Design funcional",
    desc: "Menos complexidade visual e mais foco em interfaces intuitivas, rápidas e fáceis de utilizar.",
  },
  {
    num: "04",
    title: "Estruturas evolutivas",
    desc: "Projetos desenvolvidos pensando em crescimento, permitindo melhorias e novos caminhos conforme a necessidade.",
  },
];

const internal = [
  {
    title: "Construção transparente",
    desc: "O processo valoriza comunicação clara, documentação e entendimento das decisões tomadas durante o desenvolvimento.",
  },
  {
    title: "Tecnologia com propósito",
    desc: "Ferramentas e escolhas técnicas são aplicadas buscando equilíbrio entre estética, desempenho e manutenção.",
  },
  {
    title: "Aprendizado contínuo",
    desc: "Cada projeto também funciona como uma oportunidade de experimentar novas soluções e evoluir processos.",
  },
];

const practice = [
  "Definição clara do objetivo do projeto",
  "Estrutura visual planejada antes do desenvolvimento",
  "Interfaces pensadas para fácil utilização",
  "Entrega organizada com documentação",
  "Possibilidade de evolução conforme novas necessidades",
];

export default function Manifesto() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 md:pt-44 pb-16 md:pb-28 min-h-[90vh] md:min-h-[100vh] flex items-center overflow-hidden bg-black">

        <div className="absolute inset-0 z-0">
          <img
            src="/images/manifesto/manifesto-hero-solarpunk.jpeg"
            alt="Conceito visual de tecnologia e futuro"
            className="w-full h-full object-cover object-[17%] md:object-center opacity-40 md:opacity-50 select-none pointer-events-none"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10 z-10 hidden md:block" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent z-10 md:hidden" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">

          <motion.span
            className="text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full backdrop-blur-md inline-block"
          >
            Conceito e abordagem
          </motion.span>

          <motion.h1
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-4xl mt-8 text-white"
          >
            Interfaces criadas com <br className="hidden md:block" />

            <span className="text-gradient-amber italic">
              propósito e autonomia.
            </span>

            <br />

            Sem excesso de complexidade.
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed font-normal text-white/80"
          >
            A Brototec explora uma forma diferente de construir experiências
            digitais: menos dependência de soluções engessadas e mais foco em
            estruturas claras, funcionais e adaptáveis.
          </motion.p>

        </div>
      </section>

            {/* PROBLEMA */}
      <section className="py-12 md:py-24 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6">

          <motion.h2
            {...fadeUp}
            className="font-heading text-2xl md:text-4xl font-bold text-white"
          >
            Muitas experiências digitais se tornam difíceis de evoluir.
          </motion.h2>

          <motion.p
            {...fadeUp}
            className="mt-6 text-muted-foreground max-w-xl text-base md:text-lg"
          >
            Interfaces confusas, excesso de ferramentas e estruturas pouco
            flexíveis podem transformar pequenas alterações em processos
            demorados.
          </motion.p>

          <motion.p
            {...fadeUp}
            className="mt-4 text-muted-foreground max-w-xl text-base md:text-lg"
          >
            O objetivo é criar ambientes digitais mais claros, onde design e
            tecnologia trabalham juntos para facilitar decisões e melhorias.
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

              <span className="text-xs text-primary font-bold">
                {p.num}
              </span>

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


      {/* COMO ISSO IMPACTA VOCÊ */}
      <section className="py-12 md:py-24 border-t border-border/40 overflow-hidden">

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">

          <motion.div
            {...fadeUp}
            className="w-full md:w-1/2 order-2 md:order-1"
          >

            <img
              src="/images/manifesto/manifesto-2.jpeg"
              alt="Processo de criação digital"
              className="w-full h-[350px] md:h-[650px] object-cover object-center rounded-r-2xl md:rounded-r-[80px] border-r border-y border-border/40 select-none pointer-events-none"
            />

          </motion.div>


          <div className="w-full md:w-1/2 px-6 md:pr-12 lg:pr-24 xl:pr-32 order-1 md:order-2">

            <div className="max-w-xl ml-auto">

              <motion.h2
                {...fadeUp}
                className="font-heading text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white"
              >
                O que isso representa na prática
              </motion.h2>


              <ul className="space-y-4">

                {practice.map((item) => (

                  <li
                    key={item}
                    className="text-sm md:text-base text-muted-foreground flex items-start gap-3"
                  >

                    <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />

                    {item}

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </section>

           {/* COMO FUNCIONA INTERNAMENTE */}
      <section className="py-12 md:py-24 border-t border-border/40">

        <div className="max-w-6xl mx-auto px-6">

          <motion.h2
            {...fadeUp}
            className="font-heading text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-white"
          >
            Como os projetos são construídos
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



      {/* FECHAMENTO */}
      <section className="py-12 md:py-24 border-t border-border/40 overflow-hidden">

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">


          <div className="w-full md:w-1/2 px-6 md:pl-12 lg:pl-24 xl:pl-32 order-1">

            <div className="max-w-xl">

              <motion.h2
                {...fadeUp}
                className="font-heading text-2xl md:text-4xl font-bold leading-tight text-white"
              >
                Mais do que uma página,
                <br />

                <span className="text-gradient-amber">
                  uma estrutura digital bem pensada.
                </span>

              </motion.h2>


              <motion.p
                {...fadeUp}
                className="mt-6 text-muted-foreground text-base md:text-lg"
              >
                Cada projeto é desenvolvido unindo identidade visual,
                experiência do usuário e tecnologia para criar interfaces
                funcionais, organizadas e preparadas para evoluir.
              </motion.p>

            </div>

          </div>



          <motion.div
            {...fadeUp}
            className="w-full md:w-1/2 order-2"
          >

            <img
              src="/images/manifesto/manifesto-1.jpeg"
              alt="Ambiente digital desenvolvido pela Brototec"
              className="w-full h-[350px] md:h-[650px] object-cover object-center rounded-l-2xl md:rounded-l-[80px] border-l border-y border-border/40 select-none pointer-events-none"
            />

          </motion.div>


        </div>

      </section>



      <CtaSection
        heading="Tem uma ideia para transformar em experiência digital?"
        body="Vamos conversar sobre estrutura, design e possibilidades para construir uma solução alinhada ao seu objetivo."
        cta="Conhecer possibilidades"
        hint="Cada projeto começa com uma boa conversa."
      />


      <Footer />

    </div>
  );
}