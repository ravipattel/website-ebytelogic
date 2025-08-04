import Image from "next/image";
import React from "react";
import QtApp from '@/src/assets/images/caseStudy/qtApp.jpg'

const QtAppHero = () => {
  return (
    <section className="hero-gradient text-white relative overflow-hidden px-6">
      <div className="md:px-6 py-8">
        <div className="grid grid-cols-5 gap-4">
          <div className="bento-main relative col-span-4">
            <Image
              src={QtApp}
              alt="Embedded Linux system booting on ARM processor"
              className="w-full h-full object-cover rounded-xl opacity-20 absolute inset-0"
              referrerPolicy="no-referrer"
              data-modified="1"
              data-score="11596.00"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-xl"></div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-center">
              <h1 className="font-tiempos text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <em className="text-blue-200">Optimizing</em> <br /> Sub-10-Second Boot Times <br /> for Embedded Linux
              </h1>
              <p className="text-xl text-blue-100 font-light max-w-2xl">
                A comprehensive guide to achieving lightning-fast boot times for QT applications on Exynos 4412 and i.MX6Q platforms
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-between">
            <div className="bg-gray-100 border p-6 rounded-xl">
              <div className="text-3xl font-semibold text-slate-800 mb-2">1.56s</div>
              <div className="text-sm text-slate-600">Best Achieved Boot Time</div>
              <div className="text-xs text-slate-500 mt-1">i.MX6Q + QT Cluster Demo</div>
            </div>
            <div className="bg-gray-100 border p-6 rounded-xl">
              <div className="text-3xl font-semibold text-slate-800 mb-2">22.8s → 1.56s</div>
              <div className="text-sm text-slate-600">Optimization Potential</div>
              <div className="text-xs text-slate-500 mt-1">93% reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QtAppHero;
