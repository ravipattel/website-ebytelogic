import React from 'react'

const DebounceKey = ({ data }) => {

    const keyData = data?.keyData

    return (
        <section id={keyData?.id} className="px-4 md:px-6 py-16">
            <h2 className="font-serif text-3xl font-semibold mb-12 text-center">
                {keyData?.title}
            </h2>
            {keyData?.considerations && (
                <div>
                    {keyData?.considerations?.map((consideration, index) => (
                        <div key={index} id={consideration?.id} className='mt-16'>
                            <h3 className="font-serif text-2xl font-bold mb-8">
                                {consideration?.title}
                            </h3>
                            {consideration?.points ? (
                                <div className="grid lg:grid-cols-3 gap-8">
                                    {consideration?.points?.map((point, idx) => (
                                        <div
                                            key={idx}
                                            className={`p-6 rounded-r-lg`} style={{ background: point?.bgColor, borderLeft: `4px solid ${point?.borderColor}` }}
                                        >
                                            <h4 className="font-serif text-xl font-semibold mb-4 flex gap-2 items-center">
                                                {point?.icon}
                                                {point?.title}
                                            </h4>
                                            <p className="text-gray-600">
                                                {point?.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                            {consideration?.sections && (
                                <div className="bg-white rounded-lg p-8 shadow-sm">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {consideration?.sections?.map((section: any, idx: any) => (
                                            <div key={idx}>
                                                <h4 className="font-serif text-xl font-semibold mb-4">
                                                    {section?.title}
                                                </h4>
                                                <p className="text-gray-600 mb-4">{section?.description}</p>
                                                {section?.code && (
                                                    <div className="bg-gray-100 p-4 rounded">
                                                        <code>{section?.code}</code>
                                                    </div>
                                                )}
                                                {section?.diagram && (
                                                    <div>
                                                        <div>{section?.diagram}</div>
                                                    </div>
                                                )}
                                                {section?.items && (
                                                    <ul className="space-y-4 text-gray-600">
                                                        {section.items.map((item: any, itemIdx: any) => (
                                                            <li key={itemIdx} className="flex items-start gap-3">
                                                                {item?.icon && (
                                                                    item?.icon
                                                                )}
                                                                <div>
                                                                    {item?.label && item?.cost ? (
                                                                        <span>
                                                                            <span className="font-semibold">{item?.label}:</span> {item?.cost}
                                                                        </span>
                                                                    ) : (
                                                                        <>
                                                                            <p className="font-semibold">{item?.subtitle}</p>
                                                                            <p className="text-sm">{item?.description}</p>
                                                                        </>
                                                                    )}
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

        </section>
    )
}

export default DebounceKey
