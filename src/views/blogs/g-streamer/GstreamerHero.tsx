import Image from "next/image";

import React from "react";

const GstreamerHero = ({ data }) => {
  const hero = data?.hero;
  return (
    <section className={`relative bg-primary/10 overflow-hidden`}>
      <div className="relative z-10 sm:px-4 px-6 py-16 h-full">
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-6">
            <div className={`flex gap-2 items-center w-fit px-4 py-2 backdrop-blur-sm rounded-full text-sm font-medium`} style={{ backgroundColor: hero?.chipTitle?.bgColor, color: hero?.chipTitle?.color }}>
              {hero?.chipTitle?.icon}
              {hero?.chipTitle?.label}
            </div>
            <h1
              className={hero?.heroGrid?.content?.title?.class}
              dangerouslySetInnerHTML={{
                __html: hero?.heroGrid?.content?.title?.text?.replace(
                  hero?.heroGrid?.content?.title?.emphasis,
                  `<em class="${hero?.heroGrid?.content?.title?.emphasisColor}">${hero?.heroGrid?.content?.title?.emphasis}</em>`
                ),
              }}
            />
            <p className={hero?.heroGrid?.content?.description?.class}>
              {hero?.heroGrid?.content?.description?.text}
            </p>
          </div>
          {hero?.heroGrid?.content?.badgeList && (
            <div className="flex flex-wrap gap-3 mb-6">
              {hero?.heroGrid?.content?.badgeList?.map((badge, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white backdrop-blur-sm rounded-lg text-sm"
                >
                  <i className={`${badge?.icon} mr-2`}></i>
                  {badge?.text}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={hero?.visualElement?.image?.src}
              alt={hero?.visualElement?.image?.alt}
              className={hero?.visualElement?.image?.class}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>
        </div>
        {hero?.keyMetrics?.metrics && (
          <div className="mt-6">
            <div
              className={`grid grid-cols-1 md:grid-cols-${hero?.keyMetrics?.grid?.mdColumns} gap-${hero?.keyMetrics?.grid?.gap}`}
            >
              {hero?.keyMetrics?.metrics?.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white backdrop-blur-sm rounded-xl p-4 text-center"
                >
                  <div className={`text-2xl font-bold`} style={{ color: metric?.color }}>
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
  );
};

export default GstreamerHero;
