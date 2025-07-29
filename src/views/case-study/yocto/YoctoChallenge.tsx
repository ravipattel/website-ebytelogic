import React from 'react';

const YoctoChallenge = () => {
  return (
    <section id="the-challenge" className="py-16 px-6">
      <div className="px-6 py-8">
        <h2 className="serif text-3xl font-semibold mb-8">
          The Challenge: Tight Timelines for EW24 Demonstration
        </h2>

        <div id="challenge-timeline" className="mb-12">
          <h3 className="text-xl font-semibold mb-4">
            Initial Time Estimate vs. Actual Deadline Pressure
          </h3>
          <p className="text-gray-600 mb-6">
            The primary challenge faced by Device Solution was an <span className='text-black font-semibold'>extremely compressed timeline</span> for preparing a demonstration
            of their ATDM product for the EW24 event. The initial project scope, which involved bringing up a display and touch screen on a
            custom carrier board utilizing Toradex&apos;s Verdin i.MX8MP System on Module (SoM), was estimated to require approximately{' '}
            <span className='text-black font-semibold'>two weeks (around 10-14 business days)</span>.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <i className="fas fa-exclamation-triangle text-red-400" aria-hidden="true"></i>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  The demonstration at EW24 was critical for Device Solution to showcase their ATDM product&apos;s capabilities to potential clients
                  and partners, making adherence to the event&apos;s schedule non-negotiable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="challenge-hardware" className="mb-12">
          <h3 className="text-xl font-semibold mb-4">
            Custom Hardware Integration: Verdin i.MX8MP SoM and Custom Carrier Board
          </h3>
          <p className="text-gray-600 mb-6">
            The core technical challenge involved integrating a <span className='text-black font-semibold'>Toradex Verdin i.MX8MP SoM</span> onto a <span className='text-black font-semibold'>custom-designed carrier
            board</span>. This process required ensuring that the SoM&apos;s capabilities were correctly extended to the new carrier board&apos;s
            peripherals, most notably the display and touch screen.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Hardware Complexities</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Signal integrity management</li>
                <li>• Power management configuration</li>
                <li>• Interface configuration (MIPI DSI, I2C/SPI)</li>
                <li>• Custom carrier board design constraints</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Software Requirements</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Linux kernel driver configuration</li>
                <li>• Bootloader customization</li>
                <li>• Device tree modifications</li>
                <li>• Display and touch calibration</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="challenge-functionality" className="mb-12">
          <h3 className="text-xl font-semibold mb-4">
            Critical Functionality: Display and Touch Screen Operation
          </h3>
          <p className="text-gray-600 mb-6">
            For the ATDM product demonstration, <span className='text-black font-semibold'>achieving fully operational display and touch screen functionalities was paramount</span>.
            The ATDM product&apos;s user interface and interactive capabilities relied entirely on these two components.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-blue-900 mb-3">Essential Requirements</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-blue-800 mb-2">Display Functionality</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Correct resolution and timing</li>
                  <li>• Accurate color representation</li>
                  <li>• MIPI DSI interface configuration</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 mb-2">Touch Interface</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Responsive touch input</li>
                  <li>• Accurate coordinate mapping</li>
                  <li>• I2C/SPI interface integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoctoChallenge;
