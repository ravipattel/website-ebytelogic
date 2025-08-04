'use client'
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 

const SomSocKey = () => {
  // Data for the sections
  const sections = [
    {
      id: 'soc-arch',
      title: 'SoC Architecture Components',
      content: [
        {
          heading: 'Core Processing',
          items: [
            'Multi-core CPU (ARM Cortex-A series)',
            'Graphics Processing Unit (GPU)',
            'Digital Signal Processors (DSP)',
            'AI accelerators and NPUs',
          ],
        },
        {
          heading: 'Memory & I/O',
          items: [
            'Memory controllers (DDR3/4)',
            'Flash memory interfaces',
            'High-speed interfaces (USB, PCIe)',
            'Wireless connectivity (Wi-Fi, Bluetooth)',
          ],
        },
      ],
      citation:
        'https://aichiplink.com/blog/System-on-Chip-VSSystem-on-Module-Key-Differences-and-Applications_377',
    },
    {
      id: 'som-arch',
      title: 'SoM Architecture Components',
      content: [
        {
          heading: 'Core System',
          items: [
            'Primary SoC processor',
            'RAM (DDR3/4 SDRAM)',
            'Non-volatile storage (eMMC, NAND)',
            'Power management ICs (PMICs)',
          ],
        },
        {
          heading: 'Interface & Support',
          items: [
            'Board-to-board connectors',
            'Clock generation circuitry',
            'Passive components',
            'Mechanical mounting features',
          ],
        },
      ],
      citation:
        'https://aichiplink.com/blog/System-on-Chip-VS-Systemon-Module-Key-Differences-and-Applications_377',
    },
  ];

  // State to manage open/close sections
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="key-components" className="px-4 md:px-6 py-16 bg-white">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
        Key Components and Architecture
      </h2>
      <div className="space-y-8">
        {sections.map(({ id, title, content, citation }) => (
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
                  {content.map(({ heading, items }, index) => (
                    <div key={index}>
                      <h4 className="font-semibold mb-3">{heading}</h4>
                      <ul className="space-y-2">
                        {items.map((item, i) => (
                          <li key={i} className='text-sm md:text-base'>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="text-sm md:text-base text-gray-600 mt-4">
                  The architecture is highly application-specific, tailored to meet performance, power, and cost targets.{' '}
                  <a href={citation} className="citation" target="_blank" rel="noopener noreferrer">
                    [198]
                  </a>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SomSocKey;
