import React from "react";

const SomSocAnalysis = () => {
  const sections = [
    {
      title: "Development Effort and Complexity",
      items: [
        {
          title: "SoC Development",
          text: "Requires expertise in high-speed digital design, signal integrity, and RF engineering. Complex PCB layout for DDR routing and power delivery networks.",
          citation:
            "https://www.ezurio.com/resources/blog/system-on-module-vs-system-on-chipwhat-s-the-difference",
        },
        {
          title: "SoM Development",
          text: "Focus on application-specific carrier board design. High-speed memory routing and RF design abstracted by pre-integrated module.",
          citation:
            "https://www.ezurio.com/resources/blog/system-on-module-vs-system-on-chipwhat-s-the-difference",
        },
      ],
    },
    {
      title: "Time-to-Market Considerations",
      items: [
        {
          title: "SoC Timeline",
          text: "Extended development cycles: custom PCB design, fabrication, assembly, testing, and certification. Typically 12-24 months for complex designs.",
          citation:
            "https://www.ezurio.com/resources/blog/system-on-module-vs-system-on-chipwhat-s-the-difference",
        },
        {
          title: "SoM Timeline",
          text: "Dramatically shorter: focus on carrier board design while using pre-tested modules. Parallel hardware/software development reduces time by 6-12 months.",
          citation:
            "https://www.electronicsweekly.com/news/five-reasons-to-consider-a-som-vs-achip-down-design-2024-06/",
        },
      ],
    },
    {
      title: "Cost Analysis: NRE vs. Per-Unit",
      items: [
        {
          title: "Break-even Analysis",
          text: "The crossover point where custom SoC design becomes more economical depends on production volume. Typically occurs at 100,000+ units for moderate complexity designs.",
        },
      ],
      costBreakdown: [
        {
          label: "Low Volume (<10K)",
          text: "SoM more cost-effective",
          color: "bg-green-50",
        },
        {
          label: "Medium Volume (10K-100K)",
          text: "Depends on complexity",
          color: "bg-yellow-50",
        },
        {
          label: "High Volume (>100K)",
          text: "SoC more cost-effective",
          color: "bg-blue-50",
        },
      ],
    },
  ];

  const renderItem = (item, index) => {
    return (
      <div key={index}>
        <h4 className="font-semibold mb-2 text-lg">{item.title}</h4>
        <p className="text-gray-600 text-sm">
          {item.text}{" "}
          {item.citation && (
            <a
              href={item.citation}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              [209]
            </a>
          )}
        </p>
      </div>
    );
  };

  const renderCostBreakdown = (breakdown, index) => {
    return (
      <div key={index} className={`${breakdown.color} p-3 rounded`}>
        <span className="font-semibold">{breakdown.label}:</span> {breakdown.text}
      </div>
    );
  };

  return (
    <section id="comparative-analysis" className="px-4 md:px-6 py-16 bg-white">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">
        Comparative Analysis
      </h2>
      <div className="space-y-12">
        {sections.map((section, idx) => (
          <div className="bg-blue-50 p-4 rounded-md" key={idx}>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-900">
              {section.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((item, index) => renderItem(item, index))}
            </div>

            {/* Render Cost Breakdown if it exists */}
            {section.costBreakdown && (
              <div className="space-y-4 mt-3">
                <div className="bg-white rounded-lg p-4 border">
                  <h4 className="font-semibold mb-2 text-base md:text-lg">Break-even Analysis</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {section.items[0].text}
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    {section.costBreakdown.map((breakdown, index) =>
                      renderCostBreakdown(breakdown, index)
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SomSocAnalysis;
