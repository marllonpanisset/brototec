import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { cases } from "../data/cases";
import CaseCard from "../components/projetos/CaseCard";
import { ComboMockup, IntroIpadMockup } from "../components/devices/AppleMockups";

export default function Projetos() {
  const schio = cases.find((c) => c.slug === "schio-consultoria");

  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />

      {/* ================= HERO: Minimal & Impactful ================= */}
      <section className="relative pt-32 md:pt-48 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 blur-[80px] md:blur-[140px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-bold text-primary tracking-[0.4em] uppercase mb-4 block">
              Design de Produto Digital
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl">
              Projetos como{" "}<br />
              <span className="text-gradient-green italic">estruturas vivas.</span>
            </h1>

            <p className="mt-8 text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed opacity-80">
              Ambientes digitais completos que evoluem com o negócio, unindo fluxos inteligentes à precisão de interface.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURE CASE: Projeto Piloto ================= */}
      {schio && (
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start border-t border-white/5 pt-16 md:pt-24">
              
              {/* NARRATIVA TÉCNICA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12 order-2 lg:order-1"
              >
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <Terminal size={12} className="text-primary" />
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                      Projeto Piloto V.01
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">
                      {schio.title}
                    </h2>
                    <p className="text-lg md:text-xl text-primary/80 font-medium italic">
                      {schio.subtitle}
                    </p>
                  </div>
                </div>

                {/* CHALLENGE & SOLUTION GRID */}
                <div className="grid sm:grid-cols-2 gap-8 py-8 border-y border-white/5">
                  <div className="space-y-3">
                    <h4 className="text-[10px] uppercase tracking-widest text-primary font-bold">O Desafio</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {schio.challenge}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-[10px] uppercase tracking-widest text-primary font-bold">A Solução</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {schio.solution}
                    </p>
                  </div>
                </div>

                {/* TECH STACK CAPSULES */}
                <div className="flex flex-wrap gap-2">
                  {schio.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-lg text-[10px] font-semibold text-white/50 hover:border-primary/50 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* RESULT LIST: High Performance Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {schio.result.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-muted-foreground leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* VISUAL */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative order-1 lg:order-2 lg:sticky lg:top-40 mb-12 lg:mb-0"
              >
                <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse" />
                <IntroIpadMockup 
                  ipadSrc="/images/cases/schio-ipad_portrait.png"
                />
              </motion.div>
            </div>

            {/* VISÃO DE ARQUITETURA DE INTERFACE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative pt-16 md:pt-16 border-t border-white/5"
            >
              <div className="text-center mb-12 space-y-2">
                <h3 className="text-2xl md:text-4xl font-heading font-bold tracking-tight italic">Arquitetura de Interface</h3>
                <p className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-[0.4em] opacity-60">Ecossistema de alta fidelidade</p>
              </div>

              <div className="bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-3xl pb-8">
                <ComboMockup 
                  desktopSrc="/images/cases/schio-macbookair.png" 
                  mobileSrc="/images/cases/schio-iphone.png"
                  reverse={false}
                />
              </div>
            </motion.div>

          </div>
        </section>
      )}

      {/* ================= OUTROS PROJETOS ================= */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-6">
            <div className="space-y-1">
              <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-gradient-green">
                Próximos Lançamentos
              </h3>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                A evolução contínua das soluções Brototec
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {cases
              .filter((c) => c.slug !== "schio-consultoria")
              .map((c) => (
                <CaseCard key={c.slug} {...c} />
              ))}
          </div>
        </div>
      </section>

      {/* ================= CTA: Refined ================= */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
            
            <div className="text-center md:text-left space-y-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">Vamos construir sua<br />próxima plataforma?</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-sm">Cada elemento de design e fluxo é pensado para escala, conversão e autonomia digital.</p>
            </div>

            <Link
              to="/contato"
              className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-bold text-sm transition-all hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)]"
            >
              Iniciar Alinhamento Estratégico <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}