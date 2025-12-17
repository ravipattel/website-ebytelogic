import React from 'react'
import Home from '@/src/views/home'
import JsonLd from '@/src/components/JsonLd';

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "eByteLogic",
  "url": "https://www.ebytelogic.com/",
  "logo": "https://www.ebytelogic.com/logo.png",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "telephone": "+91 90332 23700",
      "areaServed": "IN",
      "availableLanguage": "en"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/ebytelogic",
    "https://twitter.com/ebytelogic",
    "https://www.instagram.com/ebytelogic",
    "https://www.youtube.com/@ebytelogic",
    "https://www.linkedin.com/company/ebytelogic"
  ]
};

const onlineBusiness1 = {
  "@context": "https://schema.org",
  "@type": "OnlineBusiness",
  "name": "eByteLogic",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "913, Silver Trade Center, near VIP Circle, Mota Varachha,",
    "addressLocality": "Surat",
    "addressRegion": "Gujarat",
    "postalCode": "394101"
  },
  "telePhone": "+91 90332 23700"
}

const onlineBusiness2 = {
  "@context": "https://schema.org",
  "@type": "OnlineBusiness",
  "name": "eByteLogic",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1114, Ganesh Glory, Jagatpur Rd, S.G. Highway, Gota,",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "382481"
  },
  "telePhone": "+91 90332 23700"
}

const product = {
  "@context": "http://schema.org",
  "@type": "Product",
  "name": "eByteLogic",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "worstRating": "1",
    "bestRating": "5",
    "reviewCount": "25"
  }
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
    }
  ]
}

export const metadata = {
  title: "eByteLogic | Embedded Software Development Company",
  description: "eByteLogic is the expert in embedded software development, specialising in BSP development and low-latency streaming. Book your embedded software consulting​ Today"
};

const HomePage = () => {
  return (
    <>
      <JsonLd json={org} />
      <JsonLd json={onlineBusiness1} />
      <JsonLd json={onlineBusiness2} />
      <JsonLd json={product} />
      <JsonLd json={breadCrumbList} />
      <Home />
    </>
  )
}

export default HomePage
