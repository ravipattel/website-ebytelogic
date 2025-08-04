import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdMailOutline } from 'react-icons/md'

import Button from '@/src/components/Button'
import { IoLogoGithub } from 'react-icons/io'
import Subscribe from '../about/Subscribe'

const ContactDetails = () => {
    return (
        <section>
            <div className='max-w-[1400px] pt-28 pb-36 mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center'>
                <div className="bg-white shadow-[0px_5px_20px_0px_rgba(0,0,0,0.09)] rounded p-8">
                    <form className="space-y-8">
                        <div>
                            <label className="font-medium">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full mt-2 border border-gray-300 px-4 py-2 rounded placeholder:text-[#999] focus:outline-none focus:ring focus:border-[#3078fb]"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="font-medium">Telephone</label>
                                <input
                                    type="tel"
                                    placeholder="Your Phone"
                                    className="w-full mt-2 border border-gray-300 px-4 py-2 rounded placeholder:text-[#999] focus:outline-none focus:ring focus:border-[#3078fb]"
                                />
                            </div>
                            <div>
                                <label className="font-medium">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full mt-2 border border-gray-300 px-4 py-2 rounded placeholder:text-[#999] focus:outline-none focus:ring focus:border-[#3078fb]"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">Subject</label>
                            <input
                                type="text"
                                placeholder="Your Subject"
                                className="w-full mt-2 border border-gray-300 px-4 py-2 rounded placeholder:text-[#999] focus:outline-none focus:ring focus:border-[#3078fb]"
                            />
                        </div>
                        <div>
                            <label className="font-medium">Message</label>
                            <textarea
                                placeholder="Your Message"
                                rows={6}
                                className="w-full mt-2 border border-gray-300 px-4 py-2 rounded placeholder:text-[#999] focus:outline-none focus:ring focus:border-[#3078fb]"
                            />
                        </div>
                        <Button>
                            SUBMIT MESSAGE
                        </Button>
                    </form>
                </div>
                <div>
                    <div>
                        <h4 className="text-base md:text-lg text-primary font-medium uppercase">Contact Us</h4>
                        <h2 className="text-2xl sm:text-[34px] font-medium leading-tight max-w-lg capitalize text-primaryText my-2"> Let&apos;s Get In Touch</h2>
                        <p className="!text-[#5d6471] text-sm sm:text-[15px]">
                            {`Got a project in mind or a challenge to solve? Share your details — our embedded experts will get back to you within 24 hours. `}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 !my-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9672021225238!2d72.86509362429975!3d21.233149130223257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fde33b05dcf%3A0x1d331b2a1edb7fbc!2sCyber%20City!5e0!3m2!1sen!2sin!4v1750681452261!5m2!1sen!2sin" width="100%"
                            height="210"
                            loading="lazy"></iframe>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9672021225238!2d72.86509362429975!3d21.233149130223257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fde33b05dcf%3A0x1d331b2a1edb7fbc!2sCyber%20City!5e0!3m2!1sen!2sin!4v1750681452261!5m2!1sen!2sin" width="100%"
                            height="210"
                            loading="lazy"></iframe>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                            <HiOutlineLocationMarker className='!w-7 !h-7 mt-0.5 text-primary' />
                            <div>
                                <h4 className='text-primaryText font-semibold text-base md:text-lg'>Surat Office</h4>
                                <span className='text-[#5d6471] text-sm md:text-[15px]'>913, Silver Trade Center, near VIP Circle, Mota Varachha, Surat, Gujarat 394101</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <HiOutlineLocationMarker className='!w-7 !h-7 mt-0.5 text-primary' />
                            <div>
                                <h4 className='text-primaryText font-semibold text-base md:text-lg'>Ahmedabad Office</h4>
                                <span className='text-[#5d6471] text-sm md:text-[15px]'>4th Floor, ABC Tech Park, Satellite, Ahmedabad – 380015</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <BiPhoneCall className='!w-7 !h-7 mt-0.5 text-primary' />
                            <div>
                                <h4 className='text-primaryText font-semibold text-base md:text-lg'>Calling Support</h4>
                                <span className='text-[#5d6471] text-sm md:text-[15px]'>+91-9876543210</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <MdMailOutline className='!w-7 !h-7 mt-0.5 text-primary' />
                            <div>
                                <h4 className='text-primaryText font-semibold text-base md:text-lg'>Email Information</h4>
                                <span className='text-[#5d6471] text-sm md:text-[15px]'>hello@ebyteLogic.com</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr className="mb-6 mt-8 border-gray-300" />
                        <p className="font-semibold mb-3 text-primaryText">Follow Us On Social Media</p>
                        <div className="flex gap-4 text-white">
                            <Button className='!rounded-full !w-11 !h-11 flex items-center justify-center !p-0'>
                                <FaYoutube className='!w-5 !h-5' />
                            </Button>
                            <Button className='!rounded-full !w-11 !h-11 flex items-center justify-center !p-0'>
                                <FaTwitter className='!w-5 !h-5' />
                            </Button>
                            <Button className='!rounded-full !w-11 !h-11 flex items-center justify-center !p-0'>
                                <IoLogoGithub className='!w-5 !h-5' />
                            </Button>
                            <Button className='!rounded-full !w-11 !h-11 flex items-center justify-center !p-0'>
                                <FaLinkedinIn className='!w-5 !h-5' />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="-mb-[120px]">
                <Subscribe className='z-20' />
            </div>
        </section>
    )
}

export default ContactDetails
