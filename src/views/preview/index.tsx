"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Button from "@/src/components/Button";

const Preview = () => {
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Full background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/multimedia-workflow.png")',
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Top badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <p className="text-base md:text-lg text-white font-medium">
              Embedded Software. Multimedia Frameworks. IoT & Mobile Integration.
            </p>
          </div>
          
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-bold text-white leading-tight">
            We Build the
            <span className="text-blue-400 block sm:inline sm:ml-4" ref={typedEl}>Software</span>
            <span className="block mt-2 sm:mt-0">Behind Smart, Connected</span>
            <span className="text-blue-400 block sm:inline sm:ml-4">Products</span>.
          </h1>
          
          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              From Linux BSPs to real-time streaming apps, we help product teams ship scalable, 
              high-performance embedded systems.
            </p>
          </div>
          
          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="default" 
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white border-0 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Our Services
            </Button>
            <Button 
              onClick={() => router.push('/contact-us')}
              variant="default"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-gray-900 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
          
          {/* Bottom navigation hint */}
          <div className="pt-12">
            <div className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors cursor-pointer">
              <span className="text-sm">Explore Our Solutions</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-500" />
    </div>
  )
}

export default Preview