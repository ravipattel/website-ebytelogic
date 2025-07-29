"use client"
import { useRouter } from "next/navigation";

import React, { useEffect, useRef, useState } from "react";

import Typed from "typed.js";

import Button from "@/src/components/Button";

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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="w-full lg:w-3/5 space-y-6">
          <p className="text-base md:text-lg text-primary font-medium">
            Embedded Software. Multimedia Frameworks. IoT & Mobile Integration.
          </p>
          <h1 className="text-2xl md:text-5xl xl:text-[54px] font-semibold text-primaryText leading-tight">
            We Build the
            <span className="text-primary ps-3" ref={typedEl}>Software</span> Behind Smart, Connected  <span className="text-primary ps-3">Products</span>.
          </h1>
          <p className="text-sm md:text-lg text-[#5d6471]">
            From Linux BSPs to real-time streaming apps, we help product teams ship scalable, highperformance embedded systems.
          </p>
          <div className="flex space-x-4 pt-4">
            <a href="#services"><Button variant="default" className="max-w-[158px] w-full h-12">Our Services</Button></a>
            <Button onClick={() => router.push('/contact-us')}
              variant="default"
              className="max-w-[158px] w-full h-12 !bg-white !text-primary hover:!bg-primary hover:!text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
        
        {/* Right side multimedia workflow image with transparent left half */}
        <div className="hidden lg:flex lg:w-2/5 items-center justify-center relative">
          <div className="relative w-full max-w-[600px] h-auto">
            {/* Base image */}
            <img 
              src="/images/multimedia-workflow-transparent.png"
              alt="Multimedia Workflow - Acquisition, Processing, and Delivery"
              className="w-full h-auto object-contain"
              style={{ width: 'auto', height: 'auto' }}
            />
            {/* Left half transparent overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 pointer-events-none"></div>
            {/* Left half fade effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.1) 40%, transparent 50%)'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection