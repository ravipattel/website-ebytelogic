"use client"
import { useRouter } from "next/navigation";

import React, { useEffect, useRef, useState } from "react";

import Typed from "typed.js";

import Button from "@/src/components/Button";
import WorkflowSlider from "@/src/components/WorkflowSlider";


const dynamicData = [
  `We Power the <span class="text-primary">Software</span> Behind Smart Devices and High-Performance <span class="text-primary">Media Systems</span>`,
  `<span class="text-primary">Optimized BSPs</span>. Accelerated Media Pipelines. <span class="text-primary">Delivered with Precision.</span>`,
  `From <span class="text-primary">Hardware Validation</span> to HDMI and NDI Streaming — We Handle the <span class="text-primary">Complex</span>.`,
  `Trusted by Product Teams to Enable <span class="text-primary">Fast Boot</span>, Clean AV Sync, and Rock-Solid <span class="text-primary">Firmware</span>.`
];

const HeroSection = () => {
  const router = useRouter();
  const typedEl = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const typedInstance = useRef<Typed>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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

    // Destroy previous instance
    if (typedInstance.current) {
      typedInstance.current.destroy();
    }

    // Create new instance
    typedInstance.current = new Typed(typedEl.current, {
      strings: [dynamicData[currentSlide]],
      typeSpeed: 40, // slower = smoother typing
      backSpeed: 25,
      backDelay: 2000,
      loop: false,
      showCursor: true,
      cursorChar: "|",
      contentType: 'html',
      onComplete: () => {
        // Wait before going to next slide
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % dynamicData.length);
        }, 2500); // delay before switching
      }
    });

    return () => {
      typedInstance.current?.destroy();
    };
  }, [currentSlide, isClient]);


  return (
    <div className='bg-gradient-to-r from-gray-50 to-blue-50 py-28 md:h-screen lg:-mt-20'>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 gap-5 h-full flex items-center">
        <div className="w-full lg:w-3/5 space-y-6">
          <p className="text-base md:text-lg text-primary font-medium">
            Linux BSPs. Low-Latency Streaming. Protocol-Driven Embedded Innovation.
          </p>
          <h1 className="text-2xl md:text-5xl xl:text-[45px] font-semibold leading-tight text-primaryText">
            <span
              ref={typedEl}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </h1>


          <p className="text-sm md:text-lg text-[#5d6471]">
            From BSPs and board bring-up to real-time video streaming and multimedia stacks, we help hardware teams ship scalable, production-grade systems.
          </p>
          <div className="flex space-x-4 pt-4">
            <a href="#services"><Button variant="default" className="w-full h-12">Explore Services</Button></a>
            <Button onClick={() => router.push('/case-study')}
              variant="default"
              className="h-12 !bg-white !text-primary hover:!bg-primary hover:!text-white"
            >
              View Case Studies
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex lg:w-2/5 items-center justify-center relative">
          <WorkflowSlider currentSlide={currentSlide} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection