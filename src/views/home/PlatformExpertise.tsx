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
import RockchipJpg from "@/src/assets/images/about/rockchip.jpg";
import QtPng from "@/src/assets/images/about/qt.png";
import GstreamerPng from "@/src/assets/images/about/gstreamer.png";
import AndroidPng from "@/src/assets/images/about/android.png";
import StmiPng from "@/src/assets/images/about/stmi.png";
import TexasPng from "@/src/assets/images/about/texas.png";
import YoctoPng from "@/src/assets/images/about/yocto.png";
import EspressifSvg from "@/src/assets/images/about/espressif.svg";
import AmdSvg from "@/src/assets/images/about/amd.svg";
import IntelSvg from "@/src/assets/images/about/intel.svg";
import FfmpegPng from "@/src/assets/images/about/ffmpeg.png";
import ToradexSvg from "@/src/assets/images/about/toradex.svg";

const PlatformExpertise = () => {
    return (
        <section className="px-4 sm:px-6 pt-0 pb-16 sm:py-16 sm:pb-28">
            <div className="text-center space-y-3">
                <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight text-center">
                    Our Platform Expertise
                </h2>
                <p className='text-sm sm:text-[15px] text-[#5d6471] max-w-4xl mx-auto mb-4'>
                    We specialize in building, optimizing, and validating software across <span className='font-semibold'>embedded platforms and device ecosystems</span>. From board bring-up and BSP customization to multimedia pipelines and protocol-driven systems, our teams work hands-on across diverse SoC environments used in <span className='font-semibold'>industrial, automotive, media, and connected devices.</span>
                </p>
                <div className='py-3 mt-8'>
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative">
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
                                { src: RockchipJpg, alt: 'RockchipJpg' },
                                { src: QtPng, alt: 'QtPng' },
                                { src: GstreamerPng, alt: 'GstreamerPng' },
                                { src: AndroidPng, alt: 'AndroidPng' },
                                { src: StmiPng, alt: 'StmiPng' },
                                { src: TexasPng, alt: 'TexasPng' },
                                { src: YoctoPng, alt: 'YoctoPng' },
                                { src: EspressifSvg, alt: 'EspressifSvg' },
                                { src: AmdSvg, alt: 'AmdSvg' },
                                { src: IntelSvg, alt: 'IntelSvg' },
                                { src: FfmpegPng, alt: 'FfmpegPng' },
                                { src: ToradexSvg, alt: 'ToradexSvg' },
                            ].map((logo, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex justify-center items-center h-16">
                                        <Image src={logo.src} alt={logo.alt} className="h-10 object-contain"  width={100} height={50}/>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlatformExpertise
