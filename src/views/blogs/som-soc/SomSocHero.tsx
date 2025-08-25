import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
const SomSocHero = ({ data }) => {

    const heroData = data?.heroData;

    return (
        <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
            <p className="text-sm flex items-center gap-2 px-9 py-8 z-50 relative">
                <Link href="/" className="text-primary">
                    Home
                </Link>
                <RiArrowRightSLine className="text-primary text-xl" />
                <Link href="/blogs" className="text-primary">
                    Blogs
                </Link>
                <RiArrowRightSLine className="text-primary text-xl" />
                <span className="text-slate-500">{data?.title}</span>
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="relative z-10 px-4 md:px-8 pb-16">
                <div className="flex flex-wrap gap-6 lg:gap-3 xl:gap-6 justify-between">
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-2 rounded-full text-xs md:text-sm font-medium" style={{ color: heroData?.color, backgroundColor: heroData?.chipBgColor }}>
                            {heroData?.chipTitle}
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif"
                            dangerouslySetInnerHTML={{ __html: heroData?.mainTitle }}
                        />
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
                            {heroData?.heroDescription}
                        </p>
                        {heroData?.meta && (
                            <div className="flex flex-wrap gap-3 items-center text-sm text-gray-500">
                                {heroData?.meta?.map((item: any, index: number) => (
                                    <span key={index} className="flex items-center gap-2">
                                        {item?.icon}
                                        {item?.label}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                    {heroData?.heroImage && (
                        <Image
                            src={heroData?.heroImage?.src}
                            alt={heroData?.heroImage?.alt}
                            className="rounded-2xl shadow-2xl lg:w-[600px] xl:w-[650px]"
                            width={650}
                        />
                    )}
                </div>

                {/* Key Highlights */}
                {heroData?.cards && (
                    <div className="grid md:grid-cols-3 gap-6 mt-16">
                        {heroData?.cards?.map((card, index) => (
                            <div key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4`} style={{ backgroundColor: card?.iconColor }}>
                                    {card?.icon}
                                </div>
                                <h3 className="font-semibold mb-2">{card?.title}</h3>
                                <p className="text-gray-600 text-sm md:text-base">{card?.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default SomSocHero
