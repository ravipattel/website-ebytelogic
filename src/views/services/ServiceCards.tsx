'use client';
import { useRouter } from 'next/navigation';

import React from 'react';

import Button from '@/src/components/Button';

const serviceData = [
  {
    category: "Embedded Software Development",
    description: "Custom embedded solutions using C/C++, Qt, and Python for efficient and scalable product performance.",
    subServices: [
      "Firmware & Device Driver Development",
      "Middleware & Protocol Stack Integration",
      "Performance Optimization & Debugging"
    ],
    slug: "embedded-software"
  },
  {
    category: "Linux BSP & Android Customization",
    description: "Board Support Package (BSP) services for faster product bring-up and OS-level stability.",
    subServices: [
      "Kernel Porting & Device Tree Setup",
      "Yocto, Buildroot, AOSP Customization",
      "Board Bring-Up for ARM/x86 platforms"
    ],
    slug: "linux-bsp"
  },
  {
    category: "Multimedia Framework Development",
    description: "Robust video/audio pipeline integration for broadcast, streaming, and camera applications.",
    subServices: [
      "GStreamer, FFMPEG, Live555 Customization",
      "HDMI/SDI/NDI/SRT Pipeline Integration",
      "AV Sync & Real-Time Playback Tuning"
    ],
    slug: "multimedia-framework"
  },
  {
    category: "Mobile Application Development",
    description: "Cross-platform Android & iOS apps that control, stream, or monitor embedded systems.",
    subServices: [
      "Native + Flutter App Development",
      "Media Player & Device Controller Apps",
      "BLE/Wi-Fi Connectivity & OTA Update Support"
    ],
    slug: "mobile-apps"
  },
  {
    category: "QA & Validation Services",
    description: "Complete embedded, mobile, and web testing coverage using manual and automated tools.",
    subServices: [
      "Functional, Regression & System Testing",
      "Device QA & HIL Testing",
      "Test Automation Frameworks (Robot, Appium, Pytest)"
    ],
    slug: "qa-validation"
  },
  {
    category: "Middleware SDK & Framework Customization",
    description: "Reliable SDK and middleware development for embedded systems — from protocol stacks to modular APIs.",
    subServices: [
      "Cross-Platform SDK Architecture",
      "Protocol & Multimedia Middleware",
      "Application Framework Porting & API Enablement"
    ],
    slug: "middleware-sdk"
  }

];

const ServiceCards = () => {
  const router = useRouter();

  return (
    <section id='services' className="bg-[#f5f7fa] py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {serviceData.map((item, index) => (
          <div
            key={index}
            className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-[#3078fb] via-white to-[#7fb8ff] hover:via-[#eaf3ff] transition-transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="bg-white rounded-[inherit] p-3.5 md:p-6 h-full relative z-10 overflow-hidden flex flex-col justify-between">
              <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-[#3078fb] rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-primaryText mb-2">{item.category}</h3>
                <p className="text-[#5d6471] text-sm mb-4">{item.description}</p>

                <ul className="list-disc pl-5 text-sm sm:text-[15px] text-[#5d6471] space-y-1 mb-6">
                  {item.subServices.map((sub, i) => (
                    <li key={i}>{sub}</li>
                  ))}
                </ul>
              </div>
              <Button
                onClick={() => router.push(`/services/${index}`)}
                className="text-sm font-medium text-white bg-[#3078fb] px-5 py-2 rounded-full w-fit hover:bg-[#2462d6] transition"
              >
                Read More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
