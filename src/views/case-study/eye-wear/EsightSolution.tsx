import React from "react";
import { FaClock, FaCode, FaLightbulb } from "react-icons/fa";

const EsightSolution = () => {
  return (
    <section id="solution" className="py-16 px-6">
      <div className="px-6 py-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Our Solution: Android Framework and HAL Customization Expertise
          </h2>
        </div>

        {/* Metric Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-green-50 border border-green-300 p-6 rounded-lg">
            <div className="text-center mb-4">
              <FaClock className="text-3xl text-green-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold">Rapid Turnaround</h3>
            </div>
            <p className="text-gray-600 text-center">
              Goal achieved in <span className="text-black font-semibold">20 days</span> instead of the allotted month, accelerating the timeline by
              approximately 33%.
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/30 p-6 rounded-lg">
            <div className="text-center mb-4">
              <FaCode className="text-3xl text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold">Technical Depth</h3>
            </div>
            <p className="text-gray-600 text-center">
              Deep dive into <span className="text-black font-semibold">Android OS and Hardware Abstraction Layer (HAL)</span> customization for optimal
              performance.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-300 p-6 rounded-lg">
            <div className="text-center mb-4">
              <FaLightbulb className="text-3xl text-amber-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold">Innovation</h3>
            </div>
            <p className="text-gray-600 text-center">
              Overcame the <span className="text-black font-semibold">lack of camera sensor datasheet</span> through creative problem-solving and
              system-level optimization.
            </p>
          </div>
        </div>

        {/* Technical Approach and Innovation Without Documentation */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Approach */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Technical Approach</h3>
            <p className="text-gray-600 mb-4">
              The core of the solution involved a <span className="text-black font-semibold">deep dive into the Android operating system and its Hardware
                Abstraction Layer (HAL)</span>. The Android OS, while providing a rich application framework, can
              introduce various layers of processing and buffering that contribute to end-to-end latency.
            </p>
            <h4 className="font-semibold mb-2">Key Android Components Modified:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>CameraService optimization</li>
              <li>SurfaceFlinger composition tuning</li>
              <li>Gralloc (Graphics Memory Allocator) enhancements</li>
              <li>VSYNC synchronization mechanisms</li>
            </ul>
            <div className="tech-detail p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                The <span className="text-black font-semibold">Hardware Abstraction Layer (HAL) acts as an interface between the Android framework and
                  device-specific hardware drivers</span> (like those for the camera and display).{" "}
                <a
                  href="https://www.embedded.com/android-hardware-software-design-using-virtual-prototypes-part-3-integrating-androids-hal/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Reference]
                </a>
              </p>
            </div>
          </div>

          {/* Innovation Without Documentation */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Innovation Without Documentation</h3>
            <p className="text-gray-600 mb-4">
              The ability to achieve substantial latency reduction without access to the camera {`sensor's`} datasheet was
              a clear demonstration of innovation. This constraint forced the team to employ creative and indirect
              methods.
            </p>
            <h4 className="font-semibold mb-2">Innovative Techniques:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>System-level profiling with tools like Perfetto and Systrace</li>
              <li>Reverse-engineering sensor behavior through empirical testing</li>
              <li>Adaptive mechanisms within the Camera HAL</li>
              <li>Heuristic-based adjustments for unknown sensor characteristics</li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-blue-700 text-sm">
                <span className="font-semibold">Advanced Debugging:</span> The investigation involved using advanced debugging and profiling
                tools, such as Perfetto, to trace the flow of data and identify specific bottlenecks within the Android
                framework, HAL modules, and potentially kernel drivers.{" "}
                <a
                  href="https://medium.com/@aruncse2k20/aosp-50-qna-revision-part-2-042798b1b698"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Perfetto Guide]
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EsightSolution;
