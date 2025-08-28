import React from 'react'
import Industries, { industryMetaData } from '@/src/views/industries'

export async function generateMetadata({ params }) {
  const { id } = params

  let metaTitle = "eByteLogic | Embedded Software, Multimedia & Linux BSP Experts"
  let metaDescription = "Partner with eByteLogic for advanced embedded software solutions in multimedia streaming, AV sync, and Linux BSP bring-up. Trusted by product companies worldwide to deliver low-latency, optimized, and reliable engineering."

  if (id === 1) {
    metaTitle = industryMetaData["media-broadcasting"].title
    metaDescription = industryMetaData["media-broadcasting"].description
  } else if (id === 2) {
    metaTitle = industryMetaData["semiconductor-bsp"].title
    metaDescription = industryMetaData["semiconductor-bsp"].description
  } else if (id === 3) {
    metaTitle = industryMetaData["fire-safety-panels"].title
    metaDescription = industryMetaData["fire-safety-panels"].description
  } else if (id === 4) {
    metaTitle = industryMetaData["aerospace-remote-sensing"].title
    metaDescription = industryMetaData["aerospace-remote-sensing"].description
  } else if (id === 5) {
    metaTitle = industryMetaData["industrial-iot"].title
    metaDescription = industryMetaData["industrial-iot"].description
  } else if (id === 6) {
    metaTitle = industryMetaData["wearables"].title
    metaDescription = industryMetaData["wearables"].description
  }

  return {
    title: metaTitle,
    description: metaDescription,
  }
}

const IndustriesPages = ({ params }) => {
  const { id } = params

  return <Industries industryId={id} />
}

export default IndustriesPages

export const runtime = 'edge'
