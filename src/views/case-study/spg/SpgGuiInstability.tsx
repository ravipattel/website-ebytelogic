import React from 'react';

const SpgGuiInstability = () => {
  return (
    <section id="gui-stability" className="px-4 md:px-6 py-16">
      <div className="md:px-6 py-8">
        {/* Section Title */}
        <h2 className="font-serif text-4xl font-bold mb-8">
          3. Diagnosing and Resolving GUI Instability
        </h2>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Root Cause Analysis */}
          <div className="p-8 rounded-xl shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-4">Root Cause Analysis</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">GStreamer Bus Handling</h4>
                  <p className="text-sm text-gray-600">
                    Improper processing of bus messages can fill queues and cause stalls.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Threading Conflicts</h4>
                  <p className="text-sm text-gray-600">
                    GStreamer callbacks manipulating QML elements without synchronization.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Memory Management</h4>
                  <p className="text-sm text-gray-600">
                    Leaks or access to freed memory in NDI integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Event Loop Integration */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-4">Event Loop Integration</h3>
            <p className="text-gray-600 mb-4">
              The integration of GStreamer’s event handling with Qt’s main event loop is critical for GUI stability.{' '}
              <a
                href="https://gstreamer.freedesktop.org/bindings/qt.html"
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                QtGStreamer bindings
              </a>{' '}
              provide proper Qt event loop integration for GstBus, though they are currently unmaintained.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Integration Approaches:</h4>
              <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                <li>GLib main context integration</li>
                <li>QSocketNotifier mechanisms</li>
                <li>Periodic bus polling from Qt timers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpgGuiInstability;
