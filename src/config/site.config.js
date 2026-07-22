export const siteConfig = {
  baseUrl: "https://brototec.vercel.app",

  siteName: "Brototec",

  defaultTitle: "Brototec | Estudo de design e tecnologia digital",

  defaultDescription:
    "Brototec é um projeto conceitual criado para explorar identidade visual, interfaces digitais, experiência do usuário e desenvolvimento web.",

  routes: [

    {
      path: "/",
      name: "Home",
      priority: 1.0,
      changefreq: "weekly",
      title: "Brototec | Estudo de design e tecnologia digital",
      description:
        "Um projeto conceitual explorando design de interfaces, tecnologia web, arquitetura visual e experiências digitais.",
      inMenu: true,
    },


    {
      path: "/estudos",
      name: "Estudos",
      priority: 0.8,
      changefreq: "monthly",
      title: "Estudos e Experimentos | Brototec",
      description:
        "Explorações conceituais envolvendo interfaces, experiência do usuário, arquitetura da informação e desenvolvimento web.",
      inMenu: true,
    },


    {
      path: "/projetos",
      name: "Projetos",
      priority: 0.8,
      changefreq: "monthly",
      title: "Projetos Conceituais | Brototec",
      description:
        "Conheça experimentos e projetos conceituais criados para explorar possibilidades de design e tecnologia digital.",
      inMenu: true,
    },


    {
      path: "/manifesto",
      name: "Manifesto",
      priority: 0.7,
      changefreq: "monthly",
      title: "Manifesto | Brototec",
      description:
        "A visão por trás do projeto conceitual Brototec e suas explorações sobre design, tecnologia e experiências digitais.",
      inMenu: true,
    },


    {
      path: "/contato",
      name: "Contato",
      priority: 0.5,
      changefreq: "monthly",
      title: "Contato | Brototec",
      description:
        "Canal para conversar sobre ideias, estudos e experimentações digitais.",
      inMenu: true,
    },

  ],
};