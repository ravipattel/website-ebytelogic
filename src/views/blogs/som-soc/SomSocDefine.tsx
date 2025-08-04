import React from 'react'
import { FaMicrochip, FaPuzzlePiece } from 'react-icons/fa'

const SomSocDefine = () => {
    return (
        <section id="definitions" className="px-4 md:px-6 py-16 bg-slate-50">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
                Defining the Technologies
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* SoC Feature Card */}
                <div className="bg-white p-4 rounded-md">
                    <div className="flex flex-wrap gap-3 items-center mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <FaMicrochip className="text-blue-600" />
                        </div>
                        <h4 className="text-lg md:text-xl font-semibold">{`System on Chip (SoC)`}</h4>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 mb-4">
                        A single integrated circuit that encapsulates all or most of the essential components of a computer or electronic system onto a single microchip.{' '}
                        <a
                            href="https://aichiplink.com/blog/System-on-Chip-VSSystem-on-Module-Key-Differences-and-Applications_377"
                            className="citation"
                        >
                            [198]
                        </a>
                        . This includes CPU, memory controllers, I/O interfaces, and specialized accelerators.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="text-sm font-semibold text-blue-900 mb-2">Key Characteristics:</h5>
                        <ul className="text-xs md:text-sm text-blue-800 space-y-1">
                            <li>• Single silicon die integration</li>
                            <li>• Maximum component density</li>
                            <li>• Optimized power efficiency</li>
                            <li>• High NRE costs, low per-unit cost at scale</li>
                        </ul>
                    </div>
                </div>

                {/* SoM Feature Card */}
                <div className="bg-white p-4 rounded-md">
                    <div className="flex flex-wrap gap-3 items-center mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <FaPuzzlePiece className='text-green-600' />
                        </div>
                        <h4 className="text-lg md:text-xl font-semibold">{`System on Module (SoM)`}</h4>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 mb-4">
                        A compact, self-contained circuit board that integrates an SoC along with other critical components necessary for a fully functional computing system.{' '}
                        <a
                            href="https://aichiplink.com/blog/System-on-Chip-VS-System-on-Module-KeyDifferences-and-Applications_377"
                            className="citation"
                        >
                            [198]
                        </a>
                        . Typically requires only power to operate.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="text-sm font-semibold text-green-900 mb-2">Key Characteristics:</h5>
                        <ul className="text-xs md:text-sm text-green-800 space-y-1">
                            <li>• Board-level integration</li>
                            <li>• Pre-integrated and tested</li>
                            <li>• Plug-and-play functionality</li>
                            <li>• Lower NRE costs, faster development</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SomSocDefine
