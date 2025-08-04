import Image from "next/image";

import React from "react";

import EyeWear from '@/src/assets/images/caseStudy/eyeWear.jpg'

const EsightHero = () => {
  return (
    <section
      id="hero"
      className="flex items-center px-6 py-8 bg-gray-50"
    >
      <div className="md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full mb-4">
                Technical Case Study
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                <em className="text-amber-700">Revolutionizing</em>  Smart Glass Performance
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                How we reduced camera-to display latency from 250ms to under 100ms in just 20 days, transforming the user
                experience for eSightEyewear&apos;s assistive technology.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-100 border border-gray-400 p-4 rounded-lg text-center">
                <div className="text-2xl text-red-600">~250ms</div>
                <div className="text-sm text-gray-600">Initial Latency</div>
              </div>
              <div className="bg-gray-100 border border-gray-400 p-4 rounded-lg text-center">
                <div className="text-2xl text-green-600">&lt;100ms</div>
                <div className="text-sm text-gray-600">Achieved Latency</div>
              </div>
              <div className="bg-gray-100 border border-gray-400 p-4 rounded-lg text-center">
                <div className="text-2xl text-blue-600">20 days</div>
                <div className="text-sm text-gray-600">Delivery Time</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-5">
            <Image
              src={EyeWear}
              alt="Smart glasses with dual OLED displays for augmented reality"
              className="w-full object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-slate-900 mb-2">Project Overview</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>NXP i.MX8MP Android platform</li>
              <li>Central camera + dual OLED displays</li>
              <li>No camera sensor datasheet available</li>
              <li>Surpassed major OEM capabilities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EsightHero;
