import React from "react";

const SomSocAnalysis = ({ data }) => {
  const analysis = data?.analysis;

  const renderItem = (item, index) => {
    return (
      <div key={index}>
        <h4 className="font-semibold mb-2 text-lg">{item?.subTitle}</h4>
        <p className="text-gray-600 text-sm">
          <span
            dangerouslySetInnerHTML={{ __html: item?.text }}
          />
        </p>
      </div>
    );
  };

  const renderCostBreakdown = (breakdown, index) => {
    return (
      <div key={index} className={`p-3 rounded`} style={{ backgroundColor: breakdown?.bgColor }}>
        <span className="font-semibold">{breakdown?.label}:</span> {breakdown?.text}
      </div>
    );
  };

  return (
    <section id={analysis?.id} className="px-4 md:px-6 py-16 bg-white">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
        {analysis?.title}
      </h2>
      <div className="space-y-12">
        {analysis?.blocks?.map((block, idx) => (
          <div className="p-4 rounded-md" style={{ backgroundColor: block?.bgColor }} key={idx}>
            <h3 className="text-lg md:text-xl font-semibold mb-4" style={{ color: block?.color }}>
              {block?.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {block?.items?.map((item, index) => renderItem(item, index))}
            </div>

            {block?.costBreakdown && (
              <div className="space-y-4 mt-3">
                <div key={idx} className="bg-white rounded-lg p-4 border">
                  {block?.items?.map((item) => (
                    <>
                      <h4 className="font-semibold mb-2 text-base md:text-lg">{item?.subTitle}</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {item?.text}
                      </p>
                    </>
                  ))}
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    {block?.costBreakdown?.map((breakdown, index) =>
                      renderCostBreakdown(breakdown, index)
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SomSocAnalysis;
