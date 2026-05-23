export const siteConfig = {
  baseUrl: "https://brototec.vercel.app",
  siteName: "Brototec",
  defaultTitle: "Brototec | Sites, Landing Pages e Autonomia Digital",
  defaultDescription:
    "Criamos sites rápidos, minimalistas e com autonomia total para você editar sem depender de desenvolvedor.",

  routes: [
    { path: "/", name: "Home", priority: 1.0, changefreq: "weekly", title: "Brototec | Sites com Autonomia", description: "Sites rápidos e editáveis sem depender de desenvolvedor.", inMenu: true },
    { path: "/solucoes", name: "Soluções", priority: 0.8, changefreq: "monthly", title: "Soluções | Sites, Landing Pages e Automação", description: "Soluções digitais para presença online e automação.", inMenu: true },
    { path: "/projetos", name: "Projetos", priority: 0.8, changefreq: "monthly", title: "Projetos | Nosso portfólio de ativos digitais", description: "Conheça os projetos de autonomia digital desenvolvidos pela Brototec.", inMenu: true },
    { path: "/manifesto", name: "Manifesto", priority: 0.7, changefreq: "monthly", title: "Manifesto | A filosofia Brototec", description: "Conheça nossa visão sobre tecnologia, autonomia e o futuro do digital.", inMenu: true },
    { path: "/contato", name: "Contato", priority: 0.8, changefreq: "monthly", title: "Contato | Fale com a Brototec", description: "Entre em contato e solicite seu site personalizado.", inMenu: true },
    { path: "/politica-de-privacidade", name: "Privacidade", priority: 0.3, changefreq: "yearly", title: "Política de Privacidade | Brototec", description: "Saiba como tratamos seus dados.", inMenu: false },
    { path: "/termos-de-uso", name: "Termos de Uso", priority: 0.3, changefreq: "yearly", title: "Termos de Uso | Brototec", description: "Termos e condições de uso da plataforma.", inMenu: false },
  ],
};