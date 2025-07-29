"use client"
import React, { useState, useEffect } from 'react';

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
    title: "Linux BSP & Board Bring-up",
    description: "Production-grade hardware enablement with scalable embedded systems"
  },
  {
    id: 3,
    image: "/images/iot-development.svg", 
    title: "Low-Latency Streaming",
    description: "Real-time video streaming systems with sub-32ms end-to-end latency"
  }
];

const WorkflowSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isClient]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isClient) {
    return (
      <div className="relative w-full max-w-[600px] h-auto">
        <img 
          src="/images/multimedia-workflow-transparent.png"
          alt="Multimedia Workflow"
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[600px] h-auto overflow-hidden rounded-lg">
      <div className="relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          >
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
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white/90 scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkflowSlider;