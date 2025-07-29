'use client';

import Image from 'next/image'
import { useRouter } from 'next/navigation';

import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import Button from '@/src/components/Button';

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
// import BorderPng from "@/src/assets/images/about/border.png";
// import ExpertiseJpeg from "@/src/assets/images/about/expertise.jpeg";
import AboutFramePng from "@/src/assets/images/about/aboutFrame.png";

const Testimonials = () => {
    const router = useRouter();
    return (
        <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-28'>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-0 items-center">
                    <div className='lg:col-span-2 flex justify-center'>
                        <Image src={AboutFramePng} alt='AboutFramePng' height={450} />
                    </div>
                    <div className="lg:col-span-3 space-y-4 text-left">
                        <h2 className="text-2xl sm:text-[34px] font-medium text-primary leading-tight">
                            Our Platform Expertise
                        </h2>
                        <p className="text-sm sm:text-[15px] text-[#5d6471] mb-4">
                            Powering Performance Across Embedded Ecosystems
                        </p>
                        <div>
                            <p className="text-sm sm:text-[15px] font-semibold ">
                                We specialize in building, optimizing, and maintaining solutions across industry-
                                leading embedded platforms and chipsets.
                            </p>
                            <p className="text-sm sm:text-[15px] font-semibold ">
                                From board bring-up to BSP, middleware tuning, and multimedia stack integration, our
                                team works seamlessly across a wide range of SoC environments.
                            </p>
                        </div>
                        <p className='text-sm sm:text-[15px] text-[#5d6471]'>At eByteLogic, we deliver production-grade solutions on platforms like NXP, Rockchip,
                            Qualcomm, MediaTek, and more. Our experience spans Linux BSP development, Android
                            customization, framework optimization (GStreamer, FFMPEG, Live555), and protocol
                            integration (NDI, SRT, RTSP). We help clients accelerate time to market while ensuring
                            long-term platform stability and scalability.</p>
                        <Button onClick={() => router.push('/contact-us')} className='my-3 flex items-center gap-2'>Explore Our Platform Support <FaArrowRight /></Button>
                    </div>
                </div>
                <div className="relative mt-16">
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
        </div>
    )
}

export default Testimonials

