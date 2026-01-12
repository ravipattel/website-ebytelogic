'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
import { BiTerminal } from 'react-icons/bi';
import { PiDiscDuotone } from 'react-icons/pi';
import { GoArrowRight } from 'react-icons/go';
import { HiOutlineRefresh } from 'react-icons/hi';
import { GrMultimedia, GrValidate } from "react-icons/gr";
import { CgPullClear } from 'react-icons/cg';
import { IoSettings, IoTimeOutline } from 'react-icons/io5';
import { SiFramework } from "react-icons/si";
import { MdAttachMoney, MdOutlineTipsAndUpdates } from 'react-icons/md';
import { RiArrowRightSLine, RiUserCommunityLine } from 'react-icons/ri';
import { FaCloud, FaLayerGroup, FaMicrochip, FaShieldAlt, FaSyncAlt } from 'react-icons/fa';
import { HiMiniShieldCheck, HiMiniUserGroup, HiOutlineDevicePhoneMobile } from "react-icons/hi2";

import NotFound from '@/app/not-found';
import Button from '@/src/components/Button';
import FAQAccordion from '@/src/components/Faq';

import OverviewJPg from '@/src/assets/images/services/overview.jpg'
import EmbeddedDevelopmentJPg from '@/src/assets/images/services/embedded-development.png'
import QaJPg from '@/src/assets/images/services/qa.png'
import FrameworkWebp from '@/src/assets/images/services/multimedia.png'
import LinuxPng from '@/src/assets/images/services/linux.png'
import useCaseEmbedded from '@/src/assets/images/services/useCaseEmbedded.png'
import LinuxUsecase from '@/src/assets/images/services/linuxUsecase.png'
import LinuxWhy from '@/src/assets/images/services/linuxWhy.png'
import StreamingWhy from '@/src/assets/images/services/streamingWhy.png'
import FaqHomePng from '@/src/assets/images/home/faqHome.png'

