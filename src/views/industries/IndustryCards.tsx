'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'

import Button from '@/src/components/Button'

import wearablesPng from '@/src/assets/images/industry/industryWearables.png'
import MediaPng from '@/src/assets/images/industry/industryMedia.png'
import MotherBoardPng from '@/src/assets/images/industry/industrySemiconductor.png'
import FirelinePng from '@/src/assets/images/home/industry/fireline.png';
import IotPng from '@/src/assets/images/industry/iotAutomation.png'
import AerospaceJpg from '@/src/assets/images/industry/aerospace.jpg'
import HeroIotPng from '@/src/assets/images/industry/heroIot.png'


const industries = [
    {
        id: 1,
        title: "Wearables & Consumer Electronics",
        description:
            "From BLE-enabled smartwatches to fitness trackers, we deliver reliable embedded firmware, mobile app integration, and power-optimized system software for consumer devices.",
        services: [
            "Firmware QA",
            "BLE Protocols",
            "Mobile Companion Apps",
            "OTA Support"
        ],
        subtitle: "Smarter, Power-Efficient Devices with Seamless Connectivity",
        subDescription:
            "We specialize in embedded firmware and companion app integration for smart wearables and IoT devices. Whether it's BLE-enabled fitness trackers or connected health monitors, our team delivers:",
        details: [
            "Low-power firmware development (Nordic, STM32, etc.)",
            "BLE protocol stack optimization & OTA support",
            "iOS/Android app sync QA and connectivity testing",
            "UX-tuned device-to-app experience"
        ],
        image: wearablesPng,
        success: '✔ Reduced field issues and faster time-to-market for consumer launches.'
    },
    {
        id: 2,
        title: "Media Broadcasting & Multimedia",
        description:
            "High-performance pipelines for real-time streaming, multiviewers, AV sync, and custom SDI/NDI/HDMI interfaces. Built on GStreamer, FFmpeg, and multimedia hardware SDKs.",
        services: [
            "Streaming Pipelines",
            "SDI/HDMI Playback",
            "Multimedia QA",
            "AV Sync Solutions"
        ],
        subtitle: "Real-Time AV Sync, Playback, and Custom Streaming Pipelines",
        subDescription:
            "eByteLogic supports multimedia device makers with complex video/audio delivery workflows. We’ve engineered:",
        details: [
            "GStreamer and FFmpeg pipeline customization",
            "HDMI/SDI/NDI protocol integration",
            "±10ms AV sync tuning on x86 & ARM",
            "Low-latency decoding and video wall support"
        ],
        image: MediaPng,
        success: '✔ Deployed in drone camera systems, video switchers, and broadcast encoders.'
    },
    {
        id: 3,
        title: "Semiconductor Platforms (BSP Services)",
        description:
            "Deep expertise in BSPs, kernel bring-up, and driver customization for NXP, TI, Rockchip, and more. We help silicon vendors and OEMs get to production faster.",
        services: [
            "Linux BSP",
            "Android Customization",
            "Secure Boot",
            "Yocto",
            "U-Boot"
        ],
        subtitle: "Platform Enablement on NXP, TI, Rockchip & Custom Boards",
        subDescription:
            "Our BSP experts help chip vendors, board makers, and OEMs bring silicon platforms to life with:",
        details: [
            "Yocto-based BSP builds & U-Boot porting",
            "Secure boot (HAB, OP-TEE, etc.) and signing flows",
            "Linux/Android kernel adaptation & driver integration",
            "Production image and factory-ready partitioning"
        ],
        image: MotherBoardPng,
        success: '✔ Trusted by ODMs for production firmware & board bring-up.'
    },
    {
        id: 4,
        title: "Fire Alarm Panels & Control Systems",
        description:
            "Customized Android firmware and embedded apps for industrial control panels with touchscreen UIs and secure alarm handling logic.",
        services: [
            "AOSP Customization",
            "GPIO/UART Integration",
            "Real-Time OTA",
            "Fast Boot"
        ],
        subtitle: "Secure, Customized Android OS for Touch-Control Panels",
        subDescription:
            "We build AOSP-based OS images for safety-critical industrial panels with:",
        details: [
            "GPIO/UART interface control logic",
            "Custom UI and branded splash screens",
            "Fast boot, watchdogs, and safe OTA logic",
            "Application preload as system apps"
        ],
        image: FirelinePng,
        success: '✔ Running in 24/7 industrial environments across Europe.'
    },
    {
        id: 5,
        title: "Industrial Automation & IoT Gateways",
        description:
            "Complete software stacks for smart edge devices, including industrial gateways, connected sensors, and protocol bridges.",
        services: [
            "Embedded Development",
            "Linux Drivers",
            "Remote Update Frameworks",
            "Device Management"
        ],
        subtitle: "Smart Edge Solutions for Connected Infrastructure",
        subDescription:
            "We design software stacks for secure, always-on industrial systems like:",
        details: [
            "Linux apps for Modbus, MQTT, RS485 gateways",
            "Embedded update framework with rollback",
            "Peripheral driver integration (CAN, SPI, GPIO)",
            "Cloud integration readiness"
        ],
        image: IotPng,
        success: '✔ Delivered for energy monitoring, protocol bridging, and gateway systems.'
    },
    {
        id: 6,
        title: "Aerospace & Remote Sensing Systems",
        description:
            "Precision-focused development for data acquisition, image processing, and control software in airborne and satellite environments.",
        services: [
            "Custom BSP",
            "Secure Boot",
            "Real-Time Data Handling",
            "Low-Latency Comms"
        ],
        subtitle: "Mission-Critical Software for Airborne & Satellite Systems",
        subDescription:
            "We’ve partnered with research labs and OEMs to develop:",
        details: [
            "Sensor board BSPs and secure boot",
            "Real-time image/video processing via GStreamer",
            "Data compression, redundancy, and burst-mode capture",
            "Linux-based edge logging and telemetry apps"
        ],
        image: AerospaceJpg,
        success: '✔ Optimized for harsh conditions, long-lifecycle deployment, and field reusability.'
    }
]

