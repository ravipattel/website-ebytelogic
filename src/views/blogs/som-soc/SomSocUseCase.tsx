import React from "react";
import {
  FaMobileAlt,
  FaCar,
  FaWifi,
  FaIndustry,
  FaHeartbeat,
  FaRobot,
} from "react-icons/fa";

const SomSocUseCase = () => {
  const socApplications = [
    {
      icon: <FaMobileAlt className="text-blue-600 text-sm" />,
      title: "Consumer Electronics",
      description:
        "Smartphones, tablets, wearables where size and power efficiency are critical.",
      citation:
        "https://www.e-spincorp.com/system-on-chip-soc-evolution-advancements/",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <FaCar className="text-green-600 text-sm" />,
      title: "Automotive Systems",
      description:
        "ADAS, infotainment, autonomous driving platforms requiring high performance.",
      citation: "https://patents.google.com/patent/WO2024230948A1/en",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: <FaWifi className="text-purple-600 text-sm" />,
      title: "IoT Devices",
      description:
        "Battery-powered sensors, smart home devices with space constraints.",
      citation:
        "https://www.espincorp.com/system-on-chip-soc-evolution-advancements/",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  const somApplications = [
    {
      icon: <FaIndustry className="text-orange-600 text-sm" />,
      title: "Industrial Automation",
      description:
        "Control systems, robotics, and manufacturing equipment requiring reliability.",
      citation: "https://www.ttelectronics.com/blog/system-on-module/",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: <FaHeartbeat className="text-red-600 text-sm" />,
      title: "Medical Devices",
      description:
        "Equipment requiring regulatory compliance and long-term support.",
      citation:
        "https://medium.com/@geniatech/som-vs-soc-in-edge-ai-applications-balancing-flexibility-scalability-and-integration-b4e4ce9dc97e",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: <FaRobot className="text-indigo-600 text-sm" />,
      title: "Edge AI & Vision",
      description:
        "Machine vision, surveillance, and AI inference at the edge.",
      citation:
        "https://www.unmannedsystemstechnology.com/feature/why-system-on-modules-are-used-in-high-performance-computing-systems/",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <section id="use-cases" className="px-4 md:px-6 py-16 bg-slate-50">
      <h2 className="font-serif text-3xl font-semibold mb-8">
        Use Cases and Applications
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* SoC Applications */}
        <div className="bg-white border border-gray-300 rounded-md p-4">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-900">
            Ideal SoC Applications
          </h3>
          <div className="space-y-4">
            {socApplications.map((app, idx) => (
              <div className="flex items-start space-x-3" key={idx}>
                <div
                  className={`w-8 h-8 ${app.bgColor} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                >
                  {app.icon}
                </div>
                <div>
                  <h4 className="font-semibold">{app.title}</h4>
                  <p className="text-gray-600 text-sm">
                    {app.description}{" "}
                    <a
                      href={app.citation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      [156]
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SoM Applications */}
        <div className="bg-white border border-gray-300 rounded-md p-4">
          <h3 className="text-xl font-semibold mb-4 text-green-900">
            Ideal SoM Applications
          </h3>
          <div className="space-y-4">
            {somApplications.map((app, idx) => (
              <div className="flex items-start space-x-3" key={idx}>
                <div
                  className={`w-8 h-8 ${app.bgColor} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                >
                  {app.icon}
                </div>
                <div>
                  <h4 className="font-semibold">{app.title}</h4>
                  <p className="text-gray-600 text-sm">
                    {app.description}{" "}
                    <a
                      href={app.citation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      [153]
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Evolving Applications Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">
          Evolving Applications
        </h3>
        <div className="bg-white rounded-md p-6 border border-gray-300">
          <h4 className="font-semibold mb-3">
            IoT and Edge Computing Convergence
          </h4>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            The distinction between SoC and SoM applications is blurring,
            particularly in IoT and edge computing. While simple sensors still
            favor SoCs, sophisticated edge devices increasingly adopt SoMs for
            their processing power and flexibility.
            <a
              href="https://medium.com/@geniatech/som-vs-soc-in-edge-ai-applications-balancing-flexibility-scalability-and-integration-b4e4ce9dc97e"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              [147]
            </a>
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-900 mb-2">
                Traditional IoT
              </h5>
              <p className="text-sm text-blue-800">
                Simple sensors using ESP32, nRF series SoCs for basic
                connectivity and control
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-900 mb-2">
                Advanced Edge
              </h5>
              <p className="text-sm text-green-800">
                AI-powered devices using NVIDIA Jetson, Google Coral SoMs for
                local processing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SomSocUseCase;
