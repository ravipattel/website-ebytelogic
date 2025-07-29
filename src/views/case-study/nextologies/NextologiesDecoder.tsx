import Image from 'next/image';

import React from 'react';
import { BsBadgeCcFill } from 'react-icons/bs';
import { FaAd, FaCheck, FaClock, FaCogs, FaDatabase, FaPaintBrush, FaRecordVinyl, FaSyncAlt, FaTv } from 'react-icons/fa';

import Remote from '@/src/assets/images/caseStudy/remote.jpg'

const NextologiesDecoder = () => {
  return (
    <section id="decoder-capabilities" className="px-6">
      <div className='bg-gray-50 p-6 py-10'>
        <h2 className="font-serif text-4xl font-bold text-brand-navy mb-12 text-center">Decoder Capabilities</h2>

        {/* Low Latency Performance */}
        <div id="decoder-latency" className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h3 className="font-serif text-3xl font-semibold text-primary mb-6">Low Latency Performance</h3>
              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <div className="text-4xl text-red-400 mb-2">&lt;100 msec</div>
                <p className="text-brand-charcoal font-medium">Receive to SDI Out Latency</p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                The complementary x86 server-based SDI Decoder from Nextologies is engineered to excel in converting incoming IP video streams back to SDI signals with minimal delay. A key performance characteristic is achieving
                <span className='font-semibold'> latency from IP stream receive to SDI output of below 100 milliseconds</span>.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold">Critical Applications:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600"><FaCheck className='text-primary' />Contribution and return-path scenarios</li>
                  <li className="flex items-center gap-2 text-gray-600"><FaCheck className='text-primary' />Live monitoring with real-time feedback</li>
                  <li className="flex items-center gap-2 text-gray-600"><FaCheck className='text-primary' />Interactive video systems</li>
                  <li className="flex items-center gap-2 text-gray-600"><FaCheck className='text-primary' />Multi-site production synchronization</li>
                </ul>
              </div>
            </div>
            <div className="lg:order-1">
              <Image
                src={Remote}
                alt="Broadcast decoder equipment"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Precision Lip Sync Accuracy */}
        <div id="lip-sync" className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-serif text-3xl font-bold text-brand-navy mb-6">Precision Lip Sync Accuracy</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <p className="text-gray-600 leading-relaxed mb-6">
                  <span className='text-black font-semibold'>Precision lip sync</span> is a critical aspect of high-quality video presentation, and
                  {` Nextologies' `} x86 server-based SDI Decoder is designed to guarantee this through the implementation of advanced audio-video synchronization algorithms.
                </p>
                <div className="p-6 mb-6">
                  <div className="text-2xl text-primary mb-2">±10 milliseconds</div>
                  <p className="font-medium">Lip Sync Accuracy</p>
                  <p className="text-sm mt-2">Well within perceptual thresholds for virtually undetectable discrepancies</p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  This fine-tuned synchronization is maintained consistently, even under varying network conditions that might introduce jitter or packet reordering. The <span className='text-black font-semibold'>±10 msec accuracy</span> meets or exceeds professional broadcast standards, ensuring audio consistently aligns perfectly with video.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#2b2b2b10] p-8 rounded-lg flex flex-col items-center gap-4">
                  <FaSyncAlt className='text-secondary text-3xl' />
                  <h4 className="font-semibold text-secondary mb-2">Advanced Synchronization</h4>
                  <p className="text-sm">Robust algorithms maintain precision under varying network conditions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VANC Data Support Decoder */}
        <div id="vanc-support-decoder" className="mb-16">
          <h3 className="font-serif text-3xl font-bold text-brand-navy mb-8">Comprehensive VANC Data Support</h3>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-gray-600  leading-relaxed mb-8">
              The Nextologies x86 server-based SDI Decoder provides <span className='text-black font-semibold'>full support for the preservation and output of VANC (Vertical Ancillary Data)</span> embedded within the incoming IP stream. This end-to-end VANC data handling capability ensures that broadcasters do not lose valuable information during the transmission and decoding process.
              <a href="https://www.nextologies.com/nextologies-takes-home-three-awards-at-nab-show-2023.html" className="text-primary hover:underline" target="_blank">[327]</a>
              <a href="https://pub.smpte.org/latest/eg43/eg0043-2009.pdf" className="text-primary hover:underline" target="_blank">[360]</a>.
            </p>

            {/* Mermaid Diagram */}
            <div className="mb-8">
              <h4 className="font-semibold text-brand-navy mb-4 text-center">VANC Data Flow Architecture</h4>
              <div className="mermaid-container">
                <div className="mermaid-controls">
                  <button className="mermaid-control-btn zoom-in" title="Zoom In"><i className="fas fa-search-plus"></i></button>
                  <button className="mermaid-control-btn zoom-out" title="Zoom Out"><i className="fas fa-search-minus"></i></button>
                  <button className="mermaid-control-btn reset-zoom" title="Reset Zoom"><i className="fas fa-expand-arrows-alt"></i></button>
                  <button className="mermaid-control-btn fullscreen" title="Fullscreen View"><i className="fas fa-expand"></i></button>
                </div>
                <div className="mermaid">
                  graph LR
                  {` A["IP Stream Input"] --> B["VANC Data Extraction"]
                    B --> C["Closed Captions Line 21, CEA-608/708"]
                    B --> D["SCTE-35 Signals"]
                    B --> E["Timecode Data"]
                    B --> F["Other Ancillary Data"]
                    C --> G["SDI Output"]
                    D --> G
                    E --> G
                    F --> G`}
                </div>
              </div>
            </div>

            {/* Supported Metadata and Downstream Integration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-brand-navy mb-4">Supported Metadata Types:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600"><BsBadgeCcFill className='text-primary' />Closed captions (Line 21, CEA-608, CEA-708)</li>
                  <li className="flex items-center gap-2 text-gray-600"><FaAd className='text-primary' /> SCTE-35 signals for program insertion</li>
                  <li className="flex items-center gap-2 text-gray-600"><FaClock className='text-primary' />Timecode for synchronization</li>
                  <li className="flex items-center gap-2 text-gray-600"><FaDatabase className='text-primary' />Other ancillary information</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy mb-4">Downstream Integration:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600"><FaTv className='text-primary' />Vision mixers</li>
                  <li className="flex items-center gap-2 text-gray-600"><FaPaintBrush className='text-primary' />Graphics systems</li>
                  <li className="flex items-center gap-2 text-gray-600"><FaRecordVinyl className='text-primary' /> Recording devices</li>
                  <li className="flex items-center gap-2 text-gray-600"><FaCogs className='text-primary' />Other broadcast equipment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextologiesDecoder;
