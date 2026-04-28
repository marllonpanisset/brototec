import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Globe, Code2, Layout } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { cases } from "../data/cases";

export default function ProjetoDetalhe() {
  const { slug } = useParams();
  const projeto = cases.find((c) => c.slug === slug);

  if (!projeto) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Projeto não encontrado</h2>
          <Link to="/projetos" className="text-primary hover:underline font-bold">Voltar para a listagem</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <Link 
            to="/projetos" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12 group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Voltar para projetos
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4 block">
                Estudo de Caso
              </span>
              <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                {projeto.title}
              </h1>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md italic">
                {projeto.subtitle}
              </p>
              <div className="flex flex-wrap gap-2">
                {projeto.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold px-3 py-1 border border-border/60 rounded-full uppercase tracking-widest text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Image - Agora usando o Print (Cover) */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="relative h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden border border-border/40 shadow-2xl bg-secondary/10">
            <img 
              src={projeto.cover} 
              alt={projeto.title} 
              className="w-full h-full object-cover object-[50%_20%] scale-[1.02]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-bold flex items-center gap-2">
                <Code2 className="text-primary" size={20} /> O Desafio
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">{projeto.challenge}</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-bold flex items-center gap-2">
                <Layout className="text-primary" size={20} /> A Visão Brototec
              </h3>
              <p className="text-muted-foreground leading-relaxed">{projeto.vision}</p>
            </div>
          </div>

          {/* Value Delivery Box */}
          <div className="bg-[#fcfcfc] border border-border/60 rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <Globe size={120} />
            </div>
            <h2 className="font-heading text-3xl font-bold mb-10 text-foreground">Entrega de Soberania</h2>
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
              {["Arquitetura escalável", "Autonomia total de edição", "Design orientado a conversão", "Performance Solarpunk"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={18} />
                  <span className="text-sm font-medium text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}