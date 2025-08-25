
import React from 'react';

const SomSocConclusion = ({ data }) => {

  const conclusion = data?.conclusion;

  return (
    <section id={conclusion?.id} className="px-4 md:px-6 py-16 bg-white">
      <h2 className="font-serif text-3xl font-semibold mb-8">{conclusion?.title}</h2>

      <div className="space-y-6 text-sm md:text-base text-gray-600 leading-relaxed">
        {conclusion?.content?.map((item, index) => {
          if (item?.type === 'paragraph') {
            return <p key={index}>{item?.text}</p>;
          }

          if (item?.quoteBlock) {
            return (
              <>
                {item?.quoteBlock?.map((block) => (
                  <div key={index} className={`pl-4 p-3 italic text-gray-600 mt-4`} style={{borderLeft:`4px solid ${block?.borderColor}`,backgroundColor:block?.bgColor}}>
                    {block?.text}
                  </div>
                ))}
              </>
            );
          }

          if (item.type === 'key') {
            return (
              <div key={index} className="bg-gray-50 rounded-md p-6 mt-8">
                <h3 className="text-xl font-semibold mb-4">{item?.title}</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  {item?.keyCharacteristics?.map((characteristics, idx) => (
                    <ul key={idx} className="space-y-2">
                      <li>{`• ${characteristics?.key}`}</li>
                    </ul>
                  ))}
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
    </section>
  );
};

export default SomSocConclusion;
