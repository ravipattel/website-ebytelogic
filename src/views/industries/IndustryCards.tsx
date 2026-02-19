'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'

import Button from '@/src/components/Button'

import wearablesPng from '@/src/assets/images/industry/industryWearables.png'
import MediaPng from '@/src/assets/images/industry/industryMedia.png'
import MotherBoardPng from '@/src/assets/images/industry/industrySemiconductor.png'
import FirelinePng from '@/src/assets/images/industry/industryFireAlarm.png';
import IotPng from '@/src/assets/images/industry/industryIot.png'
import AerospaceJpg from '@/src/assets/images/industry/industryAerospace.png'
import HeroIotPng from '@/src/assets/images/industry/heroIot.png'


export const industries = [
    {
        id: 'smart-displays-and-hmis',
        title: "Smart Displays & HMIs",
        description:
            "End-to-end software for industrial, automotive, and consumer smart displays, combining fast boot, smooth UI performance, and long-term system stability.",
        services: [
            "Display & Touch BSP",
            "Qt / QML UI Development",
            "Android UI Customization",
            "UI Performance Tuning"
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
        id: 'media-broadcasting-multimedia',
        title: "Media, Broadcast & Professional AV",
        description:
            "High-performance multimedia pipelines for live streaming, broadcast playback, AV sync, and Pro-AV systems, built on proven open-source frameworks and hardware SDKs.",
        services: [
            "Streaming Pipelines",
            "SDI / HDMI / NDI ",
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
        id: 'edge-ai-vision-systems',
        title: "Edge AI & Vision Systems",
        description:
            "Real-time embedded vision platforms for AI-powered cameras, inspection systems, robotics, and edge analytics, optimized for low latency and hardware acceleration.",
        services: [
            "Camera & Sensor Bring-Up",
            "Low-Latency Video Pipelines",
            "Hardware Acceleration",
            "Performance Optimization",
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
        id: 'networking-and-telecom-gateways',
        title: "Networking & Telecom Gateways",
        description:
            "Always-on embedded platforms for networking and telecom gateways, designed for uptime, secure remote management, and sustained field operation.",
        services: [
            "Gateway BSP Development",
            "Networking & Protocol Integration",
            "Secure OTA & Lifecycle Management",
            "Stress & Throughput Testing"
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
        id: 'industrial-automation-iot-gateways',
        title: "Automotive Infotainment & Telematics",
        description:
            "Embedded software for in-vehicle infotainment, telematics units, and smart automotive displays, optimized for fast boot, multimedia performance, and long-term stability.",
        services: [
            "Android & Linux BSP",
            "HMI & UI Development",
            "Audio / Video Pipelines",
            "Platform Validation"
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
        id: 'industrial-automation-iiot',
        title: "Industrial Automation & IIoT",
        description:
            "We build robust embedded platforms for industrial controllers, gateways, and IIoT devices that demand continuous operation, field reliability, and long product lifecycles. ",
        services: [
            "Linux BSP & Board Bring-Up",
            "Industrial Protocols (CAN, Modbus, UART)",
            "OTA & Remote Updates",
            "Stability & Soak Testing"
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
    const [openId, setOpenId] = useState<string | null>(null)
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
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                            <Button onClick={() => router.push('/contact-us')} className='px-6 h-12'>
                                Book a Consultation
                            </Button>
                            <Button onClick={() => router.push('/case-study')}
                                className='!bg-blue-100 !border-0 !text-blue-600 px-6 py-3 hover:!bg-blue-200 transition flex items-center gap-2'
                            >
                                Explore Our Case-Studies <FaArrowRightLong />
                            </Button>
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
                        <p className="text-sm sm:text-[15px] text-[#5d6471] mb-4 text-center max-w-2xl mx-auto">
                        Deep expertise across embedded domains — we help product companies engineer reliable, high-performance software for devices operating in real-world conditions. 
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        {industries.map((item , index) => (
                            <div key={item.id} className="bg-white border border-primary/30 shadow rounded-xl p-6 flex flex-col justify-between items-baseline">
                                <h3 className="text-xl font-semibold mb-2">
                                    {index + 1}. {item.title}
                                </h3>
                                <p className="text-gray-700 mb-3 text-sm">{item.description}</p>
                                <p className="font-medium text-primary text-sm flex items-center gap-2 mb-2"><MdOutlineMiscellaneousServices /> Services: </p>
                                <ul className="list-disc list-inside text-sm text-gray-700 mb-3">
                                    {item.services.map((s, idx) => (
                                        <li key={idx}>{s}</li>
                                    ))}
                                </ul>
                                <Button
                                    onClick={() => router.push(`/industries/${item.id}`)}
                                    className='!bg-white !text-primary hover:!bg-primary hover:!text-white !h-11 !py-0'
                                >
                                    Read More
                                </Button>
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
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button onClick={() => router.push('/contact-us')} className='h-12 w-full sm:w-fit !bg-white !text-primary hover:!bg-primary hover:!text-white'>
                            Book a Strategy Call
                        </Button>
                        <Button onClick={() => router.push('/case-study')} className='h-12 w-full sm:w-fit !bg-white !text-primary hover:!bg-primary hover:!text-white'>
                            Explore Our Case Studies
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndustryCards
