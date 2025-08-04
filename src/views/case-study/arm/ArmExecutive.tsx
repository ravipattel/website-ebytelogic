import React from 'react';

const ArmExecutive = () => {
  return (
    <section id="executive-summary" className="py-8 px-6 bg-white">
      <div className="md:px-6 py-8">
        <div className="accent-border pl-6 mb-8">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">Executive Summary</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 border border-slate-200 p-6 rounded-lg">
            <div className="text-3xl font-semibold text-amber-600 mb-2">$39-55</div>
            <div className="text-sm text-gray-600">Hardware Cost (vs $1,000-4,000 for traditional solutions)</div>
          </div>
          <div className="bg-gray-50 border border-slate-200 p-6 rounded-lg">
            <div className="text-3xl font-semibold text-amber-600 mb-2">250-270ms</div>
            <div className="text-sm text-gray-600">Estimated End-to-End Latency</div>
          </div>
          <div className="bg-gray-50 border border-slate-200 p-6 rounded-lg">
            <div className="text-3xl font-semibold text-amber-600 mb-2">4-8</div>
            <div className="text-sm text-gray-600">Simultaneous HD Streams (NanoPi5)</div>
          </div>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            This case study details the development of a <strong>low-cost, hardware-accelerated multiview player</strong>
            using ARM-based Single Board Computers (SBCs) targeting professional broadcast environments.
            By strategically leveraging <strong>hardware-accelerated Video Processing Units (VPUs)</strong> in
            Odroid-C2 and NanoPi5 platforms, {`we've achieved real-time decoding of multiple video streams
            while maintaining exceptional cost-effectiveness.`}
          </p>
          <p className="text-gray-600">
            The solution addresses the critical challenge of real-time multi-stream decoding on resource-constrained
            hardware through efficient VPU-based MPEG decoding, supporting UDP, SRT, and HLS protocols with HDMI
            output for professional integration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArmExecutive;
