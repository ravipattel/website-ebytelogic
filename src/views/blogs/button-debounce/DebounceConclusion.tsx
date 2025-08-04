import React from 'react'
import { FaDollarSign, FaShieldAlt } from 'react-icons/fa';
import { FaBatteryHalf } from 'react-icons/fa6';

const conclusionData = {
    title: "Conclusion",
    description: "The choice between hardware and software debouncing depends on your specific project requirements. Software debouncing is the most common and flexible method, offering cost-effectiveness and easy adjustability, though it consumes CPU cycles. Hardware debouncing provides superior reliability and zero CPU load, making it ideal for critical systems, but increases component cost and board space.",
    options: [
        {
            icon: FaDollarSign,
            color: "green-400",
            title: "Cost-Effective",
            description: "Choose software for minimal component cost"
        },
        {
            icon: FaShieldAlt,
            color: "red-400",
            title: "High Reliability",
            description: "Choose hardware for critical applications"
        },
        {
            icon: FaBatteryHalf,
            color: "blue-400",
            title: "Low Power",
            description: "Both methods can be optimized"
        }
    ]
};

const DebounceConclusion = () => {
    return (
        <section id='conclusion' className="px-4 md:px-6 py-16 bg-slate-50">
            {/* Conclusion Title */}
            <h2 className="font-serif text-3xl font-semibold mb-8">{conclusionData.title}</h2>

            {/* Conclusion Description */}
            <p className="text-gray-600 mb-8">{conclusionData.description}</p>

            {/* Options Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
                {conclusionData.options.map((option, index) => (
                    <div
                        key={index}
                        className="bg-slate-50 backdrop-blur-sm rounded-md p-6"
                    >
                        <div className='flex items-start gap-3'>
                            <option.icon className={`text-${option.color} text-2xl`} />
                            <div>
                                <h3 className="font-semibold mb-2">{option.title}</h3>
                                <p className="text-sm text-gray-600">{option.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DebounceConclusion
