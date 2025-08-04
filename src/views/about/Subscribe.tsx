'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

import React from 'react'

import Button from '@/src/components/Button';

import ImagePng from "@/src/assets/images/about/image.png";

interface subscribeProps {
    className?: string;
}

const Subscribe = ({ className }: subscribeProps) => {
    const router = useRouter();
    return (
        <section className={`max-w-[1400px] mx-auto pb-16 px-4 sm:px-6 relative lg:px-8 ${className}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-0 items-center p-8 shadow-xl bg-white z-20 rounded-2xl border-t-2 border-primary">
                <div className='lg:col-span-2 flex justify-center'>
                    <Image src={ImagePng} alt='ImagePng' height={350} className='mx-auto' />
                </div>
                <div className="lg:col-span-3 space-y-3">
                    <h2 className="text-2xl sm:text-[34px] font-medium text-primary leading-tight">
                        Ready to Scale Your Embedded Software ?
                    </h2>
                    <p className="text-sm sm:text-[15px] text-[#5d6471] mb-4">
                        Partner with a team trusted by global OEMs, startups, and innovation leaders.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <Button onClick={() => router.push('/contact-us')}>Book a Free Consultation</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
