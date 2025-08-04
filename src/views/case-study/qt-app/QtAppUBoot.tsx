import React from "react";
import { FaClock, FaCut, FaDownload } from "react-icons/fa";

const QtAppUBoot = () => {
  return (
    <section id="u-boot" className="px-4 md:px-6 py-16">
      <div className="md:px-6 py-8">
        <h2 className="font-serif text-3xl font-bold mb-8">
          U-Boot Optimization Strategies
        </h2>

        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold mb-6">
            General ARM Cortex-A Optimizations
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
              <div className="text-primary text-2xl mb-3">
                <FaCut />
              </div>
              <h4 className="font-semibold mb-2">Remove Unused Features</h4>
              <p className="text-sm text-gray-600">
                Disable networking, USB, filesystems, and debugging commands not needed in production
              </p>
            </div>
            <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
              <div className="text-primary text-2xl mb-3">
                <FaClock />
              </div>
              <h4 className="font-semibold mb-2">Eliminate Boot Delay</h4>
              <p className="text-sm text-gray-600">
                Set CONFIG_BOOTDELAY=0 to avoid waiting for user input
              </p>
            </div>
            <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
              <div className="text-primary text-2xl mb-3">
                <FaDownload />
              </div>
              <h4 className="font-semibold mb-2">Optimize Storage Access</h4>
              <p className="text-sm text-gray-600">
                Use fastest read modes, compressed kernels, and pre-load into RAM
              </p>
            </div>
          </div>

          <div className="bg-slate-100 p-6 rounded-xl">
            <h4 className="font-semibold mb-3">Impact of U-Boot Optimizations</h4>
            <p className="text-slate-700 text-sm mb-3">
              <a
                href="https://www.embeddedartists.com/wp-content/uploads/2020/11/iMX_Boot_Times.pdf"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Embedded Artists demonstrated
              </a>{" "}
              significant boot time reductions on i.MX platforms:
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Setting bootdelay=0: ~2s saving</li>
              <li>• Disabling unused features: ~480ms saving</li>
              <li>• Simplifying bootcmd: ~200ms saving</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold mb-6">
            i.MX6Q Specific Optimizations
          </h3>

          <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl mb-6">
            <h4 className="font-semibold mb-4">Falcon Mode Implementation</h4>
            <p className="text-slate-700 mb-4">
              <a
                href="https://imxdev.gitlab.io/tutorial/How_to_decrease_boot_time_on_iMX6/"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falcon Mode
              </a>{" "}
              allows the SPL to directly boot the Linux kernel, bypassing the full U-Boot stage entirely.
            </p>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h5 className="font-mono text-sm mb-2">Configuration Steps:</h5>
              <code className="text-xs text-gray-600 block">
                CONFIG_SPL_OS_BOOT=y<br />spl export fdt ./load.address ./dtb.address
              </code>
            </div>
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Result:</strong>{" "}
                <a
                  href="https://imxdev.gitlab.io/video/tutorial/Booting-iMX6-under-one-second/"
                  className="hover:underline text-green-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  0.9s boot time
                </a>{" "}
                achieved on i.MX6Q SDB using Falcon Mode
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
              <h4 className="font-semibold mb-3">SPL Optimizations</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Reduce malloc pool from 32MB to 128KB</li>
                <li>• Enable data cache in SPL</li>
                <li>• Increase SD card clock to 50MHz</li>
              </ul>
              <p className="text-xs text-slate-500 mt-2">
                <a
                  href="https://witekio.com/blog/a-challenge-called-boot-time-3/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Witekio achieved
                </a>{" "}
                646ms reduction
              </p>
            </div>

            <div className="border-l-4 border-l-primary bg-white shadow-md p-6 rounded-xl">
              <h4 className="font-semibold mb-3">Exynos 4412 Specific</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Optimize BL1/BL2 initialization</li>
                <li>• Configure clock speeds efficiently</li>
                <li>• Streamline DRAM initialization</li>
              </ul>
              <p className="text-xs text-slate-500 mt-2">
                <a
                  href="https://blog.forkwhiletrue.me/posts/u-boot-on-galaxy-s3/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Porting U-Boot
                </a>{" "}
                requires careful clock management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QtAppUBoot;
