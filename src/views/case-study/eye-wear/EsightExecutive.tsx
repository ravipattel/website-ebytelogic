import React from "react";

const EsightExecutive = () => {
  return (
    <section id="executive-summary" className="px-4 md:px-6 py-16">
      <div className="md:px-6 py-8">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
            Executive Summary
          </span>
          <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">
            Transforming User Experience Through Latency Reduction
          </h2>
        </div>
        <div>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            This case study showcases our successful engagement with eSightEyewear (now part of Gentex Corp.) to{" "}
            <span className="text-black font-semibold">drastically reduce the camera-to-display latency in their NXP i.MX8MP-based Android smart glasses</span>. The initial latency of approximately{" "}
            <span className="text-black font-semibold">250 milliseconds (ms)</span> posed a critical bottleneck, severely impacting user experience for a device designed to assist visually impaired individuals.
          </p>
          <div className="highlight-box p-6 rounded-lg mb-8 border border-amber-600">
            <h3 className="font-semibold text-amber-800 mb-3">Key Achievement</h3>
            <p className="text-amber-700 mb-4">
              Our team was tasked with achieving a <span className="font-semibold">sub-100ms latency target within a stringent one-month timeframe</span>, a challenge compounded by the{" "}
              <span className="font-semibold">absence of the camera sensor&apos;s datasheet</span>.
            </p>
            <p className="text-amber-700">
              Leveraging our deep expertise in Android framework and Hardware Abstraction Layer (HAL) customization, we not only met but{" "}
              <span className="font-semibold">exceeded this goal, delivering a solution with latency below 100ms in just 20 days</span>.
            </p>
          </div>
          <p className="text-base text-gray-600 leading-relaxed">
            This rapid turnaround and significant performance improvement, which had eluded previous efforts with larger OEMs, transformed the smart glass into a more responsive, comfortable, and effective assistive technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EsightExecutive;
