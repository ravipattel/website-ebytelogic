import React from 'react';

const SpgDeployment = () => {
  return (
    <section id="deployment" className="bg-gray-50 py-16 px-6">
      <div className="px-6 py-8">
        {/* Heading */}
        <h2 className="font-serif text-4xl font-bold mb-8">6. Deployment and Environment</h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Rust Plugin Integration */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-4">Rust Plugin Integration</h3>
            <p className="text-gray-600 mb-6">
              The{' '}
              <a
                href="https://github.com/teltek/gst-plugin-ndi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                GStreamer NDI plugin, gst-plugin-ndi, is implemented in Rust
              </a>
              , requiring special consideration for deployment across different platforms.
            </p>

            <div className="space-y-4">
              {/* Deployment Requirements */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Deployment Requirements:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Rust compilation toolchain</li>
                  <li>• GST_PLUGIN_PATH configuration</li>
                  <li>• Platform-specific binary packaging</li>
                </ul>
              </div>

              {/* Supported Platforms */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Supported Platforms:</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Android and iOS mobile</li>
                  <li>• macOS and Windows desktop</li>
                  <li>• Linux distributions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* NDI SDK Runtime Loading */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-4">NDI SDK Runtime Loading</h3>
            <p className="text-gray-600 mb-6">
              The gst-plugin-ndi relies on the NDI SDK, which must be installed on the system and loaded at runtime
              with specific environment variable configuration.
            </p>

            <div className="space-y-4">
              {/* Env Vars */}
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-blue-900">Environment Variables</h4>
                <div className="text-sm text-gray-600 mt-2 space-y-1">
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">NDI_RUNTIME_DIR_V5</code> – Version 5.x SDK
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">NDI_RUNTIME_DIR_V6</code> – Version 6.x SDK
                  </div>
                </div>
              </div>

              {/* Search Order */}
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-900">Search Order</h4>
                <ol className="text-sm text-gray-600 mt-2 list-decimal list-inside space-y-1">
                  <li>Environment variable paths</li>
                  <li>System library paths</li>
                  <li>Default installation locations</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Checklist */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="font-serif text-2xl font-bold mb-6">Deployment Checklist</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Prerequisites */}
            <div>
              <h4 className="font-semibold  mb-4">Prerequisites</h4>
              <div className="space-y-3">
                {[
                  'GStreamer 1.24.5+ installed',
                  'NDI SDK (v5.x or v6.x) available',
                  'Environment variables configured',
                  'Rust toolchain for plugin compilation',
                ].map((label, i) => (
                  <label key={i} className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" checked disabled className="w-4 h-4 text-blue-600 rounded" />
                    <span className="text-sm text-gray-600">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Verification Steps */}
            <div>
              <h4 className="font-semibold  mb-4">Verification Steps</h4>
              <div className="space-y-3">
                {[
                  'Plugin loads successfully',
                  'NDI sources discoverable',
                  'Audio streaming functional',
                  'GUI remains responsive',
                ].map((label, i) => (
                  <label key={i} className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" checked disabled className="w-4 h-4 text-green-600 rounded" />
                    <span className="text-sm text-gray-600">{label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpgDeployment;
