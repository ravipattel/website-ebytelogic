import Image from 'next/image'

import React from 'react'
import { FaBalanceScale, FaClock, FaCompressAlt, FaPuzzlePiece } from 'react-icons/fa'
import { FaMicrochip } from 'react-icons/fa6'

import SomSocJpg from '@/src/assets/images/blogs/blogDetails/som-soc.jpg'
const SomSocHero = () => {
    return (
        <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="relative z-10 px-4 md:px-8 py-16">
                <div className="flex flex-wrap gap-6 justify-between">
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium">
                            Embedded Systems Design
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif">
                            System on Chip vs <br />System on Module
                        </h1>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
                            A comprehensive analysis of integration strategies for modern electronic systems, examining the trade-offs between maximum integration and modular flexibility.
                        </p>
                        <div className="flex flex-wrap gap-3 items-center text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                                <FaMicrochip /> Hardware Architecture
                            </span>
                            <span className="flex items-center gap-2">
                                <FaClock /> 15 min read
                            </span>
                        </div>
                    </div>
                    <Image
                        src={SomSocJpg}
                        alt="SoC and SoM electronic components"
                        className="rounded-2xl shadow-2xl"
                        width={650}
                    />
                </div>

                {/* Key Highlights */}
                <div className="grid md:grid-cols-3 gap-6 mt-16">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <FaCompressAlt className='text-blue-600 text-xl' />
                        </div>
                        <h3 className="font-semibold mb-2">Maximum Integration</h3>
                        <p className="text-gray-600 text-sm md:text-base">
                            SoCs offer unparalleled integration density, packing all essential components onto a single silicon die.
                        </p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <FaPuzzlePiece className='text-green-600 text-xl' />
                        </div>
                        <h3 className="font-semibold mb-2">Modular Flexibility</h3>
                        <p className="text-gray-600 text-sm md:text-base">
                            SoMs provide pre-integrated solutions that dramatically reduce development complexity and time-to-market.
                        </p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <FaBalanceScale className='text-purple-600 text-xl' />
                        </div>
                        <h3 className="font-semibold mb-2">Strategic Choice</h3>
                        <p className="text-gray-600 text-sm md:text-base">
                            The decision hinges on production volume, development expertise, and time-to-market requirements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SomSocHero
