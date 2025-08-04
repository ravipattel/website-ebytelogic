import React from 'react';

const YoctoExecutive = () => {
  return (
    <section id="executive-summary" className="py-8 px-6">
      <div className="md:px-6 py-8">
        <h2 className="serif text-3xl font-semibold mb-8">Executive Summary</h2>

        <div className="highlight-box mb-10">
          <h3 className="text-lg font-semibold mb-4">Key Achievement</h3>
          <p className="text-gray-600">
            Device Solution successfully accelerated the bring-up of a custom carrier board featuring a Toradex
            Verdin i.MX8MP SoM from an initial estimate of two weeks to just{' '}
            <span className="text-primary">4-5 days</span>. This rapid development, achieved by leveraging the Yocto
            Project and Toradex&apos;s BSP, enabled the critical integration of display and touch screen functionalities
            in time for a crucial product demonstration at the EW24 event.
          </p>
        </div>

        <div className="mb-12">
          <p>
            This case study details how <span className='text-black font-semibold'>Device Solution successfully navigated a critical time constraint</span>{' '}
            to bring up a custom carrier board with operational display and touch screen capabilities for their ATDM product
            demonstration at the EW24 event. Faced with an initial two-week estimate for this development, the team leveraged
            the <span className='text-black font-semibold'>Yocto Project and the Toradex Verdin i.MX8MP System on Module (SoM)</span> ecosystem to achieve the
            necessary functionality in an accelerated timeframe of <span className="text-primary">4-5 days</span>.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="stat-card bg-gray-50 p-6 rounded-lg shadow">
            <span className="stat-number text-4xl font-bold">4-5</span>
            <span className="text-sm text-gray-600 block mt-1">Days Achieved</span>
          </div>
          <div className="stat-card bg-gray-50 p-6 rounded-lg shadow">
            <span className="stat-number text-4xl font-bold">14</span>
            <span className="text-sm text-gray-600 block mt-1">Days Estimated</span>
          </div>
          <div className="stat-card bg-gray-50 p-6 rounded-lg shadow">
            <span className="stat-number text-4xl font-bold">71%</span>
            <span className="text-sm text-gray-600 block mt-1">Time Reduction</span>
          </div>
          <div className="stat-card bg-gray-50 p-6 rounded-lg shadow">
            <span className="stat-number text-4xl font-bold">2</span>
            <span className="text-sm text-gray-600 block mt-1">Critical Interfaces</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoctoExecutive;
