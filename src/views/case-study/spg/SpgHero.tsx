import Image from 'next/image';
import React from 'react';
import { FaCode, FaMicrophone, FaNetworkWired } from 'react-icons/fa';
import Spg from '@/src/assets/images/caseStudy/spg.jpg'

const SpgHero = () => {
  return (
    <section className="py-16">
      <div className="px-4">
        <div className="bento-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Hero Card */}
          <div className="hero-main relative lg:col-span-2 rounded-lg overflow-hidden">
            <div className="relative z-10 p-8">
              <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                <em className="italic">Enhancing SPG Studio&apos;s</em> 
                Real-Time Audio Dubbing Solution
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Network Device Interface Integration and GUI Stabilization in QML/Qt5 &amp; GStreamer Applications
              </p>
              <div className="flex flex-wrap items-center space-x-4 text-sm">
                <span className="flex items-center gap-2">
                  <FaCode  className='text-primary'/> Technical Analysis
                </span>
                <span className="flex items-center gap-2">
                  <FaMicrophone className='text-primary'/> Audio Engineering
                </span>
                <span className="flex items-center gap-2">
                  <FaNetworkWired className='text-primary'/> Network Streaming
                </span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
            <Image
              src={Spg}
              alt="Professional audio mixing console"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
          </div>

          {/* Sidebar Cards */}
          <div className="hero-sidebar space-y-6">
            {/* Key Achievements */}
            <div className="hero-card bg-white shadow-md rounded-lg p-6">
              <h3 className="font-serif text-lg font-bold mb-3 text-gray-900">Key Achievements</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  NDI integration with gst-plugin-ndi
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  QML GUI stability optimization
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  Multi-channel audio support
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  Cross-platform deployment
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div className="hero-card bg-white shadow-md rounded-lg p-6">
              <h3 className="font-serif text-lg font-bold mb-3 text-gray-900">Technologies</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-50 px-3 py-2 rounded-lg text-center">
                  <div className="text-xs text-blue-600 font-medium">QML/Qt5</div>
                </div>
                <div className="bg-green-50 px-3 py-2 rounded-lg text-center">
                  <div className="text-xs text-green-600 font-medium">GStreamer</div>
                </div>
                <div className="bg-purple-50 px-3 py-2 rounded-lg text-center">
                  <div className="text-xs text-purple-600 font-medium">NDI</div>
                </div>
                <div className="bg-orange-50 px-3 py-2 rounded-lg text-center">
                  <div className="text-xs text-orange-600 font-medium">Rust</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpgHero;
