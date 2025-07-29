'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import React from 'react'
import { PiCheckCircleFill, PiUserCircleDashed } from 'react-icons/pi'
import { FaArrowRight } from 'react-icons/fa'

import Button from '@/src/components/Button'

import AboutGielPng from '@/src/assets/images/about/aboutGirl.png'
import CrossPlatform from '@/src/assets/images/about/crossPlatform.png'

const aboutData = [
    "Linux BSP Customization & Board Bring-Up", "Streaming Pipelines (GStreamer, FFMPEG, Live555)", "Cross-Platform App Development (Qt, C++, Android)", "Embedded QA & System Validation"
];

const aboutCards = [
    {
        icon: '🧠',
        title: 'Engineering Excellence',
        description: 'We write clean, scalable code and architect reliable systems — because precision is at the heart of everything we do.',
    },
    {
        icon: '🤝',
        title: 'Client Obsession',
        description: 'Your goals drive our roadmap. We listen deeply, adapt swiftly, and deliver solutions that fit like a glove.',
    },
    {
        icon: '🚀',
        title: 'Innovation with Intent',
        description: 'We don’t chase trends — we solve real-world problems using practical, proven, and cutting-edge technologies.',
    },
    {
        icon: '🛡️',
        title: 'Trust Through Transparency',
        description: 'We’re upfront, honest, and always in sync with your team. No surprises — just dependable results.',
    },
]

const Empower = () => {
    const router = useRouter();
    return (
        <section className="py-16 sm:py-28 relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-12">
                    <div className='xl:col-span-3 space-y-4'>
                        <h6 className='text-base md:text-lg text-primary font-medium flex items-center gap-2'><PiUserCircleDashed />About Us</h6>
                        <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize'><span className='text-primary'>We Build</span> the Embedded Tech That Powers <span className='text-primary'>Tomorrow</span></h3>
                        <p className='text-sm sm:text-[15px] text-[#5d6471] mb-4'>From multimedia streaming pipelines to mission-critical BSPs, we help global innovators
                            bring embedded ideas to life — reliably, efficiently, and at scale.</p>
                        <p className='text-[#5d6471] text-sm sm:text-[15px]'>eByteLogic is a trusted embedded software partner for OEMs and product teams building
                            advanced solutions across Media Broadcasting, Industrial IoT, Fire Safety, and more. Our
                            deep tech stack expertise ensures your product works right — the first time.</p>
                        <div className='grid grid-cols-1 xl:grid-cols-2 items-center gap-4 pt-4'>
                            <div>
                                <Image src={CrossPlatform} alt='CrossPlatform' width={396} height={178} className='max-h-44 rounded-2xl' />
                            </div>
                            <div className='space-y-4'>
                                {
                                    aboutData.map((about, index) => (
                                        <div key={index} className='text-[#5d6471] text-sm flex gap-1'><div><PiCheckCircleFill className='text-black !w-[18px] !h-[18px] mt-[1px]' /></div>{about}</div>
                                    ))
                                }
                            </div>
                        </div>
                        <Button onClick={() => router.push('/case-study')} className='flex items-center gap-2 mt-8'>Read More<FaArrowRight /></Button>
                    </div>
                    <div className='xl:col-span-2'>
                        <Image src={AboutGielPng} alt='AboutGielPng' width={500} height={590} className='mx-auto' />
                    </div>
                </div>
            </div>
            <div className='w-full h-32 bg-[#FFFAF0] mt-8 absolute'></div>
            <div className="max-w-[1400px] mx-auto px-4 mt-8 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {aboutCards.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-4 border border-gray-100 hover:border-primary"
                        >
                            <div className="text-primary text-3xl">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-primary italic">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Empower
