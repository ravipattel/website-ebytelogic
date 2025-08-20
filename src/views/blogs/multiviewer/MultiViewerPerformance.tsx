import React from 'react'

const MultiViewerPerformance = ({ data }) => {

    const performanceData = data?.performanceData;

    return (
        <section id={performanceData?.id} className="px-4 md:px-6 py-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">{performanceData?.title}</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 md:p-8 mb-8 border border-blue-200">
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">{performanceData?.intro?.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-6">{performanceData?.intro?.description}</p>
            </div>
            <div className="grid gap-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-50 px-4 md:px-8 py-4">
                        <h3 className="font-serif text-xl md:text-2xl font-semibold text-white">
                            {performanceData?.table?.title}
                        </h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    {performanceData?.table?.columns?.map((col, i) => (
                                        <th
                                            key={i}
                                            className="px-6 py-4 text-left font-semibold text-sm md:text-base whitespace-nowrap"
                                        >
                                            {col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {performanceData?.table?.rows?.map((row, i) => (
                                    <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                                        <td className="px-6 py-4 text-sm md:text-base">{row.feature}</td>
                                        {row.values.map((val, j) => (
                                            <td key={j} className="px-6 py-4 text-gray-600 text-sm md:text-base">
                                                {val}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {performanceData?.insights?.map((section, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                            <h4 className="font-semibold text-base md:text-lg mb-4">{section?.title}</h4>
                            <div className="space-y-4">
                                {section?.items?.map((item, i) => (
                                    <div key={i} className={`border-l-4 border-${item.color}-400 pl-4`}>
                                        <h5 className={`text-${item?.color}-700`}>{item?.heading}</h5>
                                        <p className="text-sm text-gray-600">{item?.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MultiViewerPerformance
