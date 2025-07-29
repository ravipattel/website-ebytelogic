"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Button from "@/src/components/Button";

const Preview = () => {
  const router = useRouter();
  const typedEl = useRef(null);
  const [showNavbar, setShowNavbar] = useState(false);
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

  useEffect(() => {
    if (isClient) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setShowNavbar(scrollY > 100);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isClient]);
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="bg-black/80 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="text-white font-bold text-xl">eByteLogic</div>
            <div className="hidden md:flex space-x-6">
              <a href="/" className="text-white/80 hover:text-white transition-colors">Home</a>
              <a href="/services" className="text-white/80 hover:text-white transition-colors">Services</a>
              <a href="/about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="/contact-us" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
            <Button 
              onClick={() => router.push('/contact-us')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm border-0"
            >
              Hire Us
            </Button>
          </div>
        </div>
      </nav>

      {/* Full background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/multimedia-workflow.png")',
          filter: 'brightness(0.25)'
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Main Content - Split Layout */}
      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Title */}
            <div className="space-y-8">
              {/* Top badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-pulse">
                <p className="text-sm md:text-base text-white font-medium">
                  Embedded Software. Multimedia Frameworks. IoT & Mobile Integration.
                </p>
              </div>
              
              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight">
                We Build the
                <span className="text-blue-400 block mt-2" ref={typedEl}>Software</span>
                <span className="block mt-2">Behind Smart,</span>
                <span className="block mt-2">Connected</span>
                <span className="text-blue-400 block mt-2">Products</span>.
              </h1>
              
              {/* Call-to-action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
            </div>

            {/* Right Side - Description */}
            <div className="space-y-8 lg:pl-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                  Scalable Solutions for Modern Products
                </h2>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
                  From Linux BSPs to real-time streaming apps, we help product teams ship scalable, 
                  high-performance embedded systems.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Real-time multimedia processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                    <span className="text-gray-300">Custom Linux BSP development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-400"></div>
                    <span className="text-gray-300">IoT platform integration</span>
                  </div>
                </div>
              </div>

              {/* Bottom navigation hint */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors cursor-pointer">
                  <span className="text-sm">Explore Our Solutions</span>
                  <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-500" />
      
      {/* Add some content below for scrolling */}
      <div className="relative z-10 bg-black/80 min-h-screen flex items-center justify-center">
        <div className="text-center text-white space-y-8">
          <h2 className="text-4xl font-bold">Our Technology Stack</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to deliver robust embedded solutions 
            that power the next generation of smart devices.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Preview