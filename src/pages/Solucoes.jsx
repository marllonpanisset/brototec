import { Monitor, Zap } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CtaSection from "../components/home/CtaSection";
import SolucoesHero from "../components/solucoes/SolucoesHero";
import ServiceDetail from "../components/solucoes/ServiceDetail";
import ExplanationBlocks from "../components/solucoes/ExplanationBlocks";


const services = [
  {
    icon: Monitor,
    title: "Interfaces Estratégicas",
    tagline: "Sua operação começa na interface.",
    description:
      "Desenvolvemos sites e landing pages que não são apenas 'bonitos', mas ferramentas de venda. O diferencial? Você ganha um painel administrativo exclusivo, feito sob medida, para atualizar seu conteúdo em segundos, sem precisar de código ou de nós.",
    items: [
      "Sites institucionais focados em autoridade",
      "Landing pages de alta conversão para tráfego pago",
      "Painel Administrativo (CMS) personalizado e simplificado",
      "Arquitetura focada em velocidade e SEO orgânico",
    ],
  },
  {
    icon: Zap,
    title: "Eficiência Digital",
    tagline: "Elimine o trabalho manual que trava sua equipe.",
    description:
      "Mapeamos os processos repetitivos do seu dia a dia e criamos automações que conectam suas ferramentas. O objetivo é um só: fazer a tecnologia trabalhar para você, e não o contrário.",
    items: [
      "Automação de fluxos de trabalho e notificações",
      "Dashboards para visualização clara de métricas",
      "Sistemas internos simples para organização de dados",
      "Conexão inteligente entre suas ferramentas atuais",
    ],
  },
];

export default function Solucoes() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />
      <SolucoesHero />

      {services.map((service, i) => (
        <ServiceDetail
          key={service.title}
          index={i}
          flipped={i % 2 !== 0}
          {...service}
        />
      ))}

      <ExplanationBlocks />
      <CtaSection />
      <Footer />
    </div>
  );
}