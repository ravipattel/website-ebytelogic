'use client'
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SomSocKey = ({ data }) => {

  const accordian = data?.accordianKey;

  // State to manage open/close sections
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id={accordian?.id} className="px-4 md:px-6 py-16 bg-white">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
       {accordian?.title}
      </h2>
      <div className="space-y-8">
        {accordian?.accordian?.map(({ id, title, text, content }) => (
          <div key={id} className="bg-gray-50 p-5 rounded-md">
            <div
              className="cursor-pointer flex items-center justify-between"
              onClick={() => toggleSection(id)}
            >
              <h3 className="text-base md:text-lg font-semibold">{title}</h3>
              {openSections[id] ? (
                <FaChevronUp className="transition-transform" />
              ) : (
                <FaChevronDown className="transition-transform" />
              )}
            </div>
            {openSections[id] && (
              <div
                id={id}
                className="pt-6 overflow-hidden max-h-[1000px] transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {content?.map(({ heading, items }, index) => (
                    <div key={index}>
                      <h4 className="font-semibold mb-3">{heading}</h4>
                      <ul className="space-y-2">
                        {items?.map((item, i) => (
                          <li key={i} className="text-sm md:text-base">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="text-sm md:text-base text-gray-600 mt-4"  dangerouslySetInnerHTML={{ __html: text }}/>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SomSocKey;
