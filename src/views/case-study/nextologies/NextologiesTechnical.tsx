import React from 'react';
import { FaAd, FaClosedCaptioning, FaCloud, FaMicrochip, FaServer, FaTag } from 'react-icons/fa';
import { FaHardDrive } from 'react-icons/fa6';

const NextologiesTechnical = () => {
  return (
    <section id="technical-innovation" className="py-16 bg-white">
      <div className="px-6">
        <h2 className="font-serif text-4xl font-bold mb-12 text-center">
          Technical Innovation
        </h2>

        {/* Software-Defined Architecture */}
        <div id="software-architecture" className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-3xl font-bold mb-6">Software-Defined Architecture</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At the core of {` Nextologies' `} x86 server-based SDI Encoder and Decoder solution lies its{' '}
                <span className='text-black font-semibold'>software-defined architecture</span>, a fundamental technical innovation that distinguishes it
                from traditional hardware-based systems{' '}
                <a href="https://www.nextologies.com/nextologies-takes-home-three-awards-at-nab-show-2023.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  [327]
                </a>.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Cost-Effectiveness</h4>
                  <p className="text-sm">Leverages commercially available server platforms with lower upfront costs and predictable upgrade paths</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Unmatched Flexibility</h4>
                  <p className="text-sm">Updates, new features, and performance enhancements deployed rapidly via software updates</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Future-Proofing</h4>
                  <p className="text-sm">Adaptable to emerging standards and new operational requirements without hardware replacement</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://kimi-web-img.moonshot.cn/img/www.raritan.com/e32c8f1dbec96ae4cb9381d14fe7e69792968a0a.jpg"
                alt="Broadcast server room"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Native Services Integration */}
        <div id="native-services" className="mb-16">
          <h3 className="font-serif text-3xl font-bold mb-8">Integration with Native Services</h3>
          <div>
            <p className="text-gray-600 leading-relaxed mb-8">
              {` Nextologies' `} x86 server-based encoder and decoder are{' '}
              <span className='text-black font-semibold'>tightly integrated with a suite of native services</span> that significantly extend the {`platform's`}
              overall value and utility{' '}
              <a href="https://www.nextologies.com/nextologies-takes-home-three-awards-at-nab-show-2023.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                [327]
              </a>. This integration provides a holistic solution that streamlines broadcast operations and reduces complexity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaClosedCaptioning className='text-primary text-3xl' />
                </div>
                <h4 className="font-semibold mb-2">Automatic Closed Captioning</h4>
                <p className="text-sm text-gray-600">Ensures accessibility compliance without separate hardware</p>
              </div>
              <div className="p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaAd className='text-primary text-3xl' />
                </div>
                <h4 className="font-semibold mb-2">Commercial Detection</h4>
                <p className="text-sm text-gray-600">Aids ad monetization strategies and replacement workflows</p>
              </div>
              <div className="p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTag className='text-primary text-3xl' />
                </div>
                <h4 className="font-semibold mb-2">SCTE-35 Insertion</h4>
                <p className="text-sm text-gray-600">Dynamic markers for ad scheduling and program cueing</p>
              </div>
              <div className="p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMicrochip className='text-primary text-3xl' />
                </div>
                <h4 className="font-semibold mb-2">GPU Acceleration</h4>
                <p className="text-sm text-gray-600">Improved encoding efficiency and parallel processing power</p>
              </div>
            </div>
            <div className="mt-8 p-6 rounded-lg">
              <blockquote className="text-center">
                <p className="text-lg italic text-secondary mb-4">
                {`"This integrated suite of services transforms the encoder/decoder platform into a more comprehensive video processing and management solution, offering a unified environment for a variety of video transport and processing needs."`}
                </p>
                <div className="w-12 h-0.5 bg-primary mx-auto"></div>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Flexible Deployment Models */}
        <div id="deployment-models" className="mb-16">
          <h3 className="font-serif text-3xl font-bold mb-8">Flexible Deployment Models</h3>
          <div className="space-y-8">
            <p className="text-gray-600 leading-relaxed text-lg">
              A key advantage of {`Nextologies'`} software-defined encoder and decoder solutions is the inherent{' '}
              <span className='text-black font-semibold'>flexibility in deployment options</span>. Users are empowered to deploy the encoder and decoder in a
              variety of configurations to best meet their specific operational requirements and infrastructure preferences{' '}
              <a href="https://www.nextologies.com/nextologies-takes-home-three-awards-at-nab-show-2023.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                [327]
              </a>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-primary/5 p-8 rounded-lg">
                <div className="text-center mb-6">
                  <FaServer className='text-4xl text-primary/40 mb-4 mx-auto' />
                  <h4 className="font-serif text-xl font-bold ">x86 Server</h4>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Standalone installations</li>
                  <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Maximum performance</li>
                  <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>High-channel density scenarios</li>
                  <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Dedicated hardware resources</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-red-50 p-8 rounded-lg">
                <div className="text-center mb-6">
                  <FaHardDrive className='text-4xl text-primary/40 mb-4 mx-auto' />
                  <h4 className="font-serif text-xl font-bold ">Virtualized</h4>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Multiple instances on shared hardware</li>
                  <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Optimized resource utilization</li>
                  <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Simplified management</li>
                  <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Cost-effective scaling</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-primary/5 p-8 rounded-lg">
                <div className="text-center mb-6">
                  <FaCloud className='text-4xl text-primary/40 mb-4 mx-auto' />
                  <h4 className="font-serif text-xl font-bold ">Cloud</h4>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Public or private cloud platforms</li>
                  <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Dynamic resource scaling</li>
                  <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Geographic distribution</li>
                  <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Disaster recovery</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-4">Additional Benefits</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium mb-2">Hybrid Setups</h5>
                  <p className="text-sm text-gray-600">Components distributed across on-premises hardware and cloud resources for tailored infrastructure approaches</p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Remote Management</h5>
                  <p className="text-sm text-gray-600">Robust capabilities for configuration, monitoring, and troubleshooting from any location globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextologiesTechnical;
