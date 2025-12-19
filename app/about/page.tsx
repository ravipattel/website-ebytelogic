import React from 'react'
import About from '@/src/views/about'
import JsonLd from '@/src/components/JsonLd'

export const metadata= {
  title: "About eByteLogic | Embedded Software Experts",
  description: "Learn about eByteLogic's expertise in embedded software, multimedia frameworks, and Linux BSP development for cutting-edge technology solutions.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About eByteLogic | Embedded Software Experts",
    description: "Learn about eByteLogic's expertise in embedded software, multimedia frameworks, and Linux BSP development for cutting-edge technology solutions.",
    url: "https://www.ebytelogic.com/about",
    images: [{ url: "https://www.ebytelogic.com/ogimage/ebyteogimage.png" }],
  },
  twitter: { 
    card: "summary_large_image",
    title: "About eByteLogic | Embedded Software Experts",
    description: "Learn about eByteLogic's expertise in embedded software, multimedia frameworks, and Linux BSP development for cutting-edge technology solutions.",
  },
}

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
      "name": "About",
      "item": "https://www.ebytelogic.com/about"
    }
  ]
}

const AboutPage = () => {
  return (
    <div>
      <JsonLd json={breadCrumbList} />
      <About />
    </div>
  )
}

export default AboutPage
