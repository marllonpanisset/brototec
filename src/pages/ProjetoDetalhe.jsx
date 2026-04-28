import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Globe,
  Code2,
  Layout,
  MessageCircle
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { cases } from "../data/cases";

/* ---------------------------
   SECTION BASE (SAFE)
----------------------------*/

function Section({ title, icon: Icon, children }) {
  if (!children) return null;

  return (
    <section className="max-w-4xl mx-auto px-6 mb-24">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        {Icon && <Icon size={20} className="text-primary" />}
        {title}
      </h2>

      <div className="text-muted-foreground leading-relaxed text-lg">
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
      <div className="bg-[#fcfcfc] border border-border/60 rounded-3xl p-10 md:p-16 relative overflow-hidden">

        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Globe size={140} />
        </div>

        <h2 className="font-heading text-3xl font-bold mb-10">
          Entrega de Valor
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="text-primary" size={18} />
              <span className="text-sm text-muted-foreground font-medium">
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
      <h2 className="text-2xl font-bold mb-10">Perguntas Frequentes</h2>

      <div className="space-y-6">
        {faq.map((item, i) => (
          <div key={i} className="border-b border-border pb-6">
            <h3 className="font-semibold mb-2">{item.question}</h3>
            <p className="text-muted-foreground">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection({ cta }) {
  return (
    <section className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">
        {cta || "Transformar complexidade em clareza é o que fazemos."}
      </h2>

      <p className="text-muted-foreground mb-10">
        Cada projeto aqui é uma peça de estratégia aplicada — não só execução.
      </p>

      <a
        href="https://wa.me/5521981035984"
        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
      >
        <MessageCircle size={18} />
        Quero um projeto assim
      </a>
    </section>
  );
}

/* ---------------------------
   RENDER ENGINE
----------------------------*/

const SectionRenderer = ({ type, projeto }) => {
  const map = {
    problem: (
      <Section title="O Problema" icon={Code2}>
        {projeto.challenge}
      </Section>
    ),

    strategy: (
      <Section title="A Estratégia" icon={Layout}>
        {projeto.vision}
      </Section>
    ),

    context: projeto.about && (
      <Section title="Contexto">
        {projeto.about}
      </Section>
    ),

    solution: projeto.solution && (
      <Section title="A Solução">
        {projeto.solution}
      </Section>
    ),

    highlights: <HighlightBlock highlights={projeto.highlights} />,

    faq: <FAQBlock faq={projeto.faq} />,

    cta: <CTASection cta={projeto.cta} />
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
        <Link to="/projetos">Projeto não encontrado</Link>
      </div>
    );
  }

  const sections = projeto.sections || [
    "problem",
    "strategy",
    "context",
    "solution",
    "highlights",
    "faq",
    "cta"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />

      <main className="pt-32 pb-32">

        {/* HEADER */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <Link to="/projetos" className="flex items-center gap-2 mb-10 text-muted-foreground">
            <ArrowLeft size={16} />
            Voltar
          </Link>

          <h1 className="text-5xl md:text-7xl font-bold">
            {projeto.title}
          </h1>

          <p className="text-lg text-muted-foreground mt-6 italic">
            {projeto.subtitle}
          </p>
        </section>

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 mb-28">
          <div className="h-[60vh] rounded-3xl overflow-hidden border">
            <img
              src={projeto.cover}
              alt={projeto.title}
              className="w-full h-full object-cover object-[50%_20%]"
            />
          </div>
        </section>

        {/* STORY ENGINE */}
        {sections.map((section) => (
          <SectionRenderer
            key={section}
            type={section}
            projeto={projeto}
          />
        ))}

      </main>

      <Footer />
    </div>
  );
}