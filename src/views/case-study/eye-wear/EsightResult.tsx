import React from "react";

const EsightResult = () => {
  return (
    <section id="results" className="py-16 px-6">
      <div className="px-6 py-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl font-semibold mb-6">
            Results and Impact: A New Benchmark in Smart Glass Performance
          </h2>
        </div>

        {/* Metrics Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg text-center">
            <div className="text-5xl text-green-600 mb-2">&gt;60%</div>
            <div className="text-lg font-semibold mb-2">
              Latency Reduction
            </div>
            <div className="text-gray-600">From ~250ms to below 100ms</div>
          </div>

          <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg text-center">
            <div className="text-5xl text-blue-600 mb-2">33%</div>
            <div className="text-lg font-semibold mb-2">Time Savings</div>
            <div className="text-gray-600">20 days vs. 30-day target</div>
          </div>

          <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg text-center">
            <div className="text-5xl text-amber-600 mb-2">150ms+</div>
            <div className="text-lg font-semibold mb-2">Delay Eliminated</div>
            <div className="text-gray-600">Absolute reduction achieved</div>
          </div>
        </div>

        {/* Enhanced User Experience and Client Success */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Enhanced User Experience
            </h3>
            <p className="text-gray-600 mb-4">
              The <span className="text-black font-semibold">reduction of latency from ~250ms to below 100ms had a profound and direct
                impact</span> on the user experience of the eSightEyewear smart glasses. For users
              with visual impairments relying on the device to perceive their surroundings, the
              improved responsiveness translates to a more natural and intuitive interaction with
              their environment.
            </p>
            <h4 className="font-semibold mb-3">Key User Benefits:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>More natural and intuitive environmental interaction</li>
              <li>Improved confidence in navigation and object recognition</li>
              <li>Reduced motion sickness and simulator sickness symptoms</li>
              <li>Enhanced comfort for extended wear</li>
              <li>Better usability for daily activities</li>
            </ul>
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-6">
              <p className="text-green-800 text-sm">
                <span className="text-green-900 font-semibold">Critical Threshold:</span> {`Achieving glass-to-glass latency in the range
                of 57 to 106 milliseconds is considered a good result for Android systems even when
                all components are well-understood.`}{" "}
                <a
                  href="https://www.inovex.de/de/blog/the-glass-to-glass-latency-on-android/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Reference]
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Client Success</h3>
            <p className="text-gray-600 mb-4">
              A notable aspect of this project&#39;s success is that the significant latency
              reduction <span className="text-black font-semibold">{`“was not achieved when the client was working with big OEM
              companies.”`}</span>
            </p>
            <div className="quote-block p-6 rounded-lg mb-6">
              <p className="text-gray-600 italic mb-4">
                “This implies that eSightEyewear had previously engaged with larger, potentially
                more resource-rich, Original Equipment Manufacturers to address the latency issue,
                but those collaborations did not yield the desired sub-100ms result.”
              </p>
            </div>
            <h4 className="font-semibold mb-3">Competitive Advantages Demonstrated:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Superior embedded systems optimization capability</li>
              <li>Focused expertise in Android and HAL customization</li>
              <li>Innovative problem-solving under constraints</li>
              <li>Rapid execution and delivery under pressure</li>
              <li>Ability to work with incomplete documentation</li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-6">
              <p className="text-blue-800 text-sm">
                <span className="text-blue-900 font-semibold">Market Impact:</span> This success likely provided eSightEyewear with
                renewed confidence in their product development roadmap and opened new avenues for
                collaboration.{" "}
                <a
                  href="https://ir.gentex.com/news-releases/news-release-details/gentex-announces-partnership-esight-develop-next-generation"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Gentex Partnership]
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EsightResult;
