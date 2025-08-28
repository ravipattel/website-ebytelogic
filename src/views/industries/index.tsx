import React from 'react'
import IndustryHero from './IndustryHero'
import IndustryCards from './IndustryCards'

export const industryMetaData = {
  "media-broadcasting": {
    title: "Media Broadcasting & Multimedia Software Solutions | eByteLogic",
    description:
      "eByteLogic helps media product teams achieve low-latency streaming, AV sync, GStreamer/FFmpeg customization, and protocol handling (NDI, SRT, RTP, HLS)."
  },
  "semiconductor-bsp": {
    title: "Linux BSP & Semiconductor Engineering Services | eByteLogic",
    description:
      "From U-Boot and Yocto/Buildroot customization to rapid peripheral bring-up, eByteLogic accelerates BSP development for semiconductor and hardware companies."
  },
  "fire-safety-panels": {
    title: "Embedded Software for Fire Safety Panels | eByteLogic",
    description:
      "Build safer, smarter fire safety systems. eByteLogic delivers embedded software, Linux BSPs, and connectivity solutions for intelligent fire panels and alarms."
  },
  "aerospace-remote-sensing": {
    title: "Aerospace & Remote Sensing Embedded Solutions | eByteLogic",
    description:
      "eByteLogic develops high-performance embedded software for aerospace, drones, and remote sensing — from real-time signal processing to device connectivity."
  },
  "industrial-iot": {
    title: "Industrial IoT & Automation Software Experts | eByteLogic",
    description:
      "Enable real-time monitoring and cloud-connected automation with eByteLogic. We deliver embedded IoT software, BSPs, and device integration for Industry 4.0."
  },
  "wearables": {
    title: "Wearable Device Embedded Software Development | eByteLogic",
    description:
      "From health data processing to connectivity and power optimization, eByteLogic engineers wearable software that is secure, efficient, and hardware-ready."
  }
}

const Industries = ({industryId}) => {
    return (
        <section>
            <IndustryHero />
            <IndustryCards meta = {industryId}/>
        </section>
    )
}

export default Industries
