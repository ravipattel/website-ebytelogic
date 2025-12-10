type BlogMeta = {
  title: string;
  description: string;
  id: string;
};

export const blogsMetaData: Record<string, BlogMeta> = {
  "av-lip-sync-in-2025": {
    id: "av-lip-sync-in-2025",
    title: "Why Lip-Sync Still Breaks in 2025",
    description:
      "Understanding why AV sync problems persist in 2025 and how engineering teams can achieve sub-10ms accuracy across modern streaming pipelines.",
  },

  "SRT-vs-RIST-vs-RTMP": {
    id: "SRT-vs-RIST-vs-RTMP",
    title: "Protocol Wars in Live Contribution",
    description:
      "A practical comparison of RTMP, SRT, and RIST for live video transport—latency, reliability, QoS, and real-world use cases for broadcast workflows.",
  },

  "the-future-of-embedded-systems": {
    id: "the-future-of-embedded-systems",
    title: "Why Embedded Systems Are Driving Innovation Across Industries",
    description:
      "How modern embedded systems enable advancements in automotive, medical, robotics, edge AI, and industrial automation—and where the future is heading.",
  },

  "ndi-in-hybrid-ip-sdi-workflows": {
    id: "ndi-in-hybrid-ip-sdi-workflows",
    title: "NDI in Hybrid IP/SDI Workflows: What Product Teams Must Know",
    description:
      "Key considerations for integrating NDI into hybrid SDI/IP pipelines—latency, bandwidth, routing, conversion, and deployment best practices.",
  },

  "buildroot-vs-yocto-for-video-devices": {
    id: "buildroot-vs-yocto-for-video-devices",
    title:
      "Buildroot vs Yocto for Video Devices: A Pragmatic Product Guide",
    description:
      "A hands-on comparison of Buildroot and Yocto for building video appliances—boot time, footprint, BSP control, customization, and maintenance trade-offs.",
  },

  "linux-bsp-techniques-that-work": {
    id: "linux-bsp-techniques-that-work",
    title:
      "Boot to First Frame in 3 Seconds: Linux BSP Techniques That Work",
    description:
      "Proven Linux BSP optimizations to achieve <3-second boot for media devices—kernel tuning, init trimming, parallelization, and graphics bring-up tricks.",
  },

  "cea-608-708-and-line21-dtvcc-conversion": {
    id: "cea-608-708-and-line21-dtvcc-conversion",
    title:
      "Closed Captions Demystified: CEA-608/708 and Line21 ⇄ DTVCC Conversion",
    description:
      "A clear guide to CEA-608/708 captioning, Line21, and DTVCC conversion—formats, transport, metadata, compliance, and modern broadcast requirements.",
  },

  "ptp-and-smpte-st-2110-for-non-broadcasters": {
    id: "ptp-and-smpte-st-2110-for-non-broadcasters",
    title:
      "PTP & SMPTE ST 2110 for Non-Broadcasters: Timing Without Tears",
    description:
      "Understand PTP timing, SMPTE ST 2110, and how precise sync enables scalable IP video systems—even for teams outside traditional broadcast engineering.",
  },

  "fixing-frame-drops-during-protocol-switching": {
    id: "fixing-frame-drops-during-protocol-switching",
    title:
      "Fixing Frame Drops During Protocol Switching (Real-World Postmortem)",
    description:
      "A deep dive into why frame drops occur during protocol switching and how to stabilize pipelines using jitter control, buffering, and clock alignment.",
  },

  "ffmpeg-filters-frame-pacing-lip-sync": {
    id: "ffmpeg-filters-frame-pacing-lip-sync",
    title:
      "FFmpeg Filters for Broadcast-Grade Sync, Frame Pacing, and Lip-Sync",
    description:
      "Learn how FFmpeg filters improve pacing, sync, cadence, and lip-sync accuracy in broadcast workflows using measurable engineering techniques.",
  },

  "measuring-glass-to-glass-latency": {
    id: "measuring-glass-to-glass-latency",
    title:
      "Measuring Glass-to-Glass Latency: Methods, Tools, and Pitfalls",
    description:
      "How to accurately measure camera-to-screen latency, avoid common errors, and benchmark real streaming performance across various pipelines.",
  },

  "edge-encoders-for-rugged-environments": {
    id: "edge-encoders-for-rugged-environments",
    title:
      "Edge Encoders for Rugged Environments: Thermal, Power & Network Design",
    description:
      "Designing reliable encoders for harsh conditions—thermal budgets, power envelopes, ingress protection, and resilient networking for edge deployments.",
  },

  "automated-qa-for-live-video": {
    id: "automated-qa-for-live-video",
    title:
      "Automated QA for Live Video: gst-validate, Tracers & Soak Tests",
    description:
      "How automated QA frameworks detect drift, artifacts, jitter, and sync issues—using gst-validate, tracers, soak testing, and continuous monitoring.",
  },

  "secure-streaming": {
    id: "secure-streaming",
    title:
      "Secure Streaming: Hardening SRT, SRTP, TLS & Key Management",
    description:
      "Security best practices for live streaming—SRT/SRTP hardening, TLS, key rotation, secure handshake flows, and protecting media over untrusted networks.",
  },

  "hardware-accelerated-transcoding-on-jetson-i.MX": {
    id: "hardware-accelerated-transcoding-on-jetson-i.MX",
    title:
      "Hardware-Accelerated Transcoding on Jetson & i.MX: What Actually Matters",
    description:
      "A practical guide to achieving real-time transcoding on Jetson and i.MX SoCs—pipeline tuning, hardware blocks, memory layout, and driver specifics.",
  },
};


export function getBlogMetadata(id: string): BlogMeta | null {
  return blogsMetaData[id] || null;
}

export async function getAllBlogs(): Promise<BlogMeta[]> {
  return Object.values(blogsMetaData);
}

