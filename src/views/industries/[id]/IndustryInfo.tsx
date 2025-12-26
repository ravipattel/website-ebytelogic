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
import TelecomPng from '@/src/assets/images/home/industry/telecom.png';
import IotPng from '@/src/assets/images/industry/industryIot.png'
import AerospaceJpg from '@/src/assets/images/industry/industryAerospace.png'

const industryData = [
    {
        id: 'smart-displays-and-hmis',
        breadCrumb: 'Smart Displays & HMIs',
        image: wearablesPng,
        backgroundImage: '/images/bg/industry/wearablesBg.png',
        hero: {
            headline: "Smart Display & HMI Software Built for Performance and Usability",
            subtext: "From BSP bring-up to polished user interfaces, we engineer responsive, stable, and visually rich HMI software for smart displays used in industrial, automotive, and connected devices.",
            cta: "Book a Strategy Call",
        },
        intro: `Smart displays and HMIs are the primary interaction layer between users and complex systems. Whether deployed in industrial equipment, vehicles, kiosks, or control panels, these systems must deliver <span class="font-semibold">fast boot times, smooth UI performance, and long-term stability.</span> <br/><br/>Product teams often struggle to align hardware capabilities with UI expectations under tight timelines.<br/>eByteLogic helps teams deliver <span class="font-semibold">production-ready HMI platforms</span> that feel responsive, reliable, and intuitive — right from first boot.`,
        subCoreText: "Smart display and HMI teams commonly face:",
        coreText: `These challenges directly impact <span class="font-semibold">user experience, acceptance testing, and product perception</span>.`,
        coreChallenges: [
            "Slow boot times and delayed UI availability",
            "UI lag or frame drops on resource-constrained hardware",
            "Display, touch, and multi-resolution integration issues",
            "Instability caused by poor BSP–UI alignment",
        ],
        solutions: 
            [
            {
                solutionTitle: 'Display & Touch BSP Bring-Up',
                solutionDescription: 'Stable hardware foundations for HMI platforms.',
                solutionItems: [
                    "LCD, HDMI, MIPI-DSI display integration",
                    "Touch controller driver development and tuning",
                    "Device tree and kernel configuration"
                ]
            },
            {
                solutionTitle: 'Qt & Embedded UI Development',
                solutionDescription: 'Responsive interfaces designed for embedded systems.',
                solutionItems: [
                    "Qt Widgets and QML-based UI development",
                    "Performance optimization for embedded GPUs",
                    "Multi-language and theming support"
                ]
            },
            {
                solutionTitle: 'Android UI & Framework Customization',
                solutionDescription: 'Tailored Android stacks for display-driven devices.',
                solutionItems: [
                    "Android HAL and framework customization",
                    "Boot animation, launcher, and system UI tuning",
                    "UI responsiveness and stability optimization"
                ]
            },
            {
                solutionTitle: 'Performance & Production Validation',
                solutionDescription: 'Ensuring smooth operation in real-world conditions.',
                solutionItems: [
                    "UI performance profiling and optimization",
                    "Memory, CPU, and GPU tuning",
                    "Long-duration stability and stress testing"
                ]
            }
            ],
            whyUsSubtext:'We engineer HMIs that are not just functional — but <span class="font-semibold">pleasant, predictable, and production-ready</span>.',
        whyUs: [
            "Extensive experience across industrial, automotive, and consumer HMI platforms",
            "Strong alignment between BSP, graphics stack, and UI layers",
            "Proven ability to deliver smooth, fast, and stable interfaces on embedded hardware",
        ],
        caseStudy: "We helped a smart display platform achieve faster boot-to-UI times and smoother touch responsiveness by aligning BSP optimization with Qt-based UI performance tuning.",
        cta: {
            headline: "Build Smart Displays That Feel as Good as They Look",
            ctaSubtext:`Whether you’re developing a new HMI platform or improving responsiveness in an existing product, our team partners with you to deliver <span class="font-semibold">high-quality, reliable smart display software.</span>`,
            actions: ["Schedule a Discovery Call", "See Our Case Studies"],
        },
    },
    {
        id: 'edge-ai-vision-systems',
        breadCrumb: 'Edge AI & Vision Systems',
        image: MotherBoardPng,
        backgroundImage: '/images/bg/industry/semiconductorBg.png',
        hero: {
            headline: "Edge AI and Vision Software Built for Real-Time Performance",
            subtext: "From camera bring-up to low-latency video pipelines, we engineer high-performance edge vision systems designed for real-time inference, reliability, and deployment at scale.",
            cta: "Book a Strategy Call",
        },
        intro: `Edge AI and vision systems operate under <span class='font-semibold'>strict latency, throughput, and power constraints</span>. Whether used in robotics, drones, industrial inspection, or smart infrastructure, these systems must capture, process, and respond to visual data in real time.<br/><br/>Product teams face challenges integrating cameras, optimizing pipelines, and balancing performance with power efficiency.<br/>eByteLogic helps teams build <span class="font-semibold">production-ready edge vision platforms</span> that move from prototype to deployment with confidence.`,
        subCoreText: "Edge AI and vision product teams commonly face:",
        coreText: `These issues directly affect <span class='font-semibold'>system accuracy, responsiveness, and field reliability</span>.`,
        coreChallenges: [
            "Camera and sensor bring-up complexity",
            "High end-to-end latency in video pipelines",
            "Inefficient use of hardware acceleration",
            "Thermal, power, and performance bottlenecks",
        ],
        solutions: 
            [
            {
                solutionTitle: 'Camera & Sensor Bring-Up',
                solutionDescription: 'Stable and optimized interfaces for vision hardware.',
                solutionItems: [
                    "MIPI-CSI camera integration",
                    "Sensor driver development and tuning",
                    "Device tree and kernel-level configuration"
                ]
            },
            {
                solutionTitle: 'Low-Latency Video Pipelines',
                solutionDescription: 'Optimized multimedia paths for real-time processing.',
                solutionItems: [
                    "GStreamer and FFmpeg pipeline development",
                    "Hardware-accelerated encoding/decoding",
                    "End-to-end latency optimization"
                ]
            },
            {
                solutionTitle: 'Hardware Acceleration & Platform Optimization',
                solutionDescription: 'Efficient use of edge compute resources.',
                solutionItems: [
                    "GPU, VPU, and ISP integration",
                    "Zero-copy buffer handling",
                    "Platform tuning for Jetson, i.MX, Rockchip, and similar SoCs"
                ]
            },
            {
                solutionTitle: 'System Validation & Deployment Readiness',
                solutionDescription: 'Built for real-world edge deployment.',
                solutionItems: [
                    "Performance and stress testing",
                    "Power and thermal profiling",
                    "Long-duration stability validation"
                ]
            }
            ],
            whyUsSubtext:`We engineer edge vision platforms where <span class='font-semibold'>milliseconds matter and failures aren’t acceptable</span>.`,
        whyUs: [
            "Hands-on experience with edge vision and real-time video systems",
            "Deep expertise in BSP, drivers, and multimedia frameworks",
            "Proven ability to reduce latency and stabilize complex pipelines",
        ],
        caseStudy: "We helped an edge vision platform reduce glass-to-glass latency to under 100ms by optimizing camera capture, hardware-accelerated encoding, and real-time display pipelines on an embedded SoC.",
        cta: {
            headline: "Build Edge Vision Systems That Respond in Real Time",
            ctaSubtext:`Whether you’re building an AI-powered camera, robotics platform, or inspection system, we partner with your team to deliver <span class="font-semibold">low-latency, reliable, production-ready edge vision software</span>.`,
            actions: ["Schedule a Discovery Call", "See Our Case Studies"],
        },
    },
    {
        id: 'networking-and-telecom-gateways',
        breadCrumb: 'Networking & Telecom Gateways',
        image: TelecomPng,
        backgroundImage: '/images/bg/industry/firelineBg.png',
        hero: {
            headline: "Reliable Networking & Telecom Gateway Software Built for Always-On Operation",
            subtext: "From Linux BSPs to protocol handling and OTA updates, we engineer robust, secure, and high-availability software for networking and telecom gateways deployed in the field.",
            cta: "Book a Strategy Call",
        },
        intro: `Networking and telecom gateways operate as <span class="font-semibold">critical infrastructure</span> — expected to run continuously, handle fluctuating network conditions, and recover gracefully from failures. <br/><br/>Product teams must integrate diverse hardware, support multiple connectivity standards, and ensure remote manageability — all while maintaining <span class="font-semibold">uptime, security, and performance</span>.<br/>eByteLogic helps gateway OEMs deliver <span class="font-semibold">production-ready platforms</span> that are stable, maintainable, and scalable from pilot deployments to large field rollouts.`,
        subCoreText: "Gateway and telecom product teams commonly face:",
        coreText: `These issues lead to <span class="font-semibold">service interruptions, costly field support, and customer dissatisfaction.</span>`,
        coreChallenges: [
            "Complex BSP bring-up across SoCs and carrier boards",
            "Unstable networking stacks and protocol edge cases",
            "Risky firmware updates on deployed devices",
            "Performance degradation under sustained load",
        ],
        solutions: 
            [
            {
                solutionTitle: 'Gateway BSP & Platform Bring-Up',
                solutionDescription: 'Stable foundations for networking and telecom devices.',
                solutionItems: [
                    "Linux BSP development using Yocto or Buildroot",
                    "Board bring-up for custom gateway hardware and SoMs",
                    "Bootloader customization and startup optimization"
                ]
            },
            {
                solutionTitle: 'Networking & Protocol Integration',
                solutionDescription: 'Reliable data handling across wired and wireless interfaces.',
                solutionItems: [
                    "Ethernet, Wi-Fi, cellular modem integration",
                    "UART, USB, SPI-based communication interfaces",
                    "Protocol handling and data routing logic"
                ]
            },
            {
                solutionTitle: 'OTA, Security & Lifecycle Management',
                solutionDescription: 'Designed for long-term field deployment.',
                solutionItems: [
                    "Secure OTA firmware update mechanisms",
                    "Version control, rollback, and recovery strategies",
                    "Secure boot and system hardening support"
                ]
            },
            {
                solutionTitle: 'Performance, Stability & Stress Validation',
                solutionDescription: 'Built to run continuously under real-world conditions.',
                solutionItems: [
                    "Network throughput and stress testing",
                    "CPU, memory, and resource usage profiling",
                    "Long-duration soak testing for reliability"
                ]
            }
            ],
            whyUsSubtext:`We design gateway software with the assumption that <span class="font-semibold">downtime is unacceptable.</span>`,
        whyUs: [
            "Strong experience with networking and telecom-grade embedded platforms",
            "Deep BSP, driver, and system-level debugging expertise",
            "Engineering focus on uptime, recoverability, and maintainability",
        ],
        caseStudy: "We helped a networking device manufacturer stabilize their Linux gateway platform, integrate cellular modems, and implement secure OTA updates — enabling reliable remote deployment and lifecycle management.",
        cta: {
            headline: "Build Gateways That Stay Online and Scale Confidently",
            ctaSubtext:`Whether you’re developing a new telecom gateway or stabilizing an existing networking platform, our team partners with you to deliver <span class="font-semibold">secure, reliable, and production-ready gateway software</span>.`,
            actions: ["Schedule a Discovery Call", "See Our Case Studies"],
        },
    },
    {
        id: 'media-broadcasting-multimedia',
        breadCrumb: 'Media & Broadcasting Multimedia',
        image: MediaPng,
        backgroundImage: '/images/bg/industry/multimediaBg.png',
        hero: {
            headline: "Broadcast-Grade Media Software Engineered for Precision and Reliability",
            subtext: "From low-latency streaming pipelines to broadcast-compliant AV workflows, we engineer high-performance multimedia software for professional video systems where timing, sync, and stability are non-negotiable.",
            cta: "Book a Strategy Call",
        },
        intro: `Media and broadcast systems operate under <span class="font-semibold">extreme performance expectations</span> — real-time delivery, frame-accurate sync, and uninterrupted operation across complex hardware and network environments. <br/> <br/>Broadcast OEMs and MediaTech product teams must integrate new protocols, optimize latency, and meet strict customer and compliance requirements — often on tight schedules.<br/>eByteLogic helps teams deliver <span class="font-semibold">production-ready broadcast and Pro AV platforms</span> that perform reliably in live and mission-critical environments.`,
        subCoreText: "Media, broadcast, and Pro AV teams frequently face:",
        coreText: `These challenges directly impact <span class="font-semibold">viewer experience, customer acceptance, and commercial deployment.</span>`,
        coreChallenges: [
            "End-to-end latency and A/V sync issues",
            "Complex protocol integration across networks",
            "Unstable streaming under real-world network conditions",
            "Compliance requirements such as closed captioning",
        ],
        solutions: 
            [
            {
                solutionTitle: 'Multimedia Framework Customization',
                solutionDescription: 'Tailored media pipelines built for real-time performance.',
                solutionItems: [
                    "GStreamer and FFmpeg pipeline development",
                    "Custom plugin and element integration",
                    "Performance tuning for low-latency encoding and decoding"
                ]
            },
            {
                solutionTitle: 'Streaming Protocol Engineering',
                solutionDescription: 'Reliable media transport across local and global networks.',
                solutionItems: [
                    "NDI, RTP, RTSP, SRT, HLS, RTMP integration",
                    "Jitter, buffering, and packet-loss optimization",
                    "Secure and firewall-friendly streaming architectures"
                ]
            },
            {
                solutionTitle: 'A/V Synchronization & Compliance',
                solutionDescription: 'Precision tuning for broadcast-grade output.',
                solutionItems: [
                    "±10ms audio-video sync optimization",
                    "Timestamp correction and buffer management",
                    "LINE21 and CEA608/708 closed captioning support"
                ]
            },
            {
                solutionTitle: 'Hardware-Accelerated Media Processing',
                solutionDescription: 'Optimized pipelines leveraging embedded hardware acceleration.',
                solutionItems: [
                    "V4L2, VAAPI, NVDEC/NVENC integration",
                    "Zero-copy buffer handling to reduce CPU load",
                    "Platform optimization for i.MX, Rockchip, Jetson, and more"
                ]
            }
            ],
            whyUsSubtext:'We don’t just integrate media frameworks — we <span class="font-semibold">engineer deterministic, production-grade AV systems</span>.',
        whyUs: [
            "Proven expertise in broadcast, live streaming, and Pro AV systems",
            "Deep understanding of latency, sync, and protocol-level behavior",
            "Hands-on experience across SDI, HDMI, NDI, and IP-based workflows",
        ],
        caseStudy: "We helped a broadcast platform provider achieve ±10ms lip-sync accuracy in an SDI-based live playback system and integrated NDI streaming support, enabling them to meet strict customer and broadcast requirements.",
        cta: {
            headline: "Build Media Systems That Perform When It Matters Most",
            ctaSubtext:`Whether you’re developing a broadcast appliance, Pro AV platform, or live streaming solution, our team partners with you to deliver <span class="font-semibold">reliable, low-latency multimedia software built for real-world deployment.</span>`,
            actions: ["Schedule a Discovery Call", "See Our Case Studies"],
        },
    },
    {
        id: 'industrial-automation-iot-gateways',
        breadCrumb: 'Industrial Automation & IoT Gateways',
        image: IotPng,
        backgroundImage: '/images/bg/industry/iotBg.png',
        hero: {
            headline: "Automotive Infotainment Software Built for Performance, Safety, and Scale",
            subtext: `From Linux and Android BSPs to in-vehicle multimedia pipelines, we engineer robust infotainment and telematics software designed for long lifecycles, fast boot times, and reliable in-car experiences.`,
        },
        intro: `Modern vehicles are becoming <span class='font-semibold'>software-defined platforms</span>. Infotainment, telematics, digital clusters, and connected services must work seamlessly across displays, sensors, and networks — all while meeting strict automotive reliability expectations. <br/><br/>Automotive product teams face challenges integrating new SoCs, managing complex software stacks, and delivering <span class='font-semibold'>responsive, stable user experiences</span> under tight timelines.<br/>eByteLogic helps automotive teams deliver <span class='font-semibold'>production-ready infotainment and telematics platforms</span> that scale from prototype to vehicle deployment.`,
        subCoreText: "Automotive infotainment and telematics teams often struggle with:",
        coreText: `These issues directly affect <span class='font-semibold'>driver experience, validation timelines, and OEM acceptance.</span>`,
        coreChallenges: [
            "Slow boot times and unstable startup sequences",
            "Complex Android and Linux BSP customization",
            "Audio/video latency, sync, and performance issues",
            "Multi-display and touch interface integration challenges",
        ],
        solutions: 
        [
        {
            solutionTitle: 'Automotive BSP & Platform Bring-Up',
            solutionDescription: 'Stable board-level software for in-vehicle platforms.',
            solutionItems: [
                "Linux and Android BSP development",
                "U-Boot customization and fast boot optimization",
                "Device driver integration for displays, cameras, audio, and connectivity"
            ]
        },
        {
            solutionTitle: 'Android Automotive & Framework Customization',
            solutionDescription: 'Tailored Android stacks for automotive use cases.',
            solutionItems: [
                "Android HAL and framework customization",
                "Boot animation, launcher, and system service tuning",
                "Performance and stability enhancements for long-running systems"
            ]
        },
        {
            solutionTitle: 'Infotainment UI & Multimedia Integration',
            solutionDescription: 'Responsive and reliable in-car user experiences.',
            solutionItems: [
                "Qt and Android-based HMI development",
                "Audio/video pipeline integration and tuning",
                "Display, touch, and multi-screen support"
            ]
        },
        {
            solutionTitle: 'Validation & Production Readiness',
            solutionDescription: 'Automotive-grade validation before vehicle integration.',
            solutionItems: [
                "End-to-end system testing",
                "Stress, performance, and long-duration validation",
                "Platform stabilization before SOP milestones"
            ]
        }
        ],
        whyUsSubtext:`We engineer infotainment software with the mindset that <span class="font-semibold">every system must perform reliably on every drive</span>.`,
        whyUs: [
            "Hands-on experience with automotive infotainment and telematics platforms",
            "Deep expertise across Qualcomm, NXP, TI, and other automotive SoCs",
            "Strong understanding of boot-time, multimedia, and stability requirements",
        ],
        caseStudy: "We helped an automotive display and telematics module provider bring up Linux and Android software, optimize boot time, and stabilize audio/video pipelines, enabling faster platform validation and OEM readiness. ",
        cta: {
            headline: "Build Automotive Platforms Ready for the Road",
            ctaSubtext:`Whether you’re developing a new infotainment platform or stabilizing an existing telematics system, we partner with your team to deliver <span class="font-semibold">reliable, production-ready automotive software.</span>`,
            actions: ["Schedule a Discovery Call", "See Our Case Studies"],
        },
    },
    {
        id: 'industrial-automation-iiot',
        breadCrumb: 'Industrial Automation & IIoT',
        image: AerospaceJpg,
        backgroundImage: '/images/bg/industry/aerospaceBg.png',
        hero: {
            headline: "Reliable Industrial Automation Software Built for the Real World",
            subtext: "From Linux BSPs to industrial communication stacks, we engineer robust, long-lifecycle software for controllers, gateways, and IIoT devices operating in mission-critical environments.",
            cta: "Book a Strategy Call",
        },
        intro: `Industrial automation and IIoT systems must operate <span class="font-semibold">continuously, predictably, and safely</span> — often in harsh environments with limited maintenance windows.<br/><br/> Product teams face increasing pressure to integrate new hardware, support modern connectivity, and meet aggressive deployment timelines <span class="font-semibold">without compromising reliability</span>.<br/> eByteLogic helps industrial OEMs and solution providers deliver <span class="font-semibold">stable, field-ready systems</span> that scale from pilot to production.`,
        subCoreText: "Industrial and IIoT product teams commonly encounter:",
        coreText: `These challenges lead to <span class="font-semibold">downtime, delayed deployments, and costly field fixes.</span>`,
        coreChallenges: [
            "Unstable BSPs and driver issues during board bring-up",
            "Complex peripheral integration (CAN, Ethernet, GPIO, sensors)",
            "Firmware upgrade risks in deployed systems",
            "Performance and reliability issues under continuous operation",
        ],
        solutions: 
            [
            {
                solutionTitle: 'Linux BSP & Board Bring-Up',
                solutionDescription: 'We accelerate hardware readiness with stable, production-grade BSPs.',
                solutionItems: [
                    "Yocto & Buildroot customization",
                    "Board bring-up for custom hardware and SoMs",
                    "Device tree configuration and peripheral validation"
                ]
            },
            {
                solutionTitle: 'Industrial Protocol & Interface Integration',
                solutionDescription: 'Reliable communication between devices, controllers, and gateways.',
                solutionItems: [
                    "CAN, Modbus, UART, SPI, I2C integration",
                    "Industrial Ethernet configuration",
                    "Sensor and actuator interfacing"
                ]
            },
            {
                solutionTitle: 'Firmware Stability & OTA Enablement',
                solutionDescription: 'Designed for long-running systems deployed in the field.',
                solutionItems: [
                    "Robust firmware architecture",
                    "Secure OTA update mechanisms",
                    "Safe rollback and version management"
                ]
            },
            {
                solutionTitle: 'System Validation & Production Readiness',
                solutionDescription: 'We help ensure your system is ready before it reaches the field.',
                solutionItems: [
                    "Hardware–software integration testing",
                    "Long-duration soak and stress testing",
                    "Performance, power, and reliability validation"
                ]
            }
            ],
            whyUsSubtext:'We understand that in industrial systems, failure is not an option.',
        whyUs: [
            "Proven experience in industrial controllers, gateways, and field devices",
            "Strong BSP and driver-level expertise across TI, NXP, and other industrial SoCs",
            "Engineering approach focused on uptime, predictability, and maintainability",
        ],
        caseStudy: "We helped an industrial OEM complete Yocto customization and CAN-based firmware upgrade implementation for a fire-safety control system, enabling stable field deployment and simplified future updates.",
        cta: {
            headline: "Build Industrial Systems You Can Deploy with Confidence.",
            ctaSubtext:`Whether you’re bringing up new industrial hardware or stabilizing an existing platform, our team works as an extension of your engineering group to deliver <span class="font-semibold">reliable, production-ready automation software</span>.`,
            actions: ["Schedule a Discovery Call", "See Our Case Studies"],
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
                        <p className='text-sm md:text-lg text-white flex flex-wrap items-center gap-4 justify-center'><Link href={'/'}>Home</Link> <RiArrowRightSLine className='text-primary text-2xl' /> <Link href={'/industries'}>Industry</Link><RiArrowRightSLine className='text-primary text-2xl' />{data?.breadCrumb}</p>
                        <h2 className='text-2xl md:text-5xl xl:text-[50px] font-normal text-white leading-tight text-center pb-4'>{data?.hero?.headline}</h2>
                        <p className='text-sm md:text-lg text-white text-center flex items-center gap-4 justify-center' dangerouslySetInnerHTML={{ __html: data?.hero?.subtext || '' }} />
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
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: data?.intro || '' }} />
                            <Button onClick={() => router.push('/contact-us')} variant="default" className="w-full sm:w-fit h-12">Book a Strategy Call</Button>
                        </div>
                        {/* Image */}
                        <div className="relative size-full rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={data?.image || ''}
                                alt={'image'}
                                className="w-full h-full object-cover"
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
                        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
                            Core Challenges
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center mb-8">{data?.subCoreText}</p>
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
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center mt-8" dangerouslySetInnerHTML={{ __html: data?.coreText || '' }} />
                    </div>
                </section>
                {/* Solutions */}
                <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-16">
                            Our Solutions
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                                {data?.solutions?.map((solution, index) => (
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
                                            {solution?.solutionTitle}
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">{solution?.solutionDescription}</p>
                                        <ul className="space-y-3">
                                            {solution?.solutionItems?.map((point, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center gap-3 text-gray-700 text-sm md:text-base"
                                                >
                                                    <div>
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
                        <p className="text-gray-600 text-sm md:text-base mb-8" dangerouslySetInnerHTML={{ __html: data?.whyUsSubtext || '' }} />
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div className="space-y-8">
                                {data?.whyUs?.map((reason, idx) => (
                                    <div
                                        key={idx}
                                        className="relative bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-wrap sm:flex-nowrap items-center gap-4"
                                    >
                                        <span className="absolute top-0 right-0 bg-[#3078FB] text-white text-xs px-3 py-1 rounded-bl-xl shadow-sm z-10">
                                            #{idx + 1}
                                        </span>
                                        <div className="w-10 h-10 flex items-center justify-center bg-[#EAF2FF] text-[#3078FB] rounded-full text-xl flex-shrink-0">
                                            ✓
                                        </div>
                                        <p className="text-gray-800 text-sm md:text-base leading-relaxed max-w-xl text-left">
                                            {reason}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <Image src={EbytelogicPng} alt='ebytelogic' height={340} className='rounded-xl mx-auto' />
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
                        <h1 className="text-2xl sm:text-[30px] font-semibold leading-tight capitalize mb-4 text-white">
                            {data?.cta?.headline}
                        </h1>
                        <p className="text-white text-sm md:text-base max-w-3xl mx-auto text-center leading-relaxed tracking-wide mb-8" dangerouslySetInnerHTML={{ __html: data?.cta?.ctaSubtext || ''}} />
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
