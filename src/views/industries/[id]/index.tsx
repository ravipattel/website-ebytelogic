import React from 'react'
import IndustryInfo from './IndustryInfo'

export const industryMetaData = {
  "media-broadcasting-multimedia": {
    title: "Media Broadcasting & Multimedia Software Solutions | eByteLogic",
    description:
      "eByteLogic helps media product teams achieve low-latency streaming, AV sync, GStreamer/FFmpeg customization, and protocol handling (NDI, SRT, RTP, HLS)."
  },
  "semiconductor-platforms": {
    title: "Linux BSP & Semiconductor Engineering Services | eByteLogic",
    description:
      "From U-Boot and Yocto/Buildroot customization to rapid peripheral bring-up, eByteLogic accelerates BSP development for semiconductor and hardware companies."
  },
  "fire-alarm-panels-control-systems": {
    title: "Embedded Software for Fire Safety Panels | eByteLogic",
    description:
      "Build safer, smarter fire safety systems. eByteLogic delivers embedded software, Linux BSPs, and connectivity solutions for intelligent fire panels and alarms."
  },
  'aerospace-remote-sensing-systems': {
    title: "Aerospace & Remote Sensing Embedded Solutions | eByteLogic",
    description:
      "eByteLogic develops high-performance embedded software for aerospace, drones, and remote sensing — from real-time signal processing to device connectivity."
  },
  "industrial-automation-iot-gateways": {
    title: "Industrial IoT & Automation Software Experts | eByteLogic",
    description:
      "Enable real-time monitoring and cloud-connected automation with eByteLogic. We deliver embedded IoT software, BSPs, and device integration for Industry 4.0."
  },
  "smarter-power-efficient-wearables": {
    title: "Wearable Device Embedded Software Development | eByteLogic",
    description:
      "From health data processing to connectivity and power optimization, eByteLogic engineers wearable software that is secure, efficient, and hardware-ready."
  }
}

const IndustryDetail = ({ industryId }) => {
  return (
    <div>
      <IndustryInfo meta={industryId} />
    </div>
  )
}

export default IndustryDetail
export const runtime = 'edge';