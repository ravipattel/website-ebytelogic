import Image from 'next/image'
import Link from 'next/link';

import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri';
const QaHero = ({ data }) => {

    const heroData = data?.heroData;

    return (
        <section className="relative overflow-hidden">
            {/* Hero Overlay */}
            <div className="bg-black/60 absolute inset-0"></div>
            <p className="text-sm flex flex-wrap items-center gap-2 px-9 py-8 relative z-50">
                <Link href="/" className="text-white">
                    Home
                </Link>
                <RiArrowRightSLine className="text-white text-xl" />
                <Link href="/blogs" className="text-white">
                    Blogs
                </Link>
                <RiArrowRightSLine className="text-white text-xl" />
                <span className='text-white'>{data?.title}</span>
            </p>
            {/* Hero Image */}
            {heroData?.heroImage && (
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src={heroData?.heroImage?.src}
                        alt={heroData?.heroImage?.alt}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            {/* Hero Content Grid */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 md:pb-16 md:pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 md:mb-16">
                    {/* Main Title Area */}
                    <div className="lg:col-span-8">
                        <div className="mb-6">
                            <span className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-4" style={{ color: heroData?.color, backgroundColor: heroData?.bgColor }}>
                                {heroData?.chipTitle}
                            </span>
                        </div>
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            {heroData?.heroContentGrid?.mainTitleArea?.mainTitle}
                            <span className="block text-white text-2xl sm:text-3xl mt-2">
                                {heroData?.heroContentGrid?.mainTitleArea?.heroDescription}
                            </span>
                        </h1>
                        <p className="text-white leading-relaxed mb-8 max-w-3xl text-sm md:text-base">
                            {heroData?.heroContentGrid?.mainTitleArea?.paragraphText}
                        </p>
                    </div>

                    {/* Key Highlights */}
                    {
                        heroData?.heroContentGrid?.keyHighlights && (
                            <div className="lg:col-span-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                    <h3 className="font-serif text-lg font-semibold text-white mb-4">
                                        {heroData?.heroContentGrid?.keyHighlights?.titleText}
                                    </h3>
                                    <ul className="space-y-3">
                                        {heroData?.heroContentGrid?.keyHighlights?.keys?.map((key, index) => (
                                            <li key={index} className="text-sm md:text-base flex items-center gap-3" style={{ color: key?.color }}>
                                                {key?.icon}
                                                {key?.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default QaHero
