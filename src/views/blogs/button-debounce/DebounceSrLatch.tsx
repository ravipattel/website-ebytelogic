import React from 'react'

const DebounceSrLatch = ({ data }) => {

    const srLatchData = data?.srLatchData

    return (
        <section id={srLatchData?.id} className="px-4 md:px-6 py-16 bg-slate-50">
            <h3 className="font-serif text-3xl font-semibold mb-8">
                {srLatchData?.title}
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <p className="text-gray-600 mb-6">
                        {srLatchData?.description?.text} <a href="#" className="text-primary hover:underline">{srLatchData?.description?.citation}</a>
                    </p>
                    <div className="bg-teal-50 border-l-4 border-teal-600 p-4 mb-6">
                        <h4 className="font-semibold mb-2">
                            {srLatchData?.advantages?.title}
                        </h4>
                        <ul className="text-gray-600 space-y-1">
                            {srLatchData?.advantages?.items.map((item, index) => (
                                <li key={index}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="overflow-auto">
                    <h4 className="font-semibold mb-4">
                        {srLatchData?.circuitDiagram?.title}
                    </h4>
                    <pre className="text-left">{srLatchData?.circuitDiagram?.diagram}</pre>
                </div>
            </div>
            <div className="mt-8 p-6 bg-white rounded-md border border-gray-300">
                <h4 className="font-serif text-xl font-semibold mb-4">
                    Required Components
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                    {srLatchData?.requiredComponents?.map((component, index) => (
                        <div key={index} className="text-center">
                            <component.icon className={`text-primary text-3xl mx-auto mb-2`} />
                            <h5 className="font-semibold">{component?.title}</h5>
                            <p className="text-sm text-gray-600">{component?.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DebounceSrLatch
