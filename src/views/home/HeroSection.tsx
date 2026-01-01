"use client"
import { useRouter } from "next/navigation";

import React, { useEffect, useRef, useState } from "react";

import Typed from "typed.js";

import Button from "@/src/components/Button";
import Image from "next/image";
import Slider2 from '@/src/assets/images/home/homeSlider/slider2.png';

const dynamicData = [
  `Your Trusted Embedded Software Development Company for <span class="text-primary">Next-Gen Devices</span>`,
];

const HeroSection = () => {
  const router = useRouter();
  const typedEl = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const typedInstance = useRef<Typed>(null);

  const handleMouseEnter = () => {
    if (typedInstance.current && typedInstance.current.stop) {
      typedInstance.current.stop();
    }
  };

  const handleMouseLeave = () => {
    if (typedInstance.current && typedInstance.current.start) {
      typedInstance.current.start();
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !typedEl.current) return;

    if (typedInstance.current) {
      typedInstance.current.destroy();
    }

    typedInstance.current = new Typed(typedEl.current, {
      strings: [dynamicData[0]],
      typeSpeed: 40,
      backSpeed: 25,
      backDelay: 2000,
      loop: false,
      showCursor: true,
      cursorChar: "|",
      contentType: 'html',
    });

    return () => {
      typedInstance.current?.destroy();
    };
  }, [isClient]);

  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-16 min-[1035px]:h-[calc(100vh-128px)] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 gap-7 h-full flex flex-col min-[1035px]:flex-row items-center relative z-20">
        <div className="min-[1035px]:w-3/5 space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[45px] font-semibold leading-tight text-primaryText">
            <span
              ref={typedEl}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </h1>
          <p className="text-sm md:text-base text-[#5d6471]">
            {` From Linux/Android BSP and board bring-up to real-time multimedia streaming and embedded applications, our embedded software services​ help hardware teams ship stable, scalable, production-ready systems across complex platforms and industries. `}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
           <a href="#services">
            <Button variant="default" className="text-sm sm:text-base md:h-12">Explore Services</Button>
            </a>
            <Button
            onClick={() => router.push('/case-study')}
              variant="default"
              className="text-sm sm:text-base md:h-12 !bg-white !text-primary hover:!bg-primary hover:!text-white"
            >
              View Case Studies
            </Button>
          </div>
        </div>

        <div className="w-full min-[1035px]:w-2/5 items-center justify-center relative">
          <Image
            src={Slider2}
            alt="slider-image"
            className="w-full object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection