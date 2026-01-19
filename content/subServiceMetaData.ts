export type SubServiceMeta = {
    id: string;
    title: string;
    description: string;
  };
  
  export const subServiceMetaData = {
    "linux-bsp-development": {
      id: "linux-bsp-development",
      title: "Linux BSP Development | eByte Logic",
      description:
        "Do you need professional linux BSP development services. From board bring-up and driver development to long-term CVE monitoring and security hardening."
    }
  }
  
  // Helper functions
  export function getService(id: string): SubServiceMeta | null {
    return subServiceMetaData[id] || null;
  }
  
  export async function getAllServices(): Promise<SubServiceMeta[]> {
    return Object.values(subServiceMetaData);
  }
  