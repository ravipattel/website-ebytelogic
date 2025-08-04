import Image from 'next/image';

import React from 'react'

import GuideDevelopment from '@/src/assets/images/blogs/blogDetails/guideDevelopment.svg'

const developmentData = {
    title: "Software Development Environment",
    developmentSetupTitle: "Development Setup",
    developmentSetupDescription:
        "Setting up a robust development environment requires the Rockchip Linux SDK and proper cross-compilation toolchain.",
    developmentSetupCitation: {
        text: "[5]",
        link: "https://gitlab.com/rk3588_linux"
    },
    requiredComponentsTitle: "Required Components",
    coreLibraries: [
        "Rockchip Linux SDK (Linux 5.10)",
        "MPP library with hardware codecs",
        "RGA libraries for graphics acceleration",
        "RKNN SDK for NPU support",
        "V4L2 libraries for camera interface"
    ],
    multimediaFrameworks: [
        "FFmpeg with rkmpp and rkrga support",
        "OpenCV for image processing",
        "GStreamer with Rockchip plugins",
        "Cross-compilation toolchain",
        "Development headers and libraries"
    ],
    integratedPipelineTitle: "Integrated Pipeline Example",
    integratedPipelineDescription:
        "A complete multimedia pipeline integrates camera input, ISP processing, AI inference, and video encoding.",
    integratedPipelineCitation: {
        text: "[88]",
        link: "https://blog.csdn.net/Leon_Chenl/article/details/145496335"
    },
    pipelineDiagramImage: GuideDevelopment,
    comparisonTable: [
        {
            stage: "Image Acquisition",
            component: "Camera Sensor",
            function: "Raw image capture",
            keyApiLibrary: "MIPI CSI-2, I2C"
        },
        {
            stage: "Initial Processing",
            component: "VICAP",
            function: "MIPI data reception",
            keyApiLibrary: "V4L2 Media Controller"
        },
        {
            stage: "Image Enhancement",
            component: "ISP 3.0",
            function: "3A, color processing",
            keyApiLibrary: "librkisp.so, IQ files"
        },
        {
            stage: "Pre-processing",
            component: "RGA",
            function: "Resizing, format conversion",
            keyApiLibrary: "RGA API, scale_rkrga"
        },
        {
            stage: "AI Inference",
            component: "NPU",
            function: "Object detection, recognition",
            keyApiLibrary: "RKNN API"
        },
        {
            stage: "Video Encoding",
            component: "MPP",
            function: "H.264/H.265 encoding",
            keyApiLibrary: "h264_rkmpp, mpph264enc"
        },
        {
            stage: "Output",
            component: "Network/Storage",
            function: "Streaming, recording",
            keyApiLibrary: "RTSP, ONVIF"
        }
    ],
    aiCameraTitle: "Real-World Application: AI IP Camera",
    aiCameraFeatureOverview: {
        hardware: [
            "IMX415 4K camera sensor",
            "LubanCat 4 RK3588S2 board",
            "Human infrared sensor (SR501)"
        ],
        aiCapabilities: [
            "YOLOv11 object detection (80 classes)",
            "RetinaFace + Facenet recognition",
            "Event-triggered recording"
        ],
        softwareStack:
            "C++, FFmpegrockchip, OpenCV, RKNN API, LVGL, ONVIF protocol support"
    }
};

const DevGuideDevelopment = () => {
    return (
        <section id="development" className="px-4 md:px-6 py-16 bg-slate-50">
            {/* Title of the Section */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {developmentData.title}
            </h2>

            {/* Development Setup */}
            <h3 className="font-serif text-2xl font-semibold mb-4">
                {developmentData.developmentSetupTitle}
            </h3>
            <p className="mb-6 text-gray-600">
                {developmentData.developmentSetupDescription}
                <a
                    href={developmentData.developmentSetupCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {developmentData.developmentSetupCitation.text}
                </a>
            </p>

            {/* Required Components */}
            <div className="bg-white p-4 rounded-md border border-gray-300 shadow-md mb-6">
                <h4 className="font-semibold text-purple-600 mb-3">
                    {developmentData.requiredComponentsTitle}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Core Libraries */}
                    <div>
                        <span className='font-semibold'>Core Libraries:</span>
                        <ul className="text-sm mt-1 space-y-1">
                            {developmentData.coreLibraries.map((item, index) => (
                                <li key={index} className='text-gray-600'>• {item}</li>
                            ))}
                        </ul>
                    </div>
                    {/* Multimedia Frameworks */}
                    <div>
                        <span className='font-semibold'>Multimedia Frameworks:</span>
                        <ul className="text-sm mt-1 space-y-1">
                            {developmentData.multimediaFrameworks.map((item, index) => (
                                <li key={index} className='text-gray-600'>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Integrated Pipeline Example */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {developmentData.integratedPipelineTitle}
            </h3>
            <p className="mb-4 text-gray-600">
                {developmentData.integratedPipelineDescription}
                <a
                    href={developmentData.integratedPipelineCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {developmentData.integratedPipelineCitation.text}
                </a>
            </p>

            {/* Pipeline Diagram */}
            <div className="architecture-diagram">
                <h3 className="font-serif text-xl font-semibold mb-4">
                    Complete Multimedia Pipeline
                </h3>
                <Image
                    src={developmentData.pipelineDiagramImage}
                    alt="Complete Multimedia Pipeline"
                    className="object-cover rounded-md"
                />
            </div>

            {/* Comparison Table */}
            <div className="comparison-table mt-8">
                <table className="w-full text-left border-collapse rounded-md overflow-hidden shadow-sm">
                    <thead className="bg-teal-700 text-white text-sm">
                        <tr>
                            <th className="px-4 py-3 font-medium">Stage</th>
                            <th className="px-4 py-3 font-medium">Component</th>
                            <th className="px-4 py-3 font-medium">Function</th>
                            <th className="px-4 py-3 font-medium">Key API/Library</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-600">
                        {developmentData.comparisonTable.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <td className="px-4 py-3">{row.stage}</td>
                                <td className="px-4 py-3">{row.component}</td>
                                <td className="px-4 py-3">{row.function}</td>
                                <td className="px-4 py-3">{row.keyApiLibrary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* AI Camera Application */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {developmentData.aiCameraTitle}
            </h3>
            <div className="bg-white p-4 rounded-md border border-gray-300 shadow-md">
                <h4 className="font-semibold text-purple-600 mb-3">Feature Overview</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Hardware */}
                    <div>
                        <span className='font-semibold'>Hardware:</span>
                        <ul className="text-sm mt-1 space-y-1">
                            {developmentData.aiCameraFeatureOverview.hardware.map((item, index) => (
                                <li key={index} className='text-gray-600'>• {item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* AI Capabilities */}
                    <div>
                        <span className='font-semibold'>AI Capabilities:</span>
                        <ul className="text-sm mt-1 space-y-1">
                            {developmentData.aiCameraFeatureOverview.aiCapabilities.map((item, index) => (
                                <li key={index} className='text-gray-600'>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Software Stack */}
                <div className="mt-4">
                    <span className='font-semibold'>Software Stack:</span>
                    <p className="text-sm mt-1">
                        {developmentData.aiCameraFeatureOverview.softwareStack}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default DevGuideDevelopment
