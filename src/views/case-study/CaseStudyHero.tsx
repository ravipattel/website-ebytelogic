import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const CaseStudyHero = () => {
    return (
        <section className='relative bg-[url("/images/caseStudyHero.png")] bg-no-repeat  bg-cover py-28 lg:py-64'>
            <div className='absolute bg-[#0e191ebd] top-0 size-full z-0'></div>
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10'>
                <h2 className='text-2xl md:text-5xl xl:text-[50px] font-normal text-white leading-tight text-center pb-4'>How We Helped Clients Stream, Boot, and Scale with Confidence</h2>
                <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'>Real Projects. Real Results.</p>
            </div>
        </section>
    )
}

export default CaseStudyHero
