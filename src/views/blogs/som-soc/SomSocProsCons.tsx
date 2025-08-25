
import React from 'react';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const SomSocProsCons = ({ data }) => {

  const prosCons = data?.prosCons;

  const renderList = (items) =>
    items?.map((item, index) => (
      <li key={index} className="space-y-2 text-gray-800 flex items-center gap-1">
        • {item?.text ? (
          <span
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        ) : (
          <>{item?.text}</>
        )}
      </li>
    ));

  return (
    <section id={prosCons?.id} className="px-4 md:px-6 py-16 bg-slate-50">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
        {prosCons?.title}
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {prosCons?.cards?.map((card) => {
          const pros = card?.pros || card.subCard?.[0]?.pros || [];
          const cons = card?.cons || card.subCard?.[0]?.cons || [];

          return (
            <div key={card?.id} className="space-y-6">
              <h3 className="text-lg md:text-xl font-semibold">{card?.title}</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6" >
                <h4 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                  <FaCheckCircle className="mr-2" />
                  Advantages
                </h4>
                <ul className="space-y-2 text-green-800 text-sm">{renderList(pros)}</ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                  <FaExclamationTriangle className="mr-2" />
                  Disadvantages
                </h4>
                <ul className="space-y-2 text-red-800 text-sm">{renderList(cons)}</ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SomSocProsCons;
