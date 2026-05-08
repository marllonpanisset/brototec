import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { cases } from "../data/cases";
import CaseCard from "../components/projetos/CaseCard";

// Importando a nova estrutura de mockups com iPad Portrait
import { ComboMockup, IntroIpadMockup } from "../components/devices/AppleMockups";

export default function Projetos() {
  const schio = cases.find((c) => c.slug === "schio-consultoria");

  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 blur-[80px] md:blur-[140px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] font-bold text-primary tracking-[0.25em] uppercase">
            Engenharia de Produto
          </span>

          <h1 className="mt-6 font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-4xl">
            Projetos construídos como{" "}
            <span className="text-gradient-green italic">sistemas vivos.</span>
          </h1>

          <p className="mt-8 text-muted-foreground text-sm md:text-base max-w-xl leading-relaxed">
            Estruturas digitais completas com lógica, fluxo e decisão.
          </p>
        </div>
      </section>

      {/* ================= FEATURE CASE ================= */}
      {schio && (
        <section className="pb-24 md:pb-44">
          <div className="max-w-7xl mx-auto px-6 space-y-32 md:space-y-48">

            {/* ================= 1. INTRO (Text + iPad Portrait) ================= */}
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                className="space-y-6 order-2 lg:order-1"
              >
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.35em]">
                  Projeto em destaque
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold">
                  {schio.title}
                </h2>
                <p className="text-muted-foreground text-sm md:text-lg max-w-lg leading-relaxed">
                  {schio.vision}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative flex justify-center order-1 lg:order-2"
              >
                <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/15 blur-[100px] md:blur-[150px] rounded-full -z-10" />
                
                {/* Aqui usamos a nova composição IntroCombo */}
                <IntroIpadMockup 
                  ipadSrc="/images/cases/schio-ipad_portrait.png"
                />
              </motion.div>
            </div>

            {/* ================= 2. CORE SYSTEM (MacBook + IPhone - Desktop Only) ================= */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative pt-20"
            >
              <div className="text-center mb-16 space-y-4 px-4">
                <h3 className="text-3xl font-heading font-bold italic">Ecossistema Digital</h3>
                <p className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-[0.3em]">Performance Total & Responsividade no Desktop</p>
              </div>

              {/* O MacBook se esconde no mobile dentro deste componente ajustado */}
              <ComboMockup 
                desktopSrc="/images/cases/schio-macbookair.png" 
                mobileSrc="/images/cases/schio-iphone.png"
                reverse={false}
              />
            </motion.div>

          </div>
        </section>
      )}

      {/* ================= OUTROS PROJETOS ================= */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2">
            <h3 className="font-heading text-xl md:text-2xl font-bold">Outros projetos</h3>
            <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">expansão contínua do sistema</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
            {cases.map((c) => (
              <CaseCard key={c.slug} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-primary/30 bg-primary/[0.04] p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8"
          >
            <div className="text-center md:text-left">
              <h2 className="font-heading text-lg md:text-xl font-bold">Construindo sistemas reais da Brototec.</h2>
              <p className="text-xs md:text-sm text-muted-foreground mt-2">Cada projeto define o próximo nível da plataforma.</p>
            </div>
            <Link
              to="/contato"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-sm transition-transform hover:scale-105"
            >
              Entrar como parceiro <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}