'use client'
import Image from 'next/image';
import Link from 'next/link';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { RiArrowRightSLine } from 'react-icons/ri';

import Button from '@/src/components/Button';

import EbytelogicPng from '@/src/assets/images/industry/ebytelogic.png'
import wearablesPng from '@/src/assets/images/industry/industryWearables.png'
import MediaPng from '@/src/assets/images/industry/industryMedia.png'
import MotherBoardPng from '@/src/assets/images/industry/industrySemiconductor.png'
import FirelinePng from '@/src/assets/images/industry/industryFireAlarm.png';
import IotPng from '@/src/assets/images/industry/industryIot.png'
import AerospaceJpg from '@/src/assets/images/industry/industryAerospace.png'

const industryData = [
    {
        id: 'smarter-power-efficient-wearables',
        image: wearablesPng,
        backgroundImage: '/images/bg/industry/wearablesBg.png',
        hero: {
            headline: "Smarter, Power-Efficient Wearables that Just Work",
            subtext: "From BLE firmware to companion apps, we engineer reliable, connected devices with seamless user experiences.",
            cta: "Book a Strategy Call",
        },
        intro: `The wearable and consumer electronics market moves at lightning speed — product teams must balance power efficiency, wireless connectivity, and fast time-to-market. eByteLogic helps you deliver wearable products that are reliable from day one, avoiding costly recalls and customer dissatisfaction.`,
        coreChallenges: [
            "Battery drain & inefficient firmware design",
            "Unstable BLE connections and pairing issues",
            "Device-to-app sync failures",
            "Firmware update risks in the field",
        ],
        solutions: {
            "Low-Power Firmware Development": [
                "Nordic, STM32, ESP32-based development",
                "Optimized for extended battery life",
                "Robust sleep/wake cycle management",
            ],
            "BLE Protocol & OTA Support": [
                "Custom BLE services & characteristics",
                "OTA firmware update framework",
                "Secure boot & rollback support",
            ],
            "Mobile App Companion Integration": [
                "iOS & Android sync testing",
                "UX-driven connectivity tuning",
                "Automated QA for edge cases",
            ],
            "Device Launch Optimization": [
                "End-to-end validation",
                "Compliance readiness (FCC, CE)",
                "Faster go-to-market cycles",
            ],
        },
        whyUs: [
            "Proven in smartwatches, fitness trackers, connected health devices",
            "QA-driven approach to reduce field failures",
            "Expertise across silicon vendors (Nordic, TI, ST, Qualcomm)",
        ],
        caseStudy:
            "We helped a fitness wearable OEM reduce Bluetooth disconnection rates by 40% and cut firmware power consumption by 20%, enabling a successful launch in the US and EU markets.",
        cta: {
            headline: "Let’s build wearables that customers trust.",
            actions: ["Schedule a Discovery Call", "See Our Case Studies"],
        },
    },
    {
        id: 'media-broadcasting-multimedia',
        image: MediaPng,
        backgroundImage: '/images/bg/industry/multimediaBg.png',
        hero: {
            headline: "Real-Time Streaming Pipelines, Tuned for Broadcast Performance",
            subtext: "From GStreamer customization to AV sync, we enable multimedia devices to perform flawlessly under live conditions.",
            cta: "Book a Strategy Call",
        },
        intro: `In media and broadcasting, latency, synchronization, and reliability make or break your product. We work with device makers and R&D teams to build multimedia pipelines that perform in drones, switchers, encoders, and video walls.`,
        coreChallenges: [
            "AV sync drift across multiple feeds",
            "High latency in live streaming",
            "Protocol-level integration complexity (NDI, SRT, HDMI, SDI)",
            "Hardware acceleration underutilization",
        ],
        solutions: {
            "Pipeline Engineering": [
                "GStreamer/FFmpeg customization",
                "Multi-channel & multi-viewer support",
                "Pipeline tuning for low CPU/GPU usage",
            ],
            "Protocol Integration": [
                "HDMI, SDI, NDI, RTP, RTMP, HLS, SRT",
                "Custom driver-level support",
                "Interoperability with legacy hardware",
            ],
            "AV Synchronization": [
                "±10ms AV sync on ARM & x86",
                "Lip-sync tuning for broadcast pipelines",
            ],
            "Multimedia QA & Stress Testing": [
                "Latency benchmarking",
                "Real-time load testing",
                "Field scenario simulations",
            ],
        },
        whyUs: [
            "Expertise proven in drone video feeds, live encoders, and video wall solutions",
            "Focus on real-time delivery, not just playback",
            "Ability to work across silicon vendors & SDKs",
        ],
        caseStudy: "We developed a low-latency streaming solution for a European broadcast switcher company, cutting end-to-end latency to <100ms, enabling live sports workflows without sync issues.",
        cta: {
            headline: "Upgrade your multimedia workflows with engineering precision.",
            actions: ["Schedule a Call", "View Broadcast Case Studies"],
        },
    },
    {
        id: 'semiconductor-platforms',
        image: MotherBoardPng,
        backgroundImage: '/images/bg/industry/semiconductorBg.png',
        hero: {
            headline: "From Silicon to Production – BSP Expertise You Can Trust",
            subtext: "Accelerating time-to-market with board bring-up, driver integration, and secure boot across NXP, TI, Rockchip & more.",
            cta: "Book a Strategy Call",
        },
        intro: `Chip vendors and OEMs face intense pressure to enable production-ready BSPs for their platforms. Our team accelerates this process by delivering optimized, secure, and fully tested BSPs with Yocto, Buildroot, and Android frameworks.`,
        coreChallenges: [
            "Delays in hardware bring-up",
            "Kernel/driver mismatches across versions",
            "Secure boot implementation hurdles",
            "Long boot times for embedded devices",
        ],
        solutions: {
            "Board Bring-Up & BSP Development": [
                "U-Boot porting & custom splash",
                "Kernel adaptation for peripherals",
                "Yocto/Buildroot BSP customization",
            ],
            "Driver Development & Porting": [
                "Forward/backward driver porting",
                "I2C, SPI, PCIe, MIPI, USB subsystems",
            ],
            "Security & OTA": [
                "Secure boot enablement (HAB, OP-TEE)",
                "OTA with factory reset rollback",
            ],
            "Boot-Time Optimization": [
                "Cut boot from 10s+ to <3s",
                "Fast boot tuning for consumer & industrial products",
            ],
        },
        whyUs: [
            "Trusted by ODMs for production-ready BSPs",
            "Hands-on expertise with NXP, TI, Rockchip, Qualcomm, and more",
            "Proven record in reducing bring-up timelines",
        ],
        caseStudy: "For a US-based industrial electronics OEM, we reduced boot-to-first-frame time to 3 seconds on IMX8MQ hardware, enabling faster product startup in critical use cases.",
        cta: {
            headline: "Launch your silicon platform faster with our BSP expertise.",
            actions: ["Schedule a Call", "Explore BSP Case Studies"],
        },
    },
    {
        id: 'fire-alarm-panels-control-systems',
        image: FirelinePng,
        backgroundImage: '/images/bg/industry/firelineBg.png',
        hero: {
            headline: "Secure, Reliable Embedded Software for Safety-Critical Panels",
            subtext: "AOSP customization and embedded app development for industrial alarm and control systems.",
            cta: "Book a Strategy Call",
        },
        intro: `Industrial alarm panels require secure, always-on performance — any downtime puts safety at risk. We help OEMs build firmware and apps that meet safety standards while supporting responsive touchscreen UIs and fast boot.`,
        coreChallenges: [
            "Unreliable GPIO/UART handling for alarms",
            "Slow boot delays during power cycles",
            "OTA update risks in 24/7 environments",
            "Branded UI requirements for operators",
        ],
        solutions: {
            "Customized Android Firmware (AOSP)": [
                "Secure OS images for panels",
                "Branded splash screens & UI integration",
            ],
            "Hardware Control Integration": [
                "GPIO, UART, CAN handling for alarms",
                "Watchdog timers for failsafe logic",
            ],
            "Fast Boot & Reliability": [
                "Boot-time optimization for <3s",
                "Safe OTA with rollback support",
            ],
            "Industrial App Deployment": [
                "System-level app preload",
                "Touchscreen UX design for operators",
            ],
        },
        whyUs: [
            "Experience with fire safety & industrial control OEMs in Europe",
            "Strong focus on uptime, fast recovery, and secure updates",
            "Tailored Android expertise for embedded panels",
        ],
        caseStudy: "We built a custom Android firmware for a European fire alarm OEM with fast boot (<5s), safe OTA, and GPIO-driven alarm control — now deployed across industrial plants.",
        cta: {
            headline: "Strengthen your control systems with reliable embedded software.",
            actions: ["Schedule a Call", "See Our Case Studies"],
        },
    },
    {
        id: 'industrial-automation-iot-gateways',
        image: IotPng,
        backgroundImage: '/images/bg/industry/iotBg.png',
        hero: {
            headline: "Smart Edge Software for Industrial Gateways & IoT Systems",
            subtext: "From protocol stacks to cloud-ready firmware, we enable secure, connected infrastructure.",
            cta: "Book a Strategy Call",
        },
        intro: `IoT gateways and industrial automation systems demand robust firmware, reliable connectivity, and long lifecycle support. We help OEMs and system integrators build edge-ready platforms that bridge industrial protocols with modern cloud services.`,
        coreChallenges: [
            "Interoperability across Modbus, MQTT, RS485, CAN",
            "Remote management of field-deployed gateways",
            "Firmware stability in harsh environments",
            "Secure OTA without service interruption",
        ],
        solutions: {
            "Protocol & Driver Development": [
                "Modbus, MQTT, RS485, CAN integration",
                "SPI, I2C, GPIO drivers for edge devices",
            ],
            "Device Management & Updates": [
                "OTA with rollback and monitoring",
                "Remote diagnostics and logs",
            ],
            "Cloud & Edge Integration": [
                "Secure connectivity with AWS, Azure IoT, GCP",
                "Data compression and redundancy",
            ],
            "Resilience & Reliability": [
                "Long uptime support",
                "Hardened Linux images",
            ],
        },
        whyUs: [
            "Delivered IoT gateway firmware for energy monitoring & industrial telemetry",
            "Balanced security and performance for remote operations",
            "Strong track record with edge systems",
        ],
        caseStudy: "For an energy management company, we delivered a Linux-based gateway with secure Modbus-to-MQTT bridging, enabling real-time cloud monitoring of industrial equipment.",
        cta: {
            headline: "Let’s engineer smarter gateways for your IoT future.",
            actions: ["Schedule a Call", "Explore IoT Case Studies"],
        },
    },
    {
        id: 'aerospace-remote-sensing-systems',
        image: AerospaceJpg,
        backgroundImage: '/images/bg/industry/aerospaceBg.png',
        hero: {
            headline: "Mission-Critical Embedded Software for Aerospace & Remote Sensing",
            subtext: "Real-time, secure, and field-tested solutions for airborne and satellite systems.",
            cta: "Book a Strategy Call",
        },
        intro: `Aerospace and remote sensing applications demand precision, low latency, and robustness in extreme environments. Our team builds BSPs, data acquisition pipelines, and real-time telemetry systems that can withstand long-lifecycle deployments.`,
        coreChallenges: [
            "Real-time acquisition from multiple sensors",
            "High-bandwidth data processing with low latency",
            "Secure boot and tamper-proof systems",
            "Long-lifecycle software maintainability",
        ],
        solutions: {
            "BSP & Secure Boot": [
                "Custom BSPs for airborne sensor boards",
                "Secure boot, signing flows, OP-TEE integration",
            ],
            "Real-Time Image/Video Processing": [
                "GStreamer-based acquisition pipelines",
                "Burst-mode capture & compression",
            ],
            "Telemetry & Data Management": [
                "Redundant data logging",
                "Edge analytics & error recovery",
            ],
            "Long-Lifecycle Optimization": [
                "Hardened Linux images",
                "Maintainable architectures for 10+ years",
            ],
        },
        whyUs: [
            "Proven work with aerospace labs and remote sensing OEMs",
            "Specialization in real-time and fault-tolerant systems",
            "Expertise in security and long-lifecycle readiness",
        ],
        caseStudy: "We partnered with a university aerospace lab to build a secure BSP with real-time telemetry capture and optimized video pipelines, enabling successful drone-based data collection missions.",
        cta: {
            headline: "Build mission-ready aerospace systems with confidence.",
            actions: ["Schedule a Call", "See Aerospace Case Studies"],
        },
    }
];

