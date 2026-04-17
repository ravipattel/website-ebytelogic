export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "edge";

import type { MetadataRoute } from "next";
import { getBlogs } from "@/src/store/getBlogs";
import { getAllCaseStudies } from "@/content/casestudyMetaData";
import { getAllIndustries } from "@/content/industryData";
import { getAllServices } from "@/content/serviceMetaData";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.ebytelogic.com";

  const staticUrls = [
    { path: "/", priority: 1, changefreq: "weekly", lastmod: new Date() },
    { path: "/about", priority: 0.8, changefreq: "weekly", lastmod: new Date() },
    { path: "/blogs", priority: 0.8, changefreq: "weekly", lastmod: new Date() },
    { path: "/faqs", priority: 0.8, changefreq: "weekly", lastmod: new Date() },
    { path: "/services", priority: 0.8, changefreq: "weekly", lastmod: new Date() },
    { path: "/industries", priority: 0.8, changefreq: "weekly", lastmod: new Date() },
    { path: "/case-study", priority: 0.8, changefreq: "weekly", lastmod: new Date() },
    { path: "/contact-us", priority: 0.8, changefreq: "weekly", lastmod: new Date() },
    { path: "/exhibition", priority: 0.8, changefreq: "weekly", lastmod: new Date() },
  ];

  const blogs = (await getBlogs()) ?? [];
  const casestudy = (await getAllCaseStudies()) ?? [];
  const industries = (await getAllIndustries()) ?? [];
  const services = (await getAllServices()) ?? [];

  return [
    ...staticUrls.map((page) => ({ url: `${base}${page.path}`, changeFrequency: page.changefreq as any, priority: page.priority, lastModified: page.lastmod })),
    ...blogs.map((b) => ({ url: `${base}/blogs/${b.slug}`, changeFrequency: "weekly", priority: 0.8, lastModified: new Date()  })),
    ...services.map((s) => ({ url: `${base}/services/${s.id}`, changeFrequency: "weekly", priority: 0.8, lastModified: new Date() })),
    ...casestudy.map((c) => ({ url: `${base}/case-study/${c.id}`, changeFrequency: "weekly", priority: 0.8, lastModified: new Date() })),
    ...industries.map((i) => ({ url: `${base}/industries/${i.id}`, changeFrequency: "weekly", priority: 0.8, lastModified: new Date() })),
    ];
}