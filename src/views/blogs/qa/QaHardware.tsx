import Image from 'next/image'

import React from 'react'
import { FaExpand, FaExpandArrowsAlt, FaSearchMinus, FaSearchPlus } from 'react-icons/fa'

import QaHardwareJpg from '@/src/assets/images/blogs/blogDetails/qaHardware.jpg'

const QaHardware = () => {
    return (
        <section id="hardware-dependency" className="px-4 md:px-6 py-16 bg-slate-50">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
                Challenge 1: Hardware Dependency and HIL Testing
            </h2>

            <div className="mb-8">
                <Image
                    src={QaHardwareJpg}
                    alt="HIL testing equipment showing embedded hardware connected to test interfaces"
                    className="w-full object-cover rounded-lg shadow-lg mb-6"
                />
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                The Inextricable Link to Physical Hardware
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                Embedded systems are defined by their <span className='font-semibold'>intimate connection to physical hardware</span>. The software directly controls and responds to physical components including sensors, actuators, and specialized hardware interfaces like{' '}
                <a href="#ref-31" className="text-primary">GPIO, I2C, SPI, UART, and BLE</a>. The behavior and performance of embedded software are <span className='font-semibold'>inextricably linked to hardware characteristics</span>, including timing, electrical properties, and environmental responses.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6 text-sm md:text-base">
                &#34;Testing embedded software effectively often requires the actual hardware or sophisticated simulations that accurately replicate its behavior, as defects related to hardware-software co-design might remain undetected in simulated environments.&#34;
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                The Limitations of Simulation
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                While valuable in early development stages, simulators and emulators have <span className='font-semibold'>inherent limitations when replicating real-world conditions</span>. Achieving perfect fidelity in simulating complex hardware interactions, subtle timing issues, electrical characteristics, and environmental influences is{' '}
                <a href="#ref-3" className="text-primary">extremely difficult and often impractical</a>.
            </p>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                HIL Testing: Bridging the Gap
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                <span className='font-semibold'>Hardware-in-the-Loop (HIL) testing incorporates actual embedded hardware into test setups</span>, connecting devices to test benches with real-time simulation of physical environments. This methodology enables verification of <a href="#ref-9" className="text-primary">complex hardware-software interactions, real-time performance, fault tolerance, and safety mechanisms</a> that are difficult or impossible to assess through software-only simulations.
            </p>

            <div className="my-8">
                <h4 className="font-serif text-lg font-semibold mb-4 text-center">Embedded vs Web/Mobile Testing Environments</h4>
                <div className="mermaid-container">
                    <div className="mermaid-controls text-center mb-4">
                        <button className="mermaid-control-btn hover:bg-blue-600 text-white p-2 rounded-full mr-2" title="Zoom In">
                            <FaSearchPlus />
                        </button>
                        <button className="mermaid-control-btn hover:bg-blue-600 text-white p-2 rounded-full mr-2" title="Zoom Out">
                            <FaSearchMinus />
                        </button>
                        <button className="mermaid-control-btn hover:bg-blue-600 text-white p-2 rounded-full mr-2" title="Reset Zoom">
                            <FaExpandArrowsAlt />
                        </button>
                        <button className="mermaid-control-btn hover:bg-blue-600 text-white p-2 rounded-full" title="Fullscreen">
                            <FaExpand />
                        </button>
                    </div>

                    <div className="mermaid text-sm md:text-base overflow-auto">
                        {` graph LR
            A[&#34;Embedded Systems Testing&#34;] --> B[&#34;Hardware-in-Loop HIL&#34;]
            A --> C[&#34;Physical Prototypes&#34;]
            A --> D[&#34;Signal Analyzers&#34;]
            E[&#34;Web/Mobile Testing&#34;] --> F[&#34;Virtual Machines&#34;]
            E --> G[&#34;Emulators&#34;]
            E --> H[&#34;Cloud Platforms&#34;]
            B --> I[&#34;Complex Setup&#34;]
            C --> J[&#34;Higher Cost&#34;]
            D --> K[&#34;Specialized Skills&#34;]
            F --> L[&#34;Standardized&#34;]
            G --> M[&#34;Scalable&#34;]
            H --> N[&#34;Cost-Effective&#34;]
                        style A fill:#f8fafc,stroke:#1e40af,stroke-width:3px,color:#1e40af
                        style E fill:#f8fafc,stroke:#059669,strokewidth:3px,color:#059669
                        style B fill:#dbeafe,stroke:#1e40af,stroke-width:2px,color:#1e40af
                        style C fill:#dbeafe,stroke:#1e40af,stroke-width:2px,color:#1e40af
                        style D fill:#dbeafe,stroke:#1e40af,stroke-width:2px,color:#1e40af
                        style F fill:#dcfce7,stroke:#059669,stroke-width:2px,color:#059669
                        style G fill:#dcfce7,stroke:#059669,stroke-width:2px,color:#059669
                        style H fill:#dcfce7,stroke:#059669,stroke-width:2px,color:#059669
                        style I fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#92400e
                        style J fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#92400e
                        style K fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#92400e
                        style L fill:#d1fae5,stroke:#059669,stroke-width:2px,color:#065f46
                        style M fill:#d1fae5,stroke:#059669,stroke-width:2px,color:#065f46
                        style N fill:#d1fae5,stroke:#059669,stroke-width:2px,color:#065f46`}
                    </div>
                </div>
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                Contrast with Web/Mobile
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Web and mobile applications operate on <span className='font-semibold'>standardized hardware platforms with abstraction layers</span> that shield applications from direct hardware interaction. This allows testing on emulators and simulators with high confidence, as{' '}
                <a href="#ref-1" className="text-primary">underlying hardware variations are largely managed by the platform</a>.
            </p>
        </section>
    )
}

export default QaHardware
