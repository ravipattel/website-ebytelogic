import React from 'react'

const MultiViewerNdi = ({ data }) => {

  const ndiData = data?.ndiData;

  return (
    <section id={ndiData?.id} className="px-4 md:px-6 py-16">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">{ndiData?.title}</h2>
      <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 md:p-8 mb-8 border-l-4 border-primary">
        <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">{ndiData?.networkApproach?.title}</h3>
        <p
          className="text-gray-600 text-sm md:text-base mb-6"
          dangerouslySetInnerHTML={{ __html: ndiData?.networkApproach?.content }}
        />
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {ndiData?.networkApproach?.types?.map((type, i) => (
            <div key={i} className="bg-white rounded-md p-4 border border-gray-200">
              <h4 className="font-semibold mb-2 text-sm md:text-base">{type.title}</h4>
              <p className="text-sm text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
        <h4 className="font-serif text-xl font-semibold mb-4 md:text-base">{ndiData?.systemRequirements?.title}</h4>
        <p
          className="text-gray-600 text-sm md:text-base mb-4"
          dangerouslySetInnerHTML={{ __html: ndiData?.systemRequirements?.content }}
        />
        <div className="grid md:grid-cols-2 gap-6">
          {ndiData?.systemRequirements?.specSections.map((section) => (
            <div key={section.key}>
              <h5 className="font-semibold mb-2">{section?.title}</h5>
              <ul className="space-y-1 text-sm text-gray-600">
                {section.specs?.map((spec, i) => (
                  <li key={i}>• {spec}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
        <h4 className="font-semibold text-lg mb-3 text-primary">{ndiData?.keyAdvantages?.title}</h4>
        <div className="grid md:grid-cols-2 gap-6">
          {ndiData?.keyAdvantages?.items?.map((item, i) => (
            <div key={i}>
              <h5 className="font-semibold mb-2">{item?.title}</h5>
              <p className="text-sm text-gray-600 mb-3">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MultiViewerNdi
