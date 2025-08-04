
import React from 'react';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
const SomSocProsCons = () => {
  const socData = {
    pros: [
      {
        text: 'High Integration: Maximum component density and miniaturization',
        citation: 'https://aichiplink.com/blog/System-on-Chip-VS-System-on-Module-KeyDifferences-and-Applications_377',
      },
      { text: 'Power Efficiency: Lower power consumption through on-chip communication' },
      { text: 'Performance: High-speed data transfer and low-latency communication' },
      { text: 'Cost at Scale: Very low per-unit cost in high volumes' },
      { text: 'Customization: Highly optimized for specific applications' },
    ],
    cons: [
      {
        text: 'High NRE Costs: Millions in development and tooling costs',
        citation: 'https://www.ezurio.com/resources/blog/system-on-module-vs-system-on-chipwhat-s-the-difference',
      },
      { text: 'Long Development: Several years from design to production' },
      { text: 'Limited Flexibility: Hardware features fixed after fabrication' },
      { text: 'Certification Burden: Full regulatory responsibility' },
      { text: 'Supply Chain Complexity: Multiple component sourcing' },
    ],
  };

  const somData = {
    pros: [
      {
        text: 'Reduced Development: Substantial complexity reduction',
        citation: 'https://aichiplink.com/blog/System-on-Chip-VS-System-on-Module-KeyDifferences-and-Applications_377',
      },
      { text: 'Faster Time-to-Market: Dramatically shortened development cycles' },
      { text: 'Lower NRE: Significantly reduced upfront engineering costs' },
      { text: 'Flexibility: Easy upgrades and module swapping' },
      { text: 'Pre-Certified: Often includes regulatory certifications' },
    ],
    cons: [
      {
        text: 'Higher Per-Unit Cost: Module markup increases BOM cost',
        citation: 'https://aichiplink.com/blog/System-on-Chip-VS-System-on-Module-KeyDifferences-and-Applications_377',
      },
      { text: 'Larger Form Factor: Inherently larger than single-chip solutions' },
      { text: 'Limited Customization: Fixed core component configuration' },
      { text: 'Vendor Dependency: Reliance on module availability and support' },
      { text: 'Over-Provisioning: May include unneeded features' },
    ],
  };

  const renderList = (items) => {
    return items.map((item, index) => (
      <li key={index} className="space-y-2 text-gray-800">
        • {item.citation ? (
          <>
            <>{item.text}</>{' '}
            <a href={item.citation} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              [198]
            </a>
          </>
        ) : (
          <>{item.text}</>
        )}
      </li>
    ));
  };

  return (
    <section id="advantages" className="px-4 md:px-6 py-16 bg-slate-50">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">Advantages and Disadvantages</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {/* SoC Section */}
        <div className="space-y-6">
          <h3 className="text-lg md:text-xl font-semibold">SoC: Pros and Cons</h3>

          {/* SoC Advantages */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
              <FaCheckCircle className="mr-2" />
              Advantages
            </h4>
            <ul className="space-y-2 text-green-800 text-sm">
              {renderList(socData.pros)}
            </ul>
          </div>

          {/* SoC Disadvantages */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
              <FaExclamationTriangle className="mr-2" />
              Disadvantages
            </h4>
            <ul className="space-y-2 text-red-800 text-sm">
              {renderList(socData.cons)}
            </ul>
          </div>
        </div>

        {/* SoM Section */}
        <div className="space-y-6">
          <h3 className="text-lg md:text-xl font-semibold">SoM: Pros and Cons</h3>

          {/* SoM Advantages */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
              <FaCheckCircle className="mr-2" />
              Advantages
            </h4>
            <ul className="space-y-2 text-green-800 text-sm">
              {renderList(somData.pros)}
            </ul>
          </div>

          {/* SoM Disadvantages */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
              <FaExclamationTriangle className="mr-2" />
              Disadvantages
            </h4>
            <ul className="space-y-2 text-red-800 text-sm">
              {renderList(somData.cons)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SomSocProsCons;
