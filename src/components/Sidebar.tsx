'use client';

import { usePathname } from 'next/navigation';

import React, { useEffect, useState } from 'react';
import { FaAngleRight, FaArrowRight } from 'react-icons/fa';


const tocData = {
  'nextologies': [
    { id: 'introduction', label: '1. Introduction' },
    {
      id: 'encoder-capabilities',
      label: '2. Encoder Capabilities',
      children: [
        { id: 'ultra-low-latency', label: '2.1 Ultra-Low Latency' },
        { id: 'stability-reliability', label: '2.2 Stability & Reliability' },
        { id: 'vanc-support-encoder', label: '2.3 VANC Data Support' },
      ],
    },
    {
      id: 'decoder-capabilities',
      label: '3. Decoder Capabilities',
      children: [
        { id: 'decoder-latency', label: '3.1 Low Latency Performance' },
        { id: 'lip-sync', label: '3.2 Precision Lip Sync' },
        { id: 'vanc-support-decoder', label: '3.3 VANC Data Support' },
      ],
    },
    {
      id: 'technical-innovation',
      label: '4. Technical Innovation',
      children: [
        { id: 'software-architecture', label: '4.1 Software-Defined Architecture' },
        { id: 'native-services', label: '4.2 Native Services Integration' },
        { id: 'deployment-models', label: '4.3 Flexible Deployment' },
      ],
    },
    { id: 'conclusion', label: '5. Conclusion' },
  ],
  'spg': [
    { id: 'core-task', label: '1. Core Task Overview' },
    { id: 'ndi-support', label: '2. NDI Support with GStreamer' },
    { id: 'gui-stability', label: '3. GUI Stability Solutions' },
    { id: 'pipeline-considerations', label: '4. Pipeline Considerations' },
    { id: 'audio-enhancements', label: '5. Audio Processing' },
    { id: 'deployment', label: '6. Deployment & Environment' },
  ],
  'yocto': [
    { id: 'executive-summary', label: 'Executive Summary' },
    { id: 'the-challenge', label: 'The Challenge' },
    { id: 'challenge-hardware', label: 'Pressure Hardware Integration' },
    { id: 'challenge-functionality', label: 'Critical Functionality' },
    { id: 'the-solution', label: 'The Solution' },
    { id: 'solution-yocto', label: 'Yocto Foundation' },
    { id: 'solution-toradex', label: 'Toradex Ecosystem' },
    { id: 'solution-custom-layer', label: 'Custom Layer Creation' },
    { id: 'solution-device-tree', label: 'Device Tree Configuration' },
    { id: 'solution-iteration', label: 'Efficient Iteration' },
    { id: 'the-result', label: 'The Result: Time Savings' },
    { id: 'result-functionality', label: 'Achieved Functionality' },
    { id: 'result-demonstration', label: 'Successful Demonstration' },
    { id: 'conclusion', label: 'Conclusion' },
  ],
  'eye-wear': [
    { id: 'executive-summary', label: 'Executive Summary' },
    { id: 'challenge', label: 'The Challenge' },
    { id: 'solution', label: 'Our Solution' },
    { id: 'technical-details', label: 'Technical Details' },
    { id: 'results', label: 'Results & Impact' },
    { id: 'testimonial', label: 'Client Testimonial' },
    { id: 'conclusion', label: 'Conclusion' },
    {
      id: 'key-metrics',
      label: 'Key Metrics',
      children: [
        { id: 'latency-reduction', label: 'Latency Reduction: >60%' },
        { id: 'timeline', label: 'Timeline: 20 days' },
        { id: 'target', label: 'Target: <100ms' },
      ],
    },
  ],
  'qt-app': [
    { id: 'introduction', label: 'Introduction' },
    { id: 'boot-process', label: 'Understanding Boot Process' },
    { id: 'u-boot', label: 'U-Boot Optimization' },
    { id: 'kernel', label: 'Kernel Optimization' },
    { id: 'user-space', label: 'User Space & Init' },
    { id: 'qt-app', label: 'QT Application' },
    { id: 'hardware', label: 'Hardware Considerations' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'porting', label: 'Porting Considerations' },
    { id: 'conclusion', label: 'Conclusion' },
    {
      id: 'key-metrics',
      label: 'Key Metrics',
      children: [
        { id: 'target', label: 'Target: <10s boot' },
        { id: 'best-case', label: 'Best Case: 1.56s' },
        { id: 'platforms', label: 'Platforms: Exynos 4412, i.MX6Q' },
      ],
    },
  ],
  'arm': [
    { id: 'executive-summary', label: 'Executive Summary' },
    { id: 'target-market', label: '2. Target Market & Use Cases' },
    { id: 'technical-architecture', label: '3. Technical Architecture' },
    { id: 'performance-analysis', label: '4. Performance Analysis' },
    { id: 'comparative-analysis', label: '5. Comparative Analysis' },
    { id: 'conclusion', label: '6. Conclusion' },
    { id: 'technical-case-study', label: 'Technical Case Study: ARM-Based Multiviewer Player Development' },
  ],
  'som-soc': [
    { id: 'introduction', label: '1. Introduction' },
    { id: 'definitions', label: '1.1 Definitions' },
    { id: 'key-components', label: '2. Key Components' },
    { id: 'advantages', label: '2.1 Advantages & Disadvantages' },
    { id: 'comparative-analysis', label: '3. Comparative Analysis' },
    { id: 'use-cases', label: '3.1 Use Cases' },
    { id: 'examples', label: '3.2 Examples' },
    { id: 'decision-framework', label: '4. Decision Framework' },
    { id: 'conclusion', label: '4.1 Conclusion' },
  ],
  'qa': [
    { id: 'introduction', label: 'Introduction' },
    { id: 'hardware-dependency', label: 'Hardware Dependency' },
    { id: 'low-level-interactions', label: 'Low-Level Hardware Interactions' },
    { id: 'ota-risks', label: 'OTA Update Perils' },
    { id: 'timing-challenges', label: 'Asynchronous Timing' },
    { id: 'debuggingvisibility', label: 'Limited Debugging' },
    { id: 'conclusion', label: 'Conclusion' },
  ],
  'multiviewer': [
    { id: 'overview', label: 'Overview' },
    { id: 'ffmpeg', label: 'FFmpeg filter_complex' },
    { id: 'gstreamer', label: 'GStreamer compositor' },
    { id: 'ndi', label: 'NDI Multiview' },
    { id: 'feature', label: 'Feature Comparison' },
    { id: 'performance', label: 'Performance Analysis' },
    { id: 'decision', label: 'Decision Matrix' },
    { id: 'conclusion', label: 'Conclusion' },
  ],
  'g-streamer': [
    { id: 'section-1', label: 'The Challenge' },
    { id: 'section-2', label: `eByteLogic's Approach` },
    { id: 'section-3', label: 'Optimization Strategies' },
    { id: 'section-4', label: 'PlatformSpecific Techniques' },
    { id: 'section-5', label: 'Robust Performance' },
    { id: 'section-6', label: 'Conclusion' },
  ],
  'button-debounce': [
    { id: 'introduction', label: 'Introduction' },
    { id: 'comparison', label: 'Hardware vs Software Comparison' },
    { id: 'rc-filter', label: 'RC Low-Pass Filter' },
    { id: 'srlatch', label: 'SR Latch' },
    { id: 'dedicated-ics', label: 'Dedicated ICs' },
    { id: 'software-methods', label: 'Software Debounce Methods' },
    { id: 'arduino', label: 'Arduino Implementation' },
    { id: 'raspberry-pi', label: 'Raspberry Pi' },
    { id: 'considerations', label: 'Key Considerations' },
    { id: 'reliability', label: 'Maximizing Reliability' },
    { id: 'power', label: 'Power Consumption' },
    { id: 'cost', label: 'Cost Analysis' },
    { id: 'conclusion', label: 'Conclusion' },
  ],
  'rk3588-guide': [
    { id: 'overview', label: 'Overview' },
    { id: 'architecture', label: 'RK3588 Architecture' },
    { id: 'camera-config', label: 'Camera Configuration' },
    { id: 'isp-3a', label: 'ISP & 3A Processing' },
    { id: 'mpp-rga', label: 'MPP & RGA' },
    { id: 'ai-integration', label: 'AI Integration' },
    { id: 'development', label: 'Software Development' },
    { id: 'troubleshooting', label: 'Troubleshooting' },
  ],
};


