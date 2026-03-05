import Link from 'next/link'
import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const ExhibitionBanner = () => {
    return (
        <section className='relative bg-[url("/images/bg/exhibition/embeddedWorld.jpg")] bg-no-repeat bg-center bg-cover py-28 lg:py-64'>
            <div className='absolute bg-[#0e191ecf] top-0 size-full z-0'></div>
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 space-y-4'>
                <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'><Link href={'/'}>Home</Link> <RiArrowRightSLine className='text-primary text-2xl' /> <Link href={'/exhibition'}>Exhibition</Link></p>
                <h2 className='text-2xl md:text-5xl xl:text-[50px] font-normal text-white leading-tight text-center pb-4'>The Show is the Start. Production is the Goal.</h2>
                <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'>Show the Demo. Ship the Product.</p>
            </div>
        </section>
    )
}

export default ExhibitionBanner
