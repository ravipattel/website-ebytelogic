import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const QtAppIntro = () => {
  return (
    <section id="introduction" className="px-4 md:px-6 py-16">
      <div className="md:px-6 py-8">
        <h2 className="font-serif text-3xl font-bold mb-8">
          The Challenge of Fast Boot Times
        </h2>
        <div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Achieving a sub-10-second boot time for embedded Linux systems with QT applications on Exynos 4412 and
            i.MX6Q platforms is a challenging but attainable goal. It requires a holistic optimization strategy
            targeting the bootloader (U-Boot), Linux kernel, root filesystem, init system, and the QT application itself.
          </p>
          <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl mb-8">
            <h3 className="font-serif text-xl font-bold mb-4">Key Optimization Strategies</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-primary" />Minimizing component sizes and removing unused features
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-primary" />Leveraging platform-specific fast boot modes like Falcon Mode
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-primary" />Parallelizing startup processes
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-primary" />Carefully profiling each stage to identify bottlenecks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QtAppIntro;
