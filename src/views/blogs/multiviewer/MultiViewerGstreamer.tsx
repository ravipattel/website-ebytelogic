import React from 'react'
import { FaExpand, FaExpandArrowsAlt, FaSearchMinus, FaSearchPlus } from 'react-icons/fa'

const MultiViewerGstreamer = () => {
    return (
        <section id="gstreamer" className="px-4 md:px-6 py-16 bg-slate-50">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">GStreamer compositor</h2>

            {/* Pipeline Architecture */}
            <div className="bg-white to-white rounded-md p-4 md:p-8 mb-8 border-l-4 border-primary">
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">Pipeline Architecture</h3>
                <p className="text-gray-600 text-sm md:text-base mb-6">
                    GStreamer is a powerful, open-source multimedia framework designed with a highly modular architecture,
                    allowing developers to construct complex media processing pipelines by connecting various components, known
                    as elements{' '}
                    <a href="https://medium.com/@contact_45426/ffmpeg-vs-gstreamer-a-comprehensivecomparison-23217be772d3" className="citation-link" target="_blank" rel="noopener noreferrer">
                        [2]
                    </a>.
                </p>

                {/* Mermaid Diagram */}
                <div className="mermaid-container">
                    <div className="mermaid-controls flex gap-4 text-gray-600">
                        <button className="mermaid-control-btn zoom-in" title="Zoom In">
                            <FaSearchPlus />
                        </button>
                        <button className="mermaid-control-btn zoom-out" title="Zoom Out">
                            <FaSearchMinus />
                        </button>
                        <button className="mermaid-control-btn reset-zoom" title="Reset Zoom">
                            <FaExpandArrowsAlt />
                        </button>
                        <button className="mermaid-control-btn fullscreen" title="Fullscreen">
                            <FaExpand />
                        </button>
                    </div>
                    <div className="mermaid" id="gstreamerpipeline">
                        {/* Mermaid Diagram Code goes here */}
                    </div>
                </div>
            </div>

            {/* Features and Hardware Acceleration */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Compositor Element Features */}
                <div className="bg-white rounded-md p-6 shadow-lg">
                    <h4 className="font-semibold text-base md:text-lg mb-3">Compositor Element Features</h4>
                    <p className="text-gray-600 text-sm md:text-base mb-4">
                        The <code className="bg-gray-100 px-2 py-1 rounded text-accent">compositor</code> element accepts video
                        streams in formats like AYUV, VUYA, ARGB, and BGRA and can handle colorspace conversion{' '}
                        <a href="https://gstreamer.freedesktop.org/documentation/compositor/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                            [4]
                        </a>.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                            <span className='font-semibold'>xpos, ypos:</span> Control source positioning
                        </li>
                        <li>
                            <span className='font-semibold'>width, height:</span> Set source dimensions
                        </li>
                        <li>
                            <span className='font-semibold'>alpha:</span> Transparency control (0.0-1.0)
                        </li>
                        <li>
                            <span className='font-semibold'>zorder:</span> Layer stacking order
                        </li>
                    </ul>
                </div>

                {/* Hardware Acceleration */}
                <div className="bg-white rounded-md p-6 shadow-lg">
                    <h4 className="font-semibold text-lg mb-3">Hardware Acceleration</h4>
                    <p className="text-gray-600 text-sm md:text-base mb-4">
                        GStreamer supports hardware acceleration through various plugins, which can be crucial for achieving real-time
                        performance with high-resolution, high-frame-rate multiviews.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                            <span className='font-semibold'>VAAPI:</span> Intel hardware acceleration
                        </li>
                        <li>
                            <span className='font-semibold'>NVDEC/NVENC:</span> NVIDIA GPU acceleration
                        </li>
                        <li>
                            <span className='font-semibold'>nvcompositor:</span> CUDA-based compositing
                        </li>
                        <li>
                            <span className='font-semibold'>GL elements:</span> OpenGL-based processing
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MultiViewerGstreamer
