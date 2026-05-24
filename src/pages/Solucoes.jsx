import {
  Monitor,
  ShoppingCart,
  LayoutGrid,
  Layout,
  Megaphone,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CtaSection from "../components/home/CtaSection";
import SolucoesHero from "../components/solucoes/SolucoesHero";
import ServiceDetail from "../components/solucoes/ServiceDetail";
import ExplanationBlocks from "../components/solucoes/ExplanationBlocks";

const services = [
  {
    icon: LayoutGrid,
    title: "Design de Painéis & Fluxos Visuais",
    tagline: "Seu negócio rodando com total autonomia.",
    description:
      "Configuramos painéis integrados e personalizados para centralizar indicadores, processos e fluxos do seu negócio. Estruturas organizadas sob medida para uma visualização limpa, escalável e totalmente sua.",
    items: [
      "Painéis e organizadores visuais",
      "Organização de fluxos e rotinas",
      "Estruturação de relatórios e faturamento",
      "Interfaces multiusuário intuitivas",
      "Ambiente centralizado e seguro",
    ],
  },
  {
    icon: Layout,
    title: "Presença Digital Estratégica",
    tagline: "Interfaces que viram estrutura de marca.",
    description:
      "Criamos páginas institucionais com identidade, performance e posicionamento. Mais do que presença digital, são estruturas pensadas para comunicar autoridade e sustentar sua marca no longo prazo.",
    items: [
      "Design premium focado em conversão",
      "SEO e performance otimizada",
      "Painel integrado para edição de conteúdo",
      "Estrutura responsiva e rápida",
      "Hospedagem simplificada",
    ],
  },
  {
    icon: Monitor,
    title: "Estruturas de Conversão",
    tagline: "Landing pages que transformam tráfego em resultado.",
    description:
      "Páginas criadas para transformar visitas em clientes. Estruturas focadas em conversão, performance e velocidade para campanhas comerciais, lançamentos e captação de demanda.",
    items: [
      "Copy orientada à conversão",
      "Integração com WhatsApp ou CRM",
      "Otimização para tráfego pago",
      "Carregamento instantâneo",
      "Estrutura para testes e validação rápida",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Loja Virtual com Autonomia",
    tagline: "Sua operação pronta para vender com independência.",
    description:
      "Estruturamos lojas virtuais em plataformas consolidadas para que seu negócio possa vender com autonomia desde o primeiro dia. Tudo configurado para você gerenciar catálogo, pedidos e vendas sem depender de terceiros depois da entrega.",
    items: [
      "Setup Shopify ou Nuvemshop",
      "Pagamento e logística integrados",
      "Estrutura de catálogo organizada",
      "Design focado em conversão",
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

      {/* SOCIAL MEDIA */}
      <section className="py-24 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border border-border/40 rounded-2xl p-10 bg-card/30 backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Megaphone className="text-primary" size={18} />
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white">
                  Social Media Estratégico
                </h2>

                <p className="text-sm text-muted-foreground italic text-gradient-amber">
                  Posicionamento e consistência visual para sua marca.
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Criação de conteúdo com direção visual e linguagem consistente
              para fortalecer sua presença digital. Ideal para marcas que já
              possuem sua estrutura online definida e querem comunicar com mais
              clareza, frequência e autoridade.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-xs text-muted-foreground">
              <ul className="space-y-2">
                <li>• Planejamento de comunicação e linha editorial</li>
                <li>• Design visual para posts e carrosséis</li>
              </ul>

              <ul className="space-y-2">
                <li>• Consistência visual de posicionamento</li>
                <li>• Relatórios de alcance e acompanhamento mensal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ExplanationBlocks />

      <CtaSection
        heading="Construa seu patrimônio digital hoje."
        body="Estruture sua presença digital com autonomia real. Projetos pensados para funcionar com performance, identidade e controle total depois da entrega."
        cta="Solicitar proposta de projeto"
        hint="Projetos com escopo fechado e autonomia após entrega."
      />

      <Footer />
    </div>
  );
}