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

            <p className="mb-4 text-gray-600" dangerouslySetInnerHTML={{ __html: camera?.deviceTreeConfigDescription }} />

            {/* Code Block for Example DTS Configuration */}
            {camera?.codeBlock && (
                <div className="bg-[#1E293B] text-white p-4 rounded-md mb-6">
                    <pre>
                        <code className='text-sm'>{camera?.codeBlock}</code>
                    </pre>
                </div>
            )}

            {/* V4L2 Integration */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {camera?.v4l2IntegrationTitle}
            </h3>

            <p className="mb-4 text-gray-600" dangerouslySetInnerHTML={{ __html: camera?.v4l2IntegrationDescription }} />

            {/* V4L2 Commands and Debugging Tools */}
            {camera?.integration && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {camera?.integration?.map((int, index) => (
                        <div key={index}>
                            <div className="bg-white border border-gray-300 rounded-md shadow-md p-4 h-full">
                                <h4 className={`font-semibold mb-3`} style={{color:int?.color}}>
                                    {int?.title}
                                </h4>
                                <ul className="space-y-2 text-sm">
                                    {int?.command?.map((command, index) => (
                                        <li key={index} className='text-gray-600'>{command}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Common V4L2 Capture Workflow */}
            {camera?.v4l2CaptureTitle && (
                <div className="highlight-box">
                    <p className="font-semibold mb-2">{camera?.v4l2CaptureTitle}</p>
                    <ol className="list-decimal list-inside space-y-1">
                        {camera?.v4l2CaptureWorkflow?.map((step, index) => (
                            <li key={index} className='text-gray-600'>{step}</li>
                        ))}
                    </ol>
                </div>
            )}
        </section >
    )
}

export default DevGuideCamera
