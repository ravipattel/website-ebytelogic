import React from 'react'
import { FaNetworkWired, FaProjectDiagram, FaTerminal } from 'react-icons/fa'

const MultiViewerIntro = () => {
    return (
        <section id="overview" className="px-4 md:px-6 py-8 bg-slate-50">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">Overview of Multiviewer Solutions</h2>
            <div className="mb-12">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                    The task of creating a multiviewer, specifically a <span className='font-semibold'>9-source grid outputting at 1080p60</span>, presents several technical challenges, primarily related to synchronizing multiple video streams, compositing them into a single output, and managing system resources efficiently.
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Three prominent technologies often considered for such a task are FFmpeg with its
                    <code className="bg-gray-100 px-2 py-1 rounded text-yellow-600 md:mx-2">filter_complex</code> capabilities,
                    GStreamer utilizing its <code className="bg-gray-100 px-2 py-1 rounded text-accent">compositor</code>
                    element, and NDI (Network Device Interface) Multiview solutions.
                    Each approaches the problem with different architectures, strengths, and typical use cases.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* FFmpeg Card */}
                <div className="bg-gray-50 rounded-md p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                        <FaTerminal className="text-xl md:text-2xl mr-3" />
                        <h3 className="font-serif text-lg md:text-xl font-semibold">FFmpeg</h3>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">
                        Comprehensive multimedia framework with unparalleled filter flexibility, excellent for scripted tasks and offline rendering.
                    </p>
                </div>

                {/* GStreamer Card */}
                <div className="bg-gray-50 rounded-md p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                        <FaProjectDiagram className="text-xl md:text-2xl mr-3" />
                        <h3 className="font-serif text-lg md:text-xl font-semibold">GStreamer</h3>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">
                        Pipeline-based framework providing balanced real-time performance and customization, especially with GPU acceleration.
                    </p>
                </div>

                {/* NDI Card */}
                <div className="bg-gray-50 rounded-md p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                        <FaNetworkWired className="text-xl md:text-2xl mr-3" />
                        <h3 className="font-serif text-lg md:text-xl font-semibold">NDI</h3>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">
                        Network-centric solution excelling in live production environments with low latency and IP-based integration.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MultiViewerIntro
