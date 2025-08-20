import React from 'react'

const MultiViewerConclusion = ({ data }) => {

    const conclusionData = data?.conclusionData;

    return (
        <section id={conclusionData?.id} className="px-4 md:px-6 py-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">{conclusionData?.title}</h2>
            <div className="bg-gradient-to-r from-primary/10 to-yellow-50 rounded-xl p-8 mb-8 border border-primary/20">
                <h3 className="font-serif text-2xl font-semibold mb-6">
                    {conclusionData?.recommendationsSection?.title || "Key Recommendations"}
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                    {conclusionData?.recommendationsSection?.map((section, i) => (
                        <div key={i}>
                            <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
                            <ul className="space-y-3 text-gray-600 text-sm md:text-base">
                                {section.items?.map(({ icon: Icon, label, highlight, description, highlightClass, iconClass }, j) => (
                                    <li key={j} className="flex items-center gap-3 space-x-3">
                                        <Icon className={iconClass} />
                                        <div>
                                            <span className="font-semibold">{label}</span>{" "}
                                            {highlight && <span className={highlightClass}>{highlight}</span>}
                                            {section.title === "Primary Recommendations" ? ` - ${description}` : description}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">{conclusionData?.chooseToolSection?.intro}</p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {conclusionData?.chooseToolSection?.options?.map(({ title, points }, i) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <h4 className="font-serif text-lg font-semibold mb-3">{title}</h4>
                            <ul className="text-sm text-gray-600 space-y-2">
                                {points.map((point, idx) => (
                                    <li key={idx}>• {point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <blockquote className="border-l-4 border-primary bg-primary/5 p-6 my-8 italic text-sm md:text-base">
                    {conclusionData?.quote}
                </blockquote>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{conclusionData?.closing}</p>
            </div>
        </section>
    )
}

export default MultiViewerConclusion
