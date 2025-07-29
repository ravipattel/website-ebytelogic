import React from 'react'
import { FaPlay } from 'react-icons/fa';

const LeftList = [
    "±10ms AV Sync & Real-Time Streaming Expertise",
    "BSP Development for NXP, Rockchip, TI, and More",
    "GStreamer, FFMPEG, Live555 Middleware Integration",
];

const RightList = [
    "End-to-End Embedded Application Development (C/C++, Qt, Python, Android/iOS)",
    "Agile Delivery with Global Clients (USA, EU, APAC)",
    "Board Bring-Up, QA Automation & Long-Term Maintenance",
];


const Technology = () => {
    return (
        <section className='bg-[url("/images/technology.jpg")] bg-cover bg-top xl:pb-14'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className='flex justify-center items-center py-20 lg:py-0'>
                    <div className='h-[70px] w-[70px] rounded-full bg-primary border border-primary hover:bg-white transition-all duration-200 group grid place-items-center cursor-pointer'>
                        <FaPlay className='text-white group-hover:text-primary text-2xl' />
                    </div>
                </div>
                <div className='bg-secondary py-6 lg:py-24 px-4 sm:px-6 lg:px-16 space-y-6'>
                    <h2 className="text-2xl sm:text-[34px] font-medium text-white leading-tight">
                        Technology-Led Solutions.
                        <span className="text-primary ps-3">Trusted</span> by Product Leaders.
                    </h2>
                    <p className="text-sm sm:text-[15px] text-[#dddddd]">
                        At eByteLogic, we engineer high-performance embedded and multimedia software
                        for companies building the next generation of connected devices. From BSPs and
                        AV sync pipelines to secure SDKs and board bring-up we bring clarity, speed, and
                        cross-platform expertise to every project.
                    </p>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <ul className='space-y-4 list-[circle] ps-5'>
                            {LeftList.map((item, index) => (
                                <li key={index} className="text-white text-sm sm:text-[15px]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <ul className='space-y-4 list-[circle] ps-5'>
                            {RightList.map((item, index) => (
                                <li key={index} className="text-white text-sm sm:text-[15px]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technology
