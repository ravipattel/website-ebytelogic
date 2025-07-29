import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const AboutHero = () => {
    return (
        <section className='relative bg-[url("/images/aboutBanner.jpg")] bg-no-repeat bg-cover py-28 lg:py-52'>
            <div className='absolute bg-[#0e191eb3] top-0 size-full z-0'></div>
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10'>
                <h2 className='text-2xl md:text-5xl xl:text-[54px] font-semibold text-white leading-tight text-center'>About Us</h2>
                <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'>Home <RiArrowRightSLine className='text-primary text-2xl' /> About</p>
            </div>
        </section>
    )
}

export default AboutHero
