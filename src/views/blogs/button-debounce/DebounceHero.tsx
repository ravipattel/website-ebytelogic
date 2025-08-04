import React from 'react'
import { FaBalanceScale, FaCheckCircle, FaMicrochip } from 'react-icons/fa';

const debounceHeroData = {
    sectionTitle: "Embedded Systems Engineering",
    description:
        "Master the art of eliminating switch bounce in embedded systems through hardware and software solutions. Explore trade-offs between cost, reliability, and power consumption.",
    keyInsights: [
        {
            icon: FaCheckCircle,
            iconColor: "text-green-600",
            text: "Software debouncing is most common and flexible"
        },
        {
            icon: FaMicrochip,
            iconColor: "text-blue-600",
            text: "Hardware solutions offer superior reliability"
        },
        {
            icon: FaBalanceScale,
            iconColor: "text-yellow-600",
            text: "Trade-offs between cost, power, and complexity"
        }
    ]
};

const DebounceHero = () => {
    return (
        <section className="px-4 md:px-6 py-8 bg-slate-50">
            <div>
                <div className="space-y-6">
                    {/* Section Title */}
                    <div className="inline-block bg-primary text-white backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                        {debounceHeroData.sectionTitle}
                    </div>

                    {/* Main Title */}
                    <h1 className="font-serif text-4xl font-semibold leading-tight">
                        <span>Button Debounce Methods: A Comprehensive Guide to Reliable Input</span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600">
                        {debounceHeroData.description}
                    </p>
                </div>

                {/* Key Insights */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="font-serif text-xl font-semibold mb-4">Key Insights</h3>
                    <ul className="space-y-3 text-sm">
                        {debounceHeroData.keyInsights.map((insight, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <insight.icon className={`mt-1 ${insight.iconColor}`} />
                                {insight.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default DebounceHero
