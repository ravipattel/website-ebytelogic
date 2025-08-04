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
    title: "Streaming Media Solutions",
    description:
      "End-to-end AV pipeline design using GStreamer, FFMPEG, Live555 — with ±10ms AV sync and support for SRT, NDI, HDMI, SDI, and more.",
    showcase: "AV pipelines tuned for precision."
  },
  {
    icon: <FaChartLine />,
    title: "Linux BSP & Board Bring-Up",
    description:
      "Custom BSPs for Android & Linux with driver integration, bootloader tuning, device tree config, and secure boot validation.",
    showcase: "From bare PCB to production-ready."
  },
  {
    icon: <SiQase />,
    title: "Embedded App Development",
    description: "High-performance firmware and embedded software in C/C++, Qt & Python — for multimedia, control, and industrial logic.",
    showcase: "Reliable code. Real-time results."
  },
  {
    icon: <FaCloud />,
    title: "AV Protocol & Codec Engineering",
    description: "Protocol handling across HDMI, RTP, RTMP, SRT, and NDI — with FFMPEG/GStreamer codec customization and latency optimization.",
    showcase: "Built for broadcast-grade delivery."
  },
  {
    icon: <FaHeadset />,
    title: "Embedded QA & Test Automation",
    description: "QA coverage from system-level to streaming-specific automation — with real hardware validation and CI-ready testbeds.",
    showcase: "Fewer bugs. Faster releases."
  },
  {
    icon: <MdOutlinePermMedia />,
    title: "IoT & Cloud Integration",
    description:
      "Device-to-cloud sync using MQTT, CoAP, and custom APIs — with OTA updates, diagnostics, and secure IoT gateways.",
    showcase: "Cloud-ready, edge-secure."
  },
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
          {`We help MediaTech and semiconductor innovators build scalable, secure, and
production-ready systems — from AV pipelines to BSP-level customization.`}
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