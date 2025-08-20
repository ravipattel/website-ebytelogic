import Image from 'next/image';

import React from 'react'

const DevGuideDevelopment = ({ data }) => {
    const developmentData = data?.developmentData;
    return (
        <section id="development" className="px-4 md:px-6 py-16 bg-slate-50">
            {/* Title of the Section */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {developmentData.title}
            </h2>

            {/* Development Setup */}
            <h3 className="font-serif text-2xl font-semibold mb-4">
                {developmentData.developmentSetupTitle}
            </h3>
            <p className="mb-6 text-gray-600">
                {developmentData.developmentSetupDescription}
                <a
                    href={developmentData.developmentSetupCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {developmentData.developmentSetupCitation.text}
                </a>
            </p>

            {/* Required Components */}
            <div className="bg-white p-4 rounded-md border border-gray-300 shadow-md mb-6">
                <h4 className="font-semibold text-purple-600 mb-3">
                    {developmentData.requiredComponentsTitle}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Core Libraries */}
                    <div>
                        <span className='font-semibold'>{developmentData?.librariesTitle}</span>
                        <ul className="text-sm mt-1 space-y-1">
                            {developmentData.coreLibraries.map((item, index) => (
                                <li key={index} className='text-gray-600'>• {item}</li>
                            ))}
                        </ul>
                    </div>
                    {/* Multimedia Frameworks */}
                    <div>
                        <span className='font-semibold'>{developmentData?.multimediaTitle}</span>
                        <ul className="text-sm mt-1 space-y-1">
                            {developmentData.multimediaFrameworks.map((item, index) => (
                                <li key={index} className='text-gray-600'>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Integrated Pipeline Example */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {developmentData.integratedPipelineTitle}
            </h3>
            <p className="mb-4 text-gray-600">
                {developmentData.integratedPipelineDescription}
                <a
                    href={developmentData.integratedPipelineCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {developmentData.integratedPipelineCitation.text}
                </a>
            </p>

            {/* Pipeline Diagram */}
            <div className="architecture-diagram">
                <h3 className="font-serif text-xl font-semibold mb-4">
                    {developmentData?.pipelineTitle}
                </h3>
                <Image
                    src={developmentData.pipelineDiagramImage}
                    alt="Complete Multimedia Pipeline"
                    className="object-cover rounded-md"
                />
            </div>

            {/* Comparison Table */}
            <div className="comparison-table mt-8">
                <table className="w-full text-left border-collapse rounded-md overflow-hidden shadow-sm">
                    <thead className="bg-teal-700 text-white text-sm">
                        <tr>
                            <th className="px-4 py-3 font-medium">{developmentData?.comparisonTable[0]?.tableHead1}</th>
                            <th className="px-4 py-3 font-medium">{developmentData?.comparisonTable[0]?.tableHead2}</th>
                            <th className="px-4 py-3 font-medium">{developmentData?.comparisonTable[0]?.tableHead3}</th>
                            <th className="px-4 py-3 font-medium">{developmentData?.comparisonTable[0]?.tableHead4}</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-600">
                        {developmentData.comparisonTable.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <td className="px-4 py-3">{row.stage}</td>
                                <td className="px-4 py-3">{row.component}</td>
                                <td className="px-4 py-3">{row.function}</td>
                                <td className="px-4 py-3">{row.keyApiLibrary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* AI Camera Application */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {developmentData.aiCameraTitle}
            </h3>
            <div className="bg-white p-4 rounded-md border border-gray-300 shadow-md">
                <h4 className="font-semibold text-purple-600 mb-3">{developmentData?.featureTitle}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Hardware */}
                    <div>
                        <span className='font-semibold'>{developmentData?.aiCameraFeatureOverview?.hardwareTitle}</span>
                        <ul className="text-sm mt-1 space-y-1">
                            {developmentData.aiCameraFeatureOverview.hardware.map((item, index) => (
                                <li key={index} className='text-gray-600'>• {item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* AI Capabilities */}
                    <div>
                        <span className='font-semibold'>{developmentData?.aiCameraFeatureOverview?.aiCapabilitiesTitle}</span>
                        <ul className="text-sm mt-1 space-y-1">
                            {developmentData.aiCameraFeatureOverview.aiCapabilities.map((item, index) => (
                                <li key={index} className='text-gray-600'>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Software Stack */}
                <div className="mt-4">
                    <span className='font-semibold'>{developmentData?.aiCameraFeatureOverview?.softwareStackTitle}</span>
                    <p className="text-sm mt-1">
                        {developmentData.aiCameraFeatureOverview.softwareStack}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default DevGuideDevelopment
