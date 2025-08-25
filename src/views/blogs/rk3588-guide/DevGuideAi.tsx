import Image from 'next/image';

import React from 'react'

const DevGuideAi = ({ data }) => {

    const aiIntegrationData = data?.aiIntegrationData;

    return (
        <section id="ai-integration" className="px-4 md:px-6 py-16">
            {/* Title of the Section */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {aiIntegrationData?.title}
            </h2>

            {/* NPU Architecture */}
            <h3 className="font-serif text-2xl font-semibold mb-4">
                {aiIntegrationData?.npuArchitectureTitle}
            </h3>

            <p
                className="mb-6 text-gray-600"
                dangerouslySetInnerHTML={{ __html: aiIntegrationData?.npuArchitectureDescription }}
            />

            {/* RKNPU Architecture Image */}
            <div className="architecture-diagram">
                <h3 className="font-serif text-xl font-semibold mb-4">
                    {aiIntegrationData?.rknpuArchitectureTitle}
                </h3>
                <Image
                    src={aiIntegrationData?.rknpuArchitectureImage}
                    alt="RKNPU Architecture Diagram"
                    className="w-full object-cover rounded-lg"
                />
            </div>

            {/* RKNN SDK Workflow */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-16">
                {aiIntegrationData?.rknnSdkWorkflowTitle}
            </h3>
            <p
                className="mb-6 text-gray-600"
                dangerouslySetInnerHTML={{ __html: aiIntegrationData?.rknnSdkWorkflowDescription }}
            />

            {/* Model Conversion & Runtime API */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {
                    aiIntegrationData?.conversations?.map((conversation, index) => {
                        return (
                            <div
                                key={index} className="component-card">
                                <h4 className={`font-semibold mb-3`} style={{ color: conversation?.color }}>
                                    {conversation?.title}
                                </h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm">
                                    {conversation?.text?.map((data, index) => (
                                        <li key={index} className='text-gray-600'>{data}</li>
                                    ))}
                                </ol>
                            </div>
                        )
                    })
                }
            </div>

            {/* RKNN Inference Code Example */}
            {aiIntegrationData?.rknnInferenceCode && (
                <div className="bg-[#1E293B] rounded-md p-4 mb-6 text-white">
                    <pre>
                        <code className='text-sm'>{aiIntegrationData?.rknnInferenceCode}</code>
                    </pre>
                </div>
            )}

            {/* Real-World AI Applications */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {aiIntegrationData?.realWorldAiApplicationsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiIntegrationData?.realWorldAiApplications?.map((app, index) => (
                    <div className="component-card" key={index}>
                        <h4 className={`font-semibold mb-3`} style={{ color: app?.color }}>{app?.title}</h4>
                        <p
                            className="text-sm mb-2"
                            dangerouslySetInnerHTML={{ __html: app?.description }}
                        />
                        {app?.codeExample && (
                            <div className="bg-[#1E293B] p-4 rounded-md text-white">
                                <pre>
                                    <code className='text-sm text-wrap'>{app?.codeExample}</code>
                                </pre>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DevGuideAi
