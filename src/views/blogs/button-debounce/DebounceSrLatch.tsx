import React from 'react'

const DebounceSrLatch = ({ data }) => {

    const blockData = data?.blockData

    return (
        <section id={blockData?.id} className="px-4 md:px-6 py-16 bg-slate-50">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
                {blockData?.title}
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <p className="text-gray-600 mb-6 text-sm md:text-base">
                        {blockData?.description?.text} <a href="#" className="text-primary hover:underline">{blockData?.description?.citation}</a>
                    </p>
                    <div className="p-4 mb-6" style={{background : blockData?.description?.bgColor , borderLeft : `4px solid ${blockData?.description?.borderColor}`}}>
                        <h4 className="font-semibold mb-2">
                            {blockData?.advantages?.title}
                        </h4>
                        <ul className="text-gray-600 space-y-1">
                            {blockData?.advantages?.items.map((item, index) => (
                                <li key={index}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="overflow-auto">
                    <h4 className="font-semibold mb-4">
                        {blockData?.circuitDiagram?.title}
                    </h4>
                    <pre className="text-left">{blockData?.circuitDiagram?.diagram}</pre>
                </div>
            </div>
            {blockData?.requiredComponents && (
                <div className="mt-8 p-6 bg-white rounded-md border border-gray-300">
                <h4 className="font-serif text-xl font-semibold mb-4">
                   {blockData?.requireTitle}
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                    {blockData?.requiredComponents?.map((component, index) => (
                        <div key={index} className="text-center">
                            {component?.icon}
                            <h5 className="font-semibold">{component?.title}</h5>
                            <p className="text-sm text-gray-600">{component?.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            )}
            
        </section>
    )
}

export default DebounceSrLatch
