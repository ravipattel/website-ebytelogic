'use client';

import { usePathname } from 'next/navigation';
import React from 'react';


const tocData = {
  nextologies: [
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
  spg: [
    { id: 'core-task', label: '1. Core Task Overview' },
    { id: 'ndi-support', label: '2. NDI Support with GStreamer' },
    { id: 'gui-stability', label: '3. GUI Stability Solutions' },
    { id: 'pipeline-considerations', label: '4. Pipeline Considerations' },
    { id: 'audio-enhancements', label: '5. Audio Processing' },
    { id: 'deployment', label: '6. Deployment & Environment' },
  ],
  yocto: [
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
};


const CaseStudySidebar = () => {
  const pathname = usePathname();
  const section = pathname?.split('/')[2];
  const items = tocData[section] || [];

  return (
    <nav className="hidden lg:block sticky left-0 top-0 w-72 bg-white/95 backdrop-blur-sm border-r border-gray-200 z-40 overflow-y-auto transform -translate-x-full lg:translate-x-0 transition-transform duration-300">
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
    </nav>
  );
};

export default CaseStudySidebar;

