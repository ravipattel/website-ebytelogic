import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const FaqsHero = () => {
    return (
        <div className='relative bg-[url("/images/faqBanner.png")] py-28 lg:py-64 bg-center bg-cover'>
            <div className='absolute bg-[#00000079] top-0 size-full z-0'></div>
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 space-y-4'>
                <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'>Home <RiArrowRightSLine className='text-primary text-2xl' /> {`Faq's`}</p>
                <h2 className='text-2xl md:text-5xl xl:text-[50px] font-normal text-white leading-tight text-center pb-4'>Your Questions, Answered with Clarity</h2>
                <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'>We Speak Embedded — and Answer Straight</p>
            </div>
        </div>
    )
}

export default FaqsHero
