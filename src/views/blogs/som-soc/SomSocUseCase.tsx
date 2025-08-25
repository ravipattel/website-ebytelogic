import React from "react";

const SomSocUseCase = ({ data }) => {

  const usecase = data?.useCase;

  return (
    <section id={usecase?.id} className="px-4 md:px-6 py-16 bg-slate-50">
      <h2 className="font-serif text-3xl font-semibold mb-8">
        {usecase?.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* SoC Applications */}
        {usecase?.block?.map((apps, idx) => (
          <div key={idx} className="bg-white border border-gray-300 rounded-md p-4">
            {apps?.applicationCards?.map((card, idx) => (
              <div key={idx}>
                <h3 className={`text-lg md:text-xl font-semibold mb-4`} style={{ color: card?.titleColor }}>
                  {card?.title}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3" key={idx}>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                      style={{ backgroundColor: card?.bgColor }}
                    >
                      {card?.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{card?.subtitle}</h4>
                      <p
                        className="text-gray-600 text-sm h-fit"
                        dangerouslySetInnerHTML={{ __html: card?.description }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Evolving Applications Section */}
      <div className="mt-12 flex flex-col gap-6">
        {usecase?.mainChip?.map((chip, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold mb-6">
              {chip?.subtitle}
            </h3>
            <div className="bg-white rounded-md p-6 border border-gray-300 space-y-3">
              <p className="text-base font-semibold">
                {chip?.nestedSubTitle}
              </p>
              <p className="text-gray-700 mb-4 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: chip?.description }}
              />
              {chip?.chipCards && (
                <div className="grid md:grid-cols-2 gap-4">
                  {chip?.chipCards?.map((card, i) => (
                    <div key={i}>
                      <div className={`p-4 rounded-lg`} style={{ backgroundColor: card?.bgColor }}>
                        <h5 className={`font-semibold mb-2`} style={{ color: card?.color }}>
                          {card?.subtitle}
                        </h5>
                        <p className={`text-sm`} style={{ color: card?.color }}>
                          {card?.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SomSocUseCase;
