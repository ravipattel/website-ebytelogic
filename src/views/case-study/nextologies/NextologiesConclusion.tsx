import Image from 'next/image';
import React from 'react';
import { FaExpandArrowsAlt, FaRocket } from 'react-icons/fa';
import { FaShield } from 'react-icons/fa6';
import BroadCast from '@/src/assets/images/caseStudy/broadcast.webp'

const NextologiesConclusion = () => {
  return (
    <section id="conclusion" className="px-6">
      <div className="bg-gray-50 px-6 py-8">
        <h2 className="font-serif text-4xl font-bold mb-12 text-center">
          Conclusion
        </h2>

        {/* Summary of Benefits */}
        <div className="mb-16">
          <h3 className="font-serif text-3xl font-bold mb-8">Summary of Benefits</h3>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              In summary, Nextologies&apos; x86 server-based SDI Encoder &amp; Decoder offers a compelling array of benefits that address the core challenges faced by modern broadcasters and content providers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Benefit 1 */}
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <div className="text-3xl mb-2">&lt;100ms</div>
                <p className="text-sm font-medium ">Ultra-Low Latency</p>
                <p className="text-xs text-gray-600 mt-1">SDI-to-streaming &amp; receive-to-SDI-out</p>
              </div>
              {/* Benefit 2 */}
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-3xl text-brand-teal mb-2">±10ms</div>
                <p className="text-sm font-medium ">Lip Sync Accuracy</p>
                <p className="text-xs text-gray-600 mt-1">Precision synchronization</p>
              </div>
              {/* Benefit 3 */}
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <div className="text-3xl text-brand-coral mb-2">Full</div>
                <p className="text-sm font-medium ">VANC Support</p>
                <p className="text-xs text-gray-600 mt-1">Comprehensive metadata handling</p>
              </div>
              {/* Benefit 4 */}
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-3xl mb-2">SW</div>
                <p className="text-sm font-medium ">Software Defined</p>
                <p className="text-xs text-gray-600 mt-1">Flexible &amp; cost-effective</p>
              </div>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 italic text-lg font-medium text-gray-600">
              &quot;These professional-grade video transport capabilities are delivered with the unmatched flexibility and cost-effectiveness inherent in a software-defined x86 server platform, directly addressing the core challenges faced by broadcasters and content providers.&quot;
            </blockquote>
          </div>
        </div>

        {/* Future-Proof Solution */}
        <div className="mb-16">
          <h3 className="font-serif text-3xl font-bold mb-8">Future-Proof Solution for Professional Video Transport</h3>
          <div className="bg-gradient-to-r from-secondary/5 to-primary/5 p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Text content */}
              <div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Nextologies&apos; x86 server-based SDI Encoder &amp; Decoder stands as a <strong>future-proof solution</strong> for the evolving demands of professional video transport...
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FaRocket className='mt-1 text-primary' />
                    <div>
                      <h4 className="font-semibold">Continuous Updates</h4>
                      <p className="text-sm text-gray-600">Benefit from latest advancements without hardware reinvestment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaExpandArrowsAlt className='mt-1 text-primary' />
                    <div>
                      <h4 className="font-semibold">Scalability &amp; Integration</h4>
                      <p className="text-sm text-gray-600">Open x86 platform for expansion and new functionalities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaShield className='mt-1 text-primary' />
                    <div>
                      <h4 className="font-semibold">Industry Adaptation</h4>
                      <p className="text-sm text-gray-600">Ready for IP-based workflows and higher resolution formats</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image */}
              <div>
                <Image
                  src={BroadCast}
                  alt="Future broadcast technology"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Final Statement */}
        <div className="text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-lg leading-relaxed mb-6">
              The case study presented highlights the successful implementation of {` Nextologies' `} technology in meeting the stringent demands of professional video transport, serving as a valuable reference for broadcasters, media companies, and technology integrators seeking a modern, reliable, and innovative approach to SDI encoding and decoding within IP-centric media workflows.
            </p>
            <div className="bg-secondary/5 text-secondary p-6 rounded-lg">
              <p className="text-sm">
                With ongoing advancements and dedicated support from Nextologies, clients can confidently integrate this x86 server-based solution into their broadcast infrastructure, ensuring long-term compliance, sustained high performance, and readiness for future challenges and opportunities in the media landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextologiesConclusion;
