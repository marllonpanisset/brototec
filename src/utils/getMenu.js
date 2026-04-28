import { siteConfig } from "../config/site.config";

export const getMenu = () => {
  return siteConfig.routes
    .filter((route) => route.inMenu)
    .map((route) => ({
      label: route.name,
      path: route.path,
    }));
};