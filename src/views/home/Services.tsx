'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";
import { GoArrowRight } from "react-icons/go";

import MediaSolutionsJpg from '@/src/assets/images/home/whatwedo/multimediaStreaming.png'
import EmbeddedJpg from '@/src/assets/images/home/whatwedo/embeddedQA.png'
import EngineeringJpg from '@/src/assets/images/home/whatwedo/engineer.jpg'
import IotJpg from '@/src/assets/images/home/whatwedo/iot.png'
import LinuxBspPng from '@/src/assets/images/home/whatwedo/linuxBsp.png'
import EmbeddedAppPng from '@/src/assets/images/home/whatwedo/embeddedApp.png'
import ApplicationIconPng from '@/src/assets/images/home/whatwedo/appIcon.png'
import MediaIconPng from '@/src/assets/images/home/whatwedo/mediaIcon.png'
import EmbeddedIconPng from '@/src/assets/images/home/whatwedo/embeddeIcon.png'
import EngineerIconPng from '@/src/assets/images/home/whatwedo/engineerIcon.png'
import IotIconPng from '@/src/assets/images/home/whatwedo/iotIcon.png'
import FrameworkIconPng from '@/src/assets/images/home/whatwedo/frameworkIcon.png'

const services = [
  {
    path: "/embedded-application-development",
    icon: ApplicationIconPng,
    image: EmbeddedAppPng,
    title: "Embedded Application Development ",
    description: "Embedded applications in C, C++, Qt, and Python designed for performance, stability, and tight hardware integration.",
    showcase: "UI logic, device control, IPC, multithreading, real-time data handling, and full lifecycle embedded software."
  },
  {
    path: "/embedded-bsp-development",
    icon: FrameworkIconPng,
    image: LinuxBspPng,
    title: "Embedded BSP Development ",
    description:
      "Board-level software bring-up for custom hardware, SoMs, and production devices. ",
    showcase: "Bootloader customization, Linux kernel & drivers, Yocto/Buildroot, secure boot, splash screens, and platform migration."
  },
  {
    path: "/multimedia-framework",
    icon: MediaIconPng,
    image: MediaSolutionsJpg,
    title: "Multimedia & Streaming Frameworks",
    description:
      "Custom multimedia pipelines engineered for low latency, sync accuracy, and reliability.",
    showcase: "GStreamer & FFmpeg customization, SDI/HDMI integration, NDI/SRT streaming, closed captioning, and codec optimization."
  },
  {
    path: "/embedded-software-testing",
    icon: EmbeddedIconPng,
    image: EmbeddedJpg,
    title: "Embedded QA & Test Automation",
    description: "Embedded-focused QA frameworks built to validate performance, stability, and reliability at scale.",
    showcase: "Test strategy, automation frameworks, BSP validation, multimedia test pipelines, CI integration, and stress testing."
  },
];

const Services = () => {
  const router = useRouter();
  return (
    <section id="services" className="py-16 sm:pb-28 sm:pt-0 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center space-y-4">
        <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight">
          What We Do
        </h2>
        <p className='text-sm sm:text-[15px] text-[#5d6471] max-w-3xl mx-auto mb-4'>
          {`Smart engineering for complex systems — from low-level bring-up to high-performance media and embedded applications.`}
        </p>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 justify-center gap-5 pt-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between group overflow-hidden max-w-[360px] bg-white border-[0.5px] border-[#3078fb66] hover:border-[#0c1e35] rounded-lg p-5 sm:p-7 text-left transition shadow-sm ${index % 2 === 0 ? 'md:ms-auto' : ''}`}
            >
              <div className="relative w-full h-32 rounded-md overflow-hidden mb-4 z-50">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
              </div>

              <div className="relative z-10 space-y-3">
                {/* <h4 className="text-primary text-3xl group-hover:text-white transition">{service.icon}</h4> */}
                <Image src={service.icon} alt={service.title} className="size-12" />
                <h3 className="text-lg sm:text-xl font-semibold text-primaryText group-hover:text-white transition">
                  {service.title}
                </h3>
                <p className="text-[#5d6471] text-sm sm:text-[15px] group-hover:text-white transition">
                  {service.description}
                </p>
                <p className="text-[#5d6471] italic text-xs group-hover:text-white transition">
                  {service.showcase}
                </p>
              </div>
              <button
                onClick={() => router.push(`/services${service?.path}`)}
                className="cursor-pointer mt-4 w-10 h-10 flex items-center justify-center rounded bg-[#f6f9fc] hover:bg-primary text-primary hover:text-white transition z-10 relative"
              >
                <GoArrowRight />
              </button>

              <div className="absolute -top-1 inset-0 bg-[#0c1e35] z-0 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;