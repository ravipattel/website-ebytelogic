import React from 'react';
import { FaChartLine, FaLayerGroup, FaMicrochip, FaWeightHanging } from 'react-icons/fa';

const QtAppConclusion = () => {
  return (
    <section id="conclusion" className="px-4 md:px-6 py-16 bg-slate-100">
      <div className="md:px-6 py-8">
        <h2 className="font-serif text-3xl font-bold mb-8">
          Conclusion and Key Takeaways
        </h2>

        {/* Achieving Sub-10-Second Boot Times */}
        <div className="bg-white border-l-3 border-l-primary p-8 rounded-xl">
          <div className="mb-8">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Achieving Sub-10-Second Boot Times
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The journey to sub-10-second boot times for embedded Linux systems with QT applications requires a systematic
              approach that addresses each component of the boot process. Through careful optimization of U-Boot, Linux
              kernel, root filesystem, init system, and the QT application itself, significant improvements can be
              achieved.
            </p>
          </div>

          {/* Critical Success Factors and Proven Results */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Critical Success Factors */}
            <div>
              <h4 className="font-semibold mb-4">Critical Success Factors</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <FaChartLine className='mt-1 text-primary' />
                  <div>
                    <span className='font-semibold'>Measurement First:</span> Accurate boot time measurement is essential before optimization
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaLayerGroup className='mt-1 text-primary' />
                  <div>
                    <span className='font-semibold'>Holistic Approach:</span> Optimize all layers from bootloader to application
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaMicrochip className='mt-1 text-primary' />
                  <div>
                    <span className='font-semibold'>Platform Awareness:</span> Leverage hardware-specific features like Falcon Mode
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaWeightHanging className='mt-1 text-primary' />
                  <div>
                    <span className='font-semibold'>Minimalism:</span> Remove everything not essential for the application
                  </div>
                </li>
              </ul>
            </div>

            {/* Proven Results */}
            <div>
              <h4 className="font-semibold mb-4">Proven Results</h4>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 border border-green-200 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-green-700">Best Case (i.MX6Q)</span>
                    <span className="text-sm font-bold text-green-800">1.56s</span>
                  </div>
                  <p className="text-xs text-green-600 mt-1">Automotive cluster demo with comprehensive optimization</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-700">Typical Improvement</span>
                    <span className="text-sm font-bold text-blue-800">80-90%</span>
                  </div>
                  <p className="text-xs text-blue-600 mt-1">From 20+ seconds to under 10 seconds</p>
                </div>
                <div className="p-3 bg-purple-50 border border-purple-200 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-purple-700">Platform Flexibility</span>
                    <span className="text-sm font-bold text-purple-800">Multiple OS</span>
                  </div>
                  <p className="text-xs text-purple-600 mt-1">Linux distros and Android adaptable</p>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Roadmap */}
          <div className="p-6">
            <h4 className="font-serif text-xl font-bold mb-4">Implementation Roadmap</h4>
            <ol className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                <div>Measure current boot time and profile each stage</div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                <div>Optimize U-Boot: enable Falcon Mode, remove unused features</div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                <div>Minimize kernel: strip down configuration, optimize compression</div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                <div>Create minimal rootfs: use Buildroot/Yocto, remove unnecessary packages</div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">5</span>
                <div>Optimize init system: use custom init or systemd tuning</div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">6</span>
                <div>Optimize QT application: static linking, Qt Quick Compiler, lazy loading</div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">7</span>
                <div>Leverage hardware: use eMMC, GPU acceleration, optimized device tree</div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QtAppConclusion;
