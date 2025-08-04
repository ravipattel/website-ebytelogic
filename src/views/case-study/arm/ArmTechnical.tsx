import Image from 'next/image';

import React from 'react';
import { FaGlobe, FaNetworkWired } from 'react-icons/fa';
import { FaShield } from 'react-icons/fa6';

import NanoPi5 from '@/src/assets/images/blogs/blogDetails/nanopi.jpg'
import Gstreamer from '@/src/assets/images/caseStudy/gstreamer.webp'

const ArmTechnical = () => {
  return (
    <section id="technical-architecture" className="px-4 md:px-6 py-16">
      <div className="md:px-6 py-8">
        <h2 className="font-serif text-4xl font-bold text-slate-900 mb-8">
          3. Technical Architecture and Design
        </h2>

        {/* Hardware Platform Comparison */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-6">3.1. Hardware Platform Comparison</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Odroid-C2 Card */}
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="flex items-center mb-4">
                <img
                  src="https://kimi-web-img.moonshot.cn/img/www.cecchi.shop/4da3ad418de739365dd073d1877556a38e614e0e.2"
                  alt="Odroid-C2 single board computer"
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h4 className="font-semibold">Odroid-C2</h4>
                  <p className="text-sm text-gray-600">Amlogic S905 SoC</p>
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Quad-core ARM Cortex-A53 CPU</li>
                <li>• ARM Mali-450 MP3 GPU</li>
                <li>• Dedicated VPU for hardware decoding</li>
                <li>• HDMI 2.0a output (4K capable)</li>
                <li>• Gigabit Ethernet, USB, GPIO</li>
              </ul>
            </div>

            {/* NanoPi5 Card */}
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="flex items-center mb-4">
                <Image
                  src={NanoPi5}
                  alt="NanoPi5 single board computer"
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h4 className="font-semibold">NanoPi5</h4>
                  <p className="text-sm text-gray-600">Rockchip RK356x SoC</p>
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• ARM Cortex-A55/A76 CPU combination</li>
                <li>• Mali-G52 GPU</li>
                <li>• Enhanced VPU capabilities</li>
                <li>• HDMI 2.0 output (4Kp60)</li>
                <li>• Advanced codec support including AV1</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Technology */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-6">3.2. Core Technology: Hardware-Accelerated MPEG Decoding</h3>
          <div className="bg-gradient-to-r from-slate-50 to-white p-8 rounded-lg border border-slate-200">
            <p className="text-slate-700 mb-4">
              The cornerstone of this multiview {`player's`} performance is the utilization of <strong>dedicated Video Processing Units (VPUs)</strong> present in both SoCs. VPUs are specialized co-processors designed specifically for video encoding and decoding tasks, offering significantly higher efficiency and lower power consumption compared to software-based decoding.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {/* VPU Offloading Benefits */}
              <div>
                <h4 className="font-semibold mb-3">VPU Offloading Benefits</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Entropy decoding acceleration</li>
                  <li>• Inverse quantization and IDCT</li>
                  <li>• Motion compensation processing</li>
                  <li>• Reduced CPU load by &gt;60%</li>
                </ul>
              </div>

              {/* Performance Impact */}
              <div>
                <h4 className="font-semibold mb-3">Performance Impact</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Smooth multi-stream playback</li>
                  <li>• Minimized latency</li>
                  <li>• Power-efficient operation</li>
                  <li>• Professional-grade reliability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Software Pipeline */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-6">3.3. Software Pipeline: GStreamer Architecture</h3>
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <Image
              src={Gstreamer}
              alt="GStreamer multimedia framework pipeline architecture"
              className="mx-auto object-cover rounded-lg mb-8"
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Input Processing */}
              <div>
                <h4 className="font-semibold mb-3">Input Processing</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Network stream reception</li>
                  <li>• Protocol parsing (UDP, SRT, HLS)</li>
                  <li>• RTP depayloading</li>
                  <li>• Stream demuxing</li>
                </ul>
              </div>

              {/* Decoding & Processing */}
              <div>
                <h4 className="font-semibold mb-3">Decoding &amp; Processing</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• VPU-accelerated decoding</li>
                  <li>• Frame scaling and composition</li>
                  <li>• Multiview layout management</li>
                  <li>• Zero-copy buffer optimization</li>
                </ul>
              </div>

              {/* Output Rendering */}
              <div>
                <h4 className="font-semibold mb-3">Output Rendering</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• HDMI frame buffer output</li>
                  <li>• Display synchronization</li>
                  <li>• Audio embedding (if supported)</li>
                  <li>• Low-latency rendering</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Streaming Protocols */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-6">3.4. Supported Streaming Protocols</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* UDP Protocol Card */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FaNetworkWired className='text-primary' />
              </div>
              <h4 className="font-semibold mb-2">UDP</h4>
              <p className="text-sm text-gray-600 mb-3">
                Low-latency, connectionless transport ideal for live video where minor packet loss is acceptable for speed.
              </p>
              <div className="text-xs text-slate-500">Latency: &lt;100ms</div>
            </div>

            {/* SRT Protocol Card */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FaShield className='text-green-600' />
              </div>
              <h4 className="font-semibold mb-2">SRT</h4>
              <p className="text-sm text-gray-600 mb-3">
                Secure Reliable Transport offering robust error correction and low-latency transmission over unpredictable networks.
              </p>
              <div className="text-xs text-slate-500">Latency: 120ms-1s</div>
            </div>

            {/* HLS Protocol Card */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FaGlobe className='text-purple-600' />
              </div>
              <h4 className="font-semibold mb-2">HLS</h4>
              <p className="text-sm text-gray-600 mb-3">
                HTTP Live Streaming for adaptive bitrate delivery, widely compatible with web infrastructure and CDNs.
              </p>
              <div className="text-xs text-slate-500">Latency: 2-30s (LL-HLS: 2-5s)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArmTechnical;
