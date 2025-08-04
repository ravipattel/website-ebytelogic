import React from "react";
import { FaChartLine, FaCheckCircle, FaCogs, FaStopwatch } from "react-icons/fa";
import { FaBugs } from "react-icons/fa6";

const QtOptimization = () => {
  return (
    <section id="qt-app" className="px-4 md:px-6 py-16 bg-slate-100">
      <div className="md:px-6 py-8">
        <h2 className="font-serif text-3xl font-bold mb-8">
          QT Application Startup Optimization
        </h2>

        {/* Profiling and Analysis */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold mb-6">
            Profiling and Analysis
          </h3>
          <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl mb-8">
            <h4 className="font-semibold mb-4">Profiling Tools and Techniques</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-3">QT Specific Tools</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <FaChartLine className="mt-1 text-primary" />
                    <div>
                      <span className="font-semibold">QML Profiler:</span> Component creation, JS execution, binding evaluation
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaStopwatch className="mt-1 text-primary" />
                    <div>
                      <span className="font-semibold">Custom Tracing:</span> High-resolution timestamps at key points
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3">General Profiling</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <FaCogs className="mt-1 text-primary" />
                    <div>
                      <span className="font-semibold">perf & gprof:</span> C++ performance analysis
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaBugs className="mt-1 text-primary" />
                    <div>
                      <span className="font-semibold">Valgrind:</span> Detailed call tracing and profiling
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <h5 className="font-semibold text-red-800 mb-2">Performance Bottleneck Example</h5>
              <p className="text-sm text-red-700">
                <a href="https://embetrix.com/tag/qt5/" className="hover:underline text-red-700" target="_blank" rel="noopener noreferrer">
                  Embetrix discovered
                </a> that an unoptimized QT application took 7.4 seconds just to reach its main function. After optimization: 0.3 seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Compilation and Linking */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold mb-6">Compilation and Linking</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
              <h4 className="font-semibold mb-4">Static vs Dynamic Linking</h4>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 border border-green-200 rounded">
                  <h5 className="font-semibold text-green-800 text-sm mb-1">Static Linking</h5>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>• Faster startup (no dynamic linking overhead)</li>
                    <li>• Single executable (19MB binary example)</li>
                    <li>• No external QT library dependencies</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                  <h5 className="font-semibold text-blue-800 text-sm mb-1">Dynamic Linking</h5>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Smaller disk footprint</li>
                    <li>• Library sharing between applications</li>
                    <li>• Use prelink to reduce relocation time</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
              <h4 className="font-semibold mb-4">QT Quick Compiler</h4>
              <p className="text-sm  mb-3">
                <a href="https://www.qt.io/blog/2016/05/25/fast-booting-qt-devices-part-3-optimizing-system-image" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Qt Quick Compiler
                </a> pre-compiles QML and JavaScript to native code.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-green-500" />
                  <span>Avoids runtime parsing and compilation</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-green-500" />
                  <span>Reduces cold boot times by 100s of ms</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-green-500" />
                  <span>Better performance on low-end hardware</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-slate-100 rounded text-xs">
                <code>QT_QUICK_COMPILER=yes</code> in qmake configuration
              </div>
            </div>
          </div>
        </div>

        {/* Resource Loading and Application Logic */}
        <div>
          <h3 className="font-serif text-2xl font-bold mb-6">
            Resource Loading and Application Logic
          </h3>
          <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
            <h4 className="font-semibold mb-4">Optimization Strategies</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h5 className="font-semibold  mb-3">Resource Management</h5>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Use Qt Resource System (qrc files)</li>
                  <li>• Consider image compression formats</li>
                  <li>• Use sourceSize in QML for images</li>
                  <li>• Asynchronous resource loading</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold  mb-3">Lazy Loading</h5>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Load only essential components first</li>
                  <li>• Use QML Loader element</li>
                  <li>• Load complex dialogs on demand</li>
                  <li>• Load secondary views when needed</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold  mb-3">Background Processing</h5>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Move CPU-intensive ops to threads</li>
                  <li>• Use QThread or QtConcurrent</li>
                  <li>• Keep QML layer lightweight</li>
                  <li>• Offload computations to C++</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h5 className="font-semibold text-blue-800 mb-2">Phased Initialization Example</h5>
              <p className="text-sm text-blue-700">
                <a href="https://www.qt.io/blog/2016/05/25/fast-booting-qt-devices-part-3-optimizing-system-image" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Automotive cluster demo
                </a> improved perceived performance by loading the cluster frame first, then animating gauges, and finally loading the 3D car model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QtOptimization;
