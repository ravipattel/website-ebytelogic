import React from 'react'

const DevGuideTroubleShooting = () => {
    return (
        <section id="troubleshooting" className="px-4 md:px-6 py-16">
            <h2 className="font-serif text-3xl font-semibold mb-6">
                Troubleshooting Common Issues
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Camera Sensor Issues */}
                <div className="bg-white border border-gray-300 rounded-md shadow-md p-4">
                    <h3 className="font-semibold text-red-600 mb-3">Camera Sensor Issues</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><span className='font-semibold'>Sensor not detected:</span> Check I2C connections, DTS configuration, power supplies</li>
                        <li><span className='font-semibold'>No video nodes:</span> Verify media controller links with media-ctl</li>
                        <li><span className='font-semibold'>Corrupted images:</span> Validate MIPI configuration and buffer sizes</li>
                        <li><span className='font-semibold'>I2C communication errors:</span> Use i2cdetect to verify sensor address</li>
                    </ul>
                </div>

                {/* V4L2 Capture Problems */}
                <div className="bg-white border border-gray-300 rounded-md shadow-md p-4">
                    <h3 className="font-semibold text-orange-600 mb-3">V4L2 Capture Problems</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><span className='font-semibold'>Format negotiation failed:</span> Check supported formats with v4l2-ctl</li>
                        <li><span className='font-semibold'>Buffer management errors:</span> Ensure proper QBUF/DQBUF sequence</li>
                        <li><span className='font-semibold'>Streaming hangs:</span> Verify buffer count and memory mapping</li>
                        <li><span className='font-semibold'>Performance issues:</span> Check frame rate and resolution settings</li>
                    </ul>
                </div>

                {/* ISP & 3A Tuning */}
                <div className="bg-white border border-gray-300 rounded-md shadow-md p-4">
                    <h3 className="font-semibold text-yellow-600 mb-3">ISP &amp; 3A Tuning</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><span className='font-semibold'>Poor image quality:</span> Verify correct IQ file loading</li>
                        <li><span className='font-semibold'>Slow 3A convergence:</span> Adjust AE/AWB parameters in RKISP Tuner</li>
                        <li><span className='font-semibold'>Color issues:</span> Calibrate with proper color charts</li>
                        <li><span className='font-semibold'>Performance bottlenecks:</span> Balance load across dual ISPs</li>
                    </ul>
                </div>

                {/* MPP/RGA Integration */}
                <div className="bg-white border border-gray-300 rounded-md shadow-md p-4">
                    <h3 className="font-semibold text-green-600 mb-3">MPP/RGA Integration</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><span className='font-semibold'>Encoding failures:</span> Check input format compatibility</li>
                        <li><span className='font-semibold'>RGA operation errors:</span> Validate buffer alignment and strides</li>
                        <li><span className='font-semibold'>Performance optimization:</span> Use zero-copy mechanisms</li>
                        <li><span className='font-semibold'>Framework integration:</span> Verify plugin installation</li>
                    </ul>
                </div>
            </div>

            {/* RKNN Model Conversion & Inference */}
            <div className="highlight-box mb-8">
                <h3 className="font-semibold mb-3">RKNN Model Conversion &amp; Inference Issues</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <span className='font-semibold'>Conversion Problems:</span>
                        <ul className="text-sm mt-1 space-y-1 list-disc pl-5 text-gray-600">
                            <li>Unsupported operations in original model</li>
                            <li>Quantization accuracy loss</li>
                            <li>Incorrect tensor specifications</li>
                            <li>Framework version compatibility</li>
                        </ul>
                    </div>
                    <div>
                        <span className='font-semibold'>Runtime Issues:</span>
                        <ul className="text-sm mt-1 space-y-1 list-disc pl-5 text-gray-600">
                            <li>Model file accessibility on device</li>
                            <li>Input data format mismatch</li>
                            <li>Memory allocation failures</li>
                            <li>NPU driver/firmware compatibility</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Debugging Checklist */}
            <div className="bg-white border border-gray-300 rounded-md shadow-md p-4 mt-8">
                <h3 className="font-semibold text-blue-600 mb-3">Debugging Checklist</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                    <li>Verify hardware connections and power supplies</li>
                    <li>Check DTS configuration for all components</li>
                    <li>Validate sensor detection with media-ctl and i2cdetect</li>
                    <li>Test basic V4L2 functionality with v4l2-ctl</li>
                    <li>Confirm IQ file loading and 3A functionality</li>
                    <li>Test individual components before integration</li>
                    <li>Monitor system logs (dmesg) for error messages</li>
                    <li>Use performance profiling tools to identify bottlenecks</li>
                </ol>
            </div>
        </section>
    )
}

export default DevGuideTroubleShooting
