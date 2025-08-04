import Image from 'next/image'

import React from 'react'
import { FaChartLine, FaCheckCircle, FaTachometerAlt, FaVideo } from 'react-icons/fa'
import MultiviewerJpg from '@/src/assets/images/blogs/blogDetails/multiviewer.jpg'

const MultiViewerHero = () => {
    return (
        <section className="relative overflow-hidden px-6 py-8">
            {/* Main Content Area */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-md p-8 flex flex-wrap justify-between gap-4 relative">
                <div className="absolute inset-0 rounded-md"></div>
                <div className="relative z-10">
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        <span className="italic">Multiviewer</span>
                        <br />
                        <span className="text-yellow-500">Smack-down</span>
                    </h1>
                    <p className="text-gray-300 mb-8 max-w-2xl italic text-sm md:text-base">
                        FFmpeg filter_complex vs. GStreamer compositor vs. NDI Multiview: A comprehensive analysis of 9-source 1080p60 multiviewer solutions
                    </p>
                    <div className="flex flex-wrap gap-3 items-center space-x-6 text-gray-300">
                        <div className="flex items-center gap-2 text-sm md:text-base">
                            <FaVideo className="text-accent" />
                            <span>9-Source Grid</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm md:text-base">
                            <FaTachometerAlt className="text-accent" />
                            <span>1080p60 Output</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm md:text-base">
                            <FaChartLine className="text-accent" />
                            <span>Performance Analysis</span>
                        </div>
                    </div>
                </div>
                <Image src={MultiviewerJpg} alt='multiviewer' className='w-96' />
            </div>
            {/* Side Elements */}
            <div className='my-6'>
                <div className="bg-white rounded-md p-6 shadow-lg mb-6">
                    <h3 className="font-serif font-bold text-lg mb-3">Key Findings</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start space-x-2">
                            <FaCheckCircle className="text-accent mt-1" />
                            <span>FFmpeg excels in offline rendering and scripted tasks</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <FaCheckCircle className="text-accent mt-1" />
                            <span>GStreamer offers balanced real-time performance with GPU acceleration</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <FaCheckCircle className="text-accent mt-1" />
                            <span>NDI leads in live production environments with network flexibility</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-md p-6 border border-accent/20">
                    <h3 className="font-serif font-bold text-base md:text-lg mb-3 text-primary">Decision Framework</h3>
                    <p className="text-sm text-gray-600">
                        Choose based on your specific needs: real-time requirements, existing infrastructure, feature complexity, and operational expertise.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MultiViewerHero
