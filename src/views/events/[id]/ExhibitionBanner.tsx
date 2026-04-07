import Link from 'next/link'
import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const ExhibitionBanner = ({ data }: { data?: any }) => {
    const backgroundImageUrl = data?.backgroundImageUrl ?? '/images/bg/exhibition/embeddedWorld.jpg'
    const breadcrumb =
        data?.breadcrumb ??
        [
            { label: 'Home', href: '/' },
            { label: 'Exhibition', href: '/exhibition' },
        ]
    const title = data?.title ?? 'The Show is the Start. Production is the Goal.'
    const subtitle = data?.subtitle ?? 'Show the Demo. Ship the Product.'

    return (
        <section
            className='relative bg-no-repeat bg-center bg-cover py-28 lg:py-64'
            style={{ backgroundImage: `url("${backgroundImageUrl}")` }}
        >
            <div className='absolute bg-[#0e191ecf] top-0 size-full z-0'></div>
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 space-y-4'>
                <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'>
                    {breadcrumb.map((item, idx) => (
                        <React.Fragment key={`${item.href}-${idx}`}>
                            <Link href={item.href}>{item.label}</Link>
                            {idx < breadcrumb.length - 1 ? (
                                <RiArrowRightSLine className='text-primary text-2xl' />
                            ) : null}
                        </React.Fragment>
                    ))}
                </p>
                <h2 className='text-2xl md:text-5xl xl:text-[50px] font-normal text-white leading-tight text-center pb-4'>
                    {title}
                </h2>
                <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center'>
                    {subtitle}
                </p>
            </div>
        </section>
    )
}

export default ExhibitionBanner
