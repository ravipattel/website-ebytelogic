import React from 'react';

const QtAppCase = () => {
  return (
    <section id="case-studies" className="px-4 md:px-6 py-16 bg-slate-100">
      <div className="md:px-6 py-8">
        <h2 className="font-serif text-3xl font-bold mb-8">
          Case Studies and Real-World Examples
        </h2>

        {/* i.MX6 Sub-10-Second Boot Implementations */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold mb-6">
            i.MX6 Sub-10-Second Boot Implementations
          </h3>
          <div className="border-l-4 border-l-primary shadow-md bg-white p-6 rounded-xl mb-8">
            <h4 className="font-semibold mb-4">
              Qt Automotive Cluster Demo - 1.56s Boot Time
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-3">Optimization Steps</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Root filesystem: 500MB → 24MB (Buildroot)</li>
                  <li>• Kernel size: 5.5MB → 1.6MB</li>
                  <li>• U-Boot SPL (Falcon Mode) enabled</li>
                  <li>• Console disabled</li>
                  <li>• Static linking of QT application</li>
                  <li>• Kernel compression: gzip → LZO</li>
                  <li>• Network stack removed</li>
                  <li>• Prelink root filesystem</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3">Performance Results</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-red-50 border border-red-200 rounded">
                    <span className="text-sm text-red-700">Initial boot time</span>
                    <span className="text-sm font-semibold text-red-800">22.8s</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 border border-green-200 rounded">
                    <span className="text-sm text-green-700">Optimized boot time</span>
                    <span className="text-sm font-semibold text-green-800">1.56s</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 border border-blue-200 rounded">
                    <span className="text-sm text-blue-700">Reduction</span>
                    <span className="text-sm font-semibold text-blue-800">93%</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-slate-100 rounded text-xs">
                  <a
                    href="https://www.qt.io/blog/2016/05/25/fast-booting-qt-devices-part-3-optimizing-system-image"
                    className="citation-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source: Qt.io Case Study
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* i.MX6Q SDB Fast Boot */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-l-4 border-l-primary shadow-md bg-white p-6 rounded-xl">
              <h4 className="font-semibold mb-3">i.MX6Q SDB Fast Boot</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Boot time to login:</span>
                  <span className="font-semibold text-green-600">0.9s</span>
                </div>
                <div className="flex justify-between">
                  <span>Method:</span>
                  <span className="font-semibold">Falcon Mode</span>
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  <a
                    href="https://imxdev.gitlab.io/video/tutorial/Booting-iMX6-under-one-second/"
                    className="citation-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    i.MXDev tutorial
                  </a>
                </div>
              </div>
            </div>
            <div className="border-l-4 border-l-primary shadow-md bg-white p-6 rounded-xl">
              <h4 className="font-semibold mb-3">Witekio Optimization</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Time saved:</span>
                  <span className="font-semibold text-green-600">3.6s</span>
                </div>
                <div className="flex justify-between">
                  <span>Method:</span>
                  <span className="font-semibold">SPL + Falcon Mode</span>
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  <a
                    href="https://witekio.com/blog/a-challenge-called-boot-time-3/"
                    className="citation-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Witekio blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exynos 4412 Implementations */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold mb-6">
            Exynos 4412 Implementations
          </h3>
          <div className="border-l-4 border-l-primary shadow-md bg-white p-6 rounded-xl mb-8">
            <h4 className="font-semibold mb-4">FriendlyCore Distribution</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-3">Target Performance</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 10-second timeout for autologin</li>
                  <li>• Qt/Embedded target environment</li>
                  <li>• FriendlyELEC board optimization</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3">Key Techniques</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• U-Boot optimization for Exynos</li>
                  <li>• Mali-400 GPU acceleration</li>
                  <li>• Minimal root filesystem</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-slate-100 rounded text-xs">
              <a
                href="https://wiki.friendlyelec.com/wiki/index.php/FriendlyCore_(based_on_ubuntu-core_with_Qt)"
                className="citation-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                FriendlyElec Documentation
              </a>
            </div>
          </div>
        </div>

        {/* General ARM Cortex-A Success Stories */}
        <div>
          <h3 className="font-serif text-2xl font-bold mb-6">
            General ARM Cortex-A Success Stories
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-l-primary shadow-md bg-white p-6 rounded-xl">
              <h4 className="font-semibold mb-3">Embetrix 1-Second Boot</h4>
              <div className="space-y-2 text-sm">
                <li>• Custom init script (/sbin/preinit)</li>
                <li>• Application before main init</li>
                <li>• Static linking where possible</li>
                <li>• Prelink for dynamic linking</li>
                <li>• Qt Quick Compiler enabled</li>
              </div>
              <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded text-xs text-green-700">
                <a
                  href="https://embetrix.com/tag/qt5/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Embetrix blog
                </a>
              </div>
            </div>
            <div className="border-l-4 border-l-primary shadow-md bg-white p-6 rounded-xl">
              <h4 className="font-semibold mb-3">WizzDev Custom Application</h4>
              <div className="space-y-2 text-sm">
                <li>• Custom service with DefaultDependencies=no</li>
                <li>• WantedBy=swap.target</li>
                <li>• Early startup sequencing</li>
                <li>• Logic analyzer measurement</li>
              </div>
              <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-700">
                <a
                  href="https://wizzdev.com/blog/embedded-linux-boot-time-optimization-for-a-custom-application/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Result: 3.4s → 2.9s
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QtAppCase;
