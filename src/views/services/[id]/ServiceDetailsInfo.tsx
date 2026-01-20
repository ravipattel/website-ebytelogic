'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

import { useEffect, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { RiArrowRightSLine } from 'react-icons/ri';

import { serviceData } from '@/content/serviceData';

import NotFound from '@/app/not-found';
import Button from '@/src/components/Button';
import FAQAccordion from '@/src/components/Faq';

import OverviewJPg from '@/src/assets/images/services/overview.jpg'
import FaqHomePng from '@/src/assets/images/home/faqHome.png'

const ServiceDetailsInfo = ({ meta, subServiceId }) => {
    const router = useRouter();
    const { id } = useParams() as { id: string };
    const searchParams = useSearchParams();

    const [service, setService] = useState<typeof serviceData[0] | null>(null);
    const [parentService, setParentService] = useState<any>(null);

    const [metaId, setMetaId] = useState<string | null>(null);

    useEffect(() => {
        const mainService = serviceData.find(item => item.id === meta);

        if (!mainService) {
            setService(null);
            return;
        }

        setParentService(mainService);

        if (subServiceId && mainService.subservice?.length) {
            const foundSubService = mainService.subservice.find(
                (sub) => sub.id === subServiceId
            );
            setService(foundSubService || mainService);
        } else {
            setService(mainService);
        }
    }, [meta, subServiceId]);


    if (!service) return <NotFound />;

    return (
        <div>
            <section>
                <section className='relative bg-no-repeat bg-cover bg-right py-28 lg:py-52 ' style={{ backgroundImage: `url('${service.bgImg}')` }}>
                    <div className='absolute bg-[#0e191eb3] top-0 size-full z-0'></div>
                    <div className='max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 space-y-4'>
                        <p className='text-sm md:text-lg text-white flex flex-wrap items-center gap-4 justify-center'><Link href={'/'}>Home</Link>  <RiArrowRightSLine className='text-primary text-2xl' /> <Link href={'/services'}>Services</Link>  <RiArrowRightSLine className='text-primary text-2xl' />  {subServiceId ? (
                            <>
                                <Link href={`/services/${parentService?.id}`}>
                                    {parentService?.pathText}
                                </Link>
                                <RiArrowRightSLine />
                                <span>{service.pathText}</span>
                            </>
                        ) : (
                            <span>{service.pathText}</span>
                        )}
                        </p>
                        <h1 className='text-2xl md:text-5xl xl:text-[50px] font-normal text-white leading-tight text-center pb-4'>{service.category}</h1>
                        <p className='text-sm md:text-lg text-white flex items-center gap-4 justify-center text-center'>{service.tagLine}</p>
                    </div>
                </section>
            </section>

            {/* Overview */}
            <section className="relative py-16 sm:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Block */}
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-snug relative inline-block">
                            <span className="relative z-10">Overview</span>
                            <span className="absolute left-0 bottom-1 w-full h-2 bg-primary/20 rounded-md -z-0"></span>
                        </h3>

                        <div className="space-y-4">
                            {Array.isArray(service.overview) ? (
                                service.overview.map((para, index) => (
                                    <p
                                        key={index}
                                        className="text-gray-600 text-sm sm:text-base leading-relaxed"
                                    >
                                        {para}
                                    </p>
                                ))
                            ) : (
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    {service.overview}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button variant="default" className="text-sm sm:text-base md:h-12" onClick={() => router.push('/contact-us')}>{service.btnPrimaryText}</Button>
                            <Button
                                onClick={() => router.push('/case-study')}
                                variant="default"
                                className="text-sm sm:text-base md:h-12 !bg-white !text-primary hover:!bg-primary hover:!text-white"
                            >
                                {service.btnSecondaryText}
                            </Button>
                        </div>
                    </div>

                    {/* Image Block */}
                    <div className="relative group">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent blur-2xl opacity-60 group-hover:opacity-80 transition duration-500"></div>

                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src={service.imageName ?? OverviewJPg}
                                alt={service.category}
                                className="object-cover w-full h-96 transform group-hover:scale-105 transition duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* expertise */}
            {service?.embeddedExpertise && (
                <section className="py-16 px-4">
                    <div className='max-w-[1400px] mx-auto px-4 sm:px-6'>

                        {/* Header */}
                        <div className="mb-12">
                            <span className="text-[#3078FB] font-semibold tracking-wide uppercase">
                                {service?.expertiseChip}
                            </span>
                            <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize" dangerouslySetInnerHTML={{ __html: service?.expertiseTitle || '' }} />
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {service?.embeddedExpertise?.map((item: any, index: number) => {
                                const Icon = item.icon;
                                return (
                                        <div key={index}
                                            className="group relative bg-white rounded-2xl p-8 border border-blue-100 overflow-hidden
                           shadow-sm hover:shadow-xl transition-all duration-300"
                                        >
                                            {/* Gradient Glow */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                                from-[#3078FB]/10 to-[#3078FB]/0 opacity-0 
                                group-hover:opacity-100 transition" />

                                            {/* Icon Badge */}
                                            <div className="relative z-10 w-14 h-14 flex items-center justify-center 
                                rounded-xl bg-[#3077fb54] text-white mb-6 group-hover:bg-primary
                                shadow-lg group-hover:scale-110 transition">
                                                <Icon className="text-2xl" />
                                            </div>

                                            {/* Content */}
                                            <div className="relative z-10">
                                                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            {/* Bottom Accent */}
                                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#3078FB] 
                                group-hover:w-full transition-all duration-300 rounded-b-2xl" />
                                        </div>
                                );
                            })}
                        </div>

                    </div>
                </section>
            )}

            {/* Capabilities */}
            <section className="bg-[#f9fbfd] py-16 sm:py-28">
                {service?.capabilitySections?.map((cap, i) => (
                    <div key={i} className={`max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4 ${i % 2 !== 0 ? 'mt-20' : 'mt-0'}`}>
                        <h3 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize text-center">
                            {cap.title}
                        </h3>
                        <p className="text-sm sm:text-[15px] text-[#5d6471] md:max-w-3xl text-center mx-auto">
                            {cap.description}
                        </p>
                        <div className="grid md:grid-cols-2 gap-10 pt-12">
                            {cap.capabilities.map((item, idx) => {
                                return (
                                    item.id ? (
                                        <Link key={idx} href={`/services/${parentService.id}/${item?.id}`}>
                                            <div
                                                key={idx}
                                                className="relative bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden"
                                            >
                                                <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-[#5d647150] to-[#7fb8ff50] group-hover:from-primary group-hover:to-[#7fb8ff]" />

                                                <div className="p-6 md:p-8">
                                                    <h4 className="text-lg md:text-xl font-semibold text-primary mb-2">
                                                        {item.title}
                                                    </h4>

                                                    <p className="text-sm text-[#5d6471] mb-3">
                                                        {item.desc}
                                                    </p>

                                                    {item.points && (
                                                        <ul className="list-disc pl-5 text-sm text-[#5d6471] space-y-2.5">
                                                            {item.points.map((pt, pIdx) => (
                                                                <li
                                                                    key={pIdx}
                                                                    dangerouslySetInnerHTML={{ __html: pt }}
                                                                />
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div
                                            key={idx}
                                            className="relative bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden"
                                        >
                                            <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-[#5d647150] to-[#7fb8ff50] group-hover:from-primary group-hover:to-[#7fb8ff]" />

                                            <div className="p-6 md:p-8">
                                                <h4 className="text-lg md:text-xl font-semibold text-primary mb-2">
                                                    {item.title}
                                                </h4>

                                                <p className="text-sm text-[#5d6471] mb-3">
                                                    {item.desc}
                                                </p>

                                                {item.points && (
                                                    <ul className="list-disc pl-5 text-sm text-[#5d6471] space-y-2.5">
                                                        {item.points.map((pt, pIdx) => (
                                                            <li
                                                                key={pIdx}
                                                                dangerouslySetInnerHTML={{ __html: pt }}
                                                            />
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    )
                                )
                            })}
                        </div>
                    </div>
                ))}
            </section>

            {/* layred cards */}
            {
                service?.layeredCard && (
                    <section className="py-16 sm:py-28">
                        <div className={`max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4`}>
                            <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize text-center" dangerouslySetInnerHTML={{ __html: service?.layeredCardTitle || '' }} />
                            <p className="text-sm sm:text-[15px] text-[#5d6471] md:max-w-3xl text-center mx-auto pb-6">
                                {service?.layeredCardDescription}
                            </p>
                            <div className={`grid gap-6 sm:grid-cols-2 ${service?.layeredCard?.length === 1 ? 'lg:grid-cols-1' : service?.layeredCard?.length === 2 ? 'lg:grid-cols-2' : service?.layeredCard?.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
                                {service?.layeredCard?.map((item, index) => {
                                    const Icon = item?.icon;
                                    return (
                                        <div
                                            key={index}
                                            className={`group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 text-center transition-all duration-300
    hover:-translate-y-1 hover:shadow-xl ${item.theme.glow}`}
                                        >
                                            <span
                                                className="
absolute bottom-0 left-1/2 h-[3px] w-1/2
-translate-x-1/2 scale-x-0
transition-transform duration-300 ease-out
group-hover:scale-x-100
origin-center
"
                                                style={{ backgroundColor: item.theme.lineColor }}
                                            />

                                            <div
                                                className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300
      group-hover:opacity-100 bg-gradient-to-br from-transparent to-gray-50`}
                                            />

                                            <div
                                                className={`relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg text-2xl transition-all duration-300
      ${item.theme.bg} ${item.theme.text}
      ${item.theme.hoverBg} ${item.theme.hoverText}`}
                                            >
                                                <Icon />
                                            </div>

                                            <h3 className="relative mb-2 text-base font-semibold text-gray-900">
                                                {item.title}
                                            </h3>
                                            <p className="relative text-sm leading-relaxed text-gray-600">
                                                {item.description}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                )
            }


            {/* Critical Low-Level Features */}
            {
                service?.criticalRoles && (
                    <section className="py-20 bg-gray-50">
                        <div className="max-w-[1400px] mx-auto px-4">

                            {/* Heading */}
                            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
                                <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize text-center" dangerouslySetInnerHTML={{ __html: service?.criticaltitle }} />
                                <p className="text-sm sm:text-[15px] text-[#5d6471] md:max-w-3xl text-center mx-auto">
                                    {
                                        service?.criticaldesc
                                    }
                                </p>
                            </div>

                            {/* Cards */}
                            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${service?.criticalRoles?.length === 1 ? 'lg:grid-cols-1' : service?.criticalRoles?.length === 2 ? 'lg:grid-cols-2' : service?.criticalRoles?.length === 3 ? 'lg:grid-cols-3' : service?.criticalRoles?.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
                                {service?.criticalRoles?.map((item, index) => {
                                    const Icon = item?.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                                        >
                                            {/* Icon */}
                                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                                                <Icon size={24} />
                                            </div>

                                            {/* Content */}
                                            <h3 className="mt-5 text-lg font-semibold text-gray-900">
                                                {item.title}
                                            </h3>
                                            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                                {item?.desc}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </section>
                )
            }

            {/* Use Cases */}
            {
                service?.useCases && (
                    <section className="bg-white py-16 sm:py-28">
                        <div className='max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4'>
                            <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight' dangerouslySetInnerHTML={{ __html: service.useCaseTitle || '' }} />
                            <p className="text-sm sm:text-[15px] text-[#5d6471] md:max-w-3xl">
                                {service.useCaseDesc}
                            </p>
                            <div className='grid grid-cols-1 xl:grid-cols-2 gap-7 items-center'>
                                <div className="relative border-l border-[#3078fb]/40 pl-6 space-y-6">
                                    {service.useCases.map((usecase, i) => (
                                        <div key={i} className="relative group">
                                            <div className="absolute -left-[13px] top-5 w-5 h-5 bg-white border-2 border-primary rounded-full group-hover:scale-110 transition" />
                                            <div className="bg-[#f9fbfd] p-5 rounded-md shadow-sm hover:shadow-md transition border-b border-primary/30">
                                                <h6 className="text-sm sm:text-[15px] font-medium leading-relaxed">{i + 1}. {usecase.title}</h6>
                                                <p className="text-sm text-[#5d6471] font-medium leading-relaxed">
                                                    {usecase.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className=''>
                                    {service?.useCaseImg && (
                                        <Image
                                            src={service.useCaseImg}
                                            alt="Usecase"
                                            height={400}
                                            width={400}
                                            className={`object-cover w-full rounded-lg ${service?.useCases?.length <= 3 ? 'h-[350px]' : service?.useCases?.length === 5 ? 'h-[689px]' : 'h-[510px]'}`}
                                            priority
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }

            {/* Why eByteLogic */}
            {
                service?.whyChooseUs && (
                    <section className="bg-[#f9fbfd] py-16 sm:py-28">
                        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4">
                            <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight text-center' dangerouslySetInnerHTML={{ __html: service.whyTitle || '' }} />
                            <p className="text-sm text-[#5d6471] md:max-w-3xl text-center mx-auto">{service.whyDesc}</p>
                            <div className='grid grid-cols-1 md:grid-cols-2 py-8 gap-3 items-center'>
                                <div className='space-y-8 w-fit'>
                                    {service.whyChooseUs.map((reason, i) => (
                                        <div key={i} className="flex justify-start flex-wrap min-[477px]:flex-nowrap gap-4 items-center">
                                            <div className="min-w-[50px] text-[#d1e2fc] text-4xl font-black select-none pointer-events-none leading-none">
                                                0{i + 1}
                                            </div>
                                            <div className='w-fit'>
                                                <p className="text-sm sm:text-[15px] text-[#5d6471] font-medium" dangerouslySetInnerHTML={{ __html: reason }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {service?.whyImg && (
                                    <Image
                                        src={service?.whyImg}
                                        alt="Usecase"
                                        width={500} className={`rounded-2xl mt-4 object-cover md:mt-0 mx-auto ${service?.whyChooseUs?.length >= 3 ? 'h-[250px]' : 'h-[350px]'}    `}
                                    />
                                )}
                            </div>
                        </div>
                    </section>
                )
            }

            {/* CTA */}
            <section className="bg-white py-16 sm:py-28 bg-[url('/images/image.png')] bg-cover bg-bottom">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-4 text-center">
                    {Array.isArray(service?.cta) && service.cta.length > 0 ? (
                        service.cta.map((item, i) => (
                            <div key={i} className='space-y-4'>
                                <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize text-center' dangerouslySetInnerHTML={{ __html: item.ctaTitle }} />
                                <p className="text-sm sm:text-[15px] text-[#5d6471] md:max-w-3xl mx-auto">
                                    {item.Ctadescription}
                                </p>
                                <Button onClick={() => router.push('/contact-us')}
                                    variant="default" className='w-fit mx-auto text-center flex items-center justify-center gap-1'
                                >
                                    {item.ctaButtonText}
                                    <GoArrowRight className="text-xl" />
                                </Button>
                            </div>
                        ))
                    ) : (
                        <p>No CTA data available.</p>
                    )}
                </div>
            </section>

            {/* faq */}
            <section className="bg-[#f5f8fb] pb-16 pt-16 md:pt-24">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize mb-2" dangerouslySetInnerHTML={{ __html: service?.faqTitle || '' }} />
                    <div className="grid xl:grid-cols-3 items-center gap-12">
                        <div className="xl:col-span-2 xl:max-w-[800px]">
                            <FAQAccordion
                                faqs={service?.faqs}
                                title="Frequently Asked Questions"
                            />
                        </div>

                        <Image
                            src={FaqHomePng}
                            alt="faq"
                            className="mx-auto size-80 sm:size-auto"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailsInfo;

export const runtime = 'edge';