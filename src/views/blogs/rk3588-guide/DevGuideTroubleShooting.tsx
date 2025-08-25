import React from 'react'

const DevGuideTroubleShooting = ({ data }) => {

    const troubleshooting = data?.troubleshooting;

    return (
        <section id="troubleshooting" className="px-4 md:px-6 py-16">
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {troubleshooting?.troubleshootingTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {troubleshooting?.cards?.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="bg-white border border-gray-300 rounded-md shadow-md p-4">
                        <h3 className={`font-semibold mb-3`} style={{ color: section?.color }}>
                            {section?.title}
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {section?.issues?.map((item, index) => (
                                <li key={index}>
                                    <ul className="space-y-1">
                                        {item?.recommendations?.map((recommendation, subIndex) => (
                                            <li key={subIndex}><span className="font-semibold">{item?.issue} : </span>{recommendation}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* RKNN Model Conversion & Inference */}
            <div className="mb-8">
                <h3 className="font-semibold mb-3">{troubleshooting?.modalIssueTitle}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {troubleshooting?.modalIssue?.map((section, index) => (
                        <div key={index}>
                            <span className="font-semibold">{section?.title}:</span>
                            <ul className="text-sm mt-1 space-y-1 list-disc pl-5 text-gray-600">
                                {section?.issues?.map((issue, issueIndex) => (
                                    <li key={issueIndex}>{issue}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Debugging Checklist */}
            <div className="bg-white border border-gray-300 rounded-md shadow-md p-4 mt-8">
                <h3 className={`font-semibold mb-3`} style={{ color: troubleshooting?.color }}>{troubleshooting?.title}</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                    {troubleshooting?.items?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default DevGuideTroubleShooting
