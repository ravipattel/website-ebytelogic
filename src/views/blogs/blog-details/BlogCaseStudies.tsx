import React from 'react'
import Image from 'next/image'

import BlogDetailsBsp from '@/src/assets/images/blogs/blogDetailsbsp.jpg'
import GstJpeg from '@/src/assets/images/blogs/gst.jpeg'
import CctvJpeg from '@/src/assets/images/blogs/cctv.jpeg'

const BlogCaseStudies = () => {
    return (
        <section className='max-w-[1400px] mx-auto px-4 sm:px-6 py-20 space-y-10 md:relative'>
            <div>
                <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText pb-2">
                    Case Studies &amp; Real-World Examples
                </h2>
                <p className="text-[#5d6471] text-sm sm:text-[15px] mb-10">
                    Real-world case studies vividly illustrate the practical difficulties encountered during multimedia BSP development, highlighting the interplay between hardware capabilities, software integration, and performance requirements.
                </p>
            </div>
            {/* 1st box */}
            <div className="mx-auto bg-white shadow-xl border border-slate-300 rounded-lg p-8 md:sticky top-[20%]">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">NXP i.MX Platform: GPU, Codec & Camera HAL Integration</h2>
                </div>
                <p className="text-gray-600 mb-6">
                    Community discussions reveal significant difficulties achieving Google Mobile Services (GMS) approval for i.MX6 and i.MX8 processors due to multimedia subsystem integration challenges, particularly with GPU, media codec, and camera HAL components.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <Image src={BlogDetailsBsp} alt="Diagram of NXP i.MX Platform" className="h-[330px] w-[636px] rounded-lg" />
                    </div>
                    <div>
                        <div className="bg-red-50 p-4 rounded-lg mb-6">
                            <h3 className="text-xl text-red-600">GPU Integration Issues</h3>
                            <ul className="list-disc list-inside space-y-1.5 pt-2">
                                <li className='text-sm text-[#5d6471]'>Proprietary GPU library failures</li>
                                <li className='text-sm text-[#5d6471]'>Android CTS test failures (CtsSKQPTestCases)</li>
                                <li className='text-sm text-[#5d6471]'>Vulkan API implementation challenges</li>
                                <li className='text-sm text-[#5d6471]'>Required vendor patches for compliance</li>
                            </ul>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                            <h3 className="text-xl text-orange-600">Media Codec Problems</h3>
                            <ul className="list-disc list-inside space-y-1.5 pt-2">
                                <li className='text-sm text-[#5d6471]'>CtsMediaTestCases failures</li>
                                <li className='text-sm text-[#5d6471]'>Resolution limitation workarounds</li>
                                <li className='text-sm text-[#5d6471]'>Hardware codec implementation issues</li>
                                <li className='text-sm text-[#5d6471]'>Quality and stability concerns</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <p className="text-base text-blue-600">
                        Key Insight: NXP community forum discussions demonstrate that even with mature SoC platforms and vendor BSPs, achieving stable multimedia subsystem integration requires significant effort and often direct vendor support.
                    </p>
                </div>
            </div>
            {/* 2nd box */}
            <div className="mx-auto bg-white shadow-xl border border-slate-300 rounded-lg p-8 md:sticky top-[20%]">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">GStreamer Pipeline Optimization & USB Bandwidth Issues</h2>
                </div>
                <p className="text-gray-600 mb-6">
                    <a href="#" className="text-blue-600 hover:underline">The Good Penguin case studies</a> document complex real-world challenges in multimedia BSP development, including USB bandwidth management and GStreamer pipeline optimization.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="bg-green-50 p-4 rounded-lg">
                        <Image src={GstJpeg} alt="Image related to GStreamer pipeline" className="h-[492px] w-full rounded-lg" />
                    </div>
                    <div>
                        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                            <h3 className="text-xl font-semibold text-yellow-600">USB Bandwidth Saturation</h3>
                            <p className="text-sm text-[#5d6471] pt-3 leading-relaxed">
                               {` Multiple USB UVC camera streaming failures with "No space left on device" and "uvcvideo: Failed to submit URB 0 (-28)" errors.`}
                            </p>
                            <pre className="bg-yellow-100 text-yellow-800 p-4 text-wrap rounded-lg mt-4">
                               {` dmesg: uvcvideo: Failed to submit URB 0 (-28)`}
                            </pre>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg mb-6">
                            <h3 className="text-xl font-semibold text-blue-600">Custom Debugging Solution</h3>
                            <p className="text-sm text-[#5d6471] pt-3 leading-relaxed">
                                Developed monitoring tool to capture USB traffic and identify root causes of bandwidth saturation, demonstrating the level of effort required for complex multimedia BSP debugging.
                            </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-600">Real-time Pipeline Optimization</h3>
                            <p className="text-sm text-[#5d6471] pt-3 leading-relaxed">
                                NXP Layerscape platform project required careful GStreamer pipeline configuration to avoid frame dropping and excessive latency in H.264 encoder integration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3rd box */}
            <div className="mx-auto bg-white shadow-xl border border-slate-300 rounded-lg p-8 md:sticky top-[20%]">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Multi-Platform Camera Sensor Integration</h2>
                </div>
                <p className="text-gray-600 mb-6">
                    <a href="#" className="text-blue-600 hover:underline">VoidStarMedia case study</a> explores the challenges of integrating IMX477 camera sensors across multiple platforms, including NVIDIA Jetson, Xilinx KV260, iMX6, iMX8, and STM32MP257F.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <Image src={CctvJpeg} alt="Camera Sensor Integration" className="h-[492px] w-full rounded-lg" />
                    </div>
                    <div>
                        <div className="bg-green-50 p-4 rounded-lg mb-6">
                            <h3 className="text-xl font-semibold text-green-600">Integration Challenges</h3>
                            <ul className="text-sm text-[#5d6471] pt-3 leading-relaxed">
                                <li><span className="font-semibold">Platform-specific hardware interfacing</span> (MIPI CSI-2)</li>
                                <li><span className="font-semibold">Device Tree customization</span> for sensor configuration</li>
                                <li><span className="font-semibold">V4L2 subsystem compatibility</span> assurance</li>
                                <li><span className="font-semibold">Media pipeline optimization</span> (latency, throughput)</li>
                            </ul>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                            <h3 className="text-xl font-semibold text-yellow-600">Platform-Specific Details</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <span className="font-semibold text-yellow-800">Xilinx KV260</span>
                                    <p className="text-sm text-[#5d6471] pl-4">Understanding board internals, cross-compiling BSP for FPGA compatibility.</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="font-semibold text-yellow-800">NVIDIA Jetson</span>
                                    <p className="text-sm text-[#5d6471] pl-4">Tegra-specific driver integration, power management.</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="font-semibold text-yellow-800">i.MX Platforms</span>
                                    <p className="text-sm text-[#5d6471] pl-4">Vivante GPU integration, ISP pipeline configuration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-600">Validation Framework</h3>
                            <p className="text-sm text-[#5d6471] pt-3 leading-relaxed">
                                Comprehensive testing using GStreamer, FFmpeg, and direct V4L2 API access ensures consistent behavior across diverse hardware platforms.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th box */}
            <div className="mx-auto bg-white shadow-xl border border-slate-300 rounded-lg p-8 md:sticky top-[20%]">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">General Embedded Linux BSP Development Challenges</h2>
                </div>
                <p className="text-gray-600 mb-6">
                    Industry analysis reveals common themes across multimedia BSP development projects, with <a href="#" className="text-blue-600 hover:underline">LinkedIn research</a> and <a href="#" className="text-blue-600 hover:underline">{`"Mastering Embedded Linux in 2025"`} report</a> providing comprehensive insights.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-blue-600">Hardware Complexity</h3>
                        <p className="text-sm text-[#5d6471] pt-3 leading-relaxed">
                            Wide range of peripherals with varying complexities and communication protocols requiring expertise in different hardware architectures.
                        </p>
                        <p className="text-sm text-[#5d6471] pt-3 mt-4">
                            Source: <a href="#" className="text-blue-600 hover:underline">LinkedIn BSP Overview</a>
                        </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-green-600">Driver Compatibility</h3>
                        <p className="text-sm text-[#5d6471] pt-3 leading-relaxed">
                            Ensuring compatibility between device drivers and OS kernel versions with different interfaces and requirements.
                        </p>
                        <p className="text-sm text-[#5d6471] pt-3 mt-4">
                            Source: <a href="#" className="text-blue-600 hover:underline">DEV Community Analysis</a>
                        </p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-yellow-600">Expertise Shortage</h3>
                        <p className="text-sm text-[#5d6471] pt-3 leading-relaxed">
                            Teams struggle with complex build systems like Yocto and Linux kernel development, especially when transitioning from MCU-based designs.
                        </p>
                        <p className="text-sm text-[#5d6471] pt-3 mt-4">
                            Source: <a href="#" className="text-blue-600 hover:underline">Embedded Linux 2025 Report</a>
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BlogCaseStudies
