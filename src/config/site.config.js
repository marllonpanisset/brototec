export const siteConfig = {
  baseUrl: "https://brototec.vercel.app",

  siteName: "Brototec",

  defaultTitle: "Brototec | Plataformas digitais com autonomia",

  defaultDescription:
    "Criamos sites, landing pages e plataformas digitais com performance, identidade e autonomia para você gerenciar sem depender de ninguém depois da entrega.",

  routes: [
    {
      path: "/",
      name: "Home",
      priority: 1.0,
      changefreq: "weekly",
      title: "Brototec | Plataformas digitais com autonomia",
      description:
        "Criamos sites, landing pages e plataformas digitais com performance, identidade e autonomia para você gerenciar sem depender de ninguém depois da entrega.",
      inMenu: true,
    },

    {
      path: "/solucoes",
      name: "Soluções",
      priority: 0.8,
      changefreq: "monthly",
      title: "Soluções | Brototec",
      description:
        "Sites, landing pages e soluções digitais sob medida para sua presença online.",
      inMenu: true,
    },

    {
      path: "/projetos",
      name: "Projetos",
      priority: 0.8,
      changefreq: "monthly",
      title: "Projetos | Brototec",
      description:
        "Conheça alguns dos projetos digitais desenvolvidos pela Brototec.",
      inMenu: true,
    },

    {
      path: "/manifesto",
      name: "Manifesto",
      priority: 0.7,
      changefreq: "monthly",
      title: "Manifesto | Brototec",
      description:
        "Conheça a visão da Brototec sobre autonomia digital, tecnologia e propriedade real no ambiente online.",
      inMenu: true,
    },

    {
      path: "/contato",
      name: "Contato",
      priority: 0.8,
      changefreq: "monthly",
      title: "Contato | Brototec",
      description:
        "Fale com a Brototec sobre seu próximo projeto digital.",
      inMenu: true,
    },

    {
      path: "/politica-de-privacidade",
      name: "Privacidade",
      priority: 0.3,
      changefreq: "yearly",
      title: "Política de Privacidade | Brototec",
      description:
        "Saiba como tratamos seus dados e informações.",
      inMenu: false,
    },

    {
      path: "/termos-de-uso",
      name: "Termos de Uso",
      priority: 0.3,
      changefreq: "yearly",
      title: "Termos de Uso | Brototec",
      description:
        "Termos e condições de uso da Brototec.",
      inMenu: false,
    },
  ],
};