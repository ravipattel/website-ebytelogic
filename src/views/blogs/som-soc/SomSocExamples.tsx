import React from "react";

const SomSocExamples = () => {
  // Data for SoC Examples
  const socExamples = [
    {
      title: "Qualcomm Snapdragon",
      description:
        "High-performance mobile processors with integrated connectivity.",
      citation:
        "https://www.e-spincorp.com/system-on-chip-soc-evolution-advancements/",
      borderColor: "border-blue-500",
    },
    {
      title: "Apple Silicon",
      description:
        "Custom M-series and A-series processors for Mac and iOS devices.",
      citation: "https://www.ampheo.com/blog/soc-vs-som-whats-the-difference",
      borderColor: "border-green-500",
    },
    {
      title: "ESP32 Series",
      description: "Popular IoT SoCs with integrated Wi-Fi and Bluetooth.",
      citation:
        "https://oxeltech.de/system-on-chip-soc-vs-system-on-module-som/",
      borderColor: "border-purple-500",
    },
    {
      title: "NXP i.MX",
      description:
        "Industrial and automotive processors for embedded applications.",
      citation:
        "https://www.e-spincorp.com/system-on-chip-soc-evolution-advancements/",
      borderColor: "border-orange-500",
    },
  ];

  // Data for SoM Examples
  const somExamples = [
    {
      title: "NVIDIA Jetson",
      description: "AI-focused modules for edge computing and robotics.",
      citation:
        "https://www.unmannedsystemstechnology.com/feature/why-system-on-modules-are-used-in-high-performance-computing-systems/",
      borderColor: "border-blue-500",
    },
    {
      title: "Raspberry Pi Compute Module",
      description: "Industrial version of popular SBC in SoM form factor.",
      citation: "",
      borderColor: "border-green-500",
    },
    {
      title: "Google Coral",
      description: "AI acceleration modules with Edge TPU coprocessor.",
      citation: "https://docs.rs-online.com/7742/A700000007334641.pdf",
      borderColor: "border-purple-500",
    },
    {
      title: "Toradex SoMs",
      description: "Industrial-grade modules based on NXP processors.",
      citation:
        "https://www.linkedin.com/posts/chetan-shidling-1aa749159_soc-som-embedded-systems-activity-7296458356423106561-zeTq",
      borderColor: "border-orange-500",
    },
  ];

  return (
    <section id="examples" className="px-4 md:px-6 py-16 bg-white">
      <h2 className="font-serif text-3xl font-semibold mb-8">
        Examples in Practice
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* SoC Examples */}
        <div className="feature-card">
          <h3 className="text-xl font-semibold mb-4">Prominent SoC Examples</h3>
          <div className="space-y-4">
            {socExamples.map((example, idx) => (
              <div
                className={`border-l-4 ${example.borderColor} pl-4`}
                key={idx}
              >
                <h4 className="font-semibold">{example.title}</h4>
                <p className="text-sm text-gray-600">
                  {example.description}{" "}
                  {example.citation && (
                    <a
                      href={example.citation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      [Citation]
                    </a>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SoM Examples */}
        <div>
          <div className="w-fit ms-auto">
            <h3 className="text-xl font-semibold mb-4 w-fit">Common SoM Examples</h3>
            <div className="space-y-4 w-fit">
              {somExamples.map((example, idx) => (
                <div
                  className={`border-l-4 ${example.borderColor} pl-4 w-fit`}
                  key={idx}
                >
                  <h4 className="font-semibold w-fit">{example.title}</h4>
                  <p className="text-sm text-gray-600 w-fit">
                    {example.description}{" "}
                    {example.citation && (
                      <a
                        href={example.citation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline w-fit"
                      >
                        [Citation]
                      </a>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SomSocExamples;
