// arquivo: src/pages/Contato.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CtaSection from "../components/home/CtaSection";
import { Mail, MapPin, Phone, Send, MessageCircle, Linkedin, Instagram } from "lucide-react";

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
    // Aqui você pode integrar com um serviço de e-mail ou apenas exibir um alerta
    alert("Mensagem enviada! (simulação)");
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  const socialLinks = {
    whatsapp: "https://wa.me/5521987881633", // substitua pelo número real
    linkedin: "https://linkedin.com/company/brototec",
    instagram: "https://instagram.com/brototecbr",
  };

  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-44 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-50" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-sm font-medium text-primary tracking-widest uppercase mb-8"
          >
            Contato
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.0] tracking-tight max-w-4xl"
          >
            Vamos construir algo{" "}
            <span className="text-gradient-green">juntos.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground mt-6 max-w-2xl"
          >
            Conte-nos sobre seu projeto, sua ideia ou apenas diga olá.
            Responderemos em até 24h.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mt-20 h-px bg-gradient-to-r from-primary/60 via-primary/20 to-transparent origin-left"
          />
        </div>
      </section>

      {/* FORMULÁRIO + INFOS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Coluna do formulário */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-foreground/80 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-transparent border border-border/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 text-foreground placeholder:text-muted-foreground/50"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-transparent border border-border/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 text-foreground placeholder:text-muted-foreground/50"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-foreground/80 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows="5"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-transparent border border-border/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 text-foreground placeholder:text-muted-foreground/50 resize-none"
                    placeholder="Conte-nos mais sobre o que você precisa..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full overflow-hidden transition-all duration-500 shadow-lg shadow-primary/20 hover:shadow-primary/40"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Enviar mensagem <Send size={18} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                </motion.button>
              </form>
            </motion.div>

            {/* Coluna de informações e botões sociais */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-5 space-y-10"
            >
              <div>
                <h3 className="font-heading text-2xl font-bold mb-6">Fale diretamente</h3>
                <div className="space-y-4">
                  <a
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 border border-border/40 rounded-xl bg-card/30 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">Resposta rápida</p>
                    </div>
                  </a>

                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 border border-border/40 rounded-xl bg-card/30 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-300">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Conecte-se conosco</p>
                    </div>
                  </a>

                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 border border-border/40 rounded-xl bg-card/30 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform duration-300">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Instagram</p>
                      <p className="text-sm text-muted-foreground">Acompanhe nosso dia a dia</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Informações de contato tradicionais (opcional) */}
              <div className="pt-8 border-t border-border/40">
                <h3 className="font-heading text-xl font-semibold mb-5">Outros canais</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="text-primary/70" />
                    <span>brototec@zohomail.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="text-primary/70" />
                    <span>+55 (21) 98788-1633</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}