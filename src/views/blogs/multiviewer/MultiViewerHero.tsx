import React from 'react'
import Image from 'next/image'

const MultiViewerHero = ({ data }) => {

    const heroData = data?.heroData;

    return (
        <section id={heroData?.id} className="relative overflow-hidden px-6 py-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-md p-8 flex flex-wrap justify-between gap-4 relative">
                <div className="absolute inset-0 rounded-md"></div>
                <div className="relative z-10">
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        <span className="italic">{heroData?.title}</span>
                        <br />
                        <span className={heroData?.subtitleColor || 'text-yellow-500'}>{heroData?.subtitle}</span>
                    </h1>
                    <p className="text-gray-300 mb-8 max-w-2xl italic text-sm md:text-base">
                        {heroData?.description}
                    </p>
                    <div className="flex flex-wrap gap-3 items-center space-x-6 text-gray-300">
                        {heroData?.features?.map((feature, idx) => {
                            const Icon = feature?.icon;
                            return (
                                <div key={idx} className="flex items-center gap-2 text-sm md:text-base">
                                    <Icon className="text-accent" />
                                    <span>{feature?.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Image src={heroData?.heroImage?.src} alt={heroData?.heroImage?.alt} className='w-96' width={384} height={384} />
            </div>
            <div className='my-6'>
                <div className="bg-white rounded-md p-6 shadow-lg mb-6">
                    <h3 className="font-serif font-bold text-lg mb-3">{heroData?.keyTitle}</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        {heroData?.keyFindings?.findings?.map((finding, idx) => {
                            const Icon = heroData?.keyFindings?.icon;
                            return (
                                <li key={idx} className="flex items-start space-x-2">
                                    <Icon className="text-accent mt-1" />
                                    <span>{finding}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-md p-6 border border-accent/20">
                    <h3 className="font-serif font-bold text-base md:text-lg mb-3 text-primary">
                        {heroData?.decisionFramework?.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                        {heroData?.decisionFramework?.description}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MultiViewerHero
