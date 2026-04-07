import React from 'react';
import { 
  RiCpuLine, 
  RiSettings4Line, 
  RiRobotLine, 
  RiVideoLine, 
  RiTimerLine,
  RiFocus3Line,
} from "react-icons/ri";

const IsThisForYouVisible = ({ data }: { data?: any }) => {
  const iconByIndex = [<RiCpuLine key="c1" />, <RiSettings4Line key="c2" />, <RiRobotLine key="c3" />, <RiVideoLine key="c4" />, <RiTimerLine key="c5" />];
  const criteria = (data?.criteria ?? [
    {
      text: "A Chip Maker or partner launching new silicon.",
      tag: "SILICON_PARTNER"
    },
    {
      text: "An Industrial OEM building smart factory tools.",
      tag: "INDUSTRIAL_SYSTEMS"
    },
    {
      text: "An AI Hardware team moving to the edge.",
      tag: "AI_DEPLOYMENT"
    },
    {
      text: "A Multimedia developer building cameras or screens.",
      tag: "MEDIA_PIPELINE"
    },
    {
      text: "Planning to ship a product in the next 3–6 months.",
      tag: "PRODUCTION_TRACK"
    }
  ]).map((item, idx) => ({
    icon: iconByIndex[idx] ?? <RiCpuLine />,
    text: item.text,
    tag: item.tag,
  }));

  const title = data?.title ?? "Is This for You?";
  const leadIn = data?.leadIn ?? "This conversation is for you if you are:";

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        <div className="mb-16 space-y-4">
            <h2 className="text-2xl sm:text-[34px] font-medium text-[#1a1e26] leading-tight">
                {title}
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <p className="text-sm sm:text-[15px] text-[#5d6471]">
                    {leadIn}
                </p>
                <div className="h-[1px] flex-grow bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 w-1/3 bg-[#3078fb] animate-shimmer"></div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {criteria.map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative bg-[#f8faff] border border-slate-200 rounded-xl p-8 transition-all duration-300 hover:border-[#3078fb] hover:bg-white hover:shadow-[0_20px_50px_rgba(48,120,251,0.1)] flex flex-col justify-between min-h-[240px] ${
                idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-slate-200 group-hover:bg-[#3078fb] transition-colors rounded-r-full"></div>

              <div className="absolute top-6 right-8 flex items-center gap-2">
                <span className="text-[9px] font-mono font-bold text-slate-400 group-hover:text-[#3078fb] transition-colors uppercase tracking-tighter">
                   {item.tag}
                </span>
                <RiFocus3Line className="text-slate-300 group-hover:text-[#3078fb] text-xs transition-colors" />
              </div>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl text-[#3078fb] transition-all group-hover:scale-110 group-hover:border-[#3078fb]/30">
                  {item.icon}
                </div>

                <p className="text-sm sm:text-[15px] text-[#1a1e26] leading-relaxed pl-2" dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>

              <div className="mt-8 flex items-center justify-between">
                 <div className="text-[10px] font-mono text-slate-300 font-bold">0{idx + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IsThisForYouVisible;