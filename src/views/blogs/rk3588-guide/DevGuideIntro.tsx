import React from 'react'

const overviewData = {
    title: "Overview",
    description: "The RK3588 represents a significant leap in multimedia processing capabilities for embedded systems. This guide covers the essential components and their integration for developing sophisticated camera, video processing, and AI applications.",
    paragraph: "The Rockchip RK3588 is a high-performance System-on-Chip designed for ARM-based PCs, edge computing devices, and personal mobile internet devices. Its architecture integrates multiple multimedia processing units enabling complex tasks such as high-resolution video capture, image processing, hardware-accelerated encoding/decoding, and AI inference.",
    citation: {
        text: "[40]",
        link: "https://embedded.cherry.de/jaguar-sbc-rk3588-amr-user-manual/latest.pdf"
    },
    keyComponents: [
        {
            title: "Camera Input",
            color: "purple-600",
            items: [
                "MIPI CSI-2 interfaces",
                "Four high-resolution cameras",
                "VICAP processing unit"
            ]
        },
        {
            title: "Image Processing",
            color: "cyan-600",
            items: [
                "ISP 3.0 with 3A algorithms",
                "Rockchip Graphics Accelerator",
                "Image Enhancement Processor"
            ]
        },
        {
            title: "Video Processing",
            color: "amber-600",
            items: [
                "Multimedia Processing Platform",
                "H.264/H.265 encoding",
                "Hardware-accelerated decoding"
            ]
        },
        {
            title: "AI Acceleration",
            color: "emerald-600",
            items: [
                "6 TOPS NPU performance",
                "RKNN SDK support",
                "Multiple framework support"
            ]
        }
    ]
};

const DevGuideIntro = () => {
    return (
        <section id="overview" className="px-4 md:px-6 py-16">
            {/* Overview Title */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {overviewData.title}
            </h2>

            {/* Highlight Box */}
            <div className="highlight-box">
                <p className="text-gray-600 mb-4">{overviewData.description}</p>
            </div>

            {/* Paragraph with Citation */}
            <p className="mb-6 text-gray-600">
                {overviewData.paragraph}
                <a
                    href={overviewData.citation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {overviewData.citation.text}
                </a>
            </p>

            {/* Key Multimedia Components */}
            <div className="architecture-diagram">
                <h3 className="font-serif text-xl font-semibold mb-4">
                    Key Multimedia Components
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {overviewData.keyComponents.map((component, index) => (
                        <div key={index} className="component-card">
                            <h4 className={`font-semibold text-${component.color} mb-2`}>
                                {component.title}
                            </h4>
                            <ul className="text-sm space-y-1">
                                {component.items.map((item, index) => (
                                    <li key={index} className='text-gray-600'>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DevGuideIntro
