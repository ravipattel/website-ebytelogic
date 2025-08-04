import React from 'react'

const MultiViewerPerformance = () => {
    return (
        <section id="performance" className="px-4 md:px-6 py-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">Performance Analysis</h2>

            {/* Performance Characteristics */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 md:p-8 mb-8 border border-blue-200">
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">Estimated Performance Characteristics</h3>
                <p className="text-gray-600 text-sm md:text-base mb-6">
                    For a 9-source, 1080p60 multiviewer, performance varies significantly based on architecture, hardware acceleration, and implementation approach.
                </p>
            </div>

            <div className="grid gap-8">
                {/* Real-time Performance Table */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-50 px-4 md:px-8 py-4">
                        <h3 className="font-serif text-xl md:text-2xl font-semibold text-white">Real-Time Performance Comparison</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold text-sm md:text-base">Feature/Tool</th>
                                    <th className="px-6 py-4 text-left font-semibold text-sm md:text-base">FFmpeg filter_complex</th>
                                    <th className="px-6 py-4 text-left font-semibold text-sm md:text-base">GStreamer compositor</th>
                                    <th className="px-6 py-4 text-left font-semibold text-sm md:text-base">NDI Multiview</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 font-semisemibold text-sm md:text-base">CPU Usage</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm md:text-base">Very High (70-100%)</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm md:text-base">Medium to High (30-60% with GPU accel)</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm md:text-base">Medium to High (40-70%)</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 font-semisemibold text-sm md:text-base">GPU Usage</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm md:text-base">Low (unless specific HW accel used)</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm md:text-base">Medium to High (if GPU accel enabled)</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm md:text-base">Medium (depends on decoder/encoder HW accel)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-semisemibold text-sm md:text-base">RAM Usage</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm md:text-base">Moderate to High (several GB)</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm md:text-base">Moderate (several GB)</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm md:text-base">Moderate (several GB)</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 font-semisemibold text-sm md:text-base">Primary Load</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm md:text-base">CPU-based decoding, scaling, compositing</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm md:text-base">CPU/GPU shared (decoding, compositing)</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm md:text-base">Network receive, decoding, compositing</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-semisemibold text-sm md:text-base">Key Factors</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm md:text-base">Filter efficiency, codec choice, CPU power</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm md:text-base">Plugin choice, HW accel, pipeline design</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm md:text-base">NDI version, network, HW accel on RX/TX</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Performance Insights */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Real-Time Performance Insights */}
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h4 className="font-semibold text-base md:text-lg mb-4">Real-Time Performance Insights</h4>
                        <div className="space-y-4">
                            <div className="border-l-4 border-red-400 pl-4">
                                <h5 className="font-semisemibold text-red-700">FFmpeg Challenges</h5>
                                <p className="text-sm text-gray-600">
                                    High CPU usage makes real-time 9-source 1080p60 operation challenging without significant hardware resources or careful optimization.
                                </p>
                            </div>
                            <div className="border-l-4 border-yellow-400 pl-4">
                                <h5 className="font-semisemibold text-yellow-700">GStreamer Balance</h5>
                                <p className="text-sm text-gray-600">
                                    Offers better balance with GPU acceleration and multi-threading support. Pipeline optimization is key to achieving real-time performance.
                                </p>
                            </div>
                            <div className="border-l-4 border-green-400 pl-4">
                                <h5 className="font-semisemibold text-green-700">NDI Network Focus</h5>
                                <p className="text-sm text-gray-600">
                                    Performance tied to network infrastructure and receiver capabilities. Low latency design benefits live production environments.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Offline Rendering Performance */}
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h4 className="font-semibold text-lg mb-4">Offline Rendering Performance</h4>
                        <div className="space-y-4">
                            <div className="border-l-4 border-blue-400 pl-4">
                                <h5 className="font-semisemibold text-blue-700">FFmpeg Excellence</h5>
                                <p className="text-sm text-gray-600">
                                    Excels in offline scenarios where CPU can be fully utilized without real-time constraints. Excellent for batch processing and scripting.
                                </p>
                            </div>
                            <div className="border-l-4 border-purple-400 pl-4">
                                <h5 className="font-semisemibold text-purple-700">GStreamer Flexibility</h5>
                                <p className="text-sm text-gray-600">
                                    Can leverage GPU acceleration for faster rendering when configured optimally. Pipeline flexibility allows for throughput optimization.
                                </p>
                            </div>
                            <div className="border-l-4 border-gray-400 pl-4">
                                <h5 className="font-semisemibold text-gray-700">NDI Recording</h5>
                                <p className="text-sm text-gray-600">
                                    Typically involves recording streams first, then processing. Performance similar to FFmpeg/GStreamer for file-based operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MultiViewerPerformance
