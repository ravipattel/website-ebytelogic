import React from 'react'

const GstreamerChallenge = ({ data }) => {
    const challeneg = data?.challeneg;
    return (
        <section id={challeneg?.id} className="px-4 md:px-6 py-16">
            {/* Challenge Section */}
            <div className="mb-3">
                <span className="me-3" style={{ color: challeneg?.challenge?.color }}>{challeneg?.challenge?.no}</span>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold inline">
                    {challeneg?.challenge?.title}
                </h2>
            </div>
            <div>
                <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
                    {challeneg?.challenge?.description}
                </p>

                {/* Common Performance Issues Section */}
                <div className="bg-primary/5 p-4 md:p-8 rounded-md mb-12" style={{ borderLeft: `4px solid ${challeneg?.borderColor}` }}>
                    <h3 className="font-serif text-2xl font-semibold mb-6">{challeneg?.performanceIssueTitle}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Map through Performance Issues */}
                        {challeneg?.block?.map((card, index) => (
                            <div key={index} className="space-y-6">
                                <div className="flex flex-wrap gap-3 items-start space-x-4">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0`} style={{ backgroundColor: card?.bgColor }}>
                                        {card?.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">{card?.title}</h4>
                                        <p
                                            className="text-gray-600 text-sm"
                                            dangerouslySetInnerHTML={{ __html: card?.description }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Impact on Real-Time Applications */}
                {challeneg?.challenge && (
                    <div className="bg-slate-50 p-4 md:p-8 rounded-md">
                        <h3 className="font-serif text-2xl font-semibold mb-6">{challeneg?.challenge?.realTimeAppsTitle}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Map through Real-Time Applications */}
                            {challeneg?.cardBlock?.map((card, index) => (
                                <div key={index} className="text-center">
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`} style={{ backgroundColor: card?.bgColor }}>
                                        {card?.icon}
                                    </div>
                                    <h4 className="font-semibold mb-2">{card?.title}</h4>
                                    <p className="text-gray-600 text-sm">{card?.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default GstreamerChallenge
