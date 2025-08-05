'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import React from 'react'
import { FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md'

import Button from '@/src/components/Button';

import LogoPng from '@/src/assets/images/logo.png';

const Footer = () => {
    const router = useRouter();
    return (
        <div>
            <div className='bg-[#fdfcfc] py-16 sm:py-28'>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-3">
                    <footer className="text-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10">
                            <div className='xl:col-span-4 md:col-span-2'>
                                <div className="flex items-center space-x-2 mb-4">
                                    <a href="#">
                                        <Image src={LogoPng} alt="Logo" width={200} height={45} className='w-56 h-15' />
                                    </a>
                                </div>
                                <p className="text-sm text-primaryText leading-relaxed mb-4">
                                    We help product companies and OEMs turn hardware into world-class products with our
                                    embedded software, multimedia streaming, and system-level expertise.
                                </p>
                                <div className="flex flex-wrap xl:flex-nowrap gap-2 sm:gap-0">
                                    <input
                                        type="email"
                                        placeholder="Enter your work email"
                                        className="max-w-[273px] px-4 py-2 bg-white sm:shadow-lg focus:outline-none text-sm"
                                    />
                                    <Button variant='default' className="max-w-[153px] w-full bg-primary text-white px-6 py-2 text-sm sm:text-[15px] lg:text-[11px] 2xl:text-[15px]">
                                        Stay Updated
                                    </Button>
                                </div>
                            </div>
                            <div className="xl:col-span-5 md:col-span-1 flex flex-wrap justify-start lg:justify-center gap-4">
                                <div>
                                    <h3 className="font-medium text-primaryText text-xl mb-3">Explore</h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li onClick={() => router.push('/about')} className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />About Us</li>
                                        <li onClick={() => router.push('/case-study')} className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />Case Studies</li>
                                        <li onClick={() => router.push('/services')} className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />Services</li>
                                        <li onClick={() => router.push('/industries')} className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />Industries We Serve</li>
                                        <li onClick={() => router.push('/about')} className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />Careers</li>
                                        <li onClick={() => router.push('/contact-us')} className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />Contact Us</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium text-primaryText text-xl mb-3">What We Do</h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />Embedded Software Development</li>
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />Linux BSP & Board Bring-Up</li>
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />Multimedia & Streaming Solutions</li>
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />Framework & Middleware Integration</li>
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />QA & Testing Services</li>
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />Mobile & Web Apps for IoT</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:col-span-3 md:col-span-1 space-y-4'>
                                <h3 className="font-medium text-primaryText text-xl mb-3">Get in Touch</h3>
                                <p className="mb-2 text-primaryText text-sm sm:text-[15px]"><span className="font-medium text-primary">Location</span> :
                                    {` 913, Silver Trade Center, between Moon Garden & Oxygen Garden,
                                    (DIGITAL VALLEY) Utran, Surat-394105`}</p>
                                <p className="mb-2 text-primaryText text-sm sm:text-[15px] py-3"><span className="font-medium text-primary">Tel</span> : +91-9876543210</p>
                                <p className="mb-4 text-primaryText text-sm sm:text-[15px]"><span className="font-medium text-primary">Email</span> :  hello@ebyteLogic.com</p>

                                <div className="flex space-x-3">
                                    <Button variant='default' className="bg-primary rounded h-8 w-8 !p-0 grid place-items-center"><FaLinkedinIn /></Button>
                                    <Button variant='default' className="bg-primary rounded h-8 w-8 !p-0 grid place-items-center"><FaTwitter /></Button>
                                    <Button variant='default' className="bg-primary rounded h-8 w-8 !p-0 grid place-items-center"><IoLogoGithub /></Button>
                                    <Button variant='default' className="bg-primary rounded h-8 w-8 !p-0 grid place-items-center"><FaYoutube /></Button>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <div className='bg-[#F5F8FB] py-6'>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <p className='text-sm sm:text-[15px]'>Copyright © 2020 <span className='text-primary'>eByteLogic</span> All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
