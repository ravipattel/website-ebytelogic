"use client";

import { useState } from "react";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs?: FAQItem[];
  title?: string;
  containerClassName?: string;
}

export default function FAQAccordion({
  faqs,
  title = "Frequently Asked Questions",
  containerClassName = "",
}: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={`space-y-6 ${containerClassName}`}>
      <div className="space-y-3">
        {faqs?.map((item, index) => {
          const isOpen = open === index;

          return (
            <div key={index} className="relative overflow-hidden rounded-md">
              <div
                className={`absolute inset-0 z-0 origin-left bg-gradient-to-r from-blue-100 to-blue-50 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${isOpen ? "scale-x-100" : "scale-x-0"}
                `}
              />

              <button
                onClick={() => setOpen(isOpen ? null : index)}
                className="relative w-full text-left px-4 lg:px-6 py-4 flex items-center justify-between"
              >
                <h3
                  className={`text-base sm:text-lg xl:text-[19px] font-medium transition-colors duration-300 max-w-[90%]
                    ${isOpen ? "text-blue-700" : "text-gray-900"}
                  `}
                >
                  {index + 1}. {item.q}
                </h3>

                <span
                  className={`text-2xl font-light transition-transform duration-300
                    ${isOpen ? "rotate-45 text-blue-600" : "text-gray-400"}
                  `}
                >
                  +
                </span>
              </button>

              <div
                className={`relative px-4 lg:px-6 overflow-hidden transition-all duration-500 ease-in-out
                  ${isOpen
                    ? "max-h-[900px] opacity-100 translate-y-0 pb-4"
                    : "max-h-0 opacity-0 -translate-y-2 pb-0"}
                `}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
