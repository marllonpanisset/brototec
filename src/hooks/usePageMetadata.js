import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../config/site.config";

export function usePageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = siteConfig.routes.find(
      (route) => route.path === pathname
    );

    document.title = route?.title || siteConfig.defaultTitle;

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        route?.description || siteConfig.defaultDescription
      );
    }
  }, [pathname]);
}