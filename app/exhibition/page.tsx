import JsonLd from '@/src/components/JsonLd';
import Exhibition from '@/src/views/exhibition'
import React from 'react'

export const metadata = {
  title: "Embedded World 2026: Turn Hardware Demos into Production Products",
  description: `Launching at Nuremberg? Move beyond the "Trade Show Demo." We specialize in Linux BSP stabilization, Yocto cleanup, and secure OTA updates for production-grade hardware.`,
  alternates: { canonical: "/exhibition" },
  openGraph: {
    title: "Embedded World 2026: Turn Hardware Demos into Production Products",
    description: `Launching at Nuremberg? Move beyond the "Trade Show Demo." We specialize in Linux BSP stabilization, Yocto cleanup, and secure OTA updates for production-grade hardware.`,
    url: "https://www.ebytelogic.com/exhibition",
    images: [{ url: "https://www.ebytelogic.com/ogimage/ebyteogimage.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Embedded World 2026: Turn Hardware Demos into Production Products",
    description: `Launching at Nuremberg? Move beyond the "Trade Show Demo." We specialize in Linux BSP stabilization, Yocto cleanup, and secure OTA updates for production-grade hardware.`,
  },
};

const breadCrumbSchema={
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
      "name": "Contact Us",
      "item": "https://www.ebytelogic.com/exhibition"
    }
  ]
}

const ExhibitionPage = () => {
  return (
    <>
     <JsonLd json={breadCrumbSchema} />
      <Exhibition  />
    </>
  )
}

export default ExhibitionPage
