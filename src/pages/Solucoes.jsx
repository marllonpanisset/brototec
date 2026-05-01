import { Monitor, ShoppingCart, Database, Layout, Megaphone } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CtaSection from "../components/home/CtaSection";
import SolucoesHero from "../components/solucoes/SolucoesHero";
import ServiceDetail from "../components/solucoes/ServiceDetail";
import ExplanationBlocks from "../components/solucoes/ExplanationBlocks";

const services = [
  {
    icon: Database,
    title: "Sistemas de Gestão & Dashboards",
    tagline: "Inteligência operacional em Flask/Python.",
    description:
      "Desenvolvemos sistemas sob medida para gerir clínicas e negócios complexos. Controle de agendamentos, painéis financeiros e bancos de dados privados. Você é dono da ferramenta e tem visão total do seu faturamento em tempo real.",
    items: [
      "Arquitetura Multi-unidade (Gestão de várias clínicas)",
      "Dashboard de indicadores e faturamento",
      "Controle de agendamentos e pacientes",
      "Backup diário e segurança de dados",
      "Propriedade total do código-fonte",
    ],
  },
  {
    icon: Layout,
    title: "Sites Institucionais High-End",
    tagline: "Sua autoridade com autonomia real.",
    description:
      "Sites que comunicam valor e geram confiança. Com design minimalista e editorial, entregamos uma estrutura rápida onde você mesmo altera textos e imagens através do seu dashboard exclusivo.",
    items: [
      "Design minimalista e editorial",
      "Painel administrativo para gestão de conteúdo",
      "Otimização extrema de performance (SEO)",
      "Hospedagem simplificada",
      "Treinamento de uso incluso",
    ],
  },
  {
    icon: Monitor,
    title: "Landing Pages de Alta Conversão",
    tagline: "Foco total em transformar cliques em clientes.",
    description:
      "Páginas estratégicas para tráfego pago. Estrutura leve, copy persuasiva e carregamento instantâneo. Feitas para quem precisa de resultados imediatos sem mensalidades de plataformas de página.",
    items: [
      "Otimizada para Google e Meta Ads",
      "Design focado em ação única",
      "Integração direta com WhatsApp/CRM",
      "Edição simples de ofertas pelo painel",
      "Sem custo de licença mensal",
    ],
  },
];

export default function Solucoes() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />
      <SolucoesHero />

      {/* SERVIÇOS PRINCIPAIS */}
      <div className="py-12">
        {services.map((service, i) => (
          <ServiceDetail
            key={service.title}
            index={i}
            flipped={i % 2 !== 0}
            {...service}
          />
        ))}
      </div>

      {/* SOCIAL MEDIA (OPCIONAL) */}
      <section className="py-24 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border border-border/40 rounded-2xl p-10 bg-card/30 backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Megaphone className="text-primary" size={18} />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold">Social Media Estratégico</h2>
                <p className="text-sm text-muted-foreground italic text-gradient-green">Opcional para acompanhamento de marca.</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Criação de conteúdo com design profissional para alimentar sua presença digital. 
              Ideal para quem já tem o sistema e quer focar em atrair novos pacientes com autoridade visual.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs text-muted-foreground">
              <ul className="space-y-2">
                <li>• Planejamento e linha editorial</li>
                <li>• Design High-End para posts e carrosséis</li>
              </ul>
              <ul className="space-y-2">
                <li>• Gestão de autoridade unificada</li>
                <li>• Relatórios de engajamento mensal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ExplanationBlocks />

      <CtaSection
        heading="Construa seu patrimônio digital hoje."
        body="Pare de pagar aluguel por ferramentas que não são suas. Vamos criar um sistema que pertence ao seu negócio."
        cta="Solicitar Proposta de Soberania"
        hint="Projetos com escopo fechado e autonomia vitalícia."
      />

      <Footer />
    </div>
  );
}