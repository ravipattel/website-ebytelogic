import Image from 'next/image';

import React from 'react'

const DevGuideDevelopment = ({ data }) => {
    const developmentData = data?.developmentData;
    return (
        <section id="development" className="px-4 md:px-6 py-16 bg-slate-50">
            {/* Title of the Section */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {developmentData?.title}
            </h2>

            {/* Development Setup */}
            <h3 className="font-serif text-2xl font-semibold mb-4">
                {developmentData?.developmentSetupTitle}
            </h3>
            <p
                className="mb-6 text-gray-600"
                dangerouslySetInnerHTML={{ __html: developmentData?.developmentSetupDescription }}
            />

            {/* Required Components */}
            <div className="bg-white p-4 rounded-md border border-gray-300 shadow-md mb-6">
                <h4 className={`font-semibold mb-3`} style={{ color: developmentData?.textColor }}>
                    {developmentData?.requiredComponentsTitle}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        developmentData?.libraries?.map((library,idx) => {
                            return (
                                <div key={idx}>
                                    <span className='font-semibold'>{library?.title}</span>
                                    {
                                        library?.text?.map((data, index) => {
                                            return (
                                                <ul key={index} className="text-sm mt-1 space-y-1">
                                                    <li key={index} className='text-gray-600'>• {data}</li>
                                                </ul>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    {/* Core Libraries */}
                    {/* Multimedia Frameworks */}
                    {developmentData?.multimediaTitle && (
                        <div>
                            <span className='font-semibold'>{developmentData?.multimediaTitle}</span>
                            <ul className="text-sm mt-1 space-y-1">
                                {developmentData?.multimediaFrameworks?.map((item, index) => (
                                    <li key={index} className='text-gray-600'>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Integrated Pipeline Example */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {developmentData?.integratedPipelineTitle}
            </h3>
            <p
                className="mb-6 text-gray-600"
                dangerouslySetInnerHTML={{ __html: developmentData?.integratedPipelineDescription }}
            />

            {/* Pipeline Diagram */}
            <div className="architecture-diagram">
                <h3 className="font-serif text-xl font-semibold mb-4">
                    {developmentData?.pipelineTitle}
                </h3>
                <Image
                    src={developmentData?.pipelineDiagramImage}
                    alt="Complete Multimedia Pipeline"
                    className="object-cover rounded-md"
                />
            </div>

            {/* Comparison Table */}
            {developmentData?.comparisonTable && (
                <div className="w-full overflow-auto mt-8">
                    <table className="w-full text-left border-collapse rounded-md overflow-hidden shadow-sm">
                        <thead className="text-white text-sm" style={{backgroundColor:developmentData?.tableHeadColor}}>
                            <tr>
                                <th className="px-4 py-3 font-medium">{developmentData?.comparisonTable[0]?.column1}</th>
                                <th className="px-4 py-3 font-medium">{developmentData?.comparisonTable[0]?.column2}</th>
                                <th className="px-4 py-3 font-medium">{developmentData?.comparisonTable[0]?.column3}</th>
                                <th className="px-4 py-3 font-medium">{developmentData?.comparisonTable[0]?.column4}</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-600">
                            {developmentData?.comparisonTable?.map((row, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    <td className="px-4 py-3">{row?.row1}</td>
                                    <td className="px-4 py-3">{row?.row2}</td>
                                    <td className="px-4 py-3">{row?.row3}</td>
                                    <td className="px-4 py-3">{row?.row4}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* AI Camera Application */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {developmentData?.aiCameraTitle}
            </h3>
            <div className="bg-white p-4 rounded-md border border-gray-300 shadow-md">
                <h4 className={`font-semibold mb-3`} style={{color:developmentData?.color}}>{developmentData?.featureTitle}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        developmentData?.aiCameraFeatureOverview?.map((overview) => {
                            const textArray = Array?.isArray(overview?.text) ? overview?.text : [overview?.text];

                            return (
                                <div key={overview?.title}>
                                    <span className='font-semibold'>{overview?.title}</span>
                                    <ul className="text-sm mt-1 space-y-1">
                                        {
                                            textArray?.map((data, index) => (
                                                <li key={index} className='text-gray-600'>• {data}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            );
                        })

                    }
                </div>
            </div>
        </section>
    )
}

export default DevGuideDevelopment
