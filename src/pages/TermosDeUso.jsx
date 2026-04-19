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
  const dataAtual = new Date().toLocaleDateString('pt-BR');

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
                  O uso de nossas ferramentas, conteúdos e serviços implica na aceitação plena destas condições. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
                </p>
              </div>
            </div>

            {/* Bloco 2: Licença de Uso */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8 border-t border-border/40 pt-16">
              <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] pt-2">02. Uso da Marca</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da brototec, apenas para visualização pessoal e não comercial.
                </p>
                <div className="bg-secondary/20 p-6 rounded-2xl border border-border/40 text-sm italic">
                  Esta é a concessão de uma licença, não uma transferência de título. Você não pode modificar os materiais, usá-los para fins comerciais ou tentar descompilar qualquer software contido no site.
                </div>
              </div>
            </div>

            {/* Bloco 3: Isenção de Responsabilidade */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8 border-t border-border/40 pt-16">
              <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] pt-2">03. Limitações</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Os materiais no site da brototec são fornecidos 'como estão'. Não oferecemos garantias, expressas ou implícitas, e por este meio isentamos todas as outras garantias.
                </p>
                <p>
                  Em nenhum caso a brototec ou seus fornecedores serão responsáveis por quaisquer danos (incluindo perda de dados ou lucros) decorrentes do uso ou da incapacidade de usar nossos materiais.
                </p>
              </div>
            </div>

            {/* Bloco 4: Precisão dos Materiais */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8 border-t border-border/40 pt-16">
              <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] pt-2">04. Revisões</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. A brototec não garante que qualquer material em seu site seja preciso, completo ou atual.
                </p>
                <div className="p-5 rounded-2xl border border-border/40 bg-white/50">
                  <p className="text-xs">Podemos fazer alterações nos materiais contidos em nosso site a qualquer momento, sem aviso prévio.</p>
                </div>
              </div>
            </div>

            {/* Rodapé do documento com card DPO/Contato */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8 border-t border-border/40 pt-16">
              <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] pt-2">05. Jurisdição</h2>
              <div className="text-muted-foreground">
                <p className="mb-6 leading-relaxed">
                  Estes termos e condições são regidos e interpretados de acordo com as leis da República Federativa do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais deste estado ou localidade.
                </p>
                <div className="bg-primary text-primary-foreground p-8 rounded-[2rem] inline-block shadow-lg shadow-primary/10">
                  <p className="text-xs uppercase tracking-widest font-bold mb-1 opacity-80">Suporte Jurídico</p>
                  <p className="text-xl font-bold italic font-heading">Brototec Digital</p>
                  <p className="text-sm mt-4 opacity-90">contato@brototec.com.br</p>
                </div>
                <p className="mt-12 text-[10px] uppercase tracking-widest opacity-60">Última atualização: {dataAtual}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}