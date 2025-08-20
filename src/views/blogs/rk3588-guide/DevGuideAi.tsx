import Image from 'next/image';

import React from 'react'

const DevGuideAi = ({ data }) => {
    const aiIntegrationData = data?.aiIntegrationData;
    return (
        <section id="ai-integration" className="px-4 md:px-6 py-16">
            {/* Title of the Section */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {aiIntegrationData.title}
            </h2>

            {/* NPU Architecture */}
            <h3 className="font-serif text-2xl font-semibold mb-4">
                {aiIntegrationData.npuArchitectureTitle}
            </h3>
            <p className="mb-6 text-gray-600">
                {aiIntegrationData.npuArchitectureDescription}
                <a
                    href={aiIntegrationData.npuArchitectureCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {aiIntegrationData.npuArchitectureCitation.text}
                </a>
            </p>

            {/* RKNPU Architecture Image */}
            <div className="architecture-diagram">
                <h3 className="font-serif text-xl font-semibold mb-4">
                    {aiIntegrationData.rknpuArchitectureTitle}
                </h3>
                <Image
                    src={aiIntegrationData.rknpuArchitectureImage}
                    alt="RKNPU Architecture Diagram"
                    className="w-full object-cover rounded-lg"
                />
            </div>

            {/* RKNN SDK Workflow */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-16">
                {aiIntegrationData.rknnSdkWorkflowTitle}
            </h3>
            <p className="mb-6 text-gray-600">
                {aiIntegrationData.rknnSdkWorkflowDescription}
                <a
                    href={aiIntegrationData.rknnSdkWorkflowCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {aiIntegrationData.rknnSdkWorkflowCitation.text}
                </a>
            </p>

            {/* Model Conversion & Runtime API */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Model Conversion */}
                <div className="component-card">
                    <h4 className="font-semibold text-purple-600 mb-3">
                        {aiIntegrationData.modelConversionTitle}
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                        {aiIntegrationData.modelConversionSteps.map((step, index) => (
                            <li key={index} className='text-gray-600'>{step}</li>
                        ))}
                    </ol>
                </div>

                {/* Runtime API */}
                <div className="component-card">
                    <h4 className="font-semibold text-cyan-600 mb-3">
                        {aiIntegrationData.runtimeApiTitle}
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                        {aiIntegrationData.runtimeApiSteps.map((step, index) => (
                            <li key={index} className='text-gray-600'>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>

            {/* RKNN Inference Code Example */}
            <div className="bg-[#1E293B] rounded-md p-4 mb-6 text-white">
                <pre>
                    <code className='text-sm'>{aiIntegrationData.rknnInferenceCode}</code>
                </pre>
            </div>

            {/* Real-World AI Applications */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {aiIntegrationData.realWorldAiApplicationsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiIntegrationData.realWorldAiApplications.map((app, index) => (
                    <div className="component-card" key={index}>
                        <h4 className="font-semibold text-purple-600 mb-3">{app.title}</h4>
                        <p className="text-sm mb-2">
                            {app.description}
                            <a
                                href={app.citation.link}
                                className="text-primary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {app.citation.text}
                            </a>
                        </p>
                        <div className="bg-[#1E293B] p-4 rounded-md text-white">
                            <pre>
                                <code className='text-sm text-wrap'>{app.codeExample}</code>
                            </pre>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DevGuideAi
