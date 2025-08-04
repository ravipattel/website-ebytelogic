import React from 'react'
import { FaCircle, FaDesktop, FaExclamationTriangle, FaSearch } from 'react-icons/fa';

const keyConsiderationsData = {
    title: "Key Considerations for Your Project",
    considerations: [
        {
            id: "reliability",
            title: "Maximizing Reliability",
            points: [
                {
                    title: "Critical Systems",
                    description: "For medical devices, aerospace systems, or industrial safety controls, hardware debouncing is preferred. SR latches provide physically guaranteed bounce-free signals, operating independently of software crashes or timing issues.",
                    icon: FaExclamationTriangle,
                    color: "red",
                    citation: "[152]"
                },
                {
                    title: "User Interfaces",
                    description: "For consumer electronics and user interfaces, well-implemented software debounce is often sufficient. The flexibility and cost savings typically outweigh the need for absolute hardware-level reliability.",
                    icon: FaDesktop,
                    color: "blue"
                },
                {
                    title: "Testing & Measurement",
                    description: "Use an oscilloscope to measure actual switch bounce characteristics. This provides critical data for tuning debounce algorithms and selecting appropriate component values for hardware solutions.",
                    icon: FaSearch,
                    color: "purple",
                    citation: "[2]"
                }
            ]
        },
        {
            id: "power",
            title: "Minimizing Power Consumption",
            sections: [
                {
                    title: "Pull-up Resistor Impact",
                    description: "Pull-up resistors create a constant current path when switches are closed. Use the highest practical resistor values to minimize power consumption.",
                    code: "I = Vcc / R\nCurrent through 10kΩ @ 5V = 0.5mA\nCurrent through 100kΩ @ 5V = 0.05mA"
                },
                {
                    title: "Sleep Modes & Interrupts",
                    description: "Implement sleep modes with interrupt-driven wake-up for lowest power consumption. The processor only activates briefly to handle button presses.",
                    diagram: `
graph TD 
  A["Deep Sleep"] -->|"Button Press"| B["Wake on Interrupt"] 
  B --> C["Run Debounce Routine"] 
  C --> D["Process Button Event"] 
  D --> A
          `
                }
            ]
        },
        {
            id: "cost",
            title: "Cost Analysis",
            sections: [
                {
                    title: "Hardware Costs",
                    items: [
                        { label: "RC Circuit", cost: "$0.05-0.10 per button (resistor + capacitor)", color: "blue" },
                        { label: "SR Latch", cost: "$0.50-1.00 per button (IC + resistors + SPDT switch)", color: "green" },
                        { label: "Dedicated IC", cost: "$1-5 per chip (multiple channels)", color: "purple" }
                    ]
                },
                {
                    title: "Software Costs",
                    items: [
                        { label: "Component Cost", cost: "$0 (uses existing microcontroller)", color: "green" },
                        { label: "Development Time", cost: "2-20 hours (depending on complexity)", color: "orange" },
                        { label: "Testing & Debugging", cost: "Additional engineering effort", color: "red" }
                    ]
                },
                {
                    title: "Production Volume Considerations",
                    items: [
                        {
                            subtitle: "Prototyping Phase",
                            description: "Focus on speed and flexibility. Software debouncing allows rapid iteration and easy adjustment without hardware modifications."
                        },
                        {
                            subtitle: "Mass Production",
                            description: "Focus shifts to cost, reliability, and manufacturability. Hardware solutions may be more economical for high-volume products despite higher initial cost."
                        }
                    ]
                }
            ]
        }
    ]
};

const DebounceKey = () => {
    return (
        <section id="considerations" className="px-4 md:px-6 py-16">
            {/* Title */}
            <h2 className="font-serif text-3xl font-semibold mb-12 text-center">
                {keyConsiderationsData.title}
            </h2>

            {/* Considerations */}
            {keyConsiderationsData.considerations.map((consideration, index) => (
                <div key={index} id={consideration.id} className='mt-16'>
                    <h3 className="font-serif text-2xl font-bold mb-8">
                        {consideration.title}
                    </h3>

                    {/* Points or Sections */}
                    {consideration.points ? (
                        <div className="grid lg:grid-cols-3 gap-8">
                            {consideration.points.map((point, idx) => (
                                <div
                                    key={idx}
                                    className={`bg-${point.color}-50 border-l-4 border-${point.color}-600 p-6 rounded-r-lg`}
                                >
                                    <h4 className="font-serif text-xl font-semibold mb-4">
                                        <point.icon className={`text-${point.color}-600 mr-2 inline`} />
                                        {point.title}
                                    </h4>
                                    <p className="text-gray-600">
                                        {point.description} {point.citation && <a href="#" className="text-primary hover:underline">{point.citation}</a>}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : null}

                    {/* Sections with Items */}
                    {consideration.sections && (
                        <div className="bg-white rounded-lg p-8 shadow-sm">
                            <div className="grid md:grid-cols-2 gap-8">
                                {consideration.sections.map((section: any, idx: any) => (
                                    <div key={idx}>
                                        <h4 className="font-serif text-xl font-semibold mb-4">
                                            {section.title}
                                        </h4>
                                        <p className="text-gray-600 mb-4">{section.description}</p>

                                        {/* If section has code */}
                                        {section.code && (
                                            <div className="bg-gray-100 p-4 rounded">
                                                <code>{section.code}</code>
                                            </div>
                                        )}

                                        {/* If section has diagram */}
                                        {section.diagram && (
                                            <div className="mermaid-container">
                                                <div className="mermaid">{section.diagram}</div>
                                            </div>
                                        )}

                                        {/* Render items if they exist */}
                                        {section.items && (
                                            <ul className="space-y-4 text-gray-600">
                                                {section.items.map((item: any, itemIdx: any) => (
                                                    <li key={itemIdx} className="flex items-start gap-3">
                                                        <FaCircle className={`text-${item.color || 'gray'}-600 mt-1 text-base`} />
                                                        <div>
                                                            {item.label && item.cost ? (
                                                                <span>
                                                                    <span className="font-semibold">{item.label}:</span> {item.cost}
                                                                </span>
                                                            ) : (
                                                                <>
                                                                    <p className="font-semibold">{item.subtitle}</p>
                                                                    <p className="text-sm">{item.description}</p>
                                                                </>
                                                            )}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </section>
    )
}

export default DebounceKey
