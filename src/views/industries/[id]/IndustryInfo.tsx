'use client'
import Image from 'next/image';
import Link from 'next/link';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { RiArrowRightSLine } from 'react-icons/ri';

import Button from '@/src/components/Button';

import EbytelogicPng from '@/src/assets/images/industry/ebytelogic.png'
import EbytelogicVerticalPng from '@/src/assets/images/industry/ebytelogicVertical.png'
import IndustryFaq from './IndustryFaq';
import { industryData } from '@/content/industryData';
import IndustryUsecase from '@/public/images/industryUsecase.png'

const UseCaseCard = ({ item }: { item: any }) => (
    <div className="group relative w-[340px] rounded-2xl border border-[#3078FB]/15 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="absolute top-0 left-0 h-[3px] w-full bg-[#3078FB] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#3078FB]/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
        <div className="w-10 h-10 rounded-lg bg-[#3078FB]/10 flex items-center justify-center text-[#3078FB] text-sm font-semibold mb-4">
            {item.title?.charAt(0)}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#3078FB] transition">
            {item.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
            {item.description}
        </p>
        <div className="mt-4 h-[2px] w-0 bg-[#3078FB] group-hover:w-16 transition-all duration-300"></div>
    </div>
)

const IndustryInfo = ({ meta, introVariant }: { meta: any, introVariant?: 'compact' | 'default' }) => {

    const [metaId, setMetaId] = useState<string | null>(null);
    const router = useRouter();
    const { id } = useParams() as { id: string };
    const data = industryData?.find((item, idx) => {
        if (item?.id === id) {
            return item;
        }
    });
    useEffect(() => {
        if (id !== null) {
            const found = industryData.find(item => item.id === id);
            if (found) {
                setMetaId(found.id);
            }
        } else {
            setMetaId(null);
        }
    }, [id]);

    const actionRoutes = {
        "Schedule a Call": "/contact-us",
        "See Our Case Studies": "/case-study",
        "Schedule a Discovery Call": "/contact-us",
        "View Broadcast Case Studies": "/case-study",
        "Explore IoT Case Studies": "/case-study",
        "See Aerospace Case Studies": "/case-study",
    };
    const items = data?.useCases?.items || []

    const isOdd = items.length % 2 !== 0

    let leftItems: any[] = []
    let rightItems: any[] = []
    let middleItem: any = null

    if (isOdd) {
        const midIndex = Math.floor(items.length / 2)

        middleItem = items[midIndex]

        const remaining = [
            ...items.slice(0, midIndex),
            ...items.slice(midIndex + 1)
        ]

        const half = Math.floor(remaining.length / 2)

        leftItems = remaining.slice(0, half)
        rightItems = remaining.slice(half)

    } else {

        const half = Math.floor(items.length / 2)

        leftItems = items.slice(0, half)
        rightItems = items.slice(half)

    }

    return (
        <div>
            <div>
                {/* Hero Section */}
                <section className='relative bg-no-repeat bg-cover py-28 lg:py-64' style={{ backgroundImage: `url(${data?.backgroundImage})` }} >
                    <div className='absolute bg-[#0e191eb3] top-0 size-full z-0'></div>
                    <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 space-y-4'>
                        <p className='text-sm md:text-lg text-white flex flex-wrap items-center gap-4 justify-center'><Link href={'/'}>Home</Link> <RiArrowRightSLine className='text-primary text-2xl' /> <Link href={'/industries'}>Industry</Link><RiArrowRightSLine className='text-primary text-2xl' />{data?.breadCrumb}</p>
                        <h2 className='text-2xl md:text-5xl xl:text-[50px] font-normal text-white leading-tight text-center pb-4'>{data?.hero?.headline}</h2>
                        <p className='text-sm md:text-lg text-white text-center flex items-center gap-4 justify-center' dangerouslySetInnerHTML={{ __html: data?.hero?.subtext || '' }} />
                    </div>
                </section>
                {/* Intro */}
                {
                    data?.introVariant === 'compact' ? (
                        <section className="bg-gradient-to-br from-white to-[#f0f7ff] py-20">
                            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="relative h-full flex flex-col justify-between rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 md:p-10 overflow-hidden">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-40" />
                                    <div>
                                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-6">
                                            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M4 5h16v2H4zm0 6h10v2H4zm0 6h16v2H4z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                            Industry Insight
                                        </h2>
                                        <p
                                            className="text-sm md:text-base text-gray-700 leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: data?.intro || '' }}
                                        />
                                    </div>
                                    <div className="pt-8 mt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                                        <span className="text-xs text-gray-500">
                                            Expert strategy guidance
                                        </span>
                                        <Button
                                            onClick={() => router.push('/contact-us')}
                                            variant="default"
                                            className="h-11 px-6"
                                        >
                                            {data?.introBtnText}
                                        </Button>
                                    </div>
                                </div>
                                <div className="relative size-full rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src={data?.image || ''}
                                        alt={'image'}
                                        className="w-full h-full object-cover"
                                        priority
                                        width={1920}
                                        height={1080}
                                        loading="eager"
                                        quality={100}
                                    />
                                </div>
                            </div>
                        </section>
                    ) : (
                        <section className="bg-gradient-to-br from-white to-[#f0f7ff] py-20">
                            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <h2 className="text-xl md:text-3xl font-semibold mb-4">
                                        Industry Insight
                                    </h2>
                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: data?.intro || '' }} />
                                    <Button onClick={() => router.push('/contact-us')} variant="default" className="w-full sm:w-fit h-12">{data?.introBtnText || 'Book a Strategy Call'}</Button>
                                </div>
                                <div className="relative size-full rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src={data?.image || ''}
                                        alt={'image'}
                                        className="w-full h-full object-cover"
                                        priority
                                        width={1920}
                                        height={1080}
                                        loading="eager"
                                        quality={100}
                                    />
                                </div>
                            </div>
                        </section>
                    )
                }
                {/* Core Challenges */}
                <section className="bg-white py-16">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
                            {data?.coreChallengesTitle || 'Core Challenges'}
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center mb-8">{data?.subCoreText}</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {data?.coreChallenges?.map((item: any, idx: any) => {
                                if (item?.title) {
                                    return (
                                        <li
                                            key={idx}
                                            className="flex flex-col gap-5 bg-[#F0F6FF] border border-[#3078FB] rounded-lg p-5 shadow-sm hover:shadow-md transition duration-300"
                                        >
                                            <div className="flex flex-col min-[410px]:flex-row min-[410px]:items-center gap-2 md:gap-4">
                                                <IoCheckmarkDoneSharp className="text-primary text-xl" />
                                                <span className="text-gray-800 text-sm md:text-base font-semibold">
                                                    {item?.title}
                                                </span>
                                            </div>

                                            <span className="text-gray-800 text-sm">
                                                {item?.description}
                                            </span>
                                        </li>
                                    );
                                }

                                return (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 bg-[#F0F6FF] border border-[#3078FB] rounded-lg p-5 shadow-sm hover:shadow-md transition duration-300"
                                    >
                                        <IoCheckmarkDoneSharp className="text-primary text-xl mt-1" />
                                        <span className="text-gray-800 text-sm md:text-base">
                                            {item}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </section>
                {/* capabilities */}
                {
                    data?.capabilities && (
                        <section className="relative py-16 bg-white overflow-hidden">
                            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#3078FB]/10 blur-[120px] rounded-full"></div>
                            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#3078FB]/10 blur-[120px] rounded-full"></div>
                            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                                <div className="text-center mb-20">
                                    <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
                                        {data?.capabilities?.title}
                                    </h2>
                                    {/* {
                                        data?.capabilities?.description && (
                                            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center mb-8">
                                                {data?.capabilities?.description}
                                            </p>
                                        )
                                    } */}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {data?.capabilities?.capabilitiesData?.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-[#3078FB]/40 to-[#3078FB]/10 hover:from-[#3078FB] hover:to-[#3078FB]/40 transition duration-500"
                                        >
                                            <div className="relative bg-white rounded-2xl p-8 h-full border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#3078FB]/20 opacity-0 group-hover:opacity-100 blur-3xl transition duration-500"></div>
                                                <div className="mb-6 w-12 h-12 rounded-xl bg-[#3078FB]/10 flex items-center justify-center text-[#3078FB] font-semibold">
                                                    {idx + 1}
                                                </div>
                                                <h3 className="text-xl md:text-lg lg:text-xl font-semibold text-gray-900 mb-5 group-hover:text-[#3078FB] transition">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-5">
                                                    {item.intro}
                                                </p>

                                                <ul className="space-y-2">
                                                    {item.points.map((point, i) => (
                                                        <li key={i} className="flex items-start text-gray-600 sm:text-sm text-xs lg:text-sm">
                                                            <span className="mr-2 text-[#3078FB]">•</span>
                                                            <span dangerouslySetInnerHTML={{ __html: point }} />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )
                }
                {/* integrations */}
                {
                    data?.integrations && (
                        <section className="relative py-16 bg-white overflow-hidden">

                            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#3078FB]/10 blur-[120px] rounded-full"></div>
                            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#3078FB]/10 blur-[120px] rounded-full"></div>

                            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                                <div className="text-center mb-16">
                                    <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                                        {data?.integrations?.title}
                                    </h2>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
                                        {data?.integrations?.description}
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-[#3078FB]/20"></div>
                                    <div className="flex flex-col gap-12">
                                        {data?.integrations?.items?.map((item, idx) => {
                                            const isLeft = idx % 2 === 0
                                            return (
                                                <div
                                                    key={idx}
                                                    className={`flex flex-col md:flex-row items-center ${isLeft ? "md:justify-start" : "md:justify-end"
                                                        }`}
                                                >
                                                    <div
                                                        className={`group relative md:w-[48%] p-[1px] rounded-2xl bg-gradient-to-r from-[#3078FB]/30 to-[#3078FB]/10`}
                                                    >
                                                        <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition duration-500 group-hover:-translate-y-1">
                                                            <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#3078FB]/20 blur-3xl opacity-0 group-hover:opacity-100 transition"></div>
                                                            <div className="mb-4 w-10 h-10 rounded-lg bg-[#3078FB]/10 flex items-center justify-center text-[#3078FB] text-sm font-semibold">
                                                                {String(idx + 1).padStart(2, "0")}
                                                            </div>
                                                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#3078FB] transition">
                                                                {item.title}
                                                            </h3>
                                                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="hidden md:flex w-6 h-6 bg-[#3078FB] rounded-full border-4 border-white shadow absolute left-1/2 -translate-x-1/2"></div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
                {/* usecases */}
                {
                    data?.useCases && (
                        <section className="relative py-20 bg-white overflow-hidden">
                            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#3078FB]/10 blur-[120px] rounded-full"></div>
                            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#3078FB]/10 blur-[120px] rounded-full"></div>

                            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                                <div className="text-center mb-16">
                                    <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                                        {data?.useCases?.title}
                                    </h2>

                                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                        {data?.useCases?.description}
                                    </p>
                                </div>
                                <div className="hidden lg:flex flex-col items-center gap-5">
                                    {middleItem && (
                                        <div className="w-[340px]">
                                            <UseCaseCard item={middleItem} />
                                        </div>
                                    )}
                                    <div className="grid grid-cols-3 items-center xl:gap-16">
                                        <div className="flex flex-col gap-10 items-end">
                                            {leftItems.map((item, idx) => (
                                                <UseCaseCard key={idx} item={item} />
                                            ))}
                                        </div>
                                        <div className="relative flex justify-center">
                                            <div className="absolute size-[320px] xl:size-[420px] bg-[#3078FB]/10 blur-[120px] rounded-full"></div>
                                            <div className="relative">
                                                <Image
                                                    src={IndustryUsecase}
                                                    width={340}
                                                    height={340}
                                                    alt='industry image'
                                                    className="size-[220px] xl:size-[340px] object-cover rounded-2xl shadow-xl"
                                                />
                                                <div className="absolute -inset-4 border border-[#3078FB]/20 rounded-3xl"></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-10">
                                            {rightItems.map((item, idx) => (
                                                <UseCaseCard key={idx} item={item} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:hidden grid md:grid-cols-2 gap-6">
                                    {data?.useCases?.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="group p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg bg-white transition"
                                        >
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#3078FB]">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )
                }
                {/* Why Choose Us */}
                <section className="relative py-16 bg-gradient-to-br from-white to-gray-50 px-6 overflow-hidden">
                    <div className="max-w-[1400px] mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 relative inline-block">
                            {data?.whyUsHeadline || 'Why eByteLogic'}
                            <span className="block h-1 w-16 bg-[#3078FB] mt-2 mx-auto rounded-full"></span>
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base mb-8" dangerouslySetInnerHTML={{ __html: data?.whyUsSubtext || '' }} />
                        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                            <div className="space-y-8">
                                {data?.whyUs?.map((reason: any, idx: any) => {
                                    if (reason?.title) {
                                        return (
                                            <div
                                                key={idx}
                                                className="relative bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
                                            >
                                                <span className="absolute top-0 right-0 bg-[#3078FB] text-white text-xs px-3 py-1 rounded-bl-xl shadow-sm z-10">
                                                    #{idx + 1}
                                                </span>
                                                <div className='flex flex-wrap sm:flex-nowrap items-center gap-4'>
                                                    <div className="size-8 flex items-center justify-center bg-[#EAF2FF] text-[#3078FB] rounded-full text-base flex-shrink-0">
                                                        ✓
                                                    </div>
                                                    {
                                                        reason?.title && (
                                                            <p className="text-gray-800 text-sm md:text-base font-semibold leading-relaxed max-w-xl text-left">
                                                                {reason?.title}
                                                            </p>
                                                        )
                                                    }
                                                </div>
                                                <p className="text-gray-800 text-sm leading-relaxed max-w-xl text-left">
                                                    {reason?.description}
                                                </p>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div
                                                key={idx}
                                                className="relative bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-wrap sm:flex-nowrap items-center gap-4"
                                            >
                                                <span className="absolute top-0 right-0 bg-[#3078FB] text-white text-xs px-3 py-1 rounded-bl-xl shadow-sm z-10">
                                                    #{idx + 1}
                                                </span>
                                                <div className="w-10 h-10 flex items-center justify-center bg-[#EAF2FF] text-[#3078FB] rounded-full text-xl flex-shrink-0">
                                                    ✓
                                                </div>
                                                <p className="text-gray-800 text-sm md:text-base leading-relaxed max-w-xl text-left">
                                                    {reason}
                                                </p>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            <div className="h-[550px] w-full max-w-[550px] mx-auto relative lg:size-full lg:min-h-[300px]">
                                <Image
                                    src={data?.whyUs?.some((item: any) => item?.title) ? EbytelogicVerticalPng : EbytelogicPng}
                                    alt="ebytelogic"
                                    fill
                                    className="rounded-xl aspect-ratio object-cover sm:object-top-right"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#3078FB]/10 rounded-full blur-3xl pointer-events-none"></div>
                </section>
                {/* Case Study */}
                <section className="relative py-16 bg-gradient-to-tr from-white to-[#d6e5ff] overflow-hidden">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-12">
                        <div className="hidden md:flex text-[#3078FB]/20 text-[192px] font-serif select-none leading-none -translate-y-12">
                            “
                        </div>
                        <div className="relative bg-white rounded-3xl shadow p-6 md:p-20 max-w-3xl border-l-8 border-[#3078FB]">
                            <h2 className="text-2xl md:text-4xl font-extrabold text-[#174AA0] mb-4 md:mb-8 tracking-wide drop-shadow-sm">
                                Case-in-Point
                            </h2>
                            <p className="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed font-serif italic tracking-wide">
                                {data?.caseStudy}
                            </p>
                            <div className="mt-10 w-28 h-1 rounded-full bg-gradient-to-r from-[#3078FB] to-[#174AA0] shadow-lg"></div>
                            <span className="absolute -top-8 right-10 text-[#3078FB] font-bold text-sm uppercase tracking-widest bg-[#e1eaff] px-3 py-1 rounded-full shadow-lg select-none">
                                Quote
                            </span>
                        </div>
                        <div className="hidden md:flex text-[#3078FB]/20 text-[192px] font-serif select-none leading-none -translate-y-12 rotate-180">
                            ”
                        </div>
                    </div>
                </section>
                {/* Final CTA */}
                <section className="relative py-16 bg-[url('/images/industry.webp')] bg-cover bg-center bg-fixed bg-no-repeat">
                    <div className='absolute bg-[#0e191eb3] top-0 size-full z-0'></div>
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center relative z-10">
                        <h1 className="text-2xl sm:text-[30px] font-semibold leading-tight capitalize mb-4 text-white">
                            {data?.cta?.headline}
                        </h1>
                        <p className="text-white text-sm md:text-base max-w-3xl mx-auto text-center leading-relaxed tracking-wide mb-8" dangerouslySetInnerHTML={{ __html: data?.cta?.ctaSubtext || '' }} />
                        <div className="flex flex-wrap justify-center gap-4">
                            {data?.cta?.actions?.map((action, index) => (
                                <Button
                                    key={index}
                                    onClick={() => router.push(actionRoutes[action] || '/contact-us')}
                                    className="h-12 w-full sm:w-fit !bg-white !text-primary hover:!bg-primary hover:!text-white"
                                >
                                    {action}
                                </Button>
                            ))}
                        </div>
                    </div>
                </section>
                {/* faq */}
                <IndustryFaq data={data?.faqsData} />
            </div>
        </div>
    );
};

export default IndustryInfo;
