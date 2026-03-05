import React from 'react';
import { 
  RiTimerFlashLine, 
  RiShieldFlashLine, 
  RiCodeSSlashLine, 
  RiVideoLine
} from "react-icons/ri";

import TechPng from '@/src/assets/images/exhibition/tech.png'
import Image from 'next/image';

const ExhibitionDemoVsProduction = () => {
  const painPoints = [
    { 
      icon: <RiTimerFlashLine />, 
      title: "Slow Starts", 
      desc: "Boot times that are fine for a demo but too slow for a user." 
    },
    { 
      icon: <RiShieldFlashLine />, 
      title: "Update Risks", 
      desc: `Over-the-air (OTA) updates that might "brick" a device.`
    },
    { 
      icon: <RiCodeSSlashLine />, 
      title: "Software Mess", 
      desc: `A "quick-fix" Yocto or Buildroot setup that is hard to maintain.` 
    },
    { 
      icon: <RiVideoLine />, 
      title: "Glitchy Media", 
      desc: `Video lag or audio sync issues under heavy use.` 
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-24 items-stretch">
          <div className="order-2 xl:order-1 xl:col-span-5 relative flex flex-col">
            <div className="relative w-full h-full max-w-[480px] mx-auto lg:ml-auto flex flex-col">
              
              <div className="absolute -inset-6 border-2 border-dashed border-[#3078FB]/20 rounded-2xl pointer-events-none hidden sm:block">
                 <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-[10px] font-mono text-[#3078FB]">Y-AXIS</span>
                 <span className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 -translate-x-1/2 bg-white px-2 text-[10px] font-mono text-[#3078FB]">STABILITY</span>
              </div>
              <div className="relative z-10 w-full flex-grow min-h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-2xl bg-[#f8f9fa] group">
                <Image 
                  src={TechPng} 
                  alt="Production Stability"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1e26]/80 via-transparent to-transparent"></div>
              </div>

              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#3078FB] rounded-2xl -z-10 opacity-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#3078FB] rounded-full -z-10 opacity-5 blur-2xl"></div>
            </div>
          </div>

          <div className="order-1 xl:order-2 xl:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-[34px] font-medium text-[#1a1e26] leading-tight">
                Demos Look Great But <span className="text-[#3078FB]">Production Demands Stability.</span>
              </h2>
              
              <p className="text-sm sm:text-[15px] text-[#5d6471] leading-relaxed max-w-2xl">
                {`Trade show builds are designed to impress: they work perfectly in a controlled booth.`} 
                But <span className="font-semibold text-[#1a1e26]">{`"Post-Event Reality"`}</span> usually brings hidden headaches. 
                The gap between a working demo and a reliable product is where delays happen. 
                That is where we step in.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {painPoints.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-xl border border-gray-100 bg-white hover:border-[#3078FB]/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group flex flex-col justify-center"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="text-2xl text-[#3078FB] bg-[#3078FB]/5 p-2.5 rounded-lg group-hover:bg-[#3078FB] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[15px] font-semibold text-[#1a1e26]">{item.title}</h4>
                      <p className="text-[13px] leading-relaxed text-[#5d6471]">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExhibitionDemoVsProduction;