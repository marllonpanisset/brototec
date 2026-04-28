import { useEffect } from "react";
import { siteConfig } from "../config/site.config";

export function useSEO(path) {
  useEffect(() => {
    const route = siteConfig.routes.find((r) => r.path === path);

    const title = route?.title || siteConfig.defaultTitle;
    const description = route?.description || siteConfig.defaultDescription;

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }
  }, [path]);
}