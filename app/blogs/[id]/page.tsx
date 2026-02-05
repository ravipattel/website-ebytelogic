import NotFound from '@/app/not-found';
import JsonLd from '@/src/components/JsonLd';
import { getBlogs, getBlogSuggestionsBySlug } from '@/src/store/getBlogs';
import BlogDetails from '@/src/views/blogs/[id]'
import React from 'react'

async function getBlogBySlug(slug: string) {
  const blogs = await getBlogs();
  return blogs.find((b: any) => b.slug === slug) || null;
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const blogsData = await getBlogBySlug(id);

  if (!blogsData) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post does not exist.',
      robots: { index: false, follow: false },
    };
  }

  const url = `/blogs/${id}`;
  return {
    title: blogsData.title,
    description: blogsData.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: blogsData.title,
      description: blogsData.excerpt,
      url: url,
      images: [{ url: blogsData.cover_image }]
    },
    twitter: {
      title: blogsData.title,
      description: blogsData.excerpt,
      images: [blogsData.cover_image],
    }
  };

}

const BlogDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {

  const { id } = await params;
  const blogsData = await getBlogBySlug(id);
  const suggestionBlogs = await getBlogSuggestionsBySlug(id);

  if(!blogsData){
    return <NotFound/>
  }

  const breadCrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ebytelogic.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs",
        "item": "https://www.ebytelogic.com/blogs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blogsData?.title,
        "item": `https://www.ebytelogic.com/blogs/${id}`
      }
    ]
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": `https://www.ebytelogic.com/blogs/${id}`,
    "headline": blogsData?.title,
    "description": blogsData?.excerpt,
    "image": blogsData?.cover_image,
    "author": {
      "@type": "Organization",
      "name": "eByteLogic"
    },
    "publisher": {
      "@type": "Organization",
      "name": "eByteLogic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ebytelogic.com/logo.png"
      }
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString()
  };

  return (
    <>
      <JsonLd json={breadCrumbSchema} />
      <JsonLd json={blogPostingSchema} />
      <BlogDetails blogsData={blogsData} suggestionBlogs={suggestionBlogs} />
    </>
  )
}

export default BlogDetailsPage
export const runtime = 'edge';
