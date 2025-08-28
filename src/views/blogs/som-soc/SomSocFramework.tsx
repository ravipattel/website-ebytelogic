
import React from 'react';

const SomSocFramework = ({ data }) => {

  const framework = data?.framework;
  
  return (
    <section id={framework?.id} className="px-4 md:px-6 py-16 bg-slate-50">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">{framework?.title}</h2>

      <div className="bg-white rounded-lg p-8 border border-gray-300">
        <h3 className="text-2xl font-semibold mb-6">{framework?.subtitle}</h3>
        <div className="decision-matrix grid md:grid-cols-2 gap-8">
          {framework?.cards?.map((item, idx) => (
            <div key={idx} className="border border-gray-300 p-4 rounded-md">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4`} style={{backgroundColor:item?.color}}>
                {item?.icon}
              </div>
              <h4 className="font-semibold mb-2">{item?.title}</h4>
              <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: item?.description }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {framework?.choices?.map((choice , idx) => (
          <div key={idx} className={`rounded-lg p-6`} style={{backgroundColor:choice?.bgColor,border:`1px solid ${choice?.borderColor}`}}>
            <h3 className={`text-lg font-semibold mb-4`} style={{color:choice?.color}}>{choice?.title}</h3>
            <ul className={`space-y-2 text-sm`} style={{color:choice?.color}}>
              {choice?.socChoice?.map((choice, idx) => (
                <li key={idx}>• {choice}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SomSocFramework;
