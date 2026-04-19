import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { MessageCircle, Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Iniciando conexão... (Simulação)");
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  const socialLinks = {
    whatsapp: "https://wa.me/5521987881633",
    linkedin: "https://linkedin.com/company/brototec",
    instagram: "https://instagram.com/brototec.br",
  };

  return (
    <div className="min-h-screen bg-background text-foreground bg-noise selection:bg-primary/10 selection:text-primary">
      <Navbar />

      {/* HERO SECTION - Consistência com Home e Privacidade */}
      <section className="relative pt-44 pb-24 overflow-hidden">
        {/* Luz Solar Solarpunk */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-primary/60 to-transparent blur-[120px] translate-x-1/4 -translate-y-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-[10px] font-bold text-primary tracking-[0.4em] uppercase mb-8"
          >
            Conexão
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-4xl"
          >
            Vamos cultivar sua <br />
            <span className="text-gradient-green italic">próxima ideia.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-muted-foreground mt-8 max-w-xl leading-relaxed"
          >
            Seja para Landing Pages de alta conversão ou sites institucionais, entregamos um <span className="text-foreground font-medium">painel de controle exclusivo</span> e automações estratégicas para que você mesmo gerencie seu conteúdo com <span className="text-foreground font-medium">total liberdade</span> após o lançamento.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="mt-16 h-px bg-gradient-to-r from-primary/50 via-primary/10 to-transparent origin-left"
          />
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* FORMULÁRIO - Design Minimalista */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3 block">Seu Nome</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Como podemos te chamar?"
                      className="w-full bg-transparent border-b border-border/60 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30 text-lg"
                    />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3 block">Seu E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className="w-full bg-transparent border-b border-border/60 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30 text-lg"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3 block">O Projeto</label>
                  <textarea
                    name="mensagem"
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    placeholder="Conte-nos brevemente sobre o que deseja construir..."
                    className="w-full bg-transparent border-b border-border/60 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30 text-lg resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ gap: "20px" }}
                  type="submit"
                  className="inline-flex items-center gap-3 text-xs font-bold text-primary uppercase tracking-[0.3em] group transition-all"
                >
                  Enviar Mensagem <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>

            {/* INFO E LINKS SOCIAIS - Estilo Estúdio */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 space-y-12"
            >
              <div>
                <h3 className="font-heading text-sm font-bold uppercase tracking-widest mb-8 text-primary/60">Canais Diretos</h3>
                <div className="space-y-4">
                  <a
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-6 rounded-2xl border border-border/40 bg-white/50 hover:border-primary/40 transition-all duration-500"
                  >
                    <div className="flex items-center gap-4">
                      <MessageCircle size={20} className="text-primary" />
                      <span className="font-medium">WhatsApp</span>
                    </div>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>

                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-6 rounded-2xl border border-border/40 bg-white/50 hover:border-primary/40 transition-all duration-500"
                  >
                    <div className="flex items-center gap-4">
                      <Linkedin size={20} className="text-primary" />
                      <span className="font-medium">LinkedIn</span>
                    </div>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>

                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-6 rounded-2xl border border-border/40 bg-white/50 hover:border-primary/40 transition-all duration-500"
                  >
                    <div className="flex items-center gap-4">
                      <Instagram size={20} className="text-primary" />
                      <span className="font-medium">Instagram</span>
                    </div>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>
                </div>
              </div>

              <div className="pt-10 border-t border-border/40">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-default">
                    <Mail size={16} />
                    <span className="text-sm font-medium">brototec@zohomail.com</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground/60 leading-relaxed max-w-xs uppercase tracking-widest">
                    Localizado no Rio de Janeiro, disponível para o mundo.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}