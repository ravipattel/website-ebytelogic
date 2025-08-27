"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import React from "react";
import { BsArrows, BsArrowsVertical } from "react-icons/bs";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";
import { RiArrowRightSLine } from "react-icons/ri";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import Button from "@/src/components/Button";

import AfterPng from '@/src/assets/images/caseStudy/after.png'
import BeforePng from '@/src/assets/images/caseStudy/before.png'
import BeforeMockupPng from '@/src/assets/images/caseStudy/beforeMockup.png'
import AfterMockupPng from '@/src/assets/images/caseStudy/afterMockup.png'
import EbyteMockupPng from '@/src/assets/images/caseStudy/ebyteMockup.png'
import { MdArrowForwardIos } from "react-icons/md";

const caseStudyData = [
  // 1 done
  {
    id: "reducing-wearable-display-latency",
    crumbs: "Reducing Wearable Display Latency",
    textColor: "#003F5C",
    statCardColor: "#003F5C",
    secondaryTitleColor: "#374C80",
    gradient: "linear-gradient(to right, #03485f, #243559, #006c8a)",
    title: {
      mainTitle:
        'Reducing Wearable Display Latency from ~250ms to <span class="text-[#243559]">Under 100ms</span>',
      tagLine:
        "A Case Study in Real-Time Optimization for a North American Wearable Tech Innovator",
    },
    challenge: {
      sectionId: "challenge",
      title: "The Challenge: A Perceptible Lag",
      description:
        "A pioneering wearable technology company faced a critical hurdle: their smart glasses, designed to aid visually impaired users, had a camera-to-display latency that was too high, causing a disorienting lag and undermining the real-time usability of the device.",
      constraintsTitle: "Key Constraints:",
      constraints: [
        "No camera sensor datasheet available.",
        "A tight one-month deadline for optimization.",
        "Previous attempts by larger OEM partners had failed.",
      ],
      statCard: {
        title: "Initial Latency",
        value: "~250ms",
        goal: "Goal: <100ms",
      },
    },
    techHighlights: {
      sectionId: "tech-highlights",
      title: "Key Technical Highlights",
      gradient:
        "bg-gradient-to-r from-[#055b77de] via-[#24355980] to-[#006c8a63]",
      items: [
        {
          label: "Platform",
          value: ["NXP i.MX8MP"],
        },
        {
          label: "Operating System",
          value: ["Android OS"],
        },
        {
          label: "Display",
          value: ["Dual OLED"],
        },
        {
          label: "Optimizations",
          value: ["HAL Tuning, VSync"],
        },
        {
          label: "Time to Result",
          value: ["20 Days"],
        },
        {
          label: "Final Latency",
          value: ["<100ms"],
        },
      ],
    },
    stepProcess: {
      sectionId: "step-process",
      title: "Our Four-Step Optimization Process",
      descriptionBlock: {
        subtitle: "A Methodical Approach",
        description:
          "We implemented a systematic, multi-layered strategy to dissect and resolve the latency issue from the hardware abstraction layer up to the application framework. This ensured we addressed every potential bottleneck in the data pipeline.",
        flowTitle: "Device Data Flow",
        flowSteps: [
          {
            label: "Camera",
            color: "blue",
          },
          {
            label: "i.MX8MP Processor",
            color: "purple",
          },
          {
            label: "OLED Displays",
            color: "green",
          },
        ],
      },
      steps: [
        {
          step: 1,
          title: "Pipeline Profiling",
          description:
            "Identified key bottlenecks from image capture to display rendering.",
        },
        {
          step: 2,
          title: "HAL Customization",
          description:
            "Optimized buffer handling and fine-tuned frame scheduling.",
        },
        {
          step: 3,
          title: "Framework Adjustments",
          description:
            "Reduced overhead in the Android OS rendering path and VSync.",
        },
        {
          step: 4,
          title: "Iterative Testing",
          description:
            "Measured glass-to-glass latency rigorously after every single change.",
        },
      ],
    },
    results: {
      sectionId: "results",
      title: "The Transformation: Measurable Impact",
      description: 'Within just 20 days, our targeted optimizations yielded a dramatic reduction in latency, transforming the user experience from lagged to seamless.',
      reChart: {
        "id": "case-study-1",
        "results": {
          "chartData": {
            "Before Optimization": {
              "value": 250,
              "fill": "#3078fba3"
            },
            "After Optimization": {
              "value": 95,
              "fill": "#abc6f4"
            }
          },
          "yAxisLabel": "Latency (ms)",
          "xAxisLabel": "Optimization Stage"
        }
      },
      stats: [
        {
          title: "Successful CES Demo",
          description:
            "Our solution enabled a flawless live demonstration at the Consumer Electronics Show.",
          variant: "dark",
        },
        {
          title: "Showcased Chipset Capabilities",
          description:
            "We bypassed OS constraints to prove the hardware's true potential.",
          variant: "light",
        },
      ],
    },
    cta: {
      sectionId: "cta",
      title: "Ready to Achieve Similar Results?",
      description:
        "Let's discuss how our expertise in embedded systems and performance optimization can solve your toughest technical challenges.",
      button: {
        text: "Contact Us",
      },
    },
    highlights: [
      "Wearable technology",
      "Latency reduction",
      "Real-time optimization",
      "Embedded systems"
    ],
    industry: "Wearable Tech",
  },
  // 2 done
  {
    id: "bypassing-proprietary-audio-pipeline",
    crumbs: "Bypassing Proprietary Audio Pipeline",
    textColor: "#6d688d",
    statCardColor: "#6d688d",
    secondaryTitleColor: "#374C80",
    gradient: "linear-gradient(to right, #6C5B7B, #70b0d7)",
    title: {
      mainTitle:
        'Bypassing Proprietary Audio Pipeline to <span class="text-[#6d688d]">Achieve Precision Playback</span>',
      tagLine:
        "A Case Study in OS-level Customization for a US-based Semiconductor Company",
    },
    onlyFowchart: {
      sectionId: "onlyFlowchart",
      title: "Our Custom-Built Solution",
      dataFlow: [
        {
          subtitle: "The Standard Pipeline",
          steps: [
            { label: "Application", bg: "bg-[#E5E7EB]", text: "text-black" },
            {
              label: "Android AudioFlinger",
              bg: "bg-[#C06C84]",
              text: "text-white",
            },
            {
              label: "Hardware Abstraction Layer",
              bg: "bg-[#E5E7EB]",
              text: "text-black",
            },
            { label: "Audio Hardware", bg: "bg-[#E5E7EB]", text: "text-black" },
          ],
        },
        {
          subtitle: "Our Custom Bypass",
          steps: [
            { label: "Dedicated App", bg: "bg-[#E5E7EB]", text: "text-black" },
            { label: "JNI Layer", bg: "bg-[#F67280]", text: "text-white" },
            {
              label: "Custom IPC Service",
              bg: "bg-[#E5E7EB]",
              text: "text-black",
            },
            {
              label: "Linux Audio Service",
              bg: "bg-[#E5E7EB]",
              text: "text-black",
            },
            { label: "Audio Hardware", bg: "bg-[#E5E7EB]", text: "text-black" },
          ],
        },
      ],
    },
    challenge: {
      sectionId: "challenge",
      title: "The Challenge: A Hardwired Constraint",
      description:
        "A leading semiconductor company needed to showcase the full capabilities of its new chipset at a major industry event, but was hampered by the stock Android OS. The proprietary AudioFlinger pipeline introduced unacceptable audio delays.",
      constraintsTitle: "Key Constraints:",
      constraints: [
        "Significant audio delays due to AudioFlinger limits.",
        "No access to the proprietary source code for a direct fix.",
      ],
      statCard: {
        title: "The Problem",
        value: "Lagging Audio",
        goal: "A barrier to accurate demos",
      },
    },
    techHighlights: {
      sectionId: "tech-highlights",
      title: "Key Technical Highlights",
      gradient:
        "bg-gradient-to-r from-[#055b77de] via-[#24355980] to-[#006c8a63]",
      items: [
        {
          label: "Platform",
          value: ["Qualcomm DragonBoard"],
        },
        {
          label: "Technologies",
          value: ["AudioFlinger bypass, JNI integration"],
        },
        {
          label: "Output",
          value: ["Perfectly timed playback"],
        },
      ],
    },
    results: {
      sectionId: "results",
      title: "Impact & Results: Demonstrating Success",
      stats: [
        {
          title: "Successful CES Demo",
          description:
            "Our solution enabled a flawless live demonstration at the Consumer Electronics Show.",
          variant: "dark",
        },
        {
          title: "Showcased Chipset Capabilities",
          description:
            "We bypassed OS constraints to prove the hardware's true potential.",
          variant: "light",
        },
      ],
    },
    cta: {
      sectionId: "cta",
      title: "Have a similar technical challenge?",
      description:
        "Our team thrives on solving complex hardware and software integration issues. Let's talk about your next project.",
      button: {
        text: "Request a Consultation",
      },
    },
    highlights: [
      "Audio pipeline",
      "Latency reduction",
      "Embedded systems",
      "Android customization"
    ],
    industry: "Semiconductor",
  },
  // 3 done
  {
    id: "broadcast-grade-sdi-encoder-decoder-with-sub100ms-latency",
    crumbs: "Broadcast-Grade SDI Encoder & Decoder with Sub100ms Latency",
    textColor: "#6d688d",
    statCardColor: "#6d688d",
    secondaryTitleColor: "#374C80",
    gradient: "linear-gradient(to right, #6C5B7B, #70b0d7)",
    title: {
      mainTitle:
        'Building a Low-Latency, Feature-Rich <span class="text-[#6d688d]">SDI Encoder and Decoder</span>',
      tagLine: "A Case Study for Professional Broadcast Workflows",
    },
    challenge: {
      sectionId: "challenge",
      title: "The Challenge: BroadcastGrade Performance",
      description:
        "A broadcast solutions provider required a robust SDI encoder and decoder system for live events. The key challenge was to achieve sub-100ms SDI-to-streaming latency while handling complex broadcast requirements like VANC data, precise lip sync, and reliable performance",
      constraintsTitle: "Key Obstacles:",
      constraints: [
        "Sub-100ms latency from SDI to streaming.",
        "VANC data support (captions, triggers, timecode).",
        "Maintaining ±10ms lip-sync accuracy.",
      ],
      statCard: {
        title: "Latency Target",
        value: "<100ms",
        goal: "SDI to streaming",
      },
    },
    techHighlights: {
      sectionId: "tech-highlights",
      title: "Key Technical Highlights",
      gradient:
        "bg-gradient-to-r from-[#055b77de] via-[#24355980] to-[#006c8a63]",
      items: [
        {
          label: "Latency",
          value: ["Sub-100ms"],
        },
        {
          label: "Sync Accuracy",
          value: ["±10ms lip sync"],
        },
        {
          label: "VANC Support",
          value: ["LINE21, CEA-608/708, SCTE-35"],
        },
      ],
    },
    flowchartPlusContent: {
      sectionTitle: "Our End-to-End Broadcast Solution",
      chart: {
        title: "Encoder/Decoder Pipeline",
        steps: [
          "SDI Input",
          "Customized OBE Encoder",
          "Network Streaming",
          "Custom-built Decoder",
          "SDI Output",
        ],
      },
      Onlycontent: {
        title: "Advanced VANC Data Handling",
        bgColor: "#cfd3d963",
        features: [
          {
            title: "Closed Captions",
            description:
              "Support for LINE21 and CEA-608/708 ensures broadcast compliance.",
          },
          {
            title: "SCTE-35 Triggers",
            description:
              "Enables dynamic ad insertion and content replacement.",
          },
          {
            title: "Timecode & Ancillary Data",
            description:
              "Preserves critical metadata for accurate frame referencing.",
          },
        ],
      },
      // imgContent: {
      //     subTitle: 'Mock-up: Functional Telematics Display',
      //     img: '',
      //     description: 'A fully functional demo, delivered within 3 days, validated the hardware and software integration.'
      // },
      // biDirectionalChart: {
      //     subTitle: 'Mock-up: Functional Telematics Display',
      //     card: [
      //         { name: 'Master Board' },
      //         { name: 'Slave Board(s)' }
      //     ],
      //     description: 'A fully functional demo, delivered within 3 days, validated the hardware and software integration.'
      // }
    },
    results: {
      sectionId: "results",
      title: "Impact & Results: Broadcast-Ready Performance",
      stats: [
        {
          title: "Ultra-Low Latency Live Feeds",
          description:
            "Enabled high-stakes live events with minimal delay from source to display.",
          variant: "dark",
        },
        {
          title: "Guaranteed Broadcast Compliance",
          description:
            "Ensured support for industry standards like closed captions and ad triggers.",
          variant: "light",
        },
      ],
    },
    cta: {
      sectionId: "cta",
      title: "Need a High-Performance Broadcast Solution?",
      description:
        "Our expertise in broadcast hardware and software can help you build the reliable, low-latency systems your clients demand.",
      button: {
        text: "Learn More",
      },
    },
    highlights: [
      "SDI encoder",
      "Low latency",
      "Broadcast",
      "Lip sync",
      "VANC data"
    ],
    industry: "Broadcast Solutions",
  },
  // 4 done
  {
    id: "u-boot-logo-for-IMX8MQ",
    crumbs: "U-Boot Logo for IMX8MQ ",
    textColor: "#6d688d",
    statCardColor: "#6d688d",
    secondaryTitleColor: "#374C80",
    gradient: "linear-gradient(to right, #6C5B7B, #70b0d7)",
    title: {
      mainTitle:
        'Implementing Early Boot Logo Support on <span class="text-[#6d688d]">Hardware Without Native Capability</span>',
      tagLine:
        "A Case Study for a USA-based Industrial Electronics OEM using NXP IMX8MQ",
    },
    challenge: {
      sectionId: "challenge",
      title: "The Challenge: A Delayed First Impression",
      description:
        "An industrial electronics OEM faced a significant user experience hurdle: their product's display remained blank for 5–7 seconds during boot-up. This was due to the U-Boot bootloader lacking native drivers for early logo display on the NXP IMX8MQ platform, creating a perceived delay and a less polished user experience.",
      constraintsTitle: "Key Obstacles:",
      constraints: [
        "5–7 second blank screen during boot.",
        "U-Boot lacked necessary display drivers.",
      ],
      statCard: {
        title: "Initial Boot Time",
        value: "5-7s",
        goal: "Blank Display",
      },
    },
    stepProcess: {
      sectionId: "step-process",
      title: "Our Solution: Bridging the Boot Gap",
      descriptionBlock: {
        subtitle: "Strategic Driver Porting",
        description:
          "To overcome the U-Boot's limitations, we undertook a precise driver porting effort, enabling early display initialization and immediate visual feedback upon power-on",
        flowTitle: "DSI Driver Porting Flow",
        flowSteps: [
          {
            label: "Kernel DSI Host",
            color: "blue",
          },
          {
            label: "UBoot Driver Port",
            color: "purple",
          },
          {
            label: "Early Logo Render",
            color: "green",
          },
        ],
      },
      steps: [
        {
          step: 1,
          title: "Driver Port from Kernel DSI Host",
          description:
            "Adapted existing display drivers from the Linux kernel to function within the U-Boot environment.",
        },
        {
          step: 2,
          title: "Integrated Logo Render",
          description:
            "Implemented the capability to display the OEM's logo almost instantly after power-on.",
        },
      ],
    },
    techHighlights: {
      sectionId: "tech-highlights",
      title: "Key Technical Highlights",
      gradient:
        "bg-gradient-to-r from-[#055b77de] via-[#24355980] to-[#006c8a63]",
      items: [
        {
          label: "Platform",
          value: ["NXP IMX8MQ"],
        },
        {
          label: "Work Focus",
          value: ["U-Boot driver port, early boot graphics"],
        },
      ],
    },
    results: {
      sectionId: "results",
      title: "Impact & Results: Instant User Feedback",
      description: `By enabling an early boot logo, we transformed the user's first interaction with the device, providing immediate visual confirmation and enhancing the product's perceived quality.`,
      beforeImg: BeforeMockupPng,
      afterImg: EbyteMockupPng,
      translucentCard: {
        card: [
          {
            SubTitle: "Before: Blank Screen",
            para: "5-7 seconds of no visual feedback.",
          },
          {
            SubTitle: "After: Instant Logo",
            para: "Logo displayed in <1 second after power-on.",
          },
        ],
      },
      stats: [
        {
          title: "Improved User Experience",
          description: "Instant visual feedback enhances perceived quality.",
          variant: "dark",
        },
        {
          title: "Acknowledged by NXP Engineers",
          description:
            "Our innovative solution gained recognition from the platform's creators.",
          variant: "light",
        },
      ],
    },
    cta: {
      sectionId: "cta",
      title: "Facing Complex Embedded Challenges?",
      description:
        "We specialize in lowlevel software and hardware integration to unlock your product's full potential.",
      button: {
        text: "Let's Discuss Your Project",
      },
    },
    highlights: [
      "Early boot logo",
      "U-Boot driver porting",
      "Display initialization",
      "Embedded Linux"
    ],
    industry: "Industrial Electronics",
  },
  // 5 done
  {
    id: "multi-platform-driver-development-uBoot-customization",
    crumbs: "Multi-Platform Driver Development & UBoot Customization",
    textColor: "#6d688d",
    statCardColor: "#6d688d",
    secondaryTitleColor: "#374C80",
    gradient: "linear-gradient(to right, #6C5B7B, #70b0d7)",
    title: {
      mainTitle:
        'Custom Drivers and Bootloaders Across <span class="text-[#6d688d]">Multiple SoCs</span>',
      tagLine:
        "A Case Study in Cross-Platform Embedded Systems Integration for Global OEMs",
    },
    flowchartPlusContent: {
      sectionId: "flowchartPlusContent",
      sectionTitle: "Our Multi-Faceted Solution",
      chart: {
        title: "An Integrated, Platform Agnostic Approach",
        description: 'We developed a robust methodology that provided custom drivers and bootloader optimizations tailored to each unique hardware platform, enabling secure, branded, and stable product launches.',
        steps: [
          "Cross-Platform Workflows",
          "Custom Driver Development , U-Boot Customization",
          "Secure Boot & Splash Screen",
        ],
      },
      imgContent: {
        subTitle: 'Custom Splash Screen Concept',
        img: '',
        description: 'A branded splash screen provides instant visual feedback and a professional first impression.'
      },
    },
    challenge: {
      sectionId: "challenge",
      title: "The Challenge: A Fragmented Ecosystem",
      description:
        "Global OEMs needed to develop products across a wide range of platforms and proprietary peripherals. Without upstream drivers, this required a custom approach to ensure hardware initialization, secure boot, and a consistent user experience.",
      constraintsTitle: "Key Obstacles:",
      constraints: [
        "Proprietary peripherals lacking native driver support.",
        "Multiple, diverse platforms from different vendors.",
        "A need for secure boot and a branded splash screen.",
      ],
      statCard: {
        title: "The Problem",
        value: "Complexity",
        goal: "Managing diverse hardware & software",
      },
    },
    techHighlights: {
      sectionId: "tech-highlights",
      title: "Key Technical Highlights: A Broad Spectrum of Expertise",
      description:
        "Our expertise spans a variety of platforms and peripherals, allowing for seamless integration and optimization across diverse product lines.",
      gradient:
        "bg-gradient-to-r from-[#055b77de] via-[#24355980] to-[#006c8a63]",
      items: [
        {
          label: "Platform",
          value: ["NXP IMX8MQ", "TI Sitara", "Rockchip RK356x", "Qualcomm"],
        },
        {
          label: "Drivers",
          value: [
            "Video/Audio Codecs (e.g., ADV7611, WM8960)",
            "Touch Controllers",
            "Modems",
            "Network Interfaces",
          ],
        },
      ],
    },
    results: {
      sectionId: "results",
      title: "Impact & Results: Accelerating the Product Lifecycle",
      stats: [
        {
          title: "Reduced Time-toMarket",
          description:
            "Efficient development workflows accelerated product launches.",
          variant: "dark",
        },
        {
          title: "Increased Stability & Compatibility",
          description:
            "Our solutions ensured robust performance across all platforms.",
          variant: "light",
        },
      ],
    },
    cta: {
      sectionId: "cta",
      title: "Tired of Unsupported Hardware?",
      description:
        "Let's develop the custom drivers and bootloader solutions you need to get your products to market faster.",
      button: {
        text: "Get a Custom Solution",
      },
    },
    highlights: [
      "Driver development",
      "Bootloader customization",
      "Cross-platform integration",
      "Secure boot"
    ],
    industry: "Embedded Systems",
  },
  // 6 done but img pending
  {
    id: "ndi-protocol-integration-inremote-recorder-player",
    crumbs: "NDI Protocol Integration in Remote Recorder/Player",
    textColor: "#6d688d",
    statCardColor: "#6d688d",
    secondaryTitleColor: "#374C80",
    gradient: "linear-gradient(to right, #6C5B7B, #70b0d7)",
    title: {
      mainTitle:
        'Integrating NDI Protocol into a Remote Audio/Video Mixing Application for <span class="text-[#6d688d]">Broadcast Workflows</span>',
      tagLine: "A Case Study for a US-based Media Production Software Company",
    },
    challenge: {
      sectionId: "challenge",
      title: "The Challenge: Bridging to IP Broadcast",
      description:
        "A media production software company needed to update its MacOS-based GStreamer application to support modern IP broadcast workflows. The existing system, used for remote dubbing and post-production, lacked crucial NDI (Network Device Interface) input, a key requirement for their clients, and demanded critical low-latency operation.",
      constraintsTitle: "Key Requirements & Obstacles:",
      constraints: [
        "No NDI input support in existing GStreamer app.",
        "Customer demand for NDI compatibility.",
        "Critical need for low-latency in dubbing sessions.",
      ],
      statCard: {
        title: "The Goal",
        value: "Seamless NDI",
        goal: "For Modern Workflows",
      },
    },
    stepProcess: {
      sectionId: "step-process",
      title: "Our Integrated NDI Solution",
      descriptionBlock: {
        subtitle: "A Custom GStreamer Pipeline",
        description:
          "We engineered a solution that seamlessly integrated NDI capabilities into the existing MacOS GStreamer environment, ensuring high performance and frame-accurate synchronization for critical broadcast applications.",
        flowTitle: "GStreamer Pipeline Concept",
        flowSteps: [
          {
            label: "NDI Input",
            color: "blue",
          },
          {
            label: "Custom GStreamer Plugin",
            color: "purple",
          },
          {
            label: "Audio/Video Mixer",
            color: "green",
          },
        ],
      },
      steps: [
        {
          step: 1,
          title: "NDI SDK Integration",
          description:
            "Integrated the official NDI SDK into the MacOS build environment.",
        },
        {
          step: 2,
          title: "Custom GStreamer Source Plugin",
          description:
            "Developed a specialized plugin to receive NDI video streams.",
        },
        {
          step: 3,
          title: "Frame-Accurate Synchronization",
          description:
            "Ensured precise sync with existing audio mixing pipelines.",
        },
        {
          step: 4,
          title: "Extensive Testing",
          description:
            "Performed rigorous latency and stability testing for optimal performance.",
        },
      ],
    },
    techHighlights: {
      sectionId: "tech-highlights",
      title: "Key Technical Highlights",
      gradient:
        "bg-gradient-to-r from-[#055b77de] via-[#24355980] to-[#006c8a63]",
      items: [
        {
          label: "Platform",
          value: ["MacOS (Apple Silicon)"],
        },
        {
          label: "Framework",
          value: ["GStreamer + custom NDI source"],
        },
        {
          label: "Protocol",
          value: ["NDI over IP"],
        },
        {
          label: "Output",
          value: ["Real-time playback with minimal latency"],
        },
      ],
    },
    results: {
      sectionId: "results",
      title: "Impact & Results: Expanding Market Reach",
      description: `Our NDI integration not only met critical client demands but also significantly enhanced the product's marketability, opening doors to new IP-based broadcast opportunities.`,
      reChart: {
        "id": "case-study-1",
        "results": {
          "chartData": {
            "Before Optimization": {
              "value": 250,
              "fill": "#3078fba3"
            },
            "After Optimization": {
              "value": 95,
              "fill": "#abc6f4"
            }
          },
          "yAxisLabel": "Latency (ms)",
          "xAxisLabel": "Optimization Stage"
        }
      },
      stats: [
        {
          title: "Met Broadcaster Workflow Requirements",
          description: "Ensuring compatibility with modern IPbased production.",
          variant: "dark",
        },
        {
          title: "Expanded Product Marketability",
          description: "Opened new opportunities in IP-based studios.",
          variant: "light",
        },
      ],
    },
    cta: {
      sectionId: "cta",
      title: "Ready to Modernize Your Broadcast Workflows?",
      description:
        "Our expertise in media protocols and real-time processing can help you meet the demands of tomorrow's production.",
      button: {
        text: "Explore Our Media Solutions",
      },
    },
    highlights: [
      "NDI protocol",
      "GStreamer integration",
      "Low-latency streaming",
      "Broadcast workflows"
    ],
    industry: "Media Production",
  },
  // 7 done but img pending
  {
    id: "rapid-lcd-touchscreen-bring-up-for-telematics-display",
    crumbs: "Rapid LCD & Touchscreen Bring-Up for Telematics Display",
    textColor: "#6d688d",
    statCardColor: "#6d688d",
    secondaryTitleColor: "#374C80",
    gradient: "linear-gradient(to right, #6C5B7B, #70b0d7)",
    title: {
      mainTitle:
        'Completing LCD and Touchscreen Integration in <span class="text-[#6d688d]">Just 3 Days</span>',
      tagLine:
        "A Case Study in Rapid Hardware Bring-Up for a Telematics Display Showcase",
    },
    challenge: {
      sectionId: "challenge",
      title: "The Challenge: A Critical Deadline",
      description:
        "A telematics hardware company needed a fully functional display for their Embedded World showcase in just a few days. The challenge was to bring up a new LCD and capacitive touchscreen on a Toradex Verdin SoM and prepare a custom OS installer on an extremely compressed schedule.",
      constraintsTitle: "Key Obstacles:",
      constraints: [
        `A "within days" timeline for a full product bring-up.`,
        "Developing a custom OS installer for quick deployment.",
        "Validating all peripherals under extreme time pressure.",
      ],
      statCard: {
        title: "Timeline",
        value: "3 Days",
        goal: "To a working demo",
      },
    },
    techHighlights: {
      sectionId: "tech-highlights",
      title: "Key Technical Highlights",
      gradient:
        "bg-gradient-to-r from-[#055b77de] via-[#24355980] to-[#006c8a63]",
      items: [
        {
          label: "Platform",
          value: ["Toradex Verdin SoM, Torizon OS"],
        },
        {
          label: "Components",
          value: ["LCD, capacitive touchscreen"],
        },
        {
          label: "Deliverable",
          value: ["Fully functional demo for exhibition"],
        },
      ],
    },
    results: {
      sectionId: "results",
      title: "Impact & Results: Agility on Display",
      stats: [
        {
          title: "Successful Embedded World Demo",
          description:
            "The product was showcased flawlessly, meeting the critical event deadline.",
          variant: "dark",
        },
        {
          title: "Reinforced Brand Reputation",
          description:
            "Demonstrated technical agility and expertise under pressure.",
          variant: "light",
        },
      ],
    },
    flowchartPlusContent: {
      sectionId: "flowchartPlusContent",
      sectionTitle: "Our Streamlined BringUp Workflow",
      chart: {
        title: "Our Rapid Development Process",
        steps: [
          "1. Configure Kernel Drivers (LCD & Touch)",
          "2. Build & Test Custom Torizon OS Tezi Installer",
          "3. Deliver Initial Working Demo Build",
          "4. Complete Remaining Interface BringUp",
        ],
      },
      imgContent: {
        subTitle: "Mock-up: Functional Telematics Display",
        img: "",
        description:
          "A fully functional demo, delivered within 3 days, validated the hardware and software integration.",
      },
    },
    cta: {
      sectionId: "cta",
      title: "Facing a Tight Deadline?",
      description:
        "Our rapid prototyping and hardware bring-up expertise can help you meet your most challenging project timelines.",
      button: {
        text: "Accelerate Your Project",
      },
    },
    highlights: [
      "LCD bring-up",
      "Touchscreen integration",
      "Rapid prototyping",
      "Telematics display"
    ],
    industry: "Automotive Electronics",
  },
  // 8 done
  {
    id: "secure-mcu-firmware-upgrade-via-canopen",
    crumbs: "Secure MCU Firmware Upgrade via CANopen",
    textColor: "#6d688d",
    statCardColor: "#6d688d",
    secondaryTitleColor: "#374C80",
    gradient: "linear-gradient(to right, #6C5B7B, #70b0d7)",
    title: {
      mainTitle:
        'Implementing <span class="text-[#6d688d]">Reliable MCU Firmware</span> Updates Over CAN for Safety Systems',
      tagLine:
        "A Case Study for a Multinational Fire Safety Systems Manufacturer",
    },
    challenge: {
      sectionId: "challenge",
      title: "The Challenge: Mission Critical Field Updates",
      description:
        "A major fire safety manufacturer needed a way to securely and reliably update firmware on their MCU slave boards. The updates had to be performed remotely via the CAN bus, ensuring safety compliance and robust performance in mission-critical environments.",
      constraintsTitle: "Key Obstacles:",
      constraints: [
        `Ensuring safety and reliability in the update process.`,
        "Performing updates on MCU slave boards via CAN bus.",
        "Dealing with large-scale, distributed deployments.",
      ],
      statCard: {
        title: "Core Requirement",
        value: "Reliable Updates",
        goal: "Over an existing network",
      },
    },
    techHighlights: {
      sectionId: "tech-highlights",
      title: "Key Technical Highlights",
      gradient:
        "bg-gradient-to-r from-[#055b77de] via-[#24355980] to-[#006c8a63]",
      items: [
        {
          label: "Platform",
          value: ["TI AM62xx SoM"],
        },
        {
          label: "Protocol",
          value: ["CANopen"],
        },
        {
          label: "Integration",
          value: ["Yocto BSP + C++ Library"],
        },
      ],
    },
    results: {
      sectionId: "results",
      title: "Impact & Results: Enhanced Efficiency and Compliance",
      stats: [
        {
          title: "Eliminated On-Site Visits",
          description:
            "Updates can be performed remotely, drastically reducing service costs and time.",
          variant: "dark",
        },
        {
          title: "Increased Service Efficiency",
          description:
            "Enabled faster and more reliable large-scale deployments.",
          variant: "light",
        },
      ],
    },
    flowchartPlusContent: {
      sectionId: "flowchartPlusContent",
      sectionTitle: "Our Robust Firmware Update Solution",
      chart: {
        title: "The CANopen Update Flow",
        steps: [
          "Master Board (Yocto BSP)",
          "CANopen-based Update Mechanism",
          "MCU Slave Board (HAL)",
        ],
      },
      biDirectionalChart: {
        subTitle: "Master-Slave Network Topology",
        card: [{ name: "Master Board" }, { name: "Slave Board(s)" }],
        description:
          "Our solution enables the master board to securely push firmware updates to multiple slave boards over the CAN bus, a widely used protocol in industrial automation and safety systems.",
      },
    },
    cta: {
      sectionId: "cta",
      title: "Ensure the Reliability of Your Systems",
      description:
        "Our expertise in secure and reliable embedded systems can help you meet the most stringent safety and compliance standards.",
      button: {
        text: "Discuss Your Project",
      },
    },
    highlights: [
      "MCU firmware upgrade",
      "CANopen protocol",
      "Remote updates",
      "Safety systems"
    ],
    industry: "Fire Safety Systems",
  },
  // 9 done
  {
    id: "hdmi-multiview-player",
    crumbs: "HDMI Multiview Player",
    textColor: "#6d688d",
    statCardColor: "#6d688d",
    secondaryTitleColor: "#374C80",
    gradient: "linear-gradient(to right, #6C5B7B, #70b0d7)",
    title: {
      mainTitle:
        'Low-Cost, Low-Power Multiview Player for <span class="text-[#6d688d]">Professional Monitoring</span>',
      tagLine: "A Case Study for a North American Broadcast Solutions Provider",
    },
    challenge: {
      sectionId: "challenge",
      title: "The Challenge: Versatile & Efficient Monitoring",
      description:
        "A broadcast solutions provider needed a compact, cost-effective multiview player for studios and OB vans. The core challenge was to handle diverse input streams (UDP, SRT, HLS) with hardware-accelerated decoding for minimal CPU load, all while delivering a seamless HDMI multiview output.",
      constraintsTitle: "Key Requirements:",
      constraints: [
        `Support for multiple streaming protocols.`,
        "Hardware-accelerated decoding for efficiency.",
        "HDMI output for a unified multiview display.",
      ],
      statCard: {
        title: "Core Need",
        value: "Multiviewer",
        goal: "Low-Cost & Low-Power",
      },
    },
    techHighlights: {
      sectionId: "tech-highlights",
      title: "Key Technical Highlights",
      gradient:
        "bg-gradient-to-r from-[#055b77de] via-[#24355980] to-[#006c8a63]",
      items: [
        {
          label: "Platforms",
          value: ["Odroid-C2, NanoPi5, Rockchip RK356x"],
        },
        {
          label: "Protocols",
          value: ["UDP, SRT, HLS"],
        },
        {
          label: "Framework",
          value: ["GStreamer (custom pipelines)"],
        },
        {
          label: "Output",
          value: ["HDMI Multiview"],
        },
      ],
    },
    results: {
      sectionId: "results",
      description:
        "Our solution provided a powerful, yet affordable, monitoring tool that significantly reduced operational costs and enhanced performance for broadcast professionals.",
      title: "Impact & Results: Efficiency and Cost-Effectiveness",
      stats: [
        {
          title: "Delivered Cost-Efficient Solution",
          description:
            "Provided high-performance monitoring at a lower hardware cost.",
          variant: "dark",
        },
        {
          title: "Reduced Processing Overhead",
          description: "Leveraged VPU hardware for efficient video decoding.",
          variant: "light",
        },
      ],
    },
    flowchartPlusContent: {
      sectionId: "flowchartPlusContent",
      sectionTitle: "Our Optimized Multiview Solution",
      chart: {
        title: "System Architecture Overview",
        steps: [
          "Multiple Input Streams (UDP, SRT, HLS)",
          "Platform-Specific GStreamer Pipelines",
          "Hardware Video Decoding (VPU)",
          "Multiview Composition",
          "HDMI Output",
        ],
      },
      Onlycontent: {
        title: "Conceptual Multiview Screen",
        bgColor: "#cfd3d963",
        description:
          "Our solution enables simultaneous monitoring of multiple video feeds on a single display.",
        features: [
          {
            title: "Stream 1 (UDP)",
          },
          {
            title: "Stream 2 (SRT)",
          },
          {
            title: "Stream 3 (HLS)",
          },
          {
            title: "Stream 4 (Live Feed)",
          },
        ],
      },
    },
    compatibility: {
      sectionId: 'compatibility',
      title: "Protocol Compatibility",
      bgColor: "#b4bccd66",
      columns: [
        {
          label: "Protocol",
          key: "name",
        },
        {
          label: "Support Status",
          key: "supportStatus",
        },
        {
          label: "Key Benefit",
          key: "keyBenefit",
        },
      ],
      rows: [
        {
          name: "UDP",
          supportStatus: "Full",
          keyBenefit: "Low overhead, common for local networks",
        },
        {
          name: "SRT",
          supportStatus: "Full",
          keyBenefit: "Secure, reliable transport over unreliable networks",
        },
        {
          name: "HLS",
          supportStatus: "Full",
          keyBenefit: "Adaptive bitrate streaming for web delivery",
        },
      ],
    },
    cta: {
      sectionId: "cta",
      title: "Need a Custom Broadcast Solution?",
      description:
        "Our expertise in video processing and embedded systems can help you build the next generation of professional monitoring tools.",
      button: {
        text: "Contact Our Experts",
      },
    },
    highlights: [
      "HDMI multiview",
      "Hardware decoding",
      "Streaming protocols",
      "Broadcast monitoring"
    ],
    industry: "Broadcast Solutions",
  },
  // 10 done but img left in results
  {
    id: "sub-100ms-latency-in-uav-video-streaming",
    crumbs: "Sub-100ms Latency in UAV Video Streaming",
    textColor: "#6d688d",
    statCardColor: "#6d688d",
    secondaryTitleColor: "#374C80",
    gradient: "linear-gradient(to right, #6C5B7B, #70b0d7)",
    title: {
      mainTitle:
        'Achieving  <span class="text-[#6d688d]">Sub-100ms</span> Camera-to-Display Latency for UAV Control',
      tagLine: "A Case Study for an Asia-Pacific Drone Manufacturer",
    },
    challenge: {
      sectionId: "challenge",
      title: "The Challenge: Real-Time UAV Control",
      description:
        "A leading drone manufacturer required extremely low camera-to-display latency for their UAV control systems – specifically, under 100ms. This critical requirement was complicated by the fact that no production hardware was available during the Proof-of-Concept (PoC) stage, necessitating a robust solution on evaluation kits.",
      constraintsTitle: "Key Requirements & Obstacles:",
      constraints: [
        `Glass-to-glass latency target: <100ms.`,
        "No production hardware available for PoC.",
      ],
      statCard: {
        title: "Target Latency",
        value: "<100ms",
        goal: "For UAV Control",
      },
    },
    techHighlights: {
      sectionId: "tech-highlights",
      title: "Key Technical Highlights",
      gradient:
        "bg-gradient-to-r from-[#055b77de] via-[#24355980] to-[#006c8a63]",
      items: [
        {
          label: "Platforms",
          value: ["NXP i.MX8MP EVK"],
        },
        {
          label: "Pipeline",
          value: ["MIPI CSI → H.264 → RTP → Decode → DSI LCD"],
        },
        {
          label: "Result",
          value: ["<100ms Latency"],
        },
      ],
    },
    results: {
      sectionId: "results",
      description:
        "Our successful PoC demonstrated the feasibility of achieving ultra-low latency, validating the chosen SoC platform and providing a crucial foundation for the client's next-generation UAV products.",
      title: "Impact & Results: Validating Future Product Lines",
      beforeImg: BeforePng,
      afterImg: AfterPng,
      translucentCard: {
        card: [
          {
            SubTitle: 'Placeholder for "Before" Latency Snapshot',
            para: "Side-by-side visual comparison of latency performance.",
          },
          {
            SubTitle: 'Placeholder for "After" Latency Snapshot',
            para: "Side-by-side visual comparison of latency performance.",
          },
        ],
      },
      stats: [
        {
          title: "Validated SoC Selection",
          description:
            "Confirmed the NXP i.MX8MP platform for the UAV product line.",
          variant: "dark",
        },
        {
          title: "Provided Baseline for Integration",
          description:
            "Established a critical foundation for final drone hardware development.",
          variant: "light",
        },
      ],
    },
    flowchartPlusContent: {
      sectionId: "flowchartPlusContent",
      sectionTitle: "Our Optimized Video Streaming Pipeline",
      chart: {
        title: "UAV Video Pipeline Diagram",
        steps: [
          "MIPI CSI (Camera Input)",
          "HW H.264 Encode",
          "RTP Streaming",
          "HW H.264 Decode",
          "DSI LCD (Display Output)",
        ],
      },
      Onlycontent: {
        title: "Key Solution Steps",
        bgColor: "#cfd3d963",
        features: [
          {
            title: "NXP i.MX8MP EVK Selection",
            description:
              "Leveraged its powerful Video Processing Unit (VPU) for acceleration.",
          },
          {
            title: "RTP Streaming Pipeline",
            description:
              "Built using hardware H.264 encode/decode for efficiency.",
          },
          {
            title: "Buffering & Zero-Copy Optimization",
            description:
              "Minimized data buffering and utilized zero-copy techniques where possible to reduce latency.",
          },
        ],
      },
    },
    cta: {
      sectionId: "cta",
      title: "Need Ultra-Low Latency for Your Product?",
      description:
        "Our expertise in real time video processing and embedded systems can help you achieve critical performance targets.",
      button: {
        text: "Optimize Your System",
      },
    },
    highlights: [
      "UAV video streaming",
      "Low latency",
      "RTP pipeline",
      "Embedded video"
    ],
    industry: "Drone Technology",
  },
  // 11 done
  {
    id: "can-to-modbus-bridge",
    crumbs: "CAN-to-Modbus Bridge",
    textColor: "#6d688d",
    statCardColor: "#6d688d",
    secondaryTitleColor: "#374C80",
    gradient: "linear-gradient(to right, #6C5B7B, #70b0d7)",
    title: {
      mainTitle:
        'Bridging CAN and Modbus Protocols for  <span class="text-[#6d688d]">Industrial System Interoperability</span>',
      tagLine:
        "A Case Study for a US-based Industrial Electronics Manufacturer",
    },
    challenge: {
      sectionId: "challenge",
      title: "The Challenge: Protocol Incompatibility",
      description:
        "An industrial electronics manufacturer faced a common challenge: integrating CAN-based devices with existing Modbus controllers. This required a robust solution that could translate between protocols while maintaining performance and reliability in demanding industrial environments.",
      constraintsTitle: "Key Obstacles:",
      constraints: [
        `Enabling communication between CAN and Modbus.`,
        "Ensuring reliable performance in noisy industrial settings.",
      ],
      statCard: {
        title: "Core Problem",
        value: "Protocol Gap",
        goal: "Between Devices",
      },
    },
    techHighlights: {
      sectionId: "tech-highlights",
      title: "Key Technical Highlights",
      gradient:
        "bg-gradient-to-r from-[#055b77de] via-[#24355980] to-[#006c8a63]",
      items: [
        {
          label: "MCU",
          value: ["STM32"],
        },
        {
          label: "Protocols",
          value: ["CAN, Modbus RTU/TCP"],
        },
        {
          label: "Features",
          value: ["Error recovery, mapping flexibility"],
        },
      ],
    },
    compatibility: {
      sectionId: 'compatibility',
      title: "Example Configuration Table (Conceptual)",
      description:
        "Customizable mapping ensures precise data exchange between protocols.",
      bgColor: "#b4bccd66",
      columns: [
        {
          label: "CAN ID",
          key: "name",
        },
        {
          label: "CAN Data Field",
          key: "supportStatus",
        },
        {
          label: "Modbus Register",
          key: "keyBenefit",
        },
        {
          label: "Modbus Function",
          key: "function",
        },
      ],
      rows: [
        {
          name: "0x100",
          supportStatus: "Sensor_Temp",
          keyBenefit: "40001",
          function: "Read Holding Register",
        },
        {
          name: "0x101",
          supportStatus: "Valve_Status",
          keyBenefit: "00010",
          function: "Read Coils",
        },
        {
          name: "0x200",
          supportStatus: "Motor_Speed_Cmd",
          keyBenefit: "40002",
          function: "Write Holding Register",
        },
      ],
    },
    results: {
      sectionId: "results",
      description:
        "Our CAN-to Modbus bridge enabled the client to integrate diverse industrial devices, significantly reducing the need for costly hardware replacements and streamlining system deployments.",
      title: "Impact & Results: Seamless Integration & Efficiency",
      stats: [
        {
          title: "Enabled Seamless Integration",
          description: "Mixed-protocol devices now communicate effortlessly.",
          variant: "dark",
        },
        {
          title: "Reduced Hardware Replacement",
          description:
            "Extended the lifespan and utility of existing equipment.",
          variant: "light",
        },
      ],
    },
    flowchartPlusContent: {
      sectionId: "flowchartPlusContent",
      sectionTitle: "Our Robust Protocol Bridging Solution",
      chart: {
        title: "Protocol Translation Diagram",
        steps: [
          "CAN-based Device",
          "STM32 Firmware (CAN-Modbus Translation)",
          "Modbus Controller",
        ],
      },
      Onlycontent: {
        title: "Key Solution Components",
        bgColor: "#cfd3d963",
        features: [
          {
            title: "STM32 Firmware Development",
            description:
              "Custom firmware for seamless CAN-to-Modbus translation.",
          },
          {
            title: "Robust Error Handling",
            description:
              "Implemented comprehensive error handling and retry logic for reliability.",
          },
          {
            title: "Configurable Mapping Tables",
            description:
              "Developed flexible mapping tables for easy customization of data points.",
          },
        ],
      },
    },
    cta: {
      sectionId: "cta",
      title: "Need to Bridge Your Industrial Systems?",
      description:
        "Our expertise in industrial protocols and embedded firmware can help you achieve seamless interoperability and extend the life of your systems.",
      button: {
        text: "Connect Your Devices",
      },
    },
    highlights: [
      "CAN protocol",
      "Modbus bridge",
      "Industrial interoperability",
      "Embedded firmware"
    ],
    industry: "Industrial Automation",
  },
  // 12 done
  {
    id: "yocto-migration-for-safety-panel",
    crumbs: "Yocto Migration for Safety Panel",
    textColor: "#6d688d",
    statCardColor: "#6d688d",
    secondaryTitleColor: "#374C80",
    gradient: "linear-gradient(to right, #6C5B7B, #70b0d7)",
    title: {
      mainTitle:
        "Upgrading Yocto Build to Extend Product Lifecycle of Safety-Critical Systems",
      tagLine:
        "A Case Study for a Multinational OEM in Safety Systems Manufacturing",
    },
    challenge: {
      sectionId: "challenge",
      title: "The Challenge: Outdated and At-Risk",
      description:
        "A multinational OEM needed to migrate their safety-critical systems from an outdated Yocto Zeus build to a modern release. The key challenge was to perform this upgrade without breaking existing, validated applications and maintaining full peripheral compatibility.",
      constraintsTitle: "Key Obstacles:",
      constraints: [
        `Migrating an aging Yocto build without breakage.`,
        "Ensuring full compatibility with existing peripherals.",
      ],
      statCard: {
        title: "The Problem",
        value: "Outdated OS",
        goal: "A security & support risk",
      },
    },
    techHighlights: {
      sectionId: "tech-highlights",
      title: "Key Technical Highlights",
      gradient:
        "bg-gradient-to-r from-[#055b77de] via-[#24355980] to-[#006c8a63]",
      items: [
        {
          label: "Platform",
          value: ["NXP i.MX8 SoM"],
        },
        {
          label: "Build System",
          value: ["Yocto Linux"],
        },
        {
          label: "Focus",
          value: ["Compatibility and stability"],
        },
      ],
    },
    results: {
      sectionId: "results",
      title: "Impact & Results: A Modern, Secure Foundation",
      stats: [
        {
          title: "Extended Product Life",
          description:
            "A modern software stack ensures long term support for a critical product line.",
          variant: "dark",
        },
        {
          title: "Reduced Security Risk",
          description:
            "Eliminated vulnerabilities associated with an outdated OS version.",
          variant: "light",
        },
      ],
    },
    flowchartPlusContent: {
      sectionId: "flowchartPlusContent",
      sectionTitle: "Our Systematic Migration Process",
      chart: {
        title: "Migration Flowchart",
        steps: [
          "Yocto Zeus Build (Legacy)",
          "Update Layers & Recipes",
          "New Yocto Build System",
          "Validate Apps & Peripherals",
          "Production-Ready OS",
        ],
      },
      beforeAfter: {
        title: "Before / After Software Stack",
        description:
          "Our careful migration preserved the application layer while modernizing the underlying OS.",
        before: {
          title: "BEFORE",
          apps: [
            {
              label: "Applications",
              bgColor: "bg-red-400",
              textColor: "text-white",
            },
            {
              label: "Linux Kernel (Old)",
              bgColor: "bg-red-300",
              textColor: "text-white",
            },
            {
              label: "Yocto Zeus",
              bgColor: "bg-red-200",
              textColor: "text-gray-800",
            },
          ],
        },
        after: {
          title: "AFTER",
          apps: [
            {
              label: "Applications",
              bgColor: "#16a34a",
              textColor: "text-white",
            },
            {
              label: "Linux Kernel (Modern)",
              bgColor: "#22c55e",
              textColor: "text-white",
            },
            {
              label: "Yocto Kirkstone",
              bgColor: "#4ade80",
              textColor: "text-gray-800",
            },
          ],
        },
      },
    },
    cta: {
      sectionId: "cta",
      title: "Is Your Embedded OS Outdated?",
      description:
        "Let our team of experts help you migrate to a modern, secure, and stable software stack without breaking your existing applications.",
      button: {
        text: "Modernize Your Systems",
      },
    },
    highlights: [
      "Yocto migration",
      "Safety-critical systems",
      "OS upgrade",
      "Peripheral compatibility"
    ],
    industry: "Safety Systems",
  },
  // 13 done
  {
    id: "yocto-buildroot-migration",
    crumbs: "Yocto ↔ Buildroot Migration",
    textColor: "#6d688d",
    statCardColor: "#6d688d",
    secondaryTitleColor: "#374C80",
    gradient: "linear-gradient(to right, #6C5B7B, #70b0d7)",
    title: {
      mainTitle:
        'Bidirectional Migration Between  <span class="text-[#6d688d]">Yocto and Buildroot</span>',
      tagLine: "A Case Study for OEMs with Diverse Embedded Platforms",
    },
    challenge: {
      sectionId: "challenge",
      title: "The Challenge: Two Systems, One Product Line",
      description:
        "Global OEMs needed a way to manage software builds across multiple platforms, each requiring either Yocto or Buildroot. The challenge was to migrate between these distinct build systems and support a unified codebase without sacrificing feature parity.",
      constraintsTitle: "Key Obstacles:",
      constraints: [
        `Seamless migration between Yocto and Buildroot.`,
        `Maintaining feature parity across platforms.`,
        "Managing a unified codebase for multiple SoCs.",
      ],
      statCard: {
        title: "The Problem",
        value: "Fragmentation",
        goal: "Of tools & platforms",
      },
    },
    techHighlights: {
      sectionId: "tech-highlights",
      title: "Key Technical Highlights",
      gradient:
        "bg-gradient-to-r from-[#055b77de] via-[#24355980] to-[#006c8a63]",
      items: [
        {
          label: "Platform",
          value: ["NXP, TI, Rockchip"],
        },
        {
          label: "Build Systems",
          value: ["Yocto, Buildroot"],
        },
        {
          label: "Deliverable",
          value: ["Single repo supporting both"],
        },
      ],
    },
    onlyFowchart: {
      sectionId: "onlyFlowchart",
      title: "Our Bidirectional Migration Solution",
      dataFlow: [
        {
          subtitle: "Yocto → Buildroot",
          steps: [
            { label: "Yocto Recipes", bg: "bg-[#E5E7EB]", text: "text-black" },
            {
              label: "Replicate Packages & Patches",
              bg: "bg-[#C06C84]",
              text: "text-white",
            },
            {
              label: "Buildroot Configs",
              bg: "bg-[#E5E7EB]",
              text: "text-black",
            },
          ],
        },
        {
          subtitle: "Buildroot → Yocto",
          steps: [
            {
              label: "Buildroot Packages",
              bg: "bg-[#E5E7EB]",
              text: "text-black",
            },
            {
              label: "Integrate Configs & Build Scripts",
              bg: "bg-[#F67280]",
              text: "text-white",
            },
            {
              label: "Yocto Layers",
              bg: "bg-[#E5E7EB]",
              text: "text-black",
            },
          ],
        },
      ],
      biDirectionalChart: {
        subTitle: "Unified Repository Architecture",
        nestedTitle: "Unified Repo",
        card: [
          { name: "Multiple SoCs" },
          { name: "Yocto & Buildroot Configurations" },
        ],
        description:
          "We created a single, centralized repository to manage all platform-specific configurations, enabling a truly unified development workflow.",
      },
    },
    results: {
      sectionId: "results",
      title: "Impact & Results: Streamlined Development",
      stats: [
        {
          title: "Reduced Maintenance Cost",
          description:
            "A unified approach for multiple platforms cut down on overhead.",
          variant: "dark",
        },
        {
          title: "Improved Development Speed",
          description:
            "Efficient workflows and a single repository accelerated product timelines.",
          variant: "light",
        },
      ],
    },
    cta: {
      sectionId: "cta",
      title: "Simplify Your Multi-Platform Development",
      description:
        "Our expertise in build system migration can help you unify your codebase and accelerate development across all your embedded products.",
      button: {
        text: "Streamline Your Workflow",
      },
    },
    highlights: [
      "Yocto migration",
      "Buildroot migration",
      "Unified codebase",
      "Multi-platform support"
    ],
    industry: "Embedded Software",
  },
  // 14 done
  {
    id: "multi-master-i2c-problem-resolution",
    crumbs: "Multi-Master I2C Problem Resolution",
    textColor: "#6d688d",
    statCardColor: "#6d688d",
    secondaryTitleColor: "#374C80",
    gradient: "linear-gradient(to right, #6C5B7B, #70b0d7)",
    title: {
      mainTitle:
        'Eliminating I2C Bus Lock-Ups in  <span class="text-[#6d688d]">Multi-Master Embedded Systems</span>',
      tagLine: "A Case Study for a High-Volume Electronics Manufacturer",
    },
    challenge: {
      sectionId: "challenge",
      title: "The Challenge: System Lock-Ups",
      description:
        "In a high-volume production device, the I2C bus would randomly lock up, causing a complete system freeze. The root cause was a multi master contention, where the battery charger was holding the bus low, preventing communication between the main SoC and an MCU.",
      constraintsTitle: "Key Obstacles:",
      constraints: [
        `I2C bus lock-ups causing system instability.`,
        `Contention between multiple master devices.`,
        "A third-party battery charger causing the issue.",
      ],
      statCard: {
        title: "The Problem",
        value: "I2C Lock-Up",
        goal: "A hard-to-diagnose failure",
      },
    },
    techHighlights: {
      sectionId: "tech-highlights",
      title: "Key Technical Highlights",
      gradient:
        "bg-gradient-to-r from-[#055b77de] via-[#24355980] to-[#006c8a63]",
      items: [
        {
          label: "MCU",
          value: ["MSP430"],
        },
        {
          label: "Bus",
          value: ["Multi-master I2C"],
        },
        {
          label: "Fix",
          value: ["Dummy clock recovery"],
        },
      ],
    },
    flowchartPlusContent: {
      sectionId: "flowchartPlusContent",
      sectionTitle: "Our Software Based Recovery Solution",
      chart: {
        title: "I2C Bus Recovery Sequence",
        steps: ["Detect Lock-Up", "Generate Dummy Clocks", "Bus Recovery"],
      },
      biDirectionalChart: {
        subTitle: "System Architecture",
        card: [
          { name: "SoC" },
          { name: "I2C Bus" },
          { name: "Battery Charger" },
        ],
        description:
          "The I2C bus serves as the communication line between multiple masters and slaves, making bus recovery a critical requirement for system stability.",
      },
    },
    results: {
      sectionId: "results",
      title: "Impact & Results: Stability and Cost Savings",
      stats: [
        {
          title: "Eliminated System Lock-Ups",
          description:
            "The firmware fix resolved the core stability issue, ensuring reliable device operation.",
          variant: "dark",
        },
        {
          title: "Avoided Hardware Redesign",
          description:
            "A software solution prevented the need for costly and time-consuming board revisions.",
          variant: "light",
        },
      ],
    },
    cta: {
      sectionId: "cta",
      title: "Struggling with Complex Hardware Issues?",
      description:
        "Our embedded systems expertise can help you diagnose and solve challenging problems, saving you time and money.",
      button: {
        text: "Get a Solution",
      },
    },
    highlights: [
      "I2C bus recovery",
      "Multi-master systems",
      "Firmware fix",
      "Embedded hardware"
    ],
    industry: "Electronics Manufacturing",
  },
  // 15 done but impacts pending
  {
    id: "multi-os-bsp-porting-and-boot-time-optimization",
    crumbs: "Multi-OS BSP Porting and Boot Time Optimization",
    textColor: "#6d688d",
    statCardColor: "#6d688d",
    secondaryTitleColor: "#374C80",
    gradient: "linear-gradient(to right, #6C5B7B, #70b0d7)",
    title: {
      mainTitle:
        'Porting Multiple Operating Systems and Achieving  <span class="text-[#6d688d]">Sub 10 Second Boot</span> to Qt Application',
      tagLine:
        "A Case Study for a European Embedded Hardware Solutions Company",
    },
    challenge: {
      sectionId: "challenge",
      title: "The Challenge: Diverse OS & Fast Boot",
      description:
        "A European embedded hardware company needed to enable multiple EVM platforms (Samsung Exynos 4412, NXP i.MX6Q) to run various operating systems (Ubuntu, Debian, Android, Lubuntu, CentOS). The critical requirement was to achieve a boot time of less than 10 seconds directly into a Qt-based application, a significant improvement over existing, much slower systems.",
      constraintsTitle: "Key Requirements:",
      constraints: [
        `Support for multiple diverse operating systems.`,
        `Boot directly into Qt app in <10 seconds.`,
        `Overcoming significantly longer existing boot times.`,
      ],
      statCard: {
        title: "Target Boot Time",
        value: "<10s",
        goal: "To Qt Application",
      },
    },
    techHighlights: {
      sectionId: "tech-highlights",
      title: "Key Technical Highlights",
      gradient:
        "bg-gradient-to-r from-[#055b77de] via-[#24355980] to-[#006c8a63]",
      items: [
        {
          label: "Processors",
          value: ["Samsung Exynos 4412", "NXP i.MX6Q"],
        },
        {
          label: "Operating Systems",
          value: ["Ubuntu", "Debian", "Android", "Lubuntu", "CentOS"],
        },
        {
          label: "Boot Time Target",
          value: ["<10 seconds to Qt app"],
        },
        {
          label: "Optimizations",
          value: ["U-Boot tuning", "kernel streamlining", "direct Qt launch"],
        },
      ],
    },
    flowchartPlusContent: {
      sectionId: "flowchartPlusContent",
      sectionTitle: "Our Multi-Layered Optimization Approach",
      chart: {
        title: "Boot Sequence Optimization Timeline",
        steps: [
          "Power-On",
          "U-Boot Initialization (Optimized)",
          "Kernel Boot (Streamlined)",
          "Direct Qt App Launch",
          "Fully Operational Qt App (<10s)",
        ],
      },
      Onlycontent: {
        title: "Key Optimization Strategies",
        bgColor: "#cfd3d963",
        features: [
          {
            title: "BSP Porting for Multiple OS",
            description:
              "Ensured driver compatibility and optimized kernel configurations for each OS variant.",
          },
          {
            title: "Bootloader Optimization",
            description:
              "Tuned U-Boot by minimizing initialization delays and removing unnecessary processes.",
          },
          {
            title: "Kernel Boot Time Reduction",
            description:
              "Parallelized hardware initialization and compiled essential drivers directly into the kernel.",
          },
          {
            title: "Application Launch Streamlining",
            description:
              "Configured systems to bypass desktop environments for direct Qt application launch.",
          },
        ],
      },
      // imgContent: {
      //     subTitle: 'Mock-up: Functional Telematics Display',
      //     img: '',
      //     description: 'A fully functional demo, delivered within 3 days, validated the hardware and software integration.'
      // },
      // biDirectionalChart: {
      //     subTitle: 'Mock-up: Functional Telematics Display',
      //     card: [
      //         { name: 'Master Board' },
      //         { name: 'Slave Board(s)' }
      //     ],
      //     description: 'A fully functional demo, delivered within 3 days, validated the hardware and software integration.'
      // }
    },
    results: {
      sectionId: "results",
      title: "Impact & Results: Enhanced User Experience & Efficiency",
      stats: [
        {
          title: "Improved User Experience",
          description: "Enabled smoother product demonstrations and daily use.",
          variant: "dark",
        },
        {
          title: "Reproducible Optimization Framework",
          description: "Provided a scalable solution for future board designs.",
          variant: "light",
        },
      ],
    },
    cta: {
      sectionId: "cta",
      title: "Need to Optimize Your Embedded System's Boot Time?",
      description:
        "Our expertise in BSP porting and bootloader optimization can help you achieve lightning-fast startups and a superior user experience.",
      button: {
        text: "Accelerate Your Product",
      },
    },
    highlights: [
      "BSP porting",
      "Boot time optimization",
      "Multi-OS support",
      "Qt application"
    ],
    industry: "Embedded Hardware",
  },
  // 16 done but impacts pending
  {
    id: "unified-yocto-build-environment-for-multi-SoM-product-lines",
    crumbs: "Unified Yocto Build Environment for Multi-SoM Product Lines",
    textColor: "#6d688d",
    statCardColor: "#6d688d",
    secondaryTitleColor: "#374C80",
    gradient: "linear-gradient(to right, #6C5B7B, #70b0d7)",
    title: {
      mainTitle:
        'Creating a Single-Repository Yocto Environment to Support Multiple SoMs and Products',
      tagLine:
        "A Case Study for an Asia-Pacific Embedded Hardware Manufacturer",
    },
    challenge: {
      sectionId: "challenge",
      title: "The Challenge: Fragmented Build Environments",
      description:
        "An embedded hardware manufacturer faced growing inefficiencies due to managing separate Yocto build environments for each of its numerous SoMs and product lines. This led to significant duplication of effort, increased maintenance overhead, and slowed down firmware updates across their diverse product portfolio.",
      constraintsTitle: "Key Obstacles:",
      constraints: [
        `Duplication of effort in recipe and layer updates.`,
        `Increased maintenance overhead.`,
        `Slower rollout of firmware updates.`,
      ],
      statCard: {
        title: "The Problem",
        value: "Inefficiency",
        goal: "Across Product Lines",
      },
    },
    techHighlights: {
      sectionId: "tech-highlights",
      title: "Key Technical Highlights",
      gradient:
        "bg-gradient-to-r from-[#055b77de] via-[#24355980] to-[#006c8a63]",
      items: [
        {
          label: "Build System",
          value: ["Yocto Project"],
        },
        {
          label: "Repo Management",
          value: ["Manifest-based single-repo"],
        },
        {
          label: "Supported Targets",
          value: ["Multiple SoMs + product variants"],
        },
        {
          label: "Benefits",
          value: ["Reduced redundancy, centralized updates, faster builds"],
        },
      ],
    },
    flowchartPlusContent: {
      sectionId: "flowchartPlusContent",
      sectionTitle: "Our Multi-Layered Optimization Approach",
      chart: {
        title: "Boot Sequence Optimization Timeline",
        steps: [
          "Power-On",
          "U-Boot Initialization (Optimized)",
          "Kernel Boot (Streamlined)",
          "Direct Qt App Launch",
          "Fully Operational Qt App (<10s)",
        ],
      },
      Onlycontent: {
        title: "Key Optimization Strategies",
        bgColor: "#cfd3d963",
        features: [
          {
            title: "BSP Porting for Multiple OS",
            description:
              "Ensured driver compatibility and optimized kernel configurations for each OS variant.",
          },
          {
            title: "Bootloader Optimization",
            description:
              "Tuned U-Boot by minimizing initialization delays and removing unnecessary processes.",
          },
          {
            title: "Kernel Boot Time Reduction",
            description:
              "Parallelized hardware initialization and compiled essential drivers directly into the kernel.",
          },
          {
            title: "Application Launch Streamlining",
            description:
              "Configured systems to bypass desktop environments for direct Qt application launch.",
          },
        ],
      },
      // imgContent: {
      //     subTitle: 'Mock-up: Functional Telematics Display',
      //     img: '',
      //     description: 'A fully functional demo, delivered within 3 days, validated the hardware and software integration.'
      // },
      // biDirectionalChart: {
      //     subTitle: 'Mock-up: Functional Telematics Display',
      //     card: [
      //         { name: 'Master Board' },
      //         { name: 'Slave Board(s)' }
      //     ],
      //     description: 'A fully functional demo, delivered within 3 days, validated the hardware and software integration.'
      // }
    },
    results: {
      sectionId: "results",
      title: "Impact & Results: Streamlined Operations & Faster Rollouts",
      description: 'Our unified Yocto environment significantly improved efficiency, accelerated development, and simplified maintenance across all product lines.',
      stats: [
        {
          title: "Reduced Maintenance Time",
          description: "Over 50% reduction in Yocto build environment maintenance.",
          variant: "dark",
        },
        {
          title: "Simultaneous Updates",
          description: "Enabled faster, synchronized firmware rollouts.",
          variant: "light",
        },
        {
          title: "Simplified Onboarding",
          description: "Reduced integration errors for new developers.",
          variant: "light",
        },
      ],
    },
    cta: {
      sectionId: "cta",
      title: "Struggling with Complex Embedded Builds?",
      description:
        "Our expertise in Yocto and build system architecture can help you streamline your development, reduce costs, and accelerate time-to-market.",
      button: {
        text: "Optimize Your Build Process",
      },
    },
    highlights: [
      "Yocto build environment",
      "Multi-SoM support",
      "Single repository",
      "Firmware updates"
    ],
    industry: "Embedded Systems",
  },
  // 17
  {
    id: "low-cost-android-ott-tv-box-development",
    crumbs: "Low-Cost Android OTT TV Box Development",
    textColor: "#6d688d",
    statCardColor: "#6d688d",
    secondaryTitleColor: "#374C80",
    gradient: "linear-gradient(to right, #6C5B7B, #70b0d7)",
    title: {
      mainTitle:
        'Delivering a Custom Android TV OTT Platform on a Sub-$50 Hardware Budget',
      tagLine:
        "A Case Study for OTT Streaming in Emerging Markets",
    },
    challenge: {
      sectionId: "challenge",
      title: "The Challenge: Cost- Effective Performance",
      description:
        "An OTT provider needed an affordable Android TV box for emerging markets. The challenge was to deliver a high-performance, stable, and branded experience on hardware with a bulk cost of under $50 USD, while also optimizing for boot time and media playback.",
      constraintsTitle: "Key Obstacles:",
      constraints: [
        'Meeting a strict sub-$50 hardware budget.',
        'Optimizing boot time for a fast user experience.',
        'Ensuring high performance & stability for streaming.',
      ],
      statCard: {
        title: "Budget Target",
        value: "<$50",
        goal: "Per unit in bulk",
      },
    },
    techHighlights: {
      sectionId: "tech-highlights",
      title: "Key Technical Highlights",
      gradient:
        "bg-gradient-to-r from-[#055b77de] via-[#24355980] to-[#006c8a63]",
      items: [
        {
          label: "Hardware",
          value: ["NanoPi 5C (RK3588S)"],
        },
        {
          label: "OS",
          value: ["AOSP Android TV OS"],
        },
        {
          label: "Customizations",
          value: ["Boot, UI, HAL Tuning"],
        },
      ],
    },
    results: {
      sectionId: "results",
      title: "Impact & Results: Scalable, High-Value Solution",
      stats: [
        {
          title: "Met Aggressive Budget",
          description: "Delivered a high-performance device at the targeted sub-$50 price point.",
          variant: "dark",
        },
        {
          title: "Improved User Experience",
          description: "Faster boot times, smoother playback, and custom branding delighted end users.",
          variant: "light",
        },
      ],
    },
    cta: {
      sectionId: "cta",
      title: "Launching an Embedded Product?",
      description:
        "Our expertise in BSP customization and OS optimization helps you deliver high-performance, cost-effective solutions to market, faster.",
      button: {
        text: "Request a Consultation",
      },
    },
    flowchartSecondary: {
      sectionTitle: "Our Comprehensive Android OS Optimization",
      features: [
        {
          title: "Boot Time Optimization",
          before: {
            label: "Before",
            time: "~30s",
            color: "red"
          },
          after: {
            label: "After",
            time: "<10s",
            color: "#1A5276"
          },
        },
        {
          title: "Android System Optimizations",
          items: [
            {
              label: "Android Framework Tuning",
              color: "#007bff"
            },
            {
              label: "Hardware Abstraction Layer (HAL) Tuning",
              color: "#17a2b8"
            },
            {
              label: "Media Playback Pipeline Enhancements",
              color: "#28a745"
            },
            {
              label: "Bug Fixes in AOSP",
              color: "#ffc107"
            }
          ]
        }
      ],
      launcherUI: {
        title: "Custom OTT Launcher UI",
        items: [
          { label: "Live TV", bgColor: "#4a4a4a" },
          { label: "Movies", bgColor: "#4a4a4a" },
          { label: "Music", bgColor: "#4a4a4a" },
          { label: "Settings", bgColor: "#4a4a4a" }
        ]
      },
    },
    highlights: [
      "Yocto build environment",
      "Multi-SoM support",
      "Single repository",
      "Firmware updates"
    ],
    industry: "Embedded Systems",
  },
];


