'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { RiArrowRightSLine } from 'react-icons/ri';

import Button from '@/src/components/Button';

import OverviewJPg from '@/src/assets/images/services/overview.jpg'
import EmbeddedDevelopmentJPg from '@/src/assets/images/services/embedded-development.png'
import QaJPg from '@/src/assets/images/services/qa.png'
import IosJPg from '@/src/assets/images/services/iot.png'
import SdkWebp from '@/src/assets/images/services/avProtocol.png'
import FrameworkWebp from '@/src/assets/images/services/multimedia.png'
import LinuxPng from '@/src/assets/images/services/linux.png'
import whyEmbedded from '@/src/assets/images/services/whyEmbedded.png'
import useCaseEmbedded from '@/src/assets/images/services/useCaseEmbedded.png'
import LinuxUsecase from '@/src/assets/images/services/linuxUsecase.png'
import LinuxWhy from '@/src/assets/images/services/linuxWhy.png'
import StreamingUsecase from '@/src/assets/images/services/streamingUsecase.png'
import StreamingWhy from '@/src/assets/images/services/streamingWhy.png'
import IotUseCase from '@/src/assets/images/services/iotUseacase.png'
import IotWhy from '@/src/assets/images/services/iotWhy.png'
import QaUseCase from '@/src/assets/images/services/qaUsecase.png'
import QaWhy from '@/src/assets/images/services/qaWhy.png'
import AvUseCase from '@/src/assets/images/services/avUseCase.png'
import AvWhy from '@/src/assets/images/services/avWhy.png'
import NotFound from '@/app/not-found';

