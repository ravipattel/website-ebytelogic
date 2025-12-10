import React from 'react'
import IndustryDetail from '@/src/views/industries/[id]'
import { industryMetaData } from '@/content/industryMetaData'

export async function generateMetadata({ params }) {
  const { id } = await params

  let metaTitle = "eByteLogic | Industry Solutions & Expertise"
  let metaDescription = "Explore eByteLogic's industry-specific solutions across embedded software, multimedia, and Linux BSP development for wearables, broadcasting, semiconductors, and more."

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
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `/industries/${id}`,
    },
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