import React from 'react';
import { FaBatteryFull, FaBroadcastTower, FaCompressArrowsAlt, FaDollarSign, FaGraduationCap, FaMicrochip, FaNetworkWired, FaStream, FaTruck, FaTv, FaUsers } from 'react-icons/fa';

const ArmConclusion = () => {
  return (
    <section id="conclusion" className="px-4 md:px-6 py-16 bg-slate-50">
      <div className="md:px-6 py-8">
        <h2 className="font-serif text-4xl font-bold mb-8">
          6. Conclusion: Delivering a Viable Low-Cost Solution
        </h2>

        {/* Achievement Summary */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-6">
            6.1. Summary of Achievements
          </h3>
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Technical Successes</h4>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center gap-3">
                    <FaMicrochip className="text-amber-500" />
                    <span>Successful VPU-accelerated MPEG decoding implementation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaStream className="text-amber-500" />
                    <span>Real-time multi-stream handling on resource-constrained hardware</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaNetworkWired className="text-amber-500" />
                    <span>Comprehensive protocol support (UDP, SRT, HLS)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaTv className="text-amber-500" />
                    <span>Professional HDMI output integration</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Business Impact</h4>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center gap-3">
                    <FaDollarSign className="text-green-500" />
                    <span>95-98% cost reduction vs traditional solutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaBatteryFull className="text-green-500" />
                    <span>Power-efficient, fanless operation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCompressArrowsAlt className="text-green-500" />
                    <span>Compact, flexible deployment options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaUsers className="text-green-500" />
                    <span>Professional monitoring accessibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Suitability Analysis */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-6">
            6.2. Suitability for Resource-Constrained Environments
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FaGraduationCap className='text-blue-600' />
              </div>
              <h4 className="font-semibold mb-3">Educational Institutions</h4>
              <p className="text-sm text-gray-600">
                Budget-conscious media programs and training facilities can access professional monitoring capabilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FaBroadcastTower className='text-green-600' />
              </div>
              <h4 className="font-semibold mb-3">Small Broadcast Operations</h4>
              <p className="text-sm text-gray-600">
                Local TV stations, community media, and independent producers can deploy multiple units cost-effectively.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FaTruck className='text-purple-600' />
              </div>
              <h4 className="font-semibold mb-3">Mobile Production</h4>
              <p className="text-sm text-gray-600">
                Flypacks, production trucks, and temporary event setups benefit from compact, low-power monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* Future Enhancements */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-6">
            6.3. Future Enhancements and Potential
          </h3>
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Near-term Development</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• <span className='font-semibold'>NDI Protocol Support:</span> Integration with Network Device Interface for broader production compatibility</li>
                  <li>• <span className='font-semibold'>Web-based Configuration:</span> Enhanced UI for remote management and monitoring</li>
                  <li>• <span className='font-semibold'>Advanced Layout Control:</span> Customizable multiview arrangements and PIP support</li>
                  <li>• <span className='font-semibold'>Audio Monitoring:</span> Integrated audio level meters and monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Long-term Vision</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• <span className='font-semibold'>AV1 Codec Support:</span> Next-generation codec compatibility as hardware evolves</li>
                  <li>• <span className='font-semibold'>Edge AI Integration:</span> Machine learning for content analysis and automated monitoring</li>
                  <li>• <span className='font-semibold'>Distributed Management:</span> Centralized control of multiple units in large facilities</li>
                  <li>• <span className='font-semibold'>Cloud Integration:</span> Hybrid local/cloud monitoring solutions</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-4 bg-slate-50 rounded-lg">
              <p className="text-slate-700 text-center">
                <i className="fas fa-quote-left text-slate-400 mr-2"></i>
                The successful integration of hardware acceleration, lightweight ARM platforms, and support for diverse protocols culminates in a product that effectively balances cost, performance, and functionality for professional multiviewing applications.
                <i className="fas fa-quote-right text-slate-400 ml-2"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArmConclusion;
