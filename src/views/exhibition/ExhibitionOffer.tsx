import Button from '@/src/components/Button';
import React from 'react';
import { 
  RiNodeTree, 
  RiTimerFlashLine, 
  RiPulseLine, 
  RiCalendarCheckLine,
  RiArrowRightLine,
  RiShieldFlashLine
} from "react-icons/ri";

const ExhibitionOffer = () => {
  const options = [
    {
      icon: <RiNodeTree />,
      title: "20-Min Architecture Check",
      desc: "Is your software structure ready for the real world?"
    },
    {
      icon: <RiTimerFlashLine />,
      title: "Boot-Time Audit",
      desc: "Can we make your device start faster?"
    },
    {
      icon: <RiPulseLine />,
      title: "Media Performance Check",
      desc: "Is your video pipeline optimized for low latency?"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="relative bg-[#f8faff] border border-slate-200 rounded-[2.5rem] p-6 md:p-16 lg:p-20 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none"
                 style={{ backgroundImage: 'radial-gradient(#3078fb 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="relative z-10">
                <div className="text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 bg-[#3078fb] text-white px-4 py-1.5 rounded-md text-[10px] font-semibold uppercase tracking-widest">
                        <RiShieldFlashLine />
                        Exhibition Exclusive
                    </div>
                    <h2 className="text-2xl sm:text-[34px] font-medium text-[#1a1e26] leading-tight">
                        Embedded World 2026 Special Offer
                    </h2>
                    <p className="text-sm sm:text-[15px] text-[#5d6471] max-w-2xl mx-auto leading-relaxed">
                        If you are showing off hardware in Nuremberg, take advantage of our Free Technical Review. <span className="text-[#3078fb] font-semibold">Choose one:</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                    {options.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="group relative bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:border-[#3078fb]/50 hover:shadow-[0_10px_30px_rgba(48,120,251,0.1)] cursor-pointer"
                        >
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#3078fb] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex flex-col items-center text-center space-y-6">
                                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#f4f7ff] text-[#3078fb] text-3xl group-hover:bg-[#3078fb] group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-[17px] font-semibold text-[#1a1e26]">
                                        {item.title}
                                    </h3>
                                    <p className="text-[13px] text-[#5d6471] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-10">
                    <Button className="group relative flex items-center gap-3">
                        <RiCalendarCheckLine className="text-xl" />
                        Schedule My Technical Review
                        <RiArrowRightLine className="hidden sm:flex transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>

            </div>

            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3078fb]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#3078fb]/5 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
};

export default ExhibitionOffer;