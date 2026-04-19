// src/pages/PoliticaDePrivacidade.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function PoliticaPrivacidade() {
  const dataAtual = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="min-h-screen bg-background text-foreground bg-noise selection:bg-primary/10 selection:text-primary">
      <Navbar />
      
      {/* Hero da Página - Seguindo o padrão visual da Home */}
      <section className="relative pt-44 pb-20 overflow-hidden">
        {/* Luz Solar Solarpunk */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-primary/60 to-transparent blur-[120px] translate-x-1/4 -translate-y-1/4" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-8"
          >
            Transparência
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight"
          >
            Política de <span className="text-gradient-green italic">Privacidade.</span>
          </motion.h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="mt-16 h-px bg-gradient-to-r from-primary/50 via-primary/10 to-transparent origin-left"
          />
        </div>
      </section>

      {/* Conteúdo - Ajustado para legibilidade e design limpo */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* Bloco 1 */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] pt-2">01. Introdução</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A sua privacidade é fundamental para a <strong className="text-foreground">brototec</strong>. Nosso compromisso é ser o mais transparente possível sobre como tratamos seus dados.
                </p>
                <p>
                  Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço, sempre de forma justa, legal e com o seu total consentimento.
                </p>
              </div>
            </div>

            {/* Bloco 2 */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8 border-t border-border/40 pt-16">
              <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] pt-2">02. Coleta de Dados</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Ao utilizar nossos canais de contato, coletamos apenas o essencial:</p>
                <ul className="space-y-3">
                  <li className="flex gap-3"><span className="text-primary font-bold">•</span> <strong>Identificação:</strong> Nome para um atendimento humanizado.</li>
                  <li className="flex gap-3"><span className="text-primary font-bold">•</span> <strong>Contato:</strong> E-mail para retorno de orçamentos e dúvidas.</li>
                  <li className="flex gap-3"><span className="text-primary font-bold">•</span> <strong>Navegação:</strong> Dados anônimos de comportamento para melhoria da interface.</li>
                </ul>
              </div>
            </div>

            {/* Bloco 3 */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8 border-t border-border/40 pt-16">
              <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] pt-2">03. Seus Direitos</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Em conformidade com a LGPD, você possui soberania sobre seus dados, incluindo o direito de:</p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm bg-secondary/20 p-6 rounded-2xl border border-border/40">
                  <p>• Acesso e confirmação</p>
                  <p>• Correção de dados</p>
                  <p>• Eliminação ou anonimização</p>
                  <p>• Revogação de consentimento</p>
                </div>
              </div>
            </div>

            {/* Bloco 4 - Cookies */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8 border-t border-border/40 pt-16" id="cookies">
              <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] pt-2">04. Cookies</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>Utilizamos cookies para entender como você interage com o nosso ecossistema digital.</p>
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl border border-border/40 bg-white/50">
                    <h4 className="text-foreground font-bold text-sm mb-2 uppercase tracking-tighter">Essenciais</h4>
                    <p className="text-xs">Garantem que o site funcione. Não podem ser desativados.</p>
                  </div>
                  <div className="p-5 rounded-2xl border border-border/40 bg-white/50">
                    <h4 className="text-foreground font-bold text-sm mb-2 uppercase tracking-tighter">Analytics</h4>
                    <p className="text-xs">Google Analytics (_ga, _gid) para entendermos o fluxo de visitas de forma anônima.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rodapé do documento */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8 border-t border-border/40 pt-16">
              <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] pt-2">05. Contato</h2>
              <div className="text-muted-foreground">
                <p className="mb-6">Dúvidas sobre como cuidamos da sua autonomia e privacidade?</p>
                <div className="bg-primary text-primary-foreground p-8 rounded-[2rem] inline-block">
                  <p className="text-xs uppercase tracking-widest font-bold mb-1 opacity-80">Encarregado (DPO)</p>
                  <p className="text-xl font-bold italic font-heading">Marllon Panisset</p>
                  <p className="text-sm mt-4 opacity-90">privacidade@brototec.com.br</p>
                </div>
                <p className="mt-12 text-[10px] uppercase tracking-widest">Última atualização: {dataAtual}</p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}