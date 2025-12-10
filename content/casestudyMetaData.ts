export type CaseStudyMeta = {
  id: string;
  title: string;
  description: string;
};

export const caseStudyMetaData: Record<string, CaseStudyMeta> = {
  "reducing-wearable-display-latency": {
    id: "reducing-wearable-display-latency",
    title: "Smart Glass Latency Optimization",
    description:
      "Optimizing wearable smart glass systems by reducing display latency from 250ms to below 100ms using NXP i.MX8MP and dual OLED integration.",
  },

  "bypassing-proprietary-audio-pipeline": {
    id: "bypassing-proprietary-audio-pipeline",
    title: "Android AudioFlinger Bypass",
    description:
      "Achieving precise, low-latency audio playback by bypassing Android AudioFlinger using JNI-level integration on Qualcomm hardware.",
  },

  "broadcast-grade-sdi-encoder-decoder-with-sub100ms-latency": {
    id: "broadcast-grade-sdi-encoder-decoder-with-sub100ms-latency",
    title:
      "Broadcast-Grade SDI Encoder & Decoder with Sub-100ms Latency",
    description:
      "Engineering a real-time SDI encoder/decoder delivering sub-100ms latency with ±10ms lip-sync accuracy and full VANC metadata support.",
  },

  "u-boot-logo-for-IMX8MQ": {
    id: "u-boot-logo-for-IMX8MQ",
    title: "U-Boot Logo for IMX8MQ",
    description:
      "Porting Linux DSI display drivers into U-Boot and enabling fully native splash-screen support on NXP i.MX8MQ platforms.",
  },

  "multi-platform-driver-development-uBoot-customization": {
    id: "multi-platform-driver-development-uBoot-customization",
    title:
      "Multi-Platform Driver Development & U-Boot Customization",
    description:
      "Developing HDMI, audio codec, touchscreen, and modem drivers across NXP, TI, Rockchip, and Qualcomm platforms with secure boot integration.",
  },

  "ndi-protocol-integration-inremote-recorder-player": {
    id: "ndi-protocol-integration-inremote-recorder-player",
    title: "NDI Protocol Integration in Remote Recorder/Player",
    description:
      "Adding low-latency NDI input support into a GStreamer-based recorder/player while maintaining frame-accurate synchronization.",
  },

  "rapid-lcd-touchscreen-bring-up-for-telematics-display": {
    id: "rapid-lcd-touchscreen-bring-up-for-telematics-display",
    title: "Rapid LCD & Touchscreen Bring-Up for Telematics Display",
    description:
      "Achieving full LCD and touchscreen bring-up in under 3 days with a custom OS installer for a showcase demo at Embedded World.",
  },

  "secure-mcu-firmware-upgrade-via-canopen": {
    id: "secure-mcu-firmware-upgrade-via-canopen",
    title: "Secure MCU Firmware Upgrade via CANopen",
    description:
      "Implementing remote, secure firmware upgrades over CANopen for large-scale fire-safety deployments, eliminating on-site servicing.",
  },

  "hdmi-multiview-player": {
    id: "hdmi-multiview-player",
    title: "HDMI Multiview Player",
    description:
      "Building a low-power HDMI multiview player supporting HLS, SRT, and UDP streams with hardware-accelerated decoding.",
  },

  "sub-100ms-latency-in-uav-video-streaming": {
    id: "sub-100ms-latency-in-uav-video-streaming",
    title: "Sub-100ms Latency in UAV Video Streaming",
    description:
      "Achieving <100ms end-to-end UAV streaming latency using NXP i.MX8MP evaluation hardware for next-generation drone systems.",
  },

  "can-to-modbus-bridge": {
    id: "can-to-modbus-bridge",
    title: "CAN-to-Modbus Bridge",
    description:
      "Developing a protocol bridge that enables seamless communication between CAN devices and Modbus controllers for industrial automation.",
  },

  "yocto-migration-for-safety-panel": {
    id: "yocto-migration-for-safety-panel",
    title: "Yocto Migration for Safety Panel",
    description:
      "Upgrading an outdated Yocto build to a modern release while ensuring full peripheral compatibility for mission-critical safety devices.",
  },

  "yocto-buildroot-migration": {
    id: "yocto-buildroot-migration",
    title: "Yocto ↔ Buildroot Migration",
    description:
      "Creating a unified build system enabling seamless migration between Yocto and Buildroot across multiple embedded platforms.",
  },

  "multi-master-i2c-problem-resolution": {
    id: "multi-master-i2c-problem-resolution",
    title: "Multi-Master I2C Problem Resolution",
    description:
      "Solving multi-master I2C conflicts by implementing dummy clock recovery, preventing bus lock-ups in high-volume production devices.",
  },

  "multi-os-bsp-porting-and-boot-time-optimization": {
    id: "multi-os-bsp-porting-and-boot-time-optimization",
    title: "Multi-OS BSP Porting & Boot Time Optimization",
    description:
      "Porting Ubuntu, Debian, Android, and more while reducing boot time to under 10 seconds for a European embedded solutions provider.",
  },

  "unified-yocto-build-environment-for-multi-SoM-product-lines": {
    id: "unified-yocto-build-environment-for-multi-SoM-product-lines",
    title:
      "Unified Yocto Build Environment for Multi-SoM Product Lines",
    description:
      "Developing a single Yocto environment supporting multiple SoMs, reducing redundancy and accelerating firmware rollouts.",
  },

  "low-cost-android-ott-tv-box-development": {
    id: "low-cost-android-ott-tv-box-development",
    title: "Low-Cost Android OTT TV Box Development",
    description:
      "Delivering an Android TV experience on sub-$50 hardware with optimized boot time, media playback, and HAL-level performance tuning.",
  },
};

// Helper functions
export function getCaseStudy(id: string): CaseStudyMeta | null {
  return caseStudyMetaData[id] || null;
}

export async function getAllCaseStudies(): Promise<CaseStudyMeta[]> {
  return Object.values(caseStudyMetaData);
}
