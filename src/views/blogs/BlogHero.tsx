import Link from 'next/link'
import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const BlogHero = () => {
    return (
        <div className='relative bg-[url("/images/blogBanners.png")] py-28 lg:py-64 bg-center bg-cover'>
            <div className='absolute bg-[#000000b3] top-0 size-full z-0'></div>
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 space-y-4'>
                <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'><Link href={'/'}>Home</Link> <RiArrowRightSLine className='text-primary text-2xl' /> <Link href={'/blogs'}>Blogs</Link></p>
                <h2 className='text-2xl md:text-5xl xl:text-[45px] font-normal text-white leading-tight text-center pb-4'>Deep Dives into Embedded Systems, Streaming Tech, and Beyond</h2>
                <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'>Insights from the Embedded Frontlines</p>
            </div>
        </div>
    )
}

export default BlogHero
