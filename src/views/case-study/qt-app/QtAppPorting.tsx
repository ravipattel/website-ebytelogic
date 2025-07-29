import React from 'react';

const QtAppPorting = () => {
  return (
    <section id="porting" className="py-16 px-6">
      <div className="px-6 py-8">
        <h2 className="font-serif text-3xl font-bold mb-8">
          Porting Considerations for Multiple Operating Systems
        </h2>

        {/* Linux Distribution Adaptations */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold mb-6">
            Linux Distribution Adaptations
          </h3>
          <div className="border-l-4 border-primary shadow-md p-6 rounded-xl mb-8">
            <h4 className="font-semibold mb-4">Cross-Distribution Optimization Challenges</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h5 className="font-semibold mb-3">Init Systems</h5>
                <div className="space-y-2">
                  <div className="p-3 bg-slate-100 rounded">
                    <h6 className="font-semibold text-sm">systemd</h6>
                    <p className="text-xs text-gray-600">Modern, parallel startup</p>
                    <p className="text-xs text-gray-600">systemd-analyze tools</p>
                  </div>
                  <div className="p-3 bg-slate-100 rounded">
                    <h6 className="font-semibold text-sm">SysVinit</h6>
                    <p className="text-xs text-gray-600">Sequential startup</p>
                    <p className="text-xs text-gray-600">/etc/inittab configuration</p>
                  </div>
                  <div className="p-3 bg-slate-100 rounded">
                    <h6 className="font-semibold text-sm">BusyBox init</h6>
                    <p className="text-xs text-gray-600">Minimal, single-purpose</p>
                    <p className="text-xs text-gray-600">Simple configuration</p>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-semibold mb-3">Package Management</h5>
                <div className="space-y-2">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                    <h6 className="font-semibold text-blue-800 text-sm">apt (Debian/Ubuntu)</h6>
                    <p className="text-xs text-blue-700">.deb packages, dpkg system</p>
                  </div>
                  <div className="p-3 bg-red-50 border border-red-200 rounded">
                    <h6 className="font-semibold text-red-800 text-sm">yum/dnf (CentOS)</h6>
                    <p className="text-xs text-red-700">.rpm packages, RedHat ecosystem</p>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded">
                    <h6 className="font-semibold text-green-800 text-sm">opkg (Embedded)</h6>
                    <p className="text-xs text-green-700">Lightweight, embedded focus</p>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-semibold mb-3">Kernel Variations</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Distribution-specific patches</li>
                  <li>• Different kernel versions</li>
                  <li>• Default configuration changes</li>
                  <li>• Filesystem and mount options</li>
                  <li>• QT version and build flags</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <span className='font-semibold'>Recommendation:</span> Use source-based build systems like Yocto or Buildroot for
                distribution-agnostic minimal systems, rather than trying to strip down general-purpose
                distributions.
              </p>
            </div>
          </div>
        </div>

        {/* Android Boot Optimization */}
        <div>
          <h3 className="font-serif text-2xl font-bold mb-6">
            Android Boot Optimization
          </h3>
          <div className="shadow-md p-6 rounded-xl">
            <h4 className="font-semibold mb-4">Android-Specific Optimization Layers</h4>
            <div className="mb-6">
              {/* Mermaid Diagram: Android Boot Process */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6 shadow-sm">
                <h5 className="font-semibold mb-4">Android Boot Process Flow</h5>
                <div className="mermaid-container">
                  <div className="mermaid-controls">
                    <button className="mermaid-control-btn zoom-in" title="放大">
                      <i className="fas fa-search-plus"></i>
                    </button>
                    <button className="mermaid-control-btn zoom-out" title="缩小">
                      <i className="fas fa-search-minus"></i>
                    </button>
                    <button className="mermaid-control-btn reset-zoom" title="重置">
                      <i className="fas fa-expand-arrows-alt"></i>
                    </button>
                    <button className="mermaid-control-btn fullscreen" title="全屏查看">
                      <i className="fas fa-expand"></i>
                    </button>
                  </div>
                  <div className="mermaid">
                    {` flowchart TD
                    A["Bootloader"] --> B["Linux Kernel"]
                    B --> C["Android Init"]
                    C --> D["Zygote"]
                    D --> E["System Server"]
                    E --> F["Launcher"]
                    A -.- A1["Fastboot"]
                    A -.- A2["LK/Little Kernel"]
                    C -.- C1["init.rc scripts"]
                    C -.- C2["Service management"]
                    D -.- D1["Class preloading"]
                    D -.- D2["Resource loading"]
                    style A fill:#1e3a5f,color:#fff,stroke:#1e3a5f
                    style B fill:#2d5a87,color:#fff,stroke:#2d5a87
                    style C fill:#4f83bf,color:#fff,stroke:#4f83bf
                    style D fill:#2d5a87,color:#fff,stroke:#2d5a87
                    style E fill:#4f83bf,color:#fff,stroke:#4f83bf
                    style F fill:#1e3a5f,color:#fff,stroke:#1e3a5f`}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-3">Early Boot Optimization</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Bootloader: Minimize features, reduce delay</li>
                  <li>• Kernel: Remove debugging, disable unused modules</li>
                  <li>• Android Init: Optimize init.rc scripts</li>
                  <li>• Use class_start for parallel service startup</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3">Android-Specific Optimizations</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Zygote: Optimize classpath and resources</li>
                  <li>• System Server: Delay non-critical services</li>
                  <li>• I/O Optimization: Use f2fs, enable trim</li>
                  <li>• SELinux: Efficient policy loading</li>
                  <li>• Boot Animation: Shorter duration</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <span className='font-semibold'>Platform Considerations:</span> Refer to NXP and Samsung BSP documentation for Exynos
                4412 and i.MX6Q Android optimizations. Vendor-specific bootloader modifications and kernel patches
                may be required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QtAppPorting;
