import Image from 'next/image'

import React from 'react'

const QaLowLevel = ({ data }) => {
    const lowlevel = data?.lowlevel;
    return (
        <section id={lowlevel?.id} className="px-4 md:px-6 py-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
                {lowlevel?.title}
            </h2>

            {/* Hero Image */}
            <div className="mb-8">
                <Image
                    src={lowlevel?.image?.src}
                    alt={lowlevel?.image?.alt}
                    width={1000}
                    height={1000}
                    className="w-full object-cover rounded-md shadow-lg mb-6"
                />
            </div>

            {/* Content Mapping */}
            {lowlevel?.content?.map((item, index) => {
                switch (item?.type) {
                    case 'text':
                        return (
                            <div key={index}>
                                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">{item?.heading}</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: item?.paragraph }} />
                            </div>
                        );
                    case 'grid':
                        return (
                            <div key={index} className="mb-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {item?.items?.map((gridItem, gridIndex) => (
                                    <div key={gridIndex} className="bg-white p-4 rounded-md border border-gray-300 shadow-md">
                                        <h4 className={`font-serif text-base md:text-lg font-semibold mb-3 ${gridItem?.color}`}>{gridItem?.title}</h4>
                                        <p className="text-sm text-gray-600">{gridItem?.description}</p>
                                    </div>
                                ))}
                            </div>
                        );
                    case 'quote':
                        return (
                            <div key={index} className="bg-gray-100 p-6 rounded-md shadow-lg mb-6 text-sm md:text-base">
                                &#34;{item?.text}&#34;
                            </div>
                        );
                    case 'list':
                        return (
                            <div key={index}>
                                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                                    {item?.items?.map((listItem, listIndex) => (
                                        <li key={listIndex} className="text-sm md:text-base">
                                            {listItem?.icon}
                                            <span className="font-semibold">{listItem?.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    default:
                        return null;
                }
            })}
        </section>
    )
}

export default QaLowLevel
