import React from 'react'

const DebounceSoftware = ({ data }) => {

  const softwareData = data?.softwareData

  return (
    <section id={softwareData?.id} className="py-16 px-3 md:px-8 bg-slate-50">
      <h2 className="font-serif text-3xl font-semibold mb-4 text-center">
        {softwareData?.title}
      </h2>
      <div className="mb-8">
        <p className="text-gray-600 text-sm md:text-base text-center">
          {softwareData?.description.text}
        </p>
      </div>
      {softwareData?.methods && (
        <div>
          {softwareData?.methods?.map((method, index) => (
            <div id={method?.id} key={index} className="mb-4 md:mb-16">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
                {method?.title}
              </h3>
              <div className="space-y-8">
                {method?.techniques?.map((technique, idx) => (
                  <div className="bg-gray-50 rounded-md md:p-6" key={idx}>
                    <h4 className="font-serif text-xl font-semibold mb-4">
                      {technique?.title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base mb-4">{technique?.description}</p>
                    <div className="bg-[#1e293b] text-white text-sm rounded-md p-4">
                      <div className="w-full overflow-auto">
                        <pre>{technique?.code}</pre>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default DebounceSoftware
