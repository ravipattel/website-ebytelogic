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
        title: "Reliable Networking & Telecom Gateway Software | eByteLogic",
        description:
            "Build high-uptime networking infrastructure. eByteLogic specializes in hardened Linux gateways, DPDK/XDP acceleration, and secure 5G/SD-WAN software stacks."
    },
    'industrial-automation-iiot': {
        id: "industrial-automation-iiot",
        title: "Reliable Industrial Automation Software | High-Availability Control",
        description:
            "Engineering the digital backbone of the smart factory. eByteLogic specializes in real-time control loops, PLC-to-silicon migration, and hardened IIoT software."
    },
    "industrial-automation-iot-gateways": {
        id: "industrial-automation-iot-gateways",
        title: "Automotive Infotainment & HMI Software | eByteLogic",
        description:
            "Engineering high-performance automotive cockpits. eByteLogic specializes in low-latency HMI, ISO 26262 compliance, and secure IVI stacks for NXP and NVIDIA."
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
        },
        intro: `In decentralized infrastructure, the gateway is the critical point of intelligence. Whether managing industrial sensor data or high-bandwidth telecom traffic, downtime is a systemic failure. We engineer networking software that treats "Always-On" operation as a baseline, specializing in hardened, secure stacks for NXP Layerscape, TI Sitara, and NVIDIA BlueField platforms.`,
        introVariant: 'compact',
        introBtnText: 'Book a Technical Networking Review',
        coreChallengesTitle: 'Challenges in the Networking & Telecom Industry',
        subCoreText: `Maintaining 99.999% uptime in remote or industrial environments introduces complex software hurdles that generic Linux distributions cannot solve:`,
        coreChallenges: [
            {
                title: "Systemic Downtime & Corruption",
                description: `Unexpected power loss or "bricked" updates can take down critical infrastructure. Ensuring a gateway can recover autonomously is essential for remote deployments.`
            },
            {
                title: "Packet Processing Bottlenecks",
                description: `Standard Linux kernel networking often struggles with high-throughput or low-latency requirements. This leads to dropped packets and increased jitter.`
            },
            {
                title: "Security Vulnerabilities",
                description: `As edge gateways bridge local OT (Operational Technology) networks to the public cloud, they become primary targets for cyberattacks and unauthorized access.`
            },
            {
                title: "Protocol Fragmentation",
                description: `Integrating legacy industrial protocols (Modbus, Profibus) with modern cloud standards (MQTT, 5G, SD-WAN) requires complex, multi-layered middleware.`
            },
        ],
        capabilities: {
            title: 'Core Networking & Telecom Capabilities',
            capabilitiesData: [
                {
                    "title": "High-Performance Data Planes",
                    "intro": "We bypass traditional kernel bottlenecks to ensure your gateway handles traffic at wire speed.",
                    "points": [
                        "<span class='font-semibold'>Kernel Bypass (DPDK/XDP):</span>  Implementing Data Plane Development Kit (DPDK) or eXpress Data Path (XDP) for high-speed, user-space packet processing.",
                        "<span class='font-semibold'>Hardware Offloading: </span> Utilizing dedicated engines in NXP and TI silicon for IPsec/TLS encryption and routing acceleration."
                    ]
                },
                {
                    "title": "Hardened Linux & High Availability",
                    "intro": "We build the underlying OS to withstand the harshest digital and physical environments.",
                    "points": [
                        "<span class='font-semibold'>Minimal Yocto BSPs:</span> Custom-built, stripped-down Linux distributions that reduce the attack surface and maximize memory efficiency.",
                        "<span class='font-semibold'>Dual-Partition (A/B) Updates:</span> Robust OTA mechanisms with automated rollback to ensure the device remains reachable even after a failed update."
                    ]
                },
                {
                    "title": `Secure Connectivity Stacks`,
                    "intro": "We secure the data from the hardware level to the cloud.",
                    "points": [
                        `<span class='font-semibold'>Zero-Trust Architecture :</span> Implementation of Secure Boot (HAB/HSM), encrypted filesystems, and hardened VPN tunnels (WireGuard/IPsec).`,
                        "<span class='font-semibold'>SD-WAN & Routing:</span>  Building intelligent software-defined networking that supports dynamic path selection and traffic shaping."
                    ]
                },
                {
                    "title": "Advanced Protocol Integration",
                    "intro": "We bridge the gap between diverse communication standards.",
                    "points": [
                        "<span class='font-semibold'>5G & Cellular Orchestration: </span> Deep integration of 5G/LTE-M modules, including eSIM management and seamless multi-carrier failover.",
                        "<span class='font-semibold'>Industrial-to-Cloud Bridging:  </span> Real-time conversion of legacy serial or fieldbus data into secure, high-value metadata for IoT platforms."
                    ]
                }
            ],
        },
        integrations: {
            title: "Technical Integrations",
            description:
                "We engineer the underlying software stack to support high-intensity networking workloads.",
            items: [
                {
                    title: "Time-Sensitive Networking (TSN)",
                    description:
                        "Implementing IEEE 800.1 standards to ensure deterministic, low-latency communication over standard Ethernet for industrial automation."
                },
                {
                    title: "Containerized Edge Logic",
                    description:
                        "Deploying lightweight microservices (K3s/Docker) with strict resource isolation to ensure that edge applications don't interfere with core routing tasks."
                },
                {
                    title: "Virtualized Network Functions (VNF)",
                    description:
                        "Architecting systems that allow multiple networking functions, like firewalls and load balancers, to run on a single hardware platform via hardware-assisted virtualization."
                },
                {
                    title: "Intelligent Failover Management",
                    description:
                        `Developing sophisticated link-monitoring logic that switches between Fiber, 5G, and Satellite (Starlink) connections based on latency and cost.`
                }
            ],
        },
        useCases: {
            title: "Use Cases & Applications",
            description:
                "Our networking solutions are built for infrastructure that simply cannot go offline.",
            items: [
                {
                    title: "Industrial IoT Gateways",
                    description:
                        "Securely bridging factory floor sensors to global ERP systems with 24/7 reliability."
                },
                {
                    title: "Telematics & Fleet Management",
                    description:
                        "Robust 5G connectivity for vehicle-to-everything (V2X) communication in harsh transit environments."
                },
                {
                    title: "Energy & Utility Grids",
                    description:
                        `Hardened communication nodes for smart grid monitoring and remote substation management.`
                },
                {
                    title: "Private 5G Networks",
                    description:
                        `Software stacks for localized, high-security cellular infrastructure in manufacturing and mining.`
                },
                {
                    title: "Public Safety & Emergency Ops",
                    description:
                        "Portable, ruggedized gateways that provide instant, reliable mesh networking in the field."
                }
            ]
        },
        whyUsHeadline: 'Why Engineering Teams Choose eByteLogic',
        whyUsSubtext: `We turn "Standard Connectivity" into "Carrier-Grade Infrastructure."`,
        whyUs: [
            {
                title: 'Production-Hardened Inference',
                description: `We don't just configure routers, we build C++ based middleware and optimized kernel drivers designed for years of uninterrupted service.`,
            },
            {
                title: 'Deep Silicon Alignment',
                description: `We maximize the specific networking accelerators found in NXP Layerscape and TI Sitara SoCs and deliver performance that generic software cannot match.`,
            },
            {
                title: 'Security-First Development',
                description: `From the first line of code, we implement Secure Boot and hardened memory management to protect your infrastructure from the bottom up`,
            },
            {
                title: 'Reduced Operational Risk',
                description: `Our field-proven OTA and recovery frameworks ensure that managing 10,000 devices is as safe as managing one.`,
            }
        ],
        caseStudy: "We helped a networking device manufacturer stabilize their Linux gateway platform, integrate cellular modems, and implement secure OTA updates — enabling reliable remote deployment and lifecycle management.",
        cta: {
            headline: "Secure Your Network Foundation for Constant Uptime",
            ctaSubtext: `In this industry, the software is what determines the resilience of the hardware. We help you build the stable, secure, and high-performance gateway your project requires.`,
            actions: ["Book a Free Consultation"],
        },
        faqsData: [
            {
                q: "Do you support Kernel Bypass techniques like DPDK?",
                a: "Yes. We specialize in implementing DPDK and XDP to move packet processing into user-space, significantly reducing latency and CPU overhead for high-throughput telecom applications.",
            },
            {
                q: `How do you ensure a gateway doesn't "brick" during a remote update?`,
                a: `We implement a robust A/B partition system. The new update is written to an inactive partition; the system only switches if the update passes a self-test. If it fails, it automatically rolls back to the known-good version.`,
            },
            {
                q: `Can you help with 5G module integration?`,
                a: `Absolutely. We provide full-stack support for 5G modules, including driver optimization, AT command handling, and integration with modern Linux Connection Managers like NetworkManager or ModemManager.`,
            },
            {
                q: "How do you secure data transmission over public networks?",
                a: `We utilize hardware-accelerated encryption (like CAAM on NXP) to run high-speed WireGuard or IPsec tunnels and ensure data is encrypted at the hardware level with minimal performance impact.`,
            },
            {
                q: "Is it possible to run edge applications on the same gateway as the router?",
                a: `Yes. We use virtualization and containerization (like LXC or Docker) to isolate your edge logic from the core networking tasks, ensuring the router remains stable even if an edge app crashes.`,
            },
        ]
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
        intro: `The modern vehicle cockpit is no longer just a dashboard. It is a sophisticated multi-display environment requiring the perfect balance of consumer-grade fluidity and automotive-grade reliability. We engineer In-Vehicle Infotainment (IVI) and Human-Machine Interface (HMI) software that delivers high-fidelity graphics while maintaining the strict safety standards required for the road.`,
        introVariant: 'compact',
        introBtnText: 'Book a Technical Automotive Review',
        coreChallengesTitle: 'Challenges in the Automotive Infotainment Industry',
        subCoreText: `Developing software for the vehicle interior requires overcoming hardware constraints and safety requirements that traditional mobile or web apps never face:`,
        coreChallenges: [
            {
                title: "Boot-Time Criticality",
                description: `Drivers expect the rear-view camera and instrument cluster to be active within seconds. Balancing a feature-rich Linux or Android Automotive OS with "Instant-On" requirements is a major engineering hurdle.`
            },
            {
                title: "Safety-Critical Isolation",
                description: `Infotainment features (like Spotify or Navigation) must never interfere with safety-critical data (like tell-tales or ADAS alerts). Managing this resource contention is vital for ISO 26262 compliance.`
            },
            {
                title: "Thermal & Power Efficiency",
                description: `High-resolution 3D maps and multi-zone media can push automotive SoCs to their thermal limits. Efficient software architecture is required to prevent throttling in extreme cabin temperatures.`
            },
            {
                title: "Long-Term Lifecycle Support",
                description: `Vehicles remain on the road for a decade or more. The software stack must be maintainable, updatable, and secure against evolving cyber threats for the entire life of the vehicle.`
            },
        ],
        capabilities: {
            title: 'Core Automotive & Infotainment Capabilities',
            capabilitiesData: [
                {
                    "title": "High-Performance HMI Development",
                    "intro": "We build visually stunning interfaces that remain responsive under heavy system load.",
                    "points": [
                        "<span class='font-semibold'>Framework Expertise: </span> Advanced implementation of Qt/QML, Unreal Engine, and Flutter optimized for automotive silicon.",
                        "<span class='font-semibold'>Hardware-Accelerated Graphics:</span> Utilizing OpenGL ES and Vulkan to offload UI rendering from the CPU to the GPU for 60 FPS performance."
                    ]
                },
                {
                    "title": "Functional Safety & Hypervisors",
                    "intro": "We ensure that entertainment and safety can coexist on the same hardware.",
                    "points": [
                        "<span class='font-semibold'>Hardware Virtualization :</span> Implementing COQOS, QNX, or ACRN hypervisors to isolate the safety-critical cluster from the non-safety IVI system.",
                        "<span class='font-semibold'>ASIL Compliance:</span> Engineering software components according to Automotive Safety Integrity Levels (ASIL) to ensure functional safety."
                    ]
                },
                {
                    "title": `Hardened Automotive Linux & Android`,
                    "intro": "We customize the underlying OS for the specific needs of the vehicle.",
                    "points": [
                        `<span class='font-semibold'>Android Automotive OS (AAOS): </span> Expert integration of the GAS (Google Automotive Services) stack and custom HAL (Hardware Abstraction Layer) development.`,
                        "<span class='font-semibold'>Automotive Grade Linux (AGL): </span>   Building specialized Yocto layers for a streamlined, secure, and fast-booting vehicle OS."
                    ]
                },
                {
                    "title": "Connectivity & V2X Integration",
                    "intro": "We bridge the vehicle to the outside world securely.",
                    "points": [
                        "<span class='font-semibold'>Vehicle Networking: </span> Deep expertise in CAN, LIN, and Automotive Ethernet (SOME/IP) for seamless data exchange between ECUs.",
                        "<span class='font-semibold'>Telematics & OTA: </span>  Building robust Over-the-Air update systems that ensure safe firmware and map updates without service center visits."
                    ]
                }
            ],
        },
        integrations: {
            title: "Technical Integrations",
            description:
                "We engineer the underlying software stack to support the next generation of digital cockpits.",
            items: [
                {
                    title: "Instant-On Boot Optimization",
                    description:
                        "Implementing Falcon Mode in U-Boot and kernel stripping to ensure the instrument cluster is functional in under 2 seconds."
                },
                {
                    title: "Multi-Display Orchestration",
                    description:
                        "Managing data across multiple screens—Cluster, Center Stack, and Rear-Seat Entertainment—ensuring seamless content handovers and synchronization."
                },
                {
                    title: "Digital Signal Processing (DSP)",
                    description:
                        "Tuning audio paths for multi-zone sound, active noise cancellation, and high-fidelity voice recognition interfaces."
                },
                {
                    title: "Surround View & ADAS Visualization",
                    description:
                        `Integrating 360-degree camera feeds and sensor data into the HMI with zero-copy pipelines for real-time driver awareness.`
                }
            ],
        },
        useCases: {
            title: "Use Cases & Applications",
            description:
                "Our automotive solutions power everything from luxury EVs to commercial transport.",
            items: [
                {
                    title: "Digital Instrument Clusters",
                    description:
                        "High-definition, ASIL-compliant displays for speed, range, and critical alerts."
                },
                {
                    title: "Integrated Cockpits",
                    description:
                        "Unified software controlling both the IVI and the vehicle's climate and comfort systems."
                },
                {
                    title: "Head-Up Displays (HUD)",
                    description:
                        `Low-latency projection of navigation and safety data directly into the driver’s line of sight.`
                },
                {
                    title: "Rear-Seat Entertainment",
                    description:
                        `Multi-zone media streaming with independent audio zones and gaming integration.`
                },
                {
                    title: "Commercial Fleet HMI",
                    description:
                        "Ruggedized, high-uptime interfaces for logistics, mining, and emergency vehicles."
                }
            ]
        },
        whyUsHeadline: 'Why Engineering Teams Choose eByteLogic',
        whyUsSubtext: `We bridge the gap between "Consumer Experience" and "Automotive Reliability."`,
        whyUs: [
            {
                title: 'Production-Hardened Stacks',
                description: `We don't just build UI; we architect the underlying drivers and middle-ware designed for 24/7 reliability in harsh environments.`,
            },
            {
                title: 'Silicon-Specific Tuning',
                description: `We maximize the VPU and GPU capabilities of NXP i.MX8/i.MX9 and NVIDIA Orin/Thor to deliver premium performance on target hardware.`,
            },
            {
                title: 'Security-First Architecture',
                description: `From Secure Boot to encrypted V2X communication, we build security into every layer of the automotive software stack.`,
            },
            {
                title: 'Standards-Compliant Delivery',
                description: `Our development processes align with ASPICE and ISO 26262, ensuring your software is ready for global market certification.`,
            }
        ],
        caseStudy: "We helped an automotive display and telematics module provider bring up Linux and Android software, optimize boot time, and stabilize audio/video pipelines, enabling faster platform validation and OEM readiness.",
        cta: {
            headline: "Powering the Heart of the Software-Defined Vehicle",
            ctaSubtext: `The digital cockpit is the new interface of the automotive brand. We help you build the high-performance, safe, and scalable software that defines the driving experience.`,
            actions: ["Consult with an Automotive Software Expert"],
        },
        faqsData: [
            {
                q: "Which automotive SoCs do you specialize in?",
                a: "We work extensively with the NXP i.MX8 and i.MX9 series, TI Jacinto, and NVIDIA DRIVE (Orin/Thor) platforms, optimizing the BSPs for maximum HMI performance.",
            },
            {
                q: `How do you handle the "Instant-On" requirements for instrument clusters?`,
                a: `We use a combination of U-Boot Falcon Mode, kernel-stripping, and early-splash implementation in the bootloader to ensure the safety-critical display is active while the rest of the OS loads in the background.`,
            },
            {
                q: `Do you support Android Automotive OS (AAOS)?`,
                a: `Yes. We specialize in custom AAOS implementations, including Car API integration, custom HAL development, and optimizing the system for specific hardware constraints.`,
            },
            {
                q: "Can you isolate safety-critical tell-tales from the entertainment system?",
                a: `Absolutely. We typically implement a hypervisor (like QNX or ACRN) to run the instrument cluster and the IVI system as isolated virtual machines, ensuring that a crash in the media player cannot affect the speedometer.`,
            },
            {
                q: "Do you help with OTA (Over-the-Air) update implementations?",
                a: `Yes. We build secure, dual-partition (A/B) OTA systems that support delta updates, ensuring that the vehicle remains safe and functional throughout the update process.`,
            },
        ]
    },
    {
        id: 'industrial-automation-iiot',
        breadCrumb: 'Industrial Automation & IIoT',
        image: AerospaceJpg,
        backgroundImage: '/images/bg/industry/aerospaceBg.png',
        hero: {
            headline: "Reliable Industrial Automation Software Built for the Real World",
            subtext: "From Linux BSPs to industrial communication stacks, we engineer robust, long-lifecycle software for controllers, gateways, and IIoT devices operating in mission-critical environments.",
        },
        intro: `In the modern factory, software is the invisible force that determines throughput, safety, and energy efficiency. We engineer the low-level firmware and high-level middleware that turn raw industrial hardware into intelligent, self-optimizing systems. From real-time motor control to site-wide monitoring, our software is built for the real world, where 24/7 reliability isn't a goal, but a requirement.`,
        introVariant: 'compact',
        introBtnText: 'Book a Technical Automation Review',
        coreChallengesTitle: 'Challenges in the Industrial Automation Industry',
        subCoreText: `Bridging the gap between the shop floor and the data center requires solving technical friction points that can stall digital transformation:`,
        coreChallenges: [
            {
                title: "IT/OT Convergence Gaps",
                description: `Legacy industrial protocols (Modbus, Profinet) often struggle to communicate with modern IT architectures. Without a secure, low-latency bridge, critical production data remains trapped in "data silos."`
            },
            {
                title: "Predicting Machine Failure",
                description: `Unexpected machine failure is the leading cause of lost revenue. Transforming reactive maintenance into proactive, AI-driven foresight requires deep integration between sensors and the software stack.`
            },
            {
                title: "Real-Time Determinism",
                description: `In high-speed assembly, a delay of just a few milliseconds can lead to synchronization errors or mechanical damage. Maintaining "Hard Real-Time" performance while running complex logic is a constant challenge.`
            },
            {
                title: "Scalability & Legacy Integration",
                description: `Scaling a successful pilot to an entire enterprise often fails due to hardware fragmentation. Manufacturers need a way to deploy standardized software across a mix of new and legacy machines.`
            },
        ],
        capabilities: {
            title: 'Core Industrial Automation Capabilities',
            capabilitiesData: [
                {
                    "title": "Software-Defined Automation",
                    "intro": "We decouple control logic from proprietary hardware, giving you the flexibility to run PLC-like functions on standard industrial PCs (IPCs).",
                    "points": [
                        "<span class='font-semibold'>Virtual PLC (vPLC) Implementation:</span> Running real-time control workloads in isolated containers or virtual machines for easier scaling.",
                        "<span class='font-semibold'>PLC-to-Silicon Migration:</span> Porting legacy logic to high-performance SoCs from NXP (i.MX) and TI (Sitara) to reduce costs and increase processing power."
                    ]
                },
                {
                    "title": "Hardened IIoT & Connectivity",
                    "intro": "We ensure your factory remains connected and secure from the edge to the cloud.",
                    "points": [
                        "<span class='font-semibold'>Unified Namespace (UNS) Architecture:</span> Creating a single source of truth for all industrial data using MQTT, Sparkplug B, and OPC UA.",
                        "<span class='font-semibold'>Time-Sensitive Networking (TSN): </span> Implementing deterministic Ethernet communication to ensure critical control packets always arrive on time."
                    ]
                },
                {
                    "title": `Real-Time Control & RTOS`,
                    "intro": "We provide the foundation for predictable, millisecond-level execution.",
                    "points": [
                        `<span class='font-semibold'>RTOS Expertise:</span> Professional implementation of FreeRTOS, Zephyr, and Xenomai for applications requiring guaranteed response times.`,
                        "<span class='font-semibold'>Low-Latency Motor Control:</span> Highly optimized C/C++ code for BLDC and stepper motor synchronization in robotics and CNC applications."
                    ]
                },
                {
                    "title": "Predictive Maintenance & Edge AI",
                    "intro": "We move intelligence to the machine to catch failures before they happen.",
                    "points": [
                        "<span class='font-semibold'>Anomaly Detection:</span> Using <a href='https://www.ebytelogic.com/industries/edge-ai-vision-systems'>Edge AI</a> to monitor vibration, temperature, and current draw in real-time.",
                        `<span class='font-semibold'>Digital Twin Synchronization: </span>  Building the software "bridge" that feeds real-time sensor data into 3D digital twins for virtual commissioning and simulation.`
                    ]
                }
            ],
        },
        integrations: {
            title: "Technical Integrations",
            description:
                "We engineer the underlying software stack to support the Smart Factory.",
            items: [
                {
                    title: "Zero-Copy Memory Paths",
                    description:
                        "Implementing DMA (Direct Memory Access) and shared memory buffers to move high-speed sensor data to control logic without taxing the CPU."
                },
                {
                    title: "Hardened Containerization",
                    description:
                        "Using Docker or LXC to deploy modular automation services while maintaining the strict resource isolation required for industrial stability."
                },
                {
                    title: "Secure Boot & Integrity Monitoring",
                    description:
                        "Utilizing hardware-level security (TrustZone/HSM) to ensure that only verified firmware runs on your industrial controllers."
                },
                {
                    title: "Remote Management & OTA",
                    description:
                        `Building robust Over-the-Air update systems that allow for secure, site-wide logic updates without a manual technician visit.`
                }
            ],
        },
        useCases: {
            title: "Use Cases & Applications",
            description:
                `Our solutions drive productivity in environments where "good enough" isn't an option.`,
            items: [
                {
                    title: "Robotic Cell Control",
                    description:
                        "Synchronizing multi-axis robotic arms with vision systems for precise pick-and-place operations."
                },
                {
                    title: "Smart Energy Management",
                    description:
                        "Real-time monitoring and optimization of power consumption across entire production lines."
                },
                {
                    title: "Automated Quality Inspection",
                    description:
                        `Integrating high-speed cameras and AI-vision software to detect defects at wire-speed.`
                },
                {
                    title: "AMR & AGV Navigation",
                    description:
                        `Low-latency SLAM and obstacle avoidance software for autonomous mobile robots in warehouses.`
                },
                {
                    title: "Process Plant Monitoring",
                    description:
                        "High-availability SCADA and HMI systems for chemical, food, and beverage processing."
                }
            ]
        },
        whyUsHeadline: 'Why Engineering Teams Choose eByteLogic',
        whyUsSubtext: `We bridge the gap between "Industrial Reliability" and "Modern Software Agility."`,
        whyUs: [
            {
                title: 'Production-Hardened Reliability',
                description: `We build software with "Design for Reliability" (DfR) principles, ensuring your control loops run 24/7 without memory leaks or crashes.`,
            },
            {
                title: 'Silicon-Agnostic Expertise',
                description: `Whether you are using i.MX9, Sitara AM6x, or NVIDIA Jetson, we optimize our code to extract every ounce of performance from the VPU/NPU.`,
            },
            {
                title: 'Clean Yocto/OpenEmbedded Integration',
                description: `We deliver structured, version-controlled Yocto layers that integrate seamlessly into your existing development workflow.`,
            },
            {
                title: 'End-to-End Governance',
                description: `Our approach emphasizes data security and firmware integrity, ensuring your automated systems are compliant with modern cybersecurity standards.`,
            }
        ],
        caseStudy: "We helped an industrial OEM complete Yocto customization and CAN-based firmware upgrade implementation for a fire-safety control system, enabling stable field deployment and simplified future updates.",
        cta: {
            headline: "Engineer a Faster, Smarter Factory Floor",
            ctaSubtext: `The future of automation is software-driven. We provide the technical expertise to turn your industrial hardware into a resilient, high-performance production engine. [Consult with an Industrial Software Expert]`,
            actions: ["Book a Free Consultation"],
        },
        faqsData: [
            {
                q: "Can you help us migrate from traditional PLCs to an IPC-based system?",
                a: "Yes. We specialize in Software-Defined Automation, porting PLC logic to Virtual PLCs (vPLCs) or custom C++ control applications running on Industrial PCs for greater flexibility.",
            },
            {
                q: "How do you handle real-time requirements on Linux?",
                a: `We use the PREEMPT_RT patch or a dedicated RTOS (like FreeRTOS or Zephyr) on a separate core of the SoC. This ensures your time-critical tasks are never interrupted by background OS processes.`,
            },
            {
                q: `Do you support OPC UA and MQTT for IIoT?`,
                a: `Absolutely. We implement OPC UA for machine-to-machine communication and MQTT/Sparkplug B for lightweight, scalable communication with the cloud or a Unified Namespace.`,
            },
            {
                q: "Can you add AI-based predictive maintenance to existing machines?",
                a: `Yes. We can integrate "Edge AI" modules that tap into existing sensor data or add new sensors to monitor vibration and thermals, providing early warning alerts directly on your HMI.`,
            },
            {
                q: "How do you secure industrial gateways from cyberattacks?",
                a: `We implement a "Defense in Depth" strategy, including Secure Boot, encrypted filesystems, network segmentation, and regular security patching of the underlying Yocto Linux distribution.`,
            },
        ]
    }
];