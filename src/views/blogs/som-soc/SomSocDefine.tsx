import React from 'react'

const SomSocDefine = ({ data }) => {

    const definition = data?.definition;

    return (
        <section id={definition?.id} className="px-4 md:px-6 py-16 bg-slate-50">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
                {definition?.title}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {definition?.cards?.map((card) => (
                    <div key={card?.id} className="bg-white p-4 rounded-md">
                        <div className="flex flex-wrap gap-3 items-center mb-4">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3`} style={{ backgroundColor: card?.iconColor }}>
                                {card?.icon}
                            </div>
                            <h4 className="text-lg md:text-xl font-semibold">{card?.title}</h4>
                        </div>
                        <p
                            className="text-sm md:text-base text-gray-600 mb-4"
                            dangerouslySetInnerHTML={{ __html: card?.description }}
                        />
                        <div className={`p-4 rounded-lg`} style={{backgroundColor:card?.bgColor}}>
                            <h5 className={`text-sm font-semibold mb-2`} style={{color:card?.color}}>
                                {card?.keyTitle}
                            </h5>
                            <ul className={`text-xs md:text-sm space-y-1`} style={{color:card?.color}}>
                                {card?.keyCharacteristics?.map((char, idx) => (
                                    <li key={idx}>{char}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default SomSocDefine
