"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import Button from "@/src/components/Button";

import NextologiesWebp from "@/src/assets/images/caseStudy/wearableDisplay.png";
import DubbingJpg from "@/src/assets/images/caseStudy/audioPipeine.png";
import ToradexPng from "@/src/assets/images/caseStudy/sdi.png";
import EsightWearJpeg from "@/src/assets/images/caseStudy/bootLogo.png";
import BootTimeJpg from "@/src/assets/images/caseStudy/socs.png";
import MultiViewerJpg from "@/src/assets/images/caseStudy/ndiProtocol.png";
import LcdPng from "@/src/assets/images/caseStudy/lcd.png";
import CanBusPng from "@/src/assets/images/caseStudy/canBus.png";
import YoctoBuildPng from "@/src/assets/images/caseStudy/yoctoBuild.png";
import YoctoBuildRootPng from "@/src/assets/images/caseStudy/yoctoBuildroot.png";
import ModBusPng from "@/src/assets/images/caseStudy/modBus.png";
import LowCostPng from "@/src/assets/images/caseStudy/lowCost.png";
import DisplayLatencyPng from "@/src/assets/images/caseStudy/displayLatency.png";
import BootLogoPng from "@/src/assets/images/caseStudy/bootLogo.png";
import I2CPng from "@/src/assets/images/caseStudy/busLockUp.png";

const caseStudyCard = [
  {
    id: "reducing-wearable-display-latency",
    title: "Reducing Wearable Display Latency",
    industry: "Reduced latency from ~250ms to <100ms",
    highlights: [
      "Platform: NXP i.MX8MP",
      "Display: Dual OLED",
      "Time to Result: 20 days",
    ],
    img: NextologiesWebp,
  },
  {
    id: "bypassing-proprietary-audio-pipeline",
    title:
      "Bypassing Proprietary Audio Pipeline",
    industry: "Achieving Precision Audio Playback",
    highlights: [
      "Platform: Qualcomm DragonBoard",
      "Technologies: AudioFlinger bypass, JNI integration",
      "Output: Perfectly timed audio playback",
    ],
    img: DubbingJpg,
    route: "/spg",
  },
  {
    id: "broadcast-grade-sdi-encoder-decoder-with-sub100ms-latency",
    title:
      "Broadcast-Grade SDI Encoder & Decoder with Sub-100ms Latency",
    industry: "Real-time SDI video transport",
    highlights: [
      "Latency: Sub-100ms end-to-end",
      "Lip Sync Accuracy: ±10ms",
      "VANC Support: LINE21, CEA-608/708, SCTE-35",
    ],
    img: ToradexPng,
  },
  {
    id: "u-boot-logo-for-IMX8MQ",
    title: "U-Boot Logo for IMX8MQ",
    industry: "native driver support",
    highlights: [
      "Platform: NXP i.MX8MQ",
      "Display Driver Work: Ported kernel DSI drivers into U-Boot",
      "Adapted Linux kernel display drivers for U-Boot",
    ],
    img: EsightWearJpeg,
  },
  {
    id: "multi-platform-driver-development-uBoot-customization",
    title:
      "Multi-Platform Driver Development & U-Boot Customization",
    industry: "Driver development and bootloader customization",
    highlights: [
      "Platforms: NXP i.MX8MQ, TI Sitara, Rockchip RK356x, Qualcomm",
      "Drivers: ADV7611 (HDMI), WM8960 (audio codec), touch controllers, modems",
      "Additional Goals: Secure boot, branded splash screen, upstream compatibility",
    ],
    img: BootTimeJpg,
  },
  {
    id: 'ndi-protocol-integration-inremote-recorder-player',
    title:
      "NDI Protocol Integration in Remote Recorder/Player",
    industry: "(Network Device Interface)",
    highlights: [
      "Existing GStreamer app lacked NDI input",
      "Broadcaster clients demanded low-latency IP-based integration",
      "Required frame-accurate sync and seamless integration",
    ],
    img: MultiViewerJpg,
  },
  {
    id: "rapid-lcd-touchscreen-bring-up-for-telematics-display",
    title: "Rapid LCD & Touchscreen Bring-Up for Telematics Display",
    industry: "(Telematics Hardware Integration)",
    highlights: [
      "Fully functional LCD and capacitive touchscreen integration within 3 days",
      "Custom OS installer development under extreme time pressure",
      "Successful demo at Embedded World event meeting critical deadlines"
    ],
    img: LcdPng
  },
  {
    id: "secure-mcu-firmware-upgrade-via-canopen",
    title: "Secure MCU Firmware Upgrade via CANopen",
    industry: "(Fire Safety Systems)",
    highlights: [
      "Secure and reliable MCU firmware updates over CAN bus",
      "Remote firmware updates eliminate on-site visits and reduce costs",
      "Large-scale, distributed deployments for mission-critical systems"
    ],
    img: CanBusPng
  },
  {
    id: "hdmi-multiview-player",
    title: "HDMI Multiview Player",
    industry: "(Broadcast Solutions)",
    highlights: [
      "Low-cost, low-power multiview player for professional monitoring",
      "Supports multiple streaming protocols (UDP, SRT, HLS)",
      "Hardware-accelerated decoding for efficient video processing"
    ],
    img: LowCostPng
  },
  {
    id: "sub-100ms-latency-in-uav-video-streaming",
    title: "Sub-100ms Latency in UAV Video Streaming",
    industry: "(Drone Technology)",
    highlights: [
      "Achieved <100ms camera-to-display latency for UAV control",
      "No production hardware during PoC, solution built on evaluation kits",
      "Validated NXP i.MX8MP platform for next-gen UAV products"
    ],
    img: DisplayLatencyPng
  },
  {
    id: "can-to-modbus-bridge",
    title: "CAN-to-Modbus Bridge",
    industry: "(Industrial Electronics)",
    highlights: [
      "Seamlessly integrates CAN-based devices with Modbus controllers",
      "Error recovery and mapping flexibility for reliable protocol translation",
      "Reduces the need for costly hardware replacements in industrial systems"
    ],
    img: ModBusPng
  },
  {
    id: "yocto-migration-for-safety-panel",
    title: "Yocto Migration for Safety Panel",
    industry: "(Safety Systems Manufacturing)",
    highlights: [
      "Migrated an outdated Yocto build to a modern release",
      "Ensured full compatibility with existing peripherals",
      "Extended product lifecycle with a modern, secure software stack"
    ],
    img: YoctoBuildPng
  },
  {
    id: "yocto-buildroot-migration",
    title: "Yocto ↔ Buildroot Migration",
    industry: "(OEMs with Diverse Embedded Platforms)",
    highlights: [
      "Bidirectional migration between Yocto and Buildroot",
      "Unified codebase supporting multiple platforms",
      "Streamlined development with a single repo"
    ],
    img: YoctoBuildRootPng
  },
  {
    id: "multi-master-i2c-problem-resolution",
    title: "Multi-Master I2C Problem Resolution",
    industry: "(High-Volume Electronics Manufacturer)",
    highlights: [
      "Eliminated I2C bus lock-ups causing system instability",
      "Implemented dummy clock recovery for multi-master I2C bus",
      "Saved costs by avoiding hardware redesign"
    ],
    img: I2CPng
  },
  {
    "id": "multi-os-bsp-porting-and-boot-time-optimization",
    "title": "Multi-OS BSP Porting and Boot Time Optimization",
    "industry": "(European Embedded Hardware Solutions Company)",
    "highlights": [
      "Achieved sub-10 second boot to Qt app",
      "Ported multiple operating systems (Ubuntu, Debian, Android, Lubuntu, CentOS)",
      "Optimized boot sequence and kernel for faster startups"
    ],
    "img": BootTimeJpg
  },
  {
    "id": "unified-yocto-build-environment-for-multi-SoM-product-lines",
    "title": "Unified Yocto Build Environment for Multi-SoM Product Lines",
    "industry": "(Asia-Pacific Embedded Hardware Manufacturer)",
    "highlights": [
      "Created a single-repository Yocto environment for multiple SoMs and product lines",
      "Reduced redundancy and centralized updates",
      "Accelerated firmware rollouts and build times"
    ],
    "img": BootLogoPng
  }



];

