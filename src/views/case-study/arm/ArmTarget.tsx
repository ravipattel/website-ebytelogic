import React from 'react';
import { FaBroadcastTower, FaDesktop, FaVideo } from 'react-icons/fa';

const ArmTarget = () => {
  return (
    <section id="target-market" className="px-4 md:px-6 py-16 bg-slate-50">
      <div className="md:px-6 py-8">
        <h2 className="font-serif text-4xl font-bold mb-8">
          2. Target Market and Primary Use Cases
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Professional Broadcast Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <FaBroadcastTower className='text-amber-600 text-xl' />
            </div>
            <h3 className="font-semibold mb-3">Professional Broadcast</h3>
            <p className="text-sm text-gray-600">
              Television, radio, and online streaming platforms requiring simultaneous monitoring of multiple
              incoming video feeds for signal integrity and content quality.
            </p>
          </div>

          {/* Control Room Monitoring Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <FaDesktop className='text-amber-600 text-xl' />
            </div>
            <h3 className="font-semibold mb-3">Control Room Monitoring</h3>
            <p className="text-sm text-gray-600">
              Nerve centers of live production facilities where engineers need to oversee numerous video sources on a
              single display or video wall{' '}
              <a
                href="https://bzbgear.com/blog/what-is-a-multiviewer-and-its-advantages-in-the-av-industry/"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                [61]
              </a>
              .
            </p>
          </div>

          {/* Live Event Streaming Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <FaVideo className='text-amber-600 text-xl' />
            </div>
            <h3 className="font-semibold mb-3">Live Event Streaming</h3>
            <p className="text-sm text-gray-600">
              Concerts, conferences, and sports events requiring portable, cost-effective monitoring solutions with
              SRT support for unpredictable networks.
            </p>
          </div>
        </div>

        {/* Key Application Scenarios Section */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="font-serif text-2xl font-semibold mb-6">Key Application Scenarios</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Broadcast Infrastructure Integration */}
            <div>
              <h4 className="font-semibold mb-3">Broadcast Infrastructure Integration</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Incoming camera feed monitoring</li>
                <li>• Satellite receiver status tracking</li>
                <li>• Contribution encoder validation</li>
                <li>• Output stream verification</li>
              </ul>
            </div>

            {/* Mobile Production Capabilities */}
            <div>
              <h4 className="font-semibold mb-3">Mobile Production Capabilities</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Flypack and mobile broadcast kits</li>
                <li>• Field monitor integration via HDMI</li>
                <li>• Remote location monitoring with SRT</li>
                <li>• HLS output verification for OTT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArmTarget;
