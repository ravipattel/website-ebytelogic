import React from 'react'

const approachData = {
    approach: {
        title: "eByteLogic's Approach to GStreamer Optimization",
        description:
            "eByteLogic specializes in engineering high-performance multimedia software and embedded streaming systems, with a strong emphasis on achieving ultra-low-latency solutions through comprehensive optimization strategies.",
        citation: "[166]",
        keyPoints: [
            "Real-time AV synchronization expertise",
            "Protocol bridging capabilities",
            "ARM BSP customization"
        ]
    },
    corePrinciples: [
        "Optimize encoding/decoding processes",
        "Accelerate data transmission",
        "Customize BSPs for rapid hardware response",
        "Enable edge processing to eliminate cloud delays",
        "Continuous live latency monitoring"
    ],
    armExpertise: {
        yearsOfExperience: "10+",
        optimizedPipelines: "50+",
        bestAchievedLatency: "15ms"
    }
};

const GstreamerApproach = () => {
    return (
        <section id="section-2" className="px-4 md:px-6 py-16 bg-slate-50">
            {/* Section Title */}
            <div className="mb-8">
                <span className="text-primary me-3">02</span>
                <h2 className="font-serif text-3xl font-semibold text-deep-blue inline">
                    {approachData.approach.title}
                </h2>
            </div>

            {/* eByteLogic's Approach Overview */}
            <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-gray-600 mb-6">
                            {approachData.approach.description}{' '}
                            <a href="#ref-166" className="text-primary hover:underline">
                                {approachData.approach.citation}
                            </a>
                        </p>
                        <div className="space-y-4">
                            {/* Key Points */}
                            {approachData.approach.keyPoints.map((point, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <i className="fas fa-check-circle text-earth-tone"></i>
                                    <span className="text-gray-600 font-medium">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Core Principles */}
                    <div className="bg-primary/5 text-gray-600 p-6 rounded-xl">
                        <h4 className="font-serif text-xl font-semibold mb-4 text-black">Core Principles</h4>
                        <ul className="space-y-2 text-sm">
                            {/* Core Principles List */}
                            {approachData.corePrinciples.map((principle, index) => (
                                <li key={index}>• {principle}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Leveraging ARM Expertise */}
            <div className="highlight-box p-8 rounded-xl">
                <h3 className="font-serif text-2xl font-semibold text-deep-blue mb-6">
                    Leveraging ARM Expertise
                </h3>
                <p className="text-gray-600 mb-6">
                    Deep expertise spans various ARM architectures including NXP i.MX and Rockchip SoCs, enabling effective navigation of hardware acceleration, memory management, and power constraints. Core competencies include{' '}
                    <span className='font-semibold'>
                        media pipeline tuning with specific emphasis on latency optimization and buffer management
                    </span>{' '}
                    <a href="#ref-166" className="text-primary hover:underline">
                        [166]
                    </a>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* ARM Stats */}
                    <div className="text-center bg-primary/5 rounded-md p-5">
                        <div className="text-3xl font-semibold text-primary mb-2">{approachData.armExpertise.yearsOfExperience}</div>
                        <div className="text-sm text-gray-600">Years ARM Experience</div>
                    </div>
                    <div className="text-center bg-primary/5 rounded-md p-5">
                        <div className="text-3xl font-semibold text-primary mb-2">{approachData.armExpertise.optimizedPipelines}</div>
                        <div className="text-sm text-gray-600">Optimized Pipelines</div>
                    </div>
                    <div className="text-center bg-primary/5 rounded-md p-5">
                        <div className="text-3xl font-semibold text-primary mb-2">{approachData.armExpertise.bestAchievedLatency}</div>
                        <div className="text-sm text-gray-600">Best Achieved Latency</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GstreamerApproach
