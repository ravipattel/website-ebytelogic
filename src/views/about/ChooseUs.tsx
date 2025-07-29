'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { PiUserCircleDashed } from 'react-icons/pi'
import { IoMdBuild } from 'react-icons/io'
import { BiCameraMovie } from 'react-icons/bi'

import Button from '@/src/components/Button'

import cardConnect from "@/src/assets/images/about/cardConnect.png"

const ChooseUs = () => {
    const router = useRouter();
    return (
        <section className="py-16 sm:py-20 bg-[url('/images/chooseUs.png')] bg-no-repeat bg-cover">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <h6 className='text-base md:text-lg text-primary font-medium flex items-center gap-2 mb-4'><PiUserCircleDashed />Why Choose Us</h6>
                <h3 className='text-2xl sm:text-[30px] font-medium text-white leading-tight max-w-lg capitalize mb-2'>We Build the Embedded Tech That Powers Tomorrow <span className='text-primary'>Solutions</span></h3>
                <p className='text-white max-w-lg text-sm sm:text-[15px] mb-8'>We help OEMs and product companies accelerate development with high-performance software, real-time systems, and protocol-level expertise — from board bring-up to deployment.</p>
                <div className="flex flex-col gap-4 relative max-w-xl">
                    <Image src={cardConnect} alt='sasasas' className='absolute md:-right-11 lg:right-4 top-26 hidden md:block' width={50} height={100} />
                    <div className="lg:w-lg border-2 border-[#1A2429] p-5 rounded-2xl">
                        <div className="flex items-center gap-3">
                            <IoMdBuild className='text-white w-9 h-9' />
                            <h3 className='text-white text-[21px] font-medium'>Embedded Systems & Board Bring-Up</h3>
                        </div>
                        <p className='text-[#FFFFFFCC] text-[15px] mt-4'>We specialize in BSP development, driver integration, and hardware-software co-design for custom boards, STBs, fire panels, and wearables.</p>
                    </div>
                    <div className="lg:w-lg border-2 border-[#1A2429] p-5 rounded-2xl">
                        <div className="flex items-center gap-3">
                            <BiCameraMovie className='text-white w-9 h-9' />
                            <h3 className='text-white text-[21px] font-medium'>Multimedia & Streaming Engineering</h3>
                        </div>
                        <p className='text-[#FFFFFFCC] text-[15px] mt-4'>Achieved ±10ms AV sync using SDI, NDI, and SRT protocols — delivering low-latency playback and robust streaming on edge devices.</p>
                    </div>
                </div>
                <Button onClick={() => router.push('/blogs')} className='flex items-center gap-2 mt-8'>Read More<FaArrowRight /></Button>
            </div>
        </section>
    )
}

export default ChooseUs
