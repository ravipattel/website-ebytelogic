import Image from 'next/image';

import React from 'react'

import DevGuideArchitecturePng from '@/src/assets/images/blogs/blogDetails/devGuideArchitecture.png'


const DevGuideMpp = ({data}) => {
    const mppRgaData = data?.mppRgaData;
    return (
        <section id="mpp-rga" className="px-4 md:px-6 py-16">
            {/* Title of the Section */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {mppRgaData.title}
            </h2>

            {/* Multimedia Processing Platform */}
            <h3 className="font-serif text-2xl font-semibold mb-4">
                {mppRgaData.multimediaProcessingPlatformTitle}
            </h3>
            <p className="mb-6">
                {mppRgaData.multimediaProcessingPlatformDescription}
                <a
                    href={mppRgaData.multimediaProcessingPlatformCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {mppRgaData.multimediaProcessingPlatformCitation.text}
                </a>
            </p>

            {/* Supported Codecs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="component-card">
                    <h4 className="font-semibold text-purple-600 mb-3">
                        {mppRgaData.supportedCodecsTitle}
                    </h4>
                    <div className="space-y-2">
                        <div>
                            <strong>Decoding:</strong>
                            <ul className="text-sm mt-1 space-y-1">
                                {mppRgaData.supportedCodecs.decoding.map((codec, index) => (
                                    <li key={index} className='text-gray-600'>• {codec}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <strong>Encoding:</strong>
                            <ul className="text-sm mt-1 space-y-1">
                                {mppRgaData.supportedCodecs.encoding.map((codec, index) => (
                                    <li key={index} className='text-gray-600'>• {codec}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* MPP API Workflow */}
                <div className="component-card">
                    <h4 className="font-semibold text-cyan-600 mb-3">
                        {mppRgaData.mppApiWorkflowTitle}
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                        {mppRgaData.mppApiWorkflowSteps.map((step, index) => (
                            <li key={index} className='text-gray-600'>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>

            {/* Rockchip Graphics Accelerator */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {mppRgaData.rockchipGraphicsAcceleratorTitle}
            </h3>
            <p className="mb-6 text-gray-600">
                {mppRgaData.rockchipGraphicsAcceleratorDescription}
                <a
                    href={mppRgaData.rockchipGraphicsAcceleratorCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {mppRgaData.rockchipGraphicsAcceleratorCitation.text}
                </a>
            </p>

            {/* RGA Processing Capabilities Image */}
            <div className="architecture-diagram">
                <h3 className="font-serif text-xl font-semibold mb-4">
                    {mppRgaData.rgaProcessingCapabilitiesTitle}
                </h3>
                <Image
                    src={mppRgaData.rgaProcessingCapabilitiesImage}
                    alt="RK3588 RGA hardware architecture diagram"
                    className="object-cover rounded-lg mx-auto py-8"
                />
            </div>

            {/* Common RGA Use Cases */}
            <div className="highlight-box mt-6">
                <p className="font-semibold mb-2">{mppRgaData.commonRgaUseCasesTitle}:</p>
                <ul className="space-y-2">
                    {mppRgaData.commonRgaUseCases.map((useCase, index) => (
                        <li key={index} className='text-gray-600'>• {useCase}</li>
                    ))}
                </ul>
            </div>

            {/* Integration with Multimedia Frameworks */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {mppRgaData.integrationWithMultimediaFrameworksTitle}
            </h3>
            <p className="mb-4 text-gray-600">
                {mppRgaData.integrationWithMultimediaFrameworksDescription}
                <a
                    href={mppRgaData.integrationWithMultimediaFrameworksCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {mppRgaData.integrationWithMultimediaFrameworksCitation.text}
                </a>
            </p>

            {/* Integration Code Examples */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mppRgaData.integrations.map((integration, index) => (
                    <div className="component-card" key={index}>
                        <h4 className="font-semibold mb-3">{integration.title}</h4>
                        <div className="bg-[#1e293b] p-4 h-full text-white rounded-md">
                            <pre>
                                <code className='text-sm'>{integration.code}</code>
                            </pre>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DevGuideMpp
