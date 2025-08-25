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
                      <span className="text-xs bg-primary/15 px-2 py-0.5 rounded-full inline-block mb-3">
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
                      <div className="w-full h-[250px]">
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
                          className="w-full h-full object-cover rounded-xl"
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
