import Image from "next/image";

import React from "react";

const QaTimings = ({ data }) => {
  const timing = data?.timingChallenges;
  return (
    <section id={timing?.id} className="px-4 md:px-6 py-16">
      <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
        {timing?.title}
      </h2>

      <div className="mb-8">
        <Image
          src={timing?.image?.src}
          alt={timing?.image?.alt}
          className="w-full object-cover rounded-md shadow-lg mb-6"
        />
      </div>

      {timing?.content?.map((block, index) => {
        switch (block?.type) {
          case "text":
            return (
              <div key={index} className="mb-6">
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                  {block?.heading}
                </h3>
                <p
                  className="text-gray-600 text-sm md:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: block?.paragraph }}
                />
              </div>
            );

          case "quote":
            return (
              <div key={index} className="mb-6">
                {block?.icon ? (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                    <div className="flex gap-2">
                      {block?.icon}
                      <div>
                        <h4 className="font-serif text-base md:text-lg font-semibold text-yellow-800 mb-2">
                          {block?.heading}
                        </h4>
                        <p className="text-sm md:text-base text-yellow-700">
                          {block?.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-sm md:text-base italic">
                    {block?.text}
                  </div>
                )}
              </div>
            );

          default:
            return null;
        }
      })}
    </section>
  );
};

export default QaTimings;
