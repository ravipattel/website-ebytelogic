import Image from 'next/image';

import React from 'react';
import { FaAd, FaClock, FaClosedCaptioning, FaTachometerAlt, FaTv } from 'react-icons/fa';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { LuWrench } from 'react-icons/lu';
import { MdOutlineBackup } from 'react-icons/md';

import Studio from '@/src/assets/images/caseStudy/studio.jpg'

const NextologiesEncoder = () => {
  return (
    <section id="encoder-capabilities" className="py-16 bg-white">
      <div className="px-6">
        <div>
          <h2 className="font-serif text-4xl font-bold text-brand-navy mb-12 text-center">Encoder Capabilities</h2>

          {/* Ultra-Low Latency */}
          <div id="ultra-low-latency" className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-serif text-3xl font-bold text-brand-navy mb-6">Ultra-Low Latency Performance</h3>
                <div className="py-6 rounded-lg mb-6">
                  <div className="text-4xl text-red-400 mb-2">&lt;100 msec</div>
                  <p className="text-gray-600 font-medium">SDI to Streaming Latency</p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {` Nextologies' `} x86 server-based SDI Encoder is meticulously engineered to achieve
                  <span className='font-semibold'> ultra-low latency</span> during the critical conversion process of SDI signals to various
                  streaming formats, consistently demonstrating total latency of
                  <span className='font-semibold'> below 100 milliseconds from SDI input to streaming output</span>.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-brand-navy">Key Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/5 text-primary px-3 py-1 rounded-full text-sm">Live Sports Broadcasting</span>
                    <span className="bg-primary/5 text-primary px-3 py-1 rounded-full text-sm">Live News Reporting</span>
                    <span className="bg-primary/5 text-primary px-3 py-1 rounded-full text-sm">Remote Production (REMI)</span>
                    <span className="bg-primary/5 text-primary px-3 py-1 rounded-full text-sm">Interactive Streaming</span>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={Studio}
                  alt="Professional broadcast studio equipment"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Stability and Reliability */}
          <div id="stability-reliability" className="mb-16">
            <h3 className="font-serif text-3xl font-bold text-brand-navy mb-8">Stability and Reliability</h3>
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                The <span className='text-black font-semibold'>stability and reliability</span> of {`Nextologies'`} x86 server-based SDI Encoder are paramount, especially given its deployment in mission-critical professional broadcast environments.
                The encoder is designed to operate <span className='text-black font-semibold'>continuously and consistently under demanding conditions</span>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <IoShieldCheckmarkSharp className='text-primary'/>
                    <h4 className="font-semibold text-brand-navy">Fault Tolerance</h4>
                  </div>
                  <p className="text-sm text-gray-600">Meticulous software engineering with graceful error handling</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <MdOutlineBackup className='text-primary'/>
                    <h4 className="font-semibold text-brand-navy">Redundancy Options</h4>
                  </div>
                  <p className="text-sm text-gray-600">Failover mechanisms to backup systems for uninterrupted service</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <LuWrench className='text-primary'/>
                    <h4 className="font-semibold text-brand-navy">Error Correction</h4>
                  </div>
                  <p className="text-sm text-gray-600">Mechanisms to mitigate data corruption and packet loss</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <FaTachometerAlt className='text-primary'/>
                    <h4 className="font-semibold text-brand-navy">QoS Controls</h4>
                  </div>
                  <p className="text-sm text-gray-600">Robust Quality of Service management for network traffic</p>
                </div>
              </div>
            </div>
          </div>

          {/* VANC Data Support */}
          <div id="vanc-support-encoder" className="mb-16">
            <h3 className="font-serif text-3xl font-bold text-brand-navy mb-8">Comprehensive VANC Data Support</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              A distinguishing and critical feature of {`Nextologies's SDI`} Encoder is its <span className='text-black font-semibold'>comprehensive support for VANC (Vertical Ancillary Data)</span>. The encoder is engineered to preserve and accurately translate all embedded SDI metadata, ensuring that vital ancillary information is not lost during the encoding and streaming process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaClosedCaptioning className='text-primary text-3xl'/>
                  </div>
                  <h4 className="font-semibold text-brand-navy mb-2">Line 21</h4>
                  <p className="text-sm text-gray-600">Legacy closed captions for accessibility requirements</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaTv className='text-primary text-3xl'/>
                  </div>
                  <h4 className="font-semibold text-brand-navy mb-2">CEA-608/708</h4>
                  <p className="text-sm text-gray-600">Digital television closed captioning standards
                    <a href="https://www.nextologies.com/nextologies-takes-home-three-awards-at-nab-show-2023.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">[327]</a>
                    <a href="https://pub.smpte.org/latest/eg43/eg0043-2009.pdf" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">[360]</a>
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaAd className='text-primary text-3xl'/>
                  </div>
                  <h4 className="font-semibold text-brand-navy mb-2">SCTE-35</h4>
                  <p className="text-sm text-gray-600">Program insertion, advertising, and dynamic content replacement
                    <a href="https://www.nextologies.com/nextologies-takes-home-three-awards-at-nab-show-2023.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">[327]</a>
                    <a href="https://www.nextologies.com/nxt-2.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">[329]</a>
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaClock className='text-primary text-3xl'/>
                  </div>
                  <h4 className="font-semibold text-brand-navy mb-2">Timecode</h4>
                  <p className="text-sm text-gray-600">Synchronization, logging, and editing information</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NextologiesEncoder;
