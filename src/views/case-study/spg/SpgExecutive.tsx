import React from 'react';

const SpgExecutive = () => {
  return (
    <section className="py-8 px-6">
      <div>
        <p className="text-base text-gray-700 leading-relaxed border-l-4 border-primary pl-6 bg-gray-100 px-6 py-8">
          The enhancement of SPG Studio&apos;s real-time audio dubbing solution required integrating Network Device Interface (NDI)
          support using GStreamer&apos;s{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">gst-plugin-ndi</code> within a QML/Qt5 application. This process introduced
          challenges, particularly QML GUI instability, which were addressed by investigating GStreamer-Qt event loop integration,
          managing GStreamer pipeline states and audio sink behavior, and addressing known issues in the NDI plugin.
        </p>
      </div>
    </section>
  );
};

export default SpgExecutive;
