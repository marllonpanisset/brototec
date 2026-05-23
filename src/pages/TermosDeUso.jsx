// src/pages/TermosDeUso.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function TermosDeUso() {
  // Data fixa para manter a consistência e a veracidade do acordo legal
  const ultimaAtualizacao = "Maio de 2026";

  return (
    <div className="min-h-screen bg-background text-foreground bg-noise selection:bg-primary/10 selection:text-primary">
      <Navbar />
      
      {/* Hero da Página */}
      <section className="relative pt-44 pb-20 overflow-hidden">
        {/* Luz Solar Solarpunk */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-primary/60 to-transparent blur-[120px] translate-x-1/4 -translate-y-1/4" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-[10px] font-bold text-primary tracking-[0.4em] uppercase mb-8"
          >
            Acordo Legal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight"
          >
            Termos de <span className="text-gradient-green italic">Uso.</span>
          </motion.h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="mt-16 h-px bg-gradient-to-r from-primary/50 via-primary/10 to-transparent origin-left"
          />
        </div>
      </section>

      {/* Conteúdo Editorial */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* Bloco 1: Aceitação */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] pt-2">01. Aceitação</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ao acessar o site da <strong className="text-foreground">brototec</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.
                </p>
                <p>
                  O uso de nossas interfaces, conteúdos e materiais de apresentação implica na aceitação plena destas condições. Se você não concordar com algum destes termos, está orientado a interromper o acesso a este site.
                </p>
              </div>
            </div>

            {/* Bloco 2: Uso da Marca e Licença */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8 border-t border-border/40 pt-16">
              <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] pt-2">02. Uso da Marca</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  É concedida permissão para navegar e visualizar temporariamente os materiais informativos e de portfólio no site da brototec, apenas para fins de consulta pessoal, corporativa e não comercial.
                </p>
                <div className="bg-secondary/20 p-6 rounded-2xl border border-border/40 text-sm italic">
                  Esta é a concessão de uma licença de visualização, não uma transferência de título. Você não pode modificar os materiais visuais, copiá-los para fins de revenda externa ou tentar replicar layouts e marcas contidas neste ecossistema.
                </div>
              </div>
            </div>

            {/* Bloco 3: Isenção de Responsabilidade */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8 border-t border-border/40 pt-16">
              <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] pt-2">03. Limitações</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Os materiais no site da brototec são fornecidos 'como estão'. Não oferecemos garantias comerciais implícitas além da exatidão das propostas de design apresentadas em nosso portfólio.
                </p>
                <p>
                  Em nenhum caso o estúdio brototec será responsável por quaisquer danos colaterais decorrentes do uso inadequado ou da incapacidade de utilizar os materiais informativos de nossa plataforma.
                </p>
              </div>
            </div>

            {/* Bloco 4: Precisão dos Materiais */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8 border-t border-border/40 pt-16">
              <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] pt-2">04. Revisões</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Os materiais exibidos no site podem incluir eventuais erros tipográficos, técnicos ou fotográficos. A brototec reserva-se o direito de atualizar e modificar as apresentações, pacotes e estruturas visuais a qualquer momento, sem aviso prévio, visando a melhoria contínua da interface.
                </p>
              </div>
            </div>

            {/* Rodapé do documento */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8 border-t border-border/40 pt-16">
              <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] pt-2">05. Jurisdição</h2>
              <div className="text-muted-foreground">
                <p className="mb-6 leading-relaxed">
                  Estes termos e condições são regidos e interpretados de acordo com as leis da República Federativa do Brasil, elegendo-se o foro da comarca de nossa sede para dirimir quaisquer dúvidas.
                </p>
                <div className="bg-primary text-primary-foreground p-8 rounded-[2rem] inline-block shadow-lg shadow-primary/10">
                  <p className="text-xs uppercase tracking-widest font-bold mb-1 opacity-80">Contato Institucional</p>
                  <p className="text-xl font-bold italic font-heading">Brototec Digital</p>
                  <p className="text-sm mt-4 opacity-90">contato@brototec.com.br</p>
                </div>
                <p className="mt-12 text-[10px] uppercase tracking-widest opacity-40">Última atualização: {ultimaAtualizacao}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}