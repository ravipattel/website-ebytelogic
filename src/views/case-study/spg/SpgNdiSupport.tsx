import React from 'react';

const SpgNdiSupport = () => {
  return (
    <section id="ndi-support" className="bg-gray-50 py-16 px-6">
      <div className="md:px-6 py-8">
        {/* Section Heading */}
        <h2 className="font-serif text-4xl font-bold mb-8">2. NDI Support with GStreamer</h2>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">GStreamer NDI Plugin Overview</h3>
            <p className="text-gray-600 mb-6">
              The{' '}
              <a
                href="https://github.com/teltek/gst-plugin-ndi"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GStreamer NDI plugin, gst-plugin-ndi
              </a>{' '}
              provides the necessary elements to discover, receive, and send NDI streams. This plugin, often developed
              in Rust and part of the{' '}
              <a
                href="https://github.com/GStreamer/gst-plugins-rs"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                gst-plugins-rs project
              </a>
              , acts as a bridge between GStreamer and the NewTek NDI SDK.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold  mb-3">Key Features:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Core Elements:</strong>
                  <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                    <li>
                      <code className="bg-gray-100 px-1 py-0.5 rounded">ndisrc</code> - Receiving NDI streams
                    </li>
                    <li>
                      <code className="bg-gray-100 px-1 py-0.5 rounded">ndisink</code> - Transmitting NDI streams
                    </li>
                    <li>Device provider for discovery</li>
                  </ul>
                </div>
                <div>
                  <strong>Advanced Capabilities:</strong>
                  <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                    <li>Closed caption support</li>
                    <li>Zero-copy output support</li>
                    <li>Multi-version SDK compatibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: SDK Versions */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="font-serif text-lg font-bold mb-4">NDI SDK Versions</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="font-semibold text-blue-900">Version 5.x</div>
                <div className="text-sm text-gray-600">Legacy support via NDI_RUNTIME_DIR_V5</div>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <div className="font-semibold text-green-900">Version 6.x</div>
                <div className="text-sm text-gray-600">Latest features via NDI_RUNTIME_DIR_V6</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              <a
                href="https://gstreamer.freedesktop.org/news/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GStreamer 1.24.5
              </a>{' '}
              added explicit support for NDI SDK v6
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="chart-container">
          <h3 className="font-serif text-xl font-bold mb-4">NDI Element Properties</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Element</th>
                  <th className="px-6 py-4 text-left font-semibold">Key Property</th>
                  <th className="px-6 py-4 text-left font-semibold">Description</th>
                  <th className="px-6 py-4 text-left font-semibold">Example Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono bg-blue-50">ndisrc</td>
                  <td className="px-6 py-4 font-mono">ndi-name</td>
                  <td className="px-6 py-4 text-gray-600">Name of the NDI sender to connect to</td>
                  <td className="px-6 py-4 font-mono bg-gray-50">&quot;GC-DEV2 (OBS)&quot;</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono bg-blue-50">ndisrc</td>
                  <td className="px-6 py-4 font-mono">bandwidth</td>
                  <td className="px-6 py-4 text-gray-600">Desired bandwidth for received stream</td>
                  <td className="px-6 py-4 font-mono bg-gray-50">audio-only</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono bg-blue-50">ndisrc</td>
                  <td className="px-6 py-4 font-mono">connect-timeout</td>
                  <td className="px-6 py-4 text-gray-600">Connection timeout in milliseconds</td>
                  <td className="px-6 py-4 font-mono bg-gray-50">5000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono bg-green-50">ndisink</td>
                  <td className="px-6 py-4 font-mono">ndi-name</td>
                  <td className="px-6 py-4 text-gray-600">Name under which source is discoverable</td>
                  <td className="px-6 py-4 font-mono bg-gray-50">&quot;My NDI source&quot;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            <i className="fas fa-info-circle mr-2"></i>
            Properties documentation from{' '}
            <a
              href="https://gstreamer.freedesktop.org/documentation/ndi/ndisrc.html"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GStreamer Documentation
            </a>{' '}
            and implementation examples.
          </p>
        </div>

        {/* Warning Block */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mt-8">
          <h4 className="font-semibold text-yellow-900 mb-2">
            <i className="fas fa-exclamation-triangle mr-2"></i> Critical Audio Consideration
          </h4>
          <p className="text-yellow-800 text-sm">
            A known issue exists with{' '}
            <a
              href="https://github.com/teltek/gst-plugin-ndi/issues/118"
              className="text-yellow-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ndisrc&apos;s ability to open certain NDI streams containing audio
            </a>
            , even when playable in other NDI tools. This was addressed with{' '}
            <a
              href="https://build.opensuse.org/projects/openSUSE:Factory/packages/gstreamer-pluginsrs/files/gstreamer-plugins-rs.changes?expand=0"
              className="text-yellow-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              &quot;Use default channel mask for audio output to allow &gt;2&quot;
            </a>{' '}
            fix.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpgNdiSupport;
