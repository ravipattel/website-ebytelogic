import Image from 'next/image'

import React from 'react'
import { FaCopy, FaExclamationTriangle, FaShieldAlt, FaUndo, FaVial } from 'react-icons/fa'

import QaRisksJpg from '@/src/assets/images/blogs/blogDetails/qaRisks.jpg'
const QaRisk = () => {
    return (
        <section id="ota-risks" className="px-4 md:px-6 py-16 bg-slate-50">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                Challenge 3: The Perils of Over-the-Air Updates
            </h2>

            <div className="mb-8">
                <Image
                    src={QaRisksJpg}
                    alt="Illustration of wireless firmware update process for IoT devices"
                    className="rounded-lg shadow-lg mb-6"
                />
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                Critical Nature of OTA Updates
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                <span className='font-semibold'>Over-the-Air updates have become critical for modern embedded systems</span>, particularly IoT devices deployed in large numbers or inaccessible locations.{' '}
                <a href="#ref-17" className="text-primary hover:underline">OTA updates enable remote deployment of firmware upgrades, security patches, and new features</a>, essential for maintaining functionality and addressing post-deployment vulnerabilities.
            </p>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                The Unique Risk of &#34;Bricking&#34;
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                One of the most significant OTA risks is <span className='font-semibold'>potential device &#34;bricking&#34;</span>—rendering devices inoperable. This can occur from interrupted updates, corrupted packages, or unexpected device states during updates.{' '}
                <a href="#ref-18" className="text-primary hover:underline">Unlike web or mobile apps where failed updates typically require reinstallation</a>, failed firmware updates can corrupt bootloaders or critical system software.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <div className="flex">
                    <FaExclamationTriangle className="text-red-400 mr-3 mt-1" />
                    <div>
                        <h4 className="font-serif text-lg font-semibold text-red-800 mb-2">Critical Impact</h4>
                        <p className="text-red-700 text-sm md:text-base">
                            A failed firmware update can turn functional hardware into an expensive paperweight, requiring costly physical repair or replacement—particularly severe for devices in critical infrastructure or remote locations.
                        </p>
                    </div>
                </div>
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                Mitigation Strategies
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                To mitigate OTA risks, designers employ several strategies:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-md border border-gray-300 shadow-md">
                    <div className="flex items-center mb-3">
                        <FaCopy className="text-blue-600 mr-2" />
                        <h4 className="font-serif text-base md:text-lg font-semibold">A/B Partitioning</h4>
                    </div>
                    <p className="text-sm text-gray-600">Dual-copy firmware images with rollback capability</p>
                </div>

                <div className="bg-white p-4 rounded-md border border-gray-300 shadow-md">
                    <div className="flex items-center mb-3">
                        <FaUndo className="text-green-600 mr-2" />
                        <h4 className="font-serif text-base md:text-lg font-semibold">Rollback Mechanisms</h4>
                    </div>
                    <p className="text-sm text-gray-600">Automatic reversion to previous working firmware</p>
                </div>

                <div className="bg-white p-4 rounded-md border border-gray-300 shadow-md">
                    <div className="flex items-center mb-3">
                        <FaShieldAlt className="text-purple-600 mr-2" />
                        <h4 className="font-serif text-base md:text-lg font-semibold">Digital Signatures</h4>
                    </div>
                    <p className="text-sm text-gray-600">Verification of update authenticity and integrity</p>
                </div>

                <div className="bg-white p-4 rounded-md border border-gray-300 shadow-md">
                    <div className="flex items-center mb-3">
                        <FaVial className="text-orange-600 mr-2" />
                        <h4 className="font-serif text-base md:text-lg font-semibold">Failure Testing</h4>
                    </div>
                    <p className="text-sm text-gray-600">Comprehensive testing of update failure scenarios</p>
                </div>
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                Contrast with Web/Mobile
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Web and mobile application updates carry <span className='font-semibold'>much lower risk of bricking underlying devices</span>.{' '}
                <a href="#ref-63" className="text-primary hover:underline">Web app updates deploy server-side, while mobile app updates operate within protected OS environments</a>, isolating application failures from core system functionality.
            </p>
        </section>
    )
}

export default QaRisk
