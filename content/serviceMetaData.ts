export type ServiceMeta = {
  id: string;
  title: string;
  description: string;
};

export const serviceMetaData = {
  "multimedia-framework": {
    id: "multimedia-framework",
    title: "Embedded Multimedia Framework Development | Custom AV Solutions",
    description:
      "Expert multimedia framework development services for real-time video. We provide custom multimedia solutions using GStreamer & FFmpeg for embedded systems."
  },
  "embedded-bsp-development": {
    id: "embedded-bsp-development",
    title: "BSP Development for Embedded Systems | Expert BSP Developer",
    description:
      " Get tailored BSP development for embedded systems. As a leading BSP developer, we provide custom Linux, Android, and MCU solutions to accelerate your hardware launch."
  },
  "embedded-application-development": {
    id: "embedded-application-development",
    title: "Embedded Application Development | eByteLogic",
    description:
      "Expert embedded application development for performance and UX. Get full-cycle embedded apps development services Connect with our experts today."
  },
  "multi-platform-qa-test-automation": {
    id: "multi-platform-qa-test-automation",
    title: "Embedded QA & Automation Testing Services | eByteLogic",
    description:
      "Professional embedded software testing and QA automation. We provide specialized embedded system testing to ensure performance, security, and hardware reliability."
  },
}

// Helper functions
export function getService(id: string): ServiceMeta | null {
  return serviceMetaData[id] || null;
}

export async function getAllServices(): Promise<ServiceMeta[]> {
  return Object.values(serviceMetaData);
}
