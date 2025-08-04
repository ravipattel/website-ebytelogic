import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const CaseStudyHero = () => {
    return (
        <section className='relative bg-[url("/images/caseStudyHero.png")] bg-no-repeat  bg-cover py-28 lg:py-64'>
            <div className='absolute bg-[#0e191ebd] top-0 size-full z-0'></div>
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10'>
                <h2 className='text-2xl md:text-5xl xl:text-[54px] font-semibold text-white leading-tight text-center'>Case Studies – Real-World Success Stories</h2>
                <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'>Home <RiArrowRightSLine className='text-primary text-2xl' /> Case-Study</p>
            </div>
        </section>
    )
}

export default CaseStudyHero
