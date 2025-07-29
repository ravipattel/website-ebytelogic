import Image from 'next/image';

import React from 'react'
import { FaCalendarAlt, } from 'react-icons/fa';

import WearablesJpg from '@/src/assets/images/home/wearables.jpg';
import StreamingJpg from '@/src/assets/images/home/streaming.jpg';
import SemiconductorsJpeg from '@/src/assets/images/home/semiconductors.jpeg';
import FirelineJpg from '@/src/assets/images/home/fireline.jpg';
import AerospaceAvif from '@/src/assets/images/home/aerospace.webp';
import IotJpg from '@/src/assets/images/home/iot.jpeg';

const globalCards = [
    {
        image: WearablesJpg,
        title: 'Wearables & Smart Devices',
        description: 'Seamless connectivity and real-time UX for smart, battery-efficient wearables.',
        date: '20 July, 2019',
        tags: ['BLE firmware', 'mobile app integration', 'OTA support'],
    },
    {
        image: StreamingJpg,
        title: 'Media Broadcasting & Streaming',
        description: 'Low-latency GStreamer/FFmpeg pipelines for AV sync and embedded video delivery',
        date: '13 May, 2018',
        tags: ['SDI', 'HDMI', 'NDI', 'SRT', 'macOS & Linux support'],
    },
    {
        image: SemiconductorsJpeg,
        title: 'Semiconductor & BSP Services',
        description: 'Accelerated SoC development with Linux BSP, Android HAL, and driver integration.',
        date: '24 April, 2019',
        tags: ['Rockchip', 'i.MX', 'U-Boot', 'Android Porting'],
    },
    {
        image: FirelineJpg,
        title: 'Fire Safety & Industrial Panels',
        description: 'Mission-critical HMI systems with QT/C++ for industrial and safety applications.',
        date: '18 Oct, 2020',
        tags: ['Serial/CAN protocols', 'alarm systems', 'touchscreen UX'],
    },
    {
        image: AerospaceAvif,
        title: 'Aerospace, Drones & Remote Imaging',
        description: 'Embedded video processing from camera capture to real-time network streaming.',
        date: '08 Jan, 2023',
        tags: ['V4L2', 'FFmpeg', 'remote sensing', 'data sync'],
    },
    {
        image: IotJpg,
        title: 'IoT & Edge Devices',
        description: 'Connected systems built for control, analytics, and remote updates.',
        date: '25 Dec, 2022',
        tags: ['MQTT/HTTP', 'UI dashboards', 'OTA', 'secure protocols'],
    }
];


const Global = () => {
    return (
        <section className='bg-[#f5f8fb] py-16 sm:py-28'>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4">
                <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText text-center leading-tight">
                    Featured Industry Solutions
                </h2>
                <p className='text-sm sm:text-[15px] text-[#5d6471] max-w-md mx-auto text-center mb-4'>
                    Discover how we solve complex challenges across multimedia, embedded, and IoT-driven industries.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-4'>
                    {globalCards.map((card, index) => (
                        <div key={index} className={`bg-white border border-gray-200 shadow-[rgba(0,0,0,0.1)_0px_5px_25px] justify-between flex flex-col  ${index % 2 === 1 ? 'flex-col-reverse' : ''}`}>
                            <div className='max-w-[435px] max-h-72'>
                                <Image width={435} height={196} src={card.image} alt={card.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-3 text-primaryText p-7">
                                <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-sm text-[#757b82]">
                                    {/* <div className="flex items-center gap-1">
                                        <FaUser className="text-primary" />
                                        <span>{card.author}</span>
                                    </div> */}
                                    <div className="flex items-center gap-1">
                                        <FaCalendarAlt className="text-primary" />
                                        <span>{card.date}</span>
                                    </div>
                                    {/* <div className="flex items-center gap-1">
                                        <FaCommentDots className="text-primary" />
                                        <span>{card.comments}</span>
                                    </div> */}
                                </div>
                                <h3 className="text-lg sm:text-[21px] leading-normal cursor-pointer hover:text-primary transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className='text-[#5d6471] text-sm sm:text-[15px]'>{card.description}</p>
                                <div className="flex gap-2 pt-2">
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
