'use client';
import React from 'react';

const bulletPoints = [
    "15+ engineers with strong C/C++/Python & embedded domain experience",
    "Delivered 40+ BSPs, Streaming Pipelines, Mobile Apps",
    "Cost-efficient, agile teams with time-zone alignment for USA, EU, and APAC",
    "Strong track record in wearables, fire safety, industrial, and multimedia",
];

const WhyChooseEByteLogic = () => {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto text-center space-y-4">
                <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize'>  🚀 Why Choose <span className="text-[#3078fb]">eByteLogic</span>?</h3>
                <div className='space-y-1'>
                    <p className='text-sm sm:text-[15px] text-[#5d6471]'>Trusted by Innovators. Proven Across Industries.</p>
                    <p className='text-sm sm:text-[15px] text-[#5d6471]'>We Speak Embedded – From Concept to Commercialization.</p>
                </div>
            </div>
            <div className="max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                {bulletPoints.map((point, i) => (
                    <div
                        key={i}
                        className="relative backdrop-blur-md bg-white/70 border border-[#dce4f7] rounded-xl p-6 shadow-sm hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out"
                    >
                        <div className="flex items-start gap-3">
                            <span className="text-[#3078fb] text-xl">{`✔`}
                            </span>
                            <p className="text-sm text-gray-800 leading-relaxed">{point}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseEByteLogic;

