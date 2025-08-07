import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const ContactUsHero = () => {
    return (
        <div className='relative bg-[url("/images/contactBanner.png")] py-28 lg:py-64 bg-bottom bg-cover'>
            <div className='absolute bg-[#000000b3] top-0 size-full z-0'></div>
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10'>
                <h2 className='text-2xl md:text-5xl xl:text-[50px] font-normal text-white leading-tight text-center pb-4'>Have a Project in Mind? Let’s Talk.</h2>
                <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'>Let’s Build What’s Next</p>
            </div>
        </div>
    )
}

export default ContactUsHero
