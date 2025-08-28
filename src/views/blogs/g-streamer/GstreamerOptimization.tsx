import React from 'react'
import { FaCogs, FaMemory } from 'react-icons/fa';

const GstreamerOptimization = ({ data }) => {
    const optimize = data?.optimize;
    return (
        <section id={optimize?.id} className="px-4 md:px-6 py-16">
            {/* Section Title */}
            <div className="mb-8">
                <span className="me-3" style={{ color: optimize?.color }}>{optimize?.no}</span>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold inline">
                    {optimize?.title}
                </h2>
            </div>

            <div>
                {/* Optimization Strategies */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {optimize?.strategies?.map((strategy, index) => (
                        <div key={index} className="bg-slate-50 p-4 md:p-8 rounded-md border border-gray-300">
                            <h3 className="font-serif text-xl font-semibold mb-4 flex flex-wrap items-center gap-3">
                                {index === 0 ? (
                                    <FaMemory className="text-primary mr-3" />
                                ) : (
                                    <FaCogs className="text-primary mr-3" />
                                )}
                                {strategy?.title}
                            </h3>
                            <p
                                className="text-gray-600 mb-6 text-sm md:text-base"
                                dangerouslySetInnerHTML={{ __html: strategy?.description }}
                            />
                            <ul className="text-sm text-gray-600 space-y-1">
                                {strategy?.points?.map((point, i) => (
                                    <li key={i}>• {point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Pipeline Structure */}
                <div className="p-0 md:p-8 rounded-md mb-12">
                    <h3 className="font-serif text-2xl font-semibold mb-6">
                        {optimize?.pipelineStructure?.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {optimize?.pipelineStructure?.content?.map((item, index) => (
                            <div key={index}>
                                <h4 className="font-semibold mb-3">{item?.subtitle}</h4>
                                <p
                                    className="text-gray-600 text-sm mb-4"
                                    dangerouslySetInnerHTML={{ __html: item?.description }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* System-Level Optimizations */}
                <div className="bg-primary/5 p-4 md:p-8 rounded-md" style={{ borderLeft: `4px solid ${optimize?.systemLevelOptimizations?.borderColor}` }}>
                    <h3 className="font-serif text-2xl font-semibold mb-6">
                        {optimize?.systemLevelOptimizations?.title}
                    </h3>
                    <p
                        className="text-gray-600 mb-6 text-sm md:text-base"
                        dangerouslySetInnerHTML={{ __html: optimize?.systemLevelOptimizations?.description }}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {optimize?.systemLevelOptimizations?.optimizations?.map((optimization, index) => (
                            <div key={index} className="bg-white p-4 rounded-md border border-gray-300">
                                <h4 className="font-semibold mb-2">{optimization?.title}</h4>
                                <p className="text-gray-600 text-sm">{optimization?.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GstreamerOptimization
