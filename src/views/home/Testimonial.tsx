'use client';
import Image from 'next/image';

import React from 'react';
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import AscemenPng from "@/src/assets/images/home/testimonial/ascemen.png";
import EmbeddedSolutionsPng from "@/src/assets/images/home/testimonial/embeddedSolutions.png";
import ESightPng from "@/src/assets/images/home/testimonial/esight.png";
import FabesisPng from "@/src/assets/images/home/testimonial/fabesis.png";
import ImageMetryPng from "@/src/assets/images/home/testimonial/imageMetry.png";
import NextologiesPng from "@/src/assets/images/home/testimonial/nextologies.png";
import RhombPng from "@/src/assets/images/home/testimonial/rhomb.png";
import SmartDataPng from "@/src/assets/images/home/testimonial/smartData.svg";
import SpgWebp from "@/src/assets/images/home/testimonial/spg.webp";
import WrcPng from "@/src/assets/images/home/testimonial/wrc.png";
import XchangePng from "@/src/assets/images/home/testimonial/xchange.png";

const Testimonial = () => {
    return (
        <section className="py-16 sm:py-28">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center space-y-3">
                <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight text-center">
                    Trusted by Global Innovators
                </h2>
                <p className='text-sm sm:text-[15px] text-[#5d6471] max-w-lg mx-auto mb-4'>
                    We’ve had the privilege of working with forward-thinking companies across media,
                    semiconductors, IoT, aerospace, and more
                </p>
            </div>
            <div className="mt-16 py-5 bg-[#243559]">
                <Marquee
                    gradient={false}
                    speed={50}
                    pauseOnHover={true}
                >
                    {[
                        { src: AscemenPng, alt: 'AscemenPng' },
                        { src: EmbeddedSolutionsPng, alt: 'EmbeddedSolutionsPng' },
                        { src: ESightPng, alt: 'ESightPng' },
                        { src: FabesisPng, alt: 'FabesisPng' },
                        { src: ImageMetryPng, alt: 'ImageMetryPng' },
                        { src: NextologiesPng, alt: 'NextologiesPng' },
                        { src: RhombPng, alt: 'RhombPng' },
                        { src: SmartDataPng, alt: 'SmartDataPng' },
                        { src: SpgWebp, alt: 'SpgWebp' },
                        { src: WrcPng, alt: 'WrcPng' },
                        { src: XchangePng, alt: 'XchangePng' },
                    ].map((logo, index) => (
                        <div key={index} className="flex justify-center items-center px-6">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                className="size-36 object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Testimonial;
