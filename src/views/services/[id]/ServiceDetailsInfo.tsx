'use client';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';

import Button from '@/src/components/Button';

import WhyJpeg from '@/src/assets/images/services/why.jpeg'
import UsecaseJpg from '@/src/assets/images/services/usecase.avif'
import OverviewJPg from '@/src/assets/images/services/overview.jpg'
import EmbeddedDevelopmentJPg from '@/src/assets/images/services/embedded-development.jpg'
import QaJPg from '@/src/assets/images/services/qa.jpg'
import IosJPg from '@/src/assets/images/services/iot.avif'
import SdkWebp from '@/src/assets/images/services/sdk.webp'
import FrameworkWebp from '@/src/assets/images/services/multimedia.webp'
import LinuxPng from '@/src/assets/images/services/linux.png'

const serviceData = [
    {
        id: 0,
        slug: "embedded-software",
        category: "Powering Smart Devices with Embedded Intelligence",
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
        id: 1,
        slug: "linux-bsp-android",
        imageName: LinuxPng,
        category: "Bring Hardware to Life with Linux.",
        tagLine: "Custom BSPs | Fast Bring-Up | Production-Grade Integration",
        overview: ["At eByteLogic, we help hardware teams rapidly bring embedded devices to life with reliable, production-ready Linux BSPs. From bootloader customization to driver and secure boot implementation, our BSP experts work across Yocto and Buildroot to ensure seamless hardware-software alignment.", "Whether you’re building an evaluation board, a custom SoM, or a full-fledged production board, we accelerate bring-up, streamline peripheral support, and fine-tune your platform for speed, security, and stability."],
        capabilities: [
            {
                title: "Board Bring-Up & Peripheral Integration",
                desc: "We handle the complete bring-up of new boards and peripherals, enabling early testing, validation, and productization.",
                points: [
                    "UART, I2C, SPI, USB, Ethernet, and GPIO driver integration",
                    "Display, touchscreen, audio, camera sensor support",
                    "Custom device tree configuration and validation",
                ]
            },
            {
                title: "Bootloader & Secure Boot Customization",
                desc: "We customize U-Boot and implement secure boot mechanisms to protect your IP and ensure verified firmware.",
                points: [
                    "U-Boot porting and splash screen enablement",
                    "Secure boot with verified boot chain",
                    "Custom boot sequences and fast boot optimization"
                ]
            },
            {
                title: "Yocto & Buildroot Customization",
                desc: "We tailor embedded Linux distributions for your board using the right build system for your needs.",
                points: [
                    "Yocto layer creation and meta-layer integration",
                    "Buildroot migration, optimization, and firmware packaging",
                    "Hybrid build system support and debugging"
                ]
            },
            {
                title: "Kernel & Driver Development",
                desc: "We backport, port, or develop drivers from scratch to ensure every component is fully supported.",
                points: [
                    "Forward/backward Linux driver porting",
                    "Kernel configuration and patch management",
                    "In-tree and out-of-tree module development",
                ]
            },
            {
                title: "OTA Firmware Update & Recovery Systems",
                desc: "We implement robust over-the-air (OTA) mechanisms with safety and rollback capabilities.",
                points: [
                    "Dual-partition firmware update logic",
                    "Factory reset and fallback image support",
                    "Custom update utilities and shell-based scripts",
                ]
            },
            {
                title: "Display, Camera & Audio Interface Integration",
                desc: "We enable and tune hardware peripherals (DSI, CSI, I2S, HDMI, etc.) for production-ready multimedia, vision, and control use cases.",
                points: [
                    "MIPI-DSI/CSI display and camera support on Linux",
                    "Audio codec enablement and ALSA-level tuning",
                    "HDMI & LVDS integration with u-boot and kernel drivers",
                ]
            }
        ],
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
        id: 2,
        slug: "multimedia-framework",
        imageName: FrameworkWebp,
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
        id: 3,
        slug: "mobile-app-development",
        imageName: IosJPg,
        category: "Seamless Data Connectivity for Smart Devices & Edge Systems",
        tagLine: "Connect. Stream. Control. Build Smarter Embedded Systems with Cloud-Aware Architecture.",
        overview: ["Modern embedded products no longer operate in isolation — they communicate, stream data, receive updates, and trigger actions through the cloud. At eByteLogic, we in IoT and cloud integration for embedded systems, enabling secure, low-latency communication between devices, edge platforms, and cloud backends.", "We design and implement firmware-to-cloud data pipelines, event handling, OTA mechanisms, and protocol stacks that work reliably across real-world environments.", "Whether it’s a remote sensing device, fire safety panel, or connected multimedia node, we bring full-stack IoT expertise to your product."],
        capabilities: [
            {
                title: "Embedded-to-Cloud Communication",
                desc: "Secure and reliable communication protocols for data push/pull between devices and cloud services.",
                points: [
                    "MQTT, CoAP, HTTP/HTTPS integration",
                    "TLS security for encrypted transmission",
                    "RESTful APIs and WebSocket-based bi-directional data flows",
                ]
            },
            {
                title: "Device Provisioning & Identity Management",
                desc: "Manage unique device identities, credentials, and secure onboarding at scale.",
                points: [
                    "Secure element integration for hardware-backed keys",
                    "Cloud-side certificate provisioning and validation",
                    "Token-based device authorization (JWT/OAuth)",
                ]
            },
            {
                title: "OTA (Over-The-Air) Updates & Remote Configuration",
                desc: "Deploy firmware and configuration updates across distributed devices with rollback safety.",
                points: [
                    "Full + delta firmware update delivery mechanisms",
                    "Factory reset and version rollback support",
                    "Integration with AWS IoT, Azure IoT Hub, or custom update servers",
                ]
            },
            {
                title: "Edge-to-Cloud Data Pipeline Engineering",
                desc: "Design efficient data pipelines from edge devices to analytics dashboards or cloud functions.",
                points: [
                    "Buffering, retry mechanisms, and data integrity checks",
                    "Local caching and conditional sync",
                    "Cloud-to-device message processing and command execution",
                ]
            },
            {
                title: "IoT Cloud Platform Integration",
                desc: "Embed your system into major IoT ecosystems or custom cloud stacks.",
                points: [
                    "AWS IoT Core, Azure IoT Hub, GCP IoT Core integrations",
                    "Dashboard enablement, alert triggers, and device state monitoring",
                    "Custom microservices and backend APIs for device management",
                ]
            },
            {
                title: "Edge Analytics & Device Intelligence",
                desc: "We enable on-device processing, alerting, and decision-making through embedded ML,rule engines, and stream processing.",
                points: [
                    "Edge ML models deployed via TensorFlow Lite or ONNX",
                    "Rule-based engines for threshold-based actions",
                    "Local stream aggregation before cloud sync",
                ]
            }
        ],
        useCases: [
            "MQTT-based data publishing from edge to cloud",
            "Remote monitoring and OTA updates for field devices",
            "AWS IoT, Azure IoT Hub, and Google Cloud integrations",
            "Lightweight protocol implementation (CoAP, LWM2M, HTTP REST)",
            "Secure data flow pipelines (TLS, authentication, token-based)",
            "Edge computing and device rule engine implementation",
        ],
        whyChooseUs: [
            "Experts in IoT protocols, security, and device-cloud sync",
            "Deep Linux experience ensures stable edge-side integrations",
            "Full-stack solutions: device firmware + cloud dashboard",
            "Rapid POCs and MVPs for connected product startups",
            "Extensive testing for real-world deployment readiness",
            "Experience across wearable, fire safety, industrial, and broadcast IoT",
        ],
        cta: [
            {
                ctaTitle: "<span class='text-primary'>Connect</span> Your Devices, <span class='text-primary'>Unlock Their</span> Potential",
                Ctadescription: "We help you turn embedded systems into connected solutions — enabling data flow, remote control, and intelligence across the cloud-edge continuum.",
                ctaButtonText: "Start My IoT Integration",
            }
        ]
    },
    {
        id: 4,
        slug: "qa-validation",
        imageName: QaJPg,
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
    {
        id: 5,
        slug: "middleware-sdk",
        category: "Mastering Protocols, Sync, and Codecs for Seamless Streaming",
        tagLine: "NDI | RTP | SRT | H.264/H.265 | AAC | Lip-Sync | Closed Captions",
        imageName: SdkWebp,
        bannerImage: "/images/middleware-sdkBanner.webp",
        overviewImage: "/images/aboutBanner.png",
        overview: ["We engineer high-performance audio-video pipelines by fine-tuning every layer of the AV stack — from protocols and codecs to timestamp handling and sync alignment. Our expertise ensures real-time transport, ultra-low latency, and flawless lip-sync across professional broadcasting systems and embedded platforms.", "With deep knowledge of open standards and proprietary formats, we help teams build reliable media delivery solutions — whether it’s a live production encoder, a smart camera, or a software-defined AV device."],
        capabilities: [
            {
                title: "Audio-Video Protocol Implementation",
                desc: "Custom integration, optimization, and troubleshooting of AV protocols.",
                points: [
                    "Protocols: RTP, RTSP, SRT, HLS, RTMP, RIST, NDI",
                    "Timestamp management and jitter handling",
                    "Protocol bridging and format translation",
                ]
            },
            {
                title: "Codec Integration & Tuning",
                desc: "Seamless handling of audio/video compression for embedded systems.",
                points: [
                    "Video codecs: H.264, H.265, MJPEG",
                    "Audio codecs: AAC, Opus, PCM, MP3",
                    "Hardware-accelerated encoding/decoding setup",
                ]
            },
            {
                title: "Lip-Sync & AV Sync Optimization",
                desc: "Precise sync between audio and video for real-time systems.",
                points: [
                    "Handling PTS/DTS and sync buffers",
                    "Clock skew and drift compensation",
                    "Sync validation and tuning for GStreamer/FFMPEG",
                ]
            },
            {
                title: "Closed Captioning & Subtitles Handling",
                desc: "Standards-compliant captioning pipelines for regulated markets.",
                points: [
                    "LINE21 analog captions (CEA-608)",
                    "DTVCC (CEA-708) digital closed captions",
                    "Conversion: LINE21 ↔ DTVCC",
                ]
            },
            {
                title: "Embedded Media Pipeline Debugging",
                desc: "Systematic troubleshooting and fine-tuning of AV pipelines.",
                points: [
                    "Buffer management and data flow analysis",
                    "Latency tracing and reduction strategies",
                    "Codec negotiation and error resilience",
                ]
            },
            {
                title: "Captioning & Subtitle Pipeline Integration",
                desc: "We implement analog and digital captioning support across multiple formats for live and offline use cases.",
                points: [
                    "LINE21 analog closed captioning (CEA-608)",
                    "DTVCC digital captions (CEA-708) support",
                    "Conversion between LINE21 <--> DTVCC for regulatory compliance",
                ]
            }
        ],
        useCases: [
            "Custom implementation of AV streaming protocols (NDI, RTP, SRT, RTMP, HLS)",
            "Codec integration and tuning (H.264/H.265, VP9, AV1, MJPEG)",
            "Hardware codec offloading for performance and power gains",
            "Legacy protocol support and transcoding bridges",
            "Video/audio muxing/demuxing for embedded pipelines",
            "End-to-end AV sync optimization across capture, encode, transmit",
        ],
        whyChooseUs: [
            "Experts in both legacy and modern AV streaming protocols",
            "Direct work with encoder/decoder IP and GPU/VPU units",
            "Proven in 60fps, low-latency, multi-channel applications",
            "Ability to trace, debug, and patch AV pipeline issues at protocol level",
            "Successful integration across security, drone, and broadcast products",
            "Deep understanding of buffer management, timestamping, and sync logic",
        ],
        cta: [
            {
                ctaTitle: "Make <span class='text-primary'>AV Protocols</span> Your Competitive Advantage",
                Ctadescription: "Whether you're integrating NDI, optimizing for AV1, or achieving perfect lip-sync — our protocol engineers help you unlock low-latency, high-fidelity media flows.",
                ctaButtonText: "Optimize My AV Pipeline",
            }
        ]
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
                        <h2 className='text-2xl md:text-5xl xl:text-[50px] font-normal text-white leading-tight text-center pb-4'>{service.category}</h2>
                        <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'>{service.tagLine}</p>
                    </div>
                </section>
            </section>

            {/* Overview */}
            <section className="py-16 sm:py-28">
                <div className='max-w-[1400px] mx-auto px-4 sm:px-6'>
                    <div className='space-y-4 pb-12'>
                        <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize text-center'>Overview
                        </h3>
                        {Array.isArray(service.overview) ? (
                            service.overview.map((para, index) => (
                                <p
                                    key={index}
                                    className='text-[#5d6471] text-sm sm:text-[15px] md:px-6 text-center'
                                >
                                    {para}
                                </p>
                            ))
                        ) : (
                            <p className='text-[#5d6471] text-sm sm:text-[15px] md:px-6 text-center'>
                                {service.overview}
                            </p>
                        )}

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
                                    <div className="text-[#d1e2fc] text-4xl font-black select-none pointer-events-none leading-none">
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
