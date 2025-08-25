import React from "react";

const GstreamerApproach = ({ data }) => {
  const approach = data?.approachData;
  return (
    <section id="section-2" className="px-4 md:px-6 py-16 bg-slate-50">
      {/* Section Title */}
      <div className="mb-8">
        <span className="text-primary me-3">{approach?.approach?.no}</span>
        <h2 className="font-serif text-3xl font-semibold text-deep-blue inline">
          {approach?.approach?.title}
        </h2>
      </div>

      {/* eByteLogic's Approach Overview */}
      <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-600 mb-6">
              {approach?.approach?.description}{" "}
              <a
                href={approach?.approach?.link}
                className="text-primary hover:underline"
              >
                {approach?.approach?.citation}
              </a>
            </p>
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
      <div className="p-8 rounded-xl">
        <h3 className="font-serif text-2xl font-semibold text-deep-blue mb-6">
          {approach?.armExpertise?.title}
        </h3>

        <p className="text-gray-600 mb-6">
          {approach?.armExpertise?.description?.text}{" "}
          <span className="font-semibold">
            {approach?.armExpertise?.description?.emphasis}
          </span>{" "}
          <a
            href={approach?.armExpertise?.description?.link?.href}
            className="text-primary hover:underline"
          >
            {approach?.armExpertise?.description?.link?.label}
          </a>
          .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approach?.armExpertise?.stats?.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-primary/5 rounded-md p-5"
            >
              <div className="text-3xl font-semibold text-primary mb-2">
                {stat?.value}
              </div>
              <div className="text-sm text-gray-600">{stat?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GstreamerApproach;
