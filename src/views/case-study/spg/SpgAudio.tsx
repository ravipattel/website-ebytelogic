import React from 'react';
import { FaClock, FaMicrophone } from 'react-icons/fa';
import { FaVolumeHigh } from 'react-icons/fa6';

const SpgAudio = () => {
  return (
    <section id="audio-enhancements" className="py-16 px-6">
      <div className="px-6 py-8">
        {/* Section Heading */}
        <h2 className="font-serif text-4xl font-bold mb-8">5. Audio Processing Enhancements</h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Echo Cancellation Integration */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-4">Echo Cancellation Integration</h3>
            <p className="text-gray-600 mb-6">
              For real-time audio dubbing, especially when monitoring through speakers that can be picked up by
              microphones, echo cancellation is crucial. GStreamer offers{' '}
              <a
                href="https://gstreamer.freedesktop.org/documentation/webrtcdsp/webrtcdsp.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                webrtcdsp and webrtcechoprobe elements
              </a>{' '}
              leveraging the WebRTC Audio Processing library.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">Configuration Example:</h4>
              <code className="text-sm text-blue-800 block bg-blue-100 p-3 rounded">
                gst-launch-1.0 pulsesrc ! webrtcdsp ! webrtcechoprobe ! pulsesink
              </code>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <FaMicrophone className='text-green-500' />
                <span>High-pass filter and noise suppression</span>
              </div>
              <div className="flex items-center gap-2">
                <FaVolumeHigh className='text-primary'/>
                <span>Automatic gain control</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className='text-purple-500'/>
                <span>Latency compensation</span>
              </div>
            </div>
          </div>

          {/* Multi-Channel Audio Support */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-4">Multi-Channel Audio Support</h3>
            <p className="text-gray-600 mb-6">
              A critical fix in the{' '}
              <a
                href="https://build.opensuse.org/projects/openSUSE:Factory/packages/gstreamer-plugins-rs/files/gstreamer-plugins-rs.changes?expand=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                gstreamer-plugins-rs changelog
              </a>{' '}
              addressed channel mask handling:{' '}
              <strong className="text-gray-800">{`"ndisrc: Use default channel mask for audio output to allow`} &gt;{`2"`}</strong>.
            </p>

            <div className="space-y-4 text-sm">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-red-900">Before Fix</h4>
                <p className="text-red-800">Limited to 2-channel audio, issues with surround sound formats</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-900">After Fix</h4>
                <p className="text-green-800">Supports 5.1, 7.1, and complex channel layouts</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Supported Formats:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-yellow-800">
                <div>• Stereo (2.0)</div>
                <div>• 5.1 Surround</div>
                <div>• 7.1 Surround</div>
                <div>• Custom layouts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mermaid Diagram Placeholder */}
        <div className="chart-container">
          <h3 className="font-serif text-xl font-bold mb-4">Real-Time Audio Processing Pipeline</h3>

          {/* Mermaid controls (optional UI, can be styled further) */}
          <div className="mermaid-controls flex space-x-2 mb-2">
            <button className="mermaid-control-btn zoom-in" title="Zoom in">
              <i className="fas fa-search-plus"></i>
            </button>
            <button className="mermaid-control-btn zoom-out" title="Zoom out">
              <i className="fas fa-search-minus"></i>
            </button>
            <button className="mermaid-control-btn reset-zoom" title="Reset zoom">
              <i className="fas fa-expand-arrows-alt"></i>
            </button>
            <button className="mermaid-control-btn fullscreen" title="Fullscreen view">
              <i className="fas fa-expand"></i>
            </button>
          </div>

          <div className="mermaid" id="audio-diagram">
            {`graph LR
  A["NDI Source"] --> B["ndisrc"]
  B --> C["ndisrcdemux"]
  C --> D["Audio Stream"]
  D --> E["Queue"]
  E --> F["webrtcdsp"]
  F --> G["Echo Cancellation"]
  G --> H["Audio Sink"]
  I["Far-end Audio"] --> J["webrtcechoprobe"]
  J --> F

  style A fill:#e8f5e8,stroke:#388e3c,stroke-width:2px,color:#000
  style B fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
  style C fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px,color:#000
  style D fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#000
  style E fill:#fce4ec,stroke:#c2185b,stroke-width:2px,color:#000
  style F fill:#e0f7fa,stroke:#0097a7,stroke-width:2px,color:#000
  style G fill:#f1f8e9,stroke:#689f38,stroke-width:2px,color:#000
  style H fill:#fff8e1,stroke:#fbc02d,stroke-width:2px,color:#000
  style I fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#000
  style J fill:#e0f2f1,stroke:#00695c,stroke-width:2px,color:#000
            `}
          </div>

          <p className="text-sm text-gray-600 mt-4">
            The pipeline shows NDI audio source processing through echo cancellation to final output, with proper queue
            buffering for stability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpgAudio;
