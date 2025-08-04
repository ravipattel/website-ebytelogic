import React from 'react'

const rcFilterData = {
    title: "RC (Resistor-Capacitor) Low-Pass Filter",
    description: {
        text: "The RC low-pass filter is one of the most common hardware debouncing methods. It works by exploiting the inherent properties of a resistor and capacitor to smooth out rapid voltage fluctuations caused by switch bounce. The capacitor charges and discharges at a rate determined by the time constant (τ = R × C), effectively averaging out the noisy signal.",
        citation: "[160]"
    },
    keyInsight: {
        title: "Key Insight",
        icon: "fas fa-lightbulb",
        text: "The RC time constant should be 5-10 times longer than the maximum expected bounce time (typically 1-20ms) for reliable debouncing."
    },
    circuitDiagram: {
        title: "RC Debounce Circuit",
        diagram: `
      +Vcc | \ / R1 (Pull-up) \ | Switch ---+------+------+------
      Input to Schmitt Trigger | | | / | | / | | / R2 | === C1 (Capacitor) / | | / | | | | | GND GND GND
    `
    },
    componentCalculation: {
        title: "Component Value Calculation",
        description: "For a target debounce time of 10ms, a common combination is a 100 kΩ resistor and a 0.1 µF capacitor:",
        calculation: "τ = R × C = 100,000 Ω × 0.0000001 F = 0.01 s (10 ms)",
        advancedDescription: "Advanced circuits incorporate diodes to create different charging and discharging time constants, allowing independent control over debounce delay for button press and release.",
        citation: "[170]"
    }
};

const DebounceRcFilter = () => {
    return (
        <section id="rc-filter" className="px-4 md:px-6 py-16">
            {/* Title */}
            <h3 className="font-serif text-3xl font-bold mb-8">
                {rcFilterData.title}
            </h3>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Left Column */}
                <div>
                    <p className="text-gray-600 mb-6">
                        {rcFilterData.description.text} <a href="#" className="text-primary hover:underline">{rcFilterData.description.citation}</a>
                    </p>

                    {/* Key Insight Box */}
                    <div className="bg-yellow-100 rounded-md p-4">
                        <h4 className="font-semibold mb-2">
                            <i className={`${rcFilterData.keyInsight.icon} text-yellow-500 mr-2`}></i>
                            {rcFilterData.keyInsight.title}
                        </h4>
                        <p className="text-gray-600">
                            {rcFilterData.keyInsight.text}
                        </p>
                    </div>
                </div>

                {/* Right Column - Circuit Diagram */}
                <div className="overflow-auto">
                    <h4 className="font-semibold mb-4">
                        {rcFilterData.circuitDiagram.title}
                    </h4>
                    <pre className="text-left">{rcFilterData.circuitDiagram.diagram}</pre>
                </div>
            </div>

            {/* Component Value Calculation Box */}
            <div className="bg-gray-50 rounded-md p-6">
                <h4 className="font-serif text-xl font-semibold mb-4">
                    {rcFilterData.componentCalculation.title}
                </h4>
                <p className="text-gray-600 mb-4">
                    {rcFilterData.componentCalculation.description}
                </p>
                <div className="bg-white p-4 rounded-md border-l-4 border-teal-600">
                    <code>
                        {rcFilterData.componentCalculation.calculation}
                    </code>
                </div>
                <p className="text-gray-600 mt-4">
                    {rcFilterData.componentCalculation.advancedDescription} <a href="#" className="text-primary hover:underline">{rcFilterData.componentCalculation.citation}</a>
                </p>
            </div>
        </section>
    )
}

export default DebounceRcFilter
