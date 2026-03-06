"use client";

import Image from "next/image";

import FaqIndustryPng from '@/src/assets/images/industry/industryFaq.png'
import FAQAccordion from "@/src/components/Faq";

export default function IndustryFaq( {data}: any) {
  return (
    <section className="bg-[#f5f8fb] pb-16 pt-16 md:pt-24">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight mb-8">Frequently Asked <span className="text-primary">Questions</span></h2>
      <div className="grid xl:grid-cols-3 items-center gap-12">
        <div className="xl:col-span-2 xl:max-w-[800px]">
          <FAQAccordion
            faqs={data}
            title="Frequently Asked Questions"
          />
        </div>

        <Image
          src={FaqIndustryPng}
          alt="faq"
          className="mx-auto"
        />
      </div>
    </div>
  </section>
  );
}
