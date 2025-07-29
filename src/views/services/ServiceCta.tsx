'use client';
import { useRouter } from 'next/navigation';

import React from 'react';

import Button from '@/src/components/Button';

const ServiceCta = () => {
    const router = useRouter();

    return (
        <section className="relative bg-[url('/images/ctas.jpg')] bg-cover bg-center bg-no-repeat h-[750px]">
            <div className="m-auto h-[85%] 2xl:h-[80%] flex justify-center items-center">
                <div className="top-32 w-full h-auto text-center space-y-3">
                    <h3 className="text-2xl md:text-xl lg:text-2xl 2xl:text-[34px] font-medium text-primaryText leading-tight capitalize">📞 Let’s Talk Tech</h3>
                    <p className="text-sm xl:text-[15px] text-[#5d6471]">
                        Looking to Accelerate Your Product Development?
                    </p>
                    <p className="text-sm xl:text-[15px] text-[#5d6471] max-w-md xl:max-w-lg mx-auto">
                        {` Whether you're porting a BSP, tuning a video player, or launching a companion app — we’re here to deliver.`}
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center items-center mt-6">
                        <Button onClick={() => router.push('/contact-us')} className="w-fit !px-3 py-2 text-sm">
                            Schedule a Discovery Call
                        </Button>
                        <Button onClick={() => router.push('/contact-us')}
                            className="w-fit !bg-blue-100 !border-0 !text-blue-600 hover:!bg-blue-200 !px-3 py-2 text-sm"
                        >
                            Send Us Your Requirements
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceCta;
