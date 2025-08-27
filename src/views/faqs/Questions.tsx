'use client';
import Image from 'next/image';

import React, { useRef, useState } from 'react';
import { FaChevronRight, FaChevronUp } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

import QuestionsJpg from '@/src/assets/images/faqs/happy-colleagues-sitting-in-office-coworking.jpg';

const generalFaqs = [
  {
    question: 'What kind of companies does eByteLogic work with?',
    answer: 'We typically collaborate with product companies, hardware OEMs, startups, and enterprise R& D teams building embedded systems, multimedia devices, and IoT solutions.',
  },
  {
    question: 'Where is your team based, and do you work globally?',
    answer: 'Yes. Our core engineering team is based in India, and we work with global clients across the US, Europe, Japan, Singapore, and the Middle East.',
  },
  {
    question: 'How does your engagement model work?',
    answer: 'We offer flexible models — including fixed-scope projects, monthly retainers, and team augmentation — depending on the client’s goals, stage, and product roadmap.',
  },
  {
    question: 'How do you ensure communication and delivery transparency?',
    answer: 'We use collaborative tools like Jira, GitHub, Confluence, and Slack. Weekly sprint reviews and milestone-based reporting ensure full transparency.',
  },
];
const multimediaFaqs = [
  {
    question: 'Do you support both GStreamer and FFmpeg customization?',
    answer:
      'Absolutely. We’ve delivered projects involving pipeline tuning, plugin development, and low-latency stream optimization using both frameworks.',
  },
  {
    question: 'Can you help us with SDI/HDMI ingest and real-time encoding?',
    answer:
      'Yes. We work extensively with AV hardware (e.g., DeckLink, Magewell) and real-time codecs for high-performance video ingest and delivery.',
  },
  {
    question: 'Do you handle broadcast protocols like RTP, RTMP, NDI, and SRT?',
    answer:
      'Yes. Our team has implemented and optimized several protocol stacks for live streaming, multicast delivery, and IP broadcast.',
  },
];
const embeddedLinuxFaqs = [
  {
    question: 'What SoCs and boards do you support for BSP bring-up?',
    answer:
      'We’ve worked with NXP, TI, Rockchip, STMicro, and custom boards — enabling U-Boot, kernel bring-up, and peripheral configuration.',
  },
  {
    question: 'Can you optimize our boot time?',
    answer:
      "Yes. We've achieved boot time reductions from 40+ seconds to under 5 seconds by analyzing the init system, disabling unused services, and optimizing kernel config.",
  },
  {
    question: 'Do you support Yocto and Buildroot both?',
    answer:
      'Yes. We customize both build systems and can migrate from one to another depending on your product goals.',
  },
];
const embeddedTestingFaqs = [
  {
    question: 'What types of testing do you offer for embedded systems?',
    answer:
      'We offer firmware testing, HIL testing, multimedia stream validation, and automated regression testing across CI pipelines.',
  },
  {
    question: 'Can you automate testing for multimedia pipelines?',
    answer:
      "Yes. We've developed test setups for AV sync, resolution switching, frame drop detection, and stream recovery under poor network conditions.",
  },
  {
    question: 'What tools and frameworks do you use for test automation?',
    answer:
      'Depending on the stack, we use GoogleTest, PyTest, Robot Framework, and integrate with Jenkins/GitHub Actions for automation.',
  },
];
const iotMobileIntegrationFaqs = [
  {
    question: 'Can you build Android/iOS apps that work with embedded devices?',
    answer:
      'Yes. We specialize in developing tightly coupled companion apps that communicate via BLE, Wi-Fi, or cloud interfaces.',
  },
  {
    question: 'Do you support MQTT, CoAP, and HTTP protocols?',
    answer:
      'Yes. We’ve implemented all three for device-to-cloud and intra-device communication.',
  },
  {
    question: 'What cloud platforms do you support for embedded SDKs?',
    answer:
      'We support AWS IoT, Azure IoT Hub, and GCP integrations, including provisioning, telemetry, and OTA updates.',
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
              {/* <p className="text-[#5d6471] text-sm sm:text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p> */}
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
            <div className="p-10 bg-primary flex items-center gap-3 size-fit ms-auto z-10 relative -top-26 before:absolute before:bottom-0 before:-left-11 before:w-0 before:h-0 before:border-t-[35px] before:border-t-primary before:border-l-[44px] before:border-l-transparent">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-primaryText leading-tight capitalize mb-3">2. Multimedia & Streaming Frameworks</h3>
            {/* <p className="text-[#5d6471] text-sm sm:text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p> */}
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
            {/* <p className="text-[#5d6471] text-sm sm:text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p> */}
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
            {/* <p className="text-[#5d6471] text-sm sm:text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p> */}
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
            {/* <p className="text-[#5d6471] text-sm sm:text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p> */}
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
