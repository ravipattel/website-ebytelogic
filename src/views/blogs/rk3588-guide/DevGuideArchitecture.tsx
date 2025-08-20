import React from 'react'
import { FaExpand, FaExpandArrowsAlt, FaSearchMinus, FaSearchPlus } from 'react-icons/fa';

const DevGuideArchitecture = ({ data }) => {
    const architecture = data?.architecture
    return (
        <section id="architecture" className="px-4 md:px-6 py-16 bg-slate-50">
            {/* Title of the Section */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {architecture?.title}
            </h2>

            {/* Description with Citation */}
            <p className="text-gray-600 mb-6">
                {architecture?.description}
                <a
                    href={architecture?.citation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {architecture?.citation.text}
                </a>
            </p>

            {/* Camera Subsystem Architecture */}
            <h3 className="font-serif text-xl font-semibold mb-4">
                {architecture?.cameraSubsystemTitle}
            </h3>
            <div className="mermaidcontainer">
                <div className="mermaid-controls">
                    <button className="mermaid-control-btn zoom-in" title="Zoom In">
                        <FaSearchPlus />
                    </button>
                    <button className="mermaid-control-btn zoom-out" title="Zoom Out">
                        <FaSearchMinus />
                    </button>
                    <button className="mermaid-control-btn reset-zoom" title="Reset">
                        <FaExpandArrowsAlt />
                    </button>
                    <button className="mermaid-control-btn fullscreen" title="Full Screen">
                        <FaExpand />
                    </button>
                </div>
                <div className="mermaid">
                    {architecture?.cameraSubsystemDiagram}
                </div>
            </div>

            {/* MIPI CSI-2 Interface Configuration */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {architecture?.mipiCsi2Title}
            </h3>
            <p className="mb-4 text-gray-600">
                {architecture?.tableLine}
                <a
                    href={architecture?.mipiCsi2Citation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {architecture?.mipiCsi2Citation.text}
                </a>
            </p>

            {/* MIPI CSI-2 Configuration Table */}
            <div className="comparison-table">
                <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-sm">
                    <thead className="bg-teal-700 text-white text-sm">
                        <tr>
                            <th className="px-4 py-3 font-medium">{architecture?.mipiCsi2Table[0]?.tableHead1}</th>
                            <th className="px-4 py-3 font-medium">{architecture?.mipiCsi2Table[0]?.tableHead2}</th>
                            <th className="px-4 py-3 font-medium">{architecture?.mipiCsi2Table[0]?.tableHead3}</th>
                            <th className="px-4 py-3 font-medium">{architecture?.mipiCsi2Table[0]?.tableHead4}</th>
                            <th className="px-4 py-3 font-medium">{architecture?.mipiCsi2Table[0]?.tableHead5}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {architecture?.mipiCsi2Table.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <td className="px-4 py-3">{row.PHY}</td>
                                <td className="px-4 py-3">{row.mode}</td>
                                <td className="px-4 py-3">{row.lanes}</td>
                                <td className="px-4 py-3">{row.maxSpeed}</td>
                                <td className="px-4 py-3">{row.usage}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Key Architecture Features */}
            <div className="mt-6">
                <p className="font-semibold mb-2">{architecture?.keyFeaturesTitle}:</p>
                <ul className="space-y-2">
                    {architecture?.keyFeatures.map((feature, index) => (
                        <li key={index} className='text-gray-600'>• {feature}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default DevGuideArchitecture
