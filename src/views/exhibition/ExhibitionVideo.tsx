import React from 'react';
import {
   RiTimerFlashLine,
   RiPulseLine,
   RiTerminalBoxLine,
   RiBroadcastLine,
} from "react-icons/ri";

import BroadCastingPng from '@/src/assets/images/exhibition/broadcasting.png'
import LagFreeStreamPng from '@/src/assets/images/exhibition/lag-freeStream.png'
import MediaToolsPng from '@/src/assets/images/exhibition/media-tools.png'
import PerfectSyncPng from '@/src/assets/images/exhibition/perfect-sync.png'
import Image from 'next/image';

const ExhibitionVideo = () => {
   const data = [
      {
         icon: <RiTimerFlashLine />,
         title: "Lag-Free Streaming",
         text: "We tune your software to remove delays in video feeds.",
         image: LagFreeStreamPng
      },
      {
         icon: <RiPulseLine />,
         title: "Perfect Sync",
         text: "We ensure audio and video stay perfectly timed (Lip-Sync).",
         image: PerfectSyncPng
      },
      {
         icon: <RiTerminalBoxLine />,
         title: "Customized Media Tools",
         text: "Expert tuning for GStreamer and FFMPEG to handle heavy workloads.",
         image: MediaToolsPng
      },
      {
         icon: <RiBroadcastLine />,
         title: "Broadcasting Standards",
         text: "We make sure your video meets professional industry rules.",
         image: BroadCastingPng
      }
   ];

   return (
      <section className="bg-white py-16 sm:py-24">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

            <div className="space-y-3 mb-16 max-w-3xl">
               <h2 className="text-2xl sm:text-[34px] font-medium text-[#1a1e26] leading-tight">
                  Video & <span className="text-[#3078fb]">Streaming Optimization</span>
               </h2>
               <p className="text-sm sm:text-[15px] text-[#5d6471] leading-relaxed">
                  {`If your device uses a screen or camera, "good enough" isn't enough for your customers.`}
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {data.map((item, idx) => (
                  <div
                     key={idx}
                     className="group border border-slate-200 bg-white rounded-2xl p-6 sm:p-8 hover:border-[#3078fb]/20 transition-all duration-300"
                  >
                     <div className="flex flex-col lg:flex-row gap-8 items-start">

                        <div className="w-full lg:w-48 h-32  shrink-0 relative rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
                           <Image
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                           <div className="absolute inset-0 bg-[#3078fb]/5 group-hover:bg-transparent transition-colors"></div>
                        </div>

                        <div className="space-y-4 flex-grow">
                           <div className="text-xl text-[#3078fb]">
                              {item.icon}
                           </div>

                           <div className="space-y-2">
                              <h3 className="text-[17px] font-semibold text-[#1a1e26]">
                                 {item.title}
                              </h3>
                              <p className="text-sm sm:text-[15px] text-[#5d6471] leading-relaxed">
                                 {item.text}
                              </p>
                           </div>
                        </div>

                     </div>
                  </div>
               ))}
            </div>

         </div>
      </section>
   );
};

export default ExhibitionVideo;