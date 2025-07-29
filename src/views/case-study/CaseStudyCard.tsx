'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

import Button from '@/src/components/Button'

import NextologiesWebp from '@/src/assets/images/caseStudy/nextologies.png'
import DubbingJpg from '@/src/assets/images/caseStudy/spg.jpg'
import ToradexPng from '@/src/assets/images/caseStudy/yocto.jpg'
import EsightWearJpeg from '@/src/assets/images/caseStudy/eyeWear.jpg'
import BootTimeJpg from '@/src/assets/images/caseStudy/qtApp.jpg'
import MultiViewerJpg from '@/src/assets/images/caseStudy/arm.png'

const caseStudyCard = [
    {
        id: 1,
        title: "Nextologies’ x86 Server-Based SDI Encoder & Decoder",
        industry: "Professional Video Transport",
        highlights: [
            "Ultra-Low Latency (<100 msec)",
            "Precision Lip Sync (±10 msec)",
            "Error-Free Transmission",
        ],
        img: NextologiesWebp,
        route: '/nextologies'
    },
    {
        id: 2,
        title: "Enhancing SPG Studio's Real-Time Audio Dubbing Solution: NDI Integration and GUI Stabilization",
        industry: "NDI Integration and GUI Stabilization",
        highlights: [
            "Stable Audio Streaming",
            "Precision Audio Sync (±10 ms)",
            "Ultra-Low Latency (<100 ms)",
        ],
        img: DubbingJpg,
        route: '/spg'
    },
    {
        id: 3,
        title: "Accelerated Custom Carrier Board Bring-up with Yocto and Toradex Verdin i.MX8MP",
        industry: "Embedded Systems Development",
        highlights: [
            "71% Time Reduction (14 Days Estimated vs. 4-5 Days Achieved)",
            "Custom Carrier Board Integration",
            "Display & Touch Screen Functionality for ATDM Product",
        ],
        img: ToradexPng,
        route: '/yocto'
    },
    {
        id: 4,
        title: "eSightEyewear Smart Glass Latency Optimization",
        industry: "Smart Glasses, Assistive Technology",
        highlights: [
            "60%+ Latency Reduction",
            "No Camera Sensor Datasheet",
            "Surpassed Major OEM Capabilities",
        ],
        img: EsightWearJpeg,
        route: '/eye-wear'
    },
    {
        id: 5,
        title: "Optimizing Boot Time for Embedded Linux Systems with QT Applications on Exynos 4412 and i.MX6Q Platforms",
        industry: "Embedded Systems & Boot Time Optimization",
        highlights: [
            "Achieved 93% reduction in boot time (22.8s → 1.56s) on i.MX6Q platform",
            "Optimized U-Boot, Linux kernel, and QT application startup processes",
            "Implemented parallelization and asynchronous service startup techniques"
        ],
        img: BootTimeJpg,
        route: '/qt-app'
    },
    {
        id: 6,
        title: "Low-Cost, Hardware-Accelerated ARM-Based Multiview Player for Professional HDMI Output",
        industry: "Broadcast and Mobile Production",
        highlights: [
            "Real-Time Multi-Stream Decoding",
            "Low-Cost Solution (Under $100)",
            "Supports UDP, SRT, and HLS Protocols",
            "Hardware-Accelerated Video Decoding (VPU)",
        ],
        img: MultiViewerJpg,
        route: '/arm'
    },
]

const CaseStudyCard = () => {
    const router = useRouter();

    return (
        <section>
            <div>
                <div className="relative bg-[#F9FAFB] overflow-hidden py-20 px-6 sm:px-10 md:px-16 lg:px-24">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-2xl sm:text-[30px] font-medium text-primary leading-tight capitalize mb-8">
                            Engineering Impact, One Project at a Time
                        </h1>
                        <p className="text-sm sm:text-[15px]  text-gray-600 max-w-3xl mx-auto mb-10">
                            Explore how we’ve helped product teams solve real-world challenges in embedded systems,
                            multimedia streaming, Linux BSPs, and more.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 sm:space-x-4">
                            <a href="#caseStudies" className='w-full sm:w-fit'>
                                <Button className='w-full !bg-white !text-primary hover:!bg-primary hover:!text-white'>
                                    View Case Studies
                                </Button>
                            </a>
                            <Button onClick={() => router.push('/contact-us')} className='w-full sm:w-fit !bg-white !text-primary hover:!bg-primary hover:!text-white'>
                                Let’s Talk
                            </Button>
                        </div>
                    </div>
                </div>
                <div id='caseStudies' className="max-w-[1400px] mx-auto py-24 px-4 sm:px-6 relative">
                    <div>
                        <h1 className="text-2xl sm:text-[30px] font-medium leading-tight capitalize mb-8">
                            Featured Case Studies </h1>
                        <div className="relative border-l-2 border-primary/30 ml-4 space-y-10">
                            {caseStudyCard.map((caseStudy, i) => (
                                <div
                                    key={i}
                                    className={`relative pl-10 pr-6 before:content-[''] before:absolute before:left-[-9px] before:top-1.5 before:w-4 before:h-4 before:bg-primary before:rounded-full`}
                                >
                                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 ${i % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-semibold text-[#1d2433] mb-2">
                                                {caseStudy.title}
                                            </h3>
                                            <span className="text-xs bg-primary/15 px-2 py-0.5 rounded-full inline-block mb-3">
                                                {caseStudy.industry}
                                            </span>
                                            <ul className="list-disc list-inside text-[#5d6471] text-sm sm:text-[15px] space-y-2">
                                                {caseStudy.highlights.map((line, idx) => (
                                                    <li key={idx}>{line}</li>
                                                ))}
                                            </ul>
                                            <a onClick={() => {
                                                router.push(`/case-study/${caseStudy.route}`)
                                            }}
                                                className="cursor-pointer inline-flex items-center mt-3 text-sm sm:text-[15px] font-medium text-primary hover:underline gap-2"
                                            >
                                                Read Full Case Study <FaArrowRightLong />
                                            </a>
                                        </div>
                                        <div>
                                            <div className="w-full h-[250px]">
                                                <Image
                                                    src={caseStudy.img}
                                                    alt="Case Study Illustration"
                                                    width={400}
                                                    height={200}
                                                    priority
                                                    loading="eager"
                                                    quality={100}
                                                    placeholder="blur"
                                                    blurDataURL={caseStudy.img.src}
                                                    className="w-full h-full object-cover rounded-xl"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudyCard
