import React from "react";

const YoctoConclusion = () => {
  return (
    <section id="conclusion" className="py-16 px-6 bg-gray-50">
      <div className="px-6 py-8">
        <h2 className="serif text-3xl font-semibold mb-8">
          Conclusion: Yocto Powered Efficiency in Embedded Development
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            This case study exemplifies how the{" "}
            <span className="text-black font-semibold">
              Yocto Project, when combined with a robust SoM ecosystem like Toradex&apos;s,
              can dramatically accelerate embedded Linux development
            </span>{" "}
            for custom hardware. Device Solution&apos;s experience demonstrates that even under extreme time pressure,
            it is possible to bring up complex functionalities like display and touch interfaces on a new carrier board
            in a matter of days rather than weeks.
          </p>

          <div className="bg-white p-8 rounded-lg border my-8">
            <h3 className="text-xl font-semibold mb-4">Key Success Factors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Technical Advantages</h4>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>Yocto&apos;s flexible layer mechanism</li>
                  <li>Powerful and efficient build system</li>
                  <li>Comprehensive Board Support Packages</li>
                  <li>Incremental build capabilities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Development Benefits</h4>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>Rapid iteration on configurations</li>
                  <li>Maintainable software environment</li>
                  <li>Reproducible builds</li>
                  <li>Focused development on delta changes</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            The key to this success lies in Yocto&apos;s flexible layer mechanism, its powerful and efficient build system,
            and the comprehensive Board Support Packages provided by SoM vendors. By creating a custom Yocto layer,
            Device Solution was able to precisely tailor the software stack to their specific hardware, focusing their
            efforts on the delta changes required for their custom carrier board.
          </p>

          <div className="highlight-box bg-white p-6 rounded-lg border shadow">
            <h3 className="text-lg font-semibold mb-4">Future Implications</h3>
            <p className="text-gray-600">
              The successful on-time demonstration of the ATDM product at EW24 stands as a testament to the{" "}
              <span className="text-black font-semibold">efficiency and power of Yocto in modern embedded development</span>. This approach not only saved
              significant development time but also ensured a maintainable and reproducible software environment for future
              product iterations, setting a precedent for accelerated embedded system development methodologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoctoConclusion;
