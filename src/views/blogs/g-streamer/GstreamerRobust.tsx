import { section } from 'framer-motion/client';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const GstreamerRobust = ({ data }) => {
  const robust = data?.robustData;

  return (
    <section id={robust?.id} className="px-4 md:px-6 py-16">
      {/* Section Title */}
      <div className="mb-8">
        <span className="mr-3" style={{ color: robust?.color }}>{robust?.no}</span>
        <h2 className="font-serif text-2xl md:text-3xl font-semibold inline">
          {robust?.title}
        </h2>
      </div>

      {/* Subsections */}
      {robust?.cards?.map((card, index) => (
        <div key={index} className="bg-primary/5 p-4 md:p-8 rounded-md mb-12" style={{ borderLeft: `4px solid ${card?.borderColor}`, backgroundColor: card?.bgColor }}>
          <h3 className="font-serif text-2xl font-semibold mb-6">{card?.title}</h3>

          {/* Description and Citation */}
          <p
            className="text-gray-600 mb-6 text-sm md:text-base"
            dangerouslySetInnerHTML={{ __html: card?.content?.description }}
          />

          {/* Render Mechanisms and Sync Mechanisms (if present) */}
          {card?.content?.mechanisms && card?.content?.mechanisms?.length > 0 && (
            <div className="space-y-3 mb-6">
              {card?.content?.mechanisms?.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheck className="text-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          )}

          {card?.content?.syncMechanisms && card?.content?.syncMechanisms?.length > 0 && (
            <div className="bg-white border border-gray-300 p-6 rounded-md mb-6">
              <h4 className="font-semibold mb-4">{card?.content?.syncTitle}</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                {card?.content?.syncMechanisms?.map((mechanism, i) => (
                  <li key={i}>• {mechanism}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Render Subsections for "Performance Under Load" and "Debugging" */}
          {card?.content?.cards && card?.content?.cards?.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {card?.content?.cards?.map((item, i) => (
                <div key={i} className="bg-white border border-gray-300 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">{item?.title}</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {item?.points?.map((point, j) => (
                      <li key={j}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Expert Insight (if present) */}
          {card?.content?.expertInsight && (
            <div className="mt-6 p-2 md:p-4 bg-white/10 rounded-lg">
              <span className="text-sm text-gray-600">
                <span className="font-semibold">{card?.content?.cardTitle}</span>
                <span
                  className="text-gray-600 mb-6 text-sm md:text-base"
                  dangerouslySetInnerHTML={{ __html: card?.content?.expertInsight }}
                />
              </span>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default GstreamerRobust;
