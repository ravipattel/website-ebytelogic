import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://www.ebytelogic.com";

  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/login", "/admin/*", "/cgi-bin/"],
        allow: ["/services/", "/industries/", "/blogs/", "/faqs/", "/case-study/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
