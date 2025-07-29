"use client"
import { useRouter } from "next/navigation";

import React, { useEffect, useRef } from "react";

import Typed from "typed.js";

import Button from "@/src/components/Button";

const HeroSection = () => {
  const router = useRouter();
  const typedEl = useRef(null);

  useEffect(() => {
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
  }, []);
  
  return (
    <div className='bg-[url("/images/hero.jpg")] bg-cover bg-center py-28 md:h-screen lg:-mt-20'>
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
        
        {/* Right side multimedia workflow image */}
        <div className="hidden lg:flex lg:w-2/5 items-center justify-center">
          <div className="relative w-full max-w-[600px] h-auto">
            <img 
              src="/images/multimedia-workflow.png"
              alt="Multimedia Workflow - Acquisition, Processing, and Delivery"
              className="w-full h-auto object-contain rounded-lg shadow-lg"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection