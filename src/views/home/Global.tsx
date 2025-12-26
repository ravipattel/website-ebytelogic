import Image from 'next/image';

import React from 'react'

import WearablesPng from '@/src/assets/images/home/industry/wearables.png';
import StreamingPng from '@/src/assets/images/home/industry/streaming.png';
import SemiconductorsPng from '@/src/assets/images/home/industry/semiconductors.png';
import TelecomPng from '@/src/assets/images/home/industry/telecom.png';
import AerospacePng from '@/src/assets/images/home/industry/aerospace.png';
import IotJpeg from '@/src/assets/images/home/industry/iot.jpeg';

const globalCards = [
    {
        image: WearablesPng,
        title: 'Smart Displays & HMIs',
        description: 'Robust UI and application layers for smart panels, industrial displays, and touch-enabled devices.',
        tags: [' Qt / QML', 'Android UI', 'Touch & Display Drivers', 'Performance Tuning'],
    },
    {
        image: StreamingPng,
        title: 'Media, Broadcast & Professional AV',
        description: 'Low-latency, broadcast-grade multimedia pipelines engineered for precision, sync, and compliance.',
        tags: ['GStreamer / FFmpeg', 'SDI / HDMI', 'NDI / SRT', 'AV Sync ±10ms'],
    },
    {
        image: SemiconductorsPng,
        title: 'Edge AI & Vision Systems',
        description: 'Embedded platforms optimized for real-time video capture, processing, and low-latency delivery at the edge.',
        tags: ['MIPI-CSI', 'Hardware Acceleration', 'Low-Latency Pipelines', 'Jetson / i.MX'],
    },
    {
        image: TelecomPng,
        title: 'Networking & Telecom Gateways',
        description: 'High-availability embedded software for wired and wireless gateways handling continuous data flow.',
        tags: ['Embedded Linux', 'Protocol Handling', 'OTA Updates', 'System Reliability'],
    },
    {
        image: AerospacePng,
        title: 'Automotive Infotainment & Telematics',
        description: 'Performance-critical embedded software for in-vehicle displays, infotainment units, and connected automotive platforms.',
        tags: ['Android BSP', 'Audio / Video Pipelines', 'Qt HMI', 'Boot Optimization'],
    },
    {
        image: IotJpeg,
        title: 'Industrial Automation & IIoT ',
        description: 'Reliable embedded software for industrial controllers, gateways, and edge devices operating under real-world constraints. ',
        tags: ['Linux BSP', 'CAN / Modbus', 'Gateway Software', 'Field Upgrades'],
    }
];


const Global = () => {
    return (
        <section className='bg-[#f5f8fb] pt-0 pb-16 sm:py-16 sm:py-28'>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4">
                <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText text-center leading-tight mb-8">
                Tailored Embedded Software Solutions for Your Industry 
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4'>
                    {globalCards.map((card, index) => (
                        <div key={index} className={`bg-white border border-gray-200 shadow-xl justify-between flex flex-col  ${index % 2 === 1 ? 'flex-col-reverse' : ''}`}>
                            <div className='md:max-w-[435px] max-h-72'>
                                <Image width={435} height={196} src={card.image} alt={card.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-3 text-primaryText p-7">
                                <h3 className="text-lg sm:text-[21px] leading-normal">
                                    {card.title}
                                </h3>
                                <p className='text-[#5d6471] text-sm sm:text-[15px]'>{card.description}</p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {card.tags?.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="rounded-md bg-[#f5f8fb] border border-slate-700 text-black text-[10px] px-3 py-1 hover:bg-slate-700 hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Global
