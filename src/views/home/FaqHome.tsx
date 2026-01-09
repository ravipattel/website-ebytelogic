"use client";

import Image from "next/image";
import { useState } from "react";

import FaqHomePng from '@/src/assets/images/home/faqHome.png'
import FAQAccordion from "@/src/components/Faq";

export default function FaqHome() {
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
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight mb-8">Frequently Asked <span className="text-primary">Questions</span></h2>
      <div className="grid xl:grid-cols-3 items-start gap-12">
        <div className="xl:col-span-2 xl:max-w-[800px]">
          <FAQAccordion
            faqs={faqs}
            title="Frequently Asked Questions"
          />
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
