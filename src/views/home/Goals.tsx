'use client';
import Image from 'next/image';

import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { HiMiniMagnifyingGlassPlus } from 'react-icons/hi2';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Button from '@/src/components/Button';

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
    {
        preview: TechnicalPng,
        title: 'Industry support',
        description:
            'Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.',
    },
    {
        preview: EbyteLogicPng,
        title: 'Technical energy',
        description:
            'Our developers strive for excellent delivery by being actively engaged in what they do.',
    },
    {
        preview: EcosystemPng,
        title: 'Solar innovation',
        description:
            'Empowering future with clean energy and technical expertise.',
    },
    {
        preview: TechnicalPng,
        title: 'Industry support',
        description:
            'Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.',
    },
    {
        preview: EbyteLogicPng,
        title: 'Technical energy',
        description:
            'Our developers strive for excellent delivery by being actively engaged in what they do.',
    },
    {
        preview: EcosystemPng,
        title: 'Solar innovation',
        description:
            'Empowering future with clean energy and technical expertise.',
    },
];

const Goals = () => {
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
                    <div className="relative group max-w-[1400px] mx-auto pt-3">
                        <Swiper
                            navigation={{
                                nextEl: '.custom-swiper-button-next',
                                prevEl: '.custom-swiper-button-prev',
                            }}
                            modules={[Navigation]}
                            spaceBetween={30}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="mySwiper"
                        >
                            {CardData.map((card, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full sm:mx-auto group/card">
                                        <div className="overflow-hidden w-full relative cursor-pointer">
                                            <Image
                                                src={card.preview.src}
                                                alt={card.title}
                                                width={400}
                                                height={300}
                                                className="w-full transition-transform duration-400 transform group-hover/card:scale-100 scale-[1.1]"
                                            />
                                            <div className="absolute inset-0 bg-[#002c57f2] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <PhotoView src={card.preview.src}>
                                                    <span>
                                                        <HiMiniMagnifyingGlassPlus className="text-white text-4xl" />
                                                    </span>
                                                </PhotoView>
                                            </div>
                                        </div>
                                        <div className="py-4 space-y-2">
                                            <div className="flex items-center justify-between">
                                                <h4 className={`text-[21px] text-nowrap text-[#2a354e] font-medium group-hover/card:text-primary transition-all duration-200 ${index === 0 && "text-nowrap"}`}>
                                                    {card.title}
                                                </h4>
                                                <Button
                                                    variant="default"
                                                    className="h-8 w-12 grid place-items-center !p-0 me-8 opacity-0 group-hover/card:opacity-100 group-hover/card:me-0 transition-all duration-300"
                                                >
                                                    <GoArrowRight className="text-xl" />
                                                </Button>
                                            </div>
                                            <p className="text-sm text-[#5d6471] leading-relaxed">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button
                            className="custom-swiper-button-prev border border-white absolute left-36 top-1/2 group-hover:left-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md rounded-full w-10 h-10 grid place-items-center cursor-pointer hover:border-primary hover:bg-primary"
                        >
                            <span className="text-primary text-2xl"><MdArrowBackIosNew className='text-white text-base' /></span>
                        </button>

                        <button
                            className="custom-swiper-button-next border border-white absolute right-36 top-1/2 group-hover:right-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md rounded-full w-10 h-10 grid place-items-center cursor-pointer hover:border-primary hover:bg-primary"
                        >
                            <span className="text-primary text-2xl"><MdArrowForwardIos className='text-white text-base' /></span>
                        </button>
                    </div>
                </PhotoProvider>
            </div>
        </section>
    );
};

export default Goals;
