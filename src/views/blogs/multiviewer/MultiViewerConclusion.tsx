import React from "react";

const MultiViewerConclusion = ({ data }) => {
  const conclusionData = data?.conclusionData;

  return (
    <section id={conclusionData?.id} className="px-4 md:px-6 py-16">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
        {conclusionData?.title}
      </h2>
      <div
        className="rounded-xl p-8 mb-8"
        style={{
          border: `1px solid ${conclusionData?.borderColor}`,
          background: conclusionData?.gradient,
        }}
      >
        <h3 className="font-serif text-2xl font-semibold mb-6">
          {conclusionData?.recommendationsSection?.title}
        </h3>
        {conclusionData?.recommendationsSection?.blocks && (
          <div className="grid md:grid-cols-2 gap-8">
            {conclusionData?.recommendationsSection?.blocks?.map((block, i) => (
              <div key={i}>
                <h4 className="font-semibold text-lg mb-4">{block?.title}</h4>
                <ul className="space-y-3 text-gray-600 text-sm md:text-base">
                  {block?.cards?.map((card, j) => (
                    <li key={j} className="flex items-center gap-3 space-x-3">
                      {card?.icon}
                      <div>
                        <span className="font-semibold">{card?.label}</span>{" "}
                        {card?.highlight && (
                          <span className={card?.highlightClass}>
                            {card?.highlight}
                          </span>
                        )}
                        <span> {card?.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      {conclusionData?.chooseToolSection && (
        <div>
          {conclusionData?.chooseToolSection?.intro && (
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              {conclusionData?.chooseToolSection?.intro?.map((part, i) => {
                switch (part.type) {
                  case "text":
                    return <span key={i}>{part.content}</span>;
                  case "code":
                    return (
                      <code key={i} className={part.className}>
                        {part.content}
                      </code>
                    );
                  case "highlight":
                    return (
                      <span key={i} className={part.className}>
                        {part.content}
                      </span>
                    );
                  default:
                    return null;
                }
              })}
            </p>
          )}
          {conclusionData?.chooseToolSection?.options && (
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {conclusionData?.chooseToolSection?.options?.map(
                ({ title, points }, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                  >
                    <h4 className="font-serif text-lg font-semibold mb-3">
                      {title}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {points?.map((point, idx) => (
                        <li key={idx}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}
      {conclusionData?.quote && (
        <blockquote
          className="p-6 my-8 italic text-sm md:text-base"
          style={{
            background: conclusionData?.quote?.bgColor,
            borderLeft: `4px solid ${conclusionData?.quote?.borderColor}`,
          }}
        >
          {conclusionData?.quote?.title}
        </blockquote>
      )}
      {conclusionData?.closing && (
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {conclusionData?.closing}
        </p>
      )}
    </section>
  );
};

export default MultiViewerConclusion;
