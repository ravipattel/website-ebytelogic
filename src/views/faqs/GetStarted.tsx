'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

import Button from '@/src/components/Button'

const GetStarted = () => {
    const router = useRouter();
    return (
        <div className='relative bg-[url("/images/getStarted.jpg")] py-28 lg:py-44 bg-bottom bg-cover'>
            <div className='absolute bg-[#000000b3] top-0 size-full z-0'></div>
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 text-center'>
                <h2 className='text-[34px] font-semibold text-white leading-tight max-w-2xl mx-auto'>Do You Need Our IT Solutions? Get Advice From Our Professionals</h2>
                <p className='text-[#FFFFFFCC] text-[15px] mt-4 mb-10 max-w-2xl mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <Button onClick={() => router.push('/contact-us')} className='uppercase font-medium !px-10'>Get Started</Button>
            </div>
        </div>
    )
}

export default GetStarted
