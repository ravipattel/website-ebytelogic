import React from 'react'

const GstreamerPlatform = ({ data }) => {
    const platform = data?.platformData;
    return (
        <section id="section-4" className="px-4 md:px-6 py-16 bg-slate-50">
            {/* Section Title */}
            <div className="mb-8">
                <span className="text-primary mr-3">{platform?.no}</span>
                <h2 className="font-serif text-3xl font-semibold inline">
                    {platform?.title}
                </h2>
            </div>

            <div className="prose prose-lg max-w-none">
                {/* Platforms */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {platform?.platforms?.map((platform, index) => (
                        <div key={index} className="bg-white p-8 rounded-md shadow-sm">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 text-white text-lg">
                                    <platform.icon />
                                </div>
                                <h3 className="font-serif text-xl font-semibold">
                                    {platform.name}
                                </h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Key Elements</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {platform?.keyElements?.map((element, i) => (
                                            <li key={i}>• {element}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Optimization</h4>
                                    <p className="text-sm text-gray-600">
                                        {platform?.optimization} <a href={platform?.link} className="text-primary hover:underline">{platform?.citation}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Common Optimization Patterns */}
                <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-md">
                    <h3 className="font-serif text-2xl font-semibold mb-6">Common Optimization Patterns</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {platform?.commonOptimizationPatterns?.map((pattern, index) => (
                            <div key={index}>
                                <h4 className="font-semibold mb-4 flex items-center gap-3">
                                    <pattern.icon className="text-primary" />
                                    {pattern.title}
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {pattern.points.map((point, i) => (
                                        <li key={i}>• {point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GstreamerPlatform
