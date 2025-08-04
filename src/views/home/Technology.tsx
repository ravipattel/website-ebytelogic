import React from 'react'
import { FaPlay } from 'react-icons/fa';

const LeftList = [
    "±10ms AV Sync | Broadcast-Grade Real-Time Streaming",
    "GStreamer, FFMPEG, Live555 | Framework Customization",
    "BSP & Driver Porting | NXP, Rockchip, TI & More",
    "Board Bring-Up, QA Automation & Long-Term Maintenance"
];

const RightList = [
    "Secure Boot, Yocto/Buildroot, OTA | Linux BSP Services",
    "Full-Stack Embedded App Development (C/C++, Qt, Python, Android/iOS)",
    "Global Agile Delivery | Trusted by Clients in USA, EU & APAC",
];


const Technology = () => {
    return (
        <section className='bg-[url("/images/ebytelogic.png")] bg-cover xl:pb-14'>
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
                       {` At eByteLogic, we help MediaTech and semiconductor innovators bring next-gen
                        connected devices to life. Whether it's real-time streaming pipelines or BSP-level board
                        bring-up, our solutions are engineered for clarity, performance, and scale.`}
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
