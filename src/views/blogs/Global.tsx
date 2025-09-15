"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import {
  FaCalendarAlt,
} from "react-icons/fa";

import Button from "@/src/components/Button";

import NdiPng from "@/src/assets/images/blogs/blogDetails/ndi.png";
import YoctoPng from "@/src/assets/images/blogs/blogDetails/yocto.png";
import SrtRtmpPng from "@/src/assets/images/blogs/blogDetails/srt-rtmp.png";
import AvPng from "@/src/assets/images/blogs/blogDetails/av-lip-sync.png";
import BufferPng from "@/src/assets/images/blogs/blogDetails/buffers.png";

export const globalCards = [
  {
    design: "av lip sync",
    image: AvPng,
    title: "AV Lip-Sync in 2025: How to Hit ±10 ms in GStreamer + SRT Pipelines",
    author: "Admin",
    date: "20 July, 2019",
    id: "av-lip-sync-in-2025",
  },
  {
    design: "srt",
    image: SrtRtmpPng,
    title: "SRT vs RIST vs RTMP: Which Protocol Wins for Sub-Second Contribution?",
    author: "Admin",
    date: "13 May, 2018",
    id: 'SRT-vs-RIST-vs-RTMP',
  },
  {
    design: "gstreamer",
    image: BufferPng,
    title: "The Future of Embedded Systems",
    author: "Admin",
    date: "24 April, 2019",
    id: "the-future-of-embedded-systems",
  },
  {
    design: "ndi",
    image: NdiPng,
    title: "NDI in Hybrid IP/SDI Workflows: What Product Teams Must Know",
    author: "Admin",
    date: "18 Oct, 2020",
    route: "/blogs/multiviewer",
    id: "ndi-in-hybrid-ip-sdi-workflows",
  },
  {
    design: 'yocto',
    image: YoctoPng,
    title: `Buildroot vs Yocto for Video Devices: A Pragmatic Product Guide`,
    author: "Admin",
    date: "08 Jan, 2023",
    id: "buildroot-vs-yocto-for-video-devices",
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
