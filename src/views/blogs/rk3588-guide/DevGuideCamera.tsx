import React from 'react'

const cameraConfigData = {
    title: "Camera Configuration & V4L2 Integration",
    deviceTreeConfigTitle: "Device Tree Configuration",
    deviceTreeConfigDescription:
        "Configuring the Device Tree Source (DTS) is fundamental for enabling camera functionality. The DTS defines hardware components, their interconnections, and parameters for the Linux kernel.",
    deviceTreeConfigCitation: {
        text: "[65]",
        link: "https://wiki.tfirefly.com/en/ROC-RK3588S-PC/usage_camera.html"
    },
    codeBlock: `/* Example IMX577 sensor configuration */
&;i2c3 { status = "okay"; imx577: imx577@1a { compatible =
"sony,imx577"; reg = <0x1a>; clocks = <&clk_cam_24m>; clock-names
= "xvclk"; power-domains = <&power RK3588_PD_VI>; port { imx577_out:
endpoint { remote-endpoint = <&mipi_in_ucam0>; data-lanes = <1 2 3 4>;
}; }; }; };`,
    v4l2IntegrationTitle: "V4L2 Integration",
    v4l2IntegrationDescription:
        "The Video for Linux 2 (V4L2) subsystem provides the standard framework for camera interaction. User-space applications use ioctl() commands to query capabilities, set parameters, and manage buffers.",
    v4l2IntegrationCitation: {
        text: "[20]",
        link: "https://blog.csdn.net/qq_37669342/article/details/145032331"
    },
    essentialV4l2Commands: [
        "VIDIOC_QUERYCAP - Device capabilities",
        "VIDIOC_ENUM_FMT - Supported formats",
        "VIDIOC_S_FMT - Set format",
        "VIDIOC_REQBUFS - Request buffers",
        "VIDIOC_QBUF/VIDIOC_DQBUF - Buffer management",
        "VIDIOC_STREAMON/OFF - Streaming control"
    ],
    debuggingTools: [
        "media-ctl - Pipeline inspection",
        "v4l2-ctl - Device control",
        "dmesg | grep MIPI - Kernel messages",
        "i2cdetect - I2C bus scanning"
    ],
    v4l2CaptureWorkflow: [
        "Open V4L2 device (/dev/videoX)",
        "Query capabilities and enumerate formats",
        "Set desired format (resolution, pixel format)",
        "Request and map buffers",
        "Queue buffers for capture",
        "Start streaming",
        "Process frames in capture loop",
        "Stop streaming and cleanup"
    ]
};

const DevGuideCamera = () => {
    return (
        <section id="camera-config" className="px-4 md:px-6 py-16">
            {/* Title of the Section */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {cameraConfigData.title}
            </h2>

            {/* Device Tree Configuration */}
            <h3 className="font-serif text-2xl font-semibold mb-4">
                {cameraConfigData.deviceTreeConfigTitle}
            </h3>
            <p className="mb-4 text-gray-600">
                {cameraConfigData.deviceTreeConfigDescription}
                <a
                    href={cameraConfigData.deviceTreeConfigCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {cameraConfigData.deviceTreeConfigCitation.text}
                </a>
            </p>

            {/* Code Block for Example DTS Configuration */}
            <div className="bg-[#1E293B] text-white p-4 rounded-md mb-6">
                <pre>
                    <code className='text-sm'>{cameraConfigData.codeBlock}</code>
                </pre>
            </div>

            {/* V4L2 Integration */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {cameraConfigData.v4l2IntegrationTitle}
            </h3>
            <p className="mb-4 text-gray-600">
                {cameraConfigData.v4l2IntegrationDescription}
                <a
                    href={cameraConfigData.v4l2IntegrationCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {cameraConfigData.v4l2IntegrationCitation.text}
                </a>
            </p>

            {/* V4L2 Commands and Debugging Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-gray-300 rounded-md shadow-md p-4">
                    <h4 className="font-semibold text-purple-600 mb-3">
                        Essential V4L2 Commands
                    </h4>
                    <ul className="space-y-2 text-sm">
                        {cameraConfigData.essentialV4l2Commands.map((command, index) => (
                            <li key={index} className='text-gray-600'>{command}</li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white border border-gray-300 rounded-md shadow-md p-4">
                    <h4 className="font-semibold text-cyan-600 mb-3">Debugging Tools</h4>
                    <ul className="space-y-2 text-sm">
                        {cameraConfigData.debuggingTools.map((tool, index) => (
                            <li key={index} className='text-gray-600'>{tool}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Common V4L2 Capture Workflow */}
            <div className="highlight-box">
                <p className="font-semibold mb-2">Common V4L2 Capture Workflow:</p>
                <ol className="list-decimal list-inside space-y-1">
                    {cameraConfigData.v4l2CaptureWorkflow.map((step, index) => (
                        <li key={index} className='text-gray-600'>{step}</li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default DevGuideCamera
