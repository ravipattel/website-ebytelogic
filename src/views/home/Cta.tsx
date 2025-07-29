'use client'
import { useRouter } from 'next/navigation';

import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';

import Button from '@/src/components/Button'

const Cta = () => {
    const router = useRouter();
    return (
        <section className="relative bg-[url('/images/ctaHome.png')] bg-cover bg-fixed bg-center py-20 px-6">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div className="relative z-10 space-y-4 max-w-4xl mx-auto text-center text-white">
                <h2 className="text-2xl sm:text-[34px] font-medium text-white text-center leading-tight">
                    Want to know how we can build for your industry ?
                </h2>
                <p className="text-sm sm:text-base text-white text-center">
                    Discover our proven solutions tailored for businesses like yours.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button onClick={() => router.push('/contact-us')}
                    >
                        Let’s Connect
                    </Button>
                    <a
                        href="/case-study"
                        className="inline-flex items-center text-white hover:text-primary-300 font-medium transition-all duration-300 gap-2"
                    >
                        View Our Case Studies <FaArrowRightLong />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Cta
