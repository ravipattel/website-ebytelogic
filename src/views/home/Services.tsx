'use client';
import { useRouter } from "next/navigation";

import React from "react";
import { FaCogs, FaChartLine, FaHeadset, FaCloud } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { MdOutlinePermMedia } from "react-icons/md";
import { SiQase } from "react-icons/si";

const services = [
  {
    icon: <FaCogs />,
    title: "Embedded Software Development",
    description:
      "We deliver high-performance firmware and system software in C/C++ for multimedia, industrial, and consumer devices.",
    showcase: "Reliable code. Faster releases."
  },
  {
    icon: <FaChartLine />,
    title: "BSP & Board Bring-Up Services",
    description:
      "Linux & Android BSP customization with driver integration, device tree, bootloader tuning, and board validation.",
    showcase: "From bare PCB to boot-ready."
  },
  {
    icon: <MdOutlinePermMedia />,
    title: "Streaming Media Solutions",
    description:
      "End-to-end video/audio pipeline design using GStreamer, FFmpeg, SRT, NDI, HDMI, and SDI on ARM/x86 platforms.",
    showcase: "AV pipelines engineered for precision."
  },
  {
    icon: <SiQase />,
    title: "Embedded QA & Test Automation",
    description: "Automated functional, regression, and performance testing across embedded platforms from AV sync to stability.",
    showcase: "Test smarter. Ship better."
  },
  {
    icon: <FaCloud />,
    title: "IoT Connectivity & Cloud Integration",
    description: "Secure device-to-cloud architecture with MQTT, OTA, REST APIs, and cloud platforms like AWS, Azure, and GCP.",
    showcase: "Smarter devices. Seamless updates."
  },
  {
    icon: <FaHeadset />,
    title: "Ongoing Engineering Support",
    description: "We offer feature upgrades, security patching, and long-term maintenance to keep your products current.",
    showcase: "Sustain innovation with expert backing."
  }
];

const Services = () => {
  const router = useRouter();
  return (
    <section id="services" className="py-16 sm:py-28 bg-[#f5f8fb]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center space-y-4">
        <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight">
          Professional services
        </h2>
        <p className='text-sm sm:text-[15px] text-[#5d6471] max-w-lg mx-auto mb-4'>
          We help product teams build scalable, secure, and performance-optimized software for
          multimedia, IoT, and embedded systems
        </p>
        <div className="flex flex-wrap justify-center gap-5 pt-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between group overflow-hidden max-w-[360px] bg-white border-[0.5px] border-[#3078fb66] hover:border-[#0c1e35] rounded p-5 sm:p-10 text-left transition"
            >
              <div className="relative z-10 space-y-3">
                <h4 className="text-primary text-4xl group-hover:text-white">{service.icon}</h4>
                <h3 className="text-xl sm:text-[22px] font-medium text-primaryText my-2 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-[#5d6471] text-sm sm:text-[15px] mb-4 group-hover:text-white">
                  {service.description}
                </p>
                <p className="text-[#5d6471] italic text-xs mb-4 group-hover:text-white">
                  {service.showcase}
                </p>
              </div>
              <button onClick={() => router.push('/services')} className="w-10 h-10 flex items-center justify-center rounded bg-[#f6f9fc] hover:bg-primary text-primary hover:text-white transition z-10 relative cursor-pointer">
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