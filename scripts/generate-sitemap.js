import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { siteConfig } from "../src/config/site.config.js";

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: siteConfig.baseUrl,
  });

  siteConfig.routes.forEach((route) => {
    sitemap.write({
      url: route.path,
      changefreq: route.changefreq,
      priority: route.priority,
    });
  });

  sitemap.end();

  const xml = await streamToPromise(sitemap).then((d) => d.toString());

  writeFileSync("./dist/sitemap.xml", xml);
  console.log("✅ Sitemap gerado com sucesso!");
}

generateSitemap();