import React from 'react'
import { FaBorderNone, FaBroadcastTower, FaBuffer, FaClock, FaMicrochip, FaSyncAlt, FaVideo } from 'react-icons/fa';

const GstreamerData = {
    challenge: {
        title: "The Challenge: GStreamer on Resource-Constrained ARM Platforms",
        description: "Deploying GStreamer on embedded ARM platforms like Rockchip RK356x, NXP i.MX8, and TI Sitara families presents formidable challenges where restricted CPU cycles, limited memory bandwidth, and hardware acceleration constraints can significantly impede real-time multimedia performance."
    },
    performanceIssues: [
        {
            icon: FaClock,
            title: "High Decoding Latency",
            description: "Stream bursts can introduce 300ms latency in RTSP streams, especially during initialization and keyframe processing.",
            citation: "[188]"
        },
        {
            icon: FaBuffer,
            title: "Buffer Queue Issues",
            description: "Overruns cause dropped frames while underruns lead to pipeline stalls, often due to mismatched processing speeds and improper queue sizing."
        },
        {
            icon: FaSyncAlt,
            title: "AV Desynchronization",
            description: "Clock drift exceeding ±150ms occurs when audio and video paths have differing processing latencies or incorrect timestamping.",
            citation: "[191]"
        },
        {
            icon: FaMicrochip,
            title: "Hardware Integration",
            description: "Limited plugin availability and misconfigured elements can prevent effective hardware acceleration utilization."
        }
    ],
    realTimeApps: [
        {
            icon: FaBorderNone,
            title: "Drone Feeds",
            description: "High latency makes piloting unsafe as operators react to outdated visual information, potentially causing collisions."
        },
        {
            icon: FaBroadcastTower,
            title: "Live Encoders",
            description: "Broadcast and interactive streams require minimal end-to-end latency to maintain audience engagement and event synchronization."
        },
        {
            icon: FaVideo,
            title: "Video Switchers",
            description: "Frame-accurate synchronization with extremely low switching latency is essential for glitch-free live production."
        }
    ]
};

const GstreamerChallenge = () => {
    return (
        <section id="section-1" className="px-4 md:px-6 py-16">
            {/* Challenge Section */}
            <div className="mb-3">
                <span className="text-primary me-3">01</span>
                <h2 className="font-serif text-3xl font-semibold inline">
                    {GstreamerData.challenge.title}
                </h2>
            </div>
            <div>
                <p className="text-gray-600 leading-relaxed mb-8">
                    {GstreamerData.challenge.description}
                </p>

                {/* Common Performance Issues Section */}
                <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-md mb-12">
                    <h3 className="font-serif text-2xl font-semibold mb-6">Common Performance Issues</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Map through Performance Issues */}
                        {GstreamerData.performanceIssues.map((issue, index) => (
                            <div key={index} className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                        <issue.icon className='text-white text-sm' />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">{issue.title}</h4>
                                        <p className="text-gray-600 text-sm">
                                            {issue.description}
                                            {issue.citation && <a href="#ref" className="text-primary hover:underline">{issue.citation}</a>}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Impact on Real-Time Applications */}
                <div className="bg-slate-50 p-8 rounded-md">
                    <h3 className="font-serif text-2xl font-semibold mb-6">Impact on Real-Time Applications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Map through Real-Time Applications */}
                        {GstreamerData.realTimeApps.map((app, index) => (
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
