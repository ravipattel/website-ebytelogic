import JsonLd from '@/src/components/JsonLd';
import Faqs from '@/src/views/faqs'
import React from 'react'

export const metadata = {
  title: "FAQs | eByteLogic Embedded Systems & Video Engineering",
  description: "Frequently asked questions about eByteLogic's embedded software, multimedia solutions, and consulting services."
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
      "name": "FAQ",
      "item": "https://www.ebytelogic.com/faqs"
    }
  ]
}

const FaqsPage = () => {
  return (
    <div>
      <JsonLd json={breadCrumbList} />
      <Faqs />
    </div>
  )
}

export default FaqsPage
