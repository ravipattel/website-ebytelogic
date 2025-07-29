import React from 'react';

const ArmIntro = () => {
  return (
    <section id="introduction" className="py-16 px-6">
      <div className="px-6 py-8">
        <h2 className="font-serif text-4xl font-bold text-slate-900 mb-8">
          1. Introduction: Addressing the Need for Cost-Effective Multiviewing
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6">
              1.1. The Challenge
            </h3>
            <p className="text-gray-600 mb-4">
              The development of a multiview player for professional environments presents significant
              technical challenges, primarily centered around{' '}
              <strong>real-time decoding of multiple video streams on hardware with limited resources</strong>.
            </p>
            <p className="text-gray-600 mb-4">
              The core problem lies in efficiently processing and displaying several video feeds simultaneously
              without introducing excessive latency or overwhelming the {`system's`} computational capabilities,
              especially when targeting <strong>low-cost ARM-based System-on-Chips (SoCs)</strong>.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Key Constraints:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Limited CPU clock speed and memory bandwidth</li>
                <li>• Support for UDP, SRT, and HLS protocols</li>
                <li>• Real-time performance requirements</li>
                <li>• Professional-grade reliability</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6">
              1.2. The Solution
            </h3>
            <p className="text-gray-600 mb-4">
              The developed solution strategically leverages the <strong>hardware-accelerated Video Processing
                Units (VPUs)</strong> embedded within modern ARM SoCs, specifically:
            </p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h4 className="font-semibold">Odroid-C2</h4>
                <p className="text-sm text-gray-600">Amlogic S905 • Mali-450 MP3 GPU • ARM Cortex-A53 CPU</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h4 className="font-semibold">NanoPi5</h4>
                <p className="text-sm text-gray-600">Rockchip RK356x • Mali-G52 GPU • ARM Cortex-A55/A76</p>
              </div>
            </div>
            <p className="text-gray-600 mt-4">
              By utilizing the VPU, the system can decode multiple video streams concurrently without imposing a
              crippling load on the CPU, achieving <strong>low latency and high throughput</strong> on cost-effective
              ARM platforms{' '}
              <a
                href="https://forum.libreelec.tv/thread/12151-feedback-for-test-build-libreelec-rk3328/?pageNo=29"
                className="citation"
                target="_blank"
                rel="noopener noreferrer"
              >
                [25]
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArmIntro;
