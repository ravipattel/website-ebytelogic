import React from 'react'

const IndustryHero = () => {
    return (
        <section className='relative bg-[url("/images/industryHero.png")] bg-no-repeat bg-cover py-28 lg:py-64'>
            <div className='absolute bg-[#0e191eb3] top-0 size-full z-0'></div>
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10'>
                <h2 className='text-2xl md:text-5xl xl:text-[50px] font-normal text-white leading-tight text-center pb-4'>Serving Critical Industries with Deep Domain Expertise</h2>
                <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'>Embedded Intelligence Across Domains</p>
            </div>
        </section>
    )
}

export default IndustryHero
