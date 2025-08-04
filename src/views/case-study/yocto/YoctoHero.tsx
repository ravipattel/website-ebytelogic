import Image from 'next/image';
import React from 'react';
import { FaCalendar, FaCode, FaMicrophone } from 'react-icons/fa';
import Yocto from '@/src/assets/images/caseStudy/yocto.jpg'

const YoctoHero = () => {
  return (
    <section className="px-6 py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="md:px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Block */}
          <div>
            <div className="mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Case Study
              </span>
            </div>
            <h1 className="serif text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Accelerated Custom Carrier Board Bring-up with{' '}
              <em className="text-primary">Yocto and Toradex Verdin i.MX8MP</em>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              How Device Solution compressed a two-week development timeline into just 4–5 days,
              enabling critical ATDM product demonstration at EW24.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 text-sm text-gray-600">
                <FaMicrophone  className='text-primary'/> Toradex Verdin i.MX8MP
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-600">
                <FaCode className='text-primary'/>Yocto Project
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-600">
                <FaCalendar className='text-primary'/> EW24 Event
              </span>
            </div>
          </div>

          {/* Right Image Block */}
          <div className="relative h-80">
            <Image
              src={Yocto}
              alt="Industrial embedded system board with display and touch interfaces"
              className="w-full h-full object-cover opacity-80 rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm opacity-90">Custom carrier board with Verdin i.MX8MP SoM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoctoHero;
