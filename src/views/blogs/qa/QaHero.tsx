import Image from 'next/image'

import React from 'react'
import { FaBolt, FaMicrochip, FaSearch, FaWifi } from 'react-icons/fa'

import QaHeroJpg from '@/src/assets/images/blogs/blogDetails/qaHero.jpg'
const QaHero = () => {
    return (
        <section className="relative overflow-hidden">
            {/* Hero Overlay */}
            <div className="bg-black/60 absolute inset-0"></div>

            {/* Hero Image */}
            <div className="absolute inset-0 opacity-20">
                <Image
                    src={QaHeroJpg}
                    alt="Circuit board with integrated microcontroller and connected components"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Hero Content Grid */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 md:mb-16">
                    {/* Main Title Area */}
                    <div className="lg:col-span-8">
                        <div className="mb-6">
                            <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-medium rounded-full mb-4">
                                Embedded Systems Engineering
                            </span>
                        </div>
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            The Unseen Complexity
                            <span className="block text-white text-2xl sm:text-3xl mt-2">
                                Why Embedded QA Demands Specialized Mastery
                            </span>
                        </h1>
                        <p className="text-white leading-relaxed mb-8 max-w-3xl text-sm md:text-base">
                            Exploring the fundamental differences that make embedded quality assurance a discipline apart from conventional software testing.
                        </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="lg:col-span-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <h3 className="font-serif text-lg font-semibold text-white mb-4">Key Challenges</h3>
                            <ul className="space-y-3">
                                <li className="text-sm md:text-base flex items-center gap-3 text-blue-100">
                                    <FaMicrochip className="text-blue-400" /> Hardware-Software Integration
                                </li>
                                <li className="text-sm md:text-base flex items-center gap-3 text-blue-100">
                                    <FaBolt className="text-yellow-400" /> Real-Time Constraints
                                </li>
                                <li className="text-sm md:text-base flex items-center gap-3 text-blue-100">
                                    <FaWifi className="text-green-400" /> OTA Update Risks
                                </li>
                                <li className="text-sm md:text-base flex items-center gap-3 text-blue-100">
                                    <FaSearch className="text-purple-400" /> Limited Debugging
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QaHero
