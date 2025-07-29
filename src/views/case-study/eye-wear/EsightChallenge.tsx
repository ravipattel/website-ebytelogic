import React from "react";

const EsightChallenge = () => {
  return (
    <section id="challenge" className="py-16 px-6 bg-slate-50">
      <div className="px-6 py-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl font-bold mb-6">
            The Challenge: High Latency in eSightEyewear&apos;s Smart Glass
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Initial Latency: ~250ms - A Critical Bottleneck
            </h3>
            <p className="text-gray-600 mb-4">
              The eSightEyewear smart glass, designed to enhance visual acuity for individuals with low vision,
              initially faced a significant performance hurdle: a{" "}
              <span className="text-black font-semibold">camera-to-OLED display latency of approximately 250 milliseconds</span>.
            </p>
            <p className="text-gray-600 mb-4">
              This level of latency presents a{" "}
              <span className="text-black font-semibold">critical user experience bottleneck in a head-mounted display system</span> intended for real-time visual augmentation. For users relying on the device to navigate and interact with their environment, a delay of this magnitude can lead to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Disorientation and motion sickness</li>
              <li>Disconnect between physical movements and visual feedback</li>
              <li>General lack of immersion and usability issues</li>
            </ul>
            <div className="tech-detail p-4 rounded-lg">
              <p className="text-sm text-slate-600">
                <span className="text-black font-semibold">Technical Context:</span> The ~250ms delay meant that the displayed image was a quarter of a second behind the real-world scene, making dynamic activities like walking, reading moving text, or interacting with objects challenging and potentially unsafe.{" "}
                <a
                  href="https://www.engineering.com/esight-technology-offers-life-changing-electronic-vision/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Source]
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Project Goal: Achieve Sub-100ms Latency
            </h3>
            <p className="text-gray-600 mb-4">
              Recognizing the detrimental impact of the ~250ms latency, eSightEyewear set an ambitious project goal: to{" "}
              <span className="text-black font-semibold">reduce the camera-to OLED display latency to below 100 milliseconds within one month</span>.
            </p>
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-red-800 mb-2">Significant Constraint</h4>
              <p className="text-red-700 text-sm">
                <span className="font-semibold">No Camera Sensor Datasheet:</span> The unavailability of the camera sensor&apos;s datasheet meant the engineering team was effectively working with a &quot;black box&quot; for a critical component in the latency chain. This demanded innovative problem-solving and reliance on indirect methods.
              </p>
            </div>
            <p className="text-gray-600 text-sm">
              The <span className="text-black font-semibold">sub-100ms goal is particularly relevant for head-mounted displays</span>, where latency thresholds for performance degradation can be as low as 25ms, 60ms, or 100ms.{" "}
              <a
                href="https://www.researchgate.net/publication/315871027_Reducing_Latency_by_Eliminating_Synchrony"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                [Research]
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EsightChallenge;
