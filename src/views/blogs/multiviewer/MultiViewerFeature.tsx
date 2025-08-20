import React from 'react'

const MultiViewerFeature = ({ data }) => {

    const featureData = data?.featureData;

    return (
        <section id={featureData?.id} className="px-4 md:px-6 py-16 bg-slate-50">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">{featureData?.title}</h2>
            <div className="flex flex-col gap-y-8">
                {featureData?.sections.map((section, index) => {
                    const Icon = section.icon
                    return (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-5 md:p-8">
                            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-6 flex flex-wrap gap-4 items-center">
                                {Icon && <Icon className="text-primary mr-3" />}
                                {section.title}
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {section.items.map((item, idx) => (
                                    <div key={idx} className="border border-gray-200 rounded-lg p-4">
                                        <h4 className="font-semibold text-base md:text-lg mb-3">{item.name}</h4>
                                        <p
                                            className="text-gray-600 text-sm md:text-base mb-3"
                                            dangerouslySetInnerHTML={{ __html: item.description }}
                                        />
                                        {item.details ? (
                                            <div
                                                className="text-xs text-gray-600"
                                                dangerouslySetInnerHTML={{ __html: item.details }}
                                            />
                                        ) : (
                                            <ul className="text-xs text-gray-600 space-y-1">
                                                {item.bullets?.map((b, bi) => (
                                                    <li key={bi}>• {b}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default MultiViewerFeature
