export function createPageUrl(pageName: string) {
  return (
    '/' +
    pageName
      .toLowerCase()
      .normalize('NFD') // remove acentos
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '') // remove especiais
      .trim()
      .replace(/\s+/g, '-')
  );
}