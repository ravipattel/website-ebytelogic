import React from 'react'
import IndustryDetail, { industryMetaData } from '@/src/views/industries/[id]'
export async function generateMetadata({ params }) {
  const { id } = params

  let metaTitle = "eByteLogic | Embedded Software, Multimedia & Linux BSP Experts"
  let metaDescription = "Partner with eByteLogic for advanced embedded software solutions in multimedia streaming, AV sync, and Linux BSP bring-up. Trusted by product companies worldwide to deliver low-latency, optimized, and reliable engineering."

if (id === 'smarter-power-efficient-wearables') {
  metaTitle = industryMetaData["smarter-power-efficient-wearables"].title;
  metaDescription = industryMetaData["smarter-power-efficient-wearables"].description;
} else if (id === 'media-broadcasting-multimedia') {
  metaTitle = industryMetaData["media-broadcasting-multimedia"].title;
  metaDescription = industryMetaData["media-broadcasting-multimedia"].description;
} else if (id === 'semiconductor-platforms') {
  metaTitle = industryMetaData["semiconductor-platforms"].title;
  metaDescription = industryMetaData["semiconductor-platforms"].description;
} else if (id === 'fire-alarm-panels-control-systems') {
  metaTitle = industryMetaData["fire-alarm-panels-control-systems"].title;
  metaDescription = industryMetaData["fire-alarm-panels-control-systems"].description;
} else if (id === 'aerospace-remote-sensing-systems') {
  metaTitle = industryMetaData["aerospace-remote-sensing-systems"].title;
  metaDescription = industryMetaData["aerospace-remote-sensing-systems"].description;
} else if (id === 'industrial-automation-iot-gateways') {
  metaTitle = industryMetaData["industrial-automation-iot-gateways"].title;
  metaDescription = industryMetaData["industrial-automation-iot-gateways"].description;
}

  return {
    title: metaTitle,
    description: metaDescription,
  }
}

const IndustryDetailPage = ({params}) => {
    const { id } = params
  return (
    <>
      <IndustryDetail industryId={id}/>
    </>
  )
}

export default IndustryDetailPage
export const runtime = 'edge';