import React from 'react'

const DebounceConclusion = ({ data }) => {

    const conclusionData = data?.conclusionData

    return (
        <section id={conclusionData?.id} className="px-4 md:px-6 py-16 bg-slate-50">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">{conclusionData?.title}</h2>
            <p className="text-gray-600 mb-8 text-sm md:text-base">{conclusionData?.description}</p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
                {conclusionData?.options?.map((option, index) => (
                    <div
                        key={index}
                        className="bg-slate-100 backdrop-blur-sm rounded-md p-6"
                    >
                        <div className='flex items-start gap-3'>
                            {option?.icon}
                            <div>
                                <h3 className="font-semibold mb-2">{option?.title}</h3>
                                <p className="text-sm text-gray-600">{option?.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DebounceConclusion
