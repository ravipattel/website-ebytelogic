import Image from 'next/image'
import React from 'react'

const DevGuideArchitecture = ({ data }) => {
    const architecture = data?.architecture
    return (
        <section id="architecture" className="px-4 md:px-6 py-16 bg-slate-50">
            {/* Title of the Section */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {architecture?.title}
            </h2>

            <p
                className="text-gray-600 mb-6"
                dangerouslySetInnerHTML={{ __html: architecture?.description }}
            />

            {/* Camera Subsystem Architecture */}
            <h3 className="font-serif text-xl font-semibold mb-4">
                {architecture?.cameraSubsystemTitle}
            </h3>
            <div className="mermaidcontainer">
                {/* <div className="mermaid-controls flex">
                    {architecture?.icon?.map((i, index) => (
                        <div key={index}>
                            <button title={i?.title}>
                                {i?.icon}
                            </button>
                        </div>
                    ))}
                </div> */}
                <div>
                    {/* {architecture?.cameraSubsystemDiagram} */}
                    <Image src={architecture?.cameraSubsystemDiagram} alt='diagram'/>
                </div>
            </div>

            {/* MIPI CSI-2 Interface Configuration */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {architecture?.mipiCsi2Title}
            </h3>

            <p
                className="mb-4 text-gray-600"
                dangerouslySetInnerHTML={{ __html: architecture?.tableLine }}
            />

            {/* MIPI CSI-2 Configuration Table */}
            {
                architecture?.mipiCsi2Table && (
                    <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-sm">
                        <thead className={`text-white text-sm`} style={{ backgroundColor: architecture?.tableHeadColor }}>
                            <tr>
                                <th className="px-4 py-3 font-medium">{architecture?.mipiCsi2Table[0]?.column1}</th>
                                <th className="px-4 py-3 font-medium">{architecture?.mipiCsi2Table[0]?.column2}</th>
                                <th className="px-4 py-3 font-medium">{architecture?.mipiCsi2Table[0]?.column3}</th>
                                <th className="px-4 py-3 font-medium">{architecture?.mipiCsi2Table[0]?.column4}</th>
                                <th className="px-4 py-3 font-medium">{architecture?.mipiCsi2Table[0]?.column5}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {architecture?.mipiCsi2Table?.map((row, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    <td className="px-4 py-3">{row?.row1}</td>
                                    <td className="px-4 py-3">{row?.row2}</td>
                                    <td className="px-4 py-3">{row?.row3}</td>
                                    <td className="px-4 py-3">{row?.row4}</td>
                                    <td className="px-4 py-3">{row?.row5}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }

            {/* Key Architecture Features */}
            <div className="mt-6">
                <p className="font-semibold mb-2">{architecture?.keyFeaturesTitle}:</p>
                <ul className="space-y-2">
                    {architecture?.keyFeatures?.map((feature, index) => (
                        <li key={index} className='text-gray-600'>• {feature}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default DevGuideArchitecture
