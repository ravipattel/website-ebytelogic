'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { MdOutlineStarBorderPurple500 } from 'react-icons/md';

const testimonials = [
    {
        name: 'Edward',
        role: 'General customer',
        message: 'When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines. When replacing a selection. help agencies.',
    },
    {
        name: 'Charlotte',
        role: 'General customer',
        message: 'When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines. When replacing a selection. help agencies.',
    },
    {
        name: 'Daniel',
        role: 'General customer',
        message: 'When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines. When replacing a selection. help agencies.',
    },
    {
        name: 'Graham',
        role: 'General customer',
        message: 'When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines. When replacing a selection. help agencies.',
    },
    {
        name: 'Edward',
        role: 'General customer',
        message: 'When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines. When replacing a selection. help agencies.',
    },
];


const Testimonial = () => {
    const [centerIndex, setCenterIndex] = useState(0);

    const handleSlideChange = (swiper: any) => {
        const visibleSlides = swiper.params.slidesPerView >= 1 ? swiper.params.slidesPerView : 1;
        const current = swiper.activeIndex;
        const centerOffset = Math.floor(visibleSlides / 2);
        setCenterIndex(current + centerOffset);
    };

    return (
        <section className="py-16 sm:py-28">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center space-y-3">
                <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight text-center">
                    Trusted by Global Innovators
                </h2>
                <p className='text-sm sm:text-[15px] text-[#5d6471] max-w-lg mx-auto mb-4'>
                    We’ve had the privilege of working with forward-thinking companies across media,
                    semiconductors, IoT, aerospace, and more
                </p>
                <div className="relative pt-4">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{ el: '.custom-swiper-pagination', clickable: true }}
                        modules={[Pagination]}
                        className="px-6 md:px-12 testimonial"
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        onSlideChange={handleSlideChange}
                        onSwiper={handleSlideChange}
                    >
                        {testimonials.map((testimonial, index) => {
                            const isCenter = index === centerIndex;

                            return (
                                <SwiperSlide key={index}>
                                    <div className={`rounded border p-[30px] space-y-5 text-left transition duration-300 ${isCenter
                                        ? 'bg-secondary border-secondary'
                                        : 'bg-white border-[#dddddd]'
                                        }`}>
                                        <div className='flex items-center text-yellow-400 text-xl'>
                                            {[...Array(5)].map((_, i) => (
                                                <MdOutlineStarBorderPurple500 key={i} />
                                            ))}
                                        </div>
                                        <p className={`text-sm sm:text-[15px] ${isCenter ? 'text-white' : 'text-[#5d6471]'}`}>{testimonial.message}</p>
                                        <div>
                                            <h5 className={`text-lg sm:text-xl ${isCenter ? 'text-white' : 'text-primaryText'}`}>{testimonial.name}</h5>
                                            <p className={`text-sm sm:text-[15px] ${isCenter ? 'text-white' : 'text-[#5d6471]'}`}>{testimonial.role}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <div className="custom-swiper-pagination mt-8 flex justify-center"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
