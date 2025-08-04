import React from 'react'
import { FaCheck } from 'react-icons/fa';

const robustData = {
    title: "Achieving Robust and Reliable Real-Time Multimedia",
    subsections: [
        {
            title: "Managing Audio-Video Synchronization",
            content: {
                description:
                    "Maintaining precise AV sync is critical, with desynchronization becoming noticeable beyond ±150ms. eByteLogic's expertise in 'Real-time AV Sync' involves comprehensive timestamp management",
                citation: "[166]",
                mechanisms: [
                    "Accurate PTS generation at source elements",
                    "Minimized processing jitter in both paths",
                    "Hardware-accelerated decoding/encoding"
                ],
                syncMechanisms: [
                    "GstClock global timeline management",
                    "RTCP sender reports for network streams",
                    "Platform-specific sink synchronization",
                    "Custom sync elements when required"
                ]
            }
        },
        {
            title: "Ensuring Consistent Performance Under Load",
            content: {
                description:
                    "Embedded systems run multiple services concurrently, causing resource contention. Consistent performance requires careful pipeline tuning and system-level optimizations.",
                citation: "[166]",
                subsections: [
                    {
                        title: "Pipeline Tuning",
                        points: [
                            "Appropriate queue sizing",
                            "Leaky bucket strategies",
                            "Buffer pool management",
                            "Element configuration"
                        ]
                    },
                    {
                        title: "System Priority",
                        points: [
                            "Real-time scheduling (SCHED_FIFO)",
                            "CPU affinity and isolation",
                            "Interrupt latency reduction",
                            "Power management tuning"
                        ]
                    },
                    {
                        title: "Monitoring",
                        points: [
                            "Continuous latency tracking",
                            "Resource utilization alerts",
                            "Performance profiling",
                            "Bottleneck identification"
                        ]
                    }
                ]
            }
        },
        {
            title: "Debugging and Profiling GStreamer Pipelines",
            content: {
                subsections: [
                    {
                        title: "Built-in Tools",
                        points: [
                            "GST_DEBUG environment variable control",
                            "gst-launch-1.0 with verbose options",
                            "Tracer framework for latency measurement",
                            "Platform-specific debug utilities"
                        ]
                    },
                    {
                        title: "System Tools",
                        points: [
                            "perf for CPU profiling",
                            "valgrind for memory analysis",
                            "Kernel debug logs (dmesg)",
                            "Vendor-specific debug tools"
                        ]
                    }
                ],
                expertInsight:
                    "Ravi Patel of eByteLogic emphasizes looking beyond network issues to consider codecs, BSP, and buffering as potential latency sources, requiring comprehensive debugging across the entire system stack.",
                citation: "[185]"
            }
        }
    ]
};

const GstreamerRobust = () => {
    return (
        <section id="section-5" className="px-4 md:px-6 py-16">
            {/* Section Title */}
            <div className="mb-8">
                <span className="text-primary mr-3">05</span>
                <h2 className="font-serif text-3xl font-semibold inline">
                    {robustData.title}
                </h2>
            </div>

            <div>
                {/* Subsections */}
                {robustData.subsections.map((subsection, index) => (
                    <div key={index} className="bg-primary/5 border-l-4 border-primary p-8 rounded-md mb-12">
                        <h3 className="font-serif text-2xl font-semibold mb-6">
                            {subsection.title}
                        </h3>

                        {/* Description and Citation */}
                        <p className="text-gray-600 mb-6">
                            {subsection.content.description}{' '}
                            <a href="#ref-166" className="text-primary hover:underline">
                                {subsection.content.citation}
                            </a>
                        </p>

                        {/* Mechanisms / Points */}
                        {subsection.title === 'Managing Audio-Video Synchronization' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <div className="space-y-3">
                                        {(subsection.content.mechanisms || []).map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <FaCheck className='text-primary' />
                                                <span className="text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white border border-gray-300 p-6 rounded-md">
                                    <h4 className="font-semibold mb-4">Sync Mechanisms</h4>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        {(subsection.content.syncMechanisms || []).map((mechanism, i) => (
                                            <li key={i}>• {mechanism}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* Other subsections (Performance Under Load, Debugging) */}
                        {subsection.title !== 'Managing Audio-Video Synchronization' && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {(subsection.content.subsections || []).map((item, i) => (
                                    <div key={i} className="bg-white border border-gray-300 p-4 rounded-md">
                                        <h4 className="font-semibold mb-2">{item.title}</h4>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            {item.points.map((point, j) => (
                                                <li key={j}>• {point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Expert Insight */}
                        {subsection.title === 'Debugging and Profiling GStreamer Pipelines' && (
                            <div className="mt-6 p-4 bg-white/10 rounded-lg">
                                <p className="text-sm text-gray-600">
                                    <span className='font-semibold'>Expert Insight:</span> {subsection.content.expertInsight}{' '}
                                    <a href="#ref-185" className="text-primary hover:underline">
                                        {subsection.content.citation}
                                    </a>
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default GstreamerRobust
