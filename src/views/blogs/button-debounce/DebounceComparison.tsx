import React from 'react'

const DebounceComparison = ({ data }) => {

    const comparisonData = data?.comparisonData

    return (
        <section id={comparisonData?.id} className="px-4 md:px-6 py-16 bg-slate-50">
            <h2 className="font-serif text-3xl font-semibold mb-12 text-center">
                {comparisonData?.title}
            </h2>
            {comparisonData?.quickReference && (
                <div className="mb-12">
                    <h3 className="font-serif text-2xl font-semibold mb-6">{comparisonData?.quickReference?.title}</h3>
                    <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-sm">
                        <thead>
                            <tr className="text-white text-sm" style={{ background: comparisonData?.tableHeadColor }}>
                                {comparisonData?.quickReference?.headers?.map((header, idx) => (
                                    <th key={idx} className="py-3 px-4 font-semibold">{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData?.quickReference?.rows?.map((row, idx) => (
                                <tr
                                    key={idx}
                                    className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                >
                                    <td className="py-3 px-4 font-medium text-gray-900">{row?.feature}</td>
                                    <td className="py-3 px-4 text-gray-700">{row?.hardware}</td>
                                    <td className="py-3 px-4 text-gray-700">{row?.software}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {comparisonData?.inDepthAnalysis && (
                <div className="grid md:grid-cols-2 gap-8">
                    {comparisonData?.inDepthAnalysis?.map((item, idx) => (
                        <div key={idx} className="space-y-8">
                            <div>
                                <h4 className="font-serif text-xl font-semibold mb-4 flex items-center gap-3">
                                    {item?.icon}
                                    {item?.title}
                                </h4>
                                <p className="text-gray-600">{item?.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default DebounceComparison
