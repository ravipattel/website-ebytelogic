import Image from 'next/image'

import React from 'react'

const QaDebugging = ({ data }) => {
  const debug = data?.debuggingVisibility;
  return (
    <section id={debug?.id} className="px-4 md:px-6 py-16 bg-slate-50">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
        {debug?.title}
      </h2>

      <div className="mb-8">
        <Image
          src={debug?.image?.src}
          alt={debug?.image?.alt}
          className="w-full rounded-md shadow-lg mb-6"
        />
      </div>

      {debug?.content?.map((block, index) => {
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
              <div key={index} className="text-sm md:text-base italic mb-6">
                “{block?.text}”
              </div>
            );

          case "grid":
            return (
              <div key={index} className="flex flex-col gap-4 mb-6">
                {block?.items?.map((item, idx) => (
                  <div key={idx} className="border border-gray-300 rounded-md p-3">
                    <div className="flex items-center mb-3 gap-2">
                      {item?.icon}
                      <h4 className="font-serif text-lg font-semibold">
                        {item?.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600">{item?.description}</p>
                  </div>
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </section>

  )
}

export default QaDebugging
