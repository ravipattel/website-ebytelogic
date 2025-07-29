import React from "react";
import { FaCogs, FaTools } from "react-icons/fa";

const QtAppUser = () => {
  return (
    <section id="user-space" className="py-16 px-6">
      <div className="px-6 py-8">
        <h2 className="font-serif text-3xl font-bold mb-8">
          User Space and Init System Optimization
        </h2>

        {/* Creating a Minimal Root Filesystem */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold mb-6">
            Creating a Minimal Root Filesystem
          </h3>

          <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl mb-8">
            <h4 className="font-semibold mb-4">Tools and Strategies</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-3">Build Systems</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaTools className="mt-1 text-primary" />
                    <div>
                      <span className="font-semibold">Buildroot:</span> Simple configuration, fast builds, ideal for minimal systems
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCogs className="mt-1 text-primary" />
                    <div>
                      <span className="font-semibold">Yocto Project:</span> Highly configurable, enterprise-grade, reproducible builds
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3">Size Reduction Impact</h5>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-white rounded border">
                    <span className="text-sm text-gray-600">Original size</span>
                    <span className="text-sm font-semibold">500MB</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded border border-green-200">
                    <span className="text-sm text-green-700">Optimized size</span>
                    <span className="text-sm font-semibold text-green-800">24MB</span>
                  </div>
                  <div className="text-xs text-slate-500">
                    <a
                      href="https://www.qt.io/blog/2016/05/25/fast-booting-qt-devices-part-3-optimizing-system-image"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      95% size reduction achieved
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <span className="font-semibold">Key Insight:</span> Use minimal initramfs with only essential components.{" "}
                <a
                  href="https://promwad.com/news/fast-boot-embedded-linux"
                  className="hover:underline text-amber-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consider musl libc
                </a>{" "}
                for smaller footprint and faster startup.
              </p>
            </div>
          </div>
        </div>

        {/* Optimizing the Init System */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold mb-6">
            Optimizing the Init System
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
              <h4 className="font-semibold mb-4">systemd Optimization</h4>
              <ul className="space-y-2 text-sm">
                <li>• Use systemd-analyze blame to identify slow services</li>
                <li>• Disable non-essential services</li>
                <li>• Configure parallel startup with proper dependencies</li>
                <li>• Delay non-critical services (networking, logging)</li>
              </ul>
              <div className="mt-4 p-3 bg-slate-100 rounded text-xs">
                <code>systemd-analyze critical-chain qt-application.service</code>
              </div>
            </div>
            <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
              <h4 className="font-semibold mb-4">Minimal Init Systems</h4>
              <ul className="space-y-2 text-sm">
                <li>• BusyBox init: Simple /etc/inittab configuration</li>
                <li>• Custom init script: Minimal setup, direct app launch</li>
                <li>• Pre-init approach: Launch app before main init</li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 rounded text-xs text-green-700">
                <a
                  href="https://wizzdev.com/blog/embedded-linux-boot-time-optimization-for-a-custom-application/"
                  className="hover:underline text-green-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  3.4s boot achieved
                </a>{" "}
                with custom init
              </div>
            </div>
          </div>
        </div>

        {/* Parallelizing Service Startup */}
        <div>
          <h3 className="font-serif text-2xl font-bold mb-6">
            Parallelizing Service Startup
          </h3>
          <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
            <h4 className="font-semibold mb-4">Parallel Execution Strategies</h4>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-white rounded-lg border">
                <i className="fas fa-layer-group text-blue-500 text-2xl mb-2"></i>
                <h5 className="font-semibold text-sm">System Level</h5>
                <p className="text-xs text-gray-600">Independent services start in parallel</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <i className="fas fa-code-branch text-blue-500 text-2xl mb-2"></i>
                <h5 className="font-semibold text-sm">Application Level</h5>
                <p className="text-xs text-gray-600">Async resource loading and initialization</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <i className="fas fa-tachometer-alt text-blue-500 text-2xl mb-2"></i>
                <h5 className="font-semibold text-sm">Critical Path</h5>
                <p className="text-xs text-gray-600">Prioritize essential features first</p>
              </div>
            </div>
            <div className="bg-slate-100 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">Implementation Example</h5>
              <p className="text-sm mb-2">
                <a
                  href="https://theembeddedkit.io/blog/boot-time-embedded-linux/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Embedded Kit
                </a>{" "}
                recommends making the boot process asynchronous:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Start tasks in parallel where possible</li>
                <li>• Provide user feedback during boot</li>
                <li>• Initialize critical features first</li>
                <li>• Load non-critical components in background</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QtAppUser;
