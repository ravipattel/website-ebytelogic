import Image from 'next/image'

import React from 'react'

const QaHardware = ({ data }) => {
  const hardwaredependency = data?.hardwaredependency;
  return (
    <section id={hardwaredependency?.id} className="px-4 md:px-6 py-16 bg-slate-50">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">{hardwaredependency?.title}</h2>

      {/* Hero Image */}
      <div className="mb-8">
        <Image
          src={hardwaredependency?.image?.src}
          alt={hardwaredependency?.image?.alt}
          className="w-full object-cover rounded-lg shadow-lg mb-6"
        />
      </div>

      {/* Content Mapping */}
      {hardwaredependency?.content?.map((item, index) => {
        if (item?.type === 'text') {
          return (
            <div key={index}>
              <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">{item?.heading}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item?.paragraph }} />
            </div>
          );
        }

        if (item?.type === 'quote') {
          return (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6 text-sm md:text-base">
              {item?.text}
            </div>
          );
        }

        if (item?.type === 'graph') {
          return (
            <div key={index} className="my-8">
              <h4 className="font-serif text-lg font-semibold mb-4 text-center">{item?.title}</h4>
              <div className="mermaid-container">
                {/* <GraphControls /> */}
                <div className="mermaid text-sm md:text-base overflow-auto">
                  {/* <Mermaid chart={item.mermaidGraph} /> */}
                  mermaid
                </div>
              </div>
            </div>
          );
        }

        return null;
      })}
    </section>
  )
}

export default QaHardware
