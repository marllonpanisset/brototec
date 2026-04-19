import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CtaSection from "../components/home/CtaSection";
import CaseCard from "../components/projetos/CaseCard";

// IMPORTANTE: Importando da fonte única de dados que contém 'cover' e 'thumbnail'
import { cases } from "../data/cases"; 

export default function Projetos() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />

      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.span className="inline-block text-[10px] font-bold text-primary tracking-[0.25em] uppercase mb-8">
            Processo & Entrega
          </motion.span>

          <motion.h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.06] tracking-tight max-w-3xl">
            Projetos com <br />
            <span className="text-gradient-green italic">intenção real.</span>
          </motion.h1>

          <motion.p className="mt-8 text-base text-muted-foreground max-w-lg leading-relaxed">
            Não exibimos logos de terceiros para validar quem somos. Exibimos a qualidade do que construímos e a lógica por trás de cada linha de código.
          </motion.p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Agora o map funciona porque os objetos em ../data/cases possuem a propriedade 'cover' */}
            {cases.map((c, i) => (
              <CaseCard key={c.slug} {...c} wide={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Seção Build in Public */}
      <section className="py-24 border-t border-border/40 bg-eco/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">
            Sempre em construção.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            A Brototec está nascendo. Enquanto finalizamos nossos primeiros projetos parceiros, documentamos nossa própria evolução. No nosso LinkedIn, você vê o desenvolvimento do nosso **Broto CMS** e como estamos repensando a prestação de serviço em tecnologia.
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
        cta="Iniciar conversa"
      />
      <Footer />
    </div>
  );
}