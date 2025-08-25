import React from "react";

const MultiViewerIntro = ({ data }) => {
  const introData = data?.introData;

  return (
    <section id={introData?.id} className="px-4 md:px-6 py-8 bg-slate-50">
      {introData?.title && (
        <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
          {introData?.title}
        </h2>
      )}
      {introData?.paragraphs && (
        <div className="mb-12">
          {introData?.paragraphs?.map((para, index) => (
            <p
              key={index}
              className="text-gray-600 text-sm md:text-base leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: para }}
            />
          ))}
        </div>
      )}
      {introData?.technologies && (
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {introData?.technologies?.map((tech, index) => {
            const Icon = tech?.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-md p-6 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  {Icon && <Icon className="text-xl md:text-2xl mr-3" />}
                  <h3 className="font-serif text-lg md:text-xl font-semibold">
                    {tech?.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                  {tech?.description}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default MultiViewerIntro;
