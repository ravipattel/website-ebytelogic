import Image from 'next/image';

import React from 'react'

const DevGuideMpp = ({ data }) => {
    const processingPlatformData = data?.processingPlatformData;
    return (
        <section id="mpp-rga" className="px-4 md:px-6 py-16">
            {/* Title of the Section */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {processingPlatformData?.title}
            </h2>

            {/* Multimedia Processing Platform */}
            <h3 className="font-serif text-2xl font-semibold mb-4">
                {processingPlatformData?.multimediaProcessingPlatformTitle}
            </h3>

            <p className="mb-6" dangerouslySetInnerHTML={{ __html: processingPlatformData?.multimediaProcessingPlatformDescription }} />

            {/* Supported Codecs */}
            {processingPlatformData?.supportedCodecsTitle && (
                <div className="mb-6 flex flex-wrap justify-between">
                    <div>
                        <h4 className={`font-semibold mb-3`} style={{ color: processingPlatformData?.supportedCodecsColor }}>
                            {processingPlatformData?.supportedCodecsTitle}
                        </h4>
                        <div className="space-y-2 flex flex-wrap gap-16">
                            {processingPlatformData?.supportedCodecs?.map((code, index) => (
                                <div key={index}>
                                    <p className='font-semibold'>{code?.title}</p>
                                    <ul className="text-sm mt-1 space-y-1">
                                        {code?.coding?.map((codec, index) => (
                                            <li key={index} className='text-gray-600'>• {codec}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* MPP API Workflow */}
                    <div className="component-card">
                        <h4 className={`font-semibold mb-3`} style={{ color: processingPlatformData?.supportedCodecsColor }}>
                            {processingPlatformData?.mppApiWorkflowTitle}
                        </h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm">
                            {processingPlatformData?.mppApiWorkflowSteps?.map((step, index) => (
                                <li key={index} className='text-gray-600'>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            )}


            {/* Rockchip Graphics Accelerator */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {processingPlatformData?.rockchipGraphicsAcceleratorTitle}
            </h3>

            <p className="mb-6 text-gray-600" dangerouslySetInnerHTML={{ __html: processingPlatformData?.rockchipGraphicsAcceleratorDescription }} />

            {/* RGA Processing Capabilities Image */}
            <div className="architecture-diagram">
                <h3 className="font-serif text-xl font-semibold mb-4">
                    {processingPlatformData?.rgaProcessingCapabilitiesTitle}
                </h3>
                <Image
                    src={processingPlatformData?.rgaProcessingCapabilitiesImage}
                    alt="RK3588 RGA hardware architecture diagram"
                    className="object-cover rounded-lg mx-auto py-8"
                />
            </div>

            {/* Common RGA Use Cases */}
            {processingPlatformData?.commonRgaUseCasesTitle && (
                <div className="highlight-box mt-6">
                    <p className="font-semibold mb-2">{processingPlatformData?.commonRgaUseCasesTitle}:</p>
                    <ul className="space-y-2">
                        {processingPlatformData?.commonRgaUseCases?.map((useCase, index) => (
                            <li key={index} className='text-gray-600'>• {useCase}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Integration with Multimedia Frameworks */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {processingPlatformData?.integrationWithMultimediaFrameworksTitle}
            </h3>

            <p className="mb-4 text-gray-600" dangerouslySetInnerHTML={{ __html: processingPlatformData?.integrationWithMultimediaFrameworksDescription }} />

            {/* Integration Code Examples */}
            {processingPlatformData?.integrations && (
                <div className='space-y-6 lg:space-y-0'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {processingPlatformData?.integrations?.map((integration, index) => (
                            <div key={index} className='mb-5'>
                                <h4 className="font-semibold mb-3">{integration?.title}</h4>
                                <div className="bg-[#1e293b] p-4 h-full text-white rounded-md">
                                    <div className="w-full overflow-auto">
                                        <pre>
                                            <code className='text-sm'>{integration?.code}</code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}

export default DevGuideMpp
