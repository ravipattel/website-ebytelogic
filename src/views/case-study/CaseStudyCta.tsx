'use client'
import { useRouter } from 'next/navigation'

import React from 'react'

import Button from '@/src/components/Button'

const CaseStudyCta = () => {
    const router = useRouter();
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-24 bg-[#f9fafb]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl sm:text-[30px] font-medium leading-tight capitalize mb-8">
                    Why Our Clients <span className="text-[#308DFF]">Work With Us</span>
                </h2>
                <div className="grid sm:grid-cols-3 gap-8 text-left mb-12">
                    <div className="flex items-start gap-4">
                        <div className="text-[#308DFF] text-2xl">⚙️</div>
                        <p className="text-sm sm:text-[15px] text-[#5d6471]">
                            Focused on performance, stability, and system-level integration
                        </p>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="text-[#308DFF] text-2xl">🤝</div>
                        <p className="text-sm sm:text-[15px] text-[#5d6471]">
                            Agile collaboration across design, dev, and QA
                        </p>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="text-[#308DFF] text-2xl">🔐</div>
                        <p className="text-sm sm:text-[15px] text-[#5d6471]">
                            Proven ability to deliver in hardware-constrained and high-compliance environments
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <Button onClick={() => router.push('/contact-us')} className='w-full sm:w-fit'
                    >
                        Request a Custom Solution
                    </Button>
                    <Button onClick={() => router.push('/contact-us')} className='w-full sm:w-fit !bg-white !text-primary hover:!bg-primary hover:!text-white'
                    >
                        Talk to Our Team
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default CaseStudyCta
