import Image from "next/image";

import React from "react";

import TeamPng from "@/src/assets/images/home/team.png";
import ProjectPng from "@/src/assets/images/home/project-management.png";
import AnalysisPng from "@/src/assets/images/home/product-management.png";

const solutionsData = [
  {
    img: ProjectPng,
    title: "Embedded Engineering Edge",
    description:
      "From ultra-low-latency AV pipelines to secure BSP bring-ups, our embedded software delivers real-time performance across MediaTech and semiconductor platforms.",
  },
  {
    img: AnalysisPng,
    title: "Full-Cycle Product Partner",
    description:
      "From proof-of-concept to production, we partner with product teams to build and scale embedded systems—agile, modular, and market-ready.",
  },
  {
    img: TeamPng,
    title: "Platform-Aware Expertise",
    description:
      "We specialize in GStreamer, FFMPEG, Yocto, Buildroot, and AOSP—offering stack-level integration, protocol handling, and driver tuning for complex systems.",
  },
];

const Solutions = () => {
  return (
    <section className="py-16 sm:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:py-8">
          {solutionsData.map((solution, index) => (
            <div
              key={index}
              className={`p-6 transition space-y-5 ${index === 1
                ? "border-y border-x-0 md:border-x md:border-y-0 border-[#dddddd]"
                : ""
                }`}
            >
              <Image src={solution.img} alt={solution.title} height={80} width={80} className="mx-auto" />
              <h3 className="text-xl font-medium text-primaryText my-2">
                {solution.title}
              </h3>
              <p className="text-[#5d6471] text-sm sm:text-[15px] mb-3">
                {solution.description}
              </p>
              <a
                href="/details"
                className="relative text-[#444444] text-[15px] font-medium transition-all duration-500 hover:text-primary group"
              >
                Read more
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full"
                ></span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Solutions;