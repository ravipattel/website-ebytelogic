'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import React from 'react'

import Button from '@/src/components/Button'

import ServiceWebp from '@/src/assets/images/services/service.webp'
const ServiceIntro = () => {
    const router = useRouter();

    return (
        <section className="py-16 sm:py-28">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 items-center">
                    <div className='space-y-4'>
                        <h6 className='text-base md:text-lg text-primary font-medium flex items-center gap-2'>Our Core Services</h6>
                        <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize'>Empowering Products Through<span className='text-primary'> Embedded </span>Excellence</h3>
                        <p className='text-sm sm:text-[15px] text-[#5d6471] mb-4'>eByteLogic delivers tailored embedded software and application development
                            services across product lifecycles — from BSPs to streaming frameworks, from
                            mobile apps to validation support.</p>

                        <div className="flex flex-wrap gap-4">
                            <a href='#services'>
                                <Button className='px-6 py-3'>Explore Our Services</Button>
                            </a>
                            <Button onClick={() => router.push('/contact-us')} className='!bg-blue-100 !border-0 !text-blue-600 px-6 py-3 hover:!bg-blue-200 transition'>Request a Free Consultation</Button>
                        </div>
                    </div>
                    <Image src={ServiceWebp} alt="ServiceWebp" height={300} width={550} className='w-full lg:w-auto rounded-2xl ms-auto' />
                </div>
            </div>
        </section>
    )
}

export default ServiceIntro
