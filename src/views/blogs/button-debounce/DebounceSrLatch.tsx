import React from 'react'
import { FaMicrochip, FaPiedPiper, FaToggleOff } from 'react-icons/fa';

const srLatchData = {
    title: "SR Latch (Flip-Flop) Debounce",
    description: {
        text: "The SR latch is considered by many to be the most reliable hardware debounce method. Unlike RC filters that smooth signals, the SR latch uses digital logic to 'latch' the switch state, effectively ignoring subsequent bounces. This method requires a single-pole, double-throw (SPDT) switch.",
        citation: "[158]"
    },
    advantages: {
        title: "Advantages over RC Circuits",
        items: [
            "Superior reliability with truly bounce-free output",
            "No significant delay (nanosecond response vs millisecond)",
            "Clean digital signal without need for Schmitt trigger",
            "Purely digital solution, easier to analyze"
        ]
    },
    circuitDiagram: {
        title: "SR Latch using NAND Gates",
        diagram: `
      +Vcc |
      \ / R1 (Pull-up) \ | +----|\\ |\\ | | )---| )o--- Q (Output to Microcontroller) +----|/ |/ | | | +----+ | | | / \\ |
      | | SPDT Switch | \\ / | | | GND | +----|\\ |\\ | | )---| )o--- Q' (Inverted Output) +----|/ |/ | \\ / R2 (Pull-up) 
      \\ | +Vcc
    `
    },
    requiredComponents: [
        {
            icon: FaMicrochip,
            title: "Logic IC",
            description: "74HC00 (Quad NAND Gate)"
        },
        {
            icon: FaPiedPiper,
            title: "Resistors",
            description: "2 × 10 kΩ Pull-ups"
        },
        {
            icon: FaToggleOff,
            title: "Switch",
            description: "SPDT Type"
        }
    ]
};

const DebounceSrLatch = () => {
    return (
        <section id="srlatch" className="px-4 md:px-6 py-16 bg-slate-50">
            {/* Title */}
            <h3 className="font-serif text-3xl font-semibold mb-8">
                {srLatchData.title}
            </h3>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                    <p className="text-gray-600 mb-6">
                        {srLatchData.description.text} <a href="#" className="text-primary hover:underline">{srLatchData.description.citation}</a>
                    </p>

                    {/* Advantages Box */}
                    <div className="bg-teal-50 border-l-4 border-teal-600 p-4 mb-6">
                        <h4 className="font-semibold mb-2">
                            {srLatchData.advantages.title}
                        </h4>
                        <ul className="text-gray-600 space-y-1">
                            {srLatchData.advantages.items.map((item, index) => (
                                <li key={index}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Column - Circuit Diagram */}
                <div className="overflow-auto">
                    <h4 className="font-semibold mb-4">
                        {srLatchData.circuitDiagram.title}
                    </h4>
                    <pre className="text-left">{srLatchData.circuitDiagram.diagram}</pre>
                </div>
            </div>

            {/* Required Components */}
            <div className="mt-8 p-6 bg-white rounded-md border border-gray-300">
                <h4 className="font-serif text-xl font-semibold mb-4">
                    Required Components
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                    {srLatchData.requiredComponents.map((component, index) => (
                        <div key={index} className="text-center">
                            <component.icon className={`text-primary text-3xl mx-auto mb-2`} />
                            <h5 className="font-semibold">{component.title}</h5>
                            <p className="text-sm text-gray-600">{component.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DebounceSrLatch
