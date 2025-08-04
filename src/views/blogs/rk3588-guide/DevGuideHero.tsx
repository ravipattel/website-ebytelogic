import Image from 'next/image';

import React from 'react'

import DevGuideHeroPng from '@/src/assets/images/blogs/blogDetails/devGuideHero.png'

const heroData = {
    title: "RK3588 Multimedia",
    subtitle: "Development Guide",
    description: "A comprehensive guide to configuring and utilizing CSI, V4L, MPP, RGA, and 3A on Rockchip's RK3588 SoC for advanced multimedia applications.",
    performanceMetrics: [
        {
            value: "6 TOPS",
            label: "NPU Performance"
        },
        {
            value: "4x",
            label: "Camera Inputs"
        }
    ],
    image: {
        src: DevGuideHeroPng,
        alt: "RK3588 embedded system chip"
    }
};

const DevGuideHero = () => {
    return (
        <section className="px-4 md:px-6 py-8 bg-gradient-to-br from-purple-50 to-cyan-50">
            <div className='grid grid-cols-2'>
                {/* Left Column: Text Content */}
                <div>
                    <h1 className="font-serif text-6xl mb-6">
                        <span className="hero-text">{heroData.title}</span>
                        <br />
                        <span>{heroData.subtitle}</span>
                    </h1>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        {heroData.description}
                    </p>
                    {/* Performance Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                        {heroData.performanceMetrics.map((metric, index) => (
                            <div key={index} className="bg-slate-100 rounded-md p-4 border border-gray-300">
                                <div className="metric-value">{metric.value}</div>
                                <div className="text-sm text-gray-600">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Image */}
                <Image
                    src={heroData.image.src}
                    alt={heroData.image.alt}
                    className="h-80 object-cover rounded-md shadow-lg lg:ms-auto"
                />
            </div>
        </section>
    )
}

export default DevGuideHero
