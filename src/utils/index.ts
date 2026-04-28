export function createPageUrl(pageName: string) {
  return (
    '/' +
    pageName
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
  );
}

// 👇 MENU CENTRAL (SEO + NAV + ROUTES sincronizados)
export function getMenu() {
  return [
    {
      label: "Soluções",
      href: "/solucoes",
      description: "O que construímos",
    },
    {
      label: "Projetos",
      href: "/projetos",
      description: "Projetos e processo",
    },
    {
      label: "Manifesto",
      href: "/manifesto",
      description: "Como pensamos",
    },
  ];
}