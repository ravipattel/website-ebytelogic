import React from 'react'

const QaConclusions = ({ data }) => {
  const conclusion = data?.conclusion;
  return (
    <section id="conclusion" className="px-4 md:px-6 py-16">
      <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
        {conclusion.title}
      </h2>

      {conclusion.content.map((block, index) => {
        switch (block.type) {
          case "text":
            return (
              <div key={index} className="mb-6">
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                  {block.heading}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-sm md:text-base"
                  dangerouslySetInnerHTML={{ __html: block.paragraph }}
                />
              </div>
            );

          case "quote":
            return (
              <div key={index} className="text-sm md:text-base italic mb-6">
                “{block.text}”
              </div>
            );

          default:
            return null;
        }
      })}
    </section>

  )
}

export default QaConclusions
