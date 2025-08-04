import React from 'react'

const MultiViewerNdi = () => {
    return (
        <section id="ndi" className="px-4 md:px-6 py-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">NDI Multiview</h2>

            {/* Network-Centric Approach */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 md:p-8 mb-8 border-l-4 border-primary">
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">Network-Centric Approach</h3>
                <p className="text-gray-600 text-sm md:text-base mb-6">
                    NDI (Network Device Interface) is a high-performance video-over-IP standard developed by NewTek, designed to enable video and audio signals to be transmitted over standard IP networks with low latency{' '}
                    <a href="https://www.itslgroup.com/av-technology/ndi-video-production-systems/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        [55]
                    </a>.
                </p>

                {/* NDI Types */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white rounded-md p-4 border border-gray-200">
                        <h4 className="font-semibold mb-2 text-sm md:text-base">NDI High Bandwidth</h4>
                        <p className="text-sm text-gray-600">Full quality, visually lossless</p>
                    </div>
                    <div className="bg-white rounded-md p-4 border border-gray-200">
                        <h4 className="font-semibold mb-2 text-sm md:text-base">NDI|HX</h4>
                        <p className="text-sm text-gray-600">Compressed, lower bandwidth</p>
                    </div>
                    <div className="bg-white rounded-md p-4 border border-gray-200">
                        <h4 className="font-semibold mb-2 text-sm md:text-base">NDI|HX3</h4>
                        <p className="text-sm text-gray-600">Enhanced compression efficiency</p>
                    </div>
                </div>
            </div>

            {/* System Requirements */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                <h4 className="font-serif text-xl font-semibold mb-4 text-sm md:text-base">System Requirements</h4>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                    Professional NDI multiviewer solutions often recommend powerful hardware configurations to handle multiple high-resolution NDI streams{' '}
                    <a href="https://www.kiloview.com/en/multiview-pro/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        [30]
                    </a>:
                </p>

                {/* Hardware Specs and Network Requirements */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Hardware Specs */}
                    <div>
                        <h5 className="font-semibold mb-2">Hardware Specs</h5>
                        <ul className="space-y-1 text-sm text-gray-600">
                            <li>• i7-11700 or equivalent 8-core CPU</li>
                            <li>• 32GB DDR4 RAM</li>
                            <li>• 1TB SSD storage</li>
                            <li>• 10G dual SFP+ NIC</li>
                        </ul>
                    </div>

                    {/* Network Requirements */}
                    <div>
                        <h5 className="font-semibold mb-2">Network Requirements</h5>
                        <ul className="space-y-1 text-sm text-gray-600">
                            <li>• 10Gbps network recommended</li>
                            <li>• Managed switches preferred</li>
                            <li>• Quality of Service (QoS) support</li>
                            <li>• Low latency path optimization</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Key Advantages */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="font-semibold text-lg mb-3 text-primary">Key Advantages</h4>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Network Simplicity */}
                    <div>
                        <h5 className="font-semibold mb-2">Network Simplicity</h5>
                        <p className="text-sm text-gray-600 mb-3">
                            Replaces numerous SDI/HDMI cables with a single network connection, offering scalability and flexible source placement.
                        </p>
                    </div>

                    {/* AutoDiscovery */}
                    <div>
                        <h5 className="font-semibold mb-2">AutoDiscovery</h5>
                        <p className="text-sm text-gray-600 mb-3">
                            Simplifies adding sources with automatic network discovery, making setup and reconfiguration effortless.
                        </p>
                    </div>

                    {/* Alpha Channel Support */}
                    <div>
                        <h5 className="font-semibold mb-2">Alpha Channel Support</h5>
                        <p className="text-sm text-gray-600 mb-3">
                            Inherent alpha channel transmission enables advanced graphics overlays and transparency effects.
                        </p>
                    </div>

                    {/* Ecosystem Integration */}
                    <div>
                        <h5 className="font-semibold mb-2">Ecosystem Integration</h5>
                        <p className="text-sm text-gray-600 mb-3">
                            Seamless integration with production software like vMix, Wirecast, and professional hardware solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MultiViewerNdi
