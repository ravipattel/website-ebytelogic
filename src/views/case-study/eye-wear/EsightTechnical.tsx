import Image from "next/image";
import React from "react";
import Oled from '@/src/assets/images/caseStudy/oled.jpg'

const EsightTechnical = () => {
  return (
    <section id="technical-details" className="py-16 px-6 bg-slate-50">
      <div className="px-6 py-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Technical Details of the Latency Optimization
          </h2>
        </div>

        {/* Platform Architecture and Image */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Platform Architecture
            </h3>
            <div className="bg-white p-6 rounded-lg border border-slate-200 mb-6">
              <h4 className="font-semibold mb-3">
                NXP i.MX8MP Running Android OS
              </h4>
              <p className="text-gray-600 mb-4">
                The eSightEyewear smart glass was based on the{" "}
                <span className="text-black font-semibold">NXP i.MX 8M Plus (i.MX8MP)</span> application processor,
                featuring Arm Cortex-A53 and Cortex-M7 cores, a dedicated Neural
                Processing Unit (NPU), and a sophisticated Image Signal Processor
                (ISP).
              </p>
              <h5 className="font-medium mb-2">Key Hardware Features:</h5>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>MIPI CSI-2 interfaces for camera input</li>
                <li>MIPI DSI for display output</li>
                <li>Advanced Image Signal Processor (ISP)</li>
                <li>VPU and GPU for multimedia processing</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="font-semibold mb-3">Hardware Configuration</h4>
              <p className="text-gray-600 mb-4">
                The smart glass featured a <span className="text-black font-semibold">central camera fitted in the
                  center</span>, capturing the scene in front of the user, with the
                processed video displayed seamlessly across <span className="text-black font-semibold">two OLED displays, one
                  for each eye</span>.
              </p>
              <p className="text-gray-600 text-sm">
                OLED displays were chosen for their fast response times and high contrast ratios,
                making them suitable for applications where low latency and good image quality are
                important.
              </p>
            </div>
          </div>

          <div>
            <Image
              src={Oled}
              alt="Smart glasses with dual OLED displays and camera module"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-teal-800 mb-3">System Architecture Flow</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-slate-700">Camera Sensor Capture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-slate-700">MIPI CSI-2 Transmission</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-slate-700">ISP Processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">Android Framework</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">MIPI DSI to OLED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Android Framework Modifications and HAL Customizations */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Android Framework Modifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Android Framework Modifications
            </h3>
            <div className="space-y-4">
              <div className="tech-detail p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Camera Subsystem</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>Reduced buffering in Camera2 API stack</li>
                  <li>Optimized OnImageAvailableListener callback mechanism</li>
                  <li>Efficient handling of image formats and conversions</li>
                  <li>SurfaceTexture and SurfaceView management tuning</li>
                </ul>
              </div>

              <div className="tech-detail p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Graphics Pipeline</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>SurfaceFlinger composition strategy optimization</li>
                  <li>VSYNC signal synchronization tuning</li>
                  <li>Buffer management and queue optimization</li>
                  <li>Hardware vs. client composition selection</li>
                </ul>
                <p className="text-xs text-slate-600 mt-2">
                  VSYNC optimization reference:{" "}
                  <a
                    href="https://source.android.com/docs/core/graphics/implement-vsync"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Android VSYNC Implementation
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* HAL Customizations */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">HAL Customizations</h3>
            <div className="space-y-4">
              <div className="tech-detail p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Camera HAL</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>ISP configuration optimization for minimal processing delay</li>
                  <li>MIPI CSI-2 parameter tuning</li>
                  <li>DMA buffer configuration enhancements</li>
                  <li>Interrupt handling optimization</li>
                </ul>
              </div>

              <div className="tech-detail p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Display HAL</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>Gralloc HAL optimization for zero-copy buffer sharing</li>
                  <li>Hardware Composer (HWC) tuning for fastest path</li>
                  <li>Display refresh timing synchronization</li>
                  <li>Memory allocation optimization for i.MX8MP GPU</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mt-6">
              <p className="text-amber-800 text-sm">
                <span className="font-semibold">Key Achievement:</span> Created the leanest, most direct data path from camera capture to
                display output, minimizing software overhead and leveraging hardware capabilities of the i.MX8MP to
                the fullest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EsightTechnical;
