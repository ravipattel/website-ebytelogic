import React from 'react';
import { FaBolt, FaCheck, FaCogs, FaCompressArrowsAlt, FaDollarSign, FaIndustry, FaNetworkWired, FaPercentage, FaTimes } from 'react-icons/fa';

const ArmComparative = () => {
  return (
    <section id="comparative-analysis" className="py-16 px-6">
      <div className="px-6 py-8">
        <h2 className="font-serif text-4xl font-bold mb-8">
          5. Comparative Analysis and Unique Selling Propositions
        </h2>

        {/* Cost-Effectiveness Analysis */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-6">
            5.1. Cost-Effectiveness Analysis
          </h3>
          <div className="bg-white p-6 rounded-lg border border-slate-200 mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaDollarSign className="text-green-600 text-2xl" />
                </div>
                <h4 className="font-semibold mb-2">ARM-Based Solution</h4>
                <div className="text-3xl font-semibold text-green-600 mb-1">$39-55</div>
                <p className="text-sm text-gray-600">Odroid-C2 / NanoPi5 BOM</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaIndustry className="text-amber-600 text-2xl" />
                </div>
                <h4 className="font-semibold mb-2">Traditional Hardware</h4>
                <div className="text-3xl font-semibold text-amber-600 mb-1">$1,095-4,020</div>
                <p className="text-sm text-gray-600">
                  Kramer, Decimator, Datapath{' '}
                  <a href="https://www.shi.com/product/45347405/Kramer-MV-4X-Multiviewer-system" className="text-primary hover:underline" target="_blank">
                    [560]
                  </a>{' '}
                  <a href="https://www.markertek.com/category/Multiviewers?Display=All&srsltid=AfmBOoq979NrGJJIzXojtLOy1D03jSbHWIwEC1mISWN6uu9U-KGb1_C5" className="text-primary hover:underline" target="_blank">
                    [103]
                  </a>
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPercentage className="text-blue-600 text-2xl" />
                </div>
                <h4 className="font-semibold mb-2">Cost Reduction</h4>
                <div className="text-3xl font-semibold text-blue-600 mb-1">95-98%</div>
                <p className="text-sm text-gray-600">Order-of-magnitude savings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hardware Acceleration vs Software-Based Solutions */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-6">
            5.2. Hardware Acceleration vs Software-Based Solutions
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">ARM VPU Approach</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaCheck className='text-green-500' />
                  <div>
                    <span className="text-slate-700">Power-efficient dedicated VPU</span>
                    <p className="text-xs text-slate-500">Specialized hardware decoding</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck className='text-green-500' />
                  <div>
                    <span className="text-slate-700">Fanless operation</span>
                    <p className="text-xs text-slate-500">Compact, reliable design</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck className='text-green-500' />
                  <div>
                    <span className="text-slate-700">Low power consumption</span>
                    <p className="text-xs text-slate-500">Ideal for always-on applications</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck className='text-green-500' />
                  <div>
                    <span className="text-slate-700">Cost-effective deployment</span>
                    <p className="text-xs text-slate-500">Under $100 total BOM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Software-Based Alternatives</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaTimes className='text-red-500' />
                  <div>
                    <span className="text-slate-700">High-performance PC required</span>
                    <p className="text-xs text-slate-500">NVIDIA GPU + powerful CPU{' '}
                      <a href="https://www.stirlitzmedia.com/products/ip-multiviewer/" className="text-primary hover:underline" target="_blank">[630]</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaTimes className='text-red-500' />
                  <div>
                    <span className="text-slate-700">Active cooling needed</span>
                    <p className="text-xs text-slate-500">Noise and reliability concerns</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaTimes className='text-red-500' />
                  <div>
                    <span className="text-slate-700">Higher power consumption</span>
                    <p className="text-xs text-slate-500">Increased operational costs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaTimes className='text-red-500' />
                  <div>
                    <span className="text-slate-700">Substantial upfront investment</span>
                    <p className="text-xs text-slate-500">$1,000+ for capable hardware</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lightweight and Flexible Deployment */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-6">
            5.3. Lightweight and Flexible Deployment
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FaCompressArrowsAlt className="text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Compact Size</h4>
              <p className="text-sm text-gray-600">Credit-card sized SBCs for space-constrained environments</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FaBolt className="text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Low Power</h4>
              <p className="text-sm text-gray-600">PoE or simple DC adapter support, fanless operation</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FaNetworkWired className="text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">IP-Centric</h4>
              <p className="text-sm text-gray-600">Standard Ethernet connectivity, no specialized video cards</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FaCogs className="text-amber-600" />
              </div>
              <h4 className="font-semibold mb-2">Linux-Based</h4>
              <p className="text-sm text-gray-600">Remote management via SSH, flexible configuration</p>
            </div>
          </div>
        </div>

        {/* Modern IP Streaming Protocol Support */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-6">
            5.4. Modern IP Streaming Protocol Support
          </h3>
          <div className="bg-gradient-to-r from-slate-50 to-white p-8 rounded-lg border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4">SRT Advantages</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Secure Reliable Transport over public internet</li>
                  <li>• Error recovery and congestion control</li>
                  <li>• Low-latency remote contribution</li>
                  <li>• Ideal for field reporting and events</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">HLS Compatibility</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Adaptive bitrate for OTT delivery</li>
                  <li>• HTTP-based CDN compatibility</li>
                  <li>• Wide device support</li>
                  <li>• LL-HLS for reduced latency</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">UDP Performance</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Minimal protocol overhead</li>
                  <li>• Sub-100ms latency potential</li>
                  <li>• Connectionless operation</li>
                  <li>• RTP encapsulation support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArmComparative;
