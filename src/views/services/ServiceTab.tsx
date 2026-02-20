"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";

import { serviceDataCard } from "./ServiceCards";
import { caseStudyCard } from "../case-study/CaseStudyCard";
import { industries } from "../industries/IndustryCards";

export const extractSlugData = (data, titleKey) => {
  return data.map((item) => ({
    title: item[titleKey],
    slug: item.id,
  }));
};

type TabType = "services" | "caseStudies" | "industries";

const ServiceTab = () => {
  
  const [activeTab, setActiveTab] = useState<TabType>("services");

  const serviceSlugs = extractSlugData(serviceDataCard, "category");
  const caseStudySlugs = extractSlugData(caseStudyCard, "title");
  const industrySlugs = extractSlugData(industries, "title");

  const tabDataMap = {
    services: {
      data: serviceSlugs,
      basePath: "/services",
    },
    caseStudies: {
      data: caseStudySlugs,
      basePath: "/case-study",
    },
    industries: {
      data: industrySlugs,
      basePath: "/industries",
    },
  };

  const currentTab = tabDataMap[activeTab];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight'>{`Here's What`} <span className="text-[#3078fb]">eByteLogic</span> Can Do For You</h3>
          <p className="text-gray-500 mt-4">
            Explore our scalable and powerful services
          </p>
        </div>

        {/* Top Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { key: "services", label: "Services" },
            { key: "caseStudies", label: "Case Studies" },
            { key: "industries", label: "Industries" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as TabType)}
              className={`px-8 py-3 rounded-full border transition
        ${activeTab === tab.key
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-600 border-gray-300"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {currentTab.data.map((item, index) => (
              <Link
                key={index}
                href={`${currentTab.basePath}/${item.slug}`}
                className="group relative p-5 rounded-2xl border border-gray-200 bg-white hover:border-primary hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition duration-300" />

                <div className="relative flex flex-col md:flex-row items-center gap-2">
                <div className="size-6 xl:size-9 shrink-0 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition">
                <BiCheck className="w-4 h-4 text-green-600 group-hover:text-white" />
                  </div>

                  <span className="text-gray-700 text-sm lg:text-base font-medium group-hover:text-primary transition">
                    {item.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTab;