const serviceData = [
    {
        bgImg: '/images/bg/serviceBg/embeddedAppBg.png',
        id: "embedded-application-development",
        category: "Powering Smart Devices with Embedded Intelligence",
        pathText: "Embedded Application Development",
        tagLine: "C/C++, Qt, Python | Low-Level to UI | Real-Time Performance",
        imageName: EmbeddedDevelopmentJPg,
        overview:
            ["We specialize in building embedded applications that run efficiently on Linux-based and RTOS-driven platforms. From control logic and device communication to sophisticated HMI interfaces, our development approach focuses on performance, modularity, and maintainability.", "With deep experience in C/C++, Qt, and Python, our team delivers production-ready apps tailored to the device's hardware and use case — whether it’s a touchscreen panel, industrial controller, wearable device, or medical equipment."],
        capabilities: [
            {
                title: "C/C++ Embedded System Applications",
                desc: "Development of core system applications tightly integrated with the OS and hardware.",
                points: [
                    "Sensor and peripheral data acquisition",
                    "Communication protocol handling (UART, CAN, I2C, SPI)",
                    "Custom state machines and logic control",
                ],
            },
            {
                title: "Qt-based HMI & UI Development",
                desc: "Cross-platform, modern interfaces for devices with displays or touchscreens.",
                points: [
                    "QtWidgets and QML-based GUI design",
                    "Multilingual and theming support",
                    "Performance tuning for resource-constrained UIs",
                ],
            },
            {
                title: "Python Applications for Embedded Linux",
                desc: "Agile development of scripting or automation components in embedded systems.",
                points: [
                    "System control scripts and monitoring apps",
                    "Integration with APIs, MQTT, and DBus",
                    "Lightweight GUIs using PyQt or Tkinter",
                ],
            },
            {
                title: "Embedded IPC & Middleware Integration",
                desc: "Reliable inter-process communication and software stack connectivity.",
                points: [
                    "DBus, gRPC, sockets, and shared memory IPC",
                    "Middleware SDK integration",
                    "Multithreaded and event-driven design",
                ],
            },
            {
                title: "Real-Time App Optimization & Debugging",
                desc: "Ensuring apps meet timing, memory, and stability constraints in production.",
                points: [
                    "Profiling and memory usage optimization",
                    "Handling concurrency and priority tuning",
                    "Performance benchmarking and fault handling",
                ],
            },
            {
                title: "Real-Time Data Handling Applications",
                desc: "We develop performance-critical apps that acquire, process, and respond to real-time data inputs, often from sensors, AV sources, or user commands.",
                points: [
                    "Multithreaded C/C++ applications for real-time processing",
                    "Data acquisition, filtering, and feedback control systems",
                    "Event-driven frameworks using libevent/libev/libuv",
                ],
            },
        ],
        useCaseImg: useCaseEmbedded,
        whyImg: whyEmbedded,
        useCases: [
            "Human-Machine Interface (HMI) development using Qt/C++",
            "Control and diagnostic applications for industrial and wearable devices",
            "Sensor data acquisition, processing, and real-time response",
            "Custom protocol implementation (MODBUS, CAN, TCP/IP)",
            "Embedded Python apps for automation and scripting",
            "Embedded GUIs and dashboard utilities for constrained devices",
        ],
        whyChooseUs: [
            "Cross-platform embedded app development across Linux, RTOS, and Android",
            "Proficiency in Qt, LVGL, GTK, and custom UI frameworks",
            "Lightweight, modular codebase that runs on low-resources systems",
            "Experts in real-time event handling, threading, and memory safety",
            "Agile collaboration with in-house and external hardware teams",
            "End-to-end delivery: from architecture to deployment",
        ],
        cta: [
            {
                ctaTitle: "Embedded <span class='text-primary'>Apps</span> , Engineered to Perform",
                Ctadescription: "We craft high-performance embedded applications that interact directly with hardware, sensors, and users — tuned for reliability, real-time response, and usability.",
                ctaButtonText: "Discuss Your App Requirements",
            }
        ]
    },
    {
        id: "embedded-bsp-development",
        bgImg: '/images/bg/serviceBg/linuxBsp.png',
        pathText: "Embedded BSP Development",
        imageName: LinuxPng,
        category: "Power Your Product with Robust Embedded Software.",
        tagLine: "BSP | Firmware | Drivers | Linux | Android",
        overview: ["At eByteLogic, we design and develop high-performance embedded software that powers modern devices — from industrial controllers and IoT gateways to consumer electronics and AI-enabled systems. We specialize in system-level engineering that bridges silicon, hardware, and software to create reliable, optimized, production-ready embedded solutions.", "Whether you’re building an evaluation board, a custom SoM, or a full-fledged production board, we accelerate bring-up, streamline peripheral support, and fine-tune your platform for speed, security, and stability."],
        capabilities: [
            {
                title: "Board Support Package (BSP) Development",
                points: [
                    "BSP porting and customization for Linux and Android",
                    "Yocto, Buildroot, and AOSP–based builds",
                    "Board bring-up for custom and off-the-shelf SoMs",
                    "Device tree creation and tuning",
                    "Peripheral bring-up and validation",
                ]
            },
            {
                title: "Bootloader & Startup Optimization",
                points: [
                    "U-Boot porting and customization",
                    "Fast boot implementations",
                    "Splash/logo integration",
                    "Secure boot enablement",
                    "Boot sequence optimization for product requirements",
                ]
            },
            {
                title: "Linux Kernel & Device Driver Development",
                points: [
                    "Custom driver development (I²C, SPI, UART, CAN, GPIO, MIPI-CSI/DSI, display, sensors, audio, networking, etc.)",
                    "Kernel configuration and feature enablement",
                    "Patch integration, upgrade, and maintenance",
                    "Real-time kernel (PREEMPT_RT) support",
                    "Power management tuning",
                ]
            },
            {
                title: "Android BSP & Framework Customization",
                points: [
                    "Android HAL layer integration",
                    "Framework modifications and feature development",
                    "AOSP build optimization",
                    "Hardware abstraction layer tuning",
                    "Custom system services and UI optimizations",
                    "Support for Android 10–14 depending on SoC platform",
                ]
            },
            {
                title: "Embedded Firmware & RTOS Development (Optional Add-On)",
                points: [
                    "Firmware development on ARM Cortex-M, RISC-V, MSP, PIC, and Renesas MCUs",
                    "FreeRTOS, Zephyr, ThreadX and other RTOS-based systems",
                    "Sensor integration, communication stacks, low-power optimization",
                    "OTA firmware update implementations",
                ]
            },
            {
                title: "Hardware–Software System Integration",
                points: [
                    "Schematic review for software considerations",
                    "Low-level peripheral validation",
                    "Memory map and clock configuration",
                    "Hardware abstraction layer (HAL) integration",
                    "Interfacing sensors, displays, cameras, radios, and custom boards",
                ]
            }
        ],
        useCaseImg: LinuxUsecase,
        whyImg: LinuxWhy,
        useCases: [
            "BSP customization for new boards or SoC-based modules",
            "Rapid bring-up of peripheral interfaces (USB, UART, SPI, I2C, Ethernet, HDMI, CSI/DSI)",
            "Bootloader (U-Boot) customization with secure boot and splash",
            "Yocto or Buildroot migration and SDK optimization",
            "Linux driver porting for legacy or new silicon",
            "OTA firmware update integration with fallback mechanisms",
        ],
        whyChooseUs: [
            "100+ successful BSP bring-up projects across ARM-based platforms",
            "Fast turnaround for hardware enablement and validation",
            "Strong experience in Buildroot, Yocto, U-Boot, and secure boot",
            "Deep understanding of low-level device tree, clocks, regulators",
            "Silicon vendor SDK customization (Rockchip, NXP, Qualcomm, NVIDIA, etc.)",
            "Focused on reducing boot time and system start latency",
        ],
        cta: [
            {
                ctaTitle: "From <span class='text-primary'>Bare Board to Booting</span> in Days",
                Ctadescription: "We help product teams bring up Linux on custom hardware fast — from U-Boot to kernel to rootfs — with BSPs that are reliable, maintainable, and production-ready.",
                ctaButtonText: "Schedule Your Board Bring-Up Call",
            }
        ]
    },
    {
        bgImg: '/images/bg/serviceBg/multimedia.png',
        id: "multimedia-framework",
        imageName: FrameworkWebp,
        pathText: "Multimedia & Streaming Frameworks",
        category: "Build Better Streaming Experiences.",
        tagLine: "Custom Media Pipelines | Real-Time Processing | Protocol Expertise",
        overview: ["At eByteLogic, we specialize in engineering multimedia frameworks and low-latency streaming solutions for the most demanding use cases—from live broadcast systems and AV-over-IP pipelines to drone video transmission and surveillance devices. Our expertise spans GStreamer, FFmpeg, and custom encoder pipelines, enabling pixel-perfect performance, seamless AV sync, and integration with industry-standard protocols like NDI, SRT, and RTP.", "Whether you're developing a high-performance camera system, a next-gen encoder, or a media-rich IoT device, our framework-level expertise ensures you achieve quality,reliability, and real-time responsiveness."],
        capabilities: [
            {
                title: "GStreamer & FFmpeg Customization",
                desc: "From modular pipelines to advanced plugin development, we tailor open-source frameworks to meet your real-world media delivery needs.",
                points: [
                    "Plugin development for custom source/sink elements",
                    "Performance tuning for low-latency encoding/decoding",
                    "Integration with hardware accelerators (VAAPI, V4L2, NVDEC, etc.)",
                ]
            },
            {
                title: "Protocol-Level Handling (NDI, RTP, SRT, RTSP, HLS, RTMP)",
                desc: "We enable smooth, resilient streaming across local and global networks with deep protocol know-how.",
                points: [
                    "Building robust sender/receiver pipelines",
                    "Optimizing for jitter, buffering, and packet loss",
                    "Secure, firewall-friendly media transport design"
                ]
            },
            {
                title: "AV Synchronization & Tuning",
                desc: "Precision matters—our team ensures audio/video frames stay perfectly in sync across the pipeline.",
                points: [
                    "±10ms A/V sync tuning for live systems",
                    "Timestamp correction and buffer management",
                    "End-to-end sync validation with test utilities"
                ]
            },
            {
                title: "Closed Captioning & Compliance (LINE21, CEA608/708)",
                desc: "Broadcast-ready text encoding and decoding—delivered in fully compliant formats.",
                points: [
                    "Analog LINE21 decoding and embedding",
                    "DTVCC (CEA608/CEA708) insertion",
                    "LINE21 <--> DTVCC conversion modules"
                ]
            },
            {
                title: "Open Broadcast & Encoder SDK Customization",
                desc: "We help you optimize open-source broadcast software for specific chipsets and use cases.",
                points: [
                    "OBS (Open Broadcaster Software) pipeline customization",
                    "Integration with hardware encoder SDKs (Xilinx, Ambarella, Rockchip, etc.)",
                    "Encoding format tuning for quality vs. Bandwidth"
                ]
            },
            {
                title: "Hardware-Accelerated Video Processing",
                desc: "We optimize your multimedia pipelines using GPU, VPU, and hardware codecs (e.g., Rockchip, NVIDIA Jetson, NXP i.MX) to enable smooth, power-efficient performance on embedded platforms.",
                points: [
                    "Integration with hardware decoders/encoders (V4L2, NVDEC/NVENC)",
                    "Zero-copy buffer management to reduce CPU load",
                    "Custom pipeline tuning for RK3588, i.MX8, Jetson, and more"
                ]
            }
        ],
        useCaseImg: StreamingUsecase,
        whyImg: StreamingWhy,
        useCases: [
            "Real-time live streaming with ultra-low latency (AV sync-sensitive applications)",
            "Broadcast & OTT pipeline customization (GStreamer, FFMPEG, OBS)",
            "SDI/NDI/SRT/HLS/RTMP-based video routing solutions",
            "Closed captioning workflows for live and recorded video (CEA-608/708, LINE21)",
            "Surveillance and drone video encoding with bandwidth optimization",
            "HDMI and USB camera-based input/output for vision systems",
        ],
        whyChooseUs: [
            "Deep expertise in protocol-level streaming (RTP, SRT, RTSP, WebRTC)",
            "Hardware-accelerated media pipelines tuned for RK3588, Jetson, i.MX8",
            "Custom AV sync tuning down to ±10ms lip-sync accuracy",
            "Proven track record in broadcast and surveillance deployments",
            "Flexible integration with OBS, Open Broadcast Encoder, and custom sinks",
            "Specialized in high-performance, low-footprint embedded pipelines",
        ],
        cta: [
            {
                ctaTitle: "Build <span class='text-primary'>Streaming Pipelines</span> That Just Work",
                Ctadescription: "Whether you're building the next live media device or customizing a complex broadcast encoder, our multimedia engineering helps you deliver seamless video experiences — with accuracy, performance, and reliability.",
                ctaButtonText: "Talk to a MediaTech Expert",
            }
        ]
    },
    {
        bgImg: '/images/bg/serviceBg/embeddedQa.png',
        id: "embedded-software-testing",
        imageName: QaJPg,
        pathText: "Embedded Software Testing",
        category: "Ensuring Quality, Reliability & Stability at Every Embedded Layer",
        tagLine: "Tested for Production. Validated for Scale. Engineered for Zero Defects.",
        overview: ["Our QA and test automation services are purpose-built for embedded systems — where hardware, firmware, and software interact in real time. We help product teams uncover edge-case bugs, prevent regressions, and ensure their systems remain stable in production environments.", "Whether you’re validating BSP bring-up, AV streaming stability, or end-to-end device workflows, we create robust testing strategies that simulate real-world usage across edge devices, protocols, and networks. The result: rock-solid embedded products with confidence at scale."],
        capabilities: [
            {
                title: "Embedded QA Strategy & Test Planning",
                desc: "Tailored test strategy for embedded lifecycle — from board bring-up to production deployment.",
                points: [
                    "Test strategy aligned with hardware-software integration",
                    "Static code analysis and peer review planning",
                    "QA checklist design across system, integration, and regression phases",
                ]
            },
            {
                title: "Test Automation Framework Development",
                desc: "Automation built for embedded devices — headless, hardware-controlled, and network-aware.",
                points: [
                    "Python, PyTest, Robot Framework integration",
                    "CLI-based test harness for embedded Linux targets",
                    "Hardware-in-loop (HIL) and peripheral-driven automation",
                ]
            },
            {
                title: "Multimedia & Streaming Test Automation",
                desc: "Validate audio-video quality, protocol flows, and streaming stability.",
                points: [
                    "Automated GStreamer/FFmpeg pipeline testing",
                    "AV sync validation under variable network conditions",
                    "Codec, framerate, latency, and buffer underflow test cases",
                ]
            },
            {
                title: "BSP-Level & Driver Validation",
                desc: "Ensure reliability of low-level firmware and peripheral interfaces.",
                points: [
                    "Peripheral bring-up verification (UART, SPI, I2C, GPIO, etc.)",
                    "U-Boot and Linux boot sequence test coverage",
                    "Driver porting and version compatibility testing",
                ]
            },
            {
                title: "Continuous Integration & Test Reporting",
                desc: "Seamless QA integration into your dev lifecycle for faster releases.",
                points: [
                    "GitLab CI, Jenkins, and custom CI pipelines for embedded QA",
                    "Test dashboards and pass/fail metrics",
                    "Alerts for regressions, broken builds, or hardware-level failures",
                ]
            },
            {
                title: "Performance, Power & Stress Testing",
                desc: "We design and execute high-load test cases to validate embedded systems under real-world constraints and continuous operation.",
                points: [
                    "CPU/GPU/memory stress tests for embedded devices",
                    "Power consumption and thermal profiling",
                    "Long-duration soak and reliability testing",
                ]
            }
        ],
        useCaseImg: QaUseCase,
        whyImg: QaWhy,
        useCases: [
            "Automated testing of embedded GUIs and hardware I/Os",
            "End-to-end system testing for firmware, apps, and drivers",
            "Stress testing and power profiling for industrial devices",
            "Regression testing setup for CI/CD pipelines",
            "Custom test harnesses for board validation and factory QA",
            "Test strategy consulting for product companies",
        ],
        whyChooseUs: [
            "Complete embedded test automation stack: Squish, PyTest, CI tools",
            "Hardware-in-loop (HIL) test setups for real-time validation",
            "Coverage reports, performance metrics, and bug tracking built-in",
            "Deep integration with dev and QA teams for faster iteration",
            "Domain-specific testing: AV pipelines, sensor data, protocol stacks",
            "Strong focus on reliability, edge-case handling, and fault injection",
        ],
        cta: [
            {
                ctaTitle: "Embedded Testing You Can <span class='text-primary'>Trust</span>",
                Ctadescription: "From automated GUI tests to hardware-level validation, we help you deliver rock-solid embedded products with fewer bugs, faster cycles, and real-world resilience.",
                ctaButtonText: "Explore Test Automation with Us",
            }
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
                        <h2 className='text-2xl md:text-5xl xl:text-[50px] font-normal text-white leading-tight text-center pb-4'>{service.category}</h2>
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
                                <div className="hidden sm:flex absolute top-4 right-4 text-white bg-primary size-6 lg:size-8 items-center justify-center rounded-full text-xs lg:text-sm font-medium shadow-md">
                                    {i + 1}
                                </div>
                                <div className="p-6 md:p-8">
                                    <h4 className="text-lg md:text-xl font-semibold text-primary mb-3">{cap.title}</h4>
                                    <p className='text-sm sm:text-[15px] text-[#5d6471] mb-3'>{cap.desc}</p>
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
                    <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize pb-4'>Use <span className='text-primary'>Cases</span> We <span className='text-primary'>Serve</span></h3>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 items-center'>
                        <div className="relative border-l border-[#3078fb]/40 pl-6 space-y-6">
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
                        <div className=''>
                            {service?.useCaseImg && (
                                <Image
                                    src={service.useCaseImg}
                                    alt="Usecase"
                                    height={400}
                                    width={400}
                                    className="object-cover h-[510px] w-full rounded-lg"
                                    priority
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why eByteLogic */}
            <section className="bg-[#f9fbfd] py-16 sm:py-28">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4">
                    <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight text-center'>Why <span className='text-primary'>eByteLogic?</span></h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 py-8 gap-3 items-center'>
                        <div className='space-y-6 w-fit'>
                            {service.whyChooseUs.map((reason, i) => (
                                <div key={i} className="flex justify-start flex-wrap min-[477px]:flex-nowrap gap-4 items-center">
                                    <div className="min-w-[50px] text-[#d1e2fc] text-4xl font-black select-none pointer-events-none leading-none">
                                        0{i + 1}
                                    </div>
                                    <div className='w-fit'>
                                        <p className="text-sm sm:text-[15px] text-[#5d6471] font-medium">
                                            {reason}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {service?.whyImg && (
                            <Image
                                src={service?.whyImg}
                                alt="Usecase"
                                width={500} className='rounded-2xl mt-4 h-[350px] object-cover md:mt-0 mx-auto'
                            />
                        )}
                    </div>
                </div>
            </section>

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
                                    variant="default" className='w-full sm:w-fit mx-auto text-center flex items-center justify-center gap-1'
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
        </div>
    );
};

export default ServiceDetailsInfo;

export const runtime = 'edge';