const serviceData = [
    {
        bgImg: '/images/bg/serviceBg/embeddedAppBg.png',
        id: "embedded-application-development",
        category: "Embedded Application Development Services",
        pathText: "Embedded Application Development",
        tagLine: "C/C++, Qt, Python | Low-Level to UI | Real-Time Performance",
        imageName: EmbeddedDevelopmentJPg,
        overview:
            ["Develop high-performance, secure, and intuitive embedded software applications that bring your hardware to life. At eByteLogic, we bridge the gap between complex hardware logic and the end-user experience, delivering stable applications tailored for the most demanding environments."],
        btnPrimaryText: "Get in Touch",
        btnSecondaryText: "View Case Studies",
        capabilitySections: [
            {
                title: "Full-Stack Embedded Apps Development Services",
                description:
                    "The application layer is the brain of your device. As an embedded iot app development company, we support your team in designing, building, and running innovative products from the ground up.",
                capabilities: [
                    {
                        title: "Custom HMI & UI Development",
                        desc:
                            "We create seamless user interfaces using Qt, C++, and Python that ensure a high-quality user experience even on resource-constrained hardware.",
                        points: [
                            "<span class='font-semibold'>Performance First:</span> Optimized graphics and multi-threaded logic.",
                            "<span class='font-semibold'>Hardware Interaction:</span> Deep integration with sensors, actuators, and communication ports.",
                        ],
                    },
                    {
                        title: "Industrial Automation Solutions",
                        desc:
                            "Specializing in the application of embedded system in industrial automation, we build rugged software for control panels, monitoring systems, and automated manufacturing lines.",
                        points: [
                            "Real-time processing and low-latency response.",
                            "Protocol integration (CAN, Modbus, Serial) for mission-critical reliability.",
                        ],
                    },
                ],
            },
        ],
        layeredCardTitle: "Our Layered Approach to <span class='text-primary'>Embedded Software</span> Applications",
        layeredCardDescription: "Building a robust application requires a clear understanding of the layers beneath it. We ensure your application is perfectly tuned to the underlying system:",
        layeredCard: [
            {
                id: 1,
                title: "Logic & Processing",
                description:
                    "We develop the core application logic tailored to your hardware and OS, ensuring optimal performance.",
                icon: <HiOutlineRefresh />,
                theme: {
                    bg: "bg-orange-50",
                    text: "text-orange-600",
                    hoverBg: "group-hover:bg-orange-600",
                    hoverText: "group-hover:text-white",
                    glow: "group-hover:shadow-orange-200/60",
                    lineColor: "#f54a00"
                },
            },
            {
                id: 2,
                title: "Connectivity & Cloud",
                description:
                    "Secure embedded system application development services that include MQTT, REST APIs, and device-to-cloud synchronization.",
                icon: <FaCloud />,
                theme: {
                    bg: "bg-purple-50",
                    text: "text-purple-600",
                    hoverBg: "group-hover:bg-purple-600",
                    hoverText: "group-hover:text-white",
                    glow: "group-hover:shadow-purple-200/60",
                    lineColor: "#4f39f6"
                },
            },
            {
                id: 3,
                title: "Framework Integration:",
                description:
                    "Whether you are using Embedded Linux (Yocto/Buildroot), Android, or RTOS, we adapt the software layers to your specific speed and power requirements.",
                icon: <SiFramework />,
                theme: {
                    bg: "bg-green-50",
                    text: "text-green-600",
                    hoverBg: "group-hover:bg-green-600",
                    hoverText: "group-hover:text-white",
                    glow: "group-hover:shadow-green-200/60",
                    lineColor: "#00a63e"
                },
            },
        ],
        criticaltitle: "Our Design Philosophy for <span class='text-primary'>Robust</span> Systems",
        criticalRoles: [
            {
                title: "Secure by Design",
                desc:
                    "Cybersecurity is integrated into every stage of embedded application development. We perform risk assessments and implement secure communication protocols to protect your data and IP.",
                icon: HiOutlineDevicePhoneMobile,
            },
            {
                title: "Hardware Compatibility",
                desc:
                    "We don't believe in generic software. We adapt every line of code to your hardware choices: real-time capabilities, power usage profiles, and physical memory limitations.",
                icon: MdOutlineTipsAndUpdates,
            },
            {
                title: "Long-Term Maintenance",
                desc:
                    "Launching is just the beginning. We support your product lifecycle with regular updates, security patches, and feature enhancements to ensure your device stays competitive.",
                icon: HiMiniUserGroup,
            },
        ],
        useCaseImg: useCaseEmbedded,
        useCaseTitle: "Why Choose eByteLogic for Embedded Application Development?",
        useCaseDesc: "Choosing the right embedded iot app development company means finding a partner that understands hardware reality. Our expertise ensures:",
        useCases: [
            {
                title: "Hardware Abstraction",
                desc:
                    "Applications that are portable and scalable.",
            },
            {
                title: "Reliability",
                desc:
                    "Systems designed for 24/7 operation without memory leaks or crashes.",
            },
            {
                title: "Industrial Precision",
                desc:
                    "Specialized knowledge in the application of embedded system in industrial automation.",
            },
        ],
        cta: [
            {
                ctaTitle: "Transform Your <span class='text-primary'>Device Vision</span> Into <span class='text-primary'>Reality</span>.",
                Ctadescription: "Don’t settle for generic software on specialized hardware. Partner with embedded software consultants who prioritize performance, security, and engineering clarity. Whether you are building the next generation of industrial panels or an innovative IoT device, our team is ready to accelerate your roadmap.",
                ctaButtonText: "Contact",
            }
        ],
        faqTitle: '<span class="text-primary">FAQ:</span> Embedded Application Development',
        faqs: [
            {
                q: "What is the difference between firmware and embedded application development?",
                a: "Firmware interacts directly with hardware components, while embedded application development focuses on high-level logic, user interfaces, and connectivity features that the end-user or system operator interacts with."
            },
            {
                q: "Do you provide embedded apps development services for both Linux and Android?",
                a: "Yes. We have extensive experience building applications for Embedded Linux (using Qt/C++), Android (HAL and App layer), and specialized RTOS environments."
            },
            {
                q: "How do you handle IoT connectivity?",
                a: "As an embedded iot app development company, we build secure, real-time connectivity into your apps using MQTT, WebSockets, or custom protocols to ensure stable data flow between your device and the cloud."
            },
        ]
    },
    {
        id: "embedded-bsp-development",
        bgImg: '/images/bg/serviceBg/linuxBsp.png',
        pathText: "Embedded BSP Development",
        imageName: LinuxPng,
        category: "Tailored BSP Development for Embedded Systems",
        tagLine: "Firmware | Linux BSP | Android BSP ",
        overview: ["Whether you need a ready-to-deploy foundation or a tailored BSP development approach for a specialized use case, eByteLogic provides the engineering expertise to bridge your hardware and software. We help hardware teams accelerate development, reduce integration risks, and ship production-grade products."],
        btnPrimaryText: "Get in Touch",
        btnSecondaryText: "View Case Studies",
        expertiseChip: "Expertise",
        expertiseTitle: "Our Embedded <span class='text-primary'>BSP Software</span> Expertise",
        embeddedExpertise: [
            {
                title: "Drivers",
                description:
                    "Custom device drivers optimized for performance, stability, and hardware abstraction.",
                icon: CgPullClear,
            },
            {
                title: "Firmware",
                description:
                    "Low-level firmware development for microcontrollers, SoCs, and real-time systems.",
                icon: IoSettings,
            },
            {
                title: "Linux / Android",
                description:
                    "BSP customization, kernel bring-up, HAL integration, and Android platform support.",
                icon: BiTerminal,
            },
        ],
        capabilitySections: [
            {
                title: "Comprehensive BSP Development Services",
                description:
                    "Building a successful hardware product requires more than just writing code; it demands a rock-solid foundation. We have experienced BSP developers that can support product teams across the full lifecycle of their hardware.",
                capabilities: [
                    {
                        title: "Custom BSP Development",
                        desc:
                            "We provide full-cycle BSP development tailored to your hardware and specific project requirements.",
                        points: [
                            "<span class='font-semibold'>System Integration:</span> Middleware integration, custom driver support, and performance optimization.",
                            "<span class='font-semibold'>Lifecycle Management:</span> Long-term maintenance and security updates for specialized embedded systems.",
                            "<span class='font-semibold'>Hardware Validation:</span> Ensuring your software stack fully leverages your custom carrier boards.",
                        ],
                    },
                    {
                        title: "Standard & Customized Reference BSPs",
                        desc:
                            "Need to move fast? We offer ready-to-use reference BSPs for Linux, Android, and RTOS. We can adapt these standard packages to your specific hardware, allowing for quick deployment and immediate integration into your product roadmap.",
                    },
                ],
            },
            {
                title: "Specific BSP Development for Your Operating System",
                description:
                    "Every project has unique demands. We provide specialized bsp development for embedded systems across the most reliable environments:",
                capabilities: [
                    {
                        title: "Linux BSP",
                        desc:
                            "With deep-domain expertise, we customize Linux-based embedded systems to meet unique device requirements using Yocto and Buildroot.",
                    },
                    {
                        title: "Android BSP",
                        desc:
                            "Our engineers develop production-grade Android BSPs for hardware platforms including NXP, Rockchip, and TI.",
                    },
                    {
                        title: "MCU & RTOS BSP",
                        desc:
                            "We configure and fine-tune Board Support Packages for microcontrollers, ensuring real-time performance and reliability.",
                    },
                ],
            },
        ],
        criticalRoles: [
            {
                title: "Device Drivers",
                desc:
                    "These essential components create the interface between the OS and the hardware, enabling access to the CPU, memory, and peripherals.",
                icon: FaMicrochip,
            },
            {
                title: "Partitioning & Updates",
                desc:
                    "Advanced partitioning with robust over-the-air (OTA) update features to keep your system secure and up-to-date.",
                icon: FaSyncAlt,
            },
            {
                title: "Cybersecurity",
                desc:
                    "Integrating mechanisms like Secure Boot and TrustZone (TEE) is crucial for safeguarding the system against unauthorized access.",
                icon: FaShieldAlt,
            },
            {
                title: "Additional Components",
                desc:
                    "Our work includes Bootloader development, Kernel customization, Hardware Abstraction Layers (HAL), and peripheral libraries.",
                icon: FaLayerGroup,
            },
        ],
        criticaltitle: "Critical <span class='text-primary'>Low-Level</span> Features",
        criticaldesc: "A professional BSP development project focuses on the core components that impact system stability and security:",
        useCaseImg: LinuxUsecase,
        useCaseTitle: 'Why <span class="text-primary">Tailored BSP</span> Development <span class="text-primary">Matters</span>',
        useCaseDesc: "A well-designed BSP is the critical link between your hardware and software. Choosing eByteLogic as your BSP developer provides several key advantages:",
        whyImg: LinuxWhy,
        useCases: [
            {
                title: "Hardware Abstraction",
                desc:
                    "Seamlessly hide hardware complexity from your application layer.",
            },
            {
                title: "Efficiency",
                desc:
                    "Every driver and kernel configuration is tuned for your specific power and performance targets.",
            },
            {
                title: "Reliability",
                desc:
                    "Production-tested code ensures 24/7 stability in regulated and industrial environments.",
            },
            {
                title: "Security",
                desc:
                    "Hardened foundations built to protect your intellectual property and user data.",
            }
        ],
        cta: [
            {
                ctaTitle: "Stop <span class='text-primary'>Struggling</span> with <span class='text-primary'>Low-Level</span> Stability.",
                Ctadescription: "Don't let BSP development bottlenecks delay your product launch. Partner with an engineering team that understands the reality of custom hardware. Whether you are facing boot-time issues, driver instability, or security risks, our BSP developers are ready to help you build a foundation you can launch with.",
                ctaButtonText: "Contact",
            }
        ],
        faqTitle: "<span class='text-primary'>FAQ:</span> Board Support Package Development",
        faqs: [
            {
                q: "What is a Board Support Package (BSP)?",
                a: "A BSP is a layer of software that contains the hardware-specific drivers and routines that allow an operating system to function on a specific hardware design."
            },
            {
                q: "Why is BSP development for embedded systems critical?",
                a: "Reference designs are rarely production-ready. Tailored BSP development ensures that your software stack is perfectly aligned with your custom hardware, optimizing for security, boot speed, and long-term stability."
            },
            {
                q: "Does your BSP development include device driver development?",
                a: "Absolutely. As a full-service BSP developer, we write and port drivers for peripherals, sensors, and communication interfaces to ensure the OS has full access to your board's capabilities."
            },
            {
                q: "Can you create a custom BSP for my specific hardware?",
                a: "Yes. We specialize in taking custom carrier boards and SoMs (System on Modules) and developing a fully functional, production-grade BSP from scratch."
            }
        ]
    },
    {
        bgImg: '/images/bg/serviceBg/multimedia.png',
        id: "multimedia-framework",
        imageName: FrameworkWebp,
        pathText: "Multimedia & Streaming Frameworks",
        category: "Embedded Multimedia Framework Development",
        tagLine: "Media Acquisition | Media Processing | Media Transmission",
        overview: ["Stability and latency are everything in video streaming. eByteLogic provides expert multimedia framework development services designed to handle complex audio-video pipelines on resource-constrained hardware. From broadcast-grade streaming appliances to remote imaging drones, we build the architectures that power real-time media."],
        btnPrimaryText: "Request a Multimedia Consultation",
        btnSecondaryText: "View Case Studies",
        capabilitySections: [
            {
                title: "Custom Multimedia Solutions for Real-Time Performance",
                description:
                    `Standard, "out-of-the-box" frameworks rarely meet the demands of professional hardware. We provide custom multimedia solutions tailored to your specific SoC (System on Chip) and use case, ensuring your device delivers broadcast-quality performance.`,
                capabilities: [
                    {
                        title: "Framework Customization & Tuning",
                        desc:
                            `We specialize in deep-level customization of industry-standard tools to maximize hardware acceleration.`,
                        points: [
                            "<span class='font-semibold'>GStreamer & FFmpeg Mastery:</span> Custom plugin development, pipeline optimization, and buffer management.",
                            "<span class='font-semibold'>Hardware Acceleration: </span> Seamless integration with VPU/GPU for H.264, H.265 (HEVC), and AV1 encoding/decoding.",
                            "<span class='font-semibold'>Clock & AV Sync:</span> Achieving deterministic ±10ms AV synchronization for professional-grade audio and video alignment.",
                        ],
                    },
                    {
                        title: "Protocol-Driven Streaming Pipelines",
                        desc:
                            "Our multimedia frameworks are engineered to handle modern streaming protocols with ultra-low latency:",
                        points: [
                            "<span class='font-semibold'>Professional Protocols: </span> Expert implementation of NDI, SRT, RIST, and SDI.",
                            "<span class='font-semibold'>Network Delivery: </span> Robust handling of RTP, RTMP, HLS, and WebRTC for diverse network conditions.",
                            "<span class='font-semibold'>Low-Latency Architecture:</span> Optimizing end-to-end pipelines for sub-100ms latency in mission-critical applications.",
                        ],
                    },
                ],
            },
        ],
        criticaltitle: "Our <span class='text-primary'>Approach</span> to <span class='text-primary'>Multimedia Framework</span> Development Services",
        criticaldesc: "Building a successful media product requires a multi-layered engineering approach:",
        criticalRoles: [
            {
                title: "Requirement Analysis",
                desc:
                    "We analyze your hardware capabilities (NXP, Rockchip, NVIDIA Jetson) to determine the best framework architecture.",
                icon: FaMicrochip,
            },
            {
                title: "Pipeline Design",
                desc:
                    "Designing embedded multimedia framework development strategies that prioritize low CPU overhead and high throughput.",
                icon: FaSyncAlt,
            },
            {
                title: "Integration & Testing",
                desc:
                    "Rigorous validation of AV sync, jitter, and frame-drop rates under heavy system load.",
                icon: FaShieldAlt,
            },
            {
                title: "Optimization",
                desc:
                    "Fine-tuning bitrates, adaptive bitrate (ABR) logic, and thermal performance for long-duration operation.",
                icon: FaLayerGroup,
            },
        ],
        whyImg: StreamingWhy,
        whyTitle: "Why Choose <span class='text-primary'>eByteLogic</span> for Your <span class='text-primary'>Multimedia Engineering</span>?",
        whyDesc: 'Choosing a specialized partner for custom multimedia solutions ensures your product stands out in a crowded market:',
        whyChooseUs: [
            "<span class='text-black'>Broadcast-Grade Quality</span>: We bring professional-level timing and accuracy to embedded devices.",
            "<span class='text-black'>Silicon-Aware Development</span>: We know how to squeeze every bit of performance out of your hardware’s multimedia accelerators.",
            "<span class='text-black'>Open Source Expertise</span>: We leverage and contribute to the best open-source projects to keep your development costs efficient and your tech stack modern.",
        ],
        cta: [
            {
                ctaTitle: "From <span class='text-primary'>Silicon</span> to <span class='text-primary'>Stream :</span> Build Better Video.",
                Ctadescription: "Don’t let latency or sync issues hold your product back. Partner with the embedded software consultants who understand the math and the mechanics of real-time media. Whether you are building an industrial vision system or a global streaming appliance, eByteLogic is ready to deliver.",
                ctaButtonText: "Contact",
            }
        ],
        faqTitle: "<span class='text-primary'>FAQ:</span>  Multimedia Frameworks & Engineering",
        faqs: [
            {
                q: "What is the benefit of custom multimedia framework development services?",
                a: "General frameworks often carry unnecessary overhead. Custom multimedia solutions allow us to strip away what you don't need and optimize the critical paths for your specific hardware, resulting in lower latency and better power efficiency."
            },
            {
                q: "Do you support GStreamer and FFmpeg on all platforms?",
                a: "Yes. We have extensive experience implementing embedded multimedia framework development on Linux, Android, and macOS, specifically tailored for platforms like NXP i.MX, Rockchip, and NVIDIA."
            },
            {
                q: "Can you help with sub-100ms latency requirements?",
                a: "Absolutely. We specialize in low-latency tuning, using protocols like SRT and NDI alongside custom buffer management to achieve real-time performance for drones, medical imaging, and live broadcasting."
            },
        ]
    },
    {
        bgImg: '/images/bg/serviceBg/embeddedQa.png',
        id: "multi-platform-qa-test-automation",
        imageName: QaJPg,
        pathText: "Multi-platform QA & Test Automation",
        category: "QA & Automation Testing Services",
        tagLine: "Embedded Platforms | Mobile Companion Apps | Web Control Interfaces",
        overview: ["Today’s products operate as interconnected ecosystems where hardware and software must be perfectly synchronized. At eByteLogic, we provide specialized qa automation testing services for embedded systems, web platforms, and mobile applications as distinct yet integrated pillars.","From low-level firmware stability to cloud-driven web dashboards and user-facing mobile apps, we validate each layer with equal rigor. Our approach ensures your entire product is secure, stable, and production-ready by testing how it actually performs in the field, rather than in isolation."],
        btnPrimaryText: "Request a Test Strategy",
        btnSecondaryText: "View Our Process",
        capabilitySections: [
            {
                title: "Comprehensive Automation QA Testing Services",
                description:
                    "Our frameworks provide balanced coverage across all three platforms to ensure total system reliability.",
                capabilities: [
                    {
                        title: "Embedded Systems QA",
                        desc:
                            "Validation of hardware-dependent software and system behavior.",
                        points: [
                            "<span class='font-semibold'>Embedded Software Testing: </span> BSP, bootloader, and firmware validation.",
                            "<span class='font-semibold'>Interface Testing:</span>  Expert embedded system testing for I²C, SPI, UART, CAN, and GPIO.",
                            "<span class='font-semibold'>Reliability: </span> Power, thermal, and long-running stability validation.",
                        ],
                    },
                    {
                        title: "Web Application QA",
                        desc:
                            "Testing the web platforms that configure, control, or monitor your devices.",
                        points: [
                            "<span class='font-semibold'>Dashboard Testing: </span>  Functional and regression testing of web interfaces.",
                            "<span class='font-semibold'>Integration:</span>  API and backend validation for real-time device communication.",
                            "<span class='font-semibold'>Robustness: </span> Failure handling under device disconnects and partial data states.",
                        ],
                    },
                    {
                        title: "Mobile Application QA",
                        desc:
                            "Ensuring reliable mobile experiences connected to your hardware.",
                        points: [
                            "<span class='font-semibold'>Cross-Platform: </span>  Android and iOS application testing for companion apps.",
                            "<span class='font-semibold'>Connectivity:</span> Device-to-app communication validation and recovery testing.",
                            "<span class='font-semibold'>UX Stability: </span> Upgrade and error-handling scenarios for embedded software applications.",
                        ],
                    },
                    {
                        title: "Test Automation Framework Development",
                        desc:
                            "Unified qa automation testing services across the entire stack.",
                        points: [
                            "<span class='font-semibold'>Custom Frameworks: </span> Python-based automation (PyTest) and custom test harnesses.",
                            "<span class='font-semibold'>HIL Testing:</span> Hardware-in-the-loop and simulation-assisted testing for testing of embedded software.",
                            "<span class='font-semibold'>Automation at Scale: </span> Reusable test suites that bridge hardware, UI, and APIs.",
                        ],
                    },
                ],
            },
            {
                title: "The Benefits of Multi-Platform QA Testing",
                description:
                    `Generic QA approaches test platforms in isolation. eByteLogic provides a "System-First" strategy that validates the entire ecosystem to uncover failures that only appear at the boundaries where hardware and software meet.`,
                capabilities: [
                    {
                        title: "Benefits for Embedded Systems",
                        desc:
                            "Choosing a specialized embedded qa tester ensures that your core hardware logic is indestructible.",
                        points: [
                            "<span class='font-semibold'>Hardware-Aware Validation: </span> We validate how firmware handles physical realities—like power fluctuations, thermal limits, and signal interference—that standard software testers miss.",
                            "<span class='font-semibold'>Deterministic Reliability:</span> Our embedded software testing ensures that timing-critical tasks remain accurate, preventing system crashes or data corruption during long-haul operations.",
                            "<span class='font-semibold'>Reduced Recall Risk: </span> By using embedded system testing to catch low-level bugs during the bring-up phase, we save you from high-cost hardware revisions and product recalls.",
                        ],
                    },
                    {
                        title: "Benefits for Web Platforms",
                        desc:
                            "Testing the dashboard alongside the hardware ensures your control center is always in sync with your fleet.",
                        points: [
                            "<span class='font-semibold'>Data Integrity & Sync: </span> We ensure that the real-time data from your sensors is reflected accurately on your web dashboard without latency or formatting errors.",
                            "<span class='font-semibold'>Scalability Testing: </span>  We validate that your web backend can handle concurrent data streams from thousands of devices without performance degradation.",
                            "<span class='font-semibold'>Failure Recovery: </span> Our testing of embedded software includes simulating device disconnects to ensure the web platform handles partial data states gracefully.",
                        ],
                    },
                    {
                        title: "Benefits for Mobile Applications",
                        desc:
                            "Mobile-to-hardware connectivity is the most common point of failure for end-users. We eliminate that risk.",
                        points: [
                            "<span class='font-semibold'>Seamless Connectivity: </span> We rigorously test BLE, Wi-Fi, and NFC handshakes between the mobile app and your embedded hardware to ensure a frustration-free user experience.",
                            "<span class='font-semibold'>Network Resilience:</span> We simulate real-world mobile conditions (signal loss, 4G to 5G switching) to ensure your app recovers and re-syncs with the hardware instantly.",
                            `<span class='font-semibold'>Fail-Safe Updates: </span> Our qa automation testing services include validating mobile-triggered Over-the-Air (OTA) updates to ensure they never "brick" a device in the field.`,
                        ],
                    },
                ],
            },
        ],
        criticaltitle: "Our Layered <span class='text-primary'>Approach</span> to <span class='text-primary'>QA</span>",
        criticaldesc: "We integrate embedded qa across the product lifecycle—not as a final checkpoint.",
        criticalRoles: [
            {
                title: "Unit & Component Validation",
                desc:
                    "Testing individual modules, APIs, and app components.",
                icon: RiUserCommunityLine,
            },
            {
                title: "Platform-Level Validation",
                desc:
                    "Ensuring embedded, web, and mobile systems are independently stable.",
                icon: GrValidate,
            },
            {
                title: "System-Level Integration Testing",
                desc:
                    "Validating real-world workflows across devices, apps, and networks.",
                icon: GrMultimedia,
            },
            {
                title: "Release & Update Validation",
                desc:
                    "Testing OTA updates and app releases together to prevent field regressions.",
                icon: PiDiscDuotone,
            },
        ],
        useCaseImg: LinuxUsecase,
        useCaseTitle: 'Why Choose <span class="text-primary">eByteLogic</span> for Multi-Platform <span class="text-primary">QA</span>',
        useCaseDesc: "Choosing a specialized qa tester who understands the full ecosystem provides clear advantages:",
        whyImg: LinuxWhy,
        useCases: [
            {
                title: "Balanced Expertise",
                desc:
                    "We bring deep experience across embedded systems, web platforms, and mobile apps, not just one layer.",
            },
            {
                title: "System-First Testing",
                desc:
                    "Our embedded software testing focuses on how platforms interact, not just isolated test cases.",
            },
            {
                title: "Real-World Modeling",
                desc:
                    "We test for network loss, power cycles, and user behavior rather than ideal lab conditions.",
            },
            {
                title: "Reduced Release Risk",
                desc:
                    "Early detection of cross-platform failures shortens cycles and prevents post-launch fixes.",
            }
        ],
        cta: [
            {
                ctaTitle: "<span class='text-primary'>Stability</span> You Can Launch With.",
                Ctadescription: "Don’t risk your brand's reputation on unvalidated software. Partner with an embedded software testing team that brings engineering clarity to the QA process, from the chip to the cloud. Whether you need a one-time system audit or a long-term automation partner, our experts are ready to ensure your product is flawless from day one.",
                ctaButtonText: "Contact",
            }
        ],
        faqTitle: "<span class='text-primary'>FAQ:</span>  Embedded QA & System Testing",
        faqs: [
            {
                q: "How does your testing cover both apps and hardware?",
                a: "Most embedded testing is siloed, but we provide integrated qa automation testing services. We test the firmware, the hardware communication (I2C, SPI, CAN), and the mobile/web applications simultaneously to ensure the entire system works as a single, stable unit."
            },
            {
                q: "How does embedded testing differ from web or mobile testing?",
                a: "Embedded system testing requires specialized knowledge of hardware communication protocols (I2C, SPI, CAN) and real-time operating systems. Unlike web apps, embedded software must be tested for power consumption, thermal limits, and physical hardware interaction."
            },
            {
                q: "Can you integrate your QA services into our existing CI/CD pipeline?",
                a: "Yes. We specialize in building automated qa automation testing services that plug directly into Jenkins, GitLab, or GitHub Actions, allowing for automated hardware-in-the-loop testing with every code commit."
            },
            {
                q: "What tools do you use for automation qa testing services?",
                a: "We utilize a mix of industry-standard tools (Python, Pytest, Jenkins) and custom-built hardware simulators to provide comprehensive coverage across the entire software stack."
            },
        ]
    },
];

