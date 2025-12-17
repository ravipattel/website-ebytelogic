import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const base = "https://www.ebytelogic.com";
  return {
    rules: [
      { userAgent: "*", disallow: "/cgi-bin/" }
      // optionally block admin paths
    ],
    sitemap: [`https://www.ebytelogic.com/sitemap.xml`],
    host: base
  };
}