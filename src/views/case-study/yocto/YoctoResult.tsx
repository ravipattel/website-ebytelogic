import React from "react";
import { FaTrophy } from "react-icons/fa";

const YoctoResult = () => {
  return (
    <section id="the-result" className="px-4 md:px-6 py-16">
      <div className="px-4 md:px-6 py-8 ">
        <h2 className="serif text-3xl font-semibold mb-8">
          The Result: Successful On-Time Demonstration at EW24
        </h2>

        <div id="result-time-savings" className="mb-12">
          <h3 className="text-xl font-semibold mb-4">
            Significant Time Savings: 4-5 Days vs. Initial 2-Week Estimate
          </h3>
          <p className="text-gray-600 mb-6">
            The implementation of a Yocto-based development strategy, in conjunction with the Toradex Verdin i.MX8MP SoM, yielded{" "}
            <span className="text-black font-semibold">remarkable time savings</span> for Device Solution&apos;s ATDM product demonstration preparation. The initial project timeline, which estimated a{" "}
            <span className="text-black font-semibold">two-week (approximately 10-14 days) duration</span> for bringing up the display and touch screen on the custom carrier board, was dramatically reduced.
          </p>
          {/* <div className="chart-container">
            <canvas id="timelineChart"></canvas>
          </div> */}

          <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="stat-card bg-red-50 p-4 rounded shadow text-center">
              <span className="stat-number text-2xl font-bold block">5-10</span>
              <span className="text-sm text-gray-600">Days Saved</span>
            </div>
            <div className="stat-card bg-blue-50 p-4 rounded shadow text-center">
              <span className="stat-number text-2xl font-bold block">50-71%</span>
              <span className="text-sm text-gray-600">Time Reduction</span>
            </div>
            <div className="stat-card bg-red-50 p-4 rounded shadow text-center">
              <span className="stat-number text-2xl font-bold block">4-5</span>
              <span className="text-sm text-gray-600">Days Achieved</span>
            </div>
            <div className="stat-card bg-blue-50 p-4 rounded shadow text-center">
              <span className="stat-number text-2xl font-bold block">14</span>
              <span className="text-sm text-gray-600">Days Estimated</span>
            </div>
          </div>
        </div>

        <div id="result-functionality" className="mb-12">
          <h3 className="text-xl font-semibold mb-4">
            Achieved Functionality: Operational Display and Touch Screen
          </h3>
          <p className="text-gray-600 mb-6">
            The primary technical outcome of the accelerated development effort was the{" "}
            <span className="text-black font-semibold">successful integration and operation of both the display and touch screen</span> on the custom Verdin i.MX8MP-based carrier board. This meant that the ATDM product could render its graphical user interface correctly on the chosen display panel and accept user input accurately and responsively via the touch interface.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-900 mb-3">Display Functionality</h4>
              <ul className="text-sm text-green-800 space-y-2 list-disc list-inside">
                <li>Correct resolution and timings</li>
                <li>Accurate color representation</li>
                <li>Stable MIPI DSI interface</li>
                <li>Optimized display parameters</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-900 mb-3">Touch Interface</h4>
              <ul className="text-sm text-green-800 space-y-2 list-disc list-inside">
                <li>Responsive touch input</li>
                <li>Accurate coordinate mapping</li>
                <li>Calibrated touch response</li>
                <li>Integrated input subsystem</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="result-demonstration" className="mb-12">
          <h3 className="text-xl font-semibold mb-4">
            Enabled Successful ATDM Product Demonstration
          </h3>
          <p className="text-gray-600 mb-6">
            The <span>most significant overall result was the successful on-time demonstration of the ATDM product</span> at the EW24 event. By compressing the custom carrier board bring-up time from an estimated two weeks down to just 4-5 days, Device Solution was able to meet its critical deadline and effectively showcase its new product to potential customers and partners.
          </p>

          <div className="highlight-box bg-white p-6 rounded-lg border shadow mb-6">
            <h4 className="font-semibold mb-3">Business Impact</h4>
            <p className="text-gray-600">
              The operational display and touch screen were essential for this demonstration, as they formed the primary interface for interacting with the ATDM product. The ability to rapidly bring up this custom hardware and integrate it with the application software under severe time pressure highlights the effectiveness of combining a powerful, flexible build system like Yocto with a well-supported System on Module like the Toradex Verdin i.MX8MP.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <FaTrophy className="text-primary text-2xl"/>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-blue-900">Key Success Factors</h4>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-blue-800 mb-2">Technical Excellence</h5>
                <p className="text-blue-700">Yocto&apos;s efficient build system and layer mechanism</p>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 mb-2">Vendor Support</h5>
                <p className="text-blue-700">Toradex&apos;s comprehensive BSP and documentation</p>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 mb-2">Strategic Approach</h5>
                <p className="text-blue-700">Focused development on critical path items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoctoResult;
