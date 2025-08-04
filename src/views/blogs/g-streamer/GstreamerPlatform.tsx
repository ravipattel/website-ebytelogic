import React from 'react'
import { FaClock, FaFile } from 'react-icons/fa';
import { FaMicrochip } from 'react-icons/fa6';

const PlatformData = {
    title: "Platform-Specific Considerations and Techniques",
    platforms: [
        {
            name: "NXP i.MX8 Series",
            icon: FaMicrochip,
            keyElements: [
                "vpuenc_h264 for encoding",
                "v4l2src with DMABUF import",
                "imxvideoconvert_g2d",
                "waylandsink for display"
            ],
            optimization:
                "Configure ratecontrol=2, EncodingPreset=2, and SingleNalUnit=TRUE for low-latency encoding",
            citation: "[77]"
        },
        {
            name: "Rockchip RK356x",
            icon: FaMicrochip,
            keyElements: [
                "mppvideodec for decoding",
                "mpph264enc for encoding",
                "DMABUF memory sharing",
                "RKISP driver integration"
            ],
            optimization:
                "Use CQP rate control, minimal GOP sizes, and disabled B-frames for low-latency scenarios",
            citation: "[22]"
        },
        {
            name: "TI Sitara",
            icon: FaMicrochip,
            keyElements: [
                "IVA-HD for video codecs",
                "C66x DSP for processing",
                "ticodecbin elements",
                "DMA buffer management"
            ],
            optimization:
                "Leverage TI's Processor SDK with optimized GStreamer plugins and CMA configuration for video buffers",
            citation: "[150]"
        }
    ],
    commonOptimizationPatterns: [
        {
            title: "Zero-Copy Architecture",
            icon: FaFile,
            points: [
                "DMAbuf import/export across elements",
                "Hardware-accelerated memory sharing",
                "Avoid unnecessary buffer copies",
                "Memory pool pre-allocation"
            ]
        },
        {
            title: "Latency Optimization",
            icon: FaClock,
            points: [
                "Real-time kernel configurations",
                "CPU affinity and priority scheduling",
                "Interrupt latency minimization",
                "Continuous performance monitoring"
            ]
        }
    ]
};

const GstreamerPlatform = () => {
    return (
        <section id="section-4" className="px-4 md:px-6 py-16 bg-slate-50">
            {/* Section Title */}
            <div className="mb-8">
                <span className="text-primary mr-3">04</span>
                <h2 className="font-serif text-3xl font-semibold inline">
                    {PlatformData.title}
                </h2>
            </div>

            <div className="prose prose-lg max-w-none">
                {/* Platforms */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {PlatformData.platforms.map((platform, index) => (
                        <div key={index} className="bg-white p-8 rounded-md shadow-sm">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 text-white text-lg">
                                    <platform.icon />
                                </div>
                                <h3 className="font-serif text-xl font-semibold">
                                    {platform.name}
                                </h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Key Elements</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {platform.keyElements.map((element, i) => (
                                            <li key={i}>• {element}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Optimization</h4>
                                    <p className="text-sm text-gray-600">
                                        {platform.optimization} <a href="#ref-77" className="text-primary hover:underline">{platform.citation}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Common Optimization Patterns */}
                <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-md">
                    <h3 className="font-serif text-2xl font-semibold mb-6">Common Optimization Patterns</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {PlatformData.commonOptimizationPatterns.map((pattern, index) => (
                            <div key={index}>
                                <h4 className="font-semibold mb-4 flex items-center gap-3">
                                    <pattern.icon className="text-primary" />
                                    {pattern.title}
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {pattern.points.map((point, i) => (
                                        <li key={i}>• {point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GstreamerPlatform
