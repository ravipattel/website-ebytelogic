import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const BlogHero = () => {
    return (
        <div className='relative bg-[url("/images/blogBanners.jpg")] py-28 lg:py-52 bg-center bg-cover'>
            <div className='absolute bg-[#000000b3] top-0 size-full z-0'></div>
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10'>
                <h2 className='text-2xl md:text-5xl xl:text-[54px] font-semibold text-white leading-tight text-center'>Blogs</h2>
                <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'>Home <RiArrowRightSLine className='text-primary text-2xl' /> Blogs</p>
            </div>
        </div>
    )
}

export default BlogHero
