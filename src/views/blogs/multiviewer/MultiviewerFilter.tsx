import React from 'react'
import { FaInfoCircle, FaMinusCircle, FaPlusCircle } from 'react-icons/fa'

const MultiviewerFilter = () => {
    return (
        <section id="ffmpeg" className="px-4 md:px-6 py-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">FFmpeg filter_complex</h2>

            {/* Architecture & Capabilities */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 mb-8 border-l-4 border-primary">
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-4">Architecture & Capabilities</h3>
                <p className="text-gray-600 text-sm md:text-base mb-6">
                    FFmpeg is a comprehensive, open-source multimedia framework capable of handling a vast array of audio and video processing tasks, including encoding, decoding, transcoding, muxing, demuxing, streaming, filtering, and playback{' '}
                    <a
                        href="https://medium.com/@contact_45426/ffmpeg-vs-gstreamer-a-comprehensivecomparison-23217be772d3"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        [3]
                    </a>.
                </p>

                {/* Strengths and Challenges */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Strengths */}
                    <div>
                        <h4 className="font-semibold text-base md:text-lg mb-3">Strengths</h4>
                        <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                            <li className="flex items-start gap-3">
                                <FaPlusCircle className="text-green-500 mt-1" />
                                <span>Extensive codec and filter support</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaPlusCircle className="text-green-500 mt-1" />
                                <span>Powerful scripting capabilities</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaPlusCircle className="text-green-500 mt-1" />
                                <span>Excellent for batch processing</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaPlusCircle className="text-green-500 mt-1" />
                                <span>Comprehensive documentation</span>
                            </li>
                        </ul>
                    </div>

                    {/* Challenges */}
                    <div>
                        <h4 className="font-semibold text-base md:text-lg mb-3">Challenges</h4>
                        <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                            <li className="flex items-start gap-3">
                                <FaMinusCircle className="text-red-500 mt-1" />
                                <span>High CPU usage for real-time processing</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaMinusCircle className="text-red-500 mt-1" />
                                <span>Complex filter graph syntax</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaMinusCircle className="text-red-500 mt-1" />
                                <span>Limited real-time interactivity</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaMinusCircle className="text-red-500 mt-1" />
                                <span>Steep learning curve</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Technical Implementation */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                <h4 className="font-serif text-xl md:text-2xl font-bold mb-4">Technical Implementation</h4>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                    For a <span className='font-semibold'>9-source 1080p60 grid</span>, FFmpeg would use the{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded text-accent">xstack</code> filter or multiple{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded text-accent">overlay</code> {`filters to arrange the video streams. Each input would be assigned a unique label (e.g., [0:v], [1:v]), then scaled and positioned within the output canvas.`}
                </p>

                {/* Command Example */}
                <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-auto">
                    <code className="text-green-400 text-sm">
                       {` ffmpeg -i input0.mp4 -i input1.mp4 ... -i input8.mp4`} <br />
                        &nbsp;&nbsp;-filter_complex <br />
                       {` "[0:v]scale=640:360[v0];[1:v]scale=640:360[v1];...;[v0][v1]...[v8]xstack=inputs=9:layout=0_0|w0_0|w0+w1_0|0_h0|w0_h0|w0+w1_h0|0_h0+h1|w0_h0+h1|w0+w1_h0+h1" `}<br />
                        &nbsp;&nbsp;{`-c:v libx264 -r 60 output.mp4`}
                    </code>
                </div>

                {/* Info Tooltip */}
                <p className="text-sm text-gray-600 flex flex-wrap items-center gap-3">
                    <FaInfoCircle />
                    {`The actual command would be more complex, requiring careful synchronization, hardware acceleration parameters, and quality settings.`}
                </p>
            </div>
        </section>
    )
}

export default MultiviewerFilter
