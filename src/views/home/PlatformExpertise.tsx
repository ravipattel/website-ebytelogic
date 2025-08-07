'use client';
import Image from 'next/image';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import MediaTekPng from "@/src/assets/images/about/mediaTek.png";
import NvidiaPng from "@/src/assets/images/about/nvidia.png";
import NxpJpeg from "@/src/assets/images/about/nxp.jpeg";
import QualcommPng from "@/src/assets/images/about/qualcomm.png";
import RockchipPng from "@/src/assets/images/about/rockchip.jpg";
import QtPng from "@/src/assets/images/about/qt.png";
import GstreamerPng from "@/src/assets/images/about/gstreamer.png";
import AndroidPng from "@/src/assets/images/about/android.png";
import StmiPng from "@/src/assets/images/about/stmi.png";
import TexasPng from "@/src/assets/images/about/texas.png";
import YoctoPng from "@/src/assets/images/about/yocto.png";
import EspressifPng from "@/src/assets/images/about/espressif.svg";

const PlatformExpertise = () => {
    return (
        <section className="py-16 sm:pb-28">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center space-y-3">
                <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight text-center">
                    Our Platform Expertise
                </h2>
                <p className='text-sm sm:text-[15px] text-[#5d6471] max-w-3xl mx-auto mb-4'>
                    We specialize in building, optimizing, and maintaining solutions across industry- leading embedded platforms and chipsets.
                    From board bring-up to BSP, middleware tuning, and multimedia stack integration, our team works seamlessly across a wide range of SoC environments.
                </p>
                <div className="relative mt-10">
                    <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white border rounded-full shadow hover:bg-gray-100 transition cursor-pointer">
                        <FaArrowLeft className="text-gray-600" />
                    </div>
                    <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white border rounded-full shadow hover:bg-gray-100 transition cursor-pointer">
                        <FaArrowRight className="text-gray-600" />
                    </div>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={2}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 5 },
                        }}
                        className='max-w-6xl'
                    >
                        {[
                            { src: MediaTekPng, alt: 'MediaTekPng' },
                            { src: NvidiaPng, alt: 'NvidiaPng' },
                            { src: NxpJpeg, alt: 'NxpJpeg' },
                            { src: QualcommPng, alt: 'QualcommPng' },
                            { src: RockchipPng, alt: 'RockchipPng' },
                            { src: QtPng, alt: 'QtPng' },
                            { src: GstreamerPng, alt: 'GstreamerPng' },
                            { src: AndroidPng, alt: 'AndroidPng' },
                            { src: StmiPng, alt: 'StmiPng' },
                            { src: TexasPng, alt: 'TexasPng' },
                            { src: YoctoPng, alt: 'YoctoPng' },
                            { src: EspressifPng, alt: 'EspressifPng' },
                        ].map((logo, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex justify-center items-center h-16">
                                    <Image src={logo.src} alt={logo.alt} className="h-10 object-contain" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default PlatformExpertise
