import React from 'react'

const QaConclusions = () => {
    return (
        <section id="conclusion" className="px-4 md:px-6 py-16">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                Conclusion: Embracing Embedded QA Complexities
            </h2>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                Recap of Key Challenges
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                Embedded QA presents unique challenges differentiating it from web/mobile testing. These stem from{' '}
                <span className='font-semibold'>tight hardware-software integration, real-time operational constraints, and severe resource limitations</span>. Key factors include hardware dependency requiring HIL testing, low-level hardware interaction complexity, OTA update risks, asynchronous timing challenges, and limited debugging visibility.
            </p>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                Specialized Skills Imperative
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                These challenges underscore the <span className='font-semibold'>imperative for specialized skills and methodologies</span>. Embedded QA engineers need span software testing fundamentals plus{' '}
                <span className='font-semibold'>deep understanding of hardware principles, electronics, and real-time operating systems</span>. Proficiency with specialized tools and a holistic system-level perspective are crucial for success.
            </p>

            <div className="text-sm md:text-base">
                &#34;The future of embedded QA will demand continuous learning and innovation to keep pace with rapid advancements in connectivity, AI at the edge, and increasingly complex system-on-chip designs.&#34;
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-semibold my-4">
                Evolving Landscape
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                The embedded systems landscape evolves with <span className='font-semibold'>IoT connectivity, edge AI, and complex SoC designs</span>. This evolution brings new QA dimensions: expanded attack surfaces requiring security testing, AI algorithm validation, and ensuring safety in increasingly autonomous systems. <span className='font-semibold'>QA methodologies must adapt continuously</span> to address these emerging complexities.
            </p>
        </section>
    )
}

export default QaConclusions
