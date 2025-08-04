import React from 'react'
import { FaCogs, FaMemory } from 'react-icons/fa';

const section3Data = {
    title: "Key Optimization Strategies for Low Latency and High Performance",
    strategies: [
        {
            title: "Low-Level Memory Management",
            description:
                "Effective memory management using DMAbuf for zero-copy operations is foundational to real-time performance.",
            citation: "[78]",
            points: [
                "DMAbuf sharing between hardware components",
                "Zero-copy buffer transfer",
                "Pre-allocated buffer pools",
                "Hardware-friendly memory types"
            ]
        },
        {
            title: "Encoder/Decoder Tuning",
            description:
                "Meticulous tuning of encoders and decoders involves selecting hardware-accelerated codecs and configuring for low-latency operation.",
            citation: "[173]",
            points: [
                "Hardware-accelerated H.264/H.265",
                "Minimal B-frame usage",
                "Optimized rate control",
                "Frequent keyframes"
            ]
        }
    ],
    pipelineStructure: {
        title: "Pipeline Structure & Element Configuration",
        content: [
            {
                subtitle: "Hardware Acceleration",
                description:
                    "Use platform-specific elements like vpuenc_h264 for i.MX8 VPU, mppvideodec for Rockchip MPP, and TI-specific codecs for Sitara processors.",
                citation: "[122]"
            },
            {
                subtitle: "Queue Management",
                description:
                    "Configure queue elements with appropriate max-size-buffers and leaky properties to balance latency and stability.",
                citation: "[92]"
            }
        ]
    },
    systemLevelOptimizations: {
        title: "System-Level Optimizations: Kernels and BSPs",
        description:
            "Customizing Board Support Packages (BSPs) for rapid hardware response is fundamental to achieving low-latency performance. This includes real-time Linux kernels and driver optimization.",
        citation: "[166]",
        optimizations: [
            {
                title: "PREEMPT-RT Kernel",
                description:
                    "Reduces scheduling latencies and improves determinism for multimedia tasks."
            },
            {
                title: "DMA Optimization",
                description:
                    "Efficient data movement between peripherals and memory without CPU burden."
            },
            {
                title: "CPU Frequency Scaling",
                description:
                    "Maintain high performance during multimedia processing with appropriate governors."
            }
        ]
    }
};

const GstreamerOptimization = () => {
    return (
        <section id="section-3" className="px-4 md:px-6 py-16">
            {/* Section Title */}
            <div className="mb-8">
                <span className="text-primary me-3">03</span>
                <h2 className="font-serif text-3xl font-semibold inline">
                    {section3Data.title}
                </h2>
            </div>

            <div>
                {/* Optimization Strategies */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {section3Data.strategies.map((strategy, index) => (
                        <div key={index} className="bg-slate-50 p-8 rounded-md border border-gray-300">
                            <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-3">
                                {index === 0 ? (
                                    <FaMemory className="text-primary mr-3" />
                                ) : (
                                    <FaCogs className="text-primary mr-3" />
                                )}
                                {strategy.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {strategy.description} <a href="#ref-78" className="text-primary hover:underline">{strategy.citation}</a>
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                {strategy.points.map((point, i) => (
                                    <li key={i}>• {point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Pipeline Structure */}
                <div className="p-8 rounded-md mb-12">
                    <h3 className="font-serif text-2xl font-semibold mb-6">
                        {section3Data.pipelineStructure.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {section3Data.pipelineStructure.content.map((item, index) => (
                            <div key={index}>
                                <h4 className="font-semibold mb-3">{item.subtitle}</h4>
                                <p className="text-gray-600 text-sm mb-4">
                                    {item.description} <a href="#ref-122" className="text-primary hover:underline">{item.citation}</a>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* System-Level Optimizations */}
                <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-md">
                    <h3 className="font-serif text-2xl font-semibold mb-6">
                        {section3Data.systemLevelOptimizations.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                        {section3Data.systemLevelOptimizations.description}{' '}
                        <a href="#ref-166" className="text-primary hover:underline">
                            {section3Data.systemLevelOptimizations.citation}
                        </a>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {section3Data.systemLevelOptimizations.optimizations.map((optimization, index) => (
                            <div key={index} className="bg-white p-4 rounded-md border border-gray-300">
                                <h4 className="font-semibold mb-2">{optimization.title}</h4>
                                <p className="text-gray-600 text-sm">{optimization.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GstreamerOptimization
