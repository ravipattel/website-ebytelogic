import React from 'react';

const QtAppHardware = () => {
  return (
    <section id="hardware" className="py-16 px-6">
      <div className="px-6 py-8">
        <h2 className="font-serif text-3xl font-bold mb-8">
          Hardware and Platform Specific Considerations
        </h2>

        {/* Storage Media Optimization */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold mb-6">
            Storage Media Optimization
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
              <h4 className="font-semibold mb-4">eMMC vs SD Card</h4>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">eMMC Advantages</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Higher sequential read/write speeds</li>
                    <li>• Better I/O performance</li>
                    <li>• 8-bit interface vs 1/4-bit SD</li>
                    <li>• Direct SoC connection</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">Mixed Configuration</h5>
                  <p className="text-sm text-primary">
                    <a
                      href="https://www.qt.io/blog/2016/05/25/fast-booting-qt-devices-part-3-optimizing-system-image"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Case study found
                    </a>{' '}
                    U-Boot + kernel on SD card + rootfs on eMMC was optimal.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
              <h4 className="font-semibold mb-4">Filesystem Optimization</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-sm mb-2">ext4 Options</h5>
                  <code className="text-xs bg-slate-800 text-green-400 p-2 rounded block">
                    noatime,nodiratime,data=writeback
                  </code>
                </div>
                <div>
                  <h5 className="font-semibold text-sm mb-2">Read-Only Options</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• initramfs: Fast RAM-based rootfs</li>
                    <li>• Squashfs: Compressed read-only</li>
                    <li>• Overlayfs: Read-only base + writable overlay</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-sm mb-2">SD Card Considerations</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Use Class 10 or UHS-I cards</li>
                    <li>• Increase SD controller clock</li>
                    <li>• Optimize partition layout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hardware Acceleration */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold mb-6">Hardware Acceleration</h3>
          <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl mb-8">
            <h4 className="font-semibold mb-4">GPU Acceleration for QT Applications</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-3">Platform GPUs</h5>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-100 rounded">
                    <h6 className="font-semibold text-sm">Exynos 4412</h6>
                    <p className="text-xs text-gray-600">Mali-400 MP4 GPU</p>
                    <p className="text-xs text-gray-600">OpenGL ES 2.0, 45nm process</p>
                  </div>
                  <div className="p-3 bg-slate-100 rounded">
                    <h6 className="font-semibold text-sm">i.MX6Q</h6>
                    <p className="text-xs text-gray-600">Vivante GC2000/GC355</p>
                    <p className="text-xs text-gray-600">OpenGL ES 2.0, 2D/3D acceleration</p>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-semibold mb-3">QT Platform Plugins</h5>
                <div className="space-y-2">
                  <div className="p-3 bg-green-50 border border-green-200 rounded">
                    <h6 className="font-semibold text-green-800 text-sm">eglfs (Recommended)</h6>
                    <p className="text-xs text-green-700">EGL Full Screen, GPU acceleration</p>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                    <h6 className="font-semibold text-blue-800 text-sm">linuxfb</h6>
                    <p className="text-xs text-blue-700">Linux Framebuffer, no GPU acceleration</p>
                  </div>
                  <div className="p-3 bg-purple-50 border border-purple-200 rounded">
                    <h6 className="font-semibold text-purple-800 text-sm">wayland</h6>
                    <p className="text-xs text-purple-700">Wayland protocol, modern alternative</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <strong>Configuration:</strong>{' '}
                <a
                  href="https://www.chipsee.com/docs/PCs/ARM/iMX6Q/Manuals/Software/Linux_Qt_5.5_OS_on_iMX6Q_User_Manual.pdf"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Set QT_QPA_PLATFORM=eglfs
                </a>{' '}
                and ensure proper GPU drivers are loaded in kernel.
              </p>
            </div>
          </div>
        </div>

        {/* Power Management and Sleep Modes */}
        <div>
          <h3 className="font-serif text-2xl font-bold mb-6">
            Power Management and Sleep Modes
          </h3>
          <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
            <h4 className="font-semibold mb-4">Sleep Modes vs Cold Boot</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-3">Low-Power Modes</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Deep Sleep Mode (DSM): ARM cores off, DRAM refresh</li>
                  <li>• Suspend-to-RAM: Fast resume via BootROM</li>
                  <li>• Power Management IC control</li>
                </ul>
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded">
                  <p className="text-xs text-green-700">
                    <a
                      href="https://community.nxp.com/t5/i-MX-Processors/Booting-Linux-in-less-than-one-second-on-i-MX-platform/m-p/354759"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      i.MX6 resume times
                    </a>{' '}
                    approaching 1 second possible.
                  </p>
                </div>
              </div>
              <div>
                <h5 className="font-semibold mb-3">Power Consumption Trade-offs</h5>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 border border-red-200 rounded">
                    <h6 className="font-semibold text-red-800 text-sm">Active Mode</h6>
                    <p className="text-xs text-red-700">Linux: Good efficiency, higher than MCUs</p>
                  </div>
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                    <h6 className="font-semibold text-yellow-800 text-sm">Sleep Mode</h6>
                    <p className="text-xs text-yellow-700">
                      DRAM refresh: 10mA+, limiting battery life
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                    <h6 className="font-semibold text-blue-800 text-sm">Comparison</h6>
                    <p className="text-xs text-blue-700">Apple Watch: 18h vs Pebble: 10 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QtAppHardware;
