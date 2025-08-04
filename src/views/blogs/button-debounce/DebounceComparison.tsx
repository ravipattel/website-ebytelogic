import React from 'react'
import { FaBatteryHalf, FaCogs, FaDollarSign, FaShieldAlt } from 'react-icons/fa';

const comparisonData = {
    title: "Hardware vs. Software Debounce: A Comprehensive Comparison",
    quickReference: {
        headers: ["Feature", "Hardware Debounce", "Software Debounce"],
        rows: [
            {
                feature: "Cost",
                hardware: "Higher component cost (resistors, capacitors, ICs). Can increase with switch count.",
                software: "Lower component cost (no extra parts). Development time cost is the primary factor."
            },
            {
                feature: "Power Consumption",
                hardware: "Can be very low, especially with CMOS logic. RC circuits may have continuous current draw.",
                software: "Generally low, but requires CPU cycles. Can be optimized with sleep modes and interrupts."
            },
            {
                feature: "Reliability",
                hardware: "Very high and deterministic. Independent of software bugs or CPU load.",
                software: "Can be highly reliable if implemented correctly. Susceptible to software errors and timing issues."
            },
            {
                feature: "Implementation Complexity",
                hardware: "Requires circuit design, component selection, and PCB space. Simpler for the programmer.",
                software: "Requires coding and testing of the debounce algorithm. No extra hardware design needed."
            },
            {
                feature: "Flexibility & Adjustability",
                hardware: "Fixed once components are chosen. Adjusting debounce time requires changing R/C values.",
                software: "Highly flexible. Debounce time and logic can be adjusted easily in code without hardware changes."
            },
            {
                feature: "Processor Load",
                hardware: "Zero load on the main CPU. The signal is clean before it reaches the processor.",
                software: "Consumes CPU cycles for polling or handling interrupts, which can impact performance in time-critical applications."
            },
            {
                feature: "Use Case",
                hardware: "Ideal for critical systems, high-noise environments, or when using a very low-power/low-frequency processor.",
                software: "Ideal for user interfaces, non-critical inputs, and applications where cost and flexibility are priorities."
            }
        ]
    },
    inDepthAnalysis: [
        {
            title: "Cost Analysis",
            icon: FaDollarSign,
            iconColor: "text-green-600",
            content: "The cost implications extend beyond component prices. Hardware debouncing incurs direct costs for each switch (resistors, capacitors, ICs) and consumes PCB real estate. In mass production, these costs become significant. Software debouncing has virtually zero component cost but requires engineering effort for development, testing, and debugging."
        },
        {
            title: "Power Consumption",
            icon: FaBatteryHalf,
            iconColor: "text-red-600",
            content: "Hardware RC circuits contribute to continuous power draw when switches are closed. Software debouncing requires CPU activity but can leverage sleep modes and interrupts for optimization. Advanced techniques like dynamically enabling pull-up resistors can reduce consumption to nanoamp levels."
        },
        {
            title: "Reliability",
            iconColor: "text-black",
            icon: FaShieldAlt,
            content: "Hardware debouncing is generally more robust and reliable. SR latches provide clean, bounce-free signals independent of microcontroller software. This is crucial for safety-critical systems where a single misread input could have serious consequences."
        },
        {
            title: "Flexibility",
            iconColor: "text-purple-600",
            icon: FaCogs,
            content: "Software debouncing offers superior flexibility. Debounce time can be adjusted with a simple code modification, allowing fine-tuning without hardware changes. This is particularly useful during development and for products using different switch types."
        }
    ]
};


const DebounceComparison = () => {
    return (
        <section id="comparison" className="px-4 md:px-6 py-16 bg-slate-50">
            {/* Title */}
            <h2 className="font-serif text-3xl font-semibold mb-12 text-center">
                {comparisonData.title}
            </h2>

            {/* Quick Reference Comparison Table */}
            <div className="mb-12">
                <h3 className="font-serif text-2xl font-semibold mb-6">Quick Reference Comparison</h3>
                <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-sm">
                    <thead>
                        <tr className="bg-teal-700 text-white text-sm">
                            {comparisonData.quickReference.headers.map((header, idx) => (
                                <th key={idx} className="py-3 px-4 font-semibold">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonData.quickReference.rows.map((row, idx) => (
                            <tr
                                key={idx}
                                className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                            >
                                <td className="py-3 px-4 font-medium text-gray-900">{row.feature}</td>
                                <td className="py-3 px-4 text-gray-700">{row.hardware}</td>
                                <td className="py-3 px-4 text-gray-700">{row.software}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            {/* In-depth Analysis */}
            <div className="grid md:grid-cols-2 gap-8">
                {comparisonData.inDepthAnalysis.map((item, idx) => (
                    <div key={idx} className="space-y-8">
                        <div>
                            <h4 className="font-serif text-xl font-semibold mb-4 flex items-center gap-3">
                                <item.icon className={`${item.iconColor}`} />
                                {item.title}
                            </h4>
                            <p className="text-gray-600">{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DebounceComparison
