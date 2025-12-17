import React from 'react'
import Service from '@/src/views/services'
import JsonLd from '@/src/components/JsonLd';

export const metadata = {
  title: "Embedded Software & Multimedia Engineering Services | eByteLogic",
  description: `Explore eByteLogic’s end-to-end services: multimedia frameworks, Linux BSPs, 
  embedded app development, codec engineering, QA automation, and IoT integration. 
  Scalable solutions tailored for product innovation.`,
  openGraph: {
    title: "Embedded Software & Multimedia Engineering Services | eByteLogic",
    description: `Explore eByteLogic’s end-to-end services: multimedia frameworks, Linux BSPs, 
    embedded app development, codec engineering, QA automation, and IoT integration. 
    Scalable solutions tailored for product innovation.`,
    url: "https://www.ebytelogic.com/services",
    images: [{ url: "https://www.ebytelogic.com/ogimage/ebyteogimage.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Embedded Software & Multimedia Engineering Services | eByteLogic",
    description: `Explore eByteLogic’s end-to-end services: multimedia frameworks, Linux BSPs, 
    embedded app development, codec engineering, QA automation, and IoT integration. 
    Scalable solutions tailored for product innovation.`,
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
      "name": "Services",
      "item": "https://www.ebytelogic.com/services"
    }
  ]
}

const ServicePage = () => {
  return (
    <>
    <JsonLd json={breadCrumbList}/>
    <Service />
    </>
  )
}

export default ServicePage
