"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import {
  FaCalendarAlt,
} from "react-icons/fa";

import Button from "@/src/components/Button";

import NdiPng from "@/src/assets/images/blogs/blogDetails/ndi.png";
import YoctoPng from "@/src/assets/images/blogs/blogDetails/buildroot.png";
import SrtRtmpPng from "@/src/assets/images/blogs/blogDetails/srt.png";
import AvPng from "@/src/assets/images/blogs/blogDetails/av-lip-sync.png";
import EmbeddedPng from "@/src/assets/images/blogs/blogDetails/embedded.png";
import LinuxBspPng from "@/src/assets/images/blogs/blogDetails/linux-bsp.png";
import CeaPng from "@/src/assets/images/blogs/blogDetails/cea.png";
import PtpPng from "@/src/assets/images/blogs/blogDetails/ptp.png";
import FixingFramePng from "@/src/assets/images/blogs/blogDetails/fixing-frame.png";
import ffmpegPng from "@/src/assets/images/blogs/blogDetails/ffmpeg.png";
import GlassPng from "@/src/assets/images/blogs/blogDetails/glass-to-glass.png";
import EncodersPng from "@/src/assets/images/blogs/blogDetails/encoders.png";
import QaPng from "@/src/assets/images/blogs/blogDetails/qa.png";
import SecurePng from "@/src/assets/images/blogs/blogDetails/secure.png";
import HardwarePng from "@/src/assets/images/blogs/blogDetails/hardware-jetson.png";

export const globalCards = [
  {
    design: "av lip sync",
    id: "av-lip-sync-in-2025",
    title: "AV Lip-Sync in 2025: How to Hit ±10 ms in GStreamer + SRT Pipelines",
    image: AvPng,
    author: "Admin",
    date: "20 July, 2025",
  },
  {
    design: "srt",
    id: 'SRT-vs-RIST-vs-RTMP',
    title: "SRT vs RIST vs RTMP: Which Protocol Wins for Sub-Second Contribution?",
    image: SrtRtmpPng,
    author: "Admin",
    date: "13 May, 2025",
  },
  {
    design: "gstreamer",
    id: "the-future-of-embedded-systems",
    title: "The Future of Embedded Systems",
    image: EmbeddedPng,
    author: "Admin",
    date: "24 April, 2025",
  },
  {
    design: "ndi",
    id: "ndi-in-hybrid-ip-sdi-workflows",
    title: "NDI in Hybrid IP/SDI Workflows: What Product Teams Must Know",
    image: NdiPng,
    author: "Admin",
    date: "18 Jan, 2025",
    route: "/blogs/multiviewer",
  },
  {
    design: 'yocto',
    id: "buildroot-vs-yocto-for-video-devices",
    title: `Buildroot vs Yocto for Video Devices: A Pragmatic Product Guide`,
    image: YoctoPng,
    author: "Admin",
    date: "18 Sep, 2025",
  },
  {
    design: 'linux-bsp',
    id: "linux-bsp-techniques-that-work",
    title: `Boot to First Frame in 3 Seconds: Linux BSP Techniques That Work`,
    image: LinuxBspPng,
    author: "Admin",
    date: "01 Feb, 2025",
  },
  {
    design: 'dtvcc',
    id: "cea-608-708-and-line21-dtvcc-conversion",
    title: `Closed Captions Demystified: CEA-608/708 and Line21⇄DTVCC Conversion`,
    image: CeaPng,
    author: "Admin",
    date: "13th March, 2025",
  },
  {
    design: 'ptp',
    id: "ptp-and-smpte-st-2110-for-non-broadcasters",
    title: "PTP & SMPTE ST 2110 for Non-Broadcasters: Timing Without Tears",
    image: PtpPng,
    author: "Admin",
    date: "26th June, 2025",
  },
  {
    design: 'protocol-switching',
    id: "fixing-frame-drops-during-protocol-switching",
    title: "Fixing Frame Drops During Protocol Switching (Real-World Postmortem)",
    image: FixingFramePng,
    author: "Admin",
    date: "12 Jan, 2025",
  },
  {
    design: 'ffmpeg',
    id: "ffmpeg-filters-frame-pacing-lip-sync",
    title: "FFmpeg Filters for Broadcast-Grade Sync, Frame Pacing, and Lip-Sync",
    image: ffmpegPng,
    author: "Admin",
    date: "08 J, 2025",
  },
  {
    design: 'glass-latency',
    id: "measuring-glass-to-glass-latency",
    title: "Measuring Glass-to-Glass Latency: Methods, Tools, and Pitfalls",
    image: GlassPng,
    author: "Admin",
    date: "5 Sep, 2025",
  },
  {
    design: 'edge-encoders',
    id: "edge-encoders-for-rugged-environments",
    title: "Edge Encoders for Rugged Environments: Thermal, Power & Network Design",
    image: EncodersPng,
    author: "Admin",
    date: "19 Aug, 2025",
  },
  {
    design: 'automated-qa',
    id: "automated-qa-for-live-video",
    title: "Automated QA for Live Video: gst-validate, tracers, and soak tests",
    image: QaPng,
    author: "Admin",
    date: "08 July, 2025",
  },
  {
    design: 'secure-streaming',
    id: "secure-streaming",
    title: "Secure Streaming: Hardening SRT, SRTP, TLS & Key Management",
    image: SecurePng,
    author: "Admin",
    date: "20 April, 2025",
  },
  {
    design: 'hardware-accelerated',
    id: "hardware-accelerated-transcoding-on-jetson-i.MX",
    title:
      "Hardware-Accelerated Transcoding on Jetson & i.MX: What Actually Matters",
    image: HardwarePng,
    author: "Admin",
    date: "22 Sep, 2025",
  },
];

const itemsPerPage = 6;

const Global = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(globalCards.length / itemsPerPage);
  const router = useRouter();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentCards = globalCards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="py-16 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4">
        <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText text-center leading-tight">
          Technology news
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
          {currentCards.map((card, index) => (
            <div
              key={index}
              onClick={() => router.push(`/blogs/${card.id}`)}
              className="cursor-pointer bg-white border border-gray-200 shadow-[rgba(0,0,0,0.1)_0px_5px_25px] flex flex-col"
            >
              <Image
                src={card.image}
                alt={card.title}
                className={`object-fill w-[436px] h-[363px]`}
              />
              <div className="space-y-4 text-primaryText p-7">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt className="text-primary text-sm" />
                  <span className="text-sm text-[#757b82]">{card.date}</span>
                </div>
                <h3 className="text-lg sm:text-lg leading-normal cursor-pointer hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-10">
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 text-secondary !h-[34px] !bg-[#F4F5F5] !border-[#F4F5F5] hover:!bg-primary hover:!border-primary hover:text-white transition duration-400 text-sm rounded `}
          >
            Prev
          </Button>

          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`!py-0 !px-3 border text-sm !h-[34px] rounded ${currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "!bg-[#F4F5F5] hover:!bg-primary !border-[#F4F5F5] hover:!border-primary !text-secondary hover:!text-white"
                }`}
            >
              {index + 1}
            </Button>
          ))}

          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 text-secondary !h-[34px] !bg-[#F4F5F5] !border-[#F4F5F5] hover:!bg-primary hover:!border-primary hover:text-white transition duration-400 text-sm rounded `}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Global;
