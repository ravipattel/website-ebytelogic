import React from 'react'

const DevGuideIsp = ({ data }) => {
    const isp3 = data?.isp3aData;
    return (
        <section id="isp-3a" className="px-4 md:px-6 py-16 bg-slate-50">
            {/* Title of the Section */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {isp3?.title}
            </h2>

            {/* ISP 3.0 Architecture */}
            <h3 className="font-serif text-2xl font-semibold mb-4">
                {isp3?.ispArchitectureTitle}
            </h3>
            <p className="mb-6 text-gray-600">
                {isp3?.ispArchitectureDescription}
                <a
                    href={isp3?.ispArchitectureCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {isp3?.ispArchitectureCitation.text}
                </a>
            </p>

            {/* ISP Processing Pipeline Diagram */}
            <div className="architecture-diagram">
                <h3 className="font-serif text-xl font-semibold mb-4">
                    {isp3?.ispProcessingPipelineTitle}
                </h3>
                <div className="mermaid-container">
                    <div className="mermaid">{isp3?.ispProcessingPipelineDiagram}</div>
                </div>
            </div>

            {/* 3A Algorithm Integration */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {isp3?.threeAAlgorithmTitle}
            </h3>
            <p className="mb-4 text-gray-600">
                {isp3?.threeAAlgorithmDescription}
                <a
                    href={isp3?.threeAAlgorithmCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {isp3?.threeAAlgorithmCitation.text}
                </a>
            </p>

            {/* Components List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {isp3?.components.map((component, index) => (
                    <div className="bg-white rounded-md border border-gray-300 shadow-md p-3" key={index}>
                        <h4 className={`font-semibold ${component.color} mb-2`}>
                            {component.title}
                        </h4>
                        <p className="text-sm text-gray-600">{component.description}</p>
                    </div>
                ))}
            </div>

            {/* ISP Tuning Process */}
            <div>
                <p className="font-semibold mb-2">{isp3?.ispTuningTitle}</p>
                <ol className="list-decimal list-inside space-y-1">
                    {isp3?.ispTuningProcess.map((step, index) => (
                        <li key={index} className='text-gray-600'>{step}</li>
                    ))}
                </ol>
            </div>

            {/* IQ File Configuration */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {isp3?.iqFileConfigTitle}
            </h3>
            <p className="mb-4 text-gray-600">
                {isp3?.iqFileConfigDescription}
                <a
                    href={isp3?.iqFileConfigCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {isp3?.iqFileConfigCitation.text}
                </a>
            </p>

            {/* IQ File Example Code */}
            <div className="bg-[#1E293B] p-4 rounded-md text-white">
                <pre>
                    <code className='text-sm'>{isp3?.codeBlock}</code>
                </pre>
            </div>
        </section>
    )
}

export default DevGuideIsp
