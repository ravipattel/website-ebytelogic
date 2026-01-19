'use client';
import Image from 'next/image';

import React, { useRef, useState } from 'react';
import { FaChevronRight, FaChevronUp } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

import QuestionsJpg from '@/src/assets/images/faqs/happy-colleagues-sitting-in-office-coworking.jpg';
import { embeddedLinuxFaqs, embeddedTestingFaqs, generalFaqs, iotMobileIntegrationFaqs, multimediaFaqs } from '@/content/pageFaqData';

const AccordionItem = ({ index, openIndex, setOpenIndex, question, answer }: any) => {
  const isOpen = openIndex === index;
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className="border-b border-[#E7EBF0] pb-4">
      <button
        onClick={toggle}
        className={`cursor-pointer w-full flex items-center gap-3 text-[15px] sm:text-base text-left transition-colors ${isOpen ? 'text-primary' : 'text-gray-800'
          }`}
      >
        {isOpen ? <FaChevronUp className="text-primary" /> : <FaChevronRight />}
        <span>{question}</span>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          height: isOpen ? contentRef.current?.scrollHeight : 0,
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? 8 : 0,
        }}
      >
        <p className="text-[#5d6471] text-sm pl-7">{answer}</p>
      </div>
    </div>
  );
};

const Questions = () => {
  const [openIndex1, setOpenIndex1] = useState<number | null>(null); // General
  const [openIndex2, setOpenIndex2] = useState<number | null>(null); // Multimedia
  const [openIndex3, setOpenIndex3] = useState<number | null>(null); // Embedded Linux
  const [openIndex4, setOpenIndex4] = useState<number | null>(null); // Testing
  const [openIndex5, setOpenIndex5] = useState<number | null>(null); // IoT


  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
      <div className="py-16 sm:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="space-y-4">
              <h6 className="text-base md:text-lg text-primary font-medium flex items-center gap-2">FAQ</h6>
              <h3 className="text-2xl sm:text-[27px] font-medium text-primaryText leading-tight capitalize">
                1. General Company & Engagement FAQs
              </h3>
            </div>
            <div className="my-8 space-y-4">
              {generalFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  openIndex={openIndex1}
                  setOpenIndex={setOpenIndex1}
                  {...faq}
                />
              ))}
            </div>
          </div>

          <div>
            <Image src={QuestionsJpg} alt="QuestionsJpg" width={600} height={600} className='ml-auto' />
            <div className="p-2 md:p-10 bg-primary flex items-center gap-3 size-fit ms-auto z-10 relative -top-9 md:-top-26 before:absolute before:bottom-0 before:-left-11 before:w-0 before:h-0 before:border-t-[35px] before:border-t-primary before:border-l-[44px] before:border-l-transparent">
              <div className="bg-white rounded-full size-6 md:size-14 grid place-items-center">
                <IoMdMail className="text-primary text-lg md:text-3xl" />
              </div>
              <div className="space-y-0.5 md:space-y-2">
                <h5 className="text-white font-semibold text-lg">Contact Us</h5>
                <p className="text-white text-sm">Support@domain.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-primaryText leading-tight capitalize mb-3">2. Multimedia & Streaming Frameworks</h3>
            <div className="my-8 space-y-4">
              {multimediaFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  openIndex={openIndex2}
                  setOpenIndex={setOpenIndex2}
                  {...faq}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primaryText leading-tight capitalize mb-3">3. Linux BSP & Embedded Software</h3>
            <div className="my-8 space-y-4">
              {embeddedLinuxFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  openIndex={openIndex3}
                  setOpenIndex={setOpenIndex3}
                  {...faq}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primaryText leading-tight capitalize mb-3">4. QA, Testing & Validation</h3>
            <div className="my-8 space-y-4">
              {embeddedTestingFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  openIndex={openIndex4}
                  setOpenIndex={setOpenIndex4}
                  {...faq}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primaryText leading-tight capitalize mb-3">5. IoT, Mobile Apps & Cloud Integration</h3>
            <div className="my-8 space-y-4">
              {iotMobileIntegrationFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  openIndex={openIndex5}
                  setOpenIndex={setOpenIndex5}
                  {...faq}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