const IndustryInfo = ({ meta }) => {

    const [metaId, setMetaId] = useState<string | null>(null);
    const router = useRouter();
    const { id } = useParams() as { id: string };
    const data = industryData?.find((item, idx) => {
        if (item?.id === id) {
            return item;
        }
    });
    useEffect(() => {
        if (id !== null) {
            const found = industryData.find(item => item.id === id);
            if (found) {
                setMetaId(found.id);
            }
        } else {
            setMetaId(null);
        }
    }, [id]);

    const actionRoutes = {
        "Schedule a Call": "/contact-us",
        "See Our Case Studies": "/case-study",
        "Schedule a Discovery Call": "/contact-us",
        "View Broadcast Case Studies": "/case-study",
        "Explore IoT Case Studies": "/case-study",
        "See Aerospace Case Studies": "/case-study",
    };

    return (
        <div>
            <div>
                {/* Hero Section */}
                <section className='relative bg-no-repeat bg-cover py-28 lg:py-64' style={{ backgroundImage: `url(${data?.backgroundImage})` }} >
                    <div className='absolute bg-[#0e191eb3] top-0 size-full z-0'></div>
                    <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 space-y-4'>
                        <p className='text-sm md:text-lg text-white flex flex-wrap items-center gap-4 justify-center'><Link href={'/'}>Home</Link> <RiArrowRightSLine className='text-primary text-2xl' /> <Link href={'/industries'}>Industry</Link><RiArrowRightSLine className='text-primary text-2xl' />{data?.id}</p>
                        <h2 className='text-2xl md:text-5xl xl:text-[50px] font-normal text-white leading-tight text-center pb-4'>{data?.hero?.headline}</h2>
                        <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'>{data?.hero?.subtext}</p>
                        {/* <a
                                href="#strategy-call"
                                className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-md text-lg transition"
                            >
                                {data?.hero?.cta}
                            </a> */}
                    </div>
                </section>
                {/* Intro */}
                <section className="bg-gradient-to-br from-white to-[#f0f7ff] py-20">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-xl md:text-3xl font-semibold mb-4">
                                Industry Insight
                            </h2>
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                {data?.intro}
                            </p>
                            <Button onClick={() => router.push('/contact-us')} variant="default" className="w-full sm:w-fit h-12">Book a Strategy Call</Button>
                        </div>
                        {/* Image */}
                        <div className="relative size-full rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={data?.image || ''}
                                alt={'image'}
                                className="w-full object-cover"
                                priority
                                width={1920}
                                height={1080}
                                loading="eager"
                                quality={100}
                            />
                        </div>
                    </div>
                </section>
                {/* Core Challenges */}
                <section className="bg-white py-16">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                            Core Challenges
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {data?.coreChallenges?.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex flex-col min-[410px]:flex-row min-[410px]:items-center gap-2 md:gap-4 bg-[#F0F6FF] border border-[#3078FB] rounded-lg p-5 shadow-sm hover:shadow-md transition duration-300"
                                >
                                    <IoCheckmarkDoneSharp className='text-primary text-xl' />
                                    <span className="text-gray-800 text-sm md:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                {/* Solutions */}
                <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-16">
                            Our Solutions
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {data?.solutions &&
                                Object.entries(data?.solutions).map(([title, items], index) => (
                                    <div
                                        key={index}
                                        className="relative bg-white/60 backdrop-blur-md border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="absolute top-0 left-0">
                                            <div className="bg-gradient-to-b from-[#3078FB] to-[#174AA0] text-white text-xs font-bold px-3 py-1 rounded-tr-md rounded-bl-md shadow-sm">
                                                {`Solution ${index + 1}`}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-5 pt-4">
                                            {title}
                                        </h3>
                                        <ul className="space-y-3">
                                            {items.map((point, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start text-gray-700 text-sm md:text-base"
                                                >
                                                    <div className="mt-1 mr-3">
                                                        <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#3078FB] to-[#174AA0] rounded-full"></div>
                                                    </div>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
                {/* Why Choose Us */}
                <section className="relative py-16 bg-gradient-to-br from-white to-gray-50 px-6 overflow-hidden">
                    <div className="max-w-[1400px] mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 relative inline-block">
                            Why eByteLogic
                            <span className="block h-1 w-16 bg-[#3078FB] mt-2 mx-auto rounded-full"></span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-8">
                                {data?.whyUs?.map((reason, idx) => (
                                    <div
                                        key={idx}
                                        className="relative bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-wrap items-center gap-4"
                                    >
                                        <span className="absolute top-0 right-0 bg-[#3078FB] text-white text-xs px-3 py-1 rounded-bl-xl shadow-sm z-10">
                                            #{idx + 1}
                                        </span>
                                        <div className="w-10 h-10 flex items-center justify-center bg-[#EAF2FF] text-[#3078FB] rounded-full text-xl flex-shrink-0">
                                            ✓
                                        </div>
                                        <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                                            {reason}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <Image src={EbytelogicPng} alt='ebytelogic' height={340} className='rounded-xl' />
                        </div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#3078FB]/10 rounded-full blur-3xl pointer-events-none"></div>
                </section>
                {/* Case Study */}
                <section className="relative py-16 bg-gradient-to-tr from-white to-[#d6e5ff] overflow-hidden">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-12">
                        <div className="hidden md:flex text-[#3078FB]/20 text-[192px] font-serif select-none leading-none -translate-y-12">
                            “
                        </div>
                        <div className="relative bg-white rounded-3xl shadow p-6 md:p-20 max-w-3xl border-l-8 border-[#3078FB]">
                            <h2 className="text-2xl md:text-4xl font-extrabold text-[#174AA0] mb-4 md:mb-8 tracking-wide drop-shadow-sm">
                                Case-in-Point
                            </h2>
                            <p className="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed font-serif italic tracking-wide">
                                {data?.caseStudy}
                            </p>
                            <div className="mt-10 w-28 h-1 rounded-full bg-gradient-to-r from-[#3078FB] to-[#174AA0] shadow-lg"></div>
                            <span className="absolute -top-8 right-10 text-[#3078FB] font-bold text-sm uppercase tracking-widest bg-[#e1eaff] px-3 py-1 rounded-full shadow-lg select-none">
                                Quote
                            </span>
                        </div>
                        <div className="hidden md:flex text-[#3078FB]/20 text-[192px] font-serif select-none leading-none -translate-y-12 rotate-180">
                            ”
                        </div>
                    </div>
                </section>
                {/* Final CTA */}
                <section className="relative py-16 bg-[url('/images/industry.webp')] bg-cover bg-center bg-fixed bg-no-repeat">
                    <div className='absolute bg-[#0e191eb3] top-0 size-full z-0'></div>
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center relative z-10">
                        <h1 className="text-2xl sm:text-[30px] font-semibold leading-tight capitalize mb-8 text-white">
                            {data?.cta?.headline}
                        </h1>
                        <div className="flex flex-wrap justify-center gap-4">
                            {data?.cta?.actions?.map((action, index) => (
                                <Button
                                    key={index}
                                    onClick={() => router.push(actionRoutes[action] || '/')}
                                    className="h-12 w-full sm:w-fit !bg-white !text-primary hover:!bg-primary hover:!text-white"
                                >
                                    {action}
                                </Button>
                            ))}
                        </div>
                    </div>
                </section>
            </div >
        </div >
    );
};

export default IndustryInfo;
