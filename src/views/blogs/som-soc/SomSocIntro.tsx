import React from 'react'

const SomSocIntro = ({ data }) => {

    const introduction = data?.introduction;

    return (
        <div className='py-16 flex flex-col gap-6'>
            <section id={introduction?.id} className="px-4 md:px-6">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
                    {introduction?.title}
                </h2>
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                    {introduction?.content?.description}
                </p>
                {introduction?.content?.quoteBlock && (
                    <div className="flex flex-col gap-4">
                        {introduction?.content?.quoteBlock?.map((quote , idx) => (
                            <div key={idx} className={`text-sm md:text-base italic pl-4 py-6`} style={{ color: quote?.color, backgroundColor: quote?.bgColor, borderLeft: `4px solid ${quote?.borderColor || "#000"}`, }}>
                                {quote?.quote}
                            </div>
                        ))
                        }
                    </div>
                )}
            </section>
        </div>

    )
}

export default SomSocIntro

