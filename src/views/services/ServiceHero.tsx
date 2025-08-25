import Link from 'next/link'
import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const ServiceHero = () => {
    return (
        <div className='relative bg-[url("/images/bg/serviceBg/servieBackgroundImage.png")] bg-no-repeat bg-cover bg-center py-28 lg:py-64'>
            <div className='absolute bg-[#0e191ec7] top-0 size-full z-0'></div>
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 space-y-4'>
                <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'><Link href={'/'}>Home</Link> <RiArrowRightSLine className='text-primary text-2xl' /> <Link href={'/services'}>Services</Link></p>
                <h2 className='text-2xl md:text-5xl xl:text-[48px] font-normal text-white leading-tight text-center pb-4'>End-to-End Embedded Software Development Services</h2>
                <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'>From Board Bring-Up to Broadcast-Ready Media</p>
            </div>
        </div>
    )
}

export default ServiceHero
