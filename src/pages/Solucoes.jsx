import { Monitor, ShoppingCart, FileText, Layout, Megaphone } from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CtaSection from "../components/home/CtaSection";
import SolucoesHero from "../components/solucoes/SolucoesHero";
import ServiceDetail from "../components/solucoes/ServiceDetail";
import ExplanationBlocks from "../components/solucoes/ExplanationBlocks";

const services = [
  {
    icon: Layout,
    title: "Sites institucionais",
    tagline: "Sua presença digital com clareza e controle.",
    description:
      "Criamos sites institucionais que posicionam sua marca com clareza e profissionalismo. Nada de templates genéricos: cada estrutura é pensada para comunicar valor e gerar confiança — com um painel simples para você mesmo editar textos e imagens.",
    items: [
      "Estrutura estratégica focada em posicionamento",
      "Design leve, rápido e responsivo",
      "Painel administrativo para edição de conteúdo",
      "Base preparada para SEO",
      "Entrega completa + treinamento de uso",
    ],
  },
  {
    icon: Monitor,
    title: "Landing pages",
    tagline: "Páginas feitas para conversão.",
    description:
      "Desenvolvemos landing pages focadas em resultado. Cada elemento existe para guiar o usuário até a ação — sem distrações, sem excesso. Você recebe uma página pronta para rodar campanhas e ajustar quando quiser.",
    items: [
      "Estrutura otimizada para tráfego pago",
      "Copy e layout orientados à conversão",
      "Carregamento rápido",
      "Edição simples via painel",
      "Entrega pronta para campanhas",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Lojas virtuais",
    tagline: "Seu e-commerce pronto para operar.",
    description:
      "Configuramos sua loja completa em plataformas como Shopify ou Nuvemshop. Você recebe catálogo organizado, pagamentos funcionando e um painel intuitivo para gerenciar produtos, pedidos e conteúdo sem depender de ninguém.",
    items: [
      "Configuração completa da loja",
      "Cadastro de produtos e categorias",
      "Checkout funcional e integrado",
      "Integração com pagamentos",
      "Treinamento para gestão da loja",
    ],
  },
  {
    icon: FileText,
    title: "Blogs e conteúdo",
    tagline: "Construa autoridade com consistência.",
    description:
      "Criamos estruturas de blog integradas ao seu site, pensadas para SEO e produção de conteúdo contínuo. Você publica, edita e organiza tudo sozinho com facilidade.",
    items: [
      "Estrutura otimizada para SEO",
      "Sistema de posts simples de usar",
      "Organização por categorias",
      "Edição completa via painel",
      "Base pronta para crescimento orgânico",
    ],
  },
];

export default function Solucoes() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />
      <SolucoesHero />

      {/* SERVIÇOS PRINCIPAIS */}
      {services.map((service, i) => (
        <ServiceDetail
          key={service.title}
          index={i}
          flipped={i % 2 !== 0}
          {...service}
        />
      ))}

      {/* SOCIAL MEDIA (SEPARADO E OPCIONAL) */}
      <section className="py-24 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border border-border/40 rounded-2xl p-10 bg-background space-y-6">
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Megaphone className="text-primary" size={18} />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold">
                  Social media (opcional)
                </h2>
                <p className="text-sm text-muted-foreground">
                  Conteúdo estratégico para acompanhar seu site.
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Oferecemos criação de conteúdo para redes sociais como um serviço complementar.
              Os pacotes são personalizados de acordo com o momento do seu negócio — podendo incluir posts, carrosséis, stories e reels.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>• Planejamento de conteúdo</li>
                <li>• Criação de posts e carrosséis</li>
                <li>• Roteiro para reels</li>
              </ul>
              <ul className="space-y-2">
                <li>• Frequência flexível (semanal ou mensal)</li>
                <li>• Volume ajustado por necessidade</li>
                <li>• Escopo definido por proposta</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-border/40">
              <p className="text-xs text-muted-foreground">
                Serviço opcional. Não incluso nos projetos de criação de site.
              </p>
            </div>

          </div>
        </div>
      </section>

      <ExplanationBlocks />

      <CtaSection
        heading="Você não precisa de manutenção. Precisa de controle."
        body="A gente constrói seu site completo, funcional e editável. Depois disso, você mesmo gerencia — com autonomia total."
        cta="Quero meu site com autonomia"
        hint="Sem mensalidade escondida. Sem dependência."
      />

      <Footer />
    </div>
  );
}