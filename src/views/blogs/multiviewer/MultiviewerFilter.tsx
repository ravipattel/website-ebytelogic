import React from "react";

const MultiviewerFilter = ({ data }) => {
  const filterData = data?.filterData;

  return (
    <>
      {filterData?.filterSections && (
        <section id={filterData?.id} className="px-4 md:px-6 py-16">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
            {filterData?.title}
          </h2>
          <div
            className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 mb-8 border-l-4"
            style={{ borderColor: filterData?.borderColor }}
          >
            <h3 className="font-serif text-xl md:text-2xl font-bold mb-4">
              {filterData?.architecture?.title}
            </h3>
            <p
              className="text-gray-600 text-sm md:text-base mb-6"
              dangerouslySetInnerHTML={{
                __html: filterData?.architecture?.content,
              }}
            />
             {filterData?.filterSections && (
            <div className="grid md:grid-cols-2 gap-8">
              {filterData?.filterSections?.map((section) => (
                <div key={section?.key}>
                  <h4 className="font-semibold text-base md:text-lg mb-3">
                    {section?.title}
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                    {section?.getItems(filterData)?.map((item, i) => {
                      const Icon = section?.icon;
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <Icon className={section?.iconClass} />
                          {section?.renderItem(item, i)}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
             )}
          </div>
          {filterData?.implementation && (
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <h4 className="font-serif text-xl md:text-2xl font-bold mb-4">
                {filterData?.implementation?.title}
              </h4>
              <p
                className="text-gray-600 text-sm md:text-base mb-4"
                dangerouslySetInnerHTML={{
                  __html: filterData?.implementation?.description,
                }}
              />

              <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-auto">
                <code className="text-green-400 text-sm whitespace-pre">
                  {filterData?.implementation?.code}
                </code>
              </div>

              <p className="text-sm text-gray-600 flex flex-wrap items-center gap-3">
                {filterData?.implementation?.icon}
                {filterData?.implementation?.note}
              </p>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default MultiviewerFilter;
