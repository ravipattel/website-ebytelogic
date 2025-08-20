import Image from 'next/image';

import React from 'react'

const DevGuideHero = ({ data }) => {
    const rkHero = data;
    return (
        <section className="px-4 md:px-6 py-8 bg-gradient-to-br from-purple-50 to-cyan-50">
            <div className='grid grid-cols-2'>
                {/* Left Column: Text Content */}
                <div>
                    <h1 className="font-serif text-6xl mb-6">
                        <span className="hero-text">{rkHero?.heroData?.title}</span>
                        <br />
                        <span>{rkHero?.heroData?.subtitle}</span>
                    </h1>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        {rkHero?.heroData?.description}
                    </p>
                    {/* Performance Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                        {rkHero?.heroData?.performanceMetrics?.map((metric, index) => (
                            <div key={index} className="bg-slate-100 rounded-md p-4 border border-gray-300">
                                <div className="metric-value">{metric.value}</div>
                                <div className="text-sm text-gray-600">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Image */}
                <Image
                    src={rkHero?.heroData?.image.src}
                    alt={rkHero?.heroData?.image.alt}
                    width={512}
                    height={320}
                    className="h-80 object-cover rounded-md shadow-lg lg:ms-auto"
                />
            </div>
        </section>
    )
}

export default DevGuideHero
