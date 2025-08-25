import Image from "next/image";
import Link from "next/link";

import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const GstreamerHero = ({ data }) => {
  const heroData = data?.heroData;
  return (
    <>
      {heroData && (
        <section className={`relative bg-primary/10 overflow-hidden`}>
          <p className="text-sm flex items-center gap-2 px-9 py-8">
            <Link href="/" className="text-primary">
              Home
            </Link>
            <RiArrowRightSLine className="text-primary text-xl" />
            <Link href="/blogs" className="text-primary">
              Blogs
            </Link>
            <RiArrowRightSLine className="text-primary text-xl" />
            <span className="text-slate-500">{data?.title}</span>
          </p>
          <div className="relative z-10 sm:px-4 px-6 pb-16 h-full">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                {heroData?.chipTitle && (
                  <div
                    className="flex gap-2 items-center w-fit px-4 py-2 backdrop-blur-sm rounded-full text-sm font-medium"
                    style={{
                      color: heroData?.chipTitle?.color,
                      backgroundColor: heroData?.chipTitle?.chipBgColor,
                    }}
                  >
                    {heroData?.chipTitle?.icon}
                    {heroData?.chipTitle?.label}
                  </div>
                )}
                {heroData?.heroGrid?.content?.title && (
                  <h1
                    className={heroData?.heroGrid?.content?.title?.class}
                    dangerouslySetInnerHTML={{
                      __html: heroData?.heroGrid?.content?.title?.text.replace(
                        heroData?.heroGrid?.content?.title?.emphasis,
                        `<em class="${heroData?.heroGrid?.content?.title?.emphasisColor}">${heroData?.heroGrid?.content?.title?.emphasis}</em>`
                      ),
                    }}
                  />
                )}
                {heroData?.heroGrid?.content?.description && (
                  <p
                    className={heroData?.heroGrid?.content?.description?.class}
                  >
                    {heroData?.heroGrid?.content?.description?.text}
                  </p>
                )}
              </div>
              {heroData?.heroGrid?.content?.badgeList && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {heroData?.heroGrid?.content?.badgeList?.map(
                    (badge, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white backdrop-blur-sm rounded-lg text-sm"
                      >
                        {badge?.text}
                      </span>
                    )
                  )}
                </div>
              )}
            </div>
            {heroData?.visualElement && (
              <div className="flex items-center justify-center">
                <div className="relative w-full h-64 md:h-96">
                  <Image
                    src={heroData?.visualElement?.image?.src}
                    alt={heroData?.visualElement?.image?.alt}
                    className={heroData?.visualElement?.image?.class}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                </div>
              </div>
            )}
            {heroData?.keyMetrics && (
              <div className="mt-6">
                <div
                  className={`grid grid-cols-1 md:grid-cols-${heroData?.keyMetrics?.grid?.mdColumns} gap-${heroData?.keyMetrics?.grid?.gap}`}
                >
                  {heroData?.keyMetrics?.metrics?.map((metric, index) => (
                    <div
                      key={index}
                      className="bg-white backdrop-blur-sm rounded-xl p-4 text-center"
                      style={{ background: metric?.bgColor }}
                    >
                      <div
                        className={`text-2xl font-bold`}
                        style={{ color: metric?.color }}
                      >
                        {metric?.value}
                      </div>
                      <div className="text-sm">{metric?.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default GstreamerHero;
