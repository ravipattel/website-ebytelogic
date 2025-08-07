'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";
import { GoArrowRight } from "react-icons/go";

import MediaSolutionsJpg from '@/src/assets/images/home/whatwedo/mediaSolutions.jpg'
import EmbeddedJpg from '@/src/assets/images/home/whatwedo/embeddedSystems.jpg'
import EngineeringJpg from '@/src/assets/images/home/whatwedo/engineer.jpg'
import IotJpg from '@/src/assets/images/home/whatwedo/iot.jpg'
import FrameworkJpg from '@/src/assets/images/home/whatwedo/frameworks.jpg'
import ApplicationToolsJpg from '@/src/assets/images/home/whatwedo/applicationsTool.jpg'
import ApplicationIconPng from '@/src/assets/images/home/whatwedo/appIcon.png'
import MediaIconPng from '@/src/assets/images/home/whatwedo/mediaIcon.png'
import EmbeddedIconPng from '@/src/assets/images/home/whatwedo/embeddeIcon.png'
import EngineerIconPng from '@/src/assets/images/home/whatwedo/engineerIcon.png'
import IotIconPng from '@/src/assets/images/home/whatwedo/iotIcon.png'
import FrameworkIconPng from '@/src/assets/images/home/whatwedo/frameworkIcon.png'

const services = [
  {
    icon: MediaIconPng,
    image: MediaSolutionsJpg,
    title: "Multimedia & Streaming Frameworks",
    description:
      "Custom GStreamer, FFMPEG, and protocol-level streaming pipelines for real-time, low-latency video systems.",
    showcase: "From AV sync and SDI integration to NDI/SRT delivery and closed captioning, we engineer end-to-end streaming workflows."
  },
  {
    icon: FrameworkIconPng,
    image: FrameworkJpg,
    title: "Linux BSP & Board Bring-Up",
    description:
      "Quick and stable board-level software bring-up for custom hardware, SoMs, and chipsets.",
    showcase: "Bootloader config, driver porting, Yocto/Buildroot customization, secure boot, splash screen, and more."
  },
  {
    icon: ApplicationIconPng,
    image: ApplicationToolsJpg,
    title: "Embedded App Development",
    description: "Embedded apps in C/C++/Qt/Python tailored for performance, stability, and hardware interaction.",
    showcase: "UI, device logic, multi-threading, storage management, and full lifecycle embedded software."
  },
  {
    icon: EngineerIconPng,
    image: EngineeringJpg,
    title: "AV Protocol & Codec Engineering",
    description: "Deep expertise in audio/video protocol stacks and custom codec pipeline integration.",
    showcase: "RTP, RTMP, RIST, HLS, and adaptive bitrate logic, with encoder tuning and protocol troubleshooting."
  },
  {
    icon: EmbeddedIconPng,
    image: EmbeddedJpg,
    title: "Embedded QA & Test Automation",
    description: "Validation pipelines that simulate real-world embedded conditions and system behaviors.",
    showcase: "HIL testing, black-box/white-box testing, interface simulators, CI/CD-based embedded QA."
  },
  {
    icon: IotIconPng,
    image: IotJpg,
    title: "IoT & Cloud Integration",
    description:
      "Secure, real-time connectivity between your embedded system and cloud backends.",
    showcase: "MQTT, OTA, REST APIs, AWS IoT/Azure integration, and remote configuration at scale."
  },
];

const Services = () => {
  const router = useRouter();
  return (
    <section id="services" className="py-16 sm:pb-28 bg-[#f5f8fb]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center space-y-4">
        <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight">
          What We Do
        </h2>
        <p className='text-sm sm:text-[15px] text-[#5d6471] max-w-3xl mx-auto mb-4'>
          {`Smart engineering for complex systems. From low-level bring-up to high-performance media and cloud-connected applications — we deliver production-ready software built to scale.`}
        </p>
        <div className="flex flex-wrap justify-center gap-5 pt-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between group overflow-hidden max-w-[360px] bg-white border-[0.5px] border-[#3078fb66] hover:border-[#0c1e35] rounded-lg p-5 sm:p-7 text-left transition shadow-sm"
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
                onClick={() => router.push('/services')}
                className="mt-4 w-10 h-10 flex items-center justify-center rounded bg-[#f6f9fc] hover:bg-primary text-primary hover:text-white transition z-10 relative"
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