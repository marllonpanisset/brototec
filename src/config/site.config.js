export const siteConfig = {
  baseUrl: "https://brototec.vercel.app",

  siteName: "Brototec",
  defaultTitle: "Brototec | Sites, Landing Pages e Autonomia Digital",
  defaultDescription:
    "Criamos sites rápidos, minimalistas e com autonomia total para você editar sem depender de desenvolvedor.",

  routes: [
    {
      path: "/",
      name: "Home",
      priority: 1.0,
      changefreq: "weekly",
      title: "Brototec | Sites com Autonomia",
      description:
        "Sites rápidos e editáveis sem depender de desenvolvedor.",
      inMenu: true,
    },
    {
      path: "/solucoes",
      name: "Soluções",
      priority: 0.8,
      changefreq: "monthly",
      title: "Soluções | Sites, Landing Pages e Automação",
      description:
        "Soluções digitais para presença online e automação.",
      inMenu: true,
    },
    {
      path: "/contato",
      name: "Contato",
      priority: 0.8,
      changefreq: "monthly",
      title: "Contato | Fale com a Brototec",
      description:
        "Entre em contato e solicite seu site personalizado.",
      inMenu: true,
    },
  ],
};