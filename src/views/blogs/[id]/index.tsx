import React from 'react'
import BlogsInfo from './BlogsInfo';
import Sidebar from '@/src/components/Sidebar';

const BlogDetails = () => {
  return (
    <div className="lg:flex bg-gradient-to-tr from-[#f0f4ff] via-white to-[#eaf0ff]">
      <div className="w-72 h-fit lg:sticky lg:top-[70px]">
        <Sidebar />
      </div>
      <div className='overflow-y-auto px-4 md:px-6'>
        <BlogsInfo />
      </div>
    </div>
  )
}

export default BlogDetails

export const runtime = 'edge';
