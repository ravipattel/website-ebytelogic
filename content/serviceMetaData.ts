export type ServiceMeta = {
  id: string;
  title: string;
  description: string;
};

export const serviceMetaData = {
  "multimedia-framework": {
    id: "multimedia-framework",
    title: "Embedded Multimedia Framework Development Services",
    description:
      "Need custom multimedia solutions? We offer Multimedia framework development services and tuning, specializing in AV sync and low-latency pipelines."
  },
  "embedded-bsp-development": {
    id: "embedded-bsp-development",
    title: "Expert Embedded Software Development Services | eByteLogic",
    description:
      "Full-cycle embedded software development services for complex hardware. We deliver robust embedded systems software, design, and embedded software solutions."
  },
  "embedded-application-development": {
    id: "embedded-application-development",
    title: "Embedded Application Development | eByteLogic",
    description:
      "Expert embedded application development for performance and UX. Get full-cycle embedded apps development services Connect with our experts today."
  },
  "multi-platform-qa-test-automation": {
    id: "multi-platform-qa-test-automation",
    title: "Multi-platform QA & Test Automation Services | eByteLogic",
    description:
      "Automate testing for embedded devices with eByteLogic. From regression and protocol validation to CI/CD pipelines — we ensure quality, reliability, and faster release cycles."
  },
}

// Helper functions
export function getService(id: string): ServiceMeta | null {
  return serviceMetaData[id] || null;
}

export async function getAllServices(): Promise<ServiceMeta[]> {
  return Object.values(serviceMetaData);
}
