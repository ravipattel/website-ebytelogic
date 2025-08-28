import React from 'react'

const DebounceRcFilter = ({ data }) => {

    const filterData = data?.filterData

    return (
        <section id={filterData?.id} className="px-4 md:px-6 py-16">
            <h3 className="font-serif text-3xl font-bold mb-8">
                {filterData?.title}
            </h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                    <p className="text-gray-600 mb-6 text-sm md:text-base" dangerouslySetInnerHTML={{
                        __html: filterData?.description?.text
                    }} />
                    {filterData?.keyInsight && (
                        <div className="rounded-md p-4" style={{ background: filterData?.keyInsight?.bgColor }}>
                            <h4 className="font-semibold mb-2">
                                {filterData?.keyInsight?.title}
                            </h4>
                            <p className="text-gray-600 text-sm md:text-base">
                                {filterData?.keyInsight?.text}
                            </p>
                        </div>
                    )}
                </div>
                {filterData?.circuitDiagram && (
                    <div className="overflow-auto">
                        <h4 className="font-semibold mb-4">
                            {filterData?.circuitDiagram?.title}
                        </h4>
                        <pre className="text-left">{filterData?.circuitDiagram?.diagram}</pre>
                    </div>
                )}
            </div>
            {filterData?.componentCalculation && (
                <div className="bg-gray-50 rounded-md p-6">
                    <h4 className="font-serif text-xl font-semibold mb-4">
                        {filterData?.componentCalculation?.title}
                    </h4>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                        {filterData?.componentCalculation?.description}
                    </p>
                    <div className="bg-white p-4 rounded-md border-l-4 border-teal-600">
                        <code>
                            {filterData?.componentCalculation?.calculation}
                        </code>
                    </div>
                    <p className="text-gray-600 mt-4">
                        {filterData?.componentCalculation?.advancedDescription}
                    </p>
                </div>
            )}
        </section>
    )
}

export default DebounceRcFilter
