import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Globe,
  Target, // Substituído Code2 por Target para blindagem do MEI
  Layout,
  MessageCircle,
  Zap,
  Shield
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { cases } from "../data/cases";

/* ---------------------------
   SECTION BASE (Corrigido)
----------------------------*/
function Section({ title, icon: Icon = null, children }) {
  if (!children) return null;

  return (
    <section className="max-w-4xl mx-auto px-6 mb-24">
      <div className="flex items-center gap-3 mb-6">
        {Icon && <Icon size={18} className="text-primary" />}
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
          {title}
        </h2>
      </div>

      <div className="text-foreground leading-relaxed text-xl sm:text-2xl font-medium tracking-tight">
        {children}
      </div>
    </section>
  );
}

/* ---------------------------
   BLOCKS
----------------------------*/
function HighlightBlock({ highlights }) {
  if (!highlights?.length) return null;

  return (
    <section className="max-w-5xl mx-auto px-6 mb-28">
      <div className="bg-primary/[0.02] border border-primary/10 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] rotate-12">
          <Zap size={240} />
        </div>

        <h2 className="font-heading text-3xl font-bold mb-10">Entrega de Valor</h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {highlights.map((item) => (
            <div key={item} className="flex items-start gap-4">
              <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="text-primary" size={12} />
              </div>
              <span className="text-base text-muted-foreground leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQBlock({ faq }) {
  if (!faq?.length) return null;

  return (
    <section className="max-w-4xl mx-auto px-6 mb-28">
      <h2 className="text-2xl font-bold mb-10 font-heading">Perguntas Estratégicas</h2>
      <div className="space-y-0 border-t border-border/60">
        {faq.map((item, i) => (
          <details key={i} className="group border-b border-border/60">
            <summary className="flex justify-between items-center cursor-pointer py-6 list-none">
              <span className="font-semibold text-lg pr-4">{item.question}</span>
              <span className="text-primary transition-transform group-open:rotate-180">↓</span>
            </summary>
            <p className="text-muted-foreground pb-6 text-lg leading-relaxed">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------
   RENDER ENGINE
----------------------------*/
const SectionRenderer = ({ type, projeto }) => {
  const map = {
    problem: (
      <Section title="O Desafio" icon={Target}> {/* Ícone atualizado para Target */}
        {projeto.challenge}
      </Section>
    ),
    strategy: (
      <Section title="A Visão" icon={Layout}>
        {projeto.vision}
      </Section>
    ),
    context: projeto.about && (
      <Section title="Sobre o Cliente" icon={Globe}>
        {projeto.about}
      </Section>
    ),
    solution: projeto.solution && (
      <Section title="A Solução" icon={Shield}>
        {projeto.solution}
      </Section>
    ),
    highlights: <HighlightBlock highlights={projeto.highlights} />,
    faq: <FAQBlock faq={projeto.faq} />,
  };

  return map[type] || null;
};

/* ---------------------------
   PAGE
----------------------------*/
export default function ProjetoDetalhe() {
  const { slug } = useParams();
  const projeto = cases.find((c) => c.slug === slug);

  if (!projeto) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Link to="/projetos" className="text-primary hover:underline">Projeto não encontrado. Voltar.</Link>
      </div>
    );
  }

  const sections = projeto.sections || [
    "context",
    "problem",
    "strategy",
    "solution",
    "highlights",
    "faq"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />

      <main className="pt-32 pb-32">
        {/* HEADER */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <Link to="/projetos" className="inline-flex items-center gap-2 mb-12 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={14} />
            Voltar para Projetos
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              {projeto.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-8 font-medium leading-relaxed">
              {projeto.subtitle}
            </p>
          </div>
        </section>

        {/* HERO IMAGE */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-border/40 bg-muted shadow-2xl">
            <img
              src={projeto.cover}
              alt={projeto.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* STORY ENGINE */}
        <div className="space-y-12">
          {sections.map((section) => (
            <SectionRenderer key={section} type={section} projeto={projeto} />
          ))}
        </div>

        {/* CTA FINAL PERSONALIZADO */}
        <section className="max-w-4xl mx-auto px-6 mt-32 text-center py-24 border-t border-border/40">
           <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
             {projeto.cta || "Pronto para construir sua plataforma independente?"}
           </h2>
           <Link
             to="/contato"
             className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20"
           >
             <MessageCircle size={20} />
             Iniciar Alinhamento Estratégico
           </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}