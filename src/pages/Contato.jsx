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

const origemOptions = ["Instagram", "Indicação", "Google", "Outro"];

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    contato: "",
    mensagem: "",
    origem: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrar com backend / Formspree / EmailJS
    setEnviado(true);
    setFormData({ nome: "", contato: "", mensagem: "", origem: "" });
  };

  const socialLinks = {
    whatsapp: "https://wa.me/5521991472417?text=Quero%20um%20site%20simples%2C%20rápido%20e%20que%20eu%20consiga%20editar%20sozinho(a).%20Pode%20me%20explicar%20como%20funciona%20e%20quanto%20custa%3F",
    linkedin: "https://linkedin.com/company/brototec",
    instagram: "https://instagram.com/brototec.br",
  };

  return (
    <div className="min-h-screen bg-background text-foreground bg-noise selection:bg-primary/10 selection:text-primary">
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
            className="inline-block text-[10px] font-bold text-primary tracking-[0.4em] uppercase mb-8"
          >
            Contato
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-4xl"
          >
            Vamos conversar sobre <br />
            <span className="text-gradient-green italic">o seu projeto.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-muted-foreground mt-8 max-w-xl leading-relaxed"
          >
            Conte o que você precisa —{" "}
            <span className="text-foreground font-medium">respondemos em até 24h</span>{" "}
            com clareza, sem enrolação. Se preferir, fala direto pelo WhatsApp.
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

            {/* FORMULÁRIO */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              {/* CTA WhatsApp em destaque — acima do formulário */}
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full p-5 mb-10 rounded-2xl border border-primary/40 bg-primary/[0.04] hover:bg-primary/[0.08] hover:border-primary/60 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageCircle size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">💬 Falar pelo WhatsApp agora</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Resposta mais rápida — geralmente no mesmo dia</p>
                  </div>
                </div>
                <ArrowRight size={16} className="text-primary opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>

              {/* Divisor */}
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-px bg-border/60" />
                <span className="text-[10px] font-bold text-muted-foreground/40 tracking-widest uppercase">
                  ou preencha o formulário
                </span>
                <div className="flex-1 h-px bg-border/60" />
              </div>

              {enviado ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 rounded-2xl border border-primary/30 bg-primary/[0.04] text-center space-y-3"
                >
                  <p className="text-2xl">🌱</p>
                  <p className="font-heading text-xl font-bold">Mensagem recebida!</p>
                  <p className="text-sm text-muted-foreground">
                    Entramos em contato em até 24 horas úteis. Obrigado por plantar com a gente.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid sm:grid-cols-2 gap-10">
                    <div className="relative group">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3 block">
                        Seu Nome
                      </label>
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
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3 block">
                        WhatsApp ou E-mail
                      </label>
                      <input
                        type="text"
                        name="contato"
                        value={formData.contato}
                        onChange={handleChange}
                        required
                        placeholder="(21) 99999-9999 ou seu@email.com"
                        className="w-full bg-transparent border-b border-border/60 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30 text-lg"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3 block">
                      O que você precisa?
                    </label>
                    <textarea
                      name="mensagem"
                      rows={4}
                      value={formData.mensagem}
                      onChange={handleChange}
                      required
                      placeholder="Conte brevemente o que quer construir — sem precisar ser técnico..."
                      className="w-full bg-transparent border-b border-border/60 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30 text-lg resize-none"
                    />
                  </div>

                  <div className="relative group">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3 block">
                      Como nos encontrou?
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {origemOptions.map((op) => (
                        <button
                          key={op}
                          type="button"
                          onClick={() => setFormData({ ...formData, origem: op })}
                          className={`text-xs font-bold px-4 py-2 rounded-lg border transition-all ${
                            formData.origem === op
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border/60 text-muted-foreground hover:border-primary/40"
                          }`}
                        >
                          {op}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ gap: "20px" }}
                      type="submit"
                      className="inline-flex items-center gap-3 text-xs font-bold text-primary uppercase tracking-[0.3em] group transition-all"
                    >
                      Enviar Mensagem{" "}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <p className="text-[10px] text-muted-foreground/50 leading-relaxed">
                      Ao enviar, você receberá uma confirmação. Entramos em contato em até 24 horas úteis.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>

            {/* CANAIS DIRETOS */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 space-y-12"
            >
              <div>
                <h3 className="font-heading text-sm font-bold uppercase tracking-widest mb-8 text-primary/60">
                  Canais Diretos
                </h3>
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
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                    />
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
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                    />
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
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                    />
                  </a>
                </div>
              </div>

              <div className="pt-10 border-t border-border/40 space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-default">
                  <Mail size={16} />
                  <span className="text-sm font-medium">brototec@outlook.com.br</span>
                </div>
                <p className="text-[10px] text-muted-foreground/60 leading-relaxed uppercase tracking-widest">
                  Localizado no Rio de Janeiro, disponível para o mundo.
                </p>
                <p className="text-[10px] text-muted-foreground/50 leading-relaxed">
                  Atendimento de segunda a sexta, 9h às 18h.<br />
                  Fora desse horário? WhatsApp também funciona.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}