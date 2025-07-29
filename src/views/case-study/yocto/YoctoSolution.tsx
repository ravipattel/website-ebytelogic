import React from "react";

const YoctoSolution = () => {
  return (
    <section id="the-solution" className="py-16 px-6 bg-gray-50">
      <div className="px-6 py-8">
        <h2 className="serif text-3xl font-semibold mb-8">
          The Solution: Leveraging Yocto for Rapid Customization and Board Bring-up
        </h2>

        <div className="space-y-6">
          <div data-step="1">
            <h4 className="font-semibold mb-1">Yocto Foundation</h4>
            <p className="text-sm text-gray-600">
              Established Yocto Project as the build framework for custom embedded Linux distribution
            </p>
          </div>
          <div data-step="2">
            <h4 className="font-semibold mb-1">Toradex BSP</h4>
            <p className="text-sm text-gray-600">
              Leveraged Toradex&apos;s Board Support Package for Verdin i.MX8MP
            </p>
          </div>
          <div data-step="3">
            <h4 className="font-semibold mb-1">Custom Layer</h4>
            <p className="text-sm text-gray-600">
              Created dedicated Yocto meta-layer for carrier board
            </p>
          </div>
          <div data-step="4">
            <h4 className="font-semibold mb-1">Device Tree</h4>
            <p className="text-sm text-gray-600">
              Configured device tree for display and touch interfaces
            </p>
          </div>
          <div data-step="5">
            <h4 className="font-semibold mb-1">Rapid Iteration</h4>
            <p className="text-sm text-gray-600">
              Utilized Yocto&apos;s incremental build capabilities
            </p>
          </div>
        </div>

        <div id="solution-yocto" className="my-12">
          <h3 className="text-xl font-semibold mb-4">
            Yocto Project: Foundation for Custom Embedded Linux
          </h3>
          <p className="text-gray-600 mb-6">
            The <span className="text-black font-semibold">Yocto Project served as the foundational framework</span> for Device Solution&apos;s rapid customization and board bring-up process. Yocto&apos;s inherent flexibility, derived from its layer mechanism and recipe-based build system, allows for the creation of highly tailored Linux distributions suitable for embedded devices{" "}
            <a
              href="https://www.embeddedrelated.com/showarticle/1469.php"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              [1]
            </a>.
          </p>

          <div className="bg-white p-6 rounded-lg border my-6">
            <h4 className="font-semibold mb-4">Yocto Build System Advantages</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Layer Mechanism</h5>
                <p className="text-sm text-gray-600">
                  Custom hardware configurations are encapsulated within dedicated layers, promoting modularity and ease of maintenance. The process involves creating a new Yocto layer specific to the custom hardware{" "}
                  <a
                    href="https://mediatek.gitlab.io/aiot/doc/aiot-dev-guide/master/sw/yocto/board-bringup.html"
                    className="text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [41]
                  </a>.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Incremental Builds</h5>
                <p className="text-sm text-gray-600">
                  Only affected components and their dependencies are rebuilt, significantly reducing build times compared to full manual build processes. This efficiency is paramount when working under severe time constraints.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="solution-toradex" className="mb-12">
          <h3 className="text-xl font-semibold mb-4">
            Toradex Ecosystem: BSP and Yocto Support for Verdin i.MX8MP
          </h3>
          <p className="text-gray-600 mb-6">
            The <span className="text-black font-semibold">Toradex ecosystem, particularly its Board Support Package (BSP) and Yocto Project support for the Verdin i.MX8MP SoM</span>, played a pivotal role in the accelerated board bring-up. Toradex provides a robust and well-maintained BSP layer, <code>meta-toradex-torizon</code> or <code>meta-toradex-nxp</code>, which serves as a solid foundation for building custom Linux images{" "}
            <a
              href="https://github.com/torizon/meta-toradex-torizon"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              [51]
            </a>{" "}
            <a
              href="https://www.torizon.io/open-source-community"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              [52]
            </a>.
          </p>

          <div className="highlight-box">
            <h4 className="font-semibold mb-3">Toradex Developer Resources</h4>
            <p className="text-gray-600 mb-4">
              The Toradex Developer Portal details the process for building a reference image using Yocto, including specifying the <code>MACHINE</code> variable as <code>verdin-imx8mp</code> for the Verdin i.MX8M Plus module{" "}
              <a
                href="https://developer.toradex.com/linux-bsp/os-development/build-yocto/build-a-reference-image-with-yocto-projectopenembedded/"
                className="text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                [59, 64]
              </a>.
            </p>
            <div className="bg-gray-100 p-4 rounded code-block">
              <code className="text-sm text-gray-800">MACHINE=verdin-imx8mp bitbake toradex-reference-image</code>
            </div>
          </div>
        </div>

        <div id="solution-custom-layer" className="mb-12">
          <h3 className="text-xl font-semibold mb-4">
            Custom Yocto Layer Creation for the Carrier Board
          </h3>
          <p className="text-gray-600 mb-6">
            A critical step in bringing up the custom carrier board was the <span className="text-black font-semibold">creation of a dedicated Yocto meta-layer</span> for Device Solution&apos;s hardware. This layer, often named <code>meta-&lt;board_name&gt;</code>, acts as a container for all board-specific configurations, patches, and recipes{" "}
            <a
              href="https://mediatek.gitlab.io/aiot/doc/aiot-dev-guide/master/sw/yocto/board-bringup.html"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              [41]
            </a>{" "}
            <a
              href="https://community.toradex.com/t/steps-to-configure-yocto-build-for-a-custom-verdin-am62-carrier-board/28094"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              [85]
            </a>.
          </p>

          <div className="bg-white p-6 rounded-lg border my-6">
            <h4 className="font-semibold mb-4">Custom Layer Structure</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Machine Configuration</h5>
                <p className="text-sm text-gray-600">
                  <code>conf/machine/custom-carrier-board.conf</code> defines target architecture, kernel and U-Boot versions, device trees, and machine features{" "}
                  <a
                    href="https://mediatek.gitlab.io/aiot/doc/aiot-dev-guide/master/sw/yocto/board-bringup.html"
                    className="text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [41]
                  </a>.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Recipe Append Files</h5>
                <p className="text-sm text-gray-600">
                  <code>recipes-kernel/linux/linux-toradex_%.bbappend</code> applies patches and adds custom device tree files for display and touch screen interfaces{" "}
                  <a
                    href="https://community.toradex.com/t/steps-to-configure-yocto-build-for-a-custom-verdin-am62-carrier-board/28094"
                    className="text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [85]
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="solution-device-tree" className="mb-12">
          <h3 className="text-xl font-semibold mb-4">
            Device Tree Configuration for Display and Touch Interfaces
          </h3>
          <p className="text-gray-600 mb-6">
            Configuring the <span className="text-black font-semibold">Device Tree (DT) was a fundamental aspect</span> of bringing up the display and touch screen on Device Solution&apos;s custom carrier board. The Device Tree is a data structure that describes the hardware components, allowing the Linux kernel to initialize and manage them without hard-coding details into the kernel source.
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white p-6 rounded-lg border">
              <h4 className="font-semibold mb-3">Display Interface Configuration</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• MIPI DSI controller node definition</li>
                <li>• Timing parameters and data lanes</li>
                <li>• Pin multiplexing (pinctrl) configuration</li>
                <li>• Display resolution and timing settings</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h4 className="font-semibold mb-3">Touch Screen Integration</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• I2C bus node definition</li>
                <li>• Touch controller node with I2C address</li>
                <li>• Interrupt GPIO pin configuration</li>
                <li>
                  • Compatible string matching (e.g., <code>goodix,gt911</code>){" "}
                  <a
                    href="https://community.toradex.com/t/i2c-touchscreen-controller-in-apalis-imx6/6961"
                    className="text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [37]
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="solution-iteration" className="mb-12">
          <h3 className="text-xl font-semibold mb-4">
            Efficient Iteration and Build Management with Yocto
          </h3>
          <p className="text-gray-600 mb-6">
            Yocto&apos;s build management capabilities were instrumental in enabling Device Solution to achieve <span className="text-black font-semibold">rapid iteration during the board bring-up process</span>. The core of Yocto, the BitBake build engine, supports incremental builds, meaning that when a change is made to a recipe, only the tasks affected by that change, and their dependent tasks, are re-executed.
          </p>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 my-6">
            <h4 className="font-semibold text-green-900 mb-3">Build Efficiency Example</h4>
            <p className="text-green-800 text-sm">
              If a developer modifies a device tree source (<code>.dts</code>) file for the touch screen, Yocto would only:
            </p>
            <ol className="text-green-800 text-sm mt-2 ml-4 space-y-1">
              <li>1. Recompile that specific DTS into a DTB</li>
              <li>2. Repackage the kernel image with the new DTB</li>
              <li>3. Rebuild the final root filesystem image</li>
            </ol>
            <p className="text-green-800 text-sm mt-2">
              This is significantly faster than rebuilding the entire Linux distribution from scratch after every minor change.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-semibold mb-4">Development Tools and Commands</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Kernel Configuration</h5>
                <div className="bg-gray-100 p-3 rounded code-block">
                  <code className="text-sm text-gray-800">bitbake linux-toradex -c menuconfig -f</code>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Customize kernel features and drivers for specific hardware requirements{" "}
                  <a
                    href="https://wizzdev.com/blog/embedded-linux-boot-time-optimization-for-a-custom-application/"
                    className="text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [39]
                  </a>.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Devtool Utility</h5>
                <p className="text-sm text-gray-600">
                  Quickly modify, build, and deploy individual software components directly onto the target device for testing, allowing developers to test changes without full image rebuild cycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoctoSolution;
