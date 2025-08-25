import React from "react";

const MultiViewerDecision = ({ data }) => {
  const decisionData = data?.decisionData;

  return (
    <>
      {decisionData && (
        <section
          id={decisionData?.id}
          className="px-4 md:px-6 py-8 bg-slate-50"
        >
          <h2 className="font-serif text-3xl font-semibold mb-8">
            {decisionData?.title}
          </h2>
          {decisionData?.blocks && (
            <div className="grid gap-8">
              {decisionData?.blocks?.map((block, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-md shadow-lg overflow-hidden"
                >
                  <div className={`px-8 py-4`}>
                    <h3 className="font-serif text-2xl font-semibold flex items-center">
                      <i className={`${block?.icon} mr-3`}></i>
                      {block?.title}
                    </h3>
                  </div>
                  <div className="px-8 pb-8">
                    <div className="grid md:grid-cols-3 gap-6">
                      {block?.cards?.map((card, idx) => (
                        <div
                          key={idx}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <h4
                            className={`font-semibold text-base md:text-lg mb-3`}
                            style={{ color: card?.color }}
                          >
                            {card?.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-4">
                            {card?.description}
                          </p>
                          <div className="text-xs text-gray-600">
                            <span className="font-semibold">Best for:</span>{" "}
                            {card?.bestFor}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default MultiViewerDecision;
