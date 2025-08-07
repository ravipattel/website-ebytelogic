"use client"
import { useRouter } from "next/navigation";

import React, { useEffect, useRef, useState } from "react";

import Typed from "typed.js";

import Button from "@/src/components/Button";
import WorkflowSlider from "@/src/components/WorkflowSlider";

const HeroSection = () => {
  const router = useRouter();
  const typedEl = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && typedEl.current) {
      const typed = new Typed(typedEl.current, {
        strings: ["Software", "Media Systems", "IoT Platforms", "Smart Apps"],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });

      return () => typed.destroy();
    }
  }, [isClient]);
  
  return (
    <div className='bg-gradient-to-r from-gray-50 to-blue-50 py-28 md:h-screen lg:-mt-20'>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 gap-5 h-full flex items-center">
        <div className="w-full lg:w-3/5 space-y-6">
          <p className="text-base md:text-lg text-primary font-medium">
            Linux BSPs. Low-Latency Streaming. Protocol-Driven Embedded Innovation.
          </p>
          <h1 className="text-2xl md:text-5xl xl:text-[45px] font-semibold text-primaryText leading-tight">
            We Power the
            <span className="text-primary ps-3" ref={typedEl}>Software</span> Behind Smart Devices & High-Performance <span className="text-primary ps-3">Media Systems</span>
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
        
        {/* Right side workflow slider */}
        <div className="hidden lg:flex lg:w-2/5 items-center justify-center relative">
          <WorkflowSlider />
        </div>
      </div>
    </div>
  )
}

export default HeroSection