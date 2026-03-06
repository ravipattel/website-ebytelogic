export type IndustryMeta = {
    id: string;
    title: string;
    description: string;
};

export const industryMetaData = {
    "media-broadcasting-multimedia": {
        id: "media-broadcasting-multimedia",
        title: "Broadcast-Grade Media Software & Streaming Optimization",
        description:
            "Achieve lag-free, high-fidelity media performance. eByteLogic specializes in broadcast-grade Linux video pipelines, GStreamer tuning, and low-latency streaming."
    },
    "edge-ai-vision-systems": {
        id: "edge-ai-vision-systems",
        title: "Edge AI & Computer Vision Software | Real-Time Performance",
        description:
            "Move AI from the cloud to the edge. eByteLogic specializes in low-latency vision pipelines, NPU acceleration, and production-hardened AI for embedded Linux."
    },
    "networking-and-telecom-gateways": {
        id: "networking-and-telecom-gateways",
        title: "Embedded Software for Fire Safety Panels | eByteLogic",
        description:
            "Build safer, smarter fire safety systems. eByteLogic delivers embedded software, Linux BSPs, and connectivity solutions for intelligent fire panels and alarms."
    },
    'industrial-automation-iiot': {
        id: "industrial-automation-iiot",
        title: "Aerospace & Remote Sensing Embedded Solutions | eByteLogic",
        description:
            "eByteLogic develops high-performance embedded software for aerospace, drones, and remote sensing — from real-time signal processing to device connectivity."
    },
    "industrial-automation-iot-gateways": {
        id: "industrial-automation-iot-gateways",
        title: "Industrial IoT & Automation Software Experts | eByteLogic",
        description:
            "Enable real-time monitoring and cloud-connected automation with eByteLogic. We deliver embedded IoT software, BSPs, and device integration for Industry 4.0."
    },
    "smart-displays-and-hmis": {
        id: "smart-displays-and-hmis",
        title: "High-Performance HMI Software & Smart Display Engineering",
        description:
            `Eliminate UI lag and system crashes. eByteLogic specializes in hardening embedded Linux HMIs, from 60 FPS graphics optimization to "Instant-On" boot sequences.`
    }
}

// Helper functions
export function getIndustry(id: string): IndustryMeta | null {
    return industryMetaData[id] || null;
}

export async function getAllIndustries(): Promise<IndustryMeta[]> {
    return Object.values(industryMetaData);
}

//info data 
import wearablesPng from '@/src/assets/images/industry/industryWearables.png'
import MediaPng from '@/src/assets/images/industry/industryMedia.png'
import MotherBoardPng from '@/src/assets/images/industry/industrySemiconductor.png'
import TelecomPng from '@/src/assets/images/home/industry/telecom.png';
import IotPng from '@/src/assets/images/industry/industryIot.png'
import AerospaceJpg from '@/src/assets/images/industry/industryAerospace.png'

