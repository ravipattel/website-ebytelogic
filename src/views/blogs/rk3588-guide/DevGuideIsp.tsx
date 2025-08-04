import React from 'react'

const isp3aData = {
    title: "ISP & 3A Processing",
    ispArchitectureTitle: "ISP 3.0 Architecture",
    ispArchitectureDescription:
        "The RK3588 features an advanced Image Signal Processor (ISP 3.0) that handles raw image data from camera sensors and performs enhancement tasks including demosaicing, noise reduction, lens shading correction, and 3A control.",
    ispArchitectureCitation: {
        text: "[61]",
        link: "https://doc.embedfire.com/linux/rk356x/quick_start/zh/latest/quick_start/isp/isp.html"
    },
    ispProcessingPipelineTitle: "ISP Processing Pipeline",
    ispProcessingPipelineDiagram: "flowchart TD A[\"RAW Sensor Data\"] --> B[\"Defective Pixel Correction\"] B --> C[\"Lens Shading Correction\"] C --> D[\"Demosaicing\"] D --> E[\"Noise Reduction\"] E --> F[\"Color Correction\"] F --> G[\"Gamma Correction\"] G --> H[\"Sharpness Enhancement\"] H --> I[\"3A Algorithms\"] I --> J[\"YUV/RGB Output\"] subgraph \"3A Control\" K[\"Auto Exposure\"] --> I L[\"Auto White Balance\"] --> I M[\"Auto Focus\"] --> I end style A fill:#8B5CF6,stroke:#6D28D9,stroke-width:3px,color:#FFFFFF style I fill:#F59E0B,stroke:#D97706,stroke-width:3px,color:#FFFFFF style J fill:#06B6D4,stroke:#0891B2,stroke-width:3px,color:#FFFFFF style K fill:#10B981,stroke:#059669,stroke-width:3px,color:#FFFFFF style L fill:#10B981,stroke:#059669,stroke-width:3px,color:#FFFFFF style M fill:#10B981,stroke:#059669,stroke-width:3px,color:#FFFFFF",
    threeAAlgorithmTitle: "3A Algorithm Integration",
    threeAAlgorithmDescription:
        "The 3A algorithms (Auto Exposure, Auto White Balance, Auto Focus) are implemented through the Rockchip Camera Engine (RCE) framework.",
    threeAAlgorithmCitation: {
        text: "[94]",
        link: "https://dl.vamrs.com/products/rock960/docs/sw/Rockchip%C2%A0Linux%20Camera%C2%A0Developer%20Guide%20V1.1.pdf"
    },
    components: [
        {
            title: "librkisp.so",
            description: "Main engine interfacing with V4L2 driver and providing application APIs",
            color: "text-purple-600"
        },
        {
            title: "librkisp_aec.so",
            description: "Auto Exposure control algorithms",
            color: "text-cyan-600"
        },
        {
            title: "librkisp_awb.so",
            description: "Auto White Balance calibration",
            color: "text-amber-600"
        }
    ],
    ispTuningProcess: [
        "Setup controlled environment with lightbox and calibration charts",
        "Capture raw images using RKISP Capture Tool",
        "Analyze and adjust parameters in RKISP Tuner",
        "Generate XML-based IQ file",
        "Deploy to target device and verify performance"
    ],
    iqFileConfigTitle: "IQ File Configuration",
    iqFileConfigDescription:
        "Image Quality (IQ) files in XML format contain comprehensive ISP tuning parameters. The system loads sensor-specific IQ files during initialization.",
    iqFileConfigCitation: {
        text: "[50]",
        link: "https://www.ebaina.com/articles/140000017281"
    },
    codeBlock: `/* Example IQ file structure */
<IQ path="imx577">
  <AWB module="AWB">
    <Param name="awb_speed" value="0.5"/>
    <Param name="awb_threshold" value="0.05"/>
  </AWB>
  <AE module="AE">
    <Param name="ae_target" value="120"/>
    <Param name="ae_speed" value="0.5"/>
  </AE>
  <CCM module="CCM">
    <Matrix name="ccm_matrix">
      <Data>1.2, -0.2, 0.1, -0.1, 1.1, 0.0, 0.1, -0.3, 1.3</Data>
    </Matrix>
  </CCM>
</IQ>`
};

const DevGuideIsp = () => {
    return (
        <section id="isp-3a" className="px-4 md:px-6 py-16 bg-slate-50">
            {/* Title of the Section */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {isp3aData.title}
            </h2>

            {/* ISP 3.0 Architecture */}
            <h3 className="font-serif text-2xl font-semibold mb-4">
                {isp3aData.ispArchitectureTitle}
            </h3>
            <p className="mb-6 text-gray-600">
                {isp3aData.ispArchitectureDescription}
                <a
                    href={isp3aData.ispArchitectureCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {isp3aData.ispArchitectureCitation.text}
                </a>
            </p>

            {/* ISP Processing Pipeline Diagram */}
            <div className="architecture-diagram">
                <h3 className="font-serif text-xl font-semibold mb-4">
                    {isp3aData.ispProcessingPipelineTitle}
                </h3>
                <div className="mermaid-container">
                    <div className="mermaid">{isp3aData.ispProcessingPipelineDiagram}</div>
                </div>
            </div>

            {/* 3A Algorithm Integration */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {isp3aData.threeAAlgorithmTitle}
            </h3>
            <p className="mb-4 text-gray-600">
                {isp3aData.threeAAlgorithmDescription}
                <a
                    href={isp3aData.threeAAlgorithmCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {isp3aData.threeAAlgorithmCitation.text}
                </a>
            </p>

            {/* Components List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {isp3aData.components.map((component, index) => (
                    <div className="bg-white rounded-md border border-gray-300 shadow-md p-3" key={index}>
                        <h4 className={`font-semibold ${component.color} mb-2`}>
                            {component.title}
                        </h4>
                        <p className="text-sm text-gray-600">{component.description}</p>
                    </div>
                ))}
            </div>

            {/* ISP Tuning Process */}
            <div>
                <p className="font-semibold mb-2">ISP Tuning Process:</p>
                <ol className="list-decimal list-inside space-y-1">
                    {isp3aData.ispTuningProcess.map((step, index) => (
                        <li key={index} className='text-gray-600'>{step}</li>
                    ))}
                </ol>
            </div>

            {/* IQ File Configuration */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {isp3aData.iqFileConfigTitle}
            </h3>
            <p className="mb-4 text-gray-600">
                {isp3aData.iqFileConfigDescription}
                <a
                    href={isp3aData.iqFileConfigCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {isp3aData.iqFileConfigCitation.text}
                </a>
            </p>

            {/* IQ File Example Code */}
            <div className="bg-[#1E293B] p-4 rounded-md text-white">
                <pre>
                    <code className='text-sm'>{isp3aData.codeBlock}</code>
                </pre>
            </div>
        </section>
    )
}

export default DevGuideIsp
