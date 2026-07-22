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
import SolucoesHero from "../components/estudos/SolucoesHero";
import ServiceDetail from "../components/estudos/ServiceDetail";
import ExplanationBlocks from "../components/estudos/ExplanationBlocks";

const services = [
  {
    icon: LayoutGrid,
    title: "Painéis e Interfaces Administrativas",
    tagline: "Estudos de organização e visualização de informações.",
    description:
      "Experimentos conceituais voltados à criação de interfaces administrativas, explorando arquitetura da informação, hierarquia visual e experiências de gerenciamento de dados.",
    items: [
      "Dashboards conceituais",
      "Fluxos administrativos",
      "Organização visual de informações",
      "Estudos de experiência do usuário",
      "Componentes reutilizáveis de interface",
    ],
  },
  {
    icon: Layout,
    title: "Sites Institucionais",
    tagline: "Explorações de identidade e presença digital.",
    description:
      "Projetos experimentais desenvolvidos para explorar diferentes abordagens de comunicação digital, identidade visual e estruturação de conteúdo para marcas fictícias.",
    items: [
      "Landing Pages conceituais",
      "Sites institucionais demonstrativos",
      "Arquitetura da informação",
      "Layouts responsivos",
      "Boas práticas de SEO técnico",
    ],
  },
  {
    icon: Monitor,
    title: "Landing Pages",
    tagline: "Experimentos em conversão e experiência.",
    description:
      "Estudos de interface focados em hierarquia visual, organização de conteúdo e técnicas de experiência do usuário aplicadas a páginas de apresentação e campanhas digitais.",
    items: [
      "Estrutura visual de conversão",
      "UX Writing",
      "Fluxos de navegação",
      "Otimização de performance",
      "Princípios de acessibilidade",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Conceitual",
    tagline: "Modelos experimentais de comércio digital.",
    description:
      "Protótipos criados para estudar experiências de compra online, organização de produtos e construção visual de lojas utilizando plataformas populares do mercado.",
    items: [
      "Estrutura de lojas virtuais",
      "Organização de catálogo",
      "Fluxos de compra",
      "Experiência do usuário",
      "Estudos com plataformas como Shopify e Nuvemshop",
    ],
  },
];

export default function Estudos() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />
      <SolucoesHero />

      {/* ESTUDOS E EXPERIMENTOS */}
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

      {/* ESTUDO DE COMUNICAÇÃO DIGITAL */}
      <section className="py-24 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border border-border/40 rounded-2xl p-10 bg-card/30 backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Megaphone className="text-primary" size={18} />
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white">
                  Comunicação Visual Digital
                </h2>

                <p className="text-sm text-muted-foreground italic text-gradient-amber">
                  Estudos de identidade, conteúdo e presença online.
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Experimentos voltados para criação de sistemas visuais,
              organização de conteúdo e construção de identidades digitais.
              A proposta é explorar como design e comunicação influenciam a
              percepção de uma marca em ambientes digitais.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-xs text-muted-foreground">
              <ul className="space-y-2">
                <li>• Estudos de direção visual</li>
                <li>• Criação de peças e componentes gráficos</li>
              </ul>

              <ul className="space-y-2">
                <li>• Organização de linguagem visual</li>
                <li>• Análise de consistência de marca</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ExplanationBlocks />

      <CtaSection
        heading="Explore os experimentos desenvolvidos."
        body="Uma coleção de estudos, interfaces e conceitos criados para explorar possibilidades de design, tecnologia e experiência digital."
        cta="Ver projetos"
        hint="Laboratório visual e técnico em constante evolução."
      />

      <Footer />
    </div>
  );
}