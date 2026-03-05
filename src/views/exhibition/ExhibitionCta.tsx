import Button from '@/src/components/Button';
import React from 'react';
import { 
  RiArrowRightUpLine, 
  RiTimerFlashLine, 
  RiShieldCheckLine,
} from "react-icons/ri";
import CtaPng from '@/src/assets/images/exhibition/cta.png'
import Image from 'next/image';

const ExecutionModeCTA = () => {
  return (
    <section className="bg-white py-16 sm:pb-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        <div className="relative group bg-[#f8faff] border border-[#3078fb]/20 rounded-[2.5rem] p-8 md:p-16 lg:p-20 overflow-hidden shadow-2xl shadow-blue-500/5">
          
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
               style={{ backgroundImage: 'linear-gradient(#3078fb 1px, transparent 1px), linear-gradient(90deg, #3078fb 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
          </div>
          
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#3078fb]/[0.02] -skew-x-12 translate-x-20 hidden lg:block"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <span className="flex h-2 w-2 rounded-full bg-[#3078fb] animate-pulse"></span>
                    <span className="text-[#3078fb] text-[11px] font-bold uppercase tracking-[0.3em]">Project_Handover</span>
                </div>
                <h2 className="text-2xl sm:text-[34px] font-medium text-[#1a1e26] leading-tight max-w-2xl">
                    The Demo is Only <span className="text-[#3078fb]">the Beginning.</span>
                </h2>
                <p className="text-sm sm:text-[15px] text-[#5d6471] leading-relaxed max-w-2xl">
                    After the show, your team moves from Showcase Mode to Execution Mode. If you need to clean up your code, speed up your boot time, or secure your system, let’s talk.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-[13px] font-medium text-[#1a1e26]">
                    <RiTimerFlashLine className="text-[#3078fb]" /> Boot Speed
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-[13px] font-medium text-[#1a1e26]">
                    <RiShieldCheckLine className="text-[#3078fb]" /> System Security
                </div>
              </div>

              <div className="pt-6">
                <Button className="group relative flex items-center justify-center gap-3">
                    Book Your 20-Minute Technical Exchange
                    <RiArrowRightUpLine className="hidden sm:flex text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:flex justify-center">
               <Image src={CtaPng} alt='CtaPng' className='rounded-2xl'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionModeCTA;