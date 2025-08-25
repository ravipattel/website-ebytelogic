import React from "react";

const MultiViewerPerformance = ({ data }) => {
  const performanceData = data?.performanceData;

  return (
    <>
      {performanceData && (
        <section id={performanceData?.id} className="px-4 md:px-6 py-16">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
            {performanceData?.title}
          </h2>
          {performanceData?.intro && (
            <div
              className="rounded-xl p-4 md:p-8 mb-8 border border-blue-200"
              style={{
                backgroundColor: performanceData?.intro?.bgColor,
                border: `1px solid ${performanceData?.intro?.borderColor}`,
              }}
            >
              <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                {performanceData?.intro?.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-6">
                {performanceData?.intro?.description}
              </p>
            </div>
          )}
          {performanceData?.table && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div
                className="px-4 md:px-8 py-4"
                style={{ background: performanceData?.table?.tableHeadColor }}
              >
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-white">
                  {performanceData?.table?.title}
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      {performanceData?.table?.columns?.map((col, i) => (
                        <th
                          key={i}
                          className="px-6 py-4 text-left font-semibold text-sm md:text-base whitespace-nowrap"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {performanceData?.table?.rows?.map((row, i) => (
                      <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                        <td className="px-6 py-4 text-sm md:text-base">
                          {row?.feature}
                        </td>
                        {row?.values?.map((val, j) => (
                          <td
                            key={j}
                            className="px-6 py-4 text-gray-600 text-sm md:text-base"
                          >
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {performanceData?.cards && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
              {performanceData?.cards?.map((card, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-base md:text-lg mb-4">
                    {card?.title}
                  </h4>
                  <div className="space-y-4">
                    {card?.items?.map((item, i) => (
                      <div
                        key={i}
                        className={`pl-4`} style={{borderLeft : `4px solid ${item?.color}`}}
                      >
                        <h5 style={{color : item?.color}}>
                          {item?.heading}
                        </h5>
                        <p className="text-sm text-gray-600">{item?.content}</p>
                      </div>
                    ))}
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

export default MultiViewerPerformance;
