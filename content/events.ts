export type EventStatus = "open" | "closed";

export type EventDetailsKind = "exhibition" | "webinar";

import NABPng from "@/src/assets/images/exhibition/nab/nab-banner.png";
import NABChallengesPng from "@/src/assets/images/exhibition/nab/nab-challenges.png";
import NABYoctoPng from "@/src/assets/images/exhibition/nab/nab-yocto.png";
import EmbeddedPng from "@/src/assets/images/exhibition/embedded.png";
import CtaPng from "@/src/assets/images/exhibition/cta.png";
import TechPng from "@/src/assets/images/exhibition/tech.png";
import PerfectSyncPng from "@/src/assets/images/exhibition/nab/nab-protocol.png";

export const eventData: { upcoming: any; past: any } = {
  upcoming: [
    {
      id: 1,
      slug: "nab-show-2026",
      title: "NAB Show 2026",
      metaTitle: "NAB Show 2026: Engineering Reliable, Low-Latency Video Pipelines",
      metaDescription:
        "As NAB Show 2026 highlights the shift to software-defined media, learn how to build production-ready video pipelines. Contact eByteLogic to discuss your video pipeline.",
      date: "Las Vegas, April 18–22, 2026",
      location: "Las Vegas, USA",
      cta: "View Details",
      status: "open",
      details: {
        kind: "exhibition",
        content: {
          banner: {
            breadcrumb: [
              { label: "Home", href: "/" },
              { label: "Events", href: "/events" },
              { label: "NAB Show 2026", href: "/events/nab-show-2026" },
            ],
            title: "Exploring the future of Media Infrastructure at NAB Show 2026 | April 18–22 | Las Vegas Convention Center",
            backgroundImageUrl: '/images/bg/exhibition/nab.png',
          },
          intro: {
            badge: "NAB Show 2026",
            imageUrl: NABPng,
            titleHtml: `Engineering Reliable, Low-Latency Media Pipelines for Modern Broadcast Systems`,
            descriptionHtml: `As the industry gathers for <a href="https://www.nabshow.com/" target="_blank" class='text-primary'>NAB Show 2026</a> in Las Vegas (April 18–22), the shift is clear. Media infrastructure is becoming software-defined and increasingly complex. We bridge the gap between "it works in a demo" and "it stays stable in production," helping you build video pipelines that perform under real-world pressure. 
            <br/>
            <br/>
            <span class='font-semibold text-[#1a1e26]'>NAB 2026 Trend Watch</span>
            <br/>
            While the industry meets at the <a href='https://www.vegasmeansbusiness.com/meeting-facilities/convention-and-conference-facilities/las-vegas-convention-center/' target='_blank' class='text-primary'>Las Vegas Convention Center</a> this April, we are tracking the real-world performance of the latest IP-based infrastructure and AI analytics tools.  Our goal is to help you implement these innovations without the typical "Day 1" production failures.
            `,
           
            primaryCtaLabel: "Book a Technical Consultation",
            secondaryCtaLabel: "Discuss Your Video Pipeline",
          },
          demoVsProduction: {
            titleHtml: `From Fixed Hardware to <span class="text-[#3078FB]">Software-Defined Pipelines</span>`,
            descriptionHtml: `The media industry is moving away from rigid, hardware-only workflows toward flexible, IP-based infrastructure.<span class="font-semibold text-[#1a1e26]"> While this shift unlocks massive scalability, it introduces a new layer of engineering complexity </span>that requires a systems-level approach to solve.`,
            painPoints: [
              { title: "IP-Based Infrastructure", desc: "Transitioning from traditional SDI to flexible, software-driven video routing." },
              { title: "Real-Time Streaming Pipelines", desc: "Building continuous data flows that handle live ingestion and distribution without bottlenecks." },
              { title: "Multi-Protocol Transport", desc: "Navigating the interplay between NDI, SRT, RTP, and HLS for seamless delivery." },
              { title: "Edge & Cloud Processing", desc: "Moving video analytics and processing closer to the source for ultra-low latency." },
              { title: "AI-Powered Video Analytics", desc: "Integrating machine learning directly into the pipeline for automated metadata and real-time content insights." },
            ],
            imageUrl: NABYoctoPng,
          },
          video: {
            titleHtml: `Solving the <span class="text-[#3078fb]">"Hard Problems"</span> in Video Engineering`,
            description: `At eByteLogic, we don't just build components, we solve the architectural challenges that impact the end-user experience. Our focus is on the deep-tier technical hurdles of modern multimedia.`,
            cards: [
              { title: "Timing & Clock Stability", text: "Precise alignment of audio and video across complex, distributed pipelines to eliminate lip-sync drift." },
              { title: "Latency Optimization", text: "End-to-end redesign of buffers and processing stages to achieve true real-time streaming performance." },
              { title: "Protocol Integration", text: "Ensuring seamless interoperability between NDI, SRT, RTP, and HLS for complex, multi-protocol workflows." },
              { title: "Multimedia Frameworks", text: "Expert-level optimization of <a href='https://www.ebytelogic.com/blogs/ffmpeg-vs-gstreamer-embedded-media-framework' target='_blank' class='text-primary'>GStreamer and FFmpeg</a> for custom, high-performance video processing systems." },
              { title: "From Prototype to Production", text: "Hardening and stabilizing media pipelines to ensure they remain reliable under heavy load and long-running sessions.", imageUrl: PerfectSyncPng },
            ],
          },
          whyChoose: {
            titleHtml: `A Systems-Level Approach to <span class="text-[#3078fb]">Pipeline Debugging</span>`,
            descriptionHtml: `We analyze your media pipeline as a single, holistic organism rather than a collection of isolated parts. This allows us to identify and fix bottlenecks that others often miss.`,
            reasons: [
              { title: "Full Pipeline Analysis", desc: "We look at every stage, from capture to playback, to find hidden latency and prevent buffering issues before they happen." },
              { title: "Root Cause Diagnosis", desc: "We analyze the entire media flow rather than isolated modules to identify why a system is underperforming." },
              { title: "Timing Inconsistency Mitigation", desc: "We fix sync and drift issues across different processing stages to ensure a seamless viewer experience." },
              { title: "Real-World Stress Testing", desc: "Optimizing your software to behave predictably under heavy load and varying network jitter conditions." },
              { title: "Evaluation to Production", desc: "Supporting your team through the entire lifecycle, ensuring a smooth transition from a working lab setup to a stable launch." },
            ],
          },
          offer: {
            badge: "NAB 2026 Exclusive",
            title: "Predictable Performance for High-Stakes Media",
            descriptionHtml: `When your video pipeline is engineered correctly, the technology becomes invisible to the user. <span class="text-[#3078fb] font-semibold">We ensure your product feels premium and behaves reliably, regardless of the conditions.</span>`,
            options: [
              { title: "Seamless User Experience", desc: "Real-time video with stable sync that makes your platform feel professional and responsive." },
              { title: "Stable Session Continuity", desc: "Ensuring that <a href='https://www.ebytelogic.com/industries/media-broadcasting-multimedia' target='_blank' class='text-primary'>AV sync and lip-sync</a> remain perfectly aligned across long-running broadcast sessions without drift." },
              { title: "Predictable Performance Under Load", desc: "Maintaining system stability and consistent latency even when processing power or network bandwidth is pushed to the limit." },
              { title: "Reduced Operational Risk", desc: "Significant reduction in production-level bugs, unexpected system crashes, and \"ghost\" issues in the pipeline." },
              { title: "Reliable Scalability", desc: "A system architecture that maintains its integrity and multi-stream performance as your user base grows." },
            ],
            ctaLabel: "Book a Technical Consultation",
          },
          forYou: {
            title: "Real-World Success in Media Infrastructure",
            leadIn: "From live sports streaming to AI-driven video, we have helped industry leaders stabilize their most critical media assets.",
            criteria: [
              { text: "<span class='font-semibold'>Live Streaming Platforms:</span> We successfully reduced end-to-end latency and eliminated sync drift for global broadcasters.", tag: "LIVE_STREAMING" },
              { text: "<span class='font-semibold'>Broadcast Workflows:</span> Seamlessly integrated NDI and RTP protocols to create high-reliability production environments.", tag: "BROADCAST_WORKFLOWS" },
              { text: "<a href='https://www.ebytelogic.com/industries/edge-ai-vision-systems' class='font-semibold text-primary'>Edge AI Systems:</a> Optimized video processing pipelines to allow for real-time AI inference with zero noticeable lag.", tag: "EDGE_AI" },
            ],
          },
          cta: {
            kicker: "Pipeline_Optimization",
            titleHtml: `Let's Solve Your <span class="text-[#3078fb]">Pipeline Challenges Together</span>`,
            description:
              "Whether you are scaling an existing platform or struggling with a specific latency issue, our engineers are ready to help. Contact <a href='https://www.ebytelogic.com/' class='text-primary'>eByteLogic</a> to discuss your architecture.",
            chips: ["Low Latency", "Stable Sync"],
            buttonLabel: "Book a Technical Consultation",
            imageUrl: NABChallengesPng,
          },
        },
      },
    },
  ],
  past: [
    {
      id: 2,
      slug: "embedded-world-2026",
      title: "Embedded World 2026",
      metaTitle: "Embedded World 2026: Turn Hardware Demos into Production Products",
      metaDescription:
        `Launching at Nuremberg? Move beyond the "Trade Show Demo." We specialize in Linux BSP stabilization, Yocto cleanup, and secure OTA updates for production-grade hardware.`,
      date: "Nuremberg, 2026",
      location: "Nuremberg, Germany",
      cta: "View Details",
      status: "open",
      details: {
        kind: "exhibition",
        content: {
          banner: {
            breadcrumb: [
              { label: "Home", href: "/" },
              { label: "Events", href: "/events" },
              { label: "Embedded World 2026", href: "/events/embedded-world-2026" },
            ],
            title: "The Show is the Start. Production is the Goal.",
            subtitle: "Show the Demo. Ship the Product.",
            backgroundImageUrl: '/images/bg/exhibition/embeddedWorld.jpg',
          },
          intro: {
            badge: "Embedded World 2026",
            titleHtml: `Launching New Hardware? Turn Your <span class="text-[#3078fb]">"Trade Show Demo"</span> into a Production-Ready Product.`,
            descriptionHtml: `If you’re showcasing hardware at Nuremberg, the real challenge starts once the booth is packed up.<span class="font-semibold text-[#1a1e26]"> A demo just needs to work once; a product needs to work forever.</span> We help engineering teams stabilize Linux BSPs, cut boot times to seconds, fix video lag, and harden platforms for the real world.`,
            imageUrl: EmbeddedPng,
            highlights: [
              { text: "Stabilize Linux BSPs" },
              { text: "Cut boot times to seconds" },
              { text: "Fix video lag and latency" },
              { text: "Harden platforms for the real world" },
            ],
            primaryCtaLabel: "Book a 20-Minute Tech Talk",
            secondaryCtaLabel: "Get a Free BSP Health Check",
          },
          demoVsProduction: {
            titleHtml: `Demos Look Great But <span class="text-[#3078FB]">Production Demands Stability.</span>`,
            descriptionHtml: `Trade show builds are designed to impress: they work perfectly in a controlled booth. But <span class="font-semibold text-[#1a1e26]">"Post-Event Reality"</span> usually brings hidden headaches. The gap between a working demo and a reliable product is where delays happen. That is where we step in.`,
            painPoints: [
              { title: "Slow Starts", desc: "Boot times that are fine for a demo but too slow for a user." },
              { title: "Update Risks", desc: 'Over-the-air (OTA) updates that might "brick" a device.' },
              { title: "Software Mess", desc: 'A "quick-fix" Yocto or Buildroot setup that is hard to maintain.' },
              { title: "Glitchy Media", desc: "Video lag or audio sync issues under heavy use." },
            ],
            imageUrl: TechPng,
          },
          video: {
            titleHtml: `Video & <span class="text-[#3078fb]">Streaming Optimization</span>`,
            description: `If your device uses a screen or camera, "good enough" isn't enough for your customers.`,
            cards: [
              { title: "Lag-Free Streaming", text: "We tune your software to remove delays in video feeds." },
              { title: "Perfect Sync", text: "We ensure audio and video stay perfectly timed (Lip-Sync)." },
              { title: "Customized Media Tools", text: "Expert tuning for GStreamer and FFMPEG to handle heavy workloads." },
              { title: "Broadcasting Standards", text: "We make sure your video meets professional industry rules." },
            ],
          },
          whyChoose: {
            titleHtml: `Why Teams Choose <span class="text-[#3078fb]">eByteLogic</span>`,
            reasons: [
              { stat: "30+", title: "Proven Record", desc: "Successful board bring-ups for major chip brands." },
              { stat: "4-6 wks", title: "Speed", desc: "We typically reduce development cycles by 4 to 6 weeks." },
              { stat: "Crash-Proof", title: "Stability First", desc: `We specialize in "production hardening"—making sure your device doesn't crash in the field.` },
              { stat: "Clean", title: "Long-Term Focus", desc: "We write code that your team can actually manage after we leave." },
            ],
          },
          offer: {
            badge: "Exhibition Exclusive",
            title: "Embedded World 2026 Special Offer",
            descriptionHtml: `If you are showing off hardware in Nuremberg, take advantage of our Free Technical Review. <span class="text-[#3078fb] font-semibold">Choose one:</span>`,
            options: [
              { title: "20-Min Architecture Check", desc: "Is your software structure ready for the real world?" },
              { title: "Boot-Time Audit", desc: "Can we make your device start faster?" },
              { title: "Media Performance Check", desc: "Is your video pipeline optimized for low latency?" },
            ],
            ctaLabel: "Schedule My Technical Review",
          },
          forYou: {
            title: "Is This for You?",
            leadIn: "This conversation is for you if you are:",
            criteria: [
              { text: "A Chip Maker or partner launching new silicon.", tag: "SILICON_PARTNER" },
              { text: "An Industrial OEM building smart factory tools.", tag: "INDUSTRIAL_SYSTEMS" },
              { text: "An AI Hardware team moving to the edge.", tag: "AI_DEPLOYMENT" },
              { text: "A Multimedia developer building cameras or screens.", tag: "MEDIA_PIPELINE" },
              { text: "Planning to ship a product in the next 3–6 months.", tag: "PRODUCTION_TRACK" },
            ],
          },
          cta: {
            kicker: "Project_Handover",
            titleHtml: `The Demo is Only <span class="text-[#3078fb]">the Beginning.</span>`,
            description:
              "After the show, your team moves from Showcase Mode to Execution Mode. If you need to clean up your code, speed up your boot time, or secure your system, let’s talk.",
            chips: ["Boot Speed", "System Security"],
            buttonLabel: "Book Your 20-Minute Technical Exchange",
            imageUrl: CtaPng,
          },
        },
      },
    },
  ],
};


// Helper functions
export function getEventBySlug(slug: string) {
  return [...eventData.upcoming, ...eventData.past].find(
    (e) => e.slug === slug
  );
}

export async function getAllEvents(): Promise<any[]> {
  return [...eventData.upcoming, ...eventData.past];
}