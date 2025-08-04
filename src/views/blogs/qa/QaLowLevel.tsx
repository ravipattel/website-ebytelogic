import Image from 'next/image'

import React from 'react'
import { FaEye, FaMicrochip, FaPlug, FaSlidersH } from 'react-icons/fa'

import QaLowLevelPng from '@/src/assets/images/blogs/blogDetails/qaLowLevel.png'
const QaLowLevel = () => {
    return (
        <section id="low-level-interactions" className="px-4 md:px-6 py-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
                Challenge 2: Navigating Low-Level Hardware Interactions
            </h2>

            <div className="mb-8">
                <Image
                    src={QaLowLevelPng}
                    alt="Logic analyzer displaying I2C and SPI protocol waveforms"
                    className="w-full object-cover rounded-md shadow-lg mb-6"
                />
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                Direct Hardware Interface Monitoring
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Embedded QA involves <span className='font-semibold'>managing and verifying low-level communication</span> with peripheral devices through interfaces such as{' '}
                <a href="#ref-31" className="text-primary">GPIO pins, I2C buses, SPI channels, UARTs, and BLE</a>. These interfaces form primary pathways for data exchange and control between microcontrollers and external components.
            </p>

            <div className="mb-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-md border border-gray-300 shadow-md">
                    <h4 className="font-serif text-base md:text-lg font-semibold mb-3 text-primary">GPIO</h4>
                    <p className="text-sm text-gray-600">General-Purpose Input/Output pins for basic digital control and sensing</p>
                </div>
                <div className="bg-white p-4 rounded-md border border-gray-300 shadow-md">
                    <h4 className="font-serif text-base md:text-lg font-semibold mb-3 text-green-600">I2C</h4>
                    <p className="text-sm text-gray-600">Inter-Integrated Circuit bus for multi-device communication</p>
                </div>
                <div className="bg-white p-4 rounded-md border border-gray-300 shadow-md">
                    <h4 className="font-serif text-base md:text-lg font-semibold mb-3 text-purple-600">SPI</h4>
                    <p className="text-sm text-gray-600">Serial Peripheral Interface for high-speed data transfer</p>
                </div>
                <div className="bg-white p-4 rounded-md border border-gray-300 shadow-md">
                    <h4 className="font-serif text-base md:text-lg font-semibold mb-3 text-orange-600">UART</h4>
                    <p className="text-sm text-gray-600">Universal Asynchronous Receiver-Transmitter for serial communication</p>
                </div>
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                Signal Integrity and Protocol Adherence
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Beyond data transmission, embedded QA must <span className='font-semibold'>ensure signal integrity and strict protocol adherence</span>.{' '}
                <a href="#ref-46" className="text-primary">Signal integrity issues like noise, crosstalk, and improper voltage levels</a> can lead to data corruption. Timing requirements for protocols like I2C and SPI have specific constraints for clock signals, data setup, and hold times.
            </p>

            <div className="pull-quote bg-gray-100 p-6 rounded-md shadow-lg mb-6 text-sm md:text-base">
                &#34;Deviations from timing specifications, even by small margins, can cause communication failures. If clock frequency is too high or data changes too close to clock edges, devices may not sample data correctly.&#34;
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                Specialized Analysis Tools
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Embedded QA relies on <span className='font-semibold'>specialized tools for low-level analysis</span>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li className='text-sm md:text-base'>
                    <FaMicrochip className="inline-block mr-2 text-primary" />
                    <span className='font-semibold'>Logic analyzers</span> for capturing digital signals on multiple lines
                </li>
                <li className='text-sm md:text-base'>
                    <FaPlug className="inline-block mr-2 text-green-600" />
                    <span className='font-semibold'>Oscilloscopes</span> for analyzing analog signal characteristics
                </li>
                <li className='text-sm md:text-base'>
                    <FaEye className="inline-block mr-2 text-purple-600" />
                    <span className='font-semibold'>Protocol analyzers</span> for decoding specific communication protocols
                </li>
                <li className='text-sm md:text-base'>
                    <FaSlidersH className="inline-block mr-2 text-orange-600" />
                    <span className='font-semibold'>JTAG debuggers</span> for real-time hardware debugging
                </li>
            </ul>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                Contrast with Web/Mobile
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Web and mobile developers work at <span className='font-semibold'>much higher abstraction levels</span>, interacting with standardized OS APIs and browser interfaces.{' '}
                <a href="#ref-2" className="text-primary">Operating systems and hardware abstraction layers handle low-level details</a>, allowing QA to focus on functional correctness, UI/UX, and application-level performance.
            </p>
        </section>
    )
}

export default QaLowLevel