const IndustryCards = () => {
    const [openId, setOpenId] = useState<number | null>(null)
    const openModal = (id: number) => setOpenId(id)
    const closeModal = () => setOpenId(null)
    const currentIndustry = industries.find(item => item.id === openId)
    const [isVisible, setIsVisible] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (openId !== null) {
            setIsVisible(true)
            document.body.style.overflow = 'hidden'
        } else {
            setIsVisible(false)
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [openId])

    return (
        <>
            {/* banner */}
            <section className="py-24 px-4 sm:px-6 lg:px-24 text-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 ">
                    <div>
                        <h1 className="text-2xl sm:text-[34px] font-medium leading-tight capitalize mb-2">
                            <span className='text-primary'>Tailored Embedded Solutions</span> for Streaming, Silicon & Smart Devices
                        </h1>
                        <p className="mt-6 text-gray-700 text-sm sm:text-base max-w-2xl mx-auto">
                            We specialize in high-performance software for product innovators in MediaTech,
                            Semiconductors, IoT, and Wearables — delivering faster AV sync, reliable board bring-up,
                            and scalable integration.
                        </p>
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
                            <Button onClick={() => router.push('/contact-us')} className='px-6 py-3'>
                                Book a Consultation
                            </Button>
                            <a href='#industries'>
                                <Button
                                    className='!bg-blue-100 !border-0 !text-blue-600 px-6 py-3 hover:!bg-blue-200 transition flex items-center gap-2'
                                >
                                    Explore Industries <FaArrowRightLong />
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={HeroIotPng}
                            alt="Embedded Solutions Hero"
                            width={600}
                            height={327}
                            className="w-full h-80 object-cover mt-8 sm:mt-0 rounded-lg"
                            priority
                            loading="eager"
                        />
                    </div>
                </div>
            </section>
            {/* industries we serve */}
            <section id='industries' className="bg-[#f5f9ff] py-16 sm:py-20">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4">
                        <h3 className='text-2xl sm:text-[34px] font-medium leading-tight text-center capitalize mb-2'>Industries We<span className='text-primary'> Serve</span></h3>
                        <p className="text-sm sm:text-[15px] text-[#5d6471] mb-4 text-center max-w-lg mx-auto">
                            Deep Expertise Across Embedded Domains – From wearables to aerospace, we
                            deliver robust, optimized software solutions.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        {industries.map((item) => (
                            <div key={item.id} className="bg-white border border-primary/30 shadow rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {item.id}. {item.title}
                                </h3>
                                <p className="text-gray-700 mb-3 text-sm">{item.description}</p>
                                <p className="font-medium text-primary text-sm flex items-center gap-2"><MdOutlineMiscellaneousServices /> Services: </p>
                                <ul className="list-disc list-inside text-sm text-gray-700 mb-3">
                                    {item.services.map((s, idx) => (
                                        <li key={idx}>{s}</li>
                                    ))}
                                </ul>
                                <Button
                                    onClick={() => openModal(item.id)}
                                    className='!bg-white !text-primary hover:!bg-primary hover:!text-white !h-11 !py-0'
                                >
                                    Read More
                                </Button>

                                {/* Modal */}
                                {currentIndustry && (
                                    <div
                                        className="fixed inset-0 backdrop-blur-[1.5px] z-50 flex items-center justify-center px-4 py-8 transition-opacity duration-300"
                                        onClick={closeModal}
                                    >
                                        <div
                                            className={`bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-2xl relative transition-all duration-300 ease-in-out ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                                                }`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Image
                                                src={currentIndustry.image || ''}
                                                alt={currentIndustry.title}
                                                className="w-full object-cover"
                                                priority
                                                width={1920}
                                                height={1080}
                                                loading="eager"
                                                quality={100}
                                            />

                                            <div className="p-6">
                                                <h2 className="text-lg lg:text-2xl font-semibold text-primary mb-1">
                                                    {currentIndustry.title}
                                                </h2>
                                                <h4 className="text-sm font-medium text-gray-700 mb-2">{currentIndustry.subtitle}</h4>
                                                <p className="text-xs lg:text-sm text-gray-600 mb-3">{currentIndustry.subDescription}</p>

                                                <ul className="list-disc list-inside text-xs lg:text-sm text-gray-700 space-y-1 mb-4">
                                                    {currentIndustry.details.map((point, idx) => (
                                                        <li key={idx}>{point}</li>
                                                    ))}
                                                </ul>
                                                <p className="text-xs lg:text-sm text-gray-600 mb-3">{currentIndustry.success}</p>
                                                <Button
                                                    onClick={closeModal}
                                                    className="absolute top-2 right-3 rounded-full size-10 text-xl !p-0 !grid !place-items-center"
                                                >
                                                    <RxCross2 />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="relative py-20 bg-[url('/images/industry.webp')] bg-cover bg-center bg-fixed bg-no-repeat">
                <div className='absolute bg-[#0e191eb3] top-0 size-full z-0'></div>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center relative z-10">
                    <h1 className="text-2xl sm:text-[30px] font-semibold leading-tight capitalize mb-8 text-white">
                        Not Sure Where to Start?
                    </h1>
                    <p className="text-sm sm:text-[15px] font-medium text-white max-w-3xl mx-auto mb-10">
                        Let’s discuss your industry use case and how we can bring it to life with embedded expertise.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:space-x-4">
                        <Button onClick={() => router.push('/contact-us')} className='w-full sm:w-fit !bg-white !text-primary hover:!bg-primary hover:!text-white'>
                            Book a Strategy Call
                        </Button>
                        <Button onClick={() => router.push('/case-study')} className='w-full sm:w-fit !bg-white !text-primary hover:!bg-primary hover:!text-white'>
                            Explore Our Case Studies
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndustryCards
