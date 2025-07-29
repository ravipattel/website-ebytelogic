import Image from 'next/image';
import React from 'react';
import Nextologies from '@/src/assets/images/caseStudy/nextologies.png'

const NextologiesHero = () => {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-sky-50 p-6 rounded-lg">
          {/* Hero Content */}
          <div>
            <h1 className="font-serif text-5xl font-semibold leading-tight mb-6 text-shadow">
              <em className="italic">Redefining <span className='text-primary'>Professional</span> </em> 
              Video Transport
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              Nextologies&#39; x86 server-based SDI Encoder &amp; Decoder delivers ultra-low latency,
              precision synchronization, and comprehensive metadata support through innovative
              software-defined architecture.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">&lt;100ms Latency</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">±10ms Lip Sync</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">Full VANC Support</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <Image
              src={Nextologies}
              alt="Broadcast server rack with LED activity indicators"
              className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextologiesHero;
