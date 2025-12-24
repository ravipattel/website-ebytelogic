export type IndustryMeta = {
  id: string;
  title: string;
  description: string;
};

export const industryMetaData = {
  "media-broadcasting-multimedia": {
    id: "media-broadcasting-multimedia",
    title: "Media Broadcasting & Multimedia Software Solutions | eByteLogic",
    description:
      "eByteLogic helps media product teams achieve low-latency streaming, AV sync, GStreamer/FFmpeg customization, and protocol handling (NDI, SRT, RTP, HLS)."
  },
  "edge-ai-vision-systems": {
    id: "edge-ai-vision-systems",
    title: "Linux BSP & Semiconductor Engineering Services | eByteLogic",
    description:
      "From U-Boot and Yocto/Buildroot customization to rapid peripheral bring-up, eByteLogic accelerates BSP development for semiconductor and hardware companies."
  },
  "networking-and-telecom-gateways": {
    id: "networking-and-telecom-gateways",
    title: "Embedded Software for Fire Safety Panels | eByteLogic",
    description:
      "Build safer, smarter fire safety systems. eByteLogic delivers embedded software, Linux BSPs, and connectivity solutions for intelligent fire panels and alarms."
  },
  'industrial-automation-iiot': {
    id: "industrial-automation-iiot",
    title: "Aerospace & Remote Sensing Embedded Solutions | eByteLogic",
    description:
      "eByteLogic develops high-performance embedded software for aerospace, drones, and remote sensing — from real-time signal processing to device connectivity."
  },
  "industrial-automation-iot-gateways": {
    id: "industrial-automation-iot-gateways",
    title: "Industrial IoT & Automation Software Experts | eByteLogic",
    description:
      "Enable real-time monitoring and cloud-connected automation with eByteLogic. We deliver embedded IoT software, BSPs, and device integration for Industry 4.0."
  },
  "smart-displays-and-hmis": {
    id: "smart-displays-and-hmis",
    title: "Wearable Device Embedded Software Development | eByteLogic",
    description:
      "From health data processing to connectivity and power optimization, eByteLogic engineers wearable software that is secure, efficient, and hardware-ready."
  }
}

// Helper functions
export function getIndustry(id: string): IndustryMeta | null {
  return industryMetaData[id] || null;
}

export async function getAllIndustries(): Promise<IndustryMeta[]> {
  return Object.values(industryMetaData);
}
