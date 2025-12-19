import React from 'react'
import CaseStudy from '@/src/views/case-study'
import JsonLd from '@/src/components/JsonLd';

export const metadata = {
  title: "eByteLogic | Case Studies",
  description: "Explore real-world implementations and technical achievements from eByteLogic's embedded software and multimedia solutions.",
  alternates: { canonical: "/case-study" },
  openGraph: {
    title: "eByteLogic | Case Studies",
    description: "Explore real-world implementations and technical achievements from eByteLogic's embedded software and multimedia solutions.",
    url: "https://www.ebytelogic.com/case-study",
    images: [{ url: "https://www.ebytelogic.com/ogimage/ebyteogimage.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "eByteLogic | Case Studies",
    description: "Explore real-world implementations and technical achievements from eByteLogic's embedded software and multimedia solutions.",
  }
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
      "name": "Case Studies",
      "item": "https://www.ebytelogic.com/case-study"
    }
  ]
}

const CaseStudyPage = () => {
  return (
    <>
      <JsonLd json={breadCrumbList} />
      <CaseStudy />
    </>
  )
}

export default CaseStudyPage
