'use client';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { RiArrowRightSLine } from 'react-icons/ri';

import Button from '@/src/components/Button';

import WhyJpeg from '@/src/assets/images/services/why.jpeg'
import UsecaseJpg from '@/src/assets/images/services/usecase.avif'
import OverviewJPg from '@/src/assets/images/services/overview.jpg'
import EmbeddedDevelopmentJPg from '@/src/assets/images/services/embedded-development.jpg'
import QaJPg from '@/src/assets/images/services/qa.jpg'
import IosJPg from '@/src/assets/images/services/ios.jpg'
import SdkWebp from '@/src/assets/images/services/sdk.webp'
import FrameworkWebp from '@/src/assets/images/services/framework.webp'
import AndroidBspPng from '@/src/assets/images/services/android-bsp.png'

const serviceData = [
    {
        id: 0,
        slug: "embedded-software",
        category: "Embedded Software Development",
        imageName: EmbeddedDevelopmentJPg,
        overview:
            "At eByteLogic, we engineer robust embedded software tailored to your hardware, product goals, and end-user requirements. From bare-metal firmware to OS-level abstraction and protocol integration, our team delivers production-ready code that is secure, efficient, and scalable.",
        capabilities: [
            {
                title: "Custom Firmware Development",
                points: [
                    "Real-time and event-driven applications on MCUs and SoCs",
                    "Memory-optimized code for performance-critical environments",
                    "Power-aware algorithms for battery-operated systems",
                ],
            },
            {
                title: "Device Drivers & HAL Development",
                points: [
                    "Linux and RTOS-based driver design",
                    "Integration with sensors, displays, wireless modules, and I/O peripherals",
                    "Hardware Abstraction Layer (HAL) for platform portability",
                ],
            },
            {
                title: "Protocol Stack Implementation",
                points: [
                    "Wired and wireless protocols: UART, SPI, I2C, CAN, BLE, Zigbee, Modbus, TCP/IP",
                    "Custom stack development and optimization for constrained devices",
                ],
            },
            {
                title: "RTOS & Multithreading Integration",
                points: [
                    "FreeRTOS, Zephyr, ThreadX, custom schedulers",
                    "Task scheduling, inter-process communication, and interrupt handling",
                ],
            },
            {
                title: "Secure Boot & OTA Update Systems",
                points: [
                    "Bootloader development with flash partitioning",
                    "Encrypted firmware updates and rollback mechanisms",
                    "Secure element integration (TPM, TrustZone, etc.)",
                ],
            },
            {
                title: "Platform Support",
                points: [
                    "ARM Cortex-M/A, RISC-V, x86 embedded",
                    "STM32, NXP, TI, Microchip, Nordic, Renesas, Espressif",
                    "OS: Bare-metal, Embedded Linux, RTOS (FreeRTOS, Zephyr, etc.)",
                ],
            },
        ],
        useCases: [
            "Wearable device firmware and battery management",
            "Industrial control and sensor gateways",
            "Smart home and automation controllers",
            "Custom bootloader and security-critical applications",
        ],
        whyChooseUs: [
            "Deep experience in embedded platforms and MCU architectures",
            "Clean, testable, and maintainable code aligned to industry standards",
            "Aligned with long-term product lifecycle and certification needs",
        ],
        cta: "Let us help you build reliable, future-proof embedded firmware that works seamlessly with your hardware and delivers a great user experience.",
    },
    {
        id: 1,
        slug: "linux-bsp-android",
        imageName: AndroidBspPng,
        category: "Linux BSP & Android Customization",
        overview: "At eByteLogic, we offer complete Board Support Package (BSP) development and customization for Linux and Android platforms. From kernel porting to device driver integration, we help product companies accelerate hardware bring-up and OS-level stability across a wide range of chipsets and embedded boards.",
        capabilities: [
            {
                title: "Kernel & Bootloader Customization",
                points: [
                    "U-Boot, Barebox, and GRUB bootloader configuration",
                    "Linux kernel porting and patch management",
                    "Secure boot and fast boot optimization"
                ]
            },
            {
                title: "Device Tree & Driver Integration",
                points: [
                    "Peripheral enablement through DTS configuration",
                    "I2C, SPI, UART, GPIO, PWM, USB, Ethernet drivers",
                    "In-house driver development and upstreaming support"
                ]
            },
            {
                title: "Yocto & Buildroot Frameworks",
                points: [
                    "Custom image builds with Yocto/OpenEmbedded",
                    "Buildroot-based filesystem and package management",
                    "SDK and toolchain generation for app development"
                ]
            },
            {
                title: "Android AOSP Customization",
                points: [
                    "AOSP bring-up for Qualcomm, Rockchip, MediaTek, TI",
                    "HAL development, device configuration, and build system tuning",
                    "Android framework and system UI modification"
                ]
            },
            {
                title: "Debugging & Bring-Up Services",
                points: [
                    "Early-stage bring-up and serial console access",
                    "Boot logs, kernel panic, and peripheral probing",
                    "Board diagnostics and regression validation"
                ]
            },
            {
                title: "Platform Support",
                points: [
                    "ARM Cortex-A SoCs (NXP, Rockchip, TI, Qualcomm, Amlogic)",
                    "NVIDIA Jetson, Raspberry Pi, i.MX, Allwinner",
                    "OS: Embedded Linux (Yocto, Buildroot), AOSP"
                ]
            }
        ],
        useCases: [
            "Custom SBC-based products and evaluation boards",
            "Industrial controllers and multimedia appliances",
            "Fire safety panels and embedded HMI terminals",
            "Android-based wearable or infotainment systems"
        ],
        whyChooseUs: [
            "Extensive multi-vendor BSP experience with proven board bring-up results",
            "Kernel-to-app knowledge that bridges hardware and system-level needs",
            "Flexible engagement: full BSP ownership or targeted module support"
        ],
        cta: "Let us help you bring your hardware to life with stable, optimized BSPs ready for production deployment."
    },
    {
        id: 2,
        slug: "multimedia-framework",
        imageName: FrameworkWebp,
        category: "Multimedia Framework Development",
        overview: "At eByteLogic, we specialize in developing high-performance multimedia solutions tailored for embedded systems and broadcast-grade applications. From real-time video streaming to AV sync tuning and pipeline optimization, we bring deep expertise in frameworks like GStreamer, FFMPEG, Live555, and more.",
        capabilities: [
            {
                title: "Framework Integration & Customization",
                points: [
                    "GStreamer pipeline architecture and plugin development",
                    "FFMPEG-based decoding/encoding and filter graphs",
                    "Live555-based RTP/RTSP streaming modules",
                    "OpenMAX and V4L2 pipeline handling for camera integration"
                ]
            },
            {
                title: "Media Protocol Support",
                points: [
                    "HDMI, SDI, NDI, SRT, RTP/RTSP, HLS, MPEG-DASH",
                    "Protocol bridging and custom transmitter/receiver implementation"
                ]
            },
            {
                title: "Advanced AV Sync & Playback Tuning",
                points: [
                    "±10ms audio-video synchronization in SDI/HDMI outputs",
                    "Timestamps, clock references, and buffer optimization",
                    "Low-latency playback on embedded and x86 platforms"
                ]
            },
            {
                title: "Media Player & Pipeline Optimization",
                points: [
                    "CPU/GPU utilization profiling and tuning",
                    "Multi-channel video rendering and compositing",
                    "Hardware-accelerated decoding/encoding (VAAPI, V4L2, NVDEC, etc.)"
                ]
            },
            {
                title: "Platform Coverage",
                points: [
                    "Embedded Linux, Android, and x86 Ubuntu",
                    "Platforms: NVIDIA Jetson, Rockchip, NXP i.MX, TI, Qualcomm, Raspberry Pi"
                ]
            }
        ],
        useCases: [
            "Live broadcast encoder/decoders",
            "Surveillance camera video pipelines",
            "Wearables and media accessories",
            "Video wall and multiview display systems"
        ],
        whyChooseUs: [
            "Delivered AV solutions with ±10ms sync accuracy in real deployments",
            "Expertise in both open-source and proprietary media frameworks",
            "Strong debugging and profiling experience across chipsets"
        ],
        cta: "Let us help you build and optimize multimedia pipelines that work seamlessly across devices, protocols, and resolutions."
    },
    {
        id: 3,
        slug: "mobile-app-development",
        imageName: IosJPg,
        category: "Android & iOS App Development",
        overview: "eByteLogic designs and develops custom Android and iOS applications that interface seamlessly with embedded systems and connected devices. Our mobile apps are built to manage, control, stream from, or monitor embedded hardware — delivering user-friendly front-ends to powerful back-end firmware.",
        capabilities: [
            {
                title: "Native & Cross-Platform App Development",
                points: [
                    "Android (Java/Kotlin), iOS (Swift), Flutter-based hybrid apps",
                    "App architecture, UI/UX design, and platform compliance",
                    "Tight coupling with embedded device communication protocols"
                ]
            },
            {
                title: "Embedded Hardware Integration",
                points: [
                    "BLE, Wi-Fi, and serial communication with embedded products",
                    "Real-time data sync, telemetry, and command-response systems",
                    "OTA firmware upgrade workflows integrated with the app"
                ]
            },
            {
                title: "Multimedia & Streaming Interfaces",
                points: [
                    "Mobile video/audio player integration (HLS, RTP, RTSP, MJPEG)",
                    "Camera streaming control and media buffer handling",
                    "Companion apps for multimedia boards and AV encoders"
                ]
            },
            {
                title: "Security & Data Protection",
                points: [
                    "Secure communication (TLS, encrypted payloads)",
                    "Authentication layers, user roles, and access policies",
                    "Secure storage and permission management for mobile OSes"
                ]
            },
            {
                title: "Mobile QA & Deployment Support",
                points: [
                    "Functional and UI testing across Android/iOS versions",
                    "CI/CD for mobile builds and OTA deployments",
                    "Google Play & App Store publishing support"
                ]
            },
            {
                title: "Platform Support",
                points: [
                    "Android (10+), iOS (13+), Cross-platform (Flutter)",
                    "Integration with ESP32, STM32, TI, Qualcomm, NXP-based products",
                    "Companion apps for Linux/RTOS-powered devices"
                ]
            }
        ],
        useCases: [
            "Remote control apps for industrial and consumer devices",
            "Video streaming or playback controllers for embedded AV systems",
            "OTA-updatable wearables or HMI panels with mobile companion apps",
            "Data monitoring dashboards for sensors and field devices"
        ],
        whyChooseUs: [
            "Deep embedded-mobile integration experience with over 30+ projects",
            "Full-stack support from hardware communication to UX refinement",
            "Proven success building apps for high-reliability B2B use cases"
        ],
        cta: "Let us help you create powerful mobile experiences that enhance and extend the functionality of your embedded products."
    },
    {
        id: 4,
        slug: "qa-validation",
        imageName: QaJPg,
        category: "QA & Validation Services",
        overview: "At eByteLogic, we deliver end-to-end Quality Assurance and Validation services for embedded systems, mobile applications, and web platforms. Our testing strategies are tightly aligned with product development goals — ensuring stability, performance, and compliance across the entire lifecycle.",
        capabilities: [
            {
                title: "Embedded System Testing",
                points: [
                    "Functional testing of firmware, drivers, and hardware interactions",
                    "Interface validation for UART, I2C, SPI, GPIO, CAN, BLE, Wi-Fi",
                    "Long-duration stability testing on custom boards"
                ]
            },
            {
                title: "Mobile App Testing",
                points: [
                    "Android & iOS compatibility and UI/UX validation",
                    "Device integration testing with sensors and embedded devices",
                    "App automation using Appium, Espresso, and real-device labs"
                ]
            },
            {
                title: "Web & Backend Validation",
                points: [
                    "API testing (Postman, REST Assured) and performance benchmarking",
                    "Cross-browser testing and responsive UI validation",
                    "Security and penetration testing upon request"
                ]
            },
            {
                title: "Test Automation & Framework Development",
                points: [
                    "Custom test scripts for embedded test environments",
                    "Robot Framework, Python, Pytest, and Jenkins CI pipelines",
                    "HIL (Hardware-in-the-Loop) simulation and logging"
                ]
            },
            {
                title: "Regression & Compliance Testing",
                points: [
                    "Structured regression planning for continuous builds",
                    "Protocol-level and certification-grade validations",
                    "IEC/ISO-driven test traceability and reporting"
                ]
            },
            {
                title: "Reporting & Test Management",
                points: [
                    "Real-time defect tracking (JIRA, TestRail, Zephyr)",
                    "Detailed test cases, execution logs, and coverage reports",
                    "Release-ready documentation and sign-off protocols"
                ]
            }
        ],
        useCases: [
            "Safety-critical embedded device testing (fire panels, wearables)",
            "Media streaming QA across platforms and protocols",
            "Industrial HMI panel validation and touchscreen testing",
            "Mobile companion app testing for IoT and smart devices"
        ],
        whyChooseUs: [
            "Embedded-focused QA team with product engineering background",
            "In-house lab setup for automation and long-run testing",
            "Rapid defect isolation and continuous feedback to dev teams"
        ],
        cta: "Ensure your product is not just functional — but resilient, responsive, and release-ready with our comprehensive QA services."
    },
    {
        id: 5,
        slug: "middleware-sdk",
        category: "Middleware SDK & Framework Customization",
        imageName: SdkWebp,
        bannerImage: "/images/middleware-sdkBanner.webp",
        overviewImage: "/images/aboutBanner.jpg",
        overview: "eByteLogic offers deep expertise in customizing middleware layers and building Software Development Kits (SDKs) that simplify application development over complex embedded systems. Whether you're working with multimedia, connectivity stacks, or board-level abstraction layers — we build reliable frameworks and modular APIs that accelerate integration and deployment.",
        capabilities: [
            {
                title: "SDK Architecture & Development",
                points: [
                    "Cross-platform SDKs for Linux, Android, and RTOS platforms",
                    "Modular API design with abstraction for hardware complexity",
                    "Well-documented C/C++, Java/Kotlin, or Python SDKs"
                ]
            },
            {
                title: "Middleware Integration & Customization",
                points: [
                    "Protocol middleware (BLE, Zigbee, CAN, MQTT, Modbus)",
                    "Multimedia SDK layers (FFMPEG, GStreamer plugin abstraction)",
                    "Device abstraction layers for sensors, displays, network modules"
                ]
            },
            {
                title: "Application Framework Porting",
                points: [
                    "Porting existing middleware stacks to custom boards",
                    "Adaptation for platform-specific IO, clocking, and power domains",
                    "Integration with Linux device drivers and HAL"
                ]
            },
            {
                title: "API Documentation & Developer Enablement",
                points: [
                    "Doxygen, Swagger, or Markdown-based SDK documentation",
                    "Sample code, unit test harnesses, and integration templates",
                    "Developer support packages for rapid onboarding"
                ]
            },
            {
                title: "System Integration & Validation",
                points: [
                    "Validation of middleware layer integration with upper-layer apps",
                    "Compatibility testing across OS versions, kernel updates",
                    "Bug tracking, interface versioning, and release packaging"
                ]
            },
            {
                title: "Platform Support",
                points: [
                    "Embedded Linux (Yocto, Buildroot), Android AOSP, RTOS-based devices",
                    "STM32, TI Sitara, NXP i.MX, Qualcomm, Rockchip, and other SoCs"
                ]
            }
        ],
        useCases: [
            "SDKs for camera control, AV streaming, or remote monitoring",
            "Connectivity middleware for industrial and IoT applications",
            "OEM APIs for configuring or updating field devices",
            "Middleware abstraction for board families with shared firmware base"
        ],
        whyChooseUs: [
            "Full-stack expertise from device drivers to user APIs",
            "Strong documentation, testing, and developer support",
            "Proven middleware work in media, industrial, and connected devices"
        ],
        cta: "Let us help you simplify integration and enhance reusability with customized SDKs and robust middleware frameworks tailored to your embedded product line."
    }
];

