import React from 'react'
import { FaLayerGroup, FaPalette, FaVolumeUp } from 'react-icons/fa'

const MultiViewerFeature = () => {
    return (
        <section id="feature" className="px-4 md:px-6 py-16 bg-slate-50">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">Feature Comparison</h2>

            {/* Alpha Blending Capabilities */}
            <div className="bg-white rounded-xl shadow-lg p-5 md:p-8 mb-8">
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-6 flex flex-wrap gap-4 items-center">
                    <FaLayerGroup className="text-primary mr-3" />
                    Alpha Blending Capabilities
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {/* FFmpeg */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-base md:text-lg mb-3">FFmpeg</h4>
                        <p className="text-gray-600 text-sm md:text-base mb-3">
                            Robust alpha blending primarily through the <code className="bg-gray-100 px-1 rounded">overlay</code> filter. Supports various pixel formats with alpha channels (rgba, yuva420p).
                        </p>
                        <div className="text-xs text-gray-600">
                            <span className='font-semibold'>Control:</span> Filter-based, highly flexible but complex configuration
                        </div>
                    </div>

                    {/* GStreamer */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-base md:text-lg mb-3">GStreamer</h4>
                        <p className="text-gray-600 text-sm md:text-base mb-3">
                            Native support via <code className="bg-gray-100 px-1 rounded">compositor</code> pad alpha property. Accepts AYUV, VUYA, ARGB, BGRA formats{' '}
                            <a href="https://gstreamer.freedesktop.org/documentation/compositor/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">[232]</a>.
                        </p>
                        <div className="text-xs text-gray-600">
                            <span className='font-semibold'>Control:</span> Per-pad alpha (0.0-1.0), structured and dynamic
                        </div>
                    </div>

                    {/* NDI */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-base md:text-lg mb-3">NDI</h4>
                        <p className="text-gray-600 text-sm md:text-base mb-3">
                            Alpha channel support depends on receiving application. vMix automatically supports alpha when detected on NDI sources{' '}
                            <a href="https://www.vmix.com/help27/vMixUserGuide.pdf" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">[271]</a>.
                        </p>
                        <div className="text-xs text-gray-600">
                            <span className='font-semibold'>Control:</span> Application-dependent, often user-friendly UI
                        </div>
                    </div>
                </div>
            </div>

            {/* Color Correction & Saturation */}
            <div className="bg-white rounded-xl shadow-lg p-5 md:p-8 mb-8">
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-6 flex flex-wrap gap-4 items-center">
                    <FaPalette className="text-primary mr-3" />
                    Color Correction & Saturation
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {/* FFmpeg */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-base md:text-lg mb-3">FFmpeg</h4>
                        <p className="text-gray-600 text-sm md:text-base mb-3">
                            Comprehensive filter suite including <code className="bg-gray-100 px-1 rounded">eq</code>, <code className="bg-gray-100 px-1 rounded">huesaturation</code>, <code className="bg-gray-100 px-1 rounded">colorlevels</code>.
                        </p>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Saturation: 0.0 (B&W) to 3.0 (high saturation)</li>
                            <li>• Hue rotation and color range targeting</li>
                            <li>• Per-channel black/white point adjustment</li>
                        </ul>
                    </div>

                    {/* GStreamer */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-base md:text-lg mb-3">GStreamer</h4>
                        <p className="text-gray-600 text-sm md:text-base mb-3">
                            Modular elements like <code className="bg-gray-100 px-1 rounded">videobalance</code>, <code className="bg-gray-100 px-1 rounded">gamma</code>, <code className="bg-gray-100 px-1 rounded">videoconvert</code>.
                        </p>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Pipeline integration before compositor</li>
                            <li>• Hardware-accelerated color processing</li>
                            <li>• Dynamic property adjustment via API</li>
                        </ul>
                    </div>

                    {/* NDI */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-base md:text-lg mb-3">NDI</h4>
                        <p className="text-gray-600 text-sm md:text-base mb-3">
                            Color correction handled by receiving application. vMix provides comprehensive Color Adjust settings{' '}
                            <a href="https://www.vmix.com/help27/vMixUserGuide.pdf" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">[272]</a>.
                        </p>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Application UI-based controls</li>
                            <li>• Saturation sliders and advanced correction</li>
                            <li>• Real-time adjustment during live operation</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Audio Mixing Support */}
            <div className="bg-white rounded-xl shadow-lg p-5 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-6 flex flex-wrap gap-4 items-center">
                    <FaVolumeUp className="text-primary mr-3" />
                    Audio Mixing Support
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {/* FFmpeg */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-base md:text-lg mb-3">FFmpeg</h4>
                        <p className="text-gray-600 text-sm md:text-base mb-3">
                            Powerful audio mixing via <code className="bg-gray-100 px-1 rounded">amix</code> filter. Extensive additional filters for volume, pan, delay, compression.
                        </p>
                        <div className="text-xs text-gray-600">
                            <span className='font-semibold'>Complexity:</span> Highly configurable but command-line intensive
                        </div>
                    </div>

                    {/* GStreamer */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-base md:text-lg mb-3">GStreamer</h4>
                        <p className="text-gray-600 text-sm md:text-base mb-3">
                            Dedicated audio elements: <code className="bg-gray-100 px-1 rounded">audiomixer</code>, <code className="bg-gray-100 px-1 rounded">volume</code>, <code className="bg-gray-100 px-1 rounded">audiopanorama</code>.
                        </p>
                        <div className="text-xs text-gray-600">
                            <span className='font-semibold'>Complexity:</span> Parallel audio/video pipelines with synchronization
                        </div>
                    </div>

                    {/* NDI */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-base md:text-lg mb-3">NDI</h4>
                        <p className="text-gray-600 text-sm md:text-base mb-3">
                            Audio mixing capabilities depend on receiving application. Professional software like vMix includes full audio mixer interfaces.
                        </p>
                        <div className="text-xs text-gray-600">
                            <span className='font-semibold'>Complexity:</span> Integrated audio/video control in a single application
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MultiViewerFeature