export const industryData = [
    {
        id: 'smart-displays-and-hmis',
        breadCrumb: 'Smart Displays & HMIs',
        image: wearablesPng,
        backgroundImage: '/images/bg/industry/wearablesBg.png',
        hero: {
            headline: "High-Performance HMI Software for Mission-Critical Displays",
            subtext: "From BSP bring-up to polished user interfaces, we engineer responsive, stable, and visually rich HMI software for smart displays used in industrial, automotive, and connected devices.",
            cta: "Book a Technical HMI Review",
        },
        intro: `We build responsive, low-latency, and production-ready HMI solutions. From instant-on boot times to lag-free 4K streaming, we ensure your smart display performs as good as it looks.`,
        introVariant: 'compact',
        introBtnText: 'Book a Technical HMI Review',
        coreChallengesTitle: 'Challenges in the HMI Industry',
        subCoreText: "Moving from a sleek design to a field-ready product presents several critical engineering hurdles:",
        coreChallenges: [
            {
                title: "GPU & Performance Lag",
                description: "Standard UI frameworks often stutter on embedded SoCs. Achieving consistent 60 FPS requires deep driver optimization and hardware acceleration."
            },
            {
                title: "Critical Boot Latency",
                description: `In the medical or automotive sectors, long startups are safety risks. Engineering "Instant-On" splash screens (under 2 seconds) requires specialized kernel tuning.`
            },
            {
                title: "Silicon Dependency",
                description: `Tying a UI too closely to specific hardware creates supply chain risk. Building a portable abstraction layer is essential but technically demanding.`
            },
            {
                title: "Long-Term Field Stability",
                description: `Unlike a demo, production units must handle 24/7 thermal stress and "brick-free" OTA updates without hanging or crashing.`
            },
        ],
        capabilities: {
            title: 'Core HMI & Smart Display Capabilities',
            capabilitiesData: [
                {
                    "title": "Modern Framework Expertise",
                    "intro": "We build fluid, cross-platform interfaces tailored to your hardware’s constraints.",
                    "points": [
                        "<span class='font-semibold'>High-End Graphics:</span> Expert implementation using Qt/QML and Flutter for Embedded for smartphone-like fluidity.",
                        "<span class='font-semibold'>Resource-Light UI:</span> Optimized LVGL and Crank Storyboard development for power-efficient MCU/MPU platforms."
                    ]
                },
                {
                    "title": "Hardware-Accelerated Performance",
                    "intro": "We eliminate lag by driving the UI directly through the silicon's native strengths.",
                    "points": [
                        "<span class='font-semibold'>60 FPS Smoothness:</span> Full GPU/VPU optimization using OpenGL ES, Vulkan, and Wayland/Weston.",
                        "<span class='font-semibold'>Zero-Copy Video:</span> Seamlessly integrating low-latency camera feeds and 4K media overlays without taxing the CPU."
                    ]
                },
                {
                    "title": "\"Instant-On\" Boot Optimization",
                    "intro": "We ensure your HMI is ready the moment power is applied.",
                    "points": [
                        `<span class='font-semibold'>Fast-Path Booting:</span> Achieving "Early Splash" screens in under 2 seconds.`,
                        "<span class='font-semibold'>System Hardening:</span> Trimming Linux kernel bloat to reach full UI interactivity in record time."
                    ]
                },
                {
                    "title": "Production-Grade Stability",
                    "intro": "An HMI is only as good as the OS beneath it.",
                    "points": [
                        "<span class='font-semibold'>BSP Integration:</span> Custom Yocto/Buildroot layers designed specifically for display stability.",
                        "<span class='font-semibold'>Kiosk Hardening:</span> Secure, locked-down environments that prevent crashes and unauthorized access in the field."
                    ]
                }
            ],
        },
        integrations: {
            title: "Technical Integrations",
            description:
                "We don’t just build the interface; we engineer the entire stack to ensure the HMI and hardware communicate perfectly.",
            items: [
                {
                    title: "Custom BSP Alignment",
                    description:
                        "We tune Yocto and Buildroot layers to prioritize display drivers and GPU libraries, ensuring the OS stays out of the way of the user experience."
                },
                {
                    title: "Low-Latency Media Pipelines",
                    description:
                        "Deep integration with GStreamer and FFMPEG for hardware-accelerated video playback and lag-free camera overlays within the UI."
                },
                {
                    title: "Hardware Abstraction (HAL)",
                    description:
                        "We decouple your HMI from the specific silicon, making it easier to port your software to new hardware as chip availability shifts."
                },
                {
                    title: "Unified Input Handling",
                    description:
                        "Expert calibration for multi-touch, haptics, and physical rotary encoders to ensure instant user feedback."
                }
            ],
        },
        useCases: {
            title: "Use Cases & Applications",
            description:
                "Our HMI solutions are built for environments where a system crash isn't just an inconvenience, it's a critical failure.",
            items: [
                {
                    title: "Industrial Automation",
                    description:
                        "Ruggedized touch panels and PLC interfaces designed for 24/7 reliability on the factory floor."
                },
                {
                    title: "Medical Technology",
                    description:
                        "High-resolution, certified displays for diagnostic equipment and patient monitoring where 100% uptime is mandatory."
                },
                {
                    title: "Automotive & EV",
                    description:
                        `Digital instrument clusters and infotainment (IVI) systems with "instant-on" rear-view camera integration.`
                },
                {
                    title: "Smart IoT & Appliances",
                    description:
                        `Energy-efficient, "always-on" smart home displays that balance sleek animations with minimal power consumption.`
                },
                {
                    title: "Edge AI Displays",
                    description:
                        "Integrating real-time inference data and object detection overlays directly onto high-definition video feeds."
                }
            ]
        },
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
        whyUsHeadline: 'Why Engineering Teams Choose eByteLogic',
        whyUsSubtext: `We bridge the gap between <span class="font-semibold">"design-heavy"</span> UI agencies and <span class="font-semibold">"hardware-only"</span> shops. When you partner with us, you get:`,
        whyUs: [
            {
                title: 'Production-Hardened Code',
                description: `We don't deliver "demo code." We deliver stable, field-tested software designed to run for years without a reboot.`,
            },
            {
                title: 'Time-to-Market Velocity',
                description: `Our pre-optimized HMI stacks and deep knowledge of GPU drivers typically reduce development cycles by 4 to 6 weeks.`,
            },
            {
                title: 'Silicon Agnostic Expertise',
                description: `We work across all major chip brands (NXP, TI, NVIDIA, ST), ensuring your UI is portable and future-proof.`,
            },
            {
                title: 'Post-Launch Maintainability',
                description: `We write clean, documented Yocto/Buildroot layers that your in-house team can actually manage after the product ships.`,
            }
        ],
        caseStudy: "We helped a smart display platform achieve faster boot-to-UI times and smoother touch responsiveness by aligning BSP optimization with Qt-based UI performance tuning.",
        cta: {
            headline: "Build a Better Foundation for Your Smart Display",
            ctaSubtext: `If you are developing a mission-critical HMI, the gap between a "working interface" and a "reliable product" is where delays happen. We help you close that gap with a high-performance software stack.`,
            actions: ["Book a 20-Minute Technical Exchange"],
        },
        faqsData: [
            {
                q: "Which HMI frameworks do you support?",
                a: "We are framework-agnostic and choose the tool that best fits your hardware and performance requirements. We have deep expertise in Qt/QML (C++), Flutter for Embedded, and LVGL. We also work with proprietary tools like Crank Storyboard and Altia if your project requires them.",
            },
            {
                q: "Can you help if our current UI is lagging or stuttering?",
                a: "Yes. This is one of our most common requests. We perform a deep-dive audit of your graphics pipeline, checking GPU/VPU utilization, driver configurations, and memory management, to identify the bottleneck and restore a smooth 60 FPS experience.",
            },
            {
                q: `How do you handle "Instant-On" requirements?`,
                a: `We optimize the entire boot chain, from the bootloader (U-Boot) to the Linux kernel and application layer. By implementing "Early Splash" techniques and stripping non-essential services, we can often get critical UI elements visible and interactive within 2 to 5 seconds of power-on.`,
            },
            {
                q: "Can you port our existing HMI to new silicon?",
                a: "Absolutely. We specialize in Hardware Abstraction, allowing us to move your UI logic from one SoC to another (e.g., transitioning from NXP to TI or ST) while maintaining performance. This is particularly useful for companies looking to future-proof their products against chip supply chain volatility.",
            },
            {
                q: "Do you provide the UI design, or just the engineering?",
                a: `While our core strength is embedded engineering and performance optimization, we often collaborate with your internal design team or external UI/UX agencies. We take their "vision" (Figma/Adobe XD files) and turn it into production-ready, high-performance code that actually works on your specific hardware.`,
            },
        ]
    },
    {
        id: 'edge-ai-vision-systems',
        breadCrumb: 'Edge AI & Vision Systems',
        image: MotherBoardPng,
        backgroundImage: '/images/bg/industry/semiconductorBg.png',
        hero: {
            headline: "Edge AI and Vision Software Built for Real-Time Performance",
            subtext: "From camera bring-up to low-latency video pipelines, we engineer high-performance edge vision systems designed for real-time inference, reliability, and deployment at scale.",
        },
        intro: `We bridge the gap between high-level AI models and resource-constrained embedded hardware. From optimizing neural networks for NPU acceleration to building zero-copy vision pipelines, we ensure your Edge AI application delivers lightning-fast inference without compromising stability.`,
        introVariant: 'compact',
        introBtnText: 'Book a Technical Edge AI Review',
        coreChallengesTitle: 'Challenges in the Edge AI Industry',
        subCoreText: `Moving AI from powerful cloud servers to the "Edge" introduces unique engineering hurdles that can break a product's viability:`,
        coreChallenges: [
            {
                title: "Inference Latency",
                description: "Standard AI models are often too heavy for embedded SoCs. Achieving real-time detection (30+ FPS) requires deep model quantization and hardware-specific optimization."
            },
            {
                title: "Thermal & Power Constraints",
                description: `Running high-duty cycle AI models can cause embedded devices to overheat or drain batteries rapidly. Balancing "Top Performance" with "Thermal Stability" is a delicate engineering act.`
            },
            {
                title: "Resource Contention",
                description: `AI tasks often fight with the HMI or networking stack for CPU/GPU cycles. Without proper system-level prioritization, the entire device can become unresponsive`
            },
            {
                title: "Model Deployment at Scale",
                description: `Updating AI models on thousands of field-deployed devices without "bricking" them or losing data is a massive operational risk.`
            },
        ],
        capabilities: {
            title: 'Core Edge AI & Vision Capabilities',
            capabilitiesData: [
                {
                    "title": "NPU & Accelerator Optimization",
                    "intro": "We unlock the specialized AI hardware inside your silicon to maximize throughput.",
                    "points": [
                        "<span class='font-semibold'>Hardware Acceleration:</span> Expert utilization of NPUs, TPUs, and DSPs from NXP (i.MX), TI (Sitara), and NVIDIA (Jetson).",
                        "<span class='font-semibold'>Model Quantization:</span> Converting heavy FP32 models to INT8 or Float16 to increase speed by 5x–10x with minimal accuracy loss."
                    ]
                },
                {
                    "title": "High-Speed Vision Pipelines",
                    "intro": "We ensure the data reaches the AI engine without unnecessary delays.",
                    "points": [
                        "<span class='font-semibold'>Zero-Copy Architecture:</span> Using DMA-BUF to move camera data directly to the AI engine, bypassing the CPU to save precious cycles.",
                        "<span class='font-semibold'>ISP & Sensor Tuning:</span> Customizing Image Signal Processors to ensure the AI receives clear, high-contrast frames regardless of lighting conditions."
                    ]
                },
                {
                    "title": `Embedded Framework Mastery`,
                    "intro": "We build on the industry’s most reliable open-source and proprietary AI stacks.",
                    "points": [
                        `<span class='font-semibold'>Edge Runtimes:</span> Professional implementation of TensorFlow Lite, ONNX Runtime, and OpenVINO for embedded Linux.`,
                        "<span class='font-semibold'>Custom GStreamer Plugins:</span>  Integrating AI inference directly into your video pipeline for seamless real-time overlays."
                    ]
                },
                {
                    "title": "Production-Grade Deployment",
                    "intro": "We ensure your AI remains reliable long after the initial training.",
                    "points": [
                        "<span class='font-semibold'>Secure AI Life Cycle:</span> Implementing Secure Boot to protect your proprietary models from IP theft or tampering.",
                        "<span class='font-semibold'>Over-the-Air (OTA) Updates: </span> Building robust systems to push retrained models to the field safely and efficiently."
                    ]
                }
            ],
        },
        integrations: {
            title: "Technical Integrations",
            description:
                "We engineer the underlying software stack to support high-intensity AI workloads.",
            items: [
                {
                    title: "Real-Time BSP Optimization",
                    description:
                        "We tune the Linux kernel and Yocto layers to prioritize AI threads, ensuring that inference tasks don't interfere with critical system functions."
                },
                {
                    title: "Shared Memory Management",
                    description:
                        "Implementation of ION or CMA (Contiguous Memory Allocator) to handle large video buffers efficiently across the CPU, GPU, and NPU."
                },
                {
                    title: "Multi-Sensor Fusion",
                    description:
                        "Integrating data from multiple sources, such as stereo cameras, LiDAR, and IMUs, into a unified AI processing stream."
                },
                {
                    title: "Edge-to-Cloud Orchestration",
                    description:
                        `Building the "thin" middleware that allows your edge device to send filtered, high-value metadata to the cloud while keeping the heavy processing local.`
                }
            ],
        },
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
            useCases: {
                title: "Use Cases & Applications",
                description:
                    "Our Edge AI solutions are built for autonomous and intelligent systems that cannot rely on cloud latency.",
                items: [
                    {
                        title: "Industrial Inspection",
                        description:
                            "Real-time defect detection and quality control on high-speed manufacturing lines."
                    },
                    {
                        title: "Smart Cities & Traffic",
                        description:
                            "Intelligent camera systems for vehicle counting, license plate recognition, and pedestrian safety."
                    },
                    {
                        title: "Medical Diagnostics",
                        description:
                            `AI-assisted surgical tools and portable diagnostic devices with real-time image enhancement.`
                    },
                    {
                        title: "Autonomous Robotics",
                        description:
                            `Low-latency obstacle avoidance and SLAM (Simultaneous Localization and Mapping) for warehouse AMRs.`
                    },
                    {
                        title: "Drones & Aerospace",
                        description:
                            "Lightweight, power-efficient vision systems for object tracking and autonomous landing."
                    }
                ]
            },
            whyUsHeadline: 'Why Engineering Teams Choose eByteLogic',
            whyUsSubtext: `We turn "Experimental AI" into "Production-Ready Vision Systems."`,
            whyUs: [
                {
                    title: 'Production-Hardened Inference',
                    description: `We don't just run a script; we build stable, C++ based wrappers and optimized pipelines designed for 24/7 reliability.`,
                },
                {
                    title: 'Time-to-Market Velocity',
                    description: `Our library of pre-optimized vision kernels and NPU layers typically reduces development cycles by 4 to 6 weeks.`,
                },
                {
                    title: 'Silicon Agnostic Expertise',
                    description: `We specialize in porting and optimizing models across NXP, TI, NVIDIA, and Renesas platforms.`,
                },
                {
                    title: 'Post-Launch Maintainability',
                    description: `We deliver clean, version-controlled Yocto layers that allow your team to update models without rebuilding the entire OS.`,
                }
            ],
        caseStudy: "We helped an edge vision platform reduce glass-to-glass latency to under 100ms by optimizing camera capture, hardware-accelerated encoding, and real-time display pipelines on an embedded SoC.",
        cta: {
            headline: "Build a Reliable Foundation for Your Vision Product",
            ctaSubtext: `If you are moving AI from the lab to the field, the software foundation is what determines your product's success. We help you deliver the speed and reliability your application demands.`,
            actions: ["Book a Free Consultation"],
        },
        faqsData: [
            {
                q: "Which AI frameworks do you support?",
                a: "We work extensively with TensorFlow Lite, ONNX Runtime, PyTorch (LibTorch), and OpenVINO. We also leverage vendor-specific toolkits like NXP's eIQ, TI's TIDL, and NVIDIA's TensorRT.",
            },
            {
                q: "Can you help us speed up our current inference time?",
                a: `Yes. We perform a "Full-Stack Audit," looking at everything from model architecture and quantization to the GStreamer pipeline and memory management. We typically see significant speedups by offloading tasks from the CPU to the NPU/GPU.`,
            },
            {
                q: `How do you handle low-light or difficult vision environments?`,
                a: `We provide custom ISP (Image Signal Processor) tuning. By adjusting gain, exposure, and noise reduction at the driver level, we ensure the AI engine receives the highest quality "raw" data possible.`,
            },
            {
                q: "Is my AI model secure on the device?",
                a: `Security is a core part of our "Production Hardening." We use Secure Boot and encrypted file systems to ensure your proprietary models cannot be extracted or tampered with by third parties.`,
            },
            {
                q: "Can you integrate multiple cameras into one AI engine?",
                a: `Yes. We specialize in Multi-Channel Vision Pipelines, utilizing zero-copy techniques to process multiple streams simultaneously without overwhelming the system bus or CPU.`,
            },
        ]
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
        whyUsSubtext: `We design gateway software with the assumption that <span class="font-semibold">downtime is unacceptable.</span>`,
        whyUs: [
            "Strong experience with networking and telecom-grade embedded platforms",
            "Deep BSP, driver, and system-level debugging expertise",
            "Engineering focus on uptime, recoverability, and maintainability",
        ],
        caseStudy: "We helped a networking device manufacturer stabilize their Linux gateway platform, integrate cellular modems, and implement secure OTA updates — enabling reliable remote deployment and lifecycle management.",
        cta: {
            headline: "Build Gateways That Stay Online and Scale Confidently",
            ctaSubtext: `Whether you’re developing a new telecom gateway or stabilizing an existing networking platform, our team partners with you to deliver <span class="font-semibold">secure, reliable, and production-ready gateway software</span>.`,
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
        intro: `We build high-fidelity, low-latency media systems for professional broadcasting and streaming hardware. From synchronized multi-channel audio to lag-free 4K video pipelines, we ensure your media platform delivers studio-quality performance in every frame.`,
        introVariant: 'compact',
        introBtnText: 'Book a Technical Media Review',
        coreChallengesTitle: 'Challenges in the Broadcast Industry',
        subCoreText: "Developing professional-grade media hardware requires overcoming significant technical hurdles beyond standard playback:",
        coreChallenges: [
            {
                title: "Latency & Frame Drops",
                description: "In live broadcasting, even a millisecond of lag is unacceptable. Achieving glass-to-glass low latency requires deep optimization of the entire VPU and networking stack."
            },
            {
                title: "Audio-Video Desync",
                description: `Maintaining perfect "Lip-Sync" across different formats and bitrates is notoriously difficult, especially when dealing with high-resolution 4K or 8K streams.`
            },
            {
                title: "Protocol Complexity",
                description: `Implementing and hardware-accelerating modern protocols like SRT, NDI, or WebRTC while maintaining low CPU overhead is a massive engineering challenge.`
            },
            {
                title: "Field Reliability",
                description: `Unlike consumer apps, broadcast hardware must handle high-bitrate data 24/7 without overheating, memory leaks, or buffer overflows.`
            },
        ],
        capabilities: {
            title: 'Core Media & Streaming Capabilities',
            capabilitiesData: [
                {
                    "title": "High-Fidelity Video Pipelines",
                    "intro": `We engineer the "plumbing" of your media system to ensure peak visual quality.`,
                    "points": [
                        "<span class='font-semibold'>4K/8K Optimization:</span>  Full hardware-accelerated encoding and decoding using VPU-specific optimizations for NXP, TI, and NVIDIA.",
                        "<span class='font-semibold'>Color Space & HDR:</span> Implementing professional color standards (YUV 4:2:2/4:4:4) and HDR10+ support for studio-grade output."
                    ]
                },
                {
                    "title": "Low-Latency Performance",
                    "intro": "We eliminate the bottlenecks that cause streaming delays and stutter.",
                    "points": [
                        "<span class='font-semibold'>Zero-Copy Rendering:</span> Direct memory access (DMA-BUF) between the camera, VPU, and display to bypass CPU overhead.",
                        "<span class='font-semibold'>GStreamer & FFMPEG Tuning:</span> Custom plugin development and pipeline optimization to shave milliseconds off the processing path."
                    ]
                },
                {
                    "title": `Professional Audio Integration`,
                    "intro": "We ensure your audio is as precise as your video.",
                    "points": [
                        `<span class='font-semibold'>Multi-Channel Sync: </span> Precision audio-video synchronization (AV-Sync) and support for professional formats like Dante or AES67.`,
                        "<span class='font-semibold'>Low-Latency ALSA/PulseAudio: </span> Fine-tuning the audio subsystem to prevent buffer underruns and jitter."
                    ]
                },
                {
                    "title": "Protocol & Streaming Mastery",
                    "intro": "We build the bridges that get your content to the world.",
                    "points": [
                        "<span class='font-semibold'>Broadcasting Standards: </span> Expert implementation of SRT, RIST, NDI, and WebRTC for reliable transport over unpredictable networks.",
                        "<span class='font-semibold'>Secure Content Delivery:</span> Integrating DRM and secure boot to protect high-value media assets at the hardware level."
                    ]
                }
            ],
        },
        integrations: {
            title: "Technical Integrations",
            description:
                "We engineer the entire software stack to support the demanding workloads of professional media.",
            items: [
                {
                    title: "Custom Media BSP Alignment",
                    description:
                        "We tune Yocto and Buildroot layers specifically for multimedia, prioritizing real-time scheduling for video threads and optimizing memory bandwidth."
                },
                {
                    title: "VPU & GPU Acceleration",
                    description:
                        "We unlock the full potential of your silicon’s video processing units to handle heavy transcoding and overlays without taxing the main processor."
                },
                {
                    title: "Specialized Middleware",
                    description:
                        "Deep integration of GStreamer, FFMPEG, and Wayland-IVI to create seamless, multi-window media environments on embedded hardware."
                },
                {
                    title: "Network Stack Tuning",
                    description:
                        "Optimization of the TCP/UDP stack and Wi-Fi/Ethernet drivers to ensure high-throughput, jitter-free streaming even in congested environments."
                }
            ],
        },
        useCases: {
            title: "Use Cases & Applications",
            description:
                "Our media solutions are designed for professional environments where performance is the product.",
            items: [
                {
                    title: "Live Production Gear",
                    description:
                        "Switchers, encoders, and decoders that require sub-frame latency for live event broadcasting."
                },
                {
                    title: "Medical Imaging",
                    description:
                        "Ultra-low latency camera feeds for robotic surgery and high-resolution diagnostic displays."
                },
                {
                    title: "Digital Signage",
                    description:
                        `High-uptime 4K/8K video walls with synchronized playback across multiple networked nodes.`
                },
                {
                    title: "Surveillance & Defense",
                    description:
                        `Secure, low-latency streaming for ISR (Intelligence, Surveillance, Reconnaissance) and situational awareness.`
                },
                {
                    title: "Professional Audio Gear",
                    description:
                        "Networked audio interfaces and DSP platforms requiring microsecond-level synchronization."
                }
            ]
        },
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
        whyUsHeadline: 'Why Engineering Teams Choose eByteLogic',
        whyUsSubtext: 'We bridge the gap between <span class=`font-semibold`>"standard Linux"</span> and <span class=`font-semibold`>"broadcast-grade"</span> performance.',
        whyUs: [
            {
                title: 'Production-Hardened Pipelines',
                description: `We don't just "play video." We build stable, field-tested media stacks designed for 24/7 continuous operation.`,
            },
            {
                title: 'Proven Speed',
                description: `Our pre-built media modules and GStreamer expertise typically reduce development cycles by 4 to 6 weeks.`,
            },
            {
                title: 'Silicon Agnostic Expertise',
                description: `We optimize media performance across all major chipsets, including NXP i.MX8, TI Sitara, and NVIDIA Jetson.`,
            },
            {
                title: 'Post-Launch Maintainability',
                description: `We deliver clean, modular code and Yocto layers that your team can easily update and extend.`,
            }
        ],
        caseStudy: "We helped a broadcast platform provider achieve ±10ms lip-sync accuracy in an SDI-based live playback system and integrated NDI streaming support, enabling them to meet strict customer and broadcast requirements.",
        cta: {
            headline: "Engineering Precision into Your Media Pipeline",
            ctaSubtext: `If you are developing professional streaming or broadcast hardware, the difference between "consumer" and "broadcast" grade is in the engineering. We help you deliver the precision your customers demand.`,
            actions: ["Contact Us Today"],
        },
        faqsData: [
            {
                q: "Which media frameworks do you support?",
                a: "We specialize in GStreamer and FFMPEG, providing custom plugin development and hardware acceleration. We also work with OpenMAX, V4L2, and proprietary VPU APIs from silicon vendors.",
            },
            {
                q: "Can you help us achieve sub-100ms latency?",
                a: `Yes. We specialize in "glass-to-glass" latency optimization. We audit the entire pipeline—from camera sensor capture to network encoding—to eliminate bottlenecks and achieve real-time performance`,
            },
            {
                q: `Do you handle audio-video synchronization issues?`,
                a: `Absolutely. We implement precision clock synchronization and fine-tune buffer management within GStreamer/ALSA to ensure perfect Lip-Sync across all streaming protocols.`,
            },
            {
                q: "Can you optimize media performance on lower-power SoCs?",
                a: "Yes. By utilizing the VPU (Video Processing Unit) and implementing zero-copy memory paths, we can achieve high-resolution video performance even on resource-constrained hardware.",
            },
            {
                q: "How do you handle reliable streaming over the public internet?",
                a: `We implement and tune modern protocols like SRT (Secure Reliable Transport) and WebRTC, which use intelligent retransmission and congestion control to maintain broadcast quality over unstable networks.`,
            },
        ]
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
        whyUsSubtext: `We engineer infotainment software with the mindset that <span class="font-semibold">every system must perform reliably on every drive</span>.`,
        whyUs: [
            "Hands-on experience with automotive infotainment and telematics platforms",
            "Deep expertise across Qualcomm, NXP, TI, and other automotive SoCs",
            "Strong understanding of boot-time, multimedia, and stability requirements",
        ],
        caseStudy: "We helped an automotive display and telematics module provider bring up Linux and Android software, optimize boot time, and stabilize audio/video pipelines, enabling faster platform validation and OEM readiness. ",
        cta: {
            headline: "Build Automotive Platforms Ready for the Road",
            ctaSubtext: `Whether you’re developing a new infotainment platform or stabilizing an existing telematics system, we partner with your team to deliver <span class="font-semibold">reliable, production-ready automotive software.</span>`,
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
        whyUsSubtext: 'We understand that in industrial systems, failure is not an option.',
        whyUs: [
            "Proven experience in industrial controllers, gateways, and field devices",
            "Strong BSP and driver-level expertise across TI, NXP, and other industrial SoCs",
            "Engineering approach focused on uptime, predictability, and maintainability",
        ],
        caseStudy: "We helped an industrial OEM complete Yocto customization and CAN-based firmware upgrade implementation for a fire-safety control system, enabling stable field deployment and simplified future updates.",
        cta: {
            headline: "Build Industrial Systems You Can Deploy with Confidence.",
            ctaSubtext: `Whether you’re bringing up new industrial hardware or stabilizing an existing platform, our team works as an extension of your engineering group to deliver <span class="font-semibold">reliable, production-ready automation software</span>.`,
            actions: ["Schedule a Discovery Call", "See Our Case Studies"],
        },
    }
];