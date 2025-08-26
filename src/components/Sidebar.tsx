"use client";

import { usePathname, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const tocData = {
  //case studies
  "reducing-wearable-display-latency": [
    { id: "challenge", label: "1. The Challenge" },
    {
      id: "tech-highlights",
      label: "2. Technical Highlights",
    },
    {
      id: "step-process",
      label: "3. Optimization Process",
    },
    {
      id: "results",
      label: "4. Impact & Results",
    },
    {
      id: "cta",
      label: "5. Call to Action",
    },
  ],
  "bypassing-proprietary-audio-pipeline": [
    { id: "challenge", label: "1. The Challenge" },
    { id: "tech-highlights", label: "2. Technical Highlights" },
    { id: "results", label: "3. Impact & Results" },
    { id: "cta", label: "4. Call to Action" },
  ],
  "broadcast-grade-sdi-encoder-decoder-with-sub100ms-latency": [
    { id: "challenge", label: "1. The Challenge" },
    { id: "tech-highlights", label: "2. Technical Highlights" },
    { id: "results", label: "3. Impact & Results" },
    { id: "cta", label: "4. Call to Action" },
  ],
  "u-boot-logo-for-IMX8MQ": [
    { id: "challenge", label: "1. The Challenge" },
    { id: "step-process", label: "2. Our Solution" },
    { id: "tech-highlights", label: "3. Technical Highlights" },
    { id: "results", label: "4. Impact & Results" },
    { id: "cta", label: "5. Call to Action" },
  ],
  "multi-platform-driver-development-uBoot-customization": [
    { id: "challenge", label: "1. The Challenge" },
    { id: "tech-highlights", label: "2. Technical Highlights" },
    { id: "results", label: "3. Impact & Results" },
    { id: "cta", label: "4. Call to Action" }
  ],
  "ndi-protocol-integration-inremote-recorder-player": [
    { id: "challenge", label: "1. The Challenge" },
    { id: "step-process", label: "2. Our Integrated NDI Solution" },
    { id: "tech-highlights", label: "3. Technical Highlights" },
    { id: "results", label: "4. Impact & Results" },
    { id: "cta", label: "5. Call to Action" }
  ],
  "rapid-lcd-touchscreen-bring-up-for-telematics-display": [
    { id: "challenge", label: "1. The Challenge" },
    { id: "tech-highlights", label: "2. Technical Highlights" },
    { id: "results", label: "3. Impact & Results" },
    { id: "flowchartPlusContent", label: "4. Bring-Up Workflow" },
    { id: "cta", label: "5. Call to Action" }
  ],
  "secure-mcu-firmware-upgrade-via-canopen": [
    { id: "challenge", label: "1. The Challenge" },
    { id: "tech-highlights", label: "2. Technical Highlights" },
    { id: "results", label: "3. Impact & Results" },
    { id: "flowchartPlusContent", label: "4. Firmware Update Flow" },
    { id: "cta", label: "5. Call to Action" }
  ],
  "hdmi-multiview-player": [
    { id: "challenge", label: "1. The Challenge" },
    { id: "tech-highlights", label: "2. Technical Highlights" },
    { id: "results", label: "3. Impact & Results" },
    { id: "flowchartPlusContent", label: "4. System Architecture" },
    { id: "compatibility", label: "5. Protocol Compatibility" },
    { id: "cta", label: "6. Call to Action" }
  ],
  "sub-100ms-latency-in-uav-video-streaming": [
    { "id": "challenge", "label": "1. The Challenge" },
    { "id": "tech-highlights", "label": "2. Technical Highlights" },
    { "id": "results", "label": "3. Impact & Results" },
    { "id": "flowchartPlusContent", "label": "4. Video Streaming Pipeline" },
    { "id": "cta", "label": "5. Call to Action" }
  ],
  "can-to-modbus-bridge": [
    { "id": "challenge", "label": "1. The Challenge" },
    { "id": "tech-highlights", "label": "2. Technical Highlights" },
    { "id": "compatibility", "label": "3. Configuration Table" },
    { "id": "results", "label": "4. Impact & Results" },
    { "id": "flowchartPlusContent", "label": "5. Protocol Bridging Solution" },
    { "id": "cta", "label": "6. Call to Action" }
  ],
  "yocto-migration-for-safety-panel": [
    { "id": "challenge", "label": "1. The Challenge" },
    { "id": "tech-highlights", "label": "2. Technical Highlights" },
    { "id": "results", "label": "3. Impact & Results" },
    { "id": "flowchartPlusContent", "label": "4. Migration Process" },
    { "id": "cta", "label": "5. Call to Action" }
  ],
  "yocto-buildroot-migration": [
    { "id": "challenge", "label": "1. The Challenge" },
    { "id": "tech-highlights", "label": "2. Technical Highlights" },
    { "id": "onlyFlowchart", "label": "3. Migration Solution" },
    { "id": "results", "label": "4. Impact & Results" },
    { "id": "cta", "label": "5. Call to Action" }
  ],
  "multi-master-i2c-problem-resolution": [
    { "id": "challenge", "label": "1. The Challenge" },
    { "id": "tech-highlights", "label": "2. Technical Highlights" },
    { "id": "flowchartPlusContent", "label": "3. Recovery Solution" },
    { "id": "results", "label": "4. Impact & Results" },
    { "id": "cta", "label": "5. Call to Action" }
  ],
  "multi-os-bsp-porting-and-boot-time-optimization": [
    { "id": "challenge", "label": "1. The Challenge" },
    { "id": "tech-highlights", "label": "2. Technical Highlights" },
    { "id": "flowchartPlusContent", "label": "3. Optimization Approach" },
    { "id": "results", "label": "4. Impact & Results" },
    { "id": "cta", "label": "5. Call to Action" }
  ],
  "unified-yocto-build-environment-for-multi-SoM-product-lines": [
    { "id": "challenge", "label": "1. The Challenge" },
    { "id": "tech-highlights", "label": "2. Technical Highlights" },
    { "id": "flowchartPlusContent", "label": "3. Optimization Approach" },
    { "id": "results", "label": "4. Impact & Results" },
    { "id": "cta", "label": "5. Call to Action" }
  ],

  //blogs
  "som-soc": [
    { id: "introduction", label: "1. Introduction" },
    { id: "definitions", label: "1.1 Definitions" },
    { id: "key-components", label: "2. Key Components" },
    { id: "advantages", label: "2.1 Advantages & Disadvantages" },
    { id: "comparative-analysis", label: "3. Comparative Analysis" },
    { id: "use-cases", label: "3.1 Use Cases" },
    { id: "examples", label: "3.2 Examples" },
    { id: "decision-framework", label: "4. Decision Framework" },
    { id: "conclusion", label: "4.1 Conclusion" },
  ],
  qa: [
    { id: "introduction", label: "Introduction" },
    { id: "hardware-dependency", label: "Hardware Dependency" },
    { id: "low-level-interactions", label: "Low-Level Hardware Interactions" },
    { id: "ota-risks", label: "OTA Update Perils" },
    { id: "timing-challenges", label: "Asynchronous Timing" },
    { id: "debuggingvisibility", label: "Limited Debugging" },
    { id: "conclusion", label: "Conclusion" },
  ],
  multiviewer: [
    { id: "overview", label: "Overview" },
    { id: "ffmpeg", label: "FFmpeg filter_complex" },
    { id: "gstreamer", label: "GStreamer compositor" },
    { id: "ndi", label: "NDI Multiview" },
    { id: "feature", label: "Feature Comparison" },
    { id: "performance", label: "Performance Analysis" },
    { id: "decision", label: "Decision Matrix" },
    { id: "conclusion", label: "Conclusion" },
  ],
  "g-streamer": [
    { id: "section-1", label: "The Challenge" },
    { id: "section-2", label: `eByteLogic's Approach` },
    { id: "section-3", label: "Optimization Strategies" },
    { id: "section-4", label: "PlatformSpecific Techniques" },
    { id: "section-5", label: "Robust Performance" },
    { id: "section-6", label: "Conclusion" },
  ],
  "button-debounce": [
    { id: "introduction", label: "Introduction" },
    { id: "comparison", label: "Hardware vs Software Comparison" },
    { id: "rc-filter", label: "RC Low-Pass Filter" },
    { id: "srlatch", label: "SR Latch" },
    { id: "dedicated-ics", label: "Dedicated ICs" },
    { id: "software-methods", label: "Software Debounce Methods" },
    { id: "arduino", label: "Arduino Implementation" },
    { id: "raspberry-pi", label: "Raspberry Pi" },
    { id: "considerations", label: "Key Considerations" },
    { id: "reliability", label: "Maximizing Reliability" },
    { id: "power", label: "Power Consumption" },
    { id: "cost", label: "Cost Analysis" },
    { id: "conclusion", label: "Conclusion" },
  ],
  "rk3588-guide": [
    { id: "overview", label: "Overview" },
    { id: "architecture", label: "RK3588 Architecture" },
    { id: "camera-config", label: "Camera Configuration" },
    { id: "isp-3a", label: "ISP & 3A Processing" },
    { id: "mpp-rga", label: "MPP & RGA" },
    { id: "ai-integration", label: "AI Integration" },
    { id: "development", label: "Software Development" },
    { id: "troubleshooting", label: "Troubleshooting" },
  ],
};

const Sidebar = () => {
  const pathname = usePathname();
  const section = pathname?.split("/")[2];
  const items = tocData[section] || [];
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backTarget = pathname?.startsWith("/case-study")
    ? "/case-study"
    : "/blogs";

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`lg:hidden fixed left-1 z-50 p-2 rounded-full shadow-md  ${scrollTop ? "top-26" : "top-64"
          }`}
        aria-label="Open Sidebar"
      >
        <FaAngleRight />
      </button>

      {/* Overlay when sidebar is open (mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <nav
        className={`
          fixed ${scrollTop
            ? "top-20 md:top-23"
            : "min-[606px]:top-30 sm:top-30 md:top-36"
          }  left-0 h-full w-72 bg-white z-50 p-6 border-r border-gray-200 
          transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:static lg:translate-x-0 lg:block lg:h-fit
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
        <h3 className="hidden lg:block font-serif text-lg font-bold text-brand-navy mb-2">
          Table of Contents
        </h3>

        {/* <div className="hidden lg:block w-12 h-0.5 bg-brand-teal mb-8" /> */}

        <ul className="space-y-3 text-sm pt-5">
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
