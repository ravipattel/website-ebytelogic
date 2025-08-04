import React from 'react';

const decisionData = {
    "title": "Decision Matrix",
    "sections": [
        {
            "title": "Broadcast Television",
            "icon": "fas fa-broadcast-tower",
            "colorFrom": "red-600",
            "colorTo": "red-500",
            "items": [
                {
                    "title": "NDI Recommended",
                    "subtitle": "Live control rooms, studio environments, IP-based workflows",
                    "description": "Excellent for live monitoring with low latency. Network flexibility and integration with production switchers make it ideal for broadcast.",
                    "bestFor": "Live control rooms, studio environments, IP-based workflows",
                    "textColor": "text-red-600"
                },
                {
                    "title": "GStreamer Alternative",
                    "subtitle": "Custom applications, embedded systems, specialized hardware",
                    "description": "Strong for custom broadcast solutions requiring specific hardware integration or embedded systems development.",
                    "bestFor": "Custom applications, embedded systems, specialized hardware",
                    "textColor": "text-yellow-600"
                },
                {
                    "title": "FFmpeg Limited",
                    "subtitle": "Offline rendering, automated streams, quality control",
                    "description": "Less suited for primary live broadcast due to complexity and CPU demands. Better for backend processing and automated tasks.",
                    "bestFor": "Offline rendering, automated streams, quality control",
                    "textColor": "text-gray-600"
                }
            ]
        },
        {
            "title": "Live Events (Sports, Concerts)",
            "icon": "fas fa-calendar-alt",
            "colorFrom": "purple-600",
            "colorTo": "purple-500",
            "items": [
                {
                    "title": "NDI Primary",
                    "subtitle": "Quick setup and adaptation to changing requirements",
                    "description": "Rapid deployment, network flexibility, and wireless capabilities make NDI ideal for dynamic event environments.",
                    "bestFor": "Quick setup and adaptation to changing requirements",
                    "textColor": "text-purple-600"
                },
                {
                    "title": "GStreamer Secondary",
                    "subtitle": "Customization and hardware optimization",
                    "description": "Good for custom event capture systems, mobile production units, and compact hardware solutions like NVIDIA Jetson.",
                    "bestFor": "Customization and hardware optimization",
                    "textColor": "text-blue-600"
                },
                {
                    "title": "FFmpeg Post-Event",
                    "subtitle": "Scriptability for batch processing",
                    "description": "Primarily for post-event tasks like highlight reels and archival processing rather than live operation.",
                    "bestFor": "Scriptability for batch processing",
                    "textColor": "text-gray-600"
                }
            ]
        },
        {
            "title": "Video Production & Post-Production",
            "icon": "fas fa-film",
            "colorFrom": "green-600",
            "colorTo": "green-500",
            "items": [
                {
                    "title": "FFmpeg Recommended",
                    "subtitle": "Creating dailies, transcoding footage, editorial review",
                    "description": "Unmatched codec support and filtering capabilities make it excellent for offline rendering, format conversion, and batch processing.",
                    "bestFor": "Creating dailies, transcoding footage, editorial review",
                    "textColor": "text-green-600"
                },
                {
                    "title": "GStreamer Alternative",
                    "subtitle": "Custom review systems, integrated processing pipelines",
                    "description": "Useful for integrated real-time preview systems within custom post-production pipelines requiring interactive performance.",
                    "bestFor": "Custom review systems, integrated processing pipelines",
                    "textColor": "text-blue-600"
                },
                {
                    "title": "NDI Integration",
                    "subtitle": "Reviewing NDI rushes, live-to-tape integration",
                    "description": "Beneficial for workflows relying on NDI sources and quick review of networked footage in post-production.",
                    "bestFor": "Reviewing NDI rushes, live-to-tape integration",
                    "textColor": "text-purple-600"
                }
            ]
        },
        {
            "title": "Surveillance & Security",
            "icon": "fas fa-shield-alt",
            "colorFrom": "red-600",
            "colorTo": "red-500",
            "items": [
                {
                    "title": "NDI Recommended",
                    "subtitle": "IP camera systems, NDI-compatible VMS, monitoring centers",
                    "description": "Well suited for modern IP-based surveillance systems with low latency and scalability over network infrastructure.",
                    "bestFor": "IP camera systems, NDI-compatible VMS, monitoring centers",
                    "textColor": "text-gray-600"
                },
                {
                    "title": "GStreamer Alternative",
                    "subtitle": "Custom VMS development, embedded surveillance devices",
                    "description": "Excellent for building custom surveillance solutions, embedded systems, and specialized VMS applications.",
                    "bestFor": "Custom VMS development, embedded surveillance devices",
                    "textColor": "text-blue-600"
                },
                {
                    "title": "FFmpeg Specialized",
                    "subtitle": "Custom analysis, motion detection integration",
                    "description": "Useful for scripted surveillance tasks, analyzing recorded footage, and generating summary multiviews for review.",
                    "bestFor": "Custom analysis, motion detection integration",
                    "textColor": "text-orange-600"
                }
            ]
        }
    ]
}

const MultiViewerDecision = () => {
    return (
        <section id="decision" className="px-4 md:px-6 py-8 bg-slate-50">
            <h2 className="font-serif text-3xl font-semibold mb-8">{decisionData.title}</h2>

            <div className="grid gap-8">
                {decisionData.sections.map((section, idx) => (
                    <div key={idx} className="bg-white rounded-md shadow-lg overflow-hidden">
                        <div className={`bg-gradient-to-r from-${section.colorFrom} to-${section.colorTo} px-8 py-4`}>
                            <h3 className="font-serif text-2xl font-semibold flex items-center">
                                <i className={`${section.icon} mr-3`}></i>{section.title}
                            </h3>
                        </div>
                        <div className="px-8 pb-8">
                            <div className="grid md:grid-cols-3 gap-6">
                                {section.items.map((item, idx) => (
                                    <div key={idx} className="border border-gray-200 rounded-lg p-4">
                                        <h4 className={`font-semibold text-base md:text-lg mb-3 ${item.textColor}`}>{item.title}</h4>
                                        <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                                        <div className="text-xs text-gray-600">
                                            <span className='font-semibold'>Best for:</span> {item.bestFor}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MultiViewerDecision;
