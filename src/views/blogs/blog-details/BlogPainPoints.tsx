import React from 'react'

const BlogPainPoints = () => {
    return (
        <section className='max-w-[1400px] mx-auto px-4 sm:px-6 py-16 md:py-20'>
            <div>
                <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText border-l-4 border-primary pl-3">Major Pain Points </h2>
                <p className="text-[#5d6471] text-sm sm:text-[15px] pt-4">
                    Despite technological advancements, multimedia BSP development remains fraught with specific pain points that significantly impact project timelines, costs, and product quality.
                </p>
            </div>
            <div className="space-y-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-start gap-6">
                        <div className="hidden md:flex bg-red-100 rounded-full p-4 flex-shrink-0"></div>
                        <div className="flex-1">
                            <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                                GPU &amp; Hardware Accelerator Integration Complexity</h3>
                            <p className="text-[#5d6471] text-sm sm:text-[15px] leading-relaxed mb-6"> Integrating proprietary GPU drivers and software stacks presents exceptional
                                challenges. <a href="https://community.nxp.com/t5/i-MX-Processors/CTSSkQPTestCases-failures-on-Android-P9-0-0-2-2-0-BSP-for-i-MX6/m-p/1227297" className="citation-link">
                                    NXP community discussions</a> reveal that &#34;our greatest challenges with using any of the i.MX processors in a GMS-approved device have been with the GPU, media codec, and camera HAL components.&#34; </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-red-50 rounded-lg p-4">
                                    <h4 className="font-semibold text-red-900 mb-2">Integration Challenges</h4>
                                    <ul className="text-sm text-red-800 space-y-1">
                                        <li>• Closed-source GPU drivers</li>
                                        <li>• Complex CPU-accelerator protocols</li>
                                        <li>• Power management coordination</li>
                                        <li>• Memory management complexity</li>
                                    </ul>
                                </div>
                                <div className="bg-orange-50 rounded-lg p-4">
                                    <h4 className="font-semibold text-orange-900 mb-2">Compatibility Issues</h4>
                                    <ul className="text-sm text-orange-800 space-y-1">
                                        <li>• Android CTS test failures</li>
                                        <li>• Vulkan API implementation gaps</li>
                                        <li>• Buffer sharing limitations</li>
                                        <li>• Framework integration problems</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-start gap-6">
                        <div className="hidden md:flex bg-blue-100 rounded-full p-4 flex-shrink-0"></div>
                        <div className="flex-1">
                            <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Multimedia Codec Implementation &amp; Optimization</h3>
                            <p className="text-[#5d6471] text-sm sm:text-[15px] leading-relaxed mb-6"> Achieving robust hardware-accelerated codec support proves elusiveeven with vendor-provided BSP components.
                                <a href="https://cdrdv2-public.intel.com/732574/732574_11th_Gen_Intel_Core_Processors_BSP_Release_Notes_MR8_3.1.pdf" className="citation-link">Intel BSP release notes</a> detail specific limitations for HEVC and VP9
                                codecs, reflecting intricate hardware-software dependencies. </p>
                            <div className="bg-blue-50 rounded-lg p-6">
                                <h4 className="font-semibold text-blue-900 mb-4">Specific Codec Limitations</h4>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div> <strong className="text-blue-900">HEVC Limitations:</strong>
                                        <ul className="text-blue-800 mt-2 space-y-1">
                                            <li>• 12-bit (422,444) VME encode not supported</li>
                                            <li>• Profile/level restrictions</li>
                                            <li>• Hardware RC limitations</li>
                                        </ul>
                                    </div>
                                    <div> <strong className="text-blue-900">VP9 Limitations:</strong>
                                        <ul className="text-blue-800 mt-2 space-y-1">
                                            <li>• 8-bit, 10-bit (444) encode on GST_MSDK only</li>
                                            <li>• Frame size constraints</li>
                                            <li>• Rate control limitations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-start gap-6">
                        <div className="hidden md:flex bg-green-100 rounded-full p-4 flex-shrink-0"></div>
                        <div className="flex-1">
                            <h3 className="font-serif text-2xl font-semibold text-primary mb-4">GStreamer Framework Configuration &amp; Debugging</h3>
                            <p className="text-[#5d6471] text-sm sm:text-[15px] leading-relaxed mb-6">Configuring and debugging GStreamer pipelines within BSP contexts
                                presents notable challenges.
                                <a href="https://www.thegoodpenguin.co.uk/blog/category/case-studies/" className="citation-link">The Good Penguin case studies</a> document complex debugging scenarios including memory leaks in large pipelines and USB bandwidth optimization.
                            </p>
                            <div className="space-y-4">
                                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                                    <h4 className="font-semibold text-green-900 mb-2">Debugging Complexity</h4>
                                    <p className="text-sm text-green-800"> &#34;Debugging a Memory Leak in a Large and Complex GStreamer Pipeline&#34; -  internals, plugin behavior, and kernel-level interactions. </p>
                                </div>
                                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                                    <h4 className="font-semibold text-yellow-900 mb-2">Performance Optimization</h4>
                                    <p className="text-sm text-yellow-800"> Pipeline configuration for real-time performance, low latency, and minimal CPU usage requires systematic optimization and buffer  management. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-start gap-6">
                        <div className="hidden md:flex bg-purple-100 rounded-full p-4 flex-shrink-0"></div>
                        <div className="flex-1">
                            <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Hardware Variability &amp; Compatibility Management</h3>
                            <p className="text-[#5d6471] text-sm sm:text-[15px] leading-relaxed mb-6">Managing vast hardware variability across board revisions, SoC versions, and peripheral configurations is a significant pain point.
                                <a href="https://www.linkedin.com/pulse/overview-bsp-harsha-r-vk5ic" className="citation-link">LinkedIn analysis</a> notes that hardware complexity with diverse peripherals and protocols makes BSP integration challenging. </p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-purple-50 rounded-lg p-4 text-center">
                                    <i className="fas fa-microchip text-purple-600 text-2xl mb-2"></i>
                                    <h4 className="font-semibold text-purple-900 text-sm">SoC Variations</h4>
                                    <p className="text-xs text-purple-800 mt-1">Different architectures, clocking schemes, power requirements</p>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-4 text-center">
                                    <i className="fas fa-plug text-purple-600 text-2xl mb-2"></i>
                                    <h4 className="font-semibold text-purple-900 text-sm">Peripheral Diversity</h4>
                                    <p className="text-xs text-purple-800 mt-1">Varying interfaces, protocols, vendor implementations</p>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-4 text-center">
                                    <i className="fas fa-code-branch text-purple-600 text-2xl mb-2"></i>
                                    <h4 className="font-semibold text-purple-900 text-sm">Kernel Compatibility</h4>
                                    <p className="text-xs text-purple-800 mt-1">Driver interfaces, Device Tree management, version dependencies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl p-8 border border-red-200">
                    <h3 className="font-serif text-2xl font-semibold mb-6">Shortage of In-House Expertise &amp; Resource Constraints</h3>
                    <p className="text-[#5d6471] text-sm sm:text-[15px] leading-relaxed mb-6"> The development of robust multimedia BSPs
                        requires diverse specialized skills that many organizations lack internally.
                        <a href="https://www.timesys.com/case-studies/ti-sitara-smart-appliance/" className="citation-link">Timesys case study</a>
                        reveals clients seeking embedded Linux expertise to focus their engineering resources on application development.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-semibold text-secondary mb-4">Required Expertise Areas</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <i className="fas fa-microchip text-[#5d6471]"></i>
                                    <span className="text-sm text-[#5d6471]">Hardware Architecture Deep Knowledge</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="fas fa-linux text-[#5d6471]"></i>
                                    <span className="text-sm text-[#5d6471]">Linux Kernel Internals</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="fas fa-code text-[#5d6471]"></i>
                                    <span className="text-sm text-[#5d6471]">Device Driver Development</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="fas fa-video text-[#5d6471]"></i>
                                    <span className="text-sm text-[#5d6471]">Multimedia Frameworks (GStreamer)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="fas fa-clock text-[#5d6471]"></i>
                                    <span className="text-sm text-[#5d6471]">Real-time Systems</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-secondary mb-4">Resource Constraints</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <i className="fas fa-dollar-sign "></i>
                                    <span className="text-sm text-[#5d6471]">Specialized Development Tools</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="fas fa-tools "></i>
                                    <span className="text-sm text-[#5d6471]">Test Equipment (Logic Analyzers, Scopes)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="fas fa-calendar "></i>
                                    <span className="text-sm text-[#5d6471]">Tight Project Deadlines</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="fas fa-users "></i>
                                    <span className="text-sm text-[#5d6471]">Limited Engineering Resources</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogPainPoints
