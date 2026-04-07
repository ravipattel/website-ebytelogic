import React from 'react';
import { CgBoard } from 'react-icons/cg';
import {
  RiFlashlightLine,
  RiShieldCheckLine,
  RiCodeSSlashLine,
} from "react-icons/ri";

const WhyChooseeByteLogic = ({ data }: { data?: any }) => {
  const iconByIndex = [<CgBoard key="r1" />, <RiFlashlightLine key="r2" />, <RiShieldCheckLine key="r3" />, <RiCodeSSlashLine key="r4" />];
  const reasons = (data?.reasons ?? [
    {
      stat: "30+",
      title: "Proven Record",
      desc: "Successful board bring-ups for major chip brands."
    },
    {
      stat: "4-6 wks",
      title: "Speed",
      desc: "We typically reduce development cycles by 4 to 6 weeks."
    },
    {
      stat: "Crash-Proof",
      title: "Stability First",
      desc: `We specialize in "production hardening"—making sure your device doesn't crash in the field.`
    },
    {
      stat: "Clean",
      title: "Long-Term Focus",
      desc: `We write code that your team can actually manage after we leave.`
    }
  ]).map((item, idx) => ({
    icon: iconByIndex[idx] ?? <CgBoard />,
    stat: item.stat,
    title: item.title,
    desc: item.desc,
  }));

  const titleHtml =
    data?.titleHtml ??
    `Why Teams Choose <span class="text-[#3078fb]">eByteLogic</span>`;

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-slate-200 pb-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-[34px] font-medium text-[#1a1e26] leading-tight">
              <span dangerouslySetInnerHTML={{ __html: titleHtml }} />
            </h2>
            {
              data?.descriptionHtml && (
                <p className="text-sm sm:text-[15px] text-[#5d6471] leading-relaxed">
                  <span dangerouslySetInnerHTML={{ __html: data.descriptionHtml }} />
                </p>
              )
            }
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden shadow-sm">

          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white p-8 sm:p-10 transition-all duration-300 hover:z-10 hover:shadow-2xl hover:shadow-blue-500/5"
            >
              <div className="flex flex-col h-full space-y-6">

                <div className="flex items-center justify-between">
                  <div className="text-2xl text-[#3078fb] bg-[#3078fb]/5 p-3 rounded-lg group-hover:bg-[#3078fb] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest">
                    METRIC_0{idx + 1}
                  </span>
                </div>
                <div className="pt-4 border-t-2 border-[#3078fb]/20 group-hover:border-[#3078fb] w-12 transition-all duration-500 group-hover:w-full"></div>

                <div className="space-y-4 flex-grow">
                  <div className="space-y-1">
                    {
                      item?.stat && (
                        <p className="text-xl md:text-[22px] font-semibold text-[#3078fb] tracking-tight">
                          {item.stat}
                        </p>
                      )
                    }
                    <h3 className="text-[17px] font-semibold text-[#1a1e26]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-[15px] text-[#5d6471] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseeByteLogic;