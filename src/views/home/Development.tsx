'use client';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { GoCheckCircleFill } from 'react-icons/go';

import LinuxPng from '@/src/assets/images/home/development/linux.png';
import StreamingJpg from '@/src/assets/images/home/development/streaming.png';
import CrossPlatformPng from '@/src/assets/images/home/development/crossPlatform.png';
import QaPng from '@/src/assets/images/home/development/QA engineering & Support.png';

const tabContents = [
    {
        tab: "Linux BSP & Driver Development",
        image: LinuxPng,
        title: "Powering Devices from the Core",
        description: "Dummy text is also used to demonstrate...",
        points: [
            "Custom Board Support Packages (Yocto, Buildroot)",
            "Linux Kernel & Device Driver Development",
            "Hardware Validation & Board Bring-Up",
            "Peripheral Interface (I2C, SPI, UART, GPIO)",
            "Support for ARM, NXP, Qualcomm, TI"
        ]
    },
    {
        tab: "Streaming & Multimedia Engineering",
        image: StreamingJpg,
        title: "Real-Time Media, Perfectly Aligned",
        description: "Dummy text is also used to demonstrate...",
        points: [
            "±10ms AV Sync with SDI, HDMI, RTP",
            "GStreamer/FFMPEG/Live555 Integration",
            "Video Pipeline Tuning for Low Latency",
            "NDI, SRT Protocol Support on Embedded & Desktop",
            "Multiview & Dynamic Layout Handling",
        ]
    },
    {
        tab: "Cross-Platform App Development",
        image: CrossPlatformPng,
        title: "Unified Experience Across Devices",
        description: "Used to demonstrate the appearance...",
        points: [
            "Qt/C++ and Python App Development",
            "Android/iOS with Native & Hybrid Support",
            "Multimedia-Centric GUI Applications",
            "Touchscreen Interface Optimization",
            "Porting Apps from Windows to Linux",
        ]
    },
    {
        tab: "QA Engineering & Support",
        image: QaPng,
        title: "Stability You Can Launch With",
        description: "Dummy text is also used...",
        points: [
            "Manual & Automated QA for Embedded/AV Apps",
            "Real-Device Media Testing",
            "CI/CD Pipeline Setup & Regression Tests",
            "Test Coverage for Streaming, UI, Firmware",
            "Long-Duration & Stress Testing",
        ]
    }
];

const Development = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isHovered) return;

        intervalRef.current = setInterval(() => {
            setActiveTab(prev => (prev + 1) % tabContents.length);
        }, 1000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isHovered]);

    const activeContent = tabContents[activeTab];

    return (
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-16 sm:py-28">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-3">
                {tabContents.map((tab, index) => (
                    <li key={index} className="w-full">
                        <button
                            onMouseEnter={() => {
                                setActiveTab(index);
                                setIsHovered(true);
                            }}
                            onMouseLeave={() => setIsHovered(false)}
                            className={`w-full rounded py-5 px-2 text-base border border-primary cursor-default 
                ${activeTab === index ? 'text-white bg-primary' : ''}
                hover:text-white hover:bg-primary`}
                        >
                            {tab.tab}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8" onMouseEnter={() => {
                setIsHovered(true);
            }} onMouseLeave={() => setIsHovered(false)}>
                <div>
                    <Image
                        src={activeContent.image}
                        alt={activeContent.title}
                        height={416}
                        width={555}
                        className="w-full sm:h-[220px] rounded-lg mx-auto object-cover"
                    />
                </div>
                <div className="space-y-5">
                    <h2 className="text-primaryText text-xl sm:text-3xl">{activeContent.title}</h2>
                    <ul className="space-y-3 text-[#5d6471]">
                        {activeContent.points.map((point, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm sm:text-[15px]">
                                <GoCheckCircleFill className="text-primary" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Development;
