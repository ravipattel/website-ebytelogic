"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface SlideData {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/images/multimedia-workflow-transparent.png",
    title: "Multimedia Workflow",
    description: "End-to-end multimedia processing pipeline from acquisition to delivery"
  },
  {
    id: 2,
    image: "/images/embedded-architecture.svg",
    title: "Embedded Architecture",
    description: "Comprehensive embedded systems architecture and development workflow"
  },
  {
    id: 3,
    image: "/images/iot-development.svg", 
    title: "IoT Development",
    description: "Complete IoT ecosystem from devices to cloud services"
  }
];

const WorkflowSlider: React.FC = () => {
  return (
    <div className="relative w-full max-w-[600px] h-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-active-custom',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        loop={true}
        className="workflow-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative group">
              <img 
                src={slide.image}
                alt={slide.title}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                style={{ width: 'auto', height: 'auto' }}
              />
              
              {/* Left half transparent overlay for multimedia workflow image */}
              {slide.id === 1 && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 pointer-events-none"></div>
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to right, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.1) 40%, transparent 50%)'
                    }}
                  ></div>
                </>
              )}
              
              {/* Slide info overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-semibold text-lg mb-2">{slide.title}</h3>
                <p className="text-gray-200 text-sm">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom navigation buttons */}
      <button className="swiper-button-prev-custom absolute top-1/2 left-4 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button className="swiper-button-next-custom absolute top-1/2 right-4 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Custom pagination dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <div 
            key={index}
            className="swiper-pagination-bullet-custom w-3 h-3 bg-white/40 rounded-full cursor-pointer transition-all duration-300 hover:bg-white/60"
          ></div>
        ))}
      </div>
      
      <style jsx>{`
        .workflow-slider .swiper-pagination-bullet-active-custom {
          background-color: rgba(255, 255, 255, 0.9) !important;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default WorkflowSlider;