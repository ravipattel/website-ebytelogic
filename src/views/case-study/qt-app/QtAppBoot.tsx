'use client'
import Image from "next/image";

import { FaArrowsAlt, FaExpand, FaSearchMinus, FaSearchPlus } from "react-icons/fa";

import MermaidQTPng from '@/src/assets/images/caseStudy/mermaidQt.png'

const QtAppBoot = () => {

  return (
    <section id="boot-process" className="py-16 px-6 bg-slate-100">
      <div className="px-6 py-8">
        <h2 className="font-serif text-3xl font-bold mb-8">
          Understanding the Boot Process
        </h2>

        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold mb-6">
            Boot Sequence on ARM Platforms
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The boot sequence on ARM-based embedded Linux systems follows a multi-stage sequence. Understanding this
            sequence is crucial for identifying optimization opportunities.
          </p>

          {/* Mermaid Diagram: Boot Sequence */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8 shadow-sm">
            <h4 className="font-semibold mb-4">Boot Sequence Timeline</h4>
            <div className="w-full border border-slate-200 rounded-2xl p-6">
              <div className="flex flex-wrap justify-end gap-3 mb-6">
                <button className="shadow-md p-3 cursor-pointer hover:bg-gray-50" title="放大">
                  <FaSearchPlus className="text-gray-600" />
                </button>
                <button className="shadow-md p-3 cursor-pointer hover:bg-gray-50" title="缩小">
                  <FaSearchMinus className="text-gray-600" />
                </button>
                <button className="shadow-md p-3 cursor-pointer hover:bg-gray-50" title="重置">
                  <FaArrowsAlt className="text-gray-600" />
                </button>
                <button className="shadow-md p-3 cursor-pointer hover:bg-gray-50" title="全屏查看">
                  <FaExpand className="text-gray-600" />
                </button>
              </div>
              {/* timeline
                title "ARM Linux Boot Process"
                "BootROM" : "Hardcoded in SoC" : "Basic hardware init" : "12ms typical"
                "SPL" : "Secondary Program Loader" : "DRAM initialization" : "Fast boot modes"
                "U-Boot" : "Main bootloader" : "Peripheral initialization" : "Kernel loading"
                "Linux Kernel" : "Hardware probing" : "Driver loading" : "Rootfs mount"
                "User Space" : "Init system" : "Service startup" : "QT Application" */}
              <Image src={MermaidQTPng} alt="MermaidQTPng" className="mx-auto" />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="font-serif text-xl font-bold mb-6">Boot Time Measurement Techniques</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
              <h4 className="font-semibold mb-3">Software Methods</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Serial console logs with timestamps</li>
                <li>• U-Boot bootstage reports</li>
                <li>• Systemd-analyze for user space</li>
                <li>• Initcall_debug kernel option</li>
              </ul>
            </div>
            <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
              <h4 className="font-semibold mb-3">Hardware Methods</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• GPIO pin toggling</li>
                <li>• Logic analyzer measurements</li>
                <li>• Oscilloscope timing</li>
                <li>• Hardware timer access</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QtAppBoot;