// Suggestion logic (move to utils if needed)
const getSuggestions = (currentId: string) => {
  const currentCard = caseStudyData.find((card) => card.id === currentId);
  if (!currentCard) return [];

  const currentHighlights = currentCard.highlights ?? [];
  const currentIndustry = currentCard.industry ?? "";

  const keywords = [
    ...currentHighlights.join(" ").toLowerCase().split(/\W+/),
    currentIndustry.toLowerCase(),
  ];

  const uniqueKeywords = [...new Set(keywords.filter((word) => word.length > 2))];

  const scored = caseStudyData
    .filter((card) => card.id !== currentId)
    .map((card) => {
      const cardHighlights = card.highlights ?? [];
      const cardIndustry = card.industry ?? "";

      const cardText = `${cardHighlights.join(" ")} ${cardIndustry}`.toLowerCase();
      const score = uniqueKeywords.reduce(
        (acc, word) => (cardText.includes(word) ? acc + 1 : acc),
        0
      );
      return { ...card, score };
    })
    .filter((card) => card.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return scored;
};

interface CaseStudyInfoProps {
  highlights?: string[];
  industry?: string;
}

type ReChart = {
  chartData: Record<string, number>;
  yAxisLabel: string;
  xAxisLabel: string;
};

type Data = {
  reChart: ReChart;
};

const CaseStudyInfo: React.FC<CaseStudyInfoProps> = ({ highlights, industry }) => {
  const router = useRouter();
  const { id } = useParams() as { id: string };
  const data = caseStudyData?.find((item, idx) => {
    if (item?.id === id) {
      return item;
    }
  });
  const chartInfo = data?.results?.reChart?.results;

  const chartData = chartInfo
    ? Object?.entries(chartInfo?.chartData)?.map(([name, details]) => ({
      name,
      latency: details?.value,
      fill: details?.fill,
    }))
    : [];


  const xAxisLabel = chartInfo?.xAxisLabel || 'X Axis';
  const yAxisLabel = chartInfo?.yAxisLabel || 'Y Axis';

  return (
    <>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-16">
        {/* breadCrumbs */}
        <p className="text-sm flex items-center gap-2 justify-center pb-15">
          <Link href="/" className="text-primary">
            Home
          </Link>
          <RiArrowRightSLine className="text-primary text-xl" />
          <Link href="/case-study" className="text-primary">
            Case Study
          </Link>
          <RiArrowRightSLine className="text-primary text-xl" />
          <span className="text-slate-500">{data?.crumbs}</span>
        </p>
        {/* title */}
        {data?.title && (
          <section>
            <h2
              className="md:text-xl xl:text-4xl font-semibold text-[#333] mb-6 text-center leading-12"
              dangerouslySetInnerHTML={{ __html: data?.title?.mainTitle ?? "" }}
            />
            <p className="mt-4 text-base text-gray-600 text-center">
              {data?.title?.tagLine}
            </p>
          </section>
        )}
        {/* intro */}
        {data?.challenge && (
          <section id={data?.challenge?.sectionId} className="py-16">
            <div className="bg-white rounded-lg shadow-md border border-slate-200 p-6 md:p-8 flex flex-col gap-4">
              <div className="text-center md:text-left">
                <h2
                  className={`text-xl lg:text-2xl font-semibold mb-4`}
                  style={{ color: data?.textColor }}
                >
                  {data?.challenge?.title}
                </h2>
                <p className="text-sm lg:text-base text-gray-600 mb-6">
                  {data?.challenge?.description}
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between">
                  <div>
                    <h3
                      className={`font-semibold mb-2`}
                      style={{ color: data?.secondaryTitleColor }}
                    >
                      {data?.challenge?.constraintsTitle}
                    </h3>
                    <ul className="list-none space-y-2">
                      {data?.challenge?.constraints?.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-xl highlight-text mr-3">•</span>{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`text-white text-center p-8 rounded-xl`}
                    style={{ backgroundColor: data?.statCardColor }}
                  >
                    <div className="text-sm md:text-base lg:text-lg font-semibold opacity-80">
                      {data?.challenge?.statCard?.title}
                    </div>
                    <div className="text-xl md:text-3xl lg:text-5xl mt-2 mb-5">
                      {data?.challenge?.statCard?.value}
                    </div>
                    <div className="text-sm md:text-base lg:text-lg font-semibold opacity-80">
                      {" "}
                      {data?.challenge?.statCard?.goal}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* 4 step process */}
        {data?.stepProcess && (
          <section id={data?.stepProcess?.sectionId} className="py-16">
            <h2
              className={`text-2xl font-semibold mb-6 text-center`}
              style={{ color: data?.textColor }}
            >
              {data?.stepProcess?.title}
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 space-y-8">
              {/* top Column */}
              <div>
                <h3
                  className={`text-xl font-semibold text-[${data?.secondaryTitleColor}] mb-4 ${data?.secondaryTitleColor}`}
                >
                  {data?.stepProcess?.descriptionBlock?.subtitle}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {data?.stepProcess?.descriptionBlock?.description}
                </p>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4
                    className={`font-semibold mb-3`}
                    style={{ color: data?.textColor }}
                  >
                    {data?.stepProcess?.descriptionBlock?.flowTitle}
                  </h4>
                  <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-around text-center font-semibold">
                    {data?.stepProcess?.descriptionBlock?.flowSteps?.map(
                      (step, index) => (
                        <div
                          key={index}
                          className="flex flex-col lg:flex-row items-center gap-5 lg:gap-44"
                        >
                          <div
                            className={`p-3 text-${step.color}-600 bg-${step.color}-100 rounded-lg`}
                          >
                            {step.label}
                          </div>
                          {index !==
                            data?.stepProcess?.descriptionBlock?.flowSteps
                              .length -
                            1 && (
                              <div>
                                <FaArrowDownLong
                                  className="text-2xl font-mono block md:hidden"
                                  style={{ color: data?.textColor }}
                                />
                                <FaArrowRightLong
                                  className="text-2xl font-mono hidden md:block"
                                  style={{ color: data?.textColor }}
                                />
                              </div>
                            )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              {/* bottom Column */}
              <div className="space-y-8">
                {data?.stepProcess?.steps?.map((step, index) => (
                  <div key={step?.step} className="relative">
                    {/* Vertical line above the circle */}
                    {index !== 0 && (
                      <div className="absolute -top-14 lg:-top-10 left-3 lg:left-5 h-15 w-[2px] bg-slate-300 z-0" />
                    )}

                    {/* Step Circle + Content */}
                    <div className="flex items-start gap-5">
                      <div className="relative z-10">
                        <div
                          className="rounded-full size-7 lg:size-11 grid place-items-center text-white font-semibold"
                          style={{ backgroundColor: data?.statCardColor }}
                        >
                          {step?.step}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base md:text-lg text-[#374C80]">
                          {step?.title}
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base">
                          {step?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        {/* only flowchart */}
        {data?.onlyFowchart && (
          <section id={data?.onlyFowchart?.sectionId} className="py-16">
            <h2
              className="text-2xl font-semibold mb-6 text-center"
              style={{ color: data?.textColor }}
            >
              {data?.onlyFowchart?.title}
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              {data?.onlyFowchart?.dataFlow && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  {data?.onlyFowchart?.dataFlow?.map((pipeline, idx) => (
                    <div key={idx} className="text-center">
                      <h3
                        className="text-xl mb-4"
                        style={{ color: data?.secondaryTitleColor }}
                      >
                        {pipeline?.subtitle}
                      </h3>
                      <div className="flex flex-col items-center space-y-4">
                        {pipeline?.steps?.map((step, sIdx) => (
                          <div key={sIdx}>
                            <div
                              className={`${step?.bg} ${step?.text} p-3 rounded-lg`}
                            >
                              {step.label}
                            </div>
                            {sIdx < pipeline?.steps.length - 1 && (
                              <div className="text-2xl font-mono">&darr;</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {data?.onlyFowchart?.biDirectionalChart && (
                <div className="py-18 text-center w-full space-y-8">
                  <p className="text-center">
                    {data?.onlyFowchart?.biDirectionalChart?.subTitle}
                  </p>
                  <div className="py-5 bg-slate-100 border border-slate-200 w-fit mx-auto p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                      {Array.isArray(
                        data?.onlyFowchart?.biDirectionalChart?.card
                      ) &&
                        data?.onlyFowchart?.biDirectionalChart?.card?.map(
                          (item, idx, arr) => {
                            return (
                              <div key={idx} className="flex flex-col md:flex-row items-center gap-3">
                                <p className="bg-white border border-slate-300 shadow rounded-md p-3 w-fit">
                                  {item?.name}
                                </p>
                                {idx !== arr.length - 1 && (
                                  <div>
                                    <BsArrowsVertical
                                      className="text-2xl font-mono block md:hidden"
                                      style={{ color: data?.textColor }}
                                    />
                                    <BsArrows
                                      className="text-2xl font-mono hidden md:block"
                                      style={{ color: data?.textColor }}
                                    />
                                  </div>
                                )}
                              </div>
                            );
                          }
                        )}
                    </div>
                    <p className="text-base py-2">
                      {data?.onlyFowchart?.biDirectionalChart?.nestedTitle}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 text-center max-w-2xl mx-auto">
                    {data?.onlyFowchart?.biDirectionalChart?.description}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}
        {/* flowchartSecondary */}
        {data?.flowchartSecondary && (
          <section id="flowchartSecondary" className="py-16">
            <h2 className="text-2xl font-semibold text-[#212529] mb-6 text-center" style={{color : data?.textColor}}>
              {data?.flowchartSecondary?.sectionTitle}
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left Side */}
                <div className="flex flex-col gap-8">
                  {/* Optimization */}
                  {data?.flowchartSecondary?.features[0] && (
                    <div>
                      <h3 className="text-xl font-semibold text-[#212529] mb-4">
                        {data?.flowchartSecondary?.features[0].title}
                      </h3>
                      <div className="p-6 bg-[#E9ECEF] rounded-lg shadow-inner flex justify-around items-center">
                        {/* Before */}
                        <div className="text-center">
                          <div className="text-gray-600 text-sm">
                            {data?.flowchartSecondary?.features[0]?.before?.label}
                          </div>
                          <div
                            className="text-4xl font-semibold mt-1"
                            style={{ color: data?.flowchartSecondary?.features[0].before?.color }}
                          >
                            {data?.flowchartSecondary?.features[0]?.before?.time}
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="text-5xl font-black" style={{ color: "#1A5276" }}>
                          &rarr;
                        </div>

                        {/* After */}
                        <div className="text-center">
                          <div className="text-gray-600 text-sm">
                            {data?.flowchartSecondary?.features[0]?.after?.label}
                          </div>
                          <div
                            className="text-4xl font-semibold mt-1"
                            style={{ color: data?.flowchartSecondary?.features[0]?.after?.color }}
                          >
                            {data?.flowchartSecondary?.features[0]?.after?.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Android System Optimizations */}
                  {data?.flowchartSecondary?.features[1] && (
                    <div>
                      <h3 className="text-xl font-semibold text-[#212529] mb-4">
                        {data.flowchartSecondary.features[1].title}
                      </h3>
                      <div className="flex flex-col gap-4">
                        {data?.flowchartSecondary?.features[1]?.items?.map((item, index) => (
                          <div
                            key={index}
                            className="bg-gray-100 p-3 rounded-lg"
                            style={{ color: item.color }}
                          >
                            {item.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side - Custom OTT Launcher */}
                {data?.flowchartSecondary?.launcherUI && (
                  <div className="py-14 px-5 flex items-end relative">
                    <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
                    <div className="relative z-10 w-full">
                      <h3 className="text-xl font-bold text-white mb-4">
                        {data.flowchartSecondary.launcherUI.title}
                      </h3>
                      <div className="grid grid-cols-4 gap-4">
                        {data.flowchartSecondary.launcherUI.items.map((app, index) => (
                          <div key={index} className="text-center text-white">
                            <div
                              className="w-12 h-12 md:w-16 md:h-16 rounded-md mx-auto flex items-center justify-center text-3xl"
                              style={{ backgroundColor: app.bgColor }}
                            >
                              {/* Optional: Add icon */}
                            </div>
                            <div className="text-xs mt-1">{app.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
        {/* flow chart plus content */}
        {data?.flowchartPlusContent && (
          <section id={data?.flowchartPlusContent?.sectionId} className="py-16">
            <h2
              className="text-2xl font-semibold text-[#E0E0E0] mb-6 text-center"
              style={{ color: data?.textColor }}
            >
              {data?.flowchartPlusContent?.sectionTitle}
            </h2>
            <div className="rounded-lg shadow-md p-6 md:p-8 border border-slate-300 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {data?.flowchartPlusContent?.chart && (
                  <div className="text-center space-y-4">
                    <h3 className="text-xl !mb-4">
                      {data?.flowchartPlusContent?.chart?.title}
                    </h3>
                    {data?.flowchartPlusContent?.chart?.description && (
                      <p className="text-gray-600 text-sm text-center">{data?.flowchartPlusContent?.chart?.description}</p>
                    )}
                    {data?.flowchartPlusContent?.chart?.steps?.map(
                      (step, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center gap-3"
                        >
                          <div className="w-full p-3 rounded-lg border border-slate-600">
                            {step}
                          </div>
                          {index <
                            data?.flowchartPlusContent?.chart?.steps?.length -
                            1 && <FaArrowDownLong />}
                        </div>
                      )
                    )}
                  </div>
                )}
                {data?.flowchartPlusContent?.Onlycontent && (
                  <div className="p-6 rounded-lg shadow-inner border border-gray-300">
                    <h3 className="text-xl mb-4 text-center">
                      {data?.flowchartPlusContent?.Onlycontent?.title}
                    </h3>
                    <div className="space-y-4">
                      {data?.flowchartPlusContent?.Onlycontent?.features?.map(
                        (feature, idx) => (
                          <div
                            className="p-3 rounded-lg"
                            key={idx}
                            style={{
                              backgroundColor:
                                data?.flowchartPlusContent?.Onlycontent
                                  ?.bgColor,
                            }}
                          >
                            <p style={{ color: data?.textColor }}>
                              {feature?.title}
                            </p>
                            {feature?.description && (
                              <div className="text-sm text-gray-400">
                                {feature?.description}
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                    <p className="text-sm text-gray-600 text-center pt-5">
                      {data?.flowchartPlusContent?.Onlycontent?.description}
                    </p>
                  </div>
                )}
                {data?.flowchartPlusContent?.imgContent && (
                  <div className="bg-gray-100 border border-gray-200 shadow-lg rounded-lg">
                    <div className="py-11 px-3 text-center">
                      <p>{data?.flowchartPlusContent?.imgContent?.subTitle}</p>
                      <p className="text-sm text-gray-600">
                        {data?.flowchartPlusContent?.imgContent?.description}
                      </p>
                    </div>
                  </div>
                )}
                {data?.flowchartPlusContent?.biDirectionalChart && (
                  <div>
                    <p className="text-center">
                      {data?.flowchartPlusContent?.biDirectionalChart?.subTitle}
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 py-5">
                      {Array.isArray(
                        data?.flowchartPlusContent?.biDirectionalChart?.card
                      ) &&
                        data?.flowchartPlusContent?.biDirectionalChart?.card?.map(
                          (item, idx, arr) => {
                            return (
                              <div key={idx} className="flex flex-col md:flex-row items-center gap-3">
                                <p className="bg-white border border-slate-300 shadow rounded-md p-3 w-fit">
                                  {item?.name}
                                </p>
                                {idx !== arr.length - 1 && (
                                  <div>
                                    <BsArrowsVertical
                                      className="text-2xl font-mono block md:hidden"
                                      style={{ color: data?.textColor }}
                                    />
                                    <BsArrows
                                      className="text-2xl font-mono hidden md:block"
                                      style={{ color: data?.textColor }}
                                    />
                                  </div>
                                )}
                              </div>
                            );
                          }
                        )}
                    </div>
                    <p className="text-sm text-gray-600 text-center">
                      {
                        data?.flowchartPlusContent?.biDirectionalChart
                          ?.description
                      }
                    </p>
                  </div>
                )}
                {data?.flowchartPlusContent?.beforeAfter && (
                  <div className="py-3 px-6 bg-slate-100 border border-slate-200 rounded-2xl space-y-4">
                    <p className="text-base md:text-lg font-semibold py-2 text-center">
                      {data?.flowchartPlusContent?.beforeAfter?.title}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <h4 className="font-bold text-[#2B3B4B]">
                          {data?.flowchartPlusContent?.beforeAfter?.before?.title}
                        </h4>
                        <div className="mt-2 space-y-2">
                          {data?.flowchartPlusContent?.beforeAfter?.before?.apps?.map(
                            (app, index) => (
                              <div
                                key={index}
                                className={`${app?.bgColor} ${app?.textColor} rounded-md p-2 text-sm`}
                              >
                                {app?.label}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2B3B4B]">
                          {data?.flowchartPlusContent?.beforeAfter?.after?.title}
                        </h4>
                        <div className="mt-2 space-y-2">
                          {data?.flowchartPlusContent?.beforeAfter?.after?.apps?.map(
                            (app, index) => (
                              <div
                                style={{
                                  background: app?.bgColor,
                                  color: app?.textColor,
                                }}
                                key={index}
                                className={`rounded-md p-2 text-sm`}
                              >
                                {app?.label}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    {data?.flowchartPlusContent?.beforeAfter?.description && (
                      <p className="text-base text-gray-600 max-w-lg mx-auto text-center">
                        {data?.flowchartPlusContent?.beforeAfter?.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
        {/* compatibility */}
        {data?.compatibility && (
          <section id={data?.compatibility?.sectionId} className="py-16">
            <h3
              className="text-2xl font-semibold mb-6 text-center"
              style={{ color: data?.textColor }}
            >
              {data?.compatibility?.title}
            </h3>

            <div className="w-full overflow-auto border border-gray-300 rounded-lg">
              <table className="min-w-full w-full">
                <thead>
                  <tr
                    style={{
                      backgroundColor: `${data?.compatibility?.bgColor}`,
                    }}
                    className="text-sm"
                  >
                    {data?.compatibility?.columns?.map((col, index) => (
                      <th
                        key={index}
                        className="whitespace-nowrap py-3 px-4 text-left text-gray-800"
                        style={{ color: data?.textColor }}
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data?.compatibility?.rows?.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      {data?.compatibility?.columns?.map((col, colIndex) => (
                        <td
                          key={colIndex}
                          className="whitespace-nowrap py-3 px-4 text-sm text-gray-700 border-t border-gray-200"
                        >
                          {row[col?.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm pt-5 text-center">
              {data?.compatibility?.description}
            </p>
          </section>
        )}
        {/* impacts and result */}
        {data?.results && (
          <section id={data?.results.sectionId} className="py-16">
            <h2
              className={`text-2xl font-semibold mb-6 text-center`}
              style={{ color: data?.textColor }}
            >
              {data?.results?.title}
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 space-y-5">
              {data?.results?.description && (
                <p className="text-sm text-gray-600 text-center">
                  {data?.results?.description}
                </p>
              )}
              {data?.results?.reChart && (
                <ResponsiveContainer width="80%" height={600} className="mx-auto">
                  <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="name"
                      label={{
                        value: xAxisLabel,
                        position: 'insideBottom',
                        offset: -5,
                      }}
                    />
                    <YAxis
                      label={{
                        value: yAxisLabel,
                        angle: -90,
                        position: 'insideLeft',
                      }}
                    />
                    <Tooltip />
                    <Bar dataKey="latency" isAnimationActive={true}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>

              )}
              {/* {data?.results?.img && (
                <Image />
              )} */}
              {data?.results?.beforeImg && data?.results?.afterImg && (
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                  <div className="text-center">
                    <p className="font-medium mb-2" style={{ color: data?.secondaryTitleColor }}>Before</p>
                    <Image
                      src={data?.results?.beforeImg}
                      alt="Before"
                      className="rounded shadow-md max-w-full h-auto"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-medium mb-2" style={{ color: data?.secondaryTitleColor }}>After</p>
                    <Image
                      src={data?.results?.afterImg}
                      alt="After"
                      className="rounded shadow-md max-w-full h-auto"
                    />
                  </div>
                </div>
              )}

              {data?.results?.translucentCard && (
                <div className="grid grid-cols-2">
                  {data?.results?.translucentCard?.card?.map((item, idx) => {
                    return (
                      <div key={idx} className="text-center space-y-3">
                        <p
                          className="font-semibold"
                          style={{ color: data?.secondaryTitleColor }}
                        >
                          {item?.SubTitle}
                        </p>
                        <p className="text-gray-600 text-sm">{item?.para}</p>
                      </div>
                    );
                  })}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                {data?.results?.stats?.map((stat, i) => (
                  <div
                    key={i}
                    className={`bg-[#f9f9f9] text-[#333] shadow-md transform hover:scale-105 hover:shadow-xl p-6 rounded-lg transition-all duration-300 cursor-pointer`}
                  >
                    <h3
                      className={`font-semibold text-lg`}
                      style={{ color: data?.secondaryTitleColor }}
                    >
                      {stat.title}
                    </h3>
                    <p
                      className={`text-sm mt-1 ${stat?.variant === "dark" ? "opacity-80" : "text-gray-600"
                        }`}
                    >
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        {/* Technical Highlights Section */}
        {data?.techHighlights && (
          <section id={data?.techHighlights?.sectionId} className="py-16">
            <h2
              className={`text-2xl font-semibold mb-6 text-center`}
              style={{ color: data?.textColor }}
            >
              {data?.techHighlights?.title}
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-wrap justify-center gap-6">
              <p className="text-gray-600 py-3 text-center">
                {data?.techHighlights?.description}
              </p>
              {data?.techHighlights?.items?.map((item, i) => (
                <div
                  key={i}
                  className={`max-w-72 w-full p-[2px] ${data?.techHighlights?.gradient} rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}
                >
                  <div className="bg-white h-full p-6 rounded-lg text-center space-y-2">
                    <div className="text-lg font-semibold text-[#243559] mb-2">
                      {item?.label}
                    </div>
                    {item?.value?.map((val, idx) => {
                      return (
                        <div key={idx} className="text-gray-600 text-sm">
                          {val}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        {/* cta */}
        {data?.cta && (
          <section
            id={data?.cta?.sectionId}
            className="my-8 text-center p-8 rounded-lg shadow-lg"
            style={{ backgroundImage: data?.gradient }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              {data?.cta?.title}
            </h2>
            <p className="text-white opacity-90 mt-2 mb-6 max-w-xl mx-auto">
              {data?.cta?.description}
            </p>

            <Button
              onClick={() => router.push("/contact-us")}
              style={{ borderColor: data?.textColor, color: data?.textColor }}
              className={`!bg-white transition-transform transform hover:scale-105 outline-none`}
            >
              {data?.cta?.button?.text}
            </Button>
          </section>
        )}
        {/* suggestion */}
        {getSuggestions(id).length > 0 && (
          <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
            <h2 className="text-2xl font-semibold mb-10 text-center tracking-wide" style={{ color: data?.textColor }}>
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-6">
              {getSuggestions(id).map((card) => (
                <div
                  key={card?.id}
                  className="relative bg-white/30 backdrop-blur-md rounded-xl border border-white/30 shadow-lg 
                   hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 p-8 flex flex-col justify-between"
                >
                  {/* Colored accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 rounded-l-xl" style={{ background: data?.textColor }}></div>

                  {/* Optional Image */}
                  {/* {card?.img && (
          <img
            src={card?.img}
            alt={card?.title}
            className="w-full h-44 object-cover rounded-lg mb-6"
          />
        )} */}

                  <div className="pl-4">
                    <h3 className="text-lg text-[#1e293b] mb-3">
                      {card?.crumbs}
                    </h3>
                    <p className="font-semibold mb-4 uppercase tracking-wide" style={{ color: data?.textColor }}>
                      {card?.industry}
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                      {card?.highlights?.slice(0, 3).map((hl, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {hl}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/case-study/${card?.id}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-indigo-900 transition-colors duration-300"
                  >
                    <MdArrowForwardIos />
                    View Case Study
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default CaseStudyInfo;

export const runtime = 'edge';