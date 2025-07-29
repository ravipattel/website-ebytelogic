import React from 'react';

const SpgCoreTask = () => {
  return (
    <section id="core-task" className="py-16 px-6">
      <div className="px-6 py-8">
        {/* Section Heading */}
        <h2 className="font-serif text-4xl font-bold mb-8">
          1. Core Task: NDI Integration and GUI Stability
        </h2>

        {/* Two-column Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* NDI Support */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-4">Adding NDI Support</h3>
            <p className="text-gray-600 mb-4">
              The primary objective was to enhance SPG Studio&apos;s existing real-time audio dubbing solution by
              integrating Network Device Interface (NDI) support. This solution is built upon a QML/Qt5 framework for the
              graphical user interface and GStreamer for audio processing and streaming.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Key Components:</h4>
              <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                <li>
                  NDI source (<code className="bg-gray-100 px-1 py-0.5 rounded">ndisrc</code>) and sink (
                  <code className="bg-gray-100 px-1 py-0.5 rounded">ndisink</code>) elements
                </li>
                <li>Network audio stream handling</li>
                <li>Real-time collaboration capabilities</li>
              </ul>
            </div>
          </div>

          {/* GUI Stability */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-4">GUI Stability Challenges</h3>
            <p className="text-gray-600 mb-4">
              Following NDI integration, the QML-based GUI began exhibiting instability—freezes, unresponsiveness, or
              crashes—particularly during NDI stream initiation or termination.
            </p>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Critical Issues:</h4>
              <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
                <li>Thread management conflicts</li>
                <li>Event loop integration problems</li>
                <li>Resource contention issues</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="chart-container">
          <h3 className="font-serif text-xl font-bold mb-4">System Architecture Overview</h3>
          <div className="relative bg-gray-50 p-4 rounded-lg shadow-inner">
            <div className="mermaid" id="architecture-diagram">
              {`
                graph TD
                  A["QML/Qt5 GUI"] --> B["GStreamer Framework"]
                  B --> C["NDI Plugin <br />gst-plugin-ndi"]
                  C --> D["NDI SDK"]
                  B --> E["Audio Processing"]
                  E --> F["Echo Cancellation <br />webrtcdsp"]
                  E --> G["Audio Sinks"]
                  C --> H["Network Streams"]
                  H --> I["NDI Sources"]
                  H --> J["NDI Sinks"]

                  style A fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
                  style B fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px,color:#000
                  style C fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#000
                  style D fill:#e8f5e8,stroke:#388e3c,stroke-width:2px,color:#000
                  style E fill:#fce4ec,stroke:#c2185b,stroke-width:2px,color:#000
                  style F fill:#e0f7fa,stroke:#0097a7,stroke-width:2px,color:#000
                  style G fill:#f1f8e9,stroke:#689f38,stroke-width:2px,color:#000
                  style H fill:#fff8e1,stroke:#fbc02d,stroke-width:2px,color:#000
                  style I fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#000
                  style J fill:#e0f2f1,stroke:#00695c,stroke-width:2px,color:#000
              `}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpgCoreTask;
