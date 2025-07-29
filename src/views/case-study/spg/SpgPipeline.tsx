import React from 'react';
import { FaBug, FaPlay, FaSearch, FaTerminal } from 'react-icons/fa';

const SpgPipeline = () => {
  return (
    <section id="pipeline-considerations" className="bg-gray-50 py-16 px-6">
      <div className="px-6 py-8">
        {/* Section Heading */}
        <h2 className="font-serif text-4xl font-bold mb-8">
          4. Broader GStreamer Pipeline Considerations
        </h2>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Queue Explanation */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Queue Elements and Buffering Strategy
            </h3>
            <p className="text-gray-600 mb-6">
              The strategic use of <code className="bg-gray-100 px-1 py-0.5 rounded">queue</code> elements is paramount
              in GStreamer pipelines for achieving stability, managing latency, and ensuring smooth data flow. A queue
              element acts as a FIFO buffer, decoupling parts of the pipeline and allowing elements to operate at
              different speeds.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-3">Queue Configuration Properties:</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {/* Column 1 */}
                <div>
                  <strong>Capacity Limits:</strong>
                  <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                    <li>max-size-buffers</li>
                    <li>max-size-bytes</li>
                    <li>max-size-time</li>
                  </ul>
                </div>
                {/* Column 2 */}
                <div>
                  <strong>Behavior Control:</strong>
                  <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                    <li>leaky property</li>
                    <li>silent property</li>
                    <li>throttle property</li>
                  </ul>
                </div>
                {/* Column 3 */}
                <div>
                  <strong>Performance:</strong>
                  <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                    <li>Low-latency mode</li>
                    <li>Dynamic sizing</li>
                    <li>Jitter absorption</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Debugging Tools */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="font-serif text-lg font-bold mb-4">Debugging Tools</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <FaTerminal className='text-primary'/>
                <div>
                  <div className="font-semibold">GST_DEBUG</div>
                  <div className="text-xs text-gray-600">Environment variable for logging</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPlay className='text-green-500'/>
                <div>
                  <div className="font-semibold">gst-launch-1.0</div>
                  <div className="text-xs text-gray-600">Pipeline prototyping tool</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaBug className='text-red-500'/>
                <div>
                  <div className="font-semibold">GDB Debugger</div>
                  <div className="text-xs text-gray-600">Thread backtraces</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaSearch className='text-purple-500'/>
                <div>
                  <div className="font-semibold">Pad Probes</div>
                  <div className="text-xs text-gray-600">Data flow inspection</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Memory Leak Fixes */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="font-serif text-2xl font-bold mb-6">
            GStreamer 1.24.5 Memory Leak Fixes
          </h3>
          <p className="text-gray-600 mb-6">
            The{' '}
            <a
              href="https://gstreamer.freedesktop.org/news/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GStreamer 1.24.5 release
            </a>{' '}
            includes numerous fixes aimed at improving stability and reliability, with particular emphasis on addressing
            memory leaks that can gradually consume application memory and lead to crashes.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Fixed Components */}
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">
                <i className="fas fa-check-circle mr-2"></i>Fixed Components
              </h4>
              <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
                <li>urisourcebin reference counting leak</li>
                <li>rtpsession TWCC stats structure leak</li>
                <li>Various plugin-specific memory issues</li>
              </ul>
            </div>
            {/* Upgrade Benefits */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">
                <i className="fas fa-info-circle mr-2"></i>Upgrade Benefits
              </h4>
              <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                <li>Improved long-term stability</li>
                <li>Better resource management</li>
                <li>Enhanced performance</li>
                <li>Critical security fixes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpgPipeline;
