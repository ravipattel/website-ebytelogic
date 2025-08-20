import Image from "next/image";

import React from "react";

const QaRisk = ({ data }) => {
  const risk = data?.risks;
  return (
    <section id={risk?.id} className="px-4 md:px-6 py-16 bg-slate-50">
      <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
        {risk?.title}
      </h2>

      <div className="mb-8">
        <Image
          src={risk?.image?.src}
          alt={risk?.image?.alt}
          className="rounded-lg shadow-lg mb-6"
        />
      </div>

      {risk?.content?.map((block, index) => {
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
              <div
                key={index}
                className="bg-red-50 border-l-4 border-red-400 p-6 mb-6"
              >
                <div className="flex gap-3">
                  {block?.icon}
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-red-800 mb-2">
                      {block?.heading}
                    </h4>
                    <p className={`text-sm md:text-base ${block?.color}`}>
                      {block?.text}
                    </p>
                  </div>
                </div>
              </div>
            );

          case "grid":
            return (
              <div
                key={index}
                className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6"
              >
                {block.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-md border border-gray-300 shadow-md"
                  >
                    <div className="flex items-center mb-3 gap-2">
                      {item?.icon}
                      <h4 className="font-serif text-base md:text-lg font-semibold">
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
  );
};

export default QaRisk;
