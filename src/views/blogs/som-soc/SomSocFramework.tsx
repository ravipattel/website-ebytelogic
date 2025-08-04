
import React from 'react';
import { FaChartLine, FaClock, FaUsers, FaExpandArrowsAlt, FaCertificate, FaCompressAlt } from 'react-icons/fa';

const SomSocFramework = () => {
  // Data for the decision matrix items
  const decisionItems = [
    {
      icon: <FaChartLine className="text-blue-600" />,
      title: 'Production Volume',
      description:
        'High volume (>100K units) favors SoC for cost optimization. Low-medium volume favors SoM for lower NRE.',
      citation: 'https://aichiplink.com/blog/System-on-Chip-VS-System-on-Module-KeyDifferences-and-Applications_377',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
    },
    {
      icon: <FaClock className="text-green-600" />,
      title: 'Time-to-Market',
      description:
        'Aggressive timelines strongly favor SoM approach. Longer development cycles can accommodate custom SoC design.',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
    },
    {
      icon: <FaUsers className="text-purple-600" />,
      title: 'Expertise Availability',
      description:
        'Limited hardware expertise makes SoM more accessible. Strong design teams can pursue custom SoC development.',
      citation: 'https://oxeltech.de/soc-vs-som-in-low-power-devices/',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
    },
    {
      icon: <FaExpandArrowsAlt className="text-orange-600" />,
      title: 'Flexibility Needs',
      description:
        'Products requiring future upgrades or modularity benefit from SoM approach. Fixed functionality favors SoC optimization.',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
    },
    {
      icon: <FaCertificate className="text-red-600" />,
      title: 'Regulatory Compliance',
      description:
        'Pre-certified SoMs reduce regulatory burden. Custom SoC designs require full certification process.',
      citation: 'https://www.ezurio.com/resources/blog/system-on-module-vs-system-on-chip-what-s-the-difference',
      bgColor: 'bg-red-100',
      textColor: 'text-red-600',
    },
    {
      icon: <FaCompressAlt className="text-indigo-600" />,
      title: 'Size Constraints',
      description:
        'Extreme miniaturization requirements may necessitate custom SoC design. Most applications can accommodate SoM form factors.',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-600',
    },
  ];

  // Data for when to choose SoC or SoM
  const socChoice = [
    'Production volumes exceed 100,000+ units annually',
    'Extreme size or power optimization is required',
    'You have strong hardware design expertise',
    'Time-to-market is less critical than cost optimization',
    'Application requirements are well-defined and stable',
  ];

  const somChoice = [
    'Production volumes are under 100,000 units annually',
    'Rapid development and time-to-market are critical',
    'Hardware design resources are limited',
    'Future upgrades or flexibility are important',
    'Regulatory compliance simplification is valuable',
  ];

  return (
    <section id="decision-framework" className="px-4 md:px-6 py-16 bg-slate-50">
      <h2 className="font-serif text-3xl font-semibold mb-8">Making the Right Choice</h2>

      <div className="bg-white rounded-lg p-8 border border-gray-300">
        <h3 className="text-2xl font-semibold mb-6">Decision Framework</h3>
        <div className="decision-matrix grid md:grid-cols-2 gap-8">
          {decisionItems.map((item, idx) => (
            <div key={idx} className="border border-gray-300 p-4 rounded-md">
              <div className={`${item.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                {item.icon}
              </div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">
                {item.description}{' '}
                {item.citation && (
                  <a
                    href={item.citation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="citation text-blue-600 underline"
                  >
                    [Citation]
                  </a>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Choose SoC When:</h3>
          <ul className="space-y-2 text-blue-800 text-sm">
            {socChoice.map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-4">Choose SoM When:</h3>
          <ul className="space-y-2 text-green-800 text-sm">
            {somChoice.map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SomSocFramework;
