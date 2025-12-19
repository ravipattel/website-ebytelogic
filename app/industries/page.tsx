import React from 'react'
import Industries from '@/src/views/industries'
import JsonLd from '@/src/components/JsonLd';

export const metadata = {
  title: "Industries | eByteLogic Embedded Systems Solutions",
  description: "Explore eByteLogic's industry-specific expertise in embedded software, multimedia, and Linux BSP development across wearables, broadcasting, semiconductors, and more.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries | eByteLogic Embedded Systems Solutions",
    description: "Explore eByteLogic's industry-specific expertise in embedded software, multimedia, and Linux BSP development across wearables, broadcasting, semiconductors, and more.",
    url: "https://www.ebytelogic.com/industries",
    images: [{ url: "https://www.ebytelogic.com/ogimage/ebyteogimage.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries | eByteLogic Embedded Systems Solutions",
    description: "Explore eByteLogic's industry-specific expertise in embedded software, multimedia, and Linux BSP development across wearables, broadcasting, semiconductors, and more.",
  },
};

const breadCrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.ebytelogic.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Industries",
      "item": "https://www.ebytelogic.com/industries"
    }
  ]
}

const IndustriesPages = () => {
  return (
    <>
      <JsonLd json={breadCrumbList} />
      <Industries />
    </>
  )
}

export default IndustriesPages

export const runtime = 'edge'
