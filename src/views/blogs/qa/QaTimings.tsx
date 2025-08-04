import Image from 'next/image'

import React from 'react'
import { FaClock } from 'react-icons/fa'

import QaTimePng from '@/src/assets/images/blogs/blogDetails/qaTime.png'

const QaTimings = () => {
    return (
        <section id="timing-challenges" className="px-4 md:px-6 py-16">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                Challenge 4: Conquering Asynchronous Timing and Race Conditions
            </h2>

            <div className="mb-8">
                <Image
                    src={QaTimePng}
                    alt="Race condition in embedded real-time system"
                    className="w-full object-cover rounded-md shadow-lg mb-6"
                />
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                Real-Time Constraints and Concurrency
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                Embedded systems frequently operate under <span className='font-semibold'>real-time constraints, requiring responses within strictly defined timeframes</span>.{' '}
                <a href="#ref-97" className="text-blue-600">These systems manage multiple concurrent operations</a>—reading sensors, processing data, controlling actuators, and communicating—while adhering to timing requirements.
            </p>

            <div className='text-sm md:text-base'>
                &#34;An anti-lock braking system must detect wheel lock-up and modulate brake pressure within milliseconds. A medical infusion pump must deliver precise medication amounts at scheduled intervals.&#34;
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-semibold my-4">
                Race Condition Complexity
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                <span className='font-semibold'>Race conditions and timing-sensitive bugs are notoriously difficult to simulate and reproduce</span>.{' '}
                <a href="#ref-82" className="text-blue-600">Race conditions occur when concurrent processes access shared resources without proper synchronization</a>, with outcomes depending on non-deterministic execution order. Because timing varies between runs, these issues may manifest only intermittently.
            </p>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                Interrupt-Driven Challenges
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                Interrupts are fundamental for handling asynchronous events but <span className='font-semibold'>improper use is a common source of race conditions</span>.{' '}
                <a href="#ref-83" className="text-blue-600">When ISRs and tasks access shared resources without synchronization</a>, data corruption or inconsistent states can occur. The challenge is compounded by hardware-specific interrupt control operations.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <div className="flex">
                    <FaClock className="text-yellow-400 mr-3 mt-1" />
                    <div>
                        <h4 className="font-serif text-base md:text-lg font-semibold text-yellow-800 mb-2">Timing Example</h4>
                        <p className="text-yellow-700 text-sm md:text-base">
                            A UART driver might experience race conditions between main tasks and ISRs if both modify shared transmit buffer pointers without protection, potentially leading to corrupted data transmission.
                        </p>
                    </div>
                </div>
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                Contrast with Web/Mobile
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Web and mobile applications operate in <span className='font-semibold'>more deterministic execution environments</span>.{' '}
                <a href="#ref-1" className="text-blue-600">Browsers and mobile OSs provide higher abstraction levels</a>, managing resources, scheduling, and I/O operations while shielding developers from low-level timing concerns.
            </p>
        </section>
    )
}

export default QaTimings
