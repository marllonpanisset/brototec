import { Code, Megaphone, Share2, TrendingUp } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CtaSection from "../components/home/CtaSection";
import SolucoesHero from "../components/solucoes/SolucoesHero";
import ServiceDetail from "../components/solucoes/ServiceDetail";
import ExplanationBlocks from "../components/solucoes/ExplanationBlocks";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    tagline: "Produtos digitais de alta performance.",
    description:
      "Criamos sites, plataformas e aplicações sob medida com foco em velocidade, escalabilidade e experiência do usuário. Do design à infraestrutura, entregamos tecnologia que funciona.",
    items: [
      "Landing pages e sites institucionais",
      "Plataformas e aplicações web",
      "E-commerce e lojas virtuais",
      "Integrações e APIs personalizadas",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    tagline: "Crescimento previsível e escalável.",
    description:
      "Desenvolvemos estratégias de marketing orientadas por dados para aumentar a visibilidade, atrair clientes certos e converter com consistência.",
    items: [
      "Estratégia de conteúdo",
      "SEO técnico e editorial",
      "E-mail marketing e automação",
      "Análise e relatórios de performance",
    ],
  },
  {
    icon: Share2,
    title: "Redes Sociais",
    tagline: "Presença digital que conecta e converte.",
    description:
      "Gerenciamos sua presença nas principais redes sociais com identidade visual consistente, linguagem autêntica e estratégias que criam comunidade e geram vendas.",
    items: [
      "Gestão de Instagram, LinkedIn e TikTok",
      "Criação de conteúdo visual e textual",
      "Calendário editorial estratégico",
      "Monitoramento de métricas e engajamento",
    ],
  },
  {
    icon: TrendingUp,
    title: "Tráfego Pago",
    tagline: "Cada real investido, maximizado.",
    description:
      "Criamos e otimizamos campanhas pagas no Google, Meta e outros canais para gerar leads qualificados e vendas com o melhor custo por resultado possível.",
    items: [
      "Campanhas Google Ads e Meta Ads",
      "Remarketing e audiências personalizadas",
      "Testes A/B e otimização contínua",
      "Relatórios de ROI transparentes",
    ],
  },
];

export default function Solucoes() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />
      <SolucoesHero />
      {services.map((service, i) => (
        <ServiceDetail key={service.title} index={i} flipped={i % 2 !== 0} {...service} />
      ))}
      <ExplanationBlocks />
      <CtaSection />
      <Footer />
    </div>
  );
}