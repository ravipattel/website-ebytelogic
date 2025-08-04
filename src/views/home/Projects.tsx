"use client"

import Image from 'next/image'

import React from 'react'

import ProjectsPng from '@/src/assets/images/home/projects/projects.png'
import StreamingPng from '@/src/assets/images/home/straming.png'
import IOt from '@/src/assets/images/home/projects/internet-of-things.png'
import ElectricalPng from '@/src/assets/images/home/projects/electrical.png'
import SmartwatchPng from '@/src/assets/images/home/projects/smartwatch.png'

const stats = [
    { icon: StreamingPng, label: "Media & Broadcasting" },
    { icon: IOt, label: "IoT & Automation" },
    { icon: SmartwatchPng, label: "Wearables & HealthTech" },
    { icon: ElectricalPng, label: "Semiconductor & BSPs" },
];

const Projects = () => {

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 overflow-hidden'>
                <div className="pt-36 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                    <div className='relative'>
                        {/* <Image src={SelfPng} alt="SelfPng" width={505} height={404} className='mx-auto relative z-10 lg:h-96 lg:w-96 xl:w-auto xl:h-auto' />
                        <Image src={EarthPng} alt="EarthPng" width={505} height={404} className='mx-auto opacity-25 absolute -top-24 lg:-top-11 xl:-top-16 left-0 md:left-36 lg:left-6 z-0 spin-slow lg:h-96 lg:w-96 xl:w-auto xl:h-auto' /> */}
                        <Image
                            src={ProjectsPng}
                            alt="ProjectsPng"
                            width={1152}
                            height={768}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-7'>
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`bg-[#f5f8fb] text-center py-10 px-6 sm:max-w-60 w-full
                            ${index % 2 === 0 ? 'sm:ms-auto' : 'sm:me-auto'}`}
                            >
                                <div className="text-4xl text-primary mb-3 grid place-items-center">
                                    <Image src={stat.icon} alt={stat.label} width={64} height={64} />
                                </div>
                                <p className="text-lg text-[#444444] mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
