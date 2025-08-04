import React from 'react'
import { FaCheck, FaMicrochip } from 'react-icons/fa';

const dedicatedICsData = {
  title: "Dedicated Debounce ICs",
  description: {
    text: "For applications requiring debouncing multiple switches or where board space is critical, dedicated debounce ICs offer an excellent solution. These chips integrate all necessary logic to filter noise from mechanical switches, providing clean, stable digital outputs.",
    citation: "[2]"
  },
  popularOptions: [
    {
      name: "MAX6816",
      description: "Single-switch debouncer with ESD protection and low-power shutdown mode",
      icon: FaMicrochip,
      color: "blue"
    },
    {
      name: "MC14490",
      description: "Hex contact bounce eliminator - debounces up to six switches",
      icon: FaMicrochip,
      color: "green"
    }
  ],
  whenToUse: [
    "Large number of switches",
    "Critical reliability requirements",
    "Limited board space",
    "Simplified development"
  ]
};

const DebounceDedicated = () => {
  return (
    <section id="dedicated-ics" className="px-4 md:px-6 py-16">
      {/* Title */}
      <h3 className="font-serif text-3xl font-semibold mb-8">
        {dedicatedICsData.title}
      </h3>

      {/* Description */}
      <div className="bg-white rounded-md p-8 shadow-sm border border-gray-300">
        <p className="text-gray-600 mb-6">
          {dedicatedICsData.description.text} <a href="#" className="citation">{dedicatedICsData.description.citation}</a>
        </p>

        {/* Popular Options Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4">
              Popular Options
            </h4>
            <div className="space-y-4">
              {dedicatedICsData.popularOptions.map((option, index) => (
                <div key={index} className="flex items-start">
                  <div className={`bg-${option.color}-100 rounded-full p-2 mr-4`}>
                    <option.icon className={`text-${option.color}-600`} />
                  </div>
                  <div>
                    <h5 className="font-semibold">{option.name}</h5>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* When to Use Section */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4">
              When to Use
            </h4>
            <ul className="space-y-2 text-gray-600">
              {dedicatedICsData.whenToUse.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaCheck className="text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DebounceDedicated
