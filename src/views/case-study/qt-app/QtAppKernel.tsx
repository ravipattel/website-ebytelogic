import React from "react";

const QtAppKernel = () => {
  return (
    <section id="kernel" className="py-16 px-6 bg-slate-100">
      <div className="px-6 py-8">
        <h2 className="font-serif text-3xl font-bold mb-8">
          Linux Kernel Optimization Techniques
        </h2>

        {/* Minimizing Kernel Size and Configuration */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold mb-6">
            Minimizing Kernel Size and Configuration
          </h3>

          <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl mb-8">
            <h4 className="font-semibold mb-4">Configuration Optimization Strategy</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-2">Disable Unnecessary Features</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sound drivers if unused</li>
                  <li>• Unused filesystems (NTFS, Btrfs)</li>
                  <li>• IPv6 if not needed</li>
                  <li>• Debugging symbols and printk</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Performance Impact</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Kernel size reduction: 5.5MB → 1.6MB</li>
                  <li>• Boot time savings: ~3.3s with {`'quiet'`}</li>
                  <li>• Memory savings: 1-3MB by disabling SMP</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Pro Tip:</strong> Start with tinyconfig and incrementally add only essential
                drivers and features.{" "}
                <a
                  href="https://bootlin.com/doc/training/boot-time/boot-time-slides.pdf"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bootlin training materials
                </a>{" "}
                provide detailed guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Compilation and Linking Optimizations */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold mb-6">
            Compilation and Linking Optimizations
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
              <h4 className="font-semibold mb-3">Compiler Flags</h4>
              <code className="text-xs bg-slate-800 text-green-400 p-2 rounded block">
                -Os # Size optimization<br />
                CONFIG_THUMB2_KERNEL=y<br />
                CONFIG_LTO=y
              </code>
            </div>
            <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
              <h4 className="font-semibold mb-3">Compression Methods</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• LZ4: Fastest decompression</li>
                <li>• LZO: Good balance</li>
                <li>• Gzip: Better compression</li>
              </ul>
            </div>
            <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
              <h4 className="font-semibold mb-3">Linking Optimizations</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dead code elimination</li>
                <li>• Garbage collection</li>
                <li>• Correct load addresses</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-100 p-6 rounded-xl">
            <h4 className="font-semibold mb-3">Thumb-2 Performance Impact</h4>
            <p className="text-sm mb-2">
              <a
                href="https://bootlin.com/doc/training/boot-time/boot-time-slides.pdf"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bootlin demonstrated
              </a>{" "}
              significant size reductions with Thumb-2 compilation:
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 19% reduction in total filesystem size</li>
              <li>• 20% reduction in binary size</li>
              <li>• 2% performance improvement</li>
            </ul>
          </div>
        </div>

        {/* Device Tree Optimization */}
        <div>
          <h3 className="font-serif text-2xl font-bold mb-6">Device Tree Optimization</h3>
          <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
            <h4 className="font-semibold mb-4">DTB Optimization Strategies</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-2">Remove Unused Nodes</h5>
                <p className="text-sm text-gray-600 mb-2">
                  Disable or remove peripherals not required for the application:
                </p>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• Unused I2C/SPI controllers</li>
                  <li>• Unnecessary UART interfaces</li>
                  <li>• Unused display controllers</li>
                  <li>• Unused network interfaces</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Performance Impact</h5>
                <p className="text-sm text-gray-600 mb-2">
                  <a
                    href="https://www.embeddedartists.com/wp-content/uploads/2020/11/iMX_Boot_Times.pdf"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Embedded Artists achieved
                  </a>{" "}
                  130ms reduction by disabling unused peripherals.
                </p>
                <div className="text-xs text-slate-500">
                  Benefits: Smaller DTB size, faster loading, reduced kernel probing overhead
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QtAppKernel;
