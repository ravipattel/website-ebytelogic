import React from 'react'
import { FaGlobe, FaLink, FaMicrochip } from 'react-icons/fa'

const QaIntro = () => {
    return (
        <section id="introduction" className="px-4 md:px-6 py-16">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                Introduction: The Unique World of Embedded QA
            </h2>
            <div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                    Embedded Quality Assurance (QA) is fundamentally different from web and mobile app testing due to its{' '}
                    <span className='font-semibold'>deep hardware-software integration</span>, requiring specialized approaches like{' '}
                    <span className='font-semibold'>Hardware-in-the-Loop (HIL) testing</span>. Key challenges include navigating{' '}
                    <span className='font-semibold'>low-level hardware interactions</span> (e.g., GPIO, I2C, SPI), managing the{' '}
                    <span className='font-semibold'>high risks of Over-the-Air (OTA) updates</span> {`(including potential device "bricking"), conquering`}{' '}
                    <span className='font-semibold'>asynchronous timing and race conditions</span> that are difficult to simulate, and overcoming{' '}
                    <span className='font-semibold'>limited debugging visibility</span> due to resource constraints.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-md border border-gray-300 p-6">
                        <div className="flex items-center mb-4">
                            <FaMicrochip className="text-2xl text-blue-600 mr-3" />
                            <h3 className="font-serif text-lg md:text-xl font-semibold">Defining Embedded Systems</h3>
                        </div>
                        <p className="text-gray-600 text-sm md:text-base">
                            Specialized computing systems designed to perform dedicated functions within larger mechanical or electrical
                            systems, optimized for specific tasks with real-time computing constraints.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-md border border-gray-300 p-6">
                        <div className="flex items-center mb-4">
                            <FaLink className="text-2xl text-green-600 mr-3" />
                            <h3 className="font-serif text-lg md:text-xl font-semibold">Core Distinction</h3>
                        </div>
                        <p className="text-gray-600 text-sm md:text-base">
                            Unlike software-centric applications, embedded systems feature tight, inseparable integration between software and
                            specific hardware platforms, with direct interaction with physical components.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-md border border-gray-300 p-6">
                        <div className="flex items-center mb-4">
                            <FaGlobe className="text-2xl text-purple-600 mr-3" />
                            <h3 className="font-serif text-lg md:text-xl font-semibold">Pervasiveness</h3>
                        </div>
                        <p className="text-gray-600 text-sm md:text-base">
                            Found in smartwatches, home appliances, automotive systems, medical devices, and aerospace applications—
                            ubiquitous yet often operating unseen and autonomously.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QaIntro
