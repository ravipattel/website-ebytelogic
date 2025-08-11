"use client";
import Image from 'next/image';

import React, { useState, useEffect } from 'react';

import Slider1 from '@/src/assets/images/home/homeSlider/slider1.png';
import Slider2 from '@/src/assets/images/home/homeSlider/slider2.png';
import Slider3 from '@/src/assets/images/home/homeSlider/slider3.png';
import Slider4 from '@/src/assets/images/home/homeSlider/slider4.png';

interface SlideData {
  id: number;
  image: any;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: Slider1,
  },
  {
    id: 2,
    image: Slider2,
  },
  {
    id: 3,
    image: Slider3,
  },
  {
    id: 4,
    image: Slider4,
  }
];

const WorkflowSlider = ({ currentSlide }: { currentSlide: number }) => {
  const [currentSlides, setCurrentSlides] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setCurrentSlides((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isClient]);

  const nextSlide = () => {
    setCurrentSlides((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlides((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // if (!isClient) {
  //   return (
  //     <div className="relative w-full max-w-[600px] h-auto">
  //       <img
  //         src="/images/multimedia-workflow-transparent.png"
  //         alt="Multimedia Workflow"
  //         className="w-full h-auto object-contain"
  //       />
  //     </div>
  //   );
  // }

  return (
    <div className="relative w-full max-w-[600px] mx-auto rounded-lg overflow-hidden">
      {/* Image */}
      <div className="relative">
        <Image
          src={slides[currentSlide].image}
          alt="slider-image"
          className="w-full object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center z-10"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center z-10"
      >
        ›
      </button> */}

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentSlides(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                ? 'bg-white'
                : 'bg-white/40 hover:bg-white/70'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkflowSlider;
