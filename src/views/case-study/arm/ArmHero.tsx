import Image from 'next/image';

import React from 'react';
import { FaMicrochip } from 'react-icons/fa';

import Arm from '@/src/assets/images/caseStudy/arm.png'

const ArmHero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-6">
      <div className="px-6">
        <div className="flex justify-between gap-6">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
              <FaMicrochip className='mr-2' />Hardware Acceleration
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight">
              <span className="hero-text">Low-Cost, Hardware-Accelerated</span> <br />
              <em className="text-gray-600">ARM-Based Multiview Player</em>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Leveraging Odroid-C2 and NanoPi5 for professional HDMI output with UDP, SRT, and HLS stream decoding
            </p>
          </div>
          <div className="relative">
            <Image
              src={Arm}
              alt="ARM-based multiview player hardware"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArmHero;
