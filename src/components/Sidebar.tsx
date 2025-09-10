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
  "low-cost-android-ott-tv-box-development": [
    { "id": "challenge", "label": "1. The Challenge" },
    { "id": "tech-highlights", "label": "2. Key Technical Highlights" },
    { "id": "flowchartSecondary", "label": "3. Optimization Approach" },
    { "id": "results", "label": "4. Impact & Results" },
    { "id": "cta", "label": "5. Call to Action" }
  ],

  //blogs
  "av-lip-sync-in-2025": [
    { "id": "introduction", "label": "1. Introduction" },
    { "id": "qa", "label": "2. Lip-Sync Sync Deep Dive" },
    { "id": "conclusion", "label": "3. Conclusion" }
  ],
  "SRT-vs-RIST-vs-RTMP": [
    { "id": "introduction", "label": "1. Introduction" },
    { "id": "qa", "label": "2. Protocol Wars Deep Dive" },
    { "id": "conclusion", "label": "3. Conclusion" }
  ],
  "the-future-of-embedded-systems": [
    { "id": "introduction", "label": "1. Introduction" },
    { "id": "qa", "label": "2. Market Growth" },
    { "id": "trends", "label": "3. 7 Key Trends" },
    { "id": "challenges", "label": "4. Challenges" },
    { "id": "case-study", "label": "5. Case Studies" },
    { "id": "impact", "label": "6. Impact" },
    { "id": "conclusion", "label": "3. Conclusion" }
  ],
  "ndi-in-hybrid-ip-sdi-workflows": [
    { "id": "introduction", "label": "1. Introduction" },
    { "id": "qa", "label": "2. Understanding the Hybrid Broadcast Landscape" },
    { "id": "trends", "label": "4. Key Benefits of NDI in Hybrid Workflows" },
    { "id": "challenges", "label": "5. Common Challenges Product Teams Face with NDI" },
    { "id": "scenarios", "label": "6. NDI Integration Scenarios & Best Practices" },
    { "id": "conclusion", "label": "7. Conclusion & Call-to-Action" }
  ]
  ,
  "buildroot-vs-yocto-for-video-devices": [
    { "id": "introduction", "label": "1. Introduction" },
    { "id": "qa", "label": "2. The Embedded Video Device Challenge & Buildroot at a Glance" },
    { "id": "scenarios", "label": "4. Pragmatic Scenarios: Which to Choose?" },
    { "id": "case-study", "label": "5. Case Study Snapshot: eByteLogic Experience" },
    { "id": "recommendations", "label": "6. Key Recommendations" },
    { "id": "conclusion", "label": "7. Conclusion" }
  ]

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