const ServiceDetailsInfo = ({ meta }) => {
    const router = useRouter();
    const { id } = useParams() as { id: string };
    const [service, setService] = useState<typeof serviceData[0] | null>(null);
    const [metaId, setMetaId] = useState<string | null>(null);

    useEffect(() => {
        const foundService = serviceData.find(item => item.id === id);
        if (foundService) setService(foundService);
    }, [id]);


    useEffect(() => {
        const found = serviceData.find(item => item.id === id);
        if (found) {
            setMetaId(found.id);
        }
    }, [id]);

    if (!service) return <NotFound />;

    return (
        <div>
            <section>
                <section className='relative bg-no-repeat bg-cover bg-right py-28 lg:py-52 ' style={{ backgroundImage: `url('${service.bgImg}')` }}>
                    <div className='absolute bg-[#0e191eb3] top-0 size-full z-0'></div>
                    <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 space-y-4'>
                        <p className='text-sm md:text-lg text-white flex flex-wrap items-center gap-4 justify-center'><Link href={'/'}>Home</Link>  <RiArrowRightSLine className='text-primary text-2xl' /> <Link href={'/services'}>Services</Link>  <RiArrowRightSLine className='text-primary text-2xl' /> {service.pathText}</p>
                        <h1 className='text-2xl md:text-5xl xl:text-[50px] font-normal text-white leading-tight text-center pb-4'>{service.category}</h1>
                        <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center text-center'>{service.tagLine}</p>
                    </div>
                </section>
            </section>

            {/* Overview */}
            <section className="relative py-16 sm:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Block */}
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-snug relative inline-block">
                            <span className="relative z-10">Overview</span>
                            <span className="absolute left-0 bottom-1 w-full h-2 bg-primary/20 rounded-md -z-0"></span>
                        </h3>

                        <div className="space-y-4">
                            {Array.isArray(service.overview) ? (
                                service.overview.map((para, index) => (
                                    <p
                                        key={index}
                                        className="text-gray-600 text-sm sm:text-base leading-relaxed"
                                    >
                                        {para}
                                    </p>
                                ))
                            ) : (
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    {service.overview}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button variant="default" className="text-sm sm:text-base md:h-12" onClick={() => router.push('/contact-us')}>{service.btnPrimaryText}</Button>
                            <Button
                                onClick={() => router.push('/case-study')}
                                variant="default"
                                className="text-sm sm:text-base md:h-12 !bg-white !text-primary hover:!bg-primary hover:!text-white"
                            >
                                {service.btnSecondaryText}
                            </Button>
                        </div>
                    </div>

                    {/* Image Block */}
                    <div className="relative group">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent blur-2xl opacity-60 group-hover:opacity-80 transition duration-500"></div>

                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src={service.imageName ?? OverviewJPg}
                                alt={service.category}
                                className="object-cover w-full h-96 transform group-hover:scale-105 transition duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* expertise */}
            {service?.embeddedExpertise && (
                <section className="py-16 px-4">
                    <div className='max-w-[1400px] mx-auto px-4 sm:px-6'>

                        {/* Header */}
                        <div className="mb-12">
                            <span className="text-[#3078FB] font-semibold tracking-wide uppercase">
                                {service?.expertiseChip}
                            </span>
                            <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize" dangerouslySetInnerHTML={{ __html: service?.expertiseTitle || '' }} />
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {service?.embeddedExpertise?.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="group relative bg-white rounded-2xl p-8 border border-blue-100 overflow-hidden
                           shadow-sm hover:shadow-xl transition-all duration-300"
                                    >
                                        {/* Gradient Glow */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                                from-[#3078FB]/10 to-[#3078FB]/0 opacity-0 
                                group-hover:opacity-100 transition" />

                                        {/* Icon Badge */}
                                        <div className="relative z-10 w-14 h-14 flex items-center justify-center 
                                rounded-xl bg-[#3077fb54] text-white mb-6 group-hover:bg-primary
                                shadow-lg group-hover:scale-110 transition">
                                            <Icon className="text-2xl" />
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                                {item.title}
                                            </h3>
                                        </div>

                                        {/* Bottom Accent */}
                                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#3078FB] 
                                group-hover:w-full transition-all duration-300 rounded-b-2xl" />
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </section>
            )}

            {/* Capabilities */}
            <section className="bg-[#f9fbfd] py-16 sm:py-28">
                {service?.capabilitySections?.map((cap, i) => (
                    <div key={i} className={`max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4 ${i % 2 !== 0 ? 'mt-20' : 'mt-0'}`}>
                        <h3 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize text-center">
                            {cap.title}
                        </h3>
                        <p className="text-sm sm:text-[15px] text-[#5d6471] md:max-w-3xl text-center mx-auto">
                            {cap.description}
                        </p>
                        <div className="grid md:grid-cols-2 gap-10 pt-12">
                            {cap.capabilities.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="relative bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-[#5d647150] to-[#7fb8ff50] group-hover:from-primary group-hover:to-[#7fb8ff]" />

                                    <div className="p-6 md:p-8">
                                        <h4 className="text-lg md:text-xl font-semibold text-primary mb-2">
                                            {item.title}
                                        </h4>

                                        <p className="text-sm text-[#5d6471] mb-3">
                                            {item.desc}
                                        </p>

                                        {item.points && (
                                            <ul className="list-disc pl-5 text-sm text-[#5d6471] space-y-2.5">
                                                {item.points.map((pt, pIdx) => (
                                                    <li
                                                        key={pIdx}
                                                        dangerouslySetInnerHTML={{ __html: pt }}
                                                    />
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* layred cards */}
            {
                service?.layeredCard && (
                    <section className="py-16 sm:py-28">
                        <div className={`max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4`}>
                            <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize text-center" dangerouslySetInnerHTML={{ __html: service?.layeredCardTitle || '' }} />
                            <p className="text-sm sm:text-[15px] text-[#5d6471] md:max-w-3xl text-center mx-auto pb-6">
                                {service?.layeredCardDescription}
                            </p>
                            <div className={`grid gap-6 sm:grid-cols-2 ${service?.layeredCard?.length === 1 ? 'lg:grid-cols-1' : service?.layeredCard?.length === 2 ? 'lg:grid-cols-2' : service?.layeredCard?.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
                                {service?.layeredCard?.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 text-center transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl ${item.theme.glow}`}
                                    >
                                        <span
                                            className="
    absolute bottom-0 left-1/2 h-[3px] w-1/2
    -translate-x-1/2 scale-x-0
    transition-transform duration-300 ease-out
    group-hover:scale-x-100
    origin-center
  "
                                            style={{ backgroundColor: item.theme.lineColor }}
                                        />

                                        <div
                                            className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300
          group-hover:opacity-100 bg-gradient-to-br from-transparent to-gray-50`}
                                        />

                                        <div
                                            className={`relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg text-2xl transition-all duration-300
          ${item.theme.bg} ${item.theme.text}
          ${item.theme.hoverBg} ${item.theme.hoverText}`}
                                        >
                                            {item.icon}
                                        </div>

                                        <h3 className="relative mb-2 text-base font-semibold text-gray-900">
                                            {item.title}
                                        </h3>
                                        <p className="relative text-sm leading-relaxed text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )
            }


            {/* Critical Low-Level Features */}
            {
                service?.criticalRoles && (
                    <section className="py-20 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4">

                            {/* Heading */}
                            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
                                <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize text-center" dangerouslySetInnerHTML={{ __html: service?.criticaltitle }} />
                                <p className="text-sm sm:text-[15px] text-[#5d6471] md:max-w-3xl text-center mx-auto">
                                    {
                                        service?.criticaldesc
                                    }
                                </p>
                            </div>

                            {/* Cards */}
                            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${service?.criticalRoles?.length === 1 ? 'lg:grid-cols-1' : service?.criticalRoles?.length === 2 ? 'lg:grid-cols-2' : service?.criticalRoles?.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
                                {service?.criticalRoles?.map((item, index) => {
                                    const Icon = item?.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                                        >
                                            {/* Icon */}
                                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                                                <Icon size={24} />
                                            </div>

                                            {/* Content */}
                                            <h3 className="mt-5 text-lg font-semibold text-gray-900">
                                                {item.title}
                                            </h3>
                                            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                                {item?.desc}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </section>
                )
            }

            {/* Use Cases */}
            {
                service?.useCases && (
                    <section className="bg-white py-16 sm:py-28">
                        <div className='max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4'>
                            <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight' dangerouslySetInnerHTML={{ __html: service.useCaseTitle || '' }} />
                            <p className="text-sm sm:text-[15px] text-[#5d6471] md:max-w-3xl">
                                {service.useCaseDesc}
                            </p>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 items-center'>
                                <div className="relative border-l border-[#3078fb]/40 pl-6 space-y-6">
                                    {service.useCases.map((usecase, i) => (
                                        <div key={i} className="relative group">
                                            <div className="absolute -left-[13px] top-5 w-5 h-5 bg-white border-2 border-primary rounded-full group-hover:scale-110 transition" />
                                            <div className="bg-[#f9fbfd] p-5 rounded-md shadow-sm hover:shadow-md transition border-b border-primary/30">
                                                <h6 className="text-sm sm:text-[15px] font-medium leading-relaxed">{i + 1}. {usecase.title}</h6>
                                                <p className="text-sm text-[#5d6471] font-medium leading-relaxed">
                                                    {usecase.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className=''>
                                    {service?.useCaseImg && (
                                        <Image
                                            src={service.useCaseImg}
                                            alt="Usecase"
                                            height={400}
                                            width={400}
                                            className={`object-cover w-full rounded-lg ${service?.useCases?.length <= 3 ? 'h-[350px]' : 'h-[510px]'}`}
                                            priority
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }

            {/* Why eByteLogic */}
            {
                service?.whyChooseUs && (
                    <section className="bg-[#f9fbfd] py-16 sm:py-28">
                        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4">
                            <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight text-center' dangerouslySetInnerHTML={{ __html: service.whyTitle || '' }} />
                            <p className="text-sm text-[#5d6471] md:max-w-3xl text-center mx-auto">{service.whyDesc}</p>
                            <div className='grid grid-cols-1 md:grid-cols-2 py-8 gap-3 items-center'>
                                <div className='space-y-8 w-fit'>
                                    {service.whyChooseUs.map((reason, i) => (
                                        <div key={i} className="flex justify-start flex-wrap min-[477px]:flex-nowrap gap-4 items-center">
                                            <div className="min-w-[50px] text-[#d1e2fc] text-4xl font-black select-none pointer-events-none leading-none">
                                                0{i + 1}
                                            </div>
                                            <div className='w-fit'>
                                                <p className="text-sm sm:text-[15px] text-[#5d6471] font-medium" dangerouslySetInnerHTML={{ __html: reason }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {service?.whyImg && (
                                    <Image
                                        src={service?.whyImg}
                                        alt="Usecase"
                                        width={500} className={`rounded-2xl mt-4 object-cover md:mt-0 mx-auto ${service?.whyChooseUs?.length >= 3 ? 'h-[250px]' : 'h-[350px]'}    `}
                                    />
                                )}
                            </div>
                        </div>
                    </section>
                )
            }

            {/* CTA */}
            <section className="bg-white py-16 sm:py-28 bg-[url('/images/image.png')] bg-cover bg-bottom">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4 text-center">
                    {Array.isArray(service?.cta) && service.cta.length > 0 ? (
                        service.cta.map((item, i) => (
                            <div key={i} className='space-y-4'>
                                <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize text-center' dangerouslySetInnerHTML={{ __html: item.ctaTitle }} />
                                <p className="text-sm sm:text-[15px] text-[#5d6471] md:max-w-3xl mx-auto">
                                    {item.Ctadescription}
                                </p>
                                <Button onClick={() => router.push('/contact-us')}
                                    variant="default" className='w-fit mx-auto text-center flex items-center justify-center gap-1'
                                >
                                    {item.ctaButtonText}
                                    <GoArrowRight className="text-xl" />
                                </Button>
                            </div>
                        ))
                    ) : (
                        <p>No CTA data available.</p>
                    )}
                </div>
            </section>

            {/* faq */}
            <section className="bg-[#f5f8fb] pb-16 pt-16 md:pt-24">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize mb-2" dangerouslySetInnerHTML={{ __html: service?.faqTitle || '' }} />
                    <div className="grid xl:grid-cols-3 items-center gap-12">
                        <div className="xl:col-span-2 xl:max-w-[800px]">
                            <FAQAccordion
                                faqs={service?.faqs}
                                title="Frequently Asked Questions"
                            />
                        </div>

                        <Image
                            src={FaqHomePng}
                            alt="faq"
                            className="mx-auto size-80 sm:size-auto"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailsInfo;

export const runtime = 'edge';