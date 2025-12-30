"use client";

import Image from "next/image";
import { useState } from "react";

import FaqHomePng from '@/src/assets/images/home/faqHome.png'

export default function UniqueFAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What silicon platforms do you support for board bring-up?",
      a: "As a platform-aware embedded software development company, we have extensive experience with major SoC families, including NXP i.MX, Rockchip, TI (Texas Instruments), and NVIDIA Jetson. Whether you need Linux BSP development for a custom carrier board or Android Porting for a new chipset, we handle the low-level complexity to get your hardware production-ready.",
    },
    {
      q: "Can you help achieve ultra-low latency for multimedia streaming?",
      a: "Yes. We specialize in multimedia frameworks and custom pipelines using GStreamer and FFmpeg. We have successfully delivered solutions with 10ms AV sync for broadcast-grade streaming. Our team integrates high-performance protocols like NDI, SRT, and RIST to ensure your video delivery is real-time and reliable across macOS and Linux environments.",
    },
    {
      q: "Do you provide end-to-end IoT integration solutions?",
      a: "Absolutely. We offer comprehensive IoT integration solutions that bridge the gap between your hardware and the cloud. This includes building secure MQTT/HTTP communication stacks, implementing OTA (Over-the-Air) updates, and integrating with AWS IoT or Azure to provide you with real-time analytics and remote device management at scale.",
    },
    {
      q: "Why should I choose eByteLogic over a general software firm?",
      a: "General firms often lack the deep-domain knowledge required for software development in embedded systems. We are open source experts who understand how software interacts with physical circuitry. We bring the specific engineering clarity needed for hardware, like power-efficient BLE firmware for wearables and mission-critical HMI systems for industrial panels, that must remain stable 24/7.",
    },
    {
      q: "Do you offer support for legacy system migration and driver porting?",
      a: "Yes. As part of our embedded software development services, we help companies modernize their legacy hardware. This includes porting drivers to newer kernels, updating U-Boot configurations, and ensuring your existing software stack runs efficiently on upgraded hardware platforms.",
    },
  ];

  return (
    <section className="bg-[#f5f8fb] pb-16 pt-16 md:pt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-6">
        <h2 className="text-3xl font-medium text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="grid xl:grid-cols-3 items-start gap-12">
          <div className="space-y-3 xl:col-span-2 xl:max-w-[800px]">
            {faqs.map((item, index) => {
              const isOpen = open === index;

              return (
                <div key={index} className="relative overflow-hidden">
                  <div
                    className={`absolute inset-0 z-0 origin-left bg-gradient-to-r from-blue-100 to-blue-50 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "scale-x-100" : "scale-x-0"
                      }`}
                  />

                  <button
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="relative w-full text-left px-4 lg:px-6 py-4 flex items-center justify-between cursor-pointer"
                  >
                    <h3
                      className={`text-base sm:text-lg xl:text-[19px] font-medium transition-colors duration-300 max-w-[90%]  ${isOpen ? "text-blue-700" : "text-gray-900"
                        }`}
                    >
                      {index + 1}. {item.q}
                    </h3>

                    <span
                      className={`text-2xl font-light transition-transform duration-300 ${isOpen
                          ? "rotate-45 text-blue-600"
                          : "text-gray-400"
                        }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`relative px-4 lg:px-6 overflow-hidden transition-all duration-500 ease-in-out will-change-[max-height,opacity,transform] ${isOpen
                        ? "max-h-[900px] opacity-100 translate-y-0 pb-4"
                        : "max-h-0 opacity-0 -translate-y-2 pb-0"
                      }`}
                  >
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Image
            src={FaqHomePng}
            alt="faq"
            className="mx-auto xl:mx-0 lg:sticky lg:top-28 size-80 sm:size-auto"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
