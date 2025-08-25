import React from "react";

const SomSocExamples = ({ data }) => {
  
  const examples = data?.examples;

  return (
    <section id={examples?.id} className="px-4 md:px-6 py-16 bg-white">
      <h2 className="font-serif text-3xl font-semibold mb-8">
        {examples?.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {examples?.exampleCards?.map((examples, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-4">{examples?.title}</h3>
            <div className="space-y-4">
              {examples?.cards?.map((card , idx) => (
                <div key={idx}
                  className={`pl-4`}
                style={{borderLeft:`4px solid ${card?.borderColor}`}}
                >
                  <h4 className="font-semibold">{card?.title}</h4>
                  <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: card?.description }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SomSocExamples;
