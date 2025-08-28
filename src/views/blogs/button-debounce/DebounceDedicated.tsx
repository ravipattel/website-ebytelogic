import React from 'react'

const DebounceDedicated = ({ data }) => {

  const dedicatedData = data?.dedicatedData

  return (
    <section id={dedicatedData?.id} className="px-4 md:px-6 py-16">
      <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
        {dedicatedData?.title}
      </h3>
      <div className="bg-white rounded-md p-8 shadow-sm border border-gray-300">
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          {dedicatedData?.description?.text}
        </p>
        {dedicatedData?.sections && (
          <div className="grid md:grid-cols-2 gap-8">
            {dedicatedData?.sections?.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-serif text-xl font-semibold mb-4">{section?.title}</h4>
                <div className={`space-y-2 ${section?.space}`}>
                  {section?.items?.map((item, i) => (
                    <div key={i} className={`flex items-center gap-2 ${section?.base}`}>
                      {item?.name ? (
                        <div className={`rounded-full p-2 mr-2`} style={{ background: item?.bgColor }}>
                          {item?.icon}
                        </div>
                      ) : null}
                      {item?.text ? (
                        <>
                          {item?.icon}
                        </>
                      ) : null}
                      <div>
                        {item?.name && (
                          <>
                            <h5 className="font-semibold">{item?.name}</h5>
                            <p className="text-sm text-gray-600">{item?.description}</p>
                          </>
                        )}
                        {item?.text && (
                          <p className="text-gray-600 text-sm md:text-base">{item?.text}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default DebounceDedicated
