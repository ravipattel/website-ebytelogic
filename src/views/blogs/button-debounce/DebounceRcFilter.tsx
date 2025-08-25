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
                    <p className="text-gray-600 mb-6">
                        {filterData?.description?.text} <a href="#" className="text-primary hover:underline">{filterData?.description?.citation}</a>
                    </p>
                    <div className="bg-yellow-100 rounded-md p-4">
                        <h4 className="font-semibold mb-2">
                            <i className={`${filterData?.keyInsight?.icon} text-yellow-500 mr-2`}></i>
                            {filterData?.keyInsight?.title}
                        </h4>
                        <p className="text-gray-600">
                            {filterData?.keyInsight?.text}
                        </p>
                    </div>
                </div>
                <div className="overflow-auto">
                    <h4 className="font-semibold mb-4">
                        {filterData?.circuitDiagram?.title}
                    </h4>
                    <pre className="text-left">{filterData?.circuitDiagram?.diagram}</pre>
                </div>
            </div>
            <div className="bg-gray-50 rounded-md p-6">
                <h4 className="font-serif text-xl font-semibold mb-4">
                    {filterData?.componentCalculation?.title}
                </h4>
                <p className="text-gray-600 mb-4">
                    {filterData?.componentCalculation?.description}
                </p>
                <div className="bg-white p-4 rounded-md border-l-4 border-teal-600">
                    <code>
                        {filterData?.componentCalculation?.calculation}
                    </code>
                </div>
                <p className="text-gray-600 mt-4">
                    {filterData?.componentCalculation?.advancedDescription} <a href="#" className="text-primary hover:underline">{filterData?.componentCalculation?.citation}</a>
                </p>
            </div>
        </section>
    )
}

export default DebounceRcFilter
