"use client";

import Image from "next/image";

import FaqHomePng from '@/src/assets/images/home/faqHome.png'
import FAQAccordion from "@/src/components/Faq";
import { faqsData } from "@/content/homeFaqData";

export default function FaqHome() {

  return (
    <section className="bg-[#f5f8fb] pb-16 pt-16 md:pt-24">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight mb-8">Frequently Asked <span className="text-primary">Questions</span></h2>
      <div className="grid xl:grid-cols-3 items-start gap-12">
        <div className="xl:col-span-2 xl:max-w-[800px]">
          <FAQAccordion
            faqs={faqsData}
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
