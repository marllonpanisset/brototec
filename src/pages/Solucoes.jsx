import { Monitor, ShoppingCart, Database, Layout } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CtaSection from "../components/home/CtaSection";
import SolucoesHero from "../components/solucoes/SolucoesHero";
import ServiceDetail from "../components/solucoes/ServiceDetail";
import ExplanationBlocks from "../components/solucoes/ExplanationBlocks";

const services = [
  {
    icon: Database,
    title: "Plataformas de Operação & Gestão",
    tagline: "Seu negócio rodando em um sistema próprio.",
    description:
      "Criamos sistemas completos para centralizar operação, dados e decisões do seu negócio. Tudo construído sob medida em uma única base tecnológica, escalável e sua para sempre.",
    items: [
      "Dashboards em tempo real",
      "Gestão de clientes, agenda e operações",
      "Controle financeiro e relatórios",
      "Multiunidade e multiusuário",
      "Banco de dados proprietário",
    ],
  },
  {
    icon: Layout,
    title: "Presença Digital Estratégica",
    tagline: "Sites que viram estrutura de marca.",
    description:
      "Desenvolvemos sites institucionais que não são só presença digital — são parte do seu sistema de aquisição e autoridade.",
    items: [
      "Design premium focado em conversão",
      "SEO e performance extrema",
      "Painel para edição de conteúdo",
      "Estrutura responsiva e rápida",
      "Hospedagem simplificada",
    ],
  },
  {
    icon: Monitor,
    title: "Estruturas de Conversão",
    tagline: "Landing pages que viram receita.",
    description:
      "Páginas criadas exclusivamente para transformar tráfego em clientes, com foco em campanhas e performance.",
    items: [
      "Copy orientada à conversão",
      "Integração com WhatsApp e CRM",
      "Otimização para Ads",
      "Carregamento instantâneo",
      "Estrutura de teste e validação rápida",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Operacional",
    tagline: "Lojas prontas para vender sem dependência.",
    description:
      "Implementamos ou configuramos lojas em plataformas consolidadas, garantindo operação rápida e estável.",
    items: [
      "Shopify ou Nuvemshop configuradas",
      "Pagamentos e frete integrados",
      "Estrutura de catálogo otimizada",
      "Foco em conversão",
      "Entrega pronta para operação",
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

      {/* SOCIAL MEDIA (OPCIONAL)
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
      </section> */}

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