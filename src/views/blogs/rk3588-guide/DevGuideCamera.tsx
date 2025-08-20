import React from 'react'

const DevGuideCamera = ({ data }) => {
    const camera = data?.cameraConfig;
    return (
        <section id="camera-config" className="px-4 md:px-6 py-16">
            {/* Title of the Section */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {camera?.title}
            </h2>

            {/* Device Tree Configuration */}
            <h3 className="font-serif text-2xl font-semibold mb-4">
                {camera?.deviceTreeConfigTitle}
            </h3>
            <p className="mb-4 text-gray-600">
                {camera?.deviceTreeConfigDescription}
                <a
                    href={camera?.deviceTreeConfigCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {camera?.deviceTreeConfigCitation.text}
                </a>
            </p>

            {/* Code Block for Example DTS Configuration */}
            <div className="bg-[#1E293B] text-white p-4 rounded-md mb-6">
                <pre>
                    <code className='text-sm'>{camera?.codeBlock}</code>
                </pre>
            </div>

            {/* V4L2 Integration */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {camera?.v4l2IntegrationTitle}
            </h3>
            <p className="mb-4 text-gray-600">
                {camera?.v4l2IntegrationDescription}
                <a
                    href={camera?.v4l2IntegrationCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {camera?.v4l2IntegrationCitation.text}
                </a>
            </p>

            {/* V4L2 Commands and Debugging Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-gray-300 rounded-md shadow-md p-4">
                    <h4 className="font-semibold text-purple-600 mb-3">
                        {camera?.essentialV4l2Title}
                    </h4>
                    <ul className="space-y-2 text-sm">
                        {camera?.essentialV4l2Commands.map((command, index) => (
                            <li key={index} className='text-gray-600'>{command}</li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white border border-gray-300 rounded-md shadow-md p-4">
                    <h4 className="font-semibold text-cyan-600 mb-3">{camera?.debuggingTitle}</h4>
                    <ul className="space-y-2 text-sm">
                        {camera?.debuggingTools.map((tool, index) => (
                            <li key={index} className='text-gray-600'>{tool}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Common V4L2 Capture Workflow */}
            <div className="highlight-box">
                <p className="font-semibold mb-2">{camera?.v4l2CaptureTitle}</p>
                <ol className="list-decimal list-inside space-y-1">
                    {camera?.v4l2CaptureWorkflow.map((step, index) => (
                        <li key={index} className='text-gray-600'>{step}</li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default DevGuideCamera
