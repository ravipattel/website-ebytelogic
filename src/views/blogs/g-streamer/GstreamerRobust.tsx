import React from 'react';
import { FaCheck } from 'react-icons/fa';

const GstreamerRobust = ({ data }) => {
  const robust = data?.robustData;

  return (
    <section id="section-5" className="px-4 md:px-6 py-16">
      {/* Section Title */}
      <div className="mb-8">
        <span className="text-primary mr-3">{robust?.no}</span>
        <h2 className="font-serif text-3xl font-semibold inline">
          {robust?.title}
        </h2>
      </div>

      {/* Subsections */}
      {robust?.subsections?.map((subsection, index) => (
        <div key={index} className="bg-primary/5 border-l-4 border-primary p-8 rounded-md mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-6">{subsection?.title}</h3>

          {/* Description and Citation */}
          <p className="text-gray-600 mb-6">
            {subsection?.content?.description}{' '}
            <a href={subsection?.content?.link} className="text-primary hover:underline">
              {subsection?.content?.citation}
            </a>
          </p>

          {/* Render Mechanisms and Sync Mechanisms (if present) */}
          {subsection?.content?.mechanisms && subsection?.content?.mechanisms?.length > 0 && (
            <div className="space-y-3 mb-6">
              {subsection?.content?.mechanisms?.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheck className="text-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          )}

          {subsection?.content?.syncMechanisms && subsection?.content?.syncMechanisms?.length > 0 && (
            <div className="bg-white border border-gray-300 p-6 rounded-md mb-6">
              <h4 className="font-semibold mb-4">{subsection?.content?.syncTitle}</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                {subsection?.content?.syncMechanisms?.map((mechanism, i) => (
                  <li key={i}>• {mechanism}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Render subsections for "Performance Under Load" and "Debugging" */}
          {subsection?.content?.subsections && subsection?.content?.subsections?.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {subsection?.content?.subsections?.map((item, i) => (
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
          {subsection?.content?.expertInsight && (
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">{subsection?.content?.subsectionTitle}</span> {subsection?.content?.expertInsight}{' '}
                <a href={subsection?.content?.link} className="text-primary hover:underline">
                  {subsection?.content?.citation}
                </a>
              </p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default GstreamerRobust;