const CaseStudyCard = () => {
  const router = useRouter();

  return (
    <section>
      <div>
        <div className="relative bg-[#F9FAFB] overflow-hidden py-20 px-6 sm:px-10 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-2xl sm:text-[30px] font-medium text-primary leading-tight capitalize mb-8">
              Engineering Impact, One Project at a Time
            </h1>
            <p className="text-sm sm:text-[15px]  text-gray-600 max-w-3xl mx-auto mb-10">
              Explore how we’ve helped product teams solve real-world challenges
              in embedded systems, multimedia streaming, Linux BSPs, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:space-x-4">
              <Button
                onClick={() => router.push("/blogs")}
                className="w-fit !bg-white !text-primary hover:!bg-primary hover:!text-white"
              >
                View Our Blogs
              </Button>
              <Button
                onClick={() => router.push("/contact-us")}
                className="w-full sm:w-fit !bg-white !text-primary hover:!bg-primary hover:!text-white"
              >
                Let’s Talk
              </Button>
            </div>
          </div>
        </div>
        <div
          id="caseStudies"
          className="max-w-[1400px] mx-auto py-24 px-4 sm:px-6 relative"
        >
          <div>
            <h1 className="text-2xl sm:text-[30px] font-medium leading-tight capitalize mb-8">
              Featured Case Studies{" "}
            </h1>
            <div className="relative border-l-2 border-primary/30 ml-4 space-y-10">
              {caseStudyCard.map((caseStudy, i) => (
                <div
                  key={i}
                  className={`relative pl-10 pr-6 before:content-[''] before:absolute before:left-[-9px] before:top-1.5 before:w-4 before:h-4 before:bg-primary before:rounded-full`}
                >
                  <div
                    className={`grid grid-cols-1 sm:grid-cols-2 gap-8 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""
                      }`}
                  >
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#1d2433] mb-2">
                        {caseStudy.title}
                      </h3>
                      <span className="text-xs bg-primary/15 px-2 py-1 rounded-full inline-block mb-3">
                        {caseStudy.industry}
                      </span>
                      <ul className="list-disc list-inside text-[#5d6471] text-sm sm:text-[15px] space-y-2">
                        {caseStudy.highlights.map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                      </ul>
                      <a
                        onClick={() => {
                          router.push(`/case-study/${caseStudy.id}`);
                        }}
                        className="cursor-pointer inline-flex items-center mt-3 text-sm sm:text-[15px] font-medium text-primary hover:underline gap-2"
                      >
                        Read Full Case Study <FaArrowRightLong />
                      </a>
                    </div>
                    <div>
                      <div className="w-full h-[210px]">
                        <Image
                          src={caseStudy.img}
                          alt="Case Study Illustration"
                          width={400}
                          height={200}
                          priority
                          loading="eager"
                          quality={100}
                          placeholder="blur"
                          blurDataURL={caseStudy.img.src}
                          className="rounded-xl lg:mx-auto"
                        />
                      </div>
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

export default CaseStudyCard;
