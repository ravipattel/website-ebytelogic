import Button from '@/src/components/Button';
import Image from 'next/image';
import React from 'react';
import { RiCpuLine, RiFlashlightLine, RiVideoLine, RiShieldFlashLine, RiArrowRightUpLine } from "react-icons/ri";
import EmbeddedPng from '@/src/assets/images/exhibition/embedded.png'

const ExhibitionIntro = () => {
    const checkmarks = [
        { icon: <RiCpuLine />, text: "Stabilize Linux BSPs" },
        { icon: <RiFlashlightLine />, text: "Cut boot times to seconds" },
        { icon: <RiVideoLine />, text: "Fix video lag and latency" },
        { icon: <RiShieldFlashLine />, text: "Harden platforms for the real world" },
    ];

    return (
        <section className="bg-white py-16 sm:py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-24 items-center">
                    <div className="xl:col-span-7 space-y-6">
                        <div className="space-y-4">
                            <div className="inline-block bg-[#3078fb]/10 text-[#3078fb] px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">
                                Embedded World 2026
                            </div>

                            <h2 className="text-2xl sm:text-[34px] font-medium text-[#1a1e26] leading-tight">
                               {` Launching New Hardware? Turn Your`} <span className="text-[#3078fb]">{`"Trade Show Demo"`}</span> {`into a Production-Ready Product.`}
                            </h2>

                            <p className="text-sm sm:text-[15px] text-[#5d6471] leading-relaxed max-w-2xl">
                               {` If you’re showcasing hardware at Nuremberg, the real challenge starts once the booth is packed up.`}
                                <span className="font-semibold text-[#1a1e26]"> A demo just needs to work once; a product needs to work forever.</span>
                                {" "}{`We help engineering teams stabilize Linux BSPs, cut boot times to seconds, fix video lag, and harden platforms for the real world.`}

                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {checkmarks.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-gray-50 hover:border-[#3078fb]/20 hover:bg-[#3078fb]/5 transition-colors group">
                                    <div className="text-xl text-[#3078fb] transition-transform group-hover:scale-110">
                                        {item.icon}
                                    </div>
                                    <span className="text-[14px] sm:text-[15px] text-[#5d6471] font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button className="flex items-center justify-center gap-2 px-7 py-3.5">
                             {`Book a 20-Minute Tech Talk`}
                                <RiArrowRightUpLine size={18} />
                            </Button>
                            <Button className="flex items-center justify-center gap-2 !bg-white !border-[#3078fb] !text-[#3078fb] px-7 py-3.5 hover:!bg-[#3078fb] hover:!text-white">
                                Get a Free BSP Health Check
                            </Button>
                        </div>
                    </div>

                    <div className="xl:col-span-5 relative flex justify-center xl:justify-end">
                        <div className="relative w-full max-w-[450px] aspect-[4/5]">
                            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-full h-full border-2 border-[#3078fb] rounded-xl z-0"></div>
                            <div className="relative z-10 w-full h-full rounded-xl overflow-hidden shadow-2xl bg-gray-100 group">
                                <Image
                                    src={EmbeddedPng}
                                    alt="Embedded Tech"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#3078fb]/40 to-transparent opacity-60"></div>

                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 p-4 rounded-lg shadow-xl translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <p className="text-[10px] font-bold text-[#3078fb] uppercase tracking-widest mb-1">Production Standard</p>
                                    <p className="text-sm font-semibold text-[#1a1e26]">{`Field-Proven Reliability`}</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-[#3078fb]/30 rounded-bl-xl hidden sm:block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExhibitionIntro;