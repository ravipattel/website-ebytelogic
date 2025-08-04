import React from 'react'
import { FaExpand, FaExpandArrowsAlt, FaSearchMinus, FaSearchPlus } from 'react-icons/fa';

export const architectureData = {
    title: "RK3588 Multimedia Architecture",
    description:
        "The RK3588 features a complex architecture with multiple processing cores and dedicated hardware accelerators. The block diagram from the Rockchip RK3588 Datasheet illustrates the major subsystems including quad-core ARM Cortex-A76 and A55 processors, Mali-G610 MC4 GPU, and the MultiMedia Interface subsystem.",
    citation: {
        text: "[45]",
        link: "https://wiki.friendlyelec.com/wiki/images/e/ee/Rockchip_RK3588_Datasheet_V1.6-20231016.pdf"
    },
    cameraSubsystemTitle: "Camera Subsystem Architecture",
    cameraSubsystemDiagram: "graph LR A[\"Camera Sensor\"] --> B[\"MIPI CSI-2 PHY\"] B --> C[\"VICAP Unit\"] C --> D[\"ISP 3.0\"] D --> E[\"RGA\"] E --> F[\"MPP Encoder\"] D --> G[\"NPU for AI\"] F --> H[\"Network/Storage\"] G --> I[\"AI Results\"]",
    mipiCsi2Title: "MIPI CSI-2 Interface Configuration",
    mipiCsi2Citation: {
        text: "[24]",
        link: "https://zhuanlan.zhihu.com/p/636687160"
    },
    mipiCsi2Table: [
        {
            PHY: "DPHY (dphy0_hw)",
            mode: "Full Mode",
            lanes: "4 lanes",
            maxSpeed: "2.5 Gbps/lane",
            usage: "csi2_dphy0"
        },
        {
            PHY: "DPHY (dphy0_hw)",
            mode: "Split Mode",
            lanes: "2+2 lanes",
            maxSpeed: "2.5 Gbps/lane",
            usage: "csi2_dphy1 + csi2_dphy2"
        },
        {
            PHY: "DPHY (dphy1_hw)",
            mode: "Full Mode",
            lanes: "4 lanes",
            maxSpeed: "2.5 Gbps/lane",
            usage: "csi2_dphy3"
        },
        {
            PHY: "DPHY (dphy1_hw)",
            mode: "Split Mode",
            lanes: "2+2 lanes",
            maxSpeed: "2.5 Gbps/lane",
            usage: "csi2_dphy4 + csi2_dphy5"
        }
    ],
    keyFeaturesTitle: "Key Architecture Features",
    keyFeatures: [
        "Dual ISP units (ISP0 and ISP1) for concurrent processing",
        "RGA3 and RGA2 cores for graphics acceleration",
        "Single VICAP unit managing up to six MIPI PHYs",
        "DCPHY support for enhanced camera interfaces"
    ]
};


const DevGuideArchitecture = () => {
    return (
        <section id="architecture" className="px-4 md:px-6 py-16 bg-slate-50">
            {/* Title of the Section */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {architectureData.title}
            </h2>

            {/* Description with Citation */}
            <p className="text-gray-600 mb-6">
                {architectureData.description}
                <a
                    href={architectureData.citation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {architectureData.citation.text}
                </a>
            </p>

            {/* Camera Subsystem Architecture */}
            <h3 className="font-serif text-xl font-semibold mb-4">
                {architectureData.cameraSubsystemTitle}
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
                    {architectureData.cameraSubsystemDiagram}
                </div>
            </div>

            {/* MIPI CSI-2 Interface Configuration */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {architectureData.mipiCsi2Title}
            </h3>
            <p className="mb-4 text-gray-600">
                The RK3588 supports multiple MIPI PHY configurations
                <a
                    href={architectureData.mipiCsi2Citation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {architectureData.mipiCsi2Citation.text}
                </a>
            </p>

            {/* MIPI CSI-2 Configuration Table */}
            <div className="comparison-table">
                <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-sm">
                    <thead className="bg-teal-700 text-white text-sm">
                        <tr>
                            <th className="px-4 py-3 font-medium">PHY Type</th>
                            <th className="px-4 py-3 font-medium">Mode</th>
                            <th className="px-4 py-3 font-medium">Lanes</th>
                            <th className="px-4 py-3 font-medium">Max Speed</th>
                            <th className="px-4 py-3 font-medium">Usage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {architectureData.mipiCsi2Table.map((row, index) => (
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
                <p className="font-semibold mb-2">{architectureData.keyFeaturesTitle}:</p>
                <ul className="space-y-2">
                    {architectureData.keyFeatures.map((feature, index) => (
                        <li key={index} className='text-gray-600'>• {feature}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default DevGuideArchitecture
