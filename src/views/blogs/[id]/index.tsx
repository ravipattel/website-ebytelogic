"use client";

import React, { useEffect, useRef, useState } from "react";
import Sidebar from "@/src/components/Sidebar";
import BlogsInfo from "./BlogsInfo";

const BlogDetails = ({ blogsData, suggestionBlogs }: { blogsData: any, suggestionBlogs: any[] }) => {
  const articleRef = useRef<HTMLDivElement | null>(null);
  const [tocItems, setTocItems] = useState<Array<{ id: string, label: string }>>([]);

  useEffect(() => {
    if (!articleRef.current) return;

    const elements = articleRef.current.querySelectorAll("[id]");
    const tocList: any = Array.from(elements).map((el: any) => ({
      id: el.id,
      label:
        el.id=='introduction' ? "Introduction" : el.textContent?.trim() ||
        el.id.replace(/-/g, " ").replace(/\b\w/g, (c: any) => c.toUpperCase()),
    }));

    setTocItems(tocList);
  }, [blogsData]);

  return (
    <div className="lg:flex bg-gradient-to-tr from-[#f0f4ff] via-white to-[#eaf0ff]">
      <div className="w-72 h-fit lg:sticky lg:top-[70px]">
        <Sidebar items={tocItems} />
      </div>

      <div ref={articleRef} className="overflow-y-auto px-4 md:px-6">
        <BlogsInfo
          blogsData={blogsData}
          suggestionBlogs={suggestionBlogs}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
export const runtime = "edge";
