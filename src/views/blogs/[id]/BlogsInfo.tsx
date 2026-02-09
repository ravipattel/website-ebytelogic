"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import BlogSuggestions from "@/src/components/Suggestion";

const BlogsInfo = ({ blogsData, suggestionBlogs }) => {
  return (
    <div className="max-w-[1400px] mx-auto sm:px-6 py-10">
      {/* BREADCRUMB */}
      <p className="text-sm flex flex-wrap items-center gap-2 justify-center pb-6">
        <Link href="/" className="text-primary">Home</Link>
        <RiArrowRightSLine />
        <Link href="/blogs" className="text-primary">Blogs</Link>
        <RiArrowRightSLine />
        <span className="text-slate-500">{blogsData.title}</span>
      </p>

      <section className="bg-white rounded-xl shadow-sm p-6 md:p-10 mb-16">
        <div className="grid xl:grid-cols-2 gap-10 2xl:items-center">

          {/* LEFT CONTENT */}
          <div>
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: blogsData.intro_content }}
            />
            <div className="pt-5">
              {blogsData.cta_text && (
                <Link
                  href={blogsData.cta_link}
                  className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 hover:bg-blue-600 hover:text-white transition"
                >
                  {blogsData.cta_text}
                </Link>
              )}
            </div>
          </div>

          <div>
            <Image
              width="512"
              height="512"
              src={blogsData.cover_image}
              alt={blogsData.title}
              className="w-full h-full md:w-[300px] md:h-[300px] 2xl:w-[512px] 2xl:h-[512px] xl:ms-auto rounded-lg shadow-md"
              priority
            />
          </div>

        </div>
      </section>

      <article
        className="article-content prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blogsData.content }}
      />

      {/* SUGGESTIONS */}
      <BlogSuggestions suggestionsBlogs={suggestionBlogs || []} />
    </div>
  );
};

export default BlogsInfo;

export const runtime = "edge";
