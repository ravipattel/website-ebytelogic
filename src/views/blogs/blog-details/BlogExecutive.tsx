import React from 'react'

const BlogExecutive = () => {
    return (
        <section className='bg-[#F5F7FA] py-20'>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText mb-6 border-b-4 border-primary pb-1 inline-block">
                    Executive Summary
                </h2>
                <p className="text-[#5d6471] text-sm sm:text-[15px] mb-10">
                    Board Support Package (BSP) development for media broadcasting and multimedia applications presents a complex technical landscape fraught with unique challenges that demand specialized expertise and meticulous attention to system-level optimization.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl bg-gradient-to-tr from-blue-50 to-white p-6 shadow-md border border-blue-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            ✅ Critical Requirements
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600">✔</span>
                                Real-time processing with deterministic performance
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600">✔</span>
                                High-bandwidth data transfer optimization
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600">✔</span>
                                Complex multimedia codec integration
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600">✔</span>
                                GPU and hardware accelerator support
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-xl bg-gradient-to-tr from-red-50 to-white p-6 shadow-md border border-red-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            ❗ Major Pain Points
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-red-600">⚠</span>
                                Proprietary GPU driver integration challenges
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-600">⚠</span>
                                GStreamer pipeline debugging complexity
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-600">⚠</span>
                                Hardware variability management
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-600">⚠</span>
                                Shortage of in-house expertise
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="leading-relaxed pt-7 space-y-4">
                    <p className="text-[#5d6471] text-sm sm:text-[15px]">
                        This comprehensive analysis examines the technical intricacies of multimedia BSP development through real-world case studies from industry leaders including NXP i.MX platforms, GStreamer optimization projects, and cross-platform camera integration initiatives.
                    </p>
                    <p className="text-[#5d6471] text-sm sm:text-[15px]">
                        The findings reveal that successful multimedia BSP implementation requires deep hardware-software co-design expertise, rigorous performance optimization, and systematic debugging methodologies.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default BlogExecutive
