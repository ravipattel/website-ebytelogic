
import React from 'react';

const SomSocConclusion = () => {
  return (
    <section id="conclusion" className="px-4 md:px-6 py-16 bg-white">
      <h2 className="font-serif text-3xl font-semibold mb-8">Conclusion</h2>

      <div className="space-y-6 text-sm md:text-base text-gray-600 leading-relaxed">
        <p>
          The choice between System on Chip and System on Module represents a fundamental strategic decision in
          electronic product development, with profound implications for cost, time-to-market, and long-term product
          evolution.
        </p>

        <div className="border-l-4 pl-4 border-primary bg-blue-50 p-3 italic text-gray-600 mt-4">
          &#34;SoCs offer unparalleled integration and potential cost savings at high volumes but demand significant
          development expertise and time. SoMs provide a pre-integrated, ready-to-use core system, drastically reducing
          development complexity and time-to-market, ideal for lower to medium volumes or when rapid prototyping is key.&#34;
        </div>

        <p>
          {`As technology continues to evolve, the lines between ideal applications for each approach are blurring. The
          emergence of more powerful and compact SoMs, combined with the increasing complexity of SoC design, means that
          the optimal choice is increasingly context-dependent.`}
        </p>

        <p>
         {` Success in navigating this landscape requires a clear understanding of your project's specific requirements,
          including production volume, budget constraints, timeline pressures, performance needs, and in-house
          capabilities. By carefully weighing these factors, organizations can make informed decisions that align with
          their strategic goals and pave the way for successful product development.`}
        </p>

        <div className="bg-gray-50 rounded-md p-6 mt-8">
          <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2">
              <li>• <span className='font-semibold'>Volume is decisive:</span> High volume favors SoC, low-medium favors SoM</li>
              <li>• <span className='font-semibold'>Time matters:</span> SoMs can reduce development time by 6-12 months</li>
              <li>• <span className='font-semibold'>Expertise counts:</span> SoMs lower the barrier to complex system design</li>
            </ul>
            <ul className="space-y-2">
              <li>• <span className='font-semibold'>Flexibility has value:</span> SoMs enable easier upgrades and modifications</li>
              <li>• <span className='font-semibold'>Certification matters:</span> Pre-certified modules reduce regulatory risk</li>
              <li>• <span className='font-semibold'>Context is king:</span> The optimal choice depends on specific project needs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SomSocConclusion;
