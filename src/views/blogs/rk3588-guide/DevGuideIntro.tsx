import React from 'react'

const DevGuideIntro = ({ data }) => {
    const overview = data?.overview
    return (
        <section id="overview" className="px-4 md:px-6 py-16">
            {/* Overview Title */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {overview?.title}
            </h2>

            {/* Highlight Box */}
            <div className="highlight-box">
                <p className="text-gray-600 mb-4">{overview?.description}</p>
            </div>

            {/* Paragraph with Citation */}
            <p className="mb-6 text-gray-600">
                {overview?.paragraph}
                <a
                    href={overview?.citation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {overview?.citation.text}
                </a>
            </p>

            {/* Key Multimedia Components */}
            <div className="architecture-diagram">
                <h3 className="font-serif text-xl font-semibold mb-4">
                    Key Multimedia Components
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {overview?.keyComponents.map((component, index) => (
                        <div key={index} className="component-card">
                            <h4 className={`font-semibold text-${component.color} mb-2`}>
                                {component.title}
                            </h4>
                            <ul className="text-sm space-y-1">
                                {component.items.map((item, index) => (
                                    <li key={index} className='text-gray-600'>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DevGuideIntro
