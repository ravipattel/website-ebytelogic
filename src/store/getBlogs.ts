import { supabase } from "@/supabase/supabaseClient";

export async function getBlogs() {
  const { data: res, error } = await supabase.functions.invoke("blogs", {
    method: "GET",
  });
  if (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
  return res?.posts || [];
}

export async function getBlogSuggestionsBySlug(slug: string) {
  const blogs = await getBlogs();
  const currentBlog = blogs.find((b: any) => b.slug === slug);
  const suggestionSlugs = currentBlog?.suggestionsBlog;
  if (!Array.isArray(suggestionSlugs)) return [];
  const filtered = blogs.filter(
    (b: any) =>
      suggestionSlugs.includes(b.slug) &&
      b.slug !== slug
  );
  return filtered;
}
