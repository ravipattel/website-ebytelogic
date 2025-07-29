import { useRouter } from "next/navigation";

import React from "react";

import Button from "@/src/components/Button";

const HeroSection = () => {
  const router = useRouter();
  return (
    <div className='bg-[url("/images/home/hero.jpg")] bg-cover bg-center py-28 md:h-screen lg:-mt-20'>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="w-full lg:w-3/4 space-y-6">
          <p className="text-base md:text-lg text-primary font-medium">
            IT Solutions . Services Company
          </p>
          <h1 className="text-2xl md:text-5xl xl:text-[54px] font-semibold text-primaryText leading-tight">
            Transforming Into
            <span className="text-primary ps-3">Digital Software</span> Company.
          </h1>
          <p className="text-sm md:text-lg text-[#5d6471]">
            We develop effective plans to move your customers behaviour.
          </p>
          <div className="flex space-x-4 pt-4">
            <Button onClick={() => router.push('/services')} variant="default" className="max-w-[158px] w-full h-12">Our Services</Button>
            <Button onClick={() => router.push('/contact-us')}
              variant="default"
              className="max-w-[158px] w-full h-12 !bg-white !text-primary hover:!bg-primary hover:!text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection