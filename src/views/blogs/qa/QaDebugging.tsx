import Image from 'next/image'

import React from 'react'
import { FaBug, FaChartLine, FaSatellite, FaWaveSquare } from 'react-icons/fa'
import QaDebuggingJpeg from '@/src/assets/images/blogs/blogDetails/qaDebugging.jpeg'

const QaDebugging = () => {
    return (
        <section id="debuggingvisibility" className="px-4 md:px-6 py-16 bg-slate-50">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
                Challenge 5: Overcoming Limited Debugging Visibility
            </h2>

            <div className="mb-8">
                <Image
                    src={QaDebuggingJpeg}
                    alt="Embedded system debugging tools: JTAG probe, oscilloscope, and logic analyzer"
                    className="w-full rounded-md shadow-lg mb-6"
                />
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                Resource Constraints Impact
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                A pervasive challenge in embedded QA is <span className='font-semibold'>limited debugging visibility from inherent resource constraints</span>.{' '}
                <a href="#ref-1" className="text-primary hover:underline">Embedded devices operate with severely restricted RAM, flash storage, and CPU cycles</a>, directly impacting the ability to incorporate extensive debugging code or large log buffers.
            </p>

            <div className="text-sm md:text-base">
                &#34;Every byte of memory and every CPU instruction counts. Debugging features are often among the first to be sacrificed to meet performance targets or size limitations.&#34;
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-semibold my-4">
                Proactive Logging Strategy
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                Given inherent limitations, <span className='font-semibold'>proactive logging strategy and specialized debugging tools become critical</span>. Engineers must strategically instrument code with conditional logging, lightweight circular buffers, and trace points.{' '}
                <a href="#ref-239" className="text-primary hover:underline">Specialized hardware debugging tools are essential</a> for effective troubleshooting.
            </p>

            <div className="flex flex-col gap-4">
                <div className="border border-gray-300 rounded-md p-3">
                    <div className="flex items-center mb-3">
                        <FaBug className="text-blue-600 mr-2" />
                        <h4 className="font-serif text-lg font-semibold">On-Chip Debuggers</h4>
                    </div>
                    <p className="text-sm text-gray-600">Direct microcontroller connection for breakpoints and memory inspection</p>
                </div>
                <div className="border border-gray-300 rounded-md p-3">
                    <div className="flex items-center mb-3">
                        <FaWaveSquare className="text-green-600 mr-2" />
                        <h4 className="font-serif text-lg font-semibold">Real-Time Tracing</h4>
                    </div>
                    <p className="text-sm text-gray-600">ETM/ITM for program execution data streams</p>
                </div>
                <div className="border border-gray-300 rounded-md p-3">
                    <div className="flex items-center mb-3">
                        <FaChartLine className="text-purple-600 mr-2" />
                        <h4 className="font-serif text-lg font-semibold">Logic Analyzers</h4>
                    </div>
                    <p className="text-sm text-gray-600">Monitoring hardware signals and interactions</p>
                </div>
                <div className="border border-gray-300 rounded-md p-3">
                    <div className="flex items-center mb-3">
                        <FaSatellite className="text-orange-600 mr-2" />
                        <h4 className="font-serif text-lg font-semibold">Remote Logging</h4>
                    </div>
                    <p className="text-sm text-gray-600">Device management platforms for field diagnostics</p>
                </div>
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-semibold my-4">
                Field Data Acquisition Challenges
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                Acquiring real-time debugging data from fielded devices presents <span className='font-semibold'>distinct challenges</span>.{' '}
                <a href="#ref-238" className="text-blue-600">Devices may have intermittent connectivity, limited network access, or be deployed in remote locations</a>. Security considerations and constrained bandwidth complicate remote diagnostics.
            </p>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                Contrast with Web/Mobile
            </h3>
            <p className="text-gray-600 leading-relaxed">
                Web and mobile development benefits from <span className='font-semibold'>rich debugging environments and ubiquitous logging</span>.{' '}
                <a href="#ref-2" className="text-blue-600">Browser developer tools, server logs, mobile IDEs, and crash reporting systems</a> provide comprehensive diagnostics, making issue identification significantly more straightforward.
            </p>
        </section>
    )
}

export default QaDebugging
