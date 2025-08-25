import React from "react";

const MultiViewerFeature = ({ data }) => {
  const featureComparisonData = data?.featureComparisonData;

  return (
    <>
      {featureComparisonData && (
        <section
          id={featureComparisonData?.id}
          className="px-4 md:px-6 py-16 bg-slate-50"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
            {featureComparisonData?.title}
          </h2>
          <div className="flex flex-col gap-y-8">
            {featureComparisonData?.blocks?.map((block, index) => {
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-5 md:p-8"
                >
                  <h3 className="font-serif text-xl md:text-2xl font-semibold mb-6 flex flex-wrap gap-4 items-center">
                    {block?.icon}
                    {block?.title}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {block?.cards?.map((card, idx) => (
                      <div
                        key={idx}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <h4 className="font-semibold text-base md:text-lg mb-3">
                          {card?.name}
                        </h4>
                        <p
                          className="text-gray-600 text-sm md:text-base mb-3"
                          dangerouslySetInnerHTML={{
                            __html: card?.description,
                          }}
                        />
                        {card?.details ? (
                          <div
                            className="text-xs text-gray-600"
                            dangerouslySetInnerHTML={{ __html: card?.details }}
                          />
                        ) : (
                          <ul className="text-xs text-gray-600 space-y-1">
                            {card?.bullets?.map((b, bi) => (
                              <li key={bi}>• {b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default MultiViewerFeature;
