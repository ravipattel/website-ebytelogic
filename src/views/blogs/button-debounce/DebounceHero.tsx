import Link from 'next/link'
import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const DebounceHero = ({ data }) => {

    const heroData = data?.heroData

    return (
        <section id={heroData?.id} className="px-4 md:px-6 py-8 bg-slate-50">
            <div>
                <p className="text-sm flex items-center gap-2 py-8">
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
                <div className="space-y-6">
                    <div className="inline-block bg-primary text-white backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                        {heroData?.sectionTitle}
                    </div>
                    <h1 className="font-serif text-4xl font-semibold leading-tight">
                        <span>{heroData?.heading}</span>
                    </h1>
                    <p className="text-gray-600">
                        {heroData?.description}
                    </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="font-serif text-xl font-semibold mb-4">{heroData?.keyTitle}</h3>
                    <ul className="space-y-3 text-sm">
                        {heroData?.keyInsights.map((insight, index) => {
                            return (
                                <li key={index} className="flex items-start gap-3">
                                    <span className='mt-1'>
                                        {insight.icon}
                                    </span>
                                    {insight.text}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default DebounceHero
