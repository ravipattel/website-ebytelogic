import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://www.ebytelogic.com";

  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/login/", "/admin/", "/cgi-bin/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
