'use client';
import Image from 'next/image';

import React, { useRef, useState } from 'react';
import { FaChevronRight, FaChevronUp } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

import QuestionsJpg from '@/src/assets/images/faqs/happy-colleagues-sitting-in-office-coworking.jpg';

const faqs = [
  {
    question: 'What Does Having Managed IT Services Cost?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'What Types Of Systems Do You Support?',
    answer: 'We support Windows, macOS, Linux, cloud environments, and a wide range of networking devices.',
  },
  {
    question: 'What Payment Methods Are Available?',
    answer: 'We accept credit cards, PayPal, bank transfers, and crypto payments in select regions.',
  },
];

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
        className={`cursor-pointer w-full flex items-center gap-3 text-base transition-colors ${isOpen ? 'text-primary' : 'text-gray-800'
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
  const [openIndex1, setOpenIndex1] = useState<number | null>(null);
  const [openIndex2, setOpenIndex2] = useState<number | null>(null);
  const [openIndex3, setOpenIndex3] = useState<number | null>(null);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
      <div className="py-16 sm:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="space-y-4">
              <h6 className="text-base md:text-lg text-primary font-medium flex items-center gap-2">FAQ</h6>
              <h3 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize">
                General Question
              </h3>
              <p className="text-[#5d6471] text-sm sm:text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className="my-8 space-y-4">
              {faqs.map((faq, index) => (
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
            <Image src={QuestionsJpg} alt="QuestionsJpg" />
            <div className="p-10 bg-primary flex items-center gap-3 w-fit ms-auto z-10 relative -top-26 before:absolute before:bottom-0 before:-left-11 before:w-0 before:h-0 before:border-t-[35px] before:border-t-primary before:border-l-[44px] before:border-l-transparent">
              <div className="bg-white rounded-full h-14 w-14 grid place-items-center">
                <IoMdMail className="text-primary text-3xl" />
              </div>
              <div className="space-y-2">
                <h5 className="text-white font-semibold text-lg">Contact Us</h5>
                <p className="text-white text-sm">Support@domain.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20">
          <div>
            <h3 className="text-2xl font-semibold text-primaryText leading-tight capitalize mb-3">Payment Question</h3>
            <p className="text-[#5d6471] text-sm sm:text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="my-8 space-y-4">
              {faqs.map((faq, index) => (
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
            <h3 className="text-2xl font-semibold text-primaryText leading-tight capitalize mb-3">Maintenance Question</h3>
            <p className="text-[#5d6471] text-sm sm:text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="my-8 space-y-4">
              {faqs.map((faq, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default Questions;
