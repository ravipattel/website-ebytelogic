export type ServiceMeta = {
  id: string;
  title: string;
  description: string;
};

export const serviceMetaData = {
  "multimedia-framework": {
    id: "multimedia-framework",
    title: "Multimedia & Streaming Framework Development | eByteLogic",
    description:
      "From GStreamer and FFmpeg customization to NDI, RTP, SRT, and AV sync optimization — eByteLogic delivers low-latency, high-quality streaming solutions for media product teams."
  },
  "embedded-software-development": {
    id: "embedded-software-development",
    title: "Linux BSP Development & Hardware Bring-Up Services | eByteLogic",
    description:
      "Accelerate your product launch with eByteLogic’s expertise in Linux BSP customization, U-Boot, Yocto/Buildroot, and peripheral bring-up. Optimized boot time and seamless hardware integration."
  },
  "embedded-application-development": {
    id: "embedded-application-development",
    title: "Embedded Application Development Services | eByteLogic",
    description:
      "Build reliable, performance-driven embedded apps in C/C++/Qt/Python. eByteLogic engineers deliver custom interfaces, middleware, and device-level solutions tailored to your hardware."
  },
  "av-protocol": {
    id: "av-protocol",
    title: "AV Protocol & Codec Engineering Experts | eByteLogic",
    description:
      "eByteLogic specializes in NDI, RTP, SRT, HLS, RTMP, and RIST protocol handling, codec tuning, and closed captioning (CEA608/708). Ensure flawless playback and broadcast-grade streaming."
  },
  "embedded-software-testing": {
    id: "embedded-software-testing",
    title: "Embedded QA & Test Automation Services | eByteLogic",
    description:
      "Automate testing for embedded devices with eByteLogic. From regression and protocol validation to CI/CD pipelines — we ensure quality, reliability, and faster release cycles."
  },
  "iot-integration-solutions": {
    id: "iot-integration-solutions",
    title: "IoT & Cloud Integration for Embedded Devices | eByteLogic",
    description:
      "Seamlessly connect embedded systems to the cloud. eByteLogic delivers secure IoT integrations, device management, data pipelines, and real-time monitoring solutions."
  }
}

// Helper functions
export function getService(id: string): ServiceMeta | null {
  return serviceMetaData[id] || null;
}

export async function getAllServices(): Promise<ServiceMeta[]> {
  return Object.values(serviceMetaData);
}
