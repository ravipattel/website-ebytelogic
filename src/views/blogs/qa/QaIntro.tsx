import React from 'react'

const QaIntro = ({ data }) => {
    const introduction = data?.introduction;
    return (
        <section id={introduction?.id} className="px-4 md:px-6 py-16">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                {introduction?.introTitle}
            </h2>
            <div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                    {introduction?.paragraphText?.text}
                    {introduction?.paragraphText?.highlightedText?.map((item, index) => (
                        <span key={index} className={item?.class}>
                            {item?.text}
                        </span>
                    ))}
                    {introduction?.paragraphText?.additionalText}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {introduction?.cards?.map((card, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-md border border-gray-300 p-6">
                            <div className="flex items-center mb-4 gap-3">
                                {/* Dynamically render the icon */}
                                {card?.icon}
                                <h3 className="font-serif text-lg md:text-xl font-semibold">{card?.title}</h3>
                            </div>
                            <p className="text-gray-600 text-sm md:text-base">{card?.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default QaIntro
