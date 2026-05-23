import { Monitor, ShoppingCart, LayoutGrid, Layout, Megaphone } from "lucide-react";
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
      "Configuramos painéis integrados e customizados para centralizar a visualização de indicadores e fluxos do seu negócio. Estruturas organizadas sob medida para visualização limpa, escalável e sua para sempre.",
    items: [
      "Painéis e organizadores visuais",
      "Organização de fluxos e rotinas",
      "Estruturação de relatórios e faturamento",
      "Interfaces multiusuário intuitivas",
      "Ambiente de visualização centralizado e seguro",
    ],
  },
  {
    icon: Layout,
    title: "Presença Digital Estratégica",
    tagline: "Interfaces que viram estrutura de marca.",
    description:
      "Estruturamos ambientes de páginas institucionais de alto padrão que transcendem a presença digital — são desenhados como canais de autoridade e posicionamento.",
    items: [
      "Design premium focado em conversão",
      "SEO e performance extrema",
      "Painel integrado para edição de conteúdo",
      "Estrutura responsiva e rápida",
      "Hospedagem simplificada",
    ],
  },
  {
    icon: Monitor,
    title: "Estruturas de Conversão",
    tagline: "Landing pages que viram receita.",
    description:
      "Páginas criadas exclusivamente para transformar tráfego em clientes, atuando diretamente em campanhas de promoção de vendas e performance.",
    items: [
      "Copy orientada à conversão",
      "Integração com canais de atendimento (WhatsApp/CRM)",
      "Otimização para tráfego pago (Ads)",
      "Carregamento instantâneo",
      "Estrutura de validação e testes rápidos",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Operacional",
    tagline: "Lojas prontas para vender sem dependência.",
    description:
      "Implementamos e configuramos canais de venda em plataformas consolidadas do mercado, garantindo uma operação estável, rápida e livre de travas.",
    items: [
      "Canais Shopify ou Nuvemshop configurados",
      "Sistemas de pagamento e logística integrados",
      "Estrutura de catálogo otimizada",
      "Design fluido focado em conversão",
      "Entrega pronta para faturamento",
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
                <h2 className="font-heading text-2xl font-bold text-white">Social Media Estratégico</h2>
                <p className="text-sm text-muted-foreground italic text-gradient-amber">Posicionamento e acompanhamento de marca.</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Criação de conteúdo com design profissional e diagramação editorial para alimentar sua presença digital. 
              Ideal para marcas que já estruturaram sua interface independente e querem focar em atrair novos clientes com autoridade visual.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-xs text-muted-foreground">
              <ul className="space-y-2">
                <li>• Planejamento de comunicação e linha editorial</li>
                <li>• Design High-End para posts, informativos e carrosséis</li>
              </ul>
              <ul className="space-y-2">
                <li>• Gestão de posicionamento visual unificado</li>
                <li>• Relatórios de alcance e engajamento mensal</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <ExplanationBlocks />

      <CtaSection
        heading="Construa seu patrimônio digital hoje."
        body="Pare de pagar taxas abusivas por ferramentas travadas. Vamos estruturar um ecossistema que pertence inteiramente ao seu negócio."
        cta="Solicitar Proposta de Projeto"
        hint="Projetos com escopo fechado e autonomia vitalícia."
      />

      <Footer />
    </div>
  );
}