"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import {
  FaCalendarAlt,
} from "react-icons/fa";

import Button from "@/src/components/Button";

import SomSocPng from "@/src/assets/images/blogs/blogDetails/somSoc.png";
import QaHeroJpg from "@/src/assets/images/blogs/blogDetails/qaHero.jpg";
import DevGuideHeroPng from "@/src/assets/images/blogs/blogDetails/devGuideHero.png";
import MultiviewerJpg from "@/src/assets/images/blogs/blogDetails/multiviewer.png";
import GstreamerJpg from "@/src/assets/images/blogs/blogDetails/g-streamer.jpg";
import ButtonDbounceWebp from "@/src/assets/images/blogs/blogDetails/buttonDebounce.png";

export const globalCards = [
  {
    design: "av-lip-sync-in-2025",
    image: SomSocPng,
    title: "Introduction to SoC and SoM",
    author: "Admin",
    date: "20 July, 2019",
    id: "av-lip-sync-in-2025",
  },
  {
    design: "qa",
    image: QaHeroJpg,
    title: "The Unique World of Embedded QA",
    author: "Admin",
    date: "13 May, 2018",
    id: 'SRT-vs-RIST-vs-RTMP',
  },
  {
    design: "devGuide",
    image: DevGuideHeroPng,
    title: "RK3588 Multimedia Development Guide",
    author: "Admin",
    date: "24 April, 2019",
    id: "the-future-of-embedded-systems",
  },
  {
    design: "multiviewer",
    image: MultiviewerJpg,
    title: "Multiviewer Smack-down",
    author: "Admin",
    date: "18 Oct, 2020",
    route: "/blogs/multiviewer",
    id: "ndi-in-hybrid-ip-sdi-workflows",
  },
  {
    design: 'gStreamer',
    image: GstreamerJpg,
    title: `eByteLogic's Approach to GStreamer`,
    author: "Admin",
    date: "08 Jan, 2023",
    id: "buildroot-vs-yocto-for-video-devices",
  },
  {
    design: 'btn-debounce',
    image: ButtonDbounceWebp,
    title: "Button Debounce Methods: A Comprehensive Guide to Reliable Input",
    author: "Admin",
    date: "08 Jan, 2023",
    id: "button-debounce",
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
                <h3 className="text-lg sm:text-[21px] leading-normal cursor-pointer hover:text-primary transition-colors duration-300">
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
