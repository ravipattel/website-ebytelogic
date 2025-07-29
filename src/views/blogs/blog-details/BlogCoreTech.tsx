import Image from 'next/image'
import React from 'react'

import StickyNotePng from '@/src/assets/images/blogs/stickyNotes.png'
import FrameworkIntegrationJpg from '@/src/assets/images/blogs/frameworkIntegration.jpg'

const BlogCoreTech = () => {
    return (
        <section className='py-16 md:py-20'>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                <div>
                    <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText pb-2">
                        Core Technical Requirements
                    </h2>
                    <p className="text-[#5d6471] text-sm sm:text-[15px] mb-10">
                        Multimedia BSP development demands meticulous attention to six fundamental technical requirements that collectively enable high-performance media processing capabilities.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="col-span-3 md:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h3 className="text-xl font-semibold mb-2">
                            ⚙️ Real-Time Processing & Deterministic Performance
                        </h3>
                        <p className="text-[#5d6471] text-sm sm:text-[15px] leading-relaxed">
                            Real-time processing is paramount in media broadcasting applications where minor delays can significantly degrade user experience. BSPs must ensure tasks related to audio/video capture, encoding, decoding, and streaming execute within precise temporal constraints.
                        </p>
                        <div className="mt-4 bg-blue-50 text-blue-800 text-sm rounded-lg p-4 border border-blue-200 leading-relaxed">
                            <strong>🔍 Critical Insight: </strong> <a href="#" className="underline hover:text-blue-600 px-1">Intel documentation</a> emphasizes that real-time systems require appropriate resource partitioning to allow real-time workloads to access compute and shared resources without contention from best-effort tasks.
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1 bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                        <h4 className="text-lg font-bold text-gray-800 mb-4">🛠️ Key Requirements</h4>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li>🔹 Resource partitioning</li>
                            <li>🔹 Task prioritization</li>
                            <li>🔹 Bounded latencies (μs)</li>
                            <li>🔹 Kernel configuration (PREEMPT_RT)</li>
                        </ul>
                    </div>
                    <div className="relative col-span-3 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <h3 className="text-xl font-semibold mb-2">
                            🚀 High-Bandwidth Data Transfer & Storage
                        </h3>
                        <div className="lg:max-w-2xl">
                            <div className='space-y-3'>
                                <p className="text-[#5d6471] text-sm sm:text-[15px] leading-relaxed">
                                    Multimedia systems inherently deal with large data volumes from high-resolution video and multi-channel audio. <a className="text-indigo-600 underline" href="#">Xilinx documentation</a> {`describes complex interconnects like Cache Coherent Interconnect (CCI) that require careful management to prevent bottlenecks.`}
                                </p>
                                <div className="bg-red-50 text-red-800 text-sm rounded-lg p-4 border border-red-200">
                                    <strong>📍 Case Example:</strong> <a href="#" className="underline hover:text-red-600">The Good Penguin</a> documented USB bandwidth errors preventing simultaneous streaming of multiple USB audio/video streams, causing GStreamer pipeline failures with <code>{`"uvcvideo: Failed to submit URB 0 (-28)"`}</code> errors.
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block z-10 absolute right-24 top-19 text-sm text-gray-800">
                            <h4 className="text-md font-semibold mb-2">Bandwidth Challenges</h4>
                            <ul className="space-y-2">
                                <li><strong>4K Video:</strong> 12–24 Gbps</li>
                                <li><strong>8K Video:</strong> 48+ Gbps</li>
                                <li className='max-w-40'><strong>HDR Content:</strong> +20% additional bandwidth</li>
                            </ul>
                        </div>
                        <Image src={StickyNotePng} alt='StickyNotePng' className='hidden lg:flex absolute right-11 top-0' height={280} />
                    </div>
                    <div className="col-span-3 lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200 shadow-sm h-fit">
                        <div className='space-y-3'>
                            <h3 className="text-xl font-semibold mb-2">
                                🎞️ Multimedia Codec Support & Framework Integration
                            </h3>
                            <p className="text-[#5d6471] text-sm sm:text-[15px] leading-relaxed">
                               {` Comprehensive support for hardware-accelerated multimedia codecs is critical. NXP's multimedia framework guide emphasizes integration of video codecs and GStreamer as key components.`}
                            </p>
                            <div className="bg-yellow-50 text-yellow-800 text-sm rounded-lg p-4 border border-yellow-200">
                                <strong>📍 Case Example:</strong> <a href="#" className="underline hover:text-red-600">The Good Penguin</a> documented USB bandwidth errors preventing simultaneous streaming of multiple USB audio/video streams, causing GStreamer pipeline failures with <code>{`"uvcvideo: Failed to submit URB 0 (-28)"`}</code> errors.
                            </div>
                        </div>
                    </div>
                    <Image src={FrameworkIntegrationJpg} alt="FrameworkIntegrationJpg" height={245} className='hidden lg:flex' />
                </div>
            </div>
        </section>
    )
}

export default BlogCoreTech
