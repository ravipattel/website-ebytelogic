'use client';
import Image from 'next/image';

import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { HiMiniMagnifyingGlassPlus } from 'react-icons/hi2';

import 'swiper/css';
import 'swiper/css/navigation';

import EbyteLogicPng from '@/src/assets/images/home/goals/ebytelogic.png';
import TechnicalPng from '@/src/assets/images/home/goals/technical.png';
import EcosystemPng from '@/src/assets/images/home/goals/ecosystem.png';

const CardData = [
    {
        preview: TechnicalPng,
        title: 'Domain-Aligned Engineering',
        description:
            'We understand your industry – from low-latency streaming and signal processing to BSP development for custom hardware. Every project starts with aligned context and ends in optimized delivery.',
    },
    {
        preview: EbyteLogicPng,
        title: 'Real-Time, Reliable, Ready',
        description:
            'From GStreamer pipelines to embedded Linux tuning, we deliver systems with measurabl performance: low jitter, accurate AV sync, and stable long-hour operations – productiongrade from day one.',
    },
    {
        preview: EcosystemPng,
        title: 'Transparent & Agile Collaboration',
        description:
            'We ramp up fast, adapt to your tools, and stay transparent through every sprint. With proactive updates and detailed handovers, we’re your extended engineering arm, not just a vendor.',
    },
];

const Goals = () => {
    const [isImageOpen, setIsImageOpen] = useState(false);

    return (
        <section>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-28 space-y-4">
                <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight text-center">
                    Built for Performance. Tuned for Product Success.
                </h2>
                <p className='text-sm sm:text-[15px] text-[#5d6471] max-w-md mx-auto text-center mb-4'>
                    We bring engineering clarity, media-grade performance, and domain-level
                    precision to every build.
                </p>
                <PhotoProvider>
                    <div className="relative max-w-[1400px] mx-auto pt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CardData.map((card, index) => (
                            <div className="w-full sm:mx-auto group/card" key={index}>
                                <div className="overflow-hidden w-full relative cursor-pointer">
                                    <Image
                                        src={card.preview.src}
                                        alt={card.title}
                                        width={400}
                                        height={300}
                                        className="w-full transition-transform duration-400 transform group-hover/card:scale-100 scale-[1.1]"
                                    />
                                    <div
                                        className="absolute inset-0 bg-[#002c57f2] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none group-hover/card:pointer-events-auto"
                                    >
                                        <PhotoView src={card.preview.src} >
                                            <span>
                                                <HiMiniMagnifyingGlassPlus className="text-white text-4xl" />
                                            </span>
                                        </PhotoView>
                                    </div>
                                </div>
                                <div className="py-4 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <h4 className={`user-select-text text-[21px] text-nowrap text-[#2a354e] font-medium group-hover/card:text-primary transition-all duration-200 ${index === 0 && "text-nowrap"}`} style={{ userSelect: "text" }}>
                                            {card.title}
                                        </h4>
                                    </div>
                                    <p className="user-select-text text-sm text-[#5d6471] leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </PhotoProvider>
            </div>
        </section>
    );
};

export default Goals;