const Sidebar = () => {
  const pathname = usePathname();
  const section = pathname?.split('/')[2];
  const items = tocData[section] || [];
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`lg:hidden fixed left-1 z-50 p-2 rounded-full shadow-md  ${scrollTop ? 'top-26' : 'top-64'}`}
        aria-label="Open Sidebar"
      >
        <FaAngleRight />
      </button>

      {/* Overlay when sidebar is open (mobile) */}
      {
        isOpen && (
          <div
            className="fixed inset-0 bg-opacity-40 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )
      }
      {/* <nav className="hidden lg:block sticky left-0 top-0 w-72 bg-white/95 backdrop-blur-sm border-r border-gray-200 z-40 overflow-y-auto transform -translate-x-full lg:translate-x-0 transition-transform duration-300">
        <div className="p-6">
          <h3 className="font-serif text-lg font-bold text-brand-navy mb-2">Table of Contents</h3>
          <div className="w-12 h-0.5 bg-brand-teal mb-8" />
          <ul className="space-y-3 text-sm">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block py-2 px-3 rounded-lg text-brand-charcoal hover:bg-gray-100 hover:text-brand-navy transition-colors"
                >
                  {item.label}
                </a>
                {item.children && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          className="block py-1 px-2 text-xs text-gray-600 hover:text-brand-navy transition-colors"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav> */}
      <nav
        className={`
          fixed top-0 left-0 h-full w-72 bg-white z-50 p-6 border-r border-gray-200 
          transform transition-transform duration-300 ease-in-out 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:static lg:translate-x-0 lg:block lg:h-fit lg:top-[98px]
        `}
      >
        {/* Close button on mobile */}
        <div className="flex justify-between items-center lg:hidden mb-4">
          <h3 className="font-serif text-lg font-bold text-brand-navy">Menu</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-black text-2xl font-bold"
            aria-label="Close Sidebar"
          >
            &times;
          </button>
        </div>

        <h3 className="hidden lg:block font-serif text-lg font-bold text-brand-navy mb-2">Table of Contents</h3>
        <div className="hidden lg:block w-12 h-0.5 bg-brand-teal mb-8" />

        <ul className="space-y-3 text-sm">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block py-2 px-3 rounded-lg text-brand-charcoal hover:bg-gray-100 hover:text-brand-navy transition-colors"
              >
                {item.label}
              </a>
              {item.children && (
                <ul className="ml-4 mt-2 space-y-2">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <a
                        href={`#${child.id}`}
                        className="block py-1 px-2 text-xs text-gray-600 hover:text-brand-navy transition-colors"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;

