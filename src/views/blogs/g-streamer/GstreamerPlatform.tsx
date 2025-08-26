import React from 'react'

const GstreamerPlatform = ({ data }) => {
    const platform = data?.platformData;
    return (
        <section id={platform?.id} className="px-4 md:px-6 py-16 bg-slate-50">
            {/* Section Title */}
            <div className="mb-8">
                <span className="mr-3" style={{ color: platform?.color }}>{platform?.no}</span>
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
                                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 text-white text-lg" style={{ backgroundColor: platform?.bgColor }}>
                                    {platform.icon}
                                </div>
                                <h3 className="font-serif text-xl font-semibold">
                                    {platform?.name}
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {platform?.sections?.map((section, idx) => (
                                    <div key={idx}>
                                        <h4 className="font-semibold mb-2">{section.title}</h4>
                                        {section.type === "list" && (
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                {section.items?.map((item, i) => (
                                                    <li key={i}>• {item}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {section.type === "html" && (
                                            <p
                                                className="text-sm text-gray-600"
                                                dangerouslySetInnerHTML={{ __html: section.content }}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Common Optimization Patterns */}
                {platform?.commonOptimizationPatterns && (
                    <div className="bg-primary/5 p-8 rounded-md" style={{ borderLeft: `4px solid ${platform?.borderColor}` }}>
                        <h3 className="font-serif text-2xl font-semibold mb-6">{platform?.commonTitle}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {platform?.commonOptimizationPatterns?.map((pattern, index) => (
                                <div key={index}>
                                    <h4 className="font-semibold mb-4 flex items-center gap-3">
                                        {pattern.icon}
                                        {pattern?.title}
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        {pattern?.points?.map((point, i) => (
                                            <li key={i}>• {point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default GstreamerPlatform
