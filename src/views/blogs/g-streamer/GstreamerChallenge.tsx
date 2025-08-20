import React from 'react'

const GstreamerChallenge = ({ data }) => {
    const challeneg = data?.challeneg;
    return (
        <section id="section-1" className="px-4 md:px-6 py-16">
            {/* Challenge Section */}
            <div className="mb-3">
                <span className="text-primary me-3">{challeneg?.challenge?.no}</span>
                <h2 className="font-serif text-3xl font-semibold inline">
                    {challeneg?.challenge?.title}
                </h2>
            </div>
            <div>
                <p className="text-gray-600 leading-relaxed mb-8">
                    {challeneg?.challenge?.description}
                </p>

                {/* Common Performance Issues Section */}
                <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-md mb-12">
                    <h3 className="font-serif text-2xl font-semibold mb-6">{challeneg?.challenge?.performanceIssueTitle}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Map through Performance Issues */}
                        {challeneg?.performanceIssues?.map((issue, index) => (
                            <div key={index} className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                        <issue.icon className='text-white text-sm' />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">{issue.title}</h4>
                                        <p className="text-gray-600 text-sm">
                                            {issue.description}
                                            {issue.citation && <a href={issue.link} className="text-primary hover:underline">{issue.citation}</a>}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Impact on Real-Time Applications */}
                <div className="bg-slate-50 p-8 rounded-md">
                    <h3 className="font-serif text-2xl font-semibold mb-6">{challeneg?.challenge?.realTimeAppsTitle}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Map through Real-Time Applications */}
                        {challeneg?.realTimeApps?.map((app, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <app.icon className="text-white text-2xl" />
                                </div>
                                <h4 className="font-semibold mb-2">{app.title}</h4>
                                <p className="text-gray-600 text-sm">{app.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GstreamerChallenge
