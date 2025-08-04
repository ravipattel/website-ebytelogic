import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const ConclusionData = {
    title: "The Path to Low-Latency Embedded Multimedia",
    intro: {
        description:
            "Delivering real-time multimedia on embedded ARM hardware using GStreamer is a complex endeavor that requires a meticulous, multi-layered optimization strategy addressing every component from the GStreamer pipeline down to the kernel and BSP."
    },
    successFactors: [
        "Fine-tuning encoders and decoders for speed and efficiency",
        "Leveraging hardware acceleration capabilities",
        "Implementing zero-copy memory management",
        "Structuring pipelines for minimal latency"
    ],
    framework: {
        title: "eByteLogic's Framework",
        description:
            "By focusing on end-to-end pipeline optimization, real-time AV sync, and deep ARM expertise, it's possible to achieve the low-latency, high-performance multimedia delivery required by demanding applications.",
        goal:
            "Transform GStreamer into a finely-tuned engine capable of delivering seamless multimedia experiences on resource-constrained embedded devices."
    },
    callToAction: {
        title: "Ready to Optimize?",
        subtitle: "Start your embedded multimedia journey with expert GStreamer optimization"
    }
};

const GstreamerConclusion = () => {
    return (
        <section id="section-6" className="py-8 px-6 bg-slate-50">
            {/* Section Title */}
            <div className="mb-8">
                <span className="text-primary mr-3">06</span>
                <h2 className="font-serif text-4xl font-semibold inline">
                    {ConclusionData.title}
                </h2>
            </div>

            <div>
                {/* Intro Description */}
                <div className="bg-white p-8 rounded-md shadow-sm mb-12">
                    <p className="text-gray-600 leading-relaxed mb-8">
                        {ConclusionData.intro.description}
                    </p>

                    {/* Key Success Factors */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-serif text-xl font-semibold mb-4">
                                Key Success Factors
                            </h3>
                            <ul className="space-y-3">
                                {ConclusionData.successFactors.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <FaArrowRight className='text-primary mt-1' />
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* eByteLogic's Framework */}
                        <div>
                            <h3 className="font-serif text-xl font-semibold mb-4">
                                {ConclusionData.framework.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{ConclusionData.framework.description}</p>

                            <div className="bg-primary/5 p-4 rounded-md">
                                <p className="text-sm text-gray-600">{ConclusionData.framework.goal}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="inline-block px-8 py-4 rounded-md">
                        <div className="text-2xl font-semibold mb-2">{ConclusionData.callToAction.title}</div>
                        <div className="text-sm">{ConclusionData.callToAction.subtitle}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GstreamerConclusion
