import React from 'react'

const DevGuideIsp = ({ data }) => {
    const processing = data?.processingData;
    return (
        <section id="isp-3a" className="px-4 md:px-6 py-16 bg-slate-50">
            {/* Title of the Section */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {processing?.title}
            </h2>

            {/* ISP 3.0 Architecture */}
            <h3 className="font-serif text-2xl font-semibold mb-4">
                {processing?.ispArchitectureTitle}
            </h3>

            <p className="mb-4 text-gray-600" dangerouslySetInnerHTML={{ __html: processing?.ispArchitectureDescription }} />

            {/* ISP Processing Pipeline Diagram */}
            {processing?.ispProcessingPipelineTitle && (
                <div className="architecture-diagram">
                    <h3 className="font-serif text-xl font-semibold mb-4">
                        {processing?.ispProcessingPipelineTitle}
                    </h3>
                    <div className="mermaid-container">
                        <div className="mermaid">{processing?.ispProcessingPipelineDiagram}</div>
                    </div>
                </div>
            )
            }

            {/* 3A Algorithm Integration */}
            {processing?.threeAAlgorithmTitle && (
                <div>
                    <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                        {processing?.threeAAlgorithmTitle}
                    </h3>
                    <p className="mb-4 text-gray-600" dangerouslySetInnerHTML={{ __html: processing?.threeAAlgorithmDe }} />
                </div>
            )
            }

            {/* Components List */}
            {processing?.components && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {processing?.components?.map((component, index) => (
                        <div className="bg-white rounded-md border border-gray-300 shadow-md p-3" key={index}>
                            <h4 className={`font-semibold mb-2`} style={{color:component?.color}}>
                                {component?.title}
                            </h4>
                            <p className="text-sm text-gray-600">{component?.description}</p>
                        </div>
                    ))}
                </div>
            )
            }

            {/* ISP Tuning Process */}
            {processing?.ispTuningTitle && (
                <div>
                    <p className="font-semibold mb-2">{processing?.ispTuningTitle}</p>
                    <ol className="list-decimal list-inside space-y-1">
                        {processing?.ispTuningProcess?.map((step, index) => (
                            <li key={index} className='text-gray-600'>{step}</li>
                        ))}
                    </ol>
                </div>
            )}

            {/* IQ File Configuration */}
            {processing?.codeBlock && (
                <div>
                    <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                        {processing?.iqFileConfigTitle}
                    </h3>
                    <p className="mb-4 text-gray-600" dangerouslySetInnerHTML={{ __html: processing?.iqFileConfigDescription }} />
                    {/* IQ File Example Code */}
                    <div className="bg-[#1E293B] p-4 rounded-md text-white">
                        <pre>
                            <code className='text-sm'>{processing?.codeBlock}</code>
                        </pre>
                    </div>
                </div>
            )}
        </section>
    )
}

export default DevGuideIsp
