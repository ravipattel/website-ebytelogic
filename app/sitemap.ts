import type { MetadataRoute } from "next";
import { getBlogs } from "@/src/store/getBlogs";
import { getAllCaseStudies } from "@/content/casestudyMetaData";
import { getAllIndustries } from "@/content/industryMetaData";
import { getAllServices } from "@/content/serviceMetaData";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.ebytelogic.com";
  const staticUrls = ["/", "/about", "/blogs", "/faqs", "/services", "/industries", "/case-study", "/contact-us"];
  const blogs = (await getBlogs()) ?? [];
  const casestudy = (await getAllCaseStudies()) ?? [];
  const industries = (await getAllIndustries()) ?? [];
  const services = (await getAllServices()) ?? [];

  return [
    ...staticUrls.map((path) => ({ url: `${base}${path}`, changefreq: "weekly" })),
    ...blogs.map((b) => ({ url: `${base}/blogs/${b.slug}`, changefreq: "monthly" })),
    ...casestudy.map((c) => ({ url: `${base}/case-study/${c.id}`, changefreq: "monthly" })),
    ...industries.map((i) => ({ url: `${base}/industries/${i.id}`, changefreq: "monthly" })),
    ...services.map((s) => ({ url: `${base}/services/${s.id}`, changefreq: "monthly" })),
  ];
}