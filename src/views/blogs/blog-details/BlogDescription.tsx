import Image from 'next/image'
import React from 'react'

import BlogBspJpg from '@/src/assets/images/blogs/blogBsp.jpg'

const BlogDescription = () => {
    return (
        <>
            <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-20">
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="overflow-hidden whitespace-nowrap">
                                <h1 className="inline-block marquee font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-500 via-blue-300 to-indigo-700 bg-clip-text text-transparent">
                                    <span className="italic">Board Support Package</span>&nbsp;—&nbsp;
                                    Development in Media&nbsp;—&nbsp;
                                    <span className="text-black/50">Broadcasting & Multimedia</span>
                                </h1>
                            </div>
                            <p className="text-[#5d6471] text-sm sm:text-[15px] max-w-xl">
                                Explore the challenges, real-world case studies, and technical insights into developing efficient and scalable BSPs for modern multimedia applications.
                            </p>
                            <div className="p-6 bg-white rounded-xl shadow-lg shadow-blue-50 border border-primary">
                                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Key Challenge Areas</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary">•</span>
                                        <span>Real-time Processing</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary">•</span>
                                        <span>High-bandwidth Data</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary">•</span>
                                        <span>Codec Integration</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary">•</span>
                                        <span>Hardware Variability</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image
                                src={BlogBspJpg}
                                alt="BlogBspJpg"
                                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDescription
