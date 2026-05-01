import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CtaSection from "../components/home/CtaSection";
import CaseCard from "../components/projetos/CaseCard";
import { cases } from "../data/cases";

export default function Projetos() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-primary/60 to-transparent blur-[120px] translate-x-1/4 -translate-y-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-[10px] font-bold text-primary tracking-[0.25em] uppercase mb-8"
          >
            Processo & Entrega
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.06] tracking-tight max-w-3xl"
          >
            Projetos com <br />
            <span className="text-gradient-green italic">intenção real.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-base text-muted-foreground max-w-lg leading-relaxed"
          >
            Cada projeto aqui tem uma lógica documentada por trás. Não mostramos logos — mostramos o raciocínio.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="mt-16 h-px bg-gradient-to-r from-primary/50 via-primary/10 to-transparent origin-left"
          />
        </div>
      </section>

      {/* CARD PROJETO PILOTO — destaque no topo */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-primary/30 bg-primary/[0.04] p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div className="space-y-2 max-w-xl">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold text-primary tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Projeto piloto aberto
              </span>
              <h2 className="font-heading text-xl md:text-2xl font-bold leading-snug">
                Estamos nos primeiros projetos com parceiros externos.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Se você quer um site feito com atenção real — não como mais um ticket na fila — esse é o momento certo pra conversar. Você entra primeiro.
              </p>
            </div>
            <Link
              to="/contato"
              className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-7 py-3.5 rounded-xl hover:shadow-lg hover:opacity-90 transition-all whitespace-nowrap"
            >
              Quero ser parceiro piloto <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CASES */}
<section className="pb-32">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-10">
      {cases.map((c) => (
        <CaseCard key={c.slug} {...c} />
      ))}
    </div>
  </div>
</section>

      {/* BUILD IN PUBLIC */}
      <section className="py-24 border-t border-border/40 bg-eco/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">
            Sempre em construção.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A Brototec está nascendo. Enquanto finalizamos nossos primeiros projetos parceiros, documentamos nossa própria evolução.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Acompanhe cada decisão, cada erro e cada entrega no nosso{" "}
            <a
              href="https://instagram.com/brototecbr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Instagram
            </a>{" "}
            e{" "}
            <a
              href="https://linkedin.com/company/brototec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              LinkedIn
            </a>
            {" "}— construção transparente, em público.
          </p>
          <a
            href="https://linkedin.com/company/brototec"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            Ver bastidores no LinkedIn <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <CtaSection
        heading="Vamos plantar algo novo?"
        body="Se você precisa de uma presença digital que você realmente controle, a Brototec é o lugar certo."
        cta="Conversar sobre meu projeto"
        hint="Respondemos em até 24h. Sem enrolação."
      />

      <Footer />
    </div>
  );
}