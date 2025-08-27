'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import React from 'react'
import { FaGoogle, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md'

import Button from '@/src/components/Button';

import LogoPng from '@/src/assets/images/logo.png';
import Link from 'next/link';

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
                                        <li onClick={() => router.push('/blogs')} className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />Blogs</li>
                                        <li onClick={() => router.push('/contact-us')} className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />Contact Us</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium text-primaryText text-xl mb-3">What We Do</h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li onClick={() => router.push(`/services/0`)} className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />Embedded App Development</li>
                                        <li onClick={() => router.push(`/services/1`)} className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />Linux BSPs & Hardware Bring-Up</li>
                                        <li onClick={() => router.push(`/services/2`)} className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />Multimedia & Streaming Frameworks</li>
                                        <li onClick={() => router.push(`/services/3`)} className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />IoT & Cloud Integration</li>
                                        <li onClick={() => router.push(`/services/4`)} className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />Embedded QA & Test Automation</li>
                                        <li onClick={() => router.push(`/services/5`)} className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight />AV Protocol & Codec Engineering</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:col-span-3 md:col-span-1 space-y-4'>
                                <h3 className="font-medium text-primaryText text-xl mb-3">Get in Touch</h3>
                                <p className="mb-2 text-primaryText text-sm sm:text-[15px]"><span className="font-medium text-primary">Location</span> :
                                    {` 1114, Ganesh Glory, Jagatpur Rd, S.G. Highway, Gota, Ahmedabad - 382481`}</p>
                                <a href="tel:+919033223700" className="block mb-2 text-primaryText text-sm sm:text-[15px]"><span className="font-medium text-primary">Tel</span> : +91 90332 23700</a>
                                <a href='mailto:Contact@ebytelogic.com' className="block mb-4 text-primaryText text-sm sm:text-[15px]"><span className="font-medium text-primary">Email</span> :  Contact@ebytelogic.com</a>

                                <div className="flex space-x-3">
                                    <Link href="https://in.linkedin.com/company/ebytelogic" target="_blank"><Button variant='default' className="bg-primary rounded !h-8 w-8 !p-0 grid place-items-center"><FaLinkedinIn /></Button></Link>
                                    <Link href="https://www.google.com/search?q=ebytelogic&oq=ebytelogic&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg8MgYIAhBFGDwyCggDEAAYgAQYogQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDQ2OTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" target="_blank"> <Button variant='default' className="bg-primary rounded !h-8 w-8 !p-0 grid place-items-center"><FaGoogle /></Button></Link>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <div className='bg-[#F5F8FB] py-6'>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <p className='text-sm sm:text-[15px]'>Copyright © 2025 <span className='text-primary'>eByteLogic</span> All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
