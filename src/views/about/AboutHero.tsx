import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const AboutHero = () => {
    return (
        <section className='relative bg-[url("/images/aboutBanner.png")] bg-no-repeat bg-cover py-28 lg:py-64'>
            <div className='absolute bg-[#0e191eb3] top-0 size-full z-0'></div>
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10'>
                <h2 className='text-2xl md:text-5xl xl:text-[50px] font-normal text-white leading-tight text-center pb-4'>Built to Solve the Toughest Embedded Challenges</h2>
                <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'>Engineers First. Partners Always.</p>
            </div>
        </section>
    )
}

export default AboutHero
