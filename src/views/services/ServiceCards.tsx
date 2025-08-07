'use client';
import { useRouter } from 'next/navigation';

import React from 'react';

import Button from '@/src/components/Button';

const serviceData = [
  {
    category: "Embedded App Development",
    description: "Cross-platform embedded apps in C/C++, Qt, and Python for control panels, GUIs, data acquisition, and real-time logic.",
    subServices: [
      "Qt/QML GUI for Embedded Linux",
      "Protocol-Based Control & Monitoring Apps",
      "Storage, Logging & UI Middleware"
    ],
    slug: "embedded-software"
  },
  {
    category: "Linux BSPs & Hardware Bring-Up",
    description: "Customized BSPs, secure boot, and rapid peripheral enablement across Yocto, Buildroot, and Android platforms.",
    subServices: [
      "Quick Bring-Up for Custom Boards",
      "U-Boot, Secure Boot & Splash Setup",
      "Yocto & Buildroot Migration"
    ],
    slug: "linux-bsp"
  },
  {
    category: "Multimedia & Streaming Frameworks",
    description: "Real-time video pipelines using GStreamer, FFmpeg & protocol engineering for low-latency, high-fidelity streaming.",
    subServices: [
      "GStreamer & FFmpeg Customization",
      "Protocol Handling (SRT, RTP, RTMP, NDI)",
      "Codec Tuning for ARM & Embedded"
    ],
    slug: "multimedia-framework"
  },
  {
    category: "IoT & Cloud Integration",
    description: "Seamless integration of devices with cloud platforms using secure protocols, OTA mechanisms, and telemetry sync.",
    subServices: [
      "Device-to-Cloud (AWS, Azure, GCP)",
      "OTA Update Systems with Rollback",
      "MQTT, REST, WebSocket Protocols"
    ],
    slug: "mobile-apps"
  },
  {
    category: "Embedded QA & Test Automation",
    description: "Test infrastructure, real-device validation, and automation frameworks tailored for embedded product pipelines.",
    subServices: [
      "Test Automation for Embedded Targets",
      "HIL Setup & Regression Testing",
      "CI/CD Integration for QA"
    ],
    slug: "qa-validation"
  },
  {
    category: "AV Protocol & Codec Engineering",
    description: "End-to-end handling of streaming protocols, sync, and encoding/decoding pipelines in embedded environments.",
    subServices: [
      "SDI/HDMI AV Sync Engineering",
      "NDI, RTP, SRT, HLS, RTMP Integration",
      "Codec-Level Optimization for ARM"
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
