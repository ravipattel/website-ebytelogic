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
            {overview?.description?.map((desc,idx) => (
                <div className="highlight-box" key={idx}>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">{desc?.desc}</p>
                </div>
            ))}

            {overview?.paragraph?.map((para,i) => (
                <p key={i} className="mb-6 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: para?.para }}
                />
            ))}

            {/* Key Multimedia Components */}
            <div className="architecture-diagram">
                <h3 className="font-serif text-xl font-semibold mb-4">
                    {overview?.keyTitle}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {overview?.keys?.map((key, index) => (
                        <div key={index} className="key-card">
                            <h4 className={`font-semibold mb-2`} style={{color:key?.color}}>
                                {key?.title}
                            </h4>
                            <ul className="text-sm space-y-1">
                                {key?.items?.map((item, index) => (
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
