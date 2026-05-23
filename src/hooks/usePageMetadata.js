// src/hooks/usePageMetadata.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../config/site.config";

export function usePageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Busca a rota atual no seu arquivo de configuração
    const route = siteConfig.routes.find((r) => r.path === pathname);
    
    // Atualiza o título da página
    document.title = route ? route.title : siteConfig.defaultTitle;
    
    // Atualiza a meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", route ? route.description : siteConfig.defaultDescription);
    }
  }, [pathname]);
}