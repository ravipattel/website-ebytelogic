import React from 'react'
import { FaBroadcastTower, FaFilm, FaMicrochip, FaNetworkWired, FaTachometerAlt } from 'react-icons/fa'

const MultiViewerConclusion = () => {
    return (
        <section id="conclusion" className="px-4 md:px-6 py-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">Conclusion & Recommendations</h2>

            {/* Key Recommendations */}
            <div className="bg-gradient-to-r from-primary/10 to-yellow-50 rounded-xl p-8 mb-8 border border-primary/20">
                <h3 className="font-serif text-2xl font-semibold mb-6">Key Recommendations</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Primary Recommendations */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Primary Recommendations</h4>
                        <ul className="space-y-3 text-gray-600 text-sm md:text-base">
                            <li className="flex items-center gap-3 space-x-3">
                                <FaBroadcastTower className='text-primary' />
                                <div>
                                    <span className='font-semibold'>Broadcast & Live Events:</span> <span className="text-primary">NDI Multiview</span> - Low latency and production integration
                                </div>
                            </li>
                            <li className="flex items-center gap-3 space-x-3">
                                <FaFilm className='text-primary' />
                                <div>
                                    <span className='font-semibold'>Post-Production:</span> <span className="text-primary">FFmpeg</span> - Scriptability and format flexibility
                                </div>
                            </li>
                            <li className="flex items-center gap-3 space-x-3">
                                <FaMicrochip className='text-primary' />
                                <div>
                                    <span className='font-semibold'>Embedded Systems:</span> <span className="text-primary">GStreamer</span> - Custom pipeline optimization
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Performance Insights */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Performance Insights</h4>
                        <ul className="space-y-3 text-gray-600 text-sm md:text-base">
                            <li className="flex items-center gap-3 space-x-3">
                                <FaTachometerAlt className='text-red-500' />
                                <div>
                                    <span className='font-semibold'>Real-time 9-source 1080p60:</span> Requires significant hardware resources regardless of platform
                                </div>
                            </li>
                            <li className="flex items-center gap-3 space-x-3">
                                <FaNetworkWired className='text-blue-500' />
                                <div>
                                    <span className='font-semibold'>Network consideration:</span> NDI requires robust 10Gbps infrastructure for optimal performance
                                </div>
                            </li>
                            <li className="flex items-center gap-3 space-x-3">
                                <FaMicrochip className='text-green-500' />
                                <div>
                                    <span className='font-semibold'>GPU acceleration:</span> Essential for real-time performance with GStreamer and NDI solutions
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Choose the Tool Section */}
            <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                    The choice between FFmpeg <code className="bg-gray-100 px-2 py-1 rounded text-primary font-mono">filter_complex</code>,
                    GStreamer <code className="bg-gray-100 px-2 py-1 rounded text-primary font-mono">compositor</code>, and
                    NDI Multiview for a <span className='font-semibold'>9-source, 1080p60 multiviewer</span> depends on your specific needs:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {/* Choose FFmpeg if... */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h4 className="font-serif text-lg font-semibold mb-3">Choose FFmpeg if:</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• You need unparalleled filter flexibility</li>
                            <li>• Your workflow is scripted/automated</li>
                            <li>• Offline rendering is primary use case</li>
                            <li>• Extensive codec support is required</li>
                            <li>• Command-line expertise is available</li>
                        </ul>
                    </div>

                    {/* Choose GStreamer if... */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h4 className="font-serif text-lg font-semibold mb-3">Choose GStreamer if:</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• You need balanced real-time performance</li>
                            <li>• GPU acceleration is available</li>
                            <li>• Custom application development is planned</li>
                            <li>• Embedded systems deployment is required</li>
                            <li>• Pipeline flexibility is important</li>
                        </ul>
                    </div>

                    {/* Choose NDI if... */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h4 className="font-serif text-base md:text-lg font-semibold mb-3">Choose NDI if:</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• Live production environment</li>
                            <li>• Existing NDI infrastructure exists</li>
                            <li>• Low latency is critical</li>
                            <li>• Network flexibility is required</li>
                            <li>• Ease of setup and operation is priority</li>
                        </ul>
                    </div>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-primary bg-primary/5 p-6 my-8 italic text-sm md:text-base">
                   {` "The multiviewer smack-down reveals that each tool has its domain where it excels. Careful consideration of specific requirements and constraints will lead to the optimal choice for a robust and effective multiviewer solution."`}
                </blockquote>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {`Ultimately, success depends on matching the tool's strengths to your specific use case, available infrastructure, and operational requirements. All three solutions are capable of delivering professional multiviewer functionality when properly configured and deployed on appropriate hardware.`}
                </p>
            </div>
        </section>
    )
}

export default MultiViewerConclusion
