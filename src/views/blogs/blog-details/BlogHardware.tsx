import React from 'react'

const BlogHardware = () => {
    return (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div>
                <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText border-l-4 border-primary pl-3">Hardware Abstraction &amp; Peripheral Integration</h2>
                <p className="text-[#5d6471] text-sm sm:text-[15px] pt-4">
                    BSPs must abstract hardware specifics while providing consistent interfaces for operating systems and applications.
                    <a href="#" className="text-blue-600 underline hover:text-blue-800" target="_blank">{`Embitel's BSP services`}</a> highlight the challenge of customizing low-level drivers for specialized multimedia peripherals.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                    <article className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                        <h3 className="font-semibold mb-2">Video Interfaces</h3>
                        <ul className="list-disc list-inside space-y-1 text-[#5d6471] text-sm">
                            <li>MIPI CSI</li>
                            <li>HDMI IN/OUT</li>
                            <li>DisplayPort</li>
                            <li>LVDS</li>
                        </ul>
                    </article>
                    <article className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                        <h3 className="font-semibold mb-2">Audio Components</h3>
                        <ul className="list-disc list-inside space-y-1 text-[#5d6471] text-sm">
                            <li>Audio codecs</li>
                            <li>I2S interfaces</li>
                            <li>SPDIF</li>
                            <li>Multi-channel audio</li>
                        </ul>
                    </article>
                    <article className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                        <h3 className="font-semibold mb-2">Accelerators</h3>
                        <ul className="list-disc list-inside space-y-1 text-[#5d6471] text-sm">
                            <li><span className="font-semibold">GPU</span> integration</li>
                            <li>VPU blocks</li>
                            <li>DSP cores</li>
                            <li>NPU units</li>
                        </ul>
                    </article>
                </div>
            </div>
            <div className="my-12">
                <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText border-l-4 border-primary pl-3">Power Management &amp; Efficiency</h2>
                <p className="text-[#5d6471] text-sm sm:text-[15px] pt-4">
                    Effective power management is critical for portable multimedia devices.
                    <a href="#" className="text-indigo-600 underline hover:text-indigo-800" target="_blank"> DEV Community analysis</a> emphasizes balancing performance with energy efficiency through sophisticated power management strategies.
                </p>
            </div>
            <div>
                <h2 className="text-xl mb-3">Operating System &amp; Middleware Support</h2>
                <p className="text-[#5d6471] text-sm sm:text-[15px] max-w-4xl">
                    Linux is prevalent for multimedia applications, but
                    <a href="#" className="text-blue-700 underline hover:text-blue-900" target="_blank"> LinkedIn analysis</a> highlights challenges in ensuring compatibility between device drivers and OS kernels across different versions.
                </p>
            </div>
        </section>


    )
}

export default BlogHardware
