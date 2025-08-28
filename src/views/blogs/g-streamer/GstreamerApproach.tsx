import React from "react";

const GstreamerApproach = ({ data }) => {

  const approach = data?.approachData;

  return (
    <section id={approach?.id} className="px-4 md:px-6 py-16 bg-slate-50">
      {/* Section Title */}
      <div className="mb-8">
        <span className="me-3" style={{ color: approach?.approach?.color }}>{approach?.approach?.no}</span>
        <h2 className="font-serif text-2xl md:text-3xl font-semibold inline">
          {approach?.approach?.title}
        </h2>
      </div>

      {/* eByteLogic's Approach Overview */}
      <div className="bg-white p-4 md:p-8 rounded-xl shadow-sm mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p
              className="text-gray-600 mb-6 text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: approach?.approach?.description }}
            />
            <div className="space-y-4">
              {/* Key Points */}
              {approach?.approach?.keyPoints?.map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-earth-tone"></i>
                  <span className="text-gray-600 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Principles */}
          <div className="bg-primary/5 text-gray-600 p-6 rounded-xl">
            <h4 className="font-serif text-xl font-semibold mb-4 text-black">
              {approach?.principleTitle}
            </h4>
            <ul className="space-y-2 text-sm">
              {/* Core Principles List */}
              {approach?.corePrinciples?.map((principle, index) => (
                <li key={index}>• {principle}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Leveraging ARM Expertise */}
      <div className="p-4 md:p-8 rounded-xl">
        <h3 className="font-serif text-2xl font-semibold text-deep-blue mb-6">
          {approach?.armExpertise?.title}
        </h3>

        <p className="text-gray-600 mb-6 text-sm md:text-base">
          {approach?.armExpertise?.description?.text}{" "}
          <span
            className="font-semibold">
              {approach?.armExpertise?.description?.emphasis}
            </span>
           <span
            dangerouslySetInnerHTML={{
              __html: approach?.armExpertise?.description?.link
            }}
          />
        </p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approach?.armExpertise?.cards?.map((card, index) => (
            <div
              key={index}
              className="text-center bg-primary/5 rounded-md p-5"
            >
              <div className="text-3xl font-semibold mb-2" style={{ color: card?.color }}>
                {card?.value}
              </div>
              <div className="text-sm text-gray-600">{card?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GstreamerApproach;