const ServiceDetailsInfo = () => {
    const router = useRouter();
    const { id } = useParams() as { id: string };
    const [service, setService] = useState<typeof serviceData[0] | null>(null);

    useEffect(() => {
        const index = parseInt(id);
        if (!isNaN(index)) {
            const found = serviceData.find((item) => item.id === index);
            if (found) setService(found);
        }
    }, [id]);

    if (!service) return <div className="p-8 text-gray-600">Loading or not found...</div>;
    return (
        <div>
            <section>
                <section className='relative bg-no-repeat bg-cover bg-right py-28 lg:py-52' style={{ backgroundImage: `url('/images/embeddedBanner.webp')` }}>
                    <div className='absolute bg-[#0e191eb3] top-0 size-full z-0'></div>
                    <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10'>
                        <h2 className='text-2xl md:text-5xl xl:text-[54px] font-semibold text-white leading-tight text-center'>{service.category}</h2>
                        <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'>Services <RiArrowRightSLine className='text-primary text-2xl' />{service.category}</p>
                    </div>
                </section>
            </section>

            {/* Overview */}
            <section className="py-16 sm:py-28">
                <div className='max-w-[1400px] mx-auto px-4 sm:px-6'>
                    <div className='space-y-4 pb-12'>
                        <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize text-center'>Overview
                        </h3>
                        <p className='text-[#5d6471] text-sm sm:text-[15px] md:px-6 text-center'>
                            {service.overview}
                        </p>
                    </div>
                    <div className="relative w-full h-96 rounded-[5px] overflow-hidden">
                        <Image
                            src={service.imageName ?? OverviewJPg}
                            alt={service.category}
                            fill
                            className={`${service.id === 5 ? 'object-contain' : 'object-cover'}`}
                            priority
                        />
                    </div>

                </div>
            </section>

            {/* Capabilities */}
            <section className="bg-[#f9fbfd] py-16 sm:py-28">
                <div className='max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4'>
                    <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize text-center'>Our Capabilities</h3>
                    <div className="grid md:grid-cols-2 gap-10 pt-12">
                        {service.capabilities.map((cap, i) => (
                            <div
                                key={i}
                                className="relative bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-[#5d647150] to-[#7fb8ff50] group-hover:bg-gradient-to-b group-hover:from-primary group-hover:to-[#7fb8ff] transition-all duration-300" />
                                <div className="absolute top-4 right-4 text-white bg-primary w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium shadow-md">
                                    {i + 1}
                                </div>
                                <div className="p-6 md:p-8">
                                    <h4 className="text-lg md:text-xl font-semibold text-primary mb-3">{cap.title}</h4>
                                    <ul className="list-disc pl-5 text-sm sm:text-[15px] text-[#5d6471] space-y-1">
                                        {cap.points.map((pt, idx) => (
                                            <li key={idx}>{pt}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="bg-white py-16 sm:py-28">
                <div className='max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4'>
                    <div className='grid grig-cols-2 lg:grid-cols-6 gap-3'>
                        <div className='lg:col-span-3 space-y-8'>
                            <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize pb-4'>Use <span className='text-primary'>Cases</span> We <span className='text-primary'>Serve</span></h3>
                            <div className="relative border-l border-[#3078fb]/40 pl-6 space-y-7">
                                {service.useCases.map((usecase, i) => (
                                    <div key={i} className="relative group">
                                        <div className="absolute -left-[13px] top-5 w-5 h-5 bg-white border-2 border-primary rounded-full group-hover:scale-110 transition" />
                                        <div className="bg-[#f9fbfd] p-5 rounded-md shadow-sm hover:shadow-md transition border-b border-primary/30">
                                            <p className="text-sm sm:text-[15px] text-[#5d6471] font-medium leading-relaxed">
                                                {usecase}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Image
                            src={UsecaseJpg}
                            alt="Usecase"
                            height={600}
                            width={400}
                            className="object-cover h-full w-full lg:col-span-3"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Why eByteLogic */}
            <section className="bg-[#f9fbfd] py-16 sm:py-28">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4">
                    <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize text-center'>Why <span className='text-primary'>eByteLogic?</span></h3>
                    <div className='grid lg:grid-cols-6 py-8 gap-3'>
                        <div className='lg:col-span-3 space-y-12'>
                            {service.whyChooseUs.map((reason, i) => (
                                <div key={i} className="flex flex-nowrap gap-6 items-center">
                                    <div className="text-[#d1e2fc] text-4xl md:text-7xl 2xl:text-[90px] font-black select-none pointer-events-none leading-none">
                                        0{i + 1}
                                    </div>
                                    <div>
                                        <p className="text-sm sm:text-[15px] text-[#5d6471] font-medium leading-relaxed">
                                            {reason}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Image src={WhyJpeg} alt='WhyJpeg' width={500} className='col-span-3 rounded-2xl mt-4 md:mt-0 mx-auto' />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-white py-16 sm:py-28 bg-[url('/images/image.png')] bg-cover bg-bottom">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4 text-center">
                    <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize text-center'> Build <span className='text-primary'>Embedded</span>  Firmware with <span className='text-primary'>Confidence</span></h3>
                    <p className="text-sm sm:text-[15px] lg:text-lg text-[#5d6471] md:max-w-3xl mx-auto">
                        {service.cta}
                    </p>
                    <Button onClick={() => router.push('/contact')}
                        variant="default" className='w-full sm:w-fit mx-auto text-center flex items-center justify-center gap-1'
                    >
                        Get Started
                        <GoArrowRight className="text-xl" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailsInfo;
