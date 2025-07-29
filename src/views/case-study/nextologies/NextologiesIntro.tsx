import Image from 'next/image';
import React from 'react';
import ControlRoom from '@/src/assets/images/caseStudy/controlRoom.webp'

const NextologiesIntro = () => {
  return (
    <section id="introduction" className="py-8 px-6">
      <div className='bg-gray-50 p-6'>
        <div>
          <h2 className="font-serif text-4xl font-bold text-brand-navy mb-8">Introduction</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-4">
                Challenges in Professional Video Transport
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The professional video transport landscape presents a complex array of challenges for broadcasters and content providers, particularly when it comes to the reliable and efficient movement of high-quality video signals over extended distances.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-navy">Ultra-Low Latency</h4>
                    <p className="text-sm text-gray-600">
                      Near real-time delivery critical for live events and interactive applications
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-navy">Error-Free Transmission</h4>
                    <p className="text-sm text-gray-600">
                      Zero tolerance for data loss or corruption
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-navy">Precise Synchronization</h4>
                    <p className="text-sm text-gray-600">
                      Lip sync accuracy essential for quality viewing experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-navy">Metadata Preservation</h4>
                    <p className="text-sm text-gray-600">
                      Closed captions, timecode, and SCTE-35 cues for compliance and monetization
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={ControlRoom}
                alt="Professional broadcast control room"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-brand-navy mb-4">
              Nextologies&#39; Software-Defined Solution
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nextologies has emerged as an innovative leader in video transmission technology by directly addressing the multifaceted challenges inherent in professional video transport. The company&#39;s core offering, the <span className='font-semibold'>x86 server-based SDI Encoder &amp; Decoder</span> solutions, represents a significant departure from traditional hardware-centric models.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 italic text-lg">
              &#34;This software-defined approach delivers unmatched flexibility, allowing for rapid adaptation to changing market demands, new codec standards, and evolving operational requirements.&#34;
            </blockquote>
            <p className="text-gray-600 leading-relaxed mt-6">
              By utilizing commercial off-the-shelf (COTS) x86 server platforms, Nextologies offers a{' '}
              <span className='font-semibold'>cost-effective solution</span> that does not compromise on performance, while facilitating{' '}
              <span className='font-semibold'>scalability</span> through software licensing and server environment capabilities{' '}
              <a href="https://www.nextologies.com/nextologies-takes-home-three-awards-at-nab-show-2023.html" className="text-secoborder-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                [327]
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextologiesIntro;
